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

Data correct as of 2026-08-16 01:36:58.276252, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1699 | >20%                    |                 2 |              0.08495 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1724 | >20%                    |                 2 |              0.0862  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1976 | >20%                    |                 2 |              0.0988  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2017 | >20%                    |                 2 |              0.10085 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2048 | 15-20%                  |                 2 |              0.1024  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2095 | >20%                    |                 2 |              0.10475 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2321 | 10-15%                  |                 2 |              0.11605 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2467 | >20%                    |                 2 |              0.12335 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2516 | 15-20%                  |                 2 |              0.1258  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2674 | >20%                    |                 5 |              0.05348 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2679 | >20%                    |                 2 |              0.13395 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2732 | 15-20%                  |                 2 |              0.1366  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2858 | 10-15%                  |                 2 |              0.1429  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2875 | >20%                    |                 2 |              0.14375 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2886 | >20%                    |                 2 |              0.1443  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3055 | >20%                    |                 2 |              0.15275 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3108 | >20%                    |                 5 |              0.06216 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.334  | >20%                    |                 2 |              0.167   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3372 | 15-20%                  |                 5 |              0.06744 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3407 | 5-10%                   |                10 |              0.03407 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3477 | 15-20%                  |                 2 |              0.17385 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3489 | >20%                    |                 2 |              0.17445 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3539 | 5-10%                   |                10 |              0.03539 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3645 | >20%                    |                 5 |              0.0729  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3688 | >20%                    |                 5 |              0.07376 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3721 | <5%                     |                 2 |              0.18605 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3752 | >20%                    |                 5 |              0.07504 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3837 | 10-15%                  |                 2 |              0.19185 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3871 | >20%                    |                 5 |              0.07742 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3872 | >20%                    |                 5 |              0.07744 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.395  | >20%                    |                10 |              0.0395  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3961 | <5%                     |                 2 |              0.19805 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4011 | >20%                    |                 5 |              0.08022 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4062 | 15-20%                  |                 2 |              0.2031  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.413  | >20%                    |                10 |              0.0413  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.413  | 15-20%                  |                 5 |              0.0826  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4171 | >20%                    |                 2 |              0.20855 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.419  | >20%                    |                 5 |              0.0838  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4192 | >20%                    |                 2 |              0.2096  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4352 | >20%                    |                10 |              0.04352 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4486 | 10-15%                  |                 2 |              0.2243  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4529 | >20%                    |                 5 |              0.09058 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4549 | >20%                    |                 2 |              0.22745 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4566 | >20%                    |                 2 |              0.2283  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4646 | >20%                    |                 5 |              0.09292 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4695 | >20%                    |                 2 |              0.23475 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4697 | >20%                    |                 2 |              0.23485 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4717 | >20%                    |                10 |              0.04717 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4761 | >20%                    |                 2 |              0.23805 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.487  | >20%                    |                 2 |              0.2435  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4942 | >20%                    |                 5 |              0.09884 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4985 | >20%                    |                 2 |              0.24925 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5076 | 5-10%                   |                10 |              0.05076 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5116 | >20%                    |                 5 |              0.10232 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5161 | >20%                    |                10 |              0.05161 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5235 | >20%                    |                 5 |              0.1047  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5276 | >20%                    |                 5 |              0.10552 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5345 | >20%                    |                 5 |              0.1069  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5427 | >20%                    |                 2 |              0.27135 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5449 | >20%                    |                 2 |              0.27245 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5471 | <5%                     |                 2 |              0.27355 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5496 | 5-10%                   |                 2 |              0.2748  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5525 | >20%                    |                10 |              0.05525 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5526 | 10-15%                  |                10 |              0.05526 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5696 | >20%                    |                 2 |              0.2848  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.574  | 15-20%                  |                 5 |              0.1148  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5813 | >20%                    |                 5 |              0.11626 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5826 | 10-15%                  |                 5 |              0.11652 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5882 | >20%                    |                10 |              0.05882 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5887 | 15-20%                  |                10 |              0.05887 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.59   | >20%                    |                 5 |              0.118   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5972 | >20%                    |                 5 |              0.11944 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5991 | <5%                     |                 5 |              0.11982 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5998 | >20%                    |                10 |              0.05998 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6079 | >20%                    |                 5 |              0.12158 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6092 | >20%                    |                 5 |              0.12184 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6137 | >20%                    |                 5 |              0.12274 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6226 | >20%                    |                 5 |              0.12452 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6357 | >20%                    |                 5 |              0.12714 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6436 | 5-10%                   |                 5 |              0.12872 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6597 | >20%                    |                 2 |              0.32985 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6792 | >20%                    |                10 |              0.06792 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6846 | >20%                    |                 2 |              0.3423  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6878 | >20%                    |                10 |              0.06878 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6925 | >20%                    |                 5 |              0.1385  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7136 | >20%                    |                 5 |              0.14272 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7169 | >20%                    |                 2 |              0.35845 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7175 | >20%                    |                10 |              0.07175 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7224 | >20%                    |                 5 |              0.14448 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7473 | >20%                    |                 2 |              0.37365 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7612 | >20%                    |                10 |              0.07612 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7693 | >20%                    |                10 |              0.07693 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7749 | 15-20%                  |                10 |              0.07749 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7982 | >20%                    |                 5 |              0.15964 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8003 | >20%                    |                10 |              0.08003 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8329 | 10-15%                  |                 2 |              0.41645 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8332 | 10-15%                  |                 2 |              0.4166  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.838  | <5%                     |                10 |              0.0838  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.8621 | >20%                    |                 5 |              0.17242 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8641 | >20%                    |                 5 |              0.17282 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8646 | >20%                    |                10 |              0.08646 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8657 | >20%                    |                 5 |              0.17314 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8749 | >20%                    |                 5 |              0.17498 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8818 | >20%                    |                10 |              0.08818 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8847 | 15-20%                  |                10 |              0.08847 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8862 | >20%                    |                10 |              0.08862 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8863 |                         |                 2 |              0.44315 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8865 | 5-10%                   |                10 |              0.08865 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9052 | >20%                    |                 2 |              0.4526  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9075 |                         |                 2 |              0.45375 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.908  | >20%                    |                10 |              0.0908  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.911  | >20%                    |                10 |              0.0911  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9138 | >20%                    |                 5 |              0.18276 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9144 | >20%                    |                10 |              0.09144 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9148 | 15-20%                  |                10 |              0.09148 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9213 | >20%                    |                10 |              0.09213 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9239 | 5-10%                   |                10 |              0.09239 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9441 | 15-20%                  |                10 |              0.09441 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9448 | >20%                    |                10 |              0.09448 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9552 | >20%                    |                 5 |              0.19104 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9672 | >20%                    |                10 |              0.09672 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0113 | 15-20%                  |                 2 |              0.50565 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0311 | >20%                    |                10 |              0.10311 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0383 | 15-20%                  |                10 |              0.10383 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0453 | >20%                    |                 5 |              0.20906 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0508 |                         |                 5 |              0.21016 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0622 | >20%                    |                 5 |              0.21244 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0643 | >20%                    |                10 |              0.10643 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0943 |                         |                10 |              0.10943 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1307 | >20%                    |                 2 |              0.56535 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1615 | >20%                    |                 5 |              0.2323  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2075 | >20%                    |                10 |              0.12075 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2748 | >20%                    |                10 |              0.12748 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.2754 | >20%                    |                 5 |              0.25508 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2795 | >20%                    |                 5 |              0.2559  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3026 | 15-20%                  |                10 |              0.13026 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3091 | >20%                    |                 5 |              0.26182 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.334  |                         |                 5 |              0.2668  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3775 | >20%                    |                10 |              0.13775 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3841 | 5-10%                   |                 2 |              0.69205 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3974 | 10-15%                  |                10 |              0.13974 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4196 | 5-10%                   |                 5 |              0.28392 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4268 | 10-15%                  |                 2 |              0.7134  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4776 | 5-10%                   |                10 |              0.14776 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.5332 | 5-10%                   |                 2 |              0.7666  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5639 | >20%                    |                10 |              0.15639 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5728 | 15-20%                  |                 5 |              0.31456 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5767 | 15-20%                  |                10 |              0.15767 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5779 | >20%                    |                10 |              0.15779 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6092 | >20%                    |                10 |              0.16092 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.699  | >20%                    |                10 |              0.1699  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8735 |                         |                10 |              0.18735 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0533 | 5-10%                   |                 2 |              1.02665 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.7413 | >20%                    |                 5 |              0.54826 |