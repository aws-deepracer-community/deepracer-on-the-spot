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

Data correct as of 2025-05-03 01:48:02.002427, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1195 | >20%                    |                 2 |              0.05975 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1903 | 15-20%                  |                 5 |              0.03806 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1939 | >20%                    |                 2 |              0.09695 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2119 | >20%                    |                 5 |              0.04238 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2185 | <5%                     |                 5 |              0.0437  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2202 | 15-20%                  |                 2 |              0.1101  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2239 | <5%                     |                 2 |              0.11195 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2258 | 15-20%                  |                 2 |              0.1129  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2288 | >20%                    |                 5 |              0.04576 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2403 | 5-10%                   |                 5 |              0.04806 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2565 | 5-10%                   |                 2 |              0.12825 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2569 | 5-10%                   |                 2 |              0.12845 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2604 | >20%                    |                 2 |              0.1302  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2745 | <5%                     |                 2 |              0.13725 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2835 | >20%                    |                 2 |              0.14175 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2857 | 15-20%                  |                10 |              0.02857 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.292  | 10-15%                  |                10 |              0.0292  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2983 | >20%                    |                 2 |              0.14915 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3002 | 10-15%                  |                 2 |              0.1501  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3025 | <5%                     |                 2 |              0.15125 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3053 | 5-10%                   |                 2 |              0.15265 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3096 | 5-10%                   |                 2 |              0.1548  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.31   | <5%                     |                 2 |              0.155   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3109 | >20%                    |                 2 |              0.15545 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3166 | >20%                    |                 2 |              0.1583  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3196 | 5-10%                   |                 2 |              0.1598  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3214 | 5-10%                   |                 5 |              0.06428 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3215 | >20%                    |                 2 |              0.16075 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3216 | >20%                    |                 2 |              0.1608  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3233 | 15-20%                  |                10 |              0.03233 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3273 | >20%                    |                10 |              0.03273 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3317 | 15-20%                  |                10 |              0.03317 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3335 | <5%                     |                 5 |              0.0667  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3368 | <5%                     |                 5 |              0.06736 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3467 | >20%                    |                 2 |              0.17335 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3533 | >20%                    |                 5 |              0.07066 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.357  | 5-10%                   |                 5 |              0.0714  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3577 | >20%                    |                 2 |              0.17885 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3608 | >20%                    |                 5 |              0.07216 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3635 | >20%                    |                 2 |              0.18175 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3658 | >20%                    |                 2 |              0.1829  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3705 | <5%                     |                 2 |              0.18525 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3714 | >20%                    |                 2 |              0.1857  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3734 | 10-15%                  |                10 |              0.03734 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3758 | >20%                    |                 5 |              0.07516 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3821 | >20%                    |                10 |              0.03821 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.388  | >20%                    |                10 |              0.0388  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3902 | 10-15%                  |                 2 |              0.1951  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4018 | 5-10%                   |                 2 |              0.2009  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4032 | 10-15%                  |                 2 |              0.2016  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4112 | 5-10%                   |                 5 |              0.08224 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4126 | >20%                    |                 2 |              0.2063  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4152 | >20%                    |                 5 |              0.08304 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4179 | 15-20%                  |                 5 |              0.08358 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4181 | >20%                    |                 2 |              0.20905 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4191 | 10-15%                  |                 2 |              0.20955 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4218 | >20%                    |                 2 |              0.2109  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4317 | 15-20%                  |                 5 |              0.08634 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4439 | 15-20%                  |                 2 |              0.22195 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4466 | <5%                     |                 5 |              0.08932 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4467 | >20%                    |                 5 |              0.08934 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4496 | 10-15%                  |                10 |              0.04496 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4528 | >20%                    |                 5 |              0.09056 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4547 | >20%                    |                 5 |              0.09094 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4645 | 10-15%                  |                 5 |              0.0929  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4665 | >20%                    |                 5 |              0.0933  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4731 | 5-10%                   |                 5 |              0.09462 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.475  | >20%                    |                 2 |              0.2375  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4786 | >20%                    |                 5 |              0.09572 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4808 | >20%                    |                 2 |              0.2404  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4831 | >20%                    |                 2 |              0.24155 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4845 | <5%                     |                 2 |              0.24225 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.489  | <5%                     |                 5 |              0.0978  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4925 | 15-20%                  |                 5 |              0.0985  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.493  | >20%                    |                 5 |              0.0986  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4935 | >20%                    |                 5 |              0.0987  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4973 | 5-10%                   |                 5 |              0.09946 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5031 | 10-15%                  |                 5 |              0.10062 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5033 | >20%                    |                 2 |              0.25165 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5051 | >20%                    |                 5 |              0.10102 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5172 | >20%                    |                 2 |              0.2586  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.523  | >20%                    |                 2 |              0.2615  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.525  | 10-15%                  |                 2 |              0.2625  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5263 | >20%                    |                 5 |              0.10526 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5319 | >20%                    |                 5 |              0.10638 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5451 | >20%                    |                 2 |              0.27255 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5522 | 10-15%                  |                10 |              0.05522 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5607 | >20%                    |                 2 |              0.28035 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5638 | 5-10%                   |                 5 |              0.11276 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5746 | >20%                    |                 5 |              0.11492 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5748 | >20%                    |                 5 |              0.11496 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5762 | 10-15%                  |                 2 |              0.2881  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5781 | 10-15%                  |                 5 |              0.11562 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5843 | <5%                     |                 5 |              0.11686 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5913 | >20%                    |                 5 |              0.11826 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.592  | >20%                    |                 2 |              0.296   |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.593  | >20%                    |                 2 |              0.2965  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5971 | <5%                     |                10 |              0.05971 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6137 | >20%                    |                 5 |              0.12274 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6341 | 10-15%                  |                 5 |              0.12682 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6461 | >20%                    |                 2 |              0.32305 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6536 | >20%                    |                 5 |              0.13072 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6538 | 15-20%                  |                10 |              0.06538 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6631 | 15-20%                  |                 5 |              0.13262 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6678 | >20%                    |                 2 |              0.3339  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6678 | 5-10%                   |                10 |              0.06678 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6806 | >20%                    |                10 |              0.06806 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6846 | >20%                    |                 2 |              0.3423  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6979 | >20%                    |                 2 |              0.34895 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7143 | >20%                    |                 5 |              0.14286 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7166 | <5%                     |                 5 |              0.14332 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7299 | <5%                     |                 5 |              0.14598 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7327 | >20%                    |                10 |              0.07327 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7367 | 5-10%                   |                10 |              0.07367 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7411 | >20%                    |                 5 |              0.14822 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7465 | >20%                    |                10 |              0.07465 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7523 | <5%                     |                10 |              0.07523 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7534 | >20%                    |                 5 |              0.15068 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7596 | >20%                    |                 5 |              0.15192 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7659 | <5%                     |                 5 |              0.15318 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7684 | 15-20%                  |                10 |              0.07684 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7694 | >20%                    |                 5 |              0.15388 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7741 | >20%                    |                10 |              0.07741 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7816 | >20%                    |                 5 |              0.15632 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7818 | 15-20%                  |                10 |              0.07818 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7833 | >20%                    |                10 |              0.07833 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7907 | 10-15%                  |                10 |              0.07907 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7985 | >20%                    |                 2 |              0.39925 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8    | <5%                     |                10 |              0.08    |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8047 | 10-15%                  |                10 |              0.08047 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8156 | 15-20%                  |                10 |              0.08156 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8182 | 15-20%                  |                10 |              0.08182 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8387 | 10-15%                  |                10 |              0.08387 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8446 | 10-15%                  |                10 |              0.08446 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8537 | >20%                    |                10 |              0.08537 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8596 | >20%                    |                 5 |              0.17192 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.875  | 5-10%                   |                10 |              0.0875  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8759 | >20%                    |                10 |              0.08759 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8787 | >20%                    |                 2 |              0.43935 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8797 | 10-15%                  |                 5 |              0.17594 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8864 | >20%                    |                10 |              0.08864 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.892  | 10-15%                  |                10 |              0.0892  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8972 | 15-20%                  |                10 |              0.08972 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.901  | 10-15%                  |                10 |              0.0901  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9012 | <5%                     |                10 |              0.09012 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9167 | <5%                     |                10 |              0.09167 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9336 | >20%                    |                10 |              0.09336 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9466 | >20%                    |                 2 |              0.4733  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9546 | 15-20%                  |                10 |              0.09546 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9763 | >20%                    |                10 |              0.09763 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9905 | >20%                    |                 2 |              0.49525 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0449 | >20%                    |                10 |              0.10449 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0527 | 10-15%                  |                 5 |              0.21054 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0551 | <5%                     |                10 |              0.10551 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0618 | >20%                    |                 5 |              0.21236 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0627 | >20%                    |                10 |              0.10627 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0742 | <5%                     |                 5 |              0.21484 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0842 | >20%                    |                 2 |              0.5421  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0922 | >20%                    |                10 |              0.10922 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1318 | <5%                     |                10 |              0.11318 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1367 | 15-20%                  |                 2 |              0.56835 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1752 | >20%                    |                10 |              0.11752 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2069 | 10-15%                  |                 2 |              0.60345 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2088 | >20%                    |                10 |              0.12088 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2468 | >20%                    |                10 |              0.12468 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2884 | <5%                     |                 5 |              0.25768 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3602 | >20%                    |                 5 |              0.27204 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3768 | 15-20%                  |                10 |              0.13768 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4047 | >20%                    |                 2 |              0.70235 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4168 | 15-20%                  |                10 |              0.14168 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4483 | >20%                    |                 5 |              0.28966 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4563 | >20%                    |                 5 |              0.29126 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.583  | 15-20%                  |                10 |              0.1583  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6246 | 5-10%                   |                10 |              0.16246 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7075 | >20%                    |                10 |              0.17075 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7979 | >20%                    |                10 |              0.17979 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9767 | <5%                     |                10 |              0.19767 |