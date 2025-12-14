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

Data correct as of 2025-12-14 02:06:10.541904, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1177 | >20%                    |                 2 |              0.05885 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1574 | >20%                    |                 2 |              0.0787  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1588 | <5%                     |                 2 |              0.0794  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1609 | 15-20%                  |                 2 |              0.08045 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1803 | >20%                    |                 2 |              0.09015 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1919 | >20%                    |                 2 |              0.09595 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1965 | 5-10%                   |                 5 |              0.0393  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2006 | >20%                    |                 2 |              0.1003  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2084 | >20%                    |                 5 |              0.04168 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.22   | >20%                    |                 5 |              0.044   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2406 | >20%                    |                 2 |              0.1203  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2468 | >20%                    |                 2 |              0.1234  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2495 | >20%                    |                 2 |              0.12475 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2552 | 10-15%                  |                 2 |              0.1276  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | >20%                    |                10 |              0.02669 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2675 | 10-15%                  |                 5 |              0.0535  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2742 | 5-10%                   |                 2 |              0.1371  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2767 | 5-10%                   |                10 |              0.02767 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2773 | >20%                    |                 2 |              0.13865 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2784 | <5%                     |                 5 |              0.05568 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2838 | 15-20%                  |                 2 |              0.1419  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2895 | >20%                    |                 2 |              0.14475 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2958 | 10-15%                  |                 2 |              0.1479  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.299  | >20%                    |                 2 |              0.1495  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.309  | >20%                    |                 2 |              0.1545  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3094 | 10-15%                  |                 2 |              0.1547  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.311  | >20%                    |                 5 |              0.0622  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3256 | >20%                    |                 2 |              0.1628  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.329  | >20%                    |                 5 |              0.0658  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3299 | >20%                    |                 2 |              0.16495 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3324 | 10-15%                  |                10 |              0.03324 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3464 | 15-20%                  |                 2 |              0.1732  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3518 | <5%                     |                 5 |              0.07036 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3554 | 5-10%                   |                10 |              0.03554 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3565 | >20%                    |                 2 |              0.17825 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3583 | >20%                    |                10 |              0.03583 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3596 | >20%                    |                 2 |              0.1798  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3659 | >20%                    |                 5 |              0.07318 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3687 | 5-10%                   |                 2 |              0.18435 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3705 | >20%                    |                 2 |              0.18525 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3722 | >20%                    |                 5 |              0.07444 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3835 | >20%                    |                10 |              0.03835 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3875 | >20%                    |                 5 |              0.0775  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3906 | >20%                    |                 2 |              0.1953  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3909 | <5%                     |                10 |              0.03909 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3935 | >20%                    |                 5 |              0.0787  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.395  | 15-20%                  |                 5 |              0.079   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3984 | >20%                    |                 5 |              0.07968 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3993 | <5%                     |                 2 |              0.19965 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3995 | >20%                    |                 5 |              0.0799  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4007 | >20%                    |                 2 |              0.20035 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4046 | >20%                    |                10 |              0.04046 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.408  | >20%                    |                10 |              0.0408  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4109 | 15-20%                  |                 5 |              0.08218 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4116 | 10-15%                  |                 2 |              0.2058  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4163 | >20%                    |                 5 |              0.08326 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4184 | 10-15%                  |                10 |              0.04184 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4203 | 15-20%                  |                10 |              0.04203 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4215 | <5%                     |                 2 |              0.21075 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4219 | >20%                    |                 2 |              0.21095 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4278 | 10-15%                  |                 2 |              0.2139  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4282 | >20%                    |                 2 |              0.2141  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4347 | <5%                     |                 2 |              0.21735 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4522 | >20%                    |                 2 |              0.2261  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4533 | 15-20%                  |                 5 |              0.09066 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4557 | 15-20%                  |                 2 |              0.22785 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4559 | >20%                    |                 2 |              0.22795 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4562 | 15-20%                  |                 5 |              0.09124 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4657 | >20%                    |                 5 |              0.09314 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4684 | 15-20%                  |                 5 |              0.09368 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4689 | >20%                    |                 5 |              0.09378 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4704 | >20%                    |                 2 |              0.2352  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4758 | >20%                    |                 5 |              0.09516 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4805 | 15-20%                  |                 2 |              0.24025 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4821 | >20%                    |                 2 |              0.24105 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4831 | <5%                     |                10 |              0.04831 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4848 | >20%                    |                 2 |              0.2424  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4928 | >20%                    |                 5 |              0.09856 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4993 | <5%                     |                10 |              0.04993 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4997 | 5-10%                   |                 5 |              0.09994 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5099 | 15-20%                  |                 2 |              0.25495 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.516  | >20%                    |                 5 |              0.1032  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5177 | <5%                     |                 5 |              0.10354 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5265 | >20%                    |                 5 |              0.1053  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5277 | >20%                    |                 5 |              0.10554 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.531  | 15-20%                  |                 5 |              0.1062  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5336 | >20%                    |                 2 |              0.2668  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5346 | >20%                    |                 5 |              0.10692 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5351 | >20%                    |                 5 |              0.10702 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5403 | >20%                    |                 2 |              0.27015 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5444 | >20%                    |                 2 |              0.2722  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5536 | <5%                     |                 5 |              0.11072 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5612 | >20%                    |                 5 |              0.11224 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5663 | >20%                    |                 2 |              0.28315 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5678 | >20%                    |                 5 |              0.11356 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.569  | 10-15%                  |                 5 |              0.1138  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5692 | >20%                    |                 5 |              0.11384 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5875 | >20%                    |                10 |              0.05875 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5879 | >20%                    |                 2 |              0.29395 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.589  | >20%                    |                 5 |              0.1178  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5947 | 5-10%                   |                 5 |              0.11894 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6028 | >20%                    |                 5 |              0.12056 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6132 | 5-10%                   |                 5 |              0.12264 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6299 | 10-15%                  |                 5 |              0.12598 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6302 | >20%                    |                 2 |              0.3151  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6324 | <5%                     |                 5 |              0.12648 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6331 | >20%                    |                10 |              0.06331 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6363 | >20%                    |                10 |              0.06363 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6397 | >20%                    |                 2 |              0.31985 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.644  | 15-20%                  |                 5 |              0.1288  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6556 | 5-10%                   |                 5 |              0.13112 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6689 | 10-15%                  |                 5 |              0.13378 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6735 | 15-20%                  |                10 |              0.06735 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6752 | >20%                    |                10 |              0.06752 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.6839 | >20%                    |                10 |              0.06839 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6885 | >20%                    |                10 |              0.06885 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6892 | >20%                    |                 5 |              0.13784 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6964 | >20%                    |                 5 |              0.13928 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6968 | 5-10%                   |                10 |              0.06968 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7039 | 10-15%                  |                10 |              0.07039 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7057 | >20%                    |                10 |              0.07057 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7197 | >20%                    |                 2 |              0.35985 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7207 | 15-20%                  |                10 |              0.07207 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7252 | >20%                    |                 2 |              0.3626  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7292 | >20%                    |                10 |              0.07292 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.73   | >20%                    |                 5 |              0.146   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7344 | >20%                    |                10 |              0.07344 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7422 | >20%                    |                10 |              0.07422 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7537 | >20%                    |                10 |              0.07537 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7546 | >20%                    |                 5 |              0.15092 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7622 | >20%                    |                 5 |              0.15244 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7626 | >20%                    |                 2 |              0.3813  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7731 | 10-15%                  |                10 |              0.07731 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7782 | >20%                    |                10 |              0.07782 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7811 | >20%                    |                10 |              0.07811 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7917 | 10-15%                  |                10 |              0.07917 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7962 | >20%                    |                 2 |              0.3981  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7979 | >20%                    |                 5 |              0.15958 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.806  | 15-20%                  |                10 |              0.0806  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8129 | >20%                    |                 2 |              0.40645 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8199 | >20%                    |                 2 |              0.40995 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8331 | >20%                    |                10 |              0.08331 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8341 | <5%                     |                10 |              0.08341 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8387 | >20%                    |                 5 |              0.16774 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8388 | >20%                    |                10 |              0.08388 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8463 | 10-15%                  |                 5 |              0.16926 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8703 | >20%                    |                10 |              0.08703 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8777 | >20%                    |                 5 |              0.17554 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8883 | 10-15%                  |                10 |              0.08883 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8993 | 5-10%                   |                10 |              0.08993 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9032 | >20%                    |                 5 |              0.18064 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9044 | >20%                    |                10 |              0.09044 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.91   | >20%                    |                10 |              0.091   |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9243 | >20%                    |                10 |              0.09243 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.9383 | 15-20%                  |                 2 |              0.46915 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9458 | >20%                    |                 5 |              0.18916 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9576 | 10-15%                  |                10 |              0.09576 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9667 | >20%                    |                 5 |              0.19334 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9903 | >20%                    |                10 |              0.09903 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9985 | >20%                    |                 2 |              0.49925 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0023 | >20%                    |                 2 |              0.50115 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0247 | 15-20%                  |                10 |              0.10247 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0252 | >20%                    |                10 |              0.10252 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0369 | 10-15%                  |                10 |              0.10369 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0461 | 10-15%                  |                10 |              0.10461 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0637 | >20%                    |                10 |              0.10637 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      1.0964 | >20%                    |                 2 |              0.5482  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1259 | 5-10%                   |                 5 |              0.22518 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2127 | >20%                    |                10 |              0.12127 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2184 | >20%                    |                10 |              0.12184 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2681 | 5-10%                   |                10 |              0.12681 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3084 | >20%                    |                 5 |              0.26168 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3774 | >20%                    |                 2 |              0.6887  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.412  | >20%                    |                 5 |              0.2824  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4163 | >20%                    |                10 |              0.14163 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4404 | 15-20%                  |                10 |              0.14404 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4594 | >20%                    |                 2 |              0.7297  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4762 | >20%                    |                10 |              0.14762 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5611 | 10-15%                  |                 5 |              0.31222 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5643 | 15-20%                  |                10 |              0.15643 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0904 | 10-15%                  |                10 |              0.20904 |