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

Data correct as of 2025-11-13 01:54:21.368053, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1202 | 15-20%                  |                 2 |              0.0601  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1468 | >20%                    |                 2 |              0.0734  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1627 | 5-10%                   |                 5 |              0.03254 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1919 | <5%                     |                 2 |              0.09595 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2141 | >20%                    |                 2 |              0.10705 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2152 | 10-15%                  |                 2 |              0.1076  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2164 | >20%                    |                 5 |              0.04328 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2268 | <5%                     |                 2 |              0.1134  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2324 | >20%                    |                 5 |              0.04648 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | >20%                    |                 2 |              0.1197  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.244  | >20%                    |                 2 |              0.122   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2467 | >20%                    |                 2 |              0.12335 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2477 | 10-15%                  |                10 |              0.02477 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2481 | >20%                    |                 2 |              0.12405 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2683 | <5%                     |                 2 |              0.13415 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2722 | 10-15%                  |                 2 |              0.1361  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2741 | >20%                    |                 2 |              0.13705 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2802 | 5-10%                   |                 2 |              0.1401  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2805 | >20%                    |                 2 |              0.14025 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2991 | >20%                    |                 5 |              0.05982 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3016 | 15-20%                  |                 2 |              0.1508  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3096 | 10-15%                  |                 5 |              0.06192 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3142 | >20%                    |                 2 |              0.1571  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3178 | >20%                    |                 2 |              0.1589  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.329  | >20%                    |                 2 |              0.1645  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3294 | >20%                    |                 5 |              0.06588 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3373 | >20%                    |                 2 |              0.16865 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3493 | >20%                    |                 5 |              0.06986 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3531 | 10-15%                  |                 2 |              0.17655 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3592 | 5-10%                   |                 2 |              0.1796  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3608 | >20%                    |                 2 |              0.1804  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3639 | >20%                    |                 2 |              0.18195 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3644 | >20%                    |                10 |              0.03644 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3665 | <5%                     |                 2 |              0.18325 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3678 | 10-15%                  |                 2 |              0.1839  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3679 | <5%                     |                 2 |              0.18395 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3687 | 15-20%                  |                 5 |              0.07374 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3689 | 15-20%                  |                 2 |              0.18445 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3698 | >20%                    |                 5 |              0.07396 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3703 | 15-20%                  |                10 |              0.03703 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3784 | >20%                    |                 5 |              0.07568 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3788 | >20%                    |                10 |              0.03788 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3813 | <5%                     |                 5 |              0.07626 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3898 | >20%                    |                 2 |              0.1949  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3933 | 15-20%                  |                 2 |              0.19665 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3949 | 5-10%                   |                10 |              0.03949 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4037 | 15-20%                  |                 5 |              0.08074 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4067 | >20%                    |                 2 |              0.20335 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4082 | >20%                    |                 2 |              0.2041  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4102 | >20%                    |                 2 |              0.2051  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4115 | 15-20%                  |                 5 |              0.0823  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4116 | >20%                    |                 2 |              0.2058  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4153 | >20%                    |                10 |              0.04153 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4194 | 10-15%                  |                 5 |              0.08388 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4242 | >20%                    |                 5 |              0.08484 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.43   | >20%                    |                 2 |              0.215   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4329 | <5%                     |                 2 |              0.21645 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4356 | 15-20%                  |                 2 |              0.2178  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4394 | 10-15%                  |                 5 |              0.08788 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4419 | 10-15%                  |                 2 |              0.22095 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4421 | >20%                    |                 5 |              0.08842 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4438 | >20%                    |                 2 |              0.2219  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.445  | >20%                    |                 5 |              0.089   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4473 | >20%                    |                10 |              0.04473 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4536 | 5-10%                   |                 2 |              0.2268  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4562 | >20%                    |                 5 |              0.09124 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4566 | 15-20%                  |                 5 |              0.09132 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4577 | >20%                    |                 5 |              0.09154 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4588 | >20%                    |                 5 |              0.09176 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4592 | >20%                    |                 2 |              0.2296  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4599 | >20%                    |                 2 |              0.22995 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4644 | >20%                    |                 2 |              0.2322  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4662 | >20%                    |                 5 |              0.09324 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4738 | 15-20%                  |                 5 |              0.09476 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4755 | >20%                    |                 5 |              0.0951  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.477  | >20%                    |                 5 |              0.0954  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4814 | 15-20%                  |                 5 |              0.09628 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4821 | >20%                    |                 2 |              0.24105 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4827 | <5%                     |                10 |              0.04827 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4879 | 10-15%                  |                10 |              0.04879 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4951 | >20%                    |                 2 |              0.24755 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4975 | >20%                    |                 5 |              0.0995  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5013 | >20%                    |                 5 |              0.10026 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5139 | >20%                    |                10 |              0.05139 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5155 | 5-10%                   |                10 |              0.05155 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5252 | 10-15%                  |                 2 |              0.2626  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5255 | >20%                    |                 5 |              0.1051  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5311 | 10-15%                  |                 2 |              0.26555 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5364 | >20%                    |                 5 |              0.10728 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5384 | <5%                     |                10 |              0.05384 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5436 | 15-20%                  |                 5 |              0.10872 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5495 | >20%                    |                10 |              0.05495 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5611 | 10-15%                  |                 5 |              0.11222 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5614 | >20%                    |                 5 |              0.11228 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5664 | 10-15%                  |                 5 |              0.11328 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5726 | 15-20%                  |                 5 |              0.11452 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5869 | 5-10%                   |                 5 |              0.11738 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5888 | >20%                    |                 2 |              0.2944  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5895 | 10-15%                  |                 5 |              0.1179  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5978 | >20%                    |                 2 |              0.2989  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5989 | 10-15%                  |                10 |              0.05989 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6079 | >20%                    |                 2 |              0.30395 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6106 | 10-15%                  |                 5 |              0.12212 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6221 | 10-15%                  |                10 |              0.06221 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6253 | >20%                    |                10 |              0.06253 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6267 | >20%                    |                 5 |              0.12534 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6274 | >20%                    |                 2 |              0.3137  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6303 | >20%                    |                 5 |              0.12606 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6376 | >20%                    |                 5 |              0.12752 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.642  | >20%                    |                 2 |              0.321   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6422 | 15-20%                  |                10 |              0.06422 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6494 | >20%                    |                10 |              0.06494 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6496 | >20%                    |                 5 |              0.12992 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6613 | 10-15%                  |                 2 |              0.33065 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6684 | >20%                    |                 2 |              0.3342  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6727 | >20%                    |                 5 |              0.13454 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6766 | 5-10%                   |                 2 |              0.3383  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6845 | >20%                    |                10 |              0.06845 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6871 | >20%                    |                 5 |              0.13742 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6896 | >20%                    |                10 |              0.06896 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6926 | 15-20%                  |                 5 |              0.13852 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6952 | >20%                    |                10 |              0.06952 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7023 | 5-10%                   |                10 |              0.07023 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7047 | >20%                    |                10 |              0.07047 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7054 | >20%                    |                 5 |              0.14108 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.7093 | 10-15%                  |                 5 |              0.14186 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7138 | 15-20%                  |                10 |              0.07138 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7242 | 10-15%                  |                 5 |              0.14484 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7363 | >20%                    |                 5 |              0.14726 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7397 | 15-20%                  |                10 |              0.07397 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7477 | >20%                    |                10 |              0.07477 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7499 | >20%                    |                 5 |              0.14998 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7499 | 15-20%                  |                 5 |              0.14998 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7683 | >20%                    |                 5 |              0.15366 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7766 | >20%                    |                10 |              0.07766 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7836 | >20%                    |                10 |              0.07836 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7837 | >20%                    |                10 |              0.07837 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7898 | 5-10%                   |                10 |              0.07898 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7988 | >20%                    |                 5 |              0.15976 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7992 | >20%                    |                 2 |              0.3996  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8016 | 10-15%                  |                10 |              0.08016 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8041 | >20%                    |                10 |              0.08041 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8114 | >20%                    |                10 |              0.08114 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8175 | <5%                     |                10 |              0.08175 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8183 | 15-20%                  |                10 |              0.08183 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8235 | <5%                     |                10 |              0.08235 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8283 | >20%                    |                10 |              0.08283 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8311 | >20%                    |                 5 |              0.16622 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8728 | <5%                     |                 5 |              0.17456 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8771 | >20%                    |                10 |              0.08771 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8813 | 10-15%                  |                10 |              0.08813 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8943 | 10-15%                  |                10 |              0.08943 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.903  | <5%                     |                10 |              0.0903  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9053 | >20%                    |                10 |              0.09053 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9069 | >20%                    |                 2 |              0.45345 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9329 | >20%                    |                10 |              0.09329 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9373 | >20%                    |                 2 |              0.46865 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9709 | <5%                     |                10 |              0.09709 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9879 | <5%                     |                 5 |              0.19758 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.027  | >20%                    |                10 |              0.1027  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0287 | >20%                    |                10 |              0.10287 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0459 | >20%                    |                10 |              0.10459 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0462 | 15-20%                  |                10 |              0.10462 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0564 | >20%                    |                10 |              0.10564 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.071  | >20%                    |                 5 |              0.2142  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0822 | >20%                    |                 5 |              0.21644 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1243 | 10-15%                  |                10 |              0.11243 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1423 | 15-20%                  |                10 |              0.11423 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1558 | 15-20%                  |                10 |              0.11558 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1591 | >20%                    |                10 |              0.11591 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1598 | >20%                    |                10 |              0.11598 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1908 | >20%                    |                 2 |              0.5954  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2055 | >20%                    |                10 |              0.12055 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2084 | >20%                    |                 5 |              0.24168 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3525 | 10-15%                  |                10 |              0.13525 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3525 | >20%                    |                10 |              0.13525 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4754 | >20%                    |                 2 |              0.7377  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4936 | 5-10%                   |                 5 |              0.29872 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5556 | >20%                    |                10 |              0.15556 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1592 | 15-20%                  |                10 |              0.21592 |