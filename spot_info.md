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

Data correct as of 2024-09-17 01:12:13.381956, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0905 | <5%                     |                 2 |              0.04525 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2007 | 5-10%                   |                 2 |              0.10035 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2244 | 15-20%                  |                 2 |              0.1122  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2351 | <5%                     |                 2 |              0.11755 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2364 | 15-20%                  |                 5 |              0.04728 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2376 | 15-20%                  |                 2 |              0.1188  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.252  | 5-10%                   |                 2 |              0.126   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2542 | <5%                     |                 2 |              0.1271  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2631 | <5%                     |                 2 |              0.13155 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2755 | <5%                     |                 2 |              0.13775 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2818 | >20%                    |                10 |              0.02818 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2847 | 10-15%                  |                 2 |              0.14235 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2985 | <5%                     |                 5 |              0.0597  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2993 | <5%                     |                 2 |              0.14965 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.301  | <5%                     |                 5 |              0.0602  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3033 | <5%                     |                 2 |              0.15165 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3059 | <5%                     |                10 |              0.03059 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3211 | <5%                     |                 2 |              0.16055 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.339  | 15-20%                  |                 5 |              0.0678  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3519 | 5-10%                   |                 2 |              0.17595 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3586 | <5%                     |                 2 |              0.1793  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3622 | <5%                     |                 2 |              0.1811  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3627 | 15-20%                  |                10 |              0.03627 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.364  | <5%                     |                 2 |              0.182   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3679 | 5-10%                   |                 5 |              0.07358 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3745 | >20%                    |                 5 |              0.0749  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.376  | <5%                     |                 2 |              0.188   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3808 | <5%                     |                 2 |              0.1904  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3844 | 10-15%                  |                 2 |              0.1922  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3852 | <5%                     |                 5 |              0.07704 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4032 | >20%                    |                 2 |              0.2016  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4115 | 5-10%                   |                 2 |              0.20575 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4137 | >20%                    |                 2 |              0.20685 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4139 | 5-10%                   |                 2 |              0.20695 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4157 | 15-20%                  |                 5 |              0.08314 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4165 | <5%                     |                 2 |              0.20825 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4234 | >20%                    |                10 |              0.04234 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.4433 | <5%                     |                 5 |              0.08866 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4497 | 5-10%                   |                 5 |              0.08994 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4547 | <5%                     |                 5 |              0.09094 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4558 | >20%                    |                 2 |              0.2279  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4581 | 5-10%                   |                 5 |              0.09162 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4624 | >20%                    |                 2 |              0.2312  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4638 | <5%                     |                 5 |              0.09276 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4654 | <5%                     |                 5 |              0.09308 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4692 | 10-15%                  |                 2 |              0.2346  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4747 | 15-20%                  |                 5 |              0.09494 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4837 | <5%                     |                 5 |              0.09674 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4925 | <5%                     |                10 |              0.04925 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4956 | 5-10%                   |                 5 |              0.09912 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.496  | >20%                    |                 2 |              0.248   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5021 | >20%                    |                 5 |              0.10042 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5041 | 10-15%                  |                 5 |              0.10082 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5131 | >20%                    |                 5 |              0.10262 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.5171 | <5%                     |                10 |              0.05171 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5197 | <5%                     |                 5 |              0.10394 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5254 | 15-20%                  |                 2 |              0.2627  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5257 | >20%                    |                 5 |              0.10514 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5461 | <5%                     |                 5 |              0.10922 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5468 | <5%                     |                 5 |              0.10936 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5729 | 15-20%                  |                 2 |              0.28645 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5838 | >20%                    |                 5 |              0.11676 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5841 | <5%                     |                 5 |              0.11682 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5947 | >20%                    |                 2 |              0.29735 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6044 | >20%                    |                 5 |              0.12088 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6055 | 10-15%                  |                10 |              0.06055 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6083 | >20%                    |                 5 |              0.12166 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.609  | >20%                    |                 5 |              0.1218  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.615  | 5-10%                   |                 5 |              0.123   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6237 | 5-10%                   |                10 |              0.06237 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6271 | 15-20%                  |                 2 |              0.31355 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6798 | >20%                    |                10 |              0.06798 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6938 | <5%                     |                10 |              0.06938 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7005 | >20%                    |                 2 |              0.35025 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7069 | <5%                     |                10 |              0.07069 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7265 | <5%                     |                 2 |              0.36325 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7384 | >20%                    |                10 |              0.07384 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.747  | <5%                     |                 5 |              0.1494  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.756  | 15-20%                  |                10 |              0.0756  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7626 | 15-20%                  |                10 |              0.07626 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7677 | 10-15%                  |                10 |              0.07677 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7803 | >20%                    |                 5 |              0.15606 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7865 | >20%                    |                 5 |              0.1573  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7988 | >20%                    |                10 |              0.07988 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8066 | <5%                     |                10 |              0.08066 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.821  | >20%                    |                10 |              0.0821  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8269 | 10-15%                  |                10 |              0.08269 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8313 | >20%                    |                10 |              0.08313 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8577 | >20%                    |                10 |              0.08577 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8685 | <5%                     |                10 |              0.08685 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.87   | 5-10%                   |                 5 |              0.174   |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8911 | >20%                    |                10 |              0.08911 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9233 | 5-10%                   |                 2 |              0.46165 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9321 | >20%                    |                10 |              0.09321 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9367 | 5-10%                   |                10 |              0.09367 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9393 | >20%                    |                 5 |              0.18786 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.946  | >20%                    |                 5 |              0.1892  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9499 | <5%                     |                 2 |              0.47495 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.963  | >20%                    |                10 |              0.0963  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9783 | <5%                     |                10 |              0.09783 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0225 | 5-10%                   |                10 |              0.10225 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0355 | 10-15%                  |                10 |              0.10355 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.044  | >20%                    |                10 |              0.1044  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0963 | 5-10%                   |                 5 |              0.21926 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1342 | >20%                    |                10 |              0.11342 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1393 | >20%                    |                10 |              0.11393 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1643 | 15-20%                  |                10 |              0.11643 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2241 | >20%                    |                10 |              0.12241 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2608 | <5%                     |                10 |              0.12608 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4472 | >20%                    |                10 |              0.14472 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7275 | <5%                     |                10 |              0.17275 |