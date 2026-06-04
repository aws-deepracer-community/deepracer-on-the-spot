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

Data correct as of 2026-06-04 04:27:06.902793, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1383 | >20%                    |                 2 |              0.06915 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1535 | 15-20%                  |                 2 |              0.07675 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1671 | >20%                    |                 2 |              0.08355 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1972 | 10-15%                  |                 2 |              0.0986  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2047 | >20%                    |                 2 |              0.10235 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2094 | 15-20%                  |                 2 |              0.1047  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2101 | >20%                    |                 2 |              0.10505 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2142 | >20%                    |                 2 |              0.1071  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2208 | 15-20%                  |                 5 |              0.04416 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2259 | 15-20%                  |                 5 |              0.04518 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2376 | >20%                    |                 2 |              0.1188  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2381 | >20%                    |                 2 |              0.11905 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2431 | >20%                    |                 5 |              0.04862 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.249  | >20%                    |                 2 |              0.1245  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2546 | >20%                    |                10 |              0.02546 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2553 | >20%                    |                 2 |              0.12765 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2746 | >20%                    |                 5 |              0.05492 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2811 | >20%                    |                 5 |              0.05622 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2826 | >20%                    |                 5 |              0.05652 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2841 | >20%                    |                 2 |              0.14205 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2897 | 5-10%                   |                10 |              0.02897 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.292  | 15-20%                  |                 2 |              0.146   |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2981 | >20%                    |                 2 |              0.14905 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2985 | >20%                    |                 5 |              0.0597  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3151 | >20%                    |                10 |              0.03151 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3162 | 15-20%                  |                 5 |              0.06324 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3198 | 10-15%                  |                 2 |              0.1599  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3302 | >20%                    |                 2 |              0.1651  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3328 | <5%                     |                 2 |              0.1664  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3337 | >20%                    |                 5 |              0.06674 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3405 | >20%                    |                 2 |              0.17025 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3476 | >20%                    |                 5 |              0.06952 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3479 | 10-15%                  |                 2 |              0.17395 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3515 | >20%                    |                 2 |              0.17575 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3675 | 5-10%                   |                10 |              0.03675 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3751 | >20%                    |                 5 |              0.07502 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3807 | >20%                    |                 5 |              0.07614 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3813 | >20%                    |                 2 |              0.19065 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3824 | >20%                    |                 5 |              0.07648 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3889 | >20%                    |                 5 |              0.07778 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3928 | >20%                    |                10 |              0.03928 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3931 | >20%                    |                 5 |              0.07862 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3971 | >20%                    |                 5 |              0.07942 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3995 | >20%                    |                 5 |              0.0799  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4084 | 10-15%                  |                 2 |              0.2042  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4096 | >20%                    |                 5 |              0.08192 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4202 | >20%                    |                 2 |              0.2101  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4213 | <5%                     |                 2 |              0.21065 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4291 | >20%                    |                 2 |              0.21455 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4369 | >20%                    |                10 |              0.04369 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4375 | 15-20%                  |                 2 |              0.21875 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4384 | >20%                    |                 2 |              0.2192  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4543 | 15-20%                  |                 5 |              0.09086 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4599 | >20%                    |                 5 |              0.09198 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4651 | >20%                    |                 2 |              0.23255 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4657 | <5%                     |                 2 |              0.23285 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4725 | >20%                    |                 5 |              0.0945  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4726 | 5-10%                   |                 2 |              0.2363  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4795 |                         |                 2 |              0.23975 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.4841 | >20%                    |                10 |              0.04841 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4902 | >20%                    |                 5 |              0.09804 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4944 | >20%                    |                 5 |              0.09888 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4964 | 15-20%                  |                 2 |              0.2482  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4988 | >20%                    |                 5 |              0.09976 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5021 | 5-10%                   |                 5 |              0.10042 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5078 | 10-15%                  |                 2 |              0.2539  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5107 | >20%                    |                 2 |              0.25535 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5233 | >20%                    |                 5 |              0.10466 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5259 | 15-20%                  |                 2 |              0.26295 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5437 | 10-15%                  |                 5 |              0.10874 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5466 | >20%                    |                 2 |              0.2733  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5492 | >20%                    |                 2 |              0.2746  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.556  | 5-10%                   |                 2 |              0.278   |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5586 | >20%                    |                 2 |              0.2793  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5628 | <5%                     |                 5 |              0.11256 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5769 | >20%                    |                 2 |              0.28845 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.586  | >20%                    |                10 |              0.0586  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6099 | 5-10%                   |                10 |              0.06099 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6147 | 10-15%                  |                10 |              0.06147 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6166 | >20%                    |                 2 |              0.3083  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6205 | >20%                    |                 5 |              0.1241  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6247 | 15-20%                  |                10 |              0.06247 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6262 | >20%                    |                10 |              0.06262 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6281 | >20%                    |                 5 |              0.12562 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6412 | >20%                    |                10 |              0.06412 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6422 | 15-20%                  |                10 |              0.06422 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6549 | >20%                    |                 5 |              0.13098 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6576 | >20%                    |                 5 |              0.13152 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6592 | 15-20%                  |                10 |              0.06592 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6593 | >20%                    |                10 |              0.06593 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6618 | >20%                    |                 5 |              0.13236 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6674 | >20%                    |                 5 |              0.13348 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6909 | 5-10%                   |                10 |              0.06909 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6919 | >20%                    |                 5 |              0.13838 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6924 | >20%                    |                 5 |              0.13848 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7002 | >20%                    |                10 |              0.07002 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7112 | 15-20%                  |                10 |              0.07112 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7129 | >20%                    |                 5 |              0.14258 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7155 | >20%                    |                 2 |              0.35775 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7337 | >20%                    |                 2 |              0.36685 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7502 | >20%                    |                10 |              0.07502 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7598 | >20%                    |                 2 |              0.3799  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7712 |                         |                 5 |              0.15424 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7795 | >20%                    |                10 |              0.07795 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7891 | >20%                    |                 5 |              0.15782 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.7913 |                         |                10 |              0.07913 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8043 | >20%                    |                 5 |              0.16086 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8047 | >20%                    |                10 |              0.08047 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.81   | >20%                    |                10 |              0.081   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8299 | >20%                    |                 5 |              0.16598 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8308 | >20%                    |                10 |              0.08308 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8433 | >20%                    |                10 |              0.08433 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8457 | >20%                    |                10 |              0.08457 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8496 | >20%                    |                 5 |              0.16992 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8571 | 10-15%                  |                 2 |              0.42855 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.859  | 15-20%                  |                10 |              0.0859  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8692 | >20%                    |                10 |              0.08692 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8781 | >20%                    |                10 |              0.08781 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8828 | >20%                    |                10 |              0.08828 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.884  |                         |                 2 |              0.442   |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9114 | 5-10%                   |                 2 |              0.4557  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9351 | >20%                    |                 5 |              0.18702 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9371 | 5-10%                   |                10 |              0.09371 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9418 | >20%                    |                10 |              0.09418 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9456 | >20%                    |                10 |              0.09456 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9526 | >20%                    |                10 |              0.09526 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9735 | >20%                    |                 5 |              0.1947  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9754 | >20%                    |                 5 |              0.19508 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9821 | >20%                    |                 5 |              0.19642 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9945 | 5-10%                   |                 5 |              0.1989  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9958 | >20%                    |                10 |              0.09958 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0016 | >20%                    |                 2 |              0.5008  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0119 | >20%                    |                10 |              0.10119 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0355 | >20%                    |                10 |              0.10355 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.045  | >20%                    |                10 |              0.1045  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.063  | >20%                    |                10 |              0.1063  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0634 |                         |                 5 |              0.21268 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0804 | >20%                    |                 5 |              0.21608 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1397 | 15-20%                  |                10 |              0.11397 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1434 | 15-20%                  |                10 |              0.11434 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1637 | >20%                    |                10 |              0.11637 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.197  | 5-10%                   |                 2 |              0.5985  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.29   | 10-15%                  |                 2 |              0.645   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3028 | >20%                    |                10 |              0.13028 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3077 | 15-20%                  |                 5 |              0.26154 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3469 |                         |                10 |              0.13469 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3673 | >20%                    |                10 |              0.13673 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4501 | 10-15%                  |                10 |              0.14501 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4531 | >20%                    |                 5 |              0.29062 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.528  | 15-20%                  |                10 |              0.1528  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.628  | >20%                    |                 5 |              0.3256  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0066 | >20%                    |                10 |              0.20066 |