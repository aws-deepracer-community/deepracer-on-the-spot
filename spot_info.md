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

Data correct as of 2024-09-23 01:37:04.462963, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0941 | <5%                     |                 2 |              0.04705 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1605 | 5-10%                   |                 2 |              0.08025 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.205  | 15-20%                  |                 2 |              0.1025  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2188 | <5%                     |                 2 |              0.1094  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2279 | 5-10%                   |                 2 |              0.11395 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2348 | <5%                     |                 2 |              0.1174  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.237  | 15-20%                  |                 5 |              0.0474  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.237  | 15-20%                  |                 2 |              0.1185  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2609 | <5%                     |                 2 |              0.13045 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2689 | >20%                    |                10 |              0.02689 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2725 | <5%                     |                 2 |              0.13625 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.275  | <5%                     |                 2 |              0.1375  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | <5%                     |                 5 |              0.0552  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2767 | 10-15%                  |                 2 |              0.13835 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.279  | 15-20%                  |                 5 |              0.0558  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2886 | <5%                     |                 2 |              0.1443  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2905 | >20%                    |                 5 |              0.0581  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3015 | <5%                     |                 2 |              0.15075 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3093 | <5%                     |                 2 |              0.15465 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3101 | 5-10%                   |                 2 |              0.15505 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3331 | <5%                     |                 5 |              0.06662 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3516 | 5-10%                   |                 5 |              0.07032 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3559 | <5%                     |                 2 |              0.17795 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3586 | <5%                     |                 2 |              0.1793  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3588 | 10-15%                  |                 2 |              0.1794  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3732 | <5%                     |                 2 |              0.1866  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3773 | <5%                     |                 5 |              0.07546 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3798 | 15-20%                  |                10 |              0.03798 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3801 | <5%                     |                 5 |              0.07602 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3835 | <5%                     |                10 |              0.03835 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3891 | >20%                    |                 2 |              0.19455 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3905 | <5%                     |                10 |              0.03905 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3975 | >20%                    |                 2 |              0.19875 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4003 | <5%                     |                 2 |              0.20015 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4031 | >20%                    |                 2 |              0.20155 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.408  | 5-10%                   |                 2 |              0.204   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4089 | 15-20%                  |                 5 |              0.08178 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4124 | <5%                     |                 2 |              0.2062  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.418  | 5-10%                   |                 5 |              0.0836  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4268 | >20%                    |                 5 |              0.08536 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.4383 | >20%                    |                 5 |              0.08766 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4399 | <5%                     |                 2 |              0.21995 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4421 | <5%                     |                 5 |              0.08842 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.443  | <5%                     |                 5 |              0.0886  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4453 | 10-15%                  |                 2 |              0.22265 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4491 | >20%                    |                 2 |              0.22455 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4495 | 5-10%                   |                 5 |              0.0899  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4674 | <5%                     |                 5 |              0.09348 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4708 | 5-10%                   |                 5 |              0.09416 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4845 | 5-10%                   |                 5 |              0.0969  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4897 | <5%                     |                 5 |              0.09794 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4969 | 15-20%                  |                 2 |              0.24845 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4996 | >20%                    |                 2 |              0.2498  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5013 | 15-20%                  |                 5 |              0.10026 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5048 | 10-15%                  |                 5 |              0.10096 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5238 | 10-15%                  |                10 |              0.05238 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.54   | <5%                     |                 5 |              0.108   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.542  | <5%                     |                 5 |              0.1084  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5488 | <5%                     |                 5 |              0.10976 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5506 | >20%                    |                 5 |              0.11012 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.556  | <5%                     |                10 |              0.0556  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5607 | 15-20%                  |                 2 |              0.28035 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5792 | >20%                    |                 2 |              0.2896  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5793 | >20%                    |                10 |              0.05793 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5995 | 5-10%                   |                 5 |              0.1199  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6015 | >20%                    |                 5 |              0.1203  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6023 | >20%                    |                 5 |              0.12046 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6027 | >20%                    |                10 |              0.06027 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6065 | >20%                    |                 5 |              0.1213  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6086 | 15-20%                  |                 2 |              0.3043  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6179 | >20%                    |                10 |              0.06179 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6265 | 5-10%                   |                10 |              0.06265 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6324 | >20%                    |                 5 |              0.12648 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6455 | 5-10%                   |                 5 |              0.1291  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6657 | <5%                     |                10 |              0.06657 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6775 | <5%                     |                10 |              0.06775 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7385 | 15-20%                  |                10 |              0.07385 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7397 | >20%                    |                 5 |              0.14794 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7426 | >20%                    |                 2 |              0.3713  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7666 | 10-15%                  |                10 |              0.07666 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7709 | <5%                     |                10 |              0.07709 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7772 | >20%                    |                 5 |              0.15544 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7822 | >20%                    |                10 |              0.07822 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7952 | 10-15%                  |                10 |              0.07952 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8094 | >20%                    |                10 |              0.08094 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8159 | >20%                    |                10 |              0.08159 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8213 | 15-20%                  |                10 |              0.08213 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8626 | <5%                     |                 2 |              0.4313  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8794 | <5%                     |                10 |              0.08794 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.885  | >20%                    |                10 |              0.0885  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8853 | 5-10%                   |                 5 |              0.17706 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9089 | >20%                    |                10 |              0.09089 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9089 | >20%                    |                 5 |              0.18178 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9114 | 5-10%                   |                 2 |              0.4557  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9193 | 5-10%                   |                10 |              0.09193 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9198 | <5%                     |                10 |              0.09198 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9373 | >20%                    |                10 |              0.09373 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9375 | >20%                    |                 5 |              0.1875  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.995  | 5-10%                   |                10 |              0.0995  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0351 | <5%                     |                 2 |              0.51755 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0364 | 10-15%                  |                10 |              0.10364 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0427 | >20%                    |                10 |              0.10427 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0729 | >20%                    |                10 |              0.10729 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0749 | 5-10%                   |                10 |              0.10749 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0948 | >20%                    |                10 |              0.10948 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1021 | 10-15%                  |                 5 |              0.22042 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2031 | >20%                    |                10 |              0.12031 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2362 | 15-20%                  |                10 |              0.12362 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4506 | >20%                    |                10 |              0.14506 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7007 | 5-10%                   |                10 |              0.17007 |