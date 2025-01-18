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

Data correct as of 2025-01-18 01:25:19.363898, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.1956 | 10-15%                  |                 2 |              0.0978  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2235 | 5-10%                   |                 2 |              0.11175 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2335 | 15-20%                  |                 2 |              0.11675 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | <5%                     |                 2 |              0.11935 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | 5-10%                   |                 2 |              0.11935 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2439 | >20%                    |                 5 |              0.04878 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2475 | 5-10%                   |                 2 |              0.12375 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2604 | 5-10%                   |                 2 |              0.1302  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2789 | 10-15%                  |                 2 |              0.13945 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2822 | <5%                     |                 2 |              0.1411  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2957 | <5%                     |                 2 |              0.14785 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3011 | <5%                     |                 5 |              0.06022 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3035 | >20%                    |                 2 |              0.15175 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3189 | 5-10%                   |                 2 |              0.15945 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3234 | 10-15%                  |                 2 |              0.1617  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3284 | >20%                    |                 2 |              0.1642  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3391 | 5-10%                   |                 2 |              0.16955 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3431 | <5%                     |                 2 |              0.17155 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3441 | 5-10%                   |                 5 |              0.06882 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.363  | >20%                    |                 2 |              0.1815  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3682 | <5%                     |                 2 |              0.1841  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3699 | <5%                     |                 2 |              0.18495 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3748 | <5%                     |                 5 |              0.07496 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.376  | 5-10%                   |                 5 |              0.0752  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3768 | <5%                     |                 2 |              0.1884  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.379  | 10-15%                  |                 5 |              0.0758  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3923 | 10-15%                  |                10 |              0.03923 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3934 | >20%                    |                 2 |              0.1967  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3944 | <5%                     |                 2 |              0.1972  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3948 | 5-10%                   |                 2 |              0.1974  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4015 | <5%                     |                 2 |              0.20075 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4019 | >20%                    |                 2 |              0.20095 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4047 | 5-10%                   |                 2 |              0.20235 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4097 | >20%                    |                 5 |              0.08194 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4227 | >20%                    |                 2 |              0.21135 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4264 | 5-10%                   |                 5 |              0.08528 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4277 | 5-10%                   |                 2 |              0.21385 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4294 | <5%                     |                 2 |              0.2147  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4485 | 10-15%                  |                 5 |              0.0897  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4507 | <5%                     |                 5 |              0.09014 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.455  | >20%                    |                 5 |              0.091   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4563 | <5%                     |                 5 |              0.09126 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.457  | <5%                     |                 5 |              0.0914  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4584 | 10-15%                  |                 5 |              0.09168 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4587 | 15-20%                  |                 5 |              0.09174 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4591 | <5%                     |                 5 |              0.09182 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4638 | 10-15%                  |                 2 |              0.2319  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4661 | <5%                     |                 2 |              0.23305 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4736 | 5-10%                   |                 5 |              0.09472 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4736 | 10-15%                  |                 5 |              0.09472 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.486  | 15-20%                  |                 2 |              0.243   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.488  | <5%                     |                 5 |              0.0976  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4901 | <5%                     |                 2 |              0.24505 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4935 | <5%                     |                 2 |              0.24675 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4942 | >20%                    |                 5 |              0.09884 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4954 | >20%                    |                10 |              0.04954 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5091 | <5%                     |                 2 |              0.25455 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5115 | <5%                     |                 5 |              0.1023  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5164 | <5%                     |                 5 |              0.10328 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.518  | 15-20%                  |                10 |              0.0518  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5198 | 5-10%                   |                 2 |              0.2599  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5211 | <5%                     |                 5 |              0.10422 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5244 | >20%                    |                 2 |              0.2622  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5268 | 10-15%                  |                10 |              0.05268 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5291 | >20%                    |                 5 |              0.10582 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5303 | 5-10%                   |                 5 |              0.10606 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5384 | 5-10%                   |                 5 |              0.10768 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5425 | >20%                    |                 5 |              0.1085  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5436 | >20%                    |                 5 |              0.10872 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5533 | <5%                     |                 5 |              0.11066 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5691 | 5-10%                   |                 5 |              0.11382 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5705 | <5%                     |                 5 |              0.1141  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5752 | 5-10%                   |                 5 |              0.11504 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5776 | 15-20%                  |                 2 |              0.2888  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5785 | 15-20%                  |                 2 |              0.28925 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5797 | 5-10%                   |                 5 |              0.11594 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5986 | <5%                     |                 5 |              0.11972 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6294 | >20%                    |                 2 |              0.3147  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6312 | 5-10%                   |                10 |              0.06312 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6402 | 5-10%                   |                10 |              0.06402 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.656  | <5%                     |                 5 |              0.1312  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6804 | >20%                    |                10 |              0.06804 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6829 | >20%                    |                10 |              0.06829 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6848 | >20%                    |                 5 |              0.13696 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6914 | >20%                    |                10 |              0.06914 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6984 | >20%                    |                10 |              0.06984 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6986 | <5%                     |                10 |              0.06986 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6994 | 10-15%                  |                 5 |              0.13988 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6997 | >20%                    |                 5 |              0.13994 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7214 | 15-20%                  |                10 |              0.07214 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7279 | 5-10%                   |                 5 |              0.14558 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7288 | <5%                     |                 2 |              0.3644  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7364 | 5-10%                   |                 2 |              0.3682  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7371 | 15-20%                  |                 2 |              0.36855 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7394 | 10-15%                  |                10 |              0.07394 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7444 | <5%                     |                10 |              0.07444 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7528 | 5-10%                   |                 5 |              0.15056 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7573 | >20%                    |                 5 |              0.15146 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7621 | 10-15%                  |                10 |              0.07621 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7644 | 10-15%                  |                10 |              0.07644 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7893 | >20%                    |                10 |              0.07893 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7936 | 5-10%                   |                10 |              0.07936 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7948 | >20%                    |                 5 |              0.15896 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7987 | >20%                    |                 5 |              0.15974 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8025 | 5-10%                   |                10 |              0.08025 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8072 | 5-10%                   |                10 |              0.08072 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8131 | 15-20%                  |                10 |              0.08131 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8147 | 15-20%                  |                10 |              0.08147 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8386 | 10-15%                  |                10 |              0.08386 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8666 | <5%                     |                10 |              0.08666 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8781 | 5-10%                   |                10 |              0.08781 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8881 | >20%                    |                10 |              0.08881 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8891 | <5%                     |                10 |              0.08891 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8902 | 5-10%                   |                10 |              0.08902 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9077 | <5%                     |                10 |              0.09077 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9163 | <5%                     |                10 |              0.09163 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9447 | <5%                     |                10 |              0.09447 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.954  | 5-10%                   |                 5 |              0.1908  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9597 | <5%                     |                10 |              0.09597 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9608 | 10-15%                  |                10 |              0.09608 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9884 | 5-10%                   |                 2 |              0.4942  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0144 | >20%                    |                10 |              0.10144 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0171 | <5%                     |                10 |              0.10171 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0275 | 10-15%                  |                 5 |              0.2055  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0283 | 5-10%                   |                10 |              0.10283 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0424 | <5%                     |                10 |              0.10424 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0926 | 15-20%                  |                10 |              0.10926 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.102  | 5-10%                   |                 5 |              0.2204  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1262 | 15-20%                  |                 2 |              0.5631  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1618 | 10-15%                  |                10 |              0.11618 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.231  | 10-15%                  |                10 |              0.1231  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2573 | >20%                    |                10 |              0.12573 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4235 | 5-10%                   |                10 |              0.14235 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4652 | 10-15%                  |                10 |              0.14652 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5008 | 5-10%                   |                10 |              0.15008 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5267 | 15-20%                  |                 5 |              0.30534 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0464 | 10-15%                  |                10 |              0.20464 |