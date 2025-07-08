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

Data correct as of 2025-07-08 01:58:17.381303, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1664 | 10-15%                  |                 5 |              0.03328 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1668 | >20%                    |                 5 |              0.03336 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1688 | <5%                     |                 2 |              0.0844  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1723 | 5-10%                   |                 2 |              0.08615 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1748 | >20%                    |                 2 |              0.0874  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1774 | >20%                    |                 5 |              0.03548 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1851 | >20%                    |                 2 |              0.09255 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2014 | >20%                    |                10 |              0.02014 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2036 | >20%                    |                 5 |              0.04072 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2234 | 10-15%                  |                 5 |              0.04468 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2235 | >20%                    |                 2 |              0.11175 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2266 | 15-20%                  |                 2 |              0.1133  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2323 | >20%                    |                 2 |              0.11615 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | >20%                    |                10 |              0.02395 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2423 | >20%                    |                 2 |              0.12115 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2474 | 5-10%                   |                 2 |              0.1237  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2475 | 15-20%                  |                 2 |              0.12375 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.252  | >20%                    |                 5 |              0.0504  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2531 | >20%                    |                 2 |              0.12655 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2565 | >20%                    |                 2 |              0.12825 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2744 | 5-10%                   |                10 |              0.02744 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2824 | >20%                    |                 2 |              0.1412  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | >20%                    |                10 |              0.0294  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3006 | >20%                    |                 5 |              0.06012 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3006 | <5%                     |                 2 |              0.1503  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3016 | >20%                    |                 2 |              0.1508  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3142 | 5-10%                   |                 2 |              0.1571  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3199 | 10-15%                  |                 2 |              0.15995 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3223 | >20%                    |                 2 |              0.16115 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3262 | 15-20%                  |                 2 |              0.1631  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3318 | <5%                     |                 2 |              0.1659  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3321 | <5%                     |                10 |              0.03321 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3438 | >20%                    |                 2 |              0.1719  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3486 | >20%                    |                 5 |              0.06972 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3518 | 15-20%                  |                 5 |              0.07036 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3531 | >20%                    |                 2 |              0.17655 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3579 | >20%                    |                10 |              0.03579 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3673 | >20%                    |                 5 |              0.07346 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.373  | >20%                    |                 2 |              0.1865  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3772 | >20%                    |                 2 |              0.1886  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3819 | 5-10%                   |                 2 |              0.19095 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3847 | >20%                    |                 2 |              0.19235 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3963 | >20%                    |                 2 |              0.19815 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3995 | >20%                    |                 2 |              0.19975 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4056 | >20%                    |                 5 |              0.08112 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4141 | 5-10%                   |                 2 |              0.20705 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.422  | >20%                    |                 2 |              0.211   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4237 | 10-15%                  |                 5 |              0.08474 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4299 | >20%                    |                 2 |              0.21495 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4302 | >20%                    |                10 |              0.04302 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4312 | >20%                    |                 5 |              0.08624 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4387 | >20%                    |                 2 |              0.21935 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4415 | <5%                     |                 2 |              0.22075 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4456 | 10-15%                  |                 2 |              0.2228  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4496 | <5%                     |                 2 |              0.2248  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4504 | <5%                     |                 5 |              0.09008 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4505 | >20%                    |                 5 |              0.0901  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4535 | >20%                    |                 5 |              0.0907  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4555 | 15-20%                  |                 5 |              0.0911  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4562 | >20%                    |                 2 |              0.2281  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4596 | >20%                    |                 5 |              0.09192 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4601 | >20%                    |                 2 |              0.23005 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4621 | >20%                    |                 2 |              0.23105 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4662 | >20%                    |                 2 |              0.2331  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4727 | >20%                    |                 5 |              0.09454 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.488  | 5-10%                   |                 2 |              0.244   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4886 | >20%                    |                 2 |              0.2443  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4888 | >20%                    |                10 |              0.04888 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4889 | <5%                     |                 5 |              0.09778 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5002 | 10-15%                  |                 5 |              0.10004 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5028 | 15-20%                  |                 2 |              0.2514  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5053 | 15-20%                  |                 5 |              0.10106 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5075 | 15-20%                  |                 5 |              0.1015  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5085 | >20%                    |                 5 |              0.1017  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5095 | >20%                    |                 2 |              0.25475 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5141 | <5%                     |                 5 |              0.10282 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5177 | >20%                    |                 5 |              0.10354 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5201 | >20%                    |                 2 |              0.26005 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.523  | >20%                    |                 2 |              0.2615  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5285 | >20%                    |                 5 |              0.1057  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5285 | >20%                    |                 2 |              0.26425 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5316 | >20%                    |                10 |              0.05316 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5333 | >20%                    |                 5 |              0.10666 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5388 | >20%                    |                 5 |              0.10776 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5574 | >20%                    |                 5 |              0.11148 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5582 | >20%                    |                 5 |              0.11164 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5623 | >20%                    |                10 |              0.05623 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5624 | 15-20%                  |                10 |              0.05624 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5707 | >20%                    |                 2 |              0.28535 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5708 | <5%                     |                 5 |              0.11416 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5726 | >20%                    |                 2 |              0.2863  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5843 | >20%                    |                 5 |              0.11686 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5849 | >20%                    |                 2 |              0.29245 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5886 | >20%                    |                 2 |              0.2943  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5893 | >20%                    |                 2 |              0.29465 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5924 | >20%                    |                 5 |              0.11848 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6012 | 10-15%                  |                 5 |              0.12024 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6066 | 5-10%                   |                 2 |              0.3033  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.61   | 10-15%                  |                 5 |              0.122   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6152 | >20%                    |                 5 |              0.12304 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6164 | >20%                    |                10 |              0.06164 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6213 | 15-20%                  |                10 |              0.06213 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6352 | 10-15%                  |                 2 |              0.3176  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6372 | >20%                    |                 5 |              0.12744 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6393 | >20%                    |                10 |              0.06393 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.641  | >20%                    |                 5 |              0.1282  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6468 | >20%                    |                 2 |              0.3234  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6539 | >20%                    |                 5 |              0.13078 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.66   | >20%                    |                 5 |              0.132   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6613 | 5-10%                   |                 5 |              0.13226 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6628 | >20%                    |                 5 |              0.13256 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6632 | 5-10%                   |                 5 |              0.13264 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6668 | 15-20%                  |                 5 |              0.13336 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6741 | >20%                    |                10 |              0.06741 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6808 | 10-15%                  |                10 |              0.06808 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6855 | >20%                    |                10 |              0.06855 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6944 | >20%                    |                 5 |              0.13888 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6958 | <5%                     |                 5 |              0.13916 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7162 | >20%                    |                 5 |              0.14324 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7187 | >20%                    |                 5 |              0.14374 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7302 | >20%                    |                 5 |              0.14604 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7319 | >20%                    |                 5 |              0.14638 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7329 | <5%                     |                 5 |              0.14658 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7497 | 10-15%                  |                10 |              0.07497 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7562 | >20%                    |                 2 |              0.3781  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7601 | 15-20%                  |                10 |              0.07601 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7636 | >20%                    |                10 |              0.07636 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7679 | 10-15%                  |                10 |              0.07679 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7727 | 5-10%                   |                10 |              0.07727 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.777  | <5%                     |                10 |              0.0777  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7802 | >20%                    |                 5 |              0.15604 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7982 | 5-10%                   |                10 |              0.07982 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8121 | 10-15%                  |                 5 |              0.16242 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8415 | <5%                     |                10 |              0.08415 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8424 | 10-15%                  |                10 |              0.08424 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8451 | 5-10%                   |                10 |              0.08451 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8557 | >20%                    |                 5 |              0.17114 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8559 | >20%                    |                10 |              0.08559 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8588 | 5-10%                   |                10 |              0.08588 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8609 | <5%                     |                10 |              0.08609 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8661 | >20%                    |                10 |              0.08661 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8733 | >20%                    |                10 |              0.08733 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8997 | 15-20%                  |                10 |              0.08997 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9021 | >20%                    |                10 |              0.09021 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9163 | >20%                    |                 5 |              0.18326 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9183 | >20%                    |                10 |              0.09183 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9218 | 15-20%                  |                10 |              0.09218 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9294 | >20%                    |                10 |              0.09294 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9298 | 5-10%                   |                10 |              0.09298 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.933  | >20%                    |                10 |              0.0933  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9341 | >20%                    |                10 |              0.09341 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9463 | >20%                    |                10 |              0.09463 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9574 | >20%                    |                10 |              0.09574 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9618 | 15-20%                  |                10 |              0.09618 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0238 | >20%                    |                10 |              0.10238 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0405 | >20%                    |                 2 |              0.52025 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0434 | <5%                     |                10 |              0.10434 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0462 | <5%                     |                10 |              0.10462 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0633 | <5%                     |                 2 |              0.53165 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0659 | >20%                    |                 2 |              0.53295 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0761 | <5%                     |                10 |              0.10761 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0787 | >20%                    |                10 |              0.10787 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0914 | 15-20%                  |                10 |              0.10914 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1146 | >20%                    |                10 |              0.11146 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1355 | >20%                    |                10 |              0.11355 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1602 | >20%                    |                 2 |              0.5801  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1797 | <5%                     |                10 |              0.11797 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2113 | >20%                    |                 2 |              0.60565 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2161 | >20%                    |                10 |              0.12161 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2416 | >20%                    |                 5 |              0.24832 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2472 | <5%                     |                 5 |              0.24944 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2903 | 15-20%                  |                10 |              0.12903 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2979 | >20%                    |                 5 |              0.25958 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.306  | 10-15%                  |                10 |              0.1306  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4134 | >20%                    |                10 |              0.14134 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.468  | <5%                     |                 5 |              0.2936  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4999 | >20%                    |                 5 |              0.29998 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6213 | 15-20%                  |                10 |              0.16213 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8406 | >20%                    |                10 |              0.18406 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8475 | <5%                     |                10 |              0.18475 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      2.0368 | <5%                     |                 2 |              1.0184  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0445 | 5-10%                   |                10 |              0.20445 |