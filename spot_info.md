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

Data correct as of 2026-10-10 05:08:11.614142, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1225 | >20%                    |                 2 |              0.06125 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1502 | >20%                    |                 2 |              0.0751  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1791 | 15-20%                  |                 5 |              0.03582 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1872 | >20%                    |                 2 |              0.0936  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1892 | 15-20%                  |                 2 |              0.0946  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2102 | 15-20%                  |                 5 |              0.04204 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2376 | >20%                    |                 2 |              0.1188  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2514 | >20%                    |                 5 |              0.05028 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2711 | >20%                    |                 2 |              0.13555 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2712 | 10-15%                  |                 2 |              0.1356  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2719 | >20%                    |                 2 |              0.13595 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2758 | 5-10%                   |                10 |              0.02758 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2763 | >20%                    |                 2 |              0.13815 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2818 | >20%                    |                 2 |              0.1409  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.297  | <5%                     |                10 |              0.0297  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2996 | 15-20%                  |                 2 |              0.1498  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | >20%                    |                 2 |              0.15025 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3054 | >20%                    |                 5 |              0.06108 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3306 | >20%                    |                 2 |              0.1653  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3454 | >20%                    |                 5 |              0.06908 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3549 | 10-15%                  |                 2 |              0.17745 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3683 | 15-20%                  |                 2 |              0.18415 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3728 | >20%                    |                 5 |              0.07456 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3741 | 15-20%                  |                 2 |              0.18705 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.378  | 5-10%                   |                10 |              0.0378  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3796 | >20%                    |                 2 |              0.1898  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3872 | >20%                    |                 2 |              0.1936  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3877 | <5%                     |                 2 |              0.19385 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3919 | >20%                    |                 5 |              0.07838 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3949 | >20%                    |                10 |              0.03949 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3958 | >20%                    |                 2 |              0.1979  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3971 | >20%                    |                 2 |              0.19855 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4006 | >20%                    |                 5 |              0.08012 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4034 | >20%                    |                 5 |              0.08068 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4103 | >20%                    |                10 |              0.04103 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4139 | >20%                    |                 5 |              0.08278 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4347 | >20%                    |                 5 |              0.08694 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4395 | >20%                    |                 2 |              0.21975 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4438 | >20%                    |                 2 |              0.2219  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4486 | >20%                    |                 5 |              0.08972 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4515 | >20%                    |                10 |              0.04515 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4519 | >20%                    |                 2 |              0.22595 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4603 | >20%                    |                 2 |              0.23015 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4657 | >20%                    |                 5 |              0.09314 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4714 | 10-15%                  |                 2 |              0.2357  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4885 |                         |                 2 |              0.24425 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4905 | >20%                    |                 2 |              0.24525 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4908 | >20%                    |                 2 |              0.2454  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5015 | >20%                    |                 5 |              0.1003  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5043 | >20%                    |                 5 |              0.10086 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5159 | >20%                    |                 5 |              0.10318 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5263 | >20%                    |                 5 |              0.10526 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5278 | >20%                    |                 5 |              0.10556 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5335 | <5%                     |                 2 |              0.26675 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.551  | >20%                    |                 2 |              0.2755  |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5617 |                         |                10 |              0.05617 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5696 | 15-20%                  |                 2 |              0.2848  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5718 | 10-15%                  |                 5 |              0.11436 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5739 | >20%                    |                 5 |              0.11478 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5822 | >20%                    |                 5 |              0.11644 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6062 | 5-10%                   |                10 |              0.06062 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.616  | >20%                    |                10 |              0.0616  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6176 | >20%                    |                 5 |              0.12352 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6177 | >20%                    |                10 |              0.06177 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.618  | 10-15%                  |                 2 |              0.309   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6188 | >20%                    |                 5 |              0.12376 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6314 | >20%                    |                 2 |              0.3157  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6346 | >20%                    |                 5 |              0.12692 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.65   | >20%                    |                 2 |              0.325   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6683 | >20%                    |                 5 |              0.13366 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6716 | 15-20%                  |                 2 |              0.3358  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6749 | >20%                    |                 5 |              0.13498 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6765 | 5-10%                   |                 2 |              0.33825 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6791 | <5%                     |                 2 |              0.33955 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6808 | >20%                    |                 5 |              0.13616 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6813 | >20%                    |                 5 |              0.13626 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6862 | >20%                    |                 5 |              0.13724 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6918 | >20%                    |                10 |              0.06918 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6994 | >20%                    |                 5 |              0.13988 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7161 | 15-20%                  |                10 |              0.07161 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7322 | >20%                    |                10 |              0.07322 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7344 | 15-20%                  |                 5 |              0.14688 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7354 | >20%                    |                10 |              0.07354 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7365 | >20%                    |                10 |              0.07365 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7425 | >20%                    |                 5 |              0.1485  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7454 | >20%                    |                 2 |              0.3727  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7483 | 5-10%                   |                 5 |              0.14966 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7544 | 15-20%                  |                10 |              0.07544 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7551 | >20%                    |                 5 |              0.15102 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.7588 |                         |                 5 |              0.15176 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7815 | >20%                    |                 5 |              0.1563  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7896 | 15-20%                  |                10 |              0.07896 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8163 | 5-10%                   |                10 |              0.08163 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8264 | 15-20%                  |                10 |              0.08264 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.8297 | >20%                    |                 2 |              0.41485 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8354 | >20%                    |                10 |              0.08354 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8407 | 15-20%                  |                 5 |              0.16814 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8417 | >20%                    |                10 |              0.08417 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8457 | >20%                    |                 2 |              0.42285 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8594 | >20%                    |                10 |              0.08594 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8624 | 10-15%                  |                 2 |              0.4312  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8652 | >20%                    |                10 |              0.08652 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8692 | >20%                    |                 5 |              0.17384 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8721 | 10-15%                  |                10 |              0.08721 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8748 | >20%                    |                 5 |              0.17496 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8791 | >20%                    |                10 |              0.08791 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8851 | >20%                    |                10 |              0.08851 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8927 | >20%                    |                 5 |              0.17854 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.905  | <5%                     |                 5 |              0.181   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9136 | >20%                    |                 5 |              0.18272 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9435 | >20%                    |                10 |              0.09435 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9557 | >20%                    |                 2 |              0.47785 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9706 | >20%                    |                10 |              0.09706 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9711 | >20%                    |                 5 |              0.19422 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9746 | >20%                    |                10 |              0.09746 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9912 | 10-15%                  |                 2 |              0.4956  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9933 | 15-20%                  |                10 |              0.09933 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0244 | >20%                    |                10 |              0.10244 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0311 | >20%                    |                10 |              0.10311 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0388 | >20%                    |                10 |              0.10388 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0565 | 15-20%                  |                10 |              0.10565 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0606 | >20%                    |                10 |              0.10606 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0646 | >20%                    |                10 |              0.10646 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1177 | 5-10%                   |                10 |              0.11177 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1518 | >20%                    |                 5 |              0.23036 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1871 | >20%                    |                10 |              0.11871 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2064 | >20%                    |                10 |              0.12064 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.2116 |                         |                 2 |              0.6058  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2313 | 5-10%                   |                 2 |              0.61565 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2841 | 10-15%                  |                 2 |              0.64205 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3376 | >20%                    |                 2 |              0.6688  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3519 | 15-20%                  |                10 |              0.13519 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3549 | >20%                    |                10 |              0.13549 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3596 | 15-20%                  |                10 |              0.13596 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3702 | 10-15%                  |                10 |              0.13702 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4565 | >20%                    |                10 |              0.14565 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5335 | 5-10%                   |                 5 |              0.3067  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5558 | >20%                    |                 2 |              0.7779  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5762 |                         |                10 |              0.15762 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5822 | >20%                    |                 5 |              0.31644 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6154 | >20%                    |                10 |              0.16154 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.6323 |                         |                 2 |              0.81615 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.65   | 5-10%                   |                 2 |              0.825   |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.6782 |                         |                 5 |              0.33564 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6999 | >20%                    |                10 |              0.16999 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7201 | >20%                    |                 5 |              0.34402 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9413 | >20%                    |                10 |              0.19413 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9528 |                         |                 5 |              0.39056 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.0163 | >20%                    |                 5 |              0.40326 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0709 | 15-20%                  |                 5 |              0.41418 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2077 | 5-10%                   |                 2 |              1.10385 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2494 | 5-10%                   |                10 |              0.22494 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.2891 |                         |                10 |              0.22891 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5681 | >20%                    |                10 |              0.25681 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1207 | >20%                    |                10 |              0.31207 |