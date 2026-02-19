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

Data correct as of 2026-02-19 02:37:14.878145, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1519 | >20%                    |                 2 |              0.07595 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1604 | >20%                    |                 2 |              0.0802  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1994 | >20%                    |                 2 |              0.0997  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2079 | >20%                    |                 5 |              0.04158 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.221  | >20%                    |                 5 |              0.0442  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.222  | >20%                    |                 2 |              0.111   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2496 | 15-20%                  |                 2 |              0.1248  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2522 | >20%                    |                 2 |              0.1261  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2606 | 5-10%                   |                10 |              0.02606 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2623 | 10-15%                  |                 2 |              0.13115 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2705 | >20%                    |                 2 |              0.13525 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2786 | 5-10%                   |                 2 |              0.1393  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2827 | >20%                    |                 2 |              0.14135 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2901 | 10-15%                  |                 2 |              0.14505 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2964 | >20%                    |                 2 |              0.1482  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3073 | >20%                    |                 2 |              0.15365 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | >20%                    |                 2 |              0.1537  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3123 | 5-10%                   |                 2 |              0.15615 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3123 | >20%                    |                 2 |              0.15615 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3232 | <5%                     |                 2 |              0.1616  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.326  | <5%                     |                 5 |              0.0652  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3371 | >20%                    |                 5 |              0.06742 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3464 | >20%                    |                 2 |              0.1732  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3495 | >20%                    |                 5 |              0.0699  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3506 | >20%                    |                 5 |              0.07012 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3521 | <5%                     |                 5 |              0.07042 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3572 | >20%                    |                 2 |              0.1786  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3619 | 5-10%                   |                 5 |              0.07238 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3619 | >20%                    |                 5 |              0.07238 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3721 | >20%                    |                 2 |              0.18605 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.375  | 5-10%                   |                10 |              0.0375  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.377  | >20%                    |                 2 |              0.1885  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.378  | 15-20%                  |                 2 |              0.189   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3796 | >20%                    |                 5 |              0.07592 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3801 | 5-10%                   |                 2 |              0.19005 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3838 | >20%                    |                 5 |              0.07676 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3841 | >20%                    |                10 |              0.03841 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3867 | >20%                    |                 5 |              0.07734 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3875 | >20%                    |                 2 |              0.19375 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3924 | 15-20%                  |                 2 |              0.1962  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3939 | 10-15%                  |                 2 |              0.19695 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4018 | <5%                     |                 5 |              0.08036 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4019 | 10-15%                  |                 5 |              0.08038 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4068 | >20%                    |                 2 |              0.2034  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.416  | >20%                    |                10 |              0.0416  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.417  | <5%                     |                 5 |              0.0834  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4181 | >20%                    |                 5 |              0.08362 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4186 | <5%                     |                 2 |              0.2093  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4198 | >20%                    |                 2 |              0.2099  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4207 | 5-10%                   |                 2 |              0.21035 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4248 | >20%                    |                 2 |              0.2124  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4258 | >20%                    |                 2 |              0.2129  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4309 | >20%                    |                 5 |              0.08618 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4325 | <5%                     |                 2 |              0.21625 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4361 | 15-20%                  |                 5 |              0.08722 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4374 | <5%                     |                10 |              0.04374 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.438  | 5-10%                   |                 2 |              0.219   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4403 | >20%                    |                 5 |              0.08806 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4404 | <5%                     |                 2 |              0.2202  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4421 | 15-20%                  |                 2 |              0.22105 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4493 | >20%                    |                 2 |              0.22465 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.452  | 5-10%                   |                 2 |              0.226   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4526 | >20%                    |                10 |              0.04526 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4546 | >20%                    |                 5 |              0.09092 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4588 | >20%                    |                 2 |              0.2294  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4602 | >20%                    |                 2 |              0.2301  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4604 | 5-10%                   |                 5 |              0.09208 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4624 | 15-20%                  |                 2 |              0.2312  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4649 | 5-10%                   |                 2 |              0.23245 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4689 | >20%                    |                 5 |              0.09378 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.476  | >20%                    |                10 |              0.0476  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4765 | >20%                    |                10 |              0.04765 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4825 | 15-20%                  |                 2 |              0.24125 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4945 | >20%                    |                 2 |              0.24725 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4962 | >20%                    |                 5 |              0.09924 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5008 | <5%                     |                10 |              0.05008 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5028 | 15-20%                  |                 5 |              0.10056 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5067 | >20%                    |                 5 |              0.10134 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5154 | >20%                    |                 2 |              0.2577  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5177 | >20%                    |                 2 |              0.25885 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5299 | >20%                    |                 5 |              0.10598 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5304 | >20%                    |                 2 |              0.2652  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5325 | 15-20%                  |                 5 |              0.1065  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5396 | <5%                     |                 5 |              0.10792 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5406 | >20%                    |                 5 |              0.10812 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.543  | >20%                    |                 5 |              0.1086  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5503 | >20%                    |                 5 |              0.11006 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.557  | >20%                    |                10 |              0.0557  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5684 | 15-20%                  |                10 |              0.05684 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5771 | >20%                    |                 5 |              0.11542 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5974 | 15-20%                  |                10 |              0.05974 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5975 | >20%                    |                10 |              0.05975 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5986 | 5-10%                   |                 2 |              0.2993  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.599  | >20%                    |                10 |              0.0599  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6006 | 15-20%                  |                 2 |              0.3003  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6067 | <5%                     |                10 |              0.06067 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6087 | >20%                    |                 5 |              0.12174 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6094 | <5%                     |                10 |              0.06094 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6095 | <5%                     |                 5 |              0.1219  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6156 | 5-10%                   |                 5 |              0.12312 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6184 | >20%                    |                 5 |              0.12368 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6277 | >20%                    |                 5 |              0.12554 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6352 | 5-10%                   |                 5 |              0.12704 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6378 | >20%                    |                 2 |              0.3189  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6389 | 10-15%                  |                 5 |              0.12778 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6441 | >20%                    |                 5 |              0.12882 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6449 | >20%                    |                10 |              0.06449 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6505 | >20%                    |                 5 |              0.1301  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6633 | 15-20%                  |                10 |              0.06633 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6687 | 5-10%                   |                 2 |              0.33435 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.671  | >20%                    |                10 |              0.0671  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6737 | 5-10%                   |                 5 |              0.13474 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6773 | <5%                     |                 2 |              0.33865 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.687  | 15-20%                  |                10 |              0.0687  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6946 | <5%                     |                10 |              0.06946 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7045 | 10-15%                  |                10 |              0.07045 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7116 | >20%                    |                10 |              0.07116 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.715  | >20%                    |                 5 |              0.143   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7155 | >20%                    |                 5 |              0.1431  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7343 | 5-10%                   |                 5 |              0.14686 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7349 | >20%                    |                10 |              0.07349 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7464 | >20%                    |                 5 |              0.14928 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7491 | >20%                    |                 5 |              0.14982 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7528 | 5-10%                   |                10 |              0.07528 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7661 | >20%                    |                10 |              0.07661 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7693 | >20%                    |                 2 |              0.38465 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7813 | <5%                     |                10 |              0.07813 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7893 | >20%                    |                10 |              0.07893 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7908 | >20%                    |                 2 |              0.3954  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7999 | >20%                    |                 2 |              0.39995 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8037 | <5%                     |                 5 |              0.16074 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8105 | >20%                    |                 5 |              0.1621  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8108 | >20%                    |                10 |              0.08108 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8168 |                         |                 2 |              0.4084  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8185 | 15-20%                  |                 5 |              0.1637  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.83   | 10-15%                  |                10 |              0.083   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8324 | >20%                    |                10 |              0.08324 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8347 | <5%                     |                10 |              0.08347 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8376 | 15-20%                  |                10 |              0.08376 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8429 | <5%                     |                 5 |              0.16858 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.843  | >20%                    |                 2 |              0.4215  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8442 | 10-15%                  |                 2 |              0.4221  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8453 | >20%                    |                 5 |              0.16906 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8502 | >20%                    |                 2 |              0.4251  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8536 | <5%                     |                10 |              0.08536 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8628 | >20%                    |                 5 |              0.17256 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8641 | >20%                    |                10 |              0.08641 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8886 | 15-20%                  |                10 |              0.08886 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8938 | >20%                    |                10 |              0.08938 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8966 | >20%                    |                 5 |              0.17932 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8989 | <5%                     |                10 |              0.08989 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.906  | 5-10%                   |                10 |              0.0906  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9479 | <5%                     |                10 |              0.09479 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9534 | >20%                    |                10 |              0.09534 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9858 | >20%                    |                10 |              0.09858 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.996  | >20%                    |                 5 |              0.1992  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9978 | >20%                    |                10 |              0.09978 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0152 | >20%                    |                10 |              0.10152 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0259 | >20%                    |                 2 |              0.51295 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0299 | 10-15%                  |                10 |              0.10299 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0367 | 5-10%                   |                 5 |              0.20734 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0482 | >20%                    |                 5 |              0.20964 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0715 | 5-10%                   |                10 |              0.10715 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0827 |                         |                 5 |              0.21654 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0836 | >20%                    |                10 |              0.10836 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0852 | 10-15%                  |                 5 |              0.21704 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0995 | >20%                    |                10 |              0.10995 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1052 | 15-20%                  |                10 |              0.11052 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1087 | >20%                    |                 5 |              0.22174 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1775 | >20%                    |                 2 |              0.58875 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1911 | >20%                    |                10 |              0.11911 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2139 | <5%                     |                10 |              0.12139 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.219  | >20%                    |                10 |              0.1219  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4073 | >20%                    |                10 |              0.14073 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.408  | 10-15%                  |                 5 |              0.2816  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4099 | >20%                    |                10 |              0.14099 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4423 | >20%                    |                 2 |              0.72115 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.574  | >20%                    |                10 |              0.1574  |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6494 |                         |                10 |              0.16494 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6809 | 15-20%                  |                10 |              0.16809 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1533 | 10-15%                  |                10 |              0.21533 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.5003 | <5%                     |                 5 |              0.50006 |