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

Data correct as of 2024-12-07 01:44:21.879133, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1416 | 10-15%                  |                 2 |              0.0708  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1895 | <5%                     |                 2 |              0.09475 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1901 | >20%                    |                 5 |              0.03802 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2062 | 10-15%                  |                 2 |              0.1031  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2117 | 5-10%                   |                 2 |              0.10585 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2292 | 5-10%                   |                 2 |              0.1146  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2302 | >20%                    |                 5 |              0.04604 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2306 | >20%                    |                 5 |              0.04612 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2316 | 15-20%                  |                 2 |              0.1158  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2336 | 15-20%                  |                 5 |              0.04672 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2365 | <5%                     |                 2 |              0.11825 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2439 | <5%                     |                 2 |              0.12195 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2586 | 10-15%                  |                 2 |              0.1293  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2596 | <5%                     |                10 |              0.02596 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2632 | <5%                     |                 5 |              0.05264 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2747 | >20%                    |                 5 |              0.05494 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2778 | <5%                     |                 2 |              0.1389  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2816 | 5-10%                   |                 2 |              0.1408  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2938 | 10-15%                  |                 2 |              0.1469  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3086 | <5%                     |                 2 |              0.1543  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3179 | 5-10%                   |                 2 |              0.15895 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3191 | >20%                    |                 5 |              0.06382 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.3216 | 5-10%                   |                 2 |              0.1608  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3399 | >20%                    |                10 |              0.03399 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3444 | 5-10%                   |                 2 |              0.1722  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3454 | >20%                    |                 5 |              0.06908 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.346  | >20%                    |                 2 |              0.173   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3464 | <5%                     |                 2 |              0.1732  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3474 | <5%                     |                 5 |              0.06948 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3474 | >20%                    |                 2 |              0.1737  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3485 | <5%                     |                10 |              0.03485 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3496 | <5%                     |                 5 |              0.06992 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.351  | <5%                     |                 2 |              0.1755  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3536 | 15-20%                  |                 2 |              0.1768  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.359  | >20%                    |                 2 |              0.1795  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.375  | <5%                     |                 2 |              0.1875  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3762 | 10-15%                  |                10 |              0.03762 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3765 | >20%                    |                 2 |              0.18825 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3811 | 15-20%                  |                 2 |              0.19055 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3941 | >20%                    |                 2 |              0.19705 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3992 | <5%                     |                 5 |              0.07984 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4061 | 5-10%                   |                 2 |              0.20305 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4094 | <5%                     |                 2 |              0.2047  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4119 | 15-20%                  |                 5 |              0.08238 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4146 | 5-10%                   |                 5 |              0.08292 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4174 | 5-10%                   |                 2 |              0.2087  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4219 | 5-10%                   |                 2 |              0.21095 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.425  | 10-15%                  |                10 |              0.0425  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4331 | 15-20%                  |                 5 |              0.08662 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.436  | >20%                    |                 2 |              0.218   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4433 | <5%                     |                 2 |              0.22165 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4484 | 10-15%                  |                 2 |              0.2242  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4583 | >20%                    |                 2 |              0.22915 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4691 | 15-20%                  |                 5 |              0.09382 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4704 | <5%                     |                 2 |              0.2352  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4707 | 10-15%                  |                 5 |              0.09414 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4762 | <5%                     |                 5 |              0.09524 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4835 | 5-10%                   |                 5 |              0.0967  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4886 | 5-10%                   |                 2 |              0.2443  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.4962 | >20%                    |                 5 |              0.09924 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5006 | 5-10%                   |                 2 |              0.2503  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5007 | 10-15%                  |                 2 |              0.25035 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5035 | <5%                     |                 5 |              0.1007  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5095 | 10-15%                  |                10 |              0.05095 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5105 | <5%                     |                 5 |              0.1021  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5133 | 10-15%                  |                 2 |              0.25665 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5146 | >20%                    |                 5 |              0.10292 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5169 | 5-10%                   |                 5 |              0.10338 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5242 | <5%                     |                 5 |              0.10484 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5252 | 15-20%                  |                 5 |              0.10504 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5267 | <5%                     |                 5 |              0.10534 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.537  | >20%                    |                 5 |              0.1074  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5403 | >20%                    |                 2 |              0.27015 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5461 | 10-15%                  |                 5 |              0.10922 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5472 | >20%                    |                 5 |              0.10944 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5534 | <5%                     |                 5 |              0.11068 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5543 | 10-15%                  |                 5 |              0.11086 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5585 | 15-20%                  |                 2 |              0.27925 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5596 | 5-10%                   |                 5 |              0.11192 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.5688 |                         |                 2 |              0.2844  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5756 | 10-15%                  |                 5 |              0.11512 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5824 | >20%                    |                10 |              0.05824 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5849 | >20%                    |                 5 |              0.11698 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6156 | 10-15%                  |                10 |              0.06156 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6278 | 15-20%                  |                10 |              0.06278 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6384 | 5-10%                   |                10 |              0.06384 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6461 | 5-10%                   |                10 |              0.06461 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6469 | >20%                    |                10 |              0.06469 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6495 | >20%                    |                10 |              0.06495 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6567 | >20%                    |                 2 |              0.32835 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6571 | >20%                    |                10 |              0.06571 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.66   | <5%                     |                 5 |              0.132   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.6739 | 5-10%                   |                10 |              0.06739 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6749 | 5-10%                   |                 5 |              0.13498 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6803 | >20%                    |                10 |              0.06803 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6856 | 5-10%                   |                 5 |              0.13712 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6977 | 10-15%                  |                10 |              0.06977 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6978 | <5%                     |                 5 |              0.13956 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7274 | 15-20%                  |                 5 |              0.14548 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7317 | 15-20%                  |                 5 |              0.14634 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7398 | 5-10%                   |                 2 |              0.3699  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.761  | <5%                     |                 2 |              0.3805  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7615 | 5-10%                   |                10 |              0.07615 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7692 | >20%                    |                10 |              0.07692 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7876 | <5%                     |                 5 |              0.15752 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7928 | <5%                     |                10 |              0.07928 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.7961 |                         |                 5 |              0.15922 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7974 | >20%                    |                 5 |              0.15948 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8042 | 5-10%                   |                10 |              0.08042 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.807  | 5-10%                   |                 5 |              0.1614  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8319 | 10-15%                  |                10 |              0.08319 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8381 | 5-10%                   |                10 |              0.08381 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8487 | 5-10%                   |                10 |              0.08487 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8492 | 10-15%                  |                10 |              0.08492 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9013 | >20%                    |                10 |              0.09013 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9327 | 15-20%                  |                10 |              0.09327 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9411 | 5-10%                   |                10 |              0.09411 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9424 | <5%                     |                10 |              0.09424 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.946  | 5-10%                   |                10 |              0.0946  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9488 | <5%                     |                 5 |              0.18976 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9547 | 5-10%                   |                10 |              0.09547 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.971  | <5%                     |                10 |              0.0971  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9886 | 5-10%                   |                10 |              0.09886 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0005 | >20%                    |                10 |              0.10005 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0124 | 15-20%                  |                10 |              0.10124 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0158 | >20%                    |                10 |              0.10158 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0603 | 5-10%                   |                10 |              0.10603 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0992 | <5%                     |                10 |              0.10992 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1461 | 10-15%                  |                10 |              0.11461 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.166  | 15-20%                  |                10 |              0.1166  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1759 | <5%                     |                10 |              0.11759 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.2394 |                         |                10 |              0.12394 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3235 | >20%                    |                10 |              0.13235 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4597 | >20%                    |                10 |              0.14597 |