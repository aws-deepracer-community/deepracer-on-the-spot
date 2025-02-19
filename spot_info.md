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

Data correct as of 2025-02-19 01:38:13.495898, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1148 | >20%                    |                 2 |              0.0574  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1344 | <5%                     |                 5 |              0.02688 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.1892 | <5%                     |                 5 |              0.03784 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1918 | <5%                     |                 5 |              0.03836 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 15-20%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2166 | <5%                     |                 2 |              0.1083  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2169 | 5-10%                   |                 2 |              0.10845 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2269 | >20%                    |                 2 |              0.11345 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2282 | 10-15%                  |                 2 |              0.1141  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2357 | 15-20%                  |                 2 |              0.11785 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2374 | 15-20%                  |                 2 |              0.1187  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2392 | 15-20%                  |                 5 |              0.04784 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2482 | >20%                    |                 2 |              0.1241  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2643 | 5-10%                   |                 2 |              0.13215 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2681 | 5-10%                   |                10 |              0.02681 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2738 | >20%                    |                 2 |              0.1369  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2758 | 10-15%                  |                 2 |              0.1379  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2844 | <5%                     |                 2 |              0.1422  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.2874 | <5%                     |                10 |              0.02874 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2895 | 15-20%                  |                 2 |              0.14475 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2936 | 5-10%                   |                 2 |              0.1468  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.295  | <5%                     |                 2 |              0.1475  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2995 | 5-10%                   |                 2 |              0.14975 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3021 | <5%                     |                 2 |              0.15105 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3053 | <5%                     |                 2 |              0.15265 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3134 | 10-15%                  |                 2 |              0.1567  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3154 | <5%                     |                 2 |              0.1577  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3203 | 10-15%                  |                 2 |              0.16015 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3245 | 15-20%                  |                 5 |              0.0649  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3292 | >20%                    |                 5 |              0.06584 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3293 | >20%                    |                 2 |              0.16465 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3367 | >20%                    |                 2 |              0.16835 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.337  | 5-10%                   |                10 |              0.0337  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3452 | >20%                    |                10 |              0.03452 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3504 | 15-20%                  |                10 |              0.03504 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3562 | <5%                     |                 5 |              0.07124 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3583 | 10-15%                  |                 2 |              0.17915 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3634 | 10-15%                  |                 5 |              0.07268 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3636 | <5%                     |                 2 |              0.1818  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3767 | 5-10%                   |                 2 |              0.18835 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3772 | 5-10%                   |                 2 |              0.1886  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3826 | <5%                     |                10 |              0.03826 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3853 | >20%                    |                10 |              0.03853 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3894 | 15-20%                  |                 2 |              0.1947  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3949 | 5-10%                   |                 5 |              0.07898 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4008 | >20%                    |                 5 |              0.08016 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4016 | <5%                     |                 2 |              0.2008  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4041 | 5-10%                   |                 2 |              0.20205 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4046 | >20%                    |                 2 |              0.2023  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4127 | 10-15%                  |                 2 |              0.20635 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4157 | 5-10%                   |                 5 |              0.08314 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4184 | >20%                    |                 5 |              0.08368 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4247 | >20%                    |                 5 |              0.08494 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4291 | <5%                     |                 2 |              0.21455 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4397 | <5%                     |                 2 |              0.21985 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4434 | <5%                     |                 5 |              0.08868 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4486 | >20%                    |                 5 |              0.08972 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4502 | >20%                    |                 2 |              0.2251  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4686 | 5-10%                   |                 5 |              0.09372 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4732 | 15-20%                  |                 5 |              0.09464 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4753 | 10-15%                  |                 5 |              0.09506 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4786 | <5%                     |                 5 |              0.09572 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4815 | 5-10%                   |                 2 |              0.24075 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4876 | >20%                    |                 2 |              0.2438  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4911 | 10-15%                  |                 5 |              0.09822 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5047 | >20%                    |                 5 |              0.10094 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5062 | >20%                    |                 5 |              0.10124 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5086 | 5-10%                   |                 2 |              0.2543  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5108 | >20%                    |                 2 |              0.2554  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5158 | >20%                    |                 2 |              0.2579  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5193 | 10-15%                  |                 5 |              0.10386 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5269 | >20%                    |                 2 |              0.26345 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5311 | 5-10%                   |                 5 |              0.10622 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.532  | <5%                     |                 5 |              0.1064  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5334 | <5%                     |                 2 |              0.2667  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5385 | >20%                    |                 2 |              0.26925 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.548  | >20%                    |                 2 |              0.274   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5495 | 15-20%                  |                 2 |              0.27475 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5498 | >20%                    |                 5 |              0.10996 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5537 | 5-10%                   |                 5 |              0.11074 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.557  | >20%                    |                 2 |              0.2785  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.559  | <5%                     |                10 |              0.0559  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5621 | <5%                     |                 5 |              0.11242 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5634 | >20%                    |                 2 |              0.2817  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5638 | >20%                    |                 5 |              0.11276 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5657 | 10-15%                  |                 5 |              0.11314 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5699 | >20%                    |                 5 |              0.11398 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5708 | >20%                    |                 5 |              0.11416 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5759 | 10-15%                  |                 2 |              0.28795 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5804 | 5-10%                   |                10 |              0.05804 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5825 | 10-15%                  |                 5 |              0.1165  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5835 | <5%                     |                 5 |              0.1167  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5923 | 10-15%                  |                 5 |              0.11846 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5987 | 5-10%                   |                10 |              0.05987 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6079 | >20%                    |                 5 |              0.12158 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6178 | 5-10%                   |                 5 |              0.12356 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6275 | <5%                     |                10 |              0.06275 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6275 | 10-15%                  |                 5 |              0.1255  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6331 | >20%                    |                10 |              0.06331 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6596 | >20%                    |                 2 |              0.3298  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.678  | >20%                    |                 2 |              0.339   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6852 | >20%                    |                 5 |              0.13704 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6873 | 10-15%                  |                 5 |              0.13746 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.69   | >20%                    |                10 |              0.069   |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6909 | 5-10%                   |                 5 |              0.13818 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6975 | >20%                    |                 5 |              0.1395  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7066 | 5-10%                   |                10 |              0.07066 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7146 | >20%                    |                10 |              0.07146 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.717  | 15-20%                  |                 5 |              0.1434  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7199 | 15-20%                  |                10 |              0.07199 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7234 | >20%                    |                 5 |              0.14468 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7329 | >20%                    |                10 |              0.07329 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7553 | >20%                    |                 5 |              0.15106 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7613 | <5%                     |                 5 |              0.15226 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.765  | 15-20%                  |                10 |              0.0765  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7696 | >20%                    |                10 |              0.07696 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.772  | >20%                    |                 5 |              0.1544  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7855 | >20%                    |                 5 |              0.1571  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7893 | <5%                     |                10 |              0.07893 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7945 | <5%                     |                 5 |              0.1589  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8001 | >20%                    |                10 |              0.08001 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8089 | 5-10%                   |                10 |              0.08089 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8174 | 15-20%                  |                 2 |              0.4087  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8188 | 5-10%                   |                 2 |              0.4094  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8211 | 10-15%                  |                10 |              0.08211 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8216 | >20%                    |                10 |              0.08216 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8245 | <5%                     |                10 |              0.08245 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8324 | 15-20%                  |                10 |              0.08324 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8419 | <5%                     |                10 |              0.08419 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8446 | >20%                    |                10 |              0.08446 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8454 | 10-15%                  |                10 |              0.08454 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8579 | <5%                     |                10 |              0.08579 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8612 | 10-15%                  |                10 |              0.08612 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8621 | >20%                    |                10 |              0.08621 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8803 | 15-20%                  |                10 |              0.08803 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8901 | <5%                     |                10 |              0.08901 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8932 | >20%                    |                 2 |              0.4466  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.906  | >20%                    |                10 |              0.0906  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9068 | 15-20%                  |                 5 |              0.18136 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9072 | <5%                     |                10 |              0.09072 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9102 | 5-10%                   |                 5 |              0.18204 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9349 | 15-20%                  |                 5 |              0.18698 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9421 | <5%                     |                10 |              0.09421 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9625 | <5%                     |                10 |              0.09625 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9918 | 10-15%                  |                10 |              0.09918 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9937 | >20%                    |                10 |              0.09937 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9978 | 10-15%                  |                10 |              0.09978 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0087 | <5%                     |                10 |              0.10087 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0188 | >20%                    |                10 |              0.10188 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.044  | <5%                     |                10 |              0.1044  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0895 | 15-20%                  |                10 |              0.10895 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1215 | >20%                    |                 2 |              0.56075 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1417 | 15-20%                  |                10 |              0.11417 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.142  | 5-10%                   |                10 |              0.1142  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1654 | >20%                    |                10 |              0.11654 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1725 | >20%                    |                 2 |              0.58625 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1805 | >20%                    |                 5 |              0.2361  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1927 | 10-15%                  |                 2 |              0.59635 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2305 | >20%                    |                 5 |              0.2461  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2458 | 10-15%                  |                 5 |              0.24916 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3308 | >20%                    |                10 |              0.13308 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3567 | >20%                    |                10 |              0.13567 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.504  | >20%                    |                10 |              0.1504  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6883 | >20%                    |                10 |              0.16883 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6935 | >20%                    |                10 |              0.16935 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0047 | 5-10%                   |                10 |              0.20047 |