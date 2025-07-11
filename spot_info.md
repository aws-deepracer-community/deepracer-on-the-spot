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

Data correct as of 2025-07-11 02:02:05.461722, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1555 | >20%                    |                 5 |              0.0311  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1562 | >20%                    |                 2 |              0.0781  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1585 | 5-10%                   |                 2 |              0.07925 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1591 | <5%                     |                 2 |              0.07955 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.172  | 10-15%                  |                 5 |              0.0344  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1733 | >20%                    |                 5 |              0.03466 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1949 | >20%                    |                 2 |              0.09745 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2035 | >20%                    |                10 |              0.02035 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2043 | >20%                    |                 5 |              0.04086 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2148 | >20%                    |                 2 |              0.1074  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2298 | >20%                    |                 5 |              0.04596 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2322 | 10-15%                  |                 5 |              0.04644 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2329 | 15-20%                  |                 2 |              0.11645 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2441 | >20%                    |                10 |              0.02441 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.247  | >20%                    |                 2 |              0.1235  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2473 | >20%                    |                 2 |              0.12365 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2488 | 5-10%                   |                 2 |              0.1244  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2536 | >20%                    |                 2 |              0.1268  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.255  | 15-20%                  |                 2 |              0.1275  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2585 | >20%                    |                 2 |              0.12925 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2664 | >20%                    |                 2 |              0.1332  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2682 | 5-10%                   |                10 |              0.02682 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.288  | >20%                    |                 2 |              0.144   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.2965 | >20%                    |                10 |              0.02965 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2977 | <5%                     |                10 |              0.02977 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3032 | <5%                     |                 2 |              0.1516  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3104 | 5-10%                   |                 2 |              0.1552  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3105 | >20%                    |                 5 |              0.0621  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3139 | 15-20%                  |                 2 |              0.15695 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3153 | 10-15%                  |                 2 |              0.15765 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3178 | >20%                    |                 2 |              0.1589  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3205 | >20%                    |                10 |              0.03205 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3313 | <5%                     |                 2 |              0.16565 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3455 | 15-20%                  |                 5 |              0.0691  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3503 | >20%                    |                 2 |              0.17515 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3522 | >20%                    |                 2 |              0.1761  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3666 | 10-15%                  |                 5 |              0.07332 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3689 | >20%                    |                 2 |              0.18445 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3691 | >20%                    |                 2 |              0.18455 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3712 | >20%                    |                 5 |              0.07424 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3755 | >20%                    |                 2 |              0.18775 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3824 | 5-10%                   |                 2 |              0.1912  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3894 | >20%                    |                 5 |              0.07788 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3904 | >20%                    |                 5 |              0.07808 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3934 | >20%                    |                 2 |              0.1967  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4002 | >20%                    |                 2 |              0.2001  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4096 | >20%                    |                 2 |              0.2048  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4128 | 5-10%                   |                 2 |              0.2064  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4208 | >20%                    |                 2 |              0.2104  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4279 | 15-20%                  |                 5 |              0.08558 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4313 | <5%                     |                 5 |              0.08626 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4327 | >20%                    |                 2 |              0.21635 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4367 | <5%                     |                 2 |              0.21835 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4465 | >20%                    |                 5 |              0.0893  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.447  | >20%                    |                 5 |              0.0894  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4486 | 10-15%                  |                 2 |              0.2243  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4499 | >20%                    |                 5 |              0.08998 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4513 | >20%                    |                 5 |              0.09026 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4612 | >20%                    |                 2 |              0.2306  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4653 | >20%                    |                 5 |              0.09306 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4736 | >20%                    |                 2 |              0.2368  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4765 | >20%                    |                 2 |              0.23825 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4766 | >20%                    |                 2 |              0.2383  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.477  | 5-10%                   |                 2 |              0.2385  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4834 | <5%                     |                 2 |              0.2417  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4842 | >20%                    |                 2 |              0.2421  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4844 | >20%                    |                 5 |              0.09688 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4871 | >20%                    |                 2 |              0.24355 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4937 | >20%                    |                10 |              0.04937 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4951 | <5%                     |                 5 |              0.09902 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5029 | 10-15%                  |                 5 |              0.10058 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5032 | >20%                    |                 2 |              0.2516  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5052 | 15-20%                  |                 2 |              0.2526  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5074 | 15-20%                  |                 5 |              0.10148 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5108 | 15-20%                  |                 5 |              0.10216 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5123 | >20%                    |                 2 |              0.25615 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5143 | >20%                    |                10 |              0.05143 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5209 | >20%                    |                 5 |              0.10418 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.529  | >20%                    |                 5 |              0.1058  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5345 | >20%                    |                 2 |              0.26725 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5356 | <5%                     |                 5 |              0.10712 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5406 | >20%                    |                 5 |              0.10812 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5416 | 15-20%                  |                10 |              0.05416 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5434 | >20%                    |                 5 |              0.10868 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5492 | >20%                    |                 5 |              0.10984 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5514 | >20%                    |                 5 |              0.11028 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5685 | <5%                     |                 5 |              0.1137  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5695 | >20%                    |                 2 |              0.28475 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5795 | >20%                    |                 2 |              0.28975 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.581  | >20%                    |                 2 |              0.2905  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5874 | >20%                    |                 5 |              0.11748 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.588  | >20%                    |                10 |              0.0588  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5884 | >20%                    |                 2 |              0.2942  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5918 | >20%                    |                10 |              0.05918 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.597  | >20%                    |                10 |              0.0597  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5986 | 10-15%                  |                 5 |              0.11972 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.602  | >20%                    |                 2 |              0.301   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.603  | 5-10%                   |                 2 |              0.3015  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6039 | 15-20%                  |                10 |              0.06039 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6057 | >20%                    |                 5 |              0.12114 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6088 | 10-15%                  |                 5 |              0.12176 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6106 | >20%                    |                10 |              0.06106 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6144 | >20%                    |                 5 |              0.12288 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6353 | >20%                    |                 2 |              0.31765 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6386 | >20%                    |                 5 |              0.12772 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6403 | 10-15%                  |                 2 |              0.32015 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6581 | >20%                    |                 5 |              0.13162 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6621 | 15-20%                  |                 5 |              0.13242 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6696 | 5-10%                   |                 5 |              0.13392 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6696 | >20%                    |                 5 |              0.13392 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6716 | >20%                    |                 5 |              0.13432 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6735 | >20%                    |                 5 |              0.1347  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6764 | 10-15%                  |                10 |              0.06764 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6832 | >20%                    |                10 |              0.06832 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.692  | 5-10%                   |                 5 |              0.1384  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.6937 | >20%                    |                 5 |              0.13874 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7052 | <5%                     |                 5 |              0.14104 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7257 | >20%                    |                 5 |              0.14514 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7476 | >20%                    |                 5 |              0.14952 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7489 | <5%                     |                10 |              0.07489 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7577 | >20%                    |                 2 |              0.37885 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7655 | >20%                    |                 5 |              0.1531  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7671 | >20%                    |                10 |              0.07671 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7772 | 10-15%                  |                10 |              0.07772 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.778  | <5%                     |                 5 |              0.1556  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.778  | >20%                    |                10 |              0.0778  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7795 | 5-10%                   |                10 |              0.07795 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7831 | 15-20%                  |                10 |              0.07831 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7873 | >20%                    |                10 |              0.07873 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8029 | >20%                    |                 5 |              0.16058 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8054 | >20%                    |                 5 |              0.16108 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8066 | 10-15%                  |                10 |              0.08066 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8075 | 5-10%                   |                10 |              0.08075 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8117 | 10-15%                  |                 5 |              0.16234 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.824  | <5%                     |                10 |              0.0824  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8482 | 5-10%                   |                10 |              0.08482 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8638 | <5%                     |                10 |              0.08638 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8666 | >20%                    |                10 |              0.08666 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.868  | 10-15%                  |                10 |              0.0868  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8715 | 5-10%                   |                10 |              0.08715 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8784 | >20%                    |                10 |              0.08784 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8946 | >20%                    |                10 |              0.08946 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.897  | 15-20%                  |                10 |              0.0897  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8985 | >20%                    |                10 |              0.08985 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9244 | >20%                    |                 5 |              0.18488 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9352 | >20%                    |                10 |              0.09352 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9392 | >20%                    |                 5 |              0.18784 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9447 | 5-10%                   |                10 |              0.09447 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9471 | 15-20%                  |                10 |              0.09471 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9479 | 15-20%                  |                10 |              0.09479 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9485 | >20%                    |                10 |              0.09485 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9536 | >20%                    |                10 |              0.09536 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9656 | >20%                    |                10 |              0.09656 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9874 | >20%                    |                10 |              0.09874 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0285 | >20%                    |                10 |              0.10285 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0433 | <5%                     |                10 |              0.10433 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0461 | >20%                    |                 2 |              0.52305 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0514 | <5%                     |                10 |              0.10514 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0552 | >20%                    |                10 |              0.10552 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0617 | <5%                     |                10 |              0.10617 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0909 | >20%                    |                 2 |              0.54545 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.103  | <5%                     |                 2 |              0.5515  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1071 | 15-20%                  |                10 |              0.11071 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1371 | >20%                    |                10 |              0.11371 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1454 | >20%                    |                10 |              0.11454 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2398 | >20%                    |                10 |              0.12398 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2462 | <5%                     |                10 |              0.12462 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2502 | <5%                     |                 5 |              0.25004 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2579 | >20%                    |                 2 |              0.62895 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2644 | >20%                    |                 5 |              0.25288 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2829 | >20%                    |                 2 |              0.64145 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2939 | >20%                    |                 5 |              0.25878 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.314  | 15-20%                  |                10 |              0.1314  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3626 | 10-15%                  |                10 |              0.13626 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4381 | <5%                     |                 5 |              0.28762 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4564 | >20%                    |                10 |              0.14564 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4688 | >20%                    |                 5 |              0.29376 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6218 | 15-20%                  |                10 |              0.16218 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8664 | <5%                     |                10 |              0.18664 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8882 | >20%                    |                10 |              0.18882 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.9691 | <5%                     |                 2 |              0.98455 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0029 | 5-10%                   |                10 |              0.20029 |