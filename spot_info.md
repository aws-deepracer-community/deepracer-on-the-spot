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

Data correct as of 2026-05-17 03:52:58.076050, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1056 | >20%                    |                 2 |              0.0528  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1466 | 15-20%                  |                 2 |              0.0733  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1613 | >20%                    |                 2 |              0.08065 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2032 | 15-20%                  |                 5 |              0.04064 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2208 | >20%                    |                 2 |              0.1104  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2265 | >20%                    |                 2 |              0.11325 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.229  | >20%                    |                 2 |              0.1145  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2307 | 15-20%                  |                 2 |              0.11535 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2349 | >20%                    |                 2 |              0.11745 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2407 | >20%                    |                 2 |              0.12035 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2433 | 15-20%                  |                 5 |              0.04866 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2448 | >20%                    |                 5 |              0.04896 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.253  | 15-20%                  |                 5 |              0.0506  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2709 | 5-10%                   |                10 |              0.02709 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2735 | >20%                    |                 2 |              0.13675 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2735 | >20%                    |                 5 |              0.0547  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2807 | >20%                    |                 2 |              0.14035 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2839 | 15-20%                  |                 2 |              0.14195 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3022 | >20%                    |                 5 |              0.06044 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3031 | >20%                    |                 5 |              0.06062 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3074 | 10-15%                  |                 2 |              0.1537  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3095 | >20%                    |                 2 |              0.15475 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3149 | 10-15%                  |                 2 |              0.15745 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3151 | >20%                    |                10 |              0.03151 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3158 | >20%                    |                 2 |              0.1579  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3173 | 10-15%                  |                 2 |              0.15865 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3226 | >20%                    |                 2 |              0.1613  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3323 | <5%                     |                 2 |              0.16615 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3342 | >20%                    |                 2 |              0.1671  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3415 | 5-10%                   |                10 |              0.03415 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3444 | >20%                    |                 5 |              0.06888 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3608 | >20%                    |                 5 |              0.07216 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3649 | >20%                    |                 5 |              0.07298 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3679 | >20%                    |                 5 |              0.07358 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3679 | >20%                    |                 5 |              0.07358 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3681 | >20%                    |                 5 |              0.07362 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3783 | >20%                    |                 2 |              0.18915 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3862 | 10-15%                  |                 2 |              0.1931  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3939 | >20%                    |                 5 |              0.07878 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4026 | <5%                     |                 2 |              0.2013  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4061 | >20%                    |                 5 |              0.08122 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4141 | 5-10%                   |                 2 |              0.20705 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4222 | >20%                    |                 2 |              0.2111  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4235 | >20%                    |                 5 |              0.0847  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4288 | >20%                    |                10 |              0.04288 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4295 | >20%                    |                 2 |              0.21475 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4383 | >20%                    |                 5 |              0.08766 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4403 | >20%                    |                 2 |              0.22015 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4525 | <5%                     |                 2 |              0.22625 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4542 | 15-20%                  |                 2 |              0.2271  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4591 | >20%                    |                 5 |              0.09182 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4611 | >20%                    |                 5 |              0.09222 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4637 | >20%                    |                 5 |              0.09274 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4645 | >20%                    |                10 |              0.04645 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4672 | >20%                    |                 2 |              0.2336  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4679 | >20%                    |                 5 |              0.09358 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4704 | 15-20%                  |                 2 |              0.2352  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4723 | <5%                     |                 5 |              0.09446 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4775 | >20%                    |                 5 |              0.0955  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4793 | >20%                    |                 2 |              0.23965 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.497  | >20%                    |                 5 |              0.0994  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5025 | 5-10%                   |                10 |              0.05025 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.505  | 5-10%                   |                 5 |              0.101   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5072 | >20%                    |                 5 |              0.10144 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5087 | 15-20%                  |                 5 |              0.10174 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5087 | >20%                    |                 2 |              0.25435 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5322 | 10-15%                  |                 5 |              0.10644 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5365 | >20%                    |                10 |              0.05365 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5369 | >20%                    |                10 |              0.05369 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5459 | >20%                    |                10 |              0.05459 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5495 | >20%                    |                 2 |              0.27475 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5514 | 15-20%                  |                 2 |              0.2757  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5531 | >20%                    |                10 |              0.05531 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5634 | >20%                    |                 5 |              0.11268 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5643 | 10-15%                  |                 2 |              0.28215 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6135 | >20%                    |                 5 |              0.1227  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.623  | >20%                    |                 5 |              0.1246  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6259 | >20%                    |                 2 |              0.31295 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6298 | >20%                    |                 2 |              0.3149  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6348 | >20%                    |                 2 |              0.3174  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6415 | >20%                    |                 2 |              0.32075 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.642  | >20%                    |                 2 |              0.321   |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6636 | 5-10%                   |                10 |              0.06636 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6646 | >20%                    |                10 |              0.06646 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6708 | >20%                    |                 5 |              0.13416 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6726 | 15-20%                  |                10 |              0.06726 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6789 | >20%                    |                10 |              0.06789 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6881 | >20%                    |                10 |              0.06881 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6942 | 5-10%                   |                 2 |              0.3471  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6967 | 10-15%                  |                 2 |              0.34835 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6972 | >20%                    |                 2 |              0.3486  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6989 | >20%                    |                10 |              0.06989 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7047 | >20%                    |                 5 |              0.14094 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7161 | >20%                    |                 5 |              0.14322 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7214 | >20%                    |                 5 |              0.14428 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7265 | >20%                    |                10 |              0.07265 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7351 | >20%                    |                 5 |              0.14702 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7366 | >20%                    |                 5 |              0.14732 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7422 | >20%                    |                10 |              0.07422 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7538 | >20%                    |                 5 |              0.15076 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7558 | 15-20%                  |                10 |              0.07558 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7634 | >20%                    |                 2 |              0.3817  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7726 |                         |                 2 |              0.3863  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7834 |                         |                 5 |              0.15668 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8017 | >20%                    |                 5 |              0.16034 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8091 | >20%                    |                 5 |              0.16182 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8107 | >20%                    |                 5 |              0.16214 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8121 | >20%                    |                10 |              0.08121 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      0.8408 |                         |                 5 |              0.16816 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8533 | 15-20%                  |                10 |              0.08533 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8697 | >20%                    |                10 |              0.08697 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8732 | 10-15%                  |                10 |              0.08732 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8906 |                         |                 2 |              0.4453  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9007 | 15-20%                  |                10 |              0.09007 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9011 | >20%                    |                10 |              0.09011 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9017 | >20%                    |                10 |              0.09017 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9139 | >20%                    |                10 |              0.09139 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9315 | 15-20%                  |                10 |              0.09315 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9346 | >20%                    |                10 |              0.09346 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9375 | >20%                    |                10 |              0.09375 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9433 | >20%                    |                 5 |              0.18866 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9544 | >20%                    |                 5 |              0.19088 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.957  | >20%                    |                10 |              0.0957  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9618 | >20%                    |                10 |              0.09618 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9667 | >20%                    |                 5 |              0.19334 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9727 | 5-10%                   |                 5 |              0.19454 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9994 | >20%                    |                10 |              0.09994 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0024 | >20%                    |                10 |              0.10024 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0121 | >20%                    |                 5 |              0.20242 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0295 | >20%                    |                10 |              0.10295 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      1.0311 | >20%                    |                 5 |              0.20622 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0364 | >20%                    |                 2 |              0.5182  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0532 | >20%                    |                10 |              0.10532 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1064 | >20%                    |                10 |              0.11064 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1321 | 5-10%                   |                10 |              0.11321 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1825 | 5-10%                   |                 2 |              0.59125 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1999 | 15-20%                  |                10 |              0.11999 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2096 | 10-15%                  |                10 |              0.12096 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.213  | 5-10%                   |                 2 |              0.6065  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2157 | >20%                    |                 5 |              0.24314 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2191 | >20%                    |                10 |              0.12191 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2377 | >20%                    |                10 |              0.12377 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2648 | >20%                    |                10 |              0.12648 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2995 | 15-20%                  |                 5 |              0.2599  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4046 | >20%                    |                 5 |              0.28092 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4051 |                         |                10 |              0.14051 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4202 | 10-15%                  |                 2 |              0.7101  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.439  | 15-20%                  |                10 |              0.1439  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.4481 |                         |                10 |              0.14481 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4896 | >20%                    |                10 |              0.14896 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5502 | 15-20%                  |                10 |              0.15502 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0934 | >20%                    |                10 |              0.20934 |