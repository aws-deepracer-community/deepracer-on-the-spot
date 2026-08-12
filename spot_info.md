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

Data correct as of 2026-08-12 02:14:02.233848, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1833 | >20%                    |                 2 |              0.09165 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1835 | >20%                    |                 2 |              0.09175 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2006 | >20%                    |                 2 |              0.1003  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2056 | >20%                    |                 2 |              0.1028  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2228 | 15-20%                  |                 2 |              0.1114  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2239 | >20%                    |                 2 |              0.11195 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2476 | >20%                    |                 5 |              0.04952 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2518 | 10-15%                  |                 2 |              0.1259  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2556 | >20%                    |                 2 |              0.1278  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2696 | >20%                    |                 2 |              0.1348  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2723 | 15-20%                  |                 2 |              0.13615 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2885 | >20%                    |                 2 |              0.14425 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2889 | >20%                    |                 2 |              0.14445 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2964 | 5-10%                   |                10 |              0.02964 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3006 | 15-20%                  |                 2 |              0.1503  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3099 | >20%                    |                 2 |              0.15495 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3122 | 10-15%                  |                 2 |              0.1561  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3253 | 15-20%                  |                 5 |              0.06506 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.328  | 15-20%                  |                 2 |              0.164   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3303 | >20%                    |                 5 |              0.06606 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3352 | >20%                    |                 5 |              0.06704 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3414 | >20%                    |                 5 |              0.06828 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3465 | 5-10%                   |                10 |              0.03465 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3521 | >20%                    |                 2 |              0.17605 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3711 | >20%                    |                10 |              0.03711 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3725 | <5%                     |                 2 |              0.18625 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3754 | >20%                    |                10 |              0.03754 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3836 | >20%                    |                10 |              0.03836 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3858 | >20%                    |                 5 |              0.07716 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3973 | >20%                    |                 2 |              0.19865 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4    | >20%                    |                 2 |              0.2     |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.401  | >20%                    |                10 |              0.0401  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4047 | 10-15%                  |                 2 |              0.20235 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4076 | 15-20%                  |                 2 |              0.2038  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4124 | <5%                     |                 2 |              0.2062  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4152 | >20%                    |                 2 |              0.2076  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.418  | >20%                    |                 5 |              0.0836  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4222 | >20%                    |                 5 |              0.08444 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4317 | >20%                    |                 5 |              0.08634 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4323 | >20%                    |                 2 |              0.21615 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4507 | >20%                    |                10 |              0.04507 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4516 | 10-15%                  |                 2 |              0.2258  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4559 | >20%                    |                 2 |              0.22795 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4574 | >20%                    |                 5 |              0.09148 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4589 | 5-10%                   |                10 |              0.04589 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4594 | >20%                    |                 2 |              0.2297  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4609 | >20%                    |                 2 |              0.23045 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4617 | >20%                    |                 2 |              0.23085 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4647 | 15-20%                  |                 5 |              0.09294 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4721 | >20%                    |                 5 |              0.09442 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4785 | >20%                    |                 5 |              0.0957  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4972 | >20%                    |                 5 |              0.09944 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4975 | >20%                    |                 5 |              0.0995  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5016 | >20%                    |                 2 |              0.2508  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5071 | >20%                    |                 5 |              0.10142 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5077 | >20%                    |                 5 |              0.10154 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5081 | 10-15%                  |                10 |              0.05081 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5355 | >20%                    |                 5 |              0.1071  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.546  | >20%                    |                 2 |              0.273   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5493 | 5-10%                   |                 2 |              0.27465 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5541 | <5%                     |                 2 |              0.27705 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5554 | >20%                    |                10 |              0.05554 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5666 | >20%                    |                 2 |              0.2833  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5683 | >20%                    |                10 |              0.05683 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5697 | >20%                    |                 2 |              0.28485 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.57   | 15-20%                  |                10 |              0.057   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5809 | >20%                    |                 5 |              0.11618 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5815 | 10-15%                  |                 5 |              0.1163  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.582  | >20%                    |                 2 |              0.291   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6005 | >20%                    |                 5 |              0.1201  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6073 | >20%                    |                10 |              0.06073 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6104 | >20%                    |                 5 |              0.12208 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6191 | >20%                    |                 5 |              0.12382 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6221 | <5%                     |                 5 |              0.12442 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6245 | 5-10%                   |                 5 |              0.1249  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6266 | 15-20%                  |                 5 |              0.12532 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6269 | >20%                    |                 5 |              0.12538 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6338 | >20%                    |                 5 |              0.12676 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6381 | >20%                    |                 5 |              0.12762 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6566 | >20%                    |                10 |              0.06566 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6635 | >20%                    |                 5 |              0.1327  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6791 | >20%                    |                10 |              0.06791 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6844 | >20%                    |                 5 |              0.13688 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6879 | >20%                    |                 2 |              0.34395 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6906 | >20%                    |                 2 |              0.3453  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6934 | >20%                    |                10 |              0.06934 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7068 | >20%                    |                 5 |              0.14136 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7295 |                         |                 2 |              0.36475 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7325 | >20%                    |                10 |              0.07325 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.735  | >20%                    |                10 |              0.0735  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7372 | >20%                    |                 5 |              0.14744 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7674 | >20%                    |                 5 |              0.15348 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7677 | >20%                    |                10 |              0.07677 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7711 | >20%                    |                 5 |              0.15422 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7977 | >20%                    |                10 |              0.07977 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8107 | >20%                    |                 5 |              0.16214 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8153 | <5%                     |                10 |              0.08153 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8171 | >20%                    |                 2 |              0.40855 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8267 | 5-10%                   |                10 |              0.08267 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8282 | 10-15%                  |                 2 |              0.4141  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8349 | 10-15%                  |                 2 |              0.41745 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8351 | >20%                    |                 2 |              0.41755 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8623 | 15-20%                  |                10 |              0.08623 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8649 | 15-20%                  |                10 |              0.08649 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8776 | 15-20%                  |                10 |              0.08776 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8831 | >20%                    |                 5 |              0.17662 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8905 |                         |                 5 |              0.1781  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8949 | >20%                    |                10 |              0.08949 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9012 | >20%                    |                10 |              0.09012 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9036 | >20%                    |                 5 |              0.18072 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9044 | >20%                    |                10 |              0.09044 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9084 | >20%                    |                 5 |              0.18168 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9094 | 5-10%                   |                10 |              0.09094 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9127 | >20%                    |                10 |              0.09127 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9146 | >20%                    |                10 |              0.09146 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9199 | >20%                    |                10 |              0.09199 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9231 |                         |                 2 |              0.46155 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9351 | 15-20%                  |                10 |              0.09351 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9826 | >20%                    |                10 |              0.09826 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9842 | >20%                    |                 5 |              0.19684 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0051 | >20%                    |                 2 |              0.50255 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0111 | 15-20%                  |                10 |              0.10111 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0242 | >20%                    |                10 |              0.10242 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0248 | >20%                    |                 5 |              0.20496 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0413 | >20%                    |                 5 |              0.20826 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0428 | >20%                    |                10 |              0.10428 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0557 | >20%                    |                10 |              0.10557 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0659 | 15-20%                  |                 2 |              0.53295 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1002 |                         |                10 |              0.11002 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1173 | >20%                    |                 2 |              0.55865 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1944 | >20%                    |                10 |              0.11944 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.224  | 15-20%                  |                10 |              0.1224  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2431 | >20%                    |                 5 |              0.24862 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2619 | >20%                    |                10 |              0.12619 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.306  | 5-10%                   |                 2 |              0.653   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3083 | >20%                    |                10 |              0.13083 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.3121 |                         |                 5 |              0.26242 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3509 | >20%                    |                 5 |              0.27018 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3522 | >20%                    |                10 |              0.13522 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3739 | >20%                    |                 5 |              0.27478 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.417  | 10-15%                  |                 2 |              0.7085  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4426 | >20%                    |                10 |              0.14426 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4484 | 10-15%                  |                10 |              0.14484 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4643 | >20%                    |                10 |              0.14643 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.4895 | >20%                    |                 5 |              0.2979  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5778 | 15-20%                  |                 5 |              0.31556 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.588  | 5-10%                   |                 2 |              0.794   |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6224 | 5-10%                   |                10 |              0.16224 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.6257 | 5-10%                   |                 5 |              0.32514 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6281 | >20%                    |                10 |              0.16281 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6498 | 15-20%                  |                10 |              0.16498 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7584 | >20%                    |                10 |              0.17584 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.825  |                         |                10 |              0.1825  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0413 | 5-10%                   |                 2 |              1.02065 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.7742 | >20%                    |                 5 |              0.55484 |