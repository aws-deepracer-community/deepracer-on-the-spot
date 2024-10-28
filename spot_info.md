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

Data correct as of 2024-10-28 01:41:35.247803, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1667 | >20%                    |                 2 |              0.08335 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1684 | 10-15%                  |                 2 |              0.0842  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1808 | 5-10%                   |                 2 |              0.0904  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1867 | <5%                     |                 2 |              0.09335 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1893 | 15-20%                  |                 2 |              0.09465 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1963 | <5%                     |                 2 |              0.09815 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2045 | <5%                     |                 2 |              0.10225 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2162 | <5%                     |                 2 |              0.1081  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2188 | 15-20%                  |                 2 |              0.1094  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2218 | 15-20%                  |                 2 |              0.1109  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2236 | 5-10%                   |                 2 |              0.1118  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2264 | 5-10%                   |                 5 |              0.04528 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2362 | >20%                    |                 2 |              0.1181  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2414 | 15-20%                  |                 2 |              0.1207  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2538 | <5%                     |                 2 |              0.1269  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2569 | 5-10%                   |                 5 |              0.05138 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2696 | <5%                     |                 2 |              0.1348  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2735 | <5%                     |                 5 |              0.0547  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2749 | <5%                     |                 2 |              0.13745 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2758 | 5-10%                   |                 5 |              0.05516 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.277  | 10-15%                  |                 2 |              0.1385  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2787 | 15-20%                  |                 2 |              0.13935 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2856 | <5%                     |                 5 |              0.05712 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.292  | <5%                     |                 2 |              0.146   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.296  | 15-20%                  |                 5 |              0.0592  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2973 | >20%                    |                 5 |              0.05946 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2987 | 10-15%                  |                 5 |              0.05974 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3026 | >20%                    |                 2 |              0.1513  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3042 | 10-15%                  |                 5 |              0.06084 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3078 | >20%                    |                 5 |              0.06156 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3086 | 10-15%                  |                 5 |              0.06172 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.316  | 15-20%                  |                 2 |              0.158   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3366 | <5%                     |                 2 |              0.1683  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3415 | >20%                    |                 5 |              0.0683  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3503 | <5%                     |                 2 |              0.17515 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3601 | >20%                    |                10 |              0.03601 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3616 | >20%                    |                 2 |              0.1808  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3735 | <5%                     |                 5 |              0.0747  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3782 | 5-10%                   |                10 |              0.03782 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3806 | 5-10%                   |                10 |              0.03806 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3833 | 5-10%                   |                 2 |              0.19165 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3844 | >20%                    |                 2 |              0.1922  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3858 | >20%                    |                10 |              0.03858 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3873 | >20%                    |                 2 |              0.19365 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3894 | <5%                     |                 5 |              0.07788 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3927 | 5-10%                   |                 5 |              0.07854 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3974 | 5-10%                   |                 2 |              0.1987  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.3994 | 15-20%                  |                 2 |              0.1997  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3998 | 10-15%                  |                10 |              0.03998 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4005 | 5-10%                   |                 2 |              0.20025 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.41   | <5%                     |                 5 |              0.082   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4232 | <5%                     |                 5 |              0.08464 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4251 | >20%                    |                 2 |              0.21255 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4279 | >20%                    |                 5 |              0.08558 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4348 | 15-20%                  |                 2 |              0.2174  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4455 | >20%                    |                 5 |              0.0891  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4625 | <5%                     |                10 |              0.04625 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4648 | 15-20%                  |                 5 |              0.09296 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4683 | <5%                     |                10 |              0.04683 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4685 | 10-15%                  |                 2 |              0.23425 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4692 | <5%                     |                 2 |              0.2346  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4704 | <5%                     |                 5 |              0.09408 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4713 | 5-10%                   |                 5 |              0.09426 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4733 | 5-10%                   |                 2 |              0.23665 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4743 | 15-20%                  |                 5 |              0.09486 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4753 | 5-10%                   |                 2 |              0.23765 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4783 | >20%                    |                 2 |              0.23915 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.481  | 10-15%                  |                10 |              0.0481  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4849 | <5%                     |                10 |              0.04849 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4853 | <5%                     |                10 |              0.04853 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4858 | 5-10%                   |                 5 |              0.09716 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4878 | 15-20%                  |                 2 |              0.2439  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4993 | >20%                    |                 5 |              0.09986 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5089 | >20%                    |                 5 |              0.10178 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5126 | >20%                    |                 2 |              0.2563  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5168 | <5%                     |                 5 |              0.10336 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5183 | <5%                     |                 5 |              0.10366 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5298 | 10-15%                  |                 5 |              0.10596 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5321 | >20%                    |                 2 |              0.26605 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5333 | 5-10%                   |                 5 |              0.10666 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5381 | 5-10%                   |                 5 |              0.10762 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5406 | 15-20%                  |                 2 |              0.2703  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5523 | 10-15%                  |                 5 |              0.11046 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5621 | 5-10%                   |                 5 |              0.11242 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5662 | 15-20%                  |                10 |              0.05662 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5697 | <5%                     |                10 |              0.05697 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5725 | >20%                    |                10 |              0.05725 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.578  | 15-20%                  |                 5 |              0.1156  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5787 | 5-10%                   |                 5 |              0.11574 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5834 | >20%                    |                 5 |              0.11668 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5867 | >20%                    |                 5 |              0.11734 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5891 | 5-10%                   |                 5 |              0.11782 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.595  | >20%                    |                 2 |              0.2975  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5956 | 5-10%                   |                10 |              0.05956 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6161 | >20%                    |                 5 |              0.12322 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6367 | 5-10%                   |                 5 |              0.12734 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6375 | 15-20%                  |                 5 |              0.1275  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6481 | <5%                     |                10 |              0.06481 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6511 | 10-15%                  |                10 |              0.06511 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6621 | >20%                    |                10 |              0.06621 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6643 | >20%                    |                10 |              0.06643 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6645 | 5-10%                   |                10 |              0.06645 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6733 | >20%                    |                 2 |              0.33665 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6832 | <5%                     |                10 |              0.06832 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7025 | >20%                    |                10 |              0.07025 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7057 | 5-10%                   |                10 |              0.07057 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7462 | >20%                    |                10 |              0.07462 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7494 | >20%                    |                 5 |              0.14988 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.759  | 15-20%                  |                10 |              0.0759  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7796 | <5%                     |                10 |              0.07796 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7818 | 10-15%                  |                10 |              0.07818 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7828 | 5-10%                   |                 5 |              0.15656 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8198 | 5-10%                   |                10 |              0.08198 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8319 | >20%                    |                10 |              0.08319 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8599 | >20%                    |                 2 |              0.42995 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8677 | 10-15%                  |                10 |              0.08677 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8725 | >20%                    |                10 |              0.08725 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8734 | >20%                    |                10 |              0.08734 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9034 | <5%                     |                10 |              0.09034 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9036 | >20%                    |                 5 |              0.18072 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9154 | 10-15%                  |                 5 |              0.18308 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9158 | <5%                     |                 2 |              0.4579  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9216 | 5-10%                   |                10 |              0.09216 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9481 | 15-20%                  |                10 |              0.09481 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0011 | >20%                    |                10 |              0.10011 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0124 | 10-15%                  |                10 |              0.10124 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0128 | 10-15%                  |                 5 |              0.20256 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0197 | 10-15%                  |                10 |              0.10197 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0247 | 10-15%                  |                10 |              0.10247 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0388 | >20%                    |                10 |              0.10388 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.04   | 5-10%                   |                10 |              0.104   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1419 | >20%                    |                10 |              0.11419 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1776 | >20%                    |                10 |              0.11776 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4085 | >20%                    |                10 |              0.14085 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5222 | 5-10%                   |                10 |              0.15222 |