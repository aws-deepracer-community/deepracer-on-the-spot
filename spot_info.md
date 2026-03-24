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

Data correct as of 2026-03-24 02:32:56.978312, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1118 | >20%                    |                 2 |              0.0559  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1203 | >20%                    |                 2 |              0.06015 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1331 | <5%                     |                 2 |              0.06655 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1577 | 10-15%                  |                 5 |              0.03154 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.191  | >20%                    |                 2 |              0.0955  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1937 | <5%                     |                 2 |              0.09685 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.199  | 10-15%                  |                 5 |              0.0398  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1997 | 15-20%                  |                 2 |              0.09985 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2006 | 15-20%                  |                 2 |              0.1003  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2296 | >20%                    |                 2 |              0.1148  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2305 | >20%                    |                 2 |              0.11525 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2403 | 10-15%                  |                10 |              0.02403 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2443 | >20%                    |                 2 |              0.12215 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2467 | >20%                    |                 2 |              0.12335 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.257  | 10-15%                  |                 2 |              0.1285  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2613 | 5-10%                   |                10 |              0.02613 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2616 | >20%                    |                 2 |              0.1308  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2658 | 15-20%                  |                 5 |              0.05316 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2707 | >20%                    |                 2 |              0.13535 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2808 | 15-20%                  |                 2 |              0.1404  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | >20%                    |                10 |              0.02887 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2893 | >20%                    |                 5 |              0.05786 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2939 | 5-10%                   |                 2 |              0.14695 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.294  | >20%                    |                 5 |              0.0588  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.298  | >20%                    |                10 |              0.0298  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.2982 | 10-15%                  |                 2 |              0.1491  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.2989 | 10-15%                  |                 2 |              0.14945 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3001 | >20%                    |                 5 |              0.06002 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3026 | >20%                    |                10 |              0.03026 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3067 | >20%                    |                 2 |              0.15335 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3103 | >20%                    |                 2 |              0.15515 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3218 | >20%                    |                10 |              0.03218 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3261 | <5%                     |                 5 |              0.06522 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3263 | 5-10%                   |                10 |              0.03263 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3303 | <5%                     |                 2 |              0.16515 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3496 | >20%                    |                 5 |              0.06992 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3499 | 15-20%                  |                 5 |              0.06998 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3519 | >20%                    |                 2 |              0.17595 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3525 | 10-15%                  |                 2 |              0.17625 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3553 | >20%                    |                 5 |              0.07106 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3567 | 15-20%                  |                 5 |              0.07134 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3573 | >20%                    |                10 |              0.03573 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3601 | <5%                     |                 2 |              0.18005 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3644 | >20%                    |                 5 |              0.07288 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3685 | >20%                    |                 5 |              0.0737  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3694 | 10-15%                  |                 5 |              0.07388 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3695 | >20%                    |                 2 |              0.18475 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3709 | 15-20%                  |                 2 |              0.18545 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3721 | >20%                    |                 5 |              0.07442 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3761 | >20%                    |                 2 |              0.18805 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3795 | 15-20%                  |                10 |              0.03795 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3799 | <5%                     |                 5 |              0.07598 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3955 | <5%                     |                10 |              0.03955 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.401  | >20%                    |                 5 |              0.0802  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4029 | >20%                    |                 2 |              0.20145 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4039 | 10-15%                  |                 2 |              0.20195 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4072 | 10-15%                  |                 2 |              0.2036  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4076 | <5%                     |                10 |              0.04076 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4102 | 15-20%                  |                 2 |              0.2051  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4144 | <5%                     |                 5 |              0.08288 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4147 | >20%                    |                 5 |              0.08294 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4247 | >20%                    |                 2 |              0.21235 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4291 | <5%                     |                 2 |              0.21455 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4329 | >20%                    |                 2 |              0.21645 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4342 | >20%                    |                 5 |              0.08684 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4376 | >20%                    |                10 |              0.04376 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4384 | 15-20%                  |                 2 |              0.2192  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4398 | >20%                    |                 5 |              0.08796 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4412 | >20%                    |                 2 |              0.2206  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4426 | >20%                    |                 5 |              0.08852 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.4437 | <5%                     |                10 |              0.04437 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4454 | >20%                    |                 2 |              0.2227  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4456 | >20%                    |                 2 |              0.2228  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4527 | >20%                    |                 5 |              0.09054 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4642 | >20%                    |                 5 |              0.09284 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4658 | 15-20%                  |                10 |              0.04658 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4663 | >20%                    |                 5 |              0.09326 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.469  | >20%                    |                 2 |              0.2345  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4706 | >20%                    |                 2 |              0.2353  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4775 | >20%                    |                 2 |              0.23875 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4828 | >20%                    |                 5 |              0.09656 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.4839 | >20%                    |                 2 |              0.24195 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4841 | >20%                    |                 5 |              0.09682 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4842 | >20%                    |                 5 |              0.09684 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4869 | <5%                     |                10 |              0.04869 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4924 | 5-10%                   |                10 |              0.04924 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4958 | >20%                    |                 5 |              0.09916 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5011 | >20%                    |                 2 |              0.25055 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5024 | >20%                    |                 5 |              0.10048 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5041 | 15-20%                  |                 5 |              0.10082 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5125 | >20%                    |                 5 |              0.1025  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5171 | 15-20%                  |                 2 |              0.25855 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5295 | >20%                    |                 5 |              0.1059  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5407 | >20%                    |                10 |              0.05407 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5469 | >20%                    |                10 |              0.05469 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5497 | >20%                    |                 5 |              0.10994 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.55   | 5-10%                   |                 5 |              0.11    |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5514 | >20%                    |                 5 |              0.11028 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5555 | >20%                    |                10 |              0.05555 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5654 | >20%                    |                 2 |              0.2827  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5687 | >20%                    |                10 |              0.05687 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5687 | >20%                    |                 5 |              0.11374 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5733 | >20%                    |                 2 |              0.28665 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5887 | 5-10%                   |                 2 |              0.29435 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5891 | >20%                    |                10 |              0.05891 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5898 | 10-15%                  |                10 |              0.05898 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5929 | 10-15%                  |                 5 |              0.11858 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5932 | >20%                    |                 5 |              0.11864 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5949 | >20%                    |                 5 |              0.11898 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5962 | <5%                     |                10 |              0.05962 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6027 | >20%                    |                10 |              0.06027 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6081 | 15-20%                  |                10 |              0.06081 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6103 | >20%                    |                 5 |              0.12206 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6128 | >20%                    |                 2 |              0.3064  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6306 | >20%                    |                 2 |              0.3153  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6329 | 10-15%                  |                 2 |              0.31645 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6372 | >20%                    |                 5 |              0.12744 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.64   | >20%                    |                10 |              0.064   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6409 | >20%                    |                 5 |              0.12818 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6581 | >20%                    |                10 |              0.06581 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6605 | >20%                    |                10 |              0.06605 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6631 | >20%                    |                 5 |              0.13262 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6648 | >20%                    |                 5 |              0.13296 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6741 | <5%                     |                 2 |              0.33705 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6767 | 5-10%                   |                10 |              0.06767 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6772 | 5-10%                   |                 5 |              0.13544 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7002 | 5-10%                   |                 2 |              0.3501  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7014 | >20%                    |                10 |              0.07014 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7066 | >20%                    |                 2 |              0.3533  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7291 | >20%                    |                 5 |              0.14582 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7369 | >20%                    |                10 |              0.07369 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7381 | >20%                    |                 5 |              0.14762 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7462 | >20%                    |                 5 |              0.14924 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7729 | >20%                    |                10 |              0.07729 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7747 | >20%                    |                10 |              0.07747 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.781  | >20%                    |                 5 |              0.1562  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7857 | >20%                    |                10 |              0.07857 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7906 | >20%                    |                10 |              0.07906 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8076 | >20%                    |                 5 |              0.16152 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8081 | >20%                    |                10 |              0.08081 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8116 | 5-10%                   |                 2 |              0.4058  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8261 | >20%                    |                 2 |              0.41305 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8271 | >20%                    |                 5 |              0.16542 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.828  | >20%                    |                10 |              0.0828  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8424 | 5-10%                   |                10 |              0.08424 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8435 | >20%                    |                10 |              0.08435 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8523 | >20%                    |                 5 |              0.17046 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8527 | >20%                    |                 5 |              0.17054 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8726 | >20%                    |                10 |              0.08726 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8917 | 15-20%                  |                10 |              0.08917 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8992 | >20%                    |                10 |              0.08992 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9002 | >20%                    |                 2 |              0.4501  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9131 | >20%                    |                10 |              0.09131 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9245 | >20%                    |                10 |              0.09245 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9428 | >20%                    |                 2 |              0.4714  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9459 | >20%                    |                10 |              0.09459 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9467 | <5%                     |                 5 |              0.18934 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.947  | >20%                    |                10 |              0.0947  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9522 | 15-20%                  |                10 |              0.09522 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9598 | 10-15%                  |                10 |              0.09598 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9604 | >20%                    |                 2 |              0.4802  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9816 | 5-10%                   |                10 |              0.09816 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9844 | >20%                    |                10 |              0.09844 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9942 | >20%                    |                10 |              0.09942 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0182 | 15-20%                  |                10 |              0.10182 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0187 | >20%                    |                 5 |              0.20374 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0457 | >20%                    |                10 |              0.10457 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.0475 | >20%                    |                 5 |              0.2095  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0858 | >20%                    |                10 |              0.10858 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1328 | 10-15%                  |                 2 |              0.5664  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.184  | >20%                    |                 5 |              0.2368  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1897 | 10-15%                  |                10 |              0.11897 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.2005 | <5%                     |                 2 |              0.60025 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2032 | >20%                    |                 5 |              0.24064 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2724 | >20%                    |                 5 |              0.25448 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2758 | >20%                    |                10 |              0.12758 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2928 | 5-10%                   |                 2 |              0.6464  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.312  | <5%                     |                 5 |              0.2624  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3125 | 15-20%                  |                10 |              0.13125 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3279 | >20%                    |                 2 |              0.66395 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3704 | >20%                    |                10 |              0.13704 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4723 | 15-20%                  |                10 |              0.14723 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4726 | 15-20%                  |                 5 |              0.29452 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.916  | >20%                    |                10 |              0.1916  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.4272 | <5%                     |                10 |              0.24272 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.5305 | >20%                    |                10 |              0.25305 |