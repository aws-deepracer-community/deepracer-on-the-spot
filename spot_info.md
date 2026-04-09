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

Data correct as of 2026-04-09 02:44:23.918110, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1783 | >20%                    |                 2 |              0.08915 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.198  | 15-20%                  |                 2 |              0.099   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.208  | >20%                    |                 2 |              0.104   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2213 | >20%                    |                 2 |              0.11065 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2443 | >20%                    |                 2 |              0.12215 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2475 | >20%                    |                 2 |              0.12375 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2616 | >20%                    |                 2 |              0.1308  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2691 | 15-20%                  |                 5 |              0.05382 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2738 | 5-10%                   |                10 |              0.02738 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2752 | 15-20%                  |                 5 |              0.05504 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | 15-20%                  |                 2 |              0.14135 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2846 | >20%                    |                10 |              0.02846 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.308  | >20%                    |                 2 |              0.154   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.311  | >20%                    |                 5 |              0.0622  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3139 | >20%                    |                 5 |              0.06278 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3154 | 15-20%                  |                 5 |              0.06308 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3173 | 10-15%                  |                 2 |              0.15865 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3223 | <5%                     |                 2 |              0.16115 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3258 | 10-15%                  |                 2 |              0.1629  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3274 | >20%                    |                 2 |              0.1637  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3354 | 5-10%                   |                10 |              0.03354 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3384 | >20%                    |                 5 |              0.06768 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3385 | <5%                     |                 2 |              0.16925 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3405 | 10-15%                  |                 2 |              0.17025 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3416 | 15-20%                  |                 2 |              0.1708  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3437 | 5-10%                   |                10 |              0.03437 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3514 | >20%                    |                 2 |              0.1757  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3531 | >20%                    |                 5 |              0.07062 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3599 | >20%                    |                 2 |              0.17995 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3606 | >20%                    |                10 |              0.03606 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3793 | 10-15%                  |                 2 |              0.18965 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3831 | >20%                    |                 2 |              0.19155 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3932 | >20%                    |                 5 |              0.07864 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3977 | >20%                    |                 5 |              0.07954 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3983 | >20%                    |                 5 |              0.07966 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4098 | >20%                    |                 2 |              0.2049  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4136 | >20%                    |                 5 |              0.08272 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4151 | <5%                     |                 2 |              0.20755 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4201 | >20%                    |                 2 |              0.21005 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.421  | 15-20%                  |                 2 |              0.2105  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4225 | 10-15%                  |                 2 |              0.21125 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4253 | >20%                    |                 5 |              0.08506 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4269 | >20%                    |                 2 |              0.21345 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4318 | >20%                    |                 5 |              0.08636 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4374 | >20%                    |                 2 |              0.2187  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4413 | >20%                    |                 2 |              0.22065 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4427 | 15-20%                  |                 2 |              0.22135 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4506 | >20%                    |                 5 |              0.09012 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4591 | >20%                    |                 5 |              0.09182 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4649 | 15-20%                  |                 2 |              0.23245 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4649 | >20%                    |                 2 |              0.23245 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4652 | >20%                    |                 5 |              0.09304 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4677 | >20%                    |                 5 |              0.09354 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4686 | >20%                    |                 5 |              0.09372 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4769 | >20%                    |                 5 |              0.09538 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4825 | >20%                    |                 5 |              0.0965  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.485  | >20%                    |                 2 |              0.2425  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4886 | >20%                    |                 5 |              0.09772 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4986 | >20%                    |                 5 |              0.09972 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5086 | >20%                    |                 2 |              0.2543  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5104 | >20%                    |                 2 |              0.2552  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5216 | >20%                    |                10 |              0.05216 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.524  | >20%                    |                10 |              0.0524  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5338 | 5-10%                   |                 2 |              0.2669  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5366 | 5-10%                   |                 5 |              0.10732 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5375 | <5%                     |                10 |              0.05375 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5527 | >20%                    |                 2 |              0.27635 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5618 | <5%                     |                 5 |              0.11236 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5651 | >20%                    |                 2 |              0.28255 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5704 | 5-10%                   |                10 |              0.05704 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5748 | >20%                    |                 5 |              0.11496 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5755 | 15-20%                  |                 5 |              0.1151  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5882 | >20%                    |                10 |              0.05882 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5894 | 10-15%                  |                 5 |              0.11788 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5976 | >20%                    |                 5 |              0.11952 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6018 | >20%                    |                10 |              0.06018 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6037 | >20%                    |                10 |              0.06037 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.606  | >20%                    |                 2 |              0.303   |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6092 | 5-10%                   |                 5 |              0.12184 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.613  | >20%                    |                10 |              0.0613  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6221 | >20%                    |                 5 |              0.12442 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6257 | 15-20%                  |                10 |              0.06257 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.626  | >20%                    |                 5 |              0.1252  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6279 | 10-15%                  |                 2 |              0.31395 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6377 | >20%                    |                10 |              0.06377 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.644  | 5-10%                   |                 2 |              0.322   |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6485 | >20%                    |                 5 |              0.1297  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6501 | >20%                    |                 2 |              0.32505 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6734 | >20%                    |                 5 |              0.13468 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6763 | >20%                    |                10 |              0.06763 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6799 | >20%                    |                 5 |              0.13598 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6916 | >20%                    |                10 |              0.06916 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7124 | >20%                    |                 5 |              0.14248 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7192 | >20%                    |                 5 |              0.14384 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7221 | 15-20%                  |                10 |              0.07221 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.729  | >20%                    |                10 |              0.0729  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7391 | >20%                    |                10 |              0.07391 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.7473 | >20%                    |                 5 |              0.14946 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7502 | >20%                    |                10 |              0.07502 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7571 | >20%                    |                 5 |              0.15142 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7719 | >20%                    |                 2 |              0.38595 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7744 | >20%                    |                10 |              0.07744 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7772 | >20%                    |                 5 |              0.15544 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7774 | >20%                    |                 2 |              0.3887  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7885 | >20%                    |                 5 |              0.1577  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8102 | >20%                    |                10 |              0.08102 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8117 | 5-10%                   |                10 |              0.08117 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8137 | >20%                    |                 5 |              0.16274 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8152 | >20%                    |                 5 |              0.16304 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8165 | >20%                    |                 5 |              0.1633  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8378 | >20%                    |                10 |              0.08378 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8413 | >20%                    |                10 |              0.08413 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8447 | 15-20%                  |                10 |              0.08447 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.845  | 5-10%                   |                 2 |              0.4225  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8479 | >20%                    |                 2 |              0.42395 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8553 | >20%                    |                10 |              0.08553 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8764 | >20%                    |                 5 |              0.17528 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8767 | >20%                    |                10 |              0.08767 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8835 | 15-20%                  |                10 |              0.08835 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8863 | >20%                    |                 5 |              0.17726 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8904 | >20%                    |                10 |              0.08904 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8915 | >20%                    |                10 |              0.08915 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9041 | >20%                    |                 2 |              0.45205 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9067 | >20%                    |                10 |              0.09067 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9395 | 15-20%                  |                10 |              0.09395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9425 | 10-15%                  |                10 |              0.09425 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9677 | >20%                    |                 5 |              0.19354 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9773 | >20%                    |                10 |              0.09773 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9856 | >20%                    |                10 |              0.09856 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.991  | >20%                    |                10 |              0.0991  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0032 | 10-15%                  |                 2 |              0.5016  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0147 | 5-10%                   |                10 |              0.10147 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0336 | >20%                    |                10 |              0.10336 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0401 | >20%                    |                10 |              0.10401 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0445 | 15-20%                  |                10 |              0.10445 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1136 | >20%                    |                10 |              0.11136 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1302 | >20%                    |                 5 |              0.22604 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1382 | >20%                    |                10 |              0.11382 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.199  | >20%                    |                 5 |              0.2398  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2393 | 10-15%                  |                10 |              0.12393 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2457 | 15-20%                  |                10 |              0.12457 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2858 | 15-20%                  |                10 |              0.12858 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4486 | >20%                    |                 5 |              0.28972 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4678 | >20%                    |                 2 |              0.7339  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4724 | >20%                    |                10 |              0.14724 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4909 | 5-10%                   |                 2 |              0.74545 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4937 | 15-20%                  |                 5 |              0.29874 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.6124 |                         |                 5 |              0.32248 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.9095 |                         |                 2 |              0.95475 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9833 | >20%                    |                10 |              0.19833 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      2.2513 |                         |                10 |              0.22513 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0504 | >20%                    |                10 |              0.30504 |