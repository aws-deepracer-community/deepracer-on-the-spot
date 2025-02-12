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

Data correct as of 2025-02-12 01:37:09.293241, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1281 | >20%                    |                 2 |              0.06405 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1779 | <5%                     |                 5 |              0.03558 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 15-20%                  |                 5 |              0.039   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.1973 | 5-10%                   |                 2 |              0.09865 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2165 | 5-10%                   |                 2 |              0.10825 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2197 | >20%                    |                 2 |              0.10985 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2314 | <5%                     |                 2 |              0.1157  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2323 | 15-20%                  |                 2 |              0.11615 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2342 | 15-20%                  |                 2 |              0.1171  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2347 | >20%                    |                 2 |              0.11735 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2452 | 5-10%                   |                 2 |              0.1226  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2461 | <5%                     |                 5 |              0.04922 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2577 | 10-15%                  |                 2 |              0.12885 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2639 | >20%                    |                 2 |              0.13195 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2816 | <5%                     |                 2 |              0.1408  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2877 | 5-10%                   |                 2 |              0.14385 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2896 | 5-10%                   |                 2 |              0.1448  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.293  | <5%                     |                 2 |              0.1465  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2953 | <5%                     |                 2 |              0.14765 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2966 | 5-10%                   |                 2 |              0.1483  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.301  | 5-10%                   |                 2 |              0.1505  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3095 | 10-15%                  |                 2 |              0.15475 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3116 | 10-15%                  |                 2 |              0.1558  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3293 | 15-20%                  |                 5 |              0.06586 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3343 | <5%                     |                10 |              0.03343 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3373 | >20%                    |                 2 |              0.16865 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3379 | <5%                     |                 2 |              0.16895 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3401 | 15-20%                  |                 2 |              0.17005 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3429 | >20%                    |                 5 |              0.06858 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3437 | <5%                     |                10 |              0.03437 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3448 | 15-20%                  |                 5 |              0.06896 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3578 | 10-15%                  |                 5 |              0.07156 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3606 | 10-15%                  |                10 |              0.03606 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3632 | 10-15%                  |                 2 |              0.1816  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3638 | <5%                     |                 2 |              0.1819  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3642 | 5-10%                   |                 2 |              0.1821  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3669 | <5%                     |                 2 |              0.18345 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3692 | 15-20%                  |                 2 |              0.1846  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3776 | 5-10%                   |                 2 |              0.1888  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3782 | <5%                     |                 5 |              0.07564 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3901 | <5%                     |                 2 |              0.19505 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.396  | 5-10%                   |                 5 |              0.0792  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4033 | 15-20%                  |                 2 |              0.20165 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4045 | 5-10%                   |                 2 |              0.20225 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.405  | 5-10%                   |                 5 |              0.081   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4052 | >20%                    |                 2 |              0.2026  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4145 | >20%                    |                 5 |              0.0829  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.419  | <5%                     |                 5 |              0.0838  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.427  | <5%                     |                 2 |              0.2135  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4375 | >20%                    |                 5 |              0.0875  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4478 | >20%                    |                 5 |              0.08956 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4506 | >20%                    |                 5 |              0.09012 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4516 | <5%                     |                 2 |              0.2258  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4521 | >20%                    |                 5 |              0.09042 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4753 | >20%                    |                10 |              0.04753 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4769 | 10-15%                  |                10 |              0.04769 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4791 | >20%                    |                 5 |              0.09582 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4838 | >20%                    |                 2 |              0.2419  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.485  | 5-10%                   |                 5 |              0.097   |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4866 | 5-10%                   |                 2 |              0.2433  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4885 | 5-10%                   |                 5 |              0.0977  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4919 | >20%                    |                 2 |              0.24595 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4923 | 10-15%                  |                 5 |              0.09846 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4961 | >20%                    |                 5 |              0.09922 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4975 | >20%                    |                 5 |              0.0995  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4996 | >20%                    |                 2 |              0.2498  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.505  | 5-10%                   |                10 |              0.0505  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5051 | <5%                     |                 5 |              0.10102 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5074 | 10-15%                  |                 5 |              0.10148 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5113 | <5%                     |                 5 |              0.10226 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.512  | 15-20%                  |                 5 |              0.1024  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5203 | <5%                     |                 2 |              0.26015 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5206 | 15-20%                  |                 2 |              0.2603  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5212 | >20%                    |                 2 |              0.2606  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5228 | >20%                    |                 2 |              0.2614  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5292 | >20%                    |                 2 |              0.2646  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5413 | 10-15%                  |                 5 |              0.10826 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5492 | >20%                    |                 5 |              0.10984 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5516 | 5-10%                   |                 5 |              0.11032 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5543 | >20%                    |                 5 |              0.11086 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5553 | >20%                    |                 2 |              0.27765 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5637 | 10-15%                  |                 2 |              0.28185 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5643 | >20%                    |                10 |              0.05643 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5676 | 5-10%                   |                 5 |              0.11352 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5682 | >20%                    |                 2 |              0.2841  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5708 | 10-15%                  |                 5 |              0.11416 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5713 | <5%                     |                 5 |              0.11426 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5772 | 5-10%                   |                10 |              0.05772 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5839 | 5-10%                   |                 5 |              0.11678 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5916 | >20%                    |                 2 |              0.2958  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5991 | >20%                    |                10 |              0.05991 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6001 | 5-10%                   |                 5 |              0.12002 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.61   | 5-10%                   |                10 |              0.061   |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.622  | >20%                    |                 2 |              0.311   |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6231 | 5-10%                   |                 5 |              0.12462 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6417 | <5%                     |                10 |              0.06417 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6506 | >20%                    |                 5 |              0.13012 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6543 | <5%                     |                10 |              0.06543 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6555 | 10-15%                  |                 5 |              0.1311  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6634 | <5%                     |                 5 |              0.13268 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6639 | 15-20%                  |                 5 |              0.13278 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.664  | >20%                    |                 5 |              0.1328  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6729 | >20%                    |                 5 |              0.13458 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6751 | 15-20%                  |                 5 |              0.13502 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6785 | >20%                    |                 2 |              0.33925 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6817 | >20%                    |                10 |              0.06817 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.688  | >20%                    |                10 |              0.0688  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.691  | 15-20%                  |                 5 |              0.1382  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.699  | >20%                    |                10 |              0.0699  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.725  | 5-10%                   |                10 |              0.0725  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7306 | >20%                    |                 5 |              0.14612 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7328 | <5%                     |                10 |              0.07328 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7468 | >20%                    |                 5 |              0.14936 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7565 | >20%                    |                 5 |              0.1513  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7572 | >20%                    |                10 |              0.07572 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7595 | <5%                     |                 5 |              0.1519  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7787 | >20%                    |                 5 |              0.15574 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7881 | 15-20%                  |                10 |              0.07881 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8009 | 15-20%                  |                10 |              0.08009 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8015 | >20%                    |                10 |              0.08015 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8025 | 10-15%                  |                10 |              0.08025 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8031 | 15-20%                  |                10 |              0.08031 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8168 | 5-10%                   |                 2 |              0.4084  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.8184 | <5%                     |                 5 |              0.16368 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8233 | 5-10%                   |                10 |              0.08233 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8241 | 15-20%                  |                10 |              0.08241 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8309 | 15-20%                  |                 2 |              0.41545 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8427 | 5-10%                   |                10 |              0.08427 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8456 | >20%                    |                10 |              0.08456 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8515 | <5%                     |                10 |              0.08515 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8546 | 10-15%                  |                10 |              0.08546 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8586 | 10-15%                  |                10 |              0.08586 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.869  | >20%                    |                10 |              0.0869  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8701 | <5%                     |                10 |              0.08701 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8748 | 15-20%                  |                10 |              0.08748 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.88   | 15-20%                  |                10 |              0.088   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8814 | <5%                     |                10 |              0.08814 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.885  | 15-20%                  |                 5 |              0.177   |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9007 | 15-20%                  |                 5 |              0.18014 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9023 | >20%                    |                 2 |              0.45115 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9078 | <5%                     |                10 |              0.09078 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9101 | <5%                     |                10 |              0.09101 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9102 | <5%                     |                10 |              0.09102 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9356 | 10-15%                  |                10 |              0.09356 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.966  | >20%                    |                10 |              0.0966  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9769 | >20%                    |                10 |              0.09769 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0456 | <5%                     |                10 |              0.10456 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0541 | >20%                    |                10 |              0.10541 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0815 | >20%                    |                 2 |              0.54075 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0868 | >20%                    |                 2 |              0.5434  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1042 | 15-20%                  |                10 |              0.11042 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1312 | >20%                    |                 5 |              0.22624 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1446 | 5-10%                   |                10 |              0.11446 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1466 | 15-20%                  |                10 |              0.11466 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.182  | >20%                    |                 5 |              0.2364  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2036 | >20%                    |                10 |              0.12036 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2058 | 15-20%                  |                 2 |              0.6029  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.246  | 10-15%                  |                 5 |              0.2492  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2838 | >20%                    |                10 |              0.12838 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3164 | 15-20%                  |                10 |              0.13164 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3219 | 5-10%                   |                10 |              0.13219 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3688 | >20%                    |                10 |              0.13688 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4099 | 15-20%                  |                10 |              0.14099 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6009 | >20%                    |                10 |              0.16009 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0518 | 5-10%                   |                10 |              0.20518 |