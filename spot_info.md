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

Data correct as of 2026-04-21 03:17:16.654147, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1748 | >20%                    |                 2 |              0.0874  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1845 | 15-20%                  |                 2 |              0.09225 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1958 | >20%                    |                 2 |              0.0979  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2272 | >20%                    |                 2 |              0.1136  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2285 | >20%                    |                 2 |              0.11425 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2512 | 15-20%                  |                 5 |              0.05024 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2595 | 10-15%                  |                 2 |              0.12975 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2622 | >20%                    |                 2 |              0.1311  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2639 | >20%                    |                 2 |              0.13195 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.27   | 15-20%                  |                 5 |              0.054   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.279  | 5-10%                   |                10 |              0.0279  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2834 | 15-20%                  |                 2 |              0.1417  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2974 | >20%                    |                10 |              0.02974 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2996 | 15-20%                  |                 2 |              0.1498  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3079 | >20%                    |                 2 |              0.15395 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3115 | >20%                    |                 2 |              0.15575 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.312  | 15-20%                  |                 5 |              0.0624  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.319  | >20%                    |                 5 |              0.0638  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3217 | <5%                     |                10 |              0.03217 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3224 | 10-15%                  |                 2 |              0.1612  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3252 | >20%                    |                 5 |              0.06504 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.333  | <5%                     |                 2 |              0.1665  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3333 | 5-10%                   |                10 |              0.03333 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3402 | >20%                    |                10 |              0.03402 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.343  | 10-15%                  |                 2 |              0.1715  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3434 | >20%                    |                 5 |              0.06868 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3464 | >20%                    |                 2 |              0.1732  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3595 | >20%                    |                 5 |              0.0719  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3695 | 5-10%                   |                10 |              0.03695 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3709 | >20%                    |                 2 |              0.18545 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3717 | >20%                    |                 5 |              0.07434 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3842 | >20%                    |                 2 |              0.1921  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3851 | >20%                    |                10 |              0.03851 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3861 | >20%                    |                 2 |              0.19305 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3868 | 10-15%                  |                 2 |              0.1934  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3997 | >20%                    |                 5 |              0.07994 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4037 | >20%                    |                 2 |              0.20185 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4059 | >20%                    |                 5 |              0.08118 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4089 | >20%                    |                 5 |              0.08178 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4099 | >20%                    |                 2 |              0.20495 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.41   | >20%                    |                 5 |              0.082   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4104 | <5%                     |                 2 |              0.2052  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4112 | <5%                     |                 2 |              0.2056  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4158 | >20%                    |                 5 |              0.08316 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4201 | >20%                    |                 2 |              0.21005 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4225 | >20%                    |                 5 |              0.0845  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4226 | >20%                    |                 5 |              0.08452 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.423  | >20%                    |                 2 |              0.2115  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.435  | >20%                    |                 5 |              0.087   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4388 | >20%                    |                 2 |              0.2194  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.449  | >20%                    |                 2 |              0.2245  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4507 | >20%                    |                 5 |              0.09014 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4542 | >20%                    |                 5 |              0.09084 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4547 | 15-20%                  |                 2 |              0.22735 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4586 | 15-20%                  |                 2 |              0.2293  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4705 | >20%                    |                 5 |              0.0941  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.471  | >20%                    |                 2 |              0.2355  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4737 | >20%                    |                 5 |              0.09474 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4801 | >20%                    |                 2 |              0.24005 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4801 | 10-15%                  |                 2 |              0.24005 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4802 | >20%                    |                 5 |              0.09604 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4837 | >20%                    |                 5 |              0.09674 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4851 | >20%                    |                 5 |              0.09702 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4868 | >20%                    |                10 |              0.04868 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4871 | >20%                    |                 5 |              0.09742 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.497  | >20%                    |                10 |              0.0497  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5047 | 5-10%                   |                 2 |              0.25235 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5053 | >20%                    |                 2 |              0.25265 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5257 | 15-20%                  |                 2 |              0.26285 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5319 | 5-10%                   |                 5 |              0.10638 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5326 | 5-10%                   |                 2 |              0.2663  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5413 | >20%                    |                 5 |              0.10826 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5473 | >20%                    |                10 |              0.05473 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5596 | 10-15%                  |                 5 |              0.11192 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5653 | 15-20%                  |                 5 |              0.11306 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5662 | >20%                    |                 2 |              0.2831  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5722 | <5%                     |                 5 |              0.11444 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5822 | 5-10%                   |                 5 |              0.11644 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6028 | >20%                    |                 2 |              0.3014  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6059 | >20%                    |                 2 |              0.30295 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6109 | >20%                    |                10 |              0.06109 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6136 | >20%                    |                 5 |              0.12272 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6244 | >20%                    |                10 |              0.06244 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6314 | >20%                    |                10 |              0.06314 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6315 | 10-15%                  |                 2 |              0.31575 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6392 | >20%                    |                 2 |              0.3196  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6456 | >20%                    |                 5 |              0.12912 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.655  | >20%                    |                 5 |              0.131   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6697 | >20%                    |                 5 |              0.13394 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6757 | >20%                    |                10 |              0.06757 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6809 | >20%                    |                 5 |              0.13618 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6866 | >20%                    |                10 |              0.06866 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6885 | >20%                    |                 2 |              0.34425 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6908 | >20%                    |                 5 |              0.13816 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7046 | >20%                    |                10 |              0.07046 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7151 | >20%                    |                 5 |              0.14302 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7344 | 5-10%                   |                10 |              0.07344 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7438 | >20%                    |                10 |              0.07438 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7512 | >20%                    |                 5 |              0.15024 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7552 | 15-20%                  |                10 |              0.07552 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7604 | >20%                    |                 5 |              0.15208 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7617 | >20%                    |                 2 |              0.38085 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7633 | >20%                    |                10 |              0.07633 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7756 | >20%                    |                10 |              0.07756 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7757 | >20%                    |                10 |              0.07757 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7786 | >20%                    |                 5 |              0.15572 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7851 | 5-10%                   |                10 |              0.07851 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7917 | >20%                    |                10 |              0.07917 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7961 | >20%                    |                10 |              0.07961 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.799  | 15-20%                  |                10 |              0.0799  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8102 | >20%                    |                 5 |              0.16204 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8262 | >20%                    |                 5 |              0.16524 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8282 | >20%                    |                 2 |              0.4141  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8371 | >20%                    |                10 |              0.08371 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8572 | >20%                    |                10 |              0.08572 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8612 | 15-20%                  |                10 |              0.08612 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8846 | >20%                    |                10 |              0.08846 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9038 | 15-20%                  |                10 |              0.09038 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.914  | >20%                    |                 5 |              0.1828  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9173 | >20%                    |                 5 |              0.18346 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9301 | 10-15%                  |                10 |              0.09301 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9319 | 5-10%                   |                 2 |              0.46595 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9422 | >20%                    |                10 |              0.09422 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9662 | >20%                    |                10 |              0.09662 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9779 | >20%                    |                 5 |              0.19558 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9818 | 15-20%                  |                10 |              0.09818 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9845 | >20%                    |                10 |              0.09845 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9894 | >20%                    |                10 |              0.09894 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9923 | >20%                    |                10 |              0.09923 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0196 | 5-10%                   |                10 |              0.10196 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0209 | 15-20%                  |                10 |              0.10209 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0418 | >20%                    |                 5 |              0.20836 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0469 | >20%                    |                10 |              0.10469 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0642 | >20%                    |                10 |              0.10642 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0956 | 10-15%                  |                10 |              0.10956 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1144 | 10-15%                  |                 2 |              0.5572  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1463 | >20%                    |                 5 |              0.22926 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1695 |                         |                 5 |              0.2339  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.17   | >20%                    |                10 |              0.117   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1718 | >20%                    |                 2 |              0.5859  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.2037 |                         |                 2 |              0.60185 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2872 | >20%                    |                10 |              0.12872 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3587 | >20%                    |                 5 |              0.27174 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3746 | >20%                    |                 5 |              0.27492 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4087 | 15-20%                  |                10 |              0.14087 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4177 | 15-20%                  |                10 |              0.14177 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4767 | 5-10%                   |                 2 |              0.73835 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5177 | >20%                    |                10 |              0.15177 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.578  | >20%                    |                10 |              0.1578  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5831 |                         |                10 |              0.15831 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6353 | 15-20%                  |                 5 |              0.32706 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.9595 | >20%                    |                10 |              0.29595 |