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

Data correct as of 2024-11-27 01:44:40.651706, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1204 | >20%                    |                 5 |              0.02408 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1691 | 10-15%                  |                 2 |              0.08455 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.1789 | >20%                    |                 5 |              0.03578 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2233 | 5-10%                   |                 2 |              0.11165 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 5-10%                   |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2265 | 5-10%                   |                 2 |              0.11325 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2268 | 15-20%                  |                 2 |              0.1134  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2296 | >20%                    |                 2 |              0.1148  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2397 | <5%                     |                 2 |              0.11985 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2478 | <5%                     |                 2 |              0.1239  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2541 | 15-20%                  |                 5 |              0.05082 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2649 | 10-15%                  |                 2 |              0.13245 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2706 | 5-10%                   |                 2 |              0.1353  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2808 | <5%                     |                 2 |              0.1404  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2962 | 10-15%                  |                 2 |              0.1481  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3062 | 5-10%                   |                 2 |              0.1531  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3076 | >20%                    |                 5 |              0.06152 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3216 | <5%                     |                 2 |              0.1608  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3282 | >20%                    |                 2 |              0.1641  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3301 | 5-10%                   |                 2 |              0.16505 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3375 | 15-20%                  |                 2 |              0.16875 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3385 | >20%                    |                 5 |              0.0677  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3385 | <5%                     |                 5 |              0.0677  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3397 | >20%                    |                 2 |              0.16985 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.34   | <5%                     |                10 |              0.034   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3467 | <5%                     |                 2 |              0.17335 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3507 | 15-20%                  |                 2 |              0.17535 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3555 | <5%                     |                 2 |              0.17775 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3574 | <5%                     |                 5 |              0.07148 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3592 | >20%                    |                 5 |              0.07184 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.37   | <5%                     |                10 |              0.037   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.377  | >20%                    |                 2 |              0.1885  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3774 | <5%                     |                 2 |              0.1887  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.3864 |                         |                 2 |              0.1932  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3876 | >20%                    |                 2 |              0.1938  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3929 | >20%                    |                10 |              0.03929 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.3963 | >20%                    |                10 |              0.03963 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4006 | 5-10%                   |                 2 |              0.2003  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4032 | 5-10%                   |                 2 |              0.2016  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4077 | <5%                     |                 2 |              0.20385 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4087 | 5-10%                   |                 2 |              0.20435 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4243 | 5-10%                   |                 5 |              0.08486 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4309 | 15-20%                  |                 5 |              0.08618 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4465 | <5%                     |                 2 |              0.22325 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4479 | 10-15%                  |                 2 |              0.22395 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.449  | 10-15%                  |                 5 |              0.0898  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4505 | 15-20%                  |                 5 |              0.0901  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4529 | >20%                    |                 2 |              0.22645 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4569 | >20%                    |                 2 |              0.22845 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.463  | 15-20%                  |                 5 |              0.0926  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4662 | <5%                     |                 5 |              0.09324 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4751 | 5-10%                   |                 2 |              0.23755 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4757 | 5-10%                   |                 2 |              0.23785 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4777 | <5%                     |                 5 |              0.09554 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4788 | 5-10%                   |                 5 |              0.09576 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4796 | 15-20%                  |                 5 |              0.09592 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4872 | <5%                     |                 2 |              0.2436  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.4924 |                         |                 5 |              0.09848 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4965 | 5-10%                   |                 5 |              0.0993  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5079 | 5-10%                   |                 2 |              0.25395 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5138 | 10-15%                  |                 2 |              0.2569  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5157 | 10-15%                  |                 2 |              0.25785 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5175 | <5%                     |                 5 |              0.1035  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5203 | >20%                    |                 5 |              0.10406 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5244 | <5%                     |                 5 |              0.10488 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5313 | >20%                    |                10 |              0.05313 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5346 | >20%                    |                 2 |              0.2673  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5354 | <5%                     |                 5 |              0.10708 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5463 | >20%                    |                 5 |              0.10926 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.547  | 10-15%                  |                 5 |              0.1094  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5475 | >20%                    |                 5 |              0.1095  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5507 | >20%                    |                 5 |              0.11014 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5512 | 5-10%                   |                 5 |              0.11024 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5537 | 10-15%                  |                10 |              0.05537 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5596 | 10-15%                  |                 5 |              0.11192 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5622 | 10-15%                  |                 5 |              0.11244 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5683 | 15-20%                  |                 2 |              0.28415 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5777 | >20%                    |                 5 |              0.11554 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5914 | >20%                    |                10 |              0.05914 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5934 | 10-15%                  |                10 |              0.05934 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6227 | 5-10%                   |                10 |              0.06227 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6313 | 5-10%                   |                 5 |              0.12626 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6716 | 5-10%                   |                10 |              0.06716 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.672  | >20%                    |                10 |              0.0672  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6744 | <5%                     |                 5 |              0.13488 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6763 | >20%                    |                10 |              0.06763 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6907 | >20%                    |                 2 |              0.34535 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7003 | <5%                     |                 5 |              0.14006 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7085 | 15-20%                  |                 5 |              0.1417  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7122 | 5-10%                   |                 5 |              0.14244 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7156 | 10-15%                  |                10 |              0.07156 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7327 | <5%                     |                 5 |              0.14654 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7349 | 15-20%                  |                 5 |              0.14698 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.736  | <5%                     |                 2 |              0.368   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7444 | 5-10%                   |                10 |              0.07444 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7519 | <5%                     |                 5 |              0.15038 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7678 | >20%                    |                10 |              0.07678 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      0.7694 |                         |                10 |              0.07694 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7754 | 5-10%                   |                10 |              0.07754 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7767 | <5%                     |                10 |              0.07767 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7835 | <5%                     |                 5 |              0.1567  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7863 | 5-10%                   |                10 |              0.07863 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7875 | 5-10%                   |                 5 |              0.1575  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8128 | 15-20%                  |                10 |              0.08128 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.83   | 10-15%                  |                10 |              0.083   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8304 | 5-10%                   |                10 |              0.08304 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8335 | 5-10%                   |                10 |              0.08335 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8512 | 10-15%                  |                10 |              0.08512 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8594 | >20%                    |                 5 |              0.17188 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8618 | 15-20%                  |                10 |              0.08618 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8793 | >20%                    |                10 |              0.08793 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8805 | <5%                     |                10 |              0.08805 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9205 | 5-10%                   |                10 |              0.09205 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9404 | 5-10%                   |                10 |              0.09404 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9475 | <5%                     |                10 |              0.09475 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9908 | 5-10%                   |                10 |              0.09908 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0033 | >20%                    |                10 |              0.10033 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0213 | 15-20%                  |                10 |              0.10213 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0278 | <5%                     |                10 |              0.10278 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0342 | 5-10%                   |                10 |              0.10342 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0403 | >20%                    |                10 |              0.10403 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0503 | <5%                     |                10 |              0.10503 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0944 | >20%                    |                10 |              0.10944 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.169  | 10-15%                  |                10 |              0.1169  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1749 | 15-20%                  |                10 |              0.11749 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3355 | >20%                    |                10 |              0.13355 |