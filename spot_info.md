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

Data correct as of 2026-08-13 02:19:10.268293, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.182  | >20%                    |                 2 |              0.091   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1833 | >20%                    |                 2 |              0.09165 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1973 | >20%                    |                 2 |              0.09865 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2057 | >20%                    |                 2 |              0.10285 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.22   | 15-20%                  |                 2 |              0.11    |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2201 | >20%                    |                 2 |              0.11005 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2385 | 10-15%                  |                 2 |              0.11925 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2476 | >20%                    |                 5 |              0.04952 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2569 | >20%                    |                 2 |              0.12845 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2689 | >20%                    |                 2 |              0.13445 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2706 | 15-20%                  |                 2 |              0.1353  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2884 | >20%                    |                 2 |              0.1442  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2936 | 15-20%                  |                 2 |              0.1468  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2941 | >20%                    |                 2 |              0.14705 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3078 | >20%                    |                 2 |              0.1539  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3099 | 10-15%                  |                 2 |              0.15495 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3146 | 5-10%                   |                10 |              0.03146 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3232 | 15-20%                  |                 5 |              0.06464 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3245 | >20%                    |                 5 |              0.0649  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.328  | 15-20%                  |                 2 |              0.164   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.34   | >20%                    |                 5 |              0.068   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.341  | >20%                    |                 5 |              0.0682  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3464 | 5-10%                   |                10 |              0.03464 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3517 | >20%                    |                 2 |              0.17585 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3721 | <5%                     |                 2 |              0.18605 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3847 | >20%                    |                 2 |              0.19235 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3874 | >20%                    |                 5 |              0.07748 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3875 | >20%                    |                10 |              0.03875 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3951 | 10-15%                  |                 2 |              0.19755 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4014 | >20%                    |                10 |              0.04014 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4059 | 15-20%                  |                 2 |              0.20295 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4066 | >20%                    |                10 |              0.04066 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4067 | >20%                    |                 2 |              0.20335 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.41   | <5%                     |                 2 |              0.205   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4141 | >20%                    |                 2 |              0.20705 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4163 | >20%                    |                 5 |              0.08326 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4176 | >20%                    |                 5 |              0.08352 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4274 | >20%                    |                 5 |              0.08548 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4426 | >20%                    |                 2 |              0.2213  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4461 | >20%                    |                10 |              0.04461 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4479 | 10-15%                  |                 2 |              0.22395 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4504 | >20%                    |                 5 |              0.09008 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4535 | >20%                    |                 2 |              0.22675 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4543 | >20%                    |                 5 |              0.09086 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4559 | >20%                    |                 2 |              0.22795 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4565 | >20%                    |                 2 |              0.22825 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4635 | 15-20%                  |                 5 |              0.0927  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4679 | >20%                    |                 5 |              0.09358 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4721 | >20%                    |                 2 |              0.23605 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4728 | 5-10%                   |                10 |              0.04728 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4872 | >20%                    |                 2 |              0.2436  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4972 | >20%                    |                 5 |              0.09944 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5063 | >20%                    |                 5 |              0.10126 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5113 | >20%                    |                 5 |              0.10226 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5124 | >20%                    |                 5 |              0.10248 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5394 | >20%                    |                 5 |              0.10788 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5397 | >20%                    |                 2 |              0.26985 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5428 | 10-15%                  |                10 |              0.05428 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5479 | 5-10%                   |                 2 |              0.27395 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5499 | >20%                    |                10 |              0.05499 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.553  | >20%                    |                 2 |              0.2765  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5541 | <5%                     |                 2 |              0.27705 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5659 | >20%                    |                 5 |              0.11318 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5707 | 15-20%                  |                10 |              0.05707 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5728 | >20%                    |                 2 |              0.2864  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5752 | >20%                    |                 2 |              0.2876  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5782 | >20%                    |                10 |              0.05782 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5834 | 10-15%                  |                 5 |              0.11668 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5973 | >20%                    |                 5 |              0.11946 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6008 | >20%                    |                10 |              0.06008 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.607  | >20%                    |                 5 |              0.1214  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6115 | >20%                    |                 5 |              0.1223  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.62   | 15-20%                  |                 5 |              0.124   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6221 | <5%                     |                 5 |              0.12442 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6259 | >20%                    |                 5 |              0.12518 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6259 | >20%                    |                 5 |              0.12518 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6285 | 5-10%                   |                 5 |              0.1257  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6326 | >20%                    |                10 |              0.06326 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6344 | >20%                    |                 5 |              0.12688 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6663 | >20%                    |                 5 |              0.13326 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6822 | >20%                    |                 2 |              0.3411  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6844 | >20%                    |                 5 |              0.13688 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6848 | >20%                    |                 2 |              0.3424  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6888 | >20%                    |                10 |              0.06888 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7257 | >20%                    |                10 |              0.07257 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7268 | >20%                    |                10 |              0.07268 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7415 | >20%                    |                10 |              0.07415 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7461 | >20%                    |                 5 |              0.14922 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7466 | >20%                    |                 5 |              0.14932 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.758  | >20%                    |                10 |              0.0758  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7707 | >20%                    |                 5 |              0.15414 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7719 | >20%                    |                 5 |              0.15438 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7725 | >20%                    |                 2 |              0.38625 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7774 | >20%                    |                 5 |              0.15548 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7801 |                         |                 2 |              0.39005 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7883 | >20%                    |                 2 |              0.39415 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7947 | >20%                    |                10 |              0.07947 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8189 | <5%                     |                10 |              0.08189 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8276 | 10-15%                  |                 2 |              0.4138  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8324 | 10-15%                  |                 2 |              0.4162  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8325 | 5-10%                   |                10 |              0.08325 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8501 | 15-20%                  |                10 |              0.08501 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8737 | 15-20%                  |                10 |              0.08737 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8757 | >20%                    |                 5 |              0.17514 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8831 | >20%                    |                 5 |              0.17662 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8835 | 15-20%                  |                10 |              0.08835 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.893  | >20%                    |                10 |              0.0893  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9014 | >20%                    |                10 |              0.09014 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9038 | >20%                    |                10 |              0.09038 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9047 | 5-10%                   |                10 |              0.09047 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9077 | >20%                    |                10 |              0.09077 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9152 | 15-20%                  |                10 |              0.09152 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9156 |                         |                 2 |              0.4578  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9179 |                         |                 5 |              0.18358 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9183 | >20%                    |                10 |              0.09183 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9259 | >20%                    |                10 |              0.09259 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9421 | >20%                    |                 5 |              0.18842 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9821 | >20%                    |                 2 |              0.49105 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9904 | >20%                    |                 5 |              0.19808 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9962 | >20%                    |                10 |              0.09962 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0057 | >20%                    |                10 |              0.10057 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0176 | >20%                    |                10 |              0.10176 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0196 | 15-20%                  |                10 |              0.10196 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0219 | >20%                    |                10 |              0.10219 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0232 | >20%                    |                 5 |              0.20464 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0671 | >20%                    |                 5 |              0.21342 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0954 | 15-20%                  |                 2 |              0.5477  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1002 |                         |                10 |              0.11002 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1161 | >20%                    |                 2 |              0.55805 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1577 | >20%                    |                10 |              0.11577 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2393 | >20%                    |                10 |              0.12393 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2476 | >20%                    |                 5 |              0.24952 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2616 | 15-20%                  |                10 |              0.12616 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2934 | >20%                    |                10 |              0.12934 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3171 |                         |                 5 |              0.26342 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3282 | 5-10%                   |                 2 |              0.6641  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3358 | >20%                    |                 5 |              0.26716 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3449 | >20%                    |                 5 |              0.26898 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3591 | >20%                    |                10 |              0.13591 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.4351 | >20%                    |                 5 |              0.28702 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4387 | 10-15%                  |                10 |              0.14387 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4493 | 10-15%                  |                 2 |              0.72465 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4629 | >20%                    |                10 |              0.14629 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4974 | >20%                    |                10 |              0.14974 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5262 | 5-10%                   |                 2 |              0.7631  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.577  | 15-20%                  |                10 |              0.1577  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5825 | 5-10%                   |                 5 |              0.3165  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5896 | 15-20%                  |                 5 |              0.31792 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6054 | 5-10%                   |                10 |              0.16054 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6115 | >20%                    |                10 |              0.16115 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6963 | >20%                    |                10 |              0.16963 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8341 |                         |                10 |              0.18341 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9266 | 5-10%                   |                 2 |              0.9633  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.7634 | >20%                    |                 5 |              0.55268 |