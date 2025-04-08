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

Data correct as of 2025-04-08 01:46:13.432968, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1185 | 15-20%                  |                 2 |              0.05925 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1303 | 10-15%                  |                 2 |              0.06515 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.201  | <5%                     |                 2 |              0.1005  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2016 | >20%                    |                 2 |              0.1008  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2188 | 15-20%                  |                 2 |              0.1094  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2359 | 15-20%                  |                 2 |              0.11795 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 15-20%                  |                10 |              0.02419 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.243  | 15-20%                  |                 5 |              0.0486  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2434 | >20%                    |                 2 |              0.1217  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2443 | >20%                    |                 2 |              0.12215 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2617 | >20%                    |                 2 |              0.13085 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.267  | 15-20%                  |                 2 |              0.1335  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2726 | 10-15%                  |                 2 |              0.1363  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2747 | 5-10%                   |                 2 |              0.13735 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2763 | 5-10%                   |                 2 |              0.13815 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2778 | <5%                     |                 2 |              0.1389  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2792 | <5%                     |                 2 |              0.1396  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2896 | 10-15%                  |                10 |              0.02896 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.2954 | <5%                     |                10 |              0.02954 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3009 | >20%                    |                 2 |              0.15045 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.301  | <5%                     |                 2 |              0.1505  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3025 | 10-15%                  |                 2 |              0.15125 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3095 | 10-15%                  |                 5 |              0.0619  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3117 | 15-20%                  |                 2 |              0.15585 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3167 | 10-15%                  |                 2 |              0.15835 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3223 | 15-20%                  |                10 |              0.03223 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3309 | >20%                    |                 2 |              0.16545 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3564 | >20%                    |                 5 |              0.07128 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3591 | >20%                    |                 2 |              0.17955 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3592 | 10-15%                  |                 5 |              0.07184 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3605 | 10-15%                  |                 5 |              0.0721  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3612 | >20%                    |                 5 |              0.07224 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3674 | >20%                    |                10 |              0.03674 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3676 | >20%                    |                10 |              0.03676 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3682 | <5%                     |                 2 |              0.1841  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3741 | >20%                    |                 2 |              0.18705 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3765 | >20%                    |                 2 |              0.18825 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3768 | 5-10%                   |                 5 |              0.07536 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3793 | 10-15%                  |                 2 |              0.18965 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.381  | >20%                    |                 2 |              0.1905  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3844 | <5%                     |                 2 |              0.1922  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3875 | >20%                    |                 2 |              0.19375 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3899 | >20%                    |                 2 |              0.19495 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3985 | <5%                     |                 2 |              0.19925 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4046 | >20%                    |                 2 |              0.2023  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4047 | >20%                    |                10 |              0.04047 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4081 | 15-20%                  |                 2 |              0.20405 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4088 | 15-20%                  |                 2 |              0.2044  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4103 | 10-15%                  |                10 |              0.04103 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4118 | >20%                    |                 5 |              0.08236 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4165 | <5%                     |                 2 |              0.20825 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4217 | 10-15%                  |                 5 |              0.08434 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4376 | >20%                    |                 5 |              0.08752 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4379 | 10-15%                  |                 5 |              0.08758 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4389 | 5-10%                   |                 5 |              0.08778 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4393 | >20%                    |                 2 |              0.21965 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4401 | 5-10%                   |                10 |              0.04401 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4459 | >20%                    |                 2 |              0.22295 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4527 | >20%                    |                 5 |              0.09054 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4529 | >20%                    |                 5 |              0.09058 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4581 | >20%                    |                 2 |              0.22905 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4592 | 5-10%                   |                 2 |              0.2296  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.46   | >20%                    |                 5 |              0.092   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4651 | >20%                    |                 5 |              0.09302 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4672 | >20%                    |                 5 |              0.09344 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | <5%                     |                 5 |              0.09452 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4755 | >20%                    |                 2 |              0.23775 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4763 | >20%                    |                10 |              0.04763 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4782 | 5-10%                   |                 5 |              0.09564 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4793 | >20%                    |                 5 |              0.09586 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4821 | 10-15%                  |                 2 |              0.24105 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4857 | >20%                    |                 5 |              0.09714 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4887 | <5%                     |                 2 |              0.24435 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4889 | >20%                    |                 5 |              0.09778 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4928 | 5-10%                   |                 5 |              0.09856 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4974 | >20%                    |                 2 |              0.2487  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5015 | >20%                    |                 5 |              0.1003  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5076 | 10-15%                  |                 5 |              0.10152 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.514  | 15-20%                  |                 5 |              0.1028  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5202 | <5%                     |                 5 |              0.10404 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5275 | >20%                    |                 5 |              0.1055  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5306 | 15-20%                  |                 2 |              0.2653  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5321 | >20%                    |                 2 |              0.26605 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5339 | >20%                    |                 5 |              0.10678 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5434 | 5-10%                   |                 5 |              0.10868 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5465 | >20%                    |                 2 |              0.27325 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5597 | 5-10%                   |                 2 |              0.27985 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5706 | 15-20%                  |                 2 |              0.2853  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5771 | >20%                    |                 5 |              0.11542 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5844 | >20%                    |                 2 |              0.2922  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5857 | >20%                    |                 2 |              0.29285 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.586  | 15-20%                  |                 5 |              0.1172  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5891 | <5%                     |                10 |              0.05891 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5898 | 15-20%                  |                 5 |              0.11796 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5966 | <5%                     |                 5 |              0.11932 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.597  | >20%                    |                10 |              0.0597  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5976 | <5%                     |                 5 |              0.11952 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6008 | >20%                    |                 2 |              0.3004  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6068 | 5-10%                   |                 5 |              0.12136 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6121 | >20%                    |                 5 |              0.12242 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6168 | <5%                     |                10 |              0.06168 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6168 | <5%                     |                10 |              0.06168 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6191 | 5-10%                   |                 5 |              0.12382 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6199 | >20%                    |                 2 |              0.30995 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6258 | >20%                    |                 5 |              0.12516 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.626  | 10-15%                  |                 5 |              0.1252  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6324 | 10-15%                  |                 5 |              0.12648 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.635  | >20%                    |                 5 |              0.127   |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6382 | 10-15%                  |                 5 |              0.12764 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6426 | >20%                    |                 5 |              0.12852 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6519 | >20%                    |                10 |              0.06519 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6526 | <5%                     |                 5 |              0.13052 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.653  | >20%                    |                 5 |              0.1306  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6567 | 10-15%                  |                10 |              0.06567 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6595 | >20%                    |                10 |              0.06595 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6699 | 10-15%                  |                10 |              0.06699 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6718 | 10-15%                  |                 2 |              0.3359  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6736 | >20%                    |                 5 |              0.13472 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6805 | >20%                    |                10 |              0.06805 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6809 | >20%                    |                10 |              0.06809 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7057 | >20%                    |                 5 |              0.14114 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7256 | >20%                    |                 2 |              0.3628  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7261 | >20%                    |                10 |              0.07261 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7618 | <5%                     |                10 |              0.07618 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7627 | >20%                    |                 5 |              0.15254 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7632 | 15-20%                  |                 5 |              0.15264 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7639 | >20%                    |                10 |              0.07639 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7653 | 15-20%                  |                 5 |              0.15306 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7654 | 5-10%                   |                10 |              0.07654 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7678 | <5%                     |                10 |              0.07678 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7782 | 10-15%                  |                10 |              0.07782 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7825 | <5%                     |                10 |              0.07825 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7895 | <5%                     |                 5 |              0.1579  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7905 | 5-10%                   |                10 |              0.07905 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7931 | <5%                     |                 2 |              0.39655 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8034 | <5%                     |                10 |              0.08034 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8102 | >20%                    |                 2 |              0.4051  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8133 | 10-15%                  |                10 |              0.08133 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8156 | >20%                    |                10 |              0.08156 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8205 | >20%                    |                10 |              0.08205 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8238 | 15-20%                  |                10 |              0.08238 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8262 | 10-15%                  |                10 |              0.08262 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8314 | 15-20%                  |                10 |              0.08314 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8379 | >20%                    |                 2 |              0.41895 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8455 | <5%                     |                10 |              0.08455 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8569 | <5%                     |                10 |              0.08569 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8634 | >20%                    |                10 |              0.08634 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8642 | >20%                    |                 2 |              0.4321  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8724 | 15-20%                  |                 5 |              0.17448 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8778 | >20%                    |                10 |              0.08778 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8912 | >20%                    |                10 |              0.08912 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8931 | <5%                     |                10 |              0.08931 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9292 | >20%                    |                10 |              0.09292 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9489 | 10-15%                  |                10 |              0.09489 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9507 | >20%                    |                 5 |              0.19014 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9604 | >20%                    |                 5 |              0.19208 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9759 | 5-10%                   |                10 |              0.09759 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9817 | 15-20%                  |                10 |              0.09817 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0455 | >20%                    |                10 |              0.10455 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0783 | 10-15%                  |                 2 |              0.53915 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0834 | <5%                     |                10 |              0.10834 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.144  | <5%                     |                10 |              0.1144  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1538 | 15-20%                  |                10 |              0.11538 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1785 | 15-20%                  |                10 |              0.11785 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1953 | >20%                    |                10 |              0.11953 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2261 | >20%                    |                 5 |              0.24522 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2327 | <5%                     |                 5 |              0.24654 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3352 | 15-20%                  |                10 |              0.13352 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3443 | >20%                    |                10 |              0.13443 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3784 | >20%                    |                 5 |              0.27568 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3932 | 5-10%                   |                 2 |              0.6966  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3974 | >20%                    |                 2 |              0.6987  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.619  | >20%                    |                10 |              0.1619  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6439 | >20%                    |                10 |              0.16439 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8361 | 15-20%                  |                10 |              0.18361 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8747 | <5%                     |                10 |              0.18747 |