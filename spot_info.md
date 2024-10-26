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

Data correct as of 2024-10-26 01:34:57.552953, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1573 | >20%                    |                 2 |              0.07865 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1625 | 5-10%                   |                 2 |              0.08125 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1751 | 10-15%                  |                 2 |              0.08755 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1819 | <5%                     |                 2 |              0.09095 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1826 | <5%                     |                 2 |              0.0913  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1851 | <5%                     |                 2 |              0.09255 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1904 | 15-20%                  |                 2 |              0.0952  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1999 | 5-10%                   |                 5 |              0.03998 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2185 | 15-20%                  |                 2 |              0.10925 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 15-20%                  |                 2 |              0.1121  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2249 | 5-10%                   |                 2 |              0.11245 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2254 | 15-20%                  |                 2 |              0.1127  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2347 | <5%                     |                 2 |              0.11735 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.238  | <5%                     |                 5 |              0.0476  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2418 | >20%                    |                 2 |              0.1209  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2461 | 5-10%                   |                 5 |              0.04922 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2591 | <5%                     |                 2 |              0.12955 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.26   | <5%                     |                 2 |              0.13    |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2707 | <5%                     |                 2 |              0.13535 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2778 | 5-10%                   |                 5 |              0.05556 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | 10-15%                  |                 2 |              0.1392  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2795 | 15-20%                  |                 2 |              0.13975 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2851 | <5%                     |                 5 |              0.05702 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2895 | <5%                     |                 2 |              0.14475 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2935 | 10-15%                  |                 5 |              0.0587  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | 10-15%                  |                 5 |              0.06008 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3035 | >20%                    |                 5 |              0.0607  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3046 | 15-20%                  |                 5 |              0.06092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.31   | >20%                    |                 2 |              0.155   |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3173 | 10-15%                  |                 5 |              0.06346 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3185 | >20%                    |                 5 |              0.0637  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3193 | 15-20%                  |                 2 |              0.15965 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3239 | >20%                    |                10 |              0.03239 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3318 | >20%                    |                 5 |              0.06636 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3365 | <5%                     |                 2 |              0.16825 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3467 | <5%                     |                 2 |              0.17335 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3469 | >20%                    |                10 |              0.03469 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3608 | >20%                    |                 2 |              0.1804  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.361  | 10-15%                  |                10 |              0.0361  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3707 | 5-10%                   |                10 |              0.03707 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3719 | <5%                     |                 5 |              0.07438 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3803 | 5-10%                   |                 2 |              0.19015 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3867 | >20%                    |                 2 |              0.19335 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.39   | 5-10%                   |                 2 |              0.195   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3902 | >20%                    |                10 |              0.03902 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3939 | 5-10%                   |                 5 |              0.07878 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3977 | <5%                     |                 5 |              0.07954 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.3991 | 15-20%                  |                 2 |              0.19955 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4017 | >20%                    |                 2 |              0.20085 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4059 | <5%                     |                 5 |              0.08118 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4133 | 5-10%                   |                10 |              0.04133 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4137 | <5%                     |                 5 |              0.08274 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4153 | 5-10%                   |                 2 |              0.20765 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4222 | <5%                     |                10 |              0.04222 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4321 | >20%                    |                 5 |              0.08642 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4351 | 15-20%                  |                 2 |              0.21755 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4367 | >20%                    |                 2 |              0.21835 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4397 | 10-15%                  |                 2 |              0.21985 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4509 | <5%                     |                10 |              0.04509 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | <5%                     |                10 |              0.04529 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4548 | <5%                     |                10 |              0.04548 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4658 | 5-10%                   |                 5 |              0.09316 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4662 | 15-20%                  |                 2 |              0.2331  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4673 | >20%                    |                 2 |              0.23365 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4674 | >20%                    |                 5 |              0.09348 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4696 | <5%                     |                 5 |              0.09392 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4733 | 15-20%                  |                 5 |              0.09466 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4737 | 15-20%                  |                 5 |              0.09474 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.474  | >20%                    |                 2 |              0.237   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4752 | <5%                     |                 2 |              0.2376  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4753 | 5-10%                   |                 2 |              0.23765 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4781 | 5-10%                   |                 2 |              0.23905 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4929 | 10-15%                  |                10 |              0.04929 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5112 | 5-10%                   |                 5 |              0.10224 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5122 | >20%                    |                 5 |              0.10244 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5133 | >20%                    |                 2 |              0.25665 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5149 | >20%                    |                10 |              0.05149 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5181 | <5%                     |                 5 |              0.10362 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5204 | >20%                    |                 5 |              0.10408 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5212 | 10-15%                  |                 5 |              0.10424 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5342 | 5-10%                   |                 5 |              0.10684 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5354 | 15-20%                  |                 2 |              0.2677  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5356 | 5-10%                   |                 5 |              0.10712 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5382 | <5%                     |                 5 |              0.10764 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5415 | 10-15%                  |                 5 |              0.1083  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5425 | 5-10%                   |                10 |              0.05425 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5636 | 5-10%                   |                 5 |              0.11272 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5706 | <5%                     |                10 |              0.05706 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5749 | 5-10%                   |                 5 |              0.11498 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.579  | 15-20%                  |                 5 |              0.1158  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5889 | >20%                    |                 5 |              0.11778 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5896 | 15-20%                  |                10 |              0.05896 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5976 | >20%                    |                 2 |              0.2988  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6095 | 15-20%                  |                 5 |              0.1219  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6105 | 5-10%                   |                 5 |              0.1221  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6163 | >20%                    |                 5 |              0.12326 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6214 | >20%                    |                 5 |              0.12428 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6406 | >20%                    |                10 |              0.06406 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6427 | 10-15%                  |                10 |              0.06427 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.655  | 5-10%                   |                 5 |              0.131   |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6705 | <5%                     |                10 |              0.06705 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6724 | >20%                    |                10 |              0.06724 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6762 | 5-10%                   |                10 |              0.06762 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6765 | >20%                    |                 2 |              0.33825 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6838 | <5%                     |                10 |              0.06838 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6918 | 5-10%                   |                10 |              0.06918 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6927 | >20%                    |                10 |              0.06927 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7361 | >20%                    |                10 |              0.07361 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7458 | >20%                    |                 5 |              0.14916 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7592 | 10-15%                  |                10 |              0.07592 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7683 | 15-20%                  |                10 |              0.07683 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7701 | 5-10%                   |                10 |              0.07701 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7758 | <5%                     |                10 |              0.07758 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7842 | 5-10%                   |                 5 |              0.15684 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8249 | >20%                    |                10 |              0.08249 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8398 | 5-10%                   |                10 |              0.08398 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.856  | 10-15%                  |                 5 |              0.1712  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.856  | 10-15%                  |                10 |              0.0856  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.883  | >20%                    |                10 |              0.0883  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8831 | <5%                     |                10 |              0.08831 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8895 | >20%                    |                10 |              0.08895 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8912 | >20%                    |                 2 |              0.4456  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.895  | >20%                    |                 5 |              0.179   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9286 | 15-20%                  |                10 |              0.09286 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9493 | <5%                     |                 2 |              0.47465 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9651 | 5-10%                   |                10 |              0.09651 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.972  | >20%                    |                10 |              0.0972  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9869 | 10-15%                  |                10 |              0.09869 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0127 | 10-15%                  |                10 |              0.10127 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0242 | 10-15%                  |                10 |              0.10242 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0296 | 10-15%                  |                 5 |              0.20592 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.039  | >20%                    |                10 |              0.1039  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1539 | >20%                    |                10 |              0.11539 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1774 | >20%                    |                10 |              0.11774 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4248 | >20%                    |                10 |              0.14248 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5278 | 5-10%                   |                10 |              0.15278 |