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

Data correct as of 2024-12-24 01:37:31.063079, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1351 |                         |                 2 |              0.06755 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1414 |                         |                 2 |              0.0707  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1859 |                         |                 5 |              0.03718 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2045 |                         |                 5 |              0.0409  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2062 | 15-20%                  |                 2 |              0.1031  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2196 | <5%                     |                 5 |              0.04392 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2197 | >20%                    |                 2 |              0.10985 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2227 | 15-20%                  |                 2 |              0.11135 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2268 | 15-20%                  |                 2 |              0.1134  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2297 | 5-10%                   |                 2 |              0.11485 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2356 | 15-20%                  |                 2 |              0.1178  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2384 | >20%                    |                 2 |              0.1192  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2459 | 5-10%                   |                 2 |              0.12295 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2614 | <5%                     |                 2 |              0.1307  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2614 | 15-20%                  |                 5 |              0.05228 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2804 | <5%                     |                 2 |              0.1402  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2818 | <5%                     |                 2 |              0.1409  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2844 |                         |                10 |              0.02844 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2903 | 5-10%                   |                 2 |              0.14515 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2929 | 5-10%                   |                 2 |              0.14645 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.301  | 5-10%                   |                 2 |              0.1505  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3061 | >20%                    |                 2 |              0.15305 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3116 |                         |                10 |              0.03116 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3215 | <5%                     |                 2 |              0.16075 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3223 | >20%                    |                 2 |              0.16115 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3332 | <5%                     |                 5 |              0.06664 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3343 | >20%                    |                 5 |              0.06686 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3361 | 5-10%                   |                 5 |              0.06722 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3403 | <5%                     |                 2 |              0.17015 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3453 | 10-15%                  |                 2 |              0.17265 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3498 | 10-15%                  |                 2 |              0.1749  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.356  | 10-15%                  |                 2 |              0.178   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3572 | >20%                    |                 2 |              0.1786  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3587 | 15-20%                  |                10 |              0.03587 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3604 | >20%                    |                 5 |              0.07208 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3614 | <5%                     |                 2 |              0.1807  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3626 | <5%                     |                 5 |              0.07252 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3667 | >20%                    |                 2 |              0.18335 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.379  | <5%                     |                 5 |              0.0758  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3794 | >20%                    |                 2 |              0.1897  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3873 | <5%                     |                 5 |              0.07746 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3914 | 5-10%                   |                 2 |              0.1957  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3945 | 5-10%                   |                 5 |              0.0789  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3977 | >20%                    |                 2 |              0.19885 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3988 | >20%                    |                10 |              0.03988 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4041 | 10-15%                  |                 2 |              0.20205 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4176 | 5-10%                   |                 2 |              0.2088  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4184 | 5-10%                   |                 2 |              0.2092  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.428  | 10-15%                  |                 2 |              0.214   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4292 | 10-15%                  |                10 |              0.04292 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4305 | >20%                    |                 5 |              0.0861  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4307 | 5-10%                   |                 5 |              0.08614 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4311 | 10-15%                  |                10 |              0.04311 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.434  | >20%                    |                 5 |              0.0868  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4353 | 15-20%                  |                 2 |              0.21765 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4365 | 10-15%                  |                 5 |              0.0873  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.438  | 5-10%                   |                 5 |              0.0876  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4436 | 5-10%                   |                10 |              0.04436 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4438 | >20%                    |                 5 |              0.08876 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4439 | <5%                     |                 5 |              0.08878 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.444  | >20%                    |                 5 |              0.0888  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.4475 | <5%                     |                 2 |              0.22375 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4494 | 5-10%                   |                 5 |              0.08988 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4555 | 5-10%                   |                 2 |              0.22775 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4613 | >20%                    |                 5 |              0.09226 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4669 | 5-10%                   |                 2 |              0.23345 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4744 | 15-20%                  |                 2 |              0.2372  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4793 | 10-15%                  |                 5 |              0.09586 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4842 | <5%                     |                 5 |              0.09684 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4849 | <5%                     |                 5 |              0.09698 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4916 | 10-15%                  |                 2 |              0.2458  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4947 | 15-20%                  |                 5 |              0.09894 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4997 | >20%                    |                10 |              0.04997 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5012 | <5%                     |                 5 |              0.10024 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5087 | 10-15%                  |                 2 |              0.25435 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5092 | <5%                     |                 2 |              0.2546  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5168 | >20%                    |                 2 |              0.2584  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5177 | >20%                    |                 5 |              0.10354 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.524  | <5%                     |                 5 |              0.1048  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5278 | >20%                    |                 5 |              0.10556 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5284 | <5%                     |                 5 |              0.10568 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5315 | >20%                    |                 5 |              0.1063  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5481 | >20%                    |                 5 |              0.10962 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5507 | 5-10%                   |                 5 |              0.11014 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5543 | 15-20%                  |                 5 |              0.11086 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5625 | 10-15%                  |                 5 |              0.1125  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5797 | >20%                    |                 2 |              0.28985 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5853 | >20%                    |                10 |              0.05853 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5986 | <5%                     |                 5 |              0.11972 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6436 | 15-20%                  |                 2 |              0.3218  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6497 | >20%                    |                10 |              0.06497 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6561 | >20%                    |                10 |              0.06561 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6586 | 15-20%                  |                 5 |              0.13172 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6604 | 5-10%                   |                10 |              0.06604 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6628 | 5-10%                   |                10 |              0.06628 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6784 | <5%                     |                10 |              0.06784 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6797 | <5%                     |                 5 |              0.13594 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6853 | >20%                    |                10 |              0.06853 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6949 | 15-20%                  |                 5 |              0.13898 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6991 | 5-10%                   |                 5 |              0.13982 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7052 | 10-15%                  |                10 |              0.07052 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7102 | >20%                    |                 2 |              0.3551  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7122 | <5%                     |                 2 |              0.3561  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.735  | 5-10%                   |                10 |              0.0735  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7392 | >20%                    |                 5 |              0.14784 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7424 | >20%                    |                 5 |              0.14848 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7477 | 10-15%                  |                10 |              0.07477 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7612 | 15-20%                  |                10 |              0.07612 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.7737 | <5%                     |                 2 |              0.38685 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7752 | >20%                    |                 5 |              0.15504 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7795 | 5-10%                   |                10 |              0.07795 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7862 | 15-20%                  |                10 |              0.07862 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.7891 | >20%                    |                10 |              0.07891 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8009 | <5%                     |                10 |              0.08009 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8021 | 5-10%                   |                10 |              0.08021 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8168 | >20%                    |                10 |              0.08168 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8256 | 5-10%                   |                 5 |              0.16512 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8385 | 10-15%                  |                10 |              0.08385 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8475 | 10-15%                  |                10 |              0.08475 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8492 | 5-10%                   |                10 |              0.08492 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8527 | 10-15%                  |                10 |              0.08527 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.8792 | <5%                     |                10 |              0.08792 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8831 | <5%                     |                10 |              0.08831 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8934 | <5%                     |                10 |              0.08934 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8951 | 5-10%                   |                10 |              0.08951 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9341 | 10-15%                  |                 2 |              0.46705 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9351 | 5-10%                   |                 5 |              0.18702 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9424 | >20%                    |                10 |              0.09424 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9536 | <5%                     |                 5 |              0.19072 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9598 | 15-20%                  |                10 |              0.09598 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9806 | 15-20%                  |                10 |              0.09806 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9935 | 5-10%                   |                10 |              0.09935 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0418 | <5%                     |                10 |              0.10418 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0462 | <5%                     |                10 |              0.10462 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1036 | >20%                    |                10 |              0.11036 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1195 | >20%                    |                10 |              0.11195 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1474 | 5-10%                   |                10 |              0.11474 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.23   | <5%                     |                10 |              0.123   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2636 | >20%                    |                10 |              0.12636 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3725 | 5-10%                   |                10 |              0.13725 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5488 | 5-10%                   |                 5 |              0.30976 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0007 | 10-15%                  |                10 |              0.20007 |