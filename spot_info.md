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

Data correct as of 2025-11-20 01:50:49.532959, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1008 | >20%                    |                 2 |              0.0504  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1566 | >20%                    |                 2 |              0.0783  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1654 | 15-20%                  |                 2 |              0.0827  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1803 | <5%                     |                 2 |              0.09015 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2078 | 10-15%                  |                 2 |              0.1039  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2113 | 15-20%                  |                 2 |              0.10565 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2136 | >20%                    |                 2 |              0.1068  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2187 | <5%                     |                 2 |              0.10935 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.229  | >20%                    |                 2 |              0.1145  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2318 | 5-10%                   |                 5 |              0.04636 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2344 | >20%                    |                 5 |              0.04688 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2403 | >20%                    |                 2 |              0.12015 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2421 | >20%                    |                 2 |              0.12105 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2458 | >20%                    |                 2 |              0.1229  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2658 | >20%                    |                 2 |              0.1329  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2662 | <5%                     |                 2 |              0.1331  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2676 | 10-15%                  |                 5 |              0.05352 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2719 | >20%                    |                 5 |              0.05438 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2723 | >20%                    |                 2 |              0.13615 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2781 | >20%                    |                 2 |              0.13905 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2835 | 10-15%                  |                 2 |              0.14175 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2845 | 5-10%                   |                 2 |              0.14225 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2905 | <5%                     |                10 |              0.02905 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2911 | >20%                    |                 5 |              0.05822 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.296  | <5%                     |                 5 |              0.0592  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3105 | <5%                     |                 2 |              0.15525 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3167 | >20%                    |                 5 |              0.06334 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.329  | 10-15%                  |                10 |              0.0329  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3332 | >20%                    |                10 |              0.03332 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3465 | 5-10%                   |                 2 |              0.17325 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3476 | >20%                    |                 5 |              0.06952 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3488 | 10-15%                  |                 2 |              0.1744  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3488 | >20%                    |                 2 |              0.1744  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3509 | >20%                    |                 2 |              0.17545 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.352  | >20%                    |                 2 |              0.176   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3554 | >20%                    |                10 |              0.03554 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3563 | 10-15%                  |                 2 |              0.17815 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3606 | >20%                    |                10 |              0.03606 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3646 | 5-10%                   |                10 |              0.03646 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3666 | <5%                     |                 2 |              0.1833  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3687 | >20%                    |                 2 |              0.18435 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3752 | 15-20%                  |                 5 |              0.07504 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3786 | 15-20%                  |                 2 |              0.1893  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3789 | <5%                     |                10 |              0.03789 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3794 | >20%                    |                 5 |              0.07588 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3895 | >20%                    |                 2 |              0.19475 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3913 | 15-20%                  |                 2 |              0.19565 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3921 | >20%                    |                 5 |              0.07842 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3956 | >20%                    |                 2 |              0.1978  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.401  | 10-15%                  |                 5 |              0.0802  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4061 | >20%                    |                 2 |              0.20305 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4122 | >20%                    |                 2 |              0.2061  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4159 | >20%                    |                 5 |              0.08318 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4169 | 10-15%                  |                10 |              0.04169 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.42   | 5-10%                   |                 2 |              0.21    |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.42   | >20%                    |                 5 |              0.084   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4208 | 15-20%                  |                 2 |              0.2104  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4237 | 15-20%                  |                 5 |              0.08474 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4249 | 15-20%                  |                 5 |              0.08498 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.425  | >20%                    |                 5 |              0.085   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4298 | 15-20%                  |                 5 |              0.08596 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.43   | 10-15%                  |                10 |              0.043   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4309 | <5%                     |                 2 |              0.21545 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4331 | >20%                    |                 2 |              0.21655 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4352 | >20%                    |                 2 |              0.2176  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4371 | 10-15%                  |                 5 |              0.08742 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4381 | >20%                    |                 2 |              0.21905 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4422 | >20%                    |                 5 |              0.08844 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4474 | >20%                    |                 2 |              0.2237  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.45   | >20%                    |                 2 |              0.225   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4509 | 15-20%                  |                10 |              0.04509 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4557 | >20%                    |                 2 |              0.22785 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4569 | 15-20%                  |                 5 |              0.09138 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4569 | >20%                    |                 5 |              0.09138 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4577 | >20%                    |                10 |              0.04577 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4673 | >20%                    |                 5 |              0.09346 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4685 | >20%                    |                 2 |              0.23425 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.469  | >20%                    |                 2 |              0.2345  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4764 | >20%                    |                 2 |              0.2382  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4776 | >20%                    |                 5 |              0.09552 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4779 | 10-15%                  |                 2 |              0.23895 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4892 | >20%                    |                 5 |              0.09784 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4948 | >20%                    |                 5 |              0.09896 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4954 | 10-15%                  |                 2 |              0.2477  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4975 | >20%                    |                 5 |              0.0995  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5035 | >20%                    |                10 |              0.05035 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5056 | >20%                    |                10 |              0.05056 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5156 | 10-15%                  |                 5 |              0.10312 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5187 | >20%                    |                 5 |              0.10374 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5218 | 10-15%                  |                 2 |              0.2609  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5232 | >20%                    |                 5 |              0.10464 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5235 | 10-15%                  |                 5 |              0.1047  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.536  | 15-20%                  |                 5 |              0.1072  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5374 | 15-20%                  |                 5 |              0.10748 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5506 | 5-10%                   |                10 |              0.05506 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5554 | >20%                    |                 5 |              0.11108 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5563 | >20%                    |                 5 |              0.11126 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5573 | >20%                    |                 2 |              0.27865 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5687 | >20%                    |                 5 |              0.11374 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5762 | 15-20%                  |                 5 |              0.11524 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5785 | >20%                    |                 5 |              0.1157  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5832 | >20%                    |                 2 |              0.2916  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5903 | 10-15%                  |                 5 |              0.11806 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.593  | 5-10%                   |                 5 |              0.1186  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.615  | 10-15%                  |                 5 |              0.123   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6165 | >20%                    |                 2 |              0.30825 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6169 | >20%                    |                 2 |              0.30845 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6193 | >20%                    |                 2 |              0.30965 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6199 | 10-15%                  |                 5 |              0.12398 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6218 | 10-15%                  |                 5 |              0.12436 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6264 | >20%                    |                 2 |              0.3132  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6271 | 15-20%                  |                10 |              0.06271 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6296 | >20%                    |                 5 |              0.12592 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.65   | 15-20%                  |                 5 |              0.13    |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6526 | 10-15%                  |                10 |              0.06526 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6589 | 15-20%                  |                10 |              0.06589 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6593 | >20%                    |                10 |              0.06593 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6613 | 10-15%                  |                 2 |              0.33065 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6614 | >20%                    |                 5 |              0.13228 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6655 | >20%                    |                 5 |              0.1331  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6701 | >20%                    |                 5 |              0.13402 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.673  | <5%                     |                10 |              0.0673  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6774 | 5-10%                   |                 2 |              0.3387  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7016 | <5%                     |                10 |              0.07016 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7062 | 5-10%                   |                10 |              0.07062 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7087 | >20%                    |                10 |              0.07087 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7142 | >20%                    |                10 |              0.07142 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7297 | >20%                    |                10 |              0.07297 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7299 | >20%                    |                10 |              0.07299 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7427 | >20%                    |                 5 |              0.14854 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7508 | >20%                    |                10 |              0.07508 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7569 | 5-10%                   |                10 |              0.07569 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.757  | 15-20%                  |                10 |              0.0757  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.76   | >20%                    |                 5 |              0.152   |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7639 | >20%                    |                10 |              0.07639 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7647 | >20%                    |                 5 |              0.15294 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7683 | >20%                    |                 5 |              0.15366 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7706 | >20%                    |                10 |              0.07706 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7735 | >20%                    |                10 |              0.07735 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7862 | 10-15%                  |                10 |              0.07862 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7873 | <5%                     |                10 |              0.07873 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7963 | >20%                    |                10 |              0.07963 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8004 | >20%                    |                 2 |              0.4002  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8096 | 15-20%                  |                 5 |              0.16192 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8304 | >20%                    |                10 |              0.08304 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8306 | >20%                    |                10 |              0.08306 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8346 | >20%                    |                10 |              0.08346 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8629 | >20%                    |                10 |              0.08629 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8759 | >20%                    |                 5 |              0.17518 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8826 | 10-15%                  |                10 |              0.08826 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8856 | 15-20%                  |                10 |              0.08856 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8889 | 10-15%                  |                10 |              0.08889 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.898  | >20%                    |                 5 |              0.1796  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9196 | >20%                    |                10 |              0.09196 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9333 | >20%                    |                 2 |              0.46665 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9362 | 15-20%                  |                10 |              0.09362 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9627 | >20%                    |                 2 |              0.48135 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9828 | >20%                    |                10 |              0.09828 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9858 | <5%                     |                10 |              0.09858 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9868 | 10-15%                  |                10 |              0.09868 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9883 | >20%                    |                10 |              0.09883 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9902 | >20%                    |                10 |              0.09902 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0041 | >20%                    |                10 |              0.10041 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0333 | <5%                     |                 5 |              0.20666 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0488 | >20%                    |                 5 |              0.20976 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0548 | >20%                    |                10 |              0.10548 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0661 | <5%                     |                 5 |              0.21322 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0977 | >20%                    |                 5 |              0.21954 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1278 | >20%                    |                10 |              0.11278 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1496 | >20%                    |                10 |              0.11496 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1693 | 15-20%                  |                10 |              0.11693 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.2514 | <5%                     |                 2 |              0.6257  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2981 | >20%                    |                 2 |              0.64905 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3629 | 15-20%                  |                10 |              0.13629 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3629 | >20%                    |                 5 |              0.27258 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3675 | 10-15%                  |                10 |              0.13675 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.383  | 5-10%                   |                 5 |              0.2766  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4067 | >20%                    |                10 |              0.14067 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4078 | >20%                    |                10 |              0.14078 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4206 | >20%                    |                 2 |              0.7103  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.5395 | >20%                    |                10 |              0.15395 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0375 | 15-20%                  |                10 |              0.20375 |