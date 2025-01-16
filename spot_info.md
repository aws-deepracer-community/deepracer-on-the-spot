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

Data correct as of 2025-01-16 01:27:41.219500, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1805 | <5%                     |                 2 |              0.09025 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2103 | 10-15%                  |                 2 |              0.10515 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2278 | 15-20%                  |                 2 |              0.1139  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2298 | 5-10%                   |                 2 |              0.1149  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2346 | <5%                     |                 2 |              0.1173  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | 5-10%                   |                 2 |              0.1197  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2501 | 5-10%                   |                 2 |              0.12505 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2606 | >20%                    |                 5 |              0.05212 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2617 | 5-10%                   |                 2 |              0.13085 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2811 | <5%                     |                 2 |              0.14055 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2817 | 10-15%                  |                 2 |              0.14085 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2971 | <5%                     |                 2 |              0.14855 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3027 | >20%                    |                 2 |              0.15135 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3049 | <5%                     |                 5 |              0.06098 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3106 | 5-10%                   |                 2 |              0.1553  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3173 | 10-15%                  |                 2 |              0.15865 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3178 | 5-10%                   |                 2 |              0.1589  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3207 | >20%                    |                 2 |              0.16035 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3411 | <5%                     |                 2 |              0.17055 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3428 | 5-10%                   |                 5 |              0.06856 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3667 | <5%                     |                 5 |              0.07334 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3669 | <5%                     |                 2 |              0.18345 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3669 | >20%                    |                 2 |              0.18345 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3695 | <5%                     |                 2 |              0.18475 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3727 | 10-15%                  |                10 |              0.03727 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3761 | <5%                     |                 2 |              0.18805 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3771 | 5-10%                   |                 5 |              0.07542 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3803 | 10-15%                  |                 5 |              0.07606 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3923 | 5-10%                   |                 2 |              0.19615 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3927 | >20%                    |                 2 |              0.19635 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3954 | <5%                     |                 2 |              0.1977  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.401  | >20%                    |                 2 |              0.2005  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4053 | <5%                     |                 2 |              0.20265 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4121 | 5-10%                   |                 5 |              0.08242 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4126 | 5-10%                   |                 2 |              0.2063  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4204 | <5%                     |                 2 |              0.2102  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4247 | 10-15%                  |                 2 |              0.21235 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.427  | >20%                    |                 2 |              0.2135  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4291 | <5%                     |                 5 |              0.08582 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4321 | >20%                    |                 5 |              0.08642 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4323 | 5-10%                   |                 2 |              0.21615 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4435 | 10-15%                  |                 5 |              0.0887  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4491 | >20%                    |                10 |              0.04491 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4498 | >20%                    |                 5 |              0.08996 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4543 | <5%                     |                 5 |              0.09086 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4566 | <5%                     |                 5 |              0.09132 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4622 | <5%                     |                 5 |              0.09244 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4656 | <5%                     |                 2 |              0.2328  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4708 | 10-15%                  |                 5 |              0.09416 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4721 | 5-10%                   |                 5 |              0.09442 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4724 | 15-20%                  |                 5 |              0.09448 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4743 | 10-15%                  |                 5 |              0.09486 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4752 | <5%                     |                 2 |              0.2376  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4765 | 15-20%                  |                 2 |              0.23825 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4812 | 15-20%                  |                10 |              0.04812 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4865 | <5%                     |                 5 |              0.0973  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4973 | <5%                     |                 5 |              0.09946 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5008 | <5%                     |                 2 |              0.2504  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5016 | <5%                     |                 5 |              0.10032 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5064 | <5%                     |                 2 |              0.2532  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.516  | 5-10%                   |                 2 |              0.258   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5167 | >20%                    |                 5 |              0.10334 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5174 | <5%                     |                 5 |              0.10348 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5227 | 5-10%                   |                 5 |              0.10454 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5284 | >20%                    |                 2 |              0.2642  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5289 | >20%                    |                 5 |              0.10578 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5355 | >20%                    |                 5 |              0.1071  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5397 | 5-10%                   |                 5 |              0.10794 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.546  | >20%                    |                 5 |              0.1092  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5546 | <5%                     |                 5 |              0.11092 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5626 | <5%                     |                 5 |              0.11252 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5668 | 5-10%                   |                 5 |              0.11336 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5685 | 5-10%                   |                 5 |              0.1137  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5769 | 15-20%                  |                 2 |              0.28845 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5782 | 10-15%                  |                10 |              0.05782 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5819 | 15-20%                  |                 2 |              0.29095 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5876 | 5-10%                   |                 5 |              0.11752 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6023 | <5%                     |                 5 |              0.12046 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6208 | 5-10%                   |                10 |              0.06208 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6256 | >20%                    |                 2 |              0.3128  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6517 | 5-10%                   |                10 |              0.06517 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.667  | >20%                    |                10 |              0.0667  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6671 | <5%                     |                 5 |              0.13342 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6675 | >20%                    |                10 |              0.06675 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6717 | >20%                    |                10 |              0.06717 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.683  | >20%                    |                 5 |              0.1366  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6959 | 10-15%                  |                10 |              0.06959 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7001 | 10-15%                  |                 5 |              0.14002 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7004 | <5%                     |                10 |              0.07004 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7091 | >20%                    |                 5 |              0.14182 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7158 | >20%                    |                10 |              0.07158 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7285 | 15-20%                  |                 2 |              0.36425 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7327 | <5%                     |                 2 |              0.36635 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7342 | 5-10%                   |                 2 |              0.3671  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7357 | <5%                     |                10 |              0.07357 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.736  | 10-15%                  |                10 |              0.0736  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7409 | 5-10%                   |                 5 |              0.14818 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.741  | 15-20%                  |                10 |              0.0741  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7611 | >20%                    |                 5 |              0.15222 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7673 | 5-10%                   |                 5 |              0.15346 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7891 | >20%                    |                10 |              0.07891 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7911 | 10-15%                  |                10 |              0.07911 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8063 | >20%                    |                 5 |              0.16126 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8088 | >20%                    |                 5 |              0.16176 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8122 | 5-10%                   |                10 |              0.08122 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8142 | 15-20%                  |                10 |              0.08142 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8169 | 5-10%                   |                10 |              0.08169 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8182 | 5-10%                   |                10 |              0.08182 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8288 | 15-20%                  |                10 |              0.08288 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8582 | <5%                     |                10 |              0.08582 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8655 | >20%                    |                10 |              0.08655 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8674 | 10-15%                  |                10 |              0.08674 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8716 | 5-10%                   |                10 |              0.08716 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8777 | 5-10%                   |                10 |              0.08777 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8883 | <5%                     |                10 |              0.08883 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8934 | <5%                     |                10 |              0.08934 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9235 | <5%                     |                10 |              0.09235 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9246 | <5%                     |                10 |              0.09246 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9656 | 10-15%                  |                10 |              0.09656 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9685 | 5-10%                   |                 5 |              0.1937  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9706 | 5-10%                   |                 2 |              0.4853  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0007 | >20%                    |                10 |              0.10007 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0088 | <5%                     |                10 |              0.10088 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0135 | <5%                     |                10 |              0.10135 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0239 | <5%                     |                10 |              0.10239 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.024  | 10-15%                  |                 5 |              0.2048  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0325 | 5-10%                   |                10 |              0.10325 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1039 | 15-20%                  |                10 |              0.11039 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1072 | 5-10%                   |                 5 |              0.22144 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.112  | 15-20%                  |                 2 |              0.556   |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1802 | 10-15%                  |                10 |              0.11802 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2486 | >20%                    |                10 |              0.12486 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3198 | 10-15%                  |                10 |              0.13198 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4477 | 10-15%                  |                10 |              0.14477 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4692 | 5-10%                   |                10 |              0.14692 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5176 | 5-10%                   |                10 |              0.15176 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5448 | 15-20%                  |                 5 |              0.30896 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0634 | 10-15%                  |                10 |              0.20634 |