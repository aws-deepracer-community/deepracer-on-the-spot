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

Data correct as of 2026-07-29 02:55:59.855519, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1306 | >20%                    |                 2 |              0.0653  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1734 | >20%                    |                 2 |              0.0867  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2194 | 15-20%                  |                 2 |              0.1097  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2199 | 15-20%                  |                 5 |              0.04398 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2329 | >20%                    |                 2 |              0.11645 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.234  | >20%                    |                 2 |              0.117   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2398 | >20%                    |                 2 |              0.1199  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2513 | >20%                    |                 2 |              0.12565 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2562 | 5-10%                   |                10 |              0.02562 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2615 | >20%                    |                 2 |              0.13075 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2755 | >20%                    |                 2 |              0.13775 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2781 | >20%                    |                 2 |              0.13905 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2786 | >20%                    |                 2 |              0.1393  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2814 | 15-20%                  |                 2 |              0.1407  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | >20%                    |                 2 |              0.15025 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3092 | 10-15%                  |                 2 |              0.1546  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.3109 | >20%                    |                10 |              0.03109 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3154 | 15-20%                  |                 2 |              0.1577  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3215 | >20%                    |                 2 |              0.16075 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3316 | >20%                    |                 5 |              0.06632 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3363 | 15-20%                  |                 5 |              0.06726 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3505 | 10-15%                  |                 2 |              0.17525 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3529 | >20%                    |                 5 |              0.07058 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3565 | 5-10%                   |                10 |              0.03565 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3622 | >20%                    |                10 |              0.03622 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3658 | >20%                    |                 2 |              0.1829  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3704 | <5%                     |                 2 |              0.1852  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3765 | >20%                    |                 5 |              0.0753  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.383  | >20%                    |                 5 |              0.0766  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3871 | >20%                    |                 5 |              0.07742 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3881 | >20%                    |                 5 |              0.07762 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3939 | >20%                    |                 2 |              0.19695 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4038 | 5-10%                   |                10 |              0.04038 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4075 | 15-20%                  |                 2 |              0.20375 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | 10-15%                  |                 2 |              0.20925 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4211 | >20%                    |                 2 |              0.21055 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4276 | >20%                    |                10 |              0.04276 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4348 | >20%                    |                 5 |              0.08696 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.437  | >20%                    |                 5 |              0.0874  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4478 | >20%                    |                 2 |              0.2239  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4479 | 10-15%                  |                10 |              0.04479 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4495 | >20%                    |                 5 |              0.0899  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4498 | >20%                    |                10 |              0.04498 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4591 | <5%                     |                 2 |              0.22955 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4602 | 10-15%                  |                 2 |              0.2301  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4751 | >20%                    |                 2 |              0.23755 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4769 | 15-20%                  |                 5 |              0.09538 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4786 | >20%                    |                 5 |              0.09572 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4789 | >20%                    |                 2 |              0.23945 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4825 | >20%                    |                 5 |              0.0965  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4879 | >20%                    |                 2 |              0.24395 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5021 | >20%                    |                 2 |              0.25105 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.509  | >20%                    |                 5 |              0.1018  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.524  | >20%                    |                 5 |              0.1048  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.526  | <5%                     |                 2 |              0.263   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5304 | >20%                    |                 5 |              0.10608 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5328 | >20%                    |                10 |              0.05328 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5338 | >20%                    |                 5 |              0.10676 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5352 | >20%                    |                 5 |              0.10704 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5449 | >20%                    |                 5 |              0.10898 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5479 | 15-20%                  |                 2 |              0.27395 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5602 | >20%                    |                 2 |              0.2801  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5612 | 10-15%                  |                 5 |              0.11224 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5662 | >20%                    |                 5 |              0.11324 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.57   | 5-10%                   |                 2 |              0.285   |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5759 | >20%                    |                10 |              0.05759 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.576  | >20%                    |                 5 |              0.1152  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.579  | >20%                    |                 5 |              0.1158  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5823 | >20%                    |                 2 |              0.29115 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5948 | >20%                    |                 5 |              0.11896 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5967 | >20%                    |                 2 |              0.29835 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6105 | >20%                    |                 5 |              0.1221  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6165 | >20%                    |                 5 |              0.1233  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6289 | >20%                    |                 2 |              0.31445 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6384 | >20%                    |                 2 |              0.3192  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6603 | >20%                    |                 5 |              0.13206 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6634 | >20%                    |                10 |              0.06634 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6675 | >20%                    |                10 |              0.06675 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.668  | 15-20%                  |                 5 |              0.1336  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6698 | <5%                     |                 5 |              0.13396 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6815 | 5-10%                   |                 5 |              0.1363  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6855 | >20%                    |                10 |              0.06855 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7037 | >20%                    |                 5 |              0.14074 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7067 | >20%                    |                 5 |              0.14134 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7211 | 15-20%                  |                10 |              0.07211 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7221 | >20%                    |                10 |              0.07221 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7236 |                         |                 2 |              0.3618  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7441 |                         |                 5 |              0.14882 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7484 | >20%                    |                10 |              0.07484 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7554 | >20%                    |                 5 |              0.15108 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.759  | >20%                    |                10 |              0.0759  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7604 | >20%                    |                 5 |              0.15208 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7622 | <5%                     |                10 |              0.07622 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.7664 |                         |                 2 |              0.3832  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8013 | >20%                    |                 5 |              0.16026 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8014 | >20%                    |                10 |              0.08014 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8046 | >20%                    |                10 |              0.08046 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8083 | 5-10%                   |                10 |              0.08083 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8172 | >20%                    |                 2 |              0.4086  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8333 | 10-15%                  |                 2 |              0.41665 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8353 | >20%                    |                10 |              0.08353 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8524 | >20%                    |                 5 |              0.17048 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8528 | >20%                    |                 2 |              0.4264  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8635 | 15-20%                  |                10 |              0.08635 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8644 | >20%                    |                 5 |              0.17288 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8671 | >20%                    |                 2 |              0.43355 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.879  | >20%                    |                 5 |              0.1758  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8951 | 10-15%                  |                 2 |              0.44755 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9024 | >20%                    |                10 |              0.09024 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9025 | 15-20%                  |                10 |              0.09025 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9291 | >20%                    |                 5 |              0.18582 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9333 | >20%                    |                10 |              0.09333 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9356 | 15-20%                  |                10 |              0.09356 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9394 | >20%                    |                10 |              0.09394 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9576 | >20%                    |                 2 |              0.4788  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9595 | >20%                    |                10 |              0.09595 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9786 | 5-10%                   |                 2 |              0.4893  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.982  | 5-10%                   |                10 |              0.0982  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0038 | 15-20%                  |                 2 |              0.5019  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0081 | 15-20%                  |                10 |              0.10081 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.014  | >20%                    |                 5 |              0.2028  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0387 | >20%                    |                10 |              0.10387 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0389 | >20%                    |                10 |              0.10389 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0423 | >20%                    |                 5 |              0.20846 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0477 | >20%                    |                 5 |              0.20954 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0578 | >20%                    |                10 |              0.10578 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0606 | >20%                    |                 5 |              0.21212 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0792 | >20%                    |                10 |              0.10792 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.085  | >20%                    |                10 |              0.1085  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1432 | 5-10%                   |                 5 |              0.22864 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.147  | >20%                    |                 2 |              0.5735  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.16   | 5-10%                   |                 2 |              0.58    |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1745 | >20%                    |                10 |              0.11745 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.2077 | 15-20%                  |                10 |              0.12077 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2192 | >20%                    |                10 |              0.12192 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2668 | >20%                    |                 5 |              0.25336 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2871 | >20%                    |                10 |              0.12871 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3057 | 10-15%                  |                 2 |              0.65285 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3101 |                         |                10 |              0.13101 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3218 | 15-20%                  |                10 |              0.13218 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3673 |                         |                 5 |              0.27346 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4227 | >20%                    |                 5 |              0.28454 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.5031 | >20%                    |                10 |              0.15031 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5923 | 15-20%                  |                 5 |              0.31846 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5967 | 10-15%                  |                10 |              0.15967 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6277 | 5-10%                   |                10 |              0.16277 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6954 | >20%                    |                10 |              0.16954 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7938 | 15-20%                  |                10 |              0.17938 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8521 |                         |                10 |              0.18521 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.91   | >20%                    |                10 |              0.191   |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0154 | >20%                    |                10 |              0.20154 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0876 | 5-10%                   |                 2 |              1.0438  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.2679 | >20%                    |                 5 |              0.45358 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.6094 | >20%                    |                 5 |              0.52188 |