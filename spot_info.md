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

Data correct as of 2025-02-21 01:39:00.083318, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1188 | >20%                    |                 2 |              0.0594  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1379 | <5%                     |                 5 |              0.02758 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1937 | <5%                     |                 5 |              0.03874 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 15-20%                  |                 5 |              0.039   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2006 | <5%                     |                 5 |              0.04012 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2152 | 5-10%                   |                 2 |              0.1076  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2177 | <5%                     |                 2 |              0.10885 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2185 | >20%                    |                 2 |              0.10925 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2266 | <5%                     |                 5 |              0.04532 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2277 | 10-15%                  |                 2 |              0.11385 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2364 | 15-20%                  |                 2 |              0.1182  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.2378 |                         |                 2 |              0.1189  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2384 | 15-20%                  |                 2 |              0.1192  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2397 | 15-20%                  |                 5 |              0.04794 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2412 | 15-20%                  |                10 |              0.02412 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2489 | >20%                    |                 2 |              0.12445 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2509 | 5-10%                   |                10 |              0.02509 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2671 | 5-10%                   |                 2 |              0.13355 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2778 | 10-15%                  |                 5 |              0.05556 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2798 | <5%                     |                 2 |              0.1399  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2801 | >20%                    |                 2 |              0.14005 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2805 | 10-15%                  |                 2 |              0.14025 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2899 | 15-20%                  |                 2 |              0.14495 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2933 | 5-10%                   |                 2 |              0.14665 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3005 | <5%                     |                 2 |              0.15025 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3011 | 5-10%                   |                 2 |              0.15055 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.302  | <5%                     |                10 |              0.0302  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3099 | >20%                    |                 5 |              0.06198 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3121 | 10-15%                  |                 2 |              0.15605 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3139 | <5%                     |                 2 |              0.15695 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3144 | <5%                     |                 2 |              0.1572  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3172 | 15-20%                  |                 5 |              0.06344 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.318  | 10-15%                  |                 2 |              0.159   |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3187 |                         |                 5 |              0.06374 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3193 | 5-10%                   |                10 |              0.03193 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3204 | <5%                     |                 2 |              0.1602  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3266 | >20%                    |                 2 |              0.1633  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3309 | 15-20%                  |                10 |              0.03309 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3322 | >20%                    |                10 |              0.03322 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3346 | >20%                    |                 2 |              0.1673  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3515 | >20%                    |                10 |              0.03515 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3572 | 10-15%                  |                 2 |              0.1786  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3589 | <5%                     |                 5 |              0.07178 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3639 | 10-15%                  |                 5 |              0.07278 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3675 | <5%                     |                10 |              0.03675 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3678 | <5%                     |                 2 |              0.1839  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3704 | 10-15%                  |                10 |              0.03704 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3775 | 5-10%                   |                 2 |              0.18875 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3868 | 5-10%                   |                 5 |              0.07736 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.396  | 5-10%                   |                 2 |              0.198   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3987 | <5%                     |                 2 |              0.19935 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4006 | 15-20%                  |                 2 |              0.2003  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4058 | >20%                    |                 5 |              0.08116 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4075 | 10-15%                  |                 2 |              0.20375 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4095 | >20%                    |                 5 |              0.0819  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4118 | 5-10%                   |                 2 |              0.2059  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4142 | 5-10%                   |                 5 |              0.08284 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4189 | <5%                     |                 2 |              0.20945 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4302 | >20%                    |                 2 |              0.2151  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4365 | <5%                     |                 2 |              0.21825 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4411 | >20%                    |                 5 |              0.08822 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4415 | <5%                     |                 5 |              0.0883  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4431 | >20%                    |                 2 |              0.22155 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4522 | >20%                    |                 5 |              0.09044 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4733 | 10-15%                  |                 5 |              0.09466 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4733 | 15-20%                  |                 5 |              0.09466 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4768 | 5-10%                   |                 5 |              0.09536 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.4804 |                         |                10 |              0.04804 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4844 | 10-15%                  |                 5 |              0.09688 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4881 | <5%                     |                 5 |              0.09762 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5005 | >20%                    |                 2 |              0.25025 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5012 | 5-10%                   |                 2 |              0.2506  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.502  | >20%                    |                 5 |              0.1004  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5035 | >20%                    |                 2 |              0.25175 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5079 | 10-15%                  |                 5 |              0.10158 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5119 | >20%                    |                 5 |              0.10238 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5149 | <5%                     |                10 |              0.05149 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5152 | >20%                    |                 2 |              0.2576  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5156 | >20%                    |                 2 |              0.2578  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5274 | <5%                     |                 2 |              0.2637  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5343 | 10-15%                  |                 5 |              0.10686 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5358 | >20%                    |                 2 |              0.2679  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5366 | 5-10%                   |                 2 |              0.2683  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5379 | 5-10%                   |                 5 |              0.10758 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5414 | 15-20%                  |                 2 |              0.2707  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5424 | >20%                    |                 5 |              0.10848 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5453 | >20%                    |                 2 |              0.27265 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5476 | >20%                    |                 5 |              0.10952 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5509 | >20%                    |                 2 |              0.27545 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.554  | >20%                    |                 2 |              0.277   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5562 | >20%                    |                 5 |              0.11124 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5601 | <5%                     |                 5 |              0.11202 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.564  | 10-15%                  |                 5 |              0.1128  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5695 | 5-10%                   |                 5 |              0.1139  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5711 | <5%                     |                 5 |              0.11422 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5712 | >20%                    |                 5 |              0.11424 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5713 | 5-10%                   |                10 |              0.05713 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5741 | 10-15%                  |                 2 |              0.28705 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5785 | <5%                     |                 5 |              0.1157  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5885 | 10-15%                  |                 5 |              0.1177  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5949 | >20%                    |                 5 |              0.11898 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6094 | 5-10%                   |                 5 |              0.12188 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6166 | 5-10%                   |                10 |              0.06166 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6184 | 10-15%                  |                 5 |              0.12368 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6237 | <5%                     |                10 |              0.06237 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6391 | >20%                    |                10 |              0.06391 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6392 | 15-20%                  |                10 |              0.06392 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6617 | >20%                    |                 2 |              0.33085 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6697 | >20%                    |                 5 |              0.13394 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6765 | 5-10%                   |                 5 |              0.1353  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6804 | 10-15%                  |                 5 |              0.13608 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6977 | >20%                    |                10 |              0.06977 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7016 | 5-10%                   |                10 |              0.07016 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7086 | >20%                    |                 2 |              0.3543  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7138 | >20%                    |                 5 |              0.14276 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7186 | >20%                    |                 5 |              0.14372 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7236 | 15-20%                  |                 5 |              0.14472 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7375 | >20%                    |                10 |              0.07375 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7393 | >20%                    |                10 |              0.07393 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7521 | <5%                     |                 5 |              0.15042 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7593 | >20%                    |                 5 |              0.15186 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7604 | <5%                     |                10 |              0.07604 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7671 | 15-20%                  |                10 |              0.07671 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7738 | >20%                    |                10 |              0.07738 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7776 | >20%                    |                 5 |              0.15552 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7843 | >20%                    |                 5 |              0.15686 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7893 | <5%                     |                 5 |              0.15786 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7938 | >20%                    |                10 |              0.07938 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8053 | 15-20%                  |                 2 |              0.40265 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8057 | 10-15%                  |                10 |              0.08057 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8058 | 5-10%                   |                10 |              0.08058 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8116 | 5-10%                   |                 2 |              0.4058  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8213 | 15-20%                  |                10 |              0.08213 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8238 | <5%                     |                10 |              0.08238 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8528 | >20%                    |                10 |              0.08528 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8628 | <5%                     |                10 |              0.08628 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.868  | <5%                     |                10 |              0.0868  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8692 | >20%                    |                10 |              0.08692 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8739 | 10-15%                  |                10 |              0.08739 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8803 | 10-15%                  |                10 |              0.08803 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8899 | >20%                    |                 2 |              0.44495 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8909 | <5%                     |                10 |              0.08909 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8923 | 15-20%                  |                10 |              0.08923 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8983 | <5%                     |                10 |              0.08983 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9009 | >20%                    |                10 |              0.09009 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.9205 | <5%                     |                10 |              0.09205 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9368 | 15-20%                  |                 5 |              0.18736 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9507 | <5%                     |                10 |              0.09507 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9515 | >20%                    |                10 |              0.09515 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.959  | <5%                     |                10 |              0.0959  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9675 | 15-20%                  |                 5 |              0.1935  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.986  | 10-15%                  |                10 |              0.0986  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9979 | >20%                    |                10 |              0.09979 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0026 | 5-10%                   |                 5 |              0.20052 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0188 | >20%                    |                10 |              0.10188 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0304 | 10-15%                  |                10 |              0.10304 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0537 | <5%                     |                10 |              0.10537 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.095  | 15-20%                  |                10 |              0.1095  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1113 | 5-10%                   |                10 |              0.11113 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1446 | >20%                    |                 2 |              0.5723  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.148  | >20%                    |                10 |              0.1148  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1568 | 10-15%                  |                 2 |              0.5784  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1605 | 15-20%                  |                10 |              0.11605 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2175 | >20%                    |                 5 |              0.2435  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2182 | >20%                    |                 2 |              0.6091  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2492 | >20%                    |                 5 |              0.24984 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2658 | 10-15%                  |                 5 |              0.25316 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3462 | >20%                    |                10 |              0.13462 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3696 | >20%                    |                10 |              0.13696 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6218 | >20%                    |                10 |              0.16218 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6717 | >20%                    |                10 |              0.16717 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6803 | >20%                    |                10 |              0.16803 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0014 | 5-10%                   |                10 |              0.20014 |