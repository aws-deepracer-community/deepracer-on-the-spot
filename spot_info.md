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

Data correct as of 2025-05-18 01:58:59.294470, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1689 | >20%                    |                 2 |              0.08445 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2128 | 10-15%                  |                 2 |              0.1064  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2149 | <5%                     |                 5 |              0.04298 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2169 | >20%                    |                 5 |              0.04338 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2174 | >20%                    |                 2 |              0.1087  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2257 | >20%                    |                 2 |              0.11285 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2303 | 5-10%                   |                 2 |              0.11515 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2459 | >20%                    |                 2 |              0.12295 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2484 | >20%                    |                 5 |              0.04968 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2516 | 15-20%                  |                 2 |              0.1258  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2583 | >20%                    |                 2 |              0.12915 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2596 | >20%                    |                 2 |              0.1298  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2613 | 5-10%                   |                 2 |              0.13065 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2659 | 10-15%                  |                10 |              0.02659 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2687 | 15-20%                  |                 2 |              0.13435 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2745 | >20%                    |                 2 |              0.13725 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2851 | 15-20%                  |                 2 |              0.14255 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2882 | >20%                    |                 5 |              0.05764 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2893 | 10-15%                  |                 2 |              0.14465 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2894 | >20%                    |                 2 |              0.1447  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2922 | >20%                    |                10 |              0.02922 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2957 | >20%                    |                 2 |              0.14785 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3    | 5-10%                   |                10 |              0.03    |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3018 | <5%                     |                 2 |              0.1509  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3158 | 10-15%                  |                 2 |              0.1579  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3169 | 10-15%                  |                 2 |              0.15845 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3242 | 5-10%                   |                 5 |              0.06484 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3246 | >20%                    |                 2 |              0.1623  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3258 | >20%                    |                 2 |              0.1629  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3303 | >20%                    |                10 |              0.03303 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3308 | >20%                    |                 5 |              0.06616 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3405 | >20%                    |                 2 |              0.17025 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3426 | >20%                    |                 2 |              0.1713  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3433 | >20%                    |                10 |              0.03433 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3545 | >20%                    |                10 |              0.03545 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3545 | 15-20%                  |                 5 |              0.0709  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3616 | 5-10%                   |                 2 |              0.1808  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3618 | 15-20%                  |                10 |              0.03618 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3625 | >20%                    |                 2 |              0.18125 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3656 | >20%                    |                 2 |              0.1828  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3658 | >20%                    |                10 |              0.03658 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3658 | >20%                    |                 2 |              0.1829  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3669 | 5-10%                   |                 2 |              0.18345 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3677 | 5-10%                   |                 5 |              0.07354 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3689 | >20%                    |                 5 |              0.07378 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3693 | 10-15%                  |                 2 |              0.18465 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3701 | >20%                    |                 5 |              0.07402 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3889 | >20%                    |                 2 |              0.19445 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3904 | <5%                     |                 5 |              0.07808 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.395  | >20%                    |                10 |              0.0395  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3964 | >20%                    |                 5 |              0.07928 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4026 | 10-15%                  |                 2 |              0.2013  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.403  | <5%                     |                 2 |              0.2015  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4033 | 5-10%                   |                 5 |              0.08066 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4047 | >20%                    |                10 |              0.04047 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4184 | <5%                     |                 5 |              0.08368 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4193 | >20%                    |                 2 |              0.20965 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4254 | 15-20%                  |                 2 |              0.2127  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4356 | >20%                    |                 2 |              0.2178  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4368 | <5%                     |                 2 |              0.2184  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4394 | 10-15%                  |                 5 |              0.08788 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.441  | 15-20%                  |                 5 |              0.0882  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4471 | 15-20%                  |                 5 |              0.08942 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4626 | >20%                    |                 2 |              0.2313  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4659 | 15-20%                  |                 5 |              0.09318 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4684 | >20%                    |                 5 |              0.09368 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4699 | >20%                    |                 2 |              0.23495 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.47   | 15-20%                  |                 5 |              0.094   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4701 | >20%                    |                10 |              0.04701 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4814 | >20%                    |                 5 |              0.09628 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4821 | >20%                    |                 2 |              0.24105 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4851 | >20%                    |                 5 |              0.09702 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4871 | 10-15%                  |                 5 |              0.09742 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4886 | >20%                    |                 5 |              0.09772 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4899 | >20%                    |                 5 |              0.09798 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.494  | >20%                    |                 2 |              0.247   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4946 | 10-15%                  |                 5 |              0.09892 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4967 | >20%                    |                10 |              0.04967 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5049 | 10-15%                  |                 2 |              0.25245 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5088 | >20%                    |                 2 |              0.2544  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5114 | 15-20%                  |                 2 |              0.2557  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5123 | >20%                    |                 2 |              0.25615 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.514  | <5%                     |                 5 |              0.1028  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5201 | 10-15%                  |                 5 |              0.10402 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5218 | >20%                    |                 2 |              0.2609  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5294 | >20%                    |                 5 |              0.10588 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5326 | >20%                    |                 5 |              0.10652 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5339 | 15-20%                  |                 2 |              0.26695 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5375 | >20%                    |                 5 |              0.1075  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5419 | >20%                    |                 2 |              0.27095 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5679 | >20%                    |                 5 |              0.11358 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5682 | 5-10%                   |                 5 |              0.11364 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5717 | >20%                    |                10 |              0.05717 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5722 | 5-10%                   |                 5 |              0.11444 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.573  | >20%                    |                 2 |              0.2865  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5737 | >20%                    |                 5 |              0.11474 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5846 | >20%                    |                 5 |              0.11692 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5932 | >20%                    |                 5 |              0.11864 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6006 | 10-15%                  |                 2 |              0.3003  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6044 | >20%                    |                 2 |              0.3022  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.609  | 10-15%                  |                 5 |              0.1218  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6119 | <5%                     |                 2 |              0.30595 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6315 | 5-10%                   |                10 |              0.06315 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6322 | 10-15%                  |                10 |              0.06322 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6375 | 10-15%                  |                 5 |              0.1275  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6389 | 10-15%                  |                 5 |              0.12778 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6399 | 5-10%                   |                 5 |              0.12798 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6439 | 10-15%                  |                10 |              0.06439 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6536 | >20%                    |                 2 |              0.3268  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6567 | >20%                    |                10 |              0.06567 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6633 | >20%                    |                 5 |              0.13266 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6703 | >20%                    |                 5 |              0.13406 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6732 | >20%                    |                 5 |              0.13464 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6867 | >20%                    |                 2 |              0.34335 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6961 | >20%                    |                 2 |              0.34805 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6964 | >20%                    |                10 |              0.06964 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7027 | <5%                     |                10 |              0.07027 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7209 | <5%                     |                 5 |              0.14418 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.731  | <5%                     |                 5 |              0.1462  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.738  | >20%                    |                 5 |              0.1476  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.746  | 10-15%                  |                10 |              0.0746  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7483 | <5%                     |                10 |              0.07483 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7508 | >20%                    |                10 |              0.07508 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7532 | >20%                    |                 5 |              0.15064 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7579 | 15-20%                  |                10 |              0.07579 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7756 | 10-15%                  |                10 |              0.07756 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7869 | 10-15%                  |                10 |              0.07869 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8018 | >20%                    |                 5 |              0.16036 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8068 | 10-15%                  |                 5 |              0.16136 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8068 | >20%                    |                10 |              0.08068 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8079 | <5%                     |                 5 |              0.16158 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8101 | 15-20%                  |                10 |              0.08101 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8171 | >20%                    |                10 |              0.08171 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8173 | >20%                    |                10 |              0.08173 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8265 | <5%                     |                10 |              0.08265 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8355 | 15-20%                  |                10 |              0.08355 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8361 | >20%                    |                10 |              0.08361 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8438 | >20%                    |                10 |              0.08438 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8527 | >20%                    |                10 |              0.08527 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8577 | 10-15%                  |                 2 |              0.42885 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.863  | >20%                    |                 2 |              0.4315  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.886  | >20%                    |                 2 |              0.443   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8959 | 15-20%                  |                 5 |              0.17918 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9111 | >20%                    |                10 |              0.09111 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9126 | >20%                    |                10 |              0.09126 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9323 | >20%                    |                10 |              0.09323 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.937  | >20%                    |                10 |              0.0937  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9447 | <5%                     |                10 |              0.09447 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9752 | >20%                    |                10 |              0.09752 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.976  | >20%                    |                10 |              0.0976  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9918 | 15-20%                  |                 5 |              0.19836 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0152 | >20%                    |                10 |              0.10152 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0335 | >20%                    |                 2 |              0.51675 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0364 | 15-20%                  |                10 |              0.10364 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0438 | 10-15%                  |                 5 |              0.20876 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.05   | >20%                    |                10 |              0.105   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.052  | 10-15%                  |                10 |              0.1052  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0688 | >20%                    |                 5 |              0.21376 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0941 | 5-10%                   |                10 |              0.10941 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1066 | <5%                     |                10 |              0.11066 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.131  | >20%                    |                 5 |              0.2262  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1527 | <5%                     |                 2 |              0.57635 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2032 | 15-20%                  |                10 |              0.12032 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.219  | 15-20%                  |                10 |              0.1219  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2461 | >20%                    |                 2 |              0.62305 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2662 | >20%                    |                10 |              0.12662 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2838 | >20%                    |                 5 |              0.25676 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3118 | 10-15%                  |                10 |              0.13118 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3314 | 15-20%                  |                10 |              0.13314 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3515 | <5%                     |                 5 |              0.2703  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.379  | 10-15%                  |                10 |              0.1379  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3839 | >20%                    |                10 |              0.13839 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4402 | >20%                    |                10 |              0.14402 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6971 | >20%                    |                10 |              0.16971 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0421 | <5%                     |                10 |              0.20421 |