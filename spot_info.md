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

Data correct as of 2025-06-10 01:57:11.773472, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1448 | 5-10%                   |                 2 |              0.0724  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1645 | >20%                    |                 5 |              0.0329  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 15-20%                  |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1899 | >20%                    |                 2 |              0.09495 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.1961 | >20%                    |                 5 |              0.03922 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2029 | >20%                    |                 2 |              0.10145 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.205  | >20%                    |                 2 |              0.1025  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2183 | 15-20%                  |                 2 |              0.10915 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2336 | >20%                    |                 2 |              0.1168  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | 15-20%                  |                 2 |              0.11705 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2361 | >20%                    |                 5 |              0.04722 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | >20%                    |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 5-10%                   |                10 |              0.02419 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2438 | <5%                     |                 2 |              0.1219  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2575 | 15-20%                  |                 2 |              0.12875 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2601 | >20%                    |                 5 |              0.05202 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2606 | 15-20%                  |                10 |              0.02606 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2711 | >20%                    |                 2 |              0.13555 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.275  | 10-15%                  |                 2 |              0.1375  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2756 | >20%                    |                 2 |              0.1378  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2772 | 15-20%                  |                 2 |              0.1386  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | <5%                     |                 2 |              0.1392  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2837 | 15-20%                  |                 2 |              0.14185 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2869 | 15-20%                  |                 2 |              0.14345 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.305  | >20%                    |                 2 |              0.1525  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3067 | >20%                    |                 2 |              0.15335 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3096 | >20%                    |                 5 |              0.06192 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3105 | >20%                    |                 5 |              0.0621  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3139 | >20%                    |                 2 |              0.15695 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3142 | >20%                    |                 2 |              0.1571  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3235 | >20%                    |                10 |              0.03235 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3237 | >20%                    |                 2 |              0.16185 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3317 | 15-20%                  |                 5 |              0.06634 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3356 | 15-20%                  |                 5 |              0.06712 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3358 | 15-20%                  |                 2 |              0.1679  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3418 | 5-10%                   |                 2 |              0.1709  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3484 | 5-10%                   |                 2 |              0.1742  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3659 | >20%                    |                 2 |              0.18295 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3675 | 10-15%                  |                 2 |              0.18375 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.368  | 15-20%                  |                 2 |              0.184   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3709 | >20%                    |                 5 |              0.07418 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3821 | >20%                    |                10 |              0.03821 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3901 | >20%                    |                 2 |              0.19505 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3939 | >20%                    |                 2 |              0.19695 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3946 | >20%                    |                 5 |              0.07892 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3969 | 5-10%                   |                 5 |              0.07938 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3983 | >20%                    |                10 |              0.03983 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3997 | 15-20%                  |                 2 |              0.19985 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.401  | 15-20%                  |                 2 |              0.2005  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4038 | <5%                     |                 5 |              0.08076 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4056 | >20%                    |                10 |              0.04056 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4074 | >20%                    |                 5 |              0.08148 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4086 | 5-10%                   |                 2 |              0.2043  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4086 | >20%                    |                 5 |              0.08172 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4107 | 10-15%                  |                 5 |              0.08214 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4116 | >20%                    |                10 |              0.04116 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4179 | >20%                    |                10 |              0.04179 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4187 | <5%                     |                 2 |              0.20935 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4243 | >20%                    |                 2 |              0.21215 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4325 | <5%                     |                 5 |              0.0865  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4345 | >20%                    |                 2 |              0.21725 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4354 | 15-20%                  |                 5 |              0.08708 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4415 | >20%                    |                 5 |              0.0883  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4449 | >20%                    |                 5 |              0.08898 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.448  | 15-20%                  |                 2 |              0.224   |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4531 | <5%                     |                 5 |              0.09062 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4541 | >20%                    |                 2 |              0.22705 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4554 | >20%                    |                 5 |              0.09108 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4557 | >20%                    |                 5 |              0.09114 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.458  | >20%                    |                 2 |              0.229   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4633 | 15-20%                  |                 5 |              0.09266 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4682 | 5-10%                   |                 2 |              0.2341  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4701 | >20%                    |                 5 |              0.09402 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4752 | <5%                     |                 5 |              0.09504 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4807 | 15-20%                  |                10 |              0.04807 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.482  | 15-20%                  |                 5 |              0.0964  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.494  | 5-10%                   |                 5 |              0.0988  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4973 | >20%                    |                 5 |              0.09946 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4983 | >20%                    |                 2 |              0.24915 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5014 | 5-10%                   |                 5 |              0.10028 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.502  | 5-10%                   |                 2 |              0.251   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5038 | 10-15%                  |                 5 |              0.10076 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.504  | >20%                    |                 2 |              0.252   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5048 | 15-20%                  |                 2 |              0.2524  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5074 | >20%                    |                 5 |              0.10148 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5086 | 15-20%                  |                 2 |              0.2543  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5136 | <5%                     |                 5 |              0.10272 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5259 | >20%                    |                 2 |              0.26295 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5351 | >20%                    |                 2 |              0.26755 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5413 | >20%                    |                 5 |              0.10826 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5456 | >20%                    |                 5 |              0.10912 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5472 | 10-15%                  |                10 |              0.05472 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5535 | >20%                    |                 2 |              0.27675 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5691 | >20%                    |                 5 |              0.11382 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5762 | 5-10%                   |                 5 |              0.11524 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5888 | >20%                    |                 5 |              0.11776 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5914 | >20%                    |                10 |              0.05914 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.602  | >20%                    |                 2 |              0.301   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6041 | >20%                    |                10 |              0.06041 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6046 | <5%                     |                 2 |              0.3023  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.609  | 5-10%                   |                 2 |              0.3045  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6138 | >20%                    |                 2 |              0.3069  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6182 | >20%                    |                 2 |              0.3091  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6238 | >20%                    |                 5 |              0.12476 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6309 | >20%                    |                 5 |              0.12618 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6318 | >20%                    |                 5 |              0.12636 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6318 | >20%                    |                 5 |              0.12636 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6359 | >20%                    |                 2 |              0.31795 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6369 | 10-15%                  |                 5 |              0.12738 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.637  | <5%                     |                10 |              0.0637  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6412 | >20%                    |                 5 |              0.12824 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6463 | 15-20%                  |                10 |              0.06463 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6474 | <5%                     |                 5 |              0.12948 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6495 | >20%                    |                 5 |              0.1299  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6559 | >20%                    |                10 |              0.06559 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6586 | 10-15%                  |                10 |              0.06586 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6651 | 10-15%                  |                 2 |              0.33255 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6676 | >20%                    |                10 |              0.06676 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.674  | >20%                    |                10 |              0.0674  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6895 | 15-20%                  |                10 |              0.06895 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6903 | >20%                    |                10 |              0.06903 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6909 | >20%                    |                 5 |              0.13818 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6959 | >20%                    |                 2 |              0.34795 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6994 | 15-20%                  |                10 |              0.06994 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7049 | >20%                    |                 5 |              0.14098 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7082 | >20%                    |                10 |              0.07082 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7142 | 15-20%                  |                10 |              0.07142 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7251 | 10-15%                  |                 5 |              0.14502 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7261 | <5%                     |                 5 |              0.14522 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7387 | 15-20%                  |                10 |              0.07387 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.743  | <5%                     |                 5 |              0.1486  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7443 | <5%                     |                10 |              0.07443 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7561 | <5%                     |                10 |              0.07561 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7602 | >20%                    |                10 |              0.07602 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7612 | >20%                    |                10 |              0.07612 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7681 | >20%                    |                 2 |              0.38405 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7848 | >20%                    |                10 |              0.07848 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7945 | >20%                    |                 5 |              0.1589  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.797  | <5%                     |                10 |              0.0797  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7988 | 10-15%                  |                 5 |              0.15976 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8    | >20%                    |                 5 |              0.16    |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8003 | 15-20%                  |                10 |              0.08003 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8292 | >20%                    |                10 |              0.08292 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8375 | >20%                    |                10 |              0.08375 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8431 | >20%                    |                10 |              0.08431 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8475 | >20%                    |                10 |              0.08475 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8627 | 10-15%                  |                10 |              0.08627 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9018 | >20%                    |                10 |              0.09018 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9168 | <5%                     |                10 |              0.09168 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.935  | >20%                    |                10 |              0.0935  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9394 | >20%                    |                 5 |              0.18788 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9429 | >20%                    |                10 |              0.09429 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9474 | >20%                    |                10 |              0.09474 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9564 | >20%                    |                10 |              0.09564 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9597 | >20%                    |                10 |              0.09597 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9855 | >20%                    |                10 |              0.09855 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0138 | >20%                    |                10 |              0.10138 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0209 | >20%                    |                 5 |              0.20418 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0303 | <5%                     |                 2 |              0.51515 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0419 | >20%                    |                10 |              0.10419 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0465 | >20%                    |                 2 |              0.52325 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0495 | <5%                     |                 2 |              0.52475 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0499 | 10-15%                  |                10 |              0.10499 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0793 | >20%                    |                 2 |              0.53965 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.102  | <5%                     |                 5 |              0.2204  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1068 | 15-20%                  |                 5 |              0.22136 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1121 | >20%                    |                 5 |              0.22242 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1159 | 15-20%                  |                10 |              0.11159 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1161 | >20%                    |                10 |              0.11161 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1565 | 15-20%                  |                10 |              0.11565 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2041 | >20%                    |                10 |              0.12041 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2071 | 15-20%                  |                10 |              0.12071 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2072 | 10-15%                  |                10 |              0.12072 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.291  | >20%                    |                10 |              0.1291  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.351  | <5%                     |                10 |              0.1351  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3985 | >20%                    |                10 |              0.13985 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4037 | >20%                    |                 2 |              0.70185 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4244 | <5%                     |                 5 |              0.28488 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4596 | >20%                    |                 5 |              0.29192 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5393 | 10-15%                  |                10 |              0.15393 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.6727 | <5%                     |                10 |              0.16727 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0163 | 5-10%                   |                10 |              0.20163 |