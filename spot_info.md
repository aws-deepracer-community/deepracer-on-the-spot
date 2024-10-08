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

Data correct as of 2024-10-08 01:37:26.227045, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.114  | <5%                     |                 2 |              0.057   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.134  | <5%                     |                 2 |              0.067   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.189  | 15-20%                  |                 2 |              0.0945  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1959 | 10-15%                  |                 2 |              0.09795 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2002 | >20%                    |                 5 |              0.04004 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2029 | 15-20%                  |                 2 |              0.10145 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.204  | 10-15%                  |                 2 |              0.102   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2113 | >20%                    |                 2 |              0.10565 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2229 | <5%                     |                 2 |              0.11145 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2322 | <5%                     |                 2 |              0.1161  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.234  | >20%                    |                 2 |              0.117   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.2403 | <5%                     |                 2 |              0.12015 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2412 | <5%                     |                 2 |              0.1206  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2586 | 15-20%                  |                 5 |              0.05172 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2656 | <5%                     |                 2 |              0.1328  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.267  | 5-10%                   |                 5 |              0.0534  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2745 | <5%                     |                 2 |              0.13725 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2765 | 5-10%                   |                 5 |              0.0553  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | 5-10%                   |                 2 |              0.1391  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2872 | >20%                    |                 5 |              0.05744 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | <5%                     |                 2 |              0.1437  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | <5%                     |                 2 |              0.14445 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2931 | 15-20%                  |                 2 |              0.14655 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3011 | 15-20%                  |                10 |              0.03011 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.31   | 5-10%                   |                 5 |              0.062   |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3147 | >20%                    |                 5 |              0.06294 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3207 | >20%                    |                 5 |              0.06414 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.323  | 15-20%                  |                 2 |              0.1615  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3238 | >20%                    |                 5 |              0.06476 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3255 | 15-20%                  |                 2 |              0.16275 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3361 | >20%                    |                 2 |              0.16805 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3417 | <5%                     |                 2 |              0.17085 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.355  | <5%                     |                 2 |              0.1775  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3628 | 5-10%                   |                 5 |              0.07256 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3645 | <5%                     |                 5 |              0.0729  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.377  | >20%                    |                 5 |              0.0754  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3806 | 5-10%                   |                 2 |              0.1903  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.384  | >20%                    |                10 |              0.0384  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3858 | 5-10%                   |                10 |              0.03858 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.388  | <5%                     |                 5 |              0.0776  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3987 | >20%                    |                 2 |              0.19935 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.4008 | 5-10%                   |                 5 |              0.08016 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4101 | 5-10%                   |                10 |              0.04101 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.414  | 5-10%                   |                 2 |              0.207   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4168 | >20%                    |                 2 |              0.2084  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4198 | <5%                     |                 2 |              0.2099  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4205 | 15-20%                  |                10 |              0.04205 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4327 | 15-20%                  |                 5 |              0.08654 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4327 | <5%                     |                 5 |              0.08654 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4329 | <5%                     |                 2 |              0.21645 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4342 | 5-10%                   |                10 |              0.04342 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4349 | 10-15%                  |                 5 |              0.08698 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.437  | >20%                    |                10 |              0.0437  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4401 | >20%                    |                 2 |              0.22005 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4472 | 5-10%                   |                 2 |              0.2236  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4483 | >20%                    |                 2 |              0.22415 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4533 | 5-10%                   |                10 |              0.04533 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4589 | 15-20%                  |                 2 |              0.22945 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4605 | 10-15%                  |                 5 |              0.0921  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | <5%                     |                 5 |              0.09452 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4766 | <5%                     |                 5 |              0.09532 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4766 | >20%                    |                 2 |              0.2383  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4841 | <5%                     |                 5 |              0.09682 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4869 | >20%                    |                 2 |              0.24345 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.4929 | <5%                     |                10 |              0.04929 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4997 | 10-15%                  |                 5 |              0.09994 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5    | <5%                     |                 5 |              0.1     |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5072 | >20%                    |                 2 |              0.2536  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5098 | <5%                     |                 5 |              0.10196 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5118 | <5%                     |                 5 |              0.10236 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5138 | <5%                     |                 5 |              0.10276 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5145 | 15-20%                  |                 5 |              0.1029  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5486 | >20%                    |                 5 |              0.10972 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5886 | >20%                    |                 5 |              0.11772 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5931 | >20%                    |                 5 |              0.11862 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6011 | 15-20%                  |                 5 |              0.12022 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6057 | >20%                    |                 5 |              0.12114 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6068 | >20%                    |                 2 |              0.3034  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6363 | 15-20%                  |                 5 |              0.12726 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6492 | >20%                    |                 5 |              0.12984 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6523 | >20%                    |                10 |              0.06523 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6579 | <5%                     |                10 |              0.06579 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6628 | <5%                     |                10 |              0.06628 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6668 | 5-10%                   |                 5 |              0.13336 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6898 | >20%                    |                 2 |              0.3449  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6994 | <5%                     |                10 |              0.06994 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7033 | 5-10%                   |                10 |              0.07033 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7279 | 15-20%                  |                10 |              0.07279 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7362 | 15-20%                  |                10 |              0.07362 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7379 | >20%                    |                10 |              0.07379 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7404 | >20%                    |                 5 |              0.14808 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7732 | >20%                    |                10 |              0.07732 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7746 | 15-20%                  |                10 |              0.07746 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7756 | 10-15%                  |                10 |              0.07756 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.778  | 15-20%                  |                10 |              0.0778  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7975 | 10-15%                  |                 5 |              0.1595  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7989 | 5-10%                   |                10 |              0.07989 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7998 | 5-10%                   |                10 |              0.07998 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.838  | >20%                    |                10 |              0.0838  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8461 | <5%                     |                10 |              0.08461 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8498 | >20%                    |                 2 |              0.4249  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8782 | <5%                     |                10 |              0.08782 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8836 | >20%                    |                 5 |              0.17672 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8895 | >20%                    |                10 |              0.08895 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8974 | >20%                    |                10 |              0.08974 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9102 | 10-15%                  |                10 |              0.09102 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9165 | <5%                     |                 2 |              0.45825 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9242 | <5%                     |                10 |              0.09242 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9616 | 10-15%                  |                 2 |              0.4808  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9632 | 5-10%                   |                10 |              0.09632 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9997 | 10-15%                  |                 5 |              0.19994 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0252 | <5%                     |                10 |              0.10252 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0354 | >20%                    |                10 |              0.10354 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0362 | >20%                    |                10 |              0.10362 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1116 | >20%                    |                 5 |              0.22232 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1214 | >20%                    |                10 |              0.11214 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.18   | >20%                    |                10 |              0.118   |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5231 | 5-10%                   |                10 |              0.15231 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.5341 | >20%                    |                10 |              0.15341 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5876 | 5-10%                   |                10 |              0.15876 |