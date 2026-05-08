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

Data correct as of 2026-05-08 03:30:57.763182, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1392 | 15-20%                  |                 2 |              0.0696  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1504 | >20%                    |                 2 |              0.0752  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1781 | >20%                    |                 2 |              0.08905 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2127 | 15-20%                  |                 5 |              0.04254 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2198 | >20%                    |                 2 |              0.1099  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2358 | >20%                    |                 2 |              0.1179  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2361 | 15-20%                  |                 2 |              0.11805 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2381 | >20%                    |                 2 |              0.11905 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2507 | 15-20%                  |                 5 |              0.05014 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2563 | >20%                    |                 2 |              0.12815 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2729 | >20%                    |                 5 |              0.05458 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2756 | >20%                    |                 5 |              0.05512 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2836 | >20%                    |                 2 |              0.1418  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2882 | >20%                    |                 5 |              0.05764 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2892 | >20%                    |                 2 |              0.1446  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.2904 | 10-15%                  |                 2 |              0.1452  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2918 | 15-20%                  |                 5 |              0.05836 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | 15-20%                  |                 2 |              0.1477  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3052 | >20%                    |                 2 |              0.1526  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3077 | 5-10%                   |                10 |              0.03077 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.314  | 10-15%                  |                 2 |              0.157   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3162 | 10-15%                  |                 2 |              0.1581  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3176 | 5-10%                   |                10 |              0.03176 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.331  | >20%                    |                 2 |              0.1655  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3332 | 10-15%                  |                 2 |              0.1666  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3355 | >20%                    |                 5 |              0.0671  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3396 | <5%                     |                 2 |              0.1698  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3414 | >20%                    |                 2 |              0.1707  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3433 | >20%                    |                10 |              0.03433 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3455 | >20%                    |                 5 |              0.0691  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3525 | >20%                    |                 5 |              0.0705  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3548 | >20%                    |                 2 |              0.1774  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3635 | >20%                    |                 5 |              0.0727  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3645 | >20%                    |                 5 |              0.0729  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3646 | >20%                    |                 5 |              0.07292 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3885 | >20%                    |                 5 |              0.0777  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3903 | >20%                    |                 2 |              0.19515 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3982 | >20%                    |                 5 |              0.07964 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4013 | >20%                    |                 5 |              0.08026 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4042 | >20%                    |                 2 |              0.2021  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4097 | >20%                    |                 2 |              0.20485 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4261 | >20%                    |                 5 |              0.08522 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4274 | 5-10%                   |                 2 |              0.2137  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4336 | <5%                     |                 2 |              0.2168  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4389 | >20%                    |                 5 |              0.08778 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4413 | >20%                    |                10 |              0.04413 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4416 | >20%                    |                 5 |              0.08832 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4461 | >20%                    |                 2 |              0.22305 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4512 | >20%                    |                 5 |              0.09024 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4597 | >20%                    |                 2 |              0.22985 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4603 | 15-20%                  |                 2 |              0.23015 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.461  | <5%                     |                 2 |              0.2305  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4675 | 15-20%                  |                 2 |              0.23375 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4722 | >20%                    |                 2 |              0.2361  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4752 | >20%                    |                10 |              0.04752 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4782 | >20%                    |                 5 |              0.09564 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4847 | >20%                    |                 5 |              0.09694 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4849 | >20%                    |                 5 |              0.09698 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4882 | >20%                    |                10 |              0.04882 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4894 | >20%                    |                 5 |              0.09788 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4912 | 10-15%                  |                 2 |              0.2456  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4935 | >20%                    |                 2 |              0.24675 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4956 | >20%                    |                 5 |              0.09912 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4998 | >20%                    |                 2 |              0.2499  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5131 | 15-20%                  |                 5 |              0.10262 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.526  | 5-10%                   |                 5 |              0.1052  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5295 | <5%                     |                 5 |              0.1059  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5321 | >20%                    |                10 |              0.05321 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5398 | >20%                    |                 2 |              0.2699  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5467 | 10-15%                  |                 5 |              0.10934 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5646 | >20%                    |                10 |              0.05646 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5707 | 15-20%                  |                 2 |              0.28535 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5807 | >20%                    |                 5 |              0.11614 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6145 | >20%                    |                 2 |              0.30725 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6196 | 5-10%                   |                 2 |              0.3098  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6248 | >20%                    |                10 |              0.06248 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6267 | >20%                    |                 5 |              0.12534 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6271 | >20%                    |                 2 |              0.31355 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6317 | >20%                    |                 2 |              0.31585 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6383 | >20%                    |                10 |              0.06383 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6429 | 5-10%                   |                 5 |              0.12858 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6526 | >20%                    |                 5 |              0.13052 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6652 | >20%                    |                 5 |              0.13304 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6701 | >20%                    |                10 |              0.06701 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.677  | 5-10%                   |                10 |              0.0677  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6773 | 5-10%                   |                10 |              0.06773 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6775 | >20%                    |                 5 |              0.1355  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6825 | >20%                    |                 5 |              0.1365  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.683  | >20%                    |                10 |              0.0683  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6908 | 15-20%                  |                10 |              0.06908 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6957 | 10-15%                  |                 2 |              0.34785 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7072 | >20%                    |                10 |              0.07072 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7093 | >20%                    |                 5 |              0.14186 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7339 | >20%                    |                 5 |              0.14678 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7355 | >20%                    |                 2 |              0.36775 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7401 | >20%                    |                 5 |              0.14802 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7454 | >20%                    |                 2 |              0.3727  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7536 | >20%                    |                 2 |              0.3768  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7562 | >20%                    |                10 |              0.07562 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7728 | >20%                    |                 5 |              0.15456 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7762 | 15-20%                  |                10 |              0.07762 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7841 | >20%                    |                10 |              0.07841 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7895 | >20%                    |                 5 |              0.1579  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8274 | >20%                    |                10 |              0.08274 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8373 | >20%                    |                 5 |              0.16746 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8464 | >20%                    |                10 |              0.08464 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8505 | >20%                    |                 2 |              0.42525 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8535 |                         |                 2 |              0.42675 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8556 | >20%                    |                10 |              0.08556 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8698 | >20%                    |                10 |              0.08698 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8718 | 15-20%                  |                10 |              0.08718 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8745 | 5-10%                   |                10 |              0.08745 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8892 |                         |                 2 |              0.4446  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.892  | >20%                    |                10 |              0.0892  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8985 | >20%                    |                10 |              0.08985 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9278 | >20%                    |                10 |              0.09278 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9331 | 15-20%                  |                10 |              0.09331 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9364 | >20%                    |                 5 |              0.18728 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9404 | >20%                    |                 5 |              0.18808 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9407 | 10-15%                  |                10 |              0.09407 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9455 | >20%                    |                 5 |              0.1891  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9461 | 15-20%                  |                10 |              0.09461 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9492 | >20%                    |                10 |              0.09492 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9514 | >20%                    |                10 |              0.09514 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.981  | >20%                    |                 5 |              0.1962  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0122 | >20%                    |                10 |              0.10122 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0479 | >20%                    |                10 |              0.10479 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.049  | >20%                    |                10 |              0.1049  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0678 | 15-20%                  |                10 |              0.10678 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0785 | >20%                    |                 2 |              0.53925 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1193 | >20%                    |                10 |              0.11193 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1573 |                         |                 5 |              0.23146 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1685 | >20%                    |                10 |              0.11685 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1911 | >20%                    |                 5 |              0.23822 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1945 | >20%                    |                 5 |              0.2389  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1978 | 5-10%                   |                 2 |              0.5989  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2006 | 10-15%                  |                10 |              0.12006 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2214 |                         |                 5 |              0.24428 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2359 | 5-10%                   |                 2 |              0.61795 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2944 | >20%                    |                 5 |              0.25888 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3045 | >20%                    |                 5 |              0.2609  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4352 | 15-20%                  |                 5 |              0.28704 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4642 | >20%                    |                10 |              0.14642 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5546 | 10-15%                  |                 2 |              0.7773  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.5561 | >20%                    |                10 |              0.15561 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5598 | 15-20%                  |                10 |              0.15598 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5774 | >20%                    |                10 |              0.15774 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6177 |                         |                10 |              0.16177 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6514 | 15-20%                  |                10 |              0.16514 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.724  | >20%                    |                10 |              0.1724  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.8487 |                         |                10 |              0.18487 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1385 | >20%                    |                10 |              0.21385 |