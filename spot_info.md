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

Data correct as of 2025-01-13 01:42:26.157749, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2158 | <5%                     |                 2 |              0.1079  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2278 | 15-20%                  |                 2 |              0.1139  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2285 | 5-10%                   |                 2 |              0.11425 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2363 | 15-20%                  |                 2 |              0.11815 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.237  | 10-15%                  |                 2 |              0.1185  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2392 | <5%                     |                 2 |              0.1196  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2523 | 10-15%                  |                 2 |              0.12615 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2595 | >20%                    |                 5 |              0.0519  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2626 | 5-10%                   |                 2 |              0.1313  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2838 | <5%                     |                 2 |              0.1419  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2884 | 5-10%                   |                 2 |              0.1442  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2939 | 5-10%                   |                 2 |              0.14695 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2968 | <5%                     |                 2 |              0.1484  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3061 | 10-15%                  |                 2 |              0.15305 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3111 | >20%                    |                 2 |              0.15555 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3184 | 5-10%                   |                 2 |              0.1592  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3279 | <5%                     |                 5 |              0.06558 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3395 | 5-10%                   |                 5 |              0.0679  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3403 | <5%                     |                 2 |              0.17015 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3413 | <5%                     |                 2 |              0.17065 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3646 | >20%                    |                 2 |              0.1823  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3651 | <5%                     |                 2 |              0.18255 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3662 | <5%                     |                 5 |              0.07324 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3716 | 10-15%                  |                 2 |              0.1858  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3722 | <5%                     |                 5 |              0.07444 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3747 | 5-10%                   |                 2 |              0.18735 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3771 | 5-10%                   |                 5 |              0.07542 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3832 | >20%                    |                 2 |              0.1916  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3887 | 10-15%                  |                 5 |              0.07774 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3893 | <5%                     |                 2 |              0.19465 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4011 | 5-10%                   |                 2 |              0.20055 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4022 | 5-10%                   |                 2 |              0.2011  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4029 | >20%                    |                10 |              0.04029 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4075 | >20%                    |                 2 |              0.20375 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4086 | 15-20%                  |                10 |              0.04086 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4091 | 10-15%                  |                 2 |              0.20455 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4153 | 5-10%                   |                 5 |              0.08306 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.418  | <5%                     |                 2 |              0.209   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4185 | 5-10%                   |                 2 |              0.20925 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4213 | 5-10%                   |                 5 |              0.08426 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4275 | >20%                    |                 2 |              0.21375 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4294 | 5-10%                   |                 2 |              0.2147  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4303 | >20%                    |                10 |              0.04303 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4403 | >20%                    |                 5 |              0.08806 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4558 | >20%                    |                 5 |              0.09116 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4591 | 15-20%                  |                 5 |              0.09182 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4636 | <5%                     |                 5 |              0.09272 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4643 | <5%                     |                 2 |              0.23215 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.47   | <5%                     |                 2 |              0.235   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4754 | 10-15%                  |                 5 |              0.09508 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.477  | 5-10%                   |                 5 |              0.0954  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4802 | 10-15%                  |                 5 |              0.09604 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4821 | 15-20%                  |                 2 |              0.24105 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4829 | <5%                     |                 5 |              0.09658 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4893 | 5-10%                   |                 2 |              0.24465 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4916 | 15-20%                  |                 5 |              0.09832 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4952 | <5%                     |                 5 |              0.09904 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4983 | <5%                     |                 2 |              0.24915 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5073 | >20%                    |                 5 |              0.10146 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5076 | <5%                     |                 2 |              0.2538  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5129 | <5%                     |                 5 |              0.10258 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5153 | <5%                     |                 5 |              0.10306 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5163 | <5%                     |                 5 |              0.10326 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5365 | >20%                    |                 5 |              0.1073  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5367 | >20%                    |                 5 |              0.10734 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5369 | 15-20%                  |                 2 |              0.26845 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5463 | 5-10%                   |                 5 |              0.10926 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5482 | >20%                    |                 5 |              0.10964 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.55   | 5-10%                   |                 5 |              0.11    |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5562 | 10-15%                  |                 5 |              0.11124 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5606 | 10-15%                  |                 5 |              0.11212 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.569  | 15-20%                  |                 2 |              0.2845  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5694 | 5-10%                   |                 5 |              0.11388 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.574  | 5-10%                   |                 5 |              0.1148  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5867 | <5%                     |                 5 |              0.11734 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5905 | 15-20%                  |                 2 |              0.29525 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.594  | 5-10%                   |                 5 |              0.1188  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5982 | 10-15%                  |                10 |              0.05982 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6118 | 10-15%                  |                10 |              0.06118 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6179 | 5-10%                   |                10 |              0.06179 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.635  | 5-10%                   |                10 |              0.0635  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6379 | >20%                    |                 2 |              0.31895 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6657 | 15-20%                  |                10 |              0.06657 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6662 | <5%                     |                 5 |              0.13324 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6738 | >20%                    |                10 |              0.06738 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6938 | >20%                    |                 5 |              0.13876 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7026 | >20%                    |                10 |              0.07026 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7126 | <5%                     |                 5 |              0.14252 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7151 | <5%                     |                10 |              0.07151 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7197 | 15-20%                  |                 2 |              0.35985 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7297 | >20%                    |                10 |              0.07297 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7321 | 15-20%                  |                 5 |              0.14642 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7322 | <5%                     |                10 |              0.07322 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7338 | 15-20%                  |                 5 |              0.14676 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7366 | 10-15%                  |                10 |              0.07366 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.754  | >20%                    |                 5 |              0.1508  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.756  | 5-10%                   |                 2 |              0.378   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7765 | >20%                    |                10 |              0.07765 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7836 | >20%                    |                10 |              0.07836 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7924 | >20%                    |                 5 |              0.15848 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7992 | <5%                     |                 2 |              0.3996  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8133 | >20%                    |                 5 |              0.16266 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8146 | 15-20%                  |                10 |              0.08146 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8178 | 10-15%                  |                10 |              0.08178 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8209 | <5%                     |                10 |              0.08209 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8406 | <5%                     |                10 |              0.08406 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8447 | >20%                    |                10 |              0.08447 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8453 | 15-20%                  |                10 |              0.08453 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8554 | 5-10%                   |                10 |              0.08554 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8694 | 5-10%                   |                 5 |              0.17388 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8697 | 10-15%                  |                10 |              0.08697 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8703 | <5%                     |                10 |              0.08703 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8724 | 5-10%                   |                10 |              0.08724 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8789 | 5-10%                   |                10 |              0.08789 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8835 | 15-20%                  |                10 |              0.08835 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.905  | <5%                     |                10 |              0.0905  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9075 | <5%                     |                10 |              0.09075 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9297 | <5%                     |                10 |              0.09297 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9558 | <5%                     |                 2 |              0.4779  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.984  | >20%                    |                10 |              0.0984  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9929 | 10-15%                  |                 5 |              0.19858 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9953 | 5-10%                   |                10 |              0.09953 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0001 | 5-10%                   |                10 |              0.10001 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0142 | <5%                     |                10 |              0.10142 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0188 | 10-15%                  |                 5 |              0.20376 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.042  | <5%                     |                10 |              0.1042  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0424 | <5%                     |                10 |              0.10424 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0742 | 15-20%                  |                 2 |              0.5371  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.087  | 5-10%                   |                 5 |              0.2174  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0993 | >20%                    |                10 |              0.10993 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.202  | 10-15%                  |                10 |              0.1202  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2725 | >20%                    |                10 |              0.12725 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4248 | 5-10%                   |                10 |              0.14248 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4259 | 10-15%                  |                10 |              0.14259 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5004 | 5-10%                   |                10 |              0.15004 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5266 | 15-20%                  |                 5 |              0.30532 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5445 | <5%                     |                10 |              0.15445 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0601 | 10-15%                  |                10 |              0.20601 |