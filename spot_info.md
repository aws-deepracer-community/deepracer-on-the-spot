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

Data correct as of 2026-04-27 03:32:52.351155, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1614 | >20%                    |                 2 |              0.0807  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1656 | 15-20%                  |                 2 |              0.0828  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1759 | >20%                    |                 2 |              0.08795 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.227  | >20%                    |                 2 |              0.1135  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2359 | 15-20%                  |                 5 |              0.04718 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2427 | >20%                    |                 2 |              0.12135 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2495 | 5-10%                   |                10 |              0.02495 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2569 | >20%                    |                 2 |              0.12845 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2694 | 15-20%                  |                 5 |              0.05388 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2704 | 15-20%                  |                 2 |              0.1352  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2717 | >20%                    |                 5 |              0.05434 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2718 | >20%                    |                 2 |              0.1359  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2733 | 10-15%                  |                 2 |              0.13665 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2881 | 15-20%                  |                 5 |              0.05762 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2948 | 15-20%                  |                 2 |              0.1474  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2978 | >20%                    |                 2 |              0.1489  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3175 | >20%                    |                 2 |              0.15875 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3198 | 10-15%                  |                 2 |              0.1599  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3244 | 10-15%                  |                 2 |              0.1622  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3281 | >20%                    |                 2 |              0.16405 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.334  | >20%                    |                10 |              0.0334  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3341 | >20%                    |                 5 |              0.06682 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3347 | <5%                     |                 2 |              0.16735 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3425 | >20%                    |                 5 |              0.0685  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3436 | >20%                    |                10 |              0.03436 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3544 | >20%                    |                 2 |              0.1772  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3564 | >20%                    |                 5 |              0.07128 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3564 | >20%                    |                 5 |              0.07128 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.368  | >20%                    |                 5 |              0.0736  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3681 | >20%                    |                 5 |              0.07362 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3714 | >20%                    |                 2 |              0.1857  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3758 | 10-15%                  |                 2 |              0.1879  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3861 | 5-10%                   |                10 |              0.03861 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3912 | >20%                    |                 5 |              0.07824 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3919 | >20%                    |                 2 |              0.19595 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3969 | >20%                    |                 5 |              0.07938 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4002 | >20%                    |                 5 |              0.08004 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4021 | >20%                    |                 2 |              0.20105 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4061 | <5%                     |                 2 |              0.20305 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.409  | 5-10%                   |                10 |              0.0409  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.409  | >20%                    |                 5 |              0.0818  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4251 | >20%                    |                 5 |              0.08502 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4291 | >20%                    |                 2 |              0.21455 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4298 | >20%                    |                 5 |              0.08596 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4383 | >20%                    |                 5 |              0.08766 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4394 | >20%                    |                 5 |              0.08788 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4398 | >20%                    |                 2 |              0.2199  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4418 | <5%                     |                 2 |              0.2209  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4427 | >20%                    |                 5 |              0.08854 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4528 | >20%                    |                 2 |              0.2264  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4529 | 5-10%                   |                 2 |              0.22645 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4538 | >20%                    |                10 |              0.04538 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4582 | >20%                    |                 5 |              0.09164 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4606 | 15-20%                  |                 2 |              0.2303  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4705 | >20%                    |                 2 |              0.23525 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.471  | >20%                    |                 5 |              0.0942  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4727 | 15-20%                  |                 2 |              0.23635 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4737 | >20%                    |                 2 |              0.23685 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4831 | >20%                    |                 5 |              0.09662 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4832 | >20%                    |                 5 |              0.09664 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4864 | >20%                    |                 2 |              0.2432  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4986 | >20%                    |                 2 |              0.2493  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5016 | 10-15%                  |                 2 |              0.2508  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5027 | >20%                    |                10 |              0.05027 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5094 | >20%                    |                 5 |              0.10188 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5097 | >20%                    |                 2 |              0.25485 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.521  | 15-20%                  |                 5 |              0.1042  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.531  | <5%                     |                 5 |              0.1062  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5367 | 5-10%                   |                 5 |              0.10734 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5542 | 5-10%                   |                 5 |              0.11084 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5621 | 10-15%                  |                 5 |              0.11242 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5684 | >20%                    |                 5 |              0.11368 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5694 | >20%                    |                 2 |              0.2847  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5816 | 5-10%                   |                 2 |              0.2908  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.586  | >20%                    |                10 |              0.0586  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.593  | >20%                    |                 5 |              0.1186  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5996 | 15-20%                  |                 2 |              0.2998  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6205 | >20%                    |                 5 |              0.1241  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6242 | >20%                    |                10 |              0.06242 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6269 | >20%                    |                10 |              0.06269 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6288 | >20%                    |                 2 |              0.3144  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6288 | >20%                    |                 2 |              0.3144  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6394 | >20%                    |                10 |              0.06394 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6398 | >20%                    |                10 |              0.06398 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6446 | >20%                    |                 5 |              0.12892 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.649  | 10-15%                  |                 2 |              0.3245  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.6497 | >20%                    |                10 |              0.06497 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6508 | >20%                    |                 2 |              0.3254  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6605 | >20%                    |                 5 |              0.1321  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6814 | 5-10%                   |                10 |              0.06814 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6967 | >20%                    |                 5 |              0.13934 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6975 | >20%                    |                 5 |              0.1395  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7062 | >20%                    |                10 |              0.07062 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7094 | >20%                    |                10 |              0.07094 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7157 | >20%                    |                 2 |              0.35785 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7184 | >20%                    |                 5 |              0.14368 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.732  | >20%                    |                 5 |              0.1464  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7342 | >20%                    |                 2 |              0.3671  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7351 | >20%                    |                10 |              0.07351 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7473 | 15-20%                  |                10 |              0.07473 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7497 | 15-20%                  |                10 |              0.07497 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7549 | >20%                    |                 5 |              0.15098 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7781 | >20%                    |                10 |              0.07781 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7899 | >20%                    |                 5 |              0.15798 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7911 | >20%                    |                 5 |              0.15822 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7976 | >20%                    |                10 |              0.07976 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7997 | 5-10%                   |                10 |              0.07997 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8002 | >20%                    |                 2 |              0.4001  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8016 | >20%                    |                10 |              0.08016 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8034 | 15-20%                  |                10 |              0.08034 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8051 | >20%                    |                10 |              0.08051 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8116 | >20%                    |                 5 |              0.16232 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8241 | >20%                    |                10 |              0.08241 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8947 | 10-15%                  |                10 |              0.08947 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8957 | >20%                    |                10 |              0.08957 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9084 | >20%                    |                10 |              0.09084 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9121 | >20%                    |                 5 |              0.18242 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9131 | >20%                    |                 5 |              0.18262 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9166 | >20%                    |                10 |              0.09166 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9281 | >20%                    |                 5 |              0.18562 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9379 | >20%                    |                10 |              0.09379 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.954  | 15-20%                  |                10 |              0.0954  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9687 |                         |                 2 |              0.48435 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9825 | >20%                    |                10 |              0.09825 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0051 | 5-10%                   |                10 |              0.10051 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0266 | >20%                    |                 5 |              0.20532 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0386 | 15-20%                  |                10 |              0.10386 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0467 | >20%                    |                10 |              0.10467 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0558 | 15-20%                  |                10 |              0.10558 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0899 | 10-15%                  |                10 |              0.10899 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0923 | >20%                    |                10 |              0.10923 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0937 | >20%                    |                10 |              0.10937 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1099 | >20%                    |                 2 |              0.55495 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1478 | >20%                    |                 5 |              0.22956 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1598 | >20%                    |                10 |              0.11598 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1842 |                         |                 5 |              0.23684 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2137 | 10-15%                  |                 2 |              0.60685 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2187 | >20%                    |                10 |              0.12187 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2861 | 5-10%                   |                 2 |              0.64305 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3108 | 15-20%                  |                10 |              0.13108 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3344 | 5-10%                   |                 2 |              0.6672  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3365 | >20%                    |                10 |              0.13365 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.399  | >20%                    |                 5 |              0.2798  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4291 | >20%                    |                 5 |              0.28582 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4627 | >20%                    |                10 |              0.14627 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4865 | 15-20%                  |                10 |              0.14865 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5284 | 15-20%                  |                 5 |              0.30568 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.54   | >20%                    |                10 |              0.154   |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6618 |                         |                10 |              0.16618 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.529  | >20%                    |                10 |              0.2529  |