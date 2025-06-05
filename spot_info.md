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

Data correct as of 2025-06-05 01:54:51.281016, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1379 | <5%                     |                 2 |              0.06895 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1739 | >20%                    |                 2 |              0.08695 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1809 | >20%                    |                 2 |              0.09045 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1987 | 5-10%                   |                 5 |              0.03974 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2101 | >20%                    |                 2 |              0.10505 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2296 | 5-10%                   |                 2 |              0.1148  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2299 | >20%                    |                 2 |              0.11495 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2329 | >20%                    |                 2 |              0.11645 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | >20%                    |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2453 | <5%                     |                 2 |              0.12265 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2462 | >20%                    |                 5 |              0.04924 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2465 | 10-15%                  |                 2 |              0.12325 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2636 | 15-20%                  |                 2 |              0.1318  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2642 | 10-15%                  |                 2 |              0.1321  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2681 | >20%                    |                10 |              0.02681 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.278  | <5%                     |                 2 |              0.139   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2802 | >20%                    |                 2 |              0.1401  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2816 | 15-20%                  |                 2 |              0.1408  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2829 | >20%                    |                 2 |              0.14145 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2862 | 15-20%                  |                 2 |              0.1431  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2983 | >20%                    |                 2 |              0.14915 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3012 | >20%                    |                 2 |              0.1506  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3035 | 15-20%                  |                 5 |              0.0607  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3072 | 15-20%                  |                 2 |              0.1536  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3082 | >20%                    |                 2 |              0.1541  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3169 | 15-20%                  |                 2 |              0.15845 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3329 | >20%                    |                 5 |              0.06658 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3393 | 15-20%                  |                 2 |              0.16965 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.341  | >20%                    |                 5 |              0.0682  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3546 | >20%                    |                10 |              0.03546 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3552 | 5-10%                   |                 2 |              0.1776  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3562 | >20%                    |                 2 |              0.1781  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3562 | >20%                    |                 2 |              0.1781  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3582 | >20%                    |                 5 |              0.07164 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.359  | >20%                    |                10 |              0.0359  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3682 | >20%                    |                 5 |              0.07364 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3714 | 15-20%                  |                 2 |              0.1857  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3749 | 15-20%                  |                 2 |              0.18745 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3773 | >20%                    |                 5 |              0.07546 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3814 | >20%                    |                10 |              0.03814 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3824 | 15-20%                  |                 2 |              0.1912  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3857 | 10-15%                  |                 5 |              0.07714 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3871 | >20%                    |                 2 |              0.19355 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3943 | >20%                    |                10 |              0.03943 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3968 | 5-10%                   |                 2 |              0.1984  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3977 | >20%                    |                 2 |              0.19885 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3982 | >20%                    |                 5 |              0.07964 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4026 | >20%                    |                 2 |              0.2013  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4061 | >20%                    |                 2 |              0.20305 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4073 | 10-15%                  |                 5 |              0.08146 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4116 | <5%                     |                 5 |              0.08232 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4133 | <5%                     |                 2 |              0.20665 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4256 | 15-20%                  |                 5 |              0.08512 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4262 | 10-15%                  |                 2 |              0.2131  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4329 | >20%                    |                 5 |              0.08658 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4387 | <5%                     |                 2 |              0.21935 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4396 | >20%                    |                 2 |              0.2198  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4412 | 15-20%                  |                 5 |              0.08824 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4441 | >20%                    |                 5 |              0.08882 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4452 | 10-15%                  |                 5 |              0.08904 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4509 | >20%                    |                 5 |              0.09018 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4519 | 15-20%                  |                10 |              0.04519 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4524 | >20%                    |                 2 |              0.2262  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.453  | <5%                     |                 5 |              0.0906  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4597 | >20%                    |                 2 |              0.22985 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4644 | >20%                    |                 2 |              0.2322  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4697 | >20%                    |                 5 |              0.09394 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4752 | 15-20%                  |                 5 |              0.09504 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.483  | 15-20%                  |                 5 |              0.0966  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4842 | 5-10%                   |                 5 |              0.09684 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4859 | 5-10%                   |                 5 |              0.09718 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.489  | >20%                    |                 2 |              0.2445  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4906 | >20%                    |                 5 |              0.09812 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4918 | <5%                     |                 5 |              0.09836 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4926 | >20%                    |                 2 |              0.2463  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4952 | 15-20%                  |                 5 |              0.09904 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4954 | 10-15%                  |                 5 |              0.09908 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5004 | >20%                    |                10 |              0.05004 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5006 | >20%                    |                 2 |              0.2503  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5028 | 15-20%                  |                10 |              0.05028 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5034 | >20%                    |                10 |              0.05034 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5098 | >20%                    |                 5 |              0.10196 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5111 | <5%                     |                 5 |              0.10222 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5142 | 15-20%                  |                 2 |              0.2571  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5161 | >20%                    |                10 |              0.05161 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5278 | >20%                    |                 5 |              0.10556 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5299 | >20%                    |                 5 |              0.10598 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5357 | >20%                    |                 2 |              0.26785 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5362 | >20%                    |                 2 |              0.2681  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5546 | 10-15%                  |                 2 |              0.2773  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5597 | 5-10%                   |                 5 |              0.11194 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5627 | 10-15%                  |                10 |              0.05627 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5834 | >20%                    |                 5 |              0.11668 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5862 | >20%                    |                 5 |              0.11724 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.591  | >20%                    |                 5 |              0.1182  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5935 | >20%                    |                 2 |              0.29675 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5975 | 5-10%                   |                 2 |              0.29875 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6083 | 5-10%                   |                 2 |              0.30415 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6133 | <5%                     |                10 |              0.06133 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6208 | >20%                    |                 5 |              0.12416 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6214 | 15-20%                  |                10 |              0.06214 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6275 | >20%                    |                 2 |              0.31375 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6305 | 10-15%                  |                 5 |              0.1261  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6328 | 5-10%                   |                10 |              0.06328 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6359 | >20%                    |                 5 |              0.12718 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6398 | >20%                    |                 5 |              0.12796 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.65   | <5%                     |                 5 |              0.13    |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6523 | >20%                    |                 5 |              0.13046 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6662 | 10-15%                  |                 2 |              0.3331  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6683 | 15-20%                  |                 5 |              0.13366 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6733 | >20%                    |                 2 |              0.33665 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6774 | >20%                    |                 2 |              0.3387  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6783 | >20%                    |                10 |              0.06783 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6789 | >20%                    |                 5 |              0.13578 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6862 | 10-15%                  |                10 |              0.06862 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6909 | >20%                    |                10 |              0.06909 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6927 | 10-15%                  |                10 |              0.06927 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6952 | >20%                    |                10 |              0.06952 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6963 | >20%                    |                 2 |              0.34815 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.703  | >20%                    |                 5 |              0.1406  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7057 | <5%                     |                10 |              0.07057 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7104 | <5%                     |                 5 |              0.14208 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.711  | >20%                    |                10 |              0.0711  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7161 | 10-15%                  |                 5 |              0.14322 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7225 | >20%                    |                10 |              0.07225 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7322 | <5%                     |                10 |              0.07322 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7373 | >20%                    |                10 |              0.07373 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7427 | 10-15%                  |                 5 |              0.14854 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7438 | >20%                    |                10 |              0.07438 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7636 | >20%                    |                10 |              0.07636 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7799 | >20%                    |                 5 |              0.15598 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7864 | 15-20%                  |                10 |              0.07864 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7884 | >20%                    |                 5 |              0.15768 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8018 | >20%                    |                10 |              0.08018 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8031 | 10-15%                  |                10 |              0.08031 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8199 | 10-15%                  |                 5 |              0.16398 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8236 | 15-20%                  |                10 |              0.08236 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8363 | >20%                    |                10 |              0.08363 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8558 | >20%                    |                10 |              0.08558 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8569 | >20%                    |                10 |              0.08569 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8838 | >20%                    |                10 |              0.08838 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8857 | >20%                    |                10 |              0.08857 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8992 | 5-10%                   |                10 |              0.08992 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9175 | <5%                     |                10 |              0.09175 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9295 | >20%                    |                10 |              0.09295 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9296 | >20%                    |                 5 |              0.18592 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9386 | >20%                    |                10 |              0.09386 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9489 | >20%                    |                10 |              0.09489 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9725 | 5-10%                   |                 2 |              0.48625 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9727 | 10-15%                  |                 5 |              0.19454 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9801 | >20%                    |                 2 |              0.49005 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9872 | >20%                    |                10 |              0.09872 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0009 | >20%                    |                10 |              0.10009 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0338 | >20%                    |                 2 |              0.5169  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0381 | >20%                    |                 5 |              0.20762 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0432 | >20%                    |                 2 |              0.5216  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0461 | 15-20%                  |                10 |              0.10461 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0481 | >20%                    |                 5 |              0.20962 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0674 | <5%                     |                 2 |              0.5337  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0694 | <5%                     |                10 |              0.10694 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.077  | 15-20%                  |                10 |              0.1077  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0875 | <5%                     |                10 |              0.10875 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0926 | 10-15%                  |                 5 |              0.21852 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1533 | >20%                    |                10 |              0.11533 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1646 | 15-20%                  |                10 |              0.11646 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2158 | 10-15%                  |                10 |              0.12158 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2265 | 10-15%                  |                10 |              0.12265 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.294  | >20%                    |                 2 |              0.647   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3197 | >20%                    |                10 |              0.13197 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.346  | 15-20%                  |                10 |              0.1346  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3946 | <5%                     |                 5 |              0.27892 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4304 | >20%                    |                10 |              0.14304 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4418 | >20%                    |                 5 |              0.28836 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.456  | >20%                    |                10 |              0.1456  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4757 | 5-10%                   |                10 |              0.14757 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5006 | 5-10%                   |                10 |              0.15006 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.085  | <5%                     |                10 |              0.2085  |