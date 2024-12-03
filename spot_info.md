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

Data correct as of 2024-12-03 01:46:12.954545, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1526 | >20%                    |                 5 |              0.03052 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2066 | 10-15%                  |                 2 |              0.1033  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2185 | 5-10%                   |                 2 |              0.10925 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2266 | 5-10%                   |                 2 |              0.1133  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2283 | 15-20%                  |                 2 |              0.11415 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2308 | >20%                    |                 5 |              0.04616 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.236  | <5%                     |                 2 |              0.118   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2419 | 15-20%                  |                 5 |              0.04838 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.242  | <5%                     |                 2 |              0.121   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2561 | >20%                    |                 5 |              0.05122 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2602 | 5-10%                   |                 2 |              0.1301  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2762 | 10-15%                  |                 2 |              0.1381  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2779 | 5-10%                   |                 2 |              0.13895 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2785 | <5%                     |                10 |              0.02785 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2842 | <5%                     |                 2 |              0.1421  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.29   | 10-15%                  |                 2 |              0.145   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3085 | >20%                    |                 2 |              0.15425 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3196 | 5-10%                   |                 2 |              0.1598  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3213 | <5%                     |                 2 |              0.16065 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3332 | >20%                    |                 2 |              0.1666  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3338 | <5%                     |                 2 |              0.1669  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.335  | <5%                     |                 5 |              0.067   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3357 | 5-10%                   |                 2 |              0.16785 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.337  | >20%                    |                 2 |              0.1685  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3441 | <5%                     |                 5 |              0.06882 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3518 | >20%                    |                 5 |              0.07036 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3545 | <5%                     |                 5 |              0.0709  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3579 | 15-20%                  |                 2 |              0.17895 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3616 | <5%                     |                 2 |              0.1808  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3661 | <5%                     |                 2 |              0.18305 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.367  | >20%                    |                10 |              0.0367  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.37   | >20%                    |                 2 |              0.185   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3733 | >20%                    |                 2 |              0.18665 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.376  | 15-20%                  |                 5 |              0.0752  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3776 | <5%                     |                10 |              0.03776 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3805 | 15-20%                  |                 2 |              0.19025 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4019 | 5-10%                   |                 2 |              0.20095 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4055 | <5%                     |                 2 |              0.20275 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4139 | 5-10%                   |                 2 |              0.20695 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.419  | 5-10%                   |                 2 |              0.2095  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4329 | 5-10%                   |                 5 |              0.08658 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.441  | 15-20%                  |                 5 |              0.0882  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4435 | <5%                     |                 2 |              0.22175 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4467 | >20%                    |                 2 |              0.22335 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4488 | 10-15%                  |                 2 |              0.2244  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4632 | 10-15%                  |                 5 |              0.09264 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4655 | 15-20%                  |                 5 |              0.0931  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4737 | >20%                    |                 2 |              0.23685 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4801 | <5%                     |                 5 |              0.09602 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.484  | <5%                     |                 2 |              0.242   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4857 | >20%                    |                10 |              0.04857 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4874 | <5%                     |                 5 |              0.09748 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4968 | 5-10%                   |                 5 |              0.09936 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4979 | 5-10%                   |                 2 |              0.24895 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5    | 5-10%                   |                 2 |              0.25    |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5044 | 15-20%                  |                 5 |              0.10088 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5052 | 10-15%                  |                 2 |              0.2526  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.5061 |                         |                 2 |              0.25305 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5158 | 10-15%                  |                 2 |              0.2579  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5159 | >20%                    |                 5 |              0.10318 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5212 | 5-10%                   |                 5 |              0.10424 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.531  | >20%                    |                 5 |              0.1062  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5366 | <5%                     |                 5 |              0.10732 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5389 | 10-15%                  |                10 |              0.05389 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.539  | <5%                     |                 5 |              0.1078  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5406 | >20%                    |                 2 |              0.2703  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5414 | 10-15%                  |                 5 |              0.10828 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5429 | >20%                    |                 5 |              0.10858 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5433 | 10-15%                  |                 5 |              0.10866 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5511 | 15-20%                  |                 2 |              0.27555 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5569 | <5%                     |                 5 |              0.11138 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.5581 | 5-10%                   |                10 |              0.05581 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.563  | 5-10%                   |                 5 |              0.1126  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5662 | 10-15%                  |                 5 |              0.11324 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5685 | >20%                    |                 5 |              0.1137  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5919 | >20%                    |                 5 |              0.11838 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6159 | 10-15%                  |                10 |              0.06159 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6278 | >20%                    |                10 |              0.06278 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.628  | <5%                     |                 5 |              0.1256  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.631  | 5-10%                   |                10 |              0.0631  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6314 | 5-10%                   |                10 |              0.06314 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.6365 |                         |                 5 |              0.1273  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6371 | >20%                    |                10 |              0.06371 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6579 | <5%                     |                 5 |              0.13158 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6608 | 5-10%                   |                 5 |              0.13216 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6647 | 15-20%                  |                10 |              0.06647 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6721 | >20%                    |                 2 |              0.33605 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6739 | >20%                    |                10 |              0.06739 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6754 | >20%                    |                10 |              0.06754 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6829 | 10-15%                  |                10 |              0.06829 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6868 | 5-10%                   |                 2 |              0.3434  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7021 | 5-10%                   |                 5 |              0.14042 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7044 | <5%                     |                 5 |              0.14088 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7208 | 15-20%                  |                 5 |              0.14416 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7218 | 15-20%                  |                 5 |              0.14436 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7473 | <5%                     |                 2 |              0.37365 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7485 | 5-10%                   |                10 |              0.07485 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7692 | >20%                    |                10 |              0.07692 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7722 | <5%                     |                 5 |              0.15444 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7801 | 5-10%                   |                 5 |              0.15602 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7856 | <5%                     |                10 |              0.07856 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8016 | 5-10%                   |                10 |              0.08016 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8316 | 10-15%                  |                10 |              0.08316 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8335 | 5-10%                   |                10 |              0.08335 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8359 | >20%                    |                 5 |              0.16718 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8405 | 5-10%                   |                10 |              0.08405 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8535 | 10-15%                  |                10 |              0.08535 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8656 | 5-10%                   |                10 |              0.08656 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8838 | >20%                    |                10 |              0.08838 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9179 | 15-20%                  |                10 |              0.09179 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.931  | <5%                     |                 5 |              0.1862  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9362 | <5%                     |                10 |              0.09362 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9435 | 5-10%                   |                10 |              0.09435 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9588 | 5-10%                   |                10 |              0.09588 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9686 | 5-10%                   |                10 |              0.09686 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9959 | <5%                     |                10 |              0.09959 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0055 | >20%                    |                10 |              0.10055 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0222 | 15-20%                  |                10 |              0.10222 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0263 | >20%                    |                10 |              0.10263 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.0383 |                         |                10 |              0.10383 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0438 | 5-10%                   |                10 |              0.10438 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0455 | <5%                     |                10 |              0.10455 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0916 | <5%                     |                10 |              0.10916 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1662 | 10-15%                  |                10 |              0.11662 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1747 | 15-20%                  |                10 |              0.11747 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3651 | >20%                    |                10 |              0.13651 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4696 | >20%                    |                10 |              0.14696 |