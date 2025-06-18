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

Data correct as of 2025-06-18 01:56:17.837016, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1217 | >20%                    |                 2 |              0.06085 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1777 | >20%                    |                 5 |              0.03554 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1785 | >20%                    |                 5 |              0.0357  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 15-20%                  |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1865 | 15-20%                  |                 2 |              0.09325 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1965 | 5-10%                   |                 2 |              0.09825 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2154 | >20%                    |                 2 |              0.1077  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2201 | >20%                    |                 5 |              0.04402 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2204 | >20%                    |                 2 |              0.1102  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2225 | >20%                    |                 2 |              0.11125 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2299 | 15-20%                  |                 2 |              0.11495 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2431 | 15-20%                  |                 2 |              0.12155 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2505 | <5%                     |                 2 |              0.12525 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2595 | 15-20%                  |                 5 |              0.0519  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2614 | >20%                    |                10 |              0.02614 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2675 | >20%                    |                 2 |              0.13375 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2713 | >20%                    |                 2 |              0.13565 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2747 | 10-15%                  |                10 |              0.02747 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2822 | >20%                    |                 2 |              0.1411  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2841 | 5-10%                   |                10 |              0.02841 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2875 | 15-20%                  |                 2 |              0.14375 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2898 | <5%                     |                 2 |              0.1449  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.291  | >20%                    |                 2 |              0.1455  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2925 | >20%                    |                 5 |              0.0585  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2927 | >20%                    |                 2 |              0.14635 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3056 | >20%                    |                 2 |              0.1528  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3109 | >20%                    |                 2 |              0.15545 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3153 | >20%                    |                 2 |              0.15765 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3165 | 15-20%                  |                 5 |              0.0633  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3174 | >20%                    |                 5 |              0.06348 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3186 | >20%                    |                 2 |              0.1593  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3225 | >20%                    |                 2 |              0.16125 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.327  | >20%                    |                 5 |              0.0654  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3358 | <5%                     |                 2 |              0.1679  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3408 | 10-15%                  |                 2 |              0.1704  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.341  | 10-15%                  |                 2 |              0.1705  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3441 | 5-10%                   |                 2 |              0.17205 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3594 | >20%                    |                10 |              0.03594 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3621 | 10-15%                  |                 2 |              0.18105 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.369  | 15-20%                  |                10 |              0.0369  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3818 | >20%                    |                 5 |              0.07636 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.386  | >20%                    |                 2 |              0.193   |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3865 | <5%                     |                 5 |              0.0773  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3867 | >20%                    |                 2 |              0.19335 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3879 | 10-15%                  |                 2 |              0.19395 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3922 | 10-15%                  |                 5 |              0.07844 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3987 | >20%                    |                 2 |              0.19935 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4061 | >20%                    |                 2 |              0.20305 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4151 | >20%                    |                 5 |              0.08302 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4183 | >20%                    |                10 |              0.04183 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4198 | >20%                    |                 5 |              0.08396 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4215 | >20%                    |                 5 |              0.0843  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4222 | 10-15%                  |                 5 |              0.08444 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4224 | 5-10%                   |                 2 |              0.2112  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.427  | <5%                     |                 2 |              0.2135  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4296 | >20%                    |                 2 |              0.2148  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4348 | >20%                    |                 5 |              0.08696 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4365 | 15-20%                  |                 2 |              0.21825 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4425 | 15-20%                  |                 5 |              0.0885  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4478 | >20%                    |                10 |              0.04478 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4531 | >20%                    |                 5 |              0.09062 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4539 | >20%                    |                 2 |              0.22695 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4551 | >20%                    |                 2 |              0.22755 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4556 | <5%                     |                 5 |              0.09112 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4601 | >20%                    |                 5 |              0.09202 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4641 | >20%                    |                10 |              0.04641 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4648 | >20%                    |                 5 |              0.09296 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4657 | <5%                     |                 5 |              0.09314 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4689 | >20%                    |                 2 |              0.23445 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4693 | >20%                    |                 2 |              0.23465 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4796 | >20%                    |                 5 |              0.09592 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4811 | >20%                    |                 5 |              0.09622 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4823 | <5%                     |                 5 |              0.09646 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4869 | 15-20%                  |                 2 |              0.24345 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4877 | >20%                    |                 2 |              0.24385 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4928 | >20%                    |                 5 |              0.09856 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4949 | >20%                    |                 2 |              0.24745 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4975 | 10-15%                  |                 2 |              0.24875 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4992 | 10-15%                  |                 5 |              0.09984 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5014 | >20%                    |                 2 |              0.2507  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5021 | 5-10%                   |                 2 |              0.25105 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5107 | 10-15%                  |                 5 |              0.10214 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5113 | 15-20%                  |                 5 |              0.10226 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5164 | 5-10%                   |                 5 |              0.10328 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5324 | <5%                     |                 5 |              0.10648 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5375 | >20%                    |                 2 |              0.26875 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5419 | >20%                    |                 2 |              0.27095 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5425 | >20%                    |                10 |              0.05425 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5467 | <5%                     |                 5 |              0.10934 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5517 | 15-20%                  |                 2 |              0.27585 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5539 | >20%                    |                 5 |              0.11078 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5579 | >20%                    |                 5 |              0.11158 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.562  | 10-15%                  |                10 |              0.0562  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5658 | 10-15%                  |                 5 |              0.11316 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5706 | <5%                     |                 5 |              0.11412 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5804 | >20%                    |                 5 |              0.11608 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5907 | >20%                    |                 5 |              0.11814 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5934 | 5-10%                   |                 2 |              0.2967  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6029 | >20%                    |                 2 |              0.30145 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.604  | >20%                    |                10 |              0.0604  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6045 | >20%                    |                 2 |              0.30225 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6097 | <5%                     |                 2 |              0.30485 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6107 | >20%                    |                 5 |              0.12214 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6164 | >20%                    |                 5 |              0.12328 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6173 | >20%                    |                 2 |              0.30865 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6362 | >20%                    |                10 |              0.06362 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6387 | >20%                    |                 5 |              0.12774 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6388 | >20%                    |                 5 |              0.12776 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.642  | >20%                    |                 5 |              0.1284  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6463 | >20%                    |                 5 |              0.12926 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6467 | >20%                    |                 5 |              0.12934 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6477 | <5%                     |                 5 |              0.12954 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6614 | >20%                    |                 5 |              0.13228 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6616 | 15-20%                  |                10 |              0.06616 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6734 | >20%                    |                 2 |              0.3367  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6809 | 10-15%                  |                 5 |              0.13618 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6848 | 10-15%                  |                 5 |              0.13696 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6877 | <5%                     |                10 |              0.06877 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6921 | <5%                     |                10 |              0.06921 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7054 | 10-15%                  |                 2 |              0.3527  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7057 | >20%                    |                10 |              0.07057 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7118 | 15-20%                  |                10 |              0.07118 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7149 | 15-20%                  |                10 |              0.07149 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7151 | >20%                    |                10 |              0.07151 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7175 | <5%                     |                 5 |              0.1435  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7255 | >20%                    |                10 |              0.07255 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7315 | >20%                    |                10 |              0.07315 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7351 | >20%                    |                 5 |              0.14702 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7422 | >20%                    |                10 |              0.07422 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7449 | 15-20%                  |                10 |              0.07449 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7566 | >20%                    |                10 |              0.07566 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7606 | <5%                     |                10 |              0.07606 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7642 | >20%                    |                10 |              0.07642 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7768 | 10-15%                  |                10 |              0.07768 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7781 | >20%                    |                 5 |              0.15562 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7882 | 5-10%                   |                 5 |              0.15764 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7906 | >20%                    |                10 |              0.07906 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7922 | >20%                    |                10 |              0.07922 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7997 | 15-20%                  |                10 |              0.07997 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8018 | <5%                     |                10 |              0.08018 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8052 | >20%                    |                10 |              0.08052 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8178 | >20%                    |                 5 |              0.16356 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8389 | >20%                    |                10 |              0.08389 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8634 | >20%                    |                10 |              0.08634 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8678 | 15-20%                  |                10 |              0.08678 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8965 | >20%                    |                10 |              0.08965 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.901  | <5%                     |                10 |              0.0901  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.909  | >20%                    |                 2 |              0.4545  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9273 | >20%                    |                10 |              0.09273 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9495 | >20%                    |                10 |              0.09495 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9522 | >20%                    |                10 |              0.09522 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9561 | >20%                    |                10 |              0.09561 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9612 | >20%                    |                10 |              0.09612 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9686 | >20%                    |                 5 |              0.19372 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9689 | >20%                    |                 2 |              0.48445 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9729 | >20%                    |                10 |              0.09729 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0017 | >20%                    |                10 |              0.10017 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0194 | >20%                    |                10 |              0.10194 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0318 | 10-15%                  |                10 |              0.10318 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0419 | >20%                    |                10 |              0.10419 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0493 | <5%                     |                10 |              0.10493 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0642 | <5%                     |                 2 |              0.5321  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0658 | 15-20%                  |                10 |              0.10658 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.078  | >20%                    |                10 |              0.1078  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0866 | 15-20%                  |                10 |              0.10866 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1043 | 15-20%                  |                10 |              0.11043 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1114 | >20%                    |                 2 |              0.5557  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1667 | >20%                    |                 5 |              0.23334 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1741 | <5%                     |                 5 |              0.23482 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2129 | 10-15%                  |                10 |              0.12129 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2828 | >20%                    |                 5 |              0.25656 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2846 | >20%                    |                10 |              0.12846 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.2972 | <5%                     |                 2 |              0.6486  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3163 | >20%                    |                10 |              0.13163 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3252 | >20%                    |                10 |              0.13252 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4081 | <5%                     |                 5 |              0.28162 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5462 | >20%                    |                 5 |              0.30924 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6348 | 10-15%                  |                10 |              0.16348 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.705  | >20%                    |                 2 |              0.8525  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.7362 | <5%                     |                10 |              0.17362 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0621 | <5%                     |                10 |              0.20621 |