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

Data correct as of 2024-12-12 01:46:07.634211, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1754 | 15-20%                  |                 2 |              0.0877  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2125 | 15-20%                  |                 2 |              0.10625 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2176 | 5-10%                   |                 5 |              0.04352 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.221  | >20%                    |                 2 |              0.1105  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2229 | <5%                     |                 2 |              0.11145 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2286 | 15-20%                  |                 2 |              0.1143  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2309 | 10-15%                  |                 2 |              0.11545 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2339 | <5%                     |                 2 |              0.11695 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2354 | 15-20%                  |                 5 |              0.04708 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2386 | >20%                    |                 5 |              0.04772 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2462 | <5%                     |                 2 |              0.1231  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2482 | >20%                    |                 2 |              0.1241  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2555 | 15-20%                  |                10 |              0.02555 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 | <5%                     |                 2 |              0.1402  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2805 | <5%                     |                 2 |              0.14025 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2851 | <5%                     |                 2 |              0.14255 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2921 | >20%                    |                 5 |              0.05842 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | >20%                    |                 2 |              0.1477  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3027 | 5-10%                   |                 2 |              0.15135 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3085 | <5%                     |                 2 |              0.15425 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3204 | <5%                     |                 2 |              0.1602  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3376 | <5%                     |                 5 |              0.06752 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3391 | <5%                     |                 5 |              0.06782 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3424 | 15-20%                  |                 2 |              0.1712  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3428 | 10-15%                  |                 2 |              0.1714  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3448 | >20%                    |                 2 |              0.1724  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3493 | <5%                     |                 2 |              0.17465 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3494 | >20%                    |                 2 |              0.1747  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3532 | <5%                     |                 5 |              0.07064 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3587 | >20%                    |                 5 |              0.07174 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3589 | >20%                    |                 2 |              0.17945 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3651 | >20%                    |                 5 |              0.07302 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3664 | 5-10%                   |                 2 |              0.1832  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3666 | >20%                    |                 2 |              0.1833  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3668 | 15-20%                  |                 2 |              0.1834  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3717 | 5-10%                   |                 2 |              0.18585 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3741 | 5-10%                   |                10 |              0.03741 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3743 | >20%                    |                10 |              0.03743 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3776 | <5%                     |                 5 |              0.07552 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3967 | 5-10%                   |                 2 |              0.19835 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.3973 | 10-15%                  |                 2 |              0.19865 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4039 | 5-10%                   |                 2 |              0.20195 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4052 | <5%                     |                 5 |              0.08104 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4126 | <5%                     |                 5 |              0.08252 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4134 | 5-10%                   |                 2 |              0.2067  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4143 | >20%                    |                 2 |              0.20715 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4151 | 5-10%                   |                 2 |              0.20755 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4172 | 5-10%                   |                 5 |              0.08344 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4261 | 5-10%                   |                 5 |              0.08522 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4291 | 15-20%                  |                 2 |              0.21455 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4366 | 10-15%                  |                 5 |              0.08732 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4463 | <5%                     |                 2 |              0.22315 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4613 | 5-10%                   |                 5 |              0.09226 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4631 | >20%                    |                 2 |              0.23155 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4637 | 10-15%                  |                 2 |              0.23185 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4656 | >20%                    |                 5 |              0.09312 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.4683 | 5-10%                   |                 5 |              0.09366 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4686 | >20%                    |                 5 |              0.09372 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4688 | <5%                     |                 5 |              0.09376 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4713 | 5-10%                   |                 2 |              0.23565 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4727 | 10-15%                  |                 5 |              0.09454 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4734 | 15-20%                  |                 5 |              0.09468 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4737 | 15-20%                  |                10 |              0.04737 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4788 | >20%                    |                 5 |              0.09576 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4842 | 15-20%                  |                 2 |              0.2421  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4941 | 10-15%                  |                 2 |              0.24705 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4975 | >20%                    |                10 |              0.04975 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5012 | 15-20%                  |                 5 |              0.10024 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.502  | <5%                     |                 5 |              0.1004  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5121 | 5-10%                   |                 5 |              0.10242 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5127 | >20%                    |                 2 |              0.25635 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5127 | 5-10%                   |                10 |              0.05127 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.513  | <5%                     |                 5 |              0.1026  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5203 | 10-15%                  |                10 |              0.05203 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5229 | >20%                    |                 5 |              0.10458 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5288 | 10-15%                  |                 5 |              0.10576 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5303 | >20%                    |                 5 |              0.10606 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5384 | 10-15%                  |                 2 |              0.2692  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5399 | 10-15%                  |                10 |              0.05399 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5471 | >20%                    |                 2 |              0.27355 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5514 | 10-15%                  |                 5 |              0.11028 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5517 | >20%                    |                 5 |              0.11034 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5534 | 10-15%                  |                 5 |              0.11068 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5627 | 5-10%                   |                 5 |              0.11254 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 | <5%                     |                10 |              0.05663 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.5809 | 5-10%                   |                 2 |              0.29045 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5813 | <5%                     |                 5 |              0.11626 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.609  | >20%                    |                10 |              0.0609  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.639  | 5-10%                   |                10 |              0.0639  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.64   | >20%                    |                 5 |              0.128   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6506 | >20%                    |                10 |              0.06506 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6525 | 10-15%                  |                10 |              0.06525 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6537 | 15-20%                  |                 5 |              0.13074 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6568 | 5-10%                   |                10 |              0.06568 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6622 | <5%                     |                 5 |              0.13244 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.669  | >20%                    |                 2 |              0.3345  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6721 | 10-15%                  |                 5 |              0.13442 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.673  | >20%                    |                10 |              0.0673  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6755 | <5%                     |                 5 |              0.1351  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7362 | >20%                    |                 5 |              0.14724 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7415 | <5%                     |                 2 |              0.37075 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.744  | >20%                    |                 5 |              0.1488  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7455 | >20%                    |                10 |              0.07455 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7515 | >20%                    |                 5 |              0.1503  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.7681 | <5%                     |                10 |              0.07681 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7862 | <5%                     |                10 |              0.07862 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7883 | <5%                     |                 5 |              0.15766 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8053 | >20%                    |                10 |              0.08053 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8128 | 15-20%                  |                10 |              0.08128 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8208 | 10-15%                  |                10 |              0.08208 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8305 | <5%                     |                10 |              0.08305 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8355 | 5-10%                   |                10 |              0.08355 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8383 | 5-10%                   |                10 |              0.08383 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8565 | 5-10%                   |                 2 |              0.42825 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8602 | 10-15%                  |                10 |              0.08602 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8606 | <5%                     |                10 |              0.08606 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8625 | 10-15%                  |                10 |              0.08625 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8631 | 10-15%                  |                10 |              0.08631 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8926 | 10-15%                  |                10 |              0.08926 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.907  | 15-20%                  |                10 |              0.0907  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9108 | 5-10%                   |                10 |              0.09108 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9276 | 5-10%                   |                10 |              0.09276 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9287 | 5-10%                   |                10 |              0.09287 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9301 | <5%                     |                 5 |              0.18602 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9375 | >20%                    |                10 |              0.09375 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9574 | >20%                    |                10 |              0.09574 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9725 | 5-10%                   |                10 |              0.09725 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0056 | 5-10%                   |                10 |              0.10056 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.0415 | <5%                     |                 5 |              0.2083  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0591 | >20%                    |                10 |              0.10591 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0835 | <5%                     |                10 |              0.10835 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1531 | >20%                    |                10 |              0.11531 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2007 | 5-10%                   |                10 |              0.12007 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2246 | >20%                    |                10 |              0.12246 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4583 | 5-10%                   |                10 |              0.14583 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5915 | 5-10%                   |                10 |              0.15915 |