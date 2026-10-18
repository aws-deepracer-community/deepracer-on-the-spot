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

Data correct as of 2026-10-18 03:48:40.721298, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.092  | >20%                    |                 2 |              0.046   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1433 | >20%                    |                 2 |              0.07165 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1474 | 15-20%                  |                 2 |              0.0737  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1567 | 15-20%                  |                 5 |              0.03134 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1887 | >20%                    |                 5 |              0.03774 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2058 | 10-15%                  |                 2 |              0.1029  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2188 | >20%                    |                 2 |              0.1094  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2413 | 5-10%                   |                10 |              0.02413 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2468 | >20%                    |                 2 |              0.1234  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2658 | >20%                    |                 2 |              0.1329  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2797 | >20%                    |                 2 |              0.13985 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | >20%                    |                 2 |              0.14445 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2901 | >20%                    |                 5 |              0.05802 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2953 | >20%                    |                 2 |              0.14765 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3091 | >20%                    |                 2 |              0.15455 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.311  | >20%                    |                 2 |              0.1555  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3124 | >20%                    |                 5 |              0.06248 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3181 | 15-20%                  |                 2 |              0.15905 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3448 | >20%                    |                10 |              0.03448 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3516 | >20%                    |                 2 |              0.1758  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3649 | 10-15%                  |                 2 |              0.18245 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3672 | >20%                    |                 2 |              0.1836  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3716 | >20%                    |                 5 |              0.07432 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3747 | >20%                    |                10 |              0.03747 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3747 | 15-20%                  |                 2 |              0.18735 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3754 | 15-20%                  |                 2 |              0.1877  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3789 | >20%                    |                 5 |              0.07578 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3895 | >20%                    |                10 |              0.03895 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3942 | <5%                     |                 2 |              0.1971  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4054 | >20%                    |                 5 |              0.08108 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.406  | >20%                    |                 5 |              0.0812  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4198 | >20%                    |                 5 |              0.08396 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4198 | >20%                    |                 5 |              0.08396 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4275 | >20%                    |                 2 |              0.21375 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4358 | >20%                    |                 2 |              0.2179  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4452 | >20%                    |                 5 |              0.08904 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4484 | >20%                    |                 2 |              0.2242  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.455  | <5%                     |                10 |              0.0455  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4586 | 5-10%                   |                10 |              0.04586 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4589 | >20%                    |                 5 |              0.09178 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.4628 | 5-10%                   |                10 |              0.04628 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.465  | >20%                    |                 2 |              0.2325  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | >20%                    |                 5 |              0.09396 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4761 | 10-15%                  |                 2 |              0.23805 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4827 | >20%                    |                 5 |              0.09654 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4887 | >20%                    |                 5 |              0.09774 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.491  | >20%                    |                 2 |              0.2455  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4963 | >20%                    |                 2 |              0.24815 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5057 | >20%                    |                 5 |              0.10114 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5072 |                         |                 2 |              0.2536  |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5184 |                         |                10 |              0.05184 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5297 | >20%                    |                 2 |              0.26485 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5301 | 15-20%                  |                 2 |              0.26505 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5479 | >20%                    |                 2 |              0.27395 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5706 | >20%                    |                 2 |              0.2853  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5803 | >20%                    |                 2 |              0.29015 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5804 | >20%                    |                 5 |              0.11608 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5845 | >20%                    |                 5 |              0.1169  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5872 | 10-15%                  |                 5 |              0.11744 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6202 | >20%                    |                 5 |              0.12404 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6212 | >20%                    |                 5 |              0.12424 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6233 | 10-15%                  |                 2 |              0.31165 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6261 | >20%                    |                 2 |              0.31305 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6334 | >20%                    |                10 |              0.06334 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6366 | <5%                     |                 2 |              0.3183  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6517 | >20%                    |                10 |              0.06517 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6584 | >20%                    |                 5 |              0.13168 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6621 | >20%                    |                 5 |              0.13242 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6654 | >20%                    |                10 |              0.06654 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6668 | 5-10%                   |                 2 |              0.3334  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6816 | <5%                     |                 2 |              0.3408  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6852 | >20%                    |                 5 |              0.13704 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.695  | >20%                    |                 5 |              0.139   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6971 | >20%                    |                 2 |              0.34855 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.72   | 15-20%                  |                 2 |              0.36    |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7313 | >20%                    |                 5 |              0.14626 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7346 | 15-20%                  |                 5 |              0.14692 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7453 | >20%                    |                 5 |              0.14906 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7466 | >20%                    |                 5 |              0.14932 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7566 | >20%                    |                10 |              0.07566 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7575 | >20%                    |                 5 |              0.1515  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7609 | 15-20%                  |                10 |              0.07609 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7624 | >20%                    |                 5 |              0.15248 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.772  | >20%                    |                 5 |              0.1544  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7871 | >20%                    |                 5 |              0.15742 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7901 | 15-20%                  |                10 |              0.07901 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8033 | 15-20%                  |                10 |              0.08033 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8182 | 10-15%                  |                10 |              0.08182 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8216 | >20%                    |                10 |              0.08216 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8221 | >20%                    |                10 |              0.08221 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.843  | >20%                    |                 5 |              0.1686  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8471 | 15-20%                  |                 5 |              0.16942 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8477 | >20%                    |                 2 |              0.42385 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8506 | 10-15%                  |                 2 |              0.4253  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8517 | 5-10%                   |                10 |              0.08517 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8677 | 10-15%                  |                 2 |              0.43385 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8693 | >20%                    |                10 |              0.08693 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8859 | >20%                    |                 5 |              0.17718 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.895  | >20%                    |                10 |              0.0895  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.8996 | 5-10%                   |                 5 |              0.17992 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9004 | >20%                    |                 5 |              0.18008 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.902  |                         |                 5 |              0.1804  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9033 | >20%                    |                 2 |              0.45165 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9072 | <5%                     |                 5 |              0.18144 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9432 | >20%                    |                10 |              0.09432 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9528 | >20%                    |                10 |              0.09528 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9605 | >20%                    |                10 |              0.09605 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9616 | >20%                    |                10 |              0.09616 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.98   | >20%                    |                10 |              0.098   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9859 | 15-20%                  |                10 |              0.09859 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9875 | >20%                    |                10 |              0.09875 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9958 | 15-20%                  |                10 |              0.09958 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0008 | >20%                    |                10 |              0.10008 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0038 | >20%                    |                 5 |              0.20076 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0063 | >20%                    |                10 |              0.10063 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0102 | 15-20%                  |                10 |              0.10102 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0172 | >20%                    |                10 |              0.10172 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0308 | >20%                    |                10 |              0.10308 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0525 | >20%                    |                 5 |              0.2105  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1121 | >20%                    |                 5 |              0.22242 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1177 | 5-10%                   |                10 |              0.11177 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1861 | >20%                    |                10 |              0.11861 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2056 | >20%                    |                10 |              0.12056 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3078 | 10-15%                  |                 2 |              0.6539  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3274 | 10-15%                  |                10 |              0.13274 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.3436 | >20%                    |                 2 |              0.6718  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3604 | 15-20%                  |                10 |              0.13604 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3683 | >20%                    |                10 |              0.13683 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3837 | >20%                    |                 2 |              0.69185 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4334 | >20%                    |                10 |              0.14334 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4391 | >20%                    |                10 |              0.14391 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4486 | >20%                    |                 5 |              0.28972 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.4588 |                         |                 2 |              0.7294  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.4785 |                         |                 5 |              0.2957  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4932 | 5-10%                   |                 2 |              0.7466  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5147 | 5-10%                   |                 5 |              0.30294 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5172 | >20%                    |                 5 |              0.30344 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5279 |                         |                 2 |              0.76395 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.583  | >20%                    |                 2 |              0.7915  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.5838 | 5-10%                   |                 2 |              0.7919  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5863 | >20%                    |                10 |              0.15863 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6086 | >20%                    |                10 |              0.16086 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.6126 | >20%                    |                10 |              0.16126 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.626  | >20%                    |                10 |              0.1626  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6312 | 15-20%                  |                10 |              0.16312 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6682 |                         |                10 |              0.16682 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7398 | >20%                    |                 5 |              0.34796 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9693 |                         |                 5 |              0.39386 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0918 | 15-20%                  |                 5 |              0.41836 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.1998 | >20%                    |                 5 |              0.43996 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2114 | 5-10%                   |                 2 |              1.1057  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2905 | 5-10%                   |                10 |              0.22905 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.4076 |                         |                10 |              0.24076 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5741 | >20%                    |                10 |              0.25741 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0777 | >20%                    |                10 |              0.30777 |