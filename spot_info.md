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

Data correct as of 2026-07-20 03:32:39.058602, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1439 | >20%                    |                 2 |              0.07195 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1534 | >20%                    |                 2 |              0.0767  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1845 | >20%                    |                 2 |              0.09225 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2261 | 15-20%                  |                 2 |              0.11305 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2418 | >20%                    |                 2 |              0.1209  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2456 | >20%                    |                 2 |              0.1228  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2505 | >20%                    |                 2 |              0.12525 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2595 | >20%                    |                 2 |              0.12975 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.26   | >20%                    |                 2 |              0.13    |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2674 | >20%                    |                 2 |              0.1337  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2735 | 15-20%                  |                 2 |              0.13675 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2815 | >20%                    |                 2 |              0.14075 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2844 | 5-10%                   |                10 |              0.02844 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2845 | 10-15%                  |                 2 |              0.14225 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2931 | >20%                    |                 2 |              0.14655 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3034 | 15-20%                  |                 2 |              0.1517  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3188 | >20%                    |                 2 |              0.1594  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3226 | 15-20%                  |                 5 |              0.06452 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3295 | >20%                    |                 5 |              0.0659  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3342 | 15-20%                  |                 5 |              0.06684 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3479 | >20%                    |                 5 |              0.06958 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.352  | >20%                    |                 5 |              0.0704  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3554 | 5-10%                   |                10 |              0.03554 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3584 | >20%                    |                 2 |              0.1792  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3586 | >20%                    |                10 |              0.03586 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.363  | <5%                     |                 2 |              0.1815  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3709 | >20%                    |                 5 |              0.07418 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3768 | >20%                    |                 5 |              0.07536 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3778 | >20%                    |                 5 |              0.07556 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3816 | >20%                    |                10 |              0.03816 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3875 | >20%                    |                 5 |              0.0775  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3892 | 15-20%                  |                 2 |              0.1946  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3984 | >20%                    |                 5 |              0.07968 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3986 | 10-15%                  |                 2 |              0.1993  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4115 | >20%                    |                 2 |              0.20575 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4154 | >20%                    |                 2 |              0.2077  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4186 | 10-15%                  |                 2 |              0.2093  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4259 | 5-10%                   |                10 |              0.04259 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4291 | >20%                    |                10 |              0.04291 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4321 | >20%                    |                 5 |              0.08642 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4375 | >20%                    |                10 |              0.04375 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4511 | >20%                    |                 5 |              0.09022 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.4571 | >20%                    |                10 |              0.04571 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4582 | >20%                    |                 2 |              0.2291  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4598 | >20%                    |                 2 |              0.2299  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.462  | >20%                    |                 2 |              0.231   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4624 | >20%                    |                 5 |              0.09248 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4637 | 10-15%                  |                 2 |              0.23185 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.469  | >20%                    |                 2 |              0.2345  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4705 | >20%                    |                 2 |              0.23525 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4808 | 15-20%                  |                 5 |              0.09616 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4873 | >20%                    |                10 |              0.04873 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4883 | >20%                    |                 5 |              0.09766 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4905 | <5%                     |                 2 |              0.24525 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4938 | <5%                     |                 2 |              0.2469  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5002 | >20%                    |                 5 |              0.10004 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5216 | >20%                    |                 5 |              0.10432 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5252 | >20%                    |                10 |              0.05252 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5313 | 15-20%                  |                 2 |              0.26565 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5341 | >20%                    |                 2 |              0.26705 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5432 | >20%                    |                 5 |              0.10864 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5551 | 10-15%                  |                10 |              0.05551 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5558 | >20%                    |                 2 |              0.2779  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.556  | >20%                    |                 5 |              0.1112  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5616 | >20%                    |                 5 |              0.11232 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5672 | >20%                    |                 5 |              0.11344 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5681 | 10-15%                  |                 5 |              0.11362 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5702 | 5-10%                   |                 2 |              0.2851  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.584  | >20%                    |                 5 |              0.1168  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5856 | >20%                    |                 5 |              0.11712 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5862 | >20%                    |                 5 |              0.11724 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.595  | >20%                    |                 2 |              0.2975  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.5998 |                         |                 2 |              0.2999  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.604  | >20%                    |                 5 |              0.1208  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6096 | 5-10%                   |                 5 |              0.12192 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6441 | 15-20%                  |                 2 |              0.32205 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6453 | >20%                    |                 5 |              0.12906 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.647  | >20%                    |                10 |              0.0647  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6536 | >20%                    |                10 |              0.06536 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6807 | >20%                    |                 5 |              0.13614 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6842 | >20%                    |                10 |              0.06842 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6847 | >20%                    |                 5 |              0.13694 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6903 |                         |                 2 |              0.34515 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.691  | >20%                    |                 2 |              0.3455  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.692  | >20%                    |                10 |              0.0692  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7018 | 15-20%                  |                 5 |              0.14036 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.7062 | >20%                    |                 2 |              0.3531  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7118 | >20%                    |                 2 |              0.3559  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7151 | >20%                    |                 5 |              0.14302 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7179 | 15-20%                  |                10 |              0.07179 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7189 | <5%                     |                 5 |              0.14378 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7208 | >20%                    |                 5 |              0.14416 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7243 | >20%                    |                10 |              0.07243 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7257 | >20%                    |                10 |              0.07257 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.73   | >20%                    |                 2 |              0.365   |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7357 | >20%                    |                10 |              0.07357 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7364 | >20%                    |                10 |              0.07364 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7518 | >20%                    |                 5 |              0.15036 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7679 | >20%                    |                10 |              0.07679 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7727 | 5-10%                   |                10 |              0.07727 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7856 | 10-15%                  |                 2 |              0.3928  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7881 | >20%                    |                10 |              0.07881 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7935 | >20%                    |                10 |              0.07935 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.801  | <5%                     |                10 |              0.0801  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8257 |                         |                 5 |              0.16514 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8264 | >20%                    |                10 |              0.08264 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8305 | 15-20%                  |                10 |              0.08305 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8388 | 5-10%                   |                 2 |              0.4194  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8393 | >20%                    |                 5 |              0.16786 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8723 | 15-20%                  |                10 |              0.08723 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8913 | 15-20%                  |                10 |              0.08913 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8973 | >20%                    |                 5 |              0.17946 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8982 | 10-15%                  |                 2 |              0.4491  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8985 | >20%                    |                 5 |              0.1797  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9016 | >20%                    |                10 |              0.09016 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9071 | >20%                    |                 2 |              0.45355 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.909  | >20%                    |                10 |              0.0909  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9247 | 5-10%                   |                10 |              0.09247 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9482 | >20%                    |                10 |              0.09482 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9648 | >20%                    |                 5 |              0.19296 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9662 | >20%                    |                 5 |              0.19324 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9776 | >20%                    |                 5 |              0.19552 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9783 | >20%                    |                 5 |              0.19566 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9958 | 15-20%                  |                10 |              0.09958 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0055 | 10-15%                  |                 2 |              0.50275 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0126 | >20%                    |                 5 |              0.20252 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0154 | >20%                    |                 2 |              0.5077  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0158 | 5-10%                   |                 5 |              0.20316 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0718 | >20%                    |                10 |              0.10718 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0863 | >20%                    |                10 |              0.10863 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0965 | >20%                    |                 2 |              0.54825 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1087 |                         |                10 |              0.11087 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1169 | >20%                    |                10 |              0.11169 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1174 | >20%                    |                10 |              0.11174 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.1403 |                         |                10 |              0.11403 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1411 | >20%                    |                 5 |              0.22822 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1741 | 15-20%                  |                10 |              0.11741 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2081 |                         |                 5 |              0.24162 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2202 | >20%                    |                10 |              0.12202 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2245 | >20%                    |                 5 |              0.2449  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2347 | 5-10%                   |                10 |              0.12347 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3283 | >20%                    |                 5 |              0.26566 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.329  | 15-20%                  |                10 |              0.1329  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3637 | >20%                    |                10 |              0.13637 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4249 | >20%                    |                10 |              0.14249 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4341 | 15-20%                  |                10 |              0.14341 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4831 | >20%                    |                10 |              0.14831 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5007 | >20%                    |                10 |              0.15007 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5857 | 10-15%                  |                10 |              0.15857 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.601  | 15-20%                  |                 5 |              0.3202  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.6885 | 5-10%                   |                 2 |              0.84425 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.0068 | >20%                    |                 5 |              0.40136 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.0557 | >20%                    |                 5 |              0.41114 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0594 | 5-10%                   |                 2 |              1.0297  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1053 | >20%                    |                10 |              0.21053 |