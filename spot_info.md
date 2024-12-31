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

Data correct as of 2024-12-31 01:37:02.637222, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1619 |                         |                 2 |              0.08095 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1827 | 15-20%                  |                 2 |              0.09135 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.202  |                         |                 2 |              0.101   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2023 | <5%                     |                 5 |              0.04046 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2132 | <5%                     |                 2 |              0.1066  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2158 | >20%                    |                 2 |              0.1079  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2327 | >20%                    |                 2 |              0.11635 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2338 | 5-10%                   |                 2 |              0.1169  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2357 | 15-20%                  |                 2 |              0.11785 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2393 | 15-20%                  |                 2 |              0.11965 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2412 |                         |                 5 |              0.04824 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2435 |                         |                 5 |              0.0487  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2449 | 15-20%                  |                 2 |              0.12245 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2516 | 5-10%                   |                 2 |              0.1258  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | >20%                    |                 2 |              0.14445 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2919 | <5%                     |                 2 |              0.14595 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.292  | 5-10%                   |                 2 |              0.146   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2995 | <5%                     |                 2 |              0.14975 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3055 | 5-10%                   |                 2 |              0.15275 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3133 | 15-20%                  |                 5 |              0.06266 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3205 | 5-10%                   |                 2 |              0.16025 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3254 | <5%                     |                 2 |              0.1627  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3337 | >20%                    |                10 |              0.03337 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.339  | <5%                     |                 5 |              0.0678  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3396 | <5%                     |                 2 |              0.1698  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3581 | 10-15%                  |                 2 |              0.17905 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3613 | 10-15%                  |                 2 |              0.18065 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3614 | >20%                    |                 2 |              0.1807  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3686 | >20%                    |                 2 |              0.1843  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3702 | 10-15%                  |                 2 |              0.1851  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3741 | >20%                    |                 2 |              0.18705 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3826 | <5%                     |                 5 |              0.07652 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.383  |                         |                10 |              0.0383  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3835 | 5-10%                   |                10 |              0.03835 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3848 | >20%                    |                 5 |              0.07696 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3866 | >20%                    |                 2 |              0.1933  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3903 | 5-10%                   |                 2 |              0.19515 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3943 |                         |                10 |              0.03943 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3971 | 10-15%                  |                 2 |              0.19855 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4047 | >20%                    |                 2 |              0.20235 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4054 | <5%                     |                 2 |              0.2027  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4092 | 15-20%                  |                10 |              0.04092 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4153 | 5-10%                   |                 2 |              0.20765 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4227 | 10-15%                  |                 2 |              0.21135 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4294 | 5-10%                   |                 2 |              0.2147  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4301 | >20%                    |                 5 |              0.08602 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4321 | 5-10%                   |                 2 |              0.21605 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4348 | <5%                     |                 5 |              0.08696 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4376 | 10-15%                  |                10 |              0.04376 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4407 | 5-10%                   |                 5 |              0.08814 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4505 | <5%                     |                 5 |              0.0901  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.452  | 5-10%                   |                 5 |              0.0904  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4573 | <5%                     |                 5 |              0.09146 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.458  | >20%                    |                 5 |              0.0916  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4607 | >20%                    |                 5 |              0.09214 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4628 | 5-10%                   |                 2 |              0.2314  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4635 | >20%                    |                 5 |              0.0927  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.468  | 10-15%                  |                 5 |              0.0936  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4715 | 15-20%                  |                 5 |              0.0943  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4717 | 5-10%                   |                 5 |              0.09434 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4744 | 15-20%                  |                 2 |              0.2372  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4768 | 10-15%                  |                 5 |              0.09536 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4802 | <5%                     |                 5 |              0.09604 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4868 | >20%                    |                 5 |              0.09736 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4889 | 10-15%                  |                 2 |              0.24445 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4919 | 15-20%                  |                 2 |              0.24595 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4947 | 5-10%                   |                 5 |              0.09894 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4968 | <5%                     |                 2 |              0.2484  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4993 | <5%                     |                 5 |              0.09986 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5017 | 5-10%                   |                 5 |              0.10034 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5119 | <5%                     |                 5 |              0.10238 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5179 | >20%                    |                 5 |              0.10358 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5204 | 10-15%                  |                 2 |              0.2602  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5277 | <5%                     |                 5 |              0.10554 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5373 | >20%                    |                 5 |              0.10746 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5419 | 5-10%                   |                 5 |              0.10838 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5444 | >20%                    |                 5 |              0.10888 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5539 | 10-15%                  |                 5 |              0.11078 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.559  | >20%                    |                 2 |              0.2795  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5727 | 15-20%                  |                 5 |              0.11454 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5754 | 5-10%                   |                10 |              0.05754 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5841 | >20%                    |                 2 |              0.29205 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5843 | >20%                    |                 5 |              0.11686 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5918 | 10-15%                  |                10 |              0.05918 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5941 | <5%                     |                 2 |              0.29705 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5961 | >20%                    |                 5 |              0.11922 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6279 | >20%                    |                10 |              0.06279 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6357 | <5%                     |                 5 |              0.12714 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6391 | 5-10%                   |                10 |              0.06391 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6729 | <5%                     |                 5 |              0.13458 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6783 | 15-20%                  |                 2 |              0.33915 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6968 | >20%                    |                10 |              0.06968 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7024 | >20%                    |                10 |              0.07024 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7036 | 10-15%                  |                10 |              0.07036 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7037 | >20%                    |                 2 |              0.35185 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7079 | 15-20%                  |                 5 |              0.14158 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7138 | >20%                    |                10 |              0.07138 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7165 | 5-10%                   |                 5 |              0.1433  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7186 | 15-20%                  |                 5 |              0.14372 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7196 | <5%                     |                 2 |              0.3598  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7228 | 5-10%                   |                10 |              0.07228 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.73   | >20%                    |                10 |              0.073   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7432 | <5%                     |                 5 |              0.14864 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7591 | 5-10%                   |                10 |              0.07591 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7687 | 10-15%                  |                10 |              0.07687 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7785 | >20%                    |                 5 |              0.1557  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7858 | >20%                    |                 5 |              0.15716 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.793  | <5%                     |                10 |              0.0793  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7936 | <5%                     |                10 |              0.07936 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7951 | 15-20%                  |                10 |              0.07951 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7959 | >20%                    |                 5 |              0.15918 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8139 | 15-20%                  |                10 |              0.08139 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8144 | 5-10%                   |                10 |              0.08144 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8145 | 10-15%                  |                10 |              0.08145 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.842  | 10-15%                  |                10 |              0.0842  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8466 | 5-10%                   |                10 |              0.08466 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8576 | 5-10%                   |                10 |              0.08576 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8621 | 10-15%                  |                10 |              0.08621 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.8637 | <5%                     |                 2 |              0.43185 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8652 | >20%                    |                10 |              0.08652 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8825 | <5%                     |                10 |              0.08825 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.8834 | >20%                    |                10 |              0.08834 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.89   | <5%                     |                10 |              0.089   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8931 | 5-10%                   |                10 |              0.08931 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9029 | 5-10%                   |                 5 |              0.18058 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9258 | 15-20%                  |                10 |              0.09258 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9401 | >20%                    |                10 |              0.09401 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9583 | 5-10%                   |                 5 |              0.19166 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9869 | <5%                     |                 5 |              0.19738 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0156 | 15-20%                  |                10 |              0.10156 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0161 | 5-10%                   |                10 |              0.10161 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0448 | 10-15%                  |                 2 |              0.5224  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0449 | <5%                     |                10 |              0.10449 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0754 | <5%                     |                10 |              0.10754 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1321 | >20%                    |                10 |              0.11321 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1542 | >20%                    |                10 |              0.11542 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1729 | <5%                     |                10 |              0.11729 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.262  | 5-10%                   |                10 |              0.1262  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3593 | >20%                    |                10 |              0.13593 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3929 | <5%                     |                10 |              0.13929 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4489 | 5-10%                   |                10 |              0.14489 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5717 | 5-10%                   |                 5 |              0.31434 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0965 | 10-15%                  |                10 |              0.20965 |