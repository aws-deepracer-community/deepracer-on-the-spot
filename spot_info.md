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

Data correct as of 2025-10-31 01:50:31.201332, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0923 | 5-10%                   |                 2 |              0.04615 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.128  | >20%                    |                 2 |              0.064   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.183  | >20%                    |                 2 |              0.0915  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1923 | 10-15%                  |                 5 |              0.03846 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2095 | >20%                    |                 2 |              0.10475 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2259 | 10-15%                  |                 2 |              0.11295 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2566 | >20%                    |                 2 |              0.1283  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2579 | 10-15%                  |                 2 |              0.12895 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2595 | >20%                    |                 2 |              0.12975 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | >20%                    |                 2 |              0.1306  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2667 | 5-10%                   |                 2 |              0.13335 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.27   | >20%                    |                 2 |              0.135   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2718 | 10-15%                  |                 2 |              0.1359  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2796 | >20%                    |                 2 |              0.1398  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2796 | 5-10%                   |                 2 |              0.1398  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2818 | >20%                    |                 2 |              0.1409  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2843 | 15-20%                  |                 2 |              0.14215 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3193 | >20%                    |                 2 |              0.15965 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3196 | 15-20%                  |                 2 |              0.1598  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.321  | >20%                    |                 2 |              0.1605  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3316 | >20%                    |                 2 |              0.1658  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3358 | >20%                    |                 2 |              0.1679  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3422 | >20%                    |                 5 |              0.06844 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3492 | >20%                    |                 2 |              0.1746  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3518 | >20%                    |                 5 |              0.07036 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3676 | >20%                    |                10 |              0.03676 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3722 | <5%                     |                10 |              0.03722 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3795 | 15-20%                  |                 2 |              0.18975 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3834 | 10-15%                  |                 2 |              0.1917  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3848 | >20%                    |                 5 |              0.07696 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3851 | >20%                    |                 2 |              0.19255 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3862 | >20%                    |                 2 |              0.1931  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3938 | >20%                    |                 2 |              0.1969  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4028 | >20%                    |                 2 |              0.2014  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4036 | >20%                    |                 2 |              0.2018  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4093 | >20%                    |                 2 |              0.20465 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4206 | >20%                    |                 2 |              0.2103  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4222 | >20%                    |                10 |              0.04222 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4232 | 5-10%                   |                 2 |              0.2116  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4238 | 5-10%                   |                 5 |              0.08476 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4258 | 15-20%                  |                 2 |              0.2129  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4318 | >20%                    |                 5 |              0.08636 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.434  | >20%                    |                 2 |              0.217   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4346 | >20%                    |                 2 |              0.2173  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.435  | <5%                     |                 2 |              0.2175  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.439  | >20%                    |                 5 |              0.0878  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4415 | 5-10%                   |                 2 |              0.22075 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4455 | >20%                    |                 2 |              0.22275 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4481 | >20%                    |                 5 |              0.08962 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4551 | >20%                    |                 5 |              0.09102 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4596 | >20%                    |                 5 |              0.09192 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4626 | >20%                    |                 5 |              0.09252 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4654 | >20%                    |                 5 |              0.09308 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4696 | >20%                    |                 5 |              0.09392 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4698 | >20%                    |                 2 |              0.2349  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4743 | 10-15%                  |                 2 |              0.23715 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4766 | >20%                    |                 2 |              0.2383  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4786 | 10-15%                  |                 2 |              0.2393  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4803 | >20%                    |                 5 |              0.09606 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.481  | 15-20%                  |                 5 |              0.0962  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4814 | >20%                    |                 5 |              0.09628 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.483  | >20%                    |                 2 |              0.2415  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4855 | >20%                    |                 2 |              0.24275 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4877 | >20%                    |                10 |              0.04877 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4987 | >20%                    |                 5 |              0.09974 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5053 | >20%                    |                 5 |              0.10106 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5088 | 15-20%                  |                10 |              0.05088 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.516  | >20%                    |                 2 |              0.258   |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.521  | 5-10%                   |                10 |              0.0521  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5289 | 5-10%                   |                 2 |              0.26445 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5301 | 15-20%                  |                 5 |              0.10602 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5315 | >20%                    |                 5 |              0.1063  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5343 | >20%                    |                 2 |              0.26715 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5375 | >20%                    |                 2 |              0.26875 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5459 | >20%                    |                 5 |              0.10918 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5479 | >20%                    |                 5 |              0.10958 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5629 | >20%                    |                 5 |              0.11258 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5704 | >20%                    |                 5 |              0.11408 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5772 | 15-20%                  |                 2 |              0.2886  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5774 | >20%                    |                 5 |              0.11548 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6036 | >20%                    |                 5 |              0.12072 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6085 | >20%                    |                 5 |              0.1217  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6213 | 10-15%                  |                 5 |              0.12426 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6242 | >20%                    |                 5 |              0.12484 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6349 | 10-15%                  |                 5 |              0.12698 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6382 | 15-20%                  |                 2 |              0.3191  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.644  | >20%                    |                 5 |              0.1288  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6448 | >20%                    |                 5 |              0.12896 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6458 | 15-20%                  |                 5 |              0.12916 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6462 | >20%                    |                 5 |              0.12924 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6494 | >20%                    |                 5 |              0.12988 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.653  | >20%                    |                 2 |              0.3265  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6565 | >20%                    |                 5 |              0.1313  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6608 | >20%                    |                10 |              0.06608 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.667  | 10-15%                  |                 5 |              0.1334  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6768 | 15-20%                  |                10 |              0.06768 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6785 | >20%                    |                 2 |              0.33925 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6817 | 10-15%                  |                 2 |              0.34085 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6891 | >20%                    |                 5 |              0.13782 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6907 | >20%                    |                 5 |              0.13814 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.692  | >20%                    |                 5 |              0.1384  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6993 | >20%                    |                10 |              0.06993 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7015 | 15-20%                  |                10 |              0.07015 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7041 | >20%                    |                10 |              0.07041 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7063 | >20%                    |                 5 |              0.14126 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7109 | >20%                    |                 5 |              0.14218 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7222 | 15-20%                  |                 5 |              0.14444 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.723  | 15-20%                  |                10 |              0.0723  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7288 | <5%                     |                10 |              0.07288 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7351 | >20%                    |                 2 |              0.36755 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7373 | >20%                    |                10 |              0.07373 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.741  | >20%                    |                 5 |              0.1482  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7417 | >20%                    |                10 |              0.07417 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7454 | >20%                    |                10 |              0.07454 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7493 | >20%                    |                10 |              0.07493 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7578 | >20%                    |                 5 |              0.15156 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7659 | 15-20%                  |                10 |              0.07659 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7692 | >20%                    |                10 |              0.07692 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7887 | 15-20%                  |                10 |              0.07887 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7959 | >20%                    |                 5 |              0.15918 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7973 | 10-15%                  |                 5 |              0.15946 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8056 | 15-20%                  |                 5 |              0.16112 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8203 | <5%                     |                10 |              0.08203 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8251 | >20%                    |                10 |              0.08251 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.829  | 15-20%                  |                10 |              0.0829  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8291 | 15-20%                  |                10 |              0.08291 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.831  | 10-15%                  |                 2 |              0.4155  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8368 | >20%                    |                10 |              0.08368 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8387 | >20%                    |                 5 |              0.16774 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8608 | <5%                     |                10 |              0.08608 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8639 | >20%                    |                 5 |              0.17278 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8675 | >20%                    |                10 |              0.08675 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8689 | >20%                    |                10 |              0.08689 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8838 | >20%                    |                 5 |              0.17676 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8847 | >20%                    |                10 |              0.08847 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9006 | 5-10%                   |                10 |              0.09006 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9062 | >20%                    |                10 |              0.09062 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9199 | >20%                    |                 2 |              0.45995 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9213 | 15-20%                  |                10 |              0.09213 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9303 | 15-20%                  |                10 |              0.09303 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9321 | 10-15%                  |                10 |              0.09321 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9348 | 10-15%                  |                10 |              0.09348 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9583 | 10-15%                  |                10 |              0.09583 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9603 | >20%                    |                 2 |              0.48015 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0019 | >20%                    |                 2 |              0.50095 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0222 | >20%                    |                10 |              0.10222 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0343 | 5-10%                   |                10 |              0.10343 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0419 | 10-15%                  |                 2 |              0.52095 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.05   | >20%                    |                10 |              0.105   |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0501 | >20%                    |                 5 |              0.21002 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.0585 | >20%                    |                10 |              0.10585 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1015 | <5%                     |                10 |              0.11015 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1015 | 15-20%                  |                10 |              0.11015 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1089 | 15-20%                  |                10 |              0.11089 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1124 | >20%                    |                10 |              0.11124 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1125 | >20%                    |                 5 |              0.2225  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.12   | 5-10%                   |                10 |              0.112   |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1204 | >20%                    |                10 |              0.11204 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1315 | 5-10%                   |                10 |              0.11315 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1551 | 10-15%                  |                10 |              0.11551 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1927 | >20%                    |                 5 |              0.23854 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2123 | >20%                    |                 5 |              0.24246 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2619 | 10-15%                  |                10 |              0.12619 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3419 | >20%                    |                10 |              0.13419 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3644 | 10-15%                  |                 5 |              0.27288 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3974 | 5-10%                   |                 2 |              0.6987  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4649 | >20%                    |                10 |              0.14649 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.549  | >20%                    |                10 |              0.1549  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.584  | >20%                    |                10 |              0.1584  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6338 | >20%                    |                10 |              0.16338 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6848 | 10-15%                  |                 5 |              0.33696 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.749  | >20%                    |                10 |              0.1749  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0473 | 10-15%                  |                10 |              0.20473 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.412  | 15-20%                  |                10 |              0.2412  |