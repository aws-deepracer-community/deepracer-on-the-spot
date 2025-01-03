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

Data correct as of 2025-01-03 01:37:49.488820, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1682 | 15-20%                  |                 2 |              0.0841  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.189  |                         |                 2 |              0.0945  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | <5%                     |                 2 |              0.103   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2237 | <5%                     |                 5 |              0.04474 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2258 | >20%                    |                 2 |              0.1129  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2269 |                         |                 2 |              0.11345 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2299 | >20%                    |                 2 |              0.11495 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2385 | 5-10%                   |                 2 |              0.11925 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2414 | 5-10%                   |                 2 |              0.1207  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2446 | 15-20%                  |                 2 |              0.1223  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2469 | 15-20%                  |                 2 |              0.12345 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2492 | 15-20%                  |                 2 |              0.1246  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2645 |                         |                 5 |              0.0529  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2828 | >20%                    |                 2 |              0.1414  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2864 | <5%                     |                 2 |              0.1432  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2929 |                         |                 5 |              0.05858 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2992 | <5%                     |                 2 |              0.1496  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3014 | 5-10%                   |                 2 |              0.1507  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.304  | >20%                    |                10 |              0.0304  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3073 | 5-10%                   |                 2 |              0.15365 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3121 | 5-10%                   |                 2 |              0.15605 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.322  | <5%                     |                 2 |              0.161   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3363 | 15-20%                  |                 5 |              0.06726 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3391 | <5%                     |                 5 |              0.06782 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3406 | <5%                     |                 2 |              0.1703  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3423 |                         |                10 |              0.03423 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3588 | 10-15%                  |                 2 |              0.1794  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.363  | 10-15%                  |                 2 |              0.1815  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3694 | >20%                    |                 5 |              0.07388 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3711 | >20%                    |                 2 |              0.18555 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.378  | >20%                    |                 2 |              0.189   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3815 | <5%                     |                 5 |              0.0763  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3862 | >20%                    |                 2 |              0.1931  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3874 | 10-15%                  |                 2 |              0.1937  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3885 | >20%                    |                 5 |              0.0777  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3892 | >20%                    |                 2 |              0.1946  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3908 | >20%                    |                 2 |              0.1954  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3962 | 10-15%                  |                 2 |              0.1981  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3986 | 5-10%                   |                 2 |              0.1993  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4048 | 5-10%                   |                10 |              0.04048 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4077 | 5-10%                   |                 2 |              0.20385 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4168 | <5%                     |                 5 |              0.08336 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4193 |                         |                10 |              0.04193 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4214 | <5%                     |                 2 |              0.2107  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4329 | 10-15%                  |                 2 |              0.21645 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4331 | 5-10%                   |                 2 |              0.21655 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4354 | 5-10%                   |                 5 |              0.08708 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4364 | 5-10%                   |                 2 |              0.2182  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4453 | <5%                     |                 5 |              0.08906 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4581 | 10-15%                  |                10 |              0.04581 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4638 | 10-15%                  |                 5 |              0.09276 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.466  | >20%                    |                 5 |              0.0932  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4666 | <5%                     |                 5 |              0.09332 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4714 | 5-10%                   |                 5 |              0.09428 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4719 | 15-20%                  |                 5 |              0.09438 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4758 | 10-15%                  |                 5 |              0.09516 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4764 | 5-10%                   |                 2 |              0.2382  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4777 | >20%                    |                 5 |              0.09554 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4788 | 15-20%                  |                10 |              0.04788 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4794 | >20%                    |                 5 |              0.09588 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4854 | 10-15%                  |                 2 |              0.2427  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4871 | <5%                     |                 5 |              0.09742 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4918 | 15-20%                  |                 2 |              0.2459  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4985 | <5%                     |                 2 |              0.24925 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5    | <5%                     |                 5 |              0.1     |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5033 | >20%                    |                 5 |              0.10066 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5046 | 15-20%                  |                 2 |              0.2523  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5058 | >20%                    |                 5 |              0.10116 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5157 | 5-10%                   |                 5 |              0.10314 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5176 | 10-15%                  |                 2 |              0.2588  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5225 | <5%                     |                 5 |              0.1045  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5286 | <5%                     |                 5 |              0.10572 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5317 | 5-10%                   |                 5 |              0.10634 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5402 | 10-15%                  |                 5 |              0.10804 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5415 | 5-10%                   |                 5 |              0.1083  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5416 | >20%                    |                 5 |              0.10832 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5606 | 5-10%                   |                 5 |              0.11212 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5655 | >20%                    |                 2 |              0.28275 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5777 | 15-20%                  |                 5 |              0.11554 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5807 | >20%                    |                 5 |              0.11614 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.581  | >20%                    |                 2 |              0.2905  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5881 | <5%                     |                 5 |              0.11762 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5904 | 5-10%                   |                10 |              0.05904 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6029 | >20%                    |                 5 |              0.12058 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6327 | 5-10%                   |                10 |              0.06327 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6348 | >20%                    |                 5 |              0.12696 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6485 | >20%                    |                10 |              0.06485 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6606 | <5%                     |                 5 |              0.13212 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6823 | 15-20%                  |                 2 |              0.34115 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.693  | <5%                     |                 2 |              0.3465  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6998 | >20%                    |                 2 |              0.3499  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.706  | >20%                    |                10 |              0.0706  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7088 | 15-20%                  |                 5 |              0.14176 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7108 | 10-15%                  |                10 |              0.07108 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7109 | 10-15%                  |                10 |              0.07109 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.718  | 15-20%                  |                 5 |              0.1436  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.735  | 5-10%                   |                 5 |              0.147   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7381 | <5%                     |                 2 |              0.36905 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7384 | >20%                    |                10 |              0.07384 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7442 | >20%                    |                10 |              0.07442 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7464 | 5-10%                   |                10 |              0.07464 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7516 | 5-10%                   |                10 |              0.07516 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7682 | <5%                     |                10 |              0.07682 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7756 | >20%                    |                 5 |              0.15512 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7785 | >20%                    |                10 |              0.07785 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7925 | >20%                    |                 5 |              0.1585  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8006 | >20%                    |                 5 |              0.16012 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8166 | 5-10%                   |                10 |              0.08166 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.821  | 15-20%                  |                10 |              0.0821  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8227 | 15-20%                  |                10 |              0.08227 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8286 | <5%                     |                10 |              0.08286 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8454 | 5-10%                   |                10 |              0.08454 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8481 | 10-15%                  |                10 |              0.08481 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8488 | <5%                     |                 5 |              0.16976 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8493 | 10-15%                  |                10 |              0.08493 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8582 | >20%                    |                10 |              0.08582 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8638 | 5-10%                   |                10 |              0.08638 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8694 | <5%                     |                10 |              0.08694 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8715 | 10-15%                  |                10 |              0.08715 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8722 | 10-15%                  |                10 |              0.08722 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8984 | <5%                     |                10 |              0.08984 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9049 | 5-10%                   |                10 |              0.09049 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9154 | <5%                     |                 2 |              0.4577  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9319 | 5-10%                   |                 5 |              0.18638 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9369 | >20%                    |                10 |              0.09369 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9417 | 15-20%                  |                10 |              0.09417 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9633 | 5-10%                   |                 5 |              0.19266 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9642 | >20%                    |                10 |              0.09642 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0028 | <5%                     |                 5 |              0.20056 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0132 | 15-20%                  |                10 |              0.10132 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0326 | 10-15%                  |                 2 |              0.5163  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0353 | <5%                     |                10 |              0.10353 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0356 | 5-10%                   |                10 |              0.10356 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0481 | <5%                     |                10 |              0.10481 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1268 | >20%                    |                10 |              0.11268 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1446 | >20%                    |                10 |              0.11446 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3163 | 5-10%                   |                10 |              0.13163 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3347 | >20%                    |                10 |              0.13347 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3892 | <5%                     |                10 |              0.13892 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.409  | <5%                     |                10 |              0.1409  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4682 | 5-10%                   |                10 |              0.14682 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5551 | 5-10%                   |                 5 |              0.31102 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1448 | 10-15%                  |                10 |              0.21448 |