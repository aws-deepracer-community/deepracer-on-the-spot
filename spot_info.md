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

Data correct as of 2026-04-22 02:57:04.706515, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1735 | >20%                    |                 2 |              0.08675 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1782 | 15-20%                  |                 2 |              0.0891  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1945 | >20%                    |                 2 |              0.09725 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2261 | >20%                    |                 2 |              0.11305 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2363 | >20%                    |                 2 |              0.11815 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2508 | 15-20%                  |                 5 |              0.05016 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2613 | 10-15%                  |                 2 |              0.13065 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.263  | >20%                    |                 2 |              0.1315  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.265  | >20%                    |                 2 |              0.1325  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2709 | 5-10%                   |                10 |              0.02709 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | 15-20%                  |                 2 |              0.14135 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2892 | 15-20%                  |                 5 |              0.05784 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2924 | 15-20%                  |                 2 |              0.1462  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2947 | 15-20%                  |                 5 |              0.05894 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2974 | >20%                    |                10 |              0.02974 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3072 | >20%                    |                 2 |              0.1536  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3097 | <5%                     |                10 |              0.03097 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3115 | >20%                    |                 2 |              0.15575 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3119 | >20%                    |                 5 |              0.06238 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3224 | 10-15%                  |                 2 |              0.1612  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3287 | >20%                    |                 5 |              0.06574 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3299 | >20%                    |                 5 |              0.06598 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3341 | 5-10%                   |                10 |              0.03341 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3345 | <5%                     |                 2 |              0.16725 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3379 | 10-15%                  |                 2 |              0.16895 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3464 | >20%                    |                 2 |              0.1732  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3478 | >20%                    |                10 |              0.03478 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3592 | >20%                    |                 5 |              0.07184 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3675 | >20%                    |                 2 |              0.18375 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.371  | >20%                    |                 5 |              0.0742  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3718 | >20%                    |                 2 |              0.1859  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3754 | >20%                    |                10 |              0.03754 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3794 | 5-10%                   |                10 |              0.03794 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3924 | 10-15%                  |                 2 |              0.1962  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3956 | >20%                    |                 5 |              0.07912 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3996 | >20%                    |                 5 |              0.07992 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4034 | >20%                    |                 2 |              0.2017  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4095 | <5%                     |                 2 |              0.20475 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4105 | >20%                    |                 5 |              0.0821  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4134 | <5%                     |                 2 |              0.2067  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4156 | >20%                    |                 5 |              0.08312 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4161 | >20%                    |                 2 |              0.20805 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4172 | >20%                    |                 2 |              0.2086  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4185 | >20%                    |                 2 |              0.20925 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4194 | >20%                    |                 2 |              0.2097  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4204 | >20%                    |                 5 |              0.08408 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4254 | >20%                    |                 5 |              0.08508 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4262 | >20%                    |                 5 |              0.08524 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4297 | >20%                    |                 5 |              0.08594 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4397 | >20%                    |                 2 |              0.21985 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4473 | >20%                    |                 2 |              0.22365 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4546 | >20%                    |                 5 |              0.09092 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4551 | 15-20%                  |                 2 |              0.22755 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4602 | >20%                    |                 5 |              0.09204 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4654 | >20%                    |                 5 |              0.09308 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4705 | 15-20%                  |                 2 |              0.23525 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4732 | >20%                    |                 5 |              0.09464 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4734 | >20%                    |                10 |              0.04734 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4744 | >20%                    |                 2 |              0.2372  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4786 | >20%                    |                 5 |              0.09572 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4793 | >20%                    |                 5 |              0.09586 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4801 | >20%                    |                 2 |              0.24005 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4822 | >20%                    |                 5 |              0.09644 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4829 | 10-15%                  |                 2 |              0.24145 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4966 | 5-10%                   |                 2 |              0.2483  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4982 | >20%                    |                10 |              0.04982 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5017 | >20%                    |                 5 |              0.10034 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5055 | >20%                    |                 2 |              0.25275 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5261 | 5-10%                   |                 2 |              0.26305 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5317 | 5-10%                   |                 5 |              0.10634 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5365 | >20%                    |                10 |              0.05365 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5413 | >20%                    |                 5 |              0.10826 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5562 | 15-20%                  |                 2 |              0.2781  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5575 | 15-20%                  |                 5 |              0.1115  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5593 | 10-15%                  |                 5 |              0.11186 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5702 | <5%                     |                 5 |              0.11404 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5768 | 5-10%                   |                 5 |              0.11536 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.586  | >20%                    |                 2 |              0.293   |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5974 | >20%                    |                 5 |              0.11948 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6127 | >20%                    |                 2 |              0.30635 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.614  | >20%                    |                 2 |              0.307   |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6191 | >20%                    |                10 |              0.06191 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6216 | >20%                    |                 2 |              0.3108  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6238 | >20%                    |                10 |              0.06238 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6327 | 10-15%                  |                 2 |              0.31635 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6385 | >20%                    |                10 |              0.06385 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6452 | >20%                    |                 5 |              0.12904 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6499 | >20%                    |                10 |              0.06499 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.657  | >20%                    |                 5 |              0.1314  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.672  | >20%                    |                 5 |              0.1344  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6772 | >20%                    |                 2 |              0.3386  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.689  | >20%                    |                10 |              0.0689  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6908 | >20%                    |                 5 |              0.13816 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7027 | >20%                    |                10 |              0.07027 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7145 | >20%                    |                 5 |              0.1429  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7163 | >20%                    |                 5 |              0.14326 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7243 | >20%                    |                10 |              0.07243 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7485 | 15-20%                  |                10 |              0.07485 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.755  | >20%                    |                10 |              0.0755  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7553 | 5-10%                   |                10 |              0.07553 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7616 | >20%                    |                10 |              0.07616 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7632 | >20%                    |                 5 |              0.15264 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7731 | >20%                    |                 5 |              0.15462 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7747 | 5-10%                   |                10 |              0.07747 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7877 | >20%                    |                10 |              0.07877 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7897 | 15-20%                  |                10 |              0.07897 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7906 | >20%                    |                 2 |              0.3953  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.795  | >20%                    |                 5 |              0.159   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8032 | >20%                    |                 5 |              0.16064 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8127 | >20%                    |                10 |              0.08127 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8162 | >20%                    |                10 |              0.08162 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8234 | >20%                    |                 5 |              0.16468 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8353 | >20%                    |                 2 |              0.41765 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8359 | >20%                    |                10 |              0.08359 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8552 | 15-20%                  |                10 |              0.08552 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8728 | >20%                    |                10 |              0.08728 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8961 | 15-20%                  |                10 |              0.08961 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9136 | >20%                    |                10 |              0.09136 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9166 | >20%                    |                 5 |              0.18332 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9289 | 10-15%                  |                10 |              0.09289 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9347 | >20%                    |                 5 |              0.18694 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9422 | >20%                    |                10 |              0.09422 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9465 | >20%                    |                 5 |              0.1893  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9647 | >20%                    |                10 |              0.09647 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9709 | >20%                    |                10 |              0.09709 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9816 | >20%                    |                10 |              0.09816 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9883 | >20%                    |                10 |              0.09883 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9996 | 5-10%                   |                 2 |              0.4998  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0006 | >20%                    |                10 |              0.10006 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0102 | 5-10%                   |                10 |              0.10102 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0217 | 15-20%                  |                10 |              0.10217 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0352 | 15-20%                  |                10 |              0.10352 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0388 | >20%                    |                 5 |              0.20776 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0835 | 10-15%                  |                10 |              0.10835 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0981 | >20%                    |                10 |              0.10981 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1412 | >20%                    |                 2 |              0.5706  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.1547 |                         |                 2 |              0.57735 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1759 | 10-15%                  |                 2 |              0.58795 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.186  | >20%                    |                10 |              0.1186  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2037 | >20%                    |                 5 |              0.24074 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2047 |                         |                 5 |              0.24094 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2725 | >20%                    |                10 |              0.12725 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3467 | >20%                    |                 5 |              0.26934 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3681 | >20%                    |                 5 |              0.27362 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3855 | 15-20%                  |                10 |              0.13855 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4177 | 5-10%                   |                 2 |              0.70885 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4531 | 15-20%                  |                10 |              0.14531 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5197 | >20%                    |                10 |              0.15197 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.578  | >20%                    |                10 |              0.1578  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6151 |                         |                10 |              0.16151 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.622  | 15-20%                  |                 5 |              0.3244  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.8739 | >20%                    |                10 |              0.28739 |