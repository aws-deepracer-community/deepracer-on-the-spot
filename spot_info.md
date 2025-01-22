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

Data correct as of 2025-01-22 01:37:12.716233, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.1983 | 10-15%                  |                 2 |              0.09915 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2054 | >20%                    |                 5 |              0.04108 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2168 | 5-10%                   |                 2 |              0.1084  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2278 | <5%                     |                 2 |              0.1139  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2313 | 15-20%                  |                 2 |              0.11565 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.244  | 5-10%                   |                 2 |              0.122   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2443 | 5-10%                   |                 2 |              0.12215 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2618 | 5-10%                   |                 2 |              0.1309  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2625 | <5%                     |                 5 |              0.0525  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2812 | <5%                     |                 2 |              0.1406  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2817 | 10-15%                  |                 2 |              0.14085 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3    | <5%                     |                 2 |              0.15    |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3029 | >20%                    |                 2 |              0.15145 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3177 | 5-10%                   |                 2 |              0.15885 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3216 | 10-15%                  |                 2 |              0.1608  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3281 | >20%                    |                 2 |              0.16405 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3425 | 5-10%                   |                 5 |              0.0685  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3459 | <5%                     |                 2 |              0.17295 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3525 | >20%                    |                 2 |              0.17625 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3675 | <5%                     |                 2 |              0.18375 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3682 | <5%                     |                 2 |              0.1841  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3698 | <5%                     |                 5 |              0.07396 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3719 | 5-10%                   |                 2 |              0.18595 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3779 | <5%                     |                 2 |              0.18895 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3791 | 5-10%                   |                 5 |              0.07582 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3865 | 5-10%                   |                 2 |              0.19325 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3874 | <5%                     |                 2 |              0.1937  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3904 | 10-15%                  |                 5 |              0.07808 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3906 | >20%                    |                 2 |              0.1953  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3967 | <5%                     |                 2 |              0.19835 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3992 | 5-10%                   |                 2 |              0.1996  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4124 | >20%                    |                 2 |              0.2062  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4131 | 5-10%                   |                 2 |              0.20655 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4136 | 10-15%                  |                 2 |              0.2068  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4168 | >20%                    |                 5 |              0.08336 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4191 | <5%                     |                 2 |              0.20955 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4213 | >20%                    |                 2 |              0.21065 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4219 | 5-10%                   |                 5 |              0.08438 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.434  | >20%                    |                 5 |              0.0868  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4386 | <5%                     |                 5 |              0.08772 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4428 | 10-15%                  |                 5 |              0.08856 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4509 | 15-20%                  |                 5 |              0.09018 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4568 | <5%                     |                 5 |              0.09136 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4593 | 10-15%                  |                 5 |              0.09186 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4628 | 10-15%                  |                10 |              0.04628 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.47   | <5%                     |                 5 |              0.094   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4727 | <5%                     |                 2 |              0.23635 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4745 | 10-15%                  |                10 |              0.04745 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4769 | 10-15%                  |                 5 |              0.09538 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4786 | >20%                    |                 5 |              0.09572 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.49   | <5%                     |                 5 |              0.098   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4909 | 15-20%                  |                 2 |              0.24545 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4941 | 5-10%                   |                 5 |              0.09882 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4988 | <5%                     |                 2 |              0.2494  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5002 | <5%                     |                 2 |              0.2501  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5039 | <5%                     |                 2 |              0.25195 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5059 | <5%                     |                 5 |              0.10118 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5094 | <5%                     |                 5 |              0.10188 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.512  | 5-10%                   |                 2 |              0.256   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5133 | 5-10%                   |                 5 |              0.10266 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5159 | <5%                     |                 5 |              0.10318 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5159 | >20%                    |                 2 |              0.25795 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5305 | >20%                    |                 5 |              0.1061  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5412 | 5-10%                   |                 5 |              0.10824 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.542  | 5-10%                   |                 5 |              0.1084  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5449 | <5%                     |                 5 |              0.10898 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5507 | >20%                    |                 5 |              0.11014 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5523 | <5%                     |                 5 |              0.11046 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5523 | >20%                    |                10 |              0.05523 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5601 | 5-10%                   |                 5 |              0.11202 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5644 | <5%                     |                 5 |              0.11288 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5718 | 15-20%                  |                 2 |              0.2859  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5741 | 15-20%                  |                 2 |              0.28705 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5812 | <5%                     |                 5 |              0.11624 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5872 | 5-10%                   |                 5 |              0.11744 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.617  | 5-10%                   |                10 |              0.0617  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6321 | >20%                    |                 2 |              0.31605 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6336 | >20%                    |                 5 |              0.12672 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6339 | 15-20%                  |                10 |              0.06339 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6367 | 5-10%                   |                10 |              0.06367 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6644 | <5%                     |                10 |              0.06644 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6647 | >20%                    |                 5 |              0.13294 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6733 | >20%                    |                10 |              0.06733 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6733 | >20%                    |                10 |              0.06733 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6782 | <5%                     |                 5 |              0.13564 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6826 | >20%                    |                10 |              0.06826 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.685  | >20%                    |                10 |              0.0685  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6862 | 10-15%                  |                 5 |              0.13724 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6944 | >20%                    |                 5 |              0.13888 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.715  | 5-10%                   |                 5 |              0.143   |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7276 | 15-20%                  |                10 |              0.07276 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7285 | <5%                     |                 2 |              0.36425 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7316 | 5-10%                   |                 5 |              0.14632 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7324 | <5%                     |                10 |              0.07324 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7491 | 10-15%                  |                10 |              0.07491 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7626 | 15-20%                  |                 2 |              0.3813  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7627 | >20%                    |                 5 |              0.15254 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7642 | 5-10%                   |                 2 |              0.3821  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7742 | 5-10%                   |                10 |              0.07742 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7747 | 10-15%                  |                10 |              0.07747 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7764 | 10-15%                  |                10 |              0.07764 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7803 | 5-10%                   |                10 |              0.07803 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7853 | 5-10%                   |                10 |              0.07853 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7885 | >20%                    |                 5 |              0.1577  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7977 | >20%                    |                 5 |              0.15954 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8138 | >20%                    |                10 |              0.08138 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8216 | <5%                     |                10 |              0.08216 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8227 | 15-20%                  |                10 |              0.08227 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8314 | 10-15%                  |                10 |              0.08314 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8327 | 15-20%                  |                10 |              0.08327 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8566 | 5-10%                   |                10 |              0.08566 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8589 | >20%                    |                10 |              0.08589 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8859 | <5%                     |                10 |              0.08859 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8966 | 5-10%                   |                10 |              0.08966 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9101 | 5-10%                   |                 5 |              0.18202 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9121 | <5%                     |                10 |              0.09121 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9263 | <5%                     |                10 |              0.09263 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9504 | <5%                     |                10 |              0.09504 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.964  | <5%                     |                10 |              0.0964  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9693 | 10-15%                  |                10 |              0.09693 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9902 | <5%                     |                10 |              0.09902 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9949 | >20%                    |                10 |              0.09949 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0321 | 5-10%                   |                10 |              0.10321 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0713 | <5%                     |                10 |              0.10713 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0858 | 15-20%                  |                10 |              0.10858 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0991 | 10-15%                  |                 5 |              0.21982 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.106  | 5-10%                   |                 5 |              0.2212  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1284 | 15-20%                  |                 2 |              0.5642  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1619 | 10-15%                  |                10 |              0.11619 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1673 | 10-15%                  |                10 |              0.11673 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.189  | 5-10%                   |                 2 |              0.5945  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2424 | >20%                    |                10 |              0.12424 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4437 | 5-10%                   |                10 |              0.14437 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4621 | 10-15%                  |                10 |              0.14621 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4651 | 5-10%                   |                10 |              0.14651 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.467  | 15-20%                  |                 5 |              0.2934  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.079  | 10-15%                  |                10 |              0.2079  |