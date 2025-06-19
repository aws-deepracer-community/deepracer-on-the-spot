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

Data correct as of 2025-06-19 01:56:57.989469, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1244 | >20%                    |                 2 |              0.0622  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1778 | 15-20%                  |                 2 |              0.0889  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1841 | >20%                    |                 5 |              0.03682 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 15-20%                  |                 5 |              0.03708 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1889 | >20%                    |                 5 |              0.03778 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2014 | 5-10%                   |                 2 |              0.1007  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2124 | >20%                    |                 2 |              0.1062  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2208 | >20%                    |                 2 |              0.1104  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2214 | >20%                    |                 5 |              0.04428 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.227  | >20%                    |                 2 |              0.1135  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2298 | 15-20%                  |                 2 |              0.1149  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2442 | 15-20%                  |                 2 |              0.1221  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2491 | <5%                     |                 2 |              0.12455 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2539 | 15-20%                  |                 5 |              0.05078 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2573 | >20%                    |                10 |              0.02573 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2688 | >20%                    |                 2 |              0.1344  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2727 | >20%                    |                 2 |              0.13635 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2751 | 10-15%                  |                10 |              0.02751 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2836 | 5-10%                   |                10 |              0.02836 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2858 | >20%                    |                 2 |              0.1429  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2875 | 15-20%                  |                 2 |              0.14375 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2915 | >20%                    |                 2 |              0.14575 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2921 | <5%                     |                 2 |              0.14605 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2957 | >20%                    |                 2 |              0.14785 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3023 | >20%                    |                 2 |              0.15115 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3053 | >20%                    |                 5 |              0.06106 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3084 | >20%                    |                 2 |              0.1542  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3102 | 15-20%                  |                 5 |              0.06204 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3156 | >20%                    |                 2 |              0.1578  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3174 | >20%                    |                 5 |              0.06348 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3186 | >20%                    |                 2 |              0.1593  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3224 | >20%                    |                 2 |              0.1612  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3353 | <5%                     |                 2 |              0.16765 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3416 | 10-15%                  |                 2 |              0.1708  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.344  | >20%                    |                 5 |              0.0688  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3521 | >20%                    |                10 |              0.03521 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3526 | 5-10%                   |                 2 |              0.1763  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3539 | 15-20%                  |                10 |              0.03539 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3568 | 10-15%                  |                 2 |              0.1784  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3586 | 10-15%                  |                 2 |              0.1793  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3807 | >20%                    |                 5 |              0.07614 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3823 | >20%                    |                 2 |              0.19115 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3831 | <5%                     |                 5 |              0.07662 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.386  | >20%                    |                 2 |              0.193   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3877 | 10-15%                  |                 2 |              0.19385 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3945 | 10-15%                  |                 5 |              0.0789  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4022 | >20%                    |                 2 |              0.2011  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4031 | >20%                    |                 2 |              0.20155 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.41   | >20%                    |                 5 |              0.082   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4157 | 10-15%                  |                 5 |              0.08314 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4196 | 5-10%                   |                 2 |              0.2098  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4208 | >20%                    |                 5 |              0.08416 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4221 | >20%                    |                 5 |              0.08442 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4263 | <5%                     |                 2 |              0.21315 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4307 | >20%                    |                 2 |              0.21535 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4324 | >20%                    |                 5 |              0.08648 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4346 | 15-20%                  |                 2 |              0.2173  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4359 | >20%                    |                 2 |              0.21795 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4367 | >20%                    |                10 |              0.04367 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4425 | 15-20%                  |                 5 |              0.0885  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4551 | >20%                    |                 2 |              0.22755 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4561 | >20%                    |                 2 |              0.22805 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4567 | >20%                    |                 5 |              0.09134 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4592 | <5%                     |                 5 |              0.09184 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4647 | >20%                    |                 5 |              0.09294 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4661 | >20%                    |                 2 |              0.23305 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | <5%                     |                 5 |              0.0946  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4737 | >20%                    |                 5 |              0.09474 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4769 | >20%                    |                10 |              0.04769 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4788 | >20%                    |                10 |              0.04788 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4789 | >20%                    |                 5 |              0.09578 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.482  | <5%                     |                 5 |              0.0964  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.482  | >20%                    |                 2 |              0.241   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4854 | 15-20%                  |                 2 |              0.2427  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4925 | >20%                    |                 2 |              0.24625 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4941 | >20%                    |                 5 |              0.09882 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4955 | 10-15%                  |                 2 |              0.24775 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4963 | >20%                    |                 5 |              0.09926 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4974 | >20%                    |                 2 |              0.2487  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5011 | 10-15%                  |                 5 |              0.10022 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.504  | 5-10%                   |                 2 |              0.252   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5067 | 15-20%                  |                 5 |              0.10134 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5114 | 10-15%                  |                 5 |              0.10228 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5222 | 5-10%                   |                 5 |              0.10444 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5319 | <5%                     |                 5 |              0.10638 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.536  | >20%                    |                 2 |              0.268   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5419 | <5%                     |                 5 |              0.10838 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5423 | >20%                    |                 2 |              0.27115 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5474 | 15-20%                  |                 2 |              0.2737  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5558 | >20%                    |                10 |              0.05558 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5605 | 10-15%                  |                10 |              0.05605 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5624 | 10-15%                  |                 5 |              0.11248 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.564  | >20%                    |                 5 |              0.1128  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5693 | >20%                    |                 5 |              0.11386 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5728 | >20%                    |                 5 |              0.11456 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5861 | <5%                     |                 5 |              0.11722 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5907 | >20%                    |                 5 |              0.11814 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5934 | 5-10%                   |                 2 |              0.2967  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.602  | <5%                     |                 2 |              0.301   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6021 | >20%                    |                 5 |              0.12042 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6029 | >20%                    |                 2 |              0.30145 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6055 | >20%                    |                 2 |              0.30275 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.613  | >20%                    |                 5 |              0.1226  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6168 | >20%                    |                 2 |              0.3084  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6181 | >20%                    |                10 |              0.06181 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6334 | >20%                    |                10 |              0.06334 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6349 | >20%                    |                 5 |              0.12698 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6367 | >20%                    |                 5 |              0.12734 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.647  | >20%                    |                 5 |              0.1294  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6477 | <5%                     |                 5 |              0.12954 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6497 | >20%                    |                 5 |              0.12994 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6508 | >20%                    |                 5 |              0.13016 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6533 | >20%                    |                 5 |              0.13066 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.656  | 15-20%                  |                10 |              0.0656  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6637 | <5%                     |                10 |              0.06637 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6837 | 10-15%                  |                 5 |              0.13674 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6868 | 10-15%                  |                 5 |              0.13736 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6887 | <5%                     |                10 |              0.06887 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.69   | >20%                    |                 2 |              0.345   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6969 | >20%                    |                10 |              0.06969 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7053 | 15-20%                  |                10 |              0.07053 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7069 | 10-15%                  |                 2 |              0.35345 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7098 | <5%                     |                 5 |              0.14196 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.711  | 15-20%                  |                10 |              0.0711  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7153 | >20%                    |                10 |              0.07153 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7214 | >20%                    |                10 |              0.07214 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7229 | >20%                    |                10 |              0.07229 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.726  | >20%                    |                 5 |              0.1452  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7287 | >20%                    |                10 |              0.07287 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7497 | >20%                    |                10 |              0.07497 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7562 | 15-20%                  |                10 |              0.07562 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7584 | 10-15%                  |                10 |              0.07584 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7622 | >20%                    |                10 |              0.07622 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7633 | <5%                     |                10 |              0.07633 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.781  | >20%                    |                 5 |              0.1562  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7906 | >20%                    |                10 |              0.07906 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7934 | 5-10%                   |                 5 |              0.15868 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7979 | <5%                     |                10 |              0.07979 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8033 | >20%                    |                10 |              0.08033 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8125 | 15-20%                  |                10 |              0.08125 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8133 | >20%                    |                 5 |              0.16266 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8167 | >20%                    |                10 |              0.08167 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8492 | >20%                    |                10 |              0.08492 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8664 | >20%                    |                10 |              0.08664 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8724 | 15-20%                  |                10 |              0.08724 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8938 | <5%                     |                10 |              0.08938 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9034 | >20%                    |                10 |              0.09034 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9125 | >20%                    |                10 |              0.09125 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9373 | >20%                    |                10 |              0.09373 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9398 | >20%                    |                10 |              0.09398 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9417 | >20%                    |                10 |              0.09417 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9448 | >20%                    |                 2 |              0.4724  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9583 | >20%                    |                 5 |              0.19166 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9583 | >20%                    |                10 |              0.09583 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9657 | >20%                    |                10 |              0.09657 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9824 | <5%                     |                10 |              0.09824 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9918 | >20%                    |                 2 |              0.4959  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0102 | >20%                    |                10 |              0.10102 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0231 | >20%                    |                10 |              0.10231 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0318 | 10-15%                  |                10 |              0.10318 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0518 | >20%                    |                10 |              0.10518 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0522 | 15-20%                  |                10 |              0.10522 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0689 | <5%                     |                 2 |              0.53445 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0892 | 15-20%                  |                10 |              0.10892 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.098  | >20%                    |                10 |              0.1098  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1115 | 15-20%                  |                10 |              0.11115 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1138 | >20%                    |                 2 |              0.5569  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1847 | <5%                     |                 5 |              0.23694 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1886 | >20%                    |                 5 |              0.23772 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2101 | 10-15%                  |                10 |              0.12101 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.292  | >20%                    |                10 |              0.1292  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2991 | >20%                    |                 5 |              0.25982 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3227 | >20%                    |                10 |              0.13227 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3586 | <5%                     |                 2 |              0.6793  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3616 | >20%                    |                10 |              0.13616 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4189 | <5%                     |                 5 |              0.28378 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5537 | >20%                    |                 5 |              0.31074 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6348 | 10-15%                  |                10 |              0.16348 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.7473 | <5%                     |                10 |              0.17473 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.7665 | >20%                    |                 2 |              0.88325 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0813 | <5%                     |                10 |              0.20813 |