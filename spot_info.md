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

Data correct as of 2026-08-21 01:36:05.147227, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1576 | >20%                    |                 2 |              0.0788  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1593 | >20%                    |                 2 |              0.07965 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2052 | 15-20%                  |                 2 |              0.1026  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2068 | >20%                    |                 2 |              0.1034  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.225  | >20%                    |                 2 |              0.1125  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2252 | >20%                    |                 2 |              0.1126  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2256 | >20%                    |                 2 |              0.1128  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2337 | 10-15%                  |                 2 |              0.11685 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2381 | 15-20%                  |                 2 |              0.11905 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | 15-20%                  |                 2 |              0.1197  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2589 | 10-15%                  |                 2 |              0.12945 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2682 | >20%                    |                 2 |              0.1341  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2841 | >20%                    |                 2 |              0.14205 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.286  | >20%                    |                 2 |              0.143   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2955 | >20%                    |                 5 |              0.0591  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3209 | >20%                    |                 2 |              0.16045 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3212 | >20%                    |                 5 |              0.06424 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.323  | 15-20%                  |                 5 |              0.0646  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3232 | >20%                    |                 2 |              0.1616  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3277 | >20%                    |                 2 |              0.16385 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3507 | >20%                    |                10 |              0.03507 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3536 | 5-10%                   |                10 |              0.03536 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.365  | >20%                    |                 5 |              0.073   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3717 | >20%                    |                10 |              0.03717 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3754 | <5%                     |                 2 |              0.1877  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3807 | 10-15%                  |                 2 |              0.19035 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3834 | >20%                    |                10 |              0.03834 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3887 | >20%                    |                 5 |              0.07774 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3927 | <5%                     |                 2 |              0.19635 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3943 | 5-10%                   |                10 |              0.03943 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3962 | >20%                    |                 5 |              0.07924 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3981 | >20%                    |                 5 |              0.07962 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4041 | 15-20%                  |                 5 |              0.08082 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4043 | 15-20%                  |                 2 |              0.20215 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4095 | 15-20%                  |                 2 |              0.20475 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4107 | >20%                    |                 2 |              0.20535 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4168 | >20%                    |                10 |              0.04168 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4179 | >20%                    |                 5 |              0.08358 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.418  | >20%                    |                 2 |              0.209   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4246 | >20%                    |                 5 |              0.08492 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4338 | >20%                    |                 2 |              0.2169  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4366 | >20%                    |                 2 |              0.2183  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4506 | >20%                    |                 2 |              0.2253  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4527 | 10-15%                  |                 2 |              0.22635 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4571 | >20%                    |                 5 |              0.09142 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4585 | >20%                    |                 5 |              0.0917  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4612 | >20%                    |                 5 |              0.09224 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4909 | >20%                    |                 2 |              0.24545 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4947 | >20%                    |                 5 |              0.09894 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4964 | >20%                    |                 5 |              0.09928 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5003 | >20%                    |                 5 |              0.10006 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.506  | >20%                    |                 2 |              0.253   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5074 | >20%                    |                 5 |              0.10148 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5085 | >20%                    |                 5 |              0.1017  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5116 | >20%                    |                10 |              0.05116 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5128 | >20%                    |                 2 |              0.2564  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5185 | >20%                    |                10 |              0.05185 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5209 | >20%                    |                 5 |              0.10418 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5255 | 15-20%                  |                 5 |              0.1051  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5298 | >20%                    |                 2 |              0.2649  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5397 | <5%                     |                 2 |              0.26985 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5398 | 5-10%                   |                 2 |              0.2699  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5509 | >20%                    |                 5 |              0.11018 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5514 | >20%                    |                 2 |              0.2757  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5571 | >20%                    |                10 |              0.05571 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5593 | >20%                    |                 5 |              0.11186 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5599 | <5%                     |                 5 |              0.11198 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5764 | >20%                    |                 2 |              0.2882  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5842 | 5-10%                   |                10 |              0.05842 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5891 | >20%                    |                 5 |              0.11782 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5896 | >20%                    |                 5 |              0.11792 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5923 | 10-15%                  |                 5 |              0.11846 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.594  | >20%                    |                 5 |              0.1188  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5945 | >20%                    |                 2 |              0.29725 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5999 | 10-15%                  |                10 |              0.05999 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.611  | >20%                    |                 2 |              0.3055  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6159 | >20%                    |                 5 |              0.12318 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6325 | 15-20%                  |                10 |              0.06325 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6407 | >20%                    |                 2 |              0.32035 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6443 | >20%                    |                 2 |              0.32215 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6517 | 5-10%                   |                 5 |              0.13034 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6801 | >20%                    |                 5 |              0.13602 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6853 | 15-20%                  |                10 |              0.06853 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6908 | >20%                    |                 5 |              0.13816 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6953 | >20%                    |                 2 |              0.34765 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7037 | >20%                    |                10 |              0.07037 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7078 | >20%                    |                10 |              0.07078 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7216 | >20%                    |                10 |              0.07216 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7219 | >20%                    |                10 |              0.07219 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7341 | >20%                    |                10 |              0.07341 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7379 | >20%                    |                 5 |              0.14758 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7396 | >20%                    |                 5 |              0.14792 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7475 | >20%                    |                 5 |              0.1495  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7556 | >20%                    |                10 |              0.07556 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7656 | >20%                    |                10 |              0.07656 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.766  | 5-10%                   |                10 |              0.0766  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7813 | >20%                    |                10 |              0.07813 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8058 | 15-20%                  |                10 |              0.08058 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8109 | >20%                    |                 5 |              0.16218 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8243 | <5%                     |                10 |              0.08243 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8397 | 10-15%                  |                 2 |              0.41985 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8447 | >20%                    |                 5 |              0.16894 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.852  | >20%                    |                10 |              0.0852  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8529 | >20%                    |                 5 |              0.17058 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8626 | >20%                    |                10 |              0.08626 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8641 | >20%                    |                10 |              0.08641 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8695 | 5-10%                   |                10 |              0.08695 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8705 | >20%                    |                10 |              0.08705 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8708 | 15-20%                  |                10 |              0.08708 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.887  | >20%                    |                10 |              0.0887  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8967 | 10-15%                  |                 2 |              0.44835 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8986 | 15-20%                  |                 2 |              0.4493  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8988 | >20%                    |                 2 |              0.4494  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.923  |                         |                 2 |              0.4615  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9322 | >20%                    |                 5 |              0.18644 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9512 | >20%                    |                10 |              0.09512 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9644 | >20%                    |                10 |              0.09644 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.9672 | >20%                    |                 5 |              0.19344 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9907 |                         |                10 |              0.09907 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.001  | >20%                    |                 5 |              0.2002  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0109 | >20%                    |                10 |              0.10109 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0147 | >20%                    |                10 |              0.10147 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0167 | >20%                    |                10 |              0.10167 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0175 | 15-20%                  |                10 |              0.10175 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0233 | >20%                    |                 5 |              0.20466 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0261 | >20%                    |                 5 |              0.20522 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.044  | >20%                    |                 5 |              0.2088  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0486 | 15-20%                  |                10 |              0.10486 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0647 | >20%                    |                 5 |              0.21294 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0718 | >20%                    |                 5 |              0.21436 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.092  | >20%                    |                10 |              0.1092  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1169 | >20%                    |                10 |              0.11169 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1363 | >20%                    |                10 |              0.11363 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1537 | 5-10%                   |                 2 |              0.57685 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.164  |                         |                 2 |              0.582   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1829 | >20%                    |                 2 |              0.59145 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1869 | 5-10%                   |                 5 |              0.23738 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1891 | 10-15%                  |                 2 |              0.59455 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.234  | 15-20%                  |                10 |              0.1234  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2572 |                         |                 5 |              0.25144 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2597 | 5-10%                   |                10 |              0.12597 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2826 |                         |                 5 |              0.25652 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2858 | >20%                    |                 5 |              0.25716 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4308 | 10-15%                  |                10 |              0.14308 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5281 | 15-20%                  |                 5 |              0.30562 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5713 | >20%                    |                10 |              0.15713 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5905 | >20%                    |                10 |              0.15905 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6274 | >20%                    |                10 |              0.16274 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7243 | 15-20%                  |                10 |              0.17243 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.8329 | 5-10%                   |                 2 |              0.91645 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.845  |                         |                10 |              0.1845  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9352 | 5-10%                   |                 2 |              0.9676  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.9731 | >20%                    |                10 |              0.19731 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.3149 | >20%                    |                 5 |              0.46298 |