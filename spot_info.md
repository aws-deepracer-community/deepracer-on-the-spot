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

Data correct as of 2026-02-12 02:40:59.804237, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1536 | >20%                    |                 2 |              0.0768  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1585 | >20%                    |                 2 |              0.07925 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1867 | 5-10%                   |                 2 |              0.09335 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1923 | >20%                    |                 2 |              0.09615 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2031 | >20%                    |                 5 |              0.04062 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2047 | >20%                    |                 2 |              0.10235 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2148 | >20%                    |                 5 |              0.04296 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2177 | >20%                    |                 5 |              0.04354 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2372 | <5%                     |                 5 |              0.04744 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2526 | >20%                    |                 2 |              0.1263  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.255  | 15-20%                  |                 2 |              0.1275  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.257  | 10-15%                  |                 2 |              0.1285  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2586 | 5-10%                   |                10 |              0.02586 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2602 | 10-15%                  |                 2 |              0.1301  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2663 | >20%                    |                 2 |              0.13315 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2781 | >20%                    |                 2 |              0.13905 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.283  | >20%                    |                 2 |              0.1415  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2837 | >20%                    |                 2 |              0.14185 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | >20%                    |                 2 |              0.15025 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.308  | >20%                    |                 2 |              0.154   |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3104 | >20%                    |                 5 |              0.06208 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3121 | >20%                    |                 2 |              0.15605 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3189 | >20%                    |                 2 |              0.15945 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3317 | >20%                    |                 5 |              0.06634 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3513 | >20%                    |                 5 |              0.07026 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3527 | >20%                    |                 2 |              0.17635 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3549 | <5%                     |                 2 |              0.17745 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3582 | 15-20%                  |                 2 |              0.1791  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3588 | 15-20%                  |                 2 |              0.1794  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3608 | <5%                     |                 5 |              0.07216 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3618 | 5-10%                   |                 2 |              0.1809  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3624 | 5-10%                   |                10 |              0.03624 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3703 | <5%                     |                 5 |              0.07406 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3726 | >20%                    |                 2 |              0.1863  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3728 | 5-10%                   |                 5 |              0.07456 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.3728 | <5%                     |                 5 |              0.07456 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.373  | 5-10%                   |                 2 |              0.1865  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3794 | <5%                     |                 2 |              0.1897  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3802 | >20%                    |                 5 |              0.07604 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3824 | >20%                    |                 5 |              0.07648 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3843 | >20%                    |                 5 |              0.07686 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3859 | >20%                    |                 5 |              0.07718 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3862 | <5%                     |                 5 |              0.07724 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3875 | 10-15%                  |                 2 |              0.19375 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.388  | >20%                    |                10 |              0.0388  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3922 | >20%                    |                 5 |              0.07844 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3939 | >20%                    |                 2 |              0.19695 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3966 | >20%                    |                 5 |              0.07932 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3994 | >20%                    |                10 |              0.03994 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4024 | 10-15%                  |                 5 |              0.08048 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4063 | >20%                    |                 2 |              0.20315 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4129 | >20%                    |                 5 |              0.08258 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4147 | >20%                    |                 2 |              0.20735 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.416  | 5-10%                   |                 2 |              0.208   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4198 | 15-20%                  |                 2 |              0.2099  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4253 | >20%                    |                 2 |              0.21265 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4266 | >20%                    |                 5 |              0.08532 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4279 | <5%                     |                 2 |              0.21395 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4284 | <5%                     |                 2 |              0.2142  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4314 | >20%                    |                 2 |              0.2157  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4337 | >20%                    |                10 |              0.04337 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4357 | 15-20%                  |                 5 |              0.08714 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4414 | 5-10%                   |                 2 |              0.2207  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4416 | 5-10%                   |                 2 |              0.2208  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4431 | 15-20%                  |                 2 |              0.22155 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4485 | >20%                    |                 2 |              0.22425 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4582 | >20%                    |                 2 |              0.2291  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4583 | >20%                    |                 2 |              0.22915 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4602 | 15-20%                  |                 2 |              0.2301  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4625 | >20%                    |                 5 |              0.0925  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4633 | >20%                    |                10 |              0.04633 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4684 | 5-10%                   |                 2 |              0.2342  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4757 | 5-10%                   |                 5 |              0.09514 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4761 | >20%                    |                 2 |              0.23805 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4784 | 15-20%                  |                 5 |              0.09568 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4851 | <5%                     |                 2 |              0.24255 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4969 | >20%                    |                 2 |              0.24845 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4992 | >20%                    |                 2 |              0.2496  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.502  | >20%                    |                 2 |              0.251   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5138 | 15-20%                  |                10 |              0.05138 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5179 | >20%                    |                10 |              0.05179 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5216 | >20%                    |                 5 |              0.10432 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.523  | >20%                    |                 5 |              0.1046  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5249 | <5%                     |                 5 |              0.10498 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5292 | >20%                    |                10 |              0.05292 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5373 | 15-20%                  |                 5 |              0.10746 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5438 | >20%                    |                10 |              0.05438 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.544  | 5-10%                   |                 5 |              0.1088  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5479 | >20%                    |                 5 |              0.10958 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5593 | >20%                    |                 5 |              0.11186 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5766 | >20%                    |                 5 |              0.11532 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5787 | <5%                     |                 5 |              0.11574 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5828 | 15-20%                  |                10 |              0.05828 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5852 | >20%                    |                 2 |              0.2926  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5975 | >20%                    |                 5 |              0.1195  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5978 | >20%                    |                10 |              0.05978 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5984 | 5-10%                   |                 5 |              0.11968 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6001 | 5-10%                   |                 2 |              0.30005 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6001 | 10-15%                  |                 5 |              0.12002 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6013 | >20%                    |                 5 |              0.12026 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6026 | >20%                    |                 5 |              0.12052 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.603  | >20%                    |                10 |              0.0603  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6146 | 15-20%                  |                 2 |              0.3073  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6243 | <5%                     |                10 |              0.06243 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6292 | 15-20%                  |                10 |              0.06292 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6332 | 15-20%                  |                 5 |              0.12664 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.64   | 15-20%                  |                10 |              0.064   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6455 | >20%                    |                 5 |              0.1291  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6468 | >20%                    |                 5 |              0.12936 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6517 | <5%                     |                10 |              0.06517 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.663  | >20%                    |                 5 |              0.1326  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6784 | 10-15%                  |                10 |              0.06784 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6791 | 5-10%                   |                 2 |              0.33955 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6803 | 5-10%                   |                 5 |              0.13606 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6822 | >20%                    |                 5 |              0.13644 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6894 | 5-10%                   |                 5 |              0.13788 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6978 | >20%                    |                10 |              0.06978 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7112 | >20%                    |                 5 |              0.14224 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.717  | >20%                    |                10 |              0.0717  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.717  | <5%                     |                10 |              0.0717  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7188 | <5%                     |                10 |              0.07188 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7216 | <5%                     |                10 |              0.07216 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7304 | >20%                    |                10 |              0.07304 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.737  | 10-15%                  |                10 |              0.0737  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7473 | >20%                    |                 5 |              0.14946 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.749  | >20%                    |                10 |              0.0749  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.751  | >20%                    |                10 |              0.0751  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7575 | 15-20%                  |                10 |              0.07575 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.761  | >20%                    |                 2 |              0.3805  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7657 | >20%                    |                 2 |              0.38285 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7943 | <5%                     |                10 |              0.07943 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.798  | >20%                    |                 5 |              0.1596  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8052 | >20%                    |                 5 |              0.16104 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8074 | <5%                     |                10 |              0.08074 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.809  | 5-10%                   |                10 |              0.0809  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8092 | >20%                    |                 5 |              0.16184 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8119 | >20%                    |                 5 |              0.16238 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8141 | <5%                     |                 5 |              0.16282 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8171 | >20%                    |                10 |              0.08171 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8222 | 5-10%                   |                10 |              0.08222 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8301 | >20%                    |                10 |              0.08301 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8375 | 10-15%                  |                 2 |              0.41875 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8411 | >20%                    |                10 |              0.08411 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8537 | <5%                     |                10 |              0.08537 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8617 | >20%                    |                10 |              0.08617 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8636 | >20%                    |                 5 |              0.17272 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8682 | >20%                    |                 2 |              0.4341  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8737 | >20%                    |                10 |              0.08737 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8788 | >20%                    |                 2 |              0.4394  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9124 | >20%                    |                 2 |              0.4562  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9327 | >20%                    |                 5 |              0.18654 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9354 | 10-15%                  |                10 |              0.09354 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9386 | <5%                     |                10 |              0.09386 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9395 | <5%                     |                10 |              0.09395 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9491 |                         |                 2 |              0.47455 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9552 | >20%                    |                 2 |              0.4776  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9822 | >20%                    |                10 |              0.09822 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9916 | >20%                    |                10 |              0.09916 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0015 | 15-20%                  |                10 |              0.10015 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0306 | >20%                    |                10 |              0.10306 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0365 | >20%                    |                10 |              0.10365 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0443 | 15-20%                  |                10 |              0.10443 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0723 | 5-10%                   |                 5 |              0.21446 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0829 | 5-10%                   |                10 |              0.10829 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0862 | >20%                    |                 5 |              0.21724 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0935 | 10-15%                  |                 5 |              0.2187  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0981 | >20%                    |                10 |              0.10981 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.127  | >20%                    |                10 |              0.1127  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1302 | >20%                    |                10 |              0.11302 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1318 | >20%                    |                 2 |              0.5659  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1523 | >20%                    |                10 |              0.11523 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1841 | <5%                     |                10 |              0.11841 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2014 | >20%                    |                 5 |              0.24028 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2337 | >20%                    |                10 |              0.12337 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2515 | >20%                    |                10 |              0.12515 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2602 |                         |                 5 |              0.25204 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3407 | 10-15%                  |                 5 |              0.26814 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4068 | >20%                    |                10 |              0.14068 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4716 | >20%                    |                 2 |              0.7358  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7367 | 15-20%                  |                10 |              0.17367 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9348 |                         |                10 |              0.19348 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0579 | 10-15%                  |                10 |              0.20579 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4207 | <5%                     |                 5 |              0.48414 |