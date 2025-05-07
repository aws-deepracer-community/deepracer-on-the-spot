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

Data correct as of 2025-05-07 01:52:06.424136, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1315 | >20%                    |                 2 |              0.06575 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1993 | >20%                    |                 5 |              0.03986 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2102 | >20%                    |                 5 |              0.04204 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2127 | 5-10%                   |                 5 |              0.04254 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2209 | <5%                     |                 2 |              0.11045 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2233 | >20%                    |                 2 |              0.11165 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2293 | 15-20%                  |                 5 |              0.04586 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2304 | 15-20%                  |                 2 |              0.1152  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2542 | <5%                     |                 5 |              0.05084 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2574 | 5-10%                   |                 2 |              0.1287  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2592 | >20%                    |                 2 |              0.1296  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2654 | <5%                     |                 2 |              0.1327  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2693 | 15-20%                  |                 2 |              0.13465 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2754 | 5-10%                   |                 2 |              0.1377  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2798 | <5%                     |                 2 |              0.1399  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2838 | >20%                    |                 2 |              0.1419  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2887 | 5-10%                   |                 5 |              0.05774 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2934 | >20%                    |                 2 |              0.1467  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2978 | 10-15%                  |                 2 |              0.1489  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.2993 | 15-20%                  |                10 |              0.02993 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3009 | 5-10%                   |                 2 |              0.15045 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3056 | 5-10%                   |                 2 |              0.1528  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3059 | <5%                     |                 2 |              0.15295 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3134 | >20%                    |                 2 |              0.1567  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.314  | 15-20%                  |                10 |              0.0314  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3162 | 5-10%                   |                 2 |              0.1581  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3192 | >20%                    |                 2 |              0.1596  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3199 | >20%                    |                 2 |              0.15995 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3279 | 10-15%                  |                10 |              0.03279 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3322 | >20%                    |                 2 |              0.1661  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3341 | >20%                    |                 2 |              0.16705 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.335  | 15-20%                  |                10 |              0.0335  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3369 | >20%                    |                10 |              0.03369 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3441 | <5%                     |                 5 |              0.06882 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3486 | >20%                    |                 5 |              0.06972 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3525 | >20%                    |                 2 |              0.17625 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3576 | 5-10%                   |                 5 |              0.07152 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3613 | >20%                    |                 2 |              0.18065 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3624 | >20%                    |                 5 |              0.07248 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3632 | <5%                     |                 5 |              0.07264 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3724 | >20%                    |                 2 |              0.1862  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3745 | <5%                     |                 2 |              0.18725 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.387  | >20%                    |                 5 |              0.0774  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3873 | >20%                    |                 2 |              0.19365 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3892 | >20%                    |                10 |              0.03892 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3906 | 15-20%                  |                 5 |              0.07812 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.395  | 10-15%                  |                10 |              0.0395  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3954 | 10-15%                  |                 2 |              0.1977  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3969 | 5-10%                   |                 5 |              0.07938 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4052 | 10-15%                  |                10 |              0.04052 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4093 | 10-15%                  |                 2 |              0.20465 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4101 | >20%                    |                 2 |              0.20505 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4108 | >20%                    |                 2 |              0.2054  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4125 | >20%                    |                10 |              0.04125 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4147 | >20%                    |                 5 |              0.08294 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4154 | 5-10%                   |                 2 |              0.2077  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4188 | >20%                    |                 5 |              0.08376 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.423  | 10-15%                  |                 2 |              0.2115  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4286 | >20%                    |                 2 |              0.2143  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4329 | >20%                    |                 2 |              0.21645 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4351 | 15-20%                  |                 2 |              0.21755 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4413 | 15-20%                  |                 5 |              0.08826 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4505 | <5%                     |                 5 |              0.0901  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4547 | 10-15%                  |                 5 |              0.09094 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4568 | >20%                    |                 5 |              0.09136 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4583 | <5%                     |                 2 |              0.22915 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4624 | >20%                    |                 5 |              0.09248 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4633 | 5-10%                   |                 5 |              0.09266 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4654 | >20%                    |                 5 |              0.09308 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4663 | >20%                    |                 5 |              0.09326 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4681 | >20%                    |                 2 |              0.23405 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4703 | >20%                    |                 5 |              0.09406 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4806 | >20%                    |                 2 |              0.2403  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.481  | <5%                     |                 5 |              0.0962  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4817 | >20%                    |                 5 |              0.09634 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.494  | >20%                    |                 5 |              0.0988  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4946 | 5-10%                   |                 5 |              0.09892 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4995 | 15-20%                  |                 5 |              0.0999  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4999 | >20%                    |                 2 |              0.24995 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5068 | >20%                    |                 5 |              0.10136 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5082 | 10-15%                  |                 5 |              0.10164 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5253 | >20%                    |                 2 |              0.26265 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5274 | >20%                    |                 2 |              0.2637  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5282 | >20%                    |                 2 |              0.2641  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5299 | 10-15%                  |                 2 |              0.26495 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5315 | >20%                    |                 2 |              0.26575 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5644 | 10-15%                  |                 5 |              0.11288 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.567  | 5-10%                   |                 5 |              0.1134  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5694 | <5%                     |                10 |              0.05694 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5715 | >20%                    |                 5 |              0.1143  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5732 | 10-15%                  |                10 |              0.05732 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5779 | >20%                    |                 5 |              0.11558 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5788 | >20%                    |                 2 |              0.2894  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5805 | >20%                    |                 5 |              0.1161  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5881 | 10-15%                  |                 2 |              0.29405 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5885 | >20%                    |                 5 |              0.1177  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5968 | <5%                     |                 5 |              0.11936 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5984 | >20%                    |                 2 |              0.2992  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6119 | <5%                     |                10 |              0.06119 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6155 | >20%                    |                 2 |              0.30775 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6262 | >20%                    |                 5 |              0.12524 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.628  | 10-15%                  |                 5 |              0.1256  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6336 | >20%                    |                 5 |              0.12672 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6382 | >20%                    |                 5 |              0.12764 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6455 | 5-10%                   |                10 |              0.06455 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6465 | 15-20%                  |                10 |              0.06465 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6521 | >20%                    |                 2 |              0.32605 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6604 | >20%                    |                10 |              0.06604 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6609 | 15-20%                  |                 5 |              0.13218 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6978 | >20%                    |                 2 |              0.3489  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.707  | >20%                    |                 5 |              0.1414  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7104 | >20%                    |                 2 |              0.3552  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7209 | >20%                    |                10 |              0.07209 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7214 | >20%                    |                 5 |              0.14428 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7233 | >20%                    |                10 |              0.07233 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7252 | 5-10%                   |                10 |              0.07252 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7279 | >20%                    |                 5 |              0.14558 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7304 | <5%                     |                 5 |              0.14608 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7389 | 15-20%                  |                10 |              0.07389 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7421 | <5%                     |                 5 |              0.14842 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7468 | >20%                    |                10 |              0.07468 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7555 | >20%                    |                10 |              0.07555 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7613 | <5%                     |                 5 |              0.15226 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7666 | 10-15%                  |                10 |              0.07666 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7752 | >20%                    |                 5 |              0.15504 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7973 | >20%                    |                 2 |              0.39865 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7999 | <5%                     |                10 |              0.07999 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8018 | >20%                    |                 5 |              0.16036 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8188 | 15-20%                  |                10 |              0.08188 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8199 | 10-15%                  |                10 |              0.08199 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8265 | 15-20%                  |                10 |              0.08265 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8286 | 15-20%                  |                10 |              0.08286 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8303 | 5-10%                   |                10 |              0.08303 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.838  | >20%                    |                10 |              0.0838  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.84   | 10-15%                  |                10 |              0.084   |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8501 | >20%                    |                 2 |              0.42505 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8518 | >20%                    |                10 |              0.08518 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8523 | 10-15%                  |                 5 |              0.17046 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8535 | 10-15%                  |                10 |              0.08535 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8647 | 15-20%                  |                10 |              0.08647 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.89   | >20%                    |                 2 |              0.445   |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8913 | 10-15%                  |                10 |              0.08913 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8951 | >20%                    |                 5 |              0.17902 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8952 | <5%                     |                10 |              0.08952 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.896  | 10-15%                  |                10 |              0.0896  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8981 | >20%                    |                10 |              0.08981 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8996 | >20%                    |                10 |              0.08996 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9135 | >20%                    |                 2 |              0.45675 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9184 | <5%                     |                10 |              0.09184 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9375 | 15-20%                  |                10 |              0.09375 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9482 | >20%                    |                10 |              0.09482 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0089 | >20%                    |                 2 |              0.50445 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0171 | <5%                     |                10 |              0.10171 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0332 | >20%                    |                10 |              0.10332 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0386 | >20%                    |                10 |              0.10386 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0412 | >20%                    |                10 |              0.10412 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0483 | >20%                    |                 5 |              0.20966 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0729 | 15-20%                  |                 2 |              0.53645 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0804 | <5%                     |                 5 |              0.21608 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.112  | <5%                     |                10 |              0.1112  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1524 | >20%                    |                10 |              0.11524 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1532 | 10-15%                  |                 5 |              0.23064 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1662 | >20%                    |                 5 |              0.23324 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1749 | 10-15%                  |                 2 |              0.58745 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2183 | >20%                    |                10 |              0.12183 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2732 | >20%                    |                 5 |              0.25464 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.283  | <5%                     |                 5 |              0.2566  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3041 | >20%                    |                10 |              0.13041 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.363  | >20%                    |                 2 |              0.6815  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3985 | >20%                    |                10 |              0.13985 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.411  | >20%                    |                 5 |              0.2822  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4231 | 15-20%                  |                10 |              0.14231 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4484 | 15-20%                  |                10 |              0.14484 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5259 | 15-20%                  |                10 |              0.15259 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6818 | 5-10%                   |                10 |              0.16818 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7999 | >20%                    |                10 |              0.17999 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9764 | <5%                     |                10 |              0.19764 |