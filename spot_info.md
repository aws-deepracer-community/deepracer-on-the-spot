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

Data correct as of 2024-10-24 01:37:23.145291, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1379 | >20%                    |                 2 |              0.06895 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1471 | <5%                     |                 2 |              0.07355 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1687 | <5%                     |                 2 |              0.08435 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.171  | 5-10%                   |                 2 |              0.0855  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1715 | <5%                     |                 2 |              0.08575 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1798 | 5-10%                   |                 5 |              0.03596 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1813 | 10-15%                  |                 2 |              0.09065 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1822 | <5%                     |                 2 |              0.0911  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1958 | >20%                    |                 2 |              0.0979  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2154 | 15-20%                  |                 2 |              0.1077  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2189 | 5-10%                   |                 5 |              0.04378 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2219 | <5%                     |                 5 |              0.04438 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2273 | 15-20%                  |                 2 |              0.11365 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2307 | 5-10%                   |                 2 |              0.11535 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2311 | <5%                     |                 2 |              0.11555 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2491 | >20%                    |                 2 |              0.12455 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2494 | <5%                     |                 2 |              0.1247  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.259  | <5%                     |                 2 |              0.1295  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2709 | <5%                     |                 2 |              0.13545 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | 10-15%                  |                 2 |              0.1392  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | 15-20%                  |                 2 |              0.14135 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2828 | 10-15%                  |                 5 |              0.05656 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2878 | <5%                     |                 2 |              0.1439  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.298  | <5%                     |                10 |              0.0298  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2992 | 5-10%                   |                 5 |              0.05984 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3008 | >20%                    |                 5 |              0.06016 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3015 | >20%                    |                 2 |              0.15075 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3049 | <5%                     |                 5 |              0.06098 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3112 | 10-15%                  |                 5 |              0.06224 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3174 | 15-20%                  |                 2 |              0.1587  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3178 | 10-15%                  |                 5 |              0.06356 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3185 | >20%                    |                 5 |              0.0637  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3353 | 5-10%                   |                10 |              0.03353 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.339  | >20%                    |                 5 |              0.0678  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3419 | <5%                     |                 2 |              0.17095 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3465 | <5%                     |                 2 |              0.17325 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3542 | >20%                    |                 2 |              0.1771  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3657 | <5%                     |                10 |              0.03657 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3701 | <5%                     |                 5 |              0.07402 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3703 | 5-10%                   |                 2 |              0.18515 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3819 | >20%                    |                10 |              0.03819 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3852 | <5%                     |                 5 |              0.07704 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3858 | >20%                    |                 2 |              0.1929  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3867 | >20%                    |                10 |              0.03867 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3915 | 5-10%                   |                 2 |              0.19575 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3931 | 10-15%                  |                 2 |              0.19655 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3969 | 5-10%                   |                 5 |              0.07938 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4018 | 15-20%                  |                 2 |              0.2009  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4028 | >20%                    |                 2 |              0.2014  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4065 | <5%                     |                 5 |              0.0813  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4097 | 5-10%                   |                10 |              0.04097 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4163 | 15-20%                  |                 2 |              0.20815 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4178 | <5%                     |                 5 |              0.08356 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4218 | <5%                     |                10 |              0.04218 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4233 | 5-10%                   |                 2 |              0.21165 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4317 | <5%                     |                10 |              0.04317 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4361 | <5%                     |                 5 |              0.08722 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4401 | >20%                    |                 2 |              0.22005 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4434 | 15-20%                  |                 5 |              0.08868 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4462 | 15-20%                  |                 2 |              0.2231  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4491 | >20%                    |                 2 |              0.22455 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4493 | <5%                     |                10 |              0.04493 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4515 | >20%                    |                 2 |              0.22575 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4539 | 5-10%                   |                10 |              0.04539 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4543 | >20%                    |                 5 |              0.09086 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4586 | <5%                     |                 2 |              0.2293  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4634 | 5-10%                   |                 2 |              0.2317  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4668 | 5-10%                   |                 5 |              0.09336 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4693 | 15-20%                  |                 5 |              0.09386 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4695 | >20%                    |                 5 |              0.0939  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4771 | >20%                    |                10 |              0.04771 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.4799 | 15-20%                  |                 2 |              0.23995 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4878 | 5-10%                   |                 2 |              0.2439  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4935 | 10-15%                  |                10 |              0.04935 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5049 | 10-15%                  |                 5 |              0.10098 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5075 | 10-15%                  |                 5 |              0.1015  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5118 | >20%                    |                 5 |              0.10236 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5172 | >20%                    |                 2 |              0.2586  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5228 | >20%                    |                 5 |              0.10456 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5234 | 5-10%                   |                 5 |              0.10468 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5236 | <5%                     |                 5 |              0.10472 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5254 | 5-10%                   |                10 |              0.05254 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5283 | 5-10%                   |                 5 |              0.10566 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5348 | 15-20%                  |                 2 |              0.2674  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5387 | 5-10%                   |                 5 |              0.10774 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.539  | <5%                     |                 5 |              0.1078  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.54   | <5%                     |                 5 |              0.108   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5671 | 5-10%                   |                 5 |              0.11342 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.569  | 5-10%                   |                 5 |              0.1138  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5837 | 15-20%                  |                 5 |              0.11674 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.587  | >20%                    |                 5 |              0.1174  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5918 | 15-20%                  |                 5 |              0.11836 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5939 | >20%                    |                 2 |              0.29695 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5948 | <5%                     |                10 |              0.05948 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6022 | >20%                    |                 5 |              0.12044 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6115 | 15-20%                  |                10 |              0.06115 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6132 | >20%                    |                 5 |              0.12264 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6504 | >20%                    |                10 |              0.06504 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6536 | 5-10%                   |                10 |              0.06536 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6629 | 5-10%                   |                 5 |              0.13258 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6683 | 5-10%                   |                10 |              0.06683 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.673  | >20%                    |                10 |              0.0673  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6746 | >20%                    |                10 |              0.06746 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6803 | <5%                     |                10 |              0.06803 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6978 | >20%                    |                 2 |              0.3489  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7006 | 5-10%                   |                10 |              0.07006 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7016 | <5%                     |                10 |              0.07016 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.717  | >20%                    |                10 |              0.0717  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7242 | 10-15%                  |                10 |              0.07242 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.742  | <5%                     |                10 |              0.0742  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7552 | >20%                    |                 5 |              0.15104 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7807 | <5%                     |                10 |              0.07807 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7809 | 15-20%                  |                10 |              0.07809 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7835 | 10-15%                  |                 5 |              0.1567  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7857 | 5-10%                   |                 5 |              0.15714 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8206 | 5-10%                   |                10 |              0.08206 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8221 | >20%                    |                10 |              0.08221 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8647 | 10-15%                  |                10 |              0.08647 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8738 | >20%                    |                10 |              0.08738 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8808 | >20%                    |                10 |              0.08808 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8834 | <5%                     |                10 |              0.08834 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8883 | >20%                    |                 5 |              0.17766 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8942 | >20%                    |                 2 |              0.4471  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9052 | 5-10%                   |                10 |              0.09052 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.914  | 15-20%                  |                10 |              0.0914  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9341 | >20%                    |                10 |              0.09341 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9526 | <5%                     |                 2 |              0.4763  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9652 | 10-15%                  |                10 |              0.09652 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9812 | 15-20%                  |                 5 |              0.19624 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9921 | 10-15%                  |                10 |              0.09921 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0174 | 10-15%                  |                10 |              0.10174 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0452 | >20%                    |                10 |              0.10452 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0487 | 10-15%                  |                 5 |              0.20974 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1438 | >20%                    |                10 |              0.11438 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1671 | >20%                    |                10 |              0.11671 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.278  | <5%                     |                10 |              0.1278  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4314 | >20%                    |                10 |              0.14314 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5303 | 5-10%                   |                10 |              0.15303 |