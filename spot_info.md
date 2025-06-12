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

Data correct as of 2025-06-12 01:55:19.987479, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.0978 | >20%                    |                 2 |              0.0489  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1323 | >20%                    |                 5 |              0.02646 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1502 | 5-10%                   |                 2 |              0.0751  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1745 | >20%                    |                 5 |              0.0349  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 15-20%                  |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2004 | >20%                    |                 2 |              0.1002  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2014 | 10-15%                  |                10 |              0.02014 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2043 | >20%                    |                 5 |              0.04086 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2158 | >20%                    |                 2 |              0.1079  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2174 | >20%                    |                 2 |              0.1087  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2223 | 15-20%                  |                 2 |              0.11115 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2299 | >20%                    |                 2 |              0.11495 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2357 | >20%                    |                 5 |              0.04714 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2361 | 15-20%                  |                 2 |              0.11805 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2429 | <5%                     |                 2 |              0.12145 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2433 | >20%                    |                10 |              0.02433 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2559 | 15-20%                  |                10 |              0.02559 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2578 | 5-10%                   |                10 |              0.02578 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2579 | 15-20%                  |                 2 |              0.12895 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2726 | 15-20%                  |                 2 |              0.1363  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2733 | >20%                    |                 2 |              0.13665 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.277  | >20%                    |                 2 |              0.1385  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2782 | >20%                    |                 5 |              0.05564 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.281  | <5%                     |                 2 |              0.1405  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2887 | >20%                    |                 2 |              0.14435 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2901 | >20%                    |                 2 |              0.14505 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2956 | 10-15%                  |                 2 |              0.1478  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3065 | >20%                    |                 2 |              0.15325 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3081 | >20%                    |                 2 |              0.15405 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3106 | >20%                    |                 2 |              0.1553  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3176 | >20%                    |                 2 |              0.1588  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3178 | >20%                    |                 2 |              0.1589  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3187 | >20%                    |                 5 |              0.06374 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3297 | 15-20%                  |                 5 |              0.06594 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.333  | 15-20%                  |                 5 |              0.0666  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3382 | >20%                    |                 5 |              0.06764 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3402 | <5%                     |                 2 |              0.1701  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3425 | 5-10%                   |                 2 |              0.17125 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3495 | >20%                    |                10 |              0.03495 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3513 | 10-15%                  |                 2 |              0.17565 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3669 | 10-15%                  |                 2 |              0.18345 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3688 | 10-15%                  |                 2 |              0.1844  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3705 | >20%                    |                 5 |              0.0741  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3739 | >20%                    |                 2 |              0.18695 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3828 | >20%                    |                 2 |              0.1914  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3846 | >20%                    |                10 |              0.03846 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3916 | >20%                    |                10 |              0.03916 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3946 | >20%                    |                 5 |              0.07892 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3989 | >20%                    |                 2 |              0.19945 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3992 | >20%                    |                 2 |              0.1996  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3993 | <5%                     |                 5 |              0.07986 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4058 | 10-15%                  |                 5 |              0.08116 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4082 | >20%                    |                 5 |              0.08164 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4091 | 10-15%                  |                 5 |              0.08182 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4137 | 15-20%                  |                 2 |              0.20685 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4147 | 5-10%                   |                 2 |              0.20735 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4193 | >20%                    |                10 |              0.04193 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4203 | <5%                     |                 2 |              0.21015 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4212 | >20%                    |                 5 |              0.08424 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4251 | >20%                    |                10 |              0.04251 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4294 | <5%                     |                 5 |              0.08588 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4331 | >20%                    |                10 |              0.04331 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4382 | 15-20%                  |                 5 |              0.08764 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4402 | >20%                    |                 2 |              0.2201  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4434 | >20%                    |                 2 |              0.2217  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4464 | >20%                    |                 5 |              0.08928 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4537 | >20%                    |                 2 |              0.22685 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4566 | >20%                    |                 5 |              0.09132 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4628 | >20%                    |                 5 |              0.09256 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.464  | <5%                     |                 5 |              0.0928  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.466  | >20%                    |                 5 |              0.0932  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4712 | >20%                    |                 2 |              0.2356  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4732 | 15-20%                  |                10 |              0.04732 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4745 | 15-20%                  |                 5 |              0.0949  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4806 | <5%                     |                 5 |              0.09612 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4874 | >20%                    |                 5 |              0.09748 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4895 | 10-15%                  |                 5 |              0.0979  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4923 | >20%                    |                 2 |              0.24615 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4974 | >20%                    |                 5 |              0.09948 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5001 | >20%                    |                 2 |              0.25005 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5005 | 5-10%                   |                 5 |              0.1001  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5077 | 5-10%                   |                 2 |              0.25385 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5085 | 10-15%                  |                 2 |              0.25425 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5086 | <5%                     |                 5 |              0.10172 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5087 | 10-15%                  |                 5 |              0.10174 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5114 | 15-20%                  |                 2 |              0.2557  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5157 | <5%                     |                 5 |              0.10314 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5188 | 15-20%                  |                 2 |              0.2594  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5367 | >20%                    |                 2 |              0.26835 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5386 | >20%                    |                 2 |              0.2693  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5415 | >20%                    |                 5 |              0.1083  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5434 | >20%                    |                 5 |              0.10868 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5555 | >20%                    |                 2 |              0.27775 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5631 | 10-15%                  |                10 |              0.05631 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5772 | >20%                    |                 5 |              0.11544 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5794 | 10-15%                  |                 5 |              0.11588 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5805 | >20%                    |                 5 |              0.1161  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6016 | 5-10%                   |                 2 |              0.3008  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6046 | >20%                    |                 2 |              0.3023  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6087 | >20%                    |                 2 |              0.30435 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6136 | <5%                     |                 2 |              0.3068  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6219 | >20%                    |                 5 |              0.12438 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6307 | >20%                    |                 2 |              0.31535 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.632  | >20%                    |                 5 |              0.1264  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6345 | >20%                    |                10 |              0.06345 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.635  | >20%                    |                 5 |              0.127   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6411 | >20%                    |                 5 |              0.12822 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6426 | >20%                    |                 5 |              0.12852 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6484 | 10-15%                  |                 5 |              0.12968 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6511 | <5%                     |                 5 |              0.13022 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6529 | >20%                    |                10 |              0.06529 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6537 | >20%                    |                 5 |              0.13074 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6552 | >20%                    |                 2 |              0.3276  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.657  | <5%                     |                10 |              0.0657  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6719 | >20%                    |                10 |              0.06719 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6776 | 10-15%                  |                 2 |              0.3388  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6825 | >20%                    |                10 |              0.06825 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6872 | >20%                    |                 5 |              0.13744 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6916 | >20%                    |                10 |              0.06916 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.696  | 15-20%                  |                10 |              0.0696  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7    | 15-20%                  |                10 |              0.07    |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7046 | >20%                    |                10 |              0.07046 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7047 | >20%                    |                 5 |              0.14094 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7121 | >20%                    |                10 |              0.07121 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7125 | 10-15%                  |                 5 |              0.1425  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7197 | 15-20%                  |                10 |              0.07197 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7231 | 15-20%                  |                10 |              0.07231 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7284 | <5%                     |                 5 |              0.14568 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7309 | <5%                     |                10 |              0.07309 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7325 | >20%                    |                 2 |              0.36625 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7426 | >20%                    |                 2 |              0.3713  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7435 | <5%                     |                 5 |              0.1487  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7437 | >20%                    |                10 |              0.07437 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7473 | >20%                    |                10 |              0.07473 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7638 | <5%                     |                10 |              0.07638 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7771 | >20%                    |                 5 |              0.15542 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7854 | >20%                    |                 5 |              0.15708 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7885 | >20%                    |                10 |              0.07885 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.791  | <5%                     |                10 |              0.0791  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7992 | >20%                    |                10 |              0.07992 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8037 | 5-10%                   |                 5 |              0.16074 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8076 | 15-20%                  |                10 |              0.08076 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8317 | 10-15%                  |                10 |              0.08317 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8439 | >20%                    |                10 |              0.08439 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8487 | >20%                    |                10 |              0.08487 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8492 | 15-20%                  |                10 |              0.08492 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8585 | >20%                    |                10 |              0.08585 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8962 | >20%                    |                10 |              0.08962 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9054 | <5%                     |                10 |              0.09054 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9099 | >20%                    |                 5 |              0.18198 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9323 | >20%                    |                10 |              0.09323 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9505 | >20%                    |                10 |              0.09505 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9544 | >20%                    |                10 |              0.09544 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9638 | >20%                    |                10 |              0.09638 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9728 | >20%                    |                10 |              0.09728 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9848 | >20%                    |                 5 |              0.19696 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0076 | >20%                    |                10 |              0.10076 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0159 | <5%                     |                 2 |              0.50795 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0201 | >20%                    |                10 |              0.10201 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0384 | >20%                    |                10 |              0.10384 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0387 | 10-15%                  |                10 |              0.10387 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0431 | <5%                     |                 2 |              0.52155 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0612 | >20%                    |                 2 |              0.5306  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0666 | >20%                    |                10 |              0.10666 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0891 | >20%                    |                10 |              0.10891 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0997 | >20%                    |                 2 |              0.54985 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1001 | 15-20%                  |                10 |              0.11001 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1233 | >20%                    |                 5 |              0.22466 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1245 | <5%                     |                 5 |              0.2249  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1329 | 15-20%                  |                10 |              0.11329 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1611 | >20%                    |                 5 |              0.23222 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2093 | 10-15%                  |                10 |              0.12093 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2114 | 15-20%                  |                10 |              0.12114 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2949 | >20%                    |                10 |              0.12949 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3163 | <5%                     |                10 |              0.13163 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3841 | >20%                    |                10 |              0.13841 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4063 | <5%                     |                 5 |              0.28126 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4685 | >20%                    |                 5 |              0.2937  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.489  | >20%                    |                 2 |              0.7445  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5996 | 10-15%                  |                10 |              0.15996 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.7126 | <5%                     |                10 |              0.17126 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9939 | <5%                     |                10 |              0.19939 |