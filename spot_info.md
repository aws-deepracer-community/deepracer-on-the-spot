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

Data correct as of 2024-10-22 01:38:43.504786, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.128  | 5-10%                   |                 2 |              0.064   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1386 | <5%                     |                 2 |              0.0693  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1495 | <5%                     |                 2 |              0.07475 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.152  | <5%                     |                 2 |              0.076   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1661 | <5%                     |                 5 |              0.03322 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1698 | 5-10%                   |                 2 |              0.0849  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1728 | 10-15%                  |                 2 |              0.0864  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1807 | <5%                     |                 2 |              0.09035 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2033 | <5%                     |                 5 |              0.04066 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.206  | <5%                     |                 5 |              0.0412  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2062 | 15-20%                  |                 2 |              0.1031  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2111 | >20%                    |                 2 |              0.10555 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2151 | >20%                    |                 2 |              0.10755 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2343 | <5%                     |                 2 |              0.11715 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2381 | 5-10%                   |                 2 |              0.11905 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2444 | <5%                     |                 2 |              0.1222  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2594 | 15-20%                  |                 2 |              0.1297  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.263  | <5%                     |                 2 |              0.1315  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2634 | <5%                     |                10 |              0.02634 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2698 | <5%                     |                 2 |              0.1349  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.275  | 10-15%                  |                 5 |              0.055   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.275  | >20%                    |                 5 |              0.055   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.276  | <5%                     |                 5 |              0.0552  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2796 | 10-15%                  |                 2 |              0.1398  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2804 | 15-20%                  |                 2 |              0.1402  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2845 | <5%                     |                 2 |              0.14225 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2974 | 10-15%                  |                 5 |              0.05948 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3136 | 5-10%                   |                10 |              0.03136 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3144 | >20%                    |                 2 |              0.1572  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3178 | 15-20%                  |                 2 |              0.1589  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3217 | 10-15%                  |                 5 |              0.06434 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3242 | 15-20%                  |                 5 |              0.06484 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3255 | <5%                     |                10 |              0.03255 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3274 | <5%                     |                 5 |              0.06548 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3393 | <5%                     |                 2 |              0.16965 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3418 | >20%                    |                 5 |              0.06836 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3448 | <5%                     |                 2 |              0.1724  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.345  | 5-10%                   |                 2 |              0.1725  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3481 | >20%                    |                 2 |              0.17405 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3694 | 10-15%                  |                 2 |              0.1847  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.373  | <5%                     |                 5 |              0.0746  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3777 | <5%                     |                 5 |              0.07554 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3795 | 15-20%                  |                 2 |              0.18975 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3812 | 15-20%                  |                10 |              0.03812 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3923 | >20%                    |                 2 |              0.19615 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.394  | 5-10%                   |                 2 |              0.197   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3973 | >20%                    |                 2 |              0.19865 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4005 | <5%                     |                 5 |              0.0801  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4024 | <5%                     |                 5 |              0.08048 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4103 | <5%                     |                 5 |              0.08206 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4122 | <5%                     |                10 |              0.04122 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4135 | >20%                    |                10 |              0.04135 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4166 | 15-20%                  |                 2 |              0.2083  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4191 | <5%                     |                 5 |              0.08382 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4237 | >20%                    |                 2 |              0.21185 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4288 | 15-20%                  |                 5 |              0.08576 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4331 | 5-10%                   |                 2 |              0.21655 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4376 | >20%                    |                 2 |              0.2188  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4427 | >20%                    |                10 |              0.04427 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4436 | >20%                    |                 2 |              0.2218  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4476 | 5-10%                   |                10 |              0.04476 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4483 | 15-20%                  |                 2 |              0.22415 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4506 | <5%                     |                10 |              0.04506 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4522 | >20%                    |                 5 |              0.09044 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4539 | <5%                     |                 2 |              0.22695 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.456  | 5-10%                   |                10 |              0.0456  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.457  | 5-10%                   |                 2 |              0.2285  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4722 | 15-20%                  |                 5 |              0.09444 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4732 | >20%                    |                 5 |              0.09464 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.477  | <5%                     |                10 |              0.0477  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.4805 | 15-20%                  |                 2 |              0.24025 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4806 | 5-10%                   |                 5 |              0.09612 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4838 | 15-20%                  |                 5 |              0.09676 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4871 | <5%                     |                 2 |              0.24355 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4911 | 10-15%                  |                 5 |              0.09822 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4933 | <5%                     |                 5 |              0.09866 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5003 | 10-15%                  |                10 |              0.05003 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5065 | >20%                    |                 2 |              0.25325 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5078 | 5-10%                   |                10 |              0.05078 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5177 | 5-10%                   |                 5 |              0.10354 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5189 | 5-10%                   |                 5 |              0.10378 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5221 | 15-20%                  |                 2 |              0.26105 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5238 | <5%                     |                 5 |              0.10476 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5241 | 5-10%                   |                 5 |              0.10482 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5296 | >20%                    |                 5 |              0.10592 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5373 | <5%                     |                 5 |              0.10746 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5375 | <5%                     |                 5 |              0.1075  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5624 | >20%                    |                 5 |              0.11248 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5703 | >20%                    |                 5 |              0.11406 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5816 | 5-10%                   |                 5 |              0.11632 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5861 | >20%                    |                 5 |              0.11722 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5882 | >20%                    |                 5 |              0.11764 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.594  | 15-20%                  |                 5 |              0.1188  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5956 | 15-20%                  |                10 |              0.05956 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5961 | >20%                    |                 5 |              0.11922 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.603  | >20%                    |                 2 |              0.3015  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6062 | <5%                     |                10 |              0.06062 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6434 | 5-10%                   |                10 |              0.06434 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6631 | >20%                    |                10 |              0.06631 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6687 | >20%                    |                10 |              0.06687 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6866 | 5-10%                   |                 5 |              0.13732 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6888 | <5%                     |                10 |              0.06888 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6917 | 10-15%                  |                10 |              0.06917 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6929 | >20%                    |                 2 |              0.34645 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7035 | <5%                     |                10 |              0.07035 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7127 | 5-10%                   |                10 |              0.07127 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7137 | >20%                    |                10 |              0.07137 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7141 | <5%                     |                10 |              0.07141 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7155 | >20%                    |                10 |              0.07155 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7181 | 5-10%                   |                10 |              0.07181 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7312 | 10-15%                  |                 5 |              0.14624 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7469 | >20%                    |                 5 |              0.14938 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.776  | 5-10%                   |                10 |              0.0776  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7799 | 5-10%                   |                 5 |              0.15598 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7877 | 15-20%                  |                10 |              0.07877 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7998 | <5%                     |                10 |              0.07998 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8231 | >20%                    |                10 |              0.08231 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8396 | 5-10%                   |                10 |              0.08396 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8709 | 5-10%                   |                10 |              0.08709 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8727 | >20%                    |                10 |              0.08727 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8757 | >20%                    |                 5 |              0.17514 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8803 | >20%                    |                10 |              0.08803 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8806 | <5%                     |                10 |              0.08806 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8922 | >20%                    |                 2 |              0.4461  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.896  | 15-20%                  |                10 |              0.0896  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.908  | >20%                    |                10 |              0.0908  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9618 | <5%                     |                 2 |              0.4809  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.974  | 15-20%                  |                 5 |              0.1948  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9748 | 10-15%                  |                10 |              0.09748 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9811 | 10-15%                  |                10 |              0.09811 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0106 | 10-15%                  |                10 |              0.10106 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0417 | 10-15%                  |                 5 |              0.20834 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0494 | >20%                    |                10 |              0.10494 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1487 | >20%                    |                10 |              0.11487 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1726 | >20%                    |                10 |              0.11726 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3498 | <5%                     |                10 |              0.13498 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4427 | >20%                    |                10 |              0.14427 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5292 | 5-10%                   |                10 |              0.15292 |