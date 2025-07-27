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

Data correct as of 2025-07-27 02:20:12.175261, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1408 | 5-10%                   |                 2 |              0.0704  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1461 | >20%                    |                 2 |              0.07305 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1621 | 5-10%                   |                 2 |              0.08105 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.203  | <5%                     |                 5 |              0.0406  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2113 | >20%                    |                 2 |              0.10565 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2143 | >20%                    |                 2 |              0.10715 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2258 | >20%                    |                 2 |              0.1129  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.23   | 15-20%                  |                 2 |              0.115   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2454 | >20%                    |                 2 |              0.1227  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2476 | 15-20%                  |                 2 |              0.1238  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2579 | >20%                    |                 2 |              0.12895 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2602 | <5%                     |                 5 |              0.05204 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2647 | >20%                    |                 2 |              0.13235 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.266  | 5-10%                   |                 2 |              0.133   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2668 | >20%                    |                 2 |              0.1334  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2734 | 5-10%                   |                 5 |              0.05468 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2822 | >20%                    |                 5 |              0.05644 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3049 | <5%                     |                 2 |              0.15245 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3083 | 15-20%                  |                 5 |              0.06166 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3176 | 5-10%                   |                 2 |              0.1588  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3176 | >20%                    |                 5 |              0.06352 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3276 | >20%                    |                 2 |              0.1638  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3283 | >20%                    |                 5 |              0.06566 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3293 | >20%                    |                 5 |              0.06586 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3302 | 15-20%                  |                 2 |              0.1651  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3371 | <5%                     |                10 |              0.03371 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3438 | >20%                    |                 5 |              0.06876 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3442 | 15-20%                  |                 2 |              0.1721  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3449 | <5%                     |                 2 |              0.17245 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3472 | 5-10%                   |                 2 |              0.1736  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3481 | 15-20%                  |                 2 |              0.17405 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3651 | >20%                    |                 5 |              0.07302 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3691 | >20%                    |                 2 |              0.18455 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.375  | >20%                    |                 2 |              0.1875  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3798 | >20%                    |                 5 |              0.07596 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3835 | >20%                    |                10 |              0.03835 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3857 | >20%                    |                 2 |              0.19285 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4023 | 15-20%                  |                10 |              0.04023 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4104 | >20%                    |                 5 |              0.08208 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4106 | >20%                    |                 2 |              0.2053  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4108 | <5%                     |                 2 |              0.2054  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4133 | 10-15%                  |                 2 |              0.20665 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4199 | >20%                    |                 2 |              0.20995 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4217 | 15-20%                  |                10 |              0.04217 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4217 | >20%                    |                 2 |              0.21085 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4263 | <5%                     |                10 |              0.04263 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4269 | >20%                    |                10 |              0.04269 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4411 | >20%                    |                 2 |              0.22055 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4437 | >20%                    |                 5 |              0.08874 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4495 | <5%                     |                 2 |              0.22475 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4501 | 5-10%                   |                 2 |              0.22505 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4533 | >20%                    |                 2 |              0.22665 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4581 | 15-20%                  |                 5 |              0.09162 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4596 | >20%                    |                 2 |              0.2298  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4632 | 15-20%                  |                10 |              0.04632 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4647 | >20%                    |                 5 |              0.09294 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4692 | >20%                    |                 5 |              0.09384 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4775 | >20%                    |                 2 |              0.23875 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4798 | 10-15%                  |                 2 |              0.2399  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4842 | 5-10%                   |                 2 |              0.2421  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.491  | >20%                    |                 2 |              0.2455  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4963 | 10-15%                  |                 5 |              0.09926 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5004 | >20%                    |                 2 |              0.2502  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.501  | >20%                    |                 2 |              0.2505  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5017 | 5-10%                   |                 5 |              0.10034 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.502  | >20%                    |                 5 |              0.1004  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5066 | >20%                    |                 2 |              0.2533  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.512  | 15-20%                  |                10 |              0.0512  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5164 | <5%                     |                 2 |              0.2582  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5267 | 10-15%                  |                 2 |              0.26335 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5305 | >20%                    |                 5 |              0.1061  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5348 | 15-20%                  |                 2 |              0.2674  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5383 | >20%                    |                 5 |              0.10766 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5454 | >20%                    |                 5 |              0.10908 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5494 | 10-15%                  |                 5 |              0.10988 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5532 | >20%                    |                 5 |              0.11064 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.562  | 10-15%                  |                 5 |              0.1124  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5651 | >20%                    |                 5 |              0.11302 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5716 | >20%                    |                 2 |              0.2858  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5772 | >20%                    |                 2 |              0.2886  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5826 | >20%                    |                 5 |              0.11652 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5918 | >20%                    |                 5 |              0.11836 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5937 | >20%                    |                 5 |              0.11874 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5939 | 5-10%                   |                 5 |              0.11878 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5967 | 5-10%                   |                 2 |              0.29835 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6002 | >20%                    |                 2 |              0.3001  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6039 | >20%                    |                 2 |              0.30195 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6061 | <5%                     |                 5 |              0.12122 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6106 | >20%                    |                 5 |              0.12212 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.612  | 5-10%                   |                 5 |              0.1224  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6138 | >20%                    |                 2 |              0.3069  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6188 | >20%                    |                 2 |              0.3094  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6254 | >20%                    |                 5 |              0.12508 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6305 | >20%                    |                10 |              0.06305 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.637  | >20%                    |                10 |              0.0637  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6377 | <5%                     |                10 |              0.06377 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6443 | >20%                    |                 5 |              0.12886 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6514 | 10-15%                  |                 5 |              0.13028 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6644 | >20%                    |                 5 |              0.13288 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6754 | >20%                    |                 2 |              0.3377  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6805 | <5%                     |                 5 |              0.1361  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6873 | >20%                    |                10 |              0.06873 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6942 | 15-20%                  |                 2 |              0.3471  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6954 | >20%                    |                 5 |              0.13908 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7001 | 15-20%                  |                 2 |              0.35005 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7058 | 5-10%                   |                 5 |              0.14116 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7176 | <5%                     |                 5 |              0.14352 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.732  | >20%                    |                 5 |              0.1464  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7434 | >20%                    |                10 |              0.07434 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7447 | 15-20%                  |                10 |              0.07447 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7455 | 15-20%                  |                10 |              0.07455 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7537 | >20%                    |                 5 |              0.15074 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7565 | >20%                    |                 5 |              0.1513  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7712 | 15-20%                  |                 5 |              0.15424 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.774  | <5%                     |                10 |              0.0774  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.792  | >20%                    |                10 |              0.0792  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8031 | >20%                    |                 5 |              0.16062 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8194 | >20%                    |                 2 |              0.4097  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.82   | >20%                    |                10 |              0.082   |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8206 | >20%                    |                 5 |              0.16412 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8247 | 5-10%                   |                10 |              0.08247 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8254 | >20%                    |                 5 |              0.16508 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8331 | <5%                     |                10 |              0.08331 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8644 | >20%                    |                10 |              0.08644 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8753 | 15-20%                  |                10 |              0.08753 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8855 | 5-10%                   |                 5 |              0.1771  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8866 | 5-10%                   |                10 |              0.08866 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8868 | <5%                     |                10 |              0.08868 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8878 | >20%                    |                10 |              0.08878 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8928 | 5-10%                   |                10 |              0.08928 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.918  | >20%                    |                 5 |              0.1836  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9224 | 5-10%                   |                10 |              0.09224 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9335 | >20%                    |                10 |              0.09335 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.952  | >20%                    |                10 |              0.0952  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9576 | 15-20%                  |                10 |              0.09576 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9581 | 15-20%                  |                10 |              0.09581 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9582 | 15-20%                  |                 5 |              0.19164 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9593 | 5-10%                   |                10 |              0.09593 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9642 | 5-10%                   |                10 |              0.09642 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.978  | 15-20%                  |                10 |              0.0978  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9863 | <5%                     |                10 |              0.09863 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9878 | 5-10%                   |                10 |              0.09878 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9966 | 15-20%                  |                10 |              0.09966 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9994 | >20%                    |                10 |              0.09994 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.002  | 15-20%                  |                10 |              0.1002  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.031  | <5%                     |                10 |              0.1031  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0314 | >20%                    |                 2 |              0.5157  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0831 | 5-10%                   |                10 |              0.10831 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0856 | >20%                    |                10 |              0.10856 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1065 | >20%                    |                10 |              0.11065 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1091 | >20%                    |                10 |              0.11091 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1156 | >20%                    |                10 |              0.11156 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1236 | >20%                    |                 5 |              0.22472 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1303 | 15-20%                  |                10 |              0.11303 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1417 | >20%                    |                10 |              0.11417 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1446 | >20%                    |                10 |              0.11446 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1604 | >20%                    |                10 |              0.11604 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1662 | >20%                    |                 2 |              0.5831  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1757 | >20%                    |                 5 |              0.23514 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.1844 | >20%                    |                 5 |              0.23688 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1955 | <5%                     |                 2 |              0.59775 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2517 | <5%                     |                10 |              0.12517 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2871 | >20%                    |                10 |              0.12871 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3181 | >20%                    |                 5 |              0.26362 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3314 | 15-20%                  |                 5 |              0.26628 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3649 | >20%                    |                10 |              0.13649 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4194 | >20%                    |                 2 |              0.7097  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4524 | 5-10%                   |                10 |              0.14524 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.5159 | >20%                    |                 5 |              0.30318 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5408 | <5%                     |                 5 |              0.30816 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5742 | >20%                    |                10 |              0.15742 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.6828 | 5-10%                   |                 2 |              0.8414  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9474 | 10-15%                  |                10 |              0.19474 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9975 | 5-10%                   |                10 |              0.19975 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0785 | <5%                     |                10 |              0.20785 |