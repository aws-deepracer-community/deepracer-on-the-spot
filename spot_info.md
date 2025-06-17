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

Data correct as of 2025-06-17 01:56:56.029159, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1139 | >20%                    |                 2 |              0.05695 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1721 | >20%                    |                 5 |              0.03442 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1723 | >20%                    |                 5 |              0.03446 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 15-20%                  |                 5 |              0.03708 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1862 | 5-10%                   |                 2 |              0.0931  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1977 | 15-20%                  |                 2 |              0.09885 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2153 | >20%                    |                 5 |              0.04306 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2157 | >20%                    |                 2 |              0.10785 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2193 | >20%                    |                 2 |              0.10965 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2227 | >20%                    |                 2 |              0.11135 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2299 | 15-20%                  |                 2 |              0.11495 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2332 | 15-20%                  |                10 |              0.02332 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2428 | 15-20%                  |                 2 |              0.1214  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.249  | <5%                     |                 2 |              0.1245  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2558 | >20%                    |                10 |              0.02558 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2582 | 10-15%                  |                10 |              0.02582 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2679 | >20%                    |                 2 |              0.13395 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.268  | >20%                    |                 2 |              0.134   |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2744 | 15-20%                  |                 5 |              0.05488 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2765 | 5-10%                   |                10 |              0.02765 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2824 | >20%                    |                 2 |              0.1412  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2828 | 15-20%                  |                 2 |              0.1414  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2851 | <5%                     |                 2 |              0.14255 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2876 | >20%                    |                 5 |              0.05752 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2891 | >20%                    |                 2 |              0.14455 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.297  | >20%                    |                 2 |              0.1485  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3031 | >20%                    |                 2 |              0.15155 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3101 | >20%                    |                 2 |              0.15505 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3114 | >20%                    |                 5 |              0.06228 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3127 | >20%                    |                 2 |              0.15635 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3164 | 15-20%                  |                 5 |              0.06328 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.318  | >20%                    |                 2 |              0.159   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3198 | >20%                    |                 5 |              0.06396 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3206 | >20%                    |                 2 |              0.1603  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3378 | 10-15%                  |                 2 |              0.1689  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3386 | <5%                     |                 2 |              0.1693  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3433 | 10-15%                  |                 2 |              0.17165 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3441 | 5-10%                   |                 2 |              0.17205 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3586 | >20%                    |                10 |              0.03586 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3634 | 10-15%                  |                 2 |              0.1817  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3831 | >20%                    |                 5 |              0.07662 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3839 | 10-15%                  |                 2 |              0.19195 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3857 | 10-15%                  |                 5 |              0.07714 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3867 | >20%                    |                 2 |              0.19335 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3909 | <5%                     |                 5 |              0.07818 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3911 | >20%                    |                 2 |              0.19555 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3948 | >20%                    |                 2 |              0.1974  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4004 | 15-20%                  |                10 |              0.04004 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4061 | >20%                    |                 2 |              0.20305 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4167 | >20%                    |                 5 |              0.08334 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4186 | >20%                    |                10 |              0.04186 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4191 | >20%                    |                 5 |              0.08382 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4226 | >20%                    |                 5 |              0.08452 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4228 | 10-15%                  |                 5 |              0.08456 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4247 | <5%                     |                 2 |              0.21235 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4286 | >20%                    |                10 |              0.04286 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.429  | >20%                    |                 2 |              0.2145  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4303 | 5-10%                   |                 2 |              0.21515 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4309 | 15-20%                  |                 2 |              0.21545 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4358 | >20%                    |                 5 |              0.08716 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4442 | >20%                    |                 5 |              0.08884 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4493 | 15-20%                  |                 5 |              0.08986 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.45   | <5%                     |                 5 |              0.09    |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4509 | >20%                    |                 2 |              0.22545 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4536 | >20%                    |                 2 |              0.2268  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4557 | >20%                    |                10 |              0.04557 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4567 | >20%                    |                 5 |              0.09134 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4576 | >20%                    |                 5 |              0.09152 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4626 | <5%                     |                 5 |              0.09252 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4742 | >20%                    |                 5 |              0.09484 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4799 | >20%                    |                 2 |              0.23995 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4857 | >20%                    |                 2 |              0.24285 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4866 | >20%                    |                 2 |              0.2433  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4868 | >20%                    |                 5 |              0.09736 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4876 | <5%                     |                 5 |              0.09752 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4879 | >20%                    |                 2 |              0.24395 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4908 | >20%                    |                 5 |              0.09816 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4946 | 15-20%                  |                 2 |              0.2473  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4965 | 10-15%                  |                 5 |              0.0993  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4975 | 10-15%                  |                 2 |              0.24875 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5078 | 10-15%                  |                 5 |              0.10156 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5092 | 15-20%                  |                 5 |              0.10184 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5096 | 5-10%                   |                 5 |              0.10192 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.511  | 5-10%                   |                 2 |              0.2555  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5131 | >20%                    |                10 |              0.05131 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.514  | >20%                    |                 2 |              0.257   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5321 | <5%                     |                 5 |              0.10642 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5347 | <5%                     |                 5 |              0.10694 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5428 | >20%                    |                 2 |              0.2714  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5449 | 15-20%                  |                 2 |              0.27245 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5449 | >20%                    |                 2 |              0.27245 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5512 | >20%                    |                 5 |              0.11024 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5574 | >20%                    |                 5 |              0.11148 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5641 | 10-15%                  |                10 |              0.05641 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5645 | >20%                    |                10 |              0.05645 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5661 | 10-15%                  |                 5 |              0.11322 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5805 | >20%                    |                 5 |              0.1161  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5834 | <5%                     |                 5 |              0.11668 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5941 | >20%                    |                 5 |              0.11882 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5975 | 5-10%                   |                 2 |              0.29875 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5999 | >20%                    |                 2 |              0.29995 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6061 | <5%                     |                 2 |              0.30305 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6086 | >20%                    |                 5 |              0.12172 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6157 | >20%                    |                 2 |              0.30785 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6322 | >20%                    |                 5 |              0.12644 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6365 | >20%                    |                10 |              0.06365 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6379 | >20%                    |                 2 |              0.31895 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6382 | >20%                    |                 5 |              0.12764 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6388 | >20%                    |                 5 |              0.12776 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.641  | >20%                    |                 5 |              0.1282  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6463 | >20%                    |                 5 |              0.12926 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6491 | >20%                    |                 5 |              0.12982 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6505 | <5%                     |                 5 |              0.1301  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6583 | >20%                    |                 2 |              0.32915 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6657 | >20%                    |                 5 |              0.13314 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6759 | 15-20%                  |                10 |              0.06759 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6812 | 10-15%                  |                 5 |              0.13624 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6823 | <5%                     |                10 |              0.06823 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.686  | 10-15%                  |                 5 |              0.1372  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6895 | >20%                    |                10 |              0.06895 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6913 | <5%                     |                10 |              0.06913 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6955 | 15-20%                  |                10 |              0.06955 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7102 | 10-15%                  |                 2 |              0.3551  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7113 | >20%                    |                10 |              0.07113 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7132 | 15-20%                  |                10 |              0.07132 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7147 | <5%                     |                 5 |              0.14294 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7214 | >20%                    |                10 |              0.07214 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7258 | >20%                    |                10 |              0.07258 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7397 | 15-20%                  |                10 |              0.07397 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7426 | >20%                    |                10 |              0.07426 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7452 | >20%                    |                 5 |              0.14904 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7586 | <5%                     |                10 |              0.07586 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7642 | >20%                    |                10 |              0.07642 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7736 | >20%                    |                10 |              0.07736 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7854 | >20%                    |                 5 |              0.15708 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7882 | 10-15%                  |                10 |              0.07882 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7889 | >20%                    |                10 |              0.07889 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7928 | 5-10%                   |                 5 |              0.15856 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7965 | 15-20%                  |                10 |              0.07965 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8    | >20%                    |                10 |              0.08    |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8034 | <5%                     |                10 |              0.08034 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8036 | >20%                    |                10 |              0.08036 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8217 | >20%                    |                10 |              0.08217 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8243 | >20%                    |                 5 |              0.16486 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8531 | >20%                    |                 2 |              0.42655 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.863  | >20%                    |                10 |              0.0863  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8758 | 15-20%                  |                10 |              0.08758 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8962 | <5%                     |                10 |              0.08962 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9061 | >20%                    |                10 |              0.09061 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9273 | >20%                    |                10 |              0.09273 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9483 | >20%                    |                10 |              0.09483 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.977  | >20%                    |                10 |              0.0977  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9776 | >20%                    |                 2 |              0.4888  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.978  | >20%                    |                 5 |              0.1956  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9789 | >20%                    |                10 |              0.09789 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9861 | >20%                    |                10 |              0.09861 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9886 | >20%                    |                10 |              0.09886 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0072 | >20%                    |                10 |              0.10072 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0172 | >20%                    |                10 |              0.10172 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0189 | >20%                    |                10 |              0.10189 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0398 | 10-15%                  |                10 |              0.10398 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0613 | <5%                     |                 2 |              0.53065 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0653 | 15-20%                  |                10 |              0.10653 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0692 | >20%                    |                10 |              0.10692 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0837 | <5%                     |                10 |              0.10837 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1013 | 15-20%                  |                10 |              0.11013 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1026 | >20%                    |                 2 |              0.5513  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1129 | 15-20%                  |                10 |              0.11129 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1229 | >20%                    |                 5 |              0.22458 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1571 | <5%                     |                 5 |              0.23142 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.2118 | <5%                     |                 2 |              0.6059  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2201 | 10-15%                  |                10 |              0.12201 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2791 | >20%                    |                10 |              0.12791 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3056 | >20%                    |                10 |              0.13056 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3075 | >20%                    |                 5 |              0.2615  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3142 | >20%                    |                10 |              0.13142 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4081 | <5%                     |                 5 |              0.28162 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5257 | >20%                    |                 5 |              0.30514 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6394 | 10-15%                  |                10 |              0.16394 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6585 | >20%                    |                 2 |              0.82925 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.7362 | <5%                     |                10 |              0.17362 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0501 | <5%                     |                10 |              0.20501 |