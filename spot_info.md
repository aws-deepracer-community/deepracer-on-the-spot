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

Data correct as of 2026-09-20 04:13:17.156638, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1021 | >20%                    |                 2 |              0.05105 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1422 | 15-20%                  |                 2 |              0.0711  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1695 | >20%                    |                 5 |              0.0339  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2198 | 15-20%                  |                 5 |              0.04396 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2345 | >20%                    |                 2 |              0.11725 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2399 | >20%                    |                 2 |              0.11995 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2457 | >20%                    |                 2 |              0.12285 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.2487 |                         |                 5 |              0.04974 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2526 | >20%                    |                 2 |              0.1263  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.253  | >20%                    |                 2 |              0.1265  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2582 | >20%                    |                 2 |              0.1291  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2864 | >20%                    |                 2 |              0.1432  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2906 | 15-20%                  |                 2 |              0.1453  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3097 | 10-15%                  |                 2 |              0.15485 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3138 | >20%                    |                 2 |              0.1569  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3391 | >20%                    |                 2 |              0.16955 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3447 | >20%                    |                 2 |              0.17235 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3467 | >20%                    |                 5 |              0.06934 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3616 | >20%                    |                 5 |              0.07232 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3658 | >20%                    |                 5 |              0.07316 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3705 | 15-20%                  |                 2 |              0.18525 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3877 | 10-15%                  |                 2 |              0.19385 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3889 | <5%                     |                 2 |              0.19445 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.391  | >20%                    |                 5 |              0.0782  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3962 | >20%                    |                 2 |              0.1981  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4089 | >20%                    |                 5 |              0.08178 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4143 | >20%                    |                 2 |              0.20715 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.425  | 15-20%                  |                 2 |              0.2125  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4315 | >20%                    |                10 |              0.04315 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4323 | >20%                    |                 2 |              0.21615 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4356 | >20%                    |                10 |              0.04356 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.438  | >20%                    |                 5 |              0.0876  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.44   | 5-10%                   |                10 |              0.044   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.444  | >20%                    |                 2 |              0.222   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4483 | >20%                    |                 2 |              0.22415 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4664 | 15-20%                  |                 2 |              0.2332  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4732 | >20%                    |                 5 |              0.09464 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4752 | >20%                    |                 5 |              0.09504 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4836 | 10-15%                  |                 2 |              0.2418  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4879 | >20%                    |                 5 |              0.09758 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4893 |                         |                 2 |              0.24465 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4928 | >20%                    |                 5 |              0.09856 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.496  | >20%                    |                 5 |              0.0992  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5014 | >20%                    |                 5 |              0.10028 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5017 | <5%                     |                 2 |              0.25085 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5059 | >20%                    |                 2 |              0.25295 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.512  | >20%                    |                 5 |              0.1024  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5214 | <5%                     |                10 |              0.05214 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5289 | >20%                    |                 2 |              0.26445 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5376 | >20%                    |                 5 |              0.10752 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5441 | >20%                    |                 2 |              0.27205 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5606 | 10-15%                  |                10 |              0.05606 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.562  | >20%                    |                 5 |              0.1124  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5621 | >20%                    |                 5 |              0.11242 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5687 | >20%                    |                10 |              0.05687 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5757 | 15-20%                  |                10 |              0.05757 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5759 | >20%                    |                 5 |              0.11518 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.58   | >20%                    |                 2 |              0.29    |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.596  | 15-20%                  |                10 |              0.0596  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5987 | 5-10%                   |                10 |              0.05987 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6015 | 10-15%                  |                 5 |              0.1203  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6141 | >20%                    |                10 |              0.06141 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6165 | >20%                    |                 5 |              0.1233  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6269 | >20%                    |                 5 |              0.12538 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6369 | 10-15%                  |                 2 |              0.31845 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.637  | >20%                    |                 2 |              0.3185  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6378 | 5-10%                   |                 5 |              0.12756 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6667 | >20%                    |                 5 |              0.13334 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6677 | >20%                    |                 5 |              0.13354 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6768 | <5%                     |                 2 |              0.3384  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6812 | >20%                    |                 5 |              0.13624 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.683  | 5-10%                   |                 2 |              0.3415  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6946 | >20%                    |                 2 |              0.3473  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6946 | >20%                    |                10 |              0.06946 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7021 | >20%                    |                 2 |              0.35105 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7102 | >20%                    |                 5 |              0.14204 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7179 | >20%                    |                10 |              0.07179 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7328 | 15-20%                  |                 5 |              0.14656 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7332 | 15-20%                  |                 2 |              0.3666  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7379 | >20%                    |                 5 |              0.14758 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7436 | >20%                    |                10 |              0.07436 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7475 | >20%                    |                10 |              0.07475 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7484 | >20%                    |                 2 |              0.3742  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7512 | >20%                    |                 5 |              0.15024 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7593 | >20%                    |                 5 |              0.15186 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7905 | >20%                    |                10 |              0.07905 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7997 | >20%                    |                 2 |              0.39985 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8346 | 10-15%                  |                 2 |              0.4173  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8372 | 15-20%                  |                10 |              0.08372 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8396 | >20%                    |                 5 |              0.16792 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8458 | >20%                    |                 2 |              0.4229  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8473 | >20%                    |                 5 |              0.16946 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8571 | >20%                    |                10 |              0.08571 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8608 | 15-20%                  |                 5 |              0.17216 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8686 | >20%                    |                10 |              0.08686 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8731 | 5-10%                   |                10 |              0.08731 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9056 | <5%                     |                 5 |              0.18112 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9153 | >20%                    |                 5 |              0.18306 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9379 |                         |                 2 |              0.46895 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9407 | 10-15%                  |                 2 |              0.47035 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9611 | >20%                    |                10 |              0.09611 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9695 | >20%                    |                10 |              0.09695 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9702 | 15-20%                  |                10 |              0.09702 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9735 | >20%                    |                 5 |              0.1947  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9939 | >20%                    |                10 |              0.09939 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0182 | 15-20%                  |                10 |              0.10182 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0222 | 15-20%                  |                10 |              0.10222 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.024  | >20%                    |                10 |              0.1024  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0292 | >20%                    |                10 |              0.10292 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.0415 | >20%                    |                 2 |              0.52075 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0661 | >20%                    |                 5 |              0.21322 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.0691 |                         |                10 |              0.10691 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0734 | >20%                    |                10 |              0.10734 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.0769 | >20%                    |                 5 |              0.21538 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0835 | >20%                    |                10 |              0.10835 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0876 | >20%                    |                10 |              0.10876 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0889 | >20%                    |                10 |              0.10889 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1012 | >20%                    |                 5 |              0.22024 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1168 | >20%                    |                10 |              0.11168 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1171 | 5-10%                   |                10 |              0.11171 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1486 | 5-10%                   |                 2 |              0.5743  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1636 | >20%                    |                 5 |              0.23272 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1778 |                         |                 2 |              0.5889  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2063 |                         |                 5 |              0.24126 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2096 | >20%                    |                10 |              0.12096 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2121 | >20%                    |                10 |              0.12121 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2148 | >20%                    |                10 |              0.12148 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.2293 | >20%                    |                 5 |              0.24586 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2433 |                         |                 5 |              0.24866 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3343 | 5-10%                   |                 2 |              0.66715 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3451 | >20%                    |                 2 |              0.67255 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.347  | >20%                    |                10 |              0.1347  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3569 | 10-15%                  |                10 |              0.13569 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3826 | 15-20%                  |                10 |              0.13826 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3853 | >20%                    |                10 |              0.13853 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4248 | 10-15%                  |                 2 |              0.7124  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4698 | >20%                    |                 5 |              0.29396 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5318 | >20%                    |                 2 |              0.7659  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5503 | 5-10%                   |                 5 |              0.31006 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5565 | >20%                    |                10 |              0.15565 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6525 | >20%                    |                10 |              0.16525 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7897 | >20%                    |                 5 |              0.35794 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8147 | 15-20%                  |                10 |              0.18147 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.89   |                         |                10 |              0.189   |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.0236 |                         |                10 |              0.20236 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.036  | 5-10%                   |                 2 |              1.018   |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1244 | 15-20%                  |                 5 |              0.42488 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2257 | 5-10%                   |                10 |              0.22257 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.6052 | >20%                    |                10 |              0.26052 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6327 | >20%                    |                10 |              0.26327 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0469 | >20%                    |                10 |              0.30469 |