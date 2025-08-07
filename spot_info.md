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

Data correct as of 2025-08-07 02:08:23.542831, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1045 | >20%                    |                 2 |              0.05225 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1293 | 5-10%                   |                 2 |              0.06465 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1454 | <5%                     |                 5 |              0.02908 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1994 | >20%                    |                 2 |              0.0997  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2111 | >20%                    |                 2 |              0.10555 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 15-20%                  |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.234  | 15-20%                  |                 2 |              0.117   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2407 | 15-20%                  |                 2 |              0.12035 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2539 | >20%                    |                 2 |              0.12695 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2563 | >20%                    |                 2 |              0.12815 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | >20%                    |                 2 |              0.13265 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2699 | 5-10%                   |                 2 |              0.13495 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2923 | >20%                    |                 2 |              0.14615 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2989 | >20%                    |                 2 |              0.14945 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3089 | 15-20%                  |                 2 |              0.15445 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3202 | <5%                     |                 2 |              0.1601  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3251 | 5-10%                   |                 2 |              0.16255 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3341 | 5-10%                   |                 2 |              0.16705 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3405 | >20%                    |                 2 |              0.17025 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3458 | 15-20%                  |                 2 |              0.1729  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3505 | 15-20%                  |                10 |              0.03505 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3554 | >20%                    |                 5 |              0.07108 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3556 | <5%                     |                 2 |              0.1778  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.358  | >20%                    |                 2 |              0.179   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3593 | 5-10%                   |                 5 |              0.07186 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3711 | >20%                    |                 5 |              0.07422 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3718 | 15-20%                  |                 2 |              0.1859  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3805 | >20%                    |                 2 |              0.19025 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3858 | >20%                    |                 2 |              0.1929  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3903 | <5%                     |                 2 |              0.19515 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3923 | 10-15%                  |                 2 |              0.19615 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4007 | >20%                    |                 5 |              0.08014 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4041 | >20%                    |                 5 |              0.08082 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4058 | >20%                    |                 2 |              0.2029  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4112 | >20%                    |                 5 |              0.08224 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4262 | >20%                    |                10 |              0.04262 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4389 | <5%                     |                10 |              0.04389 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4389 | >20%                    |                 5 |              0.08778 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4404 | >20%                    |                 5 |              0.08808 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4475 | <5%                     |                 2 |              0.22375 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4486 | >20%                    |                 5 |              0.08972 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.449  | >20%                    |                 2 |              0.2245  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4595 | 5-10%                   |                 2 |              0.22975 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4608 | >20%                    |                 5 |              0.09216 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4638 | 15-20%                  |                 5 |              0.09276 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4647 | >20%                    |                 2 |              0.23235 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4697 | >20%                    |                 5 |              0.09394 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4734 | 5-10%                   |                 2 |              0.2367  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.48   | >20%                    |                 2 |              0.24    |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4805 | >20%                    |                 2 |              0.24025 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4838 | >20%                    |                 2 |              0.2419  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4863 | 10-15%                  |                 2 |              0.24315 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4887 | 15-20%                  |                10 |              0.04887 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4924 | >20%                    |                 2 |              0.2462  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5021 | >20%                    |                 5 |              0.10042 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5035 | >20%                    |                 2 |              0.25175 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5046 | 10-15%                  |                 5 |              0.10092 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5058 | >20%                    |                 2 |              0.2529  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5113 | 5-10%                   |                 5 |              0.10226 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5151 | >20%                    |                 2 |              0.25755 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5154 | >20%                    |                 2 |              0.2577  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5191 | >20%                    |                 2 |              0.25955 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5279 | >20%                    |                 5 |              0.10558 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5413 | 10-15%                  |                 5 |              0.10826 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5439 | >20%                    |                 5 |              0.10878 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.544  | >20%                    |                 5 |              0.1088  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5459 | >20%                    |                 5 |              0.10918 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5514 | 15-20%                  |                 2 |              0.2757  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5651 | <5%                     |                 2 |              0.28255 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5684 | 15-20%                  |                10 |              0.05684 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5705 | >20%                    |                 2 |              0.28525 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5712 | >20%                    |                 2 |              0.2856  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5767 | >20%                    |                 5 |              0.11534 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5822 | >20%                    |                 5 |              0.11644 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5919 | >20%                    |                 2 |              0.29595 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5951 | <5%                     |                10 |              0.05951 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5983 | 10-15%                  |                 5 |              0.11966 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6014 | 5-10%                   |                 2 |              0.3007  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6158 | >20%                    |                10 |              0.06158 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6161 | 5-10%                   |                 5 |              0.12322 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6195 | >20%                    |                 5 |              0.1239  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6216 | >20%                    |                 5 |              0.12432 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6255 | 10-15%                  |                 5 |              0.1251  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6274 | >20%                    |                 5 |              0.12548 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6393 | >20%                    |                 5 |              0.12786 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6401 | 5-10%                   |                 5 |              0.12802 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6404 | <5%                     |                 5 |              0.12808 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6405 | >20%                    |                 2 |              0.32025 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6427 | <5%                     |                 5 |              0.12854 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6488 | >20%                    |                 2 |              0.3244  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6725 | >20%                    |                10 |              0.06725 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6845 | 10-15%                  |                 2 |              0.34225 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6896 | 15-20%                  |                 2 |              0.3448  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6928 | >20%                    |                 2 |              0.3464  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6979 | >20%                    |                 5 |              0.13958 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.703  | >20%                    |                 5 |              0.1406  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7068 | >20%                    |                 5 |              0.14136 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7172 | >20%                    |                 5 |              0.14344 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7224 | >20%                    |                10 |              0.07224 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.727  | 5-10%                   |                 5 |              0.1454  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7323 | >20%                    |                10 |              0.07323 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7383 | 15-20%                  |                 5 |              0.14766 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7421 | 15-20%                  |                 2 |              0.37105 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7498 | <5%                     |                10 |              0.07498 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7507 | 15-20%                  |                10 |              0.07507 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7533 | 15-20%                  |                10 |              0.07533 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7584 | >20%                    |                 5 |              0.15168 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7687 | 15-20%                  |                10 |              0.07687 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7735 | 15-20%                  |                10 |              0.07735 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.776  | >20%                    |                 5 |              0.1552  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7783 | >20%                    |                10 |              0.07783 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7827 | >20%                    |                 5 |              0.15654 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7953 | >20%                    |                 2 |              0.39765 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8161 | >20%                    |                 5 |              0.16322 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8402 | >20%                    |                10 |              0.08402 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8414 | >20%                    |                10 |              0.08414 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.844  | >20%                    |                 5 |              0.1688  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8455 | 5-10%                   |                10 |              0.08455 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8494 | >20%                    |                10 |              0.08494 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.861  | <5%                     |                 5 |              0.1722  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.864  | >20%                    |                 5 |              0.1728  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8726 | >20%                    |                10 |              0.08726 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9023 | 15-20%                  |                10 |              0.09023 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9051 | 5-10%                   |                 5 |              0.18102 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9127 | 5-10%                   |                10 |              0.09127 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.913  | <5%                     |                10 |              0.0913  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9173 | 5-10%                   |                10 |              0.09173 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9195 | 5-10%                   |                10 |              0.09195 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9201 | 5-10%                   |                10 |              0.09201 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9409 | 15-20%                  |                10 |              0.09409 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9507 | 5-10%                   |                10 |              0.09507 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9661 | <5%                     |                10 |              0.09661 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9779 | <5%                     |                10 |              0.09779 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9835 | >20%                    |                 2 |              0.49175 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9874 | >20%                    |                 5 |              0.19748 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9894 | 15-20%                  |                10 |              0.09894 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9916 | >20%                    |                10 |              0.09916 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9978 | 15-20%                  |                 5 |              0.19956 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0182 | 15-20%                  |                10 |              0.10182 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.02   | >20%                    |                10 |              0.102   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0296 | 5-10%                   |                10 |              0.10296 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0325 | 15-20%                  |                10 |              0.10325 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0638 | 15-20%                  |                10 |              0.10638 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0677 | <5%                     |                10 |              0.10677 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0844 | >20%                    |                10 |              0.10844 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0973 | 5-10%                   |                10 |              0.10973 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1137 | >20%                    |                10 |              0.11137 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.126  | >20%                    |                10 |              0.1126  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.147  | >20%                    |                10 |              0.1147  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1559 | >20%                    |                10 |              0.11559 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1717 | >20%                    |                10 |              0.11717 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1764 | >20%                    |                 2 |              0.5882  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1767 | >20%                    |                 5 |              0.23534 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2217 | >20%                    |                 5 |              0.24434 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2284 | >20%                    |                 5 |              0.24568 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2298 | <5%                     |                 2 |              0.6149  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2496 | >20%                    |                10 |              0.12496 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2882 | >20%                    |                10 |              0.12882 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3221 | >20%                    |                 2 |              0.66105 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.334  | 5-10%                   |                10 |              0.1334  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3522 | >20%                    |                 5 |              0.27044 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3806 | 15-20%                  |                 5 |              0.27612 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.4691 | 5-10%                   |                 2 |              0.73455 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4777 | >20%                    |                10 |              0.14777 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4954 | >20%                    |                10 |              0.14954 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5195 | <5%                     |                10 |              0.15195 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5576 | <5%                     |                 5 |              0.31152 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5824 | >20%                    |                10 |              0.15824 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8412 | 10-15%                  |                10 |              0.18412 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1263 | <5%                     |                10 |              0.21263 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2037 | 5-10%                   |                10 |              0.22037 |