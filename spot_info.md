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

Data correct as of 2024-11-02 01:36:08.420657, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1412 | 10-15%                  |                 2 |              0.0706  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 10-15%                  |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1978 | 10-15%                  |                 2 |              0.0989  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2015 | <5%                     |                 2 |              0.10075 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2067 | >20%                    |                 2 |              0.10335 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2137 | 10-15%                  |                 2 |              0.10685 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2216 | 10-15%                  |                 2 |              0.1108  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.223  | 15-20%                  |                 2 |              0.1115  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 5-10%                   |                 5 |              0.04498 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2387 | 15-20%                  |                 5 |              0.04774 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2391 | 5-10%                   |                 2 |              0.11955 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2452 | >20%                    |                 2 |              0.1226  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.247  | <5%                     |                 2 |              0.1235  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2471 | 5-10%                   |                 2 |              0.12355 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2475 | <5%                     |                 2 |              0.12375 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2475 | 10-15%                  |                 2 |              0.12375 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2484 | <5%                     |                 2 |              0.1242  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2598 | >20%                    |                 2 |              0.1299  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.26   | >20%                    |                 5 |              0.052   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2697 | <5%                     |                 2 |              0.13485 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | 10-15%                  |                 2 |              0.1392  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2785 | 5-10%                   |                 5 |              0.0557  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.28   | <5%                     |                 2 |              0.14    |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2838 | 5-10%                   |                 5 |              0.05676 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.294  | 10-15%                  |                 2 |              0.147   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3019 | <5%                     |                 5 |              0.06038 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3051 | <5%                     |                 2 |              0.15255 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3112 | >20%                    |                 5 |              0.06224 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3151 | <5%                     |                 5 |              0.06302 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3265 | >20%                    |                 5 |              0.0653  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3268 | 15-20%                  |                 5 |              0.06536 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3302 | 10-15%                  |                 5 |              0.06604 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3348 | 15-20%                  |                 2 |              0.1674  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3348 | 5-10%                   |                 2 |              0.1674  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3498 | <5%                     |                 2 |              0.1749  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3618 | >20%                    |                 2 |              0.1809  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.365  | 5-10%                   |                 5 |              0.073   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3741 | >20%                    |                 2 |              0.18705 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3766 | 5-10%                   |                 5 |              0.07532 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3795 | 5-10%                   |                 2 |              0.18975 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.384  | >20%                    |                 2 |              0.192   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.393  | >20%                    |                 2 |              0.1965  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3951 | 5-10%                   |                 5 |              0.07902 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4015 | 5-10%                   |                 2 |              0.20075 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4125 | 10-15%                  |                 2 |              0.20625 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4135 | <5%                     |                 5 |              0.0827  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4136 | >20%                    |                 5 |              0.08272 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4136 | <5%                     |                 5 |              0.08272 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4138 | 15-20%                  |                 2 |              0.2069  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4275 | 15-20%                  |                 5 |              0.0855  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4302 | 10-15%                  |                 2 |              0.2151  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4322 | 10-15%                  |                10 |              0.04322 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4453 | <5%                     |                10 |              0.04453 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.448  | 15-20%                  |                 5 |              0.0896  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4504 | 5-10%                   |                 5 |              0.09008 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4594 | 15-20%                  |                 2 |              0.2297  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.469  | 5-10%                   |                 5 |              0.0938  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4724 | 10-15%                  |                 5 |              0.09448 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4804 | >20%                    |                 5 |              0.09608 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4823 | <5%                     |                10 |              0.04823 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4837 | 15-20%                  |                 2 |              0.24185 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4858 | <5%                     |                 2 |              0.2429  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4867 | 10-15%                  |                10 |              0.04867 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4886 | 10-15%                  |                 2 |              0.2443  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4943 | <5%                     |                10 |              0.04943 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4971 | <5%                     |                 5 |              0.09942 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4988 | 5-10%                   |                 5 |              0.09976 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4994 | >20%                    |                 5 |              0.09988 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5099 | 15-20%                  |                 2 |              0.25495 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5099 | 5-10%                   |                 2 |              0.25495 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5195 | 5-10%                   |                 5 |              0.1039  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5241 | 10-15%                  |                10 |              0.05241 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5289 | <5%                     |                 5 |              0.10578 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5356 | 10-15%                  |                 5 |              0.10712 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5369 | <5%                     |                 5 |              0.10738 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5376 | >20%                    |                 5 |              0.10752 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5428 | 15-20%                  |                 2 |              0.2714  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.5449 | <5%                     |                10 |              0.05449 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5459 | 10-15%                  |                 5 |              0.10918 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5598 | 15-20%                  |                 2 |              0.2799  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5668 | >20%                    |                 5 |              0.11336 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5673 | 5-10%                   |                 5 |              0.11346 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.577  | 10-15%                  |                 5 |              0.1154  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5773 | 10-15%                  |                 5 |              0.11546 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5789 | 5-10%                   |                 5 |              0.11578 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5822 | 10-15%                  |                10 |              0.05822 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5851 | >20%                    |                 2 |              0.29255 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5855 | 5-10%                   |                10 |              0.05855 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5883 | 5-10%                   |                10 |              0.05883 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6043 | <5%                     |                10 |              0.06043 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6097 | 5-10%                   |                 5 |              0.12194 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6153 | >20%                    |                10 |              0.06153 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6168 | >20%                    |                10 |              0.06168 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6426 | 5-10%                   |                10 |              0.06426 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6519 | 5-10%                   |                10 |              0.06519 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6604 | >20%                    |                 2 |              0.3302  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6667 | >20%                    |                 2 |              0.33335 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6827 | 15-20%                  |                 5 |              0.13654 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6856 | >20%                    |                 5 |              0.13712 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6933 | >20%                    |                10 |              0.06933 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.697  | >20%                    |                10 |              0.0697  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.702  | 5-10%                   |                10 |              0.0702  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7047 | 10-15%                  |                 5 |              0.14094 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7055 | 10-15%                  |                10 |              0.07055 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7342 | >20%                    |                10 |              0.07342 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7509 | >20%                    |                 5 |              0.15018 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7676 | 15-20%                  |                10 |              0.07676 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7748 | 5-10%                   |                10 |              0.07748 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7795 | 5-10%                   |                 5 |              0.1559  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7893 | <5%                     |                10 |              0.07893 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8091 | >20%                    |                10 |              0.08091 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8371 | 5-10%                   |                 5 |              0.16742 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8415 | 5-10%                   |                10 |              0.08415 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8425 | >20%                    |                10 |              0.08425 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8471 | >20%                    |                10 |              0.08471 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.849  | >20%                    |                10 |              0.0849  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8577 | 5-10%                   |                10 |              0.08577 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8616 | 10-15%                  |                 2 |              0.4308  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.866  | <5%                     |                 2 |              0.433   |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8765 | >20%                    |                 5 |              0.1753  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9058 | <5%                     |                10 |              0.09058 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9087 | 15-20%                  |                10 |              0.09087 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9915 | 10-15%                  |                10 |              0.09915 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9926 | 10-15%                  |                 5 |              0.19852 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0085 | 10-15%                  |                10 |              0.10085 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0266 | <5%                     |                10 |              0.10266 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0422 | >20%                    |                10 |              0.10422 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0539 | >20%                    |                10 |              0.10539 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0708 | 5-10%                   |                10 |              0.10708 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1187 | >20%                    |                10 |              0.11187 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1868 | 15-20%                  |                10 |              0.11868 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2303 | <5%                     |                10 |              0.12303 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4261 | >20%                    |                10 |              0.14261 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4702 | 15-20%                  |                10 |              0.14702 |