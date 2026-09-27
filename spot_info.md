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

Data correct as of 2026-09-27 04:34:02.998459, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0798 | >20%                    |                 2 |              0.0399  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1254 | 15-20%                  |                 2 |              0.0627  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1401 | >20%                    |                 2 |              0.07005 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1654 | 15-20%                  |                 5 |              0.03308 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.218  | 15-20%                  |                 5 |              0.0436  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2315 | >20%                    |                 2 |              0.11575 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2371 | >20%                    |                 2 |              0.11855 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2412 | >20%                    |                 2 |              0.1206  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2673 | >20%                    |                 2 |              0.13365 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2676 | >20%                    |                 2 |              0.1338  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | >20%                    |                 2 |              0.1391  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3033 | >20%                    |                 2 |              0.15165 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3049 | 15-20%                  |                 2 |              0.15245 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3148 | >20%                    |                 2 |              0.1574  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.318  |                         |                 5 |              0.0636  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3287 | >20%                    |                 2 |              0.16435 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3425 | 10-15%                  |                 2 |              0.17125 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3425 | >20%                    |                10 |              0.03425 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.346  | >20%                    |                 5 |              0.0692  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.371  | >20%                    |                 5 |              0.0742  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3714 | 15-20%                  |                 2 |              0.1857  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3756 | >20%                    |                 5 |              0.07512 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3844 | >20%                    |                 5 |              0.07688 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3856 | >20%                    |                 5 |              0.07712 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3864 | 10-15%                  |                 2 |              0.1932  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3939 | <5%                     |                 2 |              0.19695 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3971 | <5%                     |                10 |              0.03971 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3986 | >20%                    |                 2 |              0.1993  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3992 | >20%                    |                 2 |              0.1996  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4041 | >20%                    |                 2 |              0.20205 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4085 | 5-10%                   |                10 |              0.04085 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4214 | >20%                    |                 5 |              0.08428 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4224 | >20%                    |                 5 |              0.08448 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4365 | >20%                    |                 2 |              0.21825 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4426 | >20%                    |                 2 |              0.2213  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.446  | >20%                    |                 5 |              0.0892  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4621 | 15-20%                  |                 2 |              0.23105 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4635 | >20%                    |                 5 |              0.0927  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.473  | >20%                    |                 2 |              0.2365  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4771 | 10-15%                  |                 2 |              0.23855 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4865 | >20%                    |                 5 |              0.0973  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4897 | >20%                    |                 2 |              0.24485 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.496  | >20%                    |                 5 |              0.0992  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.502  | >20%                    |                 2 |              0.251   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5037 | <5%                     |                 2 |              0.25185 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5038 |                         |                 2 |              0.2519  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5131 | >20%                    |                 2 |              0.25655 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5209 | >20%                    |                 5 |              0.10418 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5266 | 15-20%                  |                 2 |              0.2633  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5414 | >20%                    |                10 |              0.05414 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5496 | >20%                    |                 2 |              0.2748  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5502 | 5-10%                   |                10 |              0.05502 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5531 | >20%                    |                 5 |              0.11062 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.561  | >20%                    |                 5 |              0.1122  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.568  | >20%                    |                 5 |              0.1136  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5895 | >20%                    |                 2 |              0.29475 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.604  | 10-15%                  |                 5 |              0.1208  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6044 | >20%                    |                10 |              0.06044 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6118 | >20%                    |                 5 |              0.12236 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6195 | >20%                    |                 5 |              0.1239  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6224 | >20%                    |                 2 |              0.3112  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6225 | >20%                    |                 5 |              0.1245  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6419 | >20%                    |                10 |              0.06419 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.647  | 10-15%                  |                 2 |              0.3235  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6632 | >20%                    |                 5 |              0.13264 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6674 | >20%                    |                 5 |              0.13348 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6731 | >20%                    |                 5 |              0.13462 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6754 | 5-10%                   |                 5 |              0.13508 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6824 | >20%                    |                 2 |              0.3412  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6831 | 15-20%                  |                10 |              0.06831 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6834 | >20%                    |                 5 |              0.13668 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6907 | <5%                     |                 2 |              0.34535 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6937 | 5-10%                   |                 2 |              0.34685 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6951 | 15-20%                  |                 2 |              0.34755 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7083 | >20%                    |                 5 |              0.14166 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7259 | >20%                    |                 5 |              0.14518 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7343 | >20%                    |                10 |              0.07343 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.736  | 15-20%                  |                 5 |              0.1472  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7387 | >20%                    |                 5 |              0.14774 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7458 | 15-20%                  |                10 |              0.07458 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7497 | >20%                    |                 5 |              0.14994 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7519 | >20%                    |                 5 |              0.15038 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7558 | >20%                    |                 2 |              0.3779  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7586 | >20%                    |                10 |              0.07586 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7649 | >20%                    |                10 |              0.07649 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.8103 | >20%                    |                 2 |              0.40515 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8119 | 10-15%                  |                 2 |              0.40595 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8171 | 10-15%                  |                10 |              0.08171 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8258 | 15-20%                  |                10 |              0.08258 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.826  |                         |                10 |              0.0826  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8312 | >20%                    |                10 |              0.08312 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8407 | 5-10%                   |                10 |              0.08407 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8466 | >20%                    |                 5 |              0.16932 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8521 | >20%                    |                10 |              0.08521 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8554 | >20%                    |                 2 |              0.4277  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.862  | >20%                    |                10 |              0.0862  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8625 | >20%                    |                10 |              0.08625 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8651 | 15-20%                  |                 5 |              0.17302 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9059 | <5%                     |                 5 |              0.18118 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9112 | >20%                    |                10 |              0.09112 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9169 | >20%                    |                 5 |              0.18338 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.917  | >20%                    |                 5 |              0.1834  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9287 | >20%                    |                 5 |              0.18574 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9353 | >20%                    |                10 |              0.09353 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9398 | >20%                    |                 5 |              0.18796 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.9447 | >20%                    |                 2 |              0.47235 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9488 | 15-20%                  |                10 |              0.09488 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9529 | >20%                    |                10 |              0.09529 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9586 | >20%                    |                10 |              0.09586 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9587 | >20%                    |                10 |              0.09587 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0093 | 15-20%                  |                10 |              0.10093 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0227 | >20%                    |                10 |              0.10227 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0228 | >20%                    |                10 |              0.10228 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0299 | 15-20%                  |                10 |              0.10299 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0325 | 10-15%                  |                 2 |              0.51625 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0356 | >20%                    |                10 |              0.10356 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0552 | >20%                    |                 5 |              0.21104 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0566 | >20%                    |                10 |              0.10566 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.0688 |                         |                 2 |              0.5344  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.0776 | >20%                    |                 5 |              0.21552 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1038 | >20%                    |                10 |              0.11038 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1163 | 5-10%                   |                10 |              0.11163 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1341 |                         |                 2 |              0.56705 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1548 | >20%                    |                10 |              0.11548 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1549 | 5-10%                   |                 2 |              0.57745 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2061 | >20%                    |                10 |              0.12061 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2098 | >20%                    |                10 |              0.12098 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2757 |                         |                 5 |              0.25514 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2945 | 5-10%                   |                 2 |              0.64725 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3123 | 10-15%                  |                10 |              0.13123 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3385 | >20%                    |                10 |              0.13385 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3507 | >20%                    |                 2 |              0.67535 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3723 | 15-20%                  |                10 |              0.13723 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3748 | 10-15%                  |                 2 |              0.6874  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3805 | >20%                    |                10 |              0.13805 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.4032 |                         |                 5 |              0.28064 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5348 | >20%                    |                 2 |              0.7674  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5722 | 5-10%                   |                 5 |              0.31444 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5759 | >20%                    |                 5 |              0.31518 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6027 |                         |                10 |              0.16027 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6275 | >20%                    |                10 |              0.16275 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7273 | 15-20%                  |                10 |              0.17273 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7611 | >20%                    |                 5 |              0.35222 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8659 | >20%                    |                10 |              0.18659 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9026 |                         |                10 |              0.19026 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.109  | 15-20%                  |                 5 |              0.4218  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.1386 | >20%                    |                 5 |              0.42772 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2094 | 5-10%                   |                 2 |              1.1047  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2524 | 5-10%                   |                10 |              0.22524 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6232 | >20%                    |                10 |              0.26232 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.6355 | >20%                    |                10 |              0.26355 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.123  | >20%                    |                10 |              0.3123  |