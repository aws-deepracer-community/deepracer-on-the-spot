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

Data correct as of 2026-10-14 04:13:31.544395, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1061 | >20%                    |                 2 |              0.05305 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1462 | >20%                    |                 2 |              0.0731  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1617 | 15-20%                  |                 2 |              0.08085 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1886 | 15-20%                  |                 5 |              0.03772 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2074 | >20%                    |                 2 |              0.1037  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2231 | >20%                    |                 5 |              0.04462 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2311 | 10-15%                  |                 2 |              0.11555 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2538 | >20%                    |                 2 |              0.1269  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2671 | 5-10%                   |                10 |              0.02671 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2678 | >20%                    |                 2 |              0.1339  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2707 | >20%                    |                 2 |              0.13535 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | >20%                    |                 2 |              0.1392  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2924 | >20%                    |                 2 |              0.1462  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2998 | 15-20%                  |                 2 |              0.1499  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3112 | >20%                    |                 5 |              0.06224 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.313  | >20%                    |                 2 |              0.1565  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3132 | >20%                    |                 2 |              0.1566  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3564 | <5%                     |                10 |              0.03564 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3585 | 10-15%                  |                 2 |              0.17925 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3596 | >20%                    |                 5 |              0.07192 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3649 | >20%                    |                 5 |              0.07298 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3703 | >20%                    |                 2 |              0.18515 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3727 | 15-20%                  |                 2 |              0.18635 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3748 | 15-20%                  |                 2 |              0.1874  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3872 | >20%                    |                 5 |              0.07744 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3876 | >20%                    |                 2 |              0.1938  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3889 | >20%                    |                 5 |              0.07778 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3937 | >20%                    |                10 |              0.03937 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3939 | <5%                     |                 2 |              0.19695 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3947 | >20%                    |                10 |              0.03947 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4052 | >20%                    |                 5 |              0.08104 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4078 | >20%                    |                 5 |              0.08156 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4091 | 5-10%                   |                10 |              0.04091 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4092 | >20%                    |                 5 |              0.08184 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4114 | >20%                    |                10 |              0.04114 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4209 | >20%                    |                 2 |              0.21045 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4391 | >20%                    |                 2 |              0.21955 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4523 | >20%                    |                 2 |              0.22615 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4523 | >20%                    |                 5 |              0.09046 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4546 | >20%                    |                 2 |              0.2273  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4684 | >20%                    |                 5 |              0.09368 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4731 | 10-15%                  |                 2 |              0.23655 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4838 | >20%                    |                 2 |              0.2419  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4843 | >20%                    |                 5 |              0.09686 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4872 |                         |                 2 |              0.2436  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4896 | >20%                    |                 2 |              0.2448  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5024 | >20%                    |                 2 |              0.2512  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5107 | >20%                    |                 5 |              0.10214 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5112 | >20%                    |                 5 |              0.10224 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5155 |                         |                10 |              0.05155 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5171 | >20%                    |                 2 |              0.25855 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5218 | >20%                    |                 5 |              0.10436 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5319 | 5-10%                   |                10 |              0.05319 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5489 | >20%                    |                 2 |              0.27445 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5498 | 15-20%                  |                 2 |              0.2749  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5653 | <5%                     |                 2 |              0.28265 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5694 | >20%                    |                 5 |              0.11388 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5744 | 10-15%                  |                 5 |              0.11488 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5899 | >20%                    |                 5 |              0.11798 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5998 | >20%                    |                 2 |              0.2999  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6049 | >20%                    |                 5 |              0.12098 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6051 | >20%                    |                 2 |              0.30255 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6074 | >20%                    |                 5 |              0.12148 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6227 | >20%                    |                 5 |              0.12454 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6253 | 10-15%                  |                 2 |              0.31265 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6283 | >20%                    |                 5 |              0.12566 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6401 | >20%                    |                10 |              0.06401 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6645 | >20%                    |                 5 |              0.1329  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6664 | >20%                    |                 5 |              0.13328 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6709 | 5-10%                   |                 2 |              0.33545 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.671  | >20%                    |                 5 |              0.1342  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6795 | >20%                    |                10 |              0.06795 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6814 | <5%                     |                 2 |              0.3407  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6833 | >20%                    |                10 |              0.06833 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6918 | >20%                    |                 5 |              0.13836 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6923 | >20%                    |                 5 |              0.13846 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6964 | >20%                    |                 2 |              0.3482  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7136 | 15-20%                  |                 2 |              0.3568  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.73   | >20%                    |                10 |              0.073   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7335 | >20%                    |                 5 |              0.1467  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7347 | 15-20%                  |                 5 |              0.14694 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7433 | >20%                    |                10 |              0.07433 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7454 | 15-20%                  |                10 |              0.07454 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7474 | >20%                    |                 5 |              0.14948 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7504 | >20%                    |                 5 |              0.15008 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7851 | >20%                    |                10 |              0.07851 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7959 | >20%                    |                 5 |              0.15918 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8008 | 15-20%                  |                10 |              0.08008 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.8068 | 5-10%                   |                 5 |              0.16136 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8164 | 15-20%                  |                10 |              0.08164 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8196 | >20%                    |                 5 |              0.16392 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.8244 |                         |                 5 |              0.16488 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.831  | >20%                    |                10 |              0.0831  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8325 | 10-15%                  |                10 |              0.08325 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8353 | 5-10%                   |                10 |              0.08353 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8414 | >20%                    |                10 |              0.08414 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8436 | 15-20%                  |                 5 |              0.16872 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8441 | >20%                    |                 5 |              0.16882 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8498 | >20%                    |                 2 |              0.4249  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.858  | >20%                    |                10 |              0.0858  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8584 | 10-15%                  |                 2 |              0.4292  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8621 | 15-20%                  |                10 |              0.08621 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8669 | >20%                    |                 5 |              0.17338 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8801 | >20%                    |                10 |              0.08801 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8814 | >20%                    |                10 |              0.08814 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8828 | >20%                    |                10 |              0.08828 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8915 | 10-15%                  |                 2 |              0.44575 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9113 | <5%                     |                 5 |              0.18226 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9123 | >20%                    |                 5 |              0.18246 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9232 | >20%                    |                10 |              0.09232 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9272 | >20%                    |                 5 |              0.18544 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9352 | >20%                    |                 2 |              0.4676  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9833 | >20%                    |                10 |              0.09833 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9879 | 15-20%                  |                10 |              0.09879 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.988  | >20%                    |                10 |              0.0988  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9942 | >20%                    |                10 |              0.09942 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0266 | >20%                    |                10 |              0.10266 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0287 | 15-20%                  |                10 |              0.10287 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0424 | >20%                    |                10 |              0.10424 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.0629 | >20%                    |                 2 |              0.53145 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1178 | 5-10%                   |                10 |              0.11178 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1247 | >20%                    |                 5 |              0.22494 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1334 | 10-15%                  |                 2 |              0.5667  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.177  | >20%                    |                10 |              0.1177  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1908 | >20%                    |                10 |              0.11908 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2064 | >20%                    |                10 |              0.12064 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.2751 |                         |                 2 |              0.63755 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2832 | 10-15%                  |                10 |              0.12832 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3186 | >20%                    |                10 |              0.13186 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3527 | 15-20%                  |                10 |              0.13527 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3601 | 15-20%                  |                10 |              0.13601 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3643 | 5-10%                   |                 2 |              0.68215 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3671 | >20%                    |                10 |              0.13671 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3745 | >20%                    |                 2 |              0.68725 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4343 | >20%                    |                10 |              0.14343 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5225 | 5-10%                   |                 5 |              0.3045  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5316 |                         |                 2 |              0.7658  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5564 | >20%                    |                 5 |              0.31128 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5767 | >20%                    |                 2 |              0.78835 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5969 |                         |                10 |              0.15969 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6174 | >20%                    |                10 |              0.16174 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.7046 |                         |                 5 |              0.34092 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7289 | >20%                    |                10 |              0.17289 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7409 | >20%                    |                 5 |              0.34818 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.7847 | >20%                    |                 5 |              0.35694 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8764 | >20%                    |                10 |              0.18764 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.9061 | 5-10%                   |                 2 |              0.95305 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9564 |                         |                 5 |              0.39128 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0911 | 15-20%                  |                 5 |              0.41822 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2043 | 5-10%                   |                 2 |              1.10215 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2598 | 5-10%                   |                10 |              0.22598 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5774 | >20%                    |                10 |              0.25774 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.6101 |                         |                10 |              0.26101 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0998 | >20%                    |                10 |              0.30998 |