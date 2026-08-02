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

Data correct as of 2026-08-02 03:21:34.479291, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.147  | >20%                    |                 2 |              0.0735  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2008 | >20%                    |                 2 |              0.1004  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.225  | >20%                    |                 2 |              0.1125  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2327 | 15-20%                  |                 2 |              0.11635 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2415 | >20%                    |                 2 |              0.12075 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2501 | >20%                    |                 2 |              0.12505 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2503 | >20%                    |                 2 |              0.12515 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2559 | 15-20%                  |                 5 |              0.05118 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2603 | 5-10%                   |                10 |              0.02603 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2796 | 15-20%                  |                 2 |              0.1398  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2815 | >20%                    |                 2 |              0.14075 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2823 | >20%                    |                 2 |              0.14115 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2848 | >20%                    |                 2 |              0.1424  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2995 | >20%                    |                 5 |              0.0599  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.308  | >20%                    |                 2 |              0.154   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3088 | >20%                    |                 2 |              0.1544  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.337  | 15-20%                  |                 2 |              0.1685  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3376 | >20%                    |                 2 |              0.1688  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3428 | 10-15%                  |                 2 |              0.1714  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3521 | 15-20%                  |                 5 |              0.07042 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3569 | >20%                    |                10 |              0.03569 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3681 | 5-10%                   |                10 |              0.03681 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3728 | <5%                     |                 2 |              0.1864  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3732 | >20%                    |                 2 |              0.1866  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3741 | >20%                    |                 5 |              0.07482 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3753 | 10-15%                  |                 2 |              0.18765 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3778 | >20%                    |                 5 |              0.07556 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3811 | >20%                    |                 5 |              0.07622 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.3833 | >20%                    |                10 |              0.03833 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3856 | >20%                    |                 2 |              0.1928  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3905 | 15-20%                  |                 2 |              0.19525 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3937 | 5-10%                   |                10 |              0.03937 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4027 | >20%                    |                10 |              0.04027 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4081 | >20%                    |                 5 |              0.08162 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4133 | >20%                    |                 5 |              0.08266 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4139 | 10-15%                  |                 2 |              0.20695 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4309 | >20%                    |                 5 |              0.08618 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4316 | >20%                    |                 5 |              0.08632 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4318 | >20%                    |                10 |              0.04318 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4371 | >20%                    |                 2 |              0.21855 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4396 | <5%                     |                 2 |              0.2198  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4418 | >20%                    |                 2 |              0.2209  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4529 | >20%                    |                 2 |              0.22645 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4735 | 10-15%                  |                 2 |              0.23675 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4794 | >20%                    |                 5 |              0.09588 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4802 | >20%                    |                 2 |              0.2401  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.484  | 10-15%                  |                10 |              0.0484  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4917 | 15-20%                  |                 5 |              0.09834 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.494  | >20%                    |                 5 |              0.0988  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5042 | 15-20%                  |                 2 |              0.2521  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5053 | >20%                    |                 2 |              0.25265 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5111 | >20%                    |                 5 |              0.10222 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5135 | >20%                    |                 2 |              0.25675 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5208 | >20%                    |                 5 |              0.10416 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5473 | >20%                    |                10 |              0.05473 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5504 | >20%                    |                 2 |              0.2752  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5528 | <5%                     |                 2 |              0.2764  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5558 | >20%                    |                 5 |              0.11116 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5579 | >20%                    |                 5 |              0.11158 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5602 | >20%                    |                 5 |              0.11204 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5603 | 5-10%                   |                 2 |              0.28015 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5615 | >20%                    |                 5 |              0.1123  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5685 | >20%                    |                 5 |              0.1137  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5689 | 10-15%                  |                 5 |              0.11378 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5744 | >20%                    |                 2 |              0.2872  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5859 | >20%                    |                 5 |              0.11718 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5914 | >20%                    |                 2 |              0.2957  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5936 | >20%                    |                 5 |              0.11872 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5946 | >20%                    |                 5 |              0.11892 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5982 | >20%                    |                 5 |              0.11964 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6237 | >20%                    |                 2 |              0.31185 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6441 | <5%                     |                 5 |              0.12882 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6454 | >20%                    |                 5 |              0.12908 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6543 | >20%                    |                10 |              0.06543 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6634 | >20%                    |                 5 |              0.13268 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6635 | >20%                    |                 5 |              0.1327  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.67   | <5%                     |                10 |              0.067   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6736 | >20%                    |                10 |              0.06736 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6761 | >20%                    |                 2 |              0.33805 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6811 | >20%                    |                 5 |              0.13622 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6836 | >20%                    |                 5 |              0.13672 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6846 | 5-10%                   |                 5 |              0.13692 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6865 | >20%                    |                10 |              0.06865 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6894 | 15-20%                  |                 5 |              0.13788 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7011 | 15-20%                  |                10 |              0.07011 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7029 | >20%                    |                 5 |              0.14058 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7206 |                         |                 2 |              0.3603  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7207 | >20%                    |                 5 |              0.14414 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7319 | >20%                    |                10 |              0.07319 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7609 | >20%                    |                10 |              0.07609 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7681 | >20%                    |                10 |              0.07681 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7703 | >20%                    |                10 |              0.07703 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7714 | >20%                    |                 5 |              0.15428 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.7954 |                         |                 2 |              0.3977  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8122 | >20%                    |                 5 |              0.16244 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8174 | >20%                    |                 2 |              0.4087  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8282 | 10-15%                  |                 2 |              0.4141  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.829  | >20%                    |                10 |              0.0829  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8331 | >20%                    |                10 |              0.08331 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8537 | 15-20%                  |                10 |              0.08537 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8552 | >20%                    |                 2 |              0.4276  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8624 |                         |                 5 |              0.17248 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8632 | 5-10%                   |                10 |              0.08632 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.869  | >20%                    |                 5 |              0.1738  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8704 | >20%                    |                 5 |              0.17408 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8778 | >20%                    |                 2 |              0.4389  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8898 | 15-20%                  |                10 |              0.08898 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8904 | 10-15%                  |                 2 |              0.4452  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8932 | >20%                    |                10 |              0.08932 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8964 | >20%                    |                10 |              0.08964 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9017 | >20%                    |                 5 |              0.18034 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.912  | >20%                    |                 2 |              0.456   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9153 | >20%                    |                10 |              0.09153 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9163 | >20%                    |                10 |              0.09163 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9687 | >20%                    |                10 |              0.09687 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9899 | 5-10%                   |                10 |              0.09899 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9914 | >20%                    |                 5 |              0.19828 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0046 | >20%                    |                10 |              0.10046 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0088 | 15-20%                  |                10 |              0.10088 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0118 | >20%                    |                10 |              0.10118 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0233 | 15-20%                  |                10 |              0.10233 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0357 | >20%                    |                 5 |              0.20714 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0364 | >20%                    |                 5 |              0.20728 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.047  | >20%                    |                10 |              0.1047  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0477 | >20%                    |                10 |              0.10477 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0504 | 15-20%                  |                 2 |              0.5252  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0623 | >20%                    |                10 |              0.10623 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.087  | >20%                    |                 5 |              0.2174  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1336 | >20%                    |                 2 |              0.5668  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1501 | >20%                    |                10 |              0.11501 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1768 | 5-10%                   |                 2 |              0.5884  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1878 | 15-20%                  |                10 |              0.11878 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1912 | >20%                    |                10 |              0.11912 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.231  | 5-10%                   |                 2 |              0.6155  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.258  | >20%                    |                10 |              0.1258  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2729 | 10-15%                  |                 2 |              0.63645 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.286  |                         |                10 |              0.1286  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2889 | >20%                    |                 5 |              0.25778 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2914 | 5-10%                   |                 5 |              0.25828 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3161 | 15-20%                  |                10 |              0.13161 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3276 |                         |                 5 |              0.26552 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3516 | >20%                    |                 5 |              0.27032 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4249 | >20%                    |                10 |              0.14249 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5628 | 15-20%                  |                 5 |              0.31256 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.6001 | 10-15%                  |                10 |              0.16001 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.701  | >20%                    |                10 |              0.1701  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7394 | 5-10%                   |                10 |              0.17394 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8424 |                         |                10 |              0.18424 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8852 | 15-20%                  |                10 |              0.18852 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9574 | >20%                    |                10 |              0.19574 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.036  | >20%                    |                10 |              0.2036  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0409 | 5-10%                   |                 2 |              1.02045 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.2903 | >20%                    |                 5 |              0.45806 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.5003 | >20%                    |                 5 |              0.50006 |