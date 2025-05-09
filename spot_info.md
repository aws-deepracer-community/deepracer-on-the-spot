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

Data correct as of 2025-05-09 01:51:42.394327, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1346 | >20%                    |                 2 |              0.0673  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1842 | >20%                    |                 5 |              0.03684 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.204  | 5-10%                   |                 5 |              0.0408  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2165 | >20%                    |                 5 |              0.0433  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2189 | >20%                    |                 2 |              0.10945 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2232 | <5%                     |                 2 |              0.1116  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2314 | 15-20%                  |                 2 |              0.1157  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2479 | <5%                     |                 5 |              0.04958 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2528 | 15-20%                  |                 5 |              0.05056 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2576 | >20%                    |                 2 |              0.1288  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2577 | <5%                     |                 2 |              0.12885 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2648 | <5%                     |                 2 |              0.1324  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2681 | 5-10%                   |                 2 |              0.13405 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2699 | 15-20%                  |                 2 |              0.13495 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2774 | 5-10%                   |                 5 |              0.05548 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2779 | >20%                    |                 2 |              0.13895 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2808 | 5-10%                   |                 2 |              0.1404  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2885 | >20%                    |                 2 |              0.14425 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | 15-20%                  |                10 |              0.0294  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2975 | 10-15%                  |                 2 |              0.14875 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2982 | 15-20%                  |                10 |              0.02982 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3061 | >20%                    |                 2 |              0.15305 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3062 | 5-10%                   |                 2 |              0.1531  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3063 | <5%                     |                 2 |              0.15315 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3086 | 5-10%                   |                 2 |              0.1543  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | 5-10%                   |                 2 |              0.15735 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3219 | >20%                    |                 2 |              0.16095 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3222 | >20%                    |                 2 |              0.1611  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.334  | >20%                    |                 2 |              0.167   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3347 | >20%                    |                10 |              0.03347 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3397 | >20%                    |                 2 |              0.16985 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3482 | >20%                    |                 5 |              0.06964 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3512 | >20%                    |                 2 |              0.1756  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3565 | 15-20%                  |                10 |              0.03565 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3571 | 10-15%                  |                10 |              0.03571 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.365  | 15-20%                  |                 5 |              0.073   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3656 | >20%                    |                 5 |              0.07312 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3684 | >20%                    |                 2 |              0.1842  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3692 | <5%                     |                 2 |              0.1846  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3699 | 10-15%                  |                10 |              0.03699 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3717 | >20%                    |                 5 |              0.07434 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3722 | 5-10%                   |                 5 |              0.07444 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3763 | >20%                    |                 2 |              0.18815 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3764 | <5%                     |                 5 |              0.07528 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3808 | >20%                    |                10 |              0.03808 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3891 | >20%                    |                 2 |              0.19455 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3899 | >20%                    |                 5 |              0.07798 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3935 | 10-15%                  |                 2 |              0.19675 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3937 | >20%                    |                 2 |              0.19685 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.398  | 5-10%                   |                 5 |              0.0796  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.408  | >20%                    |                 2 |              0.204   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.408  | 10-15%                  |                 2 |              0.204   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4102 | <5%                     |                 5 |              0.08204 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4106 | 5-10%                   |                 2 |              0.2053  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.411  | >20%                    |                 2 |              0.2055  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4216 | >20%                    |                 5 |              0.08432 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4231 | 10-15%                  |                10 |              0.04231 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4295 | 10-15%                  |                 2 |              0.21475 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4323 | >20%                    |                10 |              0.04323 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4365 | 15-20%                  |                 2 |              0.21825 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4398 | <5%                     |                 5 |              0.08796 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4428 | >20%                    |                 2 |              0.2214  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4437 | 15-20%                  |                 5 |              0.08874 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4485 | >20%                    |                 5 |              0.0897  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.457  | <5%                     |                 2 |              0.2285  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4579 | 10-15%                  |                 5 |              0.09158 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4583 | >20%                    |                 5 |              0.09166 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4654 | >20%                    |                 5 |              0.09308 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4681 | 5-10%                   |                 5 |              0.09362 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4719 | >20%                    |                 2 |              0.23595 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4731 | >20%                    |                 5 |              0.09462 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4741 | >20%                    |                 5 |              0.09482 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4775 | >20%                    |                 5 |              0.0955  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4789 | >20%                    |                 2 |              0.23945 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4849 | <5%                     |                 5 |              0.09698 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4851 | 5-10%                   |                 5 |              0.09702 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4863 | >20%                    |                 2 |              0.24315 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4981 | >20%                    |                 5 |              0.09962 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4993 | 15-20%                  |                 5 |              0.09986 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5071 | >20%                    |                 5 |              0.10142 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5113 | 10-15%                  |                 5 |              0.10226 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5268 | >20%                    |                 2 |              0.2634  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5277 | >20%                    |                 2 |              0.26385 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5304 | >20%                    |                 2 |              0.2652  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5337 | <5%                     |                10 |              0.05337 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5382 | >20%                    |                 2 |              0.2691  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5386 | 10-15%                  |                 2 |              0.2693  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5595 | 5-10%                   |                 5 |              0.1119  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5616 | <5%                     |                10 |              0.05616 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5637 | 10-15%                  |                10 |              0.05637 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5677 | >20%                    |                 5 |              0.11354 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5704 | 10-15%                  |                 5 |              0.11408 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5747 | >20%                    |                 5 |              0.11494 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5829 | >20%                    |                 5 |              0.11658 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5845 | >20%                    |                 2 |              0.29225 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5887 | >20%                    |                 5 |              0.11774 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5918 | >20%                    |                 2 |              0.2959  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5927 | 10-15%                  |                 2 |              0.29635 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5985 | >20%                    |                 2 |              0.29925 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6029 | >20%                    |                 5 |              0.12058 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6066 | <5%                     |                 5 |              0.12132 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6234 | 10-15%                  |                 5 |              0.12468 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6332 | >20%                    |                 5 |              0.12664 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6355 | >20%                    |                 5 |              0.1271  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6449 | >20%                    |                 2 |              0.32245 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.648  | 5-10%                   |                10 |              0.0648  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6484 | 15-20%                  |                10 |              0.06484 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6523 | >20%                    |                10 |              0.06523 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6693 | 15-20%                  |                 5 |              0.13386 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6801 | >20%                    |                 2 |              0.34005 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7107 | >20%                    |                 5 |              0.14214 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.711  | >20%                    |                 5 |              0.1422  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7179 | >20%                    |                 5 |              0.14358 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7216 | >20%                    |                10 |              0.07216 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7231 | 5-10%                   |                10 |              0.07231 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7302 | <5%                     |                 5 |              0.14604 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7324 | >20%                    |                10 |              0.07324 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7347 | <5%                     |                 5 |              0.14694 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7379 | >20%                    |                 2 |              0.36895 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7389 | >20%                    |                10 |              0.07389 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.744  | >20%                    |                 2 |              0.372   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7445 | 15-20%                  |                10 |              0.07445 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7502 | >20%                    |                10 |              0.07502 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7617 | 10-15%                  |                10 |              0.07617 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7765 | >20%                    |                 5 |              0.1553  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7879 | <5%                     |                 5 |              0.15758 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7883 | 10-15%                  |                 5 |              0.15766 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8093 | <5%                     |                10 |              0.08093 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.813  | >20%                    |                 5 |              0.1626  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8175 | 10-15%                  |                10 |              0.08175 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8209 | 15-20%                  |                10 |              0.08209 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8228 | 5-10%                   |                10 |              0.08228 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8277 | >20%                    |                 2 |              0.41385 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8297 | 10-15%                  |                10 |              0.08297 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8448 | 15-20%                  |                10 |              0.08448 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8454 | >20%                    |                 2 |              0.4227  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8476 | >20%                    |                10 |              0.08476 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.848  | >20%                    |                10 |              0.0848  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8545 | 15-20%                  |                10 |              0.08545 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8571 | >20%                    |                 2 |              0.42855 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8637 | 10-15%                  |                10 |              0.08637 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8749 | 15-20%                  |                10 |              0.08749 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8842 | 10-15%                  |                10 |              0.08842 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8934 | <5%                     |                10 |              0.08934 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9028 | >20%                    |                10 |              0.09028 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9118 | >20%                    |                 5 |              0.18236 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9141 | >20%                    |                10 |              0.09141 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9275 | <5%                     |                10 |              0.09275 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9284 | 10-15%                  |                10 |              0.09284 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.932  | 15-20%                  |                10 |              0.0932  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9527 | >20%                    |                10 |              0.09527 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0016 | >20%                    |                 2 |              0.5008  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0189 | >20%                    |                 5 |              0.20378 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0287 | >20%                    |                10 |              0.10287 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0329 | >20%                    |                10 |              0.10329 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.035  | <5%                     |                10 |              0.1035  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0397 | >20%                    |                10 |              0.10397 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0532 | <5%                     |                 5 |              0.21064 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0567 | 15-20%                  |                 2 |              0.52835 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0794 | >20%                    |                 5 |              0.21588 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0924 | 10-15%                  |                 5 |              0.21848 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1222 | <5%                     |                10 |              0.11222 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1636 | >20%                    |                10 |              0.11636 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1738 | 10-15%                  |                 2 |              0.5869  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2333 | >20%                    |                10 |              0.12333 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.252  | >20%                    |                 5 |              0.2504  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2922 | <5%                     |                 5 |              0.25844 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2953 | >20%                    |                 2 |              0.64765 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2989 | >20%                    |                10 |              0.12989 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3302 | >20%                    |                 5 |              0.26604 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3686 | 15-20%                  |                10 |              0.13686 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3848 | >20%                    |                10 |              0.13848 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4472 | 15-20%                  |                10 |              0.14472 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.521  | 15-20%                  |                10 |              0.1521  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6747 | 5-10%                   |                10 |              0.16747 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7988 | >20%                    |                10 |              0.17988 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0123 | <5%                     |                10 |              0.20123 |