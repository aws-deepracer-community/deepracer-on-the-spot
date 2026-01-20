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

Data correct as of 2026-01-20 02:04:49.560990, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1468 | >20%                    |                 2 |              0.0734  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1524 | >20%                    |                 2 |              0.0762  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1709 | >20%                    |                 2 |              0.08545 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1754 | >20%                    |                 2 |              0.0877  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1792 | >20%                    |                 2 |              0.0896  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1829 | 15-20%                  |                 5 |              0.03658 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1904 | <5%                     |                 5 |              0.03808 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1943 | <5%                     |                 2 |              0.09715 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2031 | >20%                    |                 5 |              0.04062 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2405 | >20%                    |                 2 |              0.12025 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2553 | >20%                    |                 2 |              0.12765 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2719 | >20%                    |                 2 |              0.13595 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2776 | 15-20%                  |                 2 |              0.1388  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2804 | >20%                    |                 5 |              0.05608 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2831 | >20%                    |                 2 |              0.14155 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2865 | >20%                    |                 2 |              0.14325 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2912 | >20%                    |                 2 |              0.1456  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2922 | >20%                    |                 2 |              0.1461  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2935 | 15-20%                  |                10 |              0.02935 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3103 | <5%                     |                 2 |              0.15515 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.312  | 5-10%                   |                 5 |              0.0624  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3157 | >20%                    |                 2 |              0.15785 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3175 | >20%                    |                10 |              0.03175 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3189 | >20%                    |                 2 |              0.15945 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3255 | >20%                    |                 5 |              0.0651  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3357 | 5-10%                   |                10 |              0.03357 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3483 | >20%                    |                 5 |              0.06966 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3486 | >20%                    |                 5 |              0.06972 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3549 | 5-10%                   |                10 |              0.03549 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3553 | 5-10%                   |                 2 |              0.17765 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.357  | >20%                    |                 2 |              0.1785  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3577 | >20%                    |                10 |              0.03577 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3592 | 10-15%                  |                 2 |              0.1796  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3712 | >20%                    |                 2 |              0.1856  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3788 | 15-20%                  |                 5 |              0.07576 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3794 | >20%                    |                 2 |              0.1897  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3834 | 5-10%                   |                 2 |              0.1917  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3861 | <5%                     |                 5 |              0.07722 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3894 | >20%                    |                 5 |              0.07788 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3911 | >20%                    |                 2 |              0.19555 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3963 | >20%                    |                 2 |              0.19815 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3965 | >20%                    |                10 |              0.03965 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3976 | 10-15%                  |                 2 |              0.1988  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3981 | >20%                    |                 5 |              0.07962 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3984 | >20%                    |                 5 |              0.07968 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3986 | >20%                    |                 2 |              0.1993  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3989 | <5%                     |                10 |              0.03989 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4002 | >20%                    |                 5 |              0.08004 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4014 | >20%                    |                 2 |              0.2007  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4029 | >20%                    |                10 |              0.04029 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4052 | >20%                    |                 5 |              0.08104 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4057 | >20%                    |                 5 |              0.08114 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4061 | >20%                    |                 2 |              0.20305 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4084 | >20%                    |                 2 |              0.2042  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4166 | >20%                    |                 5 |              0.08332 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4167 | >20%                    |                 5 |              0.08334 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4191 | >20%                    |                 5 |              0.08382 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4276 | <5%                     |                 2 |              0.2138  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4281 | >20%                    |                 2 |              0.21405 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4356 | >20%                    |                 2 |              0.2178  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4363 | 10-15%                  |                 2 |              0.21815 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4404 | >20%                    |                10 |              0.04404 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4442 | <5%                     |                 2 |              0.2221  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4451 | >20%                    |                 5 |              0.08902 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.447  | >20%                    |                 5 |              0.0894  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4472 | 15-20%                  |                10 |              0.04472 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4541 | >20%                    |                 2 |              0.22705 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4543 | 15-20%                  |                 2 |              0.22715 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4557 | >20%                    |                 2 |              0.22785 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.461  | >20%                    |                 2 |              0.2305  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4703 | >20%                    |                 2 |              0.23515 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4745 | >20%                    |                 5 |              0.0949  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4766 | >20%                    |                 2 |              0.2383  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4787 | >20%                    |                 5 |              0.09574 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4797 | 15-20%                  |                 2 |              0.23985 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4814 | <5%                     |                10 |              0.04814 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4833 | <5%                     |                 5 |              0.09666 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.49   | >20%                    |                 5 |              0.098   |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4909 | >20%                    |                 5 |              0.09818 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4929 | >20%                    |                10 |              0.04929 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5049 | >20%                    |                 5 |              0.10098 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5055 | >20%                    |                 2 |              0.25275 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.515  | >20%                    |                 5 |              0.103   |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5191 | >20%                    |                 5 |              0.10382 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5366 | >20%                    |                 5 |              0.10732 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5386 | 15-20%                  |                 5 |              0.10772 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5388 | >20%                    |                 2 |              0.2694  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5458 | >20%                    |                 2 |              0.2729  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.546  | 5-10%                   |                 5 |              0.1092  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5471 | >20%                    |                10 |              0.05471 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5551 | <5%                     |                 2 |              0.27755 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5605 | >20%                    |                 2 |              0.28025 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5628 | >20%                    |                10 |              0.05628 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5672 | 10-15%                  |                 5 |              0.11344 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5678 | >20%                    |                 5 |              0.11356 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5692 | >20%                    |                 5 |              0.11384 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5692 | 15-20%                  |                 5 |              0.11384 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5745 | 5-10%                   |                 5 |              0.1149  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5824 | 15-20%                  |                10 |              0.05824 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5927 | >20%                    |                 5 |              0.11854 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6095 | 15-20%                  |                 5 |              0.1219  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6179 | >20%                    |                 2 |              0.30895 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6196 | 10-15%                  |                 2 |              0.3098  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6297 | 10-15%                  |                 5 |              0.12594 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6318 | >20%                    |                10 |              0.06318 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6377 | >20%                    |                10 |              0.06377 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6392 |                         |                 2 |              0.3196  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6433 | 5-10%                   |                 5 |              0.12866 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6448 | >20%                    |                 5 |              0.12896 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6455 | >20%                    |                 2 |              0.32275 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6499 | 15-20%                  |                 5 |              0.12998 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6559 | 15-20%                  |                10 |              0.06559 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6605 | >20%                    |                 2 |              0.33025 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6638 | 10-15%                  |                 5 |              0.13276 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6705 | 10-15%                  |                10 |              0.06705 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6827 | >20%                    |                 2 |              0.34135 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6876 | >20%                    |                 5 |              0.13752 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7005 | <5%                     |                10 |              0.07005 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7028 | >20%                    |                10 |              0.07028 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.707  | 15-20%                  |                10 |              0.0707  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.7145 | >20%                    |                 2 |              0.35725 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7152 | >20%                    |                10 |              0.07152 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7238 | <5%                     |                 5 |              0.14476 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.724  | >20%                    |                 2 |              0.362   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7308 | >20%                    |                10 |              0.07308 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7318 | >20%                    |                10 |              0.07318 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7371 | 5-10%                   |                10 |              0.07371 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7432 | >20%                    |                10 |              0.07432 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7458 | 15-20%                  |                 2 |              0.3729  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7474 | >20%                    |                 5 |              0.14948 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7483 | 15-20%                  |                10 |              0.07483 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7502 | >20%                    |                 5 |              0.15004 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7626 | >20%                    |                 5 |              0.15252 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7907 | <5%                     |                10 |              0.07907 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.798  | >20%                    |                10 |              0.0798  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8007 | 15-20%                  |                10 |              0.08007 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8019 | >20%                    |                10 |              0.08019 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8021 | <5%                     |                10 |              0.08021 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8043 | 15-20%                  |                 5 |              0.16086 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8124 | >20%                    |                 2 |              0.4062  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8166 | >20%                    |                10 |              0.08166 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8545 | >20%                    |                10 |              0.08545 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8653 | 10-15%                  |                 5 |              0.17306 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8744 | 15-20%                  |                10 |              0.08744 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8894 | >20%                    |                10 |              0.08894 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9223 | >20%                    |                10 |              0.09223 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9257 | >20%                    |                10 |              0.09257 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9376 | >20%                    |                 2 |              0.4688  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9382 | >20%                    |                 2 |              0.4691  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.948  | >20%                    |                 5 |              0.1896  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9485 | >20%                    |                10 |              0.09485 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9568 | >20%                    |                 5 |              0.19136 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9588 | >20%                    |                10 |              0.09588 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9748 | >20%                    |                10 |              0.09748 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9863 | >20%                    |                 5 |              0.19726 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9957 | 10-15%                  |                 5 |              0.19914 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0303 | >20%                    |                 5 |              0.20606 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0347 | 15-20%                  |                10 |              0.10347 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.0381 | <5%                     |                10 |              0.10381 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0439 | >20%                    |                 5 |              0.20878 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0661 | 15-20%                  |                10 |              0.10661 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0863 | 10-15%                  |                10 |              0.10863 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0996 | >20%                    |                 2 |              0.5498  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1163 | >20%                    |                10 |              0.11163 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.125  | >20%                    |                10 |              0.1125  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1269 | >20%                    |                 2 |              0.56345 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1705 | >20%                    |                 5 |              0.2341  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2051 | 15-20%                  |                10 |              0.12051 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2369 | >20%                    |                10 |              0.12369 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2392 | >20%                    |                10 |              0.12392 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2738 | >20%                    |                10 |              0.12738 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2899 | >20%                    |                 5 |              0.25798 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2911 | >20%                    |                10 |              0.12911 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2974 |                         |                10 |              0.12974 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3121 | 15-20%                  |                10 |              0.13121 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4075 | >20%                    |                10 |              0.14075 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4531 | >20%                    |                 2 |              0.72655 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4863 | 10-15%                  |                 5 |              0.29726 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5429 | >20%                    |                10 |              0.15429 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5819 | 10-15%                  |                10 |              0.15819 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.9064 |                         |                 5 |              0.38128 |