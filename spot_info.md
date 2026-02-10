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

Data correct as of 2026-02-10 02:48:26.415043, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1447 | >20%                    |                 2 |              0.07235 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1689 | >20%                    |                 2 |              0.08445 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1777 | >20%                    |                 2 |              0.08885 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.181  | 5-10%                   |                 2 |              0.0905  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1857 | >20%                    |                 5 |              0.03714 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2018 | >20%                    |                 5 |              0.04036 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2048 | >20%                    |                 2 |              0.1024  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2269 | >20%                    |                 5 |              0.04538 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2528 | >20%                    |                 2 |              0.1264  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2545 | 15-20%                  |                 2 |              0.12725 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2557 | 10-15%                  |                 2 |              0.12785 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2617 | 10-15%                  |                 2 |              0.13085 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2645 | >20%                    |                 2 |              0.13225 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2695 | <5%                     |                 5 |              0.0539  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2715 | 5-10%                   |                10 |              0.02715 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2771 | >20%                    |                 2 |              0.13855 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2775 | >20%                    |                 2 |              0.13875 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2799 | >20%                    |                 2 |              0.13995 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.298  | >20%                    |                 2 |              0.149   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3031 | >20%                    |                 5 |              0.06062 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3146 | >20%                    |                 2 |              0.1573  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.315  | >20%                    |                 2 |              0.1575  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3203 | >20%                    |                 2 |              0.16015 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3297 | >20%                    |                 5 |              0.06594 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.342  | >20%                    |                 2 |              0.171   |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.3441 | <5%                     |                 5 |              0.06882 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3501 | 15-20%                  |                 2 |              0.17505 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3525 | <5%                     |                 2 |              0.17625 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3561 | 15-20%                  |                 2 |              0.17805 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3596 | 5-10%                   |                 5 |              0.07192 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3635 | >20%                    |                 5 |              0.0727  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3645 | 5-10%                   |                 2 |              0.18225 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3699 | >20%                    |                 2 |              0.18495 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3703 | >20%                    |                 5 |              0.07406 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3728 | 5-10%                   |                 2 |              0.1864  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3782 | 10-15%                  |                 2 |              0.1891  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3799 | >20%                    |                 5 |              0.07598 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.386  | <5%                     |                 5 |              0.0772  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3877 | <5%                     |                 5 |              0.07754 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3888 | 5-10%                   |                10 |              0.03888 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3892 | >20%                    |                 5 |              0.07784 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3892 | >20%                    |                 5 |              0.07784 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3914 | <5%                     |                 5 |              0.07828 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3916 | <5%                     |                 2 |              0.1958  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3937 | >20%                    |                 2 |              0.19685 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3959 | >20%                    |                 5 |              0.07918 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3993 | >20%                    |                 2 |              0.19965 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4016 | >20%                    |                 5 |              0.08032 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.402  | 10-15%                  |                 5 |              0.0804  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4042 | >20%                    |                10 |              0.04042 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4078 | >20%                    |                10 |              0.04078 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4124 | 15-20%                  |                 2 |              0.2062  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4141 | >20%                    |                 5 |              0.08282 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4164 | >20%                    |                 2 |              0.2082  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4181 | 5-10%                   |                 2 |              0.20905 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4217 | >20%                    |                 2 |              0.21085 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4218 | >20%                    |                10 |              0.04218 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4244 | >20%                    |                 5 |              0.08488 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4278 | 15-20%                  |                 2 |              0.2139  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4309 | <5%                     |                 2 |              0.21545 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4315 | <5%                     |                 2 |              0.21575 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.432  | 5-10%                   |                 2 |              0.216   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4369 | 5-10%                   |                 2 |              0.21845 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4385 | >20%                    |                 2 |              0.21925 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4433 | 15-20%                  |                 5 |              0.08866 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4434 | >20%                    |                 2 |              0.2217  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4559 | 15-20%                  |                 2 |              0.22795 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4617 | 5-10%                   |                 2 |              0.23085 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.462  | >20%                    |                 2 |              0.231   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4624 | >20%                    |                 2 |              0.2312  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4637 | >20%                    |                10 |              0.04637 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4694 | 5-10%                   |                 5 |              0.09388 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4816 | 15-20%                  |                 5 |              0.09632 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4847 | >20%                    |                 5 |              0.09694 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4922 | <5%                     |                 2 |              0.2461  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4962 | >20%                    |                 2 |              0.2481  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4965 | >20%                    |                 2 |              0.24825 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.499  | 5-10%                   |                 5 |              0.0998  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5006 | >20%                    |                 2 |              0.2503  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5031 | >20%                    |                 2 |              0.25155 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5123 | <5%                     |                 5 |              0.10246 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5224 | 15-20%                  |                10 |              0.05224 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5268 | >20%                    |                 5 |              0.10536 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.527  | >20%                    |                 5 |              0.1054  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5277 | <5%                     |                 5 |              0.10554 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5346 | 15-20%                  |                 5 |              0.10692 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5388 | >20%                    |                 5 |              0.10776 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5392 | >20%                    |                10 |              0.05392 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5393 | >20%                    |                10 |              0.05393 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5397 | >20%                    |                10 |              0.05397 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5535 | >20%                    |                 5 |              0.1107  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5659 | >20%                    |                 5 |              0.11318 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5674 | 15-20%                  |                10 |              0.05674 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5709 | 15-20%                  |                 5 |              0.11418 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5737 | >20%                    |                 5 |              0.11474 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5789 | 15-20%                  |                10 |              0.05789 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5822 | <5%                     |                10 |              0.05822 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5865 | >20%                    |                 5 |              0.1173  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.591  | >20%                    |                 2 |              0.2955  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.599  | 5-10%                   |                 5 |              0.1198  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6014 | >20%                    |                 5 |              0.12028 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6024 | 10-15%                  |                 5 |              0.12048 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6067 | <5%                     |                10 |              0.06067 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6073 | 5-10%                   |                 2 |              0.30365 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6095 | >20%                    |                10 |              0.06095 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6108 | >20%                    |                 5 |              0.12216 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6149 | 15-20%                  |                 2 |              0.30745 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6241 | 15-20%                  |                10 |              0.06241 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6286 | 10-15%                  |                10 |              0.06286 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6291 | >20%                    |                10 |              0.06291 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6663 | >20%                    |                 5 |              0.13326 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6702 | >20%                    |                 5 |              0.13404 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6762 | 5-10%                   |                 5 |              0.13524 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6765 | 5-10%                   |                 5 |              0.1353  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.677  | >20%                    |                 5 |              0.1354  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.696  | <5%                     |                10 |              0.0696  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7069 | >20%                    |                 5 |              0.14138 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.711  | <5%                     |                10 |              0.0711  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7119 | >20%                    |                10 |              0.07119 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7149 | 5-10%                   |                 2 |              0.35745 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7374 | >20%                    |                10 |              0.07374 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7404 | >20%                    |                10 |              0.07404 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7446 | >20%                    |                 2 |              0.3723  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7483 | 10-15%                  |                10 |              0.07483 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7501 | >20%                    |                 2 |              0.37505 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7507 | <5%                     |                10 |              0.07507 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7538 | >20%                    |                10 |              0.07538 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7592 | >20%                    |                10 |              0.07592 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7626 | 15-20%                  |                10 |              0.07626 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7661 | >20%                    |                 5 |              0.15322 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7913 | 5-10%                   |                10 |              0.07913 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7932 | >20%                    |                 5 |              0.15864 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8049 | <5%                     |                10 |              0.08049 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8051 | >20%                    |                 5 |              0.16102 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8052 | >20%                    |                 5 |              0.16104 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8056 | <5%                     |                 5 |              0.16112 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8093 | <5%                     |                10 |              0.08093 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8203 | 5-10%                   |                10 |              0.08203 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8211 | >20%                    |                10 |              0.08211 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8315 | <5%                     |                10 |              0.08315 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.835  | >20%                    |                10 |              0.0835  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8352 | >20%                    |                 5 |              0.16704 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8485 | >20%                    |                 5 |              0.1697  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8575 | >20%                    |                10 |              0.08575 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8588 | >20%                    |                10 |              0.08588 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8699 | >20%                    |                 2 |              0.43495 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8753 | >20%                    |                10 |              0.08753 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8846 | 10-15%                  |                 2 |              0.4423  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8942 | >20%                    |                 2 |              0.4471  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9082 | >20%                    |                 2 |              0.4541  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9261 | >20%                    |                 5 |              0.18522 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9335 | <5%                     |                10 |              0.09335 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9614 | <5%                     |                10 |              0.09614 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9643 | >20%                    |                10 |              0.09643 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9645 | >20%                    |                 2 |              0.48225 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9805 | 15-20%                  |                10 |              0.09805 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9937 | >20%                    |                10 |              0.09937 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9997 |                         |                 2 |              0.49985 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0114 | >20%                    |                10 |              0.10114 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0194 | 10-15%                  |                10 |              0.10194 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0242 | 5-10%                   |                 5 |              0.20484 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0406 | >20%                    |                10 |              0.10406 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0434 | 10-15%                  |                 5 |              0.20868 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0504 | 15-20%                  |                10 |              0.10504 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0924 | >20%                    |                 2 |              0.5462  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0986 | 5-10%                   |                10 |              0.10986 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1024 | >20%                    |                 5 |              0.22048 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1163 | >20%                    |                10 |              0.11163 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1224 | >20%                    |                10 |              0.11224 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1338 | >20%                    |                10 |              0.11338 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.148  | >20%                    |                10 |              0.1148  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1744 | >20%                    |                10 |              0.11744 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1964 | <5%                     |                10 |              0.11964 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2891 | >20%                    |                 5 |              0.25782 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.297  | >20%                    |                10 |              0.1297  |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3439 |                         |                 5 |              0.26878 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3497 | 10-15%                  |                 5 |              0.26994 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4165 | >20%                    |                10 |              0.14165 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4297 | >20%                    |                 2 |              0.71485 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7577 | 15-20%                  |                10 |              0.17577 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0103 |                         |                10 |              0.20103 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0536 | 10-15%                  |                10 |              0.20536 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4274 | <5%                     |                 5 |              0.48548 |