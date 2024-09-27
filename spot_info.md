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

Data correct as of 2024-09-27 01:37:12.269470, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.097  | <5%                     |                 2 |              0.0485  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1122 |                         |                 2 |              0.0561  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1234 |                         |                 2 |              0.0617  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1249 |                         |                 2 |              0.06245 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.136  | 5-10%                   |                 2 |              0.068   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.1428 |                         |                 2 |              0.0714  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1521 |                         |                 5 |              0.03042 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1684 |                         |                 5 |              0.03368 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1722 |                         |                 5 |              0.03444 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.195  |                         |                 5 |              0.039   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2028 | <5%                     |                 2 |              0.1014  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.204  | 15-20%                  |                 2 |              0.102   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2239 | 5-10%                   |                 2 |              0.11195 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2268 |                         |                10 |              0.02268 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.231  | <5%                     |                 2 |              0.1155  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | <5%                     |                 2 |              0.11705 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2386 | 15-20%                  |                 2 |              0.1193  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.241  | 15-20%                  |                 5 |              0.0482  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.258  |                         |                10 |              0.0258  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2605 |                         |                10 |              0.02605 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.267  | <5%                     |                 2 |              0.1335  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.267  | <5%                     |                 5 |              0.0534  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2713 | 15-20%                  |                 5 |              0.05426 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2737 | <5%                     |                 2 |              0.13685 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2819 | >20%                    |                10 |              0.02819 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2875 | 10-15%                  |                 2 |              0.14375 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2882 | <5%                     |                 2 |              0.1441  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.2926 |                         |                10 |              0.02926 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2928 | <5%                     |                 2 |              0.1464  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2962 | >20%                    |                 5 |              0.05924 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2997 | <5%                     |                 2 |              0.14985 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3082 | 5-10%                   |                 2 |              0.1541  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.338  | 15-20%                  |                10 |              0.0338  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3385 | <5%                     |                10 |              0.03385 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3477 | <5%                     |                 2 |              0.17385 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3485 | <5%                     |                 5 |              0.0697  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3524 | 10-15%                  |                 2 |              0.1762  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3571 | <5%                     |                 2 |              0.17855 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3663 | 5-10%                   |                 5 |              0.07326 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3667 | <5%                     |                 2 |              0.18335 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3811 | <5%                     |                 5 |              0.07622 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3815 | <5%                     |                10 |              0.03815 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3882 | <5%                     |                 2 |              0.1941  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3966 | >20%                    |                 2 |              0.1983  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.397  | 5-10%                   |                 5 |              0.0794  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4088 | >20%                    |                 2 |              0.2044  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4099 | 5-10%                   |                 2 |              0.20495 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4256 | <5%                     |                 2 |              0.2128  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4283 | 15-20%                  |                 5 |              0.08566 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4304 | >20%                    |                 2 |              0.2152  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4309 | >20%                    |                 5 |              0.08618 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4423 | <5%                     |                 2 |              0.22115 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.444  | <5%                     |                 5 |              0.0888  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4503 | >20%                    |                 2 |              0.22515 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4514 | <5%                     |                 5 |              0.09028 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4516 | 10-15%                  |                 2 |              0.2258  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4553 | 5-10%                   |                 5 |              0.09106 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4743 | <5%                     |                 5 |              0.09486 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4759 | <5%                     |                 5 |              0.09518 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4769 | 5-10%                   |                 5 |              0.09538 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4845 | 10-15%                  |                10 |              0.04845 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4848 | >20%                    |                 2 |              0.2424  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4861 | 15-20%                  |                 2 |              0.24305 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4862 | 15-20%                  |                 5 |              0.09724 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4984 | 5-10%                   |                 5 |              0.09968 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5077 | >20%                    |                 5 |              0.10154 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.515  | 10-15%                  |                 5 |              0.103   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5302 | <5%                     |                 5 |              0.10604 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5395 | <5%                     |                 5 |              0.1079  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5397 | 15-20%                  |                 2 |              0.26985 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5423 | <5%                     |                 5 |              0.10846 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5481 | >20%                    |                 5 |              0.10962 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5522 | 5-10%                   |                 5 |              0.11044 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.554  | >20%                    |                10 |              0.0554  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5607 | >20%                    |                 2 |              0.28035 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5885 | 5-10%                   |                 5 |              0.1177  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6025 | >20%                    |                 5 |              0.1205  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.611  | 15-20%                  |                 2 |              0.3055  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6155 | >20%                    |                 5 |              0.1231  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6172 | >20%                    |                10 |              0.06172 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6234 | >20%                    |                 5 |              0.12468 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6304 | >20%                    |                10 |              0.06304 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6524 | 5-10%                   |                10 |              0.06524 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.6753 | <5%                     |                10 |              0.06753 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6778 | >20%                    |                 5 |              0.13556 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6864 | <5%                     |                10 |              0.06864 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7137 | <5%                     |                10 |              0.07137 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7256 | >20%                    |                 2 |              0.3628  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7279 | >20%                    |                 5 |              0.14558 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7597 | 15-20%                  |                10 |              0.07597 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7708 | >20%                    |                 5 |              0.15416 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7726 | <5%                     |                10 |              0.07726 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7745 | 10-15%                  |                10 |              0.07745 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.781  | >20%                    |                10 |              0.0781  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7852 | 15-20%                  |                10 |              0.07852 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7885 | 10-15%                  |                10 |              0.07885 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8168 | 5-10%                   |                 2 |              0.4084  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8169 | >20%                    |                10 |              0.08169 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8223 | >20%                    |                10 |              0.08223 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.858  | <5%                     |                 2 |              0.429   |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8594 | >20%                    |                 5 |              0.17188 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8724 | >20%                    |                10 |              0.08724 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.874  | <5%                     |                10 |              0.0874  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8748 | >20%                    |                10 |              0.08748 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8824 | 5-10%                   |                10 |              0.08824 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9018 | >20%                    |                 5 |              0.18036 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9076 | >20%                    |                10 |              0.09076 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9086 | 5-10%                   |                10 |              0.09086 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9199 | <5%                     |                10 |              0.09199 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9359 | 5-10%                   |                 5 |              0.18718 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0207 | 5-10%                   |                10 |              0.10207 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0226 | >20%                    |                10 |              0.10226 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0283 | 10-15%                  |                10 |              0.10283 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0858 | <5%                     |                 2 |              0.5429  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.11   | >20%                    |                10 |              0.111   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1182 | 10-15%                  |                 5 |              0.22364 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1369 | >20%                    |                10 |              0.11369 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2016 | >20%                    |                10 |              0.12016 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3061 | 15-20%                  |                10 |              0.13061 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4663 | >20%                    |                10 |              0.14663 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8137 | 5-10%                   |                10 |              0.18137 |