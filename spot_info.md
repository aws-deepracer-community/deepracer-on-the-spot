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

Data correct as of 2025-11-07 01:51:35.690168, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1092 | 5-10%                   |                 2 |              0.0546  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1661 | >20%                    |                 5 |              0.03322 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1668 | >20%                    |                 5 |              0.03336 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.175  | >20%                    |                 2 |              0.0875  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2298 | >20%                    |                 2 |              0.1149  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2302 | >20%                    |                 2 |              0.1151  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2455 | 10-15%                  |                 2 |              0.12275 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2487 | >20%                    |                 2 |              0.12435 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2499 | >20%                    |                 2 |              0.12495 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2513 | 5-10%                   |                 2 |              0.12565 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2533 | >20%                    |                 2 |              0.12665 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2673 | 10-15%                  |                 2 |              0.13365 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2675 | 5-10%                   |                 2 |              0.13375 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2711 | >20%                    |                 2 |              0.13555 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2861 | >20%                    |                 2 |              0.14305 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2938 | >20%                    |                 2 |              0.1469  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2976 | >20%                    |                 5 |              0.05952 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2996 | >20%                    |                 2 |              0.1498  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3063 | >20%                    |                 2 |              0.15315 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3079 | >20%                    |                 5 |              0.06158 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.314  | 15-20%                  |                 2 |              0.157   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3198 | 10-15%                  |                 2 |              0.1599  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.321  | >20%                    |                 2 |              0.1605  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3223 | >20%                    |                 2 |              0.16115 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3236 | >20%                    |                 2 |              0.1618  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3402 | >20%                    |                 5 |              0.06804 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3457 | >20%                    |                 2 |              0.17285 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3626 | >20%                    |                 2 |              0.1813  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3694 | 10-15%                  |                 2 |              0.1847  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3746 | 15-20%                  |                 2 |              0.1873  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.375  | <5%                     |                10 |              0.0375  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3753 | >20%                    |                 5 |              0.07506 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3801 | 15-20%                  |                 2 |              0.19005 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3815 | >20%                    |                 5 |              0.0763  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3831 | >20%                    |                 2 |              0.19155 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3839 | >20%                    |                 2 |              0.19195 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3861 | <5%                     |                 2 |              0.19305 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3877 | 5-10%                   |                 2 |              0.19385 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3902 | >20%                    |                 5 |              0.07804 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.395  | 5-10%                   |                 2 |              0.1975  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4036 | 15-20%                  |                 2 |              0.2018  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4053 | >20%                    |                 5 |              0.08106 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4175 | >20%                    |                 5 |              0.0835  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4182 | 5-10%                   |                 5 |              0.08364 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4214 | >20%                    |                 5 |              0.08428 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4239 | >20%                    |                 2 |              0.21195 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4255 | 15-20%                  |                 5 |              0.0851  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4288 | >20%                    |                 5 |              0.08576 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.429  | >20%                    |                 2 |              0.2145  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4298 | >20%                    |                 2 |              0.2149  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4307 | >20%                    |                 2 |              0.21535 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4344 | >20%                    |                 5 |              0.08688 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4373 | >20%                    |                 5 |              0.08746 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4376 | >20%                    |                 5 |              0.08752 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.445  | >20%                    |                 5 |              0.089   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4462 | >20%                    |                 5 |              0.08924 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4515 | >20%                    |                 5 |              0.0903  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4531 | >20%                    |                 2 |              0.22655 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4542 | >20%                    |                 2 |              0.2271  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4593 | >20%                    |                 2 |              0.22965 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4625 | >20%                    |                 2 |              0.23125 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4634 | 10-15%                  |                 2 |              0.2317  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4635 | >20%                    |                 2 |              0.23175 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4646 | >20%                    |                 5 |              0.09292 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.466  | >20%                    |                 2 |              0.233   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4686 | >20%                    |                 5 |              0.09372 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4695 | >20%                    |                10 |              0.04695 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4716 | 5-10%                   |                 2 |              0.2358  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4727 | 15-20%                  |                10 |              0.04727 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | >20%                    |                 5 |              0.0946  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4763 | 10-15%                  |                 2 |              0.23815 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4913 | >20%                    |                 5 |              0.09826 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4974 | 15-20%                  |                 5 |              0.09948 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5009 | >20%                    |                 2 |              0.25045 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5025 | >20%                    |                 2 |              0.25125 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5099 | >20%                    |                10 |              0.05099 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5162 | >20%                    |                 5 |              0.10324 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5172 | >20%                    |                 5 |              0.10344 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5265 | >20%                    |                 5 |              0.1053  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5376 | 10-15%                  |                 5 |              0.10752 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5381 | >20%                    |                 5 |              0.10762 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5415 | >20%                    |                 5 |              0.1083  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5455 | >20%                    |                 5 |              0.1091  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.549  | >20%                    |                 5 |              0.1098  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5646 | >20%                    |                 5 |              0.11292 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5712 | >20%                    |                 5 |              0.11424 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5799 | 10-15%                  |                 5 |              0.11598 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5916 | 15-20%                  |                 2 |              0.2958  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5937 | >20%                    |                10 |              0.05937 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6052 | >20%                    |                 2 |              0.3026  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6079 | >20%                    |                10 |              0.06079 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.618  | <5%                     |                10 |              0.0618  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.62   | >20%                    |                 5 |              0.124   |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6249 | >20%                    |                 5 |              0.12498 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6269 | 10-15%                  |                 5 |              0.12538 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6311 | >20%                    |                 2 |              0.31555 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6385 | >20%                    |                10 |              0.06385 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6385 | >20%                    |                 5 |              0.1277  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6391 | 15-20%                  |                10 |              0.06391 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.641  | >20%                    |                 2 |              0.3205  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6526 | >20%                    |                 5 |              0.13052 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6531 | 15-20%                  |                10 |              0.06531 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6638 | 15-20%                  |                 2 |              0.3319  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6694 | 10-15%                  |                10 |              0.06694 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6713 | >20%                    |                10 |              0.06713 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6717 | 10-15%                  |                 2 |              0.33585 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6806 | >20%                    |                 5 |              0.13612 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6808 | 15-20%                  |                10 |              0.06808 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6855 | >20%                    |                 5 |              0.1371  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.687  | 15-20%                  |                 5 |              0.1374  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.692  | >20%                    |                10 |              0.0692  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6995 | 15-20%                  |                10 |              0.06995 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7036 | >20%                    |                10 |              0.07036 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7054 | 15-20%                  |                10 |              0.07054 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7056 | >20%                    |                 5 |              0.14112 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7064 | >20%                    |                10 |              0.07064 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7064 | >20%                    |                 5 |              0.14128 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7102 | 10-15%                  |                 2 |              0.3551  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7124 | >20%                    |                 5 |              0.14248 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7125 | >20%                    |                10 |              0.07125 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7174 | >20%                    |                10 |              0.07174 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7211 | 15-20%                  |                 5 |              0.14422 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7253 | <5%                     |                10 |              0.07253 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7287 | >20%                    |                 5 |              0.14574 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7358 | >20%                    |                10 |              0.07358 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7408 | 10-15%                  |                 5 |              0.14816 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7434 | 5-10%                   |                10 |              0.07434 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7447 | >20%                    |                 5 |              0.14894 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7469 | 15-20%                  |                 5 |              0.14938 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7522 | <5%                     |                10 |              0.07522 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7527 | 15-20%                  |                10 |              0.07527 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7595 | >20%                    |                 5 |              0.1519  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7763 | 15-20%                  |                10 |              0.07763 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7776 | >20%                    |                 2 |              0.3888  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7895 | 10-15%                  |                10 |              0.07895 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7947 | 15-20%                  |                10 |              0.07947 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8035 | >20%                    |                10 |              0.08035 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8065 | 10-15%                  |                10 |              0.08065 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8108 | >20%                    |                10 |              0.08108 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.812  | 5-10%                   |                10 |              0.0812  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8323 | >20%                    |                10 |              0.08323 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8377 | >20%                    |                10 |              0.08377 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8519 | >20%                    |                10 |              0.08519 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8521 | 5-10%                   |                10 |              0.08521 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8629 | 10-15%                  |                 2 |              0.43145 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8936 | >20%                    |                 5 |              0.17872 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8941 | >20%                    |                 2 |              0.44705 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9361 | >20%                    |                10 |              0.09361 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.937  | <5%                     |                10 |              0.0937  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9578 | >20%                    |                10 |              0.09578 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9705 | 10-15%                  |                 5 |              0.1941  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9817 | 5-10%                   |                10 |              0.09817 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.982  | 10-15%                  |                10 |              0.0982  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9995 | 5-10%                   |                10 |              0.09995 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0018 | >20%                    |                 5 |              0.20036 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0061 | >20%                    |                 2 |              0.50305 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0569 | 15-20%                  |                10 |              0.10569 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0579 | >20%                    |                10 |              0.10579 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0626 | 15-20%                  |                10 |              0.10626 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0712 | >20%                    |                10 |              0.10712 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0826 | >20%                    |                 5 |              0.21652 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0959 | >20%                    |                 5 |              0.21918 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.126  | >20%                    |                 5 |              0.2252  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.13   | 15-20%                  |                10 |              0.113   |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.15   | >20%                    |                 2 |              0.575   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.164  | >20%                    |                10 |              0.1164  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1946 | >20%                    |                10 |              0.11946 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2077 | >20%                    |                10 |              0.12077 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2241 | 10-15%                  |                10 |              0.12241 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2437 | >20%                    |                 5 |              0.24874 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3988 | 10-15%                  |                10 |              0.13988 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4446 | >20%                    |                10 |              0.14446 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4541 | 5-10%                   |                 2 |              0.72705 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4812 | >20%                    |                10 |              0.14812 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5031 | >20%                    |                10 |              0.15031 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5195 | >20%                    |                10 |              0.15195 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5213 | 10-15%                  |                 5 |              0.30426 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3124 | 15-20%                  |                10 |              0.23124 |