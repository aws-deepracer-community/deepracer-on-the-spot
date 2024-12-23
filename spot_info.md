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

Data correct as of 2024-12-23 01:39:39.251009, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.133  |                         |                 2 |              0.0665  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1352 |                         |                 2 |              0.0676  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1775 |                         |                 5 |              0.0355  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.1918 |                         |                 5 |              0.03836 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2049 | 15-20%                  |                 2 |              0.10245 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2187 | >20%                    |                 2 |              0.10935 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2225 | 15-20%                  |                 2 |              0.11125 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2248 | 15-20%                  |                 2 |              0.1124  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2287 | 5-10%                   |                 2 |              0.11435 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2331 | <5%                     |                 5 |              0.04662 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2365 | 15-20%                  |                 2 |              0.11825 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2384 | >20%                    |                 2 |              0.1192  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2485 | 5-10%                   |                 2 |              0.12425 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2582 | 15-20%                  |                 5 |              0.05164 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2677 | <5%                     |                 2 |              0.13385 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2714 |                         |                10 |              0.02714 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2788 | <5%                     |                 2 |              0.1394  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2905 | 5-10%                   |                 2 |              0.14525 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2923 | 5-10%                   |                 2 |              0.14615 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2975 | 5-10%                   |                 2 |              0.14875 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.2992 |                         |                10 |              0.02992 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3081 | <5%                     |                 2 |              0.15405 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3111 | >20%                    |                 2 |              0.15555 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3177 | 5-10%                   |                 5 |              0.06354 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3207 | <5%                     |                 2 |              0.16035 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3224 | >20%                    |                 5 |              0.06448 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3239 | >20%                    |                 2 |              0.16195 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3335 | <5%                     |                 5 |              0.0667  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3394 | 15-20%                  |                10 |              0.03394 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3407 | <5%                     |                 2 |              0.17035 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3437 | 10-15%                  |                 2 |              0.17185 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3498 | 10-15%                  |                 2 |              0.1749  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3508 | <5%                     |                 2 |              0.1754  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.357  | 10-15%                  |                 2 |              0.1785  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3577 | >20%                    |                 2 |              0.17885 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.359  | <5%                     |                 5 |              0.0718  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3597 | >20%                    |                 2 |              0.17985 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3601 | >20%                    |                 5 |              0.07202 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3747 | 5-10%                   |                 5 |              0.07494 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3763 | >20%                    |                 2 |              0.18815 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3841 | 5-10%                   |                 2 |              0.19205 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3868 | <5%                     |                 5 |              0.07736 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3891 | <5%                     |                 5 |              0.07782 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4056 | >20%                    |                 2 |              0.2028  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4096 | 10-15%                  |                10 |              0.04096 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4096 | 10-15%                  |                 2 |              0.2048  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.4147 | <5%                     |                 2 |              0.20735 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4157 | 5-10%                   |                 2 |              0.20785 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4189 | 5-10%                   |                 2 |              0.20945 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4215 | 10-15%                  |                10 |              0.04215 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4225 | >20%                    |                10 |              0.04225 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4237 | 10-15%                  |                 2 |              0.21185 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4259 | 5-10%                   |                 5 |              0.08518 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4269 | 15-20%                  |                 2 |              0.21345 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4276 | 10-15%                  |                 5 |              0.08552 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4282 | >20%                    |                 5 |              0.08564 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4284 | >20%                    |                 5 |              0.08568 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4303 | 5-10%                   |                 5 |              0.08606 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.444  | >20%                    |                 5 |              0.0888  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4447 | <5%                     |                 5 |              0.08894 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4449 | >20%                    |                 5 |              0.08898 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4467 | 5-10%                   |                 5 |              0.08934 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4517 | >20%                    |                 5 |              0.09034 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4555 | 5-10%                   |                 2 |              0.22775 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4614 | 5-10%                   |                10 |              0.04614 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4634 | 5-10%                   |                 2 |              0.2317  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4762 | 15-20%                  |                 2 |              0.2381  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4765 | 10-15%                  |                 5 |              0.0953  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4785 | <5%                     |                 5 |              0.0957  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4843 | <5%                     |                 5 |              0.09686 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4902 | 10-15%                  |                 2 |              0.2451  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4935 | >20%                    |                10 |              0.04935 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4981 | <5%                     |                 5 |              0.09962 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5032 | <5%                     |                 2 |              0.2516  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5036 | <5%                     |                 5 |              0.10072 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5054 | 10-15%                  |                 2 |              0.2527  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5075 | 15-20%                  |                 5 |              0.1015  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5095 | >20%                    |                 5 |              0.1019  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5153 | >20%                    |                 2 |              0.25765 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5225 | >20%                    |                 5 |              0.1045  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5326 | <5%                     |                 5 |              0.10652 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5444 | 5-10%                   |                 5 |              0.10888 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5463 | >20%                    |                 5 |              0.10926 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5542 | >20%                    |                 5 |              0.11084 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5575 | 15-20%                  |                 5 |              0.1115  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5583 | 10-15%                  |                 5 |              0.11166 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5738 | >20%                    |                10 |              0.05738 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5749 | >20%                    |                 2 |              0.28745 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5952 | <5%                     |                 5 |              0.11904 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6469 | 15-20%                  |                 2 |              0.32345 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6477 | >20%                    |                10 |              0.06477 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6497 | 5-10%                   |                10 |              0.06497 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.653  | 15-20%                  |                 5 |              0.1306  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6547 | >20%                    |                10 |              0.06547 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6637 | <5%                     |                10 |              0.06637 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6654 | 5-10%                   |                10 |              0.06654 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6822 | >20%                    |                10 |              0.06822 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6851 | <5%                     |                 5 |              0.13702 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6935 | 15-20%                  |                 5 |              0.1387  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6956 | 5-10%                   |                 5 |              0.13912 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7052 | 10-15%                  |                10 |              0.07052 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.711  | >20%                    |                 2 |              0.3555  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7204 | <5%                     |                 2 |              0.3602  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7268 | >20%                    |                 5 |              0.14536 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7309 | 5-10%                   |                10 |              0.07309 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7385 | >20%                    |                 5 |              0.1477  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7563 | 15-20%                  |                10 |              0.07563 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7577 | >20%                    |                 5 |              0.15154 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.7587 | <5%                     |                 2 |              0.37935 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7589 | 5-10%                   |                10 |              0.07589 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7723 | 10-15%                  |                10 |              0.07723 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7761 | >20%                    |                10 |              0.07761 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.7813 | >20%                    |                10 |              0.07813 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7864 | 5-10%                   |                 5 |              0.15728 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7904 | 15-20%                  |                10 |              0.07904 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8042 | 5-10%                   |                10 |              0.08042 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8085 | <5%                     |                10 |              0.08085 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.8153 | <5%                     |                10 |              0.08153 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8332 | 10-15%                  |                10 |              0.08332 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8396 | 5-10%                   |                10 |              0.08396 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8493 | 10-15%                  |                10 |              0.08493 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8539 | 10-15%                  |                10 |              0.08539 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8812 | <5%                     |                10 |              0.08812 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8897 | <5%                     |                10 |              0.08897 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8931 | 5-10%                   |                10 |              0.08931 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.925  | 10-15%                  |                 2 |              0.4625  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9322 | 5-10%                   |                 5 |              0.18644 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.942  | <5%                     |                 5 |              0.1884  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9501 | >20%                    |                10 |              0.09501 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9682 | 15-20%                  |                10 |              0.09682 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9728 | 15-20%                  |                10 |              0.09728 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9926 | 5-10%                   |                10 |              0.09926 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0417 | <5%                     |                10 |              0.10417 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0419 | <5%                     |                10 |              0.10419 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0868 | 5-10%                   |                10 |              0.10868 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1036 | >20%                    |                10 |              0.11036 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1315 | >20%                    |                10 |              0.11315 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1848 | <5%                     |                10 |              0.11848 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2641 | >20%                    |                10 |              0.12641 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.379  | 5-10%                   |                10 |              0.1379  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5317 | 5-10%                   |                 5 |              0.30634 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9636 | 10-15%                  |                10 |              0.19636 |