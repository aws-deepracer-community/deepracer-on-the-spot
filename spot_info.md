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

Data correct as of 2026-08-10 02:05:21.769642, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1856 | >20%                    |                 2 |              0.0928  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1872 | >20%                    |                 2 |              0.0936  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2038 | >20%                    |                 2 |              0.1019  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2085 | >20%                    |                 2 |              0.10425 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2249 | 15-20%                  |                 2 |              0.11245 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2344 | >20%                    |                 2 |              0.1172  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2561 | >20%                    |                 5 |              0.05122 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2655 | >20%                    |                 2 |              0.13275 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2716 | >20%                    |                 2 |              0.1358  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2728 | 15-20%                  |                 2 |              0.1364  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2749 | 5-10%                   |                10 |              0.02749 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2763 | 10-15%                  |                 2 |              0.13815 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2838 | >20%                    |                 2 |              0.1419  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2997 | >20%                    |                 2 |              0.14985 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3071 | 15-20%                  |                 2 |              0.15355 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.312  | >20%                    |                 2 |              0.156   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3209 | >20%                    |                 5 |              0.06418 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3256 | 10-15%                  |                 2 |              0.1628  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.334  | 15-20%                  |                 2 |              0.167   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3371 | 5-10%                   |                10 |              0.03371 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3381 | 15-20%                  |                 5 |              0.06762 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3408 | >20%                    |                 5 |              0.06816 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3531 | >20%                    |                 5 |              0.07062 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.359  | >20%                    |                 2 |              0.1795  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3595 | >20%                    |                10 |              0.03595 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3719 | >20%                    |                10 |              0.03719 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3737 | <5%                     |                 2 |              0.18685 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3825 | >20%                    |                 5 |              0.0765  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.386  | >20%                    |                10 |              0.0386  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4054 | >20%                    |                10 |              0.04054 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4055 | 15-20%                  |                 2 |              0.20275 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4199 | >20%                    |                 2 |              0.20995 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4212 | >20%                    |                 2 |              0.2106  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4226 | <5%                     |                 2 |              0.2113  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4228 | >20%                    |                 2 |              0.2114  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4244 | 10-15%                  |                 2 |              0.2122  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4311 | >20%                    |                 2 |              0.21555 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4396 | 5-10%                   |                10 |              0.04396 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4425 | >20%                    |                 5 |              0.0885  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4434 | >20%                    |                10 |              0.04434 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4452 | 10-15%                  |                 2 |              0.2226  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4461 | >20%                    |                 5 |              0.08922 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4478 | >20%                    |                 5 |              0.08956 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.448  | >20%                    |                 2 |              0.224   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4574 | >20%                    |                 2 |              0.2287  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4663 | >20%                    |                 5 |              0.09326 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4669 | >20%                    |                 2 |              0.23345 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4675 | >20%                    |                 2 |              0.23375 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | >20%                    |                 5 |              0.09452 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4791 | 10-15%                  |                10 |              0.04791 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4874 | 15-20%                  |                 5 |              0.09748 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.497  | >20%                    |                 5 |              0.0994  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5081 | >20%                    |                 5 |              0.10162 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5103 | >20%                    |                 5 |              0.10206 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5125 | >20%                    |                 5 |              0.1025  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5151 | >20%                    |                 2 |              0.25755 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5367 | >20%                    |                 5 |              0.10734 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5403 | >20%                    |                 2 |              0.27015 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5411 | 5-10%                   |                 2 |              0.27055 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5457 | >20%                    |                 5 |              0.10914 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5596 | >20%                    |                10 |              0.05596 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5681 | <5%                     |                 2 |              0.28405 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5713 | >20%                    |                 2 |              0.28565 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5779 | >20%                    |                10 |              0.05779 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5795 | 10-15%                  |                 5 |              0.1159  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5831 | 15-20%                  |                10 |              0.05831 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5901 | >20%                    |                 5 |              0.11802 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5971 | >20%                    |                 5 |              0.11942 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5989 | >20%                    |                 2 |              0.29945 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6115 | >20%                    |                 2 |              0.30575 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6124 | >20%                    |                10 |              0.06124 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.617  | >20%                    |                 5 |              0.1234  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6254 | >20%                    |                 5 |              0.12508 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6257 | <5%                     |                 5 |              0.12514 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6268 | >20%                    |                 5 |              0.12536 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6295 | >20%                    |                 5 |              0.1259  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6455 | >20%                    |                 5 |              0.1291  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6483 | 5-10%                   |                 5 |              0.12966 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6506 | >20%                    |                 5 |              0.13012 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6543 | >20%                    |                 5 |              0.13086 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.659  | >20%                    |                 5 |              0.1318  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6606 | 15-20%                  |                 5 |              0.13212 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6634 | >20%                    |                 5 |              0.13268 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6784 | >20%                    |                10 |              0.06784 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6883 | >20%                    |                10 |              0.06883 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7021 | >20%                    |                 2 |              0.35105 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7022 | >20%                    |                 2 |              0.3511  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7057 | >20%                    |                10 |              0.07057 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7168 | >20%                    |                10 |              0.07168 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.736  |                         |                 2 |              0.368   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7651 | >20%                    |                 5 |              0.15302 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.77   | >20%                    |                10 |              0.077   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7742 | >20%                    |                 5 |              0.15484 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7972 | 10-15%                  |                 2 |              0.3986  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8004 |                         |                 5 |              0.16008 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8072 | <5%                     |                10 |              0.08072 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8089 | >20%                    |                10 |              0.08089 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8268 | >20%                    |                 2 |              0.4134  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8362 | >20%                    |                10 |              0.08362 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8428 | >20%                    |                 2 |              0.4214  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8559 | >20%                    |                10 |              0.08559 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8572 | 5-10%                   |                10 |              0.08572 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8606 | 15-20%                  |                10 |              0.08606 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8765 | 15-20%                  |                10 |              0.08765 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8818 | 10-15%                  |                 2 |              0.4409  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8819 | 15-20%                  |                10 |              0.08819 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8865 | >20%                    |                10 |              0.08865 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9048 | >20%                    |                 5 |              0.18096 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9113 | >20%                    |                 5 |              0.18226 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9125 | >20%                    |                10 |              0.09125 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9172 | 5-10%                   |                10 |              0.09172 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9192 | >20%                    |                10 |              0.09192 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.923  |                         |                 2 |              0.4615  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9255 | >20%                    |                10 |              0.09255 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9369 | >20%                    |                 5 |              0.18738 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9381 | >20%                    |                 5 |              0.18762 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9554 | >20%                    |                 5 |              0.19108 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.956  | >20%                    |                10 |              0.0956  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9893 | 15-20%                  |                10 |              0.09893 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9953 | >20%                    |                 5 |              0.19906 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0018 | >20%                    |                10 |              0.10018 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0174 | 15-20%                  |                10 |              0.10174 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0218 | 15-20%                  |                 2 |              0.5109  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0259 | >20%                    |                10 |              0.10259 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0306 | >20%                    |                10 |              0.10306 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0345 | >20%                    |                 2 |              0.51725 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0878 |                         |                10 |              0.10878 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0955 | >20%                    |                 5 |              0.2191  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1113 | >20%                    |                 2 |              0.55565 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1339 | >20%                    |                10 |              0.11339 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1798 | 15-20%                  |                10 |              0.11798 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2165 | 5-10%                   |                 2 |              0.60825 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2236 | >20%                    |                10 |              0.12236 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.239  | >20%                    |                 5 |              0.2478  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2648 | >20%                    |                10 |              0.12648 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2904 |                         |                 5 |              0.25808 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3135 | >20%                    |                 5 |              0.2627  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.346  | >20%                    |                 5 |              0.2692  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.3591 | >20%                    |                10 |              0.13591 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.37   | 10-15%                  |                 2 |              0.685   |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3738 | >20%                    |                10 |              0.13738 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4454 | >20%                    |                10 |              0.14454 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4835 | >20%                    |                10 |              0.14835 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.533  | 10-15%                  |                10 |              0.1533  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.542  | 15-20%                  |                 5 |              0.3084  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.6207 | >20%                    |                 5 |              0.32414 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6922 | >20%                    |                10 |              0.16922 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6995 | 5-10%                   |                 2 |              0.84975 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.723  | 5-10%                   |                10 |              0.1723  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.7573 | 5-10%                   |                 5 |              0.35146 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7963 | 15-20%                  |                10 |              0.17963 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8107 |                         |                10 |              0.18107 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8548 | >20%                    |                10 |              0.18548 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.1457 | 5-10%                   |                 2 |              1.07285 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.7916 | >20%                    |                 5 |              0.55832 |