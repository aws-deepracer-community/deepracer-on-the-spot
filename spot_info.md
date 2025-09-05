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

Data correct as of 2025-09-05 01:44:18.860978, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1181 | >20%                    |                 2 |              0.05905 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1634 | >20%                    |                 2 |              0.0817  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1658 | >20%                    |                 2 |              0.0829  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2045 | >20%                    |                 5 |              0.0409  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2127 | 10-15%                  |                 2 |              0.10635 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2154 | >20%                    |                 2 |              0.1077  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2188 | >20%                    |                 2 |              0.1094  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2263 | >20%                    |                 2 |              0.11315 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2291 | >20%                    |                 5 |              0.04582 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2297 | 10-15%                  |                 5 |              0.04594 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2315 | >20%                    |                 2 |              0.11575 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2356 | >20%                    |                 5 |              0.04712 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2708 | >20%                    |                 2 |              0.1354  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2713 | 15-20%                  |                 5 |              0.05426 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2818 | >20%                    |                 2 |              0.1409  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2914 | 15-20%                  |                 2 |              0.1457  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3096 | 5-10%                   |                 2 |              0.1548  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3154 | >20%                    |                 2 |              0.1577  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3171 | 10-15%                  |                 2 |              0.15855 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3213 | 5-10%                   |                 2 |              0.16065 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.327  | >20%                    |                 2 |              0.1635  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3325 | >20%                    |                10 |              0.03325 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3358 | >20%                    |                 2 |              0.1679  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3368 | >20%                    |                 2 |              0.1684  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3519 | >20%                    |                 2 |              0.17595 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3549 | >20%                    |                 5 |              0.07098 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3594 | >20%                    |                 5 |              0.07188 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3611 | >20%                    |                 2 |              0.18055 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3612 | 15-20%                  |                10 |              0.03612 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3615 | 10-15%                  |                 5 |              0.0723  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3631 | >20%                    |                10 |              0.03631 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3681 | >20%                    |                 2 |              0.18405 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3771 | >20%                    |                 2 |              0.18855 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3784 | >20%                    |                 5 |              0.07568 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3785 | 15-20%                  |                 2 |              0.18925 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3796 | 10-15%                  |                 2 |              0.1898  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3836 | >20%                    |                 2 |              0.1918  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4012 | >20%                    |                 5 |              0.08024 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.414  | 15-20%                  |                 2 |              0.207   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4182 | >20%                    |                 5 |              0.08364 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4206 | >20%                    |                 5 |              0.08412 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4219 | >20%                    |                 5 |              0.08438 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4234 | >20%                    |                 5 |              0.08468 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4301 | 15-20%                  |                10 |              0.04301 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4386 | 10-15%                  |                 2 |              0.2193  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4443 | >20%                    |                 2 |              0.22215 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4449 | >20%                    |                 2 |              0.22245 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4555 | >20%                    |                 5 |              0.0911  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4568 | 5-10%                   |                 2 |              0.2284  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4582 | 10-15%                  |                 2 |              0.2291  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4593 | 15-20%                  |                 2 |              0.22965 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.462  | 15-20%                  |                 2 |              0.231   |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4654 | <5%                     |                 2 |              0.2327  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4745 | >20%                    |                 2 |              0.23725 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4745 | >20%                    |                 5 |              0.0949  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4821 | >20%                    |                 2 |              0.24105 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4833 | >20%                    |                 5 |              0.09666 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4912 | >20%                    |                 5 |              0.09824 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4922 | >20%                    |                10 |              0.04922 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5028 | >20%                    |                 5 |              0.10056 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5038 | >20%                    |                 2 |              0.2519  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.512  | 5-10%                   |                 5 |              0.1024  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5146 | >20%                    |                 5 |              0.10292 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5196 | >20%                    |                 5 |              0.10392 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5208 | >20%                    |                 2 |              0.2604  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.522  | >20%                    |                 2 |              0.261   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5221 | >20%                    |                 2 |              0.26105 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5246 | 10-15%                  |                 2 |              0.2623  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5332 | 10-15%                  |                 2 |              0.2666  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5431 | <5%                     |                 2 |              0.27155 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5447 | >20%                    |                 5 |              0.10894 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5493 | >20%                    |                 2 |              0.27465 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5551 | 5-10%                   |                 2 |              0.27755 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5626 | >20%                    |                 2 |              0.2813  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5628 | >20%                    |                 2 |              0.2814  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5629 | >20%                    |                 2 |              0.28145 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5647 | >20%                    |                 5 |              0.11294 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5715 | >20%                    |                 2 |              0.28575 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5771 | >20%                    |                 5 |              0.11542 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5834 | >20%                    |                 5 |              0.11668 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.59   | >20%                    |                 5 |              0.118   |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5906 | 15-20%                  |                 5 |              0.11812 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.591  | 10-15%                  |                 5 |              0.1182  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5961 | >20%                    |                 5 |              0.11922 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6161 | >20%                    |                 5 |              0.12322 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6199 | 15-20%                  |                 5 |              0.12398 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6211 | >20%                    |                 5 |              0.12422 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6316 | 15-20%                  |                 5 |              0.12632 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6329 | 10-15%                  |                 5 |              0.12658 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6403 | >20%                    |                 5 |              0.12806 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6461 | 15-20%                  |                 2 |              0.32305 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6471 | >20%                    |                 2 |              0.32355 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6573 | >20%                    |                 5 |              0.13146 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6602 | >20%                    |                 5 |              0.13204 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6654 | 15-20%                  |                 5 |              0.13308 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6743 | 5-10%                   |                10 |              0.06743 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6759 | >20%                    |                 5 |              0.13518 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6763 | 15-20%                  |                10 |              0.06763 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6781 | >20%                    |                 2 |              0.33905 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6967 | >20%                    |                 5 |              0.13934 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7057 | >20%                    |                 5 |              0.14114 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7121 | >20%                    |                 5 |              0.14242 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7281 | >20%                    |                 5 |              0.14562 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7303 | >20%                    |                 5 |              0.14606 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7378 | >20%                    |                 5 |              0.14756 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7398 | >20%                    |                10 |              0.07398 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7442 | >20%                    |                10 |              0.07442 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7462 | >20%                    |                 5 |              0.14924 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7519 | >20%                    |                10 |              0.07519 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7565 | >20%                    |                10 |              0.07565 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7589 | >20%                    |                 5 |              0.15178 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.76   | >20%                    |                 5 |              0.152   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7606 | >20%                    |                10 |              0.07606 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7714 | >20%                    |                10 |              0.07714 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7889 | >20%                    |                10 |              0.07889 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.789  | 15-20%                  |                10 |              0.0789  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8139 | 10-15%                  |                10 |              0.08139 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.818  | >20%                    |                 5 |              0.1636  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8249 | 10-15%                  |                10 |              0.08249 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8357 | 15-20%                  |                10 |              0.08357 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8556 | 10-15%                  |                 2 |              0.4278  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8655 | 10-15%                  |                10 |              0.08655 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.877  | <5%                     |                10 |              0.0877  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8875 | >20%                    |                10 |              0.08875 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9165 | <5%                     |                10 |              0.09165 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9221 | 5-10%                   |                10 |              0.09221 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9307 | 5-10%                   |                10 |              0.09307 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9406 | 15-20%                  |                10 |              0.09406 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9492 | >20%                    |                10 |              0.09492 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9568 | <5%                     |                10 |              0.09568 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9604 | 15-20%                  |                10 |              0.09604 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9607 | 10-15%                  |                10 |              0.09607 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9684 | >20%                    |                 2 |              0.4842  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9748 | >20%                    |                 5 |              0.19496 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9766 | >20%                    |                10 |              0.09766 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.978  | >20%                    |                10 |              0.0978  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0006 | 5-10%                   |                10 |              0.10006 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0106 | 15-20%                  |                10 |              0.10106 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0134 | 15-20%                  |                10 |              0.10134 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0142 | >20%                    |                10 |              0.10142 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0328 | 15-20%                  |                10 |              0.10328 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0352 | >20%                    |                10 |              0.10352 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0396 | >20%                    |                10 |              0.10396 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0476 | >20%                    |                 5 |              0.20952 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0499 | <5%                     |                10 |              0.10499 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0765 | >20%                    |                 2 |              0.53825 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0969 | >20%                    |                 5 |              0.21938 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1038 | 15-20%                  |                10 |              0.11038 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1105 | >20%                    |                10 |              0.11105 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1248 | 10-15%                  |                 5 |              0.22496 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1397 | 15-20%                  |                10 |              0.11397 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.1491 | >20%                    |                10 |              0.11491 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1512 | 10-15%                  |                 2 |              0.5756  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1576 | >20%                    |                 5 |              0.23152 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1619 | >20%                    |                10 |              0.11619 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1675 | 5-10%                   |                10 |              0.11675 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2098 | >20%                    |                 2 |              0.6049  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.303  | 5-10%                   |                 2 |              0.6515  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3165 | 10-15%                  |                 5 |              0.2633  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3487 | >20%                    |                 5 |              0.26974 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3501 | 10-15%                  |                10 |              0.13501 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4293 | >20%                    |                10 |              0.14293 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4452 | 10-15%                  |                 5 |              0.28904 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4932 | >20%                    |                10 |              0.14932 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5732 | >20%                    |                10 |              0.15732 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5899 | >20%                    |                10 |              0.15899 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5964 | >20%                    |                10 |              0.15964 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6111 | 15-20%                  |                10 |              0.16111 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6142 | >20%                    |                10 |              0.16142 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2929 | 10-15%                  |                10 |              0.22929 |