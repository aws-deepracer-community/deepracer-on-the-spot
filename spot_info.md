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

Data correct as of 2024-12-19 01:43:17.645914, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1202 |                         |                 2 |              0.0601  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1241 |                         |                 2 |              0.06205 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1627 |                         |                 5 |              0.03254 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.168  |                         |                 5 |              0.0336  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.1953 | >20%                    |                 2 |              0.09765 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.202  | 15-20%                  |                 2 |              0.101   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2158 | 15-20%                  |                 2 |              0.1079  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2203 | 15-20%                  |                 2 |              0.11015 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2336 | 15-20%                  |                 2 |              0.1168  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2351 | 5-10%                   |                 2 |              0.11755 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2388 | >20%                    |                 2 |              0.1194  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2434 | 15-20%                  |                 5 |              0.04868 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2477 |                         |                10 |              0.02477 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2528 | 5-10%                   |                 2 |              0.1264  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.2557 |                         |                10 |              0.02557 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2633 | >20%                    |                 5 |              0.05266 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2744 | 5-10%                   |                 5 |              0.05488 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2769 | <5%                     |                 2 |              0.13845 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2806 | 5-10%                   |                 2 |              0.1403  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2873 | 15-20%                  |                10 |              0.02873 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2873 | 5-10%                   |                 2 |              0.14365 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2884 | <5%                     |                 5 |              0.05768 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2891 | 5-10%                   |                 2 |              0.14455 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2915 | <5%                     |                 2 |              0.14575 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3052 | 5-10%                   |                 2 |              0.1526  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3094 | <5%                     |                 2 |              0.1547  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3183 | >20%                    |                 2 |              0.15915 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3237 | 10-15%                  |                 2 |              0.16185 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3301 | 5-10%                   |                 5 |              0.06602 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3352 | <5%                     |                 5 |              0.06704 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3379 | <5%                     |                 2 |              0.16895 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.3449 | <5%                     |                 2 |              0.17245 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3481 | >20%                    |                 2 |              0.17405 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3497 | >20%                    |                 5 |              0.06994 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.351  | 10-15%                  |                 2 |              0.1755  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.352  | 10-15%                  |                 2 |              0.176   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3533 | >20%                    |                 2 |              0.17665 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3621 | 10-15%                  |                10 |              0.03621 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3676 | 5-10%                   |                 2 |              0.1838  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3731 | <5%                     |                 5 |              0.07462 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3773 | >20%                    |                 2 |              0.18865 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3794 | >20%                    |                 2 |              0.1897  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3828 | <5%                     |                 5 |              0.07656 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3961 | 10-15%                  |                 2 |              0.19805 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3966 | 10-15%                  |                10 |              0.03966 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4013 | >20%                    |                 5 |              0.08026 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4049 | <5%                     |                 2 |              0.20245 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4071 | 5-10%                   |                 5 |              0.08142 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4072 | 5-10%                   |                 2 |              0.2036  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4081 | >20%                    |                 2 |              0.20405 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4125 | >20%                    |                10 |              0.04125 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4126 | >20%                    |                 5 |              0.08252 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4151 | 15-20%                  |                 2 |              0.20755 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4163 | 5-10%                   |                 2 |              0.20815 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4211 | 10-15%                  |                10 |              0.04211 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4225 | 10-15%                  |                 5 |              0.0845  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4228 | 5-10%                   |                 5 |              0.08456 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4311 | <5%                     |                 5 |              0.08622 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4334 | 5-10%                   |                 2 |              0.2167  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4381 | 5-10%                   |                 5 |              0.08762 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4461 | >20%                    |                 5 |              0.08922 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4505 | >20%                    |                10 |              0.04505 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4558 | <5%                     |                 5 |              0.09116 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.458  | 5-10%                   |                 2 |              0.229   |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4582 | <5%                     |                 5 |              0.09164 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4583 | >20%                    |                 5 |              0.09166 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4615 | 10-15%                  |                 2 |              0.23075 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4673 | 15-20%                  |                 2 |              0.23365 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4689 | >20%                    |                 2 |              0.23445 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4692 | <5%                     |                 5 |              0.09384 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4707 | <5%                     |                 2 |              0.23535 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4712 | 10-15%                  |                 2 |              0.2356  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4772 | >20%                    |                 5 |              0.09544 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4791 | 10-15%                  |                 5 |              0.09582 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4795 | <5%                     |                 5 |              0.0959  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4839 | >20%                    |                 5 |              0.09678 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4851 | 10-15%                  |                 2 |              0.24255 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4974 | >20%                    |                 5 |              0.09948 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5007 | >20%                    |                 5 |              0.10014 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5024 | 5-10%                   |                10 |              0.05024 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5026 | <5%                     |                 5 |              0.10052 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5076 | >20%                    |                 5 |              0.10152 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5235 | <5%                     |                 5 |              0.1047  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5244 | 10-15%                  |                 2 |              0.2622  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5383 | 5-10%                   |                 5 |              0.10766 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5421 | >20%                    |                 5 |              0.10842 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5484 | 10-15%                  |                 5 |              0.10968 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.564  | >20%                    |                10 |              0.0564  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5641 | >20%                    |                 2 |              0.28205 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5641 | 15-20%                  |                 5 |              0.11282 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5801 | <5%                     |                 5 |              0.11602 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5873 | >20%                    |                10 |              0.05873 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6132 | <5%                     |                10 |              0.06132 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6137 | >20%                    |                10 |              0.06137 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6256 | 5-10%                   |                10 |              0.06256 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6427 | 15-20%                  |                 5 |              0.12854 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.649  | <5%                     |                10 |              0.0649  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.6548 | 5-10%                   |                 5 |              0.13096 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6582 | 5-10%                   |                10 |              0.06582 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6639 | 5-10%                   |                10 |              0.06639 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6763 | 5-10%                   |                 5 |              0.13526 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6831 | 10-15%                  |                10 |              0.06831 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6888 | >20%                    |                10 |              0.06888 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6894 | 15-20%                  |                 5 |              0.13788 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6899 | <5%                     |                 5 |              0.13798 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6928 | >20%                    |                 2 |              0.3464  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.6987 | 5-10%                   |                 2 |              0.34935 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7018 | 10-15%                  |                10 |              0.07018 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7238 | >20%                    |                 5 |              0.14476 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7239 | <5%                     |                 2 |              0.36195 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.7453 | >20%                    |                10 |              0.07453 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7462 | >20%                    |                 5 |              0.14924 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7542 | >20%                    |                 5 |              0.15084 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7559 | >20%                    |                10 |              0.07559 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7743 | 15-20%                  |                10 |              0.07743 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7763 | 5-10%                   |                10 |              0.07763 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7846 | 5-10%                   |                10 |              0.07846 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8063 | 15-20%                  |                10 |              0.08063 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8107 | <5%                     |                10 |              0.08107 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8265 | 5-10%                   |                10 |              0.08265 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8275 | 10-15%                  |                10 |              0.08275 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8362 | 10-15%                  |                10 |              0.08362 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8479 | <5%                     |                 5 |              0.16958 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8582 | <5%                     |                10 |              0.08582 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8645 | 10-15%                  |                10 |              0.08645 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8693 | 5-10%                   |                 2 |              0.43465 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8716 | <5%                     |                10 |              0.08716 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9064 | 5-10%                   |                10 |              0.09064 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9266 | 5-10%                   |                 5 |              0.18532 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.935  | >20%                    |                10 |              0.0935  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9554 | 15-20%                  |                10 |              0.09554 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9573 | 5-10%                   |                10 |              0.09573 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9673 | >20%                    |                10 |              0.09673 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9751 | 5-10%                   |                10 |              0.09751 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.9811 | <5%                     |                10 |              0.09811 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9994 | <5%                     |                10 |              0.09994 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0828 | >20%                    |                10 |              0.10828 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0923 | <5%                     |                10 |              0.10923 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1789 | >20%                    |                10 |              0.11789 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2124 | >20%                    |                10 |              0.12124 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.394  | 5-10%                   |                10 |              0.1394  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4784 | 5-10%                   |                 5 |              0.29568 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8876 | 10-15%                  |                10 |              0.18876 |