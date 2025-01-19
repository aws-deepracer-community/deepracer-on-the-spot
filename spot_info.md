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

Data correct as of 2025-01-19 01:41:04.505051, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.1923 | 10-15%                  |                 2 |              0.09615 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2214 | 5-10%                   |                 2 |              0.1107  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.234  | >20%                    |                 5 |              0.0468  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2356 | 15-20%                  |                 2 |              0.1178  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2389 | <5%                     |                 2 |              0.11945 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2399 | 5-10%                   |                 2 |              0.11995 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2475 | 5-10%                   |                 2 |              0.12375 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2614 | 5-10%                   |                 2 |              0.1307  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2821 | <5%                     |                 2 |              0.14105 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2826 | 10-15%                  |                 2 |              0.1413  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2969 | <5%                     |                 2 |              0.14845 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.2986 | >20%                    |                 2 |              0.1493  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2999 | <5%                     |                 5 |              0.05998 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3199 | 5-10%                   |                 2 |              0.15995 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3228 | 10-15%                  |                 2 |              0.1614  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3343 | >20%                    |                 2 |              0.16715 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3439 | 5-10%                   |                 5 |              0.06878 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3458 | <5%                     |                 2 |              0.1729  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3497 | 5-10%                   |                 2 |              0.17485 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3622 | >20%                    |                 2 |              0.1811  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3685 | <5%                     |                 2 |              0.18425 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3696 | <5%                     |                 2 |              0.1848  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3711 | 5-10%                   |                 5 |              0.07422 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3759 | <5%                     |                 5 |              0.07518 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3768 | <5%                     |                 2 |              0.1884  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3823 | 10-15%                  |                 5 |              0.07646 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3882 | <5%                     |                 2 |              0.1941  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3897 | >20%                    |                 2 |              0.19485 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3921 | 5-10%                   |                 2 |              0.19605 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4015 | <5%                     |                 2 |              0.20075 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4016 | >20%                    |                 2 |              0.2008  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4059 | 5-10%                   |                 2 |              0.20295 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4086 | >20%                    |                 5 |              0.08172 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4104 | 10-15%                  |                10 |              0.04104 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4173 | >20%                    |                 2 |              0.20865 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4177 | >20%                    |                10 |              0.04177 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4216 | 5-10%                   |                 2 |              0.2108  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4272 | <5%                     |                 2 |              0.2136  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4286 | 5-10%                   |                 5 |              0.08572 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4459 | 10-15%                  |                 2 |              0.22295 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4487 | 15-20%                  |                 5 |              0.08974 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4522 | <5%                     |                 5 |              0.09044 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4537 | 10-15%                  |                 5 |              0.09074 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4549 | <5%                     |                 5 |              0.09098 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4574 | 10-15%                  |                 5 |              0.09148 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.459  | <5%                     |                 5 |              0.0918  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4605 | >20%                    |                 5 |              0.0921  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4655 | <5%                     |                 2 |              0.23275 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4713 | 10-15%                  |                 5 |              0.09426 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4717 | >20%                    |                 5 |              0.09434 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4742 | 5-10%                   |                 5 |              0.09484 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4743 | <5%                     |                 5 |              0.09486 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4873 | 15-20%                  |                 2 |              0.24365 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4891 | <5%                     |                 5 |              0.09782 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4914 | <5%                     |                 2 |              0.2457  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4969 | <5%                     |                 2 |              0.24845 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4995 | 10-15%                  |                10 |              0.04995 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5073 | <5%                     |                 2 |              0.25365 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5122 | <5%                     |                 5 |              0.10244 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5147 | <5%                     |                 5 |              0.10294 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5178 | >20%                    |                10 |              0.05178 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5182 | <5%                     |                 5 |              0.10364 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5218 | 5-10%                   |                 2 |              0.2609  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5223 | >20%                    |                 2 |              0.26115 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.528  | 5-10%                   |                 5 |              0.1056  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5384 | 5-10%                   |                 5 |              0.10768 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5403 | 15-20%                  |                10 |              0.05403 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5452 | >20%                    |                 5 |              0.10904 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5477 | >20%                    |                 5 |              0.10954 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.549  | >20%                    |                 5 |              0.1098  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5545 | <5%                     |                 5 |              0.1109  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5565 | 5-10%                   |                 5 |              0.1113  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5691 | 5-10%                   |                 5 |              0.11382 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5751 | <5%                     |                 5 |              0.11502 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5781 | 15-20%                  |                 2 |              0.28905 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5785 | 15-20%                  |                 2 |              0.28925 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5801 | 5-10%                   |                 5 |              0.11602 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6036 | <5%                     |                 5 |              0.12072 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6186 | >20%                    |                 2 |              0.3093  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6331 | 5-10%                   |                10 |              0.06331 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.644  | 5-10%                   |                10 |              0.0644  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6634 | <5%                     |                 5 |              0.13268 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.67   | >20%                    |                10 |              0.067   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6839 | <5%                     |                10 |              0.06839 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6854 | >20%                    |                 5 |              0.13708 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6874 | >20%                    |                10 |              0.06874 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.688  | >20%                    |                 5 |              0.1376  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6912 | >20%                    |                10 |              0.06912 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6928 | >20%                    |                10 |              0.06928 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6994 | 10-15%                  |                 5 |              0.13988 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7195 | <5%                     |                 2 |              0.35975 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7329 | 5-10%                   |                 2 |              0.36645 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7368 | 5-10%                   |                 5 |              0.14736 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7374 | 15-20%                  |                10 |              0.07374 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7403 | 10-15%                  |                10 |              0.07403 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7451 | 15-20%                  |                 2 |              0.37255 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7492 | <5%                     |                10 |              0.07492 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7498 | 5-10%                   |                 5 |              0.14996 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7562 | >20%                    |                 5 |              0.15124 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7621 | 10-15%                  |                10 |              0.07621 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7625 | 10-15%                  |                10 |              0.07625 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7792 | >20%                    |                 5 |              0.15584 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.785  | 5-10%                   |                10 |              0.0785  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7909 | >20%                    |                10 |              0.07909 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7927 | 5-10%                   |                10 |              0.07927 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7975 | >20%                    |                 5 |              0.1595  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8051 | 15-20%                  |                10 |              0.08051 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8081 | 5-10%                   |                10 |              0.08081 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8155 | 15-20%                  |                10 |              0.08155 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.821  | 10-15%                  |                10 |              0.0821  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8719 | 5-10%                   |                10 |              0.08719 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8734 | <5%                     |                10 |              0.08734 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8857 | <5%                     |                10 |              0.08857 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8912 | 5-10%                   |                10 |              0.08912 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8912 | >20%                    |                10 |              0.08912 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9183 | <5%                     |                10 |              0.09183 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.93   | <5%                     |                10 |              0.093   |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9374 | 5-10%                   |                 5 |              0.18748 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9543 | <5%                     |                10 |              0.09543 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9597 | 10-15%                  |                10 |              0.09597 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9597 | <5%                     |                10 |              0.09597 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0156 | >20%                    |                10 |              0.10156 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0223 | <5%                     |                10 |              0.10223 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0228 | 5-10%                   |                 2 |              0.5114  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0275 | 10-15%                  |                 5 |              0.2055  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0443 | 5-10%                   |                10 |              0.10443 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0636 | <5%                     |                10 |              0.10636 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0895 | 15-20%                  |                10 |              0.10895 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1061 | 5-10%                   |                 5 |              0.22122 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1363 | 15-20%                  |                 2 |              0.56815 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1637 | 10-15%                  |                10 |              0.11637 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2107 | 10-15%                  |                10 |              0.12107 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2591 | >20%                    |                10 |              0.12591 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4223 | 5-10%                   |                10 |              0.14223 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.475  | 10-15%                  |                10 |              0.1475  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4872 | 5-10%                   |                10 |              0.14872 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5153 | 15-20%                  |                 5 |              0.30306 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.095  | 10-15%                  |                10 |              0.2095  |