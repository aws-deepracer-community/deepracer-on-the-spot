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

Data correct as of 2026-07-28 02:49:29.739220, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1312 | >20%                    |                 2 |              0.0656  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1619 | >20%                    |                 2 |              0.08095 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2081 | 15-20%                  |                 2 |              0.10405 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2288 | 15-20%                  |                 5 |              0.04576 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.229  | >20%                    |                 2 |              0.1145  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2371 | >20%                    |                 2 |              0.11855 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | >20%                    |                 2 |              0.1197  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2398 | >20%                    |                 2 |              0.1199  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2687 | 5-10%                   |                10 |              0.02687 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2701 | >20%                    |                 2 |              0.13505 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2753 | >20%                    |                 2 |              0.13765 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.276  | >20%                    |                 2 |              0.138   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2786 | >20%                    |                 2 |              0.1393  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2854 | 15-20%                  |                 2 |              0.1427  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2959 | 10-15%                  |                 2 |              0.14795 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2971 | >20%                    |                 2 |              0.14855 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3011 | 15-20%                  |                 2 |              0.15055 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.3231 | >20%                    |                10 |              0.03231 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3276 | >20%                    |                 2 |              0.1638  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3319 | >20%                    |                 5 |              0.06638 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3351 | 15-20%                  |                 5 |              0.06702 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3458 | >20%                    |                 5 |              0.06916 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3586 | >20%                    |                 5 |              0.07172 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3625 | >20%                    |                10 |              0.03625 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3646 | 10-15%                  |                 2 |              0.1823  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3669 | 5-10%                   |                10 |              0.03669 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3689 | <5%                     |                 2 |              0.18445 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.37   | >20%                    |                 2 |              0.185   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3864 | >20%                    |                 5 |              0.07728 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3873 | >20%                    |                 5 |              0.07746 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3904 | >20%                    |                 5 |              0.07808 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3984 | >20%                    |                 2 |              0.1992  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4033 | 15-20%                  |                 2 |              0.20165 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4038 | 5-10%                   |                10 |              0.04038 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.407  | >20%                    |                 2 |              0.2035  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4183 | 10-15%                  |                 2 |              0.20915 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4198 | >20%                    |                10 |              0.04198 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.43   | 10-15%                  |                10 |              0.043   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4339 | >20%                    |                 5 |              0.08678 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.438  | 10-15%                  |                 2 |              0.219   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4427 | >20%                    |                 5 |              0.08854 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.447  | >20%                    |                 2 |              0.2235  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4476 | >20%                    |                 5 |              0.08952 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4597 | >20%                    |                10 |              0.04597 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4658 | <5%                     |                 2 |              0.2329  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4686 | >20%                    |                 2 |              0.2343  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4692 | >20%                    |                 2 |              0.2346  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4722 | >20%                    |                 5 |              0.09444 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4809 | >20%                    |                 2 |              0.24045 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4837 | 15-20%                  |                 5 |              0.09674 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.495  | >20%                    |                 5 |              0.099   |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4975 | >20%                    |                 2 |              0.24875 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4997 | >20%                    |                 5 |              0.09994 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5072 | >20%                    |                 5 |              0.10144 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5145 | <5%                     |                 2 |              0.25725 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5221 | >20%                    |                 5 |              0.10442 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.537  | >20%                    |                10 |              0.0537  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5391 | >20%                    |                 5 |              0.10782 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5402 | >20%                    |                 5 |              0.10804 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5417 | 15-20%                  |                 2 |              0.27085 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5438 | >20%                    |                 5 |              0.10876 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5552 | >20%                    |                10 |              0.05552 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5563 | >20%                    |                 2 |              0.27815 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.559  | >20%                    |                 5 |              0.1118  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.56   | 10-15%                  |                 5 |              0.112   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5601 | >20%                    |                 2 |              0.28005 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5717 | 5-10%                   |                 2 |              0.28585 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5772 | >20%                    |                 5 |              0.11544 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5791 | >20%                    |                 5 |              0.11582 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5957 | >20%                    |                 5 |              0.11914 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6187 | >20%                    |                 2 |              0.30935 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6236 | >20%                    |                 5 |              0.12472 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6289 | >20%                    |                 2 |              0.31445 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.637  | >20%                    |                 5 |              0.1274  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6374 | 15-20%                  |                 5 |              0.12748 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6567 | >20%                    |                 2 |              0.32835 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6573 | >20%                    |                10 |              0.06573 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.66   | >20%                    |                 5 |              0.132   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6652 | >20%                    |                10 |              0.06652 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6695 | 5-10%                   |                 5 |              0.1339  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6791 | <5%                     |                 5 |              0.13582 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6922 | >20%                    |                 5 |              0.13844 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6962 | >20%                    |                10 |              0.06962 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7152 | >20%                    |                10 |              0.07152 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7181 | >20%                    |                 5 |              0.14362 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.722  | 15-20%                  |                10 |              0.0722  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7236 |                         |                 2 |              0.3618  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7241 | >20%                    |                10 |              0.07241 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7387 |                         |                 5 |              0.14774 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7438 | >20%                    |                10 |              0.07438 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7596 | >20%                    |                 5 |              0.15192 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7646 | >20%                    |                 5 |              0.15292 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.776  | >20%                    |                10 |              0.0776  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.778  | <5%                     |                10 |              0.0778  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7861 | >20%                    |                 5 |              0.15722 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.7881 |                         |                 2 |              0.39405 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7908 | 5-10%                   |                10 |              0.07908 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7955 | >20%                    |                10 |              0.07955 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.804  | >20%                    |                10 |              0.0804  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8213 | >20%                    |                 2 |              0.41065 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8333 | 10-15%                  |                 2 |              0.41665 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8344 | >20%                    |                 5 |              0.16688 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8399 | >20%                    |                 5 |              0.16798 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8632 | 15-20%                  |                10 |              0.08632 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8666 | >20%                    |                 2 |              0.4333  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8673 | >20%                    |                 2 |              0.43365 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8866 | 10-15%                  |                 2 |              0.4433  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8953 | >20%                    |                 5 |              0.17906 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8958 | 15-20%                  |                10 |              0.08958 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9002 | 15-20%                  |                10 |              0.09002 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9074 | 5-10%                   |                 2 |              0.4537  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9128 | >20%                    |                10 |              0.09128 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.925  | >20%                    |                 5 |              0.185   |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.926  | >20%                    |                10 |              0.0926  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9283 | >20%                    |                10 |              0.09283 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9538 | 15-20%                  |                 2 |              0.4769  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9606 | >20%                    |                10 |              0.09606 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9772 | >20%                    |                 2 |              0.4886  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9804 | 5-10%                   |                10 |              0.09804 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9903 | >20%                    |                 5 |              0.19806 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0018 | 15-20%                  |                10 |              0.10018 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0078 | >20%                    |                 5 |              0.20156 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0257 | >20%                    |                10 |              0.10257 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.027  | >20%                    |                10 |              0.1027  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0354 | >20%                    |                 5 |              0.20708 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0396 | >20%                    |                10 |              0.10396 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0511 | >20%                    |                 5 |              0.21022 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.081  | >20%                    |                10 |              0.1081  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0949 | 5-10%                   |                 5 |              0.21898 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1317 | >20%                    |                10 |              0.11317 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1401 | >20%                    |                 2 |              0.57005 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1679 | >20%                    |                10 |              0.11679 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1904 | >20%                    |                10 |              0.11904 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2024 | 10-15%                  |                 2 |              0.6012  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2077 | 5-10%                   |                 2 |              0.60385 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.2264 | 15-20%                  |                10 |              0.12264 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2322 |                         |                10 |              0.12322 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2736 | >20%                    |                10 |              0.12736 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3225 | >20%                    |                 5 |              0.2645  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3287 | 15-20%                  |                10 |              0.13287 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3778 |                         |                 5 |              0.27556 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4502 | >20%                    |                10 |              0.14502 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4926 | >20%                    |                 5 |              0.29852 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5741 | 10-15%                  |                10 |              0.15741 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5844 | 5-10%                   |                10 |              0.15844 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5913 | 15-20%                  |                 5 |              0.31826 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.66   | 15-20%                  |                10 |              0.166   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6629 | >20%                    |                10 |              0.16629 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8003 | >20%                    |                10 |              0.18003 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8546 |                         |                10 |              0.18546 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9185 | >20%                    |                10 |              0.19185 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.1511 | 5-10%                   |                 2 |              1.07555 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.2654 | >20%                    |                 5 |              0.45308 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.6581 | >20%                    |                 5 |              0.53162 |