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

Data correct as of 2026-03-13 02:31:28.568415, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1028 | >20%                    |                 2 |              0.0514  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1321 | 10-15%                  |                 2 |              0.06605 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.163  | 15-20%                  |                 5 |              0.0326  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1737 | >20%                    |                 2 |              0.08685 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1866 | <5%                     |                 2 |              0.0933  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2207 | 10-15%                  |                 2 |              0.11035 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2242 | >20%                    |                 5 |              0.04484 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2413 | >20%                    |                 2 |              0.12065 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.245  | 15-20%                  |                10 |              0.0245  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2516 | >20%                    |                 2 |              0.1258  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2531 | >20%                    |                 2 |              0.12655 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2596 | 5-10%                   |                10 |              0.02596 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.262  | >20%                    |                 2 |              0.131   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.2624 | <5%                     |                 2 |              0.1312  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2675 | 15-20%                  |                 2 |              0.13375 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2782 | >20%                    |                 2 |              0.1391  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2866 | 10-15%                  |                 2 |              0.1433  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2922 | >20%                    |                 2 |              0.1461  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2993 | >20%                    |                 2 |              0.14965 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3018 | 15-20%                  |                 2 |              0.1509  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3031 | 5-10%                   |                 5 |              0.06062 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3046 | >20%                    |                 2 |              0.1523  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3058 | >20%                    |                 2 |              0.1529  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.306  | >20%                    |                 2 |              0.153   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3106 | >20%                    |                 5 |              0.06212 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3117 | 5-10%                   |                 2 |              0.15585 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3119 | >20%                    |                 5 |              0.06238 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3246 | 5-10%                   |                10 |              0.03246 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3326 | <5%                     |                 5 |              0.06652 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3397 | >20%                    |                 5 |              0.06794 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3418 | >20%                    |                 5 |              0.06836 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3476 | <5%                     |                 2 |              0.1738  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3506 | <5%                     |                 5 |              0.07012 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3551 | 5-10%                   |                 2 |              0.17755 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3555 | 10-15%                  |                 2 |              0.17775 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3616 | >20%                    |                10 |              0.03616 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3664 | <5%                     |                 5 |              0.07328 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3678 | >20%                    |                 2 |              0.1839  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.3682 | >20%                    |                10 |              0.03682 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3698 | 5-10%                   |                 5 |              0.07396 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.37   | >20%                    |                 5 |              0.074   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3733 | 5-10%                   |                 2 |              0.18665 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3741 | 15-20%                  |                 2 |              0.18705 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3779 | >20%                    |                 5 |              0.07558 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3786 | >20%                    |                 5 |              0.07572 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3835 | >20%                    |                10 |              0.03835 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3892 | <5%                     |                 5 |              0.07784 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3923 | 15-20%                  |                 5 |              0.07846 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3925 | >20%                    |                 5 |              0.0785  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3937 | >20%                    |                 2 |              0.19685 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3968 | 5-10%                   |                 2 |              0.1984  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3976 | 5-10%                   |                 2 |              0.1988  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4094 | 15-20%                  |                 5 |              0.08188 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4106 | >20%                    |                 2 |              0.2053  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.411  | 15-20%                  |                10 |              0.0411  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4127 | 5-10%                   |                 5 |              0.08254 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | >20%                    |                 2 |              0.2083  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4208 | 15-20%                  |                 2 |              0.2104  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4224 | >20%                    |                 5 |              0.08448 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4333 | <5%                     |                 2 |              0.21665 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4341 | >20%                    |                10 |              0.04341 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4377 | 10-15%                  |                 5 |              0.08754 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4387 | 15-20%                  |                 2 |              0.21935 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4403 | >20%                    |                10 |              0.04403 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4448 | 15-20%                  |                 2 |              0.2224  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4462 | >20%                    |                 2 |              0.2231  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4467 | >20%                    |                 2 |              0.22335 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4478 | <5%                     |                10 |              0.04478 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4488 | >20%                    |                 2 |              0.2244  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4503 | 15-20%                  |                 5 |              0.09006 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4557 | >20%                    |                 5 |              0.09114 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4607 | >20%                    |                 5 |              0.09214 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4688 | >20%                    |                 5 |              0.09376 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4715 | >20%                    |                 5 |              0.0943  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4737 | <5%                     |                10 |              0.04737 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4795 | 5-10%                   |                 2 |              0.23975 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4796 | >20%                    |                 5 |              0.09592 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4839 | 5-10%                   |                 2 |              0.24195 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4855 | >20%                    |                10 |              0.04855 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4863 | >20%                    |                 2 |              0.24315 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5078 | >20%                    |                 2 |              0.2539  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.508  | >20%                    |                 2 |              0.254   |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5094 | 5-10%                   |                 5 |              0.10188 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5136 | 15-20%                  |                 5 |              0.10272 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.518  | <5%                     |                 5 |              0.1036  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.525  | >20%                    |                 2 |              0.2625  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5261 | >20%                    |                 5 |              0.10522 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5335 | >20%                    |                 5 |              0.1067  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5367 | >20%                    |                10 |              0.05367 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.543  | <5%                     |                10 |              0.0543  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5452 | >20%                    |                 2 |              0.2726  |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5486 |                         |                 2 |              0.2743  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5525 | >20%                    |                 5 |              0.1105  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5534 | 15-20%                  |                10 |              0.05534 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5562 | >20%                    |                 5 |              0.11124 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5579 | >20%                    |                 2 |              0.27895 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5738 | >20%                    |                 5 |              0.11476 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5801 | >20%                    |                10 |              0.05801 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5811 | <5%                     |                10 |              0.05811 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5894 | 15-20%                  |                10 |              0.05894 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5895 | <5%                     |                 5 |              0.1179  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5902 | >20%                    |                 2 |              0.2951  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5904 | 5-10%                   |                 2 |              0.2952  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5938 | >20%                    |                 5 |              0.11876 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5939 | >20%                    |                 5 |              0.11878 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5945 | <5%                     |                10 |              0.05945 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5981 | 5-10%                   |                 5 |              0.11962 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.607  | >20%                    |                10 |              0.0607  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6113 | >20%                    |                10 |              0.06113 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6137 | 5-10%                   |                 2 |              0.30685 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6202 | 15-20%                  |                10 |              0.06202 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6237 | >20%                    |                 5 |              0.12474 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.625  | >20%                    |                 5 |              0.125   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6284 | 15-20%                  |                 2 |              0.3142  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6287 | >20%                    |                10 |              0.06287 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6393 | >20%                    |                 2 |              0.31965 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6399 | 15-20%                  |                10 |              0.06399 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6516 | 5-10%                   |                 5 |              0.13032 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.656  | >20%                    |                 5 |              0.1312  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6627 | >20%                    |                 2 |              0.33135 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6699 | >20%                    |                10 |              0.06699 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6708 | >20%                    |                 5 |              0.13416 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6838 | 10-15%                  |                 5 |              0.13676 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6848 | >20%                    |                10 |              0.06848 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6946 |                         |                 5 |              0.13892 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6995 | <5%                     |                10 |              0.06995 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7049 | >20%                    |                10 |              0.07049 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7135 | >20%                    |                 5 |              0.1427  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7167 | >20%                    |                 5 |              0.14334 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7392 | >20%                    |                 5 |              0.14784 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7453 | >20%                    |                 5 |              0.14906 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7475 | 10-15%                  |                10 |              0.07475 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7504 | >20%                    |                10 |              0.07504 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7673 | >20%                    |                10 |              0.07673 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.785  | >20%                    |                 5 |              0.157   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7876 | 10-15%                  |                10 |              0.07876 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.792  | <5%                     |                10 |              0.0792  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7963 | <5%                     |                 5 |              0.15926 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8086 | 5-10%                   |                10 |              0.08086 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8173 | >20%                    |                 5 |              0.16346 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8233 | >20%                    |                 5 |              0.16466 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8298 | >20%                    |                10 |              0.08298 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8362 | >20%                    |                10 |              0.08362 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8391 | >20%                    |                 2 |              0.41955 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.842  | <5%                     |                10 |              0.0842  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.846  | <5%                     |                 5 |              0.1692  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8668 | >20%                    |                10 |              0.08668 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8696 | >20%                    |                10 |              0.08696 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8915 | <5%                     |                10 |              0.08915 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8958 | 5-10%                   |                10 |              0.08958 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9122 | >20%                    |                 5 |              0.18244 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9134 | >20%                    |                10 |              0.09134 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.924  | >20%                    |                 2 |              0.462   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9346 | >20%                    |                10 |              0.09346 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9403 | >20%                    |                 5 |              0.18806 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9464 | >20%                    |                10 |              0.09464 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9493 | 10-15%                  |                 2 |              0.47465 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9591 | >20%                    |                10 |              0.09591 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9648 | >20%                    |                 2 |              0.4824  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9657 | >20%                    |                10 |              0.09657 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9724 | 15-20%                  |                10 |              0.09724 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9806 | >20%                    |                 2 |              0.4903  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9847 | 5-10%                   |                 5 |              0.19694 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0041 | 5-10%                   |                10 |              0.10041 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0247 | >20%                    |                10 |              0.10247 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.057  |                         |                10 |              0.1057  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0612 | 15-20%                  |                10 |              0.10612 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0801 | >20%                    |                10 |              0.10801 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1602 | <5%                     |                10 |              0.11602 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.176  | 10-15%                  |                 5 |              0.2352  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2615 | >20%                    |                 2 |              0.63075 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2616 | >20%                    |                10 |              0.12616 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2632 | 10-15%                  |                10 |              0.12632 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.422  | 15-20%                  |                10 |              0.1422  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4343 | >20%                    |                 2 |              0.71715 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4583 | 10-15%                  |                 5 |              0.29166 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4609 | >20%                    |                 5 |              0.29218 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5721 | >20%                    |                10 |              0.15721 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.5801 | <5%                     |                 5 |              0.31602 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6099 | >20%                    |                10 |              0.16099 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.7234 | >20%                    |                 2 |              0.8617  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3046 | 10-15%                  |                10 |              0.23046 |