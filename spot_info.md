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

Data correct as of 2024-10-27 01:43:14.883255, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1613 | >20%                    |                 2 |              0.08065 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1729 | 10-15%                  |                 2 |              0.08645 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1729 | 5-10%                   |                 2 |              0.08645 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1836 | <5%                     |                 2 |              0.0918  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.189  | <5%                     |                 2 |              0.0945  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.189  | 15-20%                  |                 2 |              0.0945  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1897 | <5%                     |                 2 |              0.09485 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2139 | 5-10%                   |                 5 |              0.04278 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2183 | 15-20%                  |                 2 |              0.10915 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2203 | <5%                     |                 2 |              0.11015 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2242 | 15-20%                  |                 2 |              0.1121  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.226  | 5-10%                   |                 2 |              0.113   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2279 | 15-20%                  |                 2 |              0.11395 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2396 | >20%                    |                 2 |              0.1198  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2536 | 5-10%                   |                 5 |              0.05072 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2574 | <5%                     |                 5 |              0.05148 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | <5%                     |                 2 |              0.1306  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2632 | <5%                     |                 2 |              0.1316  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.265  | 5-10%                   |                 5 |              0.053   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.273  | <5%                     |                 2 |              0.1365  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2774 | 10-15%                  |                 2 |              0.1387  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2799 | 15-20%                  |                 2 |              0.13995 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2846 | <5%                     |                 5 |              0.05692 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.293  | <5%                     |                 2 |              0.1465  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2946 | 10-15%                  |                 5 |              0.05892 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2998 | >20%                    |                 5 |              0.05996 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3007 | 15-20%                  |                 5 |              0.06014 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3036 | 10-15%                  |                 5 |              0.06072 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3037 | >20%                    |                 2 |              0.15185 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3108 | >20%                    |                 5 |              0.06216 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3117 | 10-15%                  |                 5 |              0.06234 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3149 | 15-20%                  |                 2 |              0.15745 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3318 | >20%                    |                 5 |              0.06636 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3369 | <5%                     |                 2 |              0.16845 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3405 | >20%                    |                10 |              0.03405 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3477 | <5%                     |                 2 |              0.17385 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3616 | >20%                    |                 2 |              0.1808  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3707 | 5-10%                   |                10 |              0.03707 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3717 | <5%                     |                 5 |              0.07434 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3803 | 5-10%                   |                 2 |              0.19015 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3829 | >20%                    |                10 |              0.03829 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3849 | 10-15%                  |                10 |              0.03849 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3881 | >20%                    |                 2 |              0.19405 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3891 | <5%                     |                 5 |              0.07782 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3929 | 5-10%                   |                 5 |              0.07858 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3938 | >20%                    |                 2 |              0.1969  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3976 | 5-10%                   |                 2 |              0.1988  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3979 | 5-10%                   |                10 |              0.03979 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.398  | 15-20%                  |                 2 |              0.199   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4079 | 5-10%                   |                 2 |              0.20395 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4124 | <5%                     |                 5 |              0.08248 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4137 | <5%                     |                 5 |              0.08274 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4272 | >20%                    |                 5 |              0.08544 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.435  | >20%                    |                 2 |              0.2175  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4362 | 15-20%                  |                 2 |              0.2181  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4403 | <5%                     |                10 |              0.04403 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4586 | <5%                     |                10 |              0.04586 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4621 | <5%                     |                 5 |              0.09242 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4624 | <5%                     |                10 |              0.04624 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4647 | 10-15%                  |                 2 |              0.23235 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4671 | 5-10%                   |                 5 |              0.09342 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4688 | <5%                     |                 2 |              0.2344  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4692 | >20%                    |                 5 |              0.09384 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4712 | >20%                    |                 2 |              0.2356  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4729 | <5%                     |                10 |              0.04729 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.473  | 5-10%                   |                 2 |              0.2365  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4747 | 15-20%                  |                 5 |              0.09494 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4753 | 15-20%                  |                 5 |              0.09506 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4762 | 5-10%                   |                 2 |              0.2381  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4845 | 15-20%                  |                 2 |              0.24225 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4861 | 10-15%                  |                10 |              0.04861 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4866 | >20%                    |                 2 |              0.2433  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4985 | 5-10%                   |                 5 |              0.0997  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5105 | >20%                    |                 5 |              0.1021  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.511  | >20%                    |                 5 |              0.1022  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5143 | <5%                     |                 5 |              0.10286 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5161 | >20%                    |                 2 |              0.25805 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5242 | <5%                     |                 5 |              0.10484 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5278 | 10-15%                  |                 5 |              0.10556 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5329 | 5-10%                   |                 5 |              0.10658 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.538  | 15-20%                  |                 2 |              0.269   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5387 | 5-10%                   |                 5 |              0.10774 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5439 | >20%                    |                10 |              0.05439 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5508 | 10-15%                  |                 5 |              0.11016 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5644 | 5-10%                   |                 5 |              0.11288 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5662 | <5%                     |                10 |              0.05662 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5696 | 5-10%                   |                10 |              0.05696 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5744 | 5-10%                   |                 5 |              0.11488 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5785 | 15-20%                  |                 5 |              0.1157  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5791 | 15-20%                  |                10 |              0.05791 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5835 | >20%                    |                 5 |              0.1167  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5934 | 5-10%                   |                 5 |              0.11868 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5938 | >20%                    |                 2 |              0.2969  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6066 | >20%                    |                 5 |              0.12132 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6208 | >20%                    |                 5 |              0.12416 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6231 | 15-20%                  |                 5 |              0.12462 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6455 | 10-15%                  |                10 |              0.06455 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6474 | 5-10%                   |                 5 |              0.12948 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6601 | <5%                     |                10 |              0.06601 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6656 | >20%                    |                10 |              0.06656 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6679 | 5-10%                   |                10 |              0.06679 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6765 | >20%                    |                 2 |              0.33825 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6775 | >20%                    |                10 |              0.06775 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6817 | <5%                     |                10 |              0.06817 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6862 | >20%                    |                10 |              0.06862 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7056 | 5-10%                   |                10 |              0.07056 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7412 | >20%                    |                10 |              0.07412 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7484 | >20%                    |                 5 |              0.14968 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.763  | 15-20%                  |                10 |              0.0763  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7689 | 10-15%                  |                10 |              0.07689 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7757 | <5%                     |                10 |              0.07757 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7854 | 5-10%                   |                 5 |              0.15708 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.799  | 5-10%                   |                10 |              0.0799  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8295 | >20%                    |                10 |              0.08295 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8606 | 10-15%                  |                10 |              0.08606 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.872  | >20%                    |                 2 |              0.436   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8724 | 5-10%                   |                10 |              0.08724 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8779 | >20%                    |                10 |              0.08779 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8814 | >20%                    |                10 |              0.08814 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8842 | 10-15%                  |                 5 |              0.17684 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8944 | <5%                     |                10 |              0.08944 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9034 | >20%                    |                 5 |              0.18068 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9156 | <5%                     |                 2 |              0.4578  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9399 | 15-20%                  |                10 |              0.09399 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9802 | >20%                    |                10 |              0.09802 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9824 | 5-10%                   |                10 |              0.09824 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0019 | 10-15%                  |                10 |              0.10019 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0127 | 10-15%                  |                10 |              0.10127 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0208 | 10-15%                  |                10 |              0.10208 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0254 | 10-15%                  |                 5 |              0.20508 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0388 | >20%                    |                10 |              0.10388 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1497 | >20%                    |                10 |              0.11497 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1704 | >20%                    |                10 |              0.11704 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3997 | >20%                    |                10 |              0.13997 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5278 | 5-10%                   |                10 |              0.15278 |