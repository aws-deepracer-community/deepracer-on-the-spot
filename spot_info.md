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

Data correct as of 2025-07-26 02:00:26.297251, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1505 | >20%                    |                 2 |              0.07525 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1515 | 5-10%                   |                 2 |              0.07575 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1672 | 5-10%                   |                 2 |              0.0836  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2101 | >20%                    |                 2 |              0.10505 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2175 | <5%                     |                 5 |              0.0435  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2177 | >20%                    |                 2 |              0.10885 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2191 | >20%                    |                 2 |              0.10955 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2317 | 15-20%                  |                 2 |              0.11585 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2469 | >20%                    |                 2 |              0.12345 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2497 | 15-20%                  |                 2 |              0.12485 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2502 | <5%                     |                 5 |              0.05004 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2522 | 5-10%                   |                 5 |              0.05044 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.254  | >20%                    |                 2 |              0.127   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2609 | 5-10%                   |                 2 |              0.13045 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2661 | >20%                    |                 2 |              0.13305 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2752 | >20%                    |                 2 |              0.1376  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2797 | >20%                    |                 5 |              0.05594 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3053 | <5%                     |                 2 |              0.15265 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3054 | >20%                    |                 5 |              0.06108 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3182 | 15-20%                  |                 5 |              0.06364 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3204 | 5-10%                   |                 2 |              0.1602  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3264 | >20%                    |                 5 |              0.06528 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3265 | >20%                    |                 5 |              0.0653  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3293 | 15-20%                  |                 2 |              0.16465 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3311 | >20%                    |                 2 |              0.16555 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3402 | 5-10%                   |                 2 |              0.1701  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3418 | >20%                    |                 5 |              0.06836 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3433 | <5%                     |                 2 |              0.17165 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3447 | 15-20%                  |                 2 |              0.17235 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3461 | 15-20%                  |                 2 |              0.17305 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3598 | <5%                     |                10 |              0.03598 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3691 | >20%                    |                 2 |              0.18455 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3699 | >20%                    |                10 |              0.03699 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3701 | >20%                    |                 2 |              0.18505 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3705 | >20%                    |                 5 |              0.0741  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.375  | >20%                    |                 2 |              0.1875  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3762 | 15-20%                  |                10 |              0.03762 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3771 | >20%                    |                 5 |              0.07542 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3896 | >20%                    |                 2 |              0.1948  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4049 | <5%                     |                10 |              0.04049 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4068 | >20%                    |                 5 |              0.08136 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4137 | <5%                     |                 2 |              0.20685 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4138 | 10-15%                  |                 2 |              0.2069  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4184 | 15-20%                  |                10 |              0.04184 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4245 | >20%                    |                 2 |              0.21225 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4322 | >20%                    |                 2 |              0.2161  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.438  | >20%                    |                10 |              0.0438  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4387 | >20%                    |                 2 |              0.21935 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4486 | >20%                    |                 5 |              0.08972 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4502 | <5%                     |                 2 |              0.2251  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4508 | >20%                    |                 2 |              0.2254  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4519 | 5-10%                   |                 2 |              0.22595 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4552 | 15-20%                  |                 5 |              0.09104 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4553 | >20%                    |                 2 |              0.22765 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4612 | >20%                    |                 5 |              0.09224 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4682 | >20%                    |                 5 |              0.09364 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4717 | >20%                    |                 2 |              0.23585 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.473  | 15-20%                  |                10 |              0.0473  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4747 | 10-15%                  |                 2 |              0.23735 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4821 | 5-10%                   |                 2 |              0.24105 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.4841 | 15-20%                  |                10 |              0.04841 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4866 | >20%                    |                 2 |              0.2433  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4922 | >20%                    |                 5 |              0.09844 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4996 | 5-10%                   |                 5 |              0.09992 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5006 | >20%                    |                 2 |              0.2503  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5017 | 10-15%                  |                 5 |              0.10034 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5046 | >20%                    |                 2 |              0.2523  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5098 | <5%                     |                 2 |              0.2549  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5139 | 10-15%                  |                 2 |              0.25695 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5148 | >20%                    |                 2 |              0.2574  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5204 | >20%                    |                 5 |              0.10408 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5361 | >20%                    |                 5 |              0.10722 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5422 | 15-20%                  |                 2 |              0.2711  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5485 | >20%                    |                 5 |              0.1097  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.551  | 10-15%                  |                 5 |              0.1102  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5587 | 10-15%                  |                 5 |              0.11174 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5647 | >20%                    |                 5 |              0.11294 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.57   | >20%                    |                 2 |              0.285   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5757 | >20%                    |                 5 |              0.11514 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5761 | >20%                    |                 2 |              0.28805 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5765 | >20%                    |                 5 |              0.1153  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5819 | 5-10%                   |                 5 |              0.11638 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5869 | >20%                    |                 5 |              0.11738 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5879 | >20%                    |                 2 |              0.29395 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5896 | >20%                    |                 5 |              0.11792 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5967 | 5-10%                   |                 2 |              0.29835 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6022 | >20%                    |                 2 |              0.3011  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6075 | 5-10%                   |                 5 |              0.1215  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6109 | <5%                     |                 5 |              0.12218 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6141 | >20%                    |                 5 |              0.12282 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6233 | >20%                    |                 2 |              0.31165 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6268 | >20%                    |                 5 |              0.12536 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6283 | >20%                    |                10 |              0.06283 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6305 | >20%                    |                10 |              0.06305 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6352 | >20%                    |                 2 |              0.3176  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6363 | >20%                    |                 5 |              0.12726 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6403 | 10-15%                  |                 5 |              0.12806 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6412 | <5%                     |                10 |              0.06412 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6656 | >20%                    |                 5 |              0.13312 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6757 | <5%                     |                 5 |              0.13514 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6773 | >20%                    |                10 |              0.06773 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.679  | >20%                    |                 2 |              0.3395  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6913 | 15-20%                  |                 2 |              0.34565 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6967 | 15-20%                  |                 2 |              0.34835 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7028 | 5-10%                   |                 5 |              0.14056 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7067 | >20%                    |                 5 |              0.14134 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7162 | >20%                    |                 5 |              0.14324 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7219 | <5%                     |                 5 |              0.14438 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7379 | >20%                    |                10 |              0.07379 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7395 | >20%                    |                10 |              0.07395 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7444 | 15-20%                  |                10 |              0.07444 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7463 | >20%                    |                 5 |              0.14926 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7527 | 15-20%                  |                10 |              0.07527 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7552 | 15-20%                  |                 5 |              0.15104 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7588 | >20%                    |                 5 |              0.15176 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7758 | <5%                     |                10 |              0.07758 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8019 | >20%                    |                 5 |              0.16038 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8066 | >20%                    |                 5 |              0.16132 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8102 | <5%                     |                10 |              0.08102 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8228 | >20%                    |                 2 |              0.4114  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8246 | 5-10%                   |                10 |              0.08246 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8278 | >20%                    |                 5 |              0.16556 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8282 | >20%                    |                10 |              0.08282 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8699 | >20%                    |                10 |              0.08699 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8723 | 5-10%                   |                10 |              0.08723 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8784 | 15-20%                  |                10 |              0.08784 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8813 | >20%                    |                10 |              0.08813 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8813 | 5-10%                   |                 5 |              0.17626 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8848 | 5-10%                   |                10 |              0.08848 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8868 | <5%                     |                10 |              0.08868 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8994 | >20%                    |                 5 |              0.17988 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9198 | >20%                    |                10 |              0.09198 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9269 | 5-10%                   |                10 |              0.09269 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9424 | >20%                    |                10 |              0.09424 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9466 | 5-10%                   |                10 |              0.09466 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9491 | 15-20%                  |                10 |              0.09491 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9548 | 15-20%                  |                 5 |              0.19096 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9632 | 5-10%                   |                10 |              0.09632 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9681 | 15-20%                  |                10 |              0.09681 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9819 | >20%                    |                10 |              0.09819 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9858 | <5%                     |                10 |              0.09858 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9936 | 15-20%                  |                10 |              0.09936 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9965 | 15-20%                  |                10 |              0.09965 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9987 | 15-20%                  |                10 |              0.09987 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0033 | 5-10%                   |                10 |              0.10033 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0273 | >20%                    |                 2 |              0.51365 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0372 | <5%                     |                10 |              0.10372 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0684 | 5-10%                   |                10 |              0.10684 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.094  | >20%                    |                10 |              0.1094  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0954 | >20%                    |                10 |              0.10954 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1011 | >20%                    |                10 |              0.11011 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1091 | >20%                    |                10 |              0.11091 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1197 | 15-20%                  |                10 |              0.11197 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1334 | >20%                    |                10 |              0.11334 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1375 | >20%                    |                 5 |              0.2275  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.1461 | >20%                    |                 5 |              0.22922 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1583 | >20%                    |                10 |              0.11583 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1683 | >20%                    |                 2 |              0.58415 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1865 | >20%                    |                10 |              0.11865 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1921 | >20%                    |                 5 |              0.23842 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1955 | <5%                     |                 2 |              0.59775 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2517 | <5%                     |                10 |              0.12517 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2871 | >20%                    |                10 |              0.12871 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3157 | >20%                    |                 5 |              0.26314 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3363 | 15-20%                  |                 5 |              0.26726 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.372  | >20%                    |                10 |              0.1372  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4286 | >20%                    |                 2 |              0.7143  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4559 | 5-10%                   |                10 |              0.14559 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.5181 | >20%                    |                 5 |              0.30362 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5353 | <5%                     |                 5 |              0.30706 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6285 | >20%                    |                10 |              0.16285 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.6828 | 5-10%                   |                 2 |              0.8414  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9555 | 10-15%                  |                10 |              0.19555 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9755 | 5-10%                   |                10 |              0.19755 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0622 | <5%                     |                10 |              0.20622 |