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

Data correct as of 2024-10-06 01:42:48.984237, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1146 | <5%                     |                 2 |              0.0573  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1267 | <5%                     |                 2 |              0.06335 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1806 | 5-10%                   |                 2 |              0.0903  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1864 | 10-15%                  |                 2 |              0.0932  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1957 | 10-15%                  |                 2 |              0.09785 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1957 | 15-20%                  |                 2 |              0.09785 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2107 | 15-20%                  |                 5 |              0.04214 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2157 | >20%                    |                 2 |              0.10785 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.2161 | >20%                    |                 2 |              0.10805 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2303 | <5%                     |                 2 |              0.11515 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2373 | >20%                    |                 2 |              0.11865 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2404 | 5-10%                   |                 5 |              0.04808 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2415 | <5%                     |                 2 |              0.12075 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2443 | <5%                     |                 2 |              0.12215 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2456 | >20%                    |                 5 |              0.04912 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.255  | 10-15%                  |                 5 |              0.051   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2747 | <5%                     |                 2 |              0.13735 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2749 | 5-10%                   |                 2 |              0.13745 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2791 | <5%                     |                 2 |              0.13955 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.2807 | >20%                    |                 5 |              0.05614 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | <5%                     |                 2 |              0.14245 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2948 | <5%                     |                 2 |              0.1474  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.302  | <5%                     |                10 |              0.0302  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3058 | 15-20%                  |                10 |              0.03058 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3125 | >20%                    |                 5 |              0.0625  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.314  | 10-15%                  |                 2 |              0.157   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3149 | 15-20%                  |                 2 |              0.15745 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3156 | 15-20%                  |                 5 |              0.06312 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3173 | >20%                    |                 5 |              0.06346 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3199 | 15-20%                  |                 2 |              0.15995 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3226 | >20%                    |                 5 |              0.06452 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3257 | <5%                     |                 2 |              0.16285 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.338  | 5-10%                   |                10 |              0.0338  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.344  | <5%                     |                 2 |              0.172   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3606 | >20%                    |                 5 |              0.07212 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3607 | >20%                    |                10 |              0.03607 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3621 | <5%                     |                 2 |              0.18105 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3646 | <5%                     |                 5 |              0.07292 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3685 | 5-10%                   |                 5 |              0.0737  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3732 | 5-10%                   |                 2 |              0.1866  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3839 | <5%                     |                 5 |              0.07678 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3905 | 5-10%                   |                10 |              0.03905 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.395  | >20%                    |                10 |              0.0395  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3985 | >20%                    |                 2 |              0.19925 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4122 | 5-10%                   |                 2 |              0.2061  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4141 | >20%                    |                 2 |              0.20705 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.425  | <5%                     |                 2 |              0.2125  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.4269 | 5-10%                   |                 5 |              0.08538 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4289 | 5-10%                   |                10 |              0.04289 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4298 | 15-20%                  |                 5 |              0.08596 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4323 | >20%                    |                 2 |              0.21615 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4426 | 10-15%                  |                 5 |              0.08852 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4447 | <5%                     |                 2 |              0.22235 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4454 | >20%                    |                 2 |              0.2227  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4487 | <5%                     |                 5 |              0.08974 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4525 | 5-10%                   |                 2 |              0.22625 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4552 | 5-10%                   |                10 |              0.04552 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4553 | >20%                    |                10 |              0.04553 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.463  | <5%                     |                10 |              0.0463  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4644 | 10-15%                  |                 5 |              0.09288 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4647 | <5%                     |                 5 |              0.09294 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4716 | 10-15%                  |                 2 |              0.2358  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4763 | 5-10%                   |                 5 |              0.09526 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4872 | >20%                    |                 2 |              0.2436  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4911 | <5%                     |                 5 |              0.09822 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4955 | <5%                     |                 5 |              0.0991  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5034 | >20%                    |                 2 |              0.2517  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5054 | 5-10%                   |                 5 |              0.10108 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.508  | >20%                    |                 2 |              0.254   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5099 | <5%                     |                 5 |              0.10198 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.516  | <5%                     |                 5 |              0.1032  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5196 | 15-20%                  |                 5 |              0.10392 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5253 | <5%                     |                 5 |              0.10506 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5413 | >20%                    |                 5 |              0.10826 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5653 | >20%                    |                 5 |              0.11306 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5841 | >20%                    |                 5 |              0.11682 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6029 | >20%                    |                 5 |              0.12058 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6056 | 15-20%                  |                 5 |              0.12112 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6086 | >20%                    |                 2 |              0.3043  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6365 | 10-15%                  |                 5 |              0.1273  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.638  | >20%                    |                10 |              0.0638  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6549 | 5-10%                   |                10 |              0.06549 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6558 | <5%                     |                10 |              0.06558 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.671  | 5-10%                   |                 5 |              0.1342  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6832 | >20%                    |                 5 |              0.13664 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.699  | >20%                    |                 2 |              0.3495  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7053 | <5%                     |                10 |              0.07053 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7255 | 5-10%                   |                10 |              0.07255 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7458 | >20%                    |                 5 |              0.14916 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7462 | 15-20%                  |                10 |              0.07462 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7489 | >20%                    |                10 |              0.07489 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7633 | 10-15%                  |                10 |              0.07633 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7647 | 15-20%                  |                10 |              0.07647 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7733 | >20%                    |                10 |              0.07733 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7796 | >20%                    |                10 |              0.07796 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8176 | 10-15%                  |                10 |              0.08176 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8219 | 15-20%                  |                 5 |              0.16438 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8253 | 5-10%                   |                10 |              0.08253 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8394 | 15-20%                  |                10 |              0.08394 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8409 | >20%                    |                10 |              0.08409 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8474 | <5%                     |                10 |              0.08474 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8795 | <5%                     |                10 |              0.08795 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8873 | >20%                    |                10 |              0.08873 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8914 | >20%                    |                 5 |              0.17828 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8961 | >20%                    |                10 |              0.08961 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9129 | <5%                     |                10 |              0.09129 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.916  | >20%                    |                 2 |              0.458   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9318 | 5-10%                   |                10 |              0.09318 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9568 | <5%                     |                 2 |              0.4784  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.963  | 10-15%                  |                 2 |              0.4815  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9764 | 5-10%                   |                10 |              0.09764 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9876 | 10-15%                  |                 5 |              0.19752 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0321 | <5%                     |                10 |              0.10321 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0324 | >20%                    |                10 |              0.10324 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.097  | >20%                    |                10 |              0.1097  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1159 | >20%                    |                 5 |              0.22318 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1304 | >20%                    |                10 |              0.11304 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1844 | >20%                    |                10 |              0.11844 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4788 | 10-15%                  |                10 |              0.14788 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.5548 | >20%                    |                10 |              0.15548 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.627  | 5-10%                   |                10 |              0.1627  |