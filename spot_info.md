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

Data correct as of 2025-06-28 01:53:30.632136, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.172  | >20%                    |                 5 |              0.0344  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1783 | <5%                     |                 2 |              0.08915 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1938 | >20%                    |                 2 |              0.0969  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1944 | 15-20%                  |                 5 |              0.03888 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.1969 | >20%                    |                 5 |              0.03938 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1989 | 15-20%                  |                 2 |              0.09945 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.203  | >20%                    |                 5 |              0.0406  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2095 | >20%                    |                 2 |              0.10475 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2116 | 10-15%                  |                10 |              0.02116 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2138 | >20%                    |                 2 |              0.1069  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.223  | 15-20%                  |                 2 |              0.1115  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2295 | 15-20%                  |                 2 |              0.11475 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2456 | 15-20%                  |                 2 |              0.1228  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2544 | 15-20%                  |                10 |              0.02544 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2557 | >20%                    |                 2 |              0.12785 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2562 | >20%                    |                10 |              0.02562 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.258  | >20%                    |                 2 |              0.129   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2666 | >20%                    |                 2 |              0.1333  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2698 | 5-10%                   |                10 |              0.02698 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2753 | 5-10%                   |                 2 |              0.13765 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2755 | 15-20%                  |                 5 |              0.0551  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2782 | <5%                     |                 5 |              0.05564 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2904 | >20%                    |                 5 |              0.05808 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2977 | >20%                    |                 2 |              0.14885 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2988 | >20%                    |                 2 |              0.1494  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3041 | <5%                     |                 2 |              0.15205 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3055 | >20%                    |                 2 |              0.15275 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3089 | >20%                    |                 2 |              0.15445 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3128 | >20%                    |                 2 |              0.1564  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3155 | >20%                    |                 2 |              0.15775 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3197 | >20%                    |                 2 |              0.15985 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3206 | 15-20%                  |                 5 |              0.06412 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3226 | >20%                    |                10 |              0.03226 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3232 | >20%                    |                 2 |              0.1616  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3338 | 10-15%                  |                 2 |              0.1669  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3427 | <5%                     |                 2 |              0.17135 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3531 | 10-15%                  |                 2 |              0.17655 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3547 | 10-15%                  |                 2 |              0.17735 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3685 | 5-10%                   |                 2 |              0.18425 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3693 | >20%                    |                 2 |              0.18465 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3763 | >20%                    |                 5 |              0.07526 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3876 | >20%                    |                 2 |              0.1938  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3983 | 15-20%                  |                10 |              0.03983 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4054 | 10-15%                  |                 5 |              0.08108 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4068 | >20%                    |                 5 |              0.08136 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4068 | >20%                    |                 5 |              0.08136 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4109 | >20%                    |                 5 |              0.08218 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4129 | >20%                    |                 5 |              0.08258 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4231 | >20%                    |                 5 |              0.08462 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4258 | 10-15%                  |                 2 |              0.2129  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4279 | >20%                    |                 2 |              0.21395 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4281 | <5%                     |                 2 |              0.21405 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4399 | >20%                    |                 2 |              0.21995 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4446 | >20%                    |                 2 |              0.2223  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4526 | >20%                    |                 2 |              0.2263  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4541 | 10-15%                  |                 5 |              0.09082 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4585 | >20%                    |                 2 |              0.22925 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4591 | >20%                    |                 5 |              0.09182 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4596 | 5-10%                   |                 2 |              0.2298  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4622 | 15-20%                  |                 5 |              0.09244 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4637 | >20%                    |                 5 |              0.09274 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4637 | >20%                    |                 2 |              0.23185 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4714 | <5%                     |                10 |              0.04714 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4718 | 15-20%                  |                 2 |              0.2359  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4731 | <5%                     |                 5 |              0.09462 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4732 | 15-20%                  |                 5 |              0.09464 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4745 | >20%                    |                 5 |              0.0949  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4771 | 5-10%                   |                 2 |              0.23855 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4774 | >20%                    |                 5 |              0.09548 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4794 | 10-15%                  |                 5 |              0.09588 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4799 | >20%                    |                 2 |              0.23995 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4842 | >20%                    |                 2 |              0.2421  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4861 | <5%                     |                 5 |              0.09722 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4885 | >20%                    |                 2 |              0.24425 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4894 | >20%                    |                 2 |              0.2447  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5112 | >20%                    |                 5 |              0.10224 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5113 | 5-10%                   |                 5 |              0.10226 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5178 | >20%                    |                 2 |              0.2589  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5217 | >20%                    |                 2 |              0.26085 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5232 | 10-15%                  |                 2 |              0.2616  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5245 | 15-20%                  |                 2 |              0.26225 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5261 | >20%                    |                10 |              0.05261 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5383 | <5%                     |                 5 |              0.10766 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.542  | 10-15%                  |                 5 |              0.1084  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5467 | >20%                    |                 5 |              0.10934 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5534 | 15-20%                  |                 2 |              0.2767  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5566 | >20%                    |                 5 |              0.11132 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5764 | >20%                    |                10 |              0.05764 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5804 | 10-15%                  |                10 |              0.05804 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.581  | >20%                    |                 5 |              0.1162  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5824 | >20%                    |                10 |              0.05824 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5837 | >20%                    |                10 |              0.05837 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5869 | >20%                    |                 2 |              0.29345 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5902 | >20%                    |                 5 |              0.11804 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5925 | >20%                    |                 5 |              0.1185  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5927 | >20%                    |                 5 |              0.11854 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5931 | <5%                     |                 5 |              0.11862 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5968 | >20%                    |                 5 |              0.11936 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5985 | <5%                     |                 2 |              0.29925 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6    | >20%                    |                 5 |              0.12    |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6036 | 10-15%                  |                 5 |              0.12072 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.605  | >20%                    |                 2 |              0.3025  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.608  | >20%                    |                 2 |              0.304   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6094 | >20%                    |                 5 |              0.12188 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6196 | >20%                    |                 5 |              0.12392 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6295 | >20%                    |                 5 |              0.1259  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6316 | 5-10%                   |                 2 |              0.3158  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.653  | >20%                    |                 5 |              0.1306  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6558 | >20%                    |                10 |              0.06558 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6675 | <5%                     |                 5 |              0.1335  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6805 | <5%                     |                 5 |              0.1361  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6806 | 10-15%                  |                 5 |              0.13612 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6808 | <5%                     |                 5 |              0.13616 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6814 | 15-20%                  |                10 |              0.06814 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6815 | 10-15%                  |                 2 |              0.34075 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.686  | >20%                    |                 5 |              0.1372  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6882 | >20%                    |                 2 |              0.3441  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6891 | >20%                    |                 5 |              0.13782 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7127 | >20%                    |                10 |              0.07127 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.713  | >20%                    |                 5 |              0.1426  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7154 | <5%                     |                 5 |              0.14308 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7184 | >20%                    |                10 |              0.07184 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.722  | >20%                    |                10 |              0.0722  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7259 | 10-15%                  |                 5 |              0.14518 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7419 | >20%                    |                10 |              0.07419 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7476 | 15-20%                  |                10 |              0.07476 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7497 | <5%                     |                10 |              0.07497 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.752  | >20%                    |                10 |              0.0752  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7521 | >20%                    |                 5 |              0.15042 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7563 | >20%                    |                10 |              0.07563 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7602 | 15-20%                  |                10 |              0.07602 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7623 | >20%                    |                10 |              0.07623 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.769  | 10-15%                  |                10 |              0.0769  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.78   | >20%                    |                10 |              0.078   |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7863 | >20%                    |                 5 |              0.15726 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7956 | >20%                    |                10 |              0.07956 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.797  | 5-10%                   |                 5 |              0.1594  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7976 | 15-20%                  |                10 |              0.07976 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8053 | <5%                     |                10 |              0.08053 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8168 | >20%                    |                10 |              0.08168 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8194 | >20%                    |                10 |              0.08194 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8452 | <5%                     |                10 |              0.08452 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8532 | 15-20%                  |                10 |              0.08532 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8533 | >20%                    |                10 |              0.08533 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8604 | >20%                    |                10 |              0.08604 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8665 | <5%                     |                10 |              0.08665 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8814 | >20%                    |                10 |              0.08814 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8831 | >20%                    |                10 |              0.08831 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9074 | >20%                    |                10 |              0.09074 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9082 | >20%                    |                10 |              0.09082 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9115 | 15-20%                  |                10 |              0.09115 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.92   | >20%                    |                10 |              0.092   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9599 | >20%                    |                10 |              0.09599 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9703 | >20%                    |                10 |              0.09703 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1      | >20%                    |                10 |              0.1     |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0072 | >20%                    |                10 |              0.10072 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0091 | >20%                    |                 2 |              0.50455 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0113 | >20%                    |                 2 |              0.50565 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.013  | >20%                    |                10 |              0.1013  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0278 | <5%                     |                10 |              0.10278 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0427 | >20%                    |                 5 |              0.20854 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0705 | 15-20%                  |                10 |              0.10705 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0723 | 15-20%                  |                10 |              0.10723 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0784 | 10-15%                  |                10 |              0.10784 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0825 | <5%                     |                 2 |              0.54125 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1068 | >20%                    |                10 |              0.11068 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1082 | >20%                    |                 2 |              0.5541  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1158 | 15-20%                  |                10 |              0.11158 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1952 | 10-15%                  |                10 |              0.11952 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2181 | >20%                    |                10 |              0.12181 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2358 | <5%                     |                 5 |              0.24716 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2625 | >20%                    |                10 |              0.12625 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2791 | >20%                    |                 5 |              0.25582 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3221 | >20%                    |                 5 |              0.26442 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4118 | <5%                     |                 5 |              0.28236 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4134 | >20%                    |                 5 |              0.28268 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4383 | >20%                    |                 2 |              0.71915 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.547  | 10-15%                  |                10 |              0.1547  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8499 | <5%                     |                10 |              0.18499 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.901  | >20%                    |                10 |              0.1901  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      2.0212 | <5%                     |                 2 |              1.0106  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0983 | <5%                     |                10 |              0.20983 |