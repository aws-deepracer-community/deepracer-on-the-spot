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

Data correct as of 2024-10-04 01:37:26.466200, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1176 | <5%                     |                 2 |              0.0588  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1212 | <5%                     |                 2 |              0.0606  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1624 | 5-10%                   |                 2 |              0.0812  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.174  | 10-15%                  |                 2 |              0.087   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1772 | 10-15%                  |                 2 |              0.0886  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1962 | 15-20%                  |                 2 |              0.0981  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.1988 | >20%                    |                 2 |              0.0994  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2104 | 5-10%                   |                 5 |              0.04208 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2153 | 15-20%                  |                 5 |              0.04306 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2163 | >20%                    |                 2 |              0.10815 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2271 | >20%                    |                 5 |              0.04542 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2291 | <5%                     |                 2 |              0.11455 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2306 | 10-15%                  |                 5 |              0.04612 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.233  | >20%                    |                 2 |              0.1165  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2389 | <5%                     |                 2 |              0.11945 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.2539 | >20%                    |                 5 |              0.05078 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2687 | <5%                     |                 2 |              0.13435 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2717 | 5-10%                   |                 2 |              0.13585 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2778 | <5%                     |                 2 |              0.1389  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2788 | <5%                     |                 2 |              0.1394  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | <5%                     |                 2 |              0.1437  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2987 | >20%                    |                 5 |              0.05974 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2998 | <5%                     |                 2 |              0.1499  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3028 | 10-15%                  |                 2 |              0.1514  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3029 | 5-10%                   |                10 |              0.03029 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3041 | 15-20%                  |                 5 |              0.06082 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3071 | 15-20%                  |                10 |              0.03071 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3167 | 15-20%                  |                 2 |              0.15835 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3175 | 15-20%                  |                 2 |              0.15875 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3245 | <5%                     |                 2 |              0.16225 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3346 | >20%                    |                 5 |              0.06692 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3401 | >20%                    |                10 |              0.03401 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3454 | <5%                     |                 2 |              0.1727  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3481 | >20%                    |                 5 |              0.06962 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3587 | >20%                    |                 5 |              0.07174 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3625 | 5-10%                   |                10 |              0.03625 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3657 | >20%                    |                10 |              0.03657 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3671 | <5%                     |                 2 |              0.18355 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3702 | 5-10%                   |                 2 |              0.1851  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3712 | 5-10%                   |                 5 |              0.07424 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.373  | <5%                     |                 5 |              0.0746  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3794 | <5%                     |                 5 |              0.07588 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3934 | >20%                    |                 2 |              0.1967  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4056 | >20%                    |                 2 |              0.2028  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4099 | >20%                    |                 2 |              0.20495 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.4131 | <5%                     |                10 |              0.04131 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4217 | <5%                     |                 2 |              0.21085 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4227 | 5-10%                   |                 2 |              0.21135 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4301 | 15-20%                  |                 5 |              0.08602 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4327 | 5-10%                   |                10 |              0.04327 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4447 | <5%                     |                 2 |              0.22235 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4478 | >20%                    |                 2 |              0.2239  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4496 | 5-10%                   |                10 |              0.04496 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4587 | <5%                     |                 5 |              0.09174 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4594 | 5-10%                   |                 2 |              0.2297  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4597 | <5%                     |                 5 |              0.09194 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.4601 | 5-10%                   |                 5 |              0.09202 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4605 | 10-15%                  |                 5 |              0.0921  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4609 | 10-15%                  |                 5 |              0.09218 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4764 | 10-15%                  |                 2 |              0.2382  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4835 | 5-10%                   |                 5 |              0.0967  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.487  | >20%                    |                 2 |              0.2435  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4949 | <5%                     |                 5 |              0.09898 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4949 | 5-10%                   |                 5 |              0.09898 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4958 | >20%                    |                10 |              0.04958 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5002 | <5%                     |                 5 |              0.10004 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5043 | <5%                     |                 5 |              0.10086 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5092 | 15-20%                  |                 5 |              0.10184 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5094 | >20%                    |                 2 |              0.2547  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.516  | <5%                     |                 5 |              0.1032  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5239 | <5%                     |                 5 |              0.10478 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5243 | >20%                    |                 5 |              0.10486 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5289 | >20%                    |                 2 |              0.26445 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5826 | >20%                    |                 5 |              0.11652 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5938 | >20%                    |                 5 |              0.11876 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6102 | >20%                    |                 2 |              0.3051  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6103 | 15-20%                  |                 5 |              0.12206 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6207 | 10-15%                  |                 5 |              0.12414 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6265 | >20%                    |                10 |              0.06265 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6276 | >20%                    |                 5 |              0.12552 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6563 | 5-10%                   |                10 |              0.06563 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6819 | 5-10%                   |                 5 |              0.13638 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6892 | >20%                    |                 5 |              0.13784 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6969 | <5%                     |                10 |              0.06969 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6998 | <5%                     |                10 |              0.06998 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7045 | >20%                    |                 2 |              0.35225 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7271 | 5-10%                   |                10 |              0.07271 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7486 | 15-20%                  |                10 |              0.07486 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.75   | >20%                    |                 5 |              0.15    |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7552 | 15-20%                  |                10 |              0.07552 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7618 | >20%                    |                10 |              0.07618 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7692 | >20%                    |                10 |              0.07692 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7753 | 10-15%                  |                10 |              0.07753 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7797 | >20%                    |                10 |              0.07797 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8231 | 10-15%                  |                10 |              0.08231 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8348 | 5-10%                   |                10 |              0.08348 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8402 | >20%                    |                10 |              0.08402 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8487 | 15-20%                  |                 5 |              0.16974 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8734 | <5%                     |                10 |              0.08734 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8742 | <5%                     |                10 |              0.08742 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8887 | >20%                    |                10 |              0.08887 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8909 | >20%                    |                10 |              0.08909 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8944 | >20%                    |                 2 |              0.4472  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9101 | >20%                    |                 5 |              0.18202 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9334 | 5-10%                   |                10 |              0.09334 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9347 | <5%                     |                10 |              0.09347 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9449 | 15-20%                  |                10 |              0.09449 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9637 | 10-15%                  |                 2 |              0.48185 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.985  | 10-15%                  |                 5 |              0.197   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9989 | 5-10%                   |                10 |              0.09989 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0302 | <5%                     |                10 |              0.10302 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0357 | >20%                    |                10 |              0.10357 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0362 | <5%                     |                 2 |              0.5181  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0799 | >20%                    |                10 |              0.10799 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.146  | >20%                    |                10 |              0.1146  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1771 | >20%                    |                 5 |              0.23542 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.179  | >20%                    |                10 |              0.1179  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4166 | 10-15%                  |                10 |              0.14166 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4566 | >20%                    |                10 |              0.14566 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6562 | 5-10%                   |                10 |              0.16562 |