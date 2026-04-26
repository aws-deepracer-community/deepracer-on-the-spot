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

Data correct as of 2026-04-26 03:28:44.059911, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1585 | >20%                    |                 2 |              0.07925 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1644 | 15-20%                  |                 2 |              0.0822  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1759 | >20%                    |                 2 |              0.08795 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.226  | >20%                    |                 2 |              0.113   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2387 | 15-20%                  |                 5 |              0.04774 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.24   | 5-10%                   |                10 |              0.024   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2419 | >20%                    |                 2 |              0.12095 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2568 | >20%                    |                 2 |              0.1284  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2615 | 10-15%                  |                 2 |              0.13075 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.267  | 15-20%                  |                 2 |              0.1335  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.268  | >20%                    |                 5 |              0.0536  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2687 | >20%                    |                 2 |              0.13435 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2694 | 15-20%                  |                 5 |              0.05388 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2876 | 15-20%                  |                 2 |              0.1438  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2893 | 15-20%                  |                 5 |              0.05786 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2995 | >20%                    |                 2 |              0.14975 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3181 | >20%                    |                 2 |              0.15905 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3198 | 10-15%                  |                 2 |              0.1599  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.325  | 10-15%                  |                 2 |              0.1625  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3256 | >20%                    |                 5 |              0.06512 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3277 | >20%                    |                10 |              0.03277 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3359 | >20%                    |                10 |              0.03359 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3362 | <5%                     |                 2 |              0.1681  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3377 | >20%                    |                 2 |              0.16885 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3415 | >20%                    |                 5 |              0.0683  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3495 | >20%                    |                 2 |              0.17475 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3564 | >20%                    |                 5 |              0.07128 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3615 | 10-15%                  |                 2 |              0.18075 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3666 | >20%                    |                 5 |              0.07332 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3681 | >20%                    |                 5 |              0.07362 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3744 | >20%                    |                 2 |              0.1872  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3747 | >20%                    |                 5 |              0.07494 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3818 | 5-10%                   |                10 |              0.03818 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3913 | >20%                    |                 5 |              0.07826 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3955 | >20%                    |                 2 |              0.19775 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3975 | >20%                    |                 2 |              0.19875 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3998 | >20%                    |                 5 |              0.07996 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4003 | >20%                    |                 5 |              0.08006 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.405  | <5%                     |                 2 |              0.2025  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.409  | >20%                    |                 5 |              0.0818  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.413  | 5-10%                   |                10 |              0.0413  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4296 | >20%                    |                 5 |              0.08592 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4298 | >20%                    |                 5 |              0.08596 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4344 | >20%                    |                 2 |              0.2172  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4362 | >20%                    |                 5 |              0.08724 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4367 | >20%                    |                 5 |              0.08734 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4374 | <5%                     |                 2 |              0.2187  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.44   | >20%                    |                 2 |              0.22    |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4431 | >20%                    |                 5 |              0.08862 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4452 | >20%                    |                 2 |              0.2226  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4562 | >20%                    |                10 |              0.04562 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4595 | 5-10%                   |                 2 |              0.22975 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4617 | 15-20%                  |                 2 |              0.23085 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4623 | >20%                    |                 5 |              0.09246 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4637 | >20%                    |                 2 |              0.23185 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4668 | 15-20%                  |                 2 |              0.2334  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4683 | >20%                    |                 2 |              0.23415 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4787 | >20%                    |                 5 |              0.09574 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4789 | >20%                    |                 5 |              0.09578 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4826 | >20%                    |                 5 |              0.09652 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4827 | >20%                    |                 2 |              0.24135 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4907 | >20%                    |                 2 |              0.24535 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4956 | >20%                    |                 2 |              0.2478  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4978 | >20%                    |                10 |              0.04978 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.503  | 10-15%                  |                 2 |              0.2515  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5123 | >20%                    |                 5 |              0.10246 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5351 | 5-10%                   |                 5 |              0.10702 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5362 | <5%                     |                 5 |              0.10724 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5371 | 15-20%                  |                 5 |              0.10742 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5556 | >20%                    |                10 |              0.05556 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5609 | >20%                    |                 5 |              0.11218 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5618 | 10-15%                  |                 5 |              0.11236 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5622 | 5-10%                   |                 5 |              0.11244 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5709 | >20%                    |                 5 |              0.11418 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5718 | 5-10%                   |                 2 |              0.2859  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5895 | >20%                    |                10 |              0.05895 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5899 | 15-20%                  |                 2 |              0.29495 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5921 | >20%                    |                 2 |              0.29605 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6188 | >20%                    |                10 |              0.06188 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6196 | >20%                    |                 2 |              0.3098  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.628  | >20%                    |                10 |              0.0628  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6293 | >20%                    |                 5 |              0.12586 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6307 | >20%                    |                 2 |              0.31535 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6316 | >20%                    |                 5 |              0.12632 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6366 | 10-15%                  |                 2 |              0.3183  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6498 | >20%                    |                 2 |              0.3249  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6502 | >20%                    |                10 |              0.06502 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.6536 | >20%                    |                10 |              0.06536 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6566 | >20%                    |                 2 |              0.3283  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6583 | >20%                    |                 5 |              0.13166 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6854 | >20%                    |                10 |              0.06854 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6947 | >20%                    |                 5 |              0.13894 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6951 | 5-10%                   |                10 |              0.06951 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.7015 | >20%                    |                 5 |              0.1403  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7119 | >20%                    |                10 |              0.07119 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7207 | >20%                    |                 5 |              0.14414 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7278 | >20%                    |                 5 |              0.14556 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.743  | >20%                    |                10 |              0.0743  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7473 | 15-20%                  |                10 |              0.07473 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7541 | 15-20%                  |                10 |              0.07541 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7556 | >20%                    |                 5 |              0.15112 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7648 | >20%                    |                 2 |              0.3824  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7829 | >20%                    |                10 |              0.07829 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.79   | >20%                    |                10 |              0.079   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7902 | >20%                    |                 5 |              0.15804 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7912 | >20%                    |                10 |              0.07912 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7999 | >20%                    |                10 |              0.07999 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8013 | >20%                    |                 5 |              0.16026 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8083 | >20%                    |                10 |              0.08083 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8083 | 15-20%                  |                10 |              0.08083 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8123 | 5-10%                   |                10 |              0.08123 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8321 | >20%                    |                 2 |              0.41605 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8349 | >20%                    |                 5 |              0.16698 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8776 | >20%                    |                10 |              0.08776 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9029 | >20%                    |                 5 |              0.18058 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9056 | 10-15%                  |                10 |              0.09056 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9077 | >20%                    |                 5 |              0.18154 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9215 | >20%                    |                10 |              0.09215 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9322 | >20%                    |                10 |              0.09322 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9422 | >20%                    |                10 |              0.09422 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9529 | >20%                    |                 5 |              0.19058 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9757 | 15-20%                  |                10 |              0.09757 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9861 | >20%                    |                10 |              0.09861 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.0203 |                         |                 2 |              0.51015 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0237 | 5-10%                   |                10 |              0.10237 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0272 | >20%                    |                10 |              0.10272 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.032  | >20%                    |                10 |              0.1032  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0387 | >20%                    |                 5 |              0.20774 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0555 | 15-20%                  |                10 |              0.10555 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0631 | 15-20%                  |                10 |              0.10631 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.086  | 10-15%                  |                10 |              0.1086  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.091  | >20%                    |                10 |              0.1091  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1106 | >20%                    |                 2 |              0.5553  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1418 | >20%                    |                10 |              0.11418 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1447 | >20%                    |                 5 |              0.22894 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1655 | >20%                    |                10 |              0.11655 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.1834 |                         |                 5 |              0.23668 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1905 | 10-15%                  |                 2 |              0.59525 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2153 | 5-10%                   |                 2 |              0.60765 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2714 | 15-20%                  |                10 |              0.12714 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3089 | >20%                    |                10 |              0.13089 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3574 | 5-10%                   |                 2 |              0.6787  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3661 | >20%                    |                 5 |              0.27322 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3908 | >20%                    |                 5 |              0.27816 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.419  | >20%                    |                10 |              0.1419  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4704 | 15-20%                  |                10 |              0.14704 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5583 | 15-20%                  |                 5 |              0.31166 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.606  | >20%                    |                10 |              0.1606  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6616 |                         |                10 |              0.16616 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.5758 | >20%                    |                10 |              0.25758 |