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

Data correct as of 2026-09-12 03:54:06.188439, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.126  | >20%                    |                 2 |              0.063   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1811 | 15-20%                  |                 2 |              0.09055 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2068 | 15-20%                  |                 5 |              0.04136 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2156 | >20%                    |                 2 |              0.1078  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2198 | >20%                    |                 5 |              0.04396 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.235  | >20%                    |                 2 |              0.1175  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2365 | >20%                    |                 2 |              0.11825 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2556 | >20%                    |                 2 |              0.1278  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2762 | 15-20%                  |                 5 |              0.05524 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | >20%                    |                 2 |              0.1391  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2811 | 15-20%                  |                 2 |              0.14055 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2845 | >20%                    |                 2 |              0.14225 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3004 | >20%                    |                 2 |              0.1502  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3062 | >20%                    |                 2 |              0.1531  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3413 | 10-15%                  |                 2 |              0.17065 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.3498 |                         |                 5 |              0.06996 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3551 | >20%                    |                10 |              0.03551 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3618 | >20%                    |                 5 |              0.07236 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3673 | 15-20%                  |                 2 |              0.18365 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3701 | >20%                    |                 5 |              0.07402 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3703 | >20%                    |                 2 |              0.18515 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3829 | <5%                     |                 2 |              0.19145 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3829 | >20%                    |                 5 |              0.07658 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3858 | >20%                    |                 5 |              0.07716 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3868 | 10-15%                  |                 2 |              0.1934  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3897 | >20%                    |                 2 |              0.19485 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3897 | 10-15%                  |                10 |              0.03897 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.395  | >20%                    |                 2 |              0.1975  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4096 | >20%                    |                 5 |              0.08192 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4146 | >20%                    |                 5 |              0.08292 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.423  | >20%                    |                 2 |              0.2115  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4231 | >20%                    |                 2 |              0.21155 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4247 | 15-20%                  |                 2 |              0.21235 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4339 | >20%                    |                 2 |              0.21695 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4476 | >20%                    |                10 |              0.04476 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4564 | >20%                    |                10 |              0.04564 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4684 | >20%                    |                 5 |              0.09368 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4754 | 10-15%                  |                 2 |              0.2377  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4791 | >20%                    |                 5 |              0.09582 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4838 | >20%                    |                 5 |              0.09676 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4894 |                         |                 2 |              0.2447  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4944 | >20%                    |                 2 |              0.2472  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4999 | 15-20%                  |                 2 |              0.24995 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5011 | >20%                    |                 5 |              0.10022 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5043 | >20%                    |                 5 |              0.10086 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5057 | <5%                     |                 2 |              0.25285 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5094 | >20%                    |                 2 |              0.2547  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.514  | >20%                    |                 5 |              0.1028  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.524  | >20%                    |                10 |              0.0524  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.526  | >20%                    |                 5 |              0.1052  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.543  | >20%                    |                 5 |              0.1086  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5454 | >20%                    |                 2 |              0.2727  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5534 | >20%                    |                 2 |              0.2767  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5545 | >20%                    |                 5 |              0.1109  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.555  | 5-10%                   |                10 |              0.0555  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5754 | >20%                    |                 2 |              0.2877  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5835 | >20%                    |                 5 |              0.1167  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5985 | 10-15%                  |                 5 |              0.1197  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6042 | 5-10%                   |                10 |              0.06042 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6249 | >20%                    |                10 |              0.06249 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6254 | >20%                    |                 5 |              0.12508 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.626  | >20%                    |                 5 |              0.1252  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6279 | >20%                    |                 2 |              0.31395 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6331 | >20%                    |                 2 |              0.31655 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6372 | 10-15%                  |                 2 |              0.3186  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6403 | >20%                    |                 2 |              0.32015 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.641  | 5-10%                   |                 5 |              0.1282  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6427 | >20%                    |                 5 |              0.12854 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6464 | >20%                    |                 5 |              0.12928 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6602 | >20%                    |                10 |              0.06602 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6661 | >20%                    |                 5 |              0.13322 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6669 | 15-20%                  |                10 |              0.06669 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6801 | <5%                     |                 2 |              0.34005 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6845 | 5-10%                   |                 2 |              0.34225 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6852 | >20%                    |                 5 |              0.13704 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7106 | >20%                    |                10 |              0.07106 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7158 | >20%                    |                 5 |              0.14316 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7233 | >20%                    |                 5 |              0.14466 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7359 | 15-20%                  |                 5 |              0.14718 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7432 | >20%                    |                 5 |              0.14864 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.746  | >20%                    |                10 |              0.0746  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7514 | <5%                     |                10 |              0.07514 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.757  | 15-20%                  |                10 |              0.0757  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.777  | >20%                    |                 2 |              0.3885  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8241 | 15-20%                  |                10 |              0.08241 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8368 | >20%                    |                 5 |              0.16736 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8453 | >20%                    |                10 |              0.08453 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8595 | 15-20%                  |                 5 |              0.1719  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8645 | >20%                    |                 2 |              0.43225 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8674 | >20%                    |                 5 |              0.17348 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.869  | 10-15%                  |                 2 |              0.4345  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8712 | >20%                    |                10 |              0.08712 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.878  | 15-20%                  |                 2 |              0.439   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8895 | 5-10%                   |                10 |              0.08895 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.8903 | >20%                    |                 2 |              0.44515 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8919 | >20%                    |                10 |              0.08919 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9042 | >20%                    |                 5 |              0.18084 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9127 | <5%                     |                 5 |              0.18254 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9379 |                         |                 2 |              0.46895 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.955  | 10-15%                  |                 2 |              0.4775  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9675 | >20%                    |                10 |              0.09675 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9688 | >20%                    |                10 |              0.09688 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9813 | >20%                    |                10 |              0.09813 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9924 | >20%                    |                10 |              0.09924 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9964 | >20%                    |                10 |              0.09964 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9984 | 15-20%                  |                10 |              0.09984 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0106 | >20%                    |                 5 |              0.20212 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.023  | >20%                    |                10 |              0.1023  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0376 | 10-15%                  |                 2 |              0.5188  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.052  | 15-20%                  |                10 |              0.1052  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0915 | >20%                    |                 2 |              0.54575 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0975 | >20%                    |                10 |              0.10975 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1026 | >20%                    |                10 |              0.11026 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1057 | >20%                    |                 5 |              0.22114 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1162 | 5-10%                   |                10 |              0.11162 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1261 | >20%                    |                10 |              0.11261 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.1417 |                         |                10 |              0.11417 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1491 | >20%                    |                 5 |              0.22982 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1582 | 5-10%                   |                 2 |              0.5791  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.1793 | >20%                    |                 5 |              0.23586 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1834 |                         |                 2 |              0.5917  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1879 | >20%                    |                 5 |              0.23758 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1898 | >20%                    |                 5 |              0.23796 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1964 |                         |                 5 |              0.23928 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.211  | >20%                    |                10 |              0.1211  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.213  | >20%                    |                10 |              0.1213  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.2232 | >20%                    |                10 |              0.12232 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2585 |                         |                 5 |              0.2517  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3088 | >20%                    |                10 |              0.13088 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3293 | >20%                    |                10 |              0.13293 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3535 | 10-15%                  |                10 |              0.13535 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3577 | >20%                    |                10 |              0.13577 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3661 | >20%                    |                10 |              0.13661 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.384  | 15-20%                  |                10 |              0.1384  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.385  | >20%                    |                 2 |              0.6925  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4358 | 15-20%                  |                10 |              0.14358 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4724 | >20%                    |                 5 |              0.29448 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5079 | 5-10%                   |                 5 |              0.30158 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.537  | >20%                    |                10 |              0.1537  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5568 | >20%                    |                 2 |              0.7784  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6287 | >20%                    |                10 |              0.16287 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.6817 | >20%                    |                 5 |              0.33634 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.8048 |                         |                10 |              0.18048 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.8642 | >20%                    |                 5 |              0.37284 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.8771 | 5-10%                   |                 2 |              0.93855 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9128 |                         |                10 |              0.19128 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.9222 | 15-20%                  |                10 |              0.19222 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0126 | 5-10%                   |                 2 |              1.0063  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.12   | 15-20%                  |                 5 |              0.424   |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2057 | 5-10%                   |                10 |              0.22057 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.6521 | >20%                    |                10 |              0.26521 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6945 | >20%                    |                10 |              0.26945 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0112 | >20%                    |                10 |              0.30112 |