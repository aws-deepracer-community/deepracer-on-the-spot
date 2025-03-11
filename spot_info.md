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

Data correct as of 2025-03-11 01:42:45.047500, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1261 | 10-15%                  |                 2 |              0.06305 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1398 | 5-10%                   |                 5 |              0.02796 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1484 | >20%                    |                 2 |              0.0742  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1664 | >20%                    |                 5 |              0.03328 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1956 | 15-20%                  |                 5 |              0.03912 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1961 | 5-10%                   |                 2 |              0.09805 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2153 | 5-10%                   |                 2 |              0.10765 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.218  | 5-10%                   |                 5 |              0.0436  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2226 | >20%                    |                 5 |              0.04452 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2301 | 15-20%                  |                 2 |              0.11505 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2323 | >20%                    |                 5 |              0.04646 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2349 | 5-10%                   |                10 |              0.02349 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2353 | >20%                    |                 2 |              0.11765 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2366 | 10-15%                  |                 2 |              0.1183  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2371 | >20%                    |                 2 |              0.11855 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2372 | >20%                    |                 2 |              0.1186  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2399 | 15-20%                  |                 2 |              0.11995 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2429 | 5-10%                   |                 2 |              0.12145 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2491 | 10-15%                  |                 5 |              0.04982 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.256  | <5%                     |                 2 |              0.128   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.259  | >20%                    |                 2 |              0.1295  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2676 | 5-10%                   |                10 |              0.02676 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2729 | 5-10%                   |                 2 |              0.13645 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.2757 |                         |                 2 |              0.13785 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2794 | 10-15%                  |                 2 |              0.1397  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2913 | 10-15%                  |                10 |              0.02913 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2988 | 5-10%                   |                 2 |              0.1494  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3039 | >20%                    |                 2 |              0.15195 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3049 | 5-10%                   |                 2 |              0.15245 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3077 | <5%                     |                 2 |              0.15385 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3095 | <5%                     |                 2 |              0.15475 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3125 | 5-10%                   |                 5 |              0.0625  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3201 | 10-15%                  |                 2 |              0.16005 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3321 | >20%                    |                 2 |              0.16605 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3376 | >20%                    |                 2 |              0.1688  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3479 | >20%                    |                 2 |              0.17395 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3499 | >20%                    |                 2 |              0.17495 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3537 | 10-15%                  |                 5 |              0.07074 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3565 | 10-15%                  |                10 |              0.03565 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3601 | >20%                    |                 2 |              0.18005 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3606 | 10-15%                  |                10 |              0.03606 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3611 | 5-10%                   |                 5 |              0.07222 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3617 | >20%                    |                 2 |              0.18085 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3638 | >20%                    |                 2 |              0.1819  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3672 | >20%                    |                 5 |              0.07344 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3694 |                         |                 5 |              0.07388 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3717 | 5-10%                   |                 5 |              0.07434 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3734 | 15-20%                  |                10 |              0.03734 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3773 | <5%                     |                 2 |              0.18865 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3818 | >20%                    |                 2 |              0.1909  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3826 | >20%                    |                 5 |              0.07652 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3827 | 5-10%                   |                 2 |              0.19135 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3838 | 10-15%                  |                 5 |              0.07676 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3848 | <5%                     |                10 |              0.03848 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3862 | >20%                    |                10 |              0.03862 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3872 | 5-10%                   |                10 |              0.03872 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3888 | >20%                    |                10 |              0.03888 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3923 | <5%                     |                 5 |              0.07846 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.4    | >20%                    |                 5 |              0.08    |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4059 | <5%                     |                 2 |              0.20295 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4073 | 5-10%                   |                 2 |              0.20365 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4094 | 5-10%                   |                 2 |              0.2047  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4095 | <5%                     |                 2 |              0.20475 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4135 | >20%                    |                 5 |              0.0827  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4238 | 5-10%                   |                 2 |              0.2119  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.425  | >20%                    |                 5 |              0.085   |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4327 | 5-10%                   |                 2 |              0.21635 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4363 | 15-20%                  |                 2 |              0.21815 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4373 | <5%                     |                 5 |              0.08746 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4406 | <5%                     |                 2 |              0.2203  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4477 | >20%                    |                 2 |              0.22385 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.456  | 10-15%                  |                10 |              0.0456  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4587 | 5-10%                   |                 5 |              0.09174 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4588 | >20%                    |                 2 |              0.2294  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4622 | >20%                    |                 5 |              0.09244 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4645 | >20%                    |                 2 |              0.23225 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4736 | <5%                     |                 5 |              0.09472 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4776 | 5-10%                   |                 5 |              0.09552 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4887 | >20%                    |                 2 |              0.24435 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4889 | >20%                    |                 5 |              0.09778 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4901 | <5%                     |                 5 |              0.09802 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4912 | 5-10%                   |                 5 |              0.09824 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5009 | >20%                    |                 2 |              0.25045 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5031 | 10-15%                  |                 5 |              0.10062 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5122 | >20%                    |                 2 |              0.2561  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5127 | 10-15%                  |                 2 |              0.25635 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5132 | >20%                    |                 5 |              0.10264 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5142 | >20%                    |                 5 |              0.10284 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5222 | >20%                    |                 5 |              0.10444 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5387 | 5-10%                   |                 5 |              0.10774 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5402 | >20%                    |                 5 |              0.10804 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5423 | 5-10%                   |                10 |              0.05423 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5465 | 15-20%                  |                 2 |              0.27325 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5529 | 15-20%                  |                 2 |              0.27645 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5565 | >20%                    |                 5 |              0.1113  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.5568 |                         |                10 |              0.05568 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5598 | >20%                    |                 2 |              0.2799  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5598 | >20%                    |                 2 |              0.2799  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5611 | 5-10%                   |                 5 |              0.11222 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5631 | <5%                     |                 5 |              0.11262 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5639 | >20%                    |                 5 |              0.11278 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5676 | 10-15%                  |                 5 |              0.11352 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.5757 | 5-10%                   |                10 |              0.05757 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5801 | 15-20%                  |                 5 |              0.11602 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5801 | 5-10%                   |                 5 |              0.11602 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5817 | >20%                    |                 2 |              0.29085 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5895 | 10-15%                  |                 5 |              0.1179  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5965 | <5%                     |                 5 |              0.1193  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5981 | >20%                    |                 2 |              0.29905 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.611  | 15-20%                  |                 5 |              0.1222  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6199 | >20%                    |                 5 |              0.12398 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.631  | >20%                    |                 2 |              0.3155  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6416 | >20%                    |                10 |              0.06416 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6639 | <5%                     |                10 |              0.06639 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6642 | >20%                    |                 5 |              0.13284 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6729 | 10-15%                  |                 5 |              0.13458 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6834 | >20%                    |                 5 |              0.13668 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7008 | >20%                    |                 5 |              0.14016 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7053 | <5%                     |                10 |              0.07053 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7057 | >20%                    |                10 |              0.07057 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7101 | >20%                    |                10 |              0.07101 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7175 | >20%                    |                10 |              0.07175 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.718  | >20%                    |                 5 |              0.1436  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7192 | >20%                    |                10 |              0.07192 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7294 | >20%                    |                10 |              0.07294 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7303 | >20%                    |                 2 |              0.36515 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.738  | >20%                    |                10 |              0.0738  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7415 | 5-10%                   |                 5 |              0.1483  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7449 | >20%                    |                 5 |              0.14898 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7494 | 5-10%                   |                 2 |              0.3747  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7588 | <5%                     |                 5 |              0.15176 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7716 | 5-10%                   |                10 |              0.07716 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7766 | 5-10%                   |                10 |              0.07766 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7778 | >20%                    |                 5 |              0.15556 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7823 | >20%                    |                10 |              0.07823 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7862 | >20%                    |                 2 |              0.3931  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7997 | 15-20%                  |                 5 |              0.15994 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8171 | >20%                    |                10 |              0.08171 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8399 | <5%                     |                10 |              0.08399 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8409 | <5%                     |                10 |              0.08409 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8515 | >20%                    |                 5 |              0.1703  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8541 | >20%                    |                10 |              0.08541 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8554 | <5%                     |                10 |              0.08554 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8607 | 15-20%                  |                10 |              0.08607 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8764 | 5-10%                   |                10 |              0.08764 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8831 | <5%                     |                10 |              0.08831 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8845 | 5-10%                   |                10 |              0.08845 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8919 | >20%                    |                10 |              0.08919 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8957 | 15-20%                  |                 5 |              0.17914 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9086 | >20%                    |                10 |              0.09086 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.921  | >20%                    |                10 |              0.0921  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9431 | >20%                    |                10 |              0.09431 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9637 | 5-10%                   |                10 |              0.09637 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9671 | 15-20%                  |                10 |              0.09671 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0066 | <5%                     |                10 |              0.10066 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0273 | >20%                    |                10 |              0.10273 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0336 | 5-10%                   |                10 |              0.10336 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0356 | >20%                    |                 2 |              0.5178  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0372 | 10-15%                  |                10 |              0.10372 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0638 | >20%                    |                10 |              0.10638 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1064 | <5%                     |                10 |              0.11064 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1115 | 5-10%                   |                10 |              0.11115 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1163 | >20%                    |                10 |              0.11163 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1217 | >20%                    |                 5 |              0.22434 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1249 | >20%                    |                10 |              0.11249 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1846 | 15-20%                  |                10 |              0.11846 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1856 | 15-20%                  |                10 |              0.11856 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1961 | 5-10%                   |                 2 |              0.59805 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.25   | >20%                    |                 2 |              0.625   |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3355 | 5-10%                   |                 5 |              0.2671  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3765 | >20%                    |                10 |              0.13765 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.386  | >20%                    |                10 |              0.1386  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4559 | 10-15%                  |                 5 |              0.29118 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5834 | >20%                    |                10 |              0.15834 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.6099 | >20%                    |                 5 |              0.32198 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6317 | >20%                    |                10 |              0.16317 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.6413 | >20%                    |                 5 |              0.32826 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6605 | >20%                    |                 2 |              0.83025 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.81   | >20%                    |                10 |              0.181   |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1996 | 5-10%                   |                10 |              0.21996 |