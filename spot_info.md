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

Data correct as of 2026-09-11 03:51:29.257801, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1266 | >20%                    |                 2 |              0.0633  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1775 | 15-20%                  |                 2 |              0.08875 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2049 | 15-20%                  |                 5 |              0.04098 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2131 | >20%                    |                 2 |              0.10655 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.218  | >20%                    |                 5 |              0.0436  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2323 | >20%                    |                 2 |              0.11615 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2423 | >20%                    |                 2 |              0.12115 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2572 | >20%                    |                 2 |              0.1286  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2636 | 15-20%                  |                 5 |              0.05272 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | 15-20%                  |                 2 |              0.1391  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2796 | >20%                    |                 2 |              0.1398  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2833 | >20%                    |                 2 |              0.14165 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2966 | >20%                    |                 2 |              0.1483  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3042 | >20%                    |                 2 |              0.1521  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3181 | 10-15%                  |                 2 |              0.15905 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3545 | >20%                    |                 5 |              0.0709  |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.3623 |                         |                 5 |              0.07246 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3683 | 15-20%                  |                 2 |              0.18415 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3683 | >20%                    |                10 |              0.03683 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3689 | >20%                    |                 2 |              0.18445 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3728 | 10-15%                  |                10 |              0.03728 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3729 | >20%                    |                 5 |              0.07458 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3823 | <5%                     |                 2 |              0.19115 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.384  | 10-15%                  |                 2 |              0.192   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3856 | >20%                    |                 5 |              0.07712 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3858 | >20%                    |                 5 |              0.07716 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3946 | >20%                    |                 2 |              0.1973  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3978 | >20%                    |                 2 |              0.1989  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4129 | >20%                    |                 5 |              0.08258 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4168 | >20%                    |                 5 |              0.08336 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4226 | >20%                    |                 2 |              0.2113  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4237 | 15-20%                  |                 2 |              0.21185 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4246 | >20%                    |                 2 |              0.2123  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.434  | >20%                    |                 2 |              0.217   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4566 | >20%                    |                10 |              0.04566 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4674 | >20%                    |                10 |              0.04674 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4684 | >20%                    |                 5 |              0.09368 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4737 | 10-15%                  |                 2 |              0.23685 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4824 | >20%                    |                 5 |              0.09648 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4848 | >20%                    |                 5 |              0.09696 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.492  | >20%                    |                 5 |              0.0984  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5017 |                         |                 2 |              0.25085 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5021 | 15-20%                  |                 2 |              0.25105 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5079 | >20%                    |                 5 |              0.10158 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5086 | <5%                     |                 2 |              0.2543  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5101 | >20%                    |                 2 |              0.25505 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5143 | >20%                    |                10 |              0.05143 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5146 | >20%                    |                 5 |              0.10292 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5209 | >20%                    |                 5 |              0.10418 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5211 | >20%                    |                 2 |              0.26055 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5297 | >20%                    |                 2 |              0.26485 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5313 | >20%                    |                 5 |              0.10626 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5459 | >20%                    |                 2 |              0.27295 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5673 | >20%                    |                 5 |              0.11346 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5678 | 5-10%                   |                10 |              0.05678 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5768 | >20%                    |                 2 |              0.2884  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5851 | >20%                    |                 5 |              0.11702 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.601  | 10-15%                  |                 5 |              0.1202  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6062 | 5-10%                   |                10 |              0.06062 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6067 | >20%                    |                 2 |              0.30335 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6227 | >20%                    |                 5 |              0.12454 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6248 | >20%                    |                10 |              0.06248 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6266 | >20%                    |                 5 |              0.12532 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6324 | >20%                    |                 2 |              0.3162  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6331 | >20%                    |                 2 |              0.31655 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6366 | 10-15%                  |                 2 |              0.3183  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6445 | 5-10%                   |                 5 |              0.1289  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6527 | >20%                    |                 5 |              0.13054 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6555 | >20%                    |                 5 |              0.1311  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6616 | >20%                    |                10 |              0.06616 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6659 | >20%                    |                 5 |              0.13318 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6756 | 15-20%                  |                10 |              0.06756 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6803 | <5%                     |                 2 |              0.34015 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6847 | 5-10%                   |                 2 |              0.34235 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6929 | >20%                    |                 5 |              0.13858 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7047 | >20%                    |                10 |              0.07047 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.72   | >20%                    |                 5 |              0.144   |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7228 | >20%                    |                 5 |              0.14456 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.736  | 15-20%                  |                 5 |              0.1472  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7433 | >20%                    |                 5 |              0.14866 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7522 | >20%                    |                10 |              0.07522 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.757  | 15-20%                  |                10 |              0.0757  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.777  | >20%                    |                 2 |              0.3885  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7848 | <5%                     |                10 |              0.07848 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8156 | 15-20%                  |                10 |              0.08156 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8354 | >20%                    |                 5 |              0.16708 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8444 | >20%                    |                 5 |              0.16888 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.846  | 15-20%                  |                 2 |              0.423   |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8586 | 15-20%                  |                 5 |              0.17172 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8619 | >20%                    |                10 |              0.08619 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8675 | >20%                    |                 2 |              0.43375 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8677 | 10-15%                  |                 2 |              0.43385 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8895 | 5-10%                   |                10 |              0.08895 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8931 | >20%                    |                10 |              0.08931 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9009 | >20%                    |                 5 |              0.18018 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.9073 | >20%                    |                 2 |              0.45365 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9111 | >20%                    |                10 |              0.09111 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9192 | <5%                     |                 5 |              0.18384 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9315 |                         |                 2 |              0.46575 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9586 | 10-15%                  |                 2 |              0.4793  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9716 | >20%                    |                10 |              0.09716 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9899 | >20%                    |                10 |              0.09899 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9973 | >20%                    |                10 |              0.09973 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9985 | >20%                    |                10 |              0.09985 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9996 | >20%                    |                10 |              0.09996 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0116 | >20%                    |                 5 |              0.20232 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0134 | 15-20%                  |                10 |              0.10134 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0265 | >20%                    |                10 |              0.10265 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0294 | 10-15%                  |                 2 |              0.5147  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0604 | 15-20%                  |                10 |              0.10604 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0804 | >20%                    |                10 |              0.10804 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0986 | >20%                    |                10 |              0.10986 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1022 | >20%                    |                10 |              0.11022 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1162 | 5-10%                   |                10 |              0.11162 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1194 | >20%                    |                 5 |              0.22388 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1497 | 5-10%                   |                 2 |              0.57485 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1608 | >20%                    |                 2 |              0.5804  |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.171  |                         |                10 |              0.1171  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1767 |                         |                 2 |              0.58835 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.1844 | >20%                    |                 5 |              0.23688 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1848 | >20%                    |                 5 |              0.23696 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1901 | >20%                    |                 5 |              0.23802 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1964 |                         |                 5 |              0.23928 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.2034 | >20%                    |                 5 |              0.24068 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2094 | >20%                    |                10 |              0.12094 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2159 | >20%                    |                10 |              0.12159 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.2232 | >20%                    |                10 |              0.12232 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2585 |                         |                 5 |              0.2517  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3296 | >20%                    |                10 |              0.13296 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3483 | 10-15%                  |                10 |              0.13483 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3612 | >20%                    |                10 |              0.13612 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3635 | >20%                    |                10 |              0.13635 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3664 | >20%                    |                10 |              0.13664 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.384  | 15-20%                  |                10 |              0.1384  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3855 | >20%                    |                 2 |              0.69275 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4749 | 15-20%                  |                10 |              0.14749 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5096 | 5-10%                   |                 5 |              0.30192 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5601 | >20%                    |                 2 |              0.78005 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.565  | >20%                    |                 5 |              0.313   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6227 | >20%                    |                10 |              0.16227 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6291 | >20%                    |                10 |              0.16291 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.7747 | >20%                    |                 5 |              0.35494 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7786 |                         |                10 |              0.17786 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.8668 | >20%                    |                 5 |              0.37336 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.9367 | 15-20%                  |                10 |              0.19367 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.9399 | 5-10%                   |                 2 |              0.96995 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9437 |                         |                10 |              0.19437 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0407 | 5-10%                   |                 2 |              1.02035 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1212 | 15-20%                  |                 5 |              0.42424 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2057 | 5-10%                   |                10 |              0.22057 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.6538 | >20%                    |                10 |              0.26538 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.7004 | >20%                    |                10 |              0.27004 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0128 | >20%                    |                10 |              0.30128 |