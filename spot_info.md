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

Data correct as of 2024-10-01 01:45:38.052503, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1103 | <5%                     |                 2 |              0.05515 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1251 | <5%                     |                 2 |              0.06255 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1352 | 5-10%                   |                 2 |              0.0676  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1436 | 5-10%                   |                 2 |              0.0718  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1446 | 10-15%                  |                 2 |              0.0723  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.1749 | >20%                    |                 2 |              0.08745 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1814 | 5-10%                   |                 5 |              0.03628 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1988 | 10-15%                  |                 2 |              0.0994  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2034 | <5%                     |                 5 |              0.04068 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2046 | 10-15%                  |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.217  | >20%                    |                 2 |              0.1085  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.2252 | >20%                    |                 5 |              0.04504 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | >20%                    |                 2 |              0.1164  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2366 | <5%                     |                 2 |              0.1183  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.24   | <5%                     |                 2 |              0.12    |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2457 | 15-20%                  |                 5 |              0.04914 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.265  | 5-10%                   |                10 |              0.0265  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2692 | 5-10%                   |                 2 |              0.1346  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2707 | 5-10%                   |                 2 |              0.13535 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2763 | <5%                     |                 2 |              0.13815 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2843 | <5%                     |                 2 |              0.14215 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2905 | <5%                     |                 2 |              0.14525 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2937 | <5%                     |                 5 |              0.05874 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2999 | 15-20%                  |                 5 |              0.05998 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3021 | <5%                     |                 2 |              0.15105 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3029 | <5%                     |                 2 |              0.15145 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3033 | 10-15%                  |                 2 |              0.15165 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3166 | 15-20%                  |                10 |              0.03166 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3169 | <5%                     |                 2 |              0.15845 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.317  | <5%                     |                10 |              0.0317  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3181 | >20%                    |                10 |              0.03181 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3212 | >20%                    |                10 |              0.03212 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3257 | 5-10%                   |                10 |              0.03257 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3267 | 10-15%                  |                 2 |              0.16335 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3404 | >20%                    |                 5 |              0.06808 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3418 | >20%                    |                 5 |              0.06836 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3507 | <5%                     |                 2 |              0.17535 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.3518 | <5%                     |                10 |              0.03518 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3614 | 5-10%                   |                 2 |              0.1807  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3657 | <5%                     |                 2 |              0.18285 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3742 | <5%                     |                 5 |              0.07484 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3784 | <5%                     |                 5 |              0.07568 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3826 | 5-10%                   |                 5 |              0.07652 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3898 | 15-20%                  |                 2 |              0.1949  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4016 | 5-10%                   |                10 |              0.04016 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.409  | >20%                    |                 5 |              0.0818  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4104 | >20%                    |                 2 |              0.2052  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4153 | 5-10%                   |                 2 |              0.20765 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4229 | >20%                    |                 2 |              0.21145 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4279 | <5%                     |                 2 |              0.21395 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4319 | 15-20%                  |                 5 |              0.08638 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4423 | <5%                     |                 2 |              0.22115 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4462 | >20%                    |                 2 |              0.2231  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.45   | 5-10%                   |                10 |              0.045   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4546 | <5%                     |                 5 |              0.09092 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4601 | 10-15%                  |                 2 |              0.23005 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4657 | 10-15%                  |                 5 |              0.09314 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4694 | <5%                     |                 5 |              0.09388 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4712 | 15-20%                  |                 5 |              0.09424 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | <5%                     |                 5 |              0.0946  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4844 | 10-15%                  |                 5 |              0.09688 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4875 | 10-15%                  |                 2 |              0.24375 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4932 | <5%                     |                 5 |              0.09864 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4953 | <5%                     |                 5 |              0.09906 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4988 | >20%                    |                 2 |              0.2494  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5073 | 10-15%                  |                 5 |              0.10146 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5141 | 15-20%                  |                 5 |              0.10282 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5149 | <5%                     |                 5 |              0.10298 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5168 | >20%                    |                 2 |              0.2584  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5185 | >20%                    |                 5 |              0.1037  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5272 | <5%                     |                 5 |              0.10544 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5387 | >20%                    |                10 |              0.05387 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5398 | <5%                     |                 5 |              0.10796 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5405 | >20%                    |                 2 |              0.27025 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5616 | >20%                    |                 5 |              0.11232 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6016 | 15-20%                  |                 5 |              0.12032 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6091 | >20%                    |                 5 |              0.12182 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6125 | >20%                    |                 5 |              0.1225  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6143 | 5-10%                   |                 5 |              0.12286 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.617  | 15-20%                  |                 2 |              0.3085  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6484 | >20%                    |                10 |              0.06484 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6561 | 5-10%                   |                10 |              0.06561 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6848 | 10-15%                  |                 5 |              0.13696 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6878 | >20%                    |                10 |              0.06878 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6955 | >20%                    |                 5 |              0.1391  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7006 | <5%                     |                10 |              0.07006 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7128 | >20%                    |                 2 |              0.3564  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.728  | <5%                     |                10 |              0.0728  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7441 | <5%                     |                10 |              0.07441 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7516 | >20%                    |                 5 |              0.15032 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7586 | 15-20%                  |                10 |              0.07586 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7693 | 15-20%                  |                10 |              0.07693 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7805 | 15-20%                  |                10 |              0.07805 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7934 | 10-15%                  |                10 |              0.07934 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7937 | >20%                    |                10 |              0.07937 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8117 | <5%                     |                10 |              0.08117 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8204 | 5-10%                   |                10 |              0.08204 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8261 | 10-15%                  |                10 |              0.08261 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8447 | >20%                    |                 2 |              0.42235 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.849  | >20%                    |                10 |              0.0849  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.864  | >20%                    |                 5 |              0.1728  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8755 | <5%                     |                10 |              0.08755 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8758 | >20%                    |                10 |              0.08758 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8854 | >20%                    |                10 |              0.08854 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8935 | >20%                    |                 5 |              0.1787  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9143 | <5%                     |                10 |              0.09143 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.917  | 5-10%                   |                10 |              0.0917  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9356 | 10-15%                  |                 2 |              0.4678  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9709 | 10-15%                  |                 5 |              0.19418 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0057 | 10-15%                  |                10 |              0.10057 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0157 | 15-20%                  |                10 |              0.10157 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0333 | >20%                    |                10 |              0.10333 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0364 | <5%                     |                10 |              0.10364 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1029 | <5%                     |                 2 |              0.55145 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1075 | >20%                    |                10 |              0.11075 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1478 | >20%                    |                 5 |              0.22956 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1651 | >20%                    |                10 |              0.11651 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1745 | >20%                    |                10 |              0.11745 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3846 | 10-15%                  |                10 |              0.13846 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4699 | >20%                    |                10 |              0.14699 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6912 | 5-10%                   |                10 |              0.16912 |