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

Data correct as of 2026-04-03 02:45:54.906443, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2019 | >20%                    |                 2 |              0.10095 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2085 | 15-20%                  |                 2 |              0.10425 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2225 | >20%                    |                 2 |              0.11125 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2232 | >20%                    |                 2 |              0.1116  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2462 | >20%                    |                 2 |              0.1231  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2484 | >20%                    |                 2 |              0.1242  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2565 | 15-20%                  |                 5 |              0.0513  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2619 | 10-15%                  |                 2 |              0.13095 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2647 | >20%                    |                 2 |              0.13235 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2734 | 15-20%                  |                 2 |              0.1367  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2848 | 5-10%                   |                10 |              0.02848 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2939 | 15-20%                  |                 5 |              0.05878 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3015 | 5-10%                   |                10 |              0.03015 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3058 | >20%                    |                10 |              0.03058 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3105 | 10-15%                  |                 2 |              0.15525 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3111 | >20%                    |                 5 |              0.06222 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3148 | <5%                     |                 2 |              0.1574  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3152 | >20%                    |                 2 |              0.1576  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3249 | >20%                    |                 5 |              0.06498 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3257 | 15-20%                  |                 5 |              0.06514 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3287 | 10-15%                  |                 2 |              0.16435 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.33   | >20%                    |                 5 |              0.066   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3316 | >20%                    |                 2 |              0.1658  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3398 | >20%                    |                10 |              0.03398 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.343  | >20%                    |                 5 |              0.0686  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3441 | <5%                     |                 2 |              0.17205 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3481 | >20%                    |                 2 |              0.17405 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3653 | 15-20%                  |                 2 |              0.18265 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3673 | 5-10%                   |                10 |              0.03673 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3706 | 10-15%                  |                 2 |              0.1853  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3814 | >20%                    |                 5 |              0.07628 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.383  | >20%                    |                 2 |              0.1915  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3895 | >20%                    |                 5 |              0.0779  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3936 | >20%                    |                 5 |              0.07872 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3967 | >20%                    |                 5 |              0.07934 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3982 | >20%                    |                 2 |              0.1991  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.409  | >20%                    |                 2 |              0.2045  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4129 | <5%                     |                 2 |              0.20645 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.42   | 10-15%                  |                 2 |              0.21    |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4215 | >20%                    |                 2 |              0.21075 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4269 | 15-20%                  |                 2 |              0.21345 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4291 | <5%                     |                 5 |              0.08582 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.432  | >20%                    |                 2 |              0.216   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4368 | >20%                    |                 2 |              0.2184  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4413 | >20%                    |                 5 |              0.08826 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4419 | >20%                    |                 5 |              0.08838 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4427 | >20%                    |                 5 |              0.08854 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4475 | >20%                    |                 2 |              0.22375 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4532 | >20%                    |                 5 |              0.09064 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4622 | >20%                    |                 5 |              0.09244 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4635 | >20%                    |                 2 |              0.23175 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4682 | >20%                    |                 2 |              0.2341  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4683 | 15-20%                  |                 2 |              0.23415 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4724 | >20%                    |                 5 |              0.09448 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4749 | >20%                    |                10 |              0.04749 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4786 | >20%                    |                 5 |              0.09572 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4816 | >20%                    |                 5 |              0.09632 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4852 | >20%                    |                 5 |              0.09704 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4931 | 15-20%                  |                 2 |              0.24655 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4965 | >20%                    |                 2 |              0.24825 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5085 | >20%                    |                 2 |              0.25425 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5121 | >20%                    |                 5 |              0.10242 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5127 | >20%                    |                 2 |              0.25635 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5129 | 15-20%                  |                10 |              0.05129 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5159 | >20%                    |                 5 |              0.10318 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5208 | >20%                    |                 5 |              0.10416 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5327 | 15-20%                  |                 5 |              0.10654 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5359 | 5-10%                   |                 5 |              0.10718 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5482 | >20%                    |                 5 |              0.10964 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5519 | >20%                    |                 5 |              0.11038 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5629 | >20%                    |                10 |              0.05629 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.567  | >20%                    |                 5 |              0.1134  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5737 | >20%                    |                 2 |              0.28685 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5754 | 5-10%                   |                 2 |              0.2877  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5767 | 5-10%                   |                10 |              0.05767 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5874 | 10-15%                  |                 5 |              0.11748 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5975 | >20%                    |                10 |              0.05975 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6062 | >20%                    |                10 |              0.06062 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.614  | >20%                    |                10 |              0.0614  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6164 | 5-10%                   |                 5 |              0.12328 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6178 | 15-20%                  |                10 |              0.06178 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6213 | <5%                     |                10 |              0.06213 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6308 | 15-20%                  |                10 |              0.06308 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6314 | >20%                    |                 2 |              0.3157  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6319 | >20%                    |                 5 |              0.12638 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6388 | >20%                    |                 5 |              0.12776 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6391 | >20%                    |                10 |              0.06391 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6395 | 10-15%                  |                 2 |              0.31975 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6426 | >20%                    |                10 |              0.06426 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6601 | >20%                    |                 5 |              0.13202 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6771 | >20%                    |                 5 |              0.13542 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6817 | >20%                    |                10 |              0.06817 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6851 | >20%                    |                 2 |              0.34255 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6976 | 5-10%                   |                 2 |              0.3488  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7204 | >20%                    |                 5 |              0.14408 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7287 | >20%                    |                 5 |              0.14574 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7449 | >20%                    |                 5 |              0.14898 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7535 | >20%                    |                 5 |              0.1507  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7593 | >20%                    |                10 |              0.07593 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.761  | >20%                    |                10 |              0.0761  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7624 | >20%                    |                10 |              0.07624 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7649 | >20%                    |                 2 |              0.38245 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7712 | >20%                    |                10 |              0.07712 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7754 | >20%                    |                 5 |              0.15508 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7827 | >20%                    |                10 |              0.07827 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8012 | >20%                    |                10 |              0.08012 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8049 | >20%                    |                 5 |              0.16098 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8089 | >20%                    |                10 |              0.08089 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.823  | >20%                    |                10 |              0.0823  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8234 | >20%                    |                 5 |              0.16468 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8301 | >20%                    |                 5 |              0.16602 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8325 | >20%                    |                10 |              0.08325 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8329 | 5-10%                   |                 2 |              0.41645 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8335 | >20%                    |                10 |              0.08335 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8537 | >20%                    |                 5 |              0.17074 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8547 | >20%                    |                 2 |              0.42735 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8576 | >20%                    |                10 |              0.08576 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.864  | >20%                    |                 2 |              0.432   |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8724 | 5-10%                   |                10 |              0.08724 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8743 | >20%                    |                10 |              0.08743 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8852 | >20%                    |                10 |              0.08852 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8862 | 15-20%                  |                10 |              0.08862 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8954 | >20%                    |                 2 |              0.4477  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8977 | >20%                    |                 5 |              0.17954 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9231 | >20%                    |                10 |              0.09231 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9331 | >20%                    |                10 |              0.09331 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9353 | >20%                    |                10 |              0.09353 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9569 | >20%                    |                10 |              0.09569 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9606 | 10-15%                  |                 2 |              0.4803  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9748 | 15-20%                  |                10 |              0.09748 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9769 | >20%                    |                 5 |              0.19538 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9796 | 10-15%                  |                10 |              0.09796 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0326 | >20%                    |                10 |              0.10326 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0532 | 5-10%                   |                10 |              0.10532 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0573 | 15-20%                  |                10 |              0.10573 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0694 | >20%                    |                10 |              0.10694 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.087  | >20%                    |                 5 |              0.2174  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.087  | >20%                    |                10 |              0.1087  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.117  | 10-15%                  |                10 |              0.1117  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1744 | >20%                    |                 5 |              0.23488 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2787 | 15-20%                  |                10 |              0.12787 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2958 | 15-20%                  |                10 |              0.12958 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3731 | 5-10%                   |                 2 |              0.68655 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3746 | >20%                    |                10 |              0.13746 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3991 | >20%                    |                 2 |              0.69955 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4465 | >20%                    |                 5 |              0.2893  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4526 | 15-20%                  |                 5 |              0.29052 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.6369 |                         |                 2 |              0.81845 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.9657 |                         |                 5 |              0.39314 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0892 | >20%                    |                10 |              0.20892 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      2.7667 |                         |                10 |              0.27667 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.8171 | >20%                    |                10 |              0.28171 |