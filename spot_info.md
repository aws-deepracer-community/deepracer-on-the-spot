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

Data correct as of 2026-08-20 01:25:42.165690, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1615 | >20%                    |                 2 |              0.08075 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1618 | >20%                    |                 2 |              0.0809  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2074 | >20%                    |                 2 |              0.1037  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2086 | 15-20%                  |                 2 |              0.1043  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2192 | >20%                    |                 2 |              0.1096  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.223  | >20%                    |                 2 |              0.1115  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2303 | >20%                    |                 2 |              0.11515 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2334 | 15-20%                  |                 2 |              0.1167  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2337 | 10-15%                  |                 2 |              0.11685 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2469 | 15-20%                  |                 2 |              0.12345 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2645 | 10-15%                  |                 2 |              0.13225 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2667 | >20%                    |                 2 |              0.13335 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2864 | >20%                    |                 2 |              0.1432  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2872 | >20%                    |                 2 |              0.1436  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3031 | >20%                    |                 5 |              0.06062 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3068 | >20%                    |                 5 |              0.06136 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3186 | >20%                    |                 2 |              0.1593  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3241 | >20%                    |                 2 |              0.16205 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3249 | >20%                    |                 2 |              0.16245 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3276 | 15-20%                  |                 5 |              0.06552 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3398 | >20%                    |                10 |              0.03398 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3536 | 5-10%                   |                10 |              0.03536 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3684 | >20%                    |                 5 |              0.07368 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3751 | <5%                     |                 2 |              0.18755 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3858 | 10-15%                  |                 2 |              0.1929  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3875 | >20%                    |                10 |              0.03875 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3898 | >20%                    |                 5 |              0.07796 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3911 | 15-20%                  |                 2 |              0.19555 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3912 | <5%                     |                 2 |              0.1956  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3917 | >20%                    |                 5 |              0.07834 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3918 | >20%                    |                10 |              0.03918 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3919 | 15-20%                  |                 5 |              0.07838 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4043 | 15-20%                  |                 2 |              0.20215 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4094 | >20%                    |                 5 |              0.08188 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4104 | 5-10%                   |                10 |              0.04104 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4156 | >20%                    |                 5 |              0.08312 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4182 | >20%                    |                 2 |              0.2091  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.42   | >20%                    |                 2 |              0.21    |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.431  | >20%                    |                 2 |              0.2155  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4325 | >20%                    |                10 |              0.04325 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.436  | >20%                    |                 5 |              0.0872  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4369 | >20%                    |                 5 |              0.08738 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4372 | >20%                    |                 5 |              0.08744 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4463 | >20%                    |                 2 |              0.22315 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4485 | 10-15%                  |                 2 |              0.22425 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4521 | >20%                    |                 2 |              0.22605 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4785 | >20%                    |                 5 |              0.0957  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4923 | >20%                    |                 5 |              0.09846 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4935 | >20%                    |                 5 |              0.0987  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4982 | >20%                    |                 5 |              0.09964 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4996 | >20%                    |                 2 |              0.2498  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5028 | >20%                    |                 2 |              0.2514  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5087 | >20%                    |                 5 |              0.10174 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5122 | >20%                    |                 2 |              0.2561  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5152 | >20%                    |                10 |              0.05152 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5153 | >20%                    |                 5 |              0.10306 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5199 | >20%                    |                 2 |              0.25995 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5224 | >20%                    |                 5 |              0.10448 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5237 | >20%                    |                10 |              0.05237 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.533  | >20%                    |                 2 |              0.2665  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5355 | 5-10%                   |                 2 |              0.26775 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5368 | 15-20%                  |                 5 |              0.10736 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5377 | <5%                     |                 2 |              0.26885 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5489 | >20%                    |                 5 |              0.10978 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5489 | >20%                    |                 2 |              0.27445 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5575 | >20%                    |                 5 |              0.1115  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.56   | <5%                     |                 5 |              0.112   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5629 | >20%                    |                10 |              0.05629 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5632 | 5-10%                   |                10 |              0.05632 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5753 | >20%                    |                 2 |              0.28765 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5882 | 10-15%                  |                10 |              0.05882 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5904 | >20%                    |                 5 |              0.11808 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5906 | 10-15%                  |                 5 |              0.11812 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5925 | >20%                    |                 5 |              0.1185  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5966 | >20%                    |                 5 |              0.11932 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.61   | >20%                    |                 2 |              0.305   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6159 | >20%                    |                 5 |              0.12318 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6461 | >20%                    |                 2 |              0.32305 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6478 | >20%                    |                 5 |              0.12956 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6553 | 5-10%                   |                 5 |              0.13106 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6612 | 15-20%                  |                10 |              0.06612 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.662  | 15-20%                  |                10 |              0.0662  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6678 | >20%                    |                 2 |              0.3339  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6824 | >20%                    |                 5 |              0.13648 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6888 | >20%                    |                10 |              0.06888 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6945 | >20%                    |                10 |              0.06945 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6997 | >20%                    |                 2 |              0.34985 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7024 | >20%                    |                10 |              0.07024 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.707  | >20%                    |                10 |              0.0707  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.708  | >20%                    |                10 |              0.0708  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7092 | >20%                    |                 5 |              0.14184 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7351 | >20%                    |                 5 |              0.14702 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7359 | >20%                    |                10 |              0.07359 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7633 | >20%                    |                10 |              0.07633 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7783 | >20%                    |                 5 |              0.15566 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.796  | >20%                    |                10 |              0.0796  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8058 | 15-20%                  |                10 |              0.08058 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8096 | 5-10%                   |                10 |              0.08096 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.812  | >20%                    |                 5 |              0.1624  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.829  | <5%                     |                10 |              0.0829  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8322 | >20%                    |                 5 |              0.16644 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8397 | 10-15%                  |                 2 |              0.41985 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.849  | >20%                    |                10 |              0.0849  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8495 | >20%                    |                 5 |              0.1699  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8527 | >20%                    |                10 |              0.08527 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8727 | >20%                    |                10 |              0.08727 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8742 | >20%                    |                10 |              0.08742 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8765 | 5-10%                   |                10 |              0.08765 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8783 | >20%                    |                10 |              0.08783 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8816 | >20%                    |                 2 |              0.4408  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.887  | >20%                    |                 5 |              0.1774  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8944 | 15-20%                  |                10 |              0.08944 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8971 | 10-15%                  |                 2 |              0.44855 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9228 | 15-20%                  |                 2 |              0.4614  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.931  |                         |                 2 |              0.4655  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9526 | >20%                    |                10 |              0.09526 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9551 | >20%                    |                10 |              0.09551 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9767 | >20%                    |                10 |              0.09767 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.9805 | >20%                    |                 5 |              0.1961  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0082 | 15-20%                  |                10 |              0.10082 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0107 | >20%                    |                10 |              0.10107 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0124 |                         |                10 |              0.10124 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0223 | >20%                    |                10 |              0.10223 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0256 | >20%                    |                 5 |              0.20512 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0413 | >20%                    |                 5 |              0.20826 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0457 | >20%                    |                 5 |              0.20914 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0521 | 15-20%                  |                10 |              0.10521 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0791 | >20%                    |                 5 |              0.21582 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0838 | >20%                    |                 5 |              0.21676 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1146 | >20%                    |                 5 |              0.22292 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1164 |                         |                 2 |              0.5582  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1198 | >20%                    |                10 |              0.11198 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1504 | >20%                    |                10 |              0.11504 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1719 | >20%                    |                10 |              0.11719 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.186  | >20%                    |                 2 |              0.593   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1929 | 5-10%                   |                 2 |              0.59645 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2031 | 15-20%                  |                10 |              0.12031 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2116 | 5-10%                   |                 5 |              0.24232 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2246 |                         |                 5 |              0.24492 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2612 |                         |                 5 |              0.25224 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2628 | 10-15%                  |                 2 |              0.6314  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2902 | >20%                    |                 5 |              0.25804 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3132 | 5-10%                   |                10 |              0.13132 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4379 | 10-15%                  |                10 |              0.14379 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5375 | 15-20%                  |                 5 |              0.3075  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5883 | >20%                    |                10 |              0.15883 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6468 | >20%                    |                10 |              0.16468 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7185 | >20%                    |                10 |              0.17185 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7272 | 15-20%                  |                10 |              0.17272 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.7824 | 5-10%                   |                 2 |              0.8912  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8539 |                         |                10 |              0.18539 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.8659 | >20%                    |                10 |              0.18659 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9322 | 5-10%                   |                 2 |              0.9661  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.3149 | >20%                    |                 5 |              0.46298 |