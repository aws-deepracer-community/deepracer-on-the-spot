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

Data correct as of 2025-01-14 01:26:33.872490, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1998 | <5%                     |                 2 |              0.0999  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2251 | 10-15%                  |                 2 |              0.11255 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2288 | 5-10%                   |                 2 |              0.1144  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2318 | 15-20%                  |                 2 |              0.1159  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.237  | 5-10%                   |                 2 |              0.1185  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2379 | <5%                     |                 2 |              0.11895 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2527 | 5-10%                   |                 2 |              0.12635 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2558 | >20%                    |                 5 |              0.05116 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2617 | 5-10%                   |                 2 |              0.13085 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2819 | <5%                     |                 2 |              0.14095 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2863 | 10-15%                  |                 2 |              0.14315 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2989 | <5%                     |                 2 |              0.14945 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | 10-15%                  |                 2 |              0.1537  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3085 | 5-10%                   |                 2 |              0.15425 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3134 | 5-10%                   |                 2 |              0.1567  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3143 | >20%                    |                 2 |              0.15715 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3223 | >20%                    |                 2 |              0.16115 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3254 | <5%                     |                 5 |              0.06508 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3382 | 5-10%                   |                 5 |              0.06764 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3413 | <5%                     |                 2 |              0.17065 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3667 | <5%                     |                 5 |              0.07334 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.367  | <5%                     |                 2 |              0.1835  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3674 | >20%                    |                 2 |              0.1837  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3724 | <5%                     |                 2 |              0.1862  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3739 | <5%                     |                 2 |              0.18695 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3783 | 5-10%                   |                 5 |              0.07566 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.384  | 10-15%                  |                 5 |              0.0768  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3844 | 10-15%                  |                 2 |              0.1922  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3863 | 10-15%                  |                10 |              0.03863 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3873 | >20%                    |                 2 |              0.19365 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.391  | <5%                     |                 5 |              0.0782  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.398  | 5-10%                   |                 2 |              0.199   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4006 | <5%                     |                 2 |              0.2003  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4075 | >20%                    |                 2 |              0.20375 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4091 | <5%                     |                 2 |              0.20455 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4149 | 5-10%                   |                 2 |              0.20745 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4153 | 5-10%                   |                 5 |              0.08306 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4176 | <5%                     |                 2 |              0.2088  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4251 | >20%                    |                10 |              0.04251 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4269 | >20%                    |                 2 |              0.21345 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4353 | 10-15%                  |                 5 |              0.08706 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4376 | 5-10%                   |                 2 |              0.2188  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4384 | >20%                    |                 5 |              0.08768 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4482 | 15-20%                  |                10 |              0.04482 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4516 | >20%                    |                 5 |              0.09032 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4621 | <5%                     |                 5 |              0.09242 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4648 | <5%                     |                 5 |              0.09296 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4662 | <5%                     |                 2 |              0.2331  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4732 | 5-10%                   |                 5 |              0.09464 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4745 | 15-20%                  |                 2 |              0.23725 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4746 | <5%                     |                 2 |              0.2373  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4779 | 10-15%                  |                 5 |              0.09558 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4796 | <5%                     |                 5 |              0.09592 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4799 | 15-20%                  |                 5 |              0.09598 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4912 | 10-15%                  |                 5 |              0.09824 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4947 | <5%                     |                 5 |              0.09894 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5008 | 5-10%                   |                 2 |              0.2504  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5022 | <5%                     |                 5 |              0.10044 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5023 | >20%                    |                 5 |              0.10046 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5053 | <5%                     |                 2 |              0.25265 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5074 | <5%                     |                 2 |              0.2537  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5129 | <5%                     |                 5 |              0.10258 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5169 | <5%                     |                 5 |              0.10338 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5326 | >20%                    |                 2 |              0.2663  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5334 | >20%                    |                 5 |              0.10668 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5355 | >20%                    |                 5 |              0.1071  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5419 | 5-10%                   |                 5 |              0.10838 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.548  | <5%                     |                 5 |              0.1096  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5481 | >20%                    |                 5 |              0.10962 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5501 | 5-10%                   |                 5 |              0.11002 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5612 | 5-10%                   |                 5 |              0.11224 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5669 | <5%                     |                 5 |              0.11338 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5684 | 5-10%                   |                 5 |              0.11368 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5721 | 15-20%                  |                 2 |              0.28605 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5896 | 5-10%                   |                 5 |              0.11792 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5904 | 15-20%                  |                 2 |              0.2952  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5999 | 10-15%                  |                10 |              0.05999 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6032 | <5%                     |                 5 |              0.12064 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.621  | 5-10%                   |                10 |              0.0621  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6285 | 10-15%                  |                10 |              0.06285 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6295 | >20%                    |                 2 |              0.31475 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6355 | 5-10%                   |                10 |              0.06355 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.668  | <5%                     |                 5 |              0.1336  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.668  | >20%                    |                10 |              0.0668  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6703 | >20%                    |                10 |              0.06703 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6753 | >20%                    |                10 |              0.06753 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6884 | >20%                    |                 5 |              0.13768 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7039 | >20%                    |                 5 |              0.14078 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7107 | <5%                     |                10 |              0.07107 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7172 | 10-15%                  |                 5 |              0.14344 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7243 | >20%                    |                10 |              0.07243 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7325 | 15-20%                  |                 2 |              0.36625 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.734  | <5%                     |                10 |              0.0734  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7374 | 10-15%                  |                10 |              0.07374 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7449 | 5-10%                   |                 2 |              0.37245 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7489 | 5-10%                   |                 5 |              0.14978 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7525 | >20%                    |                 5 |              0.1505  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7776 | 15-20%                  |                10 |              0.07776 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7787 | >20%                    |                10 |              0.07787 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7919 | <5%                     |                 2 |              0.39595 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8011 | >20%                    |                 5 |              0.16022 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8076 | >20%                    |                 5 |              0.16152 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8086 | 10-15%                  |                10 |              0.08086 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.815  | 15-20%                  |                10 |              0.0815  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8152 | 5-10%                   |                10 |              0.08152 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8214 | 5-10%                   |                10 |              0.08214 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8278 | 15-20%                  |                10 |              0.08278 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8296 | 5-10%                   |                10 |              0.08296 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8488 | >20%                    |                10 |              0.08488 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8507 | 5-10%                   |                 5 |              0.17014 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8591 | <5%                     |                10 |              0.08591 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8636 | <5%                     |                10 |              0.08636 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8775 | 5-10%                   |                10 |              0.08775 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8786 | 5-10%                   |                10 |              0.08786 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8853 | 10-15%                  |                10 |              0.08853 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8973 | <5%                     |                10 |              0.08973 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9073 | <5%                     |                10 |              0.09073 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9247 | <5%                     |                10 |              0.09247 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9618 | 5-10%                   |                 2 |              0.4809  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.984  | >20%                    |                10 |              0.0984  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.991  | 5-10%                   |                 5 |              0.1982  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.993  | 10-15%                  |                10 |              0.0993  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0151 | 5-10%                   |                10 |              0.10151 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0188 | <5%                     |                10 |              0.10188 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0188 | 10-15%                  |                 5 |              0.20376 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0277 | <5%                     |                10 |              0.10277 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0424 | <5%                     |                10 |              0.10424 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0871 | 5-10%                   |                 5 |              0.21742 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0895 | 15-20%                  |                 2 |              0.54475 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0916 | 15-20%                  |                10 |              0.10916 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2052 | 10-15%                  |                10 |              0.12052 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2596 | >20%                    |                10 |              0.12596 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4259 | 10-15%                  |                10 |              0.14259 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4406 | 10-15%                  |                10 |              0.14406 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4507 | 5-10%                   |                10 |              0.14507 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5183 | 5-10%                   |                10 |              0.15183 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5225 | 15-20%                  |                 5 |              0.3045  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.055  | 10-15%                  |                10 |              0.2055  |