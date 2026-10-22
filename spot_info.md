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

Data correct as of 2026-10-22 03:59:56.652147, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0897 | >20%                    |                 2 |              0.04485 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1503 | 15-20%                  |                 5 |              0.03006 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1532 | 15-20%                  |                 2 |              0.0766  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1767 | 10-15%                  |                 2 |              0.08835 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1805 | >20%                    |                 5 |              0.0361  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1954 | >20%                    |                 2 |              0.0977  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2388 | >20%                    |                 2 |              0.1194  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.25   | >20%                    |                 2 |              0.125   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2686 | >20%                    |                 5 |              0.05372 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.269  | >20%                    |                 2 |              0.1345  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.277  | >20%                    |                 5 |              0.0554  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3006 | >20%                    |                 2 |              0.1503  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3041 | >20%                    |                 2 |              0.15205 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3045 | >20%                    |                 2 |              0.15225 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.307  | >20%                    |                 2 |              0.1535  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3192 | 15-20%                  |                 2 |              0.1596  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3202 | >20%                    |                 2 |              0.1601  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3595 | >20%                    |                 2 |              0.17975 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3621 | >20%                    |                 5 |              0.07242 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3659 | 10-15%                  |                 2 |              0.18295 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3733 | >20%                    |                10 |              0.03733 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3759 | 15-20%                  |                 2 |              0.18795 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3783 | >20%                    |                 5 |              0.07566 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3812 | 15-20%                  |                 2 |              0.1906  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.392  | >20%                    |                 5 |              0.0784  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3927 | >20%                    |                 5 |              0.07854 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.395  | <5%                     |                 2 |              0.1975  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3972 | >20%                    |                 2 |              0.1986  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4014 | >20%                    |                 2 |              0.2007  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4157 | >20%                    |                10 |              0.04157 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4226 | >20%                    |                 5 |              0.08452 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4283 | >20%                    |                 5 |              0.08566 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4326 | >20%                    |                 2 |              0.2163  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4351 | >20%                    |                 5 |              0.08702 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.446  | <5%                     |                10 |              0.0446  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | >20%                    |                 5 |              0.09396 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4713 | >20%                    |                 5 |              0.09426 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.48   | 10-15%                  |                 2 |              0.24    |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4807 | >20%                    |                 2 |              0.24035 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4815 | >20%                    |                 2 |              0.24075 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4896 | >20%                    |                 2 |              0.2448  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4905 | >20%                    |                 2 |              0.24525 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4929 | >20%                    |                 5 |              0.09858 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4938 | >20%                    |                 5 |              0.09876 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5001 | 5-10%                   |                10 |              0.05001 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5191 | >20%                    |                 5 |              0.10382 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5213 |                         |                 2 |              0.26065 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.526  |                         |                10 |              0.0526  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.536  | >20%                    |                10 |              0.0536  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5437 | 5-10%                   |                10 |              0.05437 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5473 | 15-20%                  |                 2 |              0.27365 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5478 | >20%                    |                 2 |              0.2739  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5548 | >20%                    |                 5 |              0.11096 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5617 | >20%                    |                10 |              0.05617 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5639 | >20%                    |                 2 |              0.28195 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5662 | >20%                    |                 2 |              0.2831  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5716 | >20%                    |                 5 |              0.11432 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.577  | >20%                    |                 5 |              0.1154  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5872 | 10-15%                  |                 5 |              0.11744 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6014 | >20%                    |                 2 |              0.3007  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6169 | >20%                    |                 5 |              0.12338 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6177 | 10-15%                  |                 2 |              0.30885 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6405 | >20%                    |                 5 |              0.1281  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6409 | <5%                     |                 2 |              0.32045 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6554 | >20%                    |                 2 |              0.3277  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6575 | >20%                    |                10 |              0.06575 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6638 | 5-10%                   |                 2 |              0.3319  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6764 | <5%                     |                 2 |              0.3382  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6775 | >20%                    |                 5 |              0.1355  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6828 | >20%                    |                 5 |              0.13656 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6851 | >20%                    |                 5 |              0.13702 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6979 | >20%                    |                 5 |              0.13958 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7053 | >20%                    |                 5 |              0.14106 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7077 | 15-20%                  |                 2 |              0.35385 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7339 | 15-20%                  |                 5 |              0.14678 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7444 | >20%                    |                 5 |              0.14888 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7504 | >20%                    |                10 |              0.07504 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7663 | 15-20%                  |                10 |              0.07663 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7779 | 10-15%                  |                10 |              0.07779 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.779  | >20%                    |                 5 |              0.1558  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7935 | >20%                    |                 5 |              0.1587  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7972 | 15-20%                  |                10 |              0.07972 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7978 | 15-20%                  |                10 |              0.07978 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8025 | >20%                    |                10 |              0.08025 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8114 | >20%                    |                10 |              0.08114 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8179 | 5-10%                   |                10 |              0.08179 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8357 | >20%                    |                10 |              0.08357 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8408 | >20%                    |                10 |              0.08408 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8433 | >20%                    |                 2 |              0.42165 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8506 | 15-20%                  |                 5 |              0.17012 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8539 | 10-15%                  |                 2 |              0.42695 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8606 | 10-15%                  |                 2 |              0.4303  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8904 | >20%                    |                10 |              0.08904 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8924 | >20%                    |                 5 |              0.17848 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8979 | >20%                    |                 5 |              0.17958 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9006 | >20%                    |                 5 |              0.18012 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9011 | >20%                    |                10 |              0.09011 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9093 | <5%                     |                 5 |              0.18186 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.9139 | 5-10%                   |                 5 |              0.18278 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9148 | >20%                    |                 5 |              0.18296 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9373 | >20%                    |                10 |              0.09373 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9621 | >20%                    |                10 |              0.09621 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9888 | >20%                    |                10 |              0.09888 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9915 | >20%                    |                 5 |              0.1983  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9965 | 15-20%                  |                10 |              0.09965 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.9989 |                         |                 5 |              0.19978 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0081 | >20%                    |                10 |              0.10081 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.014  | >20%                    |                10 |              0.1014  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0272 | 15-20%                  |                10 |              0.10272 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0316 | >20%                    |                10 |              0.10316 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0427 | >20%                    |                 5 |              0.20854 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0858 | >20%                    |                 2 |              0.5429  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1146 | >20%                    |                 5 |              0.22292 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1177 | 5-10%                   |                10 |              0.11177 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1997 | >20%                    |                10 |              0.11997 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.2007 | >20%                    |                10 |              0.12007 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2023 | 15-20%                  |                10 |              0.12023 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.2037 | >20%                    |                10 |              0.12037 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2058 | >20%                    |                10 |              0.12058 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.2341 | >20%                    |                 5 |              0.24682 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3396 |                         |                 5 |              0.26792 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.3423 | >20%                    |                 5 |              0.26846 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.359  | 15-20%                  |                10 |              0.1359  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3794 | >20%                    |                10 |              0.13794 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3844 | 10-15%                  |                10 |              0.13844 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.3913 |                         |                 2 |              0.69565 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3933 | >20%                    |                10 |              0.13933 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.4034 | >20%                    |                 2 |              0.7017  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4332 | >20%                    |                 5 |              0.28664 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4562 | >20%                    |                10 |              0.14562 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4619 | 5-10%                   |                 2 |              0.73095 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5039 | 5-10%                   |                 5 |              0.30078 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5481 |                         |                 2 |              0.77405 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.5758 | >20%                    |                 2 |              0.7879  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5784 |                         |                10 |              0.15784 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5904 | 10-15%                  |                 2 |              0.7952  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.6048 | >20%                    |                 2 |              0.8024  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6558 | >20%                    |                10 |              0.16558 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6886 | >20%                    |                10 |              0.16886 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6969 | >20%                    |                10 |              0.16969 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.6972 | 5-10%                   |                 2 |              0.8486  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7318 | >20%                    |                 5 |              0.34636 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.9377 | 15-20%                  |                10 |              0.19377 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.9619 | >20%                    |                10 |              0.19619 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0897 | 15-20%                  |                 5 |              0.41794 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2215 | 5-10%                   |                 2 |              1.11075 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2304 | 5-10%                   |                10 |              0.22304 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.2751 | >20%                    |                 5 |              0.45502 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      2.2818 |                         |                 5 |              0.45636 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.5317 |                         |                10 |              0.25317 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5749 | >20%                    |                10 |              0.25749 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0612 | >20%                    |                10 |              0.30612 |