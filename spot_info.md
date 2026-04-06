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

Data correct as of 2026-04-06 02:54:58.981335, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1868 | >20%                    |                 2 |              0.0934  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2035 | 15-20%                  |                 2 |              0.10175 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2191 | >20%                    |                 2 |              0.10955 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2193 | >20%                    |                 2 |              0.10965 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2465 | >20%                    |                 2 |              0.12325 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2485 | >20%                    |                 2 |              0.12425 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2497 | 15-20%                  |                 5 |              0.04994 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2635 | >20%                    |                 2 |              0.13175 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2799 | 15-20%                  |                 2 |              0.13995 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2816 | 15-20%                  |                 5 |              0.05632 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2873 | 5-10%                   |                10 |              0.02873 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2913 | 10-15%                  |                 2 |              0.14565 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2957 | >20%                    |                10 |              0.02957 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3    | >20%                    |                 5 |              0.06    |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3018 | 5-10%                   |                10 |              0.03018 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3141 | >20%                    |                 2 |              0.15705 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3152 | >20%                    |                 5 |              0.06304 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3157 | >20%                    |                 5 |              0.06314 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3265 | <5%                     |                 2 |              0.16325 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3276 | 15-20%                  |                 5 |              0.06552 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3307 | >20%                    |                 2 |              0.16535 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3314 | 10-15%                  |                 2 |              0.1657  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3322 | 10-15%                  |                 2 |              0.1661  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3372 | >20%                    |                10 |              0.03372 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3425 | >20%                    |                 2 |              0.17125 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3427 | <5%                     |                 2 |              0.17135 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3438 | >20%                    |                 5 |              0.06876 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3477 | 5-10%                   |                10 |              0.03477 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3498 | 10-15%                  |                 2 |              0.1749  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.367  | >20%                    |                 2 |              0.1835  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3687 | 15-20%                  |                 2 |              0.18435 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3843 | >20%                    |                 2 |              0.19215 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3899 | >20%                    |                 5 |              0.07798 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4015 | >20%                    |                 5 |              0.0803  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4035 | >20%                    |                 2 |              0.20175 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4054 | >20%                    |                 5 |              0.08108 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4079 | >20%                    |                 5 |              0.08158 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4131 | <5%                     |                 2 |              0.20655 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4222 | 10-15%                  |                 2 |              0.2111  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4279 | >20%                    |                 2 |              0.21395 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4285 | >20%                    |                 2 |              0.21425 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4331 | 15-20%                  |                 2 |              0.21655 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.434  | >20%                    |                 5 |              0.0868  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4349 | >20%                    |                 2 |              0.21745 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4474 | >20%                    |                 2 |              0.2237  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4509 | >20%                    |                 5 |              0.09018 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4545 | >20%                    |                 5 |              0.0909  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4559 | >20%                    |                 5 |              0.09118 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4573 | >20%                    |                 2 |              0.22865 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4653 | 15-20%                  |                 2 |              0.23265 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4699 | >20%                    |                 5 |              0.09398 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4743 | >20%                    |                 2 |              0.23715 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4746 | >20%                    |                 5 |              0.09492 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4747 | 15-20%                  |                 2 |              0.23735 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4807 | >20%                    |                 5 |              0.09614 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4824 | <5%                     |                 5 |              0.09648 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4894 | >20%                    |                 5 |              0.09788 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4942 | >20%                    |                 5 |              0.09884 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5076 | >20%                    |                 5 |              0.10152 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5077 | >20%                    |                 5 |              0.10154 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5107 | >20%                    |                 2 |              0.25535 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5131 | >20%                    |                 2 |              0.25655 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5259 | 5-10%                   |                10 |              0.05259 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5362 | 5-10%                   |                 5 |              0.10724 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5374 | >20%                    |                 2 |              0.2687  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5497 | >20%                    |                10 |              0.05497 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5498 | 5-10%                   |                 2 |              0.2749  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5544 | >20%                    |                10 |              0.05544 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5577 | 15-20%                  |                10 |              0.05577 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.568  | >20%                    |                 2 |              0.284   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5691 | >20%                    |                 5 |              0.11382 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5706 | 15-20%                  |                 5 |              0.11412 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5757 | >20%                    |                 5 |              0.11514 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5768 | >20%                    |                 2 |              0.2884  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.581  | >20%                    |                10 |              0.0581  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5949 | 10-15%                  |                 5 |              0.11898 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5998 | >20%                    |                10 |              0.05998 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6069 | <5%                     |                10 |              0.06069 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.608  | 5-10%                   |                 5 |              0.1216  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6103 | >20%                    |                 5 |              0.12206 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6198 | >20%                    |                 5 |              0.12396 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6366 | >20%                    |                10 |              0.06366 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6374 | >20%                    |                10 |              0.06374 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6381 | 10-15%                  |                 2 |              0.31905 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6475 | >20%                    |                 5 |              0.1295  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6486 | >20%                    |                 5 |              0.12972 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6643 | 5-10%                   |                 2 |              0.33215 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6703 | >20%                    |                 2 |              0.33515 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6711 | >20%                    |                 5 |              0.13422 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6756 | >20%                    |                10 |              0.06756 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6799 | >20%                    |                 5 |              0.13598 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.685  | >20%                    |                10 |              0.0685  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7076 | 15-20%                  |                10 |              0.07076 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7278 | >20%                    |                 5 |              0.14556 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7358 | >20%                    |                10 |              0.07358 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7441 | >20%                    |                 5 |              0.14882 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7448 | >20%                    |                 5 |              0.14896 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7448 | 15-20%                  |                10 |              0.07448 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.757  | >20%                    |                 5 |              0.1514  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7584 | >20%                    |                10 |              0.07584 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.762  | >20%                    |                10 |              0.0762  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7709 | >20%                    |                 2 |              0.38545 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7777 | >20%                    |                 5 |              0.15554 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.778  | >20%                    |                 5 |              0.1556  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7833 | >20%                    |                10 |              0.07833 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7946 | >20%                    |                10 |              0.07946 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8049 | >20%                    |                10 |              0.08049 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8218 | >20%                    |                 5 |              0.16436 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8249 | >20%                    |                 5 |              0.16498 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8258 | >20%                    |                10 |              0.08258 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8265 | 5-10%                   |                 2 |              0.41325 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8274 | >20%                    |                 2 |              0.4137  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8382 | >20%                    |                10 |              0.08382 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.843  | >20%                    |                 5 |              0.1686  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8463 | >20%                    |                10 |              0.08463 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8466 | >20%                    |                10 |              0.08466 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8503 | 5-10%                   |                10 |              0.08503 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8511 | >20%                    |                10 |              0.08511 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8636 | >20%                    |                 2 |              0.4318  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8777 | >20%                    |                 5 |              0.17554 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8827 | 15-20%                  |                10 |              0.08827 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8928 | >20%                    |                 2 |              0.4464  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8931 | >20%                    |                10 |              0.08931 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9034 | >20%                    |                10 |              0.09034 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9226 | >20%                    |                10 |              0.09226 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9245 | >20%                    |                10 |              0.09245 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9442 | 10-15%                  |                 2 |              0.4721  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9484 | 15-20%                  |                10 |              0.09484 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.962  | >20%                    |                 5 |              0.1924  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9629 | 10-15%                  |                10 |              0.09629 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9642 | >20%                    |                10 |              0.09642 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0013 | >20%                    |                10 |              0.10013 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0376 | >20%                    |                10 |              0.10376 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.041  | 5-10%                   |                10 |              0.1041  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0525 | 15-20%                  |                10 |              0.10525 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0681 | >20%                    |                 5 |              0.21362 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0768 | >20%                    |                10 |              0.10768 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1317 | 10-15%                  |                10 |              0.11317 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.135  | >20%                    |                10 |              0.1135  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1877 | >20%                    |                 5 |              0.23754 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.264  | 15-20%                  |                10 |              0.1264  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2906 | 15-20%                  |                10 |              0.12906 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3581 | >20%                    |                10 |              0.13581 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4172 | >20%                    |                 5 |              0.28344 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.427  | 5-10%                   |                 2 |              0.7135  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4492 | 15-20%                  |                 5 |              0.28984 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4523 | >20%                    |                 2 |              0.72615 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.8102 |                         |                 5 |              0.36204 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.8648 |                         |                 2 |              0.9324  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9849 | >20%                    |                10 |              0.19849 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      2.4907 |                         |                10 |              0.24907 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.8918 | >20%                    |                10 |              0.28918 |