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

Data correct as of 2025-05-12 01:55:57.305769, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1525 | >20%                    |                 2 |              0.07625 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1757 | >20%                    |                 5 |              0.03514 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.1958 | 5-10%                   |                 5 |              0.03916 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2073 | >20%                    |                 5 |              0.04146 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2227 | >20%                    |                 2 |              0.11135 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2239 | <5%                     |                 2 |              0.11195 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2258 | <5%                     |                 2 |              0.1129  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2277 | 15-20%                  |                 2 |              0.11385 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2323 | <5%                     |                 5 |              0.04646 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2546 | <5%                     |                 2 |              0.1273  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.259  | >20%                    |                 2 |              0.1295  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2635 | 5-10%                   |                 5 |              0.0527  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | 15-20%                  |                 2 |              0.13265 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2679 | 5-10%                   |                 2 |              0.13395 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2704 | >20%                    |                 2 |              0.1352  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2803 | >20%                    |                 2 |              0.14015 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2821 | 15-20%                  |                10 |              0.02821 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2916 | 5-10%                   |                 2 |              0.1458  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | 15-20%                  |                10 |              0.0294  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2945 | 10-15%                  |                 2 |              0.14725 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2974 | 5-10%                   |                 2 |              0.1487  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2975 | <5%                     |                 2 |              0.14875 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3025 | 15-20%                  |                 5 |              0.0605  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3048 | >20%                    |                 2 |              0.1524  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3067 | 5-10%                   |                 2 |              0.15335 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3086 | >20%                    |                 2 |              0.1543  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3108 | 15-20%                  |                 5 |              0.06216 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3119 | >20%                    |                 2 |              0.15595 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3179 | 5-10%                   |                 2 |              0.15895 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3235 | >20%                    |                 2 |              0.16175 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3287 | >20%                    |                 5 |              0.06574 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3398 | >20%                    |                 2 |              0.1699  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3398 | >20%                    |                 2 |              0.1699  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3546 | >20%                    |                 5 |              0.07092 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3571 | >20%                    |                10 |              0.03571 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3582 | >20%                    |                 2 |              0.1791  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3593 | 5-10%                   |                 5 |              0.07186 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3597 | >20%                    |                 5 |              0.07194 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.368  | <5%                     |                 2 |              0.184   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3726 | >20%                    |                 2 |              0.1863  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3745 | >20%                    |                 2 |              0.18725 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.377  | <5%                     |                 5 |              0.0754  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3772 | 10-15%                  |                 2 |              0.1886  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3773 | >20%                    |                 2 |              0.18865 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3854 | 10-15%                  |                10 |              0.03854 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3857 | >20%                    |                10 |              0.03857 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.387  | 15-20%                  |                10 |              0.0387  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3882 | 5-10%                   |                 5 |              0.07764 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3901 | >20%                    |                 5 |              0.07802 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3946 | >20%                    |                 2 |              0.1973  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4074 | >20%                    |                 2 |              0.2037  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4127 | 5-10%                   |                 2 |              0.20635 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4201 | 10-15%                  |                 2 |              0.21005 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4279 | >20%                    |                 5 |              0.08558 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.431  | 15-20%                  |                 2 |              0.2155  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4313 | <5%                     |                 5 |              0.08626 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4327 | 15-20%                  |                 5 |              0.08654 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.433  | 10-15%                  |                 2 |              0.2165  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4377 | >20%                    |                 2 |              0.21885 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4432 | >20%                    |                 5 |              0.08864 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4542 | 10-15%                  |                10 |              0.04542 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4552 | <5%                     |                 5 |              0.09104 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4561 | >20%                    |                 5 |              0.09122 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.457  | 10-15%                  |                 5 |              0.0914  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4644 | <5%                     |                10 |              0.04644 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4679 | >20%                    |                 5 |              0.09358 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4684 | <5%                     |                 2 |              0.2342  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4685 | >20%                    |                10 |              0.04685 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4693 | >20%                    |                 5 |              0.09386 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4707 | >20%                    |                 2 |              0.23535 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4719 | >20%                    |                 2 |              0.23595 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4745 | 5-10%                   |                 5 |              0.0949  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4785 | >20%                    |                 5 |              0.0957  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4804 | >20%                    |                 2 |              0.2402  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4835 | >20%                    |                 5 |              0.0967  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4899 | 5-10%                   |                 5 |              0.09798 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4909 | >20%                    |                 2 |              0.24545 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4975 | >20%                    |                 5 |              0.0995  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4999 | >20%                    |                 5 |              0.09998 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5029 | <5%                     |                 5 |              0.10058 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.504  | 15-20%                  |                 5 |              0.1008  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5044 | <5%                     |                10 |              0.05044 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5196 | >20%                    |                 2 |              0.2598  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5213 | 10-15%                  |                 5 |              0.10426 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5229 | 10-15%                  |                 2 |              0.26145 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5265 | >20%                    |                 2 |              0.26325 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5308 | >20%                    |                 2 |              0.2654  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5365 | >20%                    |                 2 |              0.26825 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5603 | 10-15%                  |                 5 |              0.11206 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5632 | 5-10%                   |                 5 |              0.11264 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.57   | >20%                    |                 5 |              0.114   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5701 | >20%                    |                 5 |              0.11402 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5784 | >20%                    |                 5 |              0.11568 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5804 | 10-15%                  |                10 |              0.05804 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5861 | >20%                    |                 5 |              0.11722 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5868 | >20%                    |                 2 |              0.2934  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5964 | >20%                    |                 2 |              0.2982  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6002 | >20%                    |                 5 |              0.12004 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6016 | <5%                     |                 5 |              0.12032 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6083 | 10-15%                  |                 2 |              0.30415 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6181 | >20%                    |                 2 |              0.30905 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6254 | 10-15%                  |                 5 |              0.12508 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6356 | >20%                    |                10 |              0.06356 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6389 | 5-10%                   |                10 |              0.06389 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6402 | >20%                    |                 5 |              0.12804 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6404 | >20%                    |                 5 |              0.12808 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6548 | 10-15%                  |                 5 |              0.13096 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6659 | 15-20%                  |                10 |              0.06659 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6714 | 15-20%                  |                 5 |              0.13428 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6831 | >20%                    |                 5 |              0.13662 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6844 | <5%                     |                 5 |              0.13688 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6875 | >20%                    |                 2 |              0.34375 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6965 | >20%                    |                 5 |              0.1393  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7131 | >20%                    |                10 |              0.07131 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7139 | >20%                    |                 2 |              0.35695 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7167 | 5-10%                   |                10 |              0.07167 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7284 | >20%                    |                 2 |              0.3642  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7307 | >20%                    |                 5 |              0.14614 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7327 | <5%                     |                 5 |              0.14654 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7339 | >20%                    |                10 |              0.07339 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7568 | 10-15%                  |                10 |              0.07568 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7612 | >20%                    |                10 |              0.07612 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7635 | >20%                    |                 2 |              0.38175 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7657 | >20%                    |                10 |              0.07657 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7683 | 15-20%                  |                10 |              0.07683 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7823 | >20%                    |                 5 |              0.15646 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7831 | <5%                     |                10 |              0.07831 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8069 | >20%                    |                10 |              0.08069 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.81   | >20%                    |                 5 |              0.162   |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8102 | <5%                     |                 5 |              0.16204 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8184 | 10-15%                  |                10 |              0.08184 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8225 | 10-15%                  |                10 |              0.08225 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8297 | 15-20%                  |                10 |              0.08297 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8336 | 5-10%                   |                10 |              0.08336 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8387 | >20%                    |                10 |              0.08387 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8455 | 15-20%                  |                10 |              0.08455 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8515 | <5%                     |                10 |              0.08515 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8617 | 10-15%                  |                10 |              0.08617 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8662 | 15-20%                  |                10 |              0.08662 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8782 | >20%                    |                 2 |              0.4391  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.881  | >20%                    |                 2 |              0.4405  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8894 | 10-15%                  |                10 |              0.08894 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8899 | 15-20%                  |                10 |              0.08899 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.896  | <5%                     |                 5 |              0.1792  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.919  | <5%                     |                10 |              0.0919  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9204 | >20%                    |                10 |              0.09204 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9265 | >20%                    |                10 |              0.09265 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9292 | 15-20%                  |                10 |              0.09292 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9298 | >20%                    |                 2 |              0.4649  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9373 | >20%                    |                 5 |              0.18746 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9722 | >20%                    |                10 |              0.09722 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9824 | 10-15%                  |                10 |              0.09824 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0049 | >20%                    |                10 |              0.10049 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0216 | 15-20%                  |                 2 |              0.5108  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0249 | <5%                     |                10 |              0.10249 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0279 | >20%                    |                10 |              0.10279 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0432 | >20%                    |                 5 |              0.20864 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0437 | >20%                    |                 5 |              0.20874 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0537 | >20%                    |                10 |              0.10537 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0778 | 10-15%                  |                 5 |              0.21556 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.146  | <5%                     |                10 |              0.1146  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1759 | >20%                    |                10 |              0.11759 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1818 | 10-15%                  |                 2 |              0.5909  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1974 | >20%                    |                 5 |              0.23948 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2411 | >20%                    |                10 |              0.12411 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2764 | >20%                    |                 5 |              0.25528 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2909 | <5%                     |                 5 |              0.25818 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2941 | >20%                    |                10 |              0.12941 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3138 | >20%                    |                 2 |              0.6569  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3409 | 15-20%                  |                10 |              0.13409 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3665 | >20%                    |                10 |              0.13665 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.447  | 15-20%                  |                10 |              0.1447  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5199 | 15-20%                  |                10 |              0.15199 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5345 | 5-10%                   |                10 |              0.15345 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8022 | >20%                    |                10 |              0.18022 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0357 | <5%                     |                10 |              0.20357 |