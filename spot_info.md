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

Data correct as of 2024-10-07 01:39:56.494160, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1157 | <5%                     |                 2 |              0.05785 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1318 | <5%                     |                 2 |              0.0659  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1907 | 15-20%                  |                 2 |              0.09535 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1918 | 10-15%                  |                 2 |              0.0959  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1921 | 5-10%                   |                 2 |              0.09605 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1973 | 10-15%                  |                 2 |              0.09865 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2004 | 15-20%                  |                 5 |              0.04008 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2132 | >20%                    |                 2 |              0.1066  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.227  | >20%                    |                 2 |              0.1135  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2289 | <5%                     |                 2 |              0.11445 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2326 | <5%                     |                 2 |              0.1163  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.234  | >20%                    |                 2 |              0.117   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2415 | <5%                     |                 2 |              0.12075 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2474 | >20%                    |                 5 |              0.04948 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2604 | 5-10%                   |                 5 |              0.05208 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.267  | 10-15%                  |                 5 |              0.0534  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2747 | <5%                     |                 2 |              0.13735 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2761 | <5%                     |                 2 |              0.13805 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.277  | 5-10%                   |                 2 |              0.1385  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.288  | <5%                     |                 2 |              0.144   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2931 | >20%                    |                 5 |              0.05862 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2942 | <5%                     |                 2 |              0.1471  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.2987 | >20%                    |                 5 |              0.05974 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.299  | 15-20%                  |                 2 |              0.1495  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3041 | 15-20%                  |                10 |              0.03041 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3112 | >20%                    |                 5 |              0.06224 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3187 | >20%                    |                 5 |              0.06374 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3191 | 10-15%                  |                 2 |              0.15955 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3204 | 15-20%                  |                 5 |              0.06408 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.324  | 15-20%                  |                 2 |              0.162   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3286 | <5%                     |                 2 |              0.1643  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3417 | <5%                     |                 2 |              0.17085 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3572 | <5%                     |                 2 |              0.1786  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3608 | 5-10%                   |                10 |              0.03608 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3646 | <5%                     |                 5 |              0.07292 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3646 | 5-10%                   |                 5 |              0.07292 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3738 | >20%                    |                10 |              0.03738 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3747 | 5-10%                   |                 2 |              0.18735 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3764 | >20%                    |                 5 |              0.07528 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3854 | <5%                     |                 5 |              0.07708 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3955 | >20%                    |                 2 |              0.19775 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4004 | >20%                    |                10 |              0.04004 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4041 | 5-10%                   |                10 |              0.04041 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.4041 | 5-10%                   |                 5 |              0.08082 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4122 | 5-10%                   |                 2 |              0.2061  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4153 | >20%                    |                 2 |              0.20765 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4211 | <5%                     |                 2 |              0.21055 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4319 | 15-20%                  |                 5 |              0.08638 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4354 | >20%                    |                 2 |              0.2177  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4365 | 5-10%                   |                10 |              0.04365 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.437  | >20%                    |                10 |              0.0437  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4389 | 10-15%                  |                 5 |              0.08778 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4417 | >20%                    |                 2 |              0.22085 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4447 | <5%                     |                 2 |              0.22235 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4476 | <5%                     |                 5 |              0.08952 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4589 | 10-15%                  |                 2 |              0.22945 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4594 | 5-10%                   |                 2 |              0.2297  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4652 | 10-15%                  |                 5 |              0.09304 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4679 | 5-10%                   |                10 |              0.04679 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4703 | <5%                     |                 5 |              0.09406 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4798 | 5-10%                   |                 5 |              0.09596 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4808 | <5%                     |                 5 |              0.09616 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.4838 | <5%                     |                10 |              0.04838 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4869 | >20%                    |                 2 |              0.24345 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4871 | >20%                    |                 2 |              0.24355 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4962 | <5%                     |                 5 |              0.09924 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5056 | 5-10%                   |                 5 |              0.10112 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5094 | >20%                    |                 2 |              0.2547  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5113 | <5%                     |                 5 |              0.10226 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5146 | <5%                     |                 5 |              0.10292 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.516  | <5%                     |                 5 |              0.1032  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5193 | 15-20%                  |                 5 |              0.10386 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5448 | >20%                    |                 5 |              0.10896 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5662 | >20%                    |                 5 |              0.11324 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5917 | >20%                    |                 5 |              0.11834 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6017 | 15-20%                  |                 5 |              0.12034 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6029 | >20%                    |                 5 |              0.12058 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6056 | >20%                    |                 2 |              0.3028  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6363 | 10-15%                  |                 5 |              0.12726 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6456 | >20%                    |                10 |              0.06456 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6569 | <5%                     |                10 |              0.06569 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6604 | 5-10%                   |                10 |              0.06604 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6672 | 5-10%                   |                 5 |              0.13344 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6736 | >20%                    |                 5 |              0.13472 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6868 | >20%                    |                 2 |              0.3434  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7072 | <5%                     |                10 |              0.07072 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7091 | 5-10%                   |                10 |              0.07091 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7359 | 15-20%                  |                10 |              0.07359 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7465 | >20%                    |                10 |              0.07465 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7499 | >20%                    |                 5 |              0.14998 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7623 | 15-20%                  |                10 |              0.07623 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7667 | 10-15%                  |                10 |              0.07667 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7732 | >20%                    |                10 |              0.07732 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7774 | 15-20%                  |                10 |              0.07774 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7829 | >20%                    |                10 |              0.07829 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8129 | 5-10%                   |                10 |              0.08129 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8154 | 15-20%                  |                 5 |              0.16308 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8173 | 10-15%                  |                10 |              0.08173 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.834  | >20%                    |                10 |              0.0834  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8484 | <5%                     |                10 |              0.08484 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.881  | <5%                     |                10 |              0.0881  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8857 | >20%                    |                 2 |              0.44285 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8874 | >20%                    |                 5 |              0.17748 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8884 | >20%                    |                10 |              0.08884 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8886 | >20%                    |                10 |              0.08886 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9129 | <5%                     |                10 |              0.09129 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9243 | 5-10%                   |                10 |              0.09243 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.943  | <5%                     |                 2 |              0.4715  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9616 | 10-15%                  |                 2 |              0.4808  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9674 | 5-10%                   |                10 |              0.09674 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9941 | 10-15%                  |                 5 |              0.19882 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0275 | <5%                     |                10 |              0.10275 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0393 | >20%                    |                10 |              0.10393 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0779 | >20%                    |                10 |              0.10779 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1116 | >20%                    |                 5 |              0.22232 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1198 | >20%                    |                10 |              0.11198 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.181  | >20%                    |                10 |              0.1181  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5003 | 10-15%                  |                10 |              0.15003 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.5666 | >20%                    |                10 |              0.15666 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6153 | 5-10%                   |                10 |              0.16153 |