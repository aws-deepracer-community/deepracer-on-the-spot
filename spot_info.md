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

Data correct as of 2025-07-10 01:59:34.983416, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1556 | >20%                    |                 5 |              0.03112 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1585 | 5-10%                   |                 2 |              0.07925 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1607 | >20%                    |                 2 |              0.08035 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1615 | <5%                     |                 2 |              0.08075 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1746 | 10-15%                  |                 5 |              0.03492 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.18   | >20%                    |                 5 |              0.036   |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1854 | >20%                    |                 2 |              0.0927  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2014 | >20%                    |                10 |              0.02014 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2034 | >20%                    |                 5 |              0.04068 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2217 | >20%                    |                 2 |              0.11085 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2228 | 10-15%                  |                 5 |              0.04456 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2305 | 15-20%                  |                 2 |              0.11525 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.234  | >20%                    |                 5 |              0.0468  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2415 | >20%                    |                10 |              0.02415 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.246  | >20%                    |                 2 |              0.123   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.249  | >20%                    |                 2 |              0.1245  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2503 | 5-10%                   |                 2 |              0.12515 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2519 | >20%                    |                 2 |              0.12595 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | 15-20%                  |                 2 |              0.12625 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2543 | >20%                    |                 2 |              0.12715 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2701 | >20%                    |                 2 |              0.13505 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2736 | 5-10%                   |                10 |              0.02736 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2911 | >20%                    |                 2 |              0.14555 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | >20%                    |                10 |              0.0294  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2996 | <5%                     |                 2 |              0.1498  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3058 | >20%                    |                 5 |              0.06116 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3093 | <5%                     |                10 |              0.03093 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.312  | 5-10%                   |                 2 |              0.156   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3155 | 15-20%                  |                 2 |              0.15775 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3183 | 10-15%                  |                 2 |              0.15915 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3184 | >20%                    |                 2 |              0.1592  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3318 | <5%                     |                 2 |              0.1659  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3328 | >20%                    |                10 |              0.03328 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3511 | 15-20%                  |                 5 |              0.07022 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.352  | >20%                    |                 2 |              0.176   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3558 | >20%                    |                 2 |              0.1779  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3654 | >20%                    |                 5 |              0.07308 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.37   | >20%                    |                 2 |              0.185   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3708 | >20%                    |                 2 |              0.1854  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3727 | >20%                    |                 2 |              0.18635 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3779 | >20%                    |                 5 |              0.07558 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3834 | 5-10%                   |                 2 |              0.1917  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3895 | 10-15%                  |                 5 |              0.0779  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3941 | >20%                    |                 2 |              0.19705 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3968 | >20%                    |                 5 |              0.07936 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4009 | >20%                    |                 2 |              0.20045 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4202 | >20%                    |                 2 |              0.2101  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4203 | >20%                    |                 2 |              0.21015 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4236 | 5-10%                   |                 2 |              0.2118  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4286 | >20%                    |                 2 |              0.2143  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4346 | <5%                     |                 5 |              0.08692 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4365 | 15-20%                  |                 5 |              0.0873  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4367 | <5%                     |                 2 |              0.21835 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4413 | >20%                    |                 5 |              0.08826 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4457 | >20%                    |                 5 |              0.08914 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4475 | >20%                    |                 5 |              0.0895  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4505 | 10-15%                  |                 2 |              0.22525 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4568 | >20%                    |                 5 |              0.09136 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.46   | >20%                    |                 2 |              0.23    |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4602 | >20%                    |                 2 |              0.2301  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4611 | >20%                    |                 2 |              0.23055 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4652 | >20%                    |                10 |              0.04652 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4671 | >20%                    |                 5 |              0.09342 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4695 | >20%                    |                 2 |              0.23475 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.478  | 5-10%                   |                 2 |              0.239   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4815 | <5%                     |                 2 |              0.24075 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4866 | >20%                    |                 2 |              0.2433  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4879 | >20%                    |                 2 |              0.24395 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4954 | <5%                     |                 5 |              0.09908 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4973 | >20%                    |                 5 |              0.09946 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5029 | 10-15%                  |                 5 |              0.10058 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5053 | >20%                    |                10 |              0.05053 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5067 | 15-20%                  |                 5 |              0.10134 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.507  | 15-20%                  |                 5 |              0.1014  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5074 | >20%                    |                 2 |              0.2537  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5075 | 15-20%                  |                 2 |              0.25375 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5117 | >20%                    |                 2 |              0.25585 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5227 | >20%                    |                 5 |              0.10454 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5279 | <5%                     |                 5 |              0.10558 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5284 | >20%                    |                 2 |              0.2642  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.53   | >20%                    |                 5 |              0.106   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.535  | >20%                    |                 5 |              0.107   |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5371 | >20%                    |                 5 |              0.10742 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5405 | 15-20%                  |                10 |              0.05405 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5519 | >20%                    |                 5 |              0.11038 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5536 | >20%                    |                 5 |              0.11072 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5723 | <5%                     |                 5 |              0.11446 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5746 | >20%                    |                10 |              0.05746 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5776 | >20%                    |                 2 |              0.2888  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5827 | >20%                    |                 2 |              0.29135 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5833 | >20%                    |                 2 |              0.29165 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5839 | >20%                    |                 5 |              0.11678 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5852 | >20%                    |                 2 |              0.2926  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5893 | >20%                    |                10 |              0.05893 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5918 | >20%                    |                 5 |              0.11836 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6    | >20%                    |                 2 |              0.3     |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6049 | 10-15%                  |                 5 |              0.12098 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6069 | 10-15%                  |                 5 |              0.12138 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6118 | >20%                    |                 5 |              0.12236 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6122 | >20%                    |                10 |              0.06122 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6128 | >20%                    |                10 |              0.06128 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6152 | 15-20%                  |                10 |              0.06152 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6215 | 5-10%                   |                 2 |              0.31075 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6353 | >20%                    |                 2 |              0.31765 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6412 | 10-15%                  |                 2 |              0.3206  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6426 | >20%                    |                 5 |              0.12852 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6446 | >20%                    |                 5 |              0.12892 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6569 | 15-20%                  |                 5 |              0.13138 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6615 | 10-15%                  |                10 |              0.06615 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6652 | >20%                    |                 5 |              0.13304 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6658 | 5-10%                   |                 5 |              0.13316 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6685 | >20%                    |                 5 |              0.1337  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6686 | >20%                    |                 5 |              0.13372 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6821 | >20%                    |                10 |              0.06821 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6856 | 5-10%                   |                 5 |              0.13712 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7034 | <5%                     |                 5 |              0.14068 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7078 | >20%                    |                 5 |              0.14156 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.72   | >20%                    |                 5 |              0.144   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7366 | >20%                    |                 5 |              0.14732 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7402 | >20%                    |                10 |              0.07402 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7529 | <5%                     |                10 |              0.07529 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7566 | >20%                    |                10 |              0.07566 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7571 | <5%                     |                 5 |              0.15142 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7596 | >20%                    |                 5 |              0.15192 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.765  | >20%                    |                 2 |              0.3825  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7756 | 10-15%                  |                10 |              0.07756 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7796 | 15-20%                  |                10 |              0.07796 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7831 | 5-10%                   |                10 |              0.07831 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7895 | >20%                    |                 5 |              0.1579  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7899 | >20%                    |                 5 |              0.15798 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8102 | 10-15%                  |                 5 |              0.16204 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8112 | 5-10%                   |                10 |              0.08112 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.817  | 10-15%                  |                10 |              0.0817  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8231 | >20%                    |                10 |              0.08231 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8252 | 10-15%                  |                10 |              0.08252 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8332 | <5%                     |                10 |              0.08332 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8391 | 5-10%                   |                10 |              0.08391 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8635 | 5-10%                   |                10 |              0.08635 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8638 | <5%                     |                10 |              0.08638 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8694 | >20%                    |                10 |              0.08694 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8848 | >20%                    |                10 |              0.08848 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8896 | >20%                    |                10 |              0.08896 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8924 | >20%                    |                 5 |              0.17848 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8925 | 15-20%                  |                10 |              0.08925 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8969 | >20%                    |                10 |              0.08969 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9167 | >20%                    |                10 |              0.09167 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9191 | >20%                    |                 5 |              0.18382 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9321 | >20%                    |                10 |              0.09321 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9361 | >20%                    |                10 |              0.09361 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9438 | 5-10%                   |                10 |              0.09438 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9448 | 15-20%                  |                10 |              0.09448 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9535 | 15-20%                  |                10 |              0.09535 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9739 | >20%                    |                10 |              0.09739 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.976  | >20%                    |                10 |              0.0976  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0215 | >20%                    |                10 |              0.10215 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0436 | <5%                     |                10 |              0.10436 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0492 | <5%                     |                10 |              0.10492 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0565 | >20%                    |                 2 |              0.52825 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0583 | >20%                    |                10 |              0.10583 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0622 | <5%                     |                10 |              0.10622 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.083  | >20%                    |                 2 |              0.5415  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0921 | <5%                     |                 2 |              0.54605 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1223 | 15-20%                  |                10 |              0.11223 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1244 | >20%                    |                10 |              0.11244 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1424 | >20%                    |                10 |              0.11424 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2078 | <5%                     |                10 |              0.12078 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2187 | >20%                    |                 2 |              0.60935 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2416 | <5%                     |                 5 |              0.24832 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2452 | >20%                    |                 2 |              0.6226  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2514 | >20%                    |                10 |              0.12514 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2578 | >20%                    |                 5 |              0.25156 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2955 | >20%                    |                 5 |              0.2591  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.314  | 15-20%                  |                10 |              0.1314  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3454 | 10-15%                  |                10 |              0.13454 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4475 | <5%                     |                 5 |              0.2895  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4674 | >20%                    |                10 |              0.14674 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4921 | >20%                    |                 5 |              0.29842 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6442 | 15-20%                  |                10 |              0.16442 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8322 | >20%                    |                10 |              0.18322 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8778 | <5%                     |                10 |              0.18778 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      2.0063 | <5%                     |                 2 |              1.00315 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0452 | 5-10%                   |                10 |              0.20452 |