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

Data correct as of 2025-03-24 01:47:50.396041, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1156 | 10-15%                  |                 2 |              0.0578  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.129  | 5-10%                   |                 5 |              0.0258  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1714 | 10-15%                  |                 2 |              0.0857  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2079 | 5-10%                   |                 2 |              0.10395 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2183 | >20%                    |                 2 |              0.10915 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2263 | >20%                    |                 2 |              0.11315 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2317 | 15-20%                  |                 2 |              0.11585 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 5-10%                   |                10 |              0.02395 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.242  | 15-20%                  |                 2 |              0.121   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2424 | >20%                    |                 2 |              0.1212  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2436 | >20%                    |                 2 |              0.1218  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2574 | 5-10%                   |                 2 |              0.1287  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2693 | 5-10%                   |                 2 |              0.13465 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2731 | 5-10%                   |                 2 |              0.13655 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2789 | <5%                     |                 2 |              0.13945 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2793 | 10-15%                  |                10 |              0.02793 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.282  | <5%                     |                 2 |              0.141   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2861 | <5%                     |                 2 |              0.14305 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2925 | 10-15%                  |                 2 |              0.14625 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.296  | >20%                    |                 5 |              0.0592  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2974 | 5-10%                   |                 2 |              0.1487  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3034 | >20%                    |                 2 |              0.1517  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3038 | >20%                    |                 2 |              0.1519  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3049 | >20%                    |                 2 |              0.15245 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3199 | 5-10%                   |                 2 |              0.15995 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3226 | 10-15%                  |                10 |              0.03226 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3304 | 15-20%                  |                 5 |              0.06608 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3517 | >20%                    |                 2 |              0.17585 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3522 | >20%                    |                 2 |              0.1761  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.356  | >20%                    |                 2 |              0.178   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3581 | >20%                    |                 2 |              0.17905 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3602 | >20%                    |                 2 |              0.1801  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3615 | 5-10%                   |                10 |              0.03615 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3635 | >20%                    |                 5 |              0.0727  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3664 | 10-15%                  |                 5 |              0.07328 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3714 | >20%                    |                 5 |              0.07428 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.372  | 10-15%                  |                 2 |              0.186   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3726 | <5%                     |                 2 |              0.1863  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3726 | 5-10%                   |                10 |              0.03726 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3801 | 10-15%                  |                 5 |              0.07602 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3837 | 5-10%                   |                 2 |              0.19185 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3845 | 15-20%                  |                10 |              0.03845 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3896 | >20%                    |                 5 |              0.07792 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3919 |                         |                 5 |              0.07838 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3933 | >20%                    |                10 |              0.03933 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3995 | <5%                     |                 2 |              0.19975 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4044 | 10-15%                  |                 5 |              0.08088 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4055 | >20%                    |                 2 |              0.20275 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.406  | >20%                    |                 2 |              0.203   |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4078 | >20%                    |                 5 |              0.08156 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4083 | 15-20%                  |                 2 |              0.20415 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4123 | >20%                    |                 2 |              0.20615 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4147 | >20%                    |                 2 |              0.20735 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4169 |                         |                 2 |              0.20845 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4169 | 5-10%                   |                 2 |              0.20845 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4177 | >20%                    |                 2 |              0.20885 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4195 | 5-10%                   |                 5 |              0.0839  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4213 | 5-10%                   |                 2 |              0.21065 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4331 | 5-10%                   |                 5 |              0.08662 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4363 | >20%                    |                 2 |              0.21815 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4383 | <5%                     |                 2 |              0.21915 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4387 | 5-10%                   |                 2 |              0.21935 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4455 | <5%                     |                 5 |              0.0891  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4488 | 5-10%                   |                 5 |              0.08976 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4493 | <5%                     |                 5 |              0.08986 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.451  | <5%                     |                 5 |              0.0902  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.4529 | >20%                    |                 5 |              0.09058 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4534 | 5-10%                   |                 5 |              0.09068 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4561 | >20%                    |                 5 |              0.09122 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4565 | 5-10%                   |                 5 |              0.0913  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4593 | 5-10%                   |                 2 |              0.22965 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.461  | >20%                    |                 5 |              0.0922  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4647 | 10-15%                  |                 5 |              0.09294 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4709 | 10-15%                  |                 2 |              0.23545 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4739 | >20%                    |                 5 |              0.09478 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.478  | >20%                    |                10 |              0.0478  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4804 | >20%                    |                 5 |              0.09608 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4817 | >20%                    |                 2 |              0.24085 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4825 | <5%                     |                 5 |              0.0965  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4912 | >20%                    |                10 |              0.04912 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4965 | >20%                    |                 5 |              0.0993  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4988 | 5-10%                   |                 5 |              0.09976 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5039 | >20%                    |                 2 |              0.25195 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5141 | 5-10%                   |                 5 |              0.10282 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5198 | <5%                     |                10 |              0.05198 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5204 | >20%                    |                 5 |              0.10408 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5208 | >20%                    |                 5 |              0.10416 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5231 | >20%                    |                 2 |              0.26155 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5325 | 10-15%                  |                 5 |              0.1065  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5363 | 15-20%                  |                 2 |              0.26815 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5367 | 15-20%                  |                 2 |              0.26835 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5379 | 5-10%                   |                 5 |              0.10758 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5385 | >20%                    |                 2 |              0.26925 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5394 | >20%                    |                 5 |              0.10788 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5509 | 5-10%                   |                 5 |              0.11018 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5534 | 10-15%                  |                10 |              0.05534 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5561 | 15-20%                  |                 5 |              0.11122 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5574 | >20%                    |                 2 |              0.2787  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5616 | 10-15%                  |                 5 |              0.11232 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5664 | >20%                    |                 5 |              0.11328 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5708 | >20%                    |                 2 |              0.2854  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5755 | <5%                     |                 5 |              0.1151  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5774 | >20%                    |                 5 |              0.11548 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5826 | >20%                    |                 2 |              0.2913  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5869 | <5%                     |                 5 |              0.11738 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5931 | >20%                    |                 5 |              0.11862 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6012 | 15-20%                  |                 5 |              0.12024 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6154 | <5%                     |                10 |              0.06154 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6193 | >20%                    |                10 |              0.06193 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6289 | >20%                    |                 5 |              0.12578 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6338 | <5%                     |                 2 |              0.3169  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6442 | >20%                    |                10 |              0.06442 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6568 | <5%                     |                10 |              0.06568 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6799 | >20%                    |                 5 |              0.13598 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6809 | 10-15%                  |                 5 |              0.13618 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6827 | >20%                    |                 5 |              0.13654 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6844 | >20%                    |                10 |              0.06844 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6883 | >20%                    |                 2 |              0.34415 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7132 | >20%                    |                10 |              0.07132 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7147 | >20%                    |                10 |              0.07147 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7157 | 5-10%                   |                10 |              0.07157 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7188 | 5-10%                   |                 5 |              0.14376 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7256 | >20%                    |                10 |              0.07256 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7291 |                         |                10 |              0.07291 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7303 | >20%                    |                10 |              0.07303 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7303 | <5%                     |                 5 |              0.14606 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7384 | >20%                    |                 5 |              0.14768 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7408 | 15-20%                  |                 5 |              0.14816 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7421 | 5-10%                   |                 2 |              0.37105 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7446 | 5-10%                   |                10 |              0.07446 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7644 | <5%                     |                10 |              0.07644 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7654 | >20%                    |                 5 |              0.15308 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7655 | >20%                    |                10 |              0.07655 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7757 | 5-10%                   |                10 |              0.07757 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7766 | >20%                    |                 5 |              0.15532 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7858 | <5%                     |                10 |              0.07858 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7892 | <5%                     |                10 |              0.07892 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.8162 | >20%                    |                 2 |              0.4081  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.8302 | >20%                    |                10 |              0.08302 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8341 | 15-20%                  |                10 |              0.08341 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8509 | 15-20%                  |                 5 |              0.17018 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8533 | 5-10%                   |                10 |              0.08533 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8571 | >20%                    |                10 |              0.08571 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.858  | 5-10%                   |                10 |              0.0858  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8586 | 15-20%                  |                10 |              0.08586 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8597 | <5%                     |                10 |              0.08597 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.862  | >20%                    |                 2 |              0.431   |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8666 | >20%                    |                10 |              0.08666 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8691 | <5%                     |                10 |              0.08691 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8716 | >20%                    |                10 |              0.08716 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8738 | >20%                    |                10 |              0.08738 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8884 | >20%                    |                 2 |              0.4442  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8948 | >20%                    |                10 |              0.08948 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9392 | >20%                    |                10 |              0.09392 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9938 | 10-15%                  |                10 |              0.09938 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0135 | >20%                    |                 5 |              0.2027  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0154 | 15-20%                  |                10 |              0.10154 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0314 | 5-10%                   |                10 |              0.10314 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0545 | >20%                    |                10 |              0.10545 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.072  | 5-10%                   |                10 |              0.1072  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0834 | >20%                    |                10 |              0.10834 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0967 | <5%                     |                10 |              0.10967 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1223 | >20%                    |                 5 |              0.22446 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1448 | 5-10%                   |                10 |              0.11448 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1781 | 15-20%                  |                10 |              0.11781 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1842 | >20%                    |                10 |              0.11842 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2053 | >20%                    |                10 |              0.12053 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.241  | >20%                    |                10 |              0.1241  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2742 | >20%                    |                 2 |              0.6371  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3119 | 5-10%                   |                 5 |              0.26238 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3183 | >20%                    |                 5 |              0.26366 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3433 | 5-10%                   |                 2 |              0.67165 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4533 | >20%                    |                10 |              0.14533 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4997 | 10-15%                  |                 5 |              0.29994 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5085 | >20%                    |                10 |              0.15085 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6899 | >20%                    |                10 |              0.16899 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0505 | 5-10%                   |                10 |              0.20505 |