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

Data correct as of 2026-09-07 03:46:54.948166, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.129  | >20%                    |                 2 |              0.0645  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1705 | 15-20%                  |                 2 |              0.08525 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2015 | >20%                    |                 2 |              0.10075 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2079 | 15-20%                  |                 5 |              0.04158 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2114 | >20%                    |                 2 |              0.1057  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.214  | >20%                    |                 5 |              0.0428  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2418 | >20%                    |                 5 |              0.04836 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2486 | 15-20%                  |                 5 |              0.04972 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2607 | >20%                    |                 2 |              0.13035 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.264  | >20%                    |                 2 |              0.132   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2693 | 15-20%                  |                 2 |              0.13465 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2841 | >20%                    |                 2 |              0.14205 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2927 | >20%                    |                 2 |              0.14635 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3076 | >20%                    |                 2 |              0.1538  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3099 | >20%                    |                 2 |              0.15495 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.315  | 10-15%                  |                 2 |              0.1575  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3373 | >20%                    |                 5 |              0.06746 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3436 | >20%                    |                 2 |              0.1718  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3506 | 15-20%                  |                 2 |              0.1753  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3667 | >20%                    |                 5 |              0.07334 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3757 | >20%                    |                 5 |              0.07514 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3805 | <5%                     |                 2 |              0.19025 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3828 | >20%                    |                 2 |              0.1914  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3953 | >20%                    |                 2 |              0.19765 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3958 | 10-15%                  |                 2 |              0.1979  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3972 | 10-15%                  |                10 |              0.03972 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.4059 |                         |                 5 |              0.08118 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4064 | >20%                    |                 2 |              0.2032  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4095 | 15-20%                  |                 2 |              0.20475 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4174 | >20%                    |                 5 |              0.08348 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4176 | >20%                    |                 5 |              0.08352 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4288 | >20%                    |                 2 |              0.2144  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4304 | >20%                    |                 2 |              0.2152  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4391 | >20%                    |                 5 |              0.08782 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4553 | >20%                    |                 5 |              0.09106 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4589 | >20%                    |                 2 |              0.22945 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4616 | 10-15%                  |                 2 |              0.2308  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.467  | >20%                    |                 5 |              0.0934  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4676 | >20%                    |                10 |              0.04676 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | >20%                    |                 5 |              0.09672 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4904 | >20%                    |                 5 |              0.09808 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4959 |                         |                 2 |              0.24795 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5019 | >20%                    |                 2 |              0.25095 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.505  | <5%                     |                 2 |              0.2525  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5114 | >20%                    |                 5 |              0.10228 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.514  | 15-20%                  |                 2 |              0.257   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5185 | >20%                    |                10 |              0.05185 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5204 | >20%                    |                 5 |              0.10408 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5224 | >20%                    |                10 |              0.05224 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5269 | >20%                    |                 2 |              0.26345 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5287 | >20%                    |                 5 |              0.10574 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5359 | >20%                    |                 5 |              0.10718 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5431 | >20%                    |                 2 |              0.27155 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.546  | >20%                    |                 2 |              0.273   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.547  | >20%                    |                 2 |              0.2735  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5498 | >20%                    |                 5 |              0.10996 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5504 | 5-10%                   |                10 |              0.05504 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5557 | >20%                    |                 5 |              0.11114 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5621 | 5-10%                   |                10 |              0.05621 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5653 | >20%                    |                 5 |              0.11306 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5669 | 10-15%                  |                 2 |              0.28345 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5778 | >20%                    |                 5 |              0.11556 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5839 | >20%                    |                 2 |              0.29195 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5994 | >20%                    |                10 |              0.05994 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6063 | 10-15%                  |                 5 |              0.12126 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.615  | >20%                    |                 5 |              0.123   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6173 | >20%                    |                 5 |              0.12346 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.618  | 15-20%                  |                10 |              0.0618  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6223 | >20%                    |                10 |              0.06223 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6246 | >20%                    |                 2 |              0.3123  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.643  | 5-10%                   |                 5 |              0.1286  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6468 | >20%                    |                 5 |              0.12936 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.673  | 5-10%                   |                 2 |              0.3365  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6806 | <5%                     |                 2 |              0.3403  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.687  | 15-20%                  |                10 |              0.0687  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7105 | >20%                    |                10 |              0.07105 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7177 | >20%                    |                 5 |              0.14354 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7209 | >20%                    |                 5 |              0.14418 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.73   | >20%                    |                 5 |              0.146   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7368 | 15-20%                  |                 5 |              0.14736 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7375 | >20%                    |                 2 |              0.36875 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7447 | >20%                    |                 5 |              0.14894 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7546 | >20%                    |                10 |              0.07546 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.766  | >20%                    |                 5 |              0.1532  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.774  | 15-20%                  |                 5 |              0.1548  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8043 | 15-20%                  |                 2 |              0.40215 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8064 | 15-20%                  |                10 |              0.08064 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.816  | >20%                    |                10 |              0.0816  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8164 | >20%                    |                10 |              0.08164 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8316 | <5%                     |                10 |              0.08316 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8487 | >20%                    |                 5 |              0.16974 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8566 | >20%                    |                 2 |              0.4283  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8605 | 10-15%                  |                 2 |              0.43025 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8833 | 5-10%                   |                10 |              0.08833 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.8926 | >20%                    |                 5 |              0.17852 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9014 | >20%                    |                10 |              0.09014 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.9069 | >20%                    |                 2 |              0.45345 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9198 | >20%                    |                10 |              0.09198 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9202 | <5%                     |                 5 |              0.18404 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9303 |                         |                 2 |              0.46515 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9353 | 10-15%                  |                 2 |              0.46765 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9498 | >20%                    |                10 |              0.09498 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9868 | >20%                    |                10 |              0.09868 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9929 | 10-15%                  |                 2 |              0.49645 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0038 | >20%                    |                10 |              0.10038 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0145 | >20%                    |                 2 |              0.50725 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0306 | >20%                    |                10 |              0.10306 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0325 | >20%                    |                10 |              0.10325 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.034  | 15-20%                  |                10 |              0.1034  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0409 | >20%                    |                 5 |              0.20818 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0447 | >20%                    |                 5 |              0.20894 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0746 | 5-10%                   |                 2 |              0.5373  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.106  | 15-20%                  |                10 |              0.1106  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1161 | >20%                    |                10 |              0.11161 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1169 | 5-10%                   |                10 |              0.11169 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1265 | >20%                    |                10 |              0.11265 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1317 | >20%                    |                 5 |              0.22634 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1346 | >20%                    |                10 |              0.11346 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1386 | >20%                    |                 5 |              0.22772 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1704 | >20%                    |                10 |              0.11704 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1991 |                         |                 2 |              0.59955 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1995 |                         |                 5 |              0.2399  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2121 | >20%                    |                10 |              0.12121 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.252  | >20%                    |                 5 |              0.2504  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2719 |                         |                 5 |              0.25438 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.2734 | >20%                    |                10 |              0.12734 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2756 | >20%                    |                 5 |              0.25512 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.2772 | >20%                    |                 2 |              0.6386  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.292  | >20%                    |                10 |              0.1292  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3049 | 10-15%                  |                10 |              0.13049 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.333  | >20%                    |                10 |              0.1333  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3684 | >20%                    |                10 |              0.13684 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3988 | 15-20%                  |                10 |              0.13988 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.4267 |                         |                10 |              0.14267 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4509 | 5-10%                   |                 5 |              0.29018 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4925 |                         |                10 |              0.14925 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5219 | >20%                    |                 2 |              0.76095 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.567  | 15-20%                  |                10 |              0.1567  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5796 | >20%                    |                10 |              0.15796 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6025 | >20%                    |                10 |              0.16025 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6576 | >20%                    |                10 |              0.16576 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.707  | >20%                    |                 5 |              0.3414  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7346 | >20%                    |                 5 |              0.34692 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.8226 | >20%                    |                 5 |              0.36452 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9354 |                         |                10 |              0.19354 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9812 | 5-10%                   |                 2 |              0.9906  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0432 | 15-20%                  |                 5 |              0.40864 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      2.0599 | 15-20%                  |                10 |              0.20599 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      2.0947 | 5-10%                   |                 2 |              1.04735 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.1917 | 5-10%                   |                10 |              0.21917 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6039 | >20%                    |                10 |              0.26039 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.8167 | >20%                    |                10 |              0.28167 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0081 | >20%                    |                10 |              0.30081 |