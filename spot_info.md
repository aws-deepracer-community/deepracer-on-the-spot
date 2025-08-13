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

Data correct as of 2025-08-13 01:58:11.656551, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0945 | 5-10%                   |                 2 |              0.04725 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1018 | >20%                    |                 2 |              0.0509  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.164  | <5%                     |                 5 |              0.0328  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2078 | 15-20%                  |                 2 |              0.1039  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2101 | >20%                    |                 2 |              0.10505 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 15-20%                  |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2414 | >20%                    |                 2 |              0.1207  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2481 | 15-20%                  |                 2 |              0.12405 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2489 | 5-10%                   |                 2 |              0.12445 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2552 | >20%                    |                 2 |              0.1276  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2588 | >20%                    |                 2 |              0.1294  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.288  | >20%                    |                 2 |              0.144   |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3103 | 15-20%                  |                 2 |              0.15515 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3145 | >20%                    |                 2 |              0.15725 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3161 | <5%                     |                 2 |              0.15805 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.324  | 5-10%                   |                 2 |              0.162   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3273 | 5-10%                   |                 2 |              0.16365 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3435 | >20%                    |                 2 |              0.17175 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3528 | >20%                    |                 2 |              0.1764  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3553 | 10-15%                  |                 2 |              0.17765 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.357  | >20%                    |                 5 |              0.0714  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3611 | 15-20%                  |                 2 |              0.18055 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3613 | <5%                     |                 2 |              0.18065 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3646 | 15-20%                  |                 2 |              0.1823  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3699 | >20%                    |                 2 |              0.18495 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3759 | <5%                     |                10 |              0.03759 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.386  | >20%                    |                 5 |              0.0772  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3881 | >20%                    |                 2 |              0.19405 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4059 | >20%                    |                 2 |              0.20295 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4092 | >20%                    |                 5 |              0.08184 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4206 | >20%                    |                 5 |              0.08412 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4206 | <5%                     |                 2 |              0.2103  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4213 | >20%                    |                10 |              0.04213 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.425  | >20%                    |                 5 |              0.085   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4273 | >20%                    |                 5 |              0.08546 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4302 | >20%                    |                 5 |              0.08604 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4377 | 15-20%                  |                 5 |              0.08754 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4378 | >20%                    |                 2 |              0.2189  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4392 | >20%                    |                 5 |              0.08784 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4401 | 5-10%                   |                 5 |              0.08802 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4558 | <5%                     |                 2 |              0.2279  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4575 | >20%                    |                 2 |              0.22875 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4637 | >20%                    |                 2 |              0.23185 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4643 | 5-10%                   |                 2 |              0.23215 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4644 | >20%                    |                 2 |              0.2322  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4649 | 5-10%                   |                 2 |              0.23245 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4675 | >20%                    |                 2 |              0.23375 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.468  | >20%                    |                 5 |              0.0936  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.474  | >20%                    |                 2 |              0.237   |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.484  | >20%                    |                 5 |              0.0968  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4893 | >20%                    |                 2 |              0.24465 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4944 | 10-15%                  |                 2 |              0.2472  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5009 | 5-10%                   |                 5 |              0.10018 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5014 | >20%                    |                 5 |              0.10028 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5103 | >20%                    |                 2 |              0.25515 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5165 | >20%                    |                 2 |              0.25825 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5176 | 10-15%                  |                 5 |              0.10352 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5371 | >20%                    |                 5 |              0.10742 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.542  | >20%                    |                 2 |              0.271   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5454 | >20%                    |                 5 |              0.10908 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5478 | <5%                     |                 2 |              0.2739  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5521 | 10-15%                  |                 5 |              0.11042 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5531 | >20%                    |                 5 |              0.11062 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5543 | >20%                    |                 2 |              0.27715 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5601 | >20%                    |                 2 |              0.28005 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5675 | 15-20%                  |                10 |              0.05675 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5696 | >20%                    |                 2 |              0.2848  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5742 | 15-20%                  |                 2 |              0.2871  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5747 | >20%                    |                 5 |              0.11494 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5782 | >20%                    |                 2 |              0.2891  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5858 | 5-10%                   |                 2 |              0.2929  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5963 | >20%                    |                 5 |              0.11926 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6003 | 5-10%                   |                 5 |              0.12006 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6007 | >20%                    |                 2 |              0.30035 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6022 | >20%                    |                 5 |              0.12044 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6063 | >20%                    |                 5 |              0.12126 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6063 | >20%                    |                 5 |              0.12126 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6091 | 10-15%                  |                 5 |              0.12182 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6112 | 15-20%                  |                10 |              0.06112 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6262 | >20%                    |                 5 |              0.12524 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6364 | >20%                    |                 2 |              0.3182  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6367 | 10-15%                  |                 5 |              0.12734 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6444 | >20%                    |                 5 |              0.12888 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6484 | 5-10%                   |                 5 |              0.12968 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6488 | <5%                     |                 5 |              0.12976 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6587 | >20%                    |                 5 |              0.13174 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6632 | <5%                     |                 5 |              0.13264 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6679 | <5%                     |                10 |              0.06679 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6754 | 15-20%                  |                 2 |              0.3377  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6818 | >20%                    |                 5 |              0.13636 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6837 | >20%                    |                 5 |              0.13674 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6945 | >20%                    |                 2 |              0.34725 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7013 | 15-20%                  |                10 |              0.07013 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7043 | >20%                    |                10 |              0.07043 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7113 | 15-20%                  |                 5 |              0.14226 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7137 | >20%                    |                10 |              0.07137 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7219 | >20%                    |                10 |              0.07219 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7232 | 10-15%                  |                 2 |              0.3616  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7245 | 15-20%                  |                 2 |              0.36225 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7295 | 5-10%                   |                 5 |              0.1459  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7573 | <5%                     |                10 |              0.07573 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7601 | >20%                    |                 5 |              0.15202 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7661 | 15-20%                  |                10 |              0.07661 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7777 | 15-20%                  |                10 |              0.07777 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7781 | >20%                    |                10 |              0.07781 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7794 | >20%                    |                 5 |              0.15588 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7797 | >20%                    |                 5 |              0.15594 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7803 | >20%                    |                10 |              0.07803 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7831 | >20%                    |                 5 |              0.15662 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7861 | >20%                    |                 5 |              0.15722 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8092 | >20%                    |                10 |              0.08092 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8135 | 15-20%                  |                10 |              0.08135 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8193 | >20%                    |                10 |              0.08193 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8327 | >20%                    |                10 |              0.08327 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8336 | >20%                    |                 5 |              0.16672 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8397 | >20%                    |                 5 |              0.16794 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8399 | >20%                    |                 2 |              0.41995 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8658 | >20%                    |                10 |              0.08658 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8718 | 5-10%                   |                10 |              0.08718 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8791 | 5-10%                   |                10 |              0.08791 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8841 | <5%                     |                10 |              0.08841 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9016 | 5-10%                   |                10 |              0.09016 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9089 | >20%                    |                 5 |              0.18178 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9105 | 5-10%                   |                10 |              0.09105 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9138 | 15-20%                  |                10 |              0.09138 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9209 | <5%                     |                 5 |              0.18418 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9209 | 5-10%                   |                10 |              0.09209 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9286 | 5-10%                   |                 5 |              0.18572 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.935  | 15-20%                  |                10 |              0.0935  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9379 | 15-20%                  |                10 |              0.09379 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9532 | >20%                    |                 2 |              0.4766  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9607 | 5-10%                   |                10 |              0.09607 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.986  | >20%                    |                10 |              0.0986  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9862 | >20%                    |                10 |              0.09862 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0003 | <5%                     |                10 |              0.10003 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0244 | 5-10%                   |                10 |              0.10244 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0266 | <5%                     |                10 |              0.10266 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.029  | 15-20%                  |                10 |              0.1029  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0433 | 15-20%                  |                10 |              0.10433 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0646 | 5-10%                   |                10 |              0.10646 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0848 | 15-20%                  |                10 |              0.10848 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0903 | >20%                    |                10 |              0.10903 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0913 | <5%                     |                10 |              0.10913 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1126 | >20%                    |                10 |              0.11126 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1383 | >20%                    |                10 |              0.11383 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1485 | >20%                    |                 5 |              0.2297  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1493 | >20%                    |                10 |              0.11493 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1619 | <5%                     |                 2 |              0.58095 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1633 | >20%                    |                10 |              0.11633 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1792 | 15-20%                  |                 5 |              0.23584 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1884 | >20%                    |                10 |              0.11884 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.204  | >20%                    |                 2 |              0.602   |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2221 | >20%                    |                 2 |              0.61105 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2347 | >20%                    |                10 |              0.12347 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2583 | >20%                    |                 5 |              0.25166 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2827 | >20%                    |                 5 |              0.25654 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2898 | >20%                    |                 5 |              0.25796 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3144 | 5-10%                   |                10 |              0.13144 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3904 | 5-10%                   |                 2 |              0.6952  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4466 | >20%                    |                10 |              0.14466 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.465  | 15-20%                  |                 5 |              0.293   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4954 | >20%                    |                10 |              0.14954 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5058 | >20%                    |                10 |              0.15058 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5702 | >20%                    |                10 |              0.15702 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5865 | <5%                     |                 5 |              0.3173  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.594  | <5%                     |                10 |              0.1594  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6504 | 10-15%                  |                10 |              0.16504 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.207  | <5%                     |                10 |              0.2207  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2839 | 5-10%                   |                10 |              0.22839 |