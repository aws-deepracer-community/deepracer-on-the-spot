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

Data correct as of 2025-06-13 01:56:14.872571, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.0991 | >20%                    |                 2 |              0.04955 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1399 | >20%                    |                 5 |              0.02798 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1569 | 5-10%                   |                 2 |              0.07845 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1745 | >20%                    |                 5 |              0.0349  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 15-20%                  |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2056 | >20%                    |                 2 |              0.1028  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2059 | >20%                    |                 5 |              0.04118 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2118 | 10-15%                  |                10 |              0.02118 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2139 | >20%                    |                 2 |              0.10695 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2264 | >20%                    |                 2 |              0.1132  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2266 | 15-20%                  |                 2 |              0.1133  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2274 | >20%                    |                 2 |              0.1137  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2344 | 15-20%                  |                 2 |              0.1172  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2431 | <5%                     |                 2 |              0.12155 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2438 | >20%                    |                10 |              0.02438 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2481 | 15-20%                  |                 2 |              0.12405 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2507 | 15-20%                  |                10 |              0.02507 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2516 | >20%                    |                 5 |              0.05032 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2578 | 5-10%                   |                10 |              0.02578 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2707 | >20%                    |                 2 |              0.13535 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2729 | 15-20%                  |                 2 |              0.13645 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2762 | >20%                    |                 2 |              0.1381  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2813 | <5%                     |                 2 |              0.14065 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2817 | >20%                    |                 5 |              0.05634 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2905 | >20%                    |                 2 |              0.14525 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2915 | >20%                    |                 2 |              0.14575 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2991 | 10-15%                  |                 2 |              0.14955 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.306  | >20%                    |                 2 |              0.153   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3105 | >20%                    |                 2 |              0.15525 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3106 | >20%                    |                 2 |              0.1553  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3178 | >20%                    |                 2 |              0.1589  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3185 | >20%                    |                 2 |              0.15925 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3195 | >20%                    |                 5 |              0.0639  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3255 | 15-20%                  |                 5 |              0.0651  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3281 | 15-20%                  |                 5 |              0.06562 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3343 | <5%                     |                 2 |              0.16715 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3382 | 5-10%                   |                 2 |              0.1691  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3468 | >20%                    |                 5 |              0.06936 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3473 | >20%                    |                10 |              0.03473 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3513 | 10-15%                  |                 2 |              0.17565 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3713 | 10-15%                  |                 2 |              0.18565 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3733 | >20%                    |                 5 |              0.07466 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3738 | 10-15%                  |                 2 |              0.1869  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3828 | >20%                    |                 2 |              0.1914  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3855 | >20%                    |                 2 |              0.19275 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3945 | >20%                    |                 5 |              0.0789  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3952 | >20%                    |                10 |              0.03952 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3956 | >20%                    |                10 |              0.03956 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3969 | <5%                     |                 5 |              0.07938 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3986 | >20%                    |                 2 |              0.1993  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4022 | 10-15%                  |                 5 |              0.08044 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4061 | >20%                    |                 5 |              0.08122 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4064 | >20%                    |                 2 |              0.2032  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.412  | 10-15%                  |                 5 |              0.0824  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4137 | 15-20%                  |                 2 |              0.20685 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4191 | 5-10%                   |                 2 |              0.20955 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.423  | >20%                    |                 5 |              0.0846  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.424  | <5%                     |                 2 |              0.212   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4301 | <5%                     |                 5 |              0.08602 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4354 | >20%                    |                10 |              0.04354 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4404 | >20%                    |                 2 |              0.2202  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4419 | 15-20%                  |                 5 |              0.08838 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4445 | >20%                    |                 2 |              0.22225 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4483 | >20%                    |                 5 |              0.08966 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4491 | >20%                    |                 2 |              0.22455 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4542 | >20%                    |                 5 |              0.09084 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4581 | >20%                    |                 5 |              0.09162 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4585 | >20%                    |                10 |              0.04585 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4598 | >20%                    |                 5 |              0.09196 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4689 | <5%                     |                 5 |              0.09378 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4698 | 15-20%                  |                10 |              0.04698 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4766 | >20%                    |                 2 |              0.2383  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4791 | >20%                    |                 5 |              0.09582 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4823 | <5%                     |                 5 |              0.09646 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4847 | 15-20%                  |                 5 |              0.09694 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4884 | >20%                    |                 2 |              0.2442  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4909 | 10-15%                  |                 5 |              0.09818 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4959 | >20%                    |                 5 |              0.09918 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4973 | >20%                    |                 2 |              0.24865 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4975 | 5-10%                   |                 5 |              0.0995  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.507  | 10-15%                  |                 2 |              0.2535  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5077 | 15-20%                  |                 2 |              0.25385 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.508  | <5%                     |                 5 |              0.1016  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5085 | 10-15%                  |                 5 |              0.1017  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5179 | <5%                     |                 5 |              0.10358 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5264 | 5-10%                   |                 2 |              0.2632  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5318 | 15-20%                  |                 2 |              0.2659  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5396 | >20%                    |                 2 |              0.2698  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5405 | >20%                    |                 2 |              0.27025 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5481 | >20%                    |                 5 |              0.10962 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5496 | >20%                    |                 5 |              0.10992 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.558  | >20%                    |                 2 |              0.279   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5656 | 10-15%                  |                10 |              0.05656 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5784 | 10-15%                  |                 5 |              0.11568 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5805 | >20%                    |                 5 |              0.1161  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5824 | >20%                    |                 5 |              0.11648 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5904 | 5-10%                   |                 2 |              0.2952  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6013 | >20%                    |                 2 |              0.30065 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6082 | >20%                    |                 2 |              0.3041  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6166 | <5%                     |                 2 |              0.3083  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6227 | >20%                    |                 5 |              0.12454 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.626  | >20%                    |                 2 |              0.313   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6366 | >20%                    |                 5 |              0.12732 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6377 | >20%                    |                 5 |              0.12754 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.641  | >20%                    |                 5 |              0.1282  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.646  | >20%                    |                 5 |              0.1292  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6488 | >20%                    |                 2 |              0.3244  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6511 | <5%                     |                 5 |              0.13022 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6534 | 10-15%                  |                 5 |              0.13068 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6544 | >20%                    |                10 |              0.06544 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6545 | >20%                    |                10 |              0.06545 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6596 | >20%                    |                 5 |              0.13192 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6703 | <5%                     |                10 |              0.06703 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6786 | >20%                    |                 5 |              0.13572 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6815 | 10-15%                  |                 2 |              0.34075 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6879 | >20%                    |                10 |              0.06879 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6955 | >20%                    |                10 |              0.06955 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6957 | 15-20%                  |                10 |              0.06957 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6966 | 15-20%                  |                10 |              0.06966 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6981 | >20%                    |                10 |              0.06981 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7044 | >20%                    |                 5 |              0.14088 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7106 | >20%                    |                10 |              0.07106 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7166 | 10-15%                  |                 5 |              0.14332 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7187 | 15-20%                  |                10 |              0.07187 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7231 | <5%                     |                 5 |              0.14462 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7232 | 15-20%                  |                10 |              0.07232 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7273 | <5%                     |                10 |              0.07273 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7313 | >20%                    |                 2 |              0.36565 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7319 | <5%                     |                 5 |              0.14638 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7416 | >20%                    |                10 |              0.07416 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7435 | >20%                    |                 2 |              0.37175 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7457 | >20%                    |                10 |              0.07457 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7618 | <5%                     |                10 |              0.07618 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7711 | >20%                    |                 5 |              0.15422 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7718 | >20%                    |                10 |              0.07718 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7854 | >20%                    |                 5 |              0.15708 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7928 | <5%                     |                10 |              0.07928 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7964 | >20%                    |                10 |              0.07964 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8005 | >20%                    |                10 |              0.08005 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8116 | 5-10%                   |                 5 |              0.16232 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8133 | 15-20%                  |                10 |              0.08133 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8155 | 10-15%                  |                10 |              0.08155 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8431 | >20%                    |                10 |              0.08431 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8487 | >20%                    |                10 |              0.08487 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8613 | 15-20%                  |                10 |              0.08613 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8682 | >20%                    |                 5 |              0.17364 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8887 | >20%                    |                10 |              0.08887 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9038 | >20%                    |                10 |              0.09038 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9081 | <5%                     |                10 |              0.09081 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9318 | >20%                    |                10 |              0.09318 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9418 | >20%                    |                10 |              0.09418 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9505 | >20%                    |                10 |              0.09505 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9638 | >20%                    |                10 |              0.09638 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9713 | >20%                    |                10 |              0.09713 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9859 | >20%                    |                 5 |              0.19718 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0076 | >20%                    |                10 |              0.10076 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0127 | >20%                    |                10 |              0.10127 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0131 | 10-15%                  |                10 |              0.10131 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0176 | <5%                     |                 2 |              0.5088  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0241 | >20%                    |                10 |              0.10241 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0482 | <5%                     |                 2 |              0.5241  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0512 | >20%                    |                 2 |              0.5256  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0738 | >20%                    |                10 |              0.10738 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0853 | 15-20%                  |                10 |              0.10853 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0926 | >20%                    |                 2 |              0.5463  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0972 | >20%                    |                10 |              0.10972 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1206 | >20%                    |                 5 |              0.22412 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1215 | <5%                     |                 5 |              0.2243  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1335 | 15-20%                  |                10 |              0.11335 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1871 | >20%                    |                 5 |              0.23742 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2081 | 10-15%                  |                10 |              0.12081 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2082 | 15-20%                  |                10 |              0.12082 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2601 | <5%                     |                10 |              0.12601 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2928 | >20%                    |                10 |              0.12928 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3891 | >20%                    |                10 |              0.13891 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4016 | <5%                     |                 5 |              0.28032 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4675 | >20%                    |                 5 |              0.2935  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5042 | >20%                    |                 2 |              0.7521  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5868 | 10-15%                  |                10 |              0.15868 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.7088 | <5%                     |                10 |              0.17088 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9942 | <5%                     |                10 |              0.19942 |