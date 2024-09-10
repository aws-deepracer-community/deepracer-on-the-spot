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

Data correct as of 2024-09-10 01:26:29.779009, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2095 | >20%                    |                 5 |              0.0419  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.212  | 15-20%                  |                 5 |              0.0424  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2291 | 15-20%                  |                 2 |              0.11455 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2297 | 10-15%                  |                 2 |              0.11485 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2477 | <5%                     |                 2 |              0.12385 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.248  | 10-15%                  |                 2 |              0.124   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2519 | 5-10%                   |                 2 |              0.12595 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2614 | <5%                     |                 2 |              0.1307  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2756 | <5%                     |                 5 |              0.05512 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2789 | <5%                     |                 2 |              0.13945 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2822 | <5%                     |                 2 |              0.1411  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2993 | 10-15%                  |                 2 |              0.14965 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3156 | <5%                     |                 2 |              0.1578  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3165 | <5%                     |                 2 |              0.15825 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3183 | <5%                     |                 2 |              0.15915 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3227 | <5%                     |                 2 |              0.16135 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3564 | 15-20%                  |                 5 |              0.07128 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3573 | <5%                     |                 2 |              0.17865 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3606 | <5%                     |                 2 |              0.1803  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3624 | <5%                     |                 2 |              0.1812  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3673 | <5%                     |                 2 |              0.18365 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3692 | 5-10%                   |                 5 |              0.07384 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3714 | >20%                    |                10 |              0.03714 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3784 | >20%                    |                 5 |              0.07568 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3852 | <5%                     |                 5 |              0.07704 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3896 | 10-15%                  |                 2 |              0.1948  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3948 | 15-20%                  |                 5 |              0.07896 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4146 | >20%                    |                 2 |              0.2073  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | 15-20%                  |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4177 | 15-20%                  |                 5 |              0.08354 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4217 | >20%                    |                 2 |              0.21085 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4285 | 5-10%                   |                 2 |              0.21425 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4314 | 5-10%                   |                 2 |              0.2157  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4405 | 15-20%                  |                 5 |              0.0881  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.453  | 5-10%                   |                 5 |              0.0906  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4593 | <5%                     |                 2 |              0.22965 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4679 | <5%                     |                 5 |              0.09358 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4729 | >20%                    |                 2 |              0.23645 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4747 | 10-15%                  |                 5 |              0.09494 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.476  | <5%                     |                 5 |              0.0952  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4773 | 10-15%                  |                 2 |              0.23865 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4776 | <5%                     |                 5 |              0.09552 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4777 | 5-10%                   |                 5 |              0.09554 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.486  | >20%                    |                 2 |              0.243   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4884 | <5%                     |                10 |              0.04884 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4916 | >20%                    |                 2 |              0.2458  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4965 | 5-10%                   |                 5 |              0.0993  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.51   | <5%                     |                 2 |              0.255   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5115 | <5%                     |                 5 |              0.1023  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5136 | <5%                     |                 5 |              0.10272 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5155 | >20%                    |                 5 |              0.1031  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5156 | >20%                    |                 5 |              0.10312 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.528  | 5-10%                   |                 5 |              0.1056  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5452 | >20%                    |                 2 |              0.2726  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5667 | >20%                    |                 5 |              0.11334 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5728 | >20%                    |                 2 |              0.2864  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5821 | <5%                     |                 5 |              0.11642 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5871 | <5%                     |                 5 |              0.11742 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5917 | <5%                     |                10 |              0.05917 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.6006 | >20%                    |                 2 |              0.3003  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6014 | >20%                    |                 5 |              0.12028 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6078 | >20%                    |                 5 |              0.12156 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.608  | 15-20%                  |                 5 |              0.1216  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6117 | 5-10%                   |                 5 |              0.12234 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6152 | <5%                     |                10 |              0.06152 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.6172 | <5%                     |                 5 |              0.12344 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6181 | 10-15%                  |                 2 |              0.30905 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6242 | >20%                    |                 5 |              0.12484 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6426 | <5%                     |                 2 |              0.3213  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6445 | 5-10%                   |                 2 |              0.32225 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6774 | 5-10%                   |                10 |              0.06774 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6928 | <5%                     |                 2 |              0.3464  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6964 | 15-20%                  |                10 |              0.06964 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7039 | <5%                     |                10 |              0.07039 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7109 | >20%                    |                 2 |              0.35545 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7265 | >20%                    |                10 |              0.07265 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7381 | <5%                     |                10 |              0.07381 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7533 | >20%                    |                 5 |              0.15066 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.7562 | <5%                     |                10 |              0.07562 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7819 | >20%                    |                10 |              0.07819 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7828 | 15-20%                  |                10 |              0.07828 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7945 | <5%                     |                 5 |              0.1589  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7966 | 5-10%                   |                10 |              0.07966 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8027 | <5%                     |                10 |              0.08027 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8051 | >20%                    |                 5 |              0.16102 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8151 | >20%                    |                10 |              0.08151 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8191 | 10-15%                  |                10 |              0.08191 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8221 | 10-15%                  |                10 |              0.08221 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8226 | <5%                     |                 5 |              0.16452 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8259 | >20%                    |                10 |              0.08259 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8647 | <5%                     |                10 |              0.08647 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8676 | >20%                    |                10 |              0.08676 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9116 | >20%                    |                 5 |              0.18232 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9318 | <5%                     |                10 |              0.09318 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.94   | >20%                    |                10 |              0.094   |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9405 | >20%                    |                10 |              0.09405 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9585 | <5%                     |                 5 |              0.1917  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9635 | >20%                    |                 5 |              0.1927  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9815 | >20%                    |                10 |              0.09815 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9817 | <5%                     |                10 |              0.09817 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0186 | >20%                    |                10 |              0.10186 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0239 | 10-15%                  |                10 |              0.10239 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0434 | 10-15%                  |                10 |              0.10434 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0725 | 10-15%                  |                10 |              0.10725 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1552 | >20%                    |                10 |              0.11552 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1562 | >20%                    |                10 |              0.11562 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2201 | >20%                    |                10 |              0.12201 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2527 | 5-10%                   |                10 |              0.12527 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2706 | <5%                     |                10 |              0.12706 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4364 | >20%                    |                10 |              0.14364 |