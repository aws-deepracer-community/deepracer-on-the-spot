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

Data correct as of 2025-01-12 01:45:46.487765, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2226 | <5%                     |                 2 |              0.1113  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2288 | 5-10%                   |                 2 |              0.1144  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.232  | 15-20%                  |                 2 |              0.116   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2376 | 10-15%                  |                 2 |              0.1188  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.24   | 15-20%                  |                 2 |              0.12    |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2439 | <5%                     |                 2 |              0.12195 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2487 | 10-15%                  |                 2 |              0.12435 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2607 | 5-10%                   |                 2 |              0.13035 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2785 | 5-10%                   |                 2 |              0.13925 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2797 | >20%                    |                 5 |              0.05594 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2894 | 5-10%                   |                 2 |              0.1447  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2903 | <5%                     |                 2 |              0.14515 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2934 | <5%                     |                 2 |              0.1467  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3021 | 10-15%                  |                 2 |              0.15105 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3065 | >20%                    |                 2 |              0.15325 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3146 | 5-10%                   |                 2 |              0.1573  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3353 | <5%                     |                 2 |              0.16765 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3375 | <5%                     |                 5 |              0.0675  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3392 | 5-10%                   |                 5 |              0.06784 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3482 | <5%                     |                 5 |              0.06964 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3503 | 10-15%                  |                 2 |              0.17515 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3566 | <5%                     |                 2 |              0.1783  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3621 | <5%                     |                 2 |              0.18105 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3656 | >20%                    |                 2 |              0.1828  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3684 | 5-10%                   |                 2 |              0.1842  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3761 | <5%                     |                 5 |              0.07522 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3771 | 5-10%                   |                 5 |              0.07542 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3784 | 5-10%                   |                10 |              0.03784 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3813 | >20%                    |                 2 |              0.19065 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3887 | 10-15%                  |                 5 |              0.07774 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3987 | <5%                     |                 2 |              0.19935 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4    | 5-10%                   |                 2 |              0.2     |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4013 | 5-10%                   |                 5 |              0.08026 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4041 | 5-10%                   |                 2 |              0.20205 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4067 | >20%                    |                 2 |              0.20335 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4097 | >20%                    |                10 |              0.04097 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4132 | 10-15%                  |                 2 |              0.2066  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.415  | <5%                     |                 2 |              0.2075  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4185 | 5-10%                   |                 5 |              0.0837  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4198 | >20%                    |                10 |              0.04198 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4244 | 5-10%                   |                 2 |              0.2122  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4278 | 5-10%                   |                 2 |              0.2139  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4297 | >20%                    |                 2 |              0.21485 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4309 | 15-20%                  |                10 |              0.04309 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4461 | >20%                    |                 5 |              0.08922 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4517 | 15-20%                  |                 5 |              0.09034 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4618 | <5%                     |                 5 |              0.09236 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4619 | >20%                    |                 5 |              0.09238 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4643 | <5%                     |                 2 |              0.23215 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4741 | <5%                     |                 2 |              0.23705 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.476  | 5-10%                   |                 5 |              0.0952  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4779 | 10-15%                  |                 5 |              0.09558 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4805 | 15-20%                  |                 2 |              0.24025 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4814 | 10-15%                  |                 5 |              0.09628 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4833 | 5-10%                   |                 2 |              0.24165 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4855 | <5%                     |                 5 |              0.0971  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4909 | <5%                     |                 2 |              0.24545 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4917 | 15-20%                  |                 5 |              0.09834 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4987 | <5%                     |                 5 |              0.09974 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5019 | >20%                    |                 5 |              0.10038 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5102 | <5%                     |                 2 |              0.2551  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5146 | <5%                     |                 5 |              0.10292 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5172 | <5%                     |                 5 |              0.10344 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5182 | <5%                     |                 5 |              0.10364 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5357 | >20%                    |                 5 |              0.10714 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5362 | 15-20%                  |                 2 |              0.2681  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.538  | >20%                    |                 5 |              0.1076  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5457 | >20%                    |                 5 |              0.10914 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5457 | 5-10%                   |                 5 |              0.10914 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5489 | 5-10%                   |                 5 |              0.10978 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5534 | 10-15%                  |                 5 |              0.11068 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5631 | 15-20%                  |                 2 |              0.28155 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5683 | 10-15%                  |                 5 |              0.11366 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5702 | 5-10%                   |                 5 |              0.11404 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5792 | 10-15%                  |                10 |              0.05792 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5802 | 5-10%                   |                 5 |              0.11604 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5853 | <5%                     |                 5 |              0.11706 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5905 | 15-20%                  |                 2 |              0.29525 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5919 | 5-10%                   |                 5 |              0.11838 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6025 | 10-15%                  |                10 |              0.06025 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6126 | 5-10%                   |                10 |              0.06126 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6392 | 5-10%                   |                10 |              0.06392 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6535 | >20%                    |                 2 |              0.32675 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6602 | <5%                     |                 5 |              0.13204 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6734 | >20%                    |                10 |              0.06734 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6763 | 15-20%                  |                10 |              0.06763 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6863 | >20%                    |                 5 |              0.13726 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.708  | <5%                     |                 5 |              0.1416  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7106 | 15-20%                  |                 2 |              0.3553  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.711  | <5%                     |                10 |              0.0711  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7167 | 15-20%                  |                 5 |              0.14334 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7227 | 15-20%                  |                 5 |              0.14454 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7271 | >20%                    |                10 |              0.07271 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7293 | 10-15%                  |                10 |              0.07293 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7302 | >20%                    |                10 |              0.07302 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7312 | <5%                     |                10 |              0.07312 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7428 | 5-10%                   |                 2 |              0.3714  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7532 | >20%                    |                 5 |              0.15064 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7743 | >20%                    |                10 |              0.07743 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7836 | >20%                    |                10 |              0.07836 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7922 | >20%                    |                 5 |              0.15844 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8002 | <5%                     |                 2 |              0.4001  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8209 | 10-15%                  |                10 |              0.08209 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8265 | >20%                    |                 5 |              0.1653  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8287 | <5%                     |                10 |              0.08287 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8289 | 15-20%                  |                10 |              0.08289 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.842  | >20%                    |                10 |              0.0842  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.845  | 5-10%                   |                10 |              0.0845  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8598 | 15-20%                  |                10 |              0.08598 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8632 | 10-15%                  |                10 |              0.08632 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8798 | 5-10%                   |                10 |              0.08798 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8807 | <5%                     |                10 |              0.08807 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8817 | <5%                     |                10 |              0.08817 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8937 | 5-10%                   |                10 |              0.08937 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8937 | 15-20%                  |                10 |              0.08937 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8996 | <5%                     |                10 |              0.08996 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9028 | <5%                     |                10 |              0.09028 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9064 | 5-10%                   |                 5 |              0.18128 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9284 | <5%                     |                10 |              0.09284 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9558 | <5%                     |                 2 |              0.4779  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9849 | >20%                    |                10 |              0.09849 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9856 | 5-10%                   |                10 |              0.09856 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9888 | 10-15%                  |                 5 |              0.19776 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9953 | 5-10%                   |                10 |              0.09953 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0013 | <5%                     |                10 |              0.10013 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0113 | 10-15%                  |                 5 |              0.20226 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.035  | <5%                     |                10 |              0.1035  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0467 | <5%                     |                10 |              0.10467 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0606 | 15-20%                  |                 2 |              0.5303  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0666 | 5-10%                   |                 5 |              0.21332 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1042 | >20%                    |                10 |              0.11042 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1887 | 10-15%                  |                10 |              0.11887 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2874 | >20%                    |                10 |              0.12874 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4212 | 5-10%                   |                10 |              0.14212 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4373 | 10-15%                  |                10 |              0.14373 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5096 | 15-20%                  |                 5 |              0.30192 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5414 | 5-10%                   |                10 |              0.15414 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5519 | <5%                     |                10 |              0.15519 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0627 | 10-15%                  |                10 |              0.20627 |