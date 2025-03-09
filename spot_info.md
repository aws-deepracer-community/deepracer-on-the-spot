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

Data correct as of 2025-03-09 01:22:00.240593, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1153 | 10-15%                  |                 2 |              0.05765 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1404 | >20%                    |                 2 |              0.0702  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1445 | 5-10%                   |                 5 |              0.0289  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1785 | >20%                    |                 5 |              0.0357  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1871 | 5-10%                   |                 2 |              0.09355 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1946 | 15-20%                  |                 5 |              0.03892 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2035 | >20%                    |                 5 |              0.0407  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2154 | 5-10%                   |                 2 |              0.1077  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.222  | 5-10%                   |                 5 |              0.0444  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.232  | >20%                    |                 2 |              0.116   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2326 | 15-20%                  |                 2 |              0.1163  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2327 | >20%                    |                 2 |              0.11635 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2334 | >20%                    |                 5 |              0.04668 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2337 | >20%                    |                 2 |              0.11685 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2423 | 5-10%                   |                10 |              0.02423 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2442 | 10-15%                  |                 2 |              0.1221  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2455 | 5-10%                   |                 2 |              0.12275 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2459 | <5%                     |                 2 |              0.12295 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2464 | 10-15%                  |                 5 |              0.04928 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2507 | 15-20%                  |                 2 |              0.12535 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.253  | >20%                    |                 2 |              0.1265  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.275  | 5-10%                   |                10 |              0.0275  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2761 | 5-10%                   |                 2 |              0.13805 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2956 | 10-15%                  |                 2 |              0.1478  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2971 | 5-10%                   |                 5 |              0.05942 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2972 | 10-15%                  |                10 |              0.02972 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3004 | 5-10%                   |                 2 |              0.1502  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | 5-10%                   |                 2 |              0.1542  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3101 | >20%                    |                 2 |              0.15505 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3107 | <5%                     |                 2 |              0.15535 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3113 | <5%                     |                 2 |              0.15565 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3359 | >20%                    |                 2 |              0.16795 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3386 | 10-15%                  |                 2 |              0.1693  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3498 | 5-10%                   |                 5 |              0.06996 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3507 | >20%                    |                 5 |              0.07014 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3512 | >20%                    |                 2 |              0.1756  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3545 | 10-15%                  |                 5 |              0.0709  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3549 | >20%                    |                 2 |              0.17745 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3639 | >20%                    |                10 |              0.03639 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.3661 | <5%                     |                 2 |              0.18305 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3674 | 5-10%                   |                 5 |              0.07348 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.371  | >20%                    |                 2 |              0.1855  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3717 | 5-10%                   |                 2 |              0.18585 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3727 | <5%                     |                 2 |              0.18635 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.376  | 15-20%                  |                10 |              0.0376  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3772 | >20%                    |                 2 |              0.1886  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3789 | >20%                    |                 2 |              0.18945 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3802 | >20%                    |                 2 |              0.1901  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3859 | >20%                    |                 5 |              0.07718 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3905 | <5%                     |                 5 |              0.0781  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3911 | >20%                    |                 2 |              0.19555 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3935 | <5%                     |                10 |              0.03935 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3953 | 5-10%                   |                10 |              0.03953 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3981 | >20%                    |                 5 |              0.07962 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4049 | <5%                     |                 2 |              0.20245 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4064 | 10-15%                  |                10 |              0.04064 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4087 | <5%                     |                 5 |              0.08174 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4088 | 5-10%                   |                 2 |              0.2044  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4156 | >20%                    |                10 |              0.04156 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4178 | 10-15%                  |                10 |              0.04178 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.418  | 10-15%                  |                 5 |              0.0836  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4225 | 5-10%                   |                 2 |              0.21125 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4238 | 5-10%                   |                 2 |              0.2119  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4308 | >20%                    |                 5 |              0.08616 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4374 | 5-10%                   |                 2 |              0.2187  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4423 | <5%                     |                 2 |              0.22115 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4428 | >20%                    |                 2 |              0.2214  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.4444 | >20%                    |                 5 |              0.08888 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4477 | >20%                    |                 2 |              0.22385 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.448  | 15-20%                  |                 2 |              0.224   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4547 | >20%                    |                 5 |              0.09094 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4562 | >20%                    |                 2 |              0.2281  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4577 | 5-10%                   |                 5 |              0.09154 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4678 | >20%                    |                 2 |              0.2339  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4844 | 5-10%                   |                 5 |              0.09688 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.486  | <5%                     |                 5 |              0.0972  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4871 | >20%                    |                 5 |              0.09742 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4898 | 5-10%                   |                 5 |              0.09796 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.492  | <5%                     |                 5 |              0.0984  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5046 | 10-15%                  |                 5 |              0.10092 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5137 | >20%                    |                 2 |              0.25685 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5177 | 10-15%                  |                 2 |              0.25885 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5187 | >20%                    |                 2 |              0.25935 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5229 | >20%                    |                 5 |              0.10458 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5245 | >20%                    |                 5 |              0.1049  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5252 | >20%                    |                 5 |              0.10504 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5301 | >20%                    |                 2 |              0.26505 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.5365 | 5-10%                   |                10 |              0.05365 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5505 | 5-10%                   |                10 |              0.05505 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5506 | 15-20%                  |                 2 |              0.2753  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5514 | 5-10%                   |                 5 |              0.11028 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5565 | >20%                    |                 2 |              0.27825 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5629 | >20%                    |                 5 |              0.11258 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5637 | 5-10%                   |                 5 |              0.11274 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5694 | 10-15%                  |                 5 |              0.11388 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.57   | <5%                     |                 5 |              0.114   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5721 | >20%                    |                 2 |              0.28605 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5739 | 15-20%                  |                 2 |              0.28695 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5801 | 15-20%                  |                 5 |              0.11602 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5802 | >20%                    |                 5 |              0.11604 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5833 | 5-10%                   |                 5 |              0.11666 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5911 | 10-15%                  |                 5 |              0.11822 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5943 | <5%                     |                 5 |              0.11886 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6002 | >20%                    |                 2 |              0.3001  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6049 | 15-20%                  |                 5 |              0.12098 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.618  | >20%                    |                 5 |              0.1236  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6277 | >20%                    |                 5 |              0.12554 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6375 | >20%                    |                 2 |              0.31875 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6389 | >20%                    |                10 |              0.06389 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6715 | >20%                    |                 5 |              0.1343  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6795 | 10-15%                  |                 5 |              0.1359  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6901 | >20%                    |                10 |              0.06901 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6952 | >20%                    |                 5 |              0.13904 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6987 | <5%                     |                10 |              0.06987 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.706  | >20%                    |                10 |              0.0706  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7122 | >20%                    |                 5 |              0.14244 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7275 | >20%                    |                 2 |              0.36375 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7305 | >20%                    |                 5 |              0.1461  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7361 | >20%                    |                10 |              0.07361 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7361 | >20%                    |                10 |              0.07361 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.739  | >20%                    |                 5 |              0.1478  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7448 | 5-10%                   |                 2 |              0.3724  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7505 | <5%                     |                10 |              0.07505 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7567 | >20%                    |                 2 |              0.37835 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7574 | >20%                    |                10 |              0.07574 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7597 | <5%                     |                 5 |              0.15194 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7625 | 5-10%                   |                 5 |              0.1525  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7684 | >20%                    |                10 |              0.07684 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7743 | 5-10%                   |                10 |              0.07743 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.776  | >20%                    |                10 |              0.0776  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7819 | >20%                    |                 5 |              0.15638 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7842 | 5-10%                   |                10 |              0.07842 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8103 | 15-20%                  |                 5 |              0.16206 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.812  | >20%                    |                10 |              0.0812  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8256 | >20%                    |                10 |              0.08256 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8383 | <5%                     |                10 |              0.08383 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8467 | <5%                     |                10 |              0.08467 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8538 | <5%                     |                10 |              0.08538 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8553 | >20%                    |                 5 |              0.17106 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8619 | 15-20%                  |                10 |              0.08619 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8662 | 5-10%                   |                10 |              0.08662 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8719 | >20%                    |                10 |              0.08719 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8786 | 15-20%                  |                 5 |              0.17572 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8877 | <5%                     |                10 |              0.08877 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8926 | 5-10%                   |                10 |              0.08926 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9085 | >20%                    |                10 |              0.09085 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.94   | >20%                    |                10 |              0.094   |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9757 | >20%                    |                10 |              0.09757 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9847 | 5-10%                   |                10 |              0.09847 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0014 | 15-20%                  |                10 |              0.10014 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0017 | <5%                     |                10 |              0.10017 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0227 | >20%                    |                10 |              0.10227 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0413 | >20%                    |                10 |              0.10413 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0466 | 10-15%                  |                10 |              0.10466 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0499 | 5-10%                   |                10 |              0.10499 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0511 | 5-10%                   |                10 |              0.10511 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0696 | >20%                    |                 2 |              0.5348  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0985 | <5%                     |                10 |              0.10985 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1194 | >20%                    |                10 |              0.11194 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1217 | 5-10%                   |                 2 |              0.56085 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1429 | >20%                    |                10 |              0.11429 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1895 | 15-20%                  |                10 |              0.11895 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1921 | 15-20%                  |                10 |              0.11921 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2574 | >20%                    |                 5 |              0.25148 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3443 | >20%                    |                10 |              0.13443 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.352  | 5-10%                   |                 5 |              0.2704  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.3972 | >20%                    |                 2 |              0.6986  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4008 | >20%                    |                10 |              0.14008 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4332 | 10-15%                  |                 5 |              0.28664 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5906 | >20%                    |                10 |              0.15906 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.6664 | >20%                    |                 5 |              0.33328 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6781 | >20%                    |                 2 |              0.83905 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.7617 | >20%                    |                 5 |              0.35234 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.767  | >20%                    |                10 |              0.1767  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7937 | >20%                    |                10 |              0.17937 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1725 | 5-10%                   |                10 |              0.21725 |