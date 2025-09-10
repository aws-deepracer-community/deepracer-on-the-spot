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

Data correct as of 2025-09-10 01:42:30.984161, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0885 | 5-10%                   |                 2 |              0.04425 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0954 | 5-10%                   |                 2 |              0.0477  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.157  | >20%                    |                 2 |              0.0785  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1813 | >20%                    |                 5 |              0.03626 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1863 | >20%                    |                 2 |              0.09315 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1896 | >20%                    |                 2 |              0.0948  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.202  | >20%                    |                 2 |              0.101   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2129 | 10-15%                  |                 2 |              0.10645 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2294 | >20%                    |                 2 |              0.1147  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.235  | 10-15%                  |                 5 |              0.047   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.253  | >20%                    |                 2 |              0.1265  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2609 | >20%                    |                 2 |              0.13045 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2663 | >20%                    |                 2 |              0.13315 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2828 | >20%                    |                 5 |              0.05656 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2977 | 15-20%                  |                 2 |              0.14885 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3049 | >20%                    |                 2 |              0.15245 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3128 | 10-15%                  |                 2 |              0.1564  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3135 | >20%                    |                 2 |              0.15675 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3168 | 5-10%                   |                 2 |              0.1584  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3204 | 5-10%                   |                 2 |              0.1602  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3224 | 15-20%                  |                 5 |              0.06448 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3305 | >20%                    |                 2 |              0.16525 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3541 | >20%                    |                 2 |              0.17705 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3593 | 10-15%                  |                 5 |              0.07186 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3599 | >20%                    |                 5 |              0.07198 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3604 | >20%                    |                 2 |              0.1802  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.363  | >20%                    |                 2 |              0.1815  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3712 | >20%                    |                 5 |              0.07424 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3733 | 10-15%                  |                10 |              0.03733 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3805 | 10-15%                  |                 2 |              0.19025 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3807 | 15-20%                  |                 2 |              0.19035 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3839 | >20%                    |                 2 |              0.19195 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3848 | >20%                    |                 2 |              0.1924  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3852 | 15-20%                  |                10 |              0.03852 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3932 | >20%                    |                 2 |              0.1966  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3978 | >20%                    |                10 |              0.03978 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4069 | >20%                    |                 5 |              0.08138 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4134 | >20%                    |                10 |              0.04134 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4185 | 15-20%                  |                 2 |              0.20925 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4192 | >20%                    |                 5 |              0.08384 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4192 | >20%                    |                 5 |              0.08384 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4212 | >20%                    |                 5 |              0.08424 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4314 | >20%                    |                 2 |              0.2157  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4376 | >20%                    |                 5 |              0.08752 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4386 | >20%                    |                 2 |              0.2193  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4389 | >20%                    |                 5 |              0.08778 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4417 | 10-15%                  |                 2 |              0.22085 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4455 | >20%                    |                 5 |              0.0891  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4456 | >20%                    |                10 |              0.04456 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4577 | 10-15%                  |                 2 |              0.22885 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4615 | 5-10%                   |                 2 |              0.23075 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4627 | >20%                    |                 2 |              0.23135 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4692 | >20%                    |                 2 |              0.2346  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4704 | 15-20%                  |                 2 |              0.2352  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.476  | <5%                     |                 2 |              0.238   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4813 | >20%                    |                 5 |              0.09626 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4813 | >20%                    |                 5 |              0.09626 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4868 | >20%                    |                 5 |              0.09736 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4896 | 15-20%                  |                 2 |              0.2448  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4907 | >20%                    |                 2 |              0.24535 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5007 | >20%                    |                 5 |              0.10014 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5098 | >20%                    |                 2 |              0.2549  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5109 | >20%                    |                 5 |              0.10218 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5112 | 5-10%                   |                 5 |              0.10224 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.515  | 10-15%                  |                 2 |              0.2575  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.517  | >20%                    |                 2 |              0.2585  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.518  | >20%                    |                 2 |              0.259   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5195 | >20%                    |                 5 |              0.1039  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5222 | 15-20%                  |                10 |              0.05222 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5294 | >20%                    |                 2 |              0.2647  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5333 | >20%                    |                 2 |              0.26665 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5369 | 5-10%                   |                 2 |              0.26845 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.549  | >20%                    |                 5 |              0.1098  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5536 | >20%                    |                 2 |              0.2768  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5641 | >20%                    |                 5 |              0.11282 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5759 | >20%                    |                 2 |              0.28795 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.586  | >20%                    |                 5 |              0.1172  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5872 | >20%                    |                 5 |              0.11744 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5913 | 10-15%                  |                 5 |              0.11826 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5938 | >20%                    |                 5 |              0.11876 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5972 | >20%                    |                 5 |              0.11944 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5987 | <5%                     |                 2 |              0.29935 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5999 | >20%                    |                 2 |              0.29995 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6031 | >20%                    |                 5 |              0.12062 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6086 | 15-20%                  |                 5 |              0.12172 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6229 | 10-15%                  |                 5 |              0.12458 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6309 | 10-15%                  |                 2 |              0.31545 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6394 | >20%                    |                 5 |              0.12788 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6398 | 15-20%                  |                 5 |              0.12796 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6434 | >20%                    |                 5 |              0.12868 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6436 | 5-10%                   |                10 |              0.06436 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6493 | 15-20%                  |                 2 |              0.32465 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6541 | 15-20%                  |                 5 |              0.13082 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.658  | >20%                    |                 5 |              0.1316  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6611 | 15-20%                  |                 5 |              0.13222 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6701 | >20%                    |                 5 |              0.13402 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6706 | >20%                    |                 2 |              0.3353  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6786 | 15-20%                  |                10 |              0.06786 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6896 | >20%                    |                 5 |              0.13792 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6909 | >20%                    |                 2 |              0.34545 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6911 | >20%                    |                 5 |              0.13822 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6985 | >20%                    |                 5 |              0.1397  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7176 | >20%                    |                 5 |              0.14352 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7179 | >20%                    |                 5 |              0.14358 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7202 | >20%                    |                 5 |              0.14404 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7293 | >20%                    |                10 |              0.07293 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7336 | >20%                    |                10 |              0.07336 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7475 | >20%                    |                 5 |              0.1495  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7516 | >20%                    |                10 |              0.07516 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7525 | >20%                    |                 5 |              0.1505  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7548 | >20%                    |                10 |              0.07548 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7749 | >20%                    |                10 |              0.07749 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7817 | >20%                    |                10 |              0.07817 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7944 | >20%                    |                 5 |              0.15888 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8106 | 15-20%                  |                10 |              0.08106 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.816  | 15-20%                  |                10 |              0.0816  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8174 | >20%                    |                 5 |              0.16348 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8327 | 10-15%                  |                10 |              0.08327 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8392 | 10-15%                  |                 2 |              0.4196  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.852  | <5%                     |                10 |              0.0852  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8543 | >20%                    |                10 |              0.08543 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8574 | >20%                    |                 5 |              0.17148 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8607 | 10-15%                  |                10 |              0.08607 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8938 | <5%                     |                10 |              0.08938 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8966 | 10-15%                  |                10 |              0.08966 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9243 | 15-20%                  |                10 |              0.09243 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9252 | >20%                    |                 5 |              0.18504 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9288 | 5-10%                   |                10 |              0.09288 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9426 | <5%                     |                10 |              0.09426 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9465 | 15-20%                  |                10 |              0.09465 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9522 | >20%                    |                10 |              0.09522 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.965  | 10-15%                  |                10 |              0.0965  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9832 | 15-20%                  |                10 |              0.09832 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9921 | >20%                    |                10 |              0.09921 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0061 | >20%                    |                10 |              0.10061 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0125 | 15-20%                  |                10 |              0.10125 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.013  | >20%                    |                 2 |              0.5065  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0222 | 5-10%                   |                10 |              0.10222 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0227 | >20%                    |                10 |              0.10227 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0252 | 5-10%                   |                10 |              0.10252 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0392 | >20%                    |                 2 |              0.5196  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0475 | >20%                    |                10 |              0.10475 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0494 | 15-20%                  |                10 |              0.10494 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.056  | >20%                    |                 5 |              0.2112  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.069  | 10-15%                  |                 5 |              0.2138  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0897 | <5%                     |                10 |              0.10897 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0984 | >20%                    |                10 |              0.10984 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1119 | 5-10%                   |                10 |              0.11119 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1218 | >20%                    |                 2 |              0.5609  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1226 | >20%                    |                10 |              0.11226 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.13   | 15-20%                  |                10 |              0.113   |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1385 | >20%                    |                 5 |              0.2277  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1412 | 10-15%                  |                 2 |              0.5706  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1599 | 15-20%                  |                10 |              0.11599 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1615 | >20%                    |                10 |              0.11615 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1876 | >20%                    |                10 |              0.11876 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.194  | >20%                    |                 5 |              0.2388  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2178 | >20%                    |                10 |              0.12178 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2843 | 5-10%                   |                 2 |              0.64215 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2856 | >20%                    |                 5 |              0.25712 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3286 | 10-15%                  |                10 |              0.13286 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3456 | >20%                    |                10 |              0.13456 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3959 | 10-15%                  |                 5 |              0.27918 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4247 | 10-15%                  |                 5 |              0.28494 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.5276 | >20%                    |                10 |              0.15276 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5424 | >20%                    |                10 |              0.15424 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5614 | >20%                    |                10 |              0.15614 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6509 | >20%                    |                10 |              0.16509 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6985 | >20%                    |                10 |              0.16985 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7686 | 15-20%                  |                10 |              0.17686 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2413 | 10-15%                  |                10 |              0.22413 |