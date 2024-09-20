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

Data correct as of 2024-09-20 01:27:24.084501, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0933 | <5%                     |                 2 |              0.04665 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1807 | 5-10%                   |                 2 |              0.09035 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2078 | 15-20%                  |                 2 |              0.1039  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2297 | <5%                     |                 2 |              0.11485 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2379 | 15-20%                  |                 2 |              0.11895 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.239  | <5%                     |                 2 |              0.1195  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2422 | 5-10%                   |                 2 |              0.1211  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.256  | <5%                     |                 2 |              0.128   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2662 | 15-20%                  |                 5 |              0.05324 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2692 | >20%                    |                10 |              0.02692 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2695 | <5%                     |                 2 |              0.13475 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2865 | 10-15%                  |                 2 |              0.14325 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2927 | <5%                     |                 5 |              0.05854 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2961 | <5%                     |                 2 |              0.14805 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3026 | <5%                     |                 2 |              0.1513  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3101 | 15-20%                  |                 5 |              0.06202 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3117 | <5%                     |                 2 |              0.15585 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3128 | 5-10%                   |                 2 |              0.1564  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3176 | <5%                     |                 2 |              0.1588  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3364 | >20%                    |                 5 |              0.06728 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3378 | <5%                     |                 5 |              0.06756 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3477 | <5%                     |                10 |              0.03477 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3551 | 15-20%                  |                10 |              0.03551 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3572 | 5-10%                   |                 5 |              0.07144 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3607 | <5%                     |                 2 |              0.18035 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3627 | 10-15%                  |                 2 |              0.18135 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3631 | <5%                     |                 2 |              0.18155 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3683 | <5%                     |                 2 |              0.18415 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3725 | <5%                     |                 5 |              0.0745  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3753 | <5%                     |                 5 |              0.07506 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3769 | <5%                     |                 2 |              0.18845 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3955 | >20%                    |                 2 |              0.19775 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.396  | >20%                    |                 2 |              0.198   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4056 | 5-10%                   |                 2 |              0.2028  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4154 | 15-20%                  |                 5 |              0.08308 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.417  | <5%                     |                 2 |              0.2085  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4261 | 5-10%                   |                 5 |              0.08522 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4305 | >20%                    |                 2 |              0.21525 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.435  | <5%                     |                10 |              0.0435  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4351 | <5%                     |                 2 |              0.21755 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4436 | <5%                     |                 5 |              0.08872 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4486 | 10-15%                  |                 2 |              0.2243  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4536 | >20%                    |                 2 |              0.2268  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4539 | 5-10%                   |                 5 |              0.09078 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4597 | <5%                     |                 5 |              0.09194 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4636 | >20%                    |                 5 |              0.09272 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4731 | 5-10%                   |                 5 |              0.09462 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.478  | <5%                     |                 5 |              0.0956  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4781 | 5-10%                   |                 5 |              0.09562 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.486  | 15-20%                  |                 5 |              0.0972  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.4888 | >20%                    |                 5 |              0.09776 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4927 | <5%                     |                10 |              0.04927 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5022 | >20%                    |                 2 |              0.2511  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5032 | 15-20%                  |                 2 |              0.2516  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5056 | 10-15%                  |                 5 |              0.10112 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.524  | >20%                    |                 5 |              0.1048  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5275 | <5%                     |                 5 |              0.1055  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5393 | <5%                     |                 5 |              0.10786 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.549  | <5%                     |                 5 |              0.1098  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5552 | 10-15%                  |                10 |              0.05552 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.564  | >20%                    |                 5 |              0.1128  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5709 | <5%                     |                 5 |              0.11418 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5757 | 15-20%                  |                 2 |              0.28785 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5812 | >20%                    |                 2 |              0.2906  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5925 | >20%                    |                 5 |              0.1185  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5978 | 5-10%                   |                10 |              0.05978 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6046 | 5-10%                   |                 5 |              0.12092 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6112 | >20%                    |                 5 |              0.12224 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6328 | 15-20%                  |                 2 |              0.3164  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6333 | >20%                    |                 5 |              0.12666 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6652 | >20%                    |                10 |              0.06652 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6791 | <5%                     |                10 |              0.06791 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6798 | <5%                     |                10 |              0.06798 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6816 | >20%                    |                10 |              0.06816 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6967 | >20%                    |                 2 |              0.34835 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.697  | >20%                    |                10 |              0.0697  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7052 | 5-10%                   |                 5 |              0.14104 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7421 | 15-20%                  |                10 |              0.07421 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7654 | >20%                    |                 5 |              0.15308 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7765 | 10-15%                  |                10 |              0.07765 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7786 | >20%                    |                 5 |              0.15572 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7877 | <5%                     |                10 |              0.07877 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8007 | 15-20%                  |                10 |              0.08007 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8014 | >20%                    |                10 |              0.08014 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8037 | >20%                    |                10 |              0.08037 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8094 | <5%                     |                 2 |              0.4047  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8144 | >20%                    |                10 |              0.08144 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8199 | 10-15%                  |                10 |              0.08199 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8629 | 5-10%                   |                 5 |              0.17258 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8796 | <5%                     |                10 |              0.08796 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8941 | >20%                    |                10 |              0.08941 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9058 | <5%                     |                10 |              0.09058 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9344 | >20%                    |                 5 |              0.18688 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9359 | >20%                    |                 5 |              0.18718 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9412 | 5-10%                   |                10 |              0.09412 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9557 | 5-10%                   |                 2 |              0.47785 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.957  | >20%                    |                10 |              0.0957  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.958  | >20%                    |                10 |              0.0958  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9981 | 5-10%                   |                10 |              0.09981 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0181 | <5%                     |                 2 |              0.50905 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0368 | >20%                    |                10 |              0.10368 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0414 | 10-15%                  |                10 |              0.10414 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0882 | 10-15%                  |                 5 |              0.21764 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1092 | >20%                    |                10 |              0.11092 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.115  | >20%                    |                10 |              0.1115  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1816 | 15-20%                  |                10 |              0.11816 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1853 | 5-10%                   |                10 |              0.11853 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2335 | >20%                    |                10 |              0.12335 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4388 | >20%                    |                10 |              0.14388 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7228 | 5-10%                   |                10 |              0.17228 |