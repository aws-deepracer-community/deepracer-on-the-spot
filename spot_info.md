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

Data correct as of 2025-01-01 01:44:42.492210, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1672 |                         |                 2 |              0.0836  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1758 | 15-20%                  |                 2 |              0.0879  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2037 | <5%                     |                 5 |              0.04074 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2094 |                         |                 2 |              0.1047  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2095 | <5%                     |                 2 |              0.10475 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2183 | >20%                    |                 2 |              0.10915 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2334 | >20%                    |                 2 |              0.1167  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2365 | 5-10%                   |                 2 |              0.11825 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2389 | 15-20%                  |                 2 |              0.11945 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2417 | 15-20%                  |                 2 |              0.12085 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2452 | 15-20%                  |                 2 |              0.1226  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2475 | 5-10%                   |                 2 |              0.12375 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2493 |                         |                 5 |              0.04986 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2586 |                         |                 5 |              0.05172 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2868 | <5%                     |                 2 |              0.1434  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2901 | >20%                    |                 2 |              0.14505 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2936 | 5-10%                   |                 2 |              0.1468  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3038 | <5%                     |                 2 |              0.1519  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3092 | 5-10%                   |                 2 |              0.1546  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.321  | 5-10%                   |                 2 |              0.1605  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3224 | >20%                    |                10 |              0.03224 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3232 | 15-20%                  |                 5 |              0.06464 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3241 | <5%                     |                 2 |              0.16205 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3401 | <5%                     |                 5 |              0.06802 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3427 | <5%                     |                 2 |              0.17135 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3603 | 10-15%                  |                 2 |              0.18015 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3603 | 10-15%                  |                 2 |              0.18015 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3633 | >20%                    |                 2 |              0.18165 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3725 |                         |                10 |              0.03725 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3733 | 10-15%                  |                 2 |              0.18665 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3754 | >20%                    |                 2 |              0.1877  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3796 | >20%                    |                 2 |              0.1898  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3804 | <5%                     |                 5 |              0.07608 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3834 | >20%                    |                 5 |              0.07668 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3858 | >20%                    |                 2 |              0.1929  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3931 | 5-10%                   |                 2 |              0.19655 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3936 | >20%                    |                 2 |              0.1968  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3954 | 5-10%                   |                10 |              0.03954 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3976 | 10-15%                  |                 2 |              0.1988  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4011 |                         |                10 |              0.04011 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4103 | <5%                     |                 2 |              0.20515 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4105 | >20%                    |                 5 |              0.0821  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4125 | 5-10%                   |                 2 |              0.20625 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4202 | 15-20%                  |                10 |              0.04202 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4232 | <5%                     |                10 |              0.04232 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4243 | 10-15%                  |                 2 |              0.21215 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4287 | 5-10%                   |                 2 |              0.21435 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.432  | 5-10%                   |                 2 |              0.216   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4341 | <5%                     |                 5 |              0.08682 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4409 | 5-10%                   |                 5 |              0.08818 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4424 | 10-15%                  |                10 |              0.04424 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4505 | <5%                     |                 5 |              0.0901  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4577 | 5-10%                   |                 5 |              0.09154 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4581 | <5%                     |                 5 |              0.09162 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4624 | 5-10%                   |                 2 |              0.2312  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4651 | >20%                    |                 5 |              0.09302 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4653 | >20%                    |                 5 |              0.09306 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4664 | >20%                    |                 5 |              0.09328 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4688 | 10-15%                  |                 5 |              0.09376 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4721 | 15-20%                  |                 5 |              0.09442 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.475  | 10-15%                  |                 5 |              0.095   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4822 | 15-20%                  |                 2 |              0.2411  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4859 | <5%                     |                 5 |              0.09718 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.489  | 10-15%                  |                 2 |              0.2445  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.49   | >20%                    |                 5 |              0.098   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4937 | 15-20%                  |                 2 |              0.24685 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4968 | <5%                     |                 2 |              0.2484  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.499  | <5%                     |                 5 |              0.0998  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5014 | 5-10%                   |                 5 |              0.10028 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5056 | 5-10%                   |                 5 |              0.10112 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5128 | >20%                    |                 5 |              0.10256 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5173 | <5%                     |                 5 |              0.10346 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5178 | 5-10%                   |                 5 |              0.10356 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5247 | 10-15%                  |                 2 |              0.26235 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5277 | <5%                     |                 5 |              0.10554 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5459 | >20%                    |                 5 |              0.10918 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.546  | 5-10%                   |                 5 |              0.1092  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5516 | 10-15%                  |                 5 |              0.11032 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5538 | >20%                    |                 5 |              0.11076 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.562  | >20%                    |                 2 |              0.281   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5727 | 15-20%                  |                 5 |              0.11454 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5792 | >20%                    |                 2 |              0.2896  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5828 | 5-10%                   |                10 |              0.05828 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.59   | >20%                    |                 5 |              0.118   |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6109 | >20%                    |                 5 |              0.12218 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6278 | 10-15%                  |                10 |              0.06278 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6289 | <5%                     |                 5 |              0.12578 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.6355 | <5%                     |                 2 |              0.31775 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6371 | 5-10%                   |                10 |              0.06371 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6429 | >20%                    |                10 |              0.06429 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6728 | <5%                     |                 5 |              0.13456 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6817 | 15-20%                  |                 2 |              0.34085 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6985 | >20%                    |                10 |              0.06985 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7037 | >20%                    |                 2 |              0.35185 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7073 | 10-15%                  |                10 |              0.07073 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7161 | 15-20%                  |                 5 |              0.14322 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7174 | 15-20%                  |                 5 |              0.14348 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7199 | <5%                     |                 2 |              0.35995 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7227 | >20%                    |                10 |              0.07227 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7283 | >20%                    |                10 |              0.07283 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.731  | 5-10%                   |                 5 |              0.1462  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7373 | >20%                    |                10 |              0.07373 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7402 | 5-10%                   |                10 |              0.07402 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7536 | 5-10%                   |                10 |              0.07536 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7729 | <5%                     |                10 |              0.07729 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7759 | >20%                    |                 5 |              0.15518 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7798 | >20%                    |                 5 |              0.15596 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7891 | <5%                     |                 5 |              0.15782 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7968 | 10-15%                  |                10 |              0.07968 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7978 | >20%                    |                 5 |              0.15956 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8046 | <5%                     |                10 |              0.08046 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.812  | 5-10%                   |                10 |              0.0812  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8135 | 15-20%                  |                10 |              0.08135 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8229 | 15-20%                  |                10 |              0.08229 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8289 | 10-15%                  |                10 |              0.08289 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8417 | 5-10%                   |                10 |              0.08417 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.842  | 10-15%                  |                10 |              0.0842  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.862  | 5-10%                   |                10 |              0.0862  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.8704 | <5%                     |                 2 |              0.4352  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8716 | 10-15%                  |                10 |              0.08716 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8747 | >20%                    |                10 |              0.08747 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8779 | <5%                     |                10 |              0.08779 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8917 | 5-10%                   |                10 |              0.08917 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8933 | <5%                     |                10 |              0.08933 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.8933 | >20%                    |                10 |              0.08933 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9105 | 5-10%                   |                 5 |              0.1821  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.935  | 15-20%                  |                10 |              0.0935  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9401 | >20%                    |                10 |              0.09401 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9575 | 5-10%                   |                 5 |              0.1915  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9905 | <5%                     |                 5 |              0.1981  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0135 | 15-20%                  |                10 |              0.10135 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0313 | <5%                     |                10 |              0.10313 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0316 | 5-10%                   |                10 |              0.10316 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.039  | 10-15%                  |                 2 |              0.5195  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0738 | <5%                     |                10 |              0.10738 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1294 | >20%                    |                10 |              0.11294 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1532 | >20%                    |                10 |              0.11532 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2203 | <5%                     |                10 |              0.12203 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2725 | 5-10%                   |                10 |              0.12725 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.334  | >20%                    |                10 |              0.1334  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4043 | <5%                     |                10 |              0.14043 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4577 | 5-10%                   |                10 |              0.14577 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5515 | 5-10%                   |                 5 |              0.3103  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0991 | 10-15%                  |                10 |              0.20991 |