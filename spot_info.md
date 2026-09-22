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

Data correct as of 2026-09-22 04:07:01.537102, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0924 | >20%                    |                 2 |              0.0462  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1288 | 15-20%                  |                 2 |              0.0644  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1539 | >20%                    |                 5 |              0.03078 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1968 | 15-20%                  |                 5 |              0.03936 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.2293 |                         |                 5 |              0.04586 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.242  | >20%                    |                 2 |              0.121   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2455 | >20%                    |                 2 |              0.12275 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2515 | >20%                    |                 2 |              0.12575 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2564 | >20%                    |                 2 |              0.1282  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2584 | >20%                    |                 2 |              0.1292  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2634 | >20%                    |                 2 |              0.1317  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2838 | >20%                    |                 2 |              0.1419  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2909 | 15-20%                  |                 2 |              0.14545 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3071 | 10-15%                  |                 2 |              0.15355 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3106 | >20%                    |                 2 |              0.1553  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3331 | >20%                    |                 2 |              0.16655 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.342  | >20%                    |                 5 |              0.0684  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3555 | >20%                    |                 2 |              0.17775 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3585 | >20%                    |                 5 |              0.0717  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3652 | >20%                    |                 5 |              0.07304 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3713 | 15-20%                  |                 2 |              0.18565 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3887 | <5%                     |                 2 |              0.19435 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3891 | >20%                    |                 5 |              0.07782 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3894 | 10-15%                  |                 2 |              0.1947  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3903 | >20%                    |                10 |              0.03903 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3956 | >20%                    |                 2 |              0.1978  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4039 | >20%                    |                 2 |              0.20195 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4239 | >20%                    |                 5 |              0.08478 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4316 | >20%                    |                 5 |              0.08632 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4325 | >20%                    |                 2 |              0.21625 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4393 | 5-10%                   |                10 |              0.04393 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4407 | >20%                    |                10 |              0.04407 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4432 | 15-20%                  |                 2 |              0.2216  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4434 | >20%                    |                 2 |              0.2217  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4577 | >20%                    |                 2 |              0.22885 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4615 | >20%                    |                 5 |              0.0923  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4651 | >20%                    |                 5 |              0.09302 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4779 | 15-20%                  |                 2 |              0.23895 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.481  | 10-15%                  |                 2 |              0.2405  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4823 | <5%                     |                10 |              0.04823 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4867 | >20%                    |                 5 |              0.09734 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4885 | >20%                    |                 5 |              0.0977  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4965 |                         |                 2 |              0.24825 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4981 | <5%                     |                 2 |              0.24905 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.501  | >20%                    |                 5 |              0.1002  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5032 | >20%                    |                 5 |              0.10064 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5055 | >20%                    |                 2 |              0.25275 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5332 | >20%                    |                 2 |              0.2666  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5449 | >20%                    |                 2 |              0.27245 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5481 | >20%                    |                 5 |              0.10962 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5522 | 5-10%                   |                10 |              0.05522 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5544 | >20%                    |                 5 |              0.11088 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5558 | >20%                    |                 5 |              0.11116 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5566 | >20%                    |                 5 |              0.11132 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5663 | >20%                    |                 5 |              0.11326 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5844 | 15-20%                  |                10 |              0.05844 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5916 | >20%                    |                 2 |              0.2958  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5969 | >20%                    |                10 |              0.05969 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5989 | >20%                    |                 2 |              0.29945 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6055 | 10-15%                  |                 5 |              0.1211  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6165 | 15-20%                  |                10 |              0.06165 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6188 | >20%                    |                 5 |              0.12376 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6224 | 10-15%                  |                10 |              0.06224 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6357 | >20%                    |                10 |              0.06357 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6378 | 10-15%                  |                 2 |              0.3189  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6382 | 5-10%                   |                 5 |              0.12764 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6445 | >20%                    |                 5 |              0.1289  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6564 | >20%                    |                 5 |              0.13128 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6603 | >20%                    |                 2 |              0.33015 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.668  | >20%                    |                 5 |              0.1336  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6682 | >20%                    |                 5 |              0.13364 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6851 | <5%                     |                 2 |              0.34255 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6876 | 5-10%                   |                 2 |              0.3438  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6907 | >20%                    |                 2 |              0.34535 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6947 | >20%                    |                10 |              0.06947 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7071 | >20%                    |                10 |              0.07071 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7093 | >20%                    |                 5 |              0.14186 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7239 | 15-20%                  |                 2 |              0.36195 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7349 | >20%                    |                 2 |              0.36745 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7357 | 15-20%                  |                 5 |              0.14714 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7475 | >20%                    |                10 |              0.07475 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7501 | >20%                    |                 5 |              0.15002 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7514 | >20%                    |                 5 |              0.15028 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7552 | >20%                    |                 5 |              0.15104 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7631 | >20%                    |                 2 |              0.38155 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8024 | >20%                    |                10 |              0.08024 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8032 | >20%                    |                 5 |              0.16064 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8347 | 10-15%                  |                 2 |              0.41735 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.836  | >20%                    |                 5 |              0.1672  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8371 | >20%                    |                10 |              0.08371 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8425 | >20%                    |                 2 |              0.42125 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8454 | 15-20%                  |                10 |              0.08454 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8597 | 15-20%                  |                 5 |              0.17194 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8713 | 5-10%                   |                10 |              0.08713 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.878  | >20%                    |                10 |              0.0878  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9113 | <5%                     |                 5 |              0.18226 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9149 | 15-20%                  |                10 |              0.09149 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9158 | >20%                    |                10 |              0.09158 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9237 | >20%                    |                 5 |              0.18474 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9244 | >20%                    |                10 |              0.09244 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9379 |                         |                 2 |              0.46895 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9483 | >20%                    |                 5 |              0.18966 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.959  | >20%                    |                10 |              0.0959  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9598 | 10-15%                  |                 2 |              0.4799  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9627 | >20%                    |                10 |              0.09627 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.9652 | >20%                    |                 2 |              0.4826  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9667 | >20%                    |                10 |              0.09667 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.979  | >20%                    |                10 |              0.0979  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9991 | 15-20%                  |                10 |              0.09991 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0027 | >20%                    |                10 |              0.10027 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.02   | >20%                    |                10 |              0.102   |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0292 | >20%                    |                10 |              0.10292 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0387 | 15-20%                  |                10 |              0.10387 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0497 | >20%                    |                 5 |              0.20994 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.0669 |                         |                10 |              0.10669 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0743 | >20%                    |                10 |              0.10743 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.077  | >20%                    |                10 |              0.1077  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1086 | >20%                    |                 5 |              0.22172 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1125 | >20%                    |                 5 |              0.2225  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1172 | 5-10%                   |                10 |              0.11172 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1531 | 5-10%                   |                 2 |              0.57655 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.1562 | >20%                    |                 5 |              0.23124 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1661 | 5-10%                   |                 2 |              0.58305 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1713 |                         |                 2 |              0.58565 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2063 |                         |                 5 |              0.24126 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2095 | >20%                    |                10 |              0.12095 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2169 | >20%                    |                10 |              0.12169 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2353 |                         |                 5 |              0.24706 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2478 | >20%                    |                10 |              0.12478 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2858 | >20%                    |                 5 |              0.25716 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3424 | >20%                    |                 2 |              0.6712  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3483 | 10-15%                  |                10 |              0.13483 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3492 | >20%                    |                10 |              0.13492 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3842 | 15-20%                  |                10 |              0.13842 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3864 | >20%                    |                10 |              0.13864 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5361 | >20%                    |                 2 |              0.76805 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5538 | 5-10%                   |                 5 |              0.31076 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5724 | 10-15%                  |                 2 |              0.7862  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6408 | >20%                    |                10 |              0.16408 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.6697 | >20%                    |                 5 |              0.33394 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7226 | >20%                    |                10 |              0.17226 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7655 | >20%                    |                 5 |              0.3531  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7794 | 15-20%                  |                10 |              0.17794 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8749 |                         |                10 |              0.18749 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.9038 |                         |                10 |              0.19038 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0773 | 5-10%                   |                 2 |              1.03865 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1358 | 15-20%                  |                 5 |              0.42716 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2357 | 5-10%                   |                10 |              0.22357 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.5684 | >20%                    |                10 |              0.25684 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.6162 | >20%                    |                10 |              0.26162 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0839 | >20%                    |                10 |              0.30839 |