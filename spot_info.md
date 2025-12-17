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

Data correct as of 2025-12-17 01:55:33.155669, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1129 | >20%                    |                 2 |              0.05645 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1511 | 15-20%                  |                 2 |              0.07555 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1552 | >20%                    |                 2 |              0.0776  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1577 | <5%                     |                 2 |              0.07885 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1767 | >20%                    |                 2 |              0.08835 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1811 | >20%                    |                 2 |              0.09055 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1824 | >20%                    |                 5 |              0.03648 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.208  | >20%                    |                 2 |              0.104   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2109 | >20%                    |                 5 |              0.04218 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2262 | 5-10%                   |                 5 |              0.04524 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2357 | 10-15%                  |                 2 |              0.11785 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2421 | >20%                    |                 2 |              0.12105 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2478 | >20%                    |                 2 |              0.1239  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | >20%                    |                 2 |              0.1255  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2595 | 5-10%                   |                10 |              0.02595 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2689 | >20%                    |                10 |              0.02689 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2728 | <5%                     |                 5 |              0.05456 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2797 | 15-20%                  |                 2 |              0.13985 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2817 | 10-15%                  |                 5 |              0.05634 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2896 | >20%                    |                 2 |              0.1448  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2904 | 10-15%                  |                 2 |              0.1452  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2926 | >20%                    |                 2 |              0.1463  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2972 | >20%                    |                 2 |              0.1486  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2986 | >20%                    |                 2 |              0.1493  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3055 | >20%                    |                 2 |              0.15275 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3075 | 5-10%                   |                 2 |              0.15375 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3133 | 10-15%                  |                 2 |              0.15665 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3279 | >20%                    |                 2 |              0.16395 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3301 | >20%                    |                 5 |              0.06602 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3311 | 10-15%                  |                10 |              0.03311 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.345  | >20%                    |                 5 |              0.069   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3479 | >20%                    |                 2 |              0.17395 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3479 | 15-20%                  |                 2 |              0.17395 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3534 | 5-10%                   |                10 |              0.03534 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3559 | >20%                    |                 5 |              0.07118 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3561 | >20%                    |                 2 |              0.17805 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3635 | >20%                    |                10 |              0.03635 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3651 | >20%                    |                 2 |              0.18255 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3667 | >20%                    |                10 |              0.03667 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3827 | 5-10%                   |                 2 |              0.19135 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3829 | <5%                     |                 2 |              0.19145 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.384  | >20%                    |                10 |              0.0384  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3878 | 10-15%                  |                10 |              0.03878 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3886 | >20%                    |                 5 |              0.07772 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3893 | <5%                     |                10 |              0.03893 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3899 | 15-20%                  |                 5 |              0.07798 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3932 | >20%                    |                 5 |              0.07864 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3949 | >20%                    |                 5 |              0.07898 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3958 | >20%                    |                 5 |              0.07916 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3975 | <5%                     |                 5 |              0.0795  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3992 | >20%                    |                 5 |              0.07984 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4001 | >20%                    |                 2 |              0.20005 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4032 | >20%                    |                 2 |              0.2016  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4047 | 15-20%                  |                 5 |              0.08094 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4063 | >20%                    |                 5 |              0.08126 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4114 | 10-15%                  |                 2 |              0.2057  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4151 | >20%                    |                 2 |              0.20755 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.417  | >20%                    |                 2 |              0.2085  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4219 | 10-15%                  |                 2 |              0.21095 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4249 | <5%                     |                 2 |              0.21245 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4356 | <5%                     |                 2 |              0.2178  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4358 | <5%                     |                 5 |              0.08716 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4445 | >20%                    |                10 |              0.04445 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4466 | 15-20%                  |                10 |              0.04466 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4548 | 15-20%                  |                 5 |              0.09096 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4553 | >20%                    |                 2 |              0.22765 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4556 | >20%                    |                 5 |              0.09112 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4596 | >20%                    |                 5 |              0.09192 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4604 | 15-20%                  |                 2 |              0.2302  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4604 | >20%                    |                 5 |              0.09208 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4637 | 15-20%                  |                 2 |              0.23185 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4688 | 15-20%                  |                 5 |              0.09376 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4729 | 15-20%                  |                 5 |              0.09458 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.473  | >20%                    |                 2 |              0.2365  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4761 | >20%                    |                 2 |              0.23805 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4821 | <5%                     |                10 |              0.04821 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4839 | >20%                    |                 2 |              0.24195 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.489  | >20%                    |                 2 |              0.2445  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4928 | >20%                    |                 5 |              0.09856 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4948 | 5-10%                   |                 5 |              0.09896 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5103 | 15-20%                  |                 2 |              0.25515 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5172 | >20%                    |                 5 |              0.10344 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5194 | 15-20%                  |                 5 |              0.10388 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5262 | >20%                    |                 5 |              0.10524 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5279 | >20%                    |                 2 |              0.26395 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5293 | >20%                    |                 5 |              0.10586 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5398 | <5%                     |                 5 |              0.10796 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5493 | <5%                     |                10 |              0.05493 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5508 | >20%                    |                 5 |              0.11016 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5603 | >20%                    |                 5 |              0.11206 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5617 | >20%                    |                 2 |              0.28085 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5621 | >20%                    |                 2 |              0.28105 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5663 | >20%                    |                10 |              0.05663 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5676 | >20%                    |                 5 |              0.11352 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5679 | >20%                    |                 5 |              0.11358 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5745 | >20%                    |                 5 |              0.1149  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5754 | >20%                    |                 2 |              0.2877  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5791 | 10-15%                  |                 5 |              0.11582 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5832 | >20%                    |                 2 |              0.2916  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5986 | 5-10%                   |                 5 |              0.11972 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6078 | >20%                    |                 5 |              0.12156 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.609  | >20%                    |                10 |              0.0609  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6196 | >20%                    |                 5 |              0.12392 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6204 | 5-10%                   |                 5 |              0.12408 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6324 | >20%                    |                 2 |              0.3162  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6332 | 5-10%                   |                 5 |              0.12664 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6358 | 15-20%                  |                 5 |              0.12716 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6452 | >20%                    |                 2 |              0.3226  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6589 | <5%                     |                 5 |              0.13178 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6697 | >20%                    |                10 |              0.06697 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6701 | >20%                    |                10 |              0.06701 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6804 | >20%                    |                 5 |              0.13608 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6834 | 10-15%                  |                 5 |              0.13668 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6889 | 10-15%                  |                 5 |              0.13778 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6891 | >20%                    |                 2 |              0.34455 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6909 | 10-15%                  |                10 |              0.06909 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6932 | >20%                    |                 5 |              0.13864 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6974 | >20%                    |                 5 |              0.13948 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7094 | >20%                    |                10 |              0.07094 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7113 | 5-10%                   |                10 |              0.07113 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7161 | >20%                    |                10 |              0.07161 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7214 | >20%                    |                10 |              0.07214 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7312 | 15-20%                  |                10 |              0.07312 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7341 | >20%                    |                 2 |              0.36705 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7405 | >20%                    |                10 |              0.07405 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7426 | >20%                    |                10 |              0.07426 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7448 | 15-20%                  |                10 |              0.07448 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.7492 | >20%                    |                10 |              0.07492 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7527 | >20%                    |                10 |              0.07527 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7618 | >20%                    |                10 |              0.07618 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7634 | >20%                    |                10 |              0.07634 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7636 | >20%                    |                 2 |              0.3818  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7744 | 10-15%                  |                10 |              0.07744 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.781  | >20%                    |                 2 |              0.3905  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7815 | >20%                    |                 5 |              0.1563  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7849 | >20%                    |                 5 |              0.15698 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7931 | 10-15%                  |                10 |              0.07931 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.794  | >20%                    |                10 |              0.0794  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.8042 | >20%                    |                 5 |              0.16084 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8177 | 15-20%                  |                10 |              0.08177 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8275 | <5%                     |                10 |              0.08275 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8306 | 10-15%                  |                 5 |              0.16612 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8356 | >20%                    |                 5 |              0.16712 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.849  | 5-10%                   |                10 |              0.0849  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8627 | >20%                    |                 2 |              0.43135 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8803 | >20%                    |                10 |              0.08803 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8806 | >20%                    |                10 |              0.08806 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8886 | >20%                    |                 2 |              0.4443  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9021 | 10-15%                  |                10 |              0.09021 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9034 | >20%                    |                 5 |              0.18068 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.908  | >20%                    |                 5 |              0.1816  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.9127 | 15-20%                  |                 2 |              0.45635 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9142 | >20%                    |                10 |              0.09142 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9166 | >20%                    |                10 |              0.09166 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9176 | >20%                    |                 5 |              0.18352 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9295 | >20%                    |                 5 |              0.1859  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9333 | >20%                    |                10 |              0.09333 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9949 | 10-15%                  |                10 |              0.09949 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0113 | 15-20%                  |                10 |              0.10113 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0371 | 10-15%                  |                10 |              0.10371 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0441 | 10-15%                  |                10 |              0.10441 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.047  | 5-10%                   |                 5 |              0.2094  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0493 | >20%                    |                10 |              0.10493 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      1.0581 | >20%                    |                 2 |              0.52905 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0698 | >20%                    |                10 |              0.10698 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0847 | >20%                    |                 2 |              0.54235 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1104 | >20%                    |                 2 |              0.5552  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1989 | >20%                    |                10 |              0.11989 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2231 | >20%                    |                10 |              0.12231 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2296 | >20%                    |                10 |              0.12296 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2438 | 5-10%                   |                10 |              0.12438 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3411 | >20%                    |                 2 |              0.67055 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3581 | >20%                    |                10 |              0.13581 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.392  | >20%                    |                 5 |              0.2784  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4282 | >20%                    |                 2 |              0.7141  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4393 | >20%                    |                 5 |              0.28786 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4444 | >20%                    |                10 |              0.14444 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5245 | 10-15%                  |                 5 |              0.3049  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5906 | 15-20%                  |                10 |              0.15906 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5916 | 15-20%                  |                10 |              0.15916 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1169 | 10-15%                  |                10 |              0.21169 |