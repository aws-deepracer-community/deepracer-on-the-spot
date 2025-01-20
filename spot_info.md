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

Data correct as of 2025-01-20 01:37:05.165319, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.1938 | 10-15%                  |                 2 |              0.0969  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.208  | >20%                    |                 2 |              0.104   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2209 | 5-10%                   |                 2 |              0.11045 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2263 | >20%                    |                 5 |              0.04526 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | 15-20%                  |                 2 |              0.11935 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.239  | <5%                     |                 2 |              0.1195  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2397 | 5-10%                   |                 2 |              0.11985 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.249  | 5-10%                   |                 2 |              0.1245  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2603 | 5-10%                   |                 2 |              0.13015 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2793 | <5%                     |                 2 |              0.13965 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2814 | <5%                     |                 5 |              0.05628 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2818 | 10-15%                  |                 2 |              0.1409  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2892 | <5%                     |                 5 |              0.05784 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.2969 | >20%                    |                 2 |              0.14845 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3004 | <5%                     |                 2 |              0.1502  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3244 | 10-15%                  |                 2 |              0.1622  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3245 | 5-10%                   |                 2 |              0.16225 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3339 | >20%                    |                 2 |              0.16695 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3461 | 5-10%                   |                 5 |              0.06922 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3475 | <5%                     |                 2 |              0.17375 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3581 | 5-10%                   |                 2 |              0.17905 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3634 | <5%                     |                 2 |              0.1817  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3635 | >20%                    |                 2 |              0.18175 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3671 | <5%                     |                 2 |              0.18355 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3741 | 5-10%                   |                 5 |              0.07482 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3777 | <5%                     |                 5 |              0.07554 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3873 | 10-15%                  |                 5 |              0.07746 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3874 | <5%                     |                 2 |              0.1937  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3897 | >20%                    |                 2 |              0.19485 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3921 | 5-10%                   |                 2 |              0.19605 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3941 | >20%                    |                 2 |              0.19705 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.395  | <5%                     |                 2 |              0.1975  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3963 | <5%                     |                 2 |              0.19815 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4028 | 5-10%                   |                 2 |              0.2014  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4126 | >20%                    |                 5 |              0.08252 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4147 | 5-10%                   |                 2 |              0.20735 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4172 | 10-15%                  |                 2 |              0.2086  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4177 | >20%                    |                10 |              0.04177 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4228 | >20%                    |                 2 |              0.2114  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4239 | <5%                     |                 2 |              0.21195 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.425  | 5-10%                   |                 5 |              0.085   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4316 | 10-15%                  |                10 |              0.04316 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4469 | 15-20%                  |                 5 |              0.08938 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4478 | <5%                     |                 5 |              0.08956 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4479 | 10-15%                  |                 5 |              0.08958 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4488 | 10-15%                  |                 5 |              0.08976 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4514 | <5%                     |                 5 |              0.09028 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4562 | >20%                    |                 5 |              0.09124 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4564 | <5%                     |                 5 |              0.09128 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4655 | <5%                     |                 2 |              0.23275 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4695 | >20%                    |                 5 |              0.0939  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4713 | 10-15%                  |                 5 |              0.09426 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4793 | 5-10%                   |                 5 |              0.09586 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4832 | 10-15%                  |                10 |              0.04832 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4873 | 15-20%                  |                 2 |              0.24365 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4922 | <5%                     |                 5 |              0.09844 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4943 | <5%                     |                 2 |              0.24715 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5019 | <5%                     |                 2 |              0.25095 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5023 | <5%                     |                 5 |              0.10046 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5078 | <5%                     |                 2 |              0.2539  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5082 | <5%                     |                 5 |              0.10164 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5138 | >20%                    |                 2 |              0.2569  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5148 | <5%                     |                 5 |              0.10296 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5159 | <5%                     |                 5 |              0.10318 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5278 | 5-10%                   |                 2 |              0.2639  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5359 | >20%                    |                10 |              0.05359 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5364 | 5-10%                   |                 5 |              0.10728 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5397 | >20%                    |                 5 |              0.10794 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5419 | >20%                    |                 5 |              0.10838 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5433 | 5-10%                   |                 5 |              0.10866 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5513 | <5%                     |                 5 |              0.11026 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5535 | 5-10%                   |                 5 |              0.1107  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5651 | 15-20%                  |                10 |              0.05651 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5686 | 5-10%                   |                 5 |              0.11372 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5704 | >20%                    |                 5 |              0.11408 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5704 | <5%                     |                 5 |              0.11408 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5787 | 5-10%                   |                 5 |              0.11574 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5801 | 15-20%                  |                 2 |              0.29005 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5825 | 15-20%                  |                 2 |              0.29125 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5955 | <5%                     |                 5 |              0.1191  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.617  | >20%                    |                 2 |              0.3085  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6337 | 5-10%                   |                10 |              0.06337 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6403 | 5-10%                   |                10 |              0.06403 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6697 | >20%                    |                10 |              0.06697 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6712 | <5%                     |                 5 |              0.13424 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6748 | >20%                    |                 5 |              0.13496 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6789 | <5%                     |                10 |              0.06789 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6827 | >20%                    |                10 |              0.06827 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6855 | 10-15%                  |                 5 |              0.1371  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.687  | >20%                    |                 5 |              0.1374  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6896 | >20%                    |                10 |              0.06896 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6912 | >20%                    |                10 |              0.06912 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7181 | <5%                     |                 2 |              0.35905 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7367 | 10-15%                  |                10 |              0.07367 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7371 | 5-10%                   |                 5 |              0.14742 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7445 | 15-20%                  |                10 |              0.07445 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7491 | 5-10%                   |                 5 |              0.14982 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7495 | 15-20%                  |                 2 |              0.37475 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7518 | 5-10%                   |                 2 |              0.3759  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7557 | <5%                     |                10 |              0.07557 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7562 | >20%                    |                 5 |              0.15124 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7619 | 10-15%                  |                10 |              0.07619 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7684 | 10-15%                  |                10 |              0.07684 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.774  | >20%                    |                 5 |              0.1548  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7815 | 5-10%                   |                10 |              0.07815 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7927 | 5-10%                   |                10 |              0.07927 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7971 | >20%                    |                 5 |              0.15942 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7972 | >20%                    |                10 |              0.07972 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8027 | 15-20%                  |                10 |              0.08027 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8199 | 10-15%                  |                10 |              0.08199 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8207 | 15-20%                  |                10 |              0.08207 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8243 | 5-10%                   |                10 |              0.08243 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.863  | 5-10%                   |                10 |              0.0863  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8698 | <5%                     |                10 |              0.08698 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8817 | >20%                    |                10 |              0.08817 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8822 | <5%                     |                10 |              0.08822 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8985 | 5-10%                   |                10 |              0.08985 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.918  | <5%                     |                10 |              0.0918  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9325 | 5-10%                   |                 5 |              0.1865  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9368 | <5%                     |                10 |              0.09368 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9554 | 10-15%                  |                10 |              0.09554 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9593 | <5%                     |                10 |              0.09593 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9614 | <5%                     |                10 |              0.09614 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.992  | <5%                     |                10 |              0.0992  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.005  | >20%                    |                10 |              0.1005  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0367 | 10-15%                  |                 5 |              0.20734 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0387 | 5-10%                   |                10 |              0.10387 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0613 | <5%                     |                10 |              0.10613 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0686 | 5-10%                   |                 2 |              0.5343  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0849 | 15-20%                  |                10 |              0.10849 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1003 | 5-10%                   |                 5 |              0.22006 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1342 | 15-20%                  |                 2 |              0.5671  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1676 | 10-15%                  |                10 |              0.11676 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.218  | 10-15%                  |                10 |              0.1218  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2489 | >20%                    |                10 |              0.12489 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4221 | 5-10%                   |                10 |              0.14221 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4725 | 10-15%                  |                10 |              0.14725 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4908 | 5-10%                   |                10 |              0.14908 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5021 | 15-20%                  |                 5 |              0.30042 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0701 | 10-15%                  |                10 |              0.20701 |