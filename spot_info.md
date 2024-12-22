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

Data correct as of 2024-12-22 01:43:56.746254, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1282 |                         |                 2 |              0.0641  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1302 |                         |                 2 |              0.0651  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1709 |                         |                 5 |              0.03418 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.1816 |                         |                 5 |              0.03632 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2046 | 15-20%                  |                 2 |              0.1023  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2105 | >20%                    |                 2 |              0.10525 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2202 | 15-20%                  |                 2 |              0.1101  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2243 | 15-20%                  |                 2 |              0.11215 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2303 | 5-10%                   |                 2 |              0.11515 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2374 | 15-20%                  |                 2 |              0.1187  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.24   | >20%                    |                 2 |              0.12    |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2486 | 5-10%                   |                 2 |              0.1243  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2513 | <5%                     |                 5 |              0.05026 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2562 | 15-20%                  |                 5 |              0.05124 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2624 |                         |                10 |              0.02624 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2704 | <5%                     |                 2 |              0.1352  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2788 | <5%                     |                 2 |              0.1394  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.2814 |                         |                10 |              0.02814 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2881 | 5-10%                   |                 2 |              0.14405 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2907 | 5-10%                   |                 2 |              0.14535 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2975 | 5-10%                   |                 2 |              0.14875 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3053 | 5-10%                   |                 5 |              0.06106 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.308  | >20%                    |                 5 |              0.0616  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3183 | <5%                     |                 2 |              0.15915 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3189 | 15-20%                  |                10 |              0.03189 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3225 | >20%                    |                 2 |              0.16125 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3265 | <5%                     |                 2 |              0.16325 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3281 | >20%                    |                 2 |              0.16405 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3342 | <5%                     |                 5 |              0.06684 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3374 | <5%                     |                 2 |              0.1687  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3391 | 10-15%                  |                 2 |              0.16955 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3414 | <5%                     |                 2 |              0.1707  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3531 | 10-15%                  |                 2 |              0.17655 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3541 | >20%                    |                 2 |              0.17705 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3541 | 5-10%                   |                 5 |              0.07082 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3548 | 10-15%                  |                 2 |              0.1774  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.355  | >20%                    |                 5 |              0.071   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3561 | >20%                    |                 2 |              0.17805 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.359  | <5%                     |                 5 |              0.0718  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3746 | >20%                    |                 2 |              0.1873  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3765 | 5-10%                   |                 2 |              0.18825 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3835 | <5%                     |                 5 |              0.0767  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3914 | 10-15%                  |                10 |              0.03914 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.3999 | <5%                     |                 2 |              0.19995 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4018 | <5%                     |                 5 |              0.08036 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4069 | >20%                    |                 2 |              0.20345 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4106 | 10-15%                  |                 2 |              0.2053  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4139 | 10-15%                  |                10 |              0.04139 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4152 | 5-10%                   |                 2 |              0.2076  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4164 | 5-10%                   |                 2 |              0.2082  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4169 | 15-20%                  |                 2 |              0.20845 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4225 | 5-10%                   |                 5 |              0.0845  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4248 | 10-15%                  |                 2 |              0.2124  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4259 | 5-10%                   |                 5 |              0.08518 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4263 | >20%                    |                 5 |              0.08526 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4273 | 10-15%                  |                 5 |              0.08546 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4283 | >20%                    |                 5 |              0.08566 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4416 | >20%                    |                10 |              0.04416 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4421 | 5-10%                   |                 5 |              0.08842 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4442 | >20%                    |                 5 |              0.08884 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4443 | <5%                     |                 5 |              0.08886 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4462 | >20%                    |                 5 |              0.08924 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4563 | >20%                    |                 5 |              0.09126 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4591 | 5-10%                   |                 2 |              0.22955 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4602 | 5-10%                   |                 2 |              0.2301  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4631 | >20%                    |                10 |              0.04631 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.466  | 5-10%                   |                10 |              0.0466  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4695 | 15-20%                  |                 2 |              0.23475 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4759 | <5%                     |                 5 |              0.09518 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4765 | 10-15%                  |                 5 |              0.0953  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4777 | <5%                     |                 5 |              0.09554 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4814 | 10-15%                  |                 2 |              0.2407  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4938 | <5%                     |                 5 |              0.09876 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4954 | >20%                    |                 5 |              0.09908 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4973 | <5%                     |                 2 |              0.24865 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5022 | 10-15%                  |                 2 |              0.2511  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5042 | <5%                     |                 5 |              0.10084 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.507  | 15-20%                  |                 5 |              0.1014  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5091 | >20%                    |                 2 |              0.25455 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5165 | >20%                    |                 5 |              0.1033  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5304 | <5%                     |                 5 |              0.10608 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5422 | 5-10%                   |                 5 |              0.10844 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5453 | >20%                    |                 5 |              0.10906 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5571 | >20%                    |                 5 |              0.11142 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5614 | 10-15%                  |                 5 |              0.11228 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5628 | 15-20%                  |                 5 |              0.11256 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5652 | >20%                    |                10 |              0.05652 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5697 | >20%                    |                 2 |              0.28485 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5922 | <5%                     |                 5 |              0.11844 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6071 | 15-20%                  |                 2 |              0.30355 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6343 | 5-10%                   |                10 |              0.06343 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6419 | 15-20%                  |                 5 |              0.12838 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6468 | >20%                    |                10 |              0.06468 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6523 | <5%                     |                10 |              0.06523 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6555 | >20%                    |                10 |              0.06555 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6573 | 5-10%                   |                10 |              0.06573 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6824 | 5-10%                   |                 5 |              0.13648 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.685  | <5%                     |                 5 |              0.137   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6921 | 15-20%                  |                 5 |              0.13842 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6932 | >20%                    |                10 |              0.06932 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6986 | >20%                    |                 2 |              0.3493  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7143 | <5%                     |                 2 |              0.35715 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7171 | 10-15%                  |                10 |              0.07171 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7273 | >20%                    |                 5 |              0.14546 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7383 | >20%                    |                 5 |              0.14766 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7427 | 5-10%                   |                10 |              0.07427 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.7442 | <5%                     |                 2 |              0.3721  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7488 | >20%                    |                10 |              0.07488 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7556 | 5-10%                   |                 5 |              0.15112 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7562 | 5-10%                   |                10 |              0.07562 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7563 | 15-20%                  |                10 |              0.07563 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7564 | >20%                    |                 5 |              0.15128 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7598 | 10-15%                  |                10 |              0.07598 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.7649 | >20%                    |                10 |              0.07649 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.7861 | <5%                     |                10 |              0.07861 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7933 | 15-20%                  |                10 |              0.07933 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8007 | 5-10%                   |                10 |              0.08007 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8134 | <5%                     |                10 |              0.08134 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8247 | 10-15%                  |                10 |              0.08247 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8335 | 10-15%                  |                10 |              0.08335 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8348 | 5-10%                   |                10 |              0.08348 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8614 | 10-15%                  |                10 |              0.08614 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8776 | <5%                     |                10 |              0.08776 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8805 | <5%                     |                10 |              0.08805 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8931 | 5-10%                   |                10 |              0.08931 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9053 | 10-15%                  |                 2 |              0.45265 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9252 | 5-10%                   |                 5 |              0.18504 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9318 | <5%                     |                 5 |              0.18636 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9562 | >20%                    |                10 |              0.09562 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9585 | 15-20%                  |                10 |              0.09585 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9661 | 15-20%                  |                10 |              0.09661 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9966 | 5-10%                   |                10 |              0.09966 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0175 | 5-10%                   |                10 |              0.10175 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0296 | <5%                     |                10 |              0.10296 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0547 | <5%                     |                10 |              0.10547 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0992 | >20%                    |                10 |              0.10992 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.121  | <5%                     |                10 |              0.1121  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1423 | >20%                    |                10 |              0.11423 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2551 | >20%                    |                10 |              0.12551 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3831 | 5-10%                   |                10 |              0.13831 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5317 | 5-10%                   |                 5 |              0.30634 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9365 | 10-15%                  |                10 |              0.19365 |