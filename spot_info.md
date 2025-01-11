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

Data correct as of 2025-01-11 01:37:54.040390, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2289 | 5-10%                   |                 2 |              0.11445 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | 10-15%                  |                 2 |              0.11705 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2345 | 15-20%                  |                 2 |              0.11725 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2345 | <5%                     |                 2 |              0.11725 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2398 | 15-20%                  |                 2 |              0.1199  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.243  | <5%                     |                 2 |              0.1215  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2495 | 10-15%                  |                 2 |              0.12475 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2589 | 5-10%                   |                 2 |              0.12945 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2626 | 5-10%                   |                 2 |              0.1313  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2773 | <5%                     |                 5 |              0.05546 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2877 | >20%                    |                 5 |              0.05754 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2895 | <5%                     |                 2 |              0.14475 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2916 | 5-10%                   |                 2 |              0.1458  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2925 | <5%                     |                 2 |              0.14625 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3029 | >20%                    |                 2 |              0.15145 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3033 | 10-15%                  |                 2 |              0.15165 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3133 | 5-10%                   |                 2 |              0.15665 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3344 | <5%                     |                 2 |              0.1672  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3375 | 5-10%                   |                 5 |              0.0675  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3393 | 10-15%                  |                 2 |              0.16965 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3408 | <5%                     |                 5 |              0.06816 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3489 | <5%                     |                 5 |              0.06978 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3566 | <5%                     |                 2 |              0.1783  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.362  | <5%                     |                 2 |              0.181   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3656 | >20%                    |                 2 |              0.1828  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3666 | 5-10%                   |                 2 |              0.1833  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3738 | 5-10%                   |                 5 |              0.07476 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3743 | <5%                     |                 5 |              0.07486 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.376  | 5-10%                   |                 5 |              0.0752  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3823 | >20%                    |                 2 |              0.19115 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3925 | 10-15%                  |                 5 |              0.0785  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3932 | >20%                    |                10 |              0.03932 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3972 | >20%                    |                10 |              0.03972 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3984 | 5-10%                   |                10 |              0.03984 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4002 | 5-10%                   |                 2 |              0.2001  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4005 | <5%                     |                 2 |              0.20025 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4033 | 5-10%                   |                 2 |              0.20165 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4042 | >20%                    |                 2 |              0.2021  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.415  | <5%                     |                 2 |              0.2075  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4184 | 10-15%                  |                 2 |              0.2092  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4191 | 15-20%                  |                 5 |              0.08382 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4191 | 5-10%                   |                 5 |              0.08382 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.42   | 5-10%                   |                 2 |              0.21    |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.428  | >20%                    |                 2 |              0.214   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4288 | 5-10%                   |                 2 |              0.2144  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4449 | 15-20%                  |                10 |              0.04449 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4572 | >20%                    |                 5 |              0.09144 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4574 | >20%                    |                 5 |              0.09148 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4622 | <5%                     |                 5 |              0.09244 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4654 | <5%                     |                 2 |              0.2327  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.468  | <5%                     |                 2 |              0.234   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4702 | 5-10%                   |                 5 |              0.09404 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4755 | 5-10%                   |                 2 |              0.23775 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4791 | 10-15%                  |                 5 |              0.09582 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.48   | 10-15%                  |                 5 |              0.096   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4824 | <5%                     |                 5 |              0.09648 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4859 | 15-20%                  |                 2 |              0.24295 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4927 | <5%                     |                 2 |              0.24635 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4949 | 15-20%                  |                 5 |              0.09898 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4992 | >20%                    |                 5 |              0.09984 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5025 | <5%                     |                 5 |              0.1005  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5094 | <5%                     |                 5 |              0.10188 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5131 | <5%                     |                 5 |              0.10262 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5138 | <5%                     |                 2 |              0.2569  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5182 | <5%                     |                 5 |              0.10364 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5342 | 15-20%                  |                 2 |              0.2671  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5376 | >20%                    |                 5 |              0.10752 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5377 | >20%                    |                 5 |              0.10754 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5397 | 5-10%                   |                 5 |              0.10794 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5412 | >20%                    |                 5 |              0.10824 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5451 | 10-15%                  |                10 |              0.05451 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5549 | 5-10%                   |                 5 |              0.11098 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5555 | 10-15%                  |                 5 |              0.1111  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5631 | 15-20%                  |                 2 |              0.28155 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5729 | 5-10%                   |                 5 |              0.11458 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5733 | 10-15%                  |                 5 |              0.11466 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5739 | 5-10%                   |                 5 |              0.11478 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5861 | 15-20%                  |                 2 |              0.29305 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5868 | 5-10%                   |                 5 |              0.11736 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5879 | <5%                     |                 5 |              0.11758 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5986 | 10-15%                  |                10 |              0.05986 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6126 | 5-10%                   |                10 |              0.06126 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6413 | 5-10%                   |                10 |              0.06413 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6602 | <5%                     |                 5 |              0.13204 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6641 | >20%                    |                 2 |              0.33205 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.671  | >20%                    |                10 |              0.0671  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6723 | 15-20%                  |                10 |              0.06723 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6731 | >20%                    |                 5 |              0.13462 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7061 | 15-20%                  |                 2 |              0.35305 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7127 | 15-20%                  |                 5 |              0.14254 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7134 | <5%                     |                 5 |              0.14268 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7149 | <5%                     |                10 |              0.07149 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7174 | >20%                    |                10 |              0.07174 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7227 | 15-20%                  |                 5 |              0.14454 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7379 | <5%                     |                10 |              0.07379 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7388 | 5-10%                   |                 2 |              0.3694  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7421 | 10-15%                  |                10 |              0.07421 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.746  | >20%                    |                10 |              0.0746  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.75   | >20%                    |                 5 |              0.15    |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7673 | >20%                    |                10 |              0.07673 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8011 | <5%                     |                 2 |              0.40055 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8037 | >20%                    |                 5 |              0.16074 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8205 | >20%                    |                10 |              0.08205 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8209 | 10-15%                  |                10 |              0.08209 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8241 | <5%                     |                10 |              0.08241 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8295 | 15-20%                  |                10 |              0.08295 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8303 | >20%                    |                 5 |              0.16606 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8369 | 5-10%                   |                10 |              0.08369 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8453 | >20%                    |                10 |              0.08453 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8611 | 15-20%                  |                10 |              0.08611 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8678 | 10-15%                  |                10 |              0.08678 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8697 | <5%                     |                10 |              0.08697 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8807 | <5%                     |                10 |              0.08807 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8832 | 5-10%                   |                10 |              0.08832 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8834 | 5-10%                   |                10 |              0.08834 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8926 | 15-20%                  |                10 |              0.08926 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8967 | <5%                     |                10 |              0.08967 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8979 | <5%                     |                10 |              0.08979 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9358 | <5%                     |                10 |              0.09358 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9526 | 5-10%                   |                 5 |              0.19052 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9721 | <5%                     |                 2 |              0.48605 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.976  | 5-10%                   |                10 |              0.0976  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9889 | >20%                    |                10 |              0.09889 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9919 | 10-15%                  |                 5 |              0.19838 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9964 | 5-10%                   |                10 |              0.09964 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0007 | 10-15%                  |                 5 |              0.20014 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0029 | <5%                     |                10 |              0.10029 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0361 | <5%                     |                10 |              0.10361 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0461 | <5%                     |                10 |              0.10461 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0542 | 15-20%                  |                 2 |              0.5271  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0555 | 5-10%                   |                 5 |              0.2111  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1042 | >20%                    |                10 |              0.11042 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1836 | 10-15%                  |                10 |              0.11836 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3099 | >20%                    |                10 |              0.13099 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4173 | 5-10%                   |                10 |              0.14173 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4483 | 10-15%                  |                10 |              0.14483 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5096 | 15-20%                  |                 5 |              0.30192 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5249 | <5%                     |                10 |              0.15249 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5453 | 5-10%                   |                10 |              0.15453 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0773 | 10-15%                  |                10 |              0.20773 |