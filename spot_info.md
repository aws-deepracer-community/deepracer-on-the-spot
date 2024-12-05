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

Data correct as of 2024-12-05 01:46:34.843853, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1316 | 10-15%                  |                 2 |              0.0658  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.177  | >20%                    |                 5 |              0.0354  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1784 | <5%                     |                 2 |              0.0892  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2053 | 10-15%                  |                 2 |              0.10265 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2107 | >20%                    |                 5 |              0.04214 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2124 | 5-10%                   |                 2 |              0.1062  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2304 | 15-20%                  |                 2 |              0.1152  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2311 | 5-10%                   |                 2 |              0.11555 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.232  | 15-20%                  |                 5 |              0.0464  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.235  | <5%                     |                 2 |              0.1175  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.238  | >20%                    |                 5 |              0.0476  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2381 | <5%                     |                 5 |              0.04762 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2405 | <5%                     |                 2 |              0.12025 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2484 | >20%                    |                 5 |              0.04968 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2586 | <5%                     |                10 |              0.02586 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2675 | 10-15%                  |                 2 |              0.13375 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2781 | 5-10%                   |                 2 |              0.13905 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2791 | <5%                     |                 2 |              0.13955 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2842 | >20%                    |                 5 |              0.05684 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2912 | 5-10%                   |                 2 |              0.1456  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.296  | 10-15%                  |                 2 |              0.148   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3125 | <5%                     |                 2 |              0.15625 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3196 | 5-10%                   |                 2 |              0.1598  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3314 | >20%                    |                 2 |              0.1657  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3327 | 5-10%                   |                 2 |              0.16635 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3394 | >20%                    |                 2 |              0.1697  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.34   | <5%                     |                 2 |              0.17    |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.343  | >20%                    |                10 |              0.0343  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3464 | <5%                     |                 5 |              0.06928 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3472 | >20%                    |                 2 |              0.1736  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3475 | >20%                    |                 5 |              0.0695  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3512 | <5%                     |                 2 |              0.1756  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3517 | <5%                     |                 5 |              0.07034 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3525 | 10-15%                  |                10 |              0.03525 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3563 | 15-20%                  |                 2 |              0.17815 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3633 | <5%                     |                 5 |              0.07266 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3636 | >20%                    |                 2 |              0.1818  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3707 | <5%                     |                10 |              0.03707 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3725 | >20%                    |                 2 |              0.18625 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3798 | 15-20%                  |                 2 |              0.1899  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3798 | 10-15%                  |                10 |              0.03798 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3842 | <5%                     |                 2 |              0.1921  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3932 | 15-20%                  |                 5 |              0.07864 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4065 | 5-10%                   |                 2 |              0.20325 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4079 | <5%                     |                 2 |              0.20395 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4108 | 5-10%                   |                 2 |              0.2054  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4226 | 5-10%                   |                 5 |              0.08452 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4255 | 5-10%                   |                 2 |              0.21275 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.441  | 15-20%                  |                 5 |              0.0882  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4448 | >20%                    |                 2 |              0.2224  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4509 | 10-15%                  |                 2 |              0.22545 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4558 | <5%                     |                 2 |              0.2279  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4577 | 10-15%                  |                 5 |              0.09154 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4663 | 15-20%                  |                 5 |              0.09326 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4728 | <5%                     |                 2 |              0.2364  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4738 | >20%                    |                 2 |              0.2369  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4781 | <5%                     |                 5 |              0.09562 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4874 | 5-10%                   |                 5 |              0.09748 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4917 | 5-10%                   |                 2 |              0.24585 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4971 | 10-15%                  |                 2 |              0.24855 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4989 | 5-10%                   |                 2 |              0.24945 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5016 | <5%                     |                 5 |              0.10032 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.503  | >20%                    |                 5 |              0.1006  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5062 | 10-15%                  |                 2 |              0.2531  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5127 | 15-20%                  |                 5 |              0.10254 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5172 | 10-15%                  |                10 |              0.05172 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5255 | >20%                    |                 5 |              0.1051  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5263 | 5-10%                   |                 5 |              0.10526 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5294 | <5%                     |                 5 |              0.10588 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.5337 |                         |                 2 |              0.26685 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5387 | <5%                     |                 5 |              0.10774 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5399 | >20%                    |                 5 |              0.10798 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5403 | 10-15%                  |                 5 |              0.10806 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5414 | <5%                     |                 5 |              0.10828 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5506 | >20%                    |                 2 |              0.2753  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5589 | 10-15%                  |                 5 |              0.11178 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5611 | <5%                     |                 5 |              0.11222 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5645 | >20%                    |                 5 |              0.1129  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5649 | 5-10%                   |                 5 |              0.11298 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5651 | 10-15%                  |                 5 |              0.11302 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.567  | >20%                    |                10 |              0.0567  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5696 | 15-20%                  |                 2 |              0.2848  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5746 | >20%                    |                 5 |              0.11492 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.6132 | 5-10%                   |                10 |              0.06132 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6163 | 10-15%                  |                10 |              0.06163 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.63   | 5-10%                   |                10 |              0.063   |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6314 | 5-10%                   |                10 |              0.06314 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6326 | >20%                    |                10 |              0.06326 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6348 | 15-20%                  |                10 |              0.06348 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6494 | >20%                    |                10 |              0.06494 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6655 | >20%                    |                10 |              0.06655 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6682 | >20%                    |                10 |              0.06682 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6726 | 5-10%                   |                 5 |              0.13452 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6739 | <5%                     |                 5 |              0.13478 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6753 | 10-15%                  |                10 |              0.06753 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6781 | >20%                    |                 2 |              0.33905 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6896 | 5-10%                   |                 5 |              0.13792 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6982 | <5%                     |                 5 |              0.13964 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7223 | 15-20%                  |                 5 |              0.14446 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.7233 |                         |                 5 |              0.14466 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7338 | 15-20%                  |                 5 |              0.14676 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7343 | 5-10%                   |                10 |              0.07343 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7348 | 5-10%                   |                 2 |              0.3674  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7539 | <5%                     |                 2 |              0.37695 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7755 | >20%                    |                10 |              0.07755 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7837 | <5%                     |                 5 |              0.15674 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7954 | <5%                     |                10 |              0.07954 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8134 | 5-10%                   |                10 |              0.08134 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8167 | >20%                    |                 5 |              0.16334 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8242 | 5-10%                   |                 5 |              0.16484 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8289 | 10-15%                  |                10 |              0.08289 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.833  | 5-10%                   |                10 |              0.0833  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.844  | 5-10%                   |                10 |              0.0844  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8473 | 10-15%                  |                10 |              0.08473 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8843 | >20%                    |                10 |              0.08843 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9378 | <5%                     |                10 |              0.09378 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9379 | 15-20%                  |                10 |              0.09379 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9382 | <5%                     |                 5 |              0.18764 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9533 | 5-10%                   |                10 |              0.09533 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9567 | 5-10%                   |                10 |              0.09567 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9614 | 5-10%                   |                10 |              0.09614 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9856 | 5-10%                   |                10 |              0.09856 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9975 | >20%                    |                10 |              0.09975 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0069 | <5%                     |                10 |              0.10069 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0204 | 15-20%                  |                10 |              0.10204 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0233 | >20%                    |                10 |              0.10233 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0638 | 5-10%                   |                10 |              0.10638 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0861 | <5%                     |                10 |              0.10861 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1055 | <5%                     |                10 |              0.11055 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.1497 |                         |                10 |              0.11497 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1787 | 10-15%                  |                10 |              0.11787 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1843 | 15-20%                  |                10 |              0.11843 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3627 | >20%                    |                10 |              0.13627 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.455  | >20%                    |                10 |              0.1455  |