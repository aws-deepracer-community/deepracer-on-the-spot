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

Data correct as of 2026-03-30 02:53:53.371580, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1994 | 15-20%                  |                 2 |              0.0997  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2219 | >20%                    |                 2 |              0.11095 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2223 | >20%                    |                 2 |              0.11115 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2272 | >20%                    |                 2 |              0.1136  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2454 | >20%                    |                 2 |              0.1227  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2477 | 10-15%                  |                 2 |              0.12385 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.254  | >20%                    |                 2 |              0.127   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2568 | 5-10%                   |                10 |              0.02568 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2654 | >20%                    |                 2 |              0.1327  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2733 | 15-20%                  |                 2 |              0.13665 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2755 | 15-20%                  |                 5 |              0.0551  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2907 | >20%                    |                10 |              0.02907 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.291  | >20%                    |                 5 |              0.0582  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2944 | 15-20%                  |                 5 |              0.05888 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3068 | 5-10%                   |                10 |              0.03068 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3078 | >20%                    |                 2 |              0.1539  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3151 | 10-15%                  |                 2 |              0.15755 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3188 | >20%                    |                 2 |              0.1594  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3249 | >20%                    |                 5 |              0.06498 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3277 | 15-20%                  |                 5 |              0.06554 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3291 | <5%                     |                 2 |              0.16455 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3325 | >20%                    |                10 |              0.03325 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3358 | >20%                    |                 5 |              0.06716 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3369 | >20%                    |                 5 |              0.06738 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3414 | 10-15%                  |                 2 |              0.1707  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3414 | >20%                    |                 2 |              0.1707  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3416 | <5%                     |                 5 |              0.06832 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3493 | <5%                     |                 2 |              0.17465 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3652 | 15-20%                  |                 2 |              0.1826  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3724 | >20%                    |                 2 |              0.1862  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3762 | >20%                    |                 5 |              0.07524 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3828 | >20%                    |                 5 |              0.07656 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3829 | 5-10%                   |                10 |              0.03829 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3837 | >20%                    |                 2 |              0.19185 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3853 | >20%                    |                 5 |              0.07706 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3888 | >20%                    |                 5 |              0.07776 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3988 | 10-15%                  |                 2 |              0.1994  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4076 | >20%                    |                10 |              0.04076 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4159 | 10-15%                  |                 2 |              0.20795 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4174 | >20%                    |                 2 |              0.2087  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4174 | <5%                     |                 2 |              0.2087  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4193 | >20%                    |                 2 |              0.20965 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4196 | 15-20%                  |                 2 |              0.2098  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4222 | >20%                    |                 2 |              0.2111  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4231 | >20%                    |                 5 |              0.08462 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4369 | >20%                    |                 2 |              0.21845 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4375 | >20%                    |                 5 |              0.0875  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4386 | 15-20%                  |                10 |              0.04386 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4466 | >20%                    |                 5 |              0.08932 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4561 | >20%                    |                 2 |              0.22805 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4561 | >20%                    |                 2 |              0.22805 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4571 | >20%                    |                 2 |              0.22855 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.46   | >20%                    |                 5 |              0.092   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4683 | 15-20%                  |                 2 |              0.23415 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | >20%                    |                 5 |              0.09452 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4767 | >20%                    |                 5 |              0.09534 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4774 | >20%                    |                 5 |              0.09548 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4867 | >20%                    |                 5 |              0.09734 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4946 | >20%                    |                 2 |              0.2473  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4948 | >20%                    |                 5 |              0.09896 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4962 | >20%                    |                 5 |              0.09924 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5015 | >20%                    |                 5 |              0.1003  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5075 | >20%                    |                 5 |              0.1015  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5115 | 15-20%                  |                 2 |              0.25575 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5182 | 15-20%                  |                 5 |              0.10364 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5191 | >20%                    |                 2 |              0.25955 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5202 | 15-20%                  |                10 |              0.05202 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.529  | 15-20%                  |                10 |              0.0529  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5305 | >20%                    |                 5 |              0.1061  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.537  | 5-10%                   |                 5 |              0.1074  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5383 | 5-10%                   |                 2 |              0.26915 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5626 | >20%                    |                 2 |              0.2813  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5649 | >20%                    |                 5 |              0.11298 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5697 | >20%                    |                10 |              0.05697 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5753 | >20%                    |                 2 |              0.28765 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5789 | 10-15%                  |                 5 |              0.11578 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5813 | >20%                    |                10 |              0.05813 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5824 | <5%                     |                10 |              0.05824 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5865 | >20%                    |                 5 |              0.1173  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5924 | >20%                    |                10 |              0.05924 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6239 | >20%                    |                 5 |              0.12478 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6314 | >20%                    |                10 |              0.06314 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6317 | 10-15%                  |                 2 |              0.31585 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6317 | >20%                    |                10 |              0.06317 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6319 | >20%                    |                 5 |              0.12638 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6566 | >20%                    |                 5 |              0.13132 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6606 | 5-10%                   |                10 |              0.06606 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6664 | >20%                    |                10 |              0.06664 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6702 | >20%                    |                10 |              0.06702 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6733 | >20%                    |                 5 |              0.13466 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6792 | >20%                    |                10 |              0.06792 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6793 | 5-10%                   |                 5 |              0.13586 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6799 | >20%                    |                10 |              0.06799 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6868 | >20%                    |                 5 |              0.13736 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6875 | >20%                    |                 2 |              0.34375 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7028 | >20%                    |                 5 |              0.14056 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7095 | >20%                    |                 2 |              0.35475 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7119 | >20%                    |                10 |              0.07119 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7366 | >20%                    |                 5 |              0.14732 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7438 | >20%                    |                 5 |              0.14876 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.753  | >20%                    |                10 |              0.0753  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7561 | >20%                    |                 5 |              0.15122 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7563 | 5-10%                   |                 2 |              0.37815 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7573 | >20%                    |                10 |              0.07573 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7667 | >20%                    |                10 |              0.07667 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7713 | >20%                    |                10 |              0.07713 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7714 | >20%                    |                 5 |              0.15428 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7772 | >20%                    |                10 |              0.07772 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7776 | >20%                    |                 5 |              0.15552 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.806  | 5-10%                   |                 2 |              0.403   |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8167 | >20%                    |                 2 |              0.40835 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8268 | >20%                    |                10 |              0.08268 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8272 | >20%                    |                 2 |              0.4136  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8299 | >20%                    |                 5 |              0.16598 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8403 | >20%                    |                 5 |              0.16806 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8425 | >20%                    |                 2 |              0.42125 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.844  | >20%                    |                10 |              0.0844  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.856  | >20%                    |                10 |              0.0856  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8583 | >20%                    |                10 |              0.08583 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8589 | >20%                    |                10 |              0.08589 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8671 | 5-10%                   |                10 |              0.08671 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8953 | >20%                    |                 2 |              0.44765 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8968 | 15-20%                  |                10 |              0.08968 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9098 | >20%                    |                10 |              0.09098 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9252 | >20%                    |                10 |              0.09252 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9399 | >20%                    |                10 |              0.09399 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9618 | 15-20%                  |                10 |              0.09618 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9777 | 10-15%                  |                10 |              0.09777 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.003  | 10-15%                  |                 2 |              0.5015  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0092 | >20%                    |                10 |              0.10092 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.016  | >20%                    |                 5 |              0.2032  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0226 | 15-20%                  |                10 |              0.10226 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0366 | >20%                    |                10 |              0.10366 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0564 | >20%                    |                 5 |              0.21128 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.066  | 5-10%                   |                10 |              0.1066  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0699 | >20%                    |                10 |              0.10699 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0734 | >20%                    |                10 |              0.10734 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1209 | >20%                    |                 5 |              0.22418 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.147  | 10-15%                  |                10 |              0.1147  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1694 | >20%                    |                 5 |              0.23388 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2763 | 15-20%                  |                10 |              0.12763 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3296 | 5-10%                   |                 2 |              0.6648  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3407 | 15-20%                  |                10 |              0.13407 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3909 | 15-20%                  |                 5 |              0.27818 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4275 | >20%                    |                 2 |              0.71375 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.43   | >20%                    |                10 |              0.143   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.441  | >20%                    |                 5 |              0.2882  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9952 | >20%                    |                10 |              0.19952 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.6552 | >20%                    |                10 |              0.26552 |