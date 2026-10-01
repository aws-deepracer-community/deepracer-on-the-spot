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

Data correct as of 2026-10-01 05:03:09.845027, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0966 | >20%                    |                 2 |              0.0483  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1521 | >20%                    |                 2 |              0.07605 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1536 | 15-20%                  |                 2 |              0.0768  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1793 | >20%                    |                 5 |              0.03586 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2028 | 15-20%                  |                 5 |              0.04056 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2051 | >20%                    |                 2 |              0.10255 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2275 | 15-20%                  |                 5 |              0.0455  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.237  | >20%                    |                 2 |              0.1185  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2545 | >20%                    |                 2 |              0.12725 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2841 | >20%                    |                 2 |              0.14205 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2909 | >20%                    |                 2 |              0.14545 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2988 | 15-20%                  |                 2 |              0.1494  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3055 | >20%                    |                 2 |              0.15275 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3148 | >20%                    |                 5 |              0.06296 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3262 | >20%                    |                 2 |              0.1631  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3281 | >20%                    |                 2 |              0.16405 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3404 | <5%                     |                10 |              0.03404 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3463 | >20%                    |                 5 |              0.06926 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3651 | 10-15%                  |                 2 |              0.18255 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3664 | >20%                    |                 2 |              0.1832  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3736 | 15-20%                  |                 2 |              0.1868  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3784 | >20%                    |                 5 |              0.07568 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3811 | >20%                    |                 2 |              0.19055 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3829 | >20%                    |                 2 |              0.19145 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3834 | >20%                    |                 5 |              0.07668 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3881 | >20%                    |                10 |              0.03881 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3913 | 10-15%                  |                 2 |              0.19565 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3916 | 5-10%                   |                10 |              0.03916 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3941 | >20%                    |                 2 |              0.19705 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3951 | <5%                     |                 2 |              0.19755 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4097 | >20%                    |                 5 |              0.08194 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4217 | >20%                    |                10 |              0.04217 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4256 | >20%                    |                 5 |              0.08512 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4351 | >20%                    |                 5 |              0.08702 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4362 | >20%                    |                 2 |              0.2181  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4383 | >20%                    |                 2 |              0.21915 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4391 | 15-20%                  |                 2 |              0.21955 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4691 | >20%                    |                 5 |              0.09382 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4776 | 10-15%                  |                 2 |              0.2388  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4782 | >20%                    |                 2 |              0.2391  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4783 | >20%                    |                 5 |              0.09566 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4786 |                         |                 2 |              0.2393  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4808 | >20%                    |                 5 |              0.09616 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4853 | >20%                    |                 5 |              0.09706 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4905 | >20%                    |                 5 |              0.0981  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4943 | >20%                    |                 5 |              0.09886 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.499  | >20%                    |                 2 |              0.2495  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5109 | <5%                     |                 2 |              0.25545 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5144 | >20%                    |                 2 |              0.2572  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5223 | >20%                    |                 2 |              0.26115 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.5261 |                         |                 5 |              0.10522 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.54   | 15-20%                  |                 2 |              0.27    |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.552  | >20%                    |                 2 |              0.276   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5626 | >20%                    |                 5 |              0.11252 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5676 | >20%                    |                 2 |              0.2838  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5724 | >20%                    |                 5 |              0.11448 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5917 | 5-10%                   |                10 |              0.05917 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5941 | 10-15%                  |                 5 |              0.11882 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5963 | >20%                    |                10 |              0.05963 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5977 | >20%                    |                 5 |              0.11954 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6095 | >20%                    |                 5 |              0.1219  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6102 | >20%                    |                 2 |              0.3051  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6146 | 10-15%                  |                 2 |              0.3073  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6212 | >20%                    |                 5 |              0.12424 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6258 | >20%                    |                10 |              0.06258 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.634  | >20%                    |                10 |              0.0634  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6455 | >20%                    |                10 |              0.06455 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6575 | >20%                    |                 5 |              0.1315  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6584 | >20%                    |                 5 |              0.13168 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6688 | >20%                    |                 2 |              0.3344  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6819 | 5-10%                   |                 5 |              0.13638 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6851 | <5%                     |                 2 |              0.34255 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.688  | 5-10%                   |                 2 |              0.344   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6999 | >20%                    |                 5 |              0.13998 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7082 | >20%                    |                 2 |              0.3541  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7215 | >20%                    |                 5 |              0.1443  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7269 | 15-20%                  |                10 |              0.07269 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.7278 |                         |                10 |              0.07278 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7342 | >20%                    |                 5 |              0.14684 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7346 | 15-20%                  |                 5 |              0.14692 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7373 | >20%                    |                 5 |              0.14746 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7464 | >20%                    |                 5 |              0.14928 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7504 | >20%                    |                10 |              0.07504 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7575 | 15-20%                  |                 2 |              0.37875 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7589 | >20%                    |                 5 |              0.15178 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7667 | 15-20%                  |                10 |              0.07667 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7766 | >20%                    |                10 |              0.07766 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.799  | 15-20%                  |                10 |              0.0799  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8138 | >20%                    |                10 |              0.08138 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8296 | >20%                    |                 5 |              0.16592 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8349 | >20%                    |                 5 |              0.16698 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8376 | 5-10%                   |                10 |              0.08376 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8498 | >20%                    |                10 |              0.08498 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8503 | >20%                    |                 5 |              0.17006 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.851  | >20%                    |                 2 |              0.4255  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8519 | >20%                    |                10 |              0.08519 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8527 | >20%                    |                 2 |              0.42635 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8594 | 15-20%                  |                 5 |              0.17188 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8643 | 10-15%                  |                 2 |              0.43215 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8768 | 10-15%                  |                10 |              0.08768 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9067 | <5%                     |                 5 |              0.18134 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.915  | >20%                    |                 5 |              0.183   |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.916  | >20%                    |                 5 |              0.1832  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9258 | >20%                    |                10 |              0.09258 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9353 | >20%                    |                10 |              0.09353 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9455 | >20%                    |                 5 |              0.1891  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9472 | >20%                    |                10 |              0.09472 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9588 | >20%                    |                10 |              0.09588 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9606 | >20%                    |                10 |              0.09606 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9659 | 15-20%                  |                10 |              0.09659 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.978  | >20%                    |                10 |              0.0978  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0018 | 15-20%                  |                10 |              0.10018 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0117 | 10-15%                  |                 2 |              0.50585 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0118 | 15-20%                  |                10 |              0.10118 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0264 | >20%                    |                 2 |              0.5132  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0329 | >20%                    |                10 |              0.10329 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0341 | >20%                    |                 5 |              0.20682 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0462 | >20%                    |                10 |              0.10462 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0468 | >20%                    |                10 |              0.10468 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0596 | >20%                    |                10 |              0.10596 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0695 | >20%                    |                10 |              0.10695 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0725 | >20%                    |                10 |              0.10725 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.0979 | >20%                    |                 5 |              0.21958 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1174 | 5-10%                   |                10 |              0.11174 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.1438 |                         |                 2 |              0.5719  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1549 | 5-10%                   |                 2 |              0.57745 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2056 | >20%                    |                10 |              0.12056 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2137 | >20%                    |                10 |              0.12137 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2881 | 5-10%                   |                 2 |              0.64405 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3368 | >20%                    |                 2 |              0.6684  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3411 | >20%                    |                10 |              0.13411 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3707 | 15-20%                  |                10 |              0.13707 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.3779 |                         |                 2 |              0.68895 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3991 | 10-15%                  |                10 |              0.13991 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.401  | >20%                    |                10 |              0.1401  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4239 | 10-15%                  |                 2 |              0.71195 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5341 | >20%                    |                 2 |              0.76705 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5347 |                         |                10 |              0.15347 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5373 | 5-10%                   |                 5 |              0.30746 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.5529 |                         |                 5 |              0.31058 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5805 | >20%                    |                 5 |              0.3161  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6106 | 15-20%                  |                10 |              0.16106 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.617  |                         |                 5 |              0.3234  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6253 | >20%                    |                10 |              0.16253 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7345 | >20%                    |                 5 |              0.3469  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.895  | >20%                    |                10 |              0.1895  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9405 |                         |                10 |              0.19405 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.0761 | >20%                    |                10 |              0.20761 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0906 | 15-20%                  |                 5 |              0.41812 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2104 | 5-10%                   |                 2 |              1.1052  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.2128 | >20%                    |                 5 |              0.44256 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2523 | 5-10%                   |                10 |              0.22523 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5892 | >20%                    |                10 |              0.25892 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1447 | >20%                    |                10 |              0.31447 |