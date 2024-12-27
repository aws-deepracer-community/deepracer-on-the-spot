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

Data correct as of 2024-12-27 01:37:26.450259, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1448 |                         |                 2 |              0.0724  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1618 |                         |                 2 |              0.0809  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.196  | >20%                    |                 2 |              0.098   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2039 | <5%                     |                 5 |              0.04078 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.214  |                         |                 5 |              0.0428  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2208 |                         |                 5 |              0.04416 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2211 | 15-20%                  |                 2 |              0.11055 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2262 | >20%                    |                 2 |              0.1131  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2291 | 15-20%                  |                 2 |              0.11455 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2314 | 15-20%                  |                 2 |              0.1157  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2314 | 5-10%                   |                 2 |              0.1157  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2379 | 15-20%                  |                 2 |              0.11895 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2428 | <5%                     |                 2 |              0.1214  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2474 | 5-10%                   |                 2 |              0.1237  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2769 | <5%                     |                 2 |              0.13845 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2846 | <5%                     |                 2 |              0.1423  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2863 | 15-20%                  |                 5 |              0.05726 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2911 | 5-10%                   |                 2 |              0.14555 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3016 | 5-10%                   |                 2 |              0.1508  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3039 | 5-10%                   |                 2 |              0.15195 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3134 | >20%                    |                 2 |              0.1567  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3145 |                         |                10 |              0.03145 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3306 | <5%                     |                 2 |              0.1653  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3358 | <5%                     |                 5 |              0.06716 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3368 | <5%                     |                 2 |              0.1684  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3374 | >20%                    |                 2 |              0.1687  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3381 | 15-20%                  |                10 |              0.03381 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3475 |                         |                10 |              0.03475 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3482 | 10-15%                  |                 2 |              0.1741  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3486 | >20%                    |                10 |              0.03486 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3544 | 10-15%                  |                 2 |              0.1772  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3579 | 10-15%                  |                 2 |              0.17895 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3652 | >20%                    |                 2 |              0.1826  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3664 | 5-10%                   |                10 |              0.03664 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3748 | >20%                    |                 5 |              0.07496 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3761 | >20%                    |                 5 |              0.07522 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3786 | >20%                    |                 2 |              0.1893  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3831 | <5%                     |                 5 |              0.07662 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3834 | 5-10%                   |                 5 |              0.07668 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3839 | >20%                    |                 2 |              0.19195 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3844 | 5-10%                   |                 2 |              0.1922  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3889 | <5%                     |                 2 |              0.19445 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.396  | 10-15%                  |                 2 |              0.198   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3966 | <5%                     |                 5 |              0.07932 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4055 | >20%                    |                 2 |              0.20275 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4087 | 5-10%                   |                 2 |              0.20435 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4178 | <5%                     |                 5 |              0.08356 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4195 | 5-10%                   |                 5 |              0.0839  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4247 | 10-15%                  |                 2 |              0.21235 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4255 | 5-10%                   |                 2 |              0.21275 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4348 | 5-10%                   |                 5 |              0.08696 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4366 | 10-15%                  |                10 |              0.04366 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4407 | >20%                    |                 5 |              0.08814 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4434 | >20%                    |                 5 |              0.08868 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4462 | 10-15%                  |                 5 |              0.08924 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4473 | <5%                     |                 5 |              0.08946 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4522 | 5-10%                   |                 2 |              0.2261  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4543 | >20%                    |                 5 |              0.09086 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.455  | 5-10%                   |                 5 |              0.091   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4581 | >20%                    |                 5 |              0.09162 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4603 | 15-20%                  |                 2 |              0.23015 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4624 | 5-10%                   |                 2 |              0.2312  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4657 | 5-10%                   |                 5 |              0.09314 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4774 | >20%                    |                 5 |              0.09548 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4796 | 10-15%                  |                 5 |              0.09592 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.483  | 15-20%                  |                 5 |              0.0966  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4853 | 10-15%                  |                 2 |              0.24265 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4856 | 5-10%                   |                10 |              0.04856 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4859 | <5%                     |                 5 |              0.09718 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4898 | <5%                     |                 5 |              0.09796 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4914 | 15-20%                  |                 2 |              0.2457  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4956 | <5%                     |                 5 |              0.09912 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5052 | 10-15%                  |                 2 |              0.2526  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5121 | 10-15%                  |                10 |              0.05121 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5145 | <5%                     |                 2 |              0.25725 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5174 | <5%                     |                 2 |              0.2587  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5306 | <5%                     |                 5 |              0.10612 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5326 | >20%                    |                 5 |              0.10652 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5342 | >20%                    |                 5 |              0.10684 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5349 | >20%                    |                 2 |              0.26745 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5427 | 5-10%                   |                 5 |              0.10854 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5504 | >20%                    |                 5 |              0.11008 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5598 | >20%                    |                10 |              0.05598 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5661 | 15-20%                  |                 5 |              0.11322 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5679 | >20%                    |                 5 |              0.11358 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5697 | 10-15%                  |                 5 |              0.11394 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5759 | >20%                    |                 2 |              0.28795 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6047 | >20%                    |                10 |              0.06047 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6147 | <5%                     |                 5 |              0.12294 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6287 | <5%                     |                 5 |              0.12574 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6515 | 10-15%                  |                10 |              0.06515 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6557 | 15-20%                  |                 2 |              0.32785 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6674 | 5-10%                   |                10 |              0.06674 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6692 | >20%                    |                10 |              0.06692 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6704 | <5%                     |                 5 |              0.13408 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6761 | 15-20%                  |                 5 |              0.13522 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6821 | 15-20%                  |                 5 |              0.13642 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.684  | 10-15%                  |                10 |              0.0684  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6856 | >20%                    |                10 |              0.06856 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6867 | 5-10%                   |                10 |              0.06867 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7001 | 5-10%                   |                 5 |              0.14002 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7007 | >20%                    |                10 |              0.07007 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7086 | >20%                    |                 2 |              0.3543  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7191 | <5%                     |                 2 |              0.35955 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7274 | <5%                     |                10 |              0.07274 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7383 | 5-10%                   |                10 |              0.07383 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7514 | >20%                    |                 5 |              0.15028 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7637 | >20%                    |                 5 |              0.15274 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.776  | 15-20%                  |                10 |              0.0776  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7804 | >20%                    |                 5 |              0.15608 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7957 | 15-20%                  |                10 |              0.07957 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7966 | <5%                     |                10 |              0.07966 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7998 | 5-10%                   |                10 |              0.07998 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.812  | <5%                     |                 2 |              0.406   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8205 | 5-10%                   |                10 |              0.08205 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.8314 | >20%                    |                10 |              0.08314 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.837  | 10-15%                  |                10 |              0.0837  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8387 | 10-15%                  |                10 |              0.08387 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8444 | >20%                    |                10 |              0.08444 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8496 | 10-15%                  |                10 |              0.08496 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8555 | 5-10%                   |                10 |              0.08555 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8709 | 5-10%                   |                10 |              0.08709 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8709 | <5%                     |                10 |              0.08709 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8858 | 5-10%                   |                 5 |              0.17716 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8931 | <5%                     |                10 |              0.08931 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9293 | 5-10%                   |                 5 |              0.18586 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9391 | >20%                    |                10 |              0.09391 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9471 | 15-20%                  |                10 |              0.09471 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9579 | <5%                     |                 5 |              0.19158 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.976  | 10-15%                  |                 2 |              0.488   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9906 | 5-10%                   |                10 |              0.09906 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9973 | 15-20%                  |                10 |              0.09973 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0153 | <5%                     |                10 |              0.10153 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0554 | <5%                     |                10 |              0.10554 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1024 | >20%                    |                10 |              0.11024 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1153 | >20%                    |                10 |              0.11153 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1156 | <5%                     |                10 |              0.11156 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1857 | 5-10%                   |                10 |              0.11857 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3013 | <5%                     |                10 |              0.13013 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3051 | >20%                    |                10 |              0.13051 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4007 | 5-10%                   |                10 |              0.14007 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5404 | 5-10%                   |                 5 |              0.30808 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0261 | 10-15%                  |                10 |              0.20261 |