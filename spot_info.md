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

Data correct as of 2025-09-06 01:41:09.318841, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0911 | 5-10%                   |                 2 |              0.04555 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1144 | >20%                    |                 2 |              0.0572  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1589 | >20%                    |                 2 |              0.07945 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.171  | >20%                    |                 2 |              0.0855  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1971 | >20%                    |                 5 |              0.03942 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2108 | 10-15%                  |                 2 |              0.1054  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2161 | >20%                    |                 2 |              0.10805 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2164 | >20%                    |                 2 |              0.1082  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2266 | >20%                    |                 2 |              0.1133  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2318 | >20%                    |                 2 |              0.1159  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2319 | >20%                    |                 5 |              0.04638 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2322 | 10-15%                  |                 5 |              0.04644 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2434 | >20%                    |                 5 |              0.04868 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2661 | >20%                    |                 2 |              0.13305 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2801 | >20%                    |                 2 |              0.14005 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2831 | 15-20%                  |                 5 |              0.05662 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2925 | 15-20%                  |                 2 |              0.14625 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3113 | 5-10%                   |                 2 |              0.15565 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3139 | >20%                    |                 2 |              0.15695 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3171 | 10-15%                  |                 2 |              0.15855 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3191 | 5-10%                   |                 2 |              0.15955 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.322  | >20%                    |                 2 |              0.161   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.335  | >20%                    |                 2 |              0.1675  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3353 | <5%                     |                10 |              0.03353 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3428 | >20%                    |                 5 |              0.06856 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3516 | >20%                    |                 2 |              0.1758  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3521 | >20%                    |                10 |              0.03521 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3523 | >20%                    |                 2 |              0.17615 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3599 | >20%                    |                 2 |              0.17995 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3612 | 15-20%                  |                10 |              0.03612 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3619 | >20%                    |                10 |              0.03619 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3654 | >20%                    |                 2 |              0.1827  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3728 | >20%                    |                 5 |              0.07456 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3767 | 10-15%                  |                 5 |              0.07534 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3778 | 15-20%                  |                 2 |              0.1889  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3786 | >20%                    |                 2 |              0.1893  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3809 | >20%                    |                 2 |              0.19045 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3833 | >20%                    |                 5 |              0.07666 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3841 | 10-15%                  |                 2 |              0.19205 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4054 | >20%                    |                 5 |              0.08108 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4106 | 15-20%                  |                 2 |              0.2053  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4187 | >20%                    |                 5 |              0.08374 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4188 | >20%                    |                 5 |              0.08376 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4213 | >20%                    |                 5 |              0.08426 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4276 | >20%                    |                 5 |              0.08552 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4378 | >20%                    |                 2 |              0.2189  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4449 | >20%                    |                 2 |              0.22245 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4497 | >20%                    |                 5 |              0.08994 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4513 | 15-20%                  |                10 |              0.04513 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4518 | 5-10%                   |                 2 |              0.2259  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4537 | 10-15%                  |                 2 |              0.22685 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4555 | 10-15%                  |                 2 |              0.22775 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4625 | 15-20%                  |                 2 |              0.23125 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4661 | >20%                    |                 2 |              0.23305 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4692 | <5%                     |                 2 |              0.2346  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4736 | 15-20%                  |                 2 |              0.2368  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4786 | >20%                    |                 2 |              0.2393  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4801 | >20%                    |                 5 |              0.09602 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4815 | >20%                    |                 5 |              0.0963  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4966 | >20%                    |                10 |              0.04966 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4967 | >20%                    |                 5 |              0.09934 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4999 | 5-10%                   |                 5 |              0.09998 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5038 | >20%                    |                 2 |              0.2519  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5054 | >20%                    |                 5 |              0.10108 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5109 | >20%                    |                 5 |              0.10218 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5192 | >20%                    |                 2 |              0.2596  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5207 | 10-15%                  |                 2 |              0.26035 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5216 | >20%                    |                 5 |              0.10432 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5221 | >20%                    |                 2 |              0.26105 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5226 | >20%                    |                 2 |              0.2613  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5377 | <5%                     |                 2 |              0.26885 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5447 | >20%                    |                 5 |              0.10894 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5502 | 5-10%                   |                 2 |              0.2751  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5514 | >20%                    |                 2 |              0.2757  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.556  | >20%                    |                 2 |              0.278   |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5586 | >20%                    |                 2 |              0.2793  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5602 | >20%                    |                 5 |              0.11204 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.562  | 10-15%                  |                 2 |              0.281   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5678 | >20%                    |                 2 |              0.2839  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5685 | >20%                    |                 2 |              0.28425 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5766 | >20%                    |                 5 |              0.11532 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5869 | >20%                    |                 5 |              0.11738 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5907 | 10-15%                  |                 5 |              0.11814 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5915 | >20%                    |                 5 |              0.1183  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5935 | 15-20%                  |                 5 |              0.1187  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5961 | >20%                    |                 5 |              0.11922 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6114 | 15-20%                  |                 5 |              0.12228 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6153 | >20%                    |                 5 |              0.12306 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6215 | >20%                    |                 5 |              0.1243  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6339 | >20%                    |                 5 |              0.12678 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.638  | 10-15%                  |                 5 |              0.1276  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6408 | 15-20%                  |                 5 |              0.12816 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6458 | 15-20%                  |                 2 |              0.3229  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6518 | >20%                    |                 2 |              0.3259  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6588 | >20%                    |                 5 |              0.13176 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6602 | >20%                    |                 5 |              0.13204 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6661 | >20%                    |                 2 |              0.33305 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6707 | 15-20%                  |                 5 |              0.13414 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6738 | 5-10%                   |                10 |              0.06738 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6751 | 15-20%                  |                10 |              0.06751 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6998 | >20%                    |                 5 |              0.13996 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7016 | >20%                    |                 5 |              0.14032 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7153 | >20%                    |                 5 |              0.14306 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7215 | >20%                    |                 5 |              0.1443  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7246 | >20%                    |                 5 |              0.14492 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7252 | >20%                    |                 5 |              0.14504 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7336 | >20%                    |                10 |              0.07336 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7439 | >20%                    |                 5 |              0.14878 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7462 | >20%                    |                10 |              0.07462 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7462 | >20%                    |                 5 |              0.14924 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7474 | >20%                    |                 5 |              0.14948 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7504 | >20%                    |                10 |              0.07504 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7531 | >20%                    |                10 |              0.07531 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7541 | >20%                    |                 5 |              0.15082 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7614 | >20%                    |                10 |              0.07614 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7654 | >20%                    |                10 |              0.07654 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.789  | 15-20%                  |                10 |              0.0789  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7965 | >20%                    |                10 |              0.07965 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8186 | >20%                    |                 5 |              0.16372 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8243 | 10-15%                  |                10 |              0.08243 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8263 | 15-20%                  |                10 |              0.08263 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8319 | 10-15%                  |                10 |              0.08319 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8527 | 10-15%                  |                 2 |              0.42635 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8669 | 10-15%                  |                10 |              0.08669 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8685 | <5%                     |                10 |              0.08685 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8822 | >20%                    |                10 |              0.08822 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9151 | <5%                     |                10 |              0.09151 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9221 | 5-10%                   |                10 |              0.09221 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9282 | 5-10%                   |                10 |              0.09282 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9421 | 15-20%                  |                10 |              0.09421 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9459 | 15-20%                  |                10 |              0.09459 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9482 | <5%                     |                10 |              0.09482 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9563 | >20%                    |                10 |              0.09563 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9592 | >20%                    |                 2 |              0.4796  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9673 | 10-15%                  |                10 |              0.09673 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9737 | >20%                    |                10 |              0.09737 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9856 | >20%                    |                 5 |              0.19712 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0027 | 5-10%                   |                10 |              0.10027 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0106 | 15-20%                  |                10 |              0.10106 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0129 | >20%                    |                10 |              0.10129 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0177 | 15-20%                  |                10 |              0.10177 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0256 | 15-20%                  |                10 |              0.10256 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0292 | >20%                    |                 5 |              0.20584 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0348 | >20%                    |                10 |              0.10348 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0402 | >20%                    |                10 |              0.10402 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0556 | >20%                    |                10 |              0.10556 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0772 | <5%                     |                10 |              0.10772 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0826 | >20%                    |                 2 |              0.5413  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0969 | >20%                    |                 5 |              0.21938 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.105  | 15-20%                  |                10 |              0.1105  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.1165 | >20%                    |                10 |              0.11165 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1167 | 10-15%                  |                 5 |              0.22334 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1189 | >20%                    |                10 |              0.11189 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.135  | 10-15%                  |                 2 |              0.5675  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1422 | 15-20%                  |                10 |              0.11422 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1523 | 5-10%                   |                10 |              0.11523 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1697 | >20%                    |                10 |              0.11697 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1788 | >20%                    |                 5 |              0.23576 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.196  | >20%                    |                 2 |              0.598   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3315 | 5-10%                   |                 2 |              0.66575 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3356 | 10-15%                  |                 5 |              0.26712 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3361 | >20%                    |                 5 |              0.26722 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3509 | 10-15%                  |                10 |              0.13509 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4293 | >20%                    |                10 |              0.14293 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4452 | 10-15%                  |                 5 |              0.28904 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4638 | >20%                    |                10 |              0.14638 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5596 | >20%                    |                10 |              0.15596 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5714 | >20%                    |                10 |              0.15714 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.595  | >20%                    |                10 |              0.1595  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6013 | >20%                    |                10 |              0.16013 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.653  | 15-20%                  |                10 |              0.1653  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2799 | 10-15%                  |                10 |              0.22799 |