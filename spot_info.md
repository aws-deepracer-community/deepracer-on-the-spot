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

Data correct as of 2026-06-07 04:20:15.639263, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1244 | >20%                    |                 2 |              0.0622  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1689 | 15-20%                  |                 2 |              0.08445 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1792 | >20%                    |                 2 |              0.0896  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1833 | >20%                    |                 2 |              0.09165 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2104 | 10-15%                  |                 2 |              0.1052  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2134 | 15-20%                  |                 2 |              0.1067  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2155 | >20%                    |                 2 |              0.10775 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.228  | 15-20%                  |                 5 |              0.0456  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2293 | >20%                    |                 2 |              0.11465 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.231  | >20%                    |                 2 |              0.1155  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.244  | >20%                    |                 2 |              0.122   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2498 | 15-20%                  |                 5 |              0.04996 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2519 | >20%                    |                 2 |              0.12595 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2542 | >20%                    |                 2 |              0.1271  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2578 | >20%                    |                 5 |              0.05156 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2624 | >20%                    |                10 |              0.02624 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2779 | >20%                    |                 5 |              0.05558 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2834 | >20%                    |                 2 |              0.1417  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.293  | 5-10%                   |                10 |              0.0293  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2948 | >20%                    |                 5 |              0.05896 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | 15-20%                  |                 2 |              0.1477  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3094 | >20%                    |                 2 |              0.1547  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3122 | 10-15%                  |                 2 |              0.1561  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3146 | >20%                    |                10 |              0.03146 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3272 | 15-20%                  |                 5 |              0.06544 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.328  | <5%                     |                10 |              0.0328  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3346 | <5%                     |                 2 |              0.1673  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3361 | >20%                    |                 5 |              0.06722 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3364 | >20%                    |                 2 |              0.1682  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3373 | >20%                    |                 2 |              0.16865 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3391 | >20%                    |                 5 |              0.06782 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3399 | >20%                    |                 2 |              0.16995 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.343  | 10-15%                  |                 2 |              0.1715  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3626 | >20%                    |                 5 |              0.07252 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3647 | >20%                    |                 5 |              0.07294 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.38   | >20%                    |                 5 |              0.076   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3817 | >20%                    |                 2 |              0.19085 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3822 | >20%                    |                 5 |              0.07644 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3862 | 5-10%                   |                10 |              0.03862 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3896 | >20%                    |                 5 |              0.07792 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3932 | >20%                    |                 5 |              0.07864 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4026 | >20%                    |                 5 |              0.08052 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4046 | >20%                    |                 5 |              0.08092 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4051 | >20%                    |                 5 |              0.08102 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4082 | >20%                    |                10 |              0.04082 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4189 | >20%                    |                 2 |              0.20945 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4236 | <5%                     |                 2 |              0.2118  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4247 | >20%                    |                 2 |              0.21235 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.427  | 15-20%                  |                 2 |              0.2135  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4284 | 10-15%                  |                 2 |              0.2142  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4284 | >20%                    |                 5 |              0.08568 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4382 | >20%                    |                10 |              0.04382 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4468 |                         |                 2 |              0.2234  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.46   | >20%                    |                 2 |              0.23    |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4621 | 15-20%                  |                 5 |              0.09242 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4638 | >20%                    |                 2 |              0.2319  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4667 | <5%                     |                 2 |              0.23335 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4837 | >20%                    |                 5 |              0.09674 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4862 | 5-10%                   |                 2 |              0.2431  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.488  | >20%                    |                 5 |              0.0976  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4909 | >20%                    |                 5 |              0.09818 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4933 | 5-10%                   |                 2 |              0.24665 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4946 | >20%                    |                 5 |              0.09892 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4985 | >20%                    |                 2 |              0.24925 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5083 | 5-10%                   |                 5 |              0.10166 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5086 | 15-20%                  |                 2 |              0.2543  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5093 | >20%                    |                 5 |              0.10186 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5179 | >20%                    |                10 |              0.05179 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5209 | 10-15%                  |                10 |              0.05209 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5316 | >20%                    |                 5 |              0.10632 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5341 | 10-15%                  |                 2 |              0.26705 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5421 | 10-15%                  |                 5 |              0.10842 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5465 | >20%                    |                 2 |              0.27325 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5581 | >20%                    |                 2 |              0.27905 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5584 | >20%                    |                10 |              0.05584 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5606 | >20%                    |                10 |              0.05606 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5647 | >20%                    |                 2 |              0.28235 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5669 | <5%                     |                 5 |              0.11338 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5714 | >20%                    |                 2 |              0.2857  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6061 | 15-20%                  |                10 |              0.06061 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6173 | >20%                    |                 5 |              0.12346 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6199 | 15-20%                  |                 2 |              0.30995 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6278 | >20%                    |                 5 |              0.12556 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6342 | >20%                    |                10 |              0.06342 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6347 | >20%                    |                 5 |              0.12694 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6401 | >20%                    |                 5 |              0.12802 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6471 | 15-20%                  |                10 |              0.06471 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6509 | >20%                    |                 5 |              0.13018 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6572 | 15-20%                  |                10 |              0.06572 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.66   | >20%                    |                 5 |              0.132   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6647 | >20%                    |                 5 |              0.13294 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6704 | >20%                    |                10 |              0.06704 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6873 | 15-20%                  |                10 |              0.06873 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6897 | 5-10%                   |                10 |              0.06897 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6923 | >20%                    |                 5 |              0.13846 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6978 | 5-10%                   |                10 |              0.06978 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6982 | >20%                    |                10 |              0.06982 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7036 |                         |                 5 |              0.14072 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7078 | >20%                    |                 2 |              0.3539  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7126 | >20%                    |                 2 |              0.3563  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7155 | >20%                    |                10 |              0.07155 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7252 | >20%                    |                 2 |              0.3626  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7328 | >20%                    |                 5 |              0.14656 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.739  | >20%                    |                 2 |              0.3695  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7541 | >20%                    |                10 |              0.07541 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.772  |                         |                10 |              0.0772  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7724 | >20%                    |                10 |              0.07724 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8002 | >20%                    |                10 |              0.08002 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8123 | 10-15%                  |                 2 |              0.40615 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8152 | >20%                    |                 5 |              0.16304 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8215 | >20%                    |                10 |              0.08215 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8238 |                         |                 2 |              0.4119  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8261 | >20%                    |                10 |              0.08261 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8404 | >20%                    |                 5 |              0.16808 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8487 | >20%                    |                10 |              0.08487 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8532 | >20%                    |                10 |              0.08532 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.856  | >20%                    |                 5 |              0.1712  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.856  | 15-20%                  |                10 |              0.0856  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8563 | >20%                    |                 5 |              0.17126 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8705 | >20%                    |                10 |              0.08705 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8732 | >20%                    |                10 |              0.08732 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8748 | >20%                    |                 5 |              0.17496 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8797 | 5-10%                   |                 5 |              0.17594 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9195 | 5-10%                   |                 2 |              0.45975 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9272 | >20%                    |                 5 |              0.18544 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9382 | >20%                    |                10 |              0.09382 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9405 | >20%                    |                10 |              0.09405 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9584 | >20%                    |                10 |              0.09584 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.971  | >20%                    |                 5 |              0.1942  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9818 | >20%                    |                10 |              0.09818 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0038 |                         |                 5 |              0.20076 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.004  | >20%                    |                10 |              0.1004  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0119 | 5-10%                   |                10 |              0.10119 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.018  | >20%                    |                 2 |              0.509   |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0455 | >20%                    |                10 |              0.10455 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0686 | >20%                    |                10 |              0.10686 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0765 | >20%                    |                 5 |              0.2153  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0831 | >20%                    |                 5 |              0.21662 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1014 | >20%                    |                10 |              0.11014 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.121  | 10-15%                  |                 2 |              0.5605  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1377 | 5-10%                   |                 2 |              0.56885 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1414 | 15-20%                  |                10 |              0.11414 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1679 | 15-20%                  |                10 |              0.11679 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2002 | >20%                    |                10 |              0.12002 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3085 | >20%                    |                10 |              0.13085 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3376 | >20%                    |                10 |              0.13376 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.367  | 15-20%                  |                 5 |              0.2734  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3705 | >20%                    |                 5 |              0.2741  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3981 | 10-15%                  |                10 |              0.13981 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.501  | 15-20%                  |                10 |              0.1501  |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5917 |                         |                10 |              0.15917 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5967 | >20%                    |                 5 |              0.31934 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1254 | >20%                    |                10 |              0.21254 |