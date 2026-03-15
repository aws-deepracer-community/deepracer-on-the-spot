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

Data correct as of 2026-03-15 02:49:52.385310, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1373 | 10-15%                  |                 2 |              0.06865 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1739 | 15-20%                  |                 5 |              0.03478 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1757 | >20%                    |                 2 |              0.08785 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1866 | <5%                     |                 2 |              0.0933  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1986 | >20%                    |                 5 |              0.03972 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2139 | 10-15%                  |                 2 |              0.10695 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2357 | >20%                    |                 2 |              0.11785 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2478 | >20%                    |                 2 |              0.1239  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2536 | 5-10%                   |                10 |              0.02536 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2575 | >20%                    |                 2 |              0.12875 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2633 | >20%                    |                 2 |              0.13165 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2641 | 15-20%                  |                10 |              0.02641 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.2702 | <5%                     |                 2 |              0.1351  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2744 | >20%                    |                 2 |              0.1372  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | 10-15%                  |                 2 |              0.1392  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2788 | >20%                    |                 2 |              0.1394  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2836 | 5-10%                   |                 5 |              0.05672 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.285  | 15-20%                  |                 2 |              0.1425  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.286  | >20%                    |                 5 |              0.0572  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2951 | >20%                    |                 5 |              0.05902 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2952 | >20%                    |                 2 |              0.1476  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2996 | >20%                    |                 2 |              0.1498  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.2996 | >20%                    |                 2 |              0.1498  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3012 | 15-20%                  |                 2 |              0.1506  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3067 | >20%                    |                 2 |              0.15335 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3099 | 5-10%                   |                 2 |              0.15495 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3273 | >20%                    |                 5 |              0.06546 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3316 | <5%                     |                 2 |              0.1658  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3341 | 5-10%                   |                10 |              0.03341 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3459 | >20%                    |                 2 |              0.17295 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.3476 | >20%                    |                10 |              0.03476 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3511 | <5%                     |                 5 |              0.07022 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.354  | 10-15%                  |                 2 |              0.177   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3543 | >20%                    |                 5 |              0.07086 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3561 | <5%                     |                 5 |              0.07122 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3565 | 5-10%                   |                 2 |              0.17825 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3597 | <5%                     |                 5 |              0.07194 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3605 | 5-10%                   |                 5 |              0.0721  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3679 | >20%                    |                10 |              0.03679 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3685 |                         |                 5 |              0.0737  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3686 | >20%                    |                10 |              0.03686 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3692 | >20%                    |                 5 |              0.07384 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3725 | 5-10%                   |                 2 |              0.18625 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3744 | >20%                    |                 5 |              0.07488 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3771 | 15-20%                  |                 2 |              0.18855 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3822 | >20%                    |                 5 |              0.07644 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3847 | 15-20%                  |                 5 |              0.07694 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3847 | 5-10%                   |                 2 |              0.19235 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.386  | 5-10%                   |                 5 |              0.0772  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3863 | >20%                    |                 5 |              0.07726 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3872 | <5%                     |                 5 |              0.07744 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3881 | >20%                    |                 2 |              0.19405 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3919 | 15-20%                  |                10 |              0.03919 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4066 | 15-20%                  |                 5 |              0.08132 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4068 | 5-10%                   |                 2 |              0.2034  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.408  | 15-20%                  |                 2 |              0.204   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4093 | >20%                    |                 2 |              0.20465 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4116 | >20%                    |                10 |              0.04116 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4123 | >20%                    |                10 |              0.04123 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4206 | >20%                    |                 2 |              0.2103  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4227 | >20%                    |                 5 |              0.08454 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4321 | <5%                     |                 2 |              0.21605 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4366 | 15-20%                  |                 2 |              0.2183  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4385 | >20%                    |                 5 |              0.0877  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4413 | <5%                     |                10 |              0.04413 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.442  | >20%                    |                 2 |              0.221   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4421 | 15-20%                  |                 5 |              0.08842 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4449 | 15-20%                  |                 2 |              0.22245 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.457  | >20%                    |                 2 |              0.2285  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4623 | <5%                     |                10 |              0.04623 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4626 | <5%                     |                 5 |              0.09252 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4685 | >20%                    |                 5 |              0.0937  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4744 | >20%                    |                 5 |              0.09488 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.475  | >20%                    |                 5 |              0.095   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4785 | >20%                    |                10 |              0.04785 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4798 | >20%                    |                 2 |              0.2399  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4862 | >20%                    |                 2 |              0.2431  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4864 | 5-10%                   |                 2 |              0.2432  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4892 | 5-10%                   |                 5 |              0.09784 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4895 | >20%                    |                 5 |              0.0979  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.49   | 5-10%                   |                 2 |              0.245   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4919 | 10-15%                  |                 5 |              0.09838 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5025 | >20%                    |                 2 |              0.25125 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5056 | >20%                    |                 2 |              0.2528  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5165 | 15-20%                  |                 5 |              0.1033  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5172 | >20%                    |                 2 |              0.2586  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5262 | >20%                    |                 5 |              0.10524 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5285 | >20%                    |                10 |              0.05285 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5367 | <5%                     |                10 |              0.05367 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.548  | >20%                    |                 5 |              0.1096  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5501 | 15-20%                  |                10 |              0.05501 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5503 | >20%                    |                 2 |              0.27515 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5545 | >20%                    |                 5 |              0.1109  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5652 | >20%                    |                 5 |              0.11304 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5789 | >20%                    |                10 |              0.05789 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5834 | >20%                    |                10 |              0.05834 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5871 | >20%                    |                 5 |              0.11742 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5874 |                         |                10 |              0.05874 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5904 | >20%                    |                 2 |              0.2952  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5995 | <5%                     |                10 |              0.05995 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6012 | >20%                    |                 5 |              0.12024 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6027 | <5%                     |                10 |              0.06027 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6071 | 5-10%                   |                 2 |              0.30355 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6073 | 5-10%                   |                 5 |              0.12146 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6078 | >20%                    |                10 |              0.06078 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6091 | 5-10%                   |                 2 |              0.30455 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6093 | >20%                    |                 5 |              0.12186 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.611  | 15-20%                  |                10 |              0.0611  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6114 | 15-20%                  |                10 |              0.06114 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6192 | 15-20%                  |                10 |              0.06192 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6258 | >20%                    |                 2 |              0.3129  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6294 | >20%                    |                10 |              0.06294 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6472 | >20%                    |                10 |              0.06472 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6522 | >20%                    |                 2 |              0.3261  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6541 | >20%                    |                 5 |              0.13082 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6557 | 15-20%                  |                 2 |              0.32785 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6559 | >20%                    |                 5 |              0.13118 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6615 | <5%                     |                 5 |              0.1323  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6623 | 5-10%                   |                 5 |              0.13246 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6665 | >20%                    |                 5 |              0.1333  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.675  | >20%                    |                10 |              0.0675  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6808 | 10-15%                  |                 5 |              0.13616 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6883 | >20%                    |                10 |              0.06883 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6907 | >20%                    |                 5 |              0.13814 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7219 | >20%                    |                 5 |              0.14438 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7333 | 10-15%                  |                10 |              0.07333 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7504 | >20%                    |                10 |              0.07504 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7512 | >20%                    |                 5 |              0.15024 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7602 | 10-15%                  |                10 |              0.07602 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7606 | >20%                    |                10 |              0.07606 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.761  | >20%                    |                 5 |              0.1522  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.7677 | >20%                    |                 5 |              0.15354 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7883 | <5%                     |                 5 |              0.15766 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7924 | <5%                     |                10 |              0.07924 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8    | >20%                    |                 5 |              0.16    |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8138 |                         |                 2 |              0.4069  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8194 | <5%                     |                10 |              0.08194 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8212 | >20%                    |                10 |              0.08212 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8224 | 5-10%                   |                10 |              0.08224 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8382 | >20%                    |                 2 |              0.4191  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8475 | >20%                    |                10 |              0.08475 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8584 | >20%                    |                10 |              0.08584 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8674 | <5%                     |                 5 |              0.17348 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8824 | >20%                    |                 5 |              0.17648 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8883 | >20%                    |                 5 |              0.17766 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8958 | <5%                     |                10 |              0.08958 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.897  | >20%                    |                10 |              0.0897  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.899  | 5-10%                   |                10 |              0.0899  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9164 | >20%                    |                 2 |              0.4582  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9174 | >20%                    |                10 |              0.09174 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9197 | >20%                    |                10 |              0.09197 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9288 | >20%                    |                10 |              0.09288 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9297 | 10-15%                  |                 2 |              0.46485 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9517 | 15-20%                  |                10 |              0.09517 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9524 | >20%                    |                10 |              0.09524 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.963  | >20%                    |                10 |              0.0963  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9665 | >20%                    |                 2 |              0.48325 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9771 | >20%                    |                 5 |              0.19542 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9826 | 5-10%                   |                 5 |              0.19652 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9969 | >20%                    |                 2 |              0.49845 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0252 | 5-10%                   |                10 |              0.10252 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0307 | >20%                    |                10 |              0.10307 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0536 | >20%                    |                10 |              0.10536 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0738 | 15-20%                  |                10 |              0.10738 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1557 | <5%                     |                10 |              0.11557 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1849 | 10-15%                  |                 5 |              0.23698 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2092 | >20%                    |                10 |              0.12092 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2272 | >20%                    |                 2 |              0.6136  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3274 | 10-15%                  |                10 |              0.13274 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4466 | >20%                    |                 2 |              0.7233  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4541 | >20%                    |                 2 |              0.72705 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4541 | 15-20%                  |                10 |              0.14541 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.4654 | <5%                     |                 5 |              0.29308 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.483  | 10-15%                  |                 5 |              0.2966  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.521  | >20%                    |                 5 |              0.3042  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.56   | >20%                    |                 5 |              0.312   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5658 | >20%                    |                10 |              0.15658 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5755 | >20%                    |                10 |              0.15755 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6318 | >20%                    |                 2 |              0.8159  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3655 | 10-15%                  |                10 |              0.23655 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.8802 | <5%                     |                10 |              0.28802 |