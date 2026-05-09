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

Data correct as of 2026-05-09 03:30:42.082259, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1414 | 15-20%                  |                 2 |              0.0707  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1584 | >20%                    |                 2 |              0.0792  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1859 | >20%                    |                 2 |              0.09295 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2121 | 15-20%                  |                 5 |              0.04242 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2134 | >20%                    |                 2 |              0.1067  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2338 | >20%                    |                 2 |              0.1169  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2361 | 15-20%                  |                 2 |              0.11805 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2374 | >20%                    |                 2 |              0.1187  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2487 | 15-20%                  |                 5 |              0.04974 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2538 | >20%                    |                 5 |              0.05076 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.255  | >20%                    |                 2 |              0.1275  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2702 | >20%                    |                 5 |              0.05404 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2833 | >20%                    |                 2 |              0.14165 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2862 | >20%                    |                 5 |              0.05724 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2879 | 15-20%                  |                 5 |              0.05758 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2883 | >20%                    |                 2 |              0.14415 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.2904 | 10-15%                  |                 2 |              0.1452  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2968 | 15-20%                  |                 2 |              0.1484  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3052 | >20%                    |                 2 |              0.1526  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3077 | 5-10%                   |                10 |              0.03077 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.314  | 10-15%                  |                 2 |              0.157   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.316  | >20%                    |                 2 |              0.158   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3162 | 5-10%                   |                10 |              0.03162 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3251 | 10-15%                  |                 2 |              0.16255 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3304 | >20%                    |                 5 |              0.06608 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3321 | 10-15%                  |                 2 |              0.16605 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3371 | >20%                    |                10 |              0.03371 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3374 | >20%                    |                 2 |              0.1687  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3384 | <5%                     |                 2 |              0.1692  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3401 | >20%                    |                 5 |              0.06802 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3523 | >20%                    |                 2 |              0.17615 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3612 | >20%                    |                 5 |              0.07224 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3613 | >20%                    |                 5 |              0.07226 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.366  | >20%                    |                 5 |              0.0732  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3758 | >20%                    |                 5 |              0.07516 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3775 | >20%                    |                 5 |              0.0755  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3903 | >20%                    |                 2 |              0.19515 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3973 | >20%                    |                 5 |              0.07946 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3981 | >20%                    |                 2 |              0.19905 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4104 | >20%                    |                 2 |              0.2052  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4139 | >20%                    |                 5 |              0.08278 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.424  | 5-10%                   |                 2 |              0.212   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4279 | >20%                    |                 5 |              0.08558 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4329 | <5%                     |                 2 |              0.21645 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4406 | >20%                    |                 5 |              0.08812 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4413 | >20%                    |                10 |              0.04413 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4434 | >20%                    |                 5 |              0.08868 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4453 | >20%                    |                 2 |              0.22265 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4572 | 15-20%                  |                 2 |              0.2286  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4596 | <5%                     |                 2 |              0.2298  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4598 | >20%                    |                 5 |              0.09196 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4602 | >20%                    |                 2 |              0.2301  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4675 | 15-20%                  |                 2 |              0.23375 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4726 | >20%                    |                 2 |              0.2363  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4752 | >20%                    |                10 |              0.04752 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4782 | >20%                    |                 5 |              0.09564 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4788 | >20%                    |                 5 |              0.09576 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4865 | >20%                    |                 5 |              0.0973  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4882 | >20%                    |                10 |              0.04882 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4888 | >20%                    |                 5 |              0.09776 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4919 | 10-15%                  |                 2 |              0.24595 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4935 | >20%                    |                 2 |              0.24675 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4948 | >20%                    |                 5 |              0.09896 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5031 | >20%                    |                 2 |              0.25155 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5101 | >20%                    |                10 |              0.05101 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5125 | 15-20%                  |                 5 |              0.1025  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5194 | >20%                    |                 2 |              0.2597  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5231 | 5-10%                   |                 5 |              0.10462 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5467 | 10-15%                  |                 5 |              0.10934 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5517 | <5%                     |                 5 |              0.11034 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5804 | >20%                    |                 5 |              0.11608 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5865 | >20%                    |                10 |              0.05865 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5884 | 15-20%                  |                 2 |              0.2942  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6097 | >20%                    |                 2 |              0.30485 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6177 | >20%                    |                 5 |              0.12354 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6196 | 5-10%                   |                 2 |              0.3098  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.621  | >20%                    |                10 |              0.0621  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6258 | >20%                    |                10 |              0.06258 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6269 | >20%                    |                 2 |              0.31345 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6511 | >20%                    |                 2 |              0.32555 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6526 | >20%                    |                 5 |              0.13052 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6526 | >20%                    |                 5 |              0.13052 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6608 | 5-10%                   |                10 |              0.06608 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.666  | 5-10%                   |                 5 |              0.1332  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6701 | >20%                    |                10 |              0.06701 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6747 | >20%                    |                 5 |              0.13494 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6824 | >20%                    |                 5 |              0.13648 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6836 | >20%                    |                10 |              0.06836 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6861 | 5-10%                   |                10 |              0.06861 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6924 | 15-20%                  |                10 |              0.06924 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6932 | 10-15%                  |                 2 |              0.3466  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7084 | >20%                    |                 5 |              0.14168 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.711  | >20%                    |                10 |              0.0711  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7265 | >20%                    |                 5 |              0.1453  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7329 | >20%                    |                 2 |              0.36645 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7339 | >20%                    |                 5 |              0.14678 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.746  | >20%                    |                 2 |              0.373   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7464 | >20%                    |                 2 |              0.3732  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7484 | >20%                    |                10 |              0.07484 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7737 | >20%                    |                 5 |              0.15474 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7744 | >20%                    |                 5 |              0.15488 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7857 | >20%                    |                10 |              0.07857 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8136 | >20%                    |                10 |              0.08136 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8184 | 15-20%                  |                10 |              0.08184 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8198 | >20%                    |                10 |              0.08198 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8305 | >20%                    |                 2 |              0.41525 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8459 |                         |                 2 |              0.42295 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8473 | >20%                    |                10 |              0.08473 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8475 | >20%                    |                 5 |              0.1695  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8585 |                         |                 2 |              0.42925 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.866  | >20%                    |                10 |              0.0866  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8745 | 5-10%                   |                10 |              0.08745 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8822 | 15-20%                  |                10 |              0.08822 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9017 | >20%                    |                10 |              0.09017 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9194 | >20%                    |                10 |              0.09194 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9268 | >20%                    |                10 |              0.09268 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9331 | 15-20%                  |                10 |              0.09331 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9404 | >20%                    |                 5 |              0.18808 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9407 | 10-15%                  |                10 |              0.09407 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9434 | >20%                    |                10 |              0.09434 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9462 | >20%                    |                 5 |              0.18924 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9482 | >20%                    |                 5 |              0.18964 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9648 | 15-20%                  |                10 |              0.09648 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9888 | >20%                    |                 5 |              0.19776 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0011 | >20%                    |                10 |              0.10011 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0071 | >20%                    |                10 |              0.10071 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0375 | >20%                    |                10 |              0.10375 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0432 | >20%                    |                10 |              0.10432 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0439 | >20%                    |                 2 |              0.52195 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0678 | 15-20%                  |                10 |              0.10678 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1047 | >20%                    |                10 |              0.11047 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1193 | >20%                    |                10 |              0.11193 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1322 |                         |                 5 |              0.22644 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1486 | >20%                    |                 5 |              0.22972 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1687 |                         |                 5 |              0.23374 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1865 | >20%                    |                 5 |              0.2373  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1909 | 10-15%                  |                10 |              0.11909 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1977 | 5-10%                   |                 2 |              0.59885 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2193 | 5-10%                   |                 2 |              0.60965 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2936 | >20%                    |                 5 |              0.25872 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3153 | >20%                    |                 5 |              0.26306 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4427 | 15-20%                  |                 5 |              0.28854 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4642 | >20%                    |                10 |              0.14642 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.5466 | >20%                    |                10 |              0.15466 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5549 | 15-20%                  |                10 |              0.15549 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5638 | 10-15%                  |                 2 |              0.7819  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5996 | >20%                    |                10 |              0.15996 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6007 |                         |                10 |              0.16007 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6712 | 15-20%                  |                10 |              0.16712 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.716  | >20%                    |                10 |              0.1716  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.8443 |                         |                10 |              0.18443 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1319 | >20%                    |                10 |              0.21319 |