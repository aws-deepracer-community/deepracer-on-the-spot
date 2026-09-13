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

Data correct as of 2026-09-13 04:02:46.688962, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.126  | >20%                    |                 2 |              0.063   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1822 | 15-20%                  |                 2 |              0.0911  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.221  | >20%                    |                 5 |              0.0442  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2211 | >20%                    |                 2 |              0.11055 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2319 | >20%                    |                 2 |              0.11595 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2343 | >20%                    |                 2 |              0.11715 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.255  | >20%                    |                 2 |              0.1275  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2747 | 15-20%                  |                 5 |              0.05494 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2802 | >20%                    |                 2 |              0.1401  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2845 | 15-20%                  |                 2 |              0.14225 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2861 | >20%                    |                 2 |              0.14305 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3067 | >20%                    |                 2 |              0.15335 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3068 | >20%                    |                 2 |              0.1534  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.342  |                         |                 5 |              0.0684  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3445 | >20%                    |                10 |              0.03445 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3464 | 10-15%                  |                 2 |              0.1732  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3668 | 15-20%                  |                 2 |              0.1834  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.37   | >20%                    |                 2 |              0.185   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3715 | >20%                    |                 5 |              0.0743  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3721 | >20%                    |                 5 |              0.07442 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.373  | >20%                    |                 5 |              0.0746  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3758 | >20%                    |                 2 |              0.1879  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3842 | <5%                     |                 2 |              0.1921  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3851 | 10-15%                  |                 2 |              0.19255 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3913 | >20%                    |                 5 |              0.07826 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3939 | >20%                    |                 2 |              0.19695 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4104 | >20%                    |                 5 |              0.08208 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4114 | 10-15%                  |                10 |              0.04114 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4131 | >20%                    |                 5 |              0.08262 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4159 | >20%                    |                 2 |              0.20795 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4246 | >20%                    |                10 |              0.04246 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4248 | 15-20%                  |                 2 |              0.2124  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4291 | >20%                    |                 2 |              0.21455 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4338 | >20%                    |                 2 |              0.2169  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.449  | >20%                    |                10 |              0.0449  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4684 | >20%                    |                 5 |              0.09368 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4693 | >20%                    |                 2 |              0.23465 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4757 | 10-15%                  |                 2 |              0.23785 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4768 | >20%                    |                 5 |              0.09536 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4882 |                         |                 2 |              0.2441  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4941 | >20%                    |                 5 |              0.09882 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4979 | 15-20%                  |                 2 |              0.24895 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5008 | >20%                    |                 5 |              0.10016 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5016 | >20%                    |                 5 |              0.10032 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5039 | <5%                     |                 2 |              0.25195 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5083 | >20%                    |                 2 |              0.25415 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5088 | >20%                    |                 5 |              0.10176 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.526  | >20%                    |                 5 |              0.1052  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5295 | >20%                    |                10 |              0.05295 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5402 | 5-10%                   |                10 |              0.05402 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5441 | >20%                    |                 5 |              0.10882 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5453 | >20%                    |                 2 |              0.27265 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5492 | >20%                    |                 5 |              0.10984 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5673 | >20%                    |                 2 |              0.28365 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5754 | >20%                    |                 2 |              0.2877  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.582  | >20%                    |                 5 |              0.1164  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5969 | 10-15%                  |                 5 |              0.11938 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6042 | 5-10%                   |                10 |              0.06042 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6173 | >20%                    |                 5 |              0.12346 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6176 | >20%                    |                 5 |              0.12352 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6225 | >20%                    |                 5 |              0.1245  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6249 | >20%                    |                10 |              0.06249 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6279 | >20%                    |                 2 |              0.31395 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6306 | >20%                    |                 2 |              0.3153  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6353 | 5-10%                   |                 5 |              0.12706 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6378 | 10-15%                  |                 2 |              0.3189  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.646  | >20%                    |                 5 |              0.1292  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6573 | 15-20%                  |                10 |              0.06573 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6628 | >20%                    |                10 |              0.06628 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6653 | >20%                    |                 2 |              0.33265 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6667 | >20%                    |                 5 |              0.13334 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6738 | >20%                    |                 5 |              0.13476 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6797 | <5%                     |                 2 |              0.33985 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6847 | 5-10%                   |                 2 |              0.34235 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7146 | >20%                    |                10 |              0.07146 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7156 | >20%                    |                 5 |              0.14312 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7182 | <5%                     |                10 |              0.07182 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7358 | 15-20%                  |                 5 |              0.14716 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7375 | >20%                    |                10 |              0.07375 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7428 | >20%                    |                 5 |              0.14856 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7448 | >20%                    |                 5 |              0.14896 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.757  | 15-20%                  |                10 |              0.0757  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7753 | >20%                    |                10 |              0.07753 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7772 | >20%                    |                 2 |              0.3886  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8329 | 15-20%                  |                10 |              0.08329 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8364 | >20%                    |                 5 |              0.16728 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8591 | 15-20%                  |                 5 |              0.17182 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.862  | >20%                    |                 2 |              0.431   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8647 | >20%                    |                 5 |              0.17294 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8705 | >20%                    |                10 |              0.08705 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8761 | 10-15%                  |                 2 |              0.43805 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.8764 | >20%                    |                 2 |              0.4382  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8842 | 15-20%                  |                 2 |              0.4421  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8846 | >20%                    |                10 |              0.08846 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8872 | 5-10%                   |                10 |              0.08872 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9071 | >20%                    |                 5 |              0.18142 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9102 | <5%                     |                 5 |              0.18204 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9381 |                         |                 2 |              0.46905 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9429 | >20%                    |                10 |              0.09429 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9526 | 10-15%                  |                 2 |              0.4763  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9645 | >20%                    |                10 |              0.09645 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.984  | >20%                    |                10 |              0.0984  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9848 | 15-20%                  |                10 |              0.09848 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.99   | >20%                    |                10 |              0.099   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9968 | >20%                    |                10 |              0.09968 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0109 | >20%                    |                 5 |              0.20218 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0208 | >20%                    |                10 |              0.10208 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0418 | >20%                    |                 2 |              0.5209  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0485 | 15-20%                  |                10 |              0.10485 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0768 | 10-15%                  |                 2 |              0.5384  |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.0877 |                         |                10 |              0.10877 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.089  | >20%                    |                 5 |              0.2178  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0912 | >20%                    |                10 |              0.10912 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0997 | >20%                    |                 5 |              0.21994 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1028 | >20%                    |                10 |              0.11028 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1163 | 5-10%                   |                10 |              0.11163 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1207 | >20%                    |                10 |              0.11207 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1554 | 5-10%                   |                 2 |              0.5777  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.1756 | >20%                    |                 5 |              0.23512 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1815 | >20%                    |                 5 |              0.2363  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1831 | >20%                    |                 5 |              0.23662 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1882 |                         |                 2 |              0.5941  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1964 |                         |                 5 |              0.23928 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2107 | >20%                    |                10 |              0.12107 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.211  | >20%                    |                10 |              0.1211  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.2406 | >20%                    |                10 |              0.12406 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.259  |                         |                 5 |              0.2518  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2624 | >20%                    |                10 |              0.12624 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3299 | >20%                    |                10 |              0.13299 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.35   | 10-15%                  |                10 |              0.135   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3528 | >20%                    |                10 |              0.13528 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3661 | >20%                    |                10 |              0.13661 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3835 | >20%                    |                 2 |              0.69175 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3892 | 15-20%                  |                10 |              0.13892 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4053 | >20%                    |                 5 |              0.28106 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4254 | 15-20%                  |                10 |              0.14254 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4614 | >20%                    |                10 |              0.14614 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5066 | 5-10%                   |                 5 |              0.30132 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5532 | >20%                    |                 2 |              0.7766  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.634  | >20%                    |                10 |              0.1634  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.656  | >20%                    |                 5 |              0.3312  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7452 |                         |                10 |              0.17452 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.787  | 5-10%                   |                 2 |              0.8935  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.8512 | >20%                    |                 5 |              0.37024 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8889 |                         |                10 |              0.18889 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.9086 | 15-20%                  |                10 |              0.19086 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9949 | 5-10%                   |                 2 |              0.99745 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1219 | 15-20%                  |                 5 |              0.42438 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2129 | 5-10%                   |                10 |              0.22129 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.6396 | >20%                    |                10 |              0.26396 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6726 | >20%                    |                10 |              0.26726 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0123 | >20%                    |                10 |              0.30123 |