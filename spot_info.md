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

Data correct as of 2025-06-27 01:57:48.767154, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1729 | >20%                    |                 5 |              0.03458 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1796 | >20%                    |                 2 |              0.0898  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1838 | <5%                     |                 2 |              0.0919  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.1954 | >20%                    |                 5 |              0.03908 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1957 | 15-20%                  |                 2 |              0.09785 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1964 | 15-20%                  |                 5 |              0.03928 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2066 | >20%                    |                 2 |              0.1033  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2079 | 10-15%                  |                10 |              0.02079 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2093 | >20%                    |                 5 |              0.04186 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2161 | >20%                    |                 2 |              0.10805 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2283 | 15-20%                  |                 2 |              0.11415 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2386 | 15-20%                  |                 2 |              0.1193  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2492 | 15-20%                  |                10 |              0.02492 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2562 | 15-20%                  |                 2 |              0.1281  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2566 | >20%                    |                10 |              0.02566 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2569 | >20%                    |                 2 |              0.12845 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2647 | >20%                    |                 2 |              0.13235 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2662 | >20%                    |                 2 |              0.1331  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2686 | 5-10%                   |                 2 |              0.1343  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2703 | 5-10%                   |                10 |              0.02703 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2755 | 15-20%                  |                 5 |              0.0551  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2777 | <5%                     |                 5 |              0.05554 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2895 | >20%                    |                 2 |              0.14475 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2922 | >20%                    |                 5 |              0.05844 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2993 | >20%                    |                 2 |              0.14965 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | >20%                    |                 2 |              0.15025 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3013 | <5%                     |                 2 |              0.15065 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3092 | >20%                    |                 2 |              0.1546  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3093 | >20%                    |                10 |              0.03093 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3099 | >20%                    |                 2 |              0.15495 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3109 | 15-20%                  |                 5 |              0.06218 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3136 | >20%                    |                 2 |              0.1568  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3197 | >20%                    |                 2 |              0.15985 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.326  | >20%                    |                 2 |              0.163   |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3369 | 10-15%                  |                 2 |              0.16845 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3397 | <5%                     |                 2 |              0.16985 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3518 | 10-15%                  |                 2 |              0.1759  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3528 | 10-15%                  |                 2 |              0.1764  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3633 | 5-10%                   |                 2 |              0.18165 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.369  | >20%                    |                 2 |              0.1845  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3763 | >20%                    |                 5 |              0.07526 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.387  | >20%                    |                 2 |              0.1935  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.389  | >20%                    |                 5 |              0.0778  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3983 | 15-20%                  |                10 |              0.03983 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4049 | >20%                    |                 5 |              0.08098 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.407  | 10-15%                  |                 5 |              0.0814  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4074 | >20%                    |                 5 |              0.08148 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.412  | >20%                    |                 5 |              0.0824  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4224 | >20%                    |                 5 |              0.08448 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4246 | 10-15%                  |                 2 |              0.2123  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4255 | <5%                     |                 2 |              0.21275 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.426  | >20%                    |                 2 |              0.213   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4363 | >20%                    |                 2 |              0.21815 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4396 | >20%                    |                 2 |              0.2198  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4525 | 15-20%                  |                 5 |              0.0905  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4526 | >20%                    |                 2 |              0.2263  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4545 | 10-15%                  |                 5 |              0.0909  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.456  | >20%                    |                 2 |              0.228   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4568 | 5-10%                   |                 2 |              0.2284  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4591 | >20%                    |                 5 |              0.09182 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4615 | >20%                    |                 5 |              0.0923  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4645 | 15-20%                  |                 2 |              0.23225 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.468  | 15-20%                  |                 5 |              0.0936  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4684 | >20%                    |                 2 |              0.2342  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4757 | <5%                     |                 5 |              0.09514 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4759 | >20%                    |                 2 |              0.23795 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4776 | >20%                    |                 5 |              0.09552 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4782 | >20%                    |                 2 |              0.2391  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.479  | >20%                    |                 5 |              0.0958  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4798 | >20%                    |                 2 |              0.2399  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4804 | <5%                     |                10 |              0.04804 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4807 | 10-15%                  |                 5 |              0.09614 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4834 | >20%                    |                 2 |              0.2417  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4834 | 5-10%                   |                 2 |              0.2417  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4867 | <5%                     |                 5 |              0.09734 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5113 | 5-10%                   |                 5 |              0.10226 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.514  | >20%                    |                10 |              0.0514  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.515  | >20%                    |                 5 |              0.103   |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5172 | 10-15%                  |                 2 |              0.2586  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5181 | >20%                    |                 5 |              0.10362 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.52   | >20%                    |                 2 |              0.26    |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5232 | >20%                    |                 2 |              0.2616  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5252 | 15-20%                  |                 2 |              0.2626  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5378 | <5%                     |                 5 |              0.10756 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5501 | 10-15%                  |                 5 |              0.11002 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5524 | >20%                    |                 5 |              0.11048 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5533 | 15-20%                  |                 2 |              0.27665 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.561  | 10-15%                  |                10 |              0.0561  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5714 | >20%                    |                 5 |              0.11428 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5751 | >20%                    |                10 |              0.05751 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5768 | >20%                    |                 2 |              0.2884  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5837 | >20%                    |                10 |              0.05837 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5842 | <5%                     |                 5 |              0.11684 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5894 | >20%                    |                 5 |              0.11788 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5913 | >20%                    |                 5 |              0.11826 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5928 | >20%                    |                 5 |              0.11856 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.594  | >20%                    |                10 |              0.0594  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5977 | 10-15%                  |                 5 |              0.11954 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6008 | >20%                    |                 5 |              0.12016 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6028 | <5%                     |                 2 |              0.3014  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6072 | >20%                    |                 5 |              0.12144 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6103 | >20%                    |                 5 |              0.12206 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6142 | >20%                    |                 2 |              0.3071  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6268 | >20%                    |                 5 |              0.12536 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6303 | 5-10%                   |                 2 |              0.31515 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6334 | >20%                    |                 2 |              0.3167  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6379 | >20%                    |                 5 |              0.12758 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6496 | >20%                    |                 5 |              0.12992 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.662  | <5%                     |                 5 |              0.1324  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6694 | >20%                    |                10 |              0.06694 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6746 | 15-20%                  |                10 |              0.06746 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6775 | >20%                    |                 5 |              0.1355  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6804 | <5%                     |                 5 |              0.13608 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6805 | <5%                     |                 5 |              0.1361  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6821 | >20%                    |                 5 |              0.13642 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6838 | >20%                    |                 2 |              0.3419  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.685  | 10-15%                  |                 2 |              0.3425  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6863 | 10-15%                  |                 5 |              0.13726 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7036 | >20%                    |                10 |              0.07036 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7104 | >20%                    |                10 |              0.07104 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7119 | <5%                     |                 5 |              0.14238 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7127 | >20%                    |                10 |              0.07127 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7158 | >20%                    |                10 |              0.07158 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7224 | >20%                    |                 5 |              0.14448 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7249 | 10-15%                  |                 5 |              0.14498 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7324 | <5%                     |                10 |              0.07324 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7436 | 15-20%                  |                10 |              0.07436 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7463 | 15-20%                  |                10 |              0.07463 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7532 | >20%                    |                10 |              0.07532 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7575 | >20%                    |                10 |              0.07575 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7595 | >20%                    |                10 |              0.07595 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.765  | 10-15%                  |                10 |              0.0765  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7662 | >20%                    |                 5 |              0.15324 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7818 | >20%                    |                10 |              0.07818 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7866 | >20%                    |                10 |              0.07866 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.787  | 5-10%                   |                 5 |              0.1574  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.793  | >20%                    |                 5 |              0.1586  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7958 | 15-20%                  |                10 |              0.07958 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.799  | >20%                    |                10 |              0.0799  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8053 | <5%                     |                10 |              0.08053 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8168 | >20%                    |                10 |              0.08168 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8333 | <5%                     |                10 |              0.08333 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8518 | >20%                    |                10 |              0.08518 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8532 | 15-20%                  |                10 |              0.08532 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8721 | <5%                     |                10 |              0.08721 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8723 | >20%                    |                10 |              0.08723 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8794 | >20%                    |                10 |              0.08794 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8938 | >20%                    |                10 |              0.08938 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9047 | >20%                    |                10 |              0.09047 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.911  | 15-20%                  |                10 |              0.0911  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.916  | >20%                    |                10 |              0.0916  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9244 | >20%                    |                10 |              0.09244 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9549 | >20%                    |                10 |              0.09549 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9707 | >20%                    |                10 |              0.09707 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9935 | >20%                    |                 2 |              0.49675 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0012 | >20%                    |                10 |              0.10012 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0028 | >20%                    |                10 |              0.10028 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0063 | >20%                    |                 5 |              0.20126 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0104 | >20%                    |                10 |              0.10104 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0198 | <5%                     |                10 |              0.10198 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0226 | >20%                    |                 2 |              0.5113  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.052  | 15-20%                  |                10 |              0.1052  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0657 | 15-20%                  |                10 |              0.10657 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0722 | 10-15%                  |                10 |              0.10722 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0803 | <5%                     |                 2 |              0.54015 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0943 | >20%                    |                 2 |              0.54715 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0988 | >20%                    |                10 |              0.10988 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1116 | 15-20%                  |                10 |              0.11116 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1944 | 10-15%                  |                10 |              0.11944 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2159 | <5%                     |                 5 |              0.24318 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2208 | >20%                    |                10 |              0.12208 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2643 | >20%                    |                10 |              0.12643 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2829 | >20%                    |                 5 |              0.25658 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3221 | >20%                    |                 5 |              0.26442 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4139 | >20%                    |                 5 |              0.28278 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4405 | <5%                     |                 5 |              0.2881  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4892 | >20%                    |                 2 |              0.7446  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5181 | 10-15%                  |                10 |              0.15181 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8477 | <5%                     |                10 |              0.18477 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.9056 | <5%                     |                 2 |              0.9528  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.9565 | >20%                    |                10 |              0.19565 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0991 | <5%                     |                10 |              0.20991 |