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

Data correct as of 2025-01-09 02:05:11.726632, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1286 | 10-15%                  |                 2 |              0.0643  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.225  | 10-15%                  |                 2 |              0.1125  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2308 | 5-10%                   |                 2 |              0.1154  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.235  | 15-20%                  |                 2 |              0.1175  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.236  | 5-10%                   |                 2 |              0.118   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.242  | <5%                     |                 2 |              0.121   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.243  | <5%                     |                 2 |              0.1215  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2443 | 15-20%                  |                 2 |              0.12215 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2519 | 10-15%                  |                 2 |              0.12595 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2579 | 5-10%                   |                 2 |              0.12895 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2848 | <5%                     |                 2 |              0.1424  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.286  | >20%                    |                 5 |              0.0572  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2925 | >20%                    |                 2 |              0.14625 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2925 | <5%                     |                 2 |              0.14625 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3002 | 10-15%                  |                 2 |              0.1501  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3018 | 10-15%                  |                 2 |              0.1509  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3025 | 5-10%                   |                 2 |              0.15125 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3028 | <5%                     |                 5 |              0.06056 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.304  | <5%                     |                 5 |              0.0608  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3214 | 5-10%                   |                 2 |              0.1607  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3282 | 5-10%                   |                 5 |              0.06564 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3334 | 5-10%                   |                 5 |              0.06668 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3352 | <5%                     |                 2 |              0.1676  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3467 | >20%                    |                10 |              0.03467 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3536 | >20%                    |                10 |              0.03536 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3589 | <5%                     |                 2 |              0.17945 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.365  | <5%                     |                 2 |              0.1825  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3653 | 5-10%                   |                 2 |              0.18265 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3659 | 5-10%                   |                 5 |              0.07318 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3703 | >20%                    |                 2 |              0.18515 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3738 | <5%                     |                 5 |              0.07476 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3764 | <5%                     |                 5 |              0.07528 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3784 | >20%                    |                 2 |              0.1892  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3893 | 15-20%                  |                 5 |              0.07786 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3973 | 10-15%                  |                 5 |              0.07946 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3989 | 5-10%                   |                 2 |              0.19945 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.399  | 5-10%                   |                 2 |              0.1995  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3995 | >20%                    |                 2 |              0.19975 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.403  | <5%                     |                 2 |              0.2015  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4088 | <5%                     |                 2 |              0.2044  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4184 | >20%                    |                 2 |              0.2092  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4198 | 5-10%                   |                 5 |              0.08396 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4201 | 10-15%                  |                 2 |              0.21005 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4284 | 5-10%                   |                 2 |              0.2142  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4297 | 5-10%                   |                 2 |              0.21485 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4521 | 15-20%                  |                10 |              0.04521 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4524 | <5%                     |                 2 |              0.2262  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4546 | 5-10%                   |                10 |              0.04546 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.457  | >20%                    |                 5 |              0.0914  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4646 | <5%                     |                 5 |              0.09292 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4648 | <5%                     |                 2 |              0.2324  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4657 | 5-10%                   |                 2 |              0.23285 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4738 | 5-10%                   |                 5 |              0.09476 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4744 | 10-15%                  |                 5 |              0.09488 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4747 | 10-15%                  |                 5 |              0.09494 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4762 | <5%                     |                 5 |              0.09524 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4844 | 15-20%                  |                 2 |              0.2422  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4886 | >20%                    |                 5 |              0.09772 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4909 | <5%                     |                 2 |              0.24545 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4972 | 10-15%                  |                10 |              0.04972 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4984 | 15-20%                  |                 5 |              0.09968 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4985 | >20%                    |                 5 |              0.0997  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5014 | <5%                     |                 5 |              0.10028 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5018 | <5%                     |                 5 |              0.10036 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5106 | <5%                     |                 2 |              0.2553  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5128 | <5%                     |                 5 |              0.10256 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5189 | <5%                     |                 5 |              0.10378 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5208 | 15-20%                  |                 2 |              0.2604  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.533  | >20%                    |                 5 |              0.1066  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5361 | 5-10%                   |                 5 |              0.10722 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5413 | >20%                    |                 5 |              0.10826 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5542 | >20%                    |                 5 |              0.11084 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5572 | 5-10%                   |                 5 |              0.11144 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5577 | 5-10%                   |                 5 |              0.11154 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5599 | 10-15%                  |                 5 |              0.11198 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.567  | 15-20%                  |                 2 |              0.2835  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5697 | 5-10%                   |                 5 |              0.11394 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5767 | 10-15%                  |                 5 |              0.11534 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.578  | 5-10%                   |                 5 |              0.1156  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5884 | 15-20%                  |                 2 |              0.2942  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5897 | <5%                     |                 5 |              0.11794 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.602  | 10-15%                  |                10 |              0.0602  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6277 | 5-10%                   |                10 |              0.06277 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6615 | 5-10%                   |                10 |              0.06615 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6713 | <5%                     |                 5 |              0.13426 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6721 | >20%                    |                 5 |              0.13442 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6725 | 15-20%                  |                10 |              0.06725 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6728 | >20%                    |                10 |              0.06728 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6732 | >20%                    |                 2 |              0.3366  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7096 | 15-20%                  |                 2 |              0.3548  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7134 | 15-20%                  |                 5 |              0.14268 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7143 | 15-20%                  |                 5 |              0.14286 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7245 | >20%                    |                10 |              0.07245 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.729  | <5%                     |                 5 |              0.1458  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.739  | 5-10%                   |                 2 |              0.3695  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7418 | 10-15%                  |                10 |              0.07418 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7423 | >20%                    |                 5 |              0.14846 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7423 | <5%                     |                10 |              0.07423 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7554 | <5%                     |                10 |              0.07554 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7622 | >20%                    |                10 |              0.07622 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7658 | >20%                    |                10 |              0.07658 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8041 | >20%                    |                 5 |              0.16082 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8256 | 5-10%                   |                10 |              0.08256 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8266 | <5%                     |                10 |              0.08266 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8284 | >20%                    |                 5 |              0.16568 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8284 | 15-20%                  |                10 |              0.08284 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8358 | 10-15%                  |                10 |              0.08358 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8384 | <5%                     |                 2 |              0.4192  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8505 | >20%                    |                10 |              0.08505 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8582 | >20%                    |                10 |              0.08582 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.86   | 10-15%                  |                10 |              0.086   |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8605 | 15-20%                  |                10 |              0.08605 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8666 | <5%                     |                10 |              0.08666 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8749 | <5%                     |                10 |              0.08749 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8758 | 5-10%                   |                10 |              0.08758 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.889  | <5%                     |                10 |              0.0889  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8918 | <5%                     |                10 |              0.08918 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9074 | 5-10%                   |                10 |              0.09074 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9093 | 15-20%                  |                10 |              0.09093 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9374 | <5%                     |                10 |              0.09374 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9502 | <5%                     |                 2 |              0.4751  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9708 | 5-10%                   |                10 |              0.09708 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9839 | 10-15%                  |                 5 |              0.19678 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9874 | 10-15%                  |                 5 |              0.19748 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9936 | 5-10%                   |                 5 |              0.19872 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0066 | >20%                    |                10 |              0.10066 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0134 | <5%                     |                10 |              0.10134 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0329 | 5-10%                   |                 5 |              0.20658 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0333 | <5%                     |                10 |              0.10333 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0355 | 5-10%                   |                10 |              0.10355 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0515 | <5%                     |                10 |              0.10515 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0527 | 15-20%                  |                 2 |              0.52635 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0994 | >20%                    |                10 |              0.10994 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1622 | 10-15%                  |                10 |              0.11622 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3469 | >20%                    |                10 |              0.13469 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4082 | 5-10%                   |                10 |              0.14082 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.499  | <5%                     |                10 |              0.1499  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5188 | 10-15%                  |                10 |              0.15188 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5236 | 15-20%                  |                 5 |              0.30472 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6026 | 5-10%                   |                10 |              0.16026 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1435 | 10-15%                  |                10 |              0.21435 |