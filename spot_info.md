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

Data correct as of 2024-12-15 01:52:45.007419, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1898 | 15-20%                  |                 2 |              0.0949  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.21   | >20%                    |                 2 |              0.105   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2142 | 15-20%                  |                 2 |              0.1071  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2265 | 15-20%                  |                 2 |              0.11325 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2299 | 5-10%                   |                 5 |              0.04598 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2331 | 10-15%                  |                 2 |              0.11655 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2337 | 15-20%                  |                 5 |              0.04674 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2371 | 5-10%                   |                 2 |              0.11855 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2432 | 15-20%                  |                10 |              0.02432 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2458 | <5%                     |                 2 |              0.1229  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2466 | >20%                    |                 2 |              0.1233  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2527 | <5%                     |                 2 |              0.12635 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2775 | 15-20%                  |                 5 |              0.0555  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2796 | <5%                     |                 2 |              0.1398  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2808 | 5-10%                   |                 2 |              0.1404  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2903 | <5%                     |                 2 |              0.14515 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2998 | >20%                    |                 2 |              0.1499  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3041 | <5%                     |                 2 |              0.15205 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3103 | <5%                     |                 2 |              0.15515 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.3117 | <5%                     |                 2 |              0.15585 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3142 | 5-10%                   |                 2 |              0.1571  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3217 | 10-15%                  |                 2 |              0.16085 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3311 | >20%                    |                 5 |              0.06622 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.334  | <5%                     |                 5 |              0.0668  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3345 | <5%                     |                10 |              0.03345 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3393 | <5%                     |                 2 |              0.16965 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3439 | >20%                    |                 2 |              0.17195 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3511 | 10-15%                  |                 2 |              0.17555 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3519 | <5%                     |                 5 |              0.07038 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.354  | 10-15%                  |                 2 |              0.177   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3588 | <5%                     |                 5 |              0.07176 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3602 | >20%                    |                 5 |              0.07204 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3605 | >20%                    |                 2 |              0.18025 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3621 | <5%                     |                 5 |              0.07242 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3672 | >20%                    |                10 |              0.03672 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3712 | 15-20%                  |                 2 |              0.1856  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3723 | >20%                    |                 5 |              0.07446 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3779 | 5-10%                   |                 2 |              0.18895 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3831 | >20%                    |                 2 |              0.19155 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.384  | <5%                     |                 5 |              0.0768  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3935 | 5-10%                   |                 2 |              0.19675 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3976 | 10-15%                  |                 5 |              0.07952 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4046 | 10-15%                  |                10 |              0.04046 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4098 | >20%                    |                 2 |              0.2049  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.412  | 5-10%                   |                 2 |              0.206   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4203 | 5-10%                   |                 5 |              0.08406 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4211 | 5-10%                   |                 2 |              0.21055 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4237 | 15-20%                  |                 2 |              0.21185 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.4356 | 10-15%                  |                 2 |              0.2178  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4366 | 5-10%                   |                 5 |              0.08732 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4376 | 5-10%                   |                 5 |              0.08752 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4394 | 5-10%                   |                 2 |              0.2197  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4492 | <5%                     |                 2 |              0.2246  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4533 | 5-10%                   |                 5 |              0.09066 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4594 | >20%                    |                 5 |              0.09188 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4595 | >20%                    |                 5 |              0.0919  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4633 | 5-10%                   |                 2 |              0.23165 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4692 | <5%                     |                 5 |              0.09384 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4696 | >20%                    |                 2 |              0.2348  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4719 | <5%                     |                 5 |              0.09438 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4729 | 10-15%                  |                 2 |              0.23645 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4779 | 10-15%                  |                 2 |              0.23895 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4784 | 15-20%                  |                10 |              0.04784 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4806 | 10-15%                  |                 2 |              0.2403  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4808 | >20%                    |                10 |              0.04808 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4826 | 15-20%                  |                 5 |              0.09652 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4847 | 5-10%                   |                 5 |              0.09694 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4872 | >20%                    |                 5 |              0.09744 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4884 | >20%                    |                10 |              0.04884 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4937 | >20%                    |                 2 |              0.24685 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4945 | 15-20%                  |                 5 |              0.0989  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.495  | 5-10%                   |                 5 |              0.099   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5013 | >20%                    |                 5 |              0.10026 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5029 | <5%                     |                 5 |              0.10058 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5123 | <5%                     |                 5 |              0.10246 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5145 | 10-15%                  |                 2 |              0.25725 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5163 | >20%                    |                 5 |              0.10326 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5279 | 10-15%                  |                 5 |              0.10558 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5304 | 5-10%                   |                10 |              0.05304 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5472 | >20%                    |                 5 |              0.10944 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5494 | >20%                    |                 5 |              0.10988 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5524 | 15-20%                  |                 5 |              0.11048 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5536 | 10-15%                  |                 5 |              0.11072 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.5588 | 5-10%                   |                 5 |              0.11176 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.559  | >20%                    |                 2 |              0.2795  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5648 | 10-15%                  |                10 |              0.05648 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.576  | >20%                    |                10 |              0.0576  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5947 | <5%                     |                10 |              0.05947 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5954 | <5%                     |                 5 |              0.11908 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.629  | 5-10%                   |                 2 |              0.3145  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.647  | >20%                    |                10 |              0.0647  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6498 | 5-10%                   |                10 |              0.06498 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6586 | <5%                     |                 5 |              0.13172 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6661 | 5-10%                   |                10 |              0.06661 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6682 | >20%                    |                 2 |              0.3341  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6724 | 15-20%                  |                 5 |              0.13448 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6739 | <5%                     |                 5 |              0.13478 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6854 | 10-15%                  |                 5 |              0.13708 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6858 | 10-15%                  |                10 |              0.06858 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6974 | 5-10%                   |                10 |              0.06974 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7025 | >20%                    |                10 |              0.07025 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7282 | <5%                     |                 2 |              0.3641  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7358 | >20%                    |                 5 |              0.14716 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7414 | >20%                    |                 5 |              0.14828 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7483 | >20%                    |                 5 |              0.14966 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7628 | <5%                     |                10 |              0.07628 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7785 | >20%                    |                10 |              0.07785 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7945 | <5%                     |                 5 |              0.1589  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8007 | >20%                    |                10 |              0.08007 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8043 | <5%                     |                10 |              0.08043 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8076 | 15-20%                  |                10 |              0.08076 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8198 | 5-10%                   |                10 |              0.08198 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8263 | 5-10%                   |                10 |              0.08263 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8319 | 5-10%                   |                10 |              0.08319 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8327 | 10-15%                  |                10 |              0.08327 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.833  | 10-15%                  |                10 |              0.0833  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.8412 | <5%                     |                10 |              0.08412 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8507 | 5-10%                   |                 2 |              0.42535 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.8577 | >20%                    |                10 |              0.08577 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8607 | 10-15%                  |                10 |              0.08607 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8622 | 5-10%                   |                10 |              0.08622 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8795 | <5%                     |                10 |              0.08795 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9284 | 15-20%                  |                10 |              0.09284 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9304 | <5%                     |                 5 |              0.18608 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9309 | 5-10%                   |                10 |              0.09309 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9391 | >20%                    |                10 |              0.09391 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9457 | 10-15%                  |                10 |              0.09457 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.968  | 5-10%                   |                10 |              0.0968  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9786 | 5-10%                   |                10 |              0.09786 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.072  | 5-10%                   |                10 |              0.1072  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0809 | >20%                    |                10 |              0.10809 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0886 | <5%                     |                10 |              0.10886 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1704 | >20%                    |                10 |              0.11704 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.1882 | <5%                     |                 5 |              0.23764 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2263 | >20%                    |                10 |              0.12263 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4022 | 5-10%                   |                10 |              0.14022 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8175 | 5-10%                   |                10 |              0.18175 |