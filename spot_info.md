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

Data correct as of 2026-05-30 03:50:54.129766, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1333 | >20%                    |                 2 |              0.06665 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1362 | 15-20%                  |                 2 |              0.0681  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | >20%                    |                 2 |              0.0831  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1993 | 15-20%                  |                 2 |              0.09965 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2097 | 15-20%                  |                 5 |              0.04194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2111 | >20%                    |                 2 |              0.10555 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2156 | >20%                    |                 2 |              0.1078  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2206 | >20%                    |                 2 |              0.1103  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2232 | 10-15%                  |                 2 |              0.1116  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2388 | >20%                    |                 2 |              0.1194  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2413 | 15-20%                  |                 5 |              0.04826 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.25   | >20%                    |                 2 |              0.125   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2579 | >20%                    |                 2 |              0.12895 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2587 | >20%                    |                 2 |              0.12935 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2716 | >20%                    |                 5 |              0.05432 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2779 | >20%                    |                 5 |              0.05558 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2882 | >20%                    |                 5 |              0.05764 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2925 | >20%                    |                 5 |              0.0585  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2956 | >20%                    |                 2 |              0.1478  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2979 | >20%                    |                 2 |              0.14895 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2984 | 5-10%                   |                10 |              0.02984 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2985 | 15-20%                  |                 5 |              0.0597  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2991 | >20%                    |                 5 |              0.05982 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3024 | >20%                    |                 2 |              0.1512  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3089 | 5-10%                   |                10 |              0.03089 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3104 | 15-20%                  |                 2 |              0.1552  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3107 | >20%                    |                 5 |              0.06214 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3169 | >20%                    |                10 |              0.03169 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3174 | >20%                    |                 2 |              0.1587  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3206 | >20%                    |                 5 |              0.06412 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3211 | >20%                    |                10 |              0.03211 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3334 | <5%                     |                 2 |              0.1667  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3454 | 10-15%                  |                 2 |              0.1727  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3535 | >20%                    |                 5 |              0.0707  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.354  | >20%                    |                 2 |              0.177   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.36   | >20%                    |                10 |              0.036   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3644 | 10-15%                  |                 2 |              0.1822  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3655 | 10-15%                  |                 2 |              0.18275 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3809 | >20%                    |                 5 |              0.07618 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.383  | >20%                    |                 5 |              0.0766  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3883 | >20%                    |                10 |              0.03883 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3901 | >20%                    |                 5 |              0.07802 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4005 | >20%                    |                 2 |              0.20025 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4033 | >20%                    |                 5 |              0.08066 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4114 | >20%                    |                 5 |              0.08228 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4124 | >20%                    |                 5 |              0.08248 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4229 | >20%                    |                 5 |              0.08458 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4262 | >20%                    |                 2 |              0.2131  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.427  | <5%                     |                 2 |              0.2135  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4377 | >20%                    |                 2 |              0.21885 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4435 | >20%                    |                 5 |              0.0887  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4487 | >20%                    |                 2 |              0.22435 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4488 | 5-10%                   |                 2 |              0.2244  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4576 | 15-20%                  |                 2 |              0.2288  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4626 | <5%                     |                 2 |              0.2313  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4693 | >20%                    |                 2 |              0.23465 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4698 | 10-15%                  |                 2 |              0.2349  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.475  | >20%                    |                 5 |              0.095   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4761 | 15-20%                  |                 2 |              0.23805 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4804 | >20%                    |                 2 |              0.2402  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.488  | 15-20%                  |                 2 |              0.244   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4966 | >20%                    |                 5 |              0.09932 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4983 | 5-10%                   |                 5 |              0.09966 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5035 | 15-20%                  |                 5 |              0.1007  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.511  | >20%                    |                 5 |              0.1022  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5174 | >20%                    |                 5 |              0.10348 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5191 | >20%                    |                10 |              0.05191 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5226 | >20%                    |                 2 |              0.2613  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5384 | 5-10%                   |                10 |              0.05384 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.54   | >20%                    |                 2 |              0.27    |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5478 | 10-15%                  |                 5 |              0.10956 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.551  | >20%                    |                 2 |              0.2755  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5542 | >20%                    |                 5 |              0.11084 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.579  | <5%                     |                 5 |              0.1158  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5845 | >20%                    |                10 |              0.05845 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5847 | >20%                    |                 5 |              0.11694 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5866 | >20%                    |                 2 |              0.2933  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.589  | >20%                    |                10 |              0.0589  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6038 |                         |                 2 |              0.3019  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6106 | >20%                    |                10 |              0.06106 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.613  | >20%                    |                 2 |              0.3065  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6185 | >20%                    |                 5 |              0.1237  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6221 | 5-10%                   |                 2 |              0.31105 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6273 | >20%                    |                 2 |              0.31365 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6285 | >20%                    |                 5 |              0.1257  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6342 | 5-10%                   |                10 |              0.06342 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6378 | 15-20%                  |                10 |              0.06378 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.644  | >20%                    |                 5 |              0.1288  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6762 | >20%                    |                 5 |              0.13524 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6774 | >20%                    |                 5 |              0.13548 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.693  | >20%                    |                 5 |              0.1386  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.696  | 15-20%                  |                10 |              0.0696  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6981 | >20%                    |                10 |              0.06981 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7104 | >20%                    |                 2 |              0.3552  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7226 | >20%                    |                 5 |              0.14452 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7291 | >20%                    |                 5 |              0.14582 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7297 | >20%                    |                 5 |              0.14594 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7427 | >20%                    |                 2 |              0.37135 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7437 | 10-15%                  |                10 |              0.07437 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7568 | 15-20%                  |                10 |              0.07568 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7792 | >20%                    |                 5 |              0.15584 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7887 | 15-20%                  |                10 |              0.07887 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7966 | >20%                    |                10 |              0.07966 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8019 | >20%                    |                 5 |              0.16038 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8022 | >20%                    |                10 |              0.08022 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8137 | >20%                    |                10 |              0.08137 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8193 | >20%                    |                 5 |              0.16386 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8256 | 10-15%                  |                 2 |              0.4128  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8386 | >20%                    |                10 |              0.08386 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8465 | >20%                    |                 5 |              0.1693  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8534 |                         |                 2 |              0.4267  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8677 | >20%                    |                10 |              0.08677 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.8719 |                         |                10 |              0.08719 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8767 | 15-20%                  |                10 |              0.08767 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8885 | >20%                    |                10 |              0.08885 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.893  | >20%                    |                10 |              0.0893  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9146 | >20%                    |                10 |              0.09146 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9154 | >20%                    |                10 |              0.09154 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9205 | >20%                    |                10 |              0.09205 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9283 |                         |                 5 |              0.18566 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9306 | >20%                    |                10 |              0.09306 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9471 | >20%                    |                 5 |              0.18942 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9473 | >20%                    |                10 |              0.09473 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9525 | >20%                    |                 5 |              0.1905  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9639 | >20%                    |                10 |              0.09639 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9644 | >20%                    |                10 |              0.09644 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9646 | 5-10%                   |                 2 |              0.4823  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9853 | >20%                    |                 5 |              0.19706 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0015 | >20%                    |                10 |              0.10015 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0062 | >20%                    |                 2 |              0.5031  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0342 | >20%                    |                10 |              0.10342 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0412 |                         |                10 |              0.10412 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.064  | >20%                    |                10 |              0.1064  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0709 | >20%                    |                10 |              0.10709 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0726 | 5-10%                   |                10 |              0.10726 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0732 | >20%                    |                 5 |              0.21464 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0925 |                         |                 5 |              0.2185  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1099 | 5-10%                   |                 2 |              0.55495 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1219 | 5-10%                   |                 5 |              0.22438 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1627 | >20%                    |                10 |              0.11627 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1838 | 15-20%                  |                10 |              0.11838 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2014 | >20%                    |                10 |              0.12014 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.2041 | 15-20%                  |                10 |              0.12041 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2867 | >20%                    |                10 |              0.12867 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3051 | 10-15%                  |                10 |              0.13051 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3161 | 15-20%                  |                 5 |              0.26322 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3965 | >20%                    |                10 |              0.13965 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4422 | >20%                    |                 5 |              0.28844 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4431 | >20%                    |                 5 |              0.28862 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4498 | 10-15%                  |                 2 |              0.7249  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.634  | 15-20%                  |                10 |              0.1634  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1306 | >20%                    |                10 |              0.21306 |