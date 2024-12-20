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

Data correct as of 2024-12-20 01:38:24.373362, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1202 |                         |                 2 |              0.0601  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1241 |                         |                 2 |              0.06205 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1627 |                         |                 5 |              0.03254 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.168  |                         |                 5 |              0.0336  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.1915 | >20%                    |                 2 |              0.09575 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2045 | 15-20%                  |                 2 |              0.10225 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2197 | 15-20%                  |                 2 |              0.10985 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2224 | 15-20%                  |                 2 |              0.1112  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | 15-20%                  |                 2 |              0.11705 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2348 | 5-10%                   |                 2 |              0.1174  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | >20%                    |                 2 |              0.11935 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2434 | 15-20%                  |                 5 |              0.04868 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2477 |                         |                10 |              0.02477 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2507 | 5-10%                   |                 2 |              0.12535 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.2557 |                         |                10 |              0.02557 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2715 | <5%                     |                 5 |              0.0543  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2787 | <5%                     |                 2 |              0.13935 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2797 | 5-10%                   |                 5 |              0.05594 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2857 | <5%                     |                 2 |              0.14285 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2874 | >20%                    |                 5 |              0.05748 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2877 | 5-10%                   |                 2 |              0.14385 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2899 | 5-10%                   |                 2 |              0.14495 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3001 | 15-20%                  |                10 |              0.03001 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.306  | 5-10%                   |                 2 |              0.153   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3146 | <5%                     |                 2 |              0.1573  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3157 | <5%                     |                 2 |              0.15785 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3176 | >20%                    |                 2 |              0.1588  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3302 | 10-15%                  |                 2 |              0.1651  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3333 | 5-10%                   |                 5 |              0.06666 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3349 | <5%                     |                 5 |              0.06698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3359 | <5%                     |                 2 |              0.16795 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3484 | 5-10%                   |                10 |              0.03484 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3488 | >20%                    |                 5 |              0.06976 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3501 | >20%                    |                 2 |              0.17505 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.351  | 10-15%                  |                 2 |              0.1755  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3524 | 10-15%                  |                 2 |              0.1762  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3533 | >20%                    |                 2 |              0.17665 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.3673 | <5%                     |                 2 |              0.18365 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3688 | >20%                    |                 2 |              0.1844  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3694 | 5-10%                   |                 2 |              0.1847  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3744 | >20%                    |                 2 |              0.1872  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.375  | <5%                     |                 5 |              0.075   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.379  | <5%                     |                 5 |              0.0758  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3837 | <5%                     |                 2 |              0.19185 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3869 | 10-15%                  |                10 |              0.03869 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3982 | 10-15%                  |                 2 |              0.1991  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4081 | >20%                    |                 2 |              0.20405 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4103 | 5-10%                   |                 2 |              0.20515 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.412  | >20%                    |                 5 |              0.0824  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4136 | >20%                    |                 5 |              0.08272 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.414  | 5-10%                   |                 5 |              0.0828  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.414  | 15-20%                  |                 2 |              0.207   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4176 | 5-10%                   |                 2 |              0.2088  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.42   | 10-15%                  |                10 |              0.042   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4221 | 5-10%                   |                 5 |              0.08442 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4225 | 10-15%                  |                 5 |              0.0845  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4272 | >20%                    |                10 |              0.04272 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4301 | 10-15%                  |                 2 |              0.21505 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4312 | >20%                    |                10 |              0.04312 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4345 | <5%                     |                 5 |              0.0869  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4411 | 5-10%                   |                 5 |              0.08822 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4457 | >20%                    |                 5 |              0.08914 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4477 | <5%                     |                 5 |              0.08954 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4536 | >20%                    |                 5 |              0.09072 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.457  | <5%                     |                 5 |              0.0914  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.458  | 5-10%                   |                 2 |              0.229   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4615 | 5-10%                   |                 2 |              0.23075 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4679 | <5%                     |                 5 |              0.09358 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4699 | 15-20%                  |                 2 |              0.23495 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4701 | <5%                     |                 5 |              0.09402 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4712 | 10-15%                  |                 2 |              0.2356  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4751 | >20%                    |                 5 |              0.09502 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4791 | >20%                    |                 5 |              0.09582 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4836 | >20%                    |                 2 |              0.2418  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4838 | <5%                     |                 2 |              0.2419  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4862 | 10-15%                  |                 5 |              0.09724 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4872 | 10-15%                  |                 2 |              0.2436  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4892 | 5-10%                   |                10 |              0.04892 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4995 | >20%                    |                 5 |              0.0999  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5015 | <5%                     |                 5 |              0.1003  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5017 | 15-20%                  |                 5 |              0.10034 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.516  | >20%                    |                 5 |              0.1032  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5294 | <5%                     |                 5 |              0.10588 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.539  | >20%                    |                 5 |              0.1078  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5448 | 5-10%                   |                 5 |              0.10896 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.547  | 15-20%                  |                 2 |              0.2735  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5501 | 10-15%                  |                 5 |              0.11002 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5626 | >20%                    |                10 |              0.05626 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5642 | >20%                    |                 2 |              0.2821  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5663 | 15-20%                  |                 5 |              0.11326 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5878 | <5%                     |                 5 |              0.11756 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6157 | >20%                    |                10 |              0.06157 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6185 | <5%                     |                10 |              0.06185 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6253 | >20%                    |                10 |              0.06253 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6255 | 5-10%                   |                10 |              0.06255 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6424 | 15-20%                  |                 5 |              0.12848 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6582 | 5-10%                   |                10 |              0.06582 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6835 | 5-10%                   |                 5 |              0.1367  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6844 | 5-10%                   |                10 |              0.06844 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.6862 | 5-10%                   |                 5 |              0.13724 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.687  | >20%                    |                 2 |              0.3435  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.6874 | <5%                     |                10 |              0.06874 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6887 | 15-20%                  |                 5 |              0.13774 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6924 | <5%                     |                 5 |              0.13848 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6939 | >20%                    |                10 |              0.06939 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7039 | 10-15%                  |                10 |              0.07039 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7057 | 10-15%                  |                10 |              0.07057 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.7186 | <5%                     |                 2 |              0.3593  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7203 | >20%                    |                 5 |              0.14406 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.728  | <5%                     |                 2 |              0.364   |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7415 | >20%                    |                 5 |              0.1483  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.7468 | >20%                    |                10 |              0.07468 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7484 | >20%                    |                 5 |              0.14968 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7494 | >20%                    |                10 |              0.07494 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7653 | 5-10%                   |                10 |              0.07653 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7735 | 15-20%                  |                10 |              0.07735 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.783  | 5-10%                   |                10 |              0.0783  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7995 | 15-20%                  |                10 |              0.07995 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8105 | <5%                     |                10 |              0.08105 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8204 | 10-15%                  |                10 |              0.08204 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8323 | 5-10%                   |                10 |              0.08323 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8354 | 10-15%                  |                10 |              0.08354 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8625 | <5%                     |                10 |              0.08625 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8628 | <5%                     |                 5 |              0.17256 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8645 | 10-15%                  |                10 |              0.08645 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8721 | 10-15%                  |                 2 |              0.43605 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8819 | <5%                     |                10 |              0.08819 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9    | 5-10%                   |                10 |              0.09    |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9225 | 5-10%                   |                 5 |              0.1845  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9385 | >20%                    |                10 |              0.09385 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9573 | 5-10%                   |                10 |              0.09573 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9638 | 15-20%                  |                10 |              0.09638 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9674 | 15-20%                  |                10 |              0.09674 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9749 | 5-10%                   |                10 |              0.09749 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0059 | <5%                     |                10 |              0.10059 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.0273 | <5%                     |                10 |              0.10273 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0823 | <5%                     |                10 |              0.10823 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.084  | >20%                    |                10 |              0.1084  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1621 | >20%                    |                10 |              0.11621 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2124 | >20%                    |                10 |              0.12124 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4014 | 5-10%                   |                10 |              0.14014 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5492 | 5-10%                   |                 5 |              0.30984 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9212 | 10-15%                  |                10 |              0.19212 |