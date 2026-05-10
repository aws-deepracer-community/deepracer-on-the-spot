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

Data correct as of 2026-05-10 03:42:57.367183, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1413 | 15-20%                  |                 2 |              0.07065 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1505 | >20%                    |                 2 |              0.07525 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1886 | >20%                    |                 2 |              0.0943  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1998 | >20%                    |                 2 |              0.0999  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2087 | 15-20%                  |                 5 |              0.04174 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2323 | >20%                    |                 2 |              0.11615 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2347 | 15-20%                  |                 2 |              0.11735 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2373 | >20%                    |                 2 |              0.11865 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2431 | 15-20%                  |                 5 |              0.04862 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2483 | >20%                    |                 5 |              0.04966 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2512 | >20%                    |                 2 |              0.1256  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2648 | >20%                    |                 5 |              0.05296 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2811 | >20%                    |                 2 |              0.14055 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2831 | >20%                    |                 2 |              0.14155 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2856 | 15-20%                  |                 5 |              0.05712 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2862 | >20%                    |                 5 |              0.05724 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.2904 | 10-15%                  |                 2 |              0.1452  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2939 | 15-20%                  |                 2 |              0.14695 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.297  | >20%                    |                 2 |              0.1485  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3029 | 5-10%                   |                10 |              0.03029 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3077 | >20%                    |                 2 |              0.15385 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3107 | 5-10%                   |                10 |              0.03107 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3109 | 10-15%                  |                 2 |              0.15545 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3152 | >20%                    |                 5 |              0.06304 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3251 | 10-15%                  |                 2 |              0.16255 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3252 | >20%                    |                10 |              0.03252 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3279 | >20%                    |                 2 |              0.16395 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3321 | 10-15%                  |                 2 |              0.16605 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3355 | >20%                    |                 2 |              0.16775 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3377 | <5%                     |                 2 |              0.16885 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3414 | >20%                    |                 5 |              0.06828 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3544 | >20%                    |                 5 |              0.07088 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3585 | >20%                    |                 5 |              0.0717  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.366  | >20%                    |                 5 |              0.0732  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3745 | >20%                    |                 5 |              0.0749  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3833 | >20%                    |                 5 |              0.07666 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3871 | >20%                    |                 2 |              0.19355 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3922 | >20%                    |                 5 |              0.07844 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3981 | >20%                    |                 2 |              0.19905 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4115 | >20%                    |                 2 |              0.20575 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4216 | 5-10%                   |                 2 |              0.2108  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4279 | >20%                    |                 5 |              0.08558 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4296 | <5%                     |                 2 |              0.2148  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4367 | >20%                    |                 5 |              0.08734 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.437  | >20%                    |                 5 |              0.0874  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4377 | >20%                    |                 5 |              0.08754 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4413 | >20%                    |                10 |              0.04413 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4415 | >20%                    |                 2 |              0.22075 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4502 | 15-20%                  |                 2 |              0.2251  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4562 | >20%                    |                 5 |              0.09124 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4568 | <5%                     |                 2 |              0.2284  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4583 | >20%                    |                 2 |              0.22915 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4689 | 15-20%                  |                 2 |              0.23445 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4725 | >20%                    |                 2 |              0.23625 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4759 | >20%                    |                 5 |              0.09518 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4803 | >20%                    |                 5 |              0.09606 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4817 | >20%                    |                 5 |              0.09634 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4845 | >20%                    |                 5 |              0.0969  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4877 | >20%                    |                10 |              0.04877 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4896 | >20%                    |                10 |              0.04896 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4932 | >20%                    |                10 |              0.04932 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4935 | 10-15%                  |                 2 |              0.24675 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4948 | >20%                    |                 5 |              0.09896 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4972 | >20%                    |                 2 |              0.2486  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5027 | >20%                    |                 2 |              0.25135 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5049 | >20%                    |                 2 |              0.25245 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5125 | 15-20%                  |                 5 |              0.1025  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5194 | 5-10%                   |                 5 |              0.10388 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5457 | 10-15%                  |                 5 |              0.10914 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5491 | <5%                     |                 5 |              0.10982 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5771 | >20%                    |                 5 |              0.11542 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5918 | 15-20%                  |                 2 |              0.2959  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5919 | >20%                    |                10 |              0.05919 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6081 | >20%                    |                 2 |              0.30405 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6103 | >20%                    |                10 |              0.06103 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6137 | >20%                    |                 5 |              0.12274 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6146 | 5-10%                   |                10 |              0.06146 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.621  | 5-10%                   |                 2 |              0.3105  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6253 | >20%                    |                10 |              0.06253 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6269 | >20%                    |                 2 |              0.31345 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6324 | >20%                    |                 5 |              0.12648 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6526 | >20%                    |                 5 |              0.13052 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6701 | >20%                    |                10 |              0.06701 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6768 | >20%                    |                 2 |              0.3384  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6776 | >20%                    |                 5 |              0.13552 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6799 | >20%                    |                10 |              0.06799 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6809 | >20%                    |                 5 |              0.13618 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6847 | 5-10%                   |                10 |              0.06847 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6864 | 5-10%                   |                 5 |              0.13728 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6894 | 15-20%                  |                10 |              0.06894 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6904 | 10-15%                  |                 2 |              0.3452  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.709  | >20%                    |                10 |              0.0709  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7097 | >20%                    |                 5 |              0.14194 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.713  | >20%                    |                 2 |              0.3565  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7136 | >20%                    |                 5 |              0.14272 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7269 | >20%                    |                 5 |              0.14538 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7293 | >20%                    |                10 |              0.07293 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7432 | >20%                    |                 2 |              0.3716  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.753  | >20%                    |                 2 |              0.3765  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.7696 | >20%                    |                10 |              0.07696 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7721 | 15-20%                  |                10 |              0.07721 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7723 | >20%                    |                 5 |              0.15446 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7755 | >20%                    |                 5 |              0.1551  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7865 | >20%                    |                10 |              0.07865 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8003 |                         |                 2 |              0.40015 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8007 | >20%                    |                 2 |              0.40035 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8022 | >20%                    |                10 |              0.08022 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8469 | >20%                    |                10 |              0.08469 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.85   | >20%                    |                 5 |              0.17    |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8611 |                         |                 2 |              0.43055 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8625 | >20%                    |                10 |              0.08625 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8745 | 5-10%                   |                10 |              0.08745 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8851 | 15-20%                  |                10 |              0.08851 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9124 | >20%                    |                10 |              0.09124 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9158 | >20%                    |                10 |              0.09158 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9235 | 15-20%                  |                10 |              0.09235 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9293 | 10-15%                  |                10 |              0.09293 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9321 | >20%                    |                 5 |              0.18642 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9355 | >20%                    |                10 |              0.09355 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9389 | >20%                    |                10 |              0.09389 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.948  | >20%                    |                 5 |              0.1896  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9496 | >20%                    |                 5 |              0.18992 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9792 | 15-20%                  |                10 |              0.09792 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9872 | >20%                    |                 5 |              0.19744 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9925 | >20%                    |                10 |              0.09925 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0239 | >20%                    |                10 |              0.10239 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0274 | >20%                    |                10 |              0.10274 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0373 | >20%                    |                 2 |              0.51865 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.04   | >20%                    |                10 |              0.104   |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0677 |                         |                 5 |              0.21354 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0695 | >20%                    |                10 |              0.10695 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1072 | >20%                    |                10 |              0.11072 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1114 | 15-20%                  |                10 |              0.11114 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1115 | >20%                    |                 5 |              0.2223  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1194 |                         |                 5 |              0.22388 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1794 | 10-15%                  |                10 |              0.11794 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1813 | >20%                    |                 5 |              0.23626 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1988 | 5-10%                   |                 2 |              0.5994  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2022 | 5-10%                   |                 2 |              0.6011  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2675 | >20%                    |                 5 |              0.2535  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3301 | >20%                    |                 5 |              0.26602 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.447  | 15-20%                  |                 5 |              0.2894  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4778 | >20%                    |                10 |              0.14778 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.522  | >20%                    |                10 |              0.1522  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5393 | >20%                    |                10 |              0.15393 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5417 | 15-20%                  |                10 |              0.15417 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.569  | 10-15%                  |                 2 |              0.7845  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6007 |                         |                10 |              0.16007 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.643  | >20%                    |                10 |              0.1643  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6765 | 15-20%                  |                10 |              0.16765 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.8072 |                         |                10 |              0.18072 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1431 | >20%                    |                10 |              0.21431 |