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

Data correct as of 2025-03-07 01:42:50.057068, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.108  | 10-15%                  |                 2 |              0.054   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1353 | 5-10%                   |                 5 |              0.02706 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1417 | >20%                    |                 2 |              0.07085 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1861 | >20%                    |                 5 |              0.03722 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1938 | 15-20%                  |                 5 |              0.03876 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1967 | 5-10%                   |                 2 |              0.09835 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1986 | >20%                    |                 5 |              0.03972 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2    | 5-10%                   |                 5 |              0.04    |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2131 | 5-10%                   |                 2 |              0.10655 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2296 | >20%                    |                 2 |              0.1148  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2316 | >20%                    |                 2 |              0.1158  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2331 | >20%                    |                 2 |              0.11655 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2367 | 15-20%                  |                 2 |              0.11835 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2372 | <5%                     |                 2 |              0.1186  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2422 | 10-15%                  |                 5 |              0.04844 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2466 | 5-10%                   |                 2 |              0.1233  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2495 | 5-10%                   |                10 |              0.02495 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2498 | 10-15%                  |                 2 |              0.1249  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2533 | 15-20%                  |                 2 |              0.12665 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2604 | >20%                    |                 2 |              0.1302  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2749 | 10-15%                  |                10 |              0.02749 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2799 | 5-10%                   |                 2 |              0.13995 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3018 | 5-10%                   |                 2 |              0.1509  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3026 | 5-10%                   |                 2 |              0.1513  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3047 | 5-10%                   |                 5 |              0.06094 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3096 | >20%                    |                 2 |              0.1548  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3105 | <5%                     |                 2 |              0.15525 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3113 | <5%                     |                 2 |              0.15565 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3159 | 10-15%                  |                 2 |              0.15795 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3233 | 5-10%                   |                 5 |              0.06466 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.3343 | <5%                     |                 2 |              0.16715 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3355 | 5-10%                   |                10 |              0.03355 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3409 | >20%                    |                 2 |              0.17045 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3452 | 10-15%                  |                 2 |              0.1726  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3493 | >20%                    |                 5 |              0.06986 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3537 | 5-10%                   |                 2 |              0.17685 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3562 | >20%                    |                 2 |              0.1781  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3588 | >20%                    |                 2 |              0.1794  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3622 | 10-15%                  |                 5 |              0.07244 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3624 | 10-15%                  |                10 |              0.03624 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3648 | 5-10%                   |                10 |              0.03648 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.366  | 5-10%                   |                 5 |              0.0732  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3674 | >20%                    |                10 |              0.03674 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.372  | >20%                    |                 2 |              0.186   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3723 | <5%                     |                 2 |              0.18615 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3758 | 15-20%                  |                10 |              0.03758 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3789 | >20%                    |                 2 |              0.18945 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.381  | <5%                     |                 5 |              0.0762  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3811 | <5%                     |                 5 |              0.07622 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3882 | >20%                    |                 5 |              0.07764 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3909 | >20%                    |                 2 |              0.19545 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3961 | >20%                    |                 5 |              0.07922 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3999 | >20%                    |                 2 |              0.19995 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.408  | <5%                     |                 2 |              0.204   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.412  | >20%                    |                 2 |              0.206   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4138 | 5-10%                   |                 2 |              0.2069  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4214 | 5-10%                   |                 2 |              0.2107  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4299 | 5-10%                   |                 2 |              0.21495 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4301 | 15-20%                  |                 2 |              0.21505 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4305 | 5-10%                   |                 2 |              0.21525 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4311 | <5%                     |                10 |              0.04311 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4405 | >20%                    |                 5 |              0.0881  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4417 | >20%                    |                 2 |              0.22085 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4464 | 10-15%                  |                 5 |              0.08928 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4471 | >20%                    |                 5 |              0.08942 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4488 | <5%                     |                 2 |              0.2244  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4497 | 10-15%                  |                10 |              0.04497 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.451  | >20%                    |                10 |              0.0451  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4535 | >20%                    |                 2 |              0.22675 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4562 | >20%                    |                 2 |              0.2281  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4652 | 5-10%                   |                 5 |              0.09304 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4677 | >20%                    |                 2 |              0.23385 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.472  | >20%                    |                 5 |              0.0944  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4761 | >20%                    |                 5 |              0.09522 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4833 | <5%                     |                 5 |              0.09666 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.4837 | 5-10%                   |                10 |              0.04837 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.491  | 5-10%                   |                 5 |              0.0982  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4912 | 5-10%                   |                 5 |              0.09824 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4951 | <5%                     |                 5 |              0.09902 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5141 | >20%                    |                 2 |              0.25705 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5176 | >20%                    |                 5 |              0.10352 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5194 | >20%                    |                 5 |              0.10388 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5206 | >20%                    |                 2 |              0.2603  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5209 | 10-15%                  |                 5 |              0.10418 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5252 | 10-15%                  |                 2 |              0.2626  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5271 | >20%                    |                 2 |              0.26355 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.533  | >20%                    |                 5 |              0.1066  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5506 | 5-10%                   |                10 |              0.05506 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5516 | >20%                    |                 2 |              0.2758  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.553  | >20%                    |                 5 |              0.1106  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5574 | 15-20%                  |                 2 |              0.2787  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5635 | 5-10%                   |                 5 |              0.1127  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5646 | 5-10%                   |                 5 |              0.11292 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5681 | <5%                     |                 5 |              0.11362 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5701 | 10-15%                  |                 5 |              0.11402 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5706 | 10-15%                  |                 5 |              0.11412 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5711 | >20%                    |                 2 |              0.28555 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.575  | 15-20%                  |                 5 |              0.115   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5833 | 5-10%                   |                 5 |              0.11666 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5959 | >20%                    |                 2 |              0.29795 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6048 | >20%                    |                 5 |              0.12096 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6061 | <5%                     |                 5 |              0.12122 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6103 | 15-20%                  |                 5 |              0.12206 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6132 | >20%                    |                 5 |              0.12264 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.6138 | 15-20%                  |                 2 |              0.3069  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6352 | >20%                    |                10 |              0.06352 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6451 | >20%                    |                 2 |              0.32255 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6635 | >20%                    |                 5 |              0.1327  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6652 | <5%                     |                10 |              0.06652 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.685  | 10-15%                  |                 5 |              0.137   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6896 | >20%                    |                10 |              0.06896 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6966 | >20%                    |                 5 |              0.13932 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7023 | >20%                    |                 5 |              0.14046 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7023 | >20%                    |                10 |              0.07023 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7047 | >20%                    |                 5 |              0.14094 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7251 | >20%                    |                 5 |              0.14502 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7354 | >20%                    |                 2 |              0.3677  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7373 | >20%                    |                10 |              0.07373 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7379 | 5-10%                   |                 2 |              0.36895 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7466 | >20%                    |                10 |              0.07466 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7524 | >20%                    |                 2 |              0.3762  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7527 | <5%                     |                 5 |              0.15054 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7559 | >20%                    |                10 |              0.07559 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7572 | >20%                    |                 5 |              0.15144 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7617 | 5-10%                   |                10 |              0.07617 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7696 | 5-10%                   |                 5 |              0.15392 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7787 | >20%                    |                 5 |              0.15574 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.78   | >20%                    |                10 |              0.078   |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7933 | <5%                     |                10 |              0.07933 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7934 | >20%                    |                10 |              0.07934 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8059 | >20%                    |                10 |              0.08059 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8066 | >20%                    |                10 |              0.08066 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8127 | 15-20%                  |                 5 |              0.16254 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8171 | 5-10%                   |                10 |              0.08171 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8237 | <5%                     |                10 |              0.08237 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8287 | <5%                     |                10 |              0.08287 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8323 | >20%                    |                10 |              0.08323 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8551 | >20%                    |                 5 |              0.17102 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8616 | 5-10%                   |                10 |              0.08616 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8709 | 15-20%                  |                 5 |              0.17418 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.872  | 15-20%                  |                10 |              0.0872  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8756 | <5%                     |                10 |              0.08756 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8766 | <5%                     |                10 |              0.08766 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8933 | 5-10%                   |                10 |              0.08933 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.93   | >20%                    |                10 |              0.093   |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9352 | >20%                    |                10 |              0.09352 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9733 | 5-10%                   |                10 |              0.09733 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9786 | >20%                    |                10 |              0.09786 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0013 | 15-20%                  |                10 |              0.10013 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0039 | <5%                     |                10 |              0.10039 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0193 | >20%                    |                10 |              0.10193 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0213 | 5-10%                   |                10 |              0.10213 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0343 | >20%                    |                10 |              0.10343 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0447 | 10-15%                  |                10 |              0.10447 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0666 | 5-10%                   |                10 |              0.10666 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0799 | <5%                     |                10 |              0.10799 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0802 | 5-10%                   |                 2 |              0.5401  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1021 | >20%                    |                 2 |              0.55105 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1187 | >20%                    |                10 |              0.11187 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1536 | >20%                    |                10 |              0.11536 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1763 | 15-20%                  |                10 |              0.11763 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.2026 | 15-20%                  |                10 |              0.12026 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3064 | >20%                    |                 5 |              0.26128 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3331 | >20%                    |                10 |              0.13331 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3349 | 5-10%                   |                 5 |              0.26698 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.3592 | >20%                    |                 2 |              0.6796  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3682 | 10-15%                  |                 5 |              0.27364 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3898 | >20%                    |                10 |              0.13898 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5686 | >20%                    |                10 |              0.15686 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.7225 | >20%                    |                 2 |              0.86125 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7522 | >20%                    |                10 |              0.17522 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.7553 | >20%                    |                 5 |              0.35106 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.8014 | >20%                    |                 5 |              0.36028 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8486 | >20%                    |                10 |              0.18486 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1481 | 5-10%                   |                10 |              0.21481 |