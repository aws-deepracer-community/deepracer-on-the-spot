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

Data correct as of 2025-01-28 01:27:32.209798, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2078 | <5%                     |                 2 |              0.1039  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2147 | >20%                    |                 2 |              0.10735 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2158 | 5-10%                   |                 2 |              0.1079  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2257 | 10-15%                  |                 2 |              0.11285 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2352 | 5-10%                   |                 2 |              0.1176  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2413 | 10-15%                  |                 2 |              0.12065 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2509 | 5-10%                   |                 2 |              0.12545 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2521 | 10-15%                  |                 2 |              0.12605 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2659 | <5%                     |                 2 |              0.13295 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3018 | <5%                     |                 2 |              0.1509  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3019 | >20%                    |                 2 |              0.15095 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3025 | 5-10%                   |                 2 |              0.15125 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3058 | 10-15%                  |                 5 |              0.06116 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3219 | 10-15%                  |                 2 |              0.16095 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3243 | <5%                     |                 5 |              0.06486 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3303 | 5-10%                   |                 2 |              0.16515 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3325 | 10-15%                  |                 5 |              0.0665  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3366 | <5%                     |                 2 |              0.1683  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3429 | 15-20%                  |                10 |              0.03429 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3456 | <5%                     |                 2 |              0.1728  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3461 | >20%                    |                 2 |              0.17305 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3524 | >20%                    |                 2 |              0.1762  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3596 | 5-10%                   |                 2 |              0.1798  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.36   | >20%                    |                 2 |              0.18    |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3604 | 5-10%                   |                 5 |              0.07208 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3619 | 5-10%                   |                 2 |              0.18095 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3722 | <5%                     |                 5 |              0.07444 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3764 | 5-10%                   |                 5 |              0.07528 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.385  | 5-10%                   |                 5 |              0.077   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3934 | 5-10%                   |                 2 |              0.1967  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3968 | 5-10%                   |                 2 |              0.1984  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4013 | <5%                     |                 2 |              0.20065 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4114 | 10-15%                  |                 2 |              0.2057  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4129 | >20%                    |                 2 |              0.20645 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4223 | 15-20%                  |                 5 |              0.08446 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4254 | 10-15%                  |                 2 |              0.2127  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4401 | 5-10%                   |                 2 |              0.22005 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4472 | 15-20%                  |                 5 |              0.08944 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4499 | <5%                     |                 2 |              0.22495 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4518 | 10-15%                  |                 5 |              0.09036 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4586 | <5%                     |                 5 |              0.09172 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4624 | <5%                     |                 5 |              0.09248 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4696 | <5%                     |                 5 |              0.09392 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4723 | 15-20%                  |                 5 |              0.09446 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.477  | 15-20%                  |                 2 |              0.2385  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4812 | 5-10%                   |                 2 |              0.2406  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4974 | 15-20%                  |                 5 |              0.09948 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4984 | <5%                     |                 2 |              0.2492  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4985 | >20%                    |                 5 |              0.0997  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4999 | >20%                    |                 2 |              0.24995 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5005 | >20%                    |                 2 |              0.25025 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5026 | 10-15%                  |                 5 |              0.10052 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5031 | <5%                     |                 5 |              0.10062 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5033 | <5%                     |                 2 |              0.25165 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5066 | 15-20%                  |                 5 |              0.10132 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5113 | >20%                    |                 5 |              0.10226 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5125 | <5%                     |                 5 |              0.1025  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5129 | >20%                    |                 2 |              0.25645 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5209 | 5-10%                   |                 5 |              0.10418 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5254 | 10-15%                  |                 5 |              0.10508 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5286 | 5-10%                   |                 2 |              0.2643  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5302 | >20%                    |                 5 |              0.10604 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5339 | 5-10%                   |                 5 |              0.10678 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5454 | 10-15%                  |                 2 |              0.2727  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5461 | <5%                     |                 5 |              0.10922 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5499 | <5%                     |                 5 |              0.10998 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5607 | 15-20%                  |                 2 |              0.28035 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5653 | <5%                     |                10 |              0.05653 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5699 | 5-10%                   |                 5 |              0.11398 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5729 | 5-10%                   |                 5 |              0.11458 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5804 | >20%                    |                 5 |              0.11608 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5871 | 5-10%                   |                 5 |              0.11742 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5875 | 5-10%                   |                10 |              0.05875 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5964 | 5-10%                   |                 5 |              0.11928 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6007 | 5-10%                   |                10 |              0.06007 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6185 | >20%                    |                10 |              0.06185 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.624  | 5-10%                   |                10 |              0.0624  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6353 | 5-10%                   |                 5 |              0.12706 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6375 | >20%                    |                 2 |              0.31875 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6497 | <5%                     |                10 |              0.06497 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6548 | <5%                     |                10 |              0.06548 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6579 | >20%                    |                10 |              0.06579 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.667  | 10-15%                  |                10 |              0.0667  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6682 | 5-10%                   |                10 |              0.06682 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.671  | 15-20%                  |                10 |              0.0671  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6867 | 5-10%                   |                 5 |              0.13734 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6872 | 5-10%                   |                 5 |              0.13744 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6898 | >20%                    |                 5 |              0.13796 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7054 | 15-20%                  |                 2 |              0.3527  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7057 | <5%                     |                 5 |              0.14114 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7059 | 10-15%                  |                10 |              0.07059 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7208 | 10-15%                  |                10 |              0.07208 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7357 | 10-15%                  |                10 |              0.07357 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7416 | >20%                    |                 5 |              0.14832 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7432 | >20%                    |                 5 |              0.14864 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7455 | >20%                    |                10 |              0.07455 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7527 | >20%                    |                 5 |              0.15054 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7566 | >20%                    |                10 |              0.07566 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7632 | >20%                    |                 5 |              0.15264 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7838 | 5-10%                   |                10 |              0.07838 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7842 | 5-10%                   |                10 |              0.07842 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7891 | 15-20%                  |                 2 |              0.39455 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7958 | <5%                     |                 2 |              0.3979  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8052 | 15-20%                  |                10 |              0.08052 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8082 | >20%                    |                10 |              0.08082 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8114 | 5-10%                   |                10 |              0.08114 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8229 | 5-10%                   |                10 |              0.08229 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8581 | <5%                     |                10 |              0.08581 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8603 | 15-20%                  |                10 |              0.08603 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8626 | 15-20%                  |                10 |              0.08626 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8635 | 5-10%                   |                10 |              0.08635 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8835 | 5-10%                   |                 5 |              0.1767  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.8888 | 10-15%                  |                10 |              0.08888 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8892 | 5-10%                   |                10 |              0.08892 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8983 | <5%                     |                10 |              0.08983 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9142 | <5%                     |                10 |              0.09142 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9177 | >20%                    |                10 |              0.09177 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9186 | <5%                     |                10 |              0.09186 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9214 | 5-10%                   |                10 |              0.09214 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9611 | 5-10%                   |                10 |              0.09611 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9919 | >20%                    |                10 |              0.09919 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0148 | 15-20%                  |                10 |              0.10148 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0233 | <5%                     |                10 |              0.10233 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0644 | 5-10%                   |                 5 |              0.21288 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0663 | 15-20%                  |                 5 |              0.21326 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.082  | 5-10%                   |                10 |              0.1082  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0868 | 10-15%                  |                 2 |              0.5434  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1743 | >20%                    |                10 |              0.11743 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2009 | 10-15%                  |                10 |              0.12009 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2649 | 10-15%                  |                 2 |              0.63245 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3139 | 5-10%                   |                10 |              0.13139 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3146 | 5-10%                   |                10 |              0.13146 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3408 | 15-20%                  |                 5 |              0.26816 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4468 | 5-10%                   |                10 |              0.14468 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0263 | 5-10%                   |                10 |              0.20263 |