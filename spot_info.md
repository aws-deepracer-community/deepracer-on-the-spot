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

Data correct as of 2025-06-24 01:57:46.290308, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1585 | >20%                    |                 2 |              0.07925 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1739 | >20%                    |                 5 |              0.03478 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1841 | 15-20%                  |                 2 |              0.09205 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1971 | 15-20%                  |                 5 |              0.03942 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2043 | <5%                     |                 2 |              0.10215 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2053 | >20%                    |                 5 |              0.04106 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2063 | >20%                    |                 2 |              0.10315 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2189 | >20%                    |                 2 |              0.10945 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2279 | 15-20%                  |                 2 |              0.11395 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2293 | 10-15%                  |                10 |              0.02293 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2336 | >20%                    |                 5 |              0.04672 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2475 | >20%                    |                10 |              0.02475 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2596 | 15-20%                  |                 2 |              0.1298  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2596 | 5-10%                   |                 2 |              0.1298  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2598 | >20%                    |                 2 |              0.1299  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2639 | >20%                    |                 2 |              0.13195 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2675 | 15-20%                  |                 5 |              0.0535  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2693 | >20%                    |                 2 |              0.13465 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2718 | >20%                    |                 2 |              0.1359  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2757 | 15-20%                  |                 2 |              0.13785 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2798 | 5-10%                   |                10 |              0.02798 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2956 | >20%                    |                 2 |              0.1478  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2999 | <5%                     |                 2 |              0.14995 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3003 | 15-20%                  |                 5 |              0.06006 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3034 | >20%                    |                 2 |              0.1517  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3079 | >20%                    |                 2 |              0.15395 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3088 | <5%                     |                 5 |              0.06176 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3114 | >20%                    |                 5 |              0.06228 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3125 | >20%                    |                 2 |              0.15625 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3128 | >20%                    |                 2 |              0.1564  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.32   | >20%                    |                10 |              0.032   |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3201 | >20%                    |                 2 |              0.16005 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3257 | >20%                    |                 2 |              0.16285 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3352 | 10-15%                  |                 2 |              0.1676  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3381 | <5%                     |                 2 |              0.16905 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3384 | >20%                    |                 5 |              0.06768 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3507 | 10-15%                  |                 2 |              0.17535 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3535 | 5-10%                   |                 2 |              0.17675 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3578 | 10-15%                  |                 2 |              0.1789  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3732 | 15-20%                  |                10 |              0.03732 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3765 | >20%                    |                 2 |              0.18825 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3794 | >20%                    |                 5 |              0.07588 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3882 | >20%                    |                 2 |              0.1941  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3883 | 10-15%                  |                 5 |              0.07766 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4001 | 10-15%                  |                 2 |              0.20005 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4088 | >20%                    |                 5 |              0.08176 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4118 | >20%                    |                 5 |              0.08236 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4188 | >20%                    |                 2 |              0.2094  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4188 | >20%                    |                 5 |              0.08376 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4228 | >20%                    |                 5 |              0.08456 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4271 | >20%                    |                 2 |              0.21355 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4334 | <5%                     |                 2 |              0.2167  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4344 | 10-15%                  |                 5 |              0.08688 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4345 | 15-20%                  |                 5 |              0.0869  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4352 | >20%                    |                 5 |              0.08704 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4378 | >20%                    |                 2 |              0.2189  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4407 | 5-10%                   |                 2 |              0.22035 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4486 | >20%                    |                10 |              0.04486 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4493 | >20%                    |                 2 |              0.22465 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.457  | >20%                    |                 2 |              0.2285  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4589 | 15-20%                  |                 2 |              0.22945 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4608 | >20%                    |                 5 |              0.09216 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4623 | >20%                    |                 2 |              0.23115 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4638 | >20%                    |                 5 |              0.09276 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4733 | >20%                    |                 2 |              0.23665 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4754 | >20%                    |                 5 |              0.09508 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4763 | >20%                    |                 2 |              0.23815 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4787 | >20%                    |                 5 |              0.09574 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4841 | <5%                     |                 5 |              0.09682 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4854 | >20%                    |                 2 |              0.2427  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4861 | <5%                     |                 5 |              0.09722 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4894 | 10-15%                  |                 5 |              0.09788 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4902 | 15-20%                  |                 5 |              0.09804 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4905 | 5-10%                   |                 2 |              0.24525 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4988 | >20%                    |                 2 |              0.2494  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.505  | 15-20%                  |                 2 |              0.2525  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5109 | 10-15%                  |                 2 |              0.25545 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5141 | >20%                    |                 5 |              0.10282 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5258 | >20%                    |                 2 |              0.2629  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5281 | >20%                    |                 2 |              0.26405 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5289 | 5-10%                   |                 5 |              0.10578 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5341 | >20%                    |                10 |              0.05341 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5457 | <5%                     |                 5 |              0.10914 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.552  | <5%                     |                10 |              0.0552  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5524 | >20%                    |                 5 |              0.11048 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5532 | 15-20%                  |                 2 |              0.2766  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5579 | 10-15%                  |                 5 |              0.11158 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5628 | 10-15%                  |                 5 |              0.11256 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5659 | 10-15%                  |                10 |              0.05659 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5695 | >20%                    |                 5 |              0.1139  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5761 | <5%                     |                 5 |              0.11522 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5843 | >20%                    |                 5 |              0.11686 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5912 | >20%                    |                 2 |              0.2956  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5937 | <5%                     |                 2 |              0.29685 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5941 | >20%                    |                 5 |              0.11882 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6047 | >20%                    |                 5 |              0.12094 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6082 | >20%                    |                10 |              0.06082 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.609  | >20%                    |                 5 |              0.1218  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6093 | >20%                    |                 5 |              0.12186 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.612  | <5%                     |                 5 |              0.1224  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6129 | >20%                    |                 5 |              0.12258 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6194 | >20%                    |                10 |              0.06194 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6203 | >20%                    |                 5 |              0.12406 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6226 | <5%                     |                 5 |              0.12452 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.624  | >20%                    |                 2 |              0.312   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6247 | >20%                    |                10 |              0.06247 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6318 | 5-10%                   |                 2 |              0.3159  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6372 | >20%                    |                 5 |              0.12744 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6424 | >20%                    |                 5 |              0.12848 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6524 | >20%                    |                 2 |              0.3262  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6572 | >20%                    |                 5 |              0.13144 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6632 | 15-20%                  |                10 |              0.06632 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6652 | >20%                    |                 5 |              0.13304 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6759 | >20%                    |                10 |              0.06759 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6825 | <5%                     |                 5 |              0.1365  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6937 | 10-15%                  |                 2 |              0.34685 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6987 | >20%                    |                10 |              0.06987 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7034 | <5%                     |                10 |              0.07034 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7039 | >20%                    |                10 |              0.07039 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7081 | 10-15%                  |                 5 |              0.14162 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7103 | >20%                    |                 2 |              0.35515 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7132 | >20%                    |                10 |              0.07132 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7163 | 15-20%                  |                10 |              0.07163 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7192 | 10-15%                  |                 5 |              0.14384 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7199 | <5%                     |                 5 |              0.14398 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7215 | >20%                    |                10 |              0.07215 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7267 | >20%                    |                 5 |              0.14534 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7303 | 15-20%                  |                10 |              0.07303 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7362 | 10-15%                  |                10 |              0.07362 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7398 | >20%                    |                10 |              0.07398 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7585 | >20%                    |                10 |              0.07585 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7675 | >20%                    |                 5 |              0.1535  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7802 | 15-20%                  |                10 |              0.07802 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7883 | >20%                    |                10 |              0.07883 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7903 | <5%                     |                10 |              0.07903 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.795  | >20%                    |                 5 |              0.159   |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7972 | >20%                    |                10 |              0.07972 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8061 | 5-10%                   |                 5 |              0.16122 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8238 | >20%                    |                10 |              0.08238 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8375 | <5%                     |                10 |              0.08375 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8405 | >20%                    |                10 |              0.08405 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8469 | >20%                    |                10 |              0.08469 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8542 | >20%                    |                10 |              0.08542 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8669 | 15-20%                  |                10 |              0.08669 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8729 | <5%                     |                10 |              0.08729 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8787 | >20%                    |                10 |              0.08787 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8797 | 15-20%                  |                10 |              0.08797 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8895 | >20%                    |                10 |              0.08895 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8995 | >20%                    |                10 |              0.08995 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9065 | >20%                    |                10 |              0.09065 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.951  | >20%                    |                10 |              0.0951  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9719 | >20%                    |                10 |              0.09719 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9767 | >20%                    |                 5 |              0.19534 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9843 | >20%                    |                 2 |              0.49215 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9848 | >20%                    |                10 |              0.09848 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9876 | >20%                    |                 2 |              0.4938  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9878 | <5%                     |                10 |              0.09878 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9914 | >20%                    |                10 |              0.09914 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0028 | >20%                    |                10 |              0.10028 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.021  | 15-20%                  |                10 |              0.1021  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0244 | >20%                    |                10 |              0.10244 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.035  | 10-15%                  |                10 |              0.1035  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0711 | 15-20%                  |                10 |              0.10711 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0823 | <5%                     |                 2 |              0.54115 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.095  | >20%                    |                 2 |              0.5475  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1087 | >20%                    |                10 |              0.11087 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1246 | 15-20%                  |                10 |              0.11246 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1984 | <5%                     |                 5 |              0.23968 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2145 | 10-15%                  |                10 |              0.12145 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2317 | >20%                    |                10 |              0.12317 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2884 | >20%                    |                10 |              0.12884 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2949 | >20%                    |                 5 |              0.25898 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3763 | >20%                    |                 5 |              0.27526 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4396 | >20%                    |                 5 |              0.28792 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4595 | <5%                     |                 5 |              0.2919  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5264 | 10-15%                  |                10 |              0.15264 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5945 | >20%                    |                 2 |              0.79725 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.6505 | <5%                     |                 2 |              0.82525 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7378 | >20%                    |                10 |              0.17378 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8303 | <5%                     |                10 |              0.18303 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0543 | <5%                     |                10 |              0.20543 |