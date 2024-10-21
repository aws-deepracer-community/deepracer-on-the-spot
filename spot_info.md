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

Data correct as of 2024-10-21 01:40:02.360217, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1195 | 5-10%                   |                 2 |              0.05975 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1317 | <5%                     |                 2 |              0.06585 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1405 | <5%                     |                 2 |              0.07025 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1466 | <5%                     |                 2 |              0.0733  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.161  | <5%                     |                 5 |              0.0322  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1624 | 10-15%                  |                 2 |              0.0812  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1697 | 5-10%                   |                 2 |              0.08485 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1803 | <5%                     |                 2 |              0.09015 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1906 | <5%                     |                 5 |              0.03812 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1969 | 15-20%                  |                 2 |              0.09845 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1991 | <5%                     |                 5 |              0.03982 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.207  | >20%                    |                 2 |              0.1035  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2158 | >20%                    |                 2 |              0.1079  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2337 | <5%                     |                 2 |              0.11685 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2424 | <5%                     |                 2 |              0.1212  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2439 | 5-10%                   |                 2 |              0.12195 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2533 | 15-20%                  |                 2 |              0.12665 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2575 | <5%                     |                 5 |              0.0515  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2605 | <5%                     |                10 |              0.02605 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2646 | >20%                    |                 5 |              0.05292 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2664 | <5%                     |                 2 |              0.1332  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2687 | 10-15%                  |                 5 |              0.05374 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2692 | <5%                     |                 2 |              0.1346  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2806 | 10-15%                  |                 2 |              0.1403  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2809 | 15-20%                  |                 2 |              0.14045 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2845 | 10-15%                  |                 5 |              0.0569  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2852 | <5%                     |                 2 |              0.1426  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.289  | <5%                     |                10 |              0.0289  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3087 | <5%                     |                10 |              0.03087 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3114 | >20%                    |                 2 |              0.1557  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3125 | 15-20%                  |                 2 |              0.15625 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3243 | <5%                     |                 5 |              0.06486 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3252 | 15-20%                  |                 5 |              0.06504 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3291 | 10-15%                  |                 5 |              0.06582 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3302 | 5-10%                   |                 2 |              0.1651  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.332  | >20%                    |                 5 |              0.0664  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3381 | <5%                     |                 2 |              0.16905 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3448 | <5%                     |                 2 |              0.1724  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.346  | 10-15%                  |                 2 |              0.173   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3514 | >20%                    |                 2 |              0.1757  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.364  | 15-20%                  |                 2 |              0.182   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3701 | 15-20%                  |                10 |              0.03701 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3742 | <5%                     |                 5 |              0.07484 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3756 | <5%                     |                 5 |              0.07512 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.382  | <5%                     |                 5 |              0.0764  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3956 | >20%                    |                 2 |              0.1978  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.396  | 5-10%                   |                 2 |              0.198   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4021 | <5%                     |                 5 |              0.08042 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.403  | >20%                    |                 2 |              0.2015  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4054 | <5%                     |                 5 |              0.08108 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4164 | 15-20%                  |                 2 |              0.2082  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4214 | >20%                    |                 2 |              0.2107  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4278 | >20%                    |                10 |              0.04278 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4299 | <5%                     |                10 |              0.04299 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4317 | 15-20%                  |                 5 |              0.08634 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.434  | 5-10%                   |                 2 |              0.217   |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4385 | 15-20%                  |                10 |              0.04385 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4394 | <5%                     |                 2 |              0.2197  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4461 | 15-20%                  |                 2 |              0.22305 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4466 | <5%                     |                 5 |              0.08932 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.447  | 5-10%                   |                10 |              0.0447  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4516 | <5%                     |                 2 |              0.2258  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4518 | >20%                    |                 5 |              0.09036 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4539 | <5%                     |                10 |              0.04539 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4575 | >20%                    |                 2 |              0.22875 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4669 | >20%                    |                 5 |              0.09338 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4703 | 5-10%                   |                 2 |              0.23515 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4707 | 15-20%                  |                 5 |              0.09414 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4709 | <5%                     |                 5 |              0.09418 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4796 | 5-10%                   |                 5 |              0.09592 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4817 | 5-10%                   |                10 |              0.04817 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4838 | 15-20%                  |                 5 |              0.09676 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4846 | 10-15%                  |                 5 |              0.09692 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4867 | 5-10%                   |                 5 |              0.09734 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4883 | <5%                     |                 2 |              0.24415 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4983 | 5-10%                   |                10 |              0.04983 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5004 | 15-20%                  |                 2 |              0.2502  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5012 | >20%                    |                 2 |              0.2506  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5025 | 10-15%                  |                10 |              0.05025 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.5084 | <5%                     |                10 |              0.05084 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5141 | 15-20%                  |                 2 |              0.25705 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5203 | >20%                    |                 5 |              0.10406 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.522  | 5-10%                   |                 5 |              0.1044  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5228 | <5%                     |                 5 |              0.10456 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5241 | 5-10%                   |                 5 |              0.10482 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.531  | <5%                     |                 5 |              0.1062  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5313 | <5%                     |                 5 |              0.10626 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5468 | >20%                    |                 5 |              0.10936 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5651 | >20%                    |                 5 |              0.11302 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5822 | >20%                    |                 5 |              0.11644 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.583  | >20%                    |                 5 |              0.1166  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5847 | 5-10%                   |                 5 |              0.11694 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5851 | >20%                    |                 5 |              0.11702 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5853 | 15-20%                  |                10 |              0.05853 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5858 | 15-20%                  |                 5 |              0.11716 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6043 | >20%                    |                 2 |              0.30215 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6288 | <5%                     |                10 |              0.06288 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6517 | 5-10%                   |                10 |              0.06517 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6592 | >20%                    |                10 |              0.06592 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6653 | 10-15%                  |                10 |              0.06653 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6734 | >20%                    |                10 |              0.06734 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6893 | <5%                     |                10 |              0.06893 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6932 | >20%                    |                 2 |              0.3466  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7006 | <5%                     |                10 |              0.07006 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7011 | 5-10%                   |                 5 |              0.14022 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7068 | <5%                     |                10 |              0.07068 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7156 | 10-15%                  |                 5 |              0.14312 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7174 | 5-10%                   |                10 |              0.07174 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7203 | >20%                    |                10 |              0.07203 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7252 | >20%                    |                10 |              0.07252 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7278 | 5-10%                   |                10 |              0.07278 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7492 | >20%                    |                 5 |              0.14984 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.7552 | 5-10%                   |                10 |              0.07552 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7799 | 5-10%                   |                 5 |              0.15598 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.79   | 5-10%                   |                10 |              0.079   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7932 | 15-20%                  |                10 |              0.07932 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8012 | <5%                     |                10 |              0.08012 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8235 | >20%                    |                10 |              0.08235 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8747 | >20%                    |                10 |              0.08747 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8792 | 5-10%                   |                10 |              0.08792 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8826 | >20%                    |                10 |              0.08826 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8855 | <5%                     |                10 |              0.08855 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8864 | >20%                    |                 5 |              0.17728 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9007 | >20%                    |                 2 |              0.45035 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9092 | >20%                    |                10 |              0.09092 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9109 | >20%                    |                10 |              0.09109 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9609 | <5%                     |                 2 |              0.48045 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9619 | 15-20%                  |                 5 |              0.19238 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9644 | 10-15%                  |                10 |              0.09644 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9894 | 10-15%                  |                10 |              0.09894 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0094 | 5-10%                   |                10 |              0.10094 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0316 | 10-15%                  |                 5 |              0.20632 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0494 | >20%                    |                10 |              0.10494 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1471 | >20%                    |                10 |              0.11471 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1773 | >20%                    |                10 |              0.11773 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.403  | <5%                     |                10 |              0.1403  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4423 | >20%                    |                10 |              0.14423 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5313 | 5-10%                   |                10 |              0.15313 |