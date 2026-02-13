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

Data correct as of 2026-02-13 02:41:59.648090, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.154  | >20%                    |                 2 |              0.077   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1562 | >20%                    |                 2 |              0.0781  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1952 | 5-10%                   |                 2 |              0.0976  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2042 | >20%                    |                 2 |              0.1021  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2043 | >20%                    |                 2 |              0.10215 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2137 | >20%                    |                 5 |              0.04274 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2177 | >20%                    |                 5 |              0.04354 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2238 | <5%                     |                 5 |              0.04476 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2362 | >20%                    |                 5 |              0.04724 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2526 | >20%                    |                 2 |              0.1263  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2566 | 15-20%                  |                 2 |              0.1283  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2567 | 10-15%                  |                 2 |              0.12835 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2612 | 10-15%                  |                 2 |              0.1306  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2642 | 5-10%                   |                10 |              0.02642 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2663 | >20%                    |                 2 |              0.13315 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | >20%                    |                 2 |              0.1392  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | >20%                    |                 2 |              0.14245 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2998 | >20%                    |                 2 |              0.1499  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3012 | >20%                    |                 2 |              0.1506  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3024 | >20%                    |                 2 |              0.1512  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3104 | >20%                    |                 5 |              0.06208 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3116 | >20%                    |                 2 |              0.1558  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3196 | >20%                    |                 2 |              0.1598  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3416 | >20%                    |                 5 |              0.06832 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3418 | >20%                    |                 5 |              0.06836 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3587 | 5-10%                   |                 2 |              0.17935 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.36   | <5%                     |                 2 |              0.18    |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3606 | 15-20%                  |                 2 |              0.1803  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3608 | <5%                     |                 5 |              0.07216 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3614 | 15-20%                  |                 2 |              0.1807  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3631 | 5-10%                   |                10 |              0.03631 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3642 | <5%                     |                 5 |              0.07284 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.365  | >20%                    |                 2 |              0.1825  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3686 | <5%                     |                 2 |              0.1843  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3697 | >20%                    |                 5 |              0.07394 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3737 | >20%                    |                 2 |              0.18685 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3749 | 5-10%                   |                 2 |              0.18745 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.376  | 5-10%                   |                 5 |              0.0752  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3784 | >20%                    |                 5 |              0.07568 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3841 | >20%                    |                 5 |              0.07682 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3872 | >20%                    |                 5 |              0.07744 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3886 | >20%                    |                10 |              0.03886 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3888 | <5%                     |                 5 |              0.07776 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3889 | 10-15%                  |                 2 |              0.19445 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3896 | >20%                    |                10 |              0.03896 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3939 | >20%                    |                 2 |              0.19695 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4005 | >20%                    |                 2 |              0.20025 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4022 | >20%                    |                 5 |              0.08044 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4029 | >20%                    |                 5 |              0.08058 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4081 | 10-15%                  |                 5 |              0.08162 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4134 | >20%                    |                 2 |              0.2067  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.4182 | <5%                     |                 5 |              0.08364 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4207 | 5-10%                   |                 2 |              0.21035 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4222 | >20%                    |                 2 |              0.2111  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4247 | 15-20%                  |                 2 |              0.21235 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4266 | >20%                    |                 5 |              0.08532 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4274 | >20%                    |                 5 |              0.08548 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4287 | <5%                     |                 2 |              0.21435 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4289 | <5%                     |                 2 |              0.21445 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4348 | 15-20%                  |                 5 |              0.08696 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4358 | >20%                    |                 2 |              0.2179  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4371 | >20%                    |                10 |              0.04371 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.442  | 5-10%                   |                 2 |              0.221   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4426 | 5-10%                   |                 2 |              0.2213  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4431 | 15-20%                  |                 2 |              0.22155 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4473 | >20%                    |                 5 |              0.08946 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4526 | >20%                    |                 2 |              0.2263  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4576 | >20%                    |                 2 |              0.2288  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4626 | 15-20%                  |                 2 |              0.2313  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.465  | >20%                    |                 2 |              0.2325  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4697 | 5-10%                   |                 2 |              0.23485 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.474  | >20%                    |                 2 |              0.237   |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4757 | 5-10%                   |                 5 |              0.09514 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4762 | >20%                    |                10 |              0.04762 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4769 | 15-20%                  |                 5 |              0.09538 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4958 | >20%                    |                 2 |              0.2479  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5019 | >20%                    |                 2 |              0.25095 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5043 | >20%                    |                 2 |              0.25215 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5093 | >20%                    |                10 |              0.05093 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5124 | <5%                     |                 2 |              0.2562  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5131 | 15-20%                  |                10 |              0.05131 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5169 | >20%                    |                10 |              0.05169 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5228 | >20%                    |                 5 |              0.10456 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.526  | <5%                     |                 5 |              0.1052  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.528  | >20%                    |                 5 |              0.1056  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5366 | 15-20%                  |                 5 |              0.10732 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5451 | >20%                    |                 5 |              0.10902 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5492 | >20%                    |                10 |              0.05492 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5592 | >20%                    |                 5 |              0.11184 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5796 | 5-10%                   |                 5 |              0.11592 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5814 | 15-20%                  |                10 |              0.05814 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5858 | >20%                    |                10 |              0.05858 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5863 | >20%                    |                 5 |              0.11726 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5922 | >20%                    |                 2 |              0.2961  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5946 | <5%                     |                 5 |              0.11892 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5968 | 5-10%                   |                 2 |              0.2984  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5973 | >20%                    |                 5 |              0.11946 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5984 | >20%                    |                10 |              0.05984 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5998 | 5-10%                   |                 5 |              0.11996 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6031 | <5%                     |                10 |              0.06031 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6042 | 10-15%                  |                 5 |              0.12084 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6127 | 15-20%                  |                 2 |              0.30635 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6153 | <5%                     |                10 |              0.06153 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6183 | >20%                    |                 5 |              0.12366 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6208 | >20%                    |                 5 |              0.12416 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6393 | 15-20%                  |                10 |              0.06393 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6462 | >20%                    |                 5 |              0.12924 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6557 | >20%                    |                 5 |              0.13114 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6606 | >20%                    |                 5 |              0.13212 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6707 | 5-10%                   |                 2 |              0.33535 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6728 | 15-20%                  |                 5 |              0.13456 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6753 | 15-20%                  |                10 |              0.06753 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6861 | 5-10%                   |                 5 |              0.13722 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6865 | >20%                    |                 5 |              0.1373  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6894 | 5-10%                   |                 5 |              0.13788 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6938 | >20%                    |                10 |              0.06938 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6963 | >20%                    |                10 |              0.06963 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6987 | 10-15%                  |                10 |              0.06987 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7055 | <5%                     |                10 |              0.07055 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7102 | <5%                     |                10 |              0.07102 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7173 | >20%                    |                 5 |              0.14346 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7174 | <5%                     |                10 |              0.07174 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7362 | >20%                    |                 2 |              0.3681  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7404 | >20%                    |                10 |              0.07404 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7426 | 10-15%                  |                10 |              0.07426 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7453 | >20%                    |                 5 |              0.14906 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7484 | >20%                    |                10 |              0.07484 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7497 | >20%                    |                10 |              0.07497 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7575 | 15-20%                  |                10 |              0.07575 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7669 | >20%                    |                 2 |              0.38345 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7824 | <5%                     |                10 |              0.07824 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7972 | >20%                    |                 5 |              0.15944 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7994 | >20%                    |                 5 |              0.15988 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.803  | >20%                    |                 5 |              0.1606  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8086 | 10-15%                  |                 2 |              0.4043  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8168 | >20%                    |                10 |              0.08168 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8182 | >20%                    |                 5 |              0.16364 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8185 | 5-10%                   |                10 |              0.08185 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8247 | <5%                     |                10 |              0.08247 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8264 | >20%                    |                10 |              0.08264 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8306 | 5-10%                   |                10 |              0.08306 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8315 | >20%                    |                10 |              0.08315 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8349 | <5%                     |                 5 |              0.16698 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8434 | <5%                     |                10 |              0.08434 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8677 | >20%                    |                 2 |              0.43385 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8694 | >20%                    |                10 |              0.08694 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8737 | >20%                    |                10 |              0.08737 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8758 | >20%                    |                 2 |              0.4379  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8766 | >20%                    |                 5 |              0.17532 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.91   | 10-15%                  |                10 |              0.091   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9146 | >20%                    |                 2 |              0.4573  |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9273 |                         |                 2 |              0.46365 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9406 | <5%                     |                10 |              0.09406 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9416 | >20%                    |                 5 |              0.18832 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.946  | <5%                     |                10 |              0.0946  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9556 | >20%                    |                 2 |              0.4778  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9878 | >20%                    |                10 |              0.09878 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9993 | >20%                    |                10 |              0.09993 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0214 | 15-20%                  |                10 |              0.10214 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0301 | >20%                    |                10 |              0.10301 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.039  | >20%                    |                10 |              0.1039  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0493 | 15-20%                  |                10 |              0.10493 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0525 | 5-10%                   |                 5 |              0.2105  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0643 | >20%                    |                10 |              0.10643 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0692 | >20%                    |                 5 |              0.21384 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0791 | 5-10%                   |                10 |              0.10791 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1074 | 10-15%                  |                 5 |              0.22148 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1109 | >20%                    |                10 |              0.11109 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1325 | >20%                    |                 2 |              0.56625 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1464 | >20%                    |                10 |              0.11464 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1784 | >20%                    |                 5 |              0.23568 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1862 | <5%                     |                10 |              0.11862 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1886 | >20%                    |                10 |              0.11886 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2237 | >20%                    |                10 |              0.12237 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2349 |                         |                 5 |              0.24698 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2527 | >20%                    |                10 |              0.12527 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3568 | 10-15%                  |                 5 |              0.27136 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3979 | >20%                    |                10 |              0.13979 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4644 | >20%                    |                 2 |              0.7322  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.737  | 15-20%                  |                10 |              0.1737  |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8922 |                         |                10 |              0.18922 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.077  | 10-15%                  |                10 |              0.2077  |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4207 | <5%                     |                 5 |              0.48414 |