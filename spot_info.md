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

Data correct as of 2026-07-27 03:32:47.449132, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1343 | >20%                    |                 2 |              0.06715 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1583 | >20%                    |                 2 |              0.07915 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.205  | 15-20%                  |                 2 |              0.1025  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2228 | >20%                    |                 2 |              0.1114  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2331 | >20%                    |                 2 |              0.11655 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2379 | 15-20%                  |                 5 |              0.04758 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2405 | >20%                    |                 2 |              0.12025 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.246  | >20%                    |                 2 |              0.123   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2558 | 5-10%                   |                10 |              0.02558 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2647 | >20%                    |                 2 |              0.13235 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2737 | >20%                    |                 2 |              0.13685 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2741 | >20%                    |                 2 |              0.13705 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2884 | 10-15%                  |                 2 |              0.1442  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2915 | >20%                    |                 2 |              0.14575 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2926 | 15-20%                  |                 2 |              0.1463  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2959 | 15-20%                  |                 2 |              0.14795 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2977 | >20%                    |                 2 |              0.14885 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3255 | 15-20%                  |                 5 |              0.0651  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.3312 | >20%                    |                10 |              0.03312 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3313 | >20%                    |                 5 |              0.06626 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3326 | >20%                    |                 2 |              0.1663  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3396 | >20%                    |                 5 |              0.06792 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3586 | >20%                    |                 5 |              0.07172 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3652 | >20%                    |                 2 |              0.1826  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3653 | >20%                    |                10 |              0.03653 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3689 | <5%                     |                 2 |              0.18445 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3767 | 10-15%                  |                 2 |              0.18835 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3798 | >20%                    |                 5 |              0.07596 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3863 | 5-10%                   |                10 |              0.03863 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.387  | 5-10%                   |                10 |              0.0387  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3873 | >20%                    |                 5 |              0.07746 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.39   | >20%                    |                 5 |              0.078   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4012 | >20%                    |                 2 |              0.2006  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4018 | 15-20%                  |                 2 |              0.2009  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.402  | >20%                    |                 2 |              0.201   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4175 | >20%                    |                10 |              0.04175 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4188 | 10-15%                  |                 2 |              0.2094  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.431  | 10-15%                  |                 2 |              0.2155  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4325 | >20%                    |                 5 |              0.0865  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.437  | 10-15%                  |                10 |              0.0437  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4509 | >20%                    |                 2 |              0.22545 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4511 | >20%                    |                 2 |              0.22555 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4531 | >20%                    |                 5 |              0.09062 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4597 | >20%                    |                 2 |              0.22985 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4604 | >20%                    |                10 |              0.04604 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4621 | >20%                    |                 5 |              0.09242 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.469  | <5%                     |                 2 |              0.2345  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4697 | >20%                    |                 5 |              0.09394 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4792 | >20%                    |                 2 |              0.2396  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4865 | 15-20%                  |                 5 |              0.0973  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4871 | >20%                    |                 2 |              0.24355 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4914 | >20%                    |                 5 |              0.09828 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5006 | >20%                    |                 5 |              0.10012 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5053 | >20%                    |                 5 |              0.10106 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.506  | <5%                     |                 2 |              0.253   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5206 | >20%                    |                 5 |              0.10412 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5208 | >20%                    |                 2 |              0.2604  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5289 | >20%                    |                10 |              0.05289 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5329 | >20%                    |                 5 |              0.10658 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5343 | 15-20%                  |                 2 |              0.26715 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5462 | >20%                    |                10 |              0.05462 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5491 | >20%                    |                 5 |              0.10982 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.552  | >20%                    |                 5 |              0.1104  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5553 | >20%                    |                 2 |              0.27765 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5591 | 10-15%                  |                 5 |              0.11182 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5717 | 5-10%                   |                 2 |              0.28585 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5741 | >20%                    |                 5 |              0.11482 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5761 | >20%                    |                 5 |              0.11522 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5907 | >20%                    |                 5 |              0.11814 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5947 | >20%                    |                 5 |              0.11894 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6275 | 15-20%                  |                 5 |              0.1255  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6402 | >20%                    |                 2 |              0.3201  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6404 | >20%                    |                 2 |              0.3202  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6504 | >20%                    |                 5 |              0.13008 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6524 | 5-10%                   |                 5 |              0.13048 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.653  | >20%                    |                 5 |              0.1306  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6555 | >20%                    |                10 |              0.06555 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6594 | >20%                    |                 5 |              0.13188 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6667 | >20%                    |                10 |              0.06667 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6672 | >20%                    |                 5 |              0.13344 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6744 | >20%                    |                 2 |              0.3372  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6877 | <5%                     |                 5 |              0.13754 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6939 | >20%                    |                10 |              0.06939 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7172 | >20%                    |                 5 |              0.14344 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7179 | >20%                    |                10 |              0.07179 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7207 | >20%                    |                10 |              0.07207 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7241 | >20%                    |                10 |              0.07241 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7296 |                         |                 2 |              0.3648  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.73   | 15-20%                  |                10 |              0.073   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7594 | >20%                    |                 5 |              0.15188 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7651 |                         |                 5 |              0.15302 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7672 | >20%                    |                10 |              0.07672 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7733 | >20%                    |                 5 |              0.15466 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.779  | 5-10%                   |                10 |              0.0779  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7861 | >20%                    |                 5 |              0.15722 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7922 | >20%                    |                10 |              0.07922 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7955 | >20%                    |                10 |              0.07955 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.807  | <5%                     |                10 |              0.0807  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8092 | >20%                    |                 2 |              0.4046  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8201 |                         |                 2 |              0.41005 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.83   | >20%                    |                 5 |              0.166   |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8456 | >20%                    |                 5 |              0.16912 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8497 | 10-15%                  |                 2 |              0.42485 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8625 | >20%                    |                 2 |              0.43125 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8638 | 15-20%                  |                10 |              0.08638 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8649 | >20%                    |                 2 |              0.43245 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8779 | 10-15%                  |                 2 |              0.43895 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8841 | 15-20%                  |                10 |              0.08841 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8953 | 5-10%                   |                 2 |              0.44765 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8975 | 15-20%                  |                10 |              0.08975 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9051 | 15-20%                  |                 2 |              0.45255 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9117 | >20%                    |                 5 |              0.18234 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.93   | >20%                    |                10 |              0.093   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9392 | >20%                    |                 5 |              0.18784 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.954  | >20%                    |                10 |              0.0954  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9547 | >20%                    |                10 |              0.09547 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9588 | >20%                    |                10 |              0.09588 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9725 | >20%                    |                10 |              0.09725 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9786 | 5-10%                   |                10 |              0.09786 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9844 | >20%                    |                 5 |              0.19688 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9859 | >20%                    |                 2 |              0.49295 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9903 | >20%                    |                 5 |              0.19806 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9965 | >20%                    |                10 |              0.09965 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0007 | 15-20%                  |                10 |              0.10007 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0082 | >20%                    |                 5 |              0.20164 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0168 | >20%                    |                10 |              0.10168 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0717 | 5-10%                   |                 5 |              0.21434 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0761 | >20%                    |                10 |              0.10761 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0951 | >20%                    |                 5 |              0.21902 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.127  | >20%                    |                 2 |              0.5635  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1515 | >20%                    |                10 |              0.11515 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1638 | >20%                    |                10 |              0.11638 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1755 | 10-15%                  |                 2 |              0.58775 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1859 | >20%                    |                10 |              0.11859 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1891 |                         |                10 |              0.11891 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2086 | 5-10%                   |                 2 |              0.6043  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.2436 | 15-20%                  |                10 |              0.12436 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2716 | >20%                    |                10 |              0.12716 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3164 | 15-20%                  |                10 |              0.13164 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3647 | >20%                    |                 5 |              0.27294 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3961 |                         |                 5 |              0.27922 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.427  | >20%                    |                10 |              0.1427  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.5054 | >20%                    |                 5 |              0.30108 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5397 | 5-10%                   |                10 |              0.15397 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5615 | 10-15%                  |                10 |              0.15615 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5863 | 15-20%                  |                10 |              0.15863 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5913 | 15-20%                  |                 5 |              0.31826 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6629 | >20%                    |                10 |              0.16629 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.7653 |                         |                10 |              0.17653 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8082 | >20%                    |                10 |              0.18082 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8194 | >20%                    |                10 |              0.18194 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.1743 | 5-10%                   |                 2 |              1.08715 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.2637 | >20%                    |                 5 |              0.45274 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.8142 | >20%                    |                 5 |              0.56284 |