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

Data correct as of 2026-07-11 02:56:42.520165, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1497 | >20%                    |                 2 |              0.07485 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.16   | >20%                    |                 2 |              0.08    |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2252 | 15-20%                  |                 2 |              0.1126  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2454 | >20%                    |                 2 |              0.1227  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2513 | >20%                    |                 2 |              0.12565 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2553 | >20%                    |                 2 |              0.12765 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.257  | >20%                    |                 2 |              0.1285  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2573 | >20%                    |                 2 |              0.12865 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2579 | >20%                    |                 2 |              0.12895 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.262  | 15-20%                  |                 5 |              0.0524  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.268  | >20%                    |                 2 |              0.134   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2727 | 15-20%                  |                 2 |              0.13635 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2732 | 5-10%                   |                10 |              0.02732 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2893 | >20%                    |                 2 |              0.14465 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2944 | >20%                    |                 5 |              0.05888 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2956 | 10-15%                  |                 2 |              0.1478  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.302  | >20%                    |                 2 |              0.151   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3077 | 15-20%                  |                 2 |              0.15385 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3289 | >20%                    |                 5 |              0.06578 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3429 | >20%                    |                 2 |              0.17145 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3445 | >20%                    |                 5 |              0.0689  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3447 | 15-20%                  |                 5 |              0.06894 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3497 | 15-20%                  |                 5 |              0.06994 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3547 | >20%                    |                10 |              0.03547 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3604 | <5%                     |                 2 |              0.1802  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3625 | >20%                    |                 5 |              0.0725  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3642 | >20%                    |                 5 |              0.07284 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3647 | >20%                    |                 5 |              0.07294 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3656 | 5-10%                   |                10 |              0.03656 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.368  | >20%                    |                 2 |              0.184   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3718 | >20%                    |                10 |              0.03718 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3729 | >20%                    |                 5 |              0.07458 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3934 | 10-15%                  |                 2 |              0.1967  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3964 | 5-10%                   |                10 |              0.03964 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4129 | 10-15%                  |                 2 |              0.20645 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4184 | >20%                    |                 2 |              0.2092  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4274 | >20%                    |                 2 |              0.2137  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.429  | <5%                     |                 2 |              0.2145  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4301 | >20%                    |                 5 |              0.08602 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4344 | 10-15%                  |                 2 |              0.2172  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4418 | >20%                    |                 2 |              0.2209  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.442  | >20%                    |                10 |              0.0442  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4433 | >20%                    |                 5 |              0.08866 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4478 | 15-20%                  |                 2 |              0.2239  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4507 | >20%                    |                10 |              0.04507 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4518 | >20%                    |                 2 |              0.2259  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4551 | <5%                     |                 2 |              0.22755 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4565 | >20%                    |                10 |              0.04565 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.467  | >20%                    |                 5 |              0.0934  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4744 | >20%                    |                 5 |              0.09488 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.478  | >20%                    |                 2 |              0.239   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4979 | >20%                    |                 5 |              0.09958 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5004 | >20%                    |                 5 |              0.10008 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5013 | 15-20%                  |                 2 |              0.25065 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5026 | >20%                    |                 5 |              0.10052 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.504  | >20%                    |                 5 |              0.1008  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5067 | >20%                    |                 5 |              0.10134 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5079 | >20%                    |                 5 |              0.10158 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5094 | >20%                    |                 2 |              0.2547  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5122 | 15-20%                  |                 2 |              0.2561  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5248 | >20%                    |                 2 |              0.2624  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5358 | >20%                    |                10 |              0.05358 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5471 | >20%                    |                 2 |              0.27355 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5484 | >20%                    |                 5 |              0.10968 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.551  | 5-10%                   |                 2 |              0.2755  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.552  | >20%                    |                 5 |              0.1104  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.553  | >20%                    |                 5 |              0.1106  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5607 | 5-10%                   |                 5 |              0.11214 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.5707 |                         |                 2 |              0.28535 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5712 | 10-15%                  |                 5 |              0.11424 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5725 | >20%                    |                 5 |              0.1145  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5758 | >20%                    |                10 |              0.05758 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5938 | 15-20%                  |                 5 |              0.11876 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5948 | >20%                    |                 2 |              0.2974  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6084 | >20%                    |                 5 |              0.12168 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6104 | >20%                    |                 5 |              0.12208 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6106 | <5%                     |                 5 |              0.12212 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6136 | >20%                    |                 2 |              0.3068  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6394 | >20%                    |                10 |              0.06394 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6399 | >20%                    |                10 |              0.06399 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6436 | >20%                    |                 5 |              0.12872 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6477 | >20%                    |                 5 |              0.12954 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6534 | >20%                    |                 5 |              0.13068 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6541 | >20%                    |                10 |              0.06541 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6599 | >20%                    |                10 |              0.06599 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.6625 |                         |                10 |              0.06625 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6804 | >20%                    |                10 |              0.06804 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6806 | >20%                    |                 2 |              0.3403  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.682  | 10-15%                  |                10 |              0.0682  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6852 | >20%                    |                 2 |              0.3426  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6864 | >20%                    |                10 |              0.06864 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6914 | >20%                    |                10 |              0.06914 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7059 | >20%                    |                10 |              0.07059 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7135 | >20%                    |                 5 |              0.1427  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7149 | >20%                    |                 2 |              0.35745 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7214 | 10-15%                  |                 2 |              0.3607  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.723  | >20%                    |                 2 |              0.3615  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7291 | >20%                    |                 5 |              0.14582 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7508 | >20%                    |                 5 |              0.15016 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7557 |                         |                 2 |              0.37785 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7706 | >20%                    |                10 |              0.07706 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7838 | 15-20%                  |                10 |              0.07838 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.7849 | >20%                    |                 5 |              0.15698 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7908 | >20%                    |                 2 |              0.3954  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7908 | >20%                    |                 5 |              0.15816 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7997 | >20%                    |                10 |              0.07997 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8135 | >20%                    |                10 |              0.08135 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.818  | 5-10%                   |                10 |              0.0818  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8191 | 5-10%                   |                 2 |              0.40955 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8206 | <5%                     |                10 |              0.08206 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.821  | >20%                    |                10 |              0.0821  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8294 | 10-15%                  |                 2 |              0.4147  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8389 | 5-10%                   |                10 |              0.08389 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8453 | >20%                    |                 5 |              0.16906 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8499 | >20%                    |                10 |              0.08499 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8552 | 15-20%                  |                10 |              0.08552 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8599 | >20%                    |                10 |              0.08599 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8644 | 15-20%                  |                10 |              0.08644 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8672 | >20%                    |                10 |              0.08672 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8815 | >20%                    |                 5 |              0.1763  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8815 | >20%                    |                10 |              0.08815 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.907  | 5-10%                   |                 5 |              0.1814  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9071 |                         |                 5 |              0.18142 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9088 | 15-20%                  |                10 |              0.09088 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9354 | >20%                    |                10 |              0.09354 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9394 | >20%                    |                 5 |              0.18788 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9595 | >20%                    |                10 |              0.09595 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.971  | 15-20%                  |                10 |              0.0971  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9762 | >20%                    |                 5 |              0.19524 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0337 | >20%                    |                10 |              0.10337 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.0345 | >20%                    |                 5 |              0.2069  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.035  | >20%                    |                 5 |              0.207   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0494 | 15-20%                  |                10 |              0.10494 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0618 | >20%                    |                 2 |              0.5309  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0645 | 10-15%                  |                 2 |              0.53225 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0803 | >20%                    |                10 |              0.10803 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1047 | >20%                    |                 5 |              0.22094 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1413 | 5-10%                   |                10 |              0.11413 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.179  |                         |                10 |              0.1179  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.194  | >20%                    |                10 |              0.1194  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.2216 | >20%                    |                 5 |              0.24432 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2322 |                         |                 5 |              0.24644 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2562 | >20%                    |                10 |              0.12562 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2974 | >20%                    |                 5 |              0.25948 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3437 | 15-20%                  |                10 |              0.13437 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3707 | 15-20%                  |                10 |              0.13707 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3877 | >20%                    |                 5 |              0.27754 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4737 | >20%                    |                10 |              0.14737 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4796 | >20%                    |                10 |              0.14796 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4903 | 10-15%                  |                10 |              0.14903 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4923 | 15-20%                  |                 5 |              0.29846 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6556 | >20%                    |                10 |              0.16556 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.9093 | 5-10%                   |                 2 |              0.95465 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9132 | 5-10%                   |                 2 |              0.9566  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2588 | >20%                    |                10 |              0.22588 |