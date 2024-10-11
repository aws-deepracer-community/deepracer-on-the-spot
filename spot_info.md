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

Data correct as of 2024-10-11 01:36:49.540324, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1052 | <5%                     |                 2 |              0.0526  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1427 | <5%                     |                 2 |              0.07135 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1811 | 15-20%                  |                 2 |              0.09055 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2056 | >20%                    |                 2 |              0.1028  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2233 | <5%                     |                 2 |              0.11165 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2242 | <5%                     |                 2 |              0.1121  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2286 | 10-15%                  |                 2 |              0.1143  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2297 | 15-20%                  |                 2 |              0.11485 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2303 | >20%                    |                 2 |              0.11515 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2315 | >20%                    |                 5 |              0.0463  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2354 | 10-15%                  |                 2 |              0.1177  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2443 | <5%                     |                 2 |              0.12215 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2575 | <5%                     |                 2 |              0.12875 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2661 | >20%                    |                 5 |              0.05322 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2748 | 5-10%                   |                 2 |              0.1374  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2777 | <5%                     |                 2 |              0.13885 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.2828 | <5%                     |                 2 |              0.1414  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2831 | 15-20%                  |                 2 |              0.14155 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2851 | <5%                     |                 2 |              0.14255 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2857 | 15-20%                  |                10 |              0.02857 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.291  | <5%                     |                 2 |              0.1455  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2962 | >20%                    |                 5 |              0.05924 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3012 | 5-10%                   |                 5 |              0.06024 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.31   | 5-10%                   |                 5 |              0.062   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3141 | 15-20%                  |                 2 |              0.15705 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.316  | 15-20%                  |                 5 |              0.0632  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3175 | 15-20%                  |                 2 |              0.15875 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3324 | <5%                     |                 2 |              0.1662  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.333  | >20%                    |                 5 |              0.0666  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3367 | >20%                    |                 2 |              0.16835 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.3489 | 5-10%                   |                 5 |              0.06978 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.35   | 5-10%                   |                 5 |              0.07    |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.357  | <5%                     |                 2 |              0.1785  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3611 | <5%                     |                 5 |              0.07222 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3618 | >20%                    |                 5 |              0.07236 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3776 | >20%                    |                 5 |              0.07552 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3904 | >20%                    |                 2 |              0.1952  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3914 | <5%                     |                 5 |              0.07828 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.399  | 5-10%                   |                 2 |              0.1995  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.408  | >20%                    |                10 |              0.0408  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4105 | <5%                     |                 5 |              0.0821  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4157 | 5-10%                   |                 2 |              0.20785 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4162 | >20%                    |                 2 |              0.2081  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4228 | 5-10%                   |                10 |              0.04228 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4298 | 5-10%                   |                10 |              0.04298 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4302 | <5%                     |                 2 |              0.2151  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4314 | 15-20%                  |                 5 |              0.08628 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4345 | >20%                    |                 2 |              0.21725 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4346 | 5-10%                   |                 2 |              0.2173  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.4369 | 5-10%                   |                 5 |              0.08738 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4372 | 10-15%                  |                 5 |              0.08744 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4423 | <5%                     |                 2 |              0.22115 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.449  | 10-15%                  |                 5 |              0.0898  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4529 | >20%                    |                 2 |              0.22645 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4547 | 15-20%                  |                 2 |              0.22735 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4568 | <5%                     |                 5 |              0.09136 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4651 | <5%                     |                 5 |              0.09302 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4763 | 5-10%                   |                10 |              0.04763 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.478  | 15-20%                  |                10 |              0.0478  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4846 | 5-10%                   |                10 |              0.04846 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4852 | <5%                     |                 5 |              0.09704 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4897 | >20%                    |                 2 |              0.24485 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4904 | 15-20%                  |                 5 |              0.09808 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4958 | >20%                    |                 2 |              0.2479  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4979 | 10-15%                  |                 5 |              0.09958 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5022 | <5%                     |                 5 |              0.10044 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5059 | >20%                    |                10 |              0.05059 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5072 | >20%                    |                 2 |              0.2536  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5138 | <5%                     |                 5 |              0.10276 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5177 | <5%                     |                 5 |              0.10354 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5227 | <5%                     |                 5 |              0.10454 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5498 | >20%                    |                 5 |              0.10996 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.569  | <5%                     |                10 |              0.0569  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5891 | >20%                    |                 5 |              0.11782 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5896 | 15-20%                  |                 5 |              0.11792 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5988 | >20%                    |                 2 |              0.2994  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.609  | >20%                    |                 5 |              0.1218  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6115 | >20%                    |                 5 |              0.1223  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6189 | 15-20%                  |                10 |              0.06189 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6291 | 15-20%                  |                 5 |              0.12582 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6319 | >20%                    |                 5 |              0.12638 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6326 | 5-10%                   |                 5 |              0.12652 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6571 | >20%                    |                10 |              0.06571 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6579 | <5%                     |                10 |              0.06579 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6623 | <5%                     |                10 |              0.06623 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6829 | >20%                    |                 2 |              0.34145 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6858 | <5%                     |                10 |              0.06858 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6892 | 15-20%                  |                10 |              0.06892 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6913 | >20%                    |                10 |              0.06913 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6931 | 5-10%                   |                10 |              0.06931 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7322 | >20%                    |                 5 |              0.14644 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.7459 | <5%                     |                10 |              0.07459 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7507 | >20%                    |                 2 |              0.37535 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7524 | >20%                    |                10 |              0.07524 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7708 | 15-20%                  |                10 |              0.07708 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7829 | 5-10%                   |                10 |              0.07829 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7841 | 10-15%                  |                 5 |              0.15682 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7932 | 10-15%                  |                10 |              0.07932 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8    | 5-10%                   |                10 |              0.08    |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8071 | 15-20%                  |                10 |              0.08071 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8302 | >20%                    |                10 |              0.08302 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8658 | <5%                     |                10 |              0.08658 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8764 | <5%                     |                 2 |              0.4382  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8961 | >20%                    |                 5 |              0.17922 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9028 | >20%                    |                10 |              0.09028 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9077 | >20%                    |                10 |              0.09077 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9181 | <5%                     |                10 |              0.09181 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9276 | 10-15%                  |                10 |              0.09276 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9847 | 10-15%                  |                 2 |              0.49235 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9868 | 5-10%                   |                10 |              0.09868 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9893 | >20%                    |                10 |              0.09893 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.007  | 10-15%                  |                 5 |              0.2014  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.023  | <5%                     |                10 |              0.1023  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0348 | >20%                    |                10 |              0.10348 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1027 | >20%                    |                10 |              0.11027 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1279 | >20%                    |                 5 |              0.22558 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1552 | >20%                    |                10 |              0.11552 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4957 | >20%                    |                10 |              0.14957 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5207 | 5-10%                   |                10 |              0.15207 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6018 | 5-10%                   |                10 |              0.16018 |