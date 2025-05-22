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

Data correct as of 2025-05-22 01:53:02.675129, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1655 | >20%                    |                 2 |              0.08275 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2027 | 5-10%                   |                 5 |              0.04054 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2185 | >20%                    |                 2 |              0.10925 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2259 | >20%                    |                 2 |              0.11295 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2299 | >20%                    |                 2 |              0.11495 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2309 | >20%                    |                 5 |              0.04618 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.231  | >20%                    |                 2 |              0.1155  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2385 | 10-15%                  |                 2 |              0.11925 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2463 | 5-10%                   |                 2 |              0.12315 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2479 | 15-20%                  |                 2 |              0.12395 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2549 | <5%                     |                 2 |              0.12745 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2573 | >20%                    |                 2 |              0.12865 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.264  | 15-20%                  |                 2 |              0.132   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.268  | 10-15%                  |                 2 |              0.134   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2705 | >20%                    |                 2 |              0.13525 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2835 | >20%                    |                 2 |              0.14175 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2878 | 15-20%                  |                 2 |              0.1439  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | 5-10%                   |                10 |              0.0294  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2958 | >20%                    |                 2 |              0.1479  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2968 | >20%                    |                10 |              0.02968 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2991 | <5%                     |                 2 |              0.14955 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3099 | 15-20%                  |                 2 |              0.15495 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3111 | 15-20%                  |                 2 |              0.15555 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3149 | >20%                    |                10 |              0.03149 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.315  | >20%                    |                10 |              0.0315  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3156 | 15-20%                  |                 2 |              0.1578  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3174 | >20%                    |                 5 |              0.06348 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3226 | >20%                    |                 5 |              0.06452 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3284 | 10-15%                  |                 5 |              0.06568 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3344 | >20%                    |                 2 |              0.1672  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3369 | >20%                    |                 2 |              0.16845 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3395 | >20%                    |                10 |              0.03395 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3439 | 15-20%                  |                 5 |              0.06878 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3442 | 5-10%                   |                 5 |              0.06884 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3443 | 15-20%                  |                 2 |              0.17215 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3534 | 15-20%                  |                 5 |              0.07068 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.358  | >20%                    |                 2 |              0.179   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3645 | 5-10%                   |                 2 |              0.18225 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.366  | >20%                    |                 5 |              0.0732  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3665 | >20%                    |                 2 |              0.18325 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3713 | >20%                    |                 5 |              0.07426 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3768 | 15-20%                  |                 2 |              0.1884  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3772 | 5-10%                   |                 2 |              0.1886  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3839 | >20%                    |                10 |              0.03839 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3891 | >20%                    |                 2 |              0.19455 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3905 | >20%                    |                 2 |              0.19525 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.399  | <5%                     |                 2 |              0.1995  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4004 | >20%                    |                 5 |              0.08008 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4014 | 10-15%                  |                 2 |              0.2007  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4053 | 10-15%                  |                 2 |              0.20265 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | 15-20%                  |                10 |              0.04161 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4167 | <5%                     |                 5 |              0.08334 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4176 | <5%                     |                 5 |              0.08352 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4279 | 5-10%                   |                 5 |              0.08558 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4295 | 10-15%                  |                 5 |              0.0859  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4377 | <5%                     |                 2 |              0.21885 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4412 | >20%                    |                 2 |              0.2206  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4441 | >20%                    |                 2 |              0.22205 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4482 | 15-20%                  |                10 |              0.04482 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4509 | 15-20%                  |                 5 |              0.09018 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4535 | >20%                    |                 5 |              0.0907  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.454  | 15-20%                  |                 5 |              0.0908  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4551 | >20%                    |                10 |              0.04551 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4578 | >20%                    |                 2 |              0.2289  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4613 | >20%                    |                 2 |              0.23065 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.468  | >20%                    |                 5 |              0.0936  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4742 | >20%                    |                 2 |              0.2371  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4751 | >20%                    |                 5 |              0.09502 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.477  | 10-15%                  |                 5 |              0.0954  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4777 | >20%                    |                 5 |              0.09554 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4793 | >20%                    |                 2 |              0.23965 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4805 | 15-20%                  |                 5 |              0.0961  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.482  | >20%                    |                 5 |              0.0964  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4847 | >20%                    |                 5 |              0.09694 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4888 | >20%                    |                 2 |              0.2444  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4925 | >20%                    |                10 |              0.04925 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4939 | 15-20%                  |                10 |              0.04939 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.497  | <5%                     |                 5 |              0.0994  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5041 | 15-20%                  |                 2 |              0.25205 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5064 | >20%                    |                 2 |              0.2532  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5082 | 15-20%                  |                 5 |              0.10164 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5132 | >20%                    |                 2 |              0.2566  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5166 | 10-15%                  |                 5 |              0.10332 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5294 | >20%                    |                 5 |              0.10588 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5345 | >20%                    |                10 |              0.05345 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5376 | >20%                    |                 5 |              0.10752 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5456 | 5-10%                   |                 5 |              0.10912 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5482 | 10-15%                  |                 2 |              0.2741  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5483 | >20%                    |                 2 |              0.27415 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.56   | >20%                    |                 5 |              0.112   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5615 | >20%                    |                 5 |              0.1123  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5622 | >20%                    |                 2 |              0.2811  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.566  | >20%                    |                 2 |              0.283   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5695 | 5-10%                   |                 5 |              0.1139  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5755 | >20%                    |                 5 |              0.1151  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5776 | >20%                    |                 5 |              0.11552 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5791 | <5%                     |                 5 |              0.11582 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.586  | 15-20%                  |                 2 |              0.293   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5904 | >20%                    |                 5 |              0.11808 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5989 | 5-10%                   |                 2 |              0.29945 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6037 | 10-15%                  |                10 |              0.06037 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6043 | 5-10%                   |                10 |              0.06043 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6045 | 10-15%                  |                10 |              0.06045 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6147 | 10-15%                  |                 5 |              0.12294 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.615  | 5-10%                   |                 2 |              0.3075  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6152 | >20%                    |                 2 |              0.3076  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6635 | 15-20%                  |                 5 |              0.1327  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6699 | >20%                    |                 2 |              0.33495 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6716 | >20%                    |                10 |              0.06716 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.68   | >20%                    |                 5 |              0.136   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6806 | 10-15%                  |                 5 |              0.13612 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6829 | >20%                    |                 2 |              0.34145 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6833 | 10-15%                  |                 5 |              0.13666 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7005 | >20%                    |                10 |              0.07005 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7023 | <5%                     |                 5 |              0.14046 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7098 | >20%                    |                10 |              0.07098 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7174 | >20%                    |                 5 |              0.14348 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7203 | <5%                     |                10 |              0.07203 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7257 | <5%                     |                10 |              0.07257 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7307 | >20%                    |                 5 |              0.14614 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7452 | >20%                    |                 5 |              0.14904 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7469 | >20%                    |                10 |              0.07469 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7514 | <5%                     |                10 |              0.07514 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7557 | 10-15%                  |                10 |              0.07557 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.76   | 10-15%                  |                10 |              0.076   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7911 | >20%                    |                10 |              0.07911 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7935 | <5%                     |                 5 |              0.1587  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7937 | >20%                    |                 5 |              0.15874 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8033 | 5-10%                   |                10 |              0.08033 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8168 | 10-15%                  |                 5 |              0.16336 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8196 | >20%                    |                10 |              0.08196 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8221 | >20%                    |                10 |              0.08221 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8235 | 15-20%                  |                10 |              0.08235 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8261 | 15-20%                  |                10 |              0.08261 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8308 | >20%                    |                10 |              0.08308 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8662 | <5%                     |                10 |              0.08662 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8687 | >20%                    |                10 |              0.08687 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8824 | 5-10%                   |                 2 |              0.4412  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8972 | >20%                    |                10 |              0.08972 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9022 | >20%                    |                10 |              0.09022 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9159 | 15-20%                  |                 5 |              0.18318 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9176 | >20%                    |                 2 |              0.4588  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9199 | >20%                    |                10 |              0.09199 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.921  | >20%                    |                10 |              0.0921  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9264 | >20%                    |                 2 |              0.4632  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9472 | >20%                    |                10 |              0.09472 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9501 | >20%                    |                10 |              0.09501 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9587 | >20%                    |                10 |              0.09587 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9684 | <5%                     |                10 |              0.09684 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0013 | 15-20%                  |                 5 |              0.20026 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0147 | 10-15%                  |                 5 |              0.20294 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0242 | >20%                    |                 2 |              0.5121  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0328 | 15-20%                  |                10 |              0.10328 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0451 | 15-20%                  |                10 |              0.10451 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0561 | >20%                    |                 5 |              0.21122 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0691 | >20%                    |                10 |              0.10691 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.089  | <5%                     |                10 |              0.1089  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1239 | 5-10%                   |                10 |              0.11239 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1317 | >20%                    |                 5 |              0.22634 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.136  | <5%                     |                 2 |              0.568   |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1431 | 5-10%                   |                10 |              0.11431 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2065 | 15-20%                  |                10 |              0.12065 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2141 | 15-20%                  |                10 |              0.12141 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2406 | 15-20%                  |                10 |              0.12406 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3041 | >20%                    |                10 |              0.13041 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.342  | >20%                    |                10 |              0.1342  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3593 | <5%                     |                 5 |              0.27186 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.378  | >20%                    |                 2 |              0.689   |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.382  | >20%                    |                 5 |              0.2764  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.423  | 10-15%                  |                10 |              0.1423  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4739 | >20%                    |                10 |              0.14739 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4916 | >20%                    |                10 |              0.14916 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9921 | <5%                     |                10 |              0.19921 |