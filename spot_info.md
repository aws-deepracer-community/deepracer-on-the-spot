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

Data correct as of 2026-01-08 02:03:14.180273, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.128  | >20%                    |                 2 |              0.064   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1461 | >20%                    |                 2 |              0.07305 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1598 | >20%                    |                 5 |              0.03196 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1662 | >20%                    |                 2 |              0.0831  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1718 | <5%                     |                 2 |              0.0859  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2244 | >20%                    |                 2 |              0.1122  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.232  | >20%                    |                 2 |              0.116   |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2326 | <5%                     |                 5 |              0.04652 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2419 | >20%                    |                 2 |              0.12095 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2459 | >20%                    |                 2 |              0.12295 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2554 | >20%                    |                 2 |              0.1277  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2566 | >20%                    |                 5 |              0.05132 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2636 | >20%                    |                 2 |              0.1318  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2687 | >20%                    |                 2 |              0.13435 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | >20%                    |                 2 |              0.1397  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2886 | >20%                    |                10 |              0.02886 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2917 | 15-20%                  |                 2 |              0.14585 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2927 | 5-10%                   |                10 |              0.02927 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2976 | >20%                    |                 2 |              0.1488  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3059 | >20%                    |                 2 |              0.15295 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3062 | >20%                    |                 5 |              0.06124 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3064 | 15-20%                  |                 5 |              0.06128 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3093 | >20%                    |                 5 |              0.06186 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3198 | >20%                    |                 2 |              0.1599  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3211 | >20%                    |                 5 |              0.06422 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3278 | >20%                    |                 2 |              0.1639  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3316 | >20%                    |                 2 |              0.1658  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3332 | >20%                    |                10 |              0.03332 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3365 | 5-10%                   |                 5 |              0.0673  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3488 | >20%                    |                 5 |              0.06976 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3496 | >20%                    |                 5 |              0.06992 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3509 | >20%                    |                 5 |              0.07018 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3511 | <5%                     |                 5 |              0.07022 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3579 | 5-10%                   |                10 |              0.03579 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.364  | 5-10%                   |                 2 |              0.182   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3659 | 5-10%                   |                 2 |              0.18295 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3675 | 10-15%                  |                 2 |              0.18375 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3678 | >20%                    |                 2 |              0.1839  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3685 | >20%                    |                 5 |              0.0737  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3694 | >20%                    |                 5 |              0.07388 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.371  | <5%                     |                10 |              0.0371  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3717 | >20%                    |                 2 |              0.18585 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3786 | >20%                    |                 5 |              0.07572 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3789 | >20%                    |                 2 |              0.18945 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3798 | >20%                    |                 5 |              0.07596 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3825 | >20%                    |                 2 |              0.19125 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3865 | >20%                    |                 2 |              0.19325 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3909 | >20%                    |                10 |              0.03909 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3931 | >20%                    |                 2 |              0.19655 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3932 | >20%                    |                 5 |              0.07864 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3974 | 10-15%                  |                 2 |              0.1987  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3997 | >20%                    |                 2 |              0.19985 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4002 | >20%                    |                 2 |              0.2001  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4052 | >20%                    |                10 |              0.04052 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.407  | >20%                    |                 5 |              0.0814  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4078 | 15-20%                  |                10 |              0.04078 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4207 | >20%                    |                 2 |              0.21035 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4278 | >20%                    |                 5 |              0.08556 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4315 | >20%                    |                 2 |              0.21575 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4318 | >20%                    |                10 |              0.04318 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4319 | <5%                     |                 2 |              0.21595 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4377 | 10-15%                  |                 2 |              0.21885 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4384 | >20%                    |                10 |              0.04384 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4469 | >20%                    |                 5 |              0.08938 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4495 | >20%                    |                 5 |              0.0899  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4542 | >20%                    |                 5 |              0.09084 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4556 | >20%                    |                 2 |              0.2278  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4556 | >20%                    |                 2 |              0.2278  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4561 | >20%                    |                 5 |              0.09122 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4611 | <5%                     |                 2 |              0.23055 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.462  | >20%                    |                 5 |              0.0924  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4682 | >20%                    |                 2 |              0.2341  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4707 | >20%                    |                 5 |              0.09414 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.472  | <5%                     |                 5 |              0.0944  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4744 | <5%                     |                 2 |              0.2372  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4776 | 15-20%                  |                10 |              0.04776 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4808 | 15-20%                  |                 2 |              0.2404  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4828 | <5%                     |                10 |              0.04828 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4892 | 15-20%                  |                 5 |              0.09784 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4926 | 15-20%                  |                 2 |              0.2463  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4951 | >20%                    |                 5 |              0.09902 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5031 | >20%                    |                 2 |              0.25155 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5209 | >20%                    |                 5 |              0.10418 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5215 | >20%                    |                 2 |              0.26075 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5236 | 10-15%                  |                 5 |              0.10472 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.541  | >20%                    |                 2 |              0.2705  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5418 | >20%                    |                 2 |              0.2709  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5474 | 15-20%                  |                 5 |              0.10948 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.549  | 5-10%                   |                 5 |              0.1098  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5603 | 15-20%                  |                 5 |              0.11206 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5645 | >20%                    |                 5 |              0.1129  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5748 | 15-20%                  |                 5 |              0.11496 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5763 | 15-20%                  |                10 |              0.05763 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.579  | >20%                    |                 5 |              0.1158  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5859 | >20%                    |                 5 |              0.11718 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6116 | >20%                    |                 2 |              0.3058  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.613  | >20%                    |                10 |              0.0613  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.619  | >20%                    |                 2 |              0.3095  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6194 | >20%                    |                 2 |              0.3097  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6268 | 10-15%                  |                 5 |              0.12536 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.627  | >20%                    |                 5 |              0.1254  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6291 | 5-10%                   |                 5 |              0.12582 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6315 | 10-15%                  |                 2 |              0.31575 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6333 | >20%                    |                10 |              0.06333 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6362 | 5-10%                   |                 5 |              0.12724 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6468 | >20%                    |                10 |              0.06468 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6628 | >20%                    |                 2 |              0.3314  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.663  | 15-20%                  |                 5 |              0.1326  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.665  | >20%                    |                 5 |              0.133   |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6672 | 15-20%                  |                10 |              0.06672 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6673 | >20%                    |                 5 |              0.13346 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6718 | >20%                    |                 5 |              0.13436 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6836 | 15-20%                  |                10 |              0.06836 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6889 | >20%                    |                 2 |              0.34445 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6966 | >20%                    |                10 |              0.06966 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.7033 | 10-15%                  |                 5 |              0.14066 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7038 | <5%                     |                 5 |              0.14076 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7056 | >20%                    |                10 |              0.07056 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7081 | <5%                     |                 2 |              0.35405 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7337 | 15-20%                  |                 2 |              0.36685 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.734  | <5%                     |                10 |              0.0734  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7405 | 5-10%                   |                10 |              0.07405 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7418 | >20%                    |                10 |              0.07418 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7425 | 15-20%                  |                10 |              0.07425 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7519 | >20%                    |                 5 |              0.15038 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7596 | >20%                    |                 5 |              0.15192 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7744 | >20%                    |                10 |              0.07744 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7752 | >20%                    |                 2 |              0.3876  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7916 | 15-20%                  |                10 |              0.07916 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7925 | >20%                    |                10 |              0.07925 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7926 | >20%                    |                 2 |              0.3963  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8057 | <5%                     |                10 |              0.08057 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8093 | >20%                    |                10 |              0.08093 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8136 | 15-20%                  |                10 |              0.08136 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8157 |                         |                 2 |              0.40785 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8169 | >20%                    |                 2 |              0.40845 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8191 | >20%                    |                10 |              0.08191 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8259 | 15-20%                  |                10 |              0.08259 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8259 | 15-20%                  |                 5 |              0.16518 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8291 | >20%                    |                 5 |              0.16582 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8397 | <5%                     |                10 |              0.08397 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8492 | >20%                    |                10 |              0.08492 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8537 | >20%                    |                 2 |              0.42685 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8685 | 10-15%                  |                 5 |              0.1737  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8748 | >20%                    |                10 |              0.08748 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8766 | 10-15%                  |                 5 |              0.17532 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9025 | >20%                    |                10 |              0.09025 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9098 | >20%                    |                10 |              0.09098 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9111 | >20%                    |                10 |              0.09111 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9167 | >20%                    |                10 |              0.09167 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9313 | >20%                    |                 5 |              0.18626 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.975  | >20%                    |                10 |              0.0975  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9821 | 15-20%                  |                10 |              0.09821 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0372 | >20%                    |                 2 |              0.5186  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0532 | 10-15%                  |                10 |              0.10532 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.061  | >20%                    |                 5 |              0.2122  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0759 | >20%                    |                 5 |              0.21518 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0946 | 10-15%                  |                10 |              0.10946 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0963 | 15-20%                  |                10 |              0.10963 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1118 | >20%                    |                10 |              0.11118 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1189 |                         |                 5 |              0.22378 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1194 | >20%                    |                10 |              0.11194 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1227 | >20%                    |                 2 |              0.56135 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1241 | >20%                    |                10 |              0.11241 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1693 | <5%                     |                10 |              0.11693 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1722 | >20%                    |                 2 |              0.5861  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2253 | >20%                    |                 5 |              0.24506 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2519 | >20%                    |                10 |              0.12519 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2917 | >20%                    |                10 |              0.12917 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.297  | >20%                    |                10 |              0.1297  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.3084 | >20%                    |                 5 |              0.26168 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.326  | >20%                    |                10 |              0.1326  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3261 | >20%                    |                 5 |              0.26522 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3495 | >20%                    |                 5 |              0.2699  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3621 | 15-20%                  |                10 |              0.13621 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.419  | >20%                    |                 2 |              0.7095  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4296 | 10-15%                  |                 5 |              0.28592 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5572 | >20%                    |                10 |              0.15572 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6092 | >20%                    |                10 |              0.16092 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6297 |                         |                10 |              0.16297 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6669 | 10-15%                  |                10 |              0.16669 |