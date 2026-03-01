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

Data correct as of 2026-03-01 02:44:53.122118, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1589 | >20%                    |                 2 |              0.07945 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1784 | >20%                    |                 2 |              0.0892  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1814 | >20%                    |                 2 |              0.0907  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2256 | <5%                     |                 2 |              0.1128  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2331 | >20%                    |                 2 |              0.11655 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2432 | >20%                    |                 2 |              0.1216  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2478 | >20%                    |                 2 |              0.1239  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2555 | 15-20%                  |                 2 |              0.12775 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2568 | 10-15%                  |                 2 |              0.1284  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2575 | 5-10%                   |                10 |              0.02575 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2604 | 10-15%                  |                 2 |              0.1302  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | >20%                    |                 2 |              0.1306  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2682 | >20%                    |                 2 |              0.1341  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2693 | >20%                    |                 5 |              0.05386 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3052 | <5%                     |                 5 |              0.06104 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3064 | >20%                    |                 5 |              0.06128 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3066 | >20%                    |                 2 |              0.1533  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3071 | >20%                    |                 2 |              0.15355 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3081 | >20%                    |                 5 |              0.06162 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3121 | 5-10%                   |                 2 |              0.15605 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3126 | >20%                    |                 2 |              0.1563  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3335 | >20%                    |                 2 |              0.16675 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3392 | 5-10%                   |                10 |              0.03392 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3399 | <5%                     |                 5 |              0.06798 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3415 | 5-10%                   |                 2 |              0.17075 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3454 | >20%                    |                 5 |              0.06908 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3458 | >20%                    |                 5 |              0.06916 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3531 | >20%                    |                 5 |              0.07062 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3539 | 10-15%                  |                 2 |              0.17695 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3575 | 15-20%                  |                 2 |              0.17875 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3706 | 5-10%                   |                 2 |              0.1853  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3709 | <5%                     |                10 |              0.03709 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3714 | >20%                    |                 2 |              0.1857  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3803 | 5-10%                   |                 5 |              0.07606 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3838 | >20%                    |                 5 |              0.07676 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3854 | 15-20%                  |                 2 |              0.1927  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3894 | >20%                    |                 2 |              0.1947  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3904 | >20%                    |                 5 |              0.07808 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.394  | >20%                    |                10 |              0.0394  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3965 | >20%                    |                 5 |              0.0793  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.399  | >20%                    |                 5 |              0.0798  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3991 | 5-10%                   |                 2 |              0.19955 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4015 | <5%                     |                10 |              0.04015 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4046 | <5%                     |                 2 |              0.2023  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4053 | >20%                    |                10 |              0.04053 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4062 | >20%                    |                 2 |              0.2031  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4113 | 10-15%                  |                 5 |              0.08226 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4122 | 15-20%                  |                 2 |              0.2061  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4248 | <5%                     |                 5 |              0.08496 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.425  | >20%                    |                 2 |              0.2125  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4253 | >20%                    |                 2 |              0.21265 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4274 | >20%                    |                 2 |              0.2137  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4277 | >20%                    |                 2 |              0.21385 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4279 | 5-10%                   |                 5 |              0.08558 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4299 | 15-20%                  |                 2 |              0.21495 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4309 | 5-10%                   |                 2 |              0.21545 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4331 | 15-20%                  |                 5 |              0.08662 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4395 | <5%                     |                 2 |              0.21975 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4417 | >20%                    |                 2 |              0.22085 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4427 | <5%                     |                 2 |              0.22135 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4432 | >20%                    |                10 |              0.04432 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4434 | >20%                    |                10 |              0.04434 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4436 | >20%                    |                 2 |              0.2218  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4443 | 5-10%                   |                 2 |              0.22215 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4461 | >20%                    |                 5 |              0.08922 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4496 | 5-10%                   |                 2 |              0.2248  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4555 | 5-10%                   |                 5 |              0.0911  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.46   | 15-20%                  |                 2 |              0.23    |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4609 | 15-20%                  |                 5 |              0.09218 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4796 | >20%                    |                 5 |              0.09592 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4809 | >20%                    |                 5 |              0.09618 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.4827 | <5%                     |                 5 |              0.09654 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4834 | >20%                    |                 5 |              0.09668 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4882 | >20%                    |                10 |              0.04882 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4989 | 15-20%                  |                10 |              0.04989 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5046 | >20%                    |                 2 |              0.2523  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5171 | >20%                    |                 2 |              0.25855 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5173 | <5%                     |                 5 |              0.10346 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5179 | >20%                    |                 5 |              0.10358 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5211 | 15-20%                  |                10 |              0.05211 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5223 | >20%                    |                 5 |              0.10446 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5243 | >20%                    |                 5 |              0.10486 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5248 | 15-20%                  |                 5 |              0.10496 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5281 | >20%                    |                 5 |              0.10562 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5323 | 15-20%                  |                 5 |              0.10646 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5326 | >20%                    |                 2 |              0.2663  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5331 | >20%                    |                 2 |              0.26655 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5413 | >20%                    |                 5 |              0.10826 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5485 | 15-20%                  |                10 |              0.05485 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.555  | <5%                     |                 5 |              0.111   |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5705 |                         |                 2 |              0.28525 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5733 | >20%                    |                10 |              0.05733 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5811 | >20%                    |                 5 |              0.11622 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5817 | <5%                     |                10 |              0.05817 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5834 | >20%                    |                10 |              0.05834 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5947 | 5-10%                   |                 2 |              0.29735 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6061 | >20%                    |                10 |              0.06061 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6081 | 15-20%                  |                 2 |              0.30405 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.614  | >20%                    |                 2 |              0.307   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6142 | >20%                    |                 5 |              0.12284 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6144 | >20%                    |                 5 |              0.12288 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.6159 | >20%                    |                10 |              0.06159 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6205 | >20%                    |                 5 |              0.1241  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6231 | 5-10%                   |                 2 |              0.31155 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6331 | >20%                    |                10 |              0.06331 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.635  | >20%                    |                 5 |              0.127   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6445 | 10-15%                  |                 5 |              0.1289  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6492 | >20%                    |                10 |              0.06492 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6564 | 5-10%                   |                 5 |              0.13128 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.658  | 15-20%                  |                10 |              0.0658  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6583 | 5-10%                   |                 5 |              0.13166 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6593 | >20%                    |                 2 |              0.32965 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6664 | >20%                    |                 2 |              0.3332  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6691 | <5%                     |                10 |              0.06691 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6707 | 5-10%                   |                 5 |              0.13414 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6716 | <5%                     |                10 |              0.06716 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6778 | <5%                     |                10 |              0.06778 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.684  | >20%                    |                 5 |              0.1368  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6926 | >20%                    |                10 |              0.06926 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7104 | 10-15%                  |                10 |              0.07104 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7121 | >20%                    |                 5 |              0.14242 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7191 | >20%                    |                 5 |              0.14382 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7197 | >20%                    |                 5 |              0.14394 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7244 | >20%                    |                10 |              0.07244 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7283 | 10-15%                  |                10 |              0.07283 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7327 |                         |                 5 |              0.14654 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7505 | >20%                    |                10 |              0.07505 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.768  | >20%                    |                 5 |              0.1536  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7736 | >20%                    |                 2 |              0.3868  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7813 | >20%                    |                10 |              0.07813 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7964 | >20%                    |                10 |              0.07964 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7967 | 15-20%                  |                10 |              0.07967 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.799  | <5%                     |                10 |              0.0799  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8221 | <5%                     |                10 |              0.08221 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8256 | >20%                    |                 2 |              0.4128  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8277 | >20%                    |                 5 |              0.16554 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8335 | <5%                     |                 5 |              0.1667  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8385 | <5%                     |                 5 |              0.1677  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8515 | >20%                    |                 5 |              0.1703  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8568 | >20%                    |                 5 |              0.17136 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.857  | >20%                    |                10 |              0.0857  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8646 | >20%                    |                10 |              0.08646 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8902 | >20%                    |                 5 |              0.17804 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8936 | 10-15%                  |                 2 |              0.4468  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9095 | 10-15%                  |                10 |              0.09095 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9135 | >20%                    |                 5 |              0.1827  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9241 | >20%                    |                 2 |              0.46205 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9297 | >20%                    |                10 |              0.09297 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9395 | 5-10%                   |                10 |              0.09395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9406 | <5%                     |                10 |              0.09406 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9489 | <5%                     |                10 |              0.09489 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.949  | 5-10%                   |                10 |              0.0949  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9585 | >20%                    |                10 |              0.09585 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9707 | >20%                    |                 2 |              0.48535 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9708 | >20%                    |                10 |              0.09708 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9899 | >20%                    |                10 |              0.09899 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0233 | 15-20%                  |                10 |              0.10233 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0376 | >20%                    |                10 |              0.10376 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0395 | 5-10%                   |                 5 |              0.2079  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0594 | 5-10%                   |                10 |              0.10594 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0637 | >20%                    |                10 |              0.10637 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0726 | >20%                    |                10 |              0.10726 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0741 | >20%                    |                 5 |              0.21482 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0908 | >20%                    |                10 |              0.10908 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1172 |                         |                10 |              0.11172 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1264 | >20%                    |                 2 |              0.5632  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1389 | 15-20%                  |                10 |              0.11389 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.1465 | <5%                     |                 2 |              0.57325 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1601 | 10-15%                  |                 5 |              0.23202 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2519 | <5%                     |                10 |              0.12519 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2561 | >20%                    |                10 |              0.12561 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2652 | >20%                    |                10 |              0.12652 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2681 | >20%                    |                 2 |              0.63405 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3574 | >20%                    |                 5 |              0.27148 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4484 | >20%                    |                 2 |              0.7242  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4506 | 10-15%                  |                 5 |              0.29012 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5052 | 15-20%                  |                10 |              0.15052 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6833 | >20%                    |                10 |              0.16833 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7101 | >20%                    |                10 |              0.17101 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3389 | 10-15%                  |                10 |              0.23389 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.5003 | <5%                     |                 5 |              0.50006 |