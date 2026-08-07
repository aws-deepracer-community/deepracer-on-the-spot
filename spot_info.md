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

Data correct as of 2026-08-07 02:50:16.871463, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1812 | >20%                    |                 2 |              0.0906  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1906 | >20%                    |                 2 |              0.0953  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2031 | >20%                    |                 2 |              0.10155 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2223 | 15-20%                  |                 5 |              0.04446 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.236  | 15-20%                  |                 2 |              0.118   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2447 | >20%                    |                 2 |              0.12235 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2467 | >20%                    |                 2 |              0.12335 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | 15-20%                  |                 2 |              0.1392  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | >20%                    |                 2 |              0.1392  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2825 | >20%                    |                 2 |              0.14125 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2826 | >20%                    |                 5 |              0.05652 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2899 | >20%                    |                 2 |              0.14495 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2967 | >20%                    |                 2 |              0.14835 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | >20%                    |                 2 |              0.1542  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3199 | 5-10%                   |                10 |              0.03199 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3244 | 15-20%                  |                 2 |              0.1622  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3255 | 10-15%                  |                 2 |              0.16275 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3277 | >20%                    |                 5 |              0.06554 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3466 | 15-20%                  |                 5 |              0.06932 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3487 | >20%                    |                 5 |              0.06974 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3619 | 15-20%                  |                 2 |              0.18095 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3635 | >20%                    |                 2 |              0.18175 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3662 | >20%                    |                 2 |              0.1831  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3674 | 10-15%                  |                 2 |              0.1837  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3715 | >20%                    |                10 |              0.03715 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3726 | >20%                    |                 5 |              0.07452 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3759 | <5%                     |                 2 |              0.18795 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3839 | >20%                    |                 5 |              0.07678 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3867 | 5-10%                   |                10 |              0.03867 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.389  | >20%                    |                10 |              0.0389  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3917 | >20%                    |                10 |              0.03917 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4012 | >20%                    |                 2 |              0.2006  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4054 | >20%                    |                10 |              0.04054 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4076 | 5-10%                   |                10 |              0.04076 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4195 | 10-15%                  |                10 |              0.04195 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4216 | 15-20%                  |                 2 |              0.2108  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4226 | >20%                    |                 2 |              0.2113  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4336 | <5%                     |                 2 |              0.2168  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4339 | >20%                    |                 2 |              0.21695 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4348 | 10-15%                  |                 2 |              0.2174  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4433 | >20%                    |                 5 |              0.08866 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.444  | >20%                    |                 5 |              0.0888  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4531 | 10-15%                  |                 2 |              0.22655 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4636 | >20%                    |                 2 |              0.2318  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4639 | >20%                    |                10 |              0.04639 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4732 | >20%                    |                 2 |              0.2366  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4738 | >20%                    |                 2 |              0.2369  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4752 | >20%                    |                 5 |              0.09504 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4771 | >20%                    |                 2 |              0.23855 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.4846 | >20%                    |                10 |              0.04846 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.491  | >20%                    |                 5 |              0.0982  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4923 | >20%                    |                 5 |              0.09846 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4989 | >20%                    |                 5 |              0.09978 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4997 | >20%                    |                 5 |              0.09994 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5046 | >20%                    |                 2 |              0.2523  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5136 | 15-20%                  |                 5 |              0.10272 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5149 | >20%                    |                 2 |              0.25745 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5318 | >20%                    |                 5 |              0.10636 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5363 | >20%                    |                 5 |              0.10726 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5404 | >20%                    |                 5 |              0.10808 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.544  | 5-10%                   |                 2 |              0.272   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5543 | >20%                    |                10 |              0.05543 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5559 | <5%                     |                 2 |              0.27795 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.57   | >20%                    |                 5 |              0.114   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5795 | 10-15%                  |                 5 |              0.1159  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5806 | >20%                    |                 2 |              0.2903  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.591  | >20%                    |                 5 |              0.1182  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5966 | >20%                    |                 5 |              0.11932 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6279 | >20%                    |                 5 |              0.12558 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6289 | >20%                    |                 2 |              0.31445 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6293 | >20%                    |                 5 |              0.12586 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6305 | 15-20%                  |                10 |              0.06305 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6339 | >20%                    |                 2 |              0.31695 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6432 | >20%                    |                 5 |              0.12864 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6458 | <5%                     |                 5 |              0.12916 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6459 | >20%                    |                 5 |              0.12918 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6477 | >20%                    |                 5 |              0.12954 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6506 | >20%                    |                10 |              0.06506 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6544 | >20%                    |                 5 |              0.13088 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6642 | >20%                    |                 5 |              0.13284 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6655 | >20%                    |                 5 |              0.1331  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6675 | 5-10%                   |                 5 |              0.1335  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6683 | >20%                    |                 5 |              0.13366 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6716 | >20%                    |                10 |              0.06716 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.684  | 15-20%                  |                 5 |              0.1368  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6843 | >20%                    |                 2 |              0.34215 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7058 | >20%                    |                10 |              0.07058 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7134 | >20%                    |                 2 |              0.3567  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7358 |                         |                 2 |              0.3679  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7493 | >20%                    |                 5 |              0.14986 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7711 | >20%                    |                10 |              0.07711 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7889 |                         |                 5 |              0.15778 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.794  | >20%                    |                10 |              0.0794  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7967 | >20%                    |                10 |              0.07967 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8062 | <5%                     |                10 |              0.08062 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8092 | >20%                    |                 5 |              0.16184 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8093 | 10-15%                  |                 2 |              0.40465 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8156 | >20%                    |                10 |              0.08156 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8164 | >20%                    |                10 |              0.08164 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8216 | >20%                    |                 2 |              0.4108  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8543 | >20%                    |                10 |              0.08543 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.856  | >20%                    |                 2 |              0.428   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8691 | 15-20%                  |                10 |              0.08691 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8802 | 5-10%                   |                10 |              0.08802 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.884  | >20%                    |                 5 |              0.1768  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8849 | >20%                    |                10 |              0.08849 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8873 | 15-20%                  |                10 |              0.08873 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8932 |                         |                 2 |              0.4466  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9009 | >20%                    |                 5 |              0.18018 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9013 | 10-15%                  |                 2 |              0.45065 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9108 | >20%                    |                10 |              0.09108 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9147 | >20%                    |                 5 |              0.18294 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9165 | 15-20%                  |                10 |              0.09165 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9201 | >20%                    |                10 |              0.09201 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9228 | >20%                    |                 5 |              0.18456 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9488 | 5-10%                   |                10 |              0.09488 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9705 | >20%                    |                 2 |              0.48525 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9748 | >20%                    |                10 |              0.09748 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9762 | >20%                    |                 5 |              0.19524 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9835 | >20%                    |                 5 |              0.1967  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9864 | >20%                    |                10 |              0.09864 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0049 | >20%                    |                10 |              0.10049 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0162 | 15-20%                  |                10 |              0.10162 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.025  | 15-20%                  |                10 |              0.1025  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0363 | 15-20%                  |                 2 |              0.51815 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0431 | >20%                    |                10 |              0.10431 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0508 | >20%                    |                10 |              0.10508 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0676 | >20%                    |                 5 |              0.21352 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0826 | 5-10%                   |                 2 |              0.5413  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0827 |                         |                10 |              0.10827 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0943 | >20%                    |                 2 |              0.54715 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1024 | >20%                    |                10 |              0.11024 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1844 | 15-20%                  |                10 |              0.11844 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2827 | >20%                    |                 5 |              0.25654 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2961 | >20%                    |                 5 |              0.25922 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3043 |                         |                 5 |              0.26086 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3144 | >20%                    |                10 |              0.13144 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3218 | >20%                    |                 5 |              0.26436 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3247 | >20%                    |                10 |              0.13247 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.3369 | >20%                    |                10 |              0.13369 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.343  | >20%                    |                10 |              0.1343  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4185 | 10-15%                  |                 2 |              0.70925 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4526 | >20%                    |                10 |              0.14526 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4694 | 5-10%                   |                 5 |              0.29388 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5442 | 15-20%                  |                 5 |              0.30884 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5764 | 5-10%                   |                 2 |              0.7882  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5783 | 10-15%                  |                10 |              0.15783 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5818 | >20%                    |                10 |              0.15818 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6566 | >20%                    |                10 |              0.16566 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7265 | 5-10%                   |                10 |              0.17265 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.745  | >20%                    |                10 |              0.1745  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8166 |                         |                10 |              0.18166 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.8996 | >20%                    |                 5 |              0.37992 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.9492 | 15-20%                  |                10 |              0.19492 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.1476 | 5-10%                   |                 2 |              1.0738  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.7875 | >20%                    |                 5 |              0.5575  |