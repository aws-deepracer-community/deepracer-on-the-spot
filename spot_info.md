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

Data correct as of 2026-02-01 02:49:25.136234, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1357 | >20%                    |                 2 |              0.06785 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1715 | 5-10%                   |                 2 |              0.08575 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1838 | >20%                    |                 2 |              0.0919  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.19   | >20%                    |                 5 |              0.038   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2062 | >20%                    |                 2 |              0.1031  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2064 | >20%                    |                 2 |              0.1032  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2159 | >20%                    |                 5 |              0.04318 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2346 | 10-15%                  |                 2 |              0.1173  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2363 | >20%                    |                 2 |              0.11815 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2388 | >20%                    |                 2 |              0.1194  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2522 | >20%                    |                 2 |              0.1261  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2551 | 5-10%                   |                10 |              0.02551 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2689 | 10-15%                  |                 2 |              0.13445 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2708 | <5%                     |                 5 |              0.05416 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2728 | 15-20%                  |                 2 |              0.1364  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.273  | >20%                    |                 2 |              0.1365  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.281  | >20%                    |                 5 |              0.0562  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2817 | >20%                    |                 2 |              0.14085 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2883 | 10-15%                  |                 2 |              0.14415 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2985 | >20%                    |                 2 |              0.14925 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3019 | >20%                    |                 5 |              0.06038 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3048 | >20%                    |                 2 |              0.1524  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3127 | >20%                    |                 2 |              0.15635 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.326  | >20%                    |                 5 |              0.0652  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3266 | 15-20%                  |                 2 |              0.1633  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3465 | <5%                     |                 2 |              0.17325 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3474 | 15-20%                  |                 2 |              0.1737  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3524 | 5-10%                   |                10 |              0.03524 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3576 | >20%                    |                 5 |              0.07152 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3584 | >20%                    |                 2 |              0.1792  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3704 | 15-20%                  |                 2 |              0.1852  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3707 | 5-10%                   |                 5 |              0.07414 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3739 | >20%                    |                 5 |              0.07478 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3773 | <5%                     |                10 |              0.03773 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3782 | <5%                     |                 5 |              0.07564 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3787 | >20%                    |                 2 |              0.18935 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.38   | >20%                    |                 2 |              0.19    |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3816 | 5-10%                   |                 2 |              0.1908  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3835 | 15-20%                  |                 2 |              0.19175 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3896 | >20%                    |                 2 |              0.1948  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3902 | >20%                    |                 5 |              0.07804 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3932 | 5-10%                   |                 2 |              0.1966  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4014 | >20%                    |                 5 |              0.08028 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4059 | 10-15%                  |                 5 |              0.08118 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4081 | >20%                    |                 2 |              0.20405 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4084 | >20%                    |                10 |              0.04084 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4084 | 5-10%                   |                 2 |              0.2042  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4112 | >20%                    |                 2 |              0.2056  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4121 | >20%                    |                 5 |              0.08242 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4128 | >20%                    |                 2 |              0.2064  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4129 | 15-20%                  |                 2 |              0.20645 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4163 | <5%                     |                 2 |              0.20815 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.423  | >20%                    |                 5 |              0.0846  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4242 | >20%                    |                 5 |              0.08484 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4248 | 5-10%                   |                 2 |              0.2124  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4281 | >20%                    |                 5 |              0.08562 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4298 | >20%                    |                 5 |              0.08596 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4302 | >20%                    |                 5 |              0.08604 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4308 | >20%                    |                 2 |              0.2154  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.431  | >20%                    |                10 |              0.0431  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.434  | >20%                    |                10 |              0.0434  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4379 | 15-20%                  |                 5 |              0.08758 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4389 | 5-10%                   |                 5 |              0.08778 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4415 | 5-10%                   |                 2 |              0.22075 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4419 | 15-20%                  |                10 |              0.04419 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4459 | <5%                     |                 2 |              0.22295 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4505 | >20%                    |                10 |              0.04505 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4521 | <5%                     |                10 |              0.04521 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4621 | 5-10%                   |                 5 |              0.09242 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4633 | >20%                    |                 2 |              0.23165 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.467  | >20%                    |                 2 |              0.2335  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4688 | 5-10%                   |                 2 |              0.2344  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4752 | 15-20%                  |                 5 |              0.09504 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4754 | >20%                    |                 2 |              0.2377  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4772 | 15-20%                  |                10 |              0.04772 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.478  | <5%                     |                 2 |              0.239   |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4815 | >20%                    |                10 |              0.04815 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4866 | 15-20%                  |                 5 |              0.09732 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4872 | >20%                    |                 2 |              0.2436  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4907 | <5%                     |                 5 |              0.09814 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4978 | >20%                    |                 2 |              0.2489  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4979 | >20%                    |                 5 |              0.09958 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5095 | >20%                    |                10 |              0.05095 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5178 | >20%                    |                 5 |              0.10356 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5241 | >20%                    |                 5 |              0.10482 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5255 | >20%                    |                 2 |              0.26275 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5273 | >20%                    |                 5 |              0.10546 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5294 | <5%                     |                 5 |              0.10588 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5296 | >20%                    |                10 |              0.05296 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5299 | >20%                    |                 2 |              0.26495 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5329 | >20%                    |                 5 |              0.10658 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5331 | >20%                    |                 5 |              0.10662 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.57   | <5%                     |                 5 |              0.114   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.571  | <5%                     |                 5 |              0.1142  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5751 | >20%                    |                 5 |              0.11502 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5775 | >20%                    |                 5 |              0.1155  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5812 | <5%                     |                 2 |              0.2906  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5819 | >20%                    |                 2 |              0.29095 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5836 | 5-10%                   |                 5 |              0.11672 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5979 | 15-20%                  |                 5 |              0.11958 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.603  | 5-10%                   |                 2 |              0.3015  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6076 | 10-15%                  |                10 |              0.06076 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6143 | >20%                    |                10 |              0.06143 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6166 | 15-20%                  |                10 |              0.06166 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6236 | >20%                    |                 5 |              0.12472 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6277 | 10-15%                  |                 5 |              0.12554 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6306 | <5%                     |                10 |              0.06306 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6311 | <5%                     |                10 |              0.06311 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6337 | >20%                    |                 5 |              0.12674 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6547 | 5-10%                   |                 5 |              0.13094 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6625 | <5%                     |                 5 |              0.1325  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6649 | <5%                     |                 5 |              0.13298 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6665 | >20%                    |                 5 |              0.1333  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6747 | 15-20%                  |                10 |              0.06747 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6785 | 5-10%                   |                 5 |              0.1357  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6897 | >20%                    |                 5 |              0.13794 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7059 | 15-20%                  |                 2 |              0.35295 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7108 | >20%                    |                10 |              0.07108 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7174 | >20%                    |                10 |              0.07174 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7195 | >20%                    |                 5 |              0.1439  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7227 | 5-10%                   |                 2 |              0.36135 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7272 | 10-15%                  |                10 |              0.07272 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7339 | >20%                    |                10 |              0.07339 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7396 | >20%                    |                10 |              0.07396 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7476 | >20%                    |                10 |              0.07476 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7595 | >20%                    |                 2 |              0.37975 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7651 | >20%                    |                10 |              0.07651 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7662 | 5-10%                   |                10 |              0.07662 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7674 | <5%                     |                10 |              0.07674 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7697 | >20%                    |                10 |              0.07697 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7815 | <5%                     |                10 |              0.07815 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7817 | >20%                    |                 5 |              0.15634 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.792  | >20%                    |                 2 |              0.396   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7962 | 5-10%                   |                10 |              0.07962 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.798  | 10-15%                  |                 2 |              0.399   |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7984 | >20%                    |                 5 |              0.15968 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7992 | >20%                    |                 5 |              0.15984 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7997 | >20%                    |                 5 |              0.15994 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8076 | >20%                    |                 5 |              0.16152 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8116 | <5%                     |                10 |              0.08116 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8221 | <5%                     |                10 |              0.08221 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8469 | >20%                    |                 2 |              0.42345 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8518 | >20%                    |                10 |              0.08518 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8532 | 15-20%                  |                10 |              0.08532 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8615 | >20%                    |                 2 |              0.43075 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8629 | >20%                    |                 2 |              0.43145 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.89   | >20%                    |                 5 |              0.178   |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8922 | >20%                    |                 2 |              0.4461  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9057 | >20%                    |                10 |              0.09057 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9062 | >20%                    |                10 |              0.09062 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9069 | >20%                    |                10 |              0.09069 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9112 | <5%                     |                10 |              0.09112 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9192 | 5-10%                   |                 5 |              0.18384 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9391 | >20%                    |                 5 |              0.18782 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9403 | <5%                     |                10 |              0.09403 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9471 | >20%                    |                10 |              0.09471 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9497 | >20%                    |                10 |              0.09497 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9558 | >20%                    |                10 |              0.09558 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9837 | >20%                    |                10 |              0.09837 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0129 | >20%                    |                 5 |              0.20258 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.05   | 15-20%                  |                10 |              0.105   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0653 | 5-10%                   |                10 |              0.10653 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0688 | >20%                    |                10 |              0.10688 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1003 | >20%                    |                10 |              0.11003 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.103  | 15-20%                  |                10 |              0.1103  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.11   | >20%                    |                10 |              0.111   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1419 | >20%                    |                10 |              0.11419 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1689 | >20%                    |                10 |              0.11689 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.212  | >20%                    |                10 |              0.1212  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2252 | >20%                    |                 5 |              0.24504 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2319 | 10-15%                  |                 5 |              0.24638 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2579 | >20%                    |                 2 |              0.62895 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.287  | 10-15%                  |                10 |              0.1287  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3046 | <5%                     |                10 |              0.13046 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4092 | 10-15%                  |                 5 |              0.28184 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4344 | >20%                    |                 2 |              0.7172  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4409 | >20%                    |                10 |              0.14409 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7859 | 15-20%                  |                10 |              0.17859 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9121 | 10-15%                  |                10 |              0.19121 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4484 | <5%                     |                 5 |              0.48968 |