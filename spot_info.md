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

Data correct as of 2026-06-28 04:14:00.786635, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1399 | >20%                    |                 2 |              0.06995 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1975 | 15-20%                  |                 2 |              0.09875 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2195 | >20%                    |                 2 |              0.10975 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2352 | >20%                    |                 2 |              0.1176  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.236  | 15-20%                  |                 5 |              0.0472  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2512 | >20%                    |                 2 |              0.1256  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2544 | >20%                    |                 2 |              0.1272  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2585 | >20%                    |                 2 |              0.12925 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2587 | 10-15%                  |                 2 |              0.12935 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2607 | >20%                    |                 2 |              0.13035 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2618 | >20%                    |                 2 |              0.1309  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2715 | 15-20%                  |                 2 |              0.13575 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2738 | >20%                    |                 2 |              0.1369  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2751 | 15-20%                  |                 2 |              0.13755 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2871 | >20%                    |                 2 |              0.14355 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2967 | 15-20%                  |                 5 |              0.05934 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2975 | 5-10%                   |                10 |              0.02975 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.319  | >20%                    |                 5 |              0.0638  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3254 | >20%                    |                 2 |              0.1627  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3272 | >20%                    |                 2 |              0.1636  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3298 | >20%                    |                 5 |              0.06596 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3316 | >20%                    |                 5 |              0.06632 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3389 | >20%                    |                 5 |              0.06778 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.352  | <5%                     |                 2 |              0.176   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3581 | >20%                    |                 5 |              0.07162 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3587 | >20%                    |                 5 |              0.07174 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3614 | 10-15%                  |                 2 |              0.1807  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3642 | >20%                    |                10 |              0.03642 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.371  | >20%                    |                10 |              0.0371  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3737 | 5-10%                   |                10 |              0.03737 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3815 | 5-10%                   |                10 |              0.03815 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3825 | 10-15%                  |                 2 |              0.19125 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3852 | >20%                    |                 5 |              0.07704 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3872 | >20%                    |                 2 |              0.1936  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.39   | >20%                    |                 2 |              0.195   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3922 | >20%                    |                 5 |              0.07844 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4085 | >20%                    |                 5 |              0.0817  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4171 | >20%                    |                 5 |              0.08342 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4203 | >20%                    |                 2 |              0.21015 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4204 | >20%                    |                 2 |              0.2102  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4292 | >20%                    |                10 |              0.04292 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4336 | >20%                    |                 5 |              0.08672 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4338 | 10-15%                  |                10 |              0.04338 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4404 | 10-15%                  |                 2 |              0.2202  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4419 | <5%                     |                 2 |              0.22095 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4447 | <5%                     |                 2 |              0.22235 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4482 | 15-20%                  |                 2 |              0.2241  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4499 | >20%                    |                 5 |              0.08998 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4518 | >20%                    |                 2 |              0.2259  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4522 | >20%                    |                 2 |              0.2261  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4574 | >20%                    |                 5 |              0.09148 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4771 | 15-20%                  |                 5 |              0.09542 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4795 | >20%                    |                 2 |              0.23975 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4798 | >20%                    |                 5 |              0.09596 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.492  | >20%                    |                 5 |              0.0984  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4926 | 15-20%                  |                 2 |              0.2463  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5103 | >20%                    |                10 |              0.05103 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5247 | >20%                    |                 5 |              0.10494 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5283 | >20%                    |                 2 |              0.26415 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5339 | >20%                    |                 5 |              0.10678 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5339 | 5-10%                   |                 2 |              0.26695 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5359 | 15-20%                  |                 5 |              0.10718 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5405 | 5-10%                   |                 5 |              0.1081  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5438 | >20%                    |                 2 |              0.2719  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.545  | >20%                    |                 5 |              0.109   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5516 | 10-15%                  |                 5 |              0.11032 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5525 | >20%                    |                 5 |              0.1105  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5538 | >20%                    |                 2 |              0.2769  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5596 | >20%                    |                10 |              0.05596 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.5603 | >20%                    |                 5 |              0.11206 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5876 | >20%                    |                 5 |              0.11752 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5886 | >20%                    |                10 |              0.05886 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5913 | 5-10%                   |                 2 |              0.29565 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6015 |                         |                 2 |              0.30075 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6033 | >20%                    |                 2 |              0.30165 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6073 | 15-20%                  |                 2 |              0.30365 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.608  | >20%                    |                 5 |              0.1216  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6086 | >20%                    |                10 |              0.06086 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6097 | >20%                    |                10 |              0.06097 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6129 | >20%                    |                10 |              0.06129 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6195 | <5%                     |                 5 |              0.1239  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6271 | >20%                    |                 5 |              0.12542 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6336 | >20%                    |                10 |              0.06336 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6346 | >20%                    |                 5 |              0.12692 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6352 | >20%                    |                 5 |              0.12704 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6548 | >20%                    |                10 |              0.06548 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6702 | 5-10%                   |                 5 |              0.13404 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6727 | >20%                    |                 2 |              0.33635 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.6767 |                         |                 2 |              0.33835 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6826 | >20%                    |                 5 |              0.13652 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6915 | 15-20%                  |                10 |              0.06915 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6977 | >20%                    |                 2 |              0.34885 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6983 | >20%                    |                 5 |              0.13966 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7072 | >20%                    |                 5 |              0.14144 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.7095 |                         |                10 |              0.07095 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7185 | >20%                    |                10 |              0.07185 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7187 | >20%                    |                 2 |              0.35935 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.72   | 15-20%                  |                10 |              0.072   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7214 | 10-15%                  |                 2 |              0.3607  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7229 | >20%                    |                 2 |              0.36145 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7262 | >20%                    |                10 |              0.07262 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7359 | >20%                    |                10 |              0.07359 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7398 | 5-10%                   |                10 |              0.07398 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7571 | >20%                    |                 5 |              0.15142 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7665 | >20%                    |                10 |              0.07665 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7734 | >20%                    |                 5 |              0.15468 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7886 | <5%                     |                10 |              0.07886 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8042 | >20%                    |                 2 |              0.4021  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8129 | >20%                    |                10 |              0.08129 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8238 | >20%                    |                10 |              0.08238 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8257 | >20%                    |                 5 |              0.16514 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8287 | >20%                    |                10 |              0.08287 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.835  | >20%                    |                10 |              0.0835  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8517 | 15-20%                  |                10 |              0.08517 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8602 | 5-10%                   |                10 |              0.08602 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8604 | 10-15%                  |                 2 |              0.4302  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.864  | >20%                    |                 5 |              0.1728  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8718 | >20%                    |                10 |              0.08718 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8789 | 15-20%                  |                10 |              0.08789 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.887  | >20%                    |                10 |              0.0887  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9042 | 10-15%                  |                 2 |              0.4521  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9053 | 15-20%                  |                10 |              0.09053 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9222 | >20%                    |                10 |              0.09222 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9262 | >20%                    |                 5 |              0.18524 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9417 | >20%                    |                 5 |              0.18834 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9434 | >20%                    |                 5 |              0.18868 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9444 |                         |                 5 |              0.18888 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9477 | >20%                    |                10 |              0.09477 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9502 | 5-10%                   |                10 |              0.09502 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.953  | >20%                    |                10 |              0.0953  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9631 | 5-10%                   |                 2 |              0.48155 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9857 | >20%                    |                10 |              0.09857 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9935 | >20%                    |                10 |              0.09935 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9939 | >20%                    |                 5 |              0.19878 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.998  | >20%                    |                10 |              0.0998  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0672 | >20%                    |                 2 |              0.5336  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0722 | 15-20%                  |                10 |              0.10722 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0944 | >20%                    |                 5 |              0.21888 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0991 | >20%                    |                 5 |              0.21982 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0993 | >20%                    |                 5 |              0.21986 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1148 | >20%                    |                10 |              0.11148 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1394 | >20%                    |                10 |              0.11394 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1653 |                         |                10 |              0.11653 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1696 |                         |                 5 |              0.23392 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2629 | >20%                    |                 5 |              0.25258 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3218 | 15-20%                  |                10 |              0.13218 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4265 | >20%                    |                10 |              0.14265 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4386 | 15-20%                  |                 5 |              0.28772 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5376 | 15-20%                  |                10 |              0.15376 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.5505 | >20%                    |                 5 |              0.3101  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.58   | 10-15%                  |                10 |              0.158   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.7115 | 5-10%                   |                 2 |              0.85575 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.1647 | >20%                    |                10 |              0.21647 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.496  | >20%                    |                10 |              0.2496  |