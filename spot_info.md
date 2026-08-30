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

Data correct as of 2026-08-30 04:38:06.130918, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1494 | >20%                    |                 2 |              0.0747  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1818 | 15-20%                  |                 2 |              0.0909  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2046 | 15-20%                  |                 2 |              0.1023  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2048 | >20%                    |                 2 |              0.1024  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2143 | >20%                    |                 2 |              0.10715 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2149 | >20%                    |                 2 |              0.10745 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.226  | 10-15%                  |                 2 |              0.113   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.238  | >20%                    |                 2 |              0.119   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2391 | >20%                    |                 2 |              0.11955 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2477 | 5-10%                   |                10 |              0.02477 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2491 | >20%                    |                 2 |              0.12455 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2558 | >20%                    |                 5 |              0.05116 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2634 | 15-20%                  |                 2 |              0.1317  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2673 | 10-15%                  |                 2 |              0.13365 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2692 | >20%                    |                 2 |              0.1346  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2968 | 15-20%                  |                 5 |              0.05936 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3105 | >20%                    |                 2 |              0.15525 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3184 | >20%                    |                 2 |              0.1592  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3195 | 5-10%                   |                10 |              0.03195 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.332  | <5%                     |                 2 |              0.166   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3356 | >20%                    |                 5 |              0.06712 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3367 | >20%                    |                 2 |              0.16835 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3381 | 15-20%                  |                 5 |              0.06762 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3436 | >20%                    |                 5 |              0.06872 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3441 | >20%                    |                 5 |              0.06882 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3471 | 10-15%                  |                 2 |              0.17355 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3544 | >20%                    |                 2 |              0.1772  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3572 | >20%                    |                 5 |              0.07144 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3626 | >20%                    |                 5 |              0.07252 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3775 | >20%                    |                 5 |              0.0755  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3802 | >20%                    |                 2 |              0.1901  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3805 | <5%                     |                 2 |              0.19025 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3805 | >20%                    |                 2 |              0.19025 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3874 | >20%                    |                 5 |              0.07748 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3946 | >20%                    |                10 |              0.03946 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3978 | 15-20%                  |                 2 |              0.1989  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3982 | >20%                    |                10 |              0.03982 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3993 | >20%                    |                 2 |              0.19965 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4059 | >20%                    |                10 |              0.04059 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4139 | 10-15%                  |                 2 |              0.20695 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4263 | >20%                    |                 2 |              0.21315 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4332 | 15-20%                  |                 5 |              0.08664 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4341 | >20%                    |                10 |              0.04341 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4355 | >20%                    |                 2 |              0.21775 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4373 | >20%                    |                 5 |              0.08746 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4409 | >20%                    |                 5 |              0.08818 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4416 | >20%                    |                 5 |              0.08832 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4421 |                         |                 2 |              0.22105 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.446  | >20%                    |                 2 |              0.223   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4542 | >20%                    |                10 |              0.04542 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4661 | >20%                    |                 5 |              0.09322 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4791 | 15-20%                  |                 2 |              0.23955 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4824 | >20%                    |                 5 |              0.09648 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4864 | <5%                     |                 5 |              0.09728 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4875 | >20%                    |                 5 |              0.0975  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4909 | >20%                    |                10 |              0.04909 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5074 | >20%                    |                 5 |              0.10148 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5089 | >20%                    |                 5 |              0.10178 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5105 | <5%                     |                 2 |              0.25525 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5182 | 15-20%                  |                10 |              0.05182 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.5185 |                         |                 5 |              0.1037  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5234 | 5-10%                   |                 2 |              0.2617  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5269 | >20%                    |                 5 |              0.10538 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5456 | >20%                    |                 2 |              0.2728  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5457 | >20%                    |                10 |              0.05457 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5473 | >20%                    |                 5 |              0.10946 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5495 | >20%                    |                10 |              0.05495 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5528 | >20%                    |                 2 |              0.2764  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5592 | >20%                    |                 5 |              0.11184 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5601 | >20%                    |                10 |              0.05601 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5607 | 10-15%                  |                10 |              0.05607 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5772 | >20%                    |                 5 |              0.11544 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5776 | >20%                    |                 2 |              0.2888  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5835 | >20%                    |                 5 |              0.1167  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6111 | 10-15%                  |                 5 |              0.12222 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6203 | >20%                    |                 5 |              0.12406 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6251 | >20%                    |                 5 |              0.12502 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6275 | >20%                    |                 5 |              0.1255  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.636  | 5-10%                   |                 5 |              0.1272  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6396 | >20%                    |                 2 |              0.3198  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6597 | >20%                    |                 5 |              0.13194 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.6683 | >20%                    |                 2 |              0.33415 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6715 | 5-10%                   |                10 |              0.06715 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6733 | 5-10%                   |                10 |              0.06733 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6736 | 15-20%                  |                10 |              0.06736 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6805 | >20%                    |                10 |              0.06805 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7027 | >20%                    |                 2 |              0.35135 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7046 | >20%                    |                 2 |              0.3523  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7168 | >20%                    |                10 |              0.07168 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.724  | >20%                    |                10 |              0.0724  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7376 | >20%                    |                 5 |              0.14752 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7471 | 15-20%                  |                 2 |              0.37355 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.7583 | >20%                    |                 2 |              0.37915 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7595 | 15-20%                  |                10 |              0.07595 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7628 | >20%                    |                 5 |              0.15256 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7823 | 5-10%                   |                10 |              0.07823 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7896 | >20%                    |                 2 |              0.3948  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8022 | >20%                    |                10 |              0.08022 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8038 | >20%                    |                10 |              0.08038 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8134 | >20%                    |                10 |              0.08134 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8213 | >20%                    |                10 |              0.08213 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8215 | <5%                     |                10 |              0.08215 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8284 | 15-20%                  |                10 |              0.08284 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8286 | >20%                    |                 5 |              0.16572 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8415 | >20%                    |                 5 |              0.1683  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8436 | 10-15%                  |                 2 |              0.4218  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8464 | >20%                    |                 5 |              0.16928 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8475 | >20%                    |                10 |              0.08475 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8677 | >20%                    |                10 |              0.08677 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8817 | >20%                    |                10 |              0.08817 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8965 | >20%                    |                 2 |              0.44825 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9018 | 5-10%                   |                 2 |              0.4509  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9205 | >20%                    |                10 |              0.09205 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9379 |                         |                 2 |              0.46895 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9403 | 10-15%                  |                 2 |              0.47015 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9474 | >20%                    |                10 |              0.09474 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9501 | >20%                    |                10 |              0.09501 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9594 | 5-10%                   |                 5 |              0.19188 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9797 |                         |                10 |              0.09797 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9838 | 15-20%                  |                10 |              0.09838 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9966 | >20%                    |                 5 |              0.19932 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.005  | >20%                    |                10 |              0.1005  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0058 | >20%                    |                10 |              0.10058 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0258 | >20%                    |                 5 |              0.20516 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.058  | 5-10%                   |                10 |              0.1058  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0653 | 10-15%                  |                 2 |              0.53265 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0763 | >20%                    |                 5 |              0.21526 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1033 | >20%                    |                10 |              0.11033 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1061 | >20%                    |                10 |              0.11061 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1164 | >20%                    |                 5 |              0.22328 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1326 | >20%                    |                 5 |              0.22652 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1335 | >20%                    |                 5 |              0.2267  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1339 | 15-20%                  |                10 |              0.11339 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1736 |                         |                 2 |              0.5868  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.1744 | >20%                    |                 5 |              0.23488 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1825 | >20%                    |                 2 |              0.59125 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2181 | 15-20%                  |                10 |              0.12181 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.223  | >20%                    |                 5 |              0.2446  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2332 | >20%                    |                10 |              0.12332 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2878 | >20%                    |                 5 |              0.25756 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2969 |                         |                 5 |              0.25938 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.3194 |                         |                 5 |              0.26388 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3873 | >20%                    |                10 |              0.13873 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4677 | 10-15%                  |                10 |              0.14677 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.4749 |                         |                10 |              0.14749 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.4991 |                         |                10 |              0.14991 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5401 | >20%                    |                10 |              0.15401 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.569  | 15-20%                  |                 5 |              0.3138  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.579  | >20%                    |                10 |              0.1579  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6046 | 15-20%                  |                10 |              0.16046 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.87   | >20%                    |                10 |              0.187   |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.8979 | 5-10%                   |                 2 |              0.94895 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.9054 | 5-10%                   |                 2 |              0.9527  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      2.1427 | >20%                    |                10 |              0.21427 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.3651 | >20%                    |                 5 |              0.47302 |