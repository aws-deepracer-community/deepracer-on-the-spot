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

Data correct as of 2025-12-31 02:01:41.890803, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0929 | >20%                    |                 2 |              0.04645 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1376 | >20%                    |                 2 |              0.0688  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1598 | >20%                    |                 2 |              0.0799  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.16   | <5%                     |                 2 |              0.08    |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.173  | >20%                    |                 2 |              0.0865  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1789 | >20%                    |                 5 |              0.03578 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2241 | >20%                    |                 2 |              0.11205 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.241  | >20%                    |                 2 |              0.1205  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2559 | >20%                    |                 2 |              0.12795 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2608 | >20%                    |                 2 |              0.1304  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2712 | >20%                    |                 2 |              0.1356  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2727 | >20%                    |                 2 |              0.13635 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2744 | 5-10%                   |                10 |              0.02744 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2746 | >20%                    |                 2 |              0.1373  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2751 | <5%                     |                 2 |              0.13755 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.281  | 15-20%                  |                 2 |              0.1405  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2819 | >20%                    |                 5 |              0.05638 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2827 | 5-10%                   |                 2 |              0.14135 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2853 | >20%                    |                10 |              0.02853 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2929 | >20%                    |                 2 |              0.14645 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3058 | >20%                    |                 2 |              0.1529  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3067 | 5-10%                   |                 5 |              0.06134 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3179 | >20%                    |                 2 |              0.15895 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3217 | >20%                    |                 5 |              0.06434 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.324  | >20%                    |                 2 |              0.162   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3302 | >20%                    |                 2 |              0.1651  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3499 | >20%                    |                 5 |              0.06998 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3525 | 15-20%                  |                 5 |              0.0705  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3535 | 5-10%                   |                10 |              0.03535 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3589 | >20%                    |                 5 |              0.07178 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3595 | >20%                    |                 2 |              0.17975 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3601 | >20%                    |                10 |              0.03601 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3602 | >20%                    |                 2 |              0.1801  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3627 | >20%                    |                 5 |              0.07254 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3676 | >20%                    |                 2 |              0.1838  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3676 | 5-10%                   |                 2 |              0.1838  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3692 | >20%                    |                 5 |              0.07384 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3702 | >20%                    |                 2 |              0.1851  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3718 | <5%                     |                 5 |              0.07436 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3731 | <5%                     |                 5 |              0.07462 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.378  | >20%                    |                 5 |              0.0756  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.379  | >20%                    |                 5 |              0.0758  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3805 | >20%                    |                 2 |              0.19025 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3826 | 10-15%                  |                 2 |              0.1913  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3875 | >20%                    |                 5 |              0.0775  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3896 | >20%                    |                10 |              0.03896 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3902 | 10-15%                  |                 2 |              0.1951  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3903 | >20%                    |                 2 |              0.19515 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3952 | >20%                    |                 2 |              0.1976  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3961 | >20%                    |                 5 |              0.07922 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3981 | <5%                     |                10 |              0.03981 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4036 | >20%                    |                 5 |              0.08072 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4049 | 15-20%                  |                10 |              0.04049 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4063 | >20%                    |                 5 |              0.08126 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.411  | >20%                    |                 2 |              0.2055  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4127 | >20%                    |                10 |              0.04127 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4156 | <5%                     |                10 |              0.04156 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4159 | >20%                    |                10 |              0.04159 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4161 | <5%                     |                 2 |              0.20805 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | 10-15%                  |                 2 |              0.2083  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4177 | >20%                    |                 5 |              0.08354 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4186 | >20%                    |                10 |              0.04186 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4214 | >20%                    |                 5 |              0.08428 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4216 | >20%                    |                 2 |              0.2108  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4235 | >20%                    |                 2 |              0.21175 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4255 | >20%                    |                 5 |              0.0851  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4492 | >20%                    |                 5 |              0.08984 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4544 | <5%                     |                 2 |              0.2272  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4663 | >20%                    |                 2 |              0.23315 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4736 | >20%                    |                 2 |              0.2368  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.474  | >20%                    |                 2 |              0.237   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4845 | >20%                    |                 2 |              0.24225 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4878 | >20%                    |                 2 |              0.2439  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4882 | >20%                    |                 5 |              0.09764 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4898 | 15-20%                  |                 2 |              0.2449  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4905 | >20%                    |                 5 |              0.0981  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4959 | 15-20%                  |                 5 |              0.09918 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4979 | >20%                    |                 2 |              0.24895 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4979 | <5%                     |                 5 |              0.09958 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5012 | >20%                    |                 5 |              0.10024 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5095 | >20%                    |                 5 |              0.1019  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5195 | >20%                    |                 5 |              0.1039  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5226 | 15-20%                  |                 2 |              0.2613  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5259 | >20%                    |                10 |              0.05259 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5301 | 10-15%                  |                 5 |              0.10602 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5314 | >20%                    |                 2 |              0.2657  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5414 | >20%                    |                 5 |              0.10828 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5426 | 15-20%                  |                 5 |              0.10852 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.548  | 15-20%                  |                 5 |              0.1096  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5528 | >20%                    |                 5 |              0.11056 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5541 | 15-20%                  |                10 |              0.05541 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5542 | >20%                    |                 5 |              0.11084 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5663 | 5-10%                   |                 5 |              0.11326 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5752 | >20%                    |                 2 |              0.2876  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6017 | >20%                    |                 5 |              0.12034 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6034 | >20%                    |                10 |              0.06034 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6051 | 10-15%                  |                 2 |              0.30255 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6153 | 15-20%                  |                 5 |              0.12306 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6215 | 5-10%                   |                 5 |              0.1243  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6311 | 10-15%                  |                 5 |              0.12622 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6333 | <5%                     |                 5 |              0.12666 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6407 | >20%                    |                 2 |              0.32035 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6417 | >20%                    |                 5 |              0.12834 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6469 | >20%                    |                10 |              0.06469 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6492 | 10-15%                  |                 5 |              0.12984 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6505 | 15-20%                  |                 5 |              0.1301  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6641 | >20%                    |                 5 |              0.13282 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6724 | >20%                    |                 2 |              0.3362  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6736 | 15-20%                  |                10 |              0.06736 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6783 | >20%                    |                 2 |              0.33915 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6931 | >20%                    |                 5 |              0.13862 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6973 | >20%                    |                 2 |              0.34865 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7007 | 15-20%                  |                10 |              0.07007 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7042 | >20%                    |                10 |              0.07042 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7087 | 15-20%                  |                10 |              0.07087 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.7116 | >20%                    |                 5 |              0.14232 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7183 | 5-10%                   |                10 |              0.07183 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7205 | 5-10%                   |                 5 |              0.1441  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7271 | >20%                    |                 2 |              0.36355 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7275 | 15-20%                  |                 2 |              0.36375 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7305 | >20%                    |                10 |              0.07305 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7441 | >20%                    |                10 |              0.07441 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7475 | <5%                     |                10 |              0.07475 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.755  | >20%                    |                10 |              0.0755  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.761  | >20%                    |                10 |              0.0761  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7655 | >20%                    |                10 |              0.07655 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7757 | >20%                    |                 2 |              0.38785 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7779 | >20%                    |                 5 |              0.15558 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7833 | >20%                    |                10 |              0.07833 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7861 | >20%                    |                 2 |              0.39305 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7891 | <5%                     |                 2 |              0.39455 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7925 | >20%                    |                 5 |              0.1585  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7958 | 10-15%                  |                 5 |              0.15916 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7993 | 15-20%                  |                10 |              0.07993 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.808  | >20%                    |                10 |              0.0808  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8118 | 15-20%                  |                10 |              0.08118 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8181 | <5%                     |                10 |              0.08181 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8208 | 15-20%                  |                10 |              0.08208 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8284 | 15-20%                  |                 5 |              0.16568 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8305 | 15-20%                  |                10 |              0.08305 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8325 | <5%                     |                10 |              0.08325 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8669 | >20%                    |                 5 |              0.17338 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8704 | >20%                    |                 2 |              0.4352  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8808 | >20%                    |                10 |              0.08808 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8952 | >20%                    |                 2 |              0.4476  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8973 | >20%                    |                10 |              0.08973 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9105 | >20%                    |                10 |              0.09105 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9181 | >20%                    |                10 |              0.09181 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9378 | >20%                    |                10 |              0.09378 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9384 | 10-15%                  |                 5 |              0.18768 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9444 | >20%                    |                 5 |              0.18888 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9585 | >20%                    |                10 |              0.09585 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9752 | 15-20%                  |                10 |              0.09752 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.989  | >20%                    |                10 |              0.0989  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9936 | 10-15%                  |                10 |              0.09936 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0024 | >20%                    |                 5 |              0.20048 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.005  | >20%                    |                 2 |              0.5025  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0147 | >20%                    |                10 |              0.10147 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0177 | >20%                    |                 5 |              0.20354 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.1009 | >20%                    |                 5 |              0.22018 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.109  | <5%                     |                10 |              0.1109  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.117  | >20%                    |                 5 |              0.2234  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1205 | 15-20%                  |                10 |              0.11205 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1338 | >20%                    |                10 |              0.11338 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1356 | >20%                    |                 2 |              0.5678  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1687 | >20%                    |                10 |              0.11687 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.2364 | >20%                    |                 5 |              0.24728 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2455 | 10-15%                  |                10 |              0.12455 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.251  | >20%                    |                 2 |              0.6255  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2806 | >20%                    |                10 |              0.12806 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2883 | 15-20%                  |                10 |              0.12883 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3056 | >20%                    |                10 |              0.13056 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3378 | >20%                    |                10 |              0.13378 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3952 | >20%                    |                10 |              0.13952 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3992 | >20%                    |                 5 |              0.27984 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.436  | >20%                    |                10 |              0.1436  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4503 | 10-15%                  |                 5 |              0.29006 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.48   | >20%                    |                 2 |              0.74    |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7351 | >20%                    |                10 |              0.17351 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8548 | 10-15%                  |                10 |              0.18548 |