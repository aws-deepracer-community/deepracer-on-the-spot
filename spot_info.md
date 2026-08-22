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

Data correct as of 2026-08-22 01:24:49.659141, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.154  | >20%                    |                 2 |              0.077   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1576 | >20%                    |                 2 |              0.0788  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.204  | 15-20%                  |                 2 |              0.102   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2065 | >20%                    |                 2 |              0.10325 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2208 | >20%                    |                 2 |              0.1104  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2211 | >20%                    |                 2 |              0.11055 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2256 | >20%                    |                 2 |              0.1128  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2332 | 15-20%                  |                 2 |              0.1166  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2366 | 10-15%                  |                 2 |              0.1183  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2416 | 15-20%                  |                 2 |              0.1208  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2573 | 10-15%                  |                 2 |              0.12865 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2697 | >20%                    |                 2 |              0.13485 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | >20%                    |                 2 |              0.14135 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2862 | >20%                    |                 2 |              0.1431  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2917 | >20%                    |                 5 |              0.05834 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3146 | >20%                    |                 2 |              0.1573  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | >20%                    |                 2 |              0.15735 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3164 | >20%                    |                 5 |              0.06328 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3212 | 15-20%                  |                 5 |              0.06424 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3255 | >20%                    |                 2 |              0.16275 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3506 | >20%                    |                10 |              0.03506 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.357  | 5-10%                   |                10 |              0.0357  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3592 | >20%                    |                 5 |              0.07184 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3697 | >20%                    |                10 |              0.03697 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3757 | <5%                     |                 2 |              0.18785 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3757 | 10-15%                  |                 2 |              0.18785 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3763 | >20%                    |                 5 |              0.07526 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3834 | >20%                    |                10 |              0.03834 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3866 | >20%                    |                 5 |              0.07732 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3918 | <5%                     |                 2 |              0.1959  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3919 | >20%                    |                 5 |              0.07838 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3978 | >20%                    |                10 |              0.03978 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4041 | 5-10%                   |                10 |              0.04041 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4059 | 15-20%                  |                 2 |              0.20295 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4059 | >20%                    |                 5 |              0.08118 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4064 | 15-20%                  |                 2 |              0.2032  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4067 | >20%                    |                 2 |              0.20335 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4128 | >20%                    |                 5 |              0.08256 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4165 | >20%                    |                 2 |              0.20825 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4189 | 15-20%                  |                 5 |              0.08378 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4316 | >20%                    |                 2 |              0.2158  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4328 | >20%                    |                 2 |              0.2164  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4464 | >20%                    |                 5 |              0.08928 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4467 | 10-15%                  |                 2 |              0.22335 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4495 | >20%                    |                 5 |              0.0899  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4523 | >20%                    |                 2 |              0.22615 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4626 | >20%                    |                 5 |              0.09252 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4668 | >20%                    |                 2 |              0.2334  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4711 | >20%                    |                 5 |              0.09422 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4896 | >20%                    |                 2 |              0.2448  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4912 | >20%                    |                 5 |              0.09824 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4937 | >20%                    |                 5 |              0.09874 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4951 | >20%                    |                 5 |              0.09902 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4996 | >20%                    |                10 |              0.04996 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5089 | >20%                    |                 5 |              0.10178 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5096 | 15-20%                  |                 5 |              0.10192 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5141 | >20%                    |                 2 |              0.25705 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5185 | >20%                    |                10 |              0.05185 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5212 | >20%                    |                 5 |              0.10424 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5268 | >20%                    |                 2 |              0.2634  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5392 | <5%                     |                 2 |              0.2696  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5398 | 5-10%                   |                 2 |              0.2699  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5423 | >20%                    |                10 |              0.05423 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5509 | >20%                    |                 5 |              0.11018 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5525 | <5%                     |                 5 |              0.1105  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5593 | >20%                    |                 5 |              0.11186 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5607 | >20%                    |                 2 |              0.28035 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.585  | >20%                    |                 5 |              0.117   |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5881 | 10-15%                  |                10 |              0.05881 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5902 | >20%                    |                 5 |              0.11804 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5945 | 10-15%                  |                 5 |              0.1189  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5945 | >20%                    |                 2 |              0.29725 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6016 | >20%                    |                 2 |              0.3008  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.602  | >20%                    |                 5 |              0.1204  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.6122 |                         |                 2 |              0.3061  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6159 | >20%                    |                 5 |              0.12318 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6178 | 15-20%                  |                10 |              0.06178 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6253 | >20%                    |                 2 |              0.31265 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6295 | 5-10%                   |                10 |              0.06295 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6422 | >20%                    |                 2 |              0.3211  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6443 | >20%                    |                 2 |              0.32215 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6493 | 5-10%                   |                 5 |              0.12986 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6615 | 15-20%                  |                10 |              0.06615 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6791 | >20%                    |                 5 |              0.13582 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6913 | >20%                    |                10 |              0.06913 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6958 | >20%                    |                 2 |              0.3479  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6981 | >20%                    |                10 |              0.06981 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.711  | >20%                    |                 5 |              0.1422  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7132 | >20%                    |                10 |              0.07132 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7163 | >20%                    |                 5 |              0.14326 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7247 | >20%                    |                 5 |              0.14494 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7413 | >20%                    |                10 |              0.07413 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7445 | 5-10%                   |                10 |              0.07445 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7561 | >20%                    |                10 |              0.07561 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7692 | >20%                    |                10 |              0.07692 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.77   | >20%                    |                 5 |              0.154   |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.7776 |                         |                 5 |              0.15552 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.779  | >20%                    |                10 |              0.0779  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7804 | >20%                    |                10 |              0.07804 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8071 | 15-20%                  |                10 |              0.08071 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8105 | >20%                    |                 5 |              0.1621  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8227 | <5%                     |                10 |              0.08227 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8362 | 10-15%                  |                 2 |              0.4181  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8521 | >20%                    |                10 |              0.08521 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8531 | >20%                    |                 5 |              0.17062 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8581 | >20%                    |                10 |              0.08581 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8607 | >20%                    |                10 |              0.08607 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8621 | 5-10%                   |                10 |              0.08621 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.863  | 15-20%                  |                10 |              0.0863  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8667 | >20%                    |                10 |              0.08667 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8673 | 15-20%                  |                 2 |              0.43365 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8693 | >20%                    |                 5 |              0.17386 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8852 | >20%                    |                10 |              0.08852 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8969 | 10-15%                  |                 2 |              0.44845 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9082 | >20%                    |                 2 |              0.4541  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9104 | >20%                    |                10 |              0.09104 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.923  |                         |                 2 |              0.4615  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9286 | >20%                    |                 5 |              0.18572 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9304 | >20%                    |                 5 |              0.18608 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9347 |                         |                10 |              0.09347 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9762 | >20%                    |                10 |              0.09762 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.001  | >20%                    |                 5 |              0.2002  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.002  | >20%                    |                10 |              0.1002  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.0105 | >20%                    |                 5 |              0.2021  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0138 | >20%                    |                10 |              0.10138 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0271 | 15-20%                  |                10 |              0.10271 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0394 | >20%                    |                10 |              0.10394 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0432 | >20%                    |                 5 |              0.20864 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0449 | >20%                    |                 5 |              0.20898 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0486 | 15-20%                  |                10 |              0.10486 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0542 | >20%                    |                 5 |              0.21084 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0638 | >20%                    |                10 |              0.10638 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0639 | >20%                    |                 5 |              0.21278 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0875 | >20%                    |                10 |              0.10875 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1285 | 5-10%                   |                 2 |              0.56425 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1381 | 10-15%                  |                 2 |              0.56905 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1391 | >20%                    |                10 |              0.11391 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1486 | 5-10%                   |                 5 |              0.22972 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1977 | >20%                    |                 2 |              0.59885 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2016 |                         |                 2 |              0.6008  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2176 | 5-10%                   |                10 |              0.12176 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2334 | 15-20%                  |                10 |              0.12334 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2572 |                         |                 5 |              0.25144 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.2727 |                         |                 5 |              0.25454 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2858 | >20%                    |                 5 |              0.25716 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4314 | 10-15%                  |                10 |              0.14314 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.4875 |                         |                10 |              0.14875 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4963 | >20%                    |                10 |              0.14963 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5098 | >20%                    |                10 |              0.15098 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5281 | 15-20%                  |                 5 |              0.30562 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5893 | >20%                    |                10 |              0.15893 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7161 | 15-20%                  |                10 |              0.17161 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.8421 |                         |                10 |              0.18421 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.912  | 5-10%                   |                 2 |              0.956   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9446 | 5-10%                   |                 2 |              0.9723  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      2.1071 | >20%                    |                10 |              0.21071 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.31   | >20%                    |                 5 |              0.462   |