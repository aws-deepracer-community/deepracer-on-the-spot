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

Data correct as of 2025-08-15 01:59:17.775234, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1011 | >20%                    |                 2 |              0.05055 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1665 | <5%                     |                 5 |              0.0333  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1903 | <5%                     |                 5 |              0.03806 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1954 | >20%                    |                 2 |              0.0977  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2058 | 15-20%                  |                 2 |              0.1029  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 15-20%                  |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2348 | 5-10%                   |                 2 |              0.1174  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2439 | >20%                    |                 2 |              0.12195 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2479 | 15-20%                  |                 2 |              0.12395 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2587 | >20%                    |                 2 |              0.12935 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2655 | >20%                    |                 2 |              0.13275 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2975 | >20%                    |                 2 |              0.14875 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3051 | >20%                    |                 2 |              0.15255 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3069 | <5%                     |                 2 |              0.15345 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3153 | 5-10%                   |                 2 |              0.15765 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.316  | 15-20%                  |                 2 |              0.158   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3234 | 5-10%                   |                 2 |              0.1617  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3307 | 10-15%                  |                 2 |              0.16535 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3356 | >20%                    |                 2 |              0.1678  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3512 | >20%                    |                 5 |              0.07024 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3554 | >20%                    |                 2 |              0.1777  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3585 | 15-20%                  |                 2 |              0.17925 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.36   | >20%                    |                 2 |              0.18    |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.361  | >20%                    |                 2 |              0.1805  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3646 | <5%                     |                 2 |              0.1823  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3739 | 15-20%                  |                 2 |              0.18695 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3825 | >20%                    |                 2 |              0.19125 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3926 | >20%                    |                 5 |              0.07852 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3962 | >20%                    |                 5 |              0.07924 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3995 | 15-20%                  |                 5 |              0.0799  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4146 | >20%                    |                 5 |              0.08292 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4236 | >20%                    |                 5 |              0.08472 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4294 | <5%                     |                 2 |              0.2147  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4296 | >20%                    |                 5 |              0.08592 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4317 | 5-10%                   |                 5 |              0.08634 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4342 | >20%                    |                 5 |              0.08684 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4347 | >20%                    |                 5 |              0.08694 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4516 | >20%                    |                 2 |              0.2258  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4525 | >20%                    |                 2 |              0.22625 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4617 | <5%                     |                 2 |              0.23085 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.463  | 5-10%                   |                 2 |              0.2315  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4634 | >20%                    |                 2 |              0.2317  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.465  | >20%                    |                 2 |              0.2325  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4659 | >20%                    |                 5 |              0.09318 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4673 | >20%                    |                 2 |              0.23365 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4674 | 5-10%                   |                 2 |              0.2337  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4693 | >20%                    |                 2 |              0.23465 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4764 | >20%                    |                 5 |              0.09528 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4855 | 10-15%                  |                 2 |              0.24275 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.486  | >20%                    |                 2 |              0.243   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4972 | 5-10%                   |                 5 |              0.09944 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.498  | >20%                    |                 5 |              0.0996  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.505  | >20%                    |                 2 |              0.2525  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5077 | <5%                     |                 2 |              0.25385 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5098 | 10-15%                  |                 5 |              0.10196 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5126 | >20%                    |                 2 |              0.2563  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5302 | >20%                    |                 5 |              0.10604 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5337 | >20%                    |                 2 |              0.26685 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5355 | >20%                    |                 5 |              0.1071  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5426 | 10-15%                  |                 5 |              0.10852 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5451 | >20%                    |                 2 |              0.27255 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.546  | >20%                    |                 5 |              0.1092  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5596 | >20%                    |                 2 |              0.2798  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5637 | >20%                    |                 2 |              0.28185 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.568  | >20%                    |                 2 |              0.284   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5708 | 15-20%                  |                10 |              0.05708 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5747 | >20%                    |                 5 |              0.11494 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5795 | >20%                    |                 5 |              0.1159  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5849 | 15-20%                  |                 2 |              0.29245 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5856 | 5-10%                   |                 5 |              0.11712 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5873 | 5-10%                   |                 2 |              0.29365 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5918 | 15-20%                  |                10 |              0.05918 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5997 | >20%                    |                 5 |              0.11994 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6019 | >20%                    |                 5 |              0.12038 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6095 | >20%                    |                 2 |              0.30475 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6134 | >20%                    |                 5 |              0.12268 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6247 | >20%                    |                 5 |              0.12494 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6291 | 10-15%                  |                 5 |              0.12582 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6326 | 5-10%                   |                 5 |              0.12652 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6362 | >20%                    |                 2 |              0.3181  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.646  | 10-15%                  |                 5 |              0.1292  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6476 | >20%                    |                 5 |              0.12952 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6488 | >20%                    |                 5 |              0.12976 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6598 | <5%                     |                 5 |              0.13196 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6632 | <5%                     |                10 |              0.06632 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6687 | >20%                    |                 5 |              0.13374 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6693 | <5%                     |                 5 |              0.13386 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.677  | 10-15%                  |                 2 |              0.3385  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6814 | 5-10%                   |                 5 |              0.13628 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6851 | 15-20%                  |                 2 |              0.34255 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6906 | >20%                    |                 5 |              0.13812 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6912 | 15-20%                  |                 5 |              0.13824 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6969 | 15-20%                  |                10 |              0.06969 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7081 | >20%                    |                10 |              0.07081 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7127 | >20%                    |                10 |              0.07127 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.72   | >20%                    |                 2 |              0.36    |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7236 | >20%                    |                10 |              0.07236 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.727  | 15-20%                  |                10 |              0.0727  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7367 | >20%                    |                 5 |              0.14734 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7399 | >20%                    |                 5 |              0.14798 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.743  | <5%                     |                10 |              0.0743  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7442 | 15-20%                  |                 2 |              0.3721  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7615 | >20%                    |                10 |              0.07615 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.765  | 15-20%                  |                10 |              0.0765  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7764 | >20%                    |                 5 |              0.15528 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7816 | >20%                    |                10 |              0.07816 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7837 | 15-20%                  |                10 |              0.07837 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7871 | >20%                    |                 5 |              0.15742 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8029 | >20%                    |                 5 |              0.16058 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8265 | >20%                    |                 5 |              0.1653  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8294 | >20%                    |                 5 |              0.16588 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8315 | >20%                    |                10 |              0.08315 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8338 | >20%                    |                10 |              0.08338 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8599 | >20%                    |                10 |              0.08599 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8606 | >20%                    |                10 |              0.08606 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8689 | >20%                    |                 2 |              0.43445 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8732 | 5-10%                   |                10 |              0.08732 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8838 | <5%                     |                10 |              0.08838 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8892 | <5%                     |                 5 |              0.17784 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8995 | 5-10%                   |                10 |              0.08995 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9023 | 5-10%                   |                10 |              0.09023 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9059 | 5-10%                   |                 5 |              0.18118 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.906  | 5-10%                   |                10 |              0.0906  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9199 | 15-20%                  |                10 |              0.09199 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9264 | 5-10%                   |                10 |              0.09264 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9429 | 5-10%                   |                10 |              0.09429 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9432 | 15-20%                  |                10 |              0.09432 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.948  | >20%                    |                 5 |              0.1896  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9492 | 15-20%                  |                10 |              0.09492 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9505 | >20%                    |                 2 |              0.47525 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9549 | >20%                    |                10 |              0.09549 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9935 | <5%                     |                10 |              0.09935 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9962 | >20%                    |                10 |              0.09962 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0236 | 5-10%                   |                10 |              0.10236 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0308 | 15-20%                  |                10 |              0.10308 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0333 | 15-20%                  |                10 |              0.10333 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0335 | 5-10%                   |                10 |              0.10335 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0648 | <5%                     |                10 |              0.10648 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0767 | >20%                    |                10 |              0.10767 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0873 | <5%                     |                10 |              0.10873 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0938 | >20%                    |                10 |              0.10938 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0944 | 15-20%                  |                10 |              0.10944 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1099 | >20%                    |                10 |              0.11099 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1239 | >20%                    |                 5 |              0.22478 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1353 | >20%                    |                10 |              0.11353 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1653 | <5%                     |                 2 |              0.58265 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1749 | >20%                    |                10 |              0.11749 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1825 | >20%                    |                10 |              0.11825 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1979 | >20%                    |                 2 |              0.59895 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.204  | >20%                    |                 2 |              0.602   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.214  | >20%                    |                10 |              0.1214  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2453 | >20%                    |                 5 |              0.24906 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2696 | >20%                    |                 5 |              0.25392 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2854 | 15-20%                  |                 5 |              0.25708 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.326  | 5-10%                   |                10 |              0.1326  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.351  | >20%                    |                 5 |              0.2702  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.4004 | 5-10%                   |                 2 |              0.7002  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4709 | 15-20%                  |                 5 |              0.29418 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4758 | >20%                    |                10 |              0.14758 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5064 | >20%                    |                10 |              0.15064 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.517  | <5%                     |                10 |              0.1517  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5234 | <5%                     |                 5 |              0.30468 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5311 | >20%                    |                10 |              0.15311 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5812 | 10-15%                  |                10 |              0.15812 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.605  | >20%                    |                10 |              0.1605  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.211  | <5%                     |                10 |              0.2211  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2488 | 5-10%                   |                10 |              0.22488 |