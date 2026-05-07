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

Data correct as of 2026-05-07 03:35:47.545686, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1393 | 15-20%                  |                 2 |              0.06965 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1449 | >20%                    |                 2 |              0.07245 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1748 | >20%                    |                 2 |              0.0874  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2132 | 15-20%                  |                 5 |              0.04264 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.222  | >20%                    |                 2 |              0.111   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2364 | >20%                    |                 2 |              0.1182  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2383 | >20%                    |                 2 |              0.11915 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2435 | 15-20%                  |                 2 |              0.12175 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2576 | >20%                    |                 2 |              0.1288  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2582 | 15-20%                  |                 5 |              0.05164 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2859 | >20%                    |                 2 |              0.14295 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2868 | >20%                    |                 5 |              0.05736 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2882 | >20%                    |                 5 |              0.05764 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2892 | >20%                    |                 5 |              0.05784 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2902 | >20%                    |                 2 |              0.1451  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.2911 | 10-15%                  |                 2 |              0.14555 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2928 | 15-20%                  |                 5 |              0.05856 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | 15-20%                  |                 2 |              0.1477  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3043 | >20%                    |                 2 |              0.15215 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3053 | 10-15%                  |                 2 |              0.15265 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.317  | 10-15%                  |                 2 |              0.1585  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3179 | 5-10%                   |                10 |              0.03179 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3193 | 5-10%                   |                10 |              0.03193 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3284 | >20%                    |                 5 |              0.06568 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3356 | 10-15%                  |                 2 |              0.1678  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3396 | <5%                     |                 2 |              0.1698  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3414 | >20%                    |                 2 |              0.1707  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3433 | >20%                    |                10 |              0.03433 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3482 | >20%                    |                 5 |              0.06964 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3517 | >20%                    |                 2 |              0.17585 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3521 | >20%                    |                 5 |              0.07042 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3564 | >20%                    |                 2 |              0.1782  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3611 | >20%                    |                 5 |              0.07222 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3661 | >20%                    |                 5 |              0.07322 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3761 | >20%                    |                 5 |              0.07522 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3797 | >20%                    |                 5 |              0.07594 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3875 | >20%                    |                 2 |              0.19375 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3927 | >20%                    |                 5 |              0.07854 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4035 | >20%                    |                 5 |              0.0807  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4081 | >20%                    |                 2 |              0.20405 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4104 | >20%                    |                 2 |              0.2052  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4279 | >20%                    |                 5 |              0.08558 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4284 | 5-10%                   |                 2 |              0.2142  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4337 | <5%                     |                 2 |              0.21685 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4387 | >20%                    |                 5 |              0.08774 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4443 | >20%                    |                 2 |              0.22215 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4447 | >20%                    |                 5 |              0.08894 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4461 | >20%                    |                10 |              0.04461 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4507 | 15-20%                  |                 2 |              0.22535 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4528 | >20%                    |                 5 |              0.09056 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4585 | <5%                     |                 2 |              0.22925 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4597 | >20%                    |                 2 |              0.22985 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4607 | >20%                    |                10 |              0.04607 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4681 | 15-20%                  |                 2 |              0.23405 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4721 | >20%                    |                 2 |              0.23605 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4785 | >20%                    |                 5 |              0.0957  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4847 | >20%                    |                 5 |              0.09694 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4863 | >20%                    |                 5 |              0.09726 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4875 | >20%                    |                10 |              0.04875 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4915 | >20%                    |                 5 |              0.0983  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.492  | >20%                    |                 2 |              0.246   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4927 | 10-15%                  |                 2 |              0.24635 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4927 | >20%                    |                 5 |              0.09854 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4967 | >20%                    |                 2 |              0.24835 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4994 | <5%                     |                 5 |              0.09988 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5159 | 15-20%                  |                 5 |              0.10318 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.526  | 5-10%                   |                 5 |              0.1052  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5358 | >20%                    |                10 |              0.05358 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5463 | 10-15%                  |                 5 |              0.10926 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5534 | >20%                    |                10 |              0.05534 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.562  | >20%                    |                 2 |              0.281   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5707 | 15-20%                  |                 2 |              0.28535 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5822 | >20%                    |                 5 |              0.11644 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6237 | >20%                    |                 2 |              0.31185 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6247 | 5-10%                   |                 2 |              0.31235 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6248 | >20%                    |                10 |              0.06248 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6257 | 5-10%                   |                 5 |              0.12514 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6282 | >20%                    |                 2 |              0.3141  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6317 | >20%                    |                 2 |              0.31585 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6333 | >20%                    |                 5 |              0.12666 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6579 | >20%                    |                 5 |              0.13158 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6658 | >20%                    |                10 |              0.06658 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6693 | 5-10%                   |                10 |              0.06693 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6737 | >20%                    |                 5 |              0.13474 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6775 | >20%                    |                 5 |              0.1355  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6825 | >20%                    |                 5 |              0.1365  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6832 | >20%                    |                10 |              0.06832 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6896 | >20%                    |                10 |              0.06896 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6957 | 10-15%                  |                 2 |              0.34785 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6982 | 15-20%                  |                10 |              0.06982 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7034 | >20%                    |                10 |              0.07034 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7038 | >20%                    |                 2 |              0.3519  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7093 | >20%                    |                 5 |              0.14186 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7147 | >20%                    |                 2 |              0.35735 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7153 | 5-10%                   |                10 |              0.07153 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.737  | >20%                    |                 5 |              0.1474  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7412 | >20%                    |                10 |              0.07412 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7417 | 15-20%                  |                10 |              0.07417 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7458 | >20%                    |                 2 |              0.3729  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7476 | >20%                    |                 5 |              0.14952 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7516 | >20%                    |                10 |              0.07516 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7695 | >20%                    |                 5 |              0.1539  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7945 | >20%                    |                 5 |              0.1589  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8446 | 15-20%                  |                10 |              0.08446 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8464 | >20%                    |                10 |              0.08464 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8487 | >20%                    |                 5 |              0.16974 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8506 | >20%                    |                 2 |              0.4253  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8507 | >20%                    |                10 |              0.08507 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8603 | >20%                    |                10 |              0.08603 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8662 | 5-10%                   |                10 |              0.08662 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8702 | >20%                    |                10 |              0.08702 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8795 |                         |                 2 |              0.43975 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8885 | >20%                    |                10 |              0.08885 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8961 | >20%                    |                10 |              0.08961 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9094 | >20%                    |                 5 |              0.18188 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9133 | >20%                    |                10 |              0.09133 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.918  |                         |                 2 |              0.459   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9286 | >20%                    |                10 |              0.09286 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9421 | 15-20%                  |                10 |              0.09421 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9443 | >20%                    |                 5 |              0.18886 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9459 | 10-15%                  |                10 |              0.09459 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9461 | 15-20%                  |                10 |              0.09461 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9492 | >20%                    |                10 |              0.09492 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9568 | >20%                    |                 5 |              0.19136 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.97   | >20%                    |                 5 |              0.194   |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9838 | >20%                    |                10 |              0.09838 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0507 | >20%                    |                10 |              0.10507 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0584 | 15-20%                  |                10 |              0.10584 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0588 | >20%                    |                10 |              0.10588 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0815 | >20%                    |                 2 |              0.54075 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1253 | >20%                    |                10 |              0.11253 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.185  | >20%                    |                10 |              0.1185  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1905 |                         |                 5 |              0.2381  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1911 | >20%                    |                 5 |              0.23822 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2006 | 10-15%                  |                10 |              0.12006 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2073 | >20%                    |                 5 |              0.24146 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2332 | 5-10%                   |                 2 |              0.6166  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2404 | 5-10%                   |                 2 |              0.6202  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2474 |                         |                 5 |              0.24948 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2939 | >20%                    |                 5 |              0.25878 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3013 | >20%                    |                 5 |              0.26026 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4195 | 15-20%                  |                 5 |              0.2839  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4778 | >20%                    |                10 |              0.14778 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5539 | 10-15%                  |                 2 |              0.77695 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5598 | 15-20%                  |                10 |              0.15598 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.5601 | >20%                    |                10 |              0.15601 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5683 | >20%                    |                10 |              0.15683 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6173 | 15-20%                  |                10 |              0.16173 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.6879 | >20%                    |                10 |              0.16879 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6923 |                         |                10 |              0.16923 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.865  |                         |                10 |              0.1865  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1393 | >20%                    |                10 |              0.21393 |