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

Data correct as of 2026-06-20 04:06:23.532454, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1798 | >20%                    |                 2 |              0.0899  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1835 | >20%                    |                 2 |              0.09175 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1916 | 15-20%                  |                 2 |              0.0958  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1958 | >20%                    |                 2 |              0.0979  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2192 | 15-20%                  |                 5 |              0.04384 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2263 | >20%                    |                 5 |              0.04526 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.234  | >20%                    |                 2 |              0.117   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2372 | >20%                    |                 2 |              0.1186  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2412 | >20%                    |                 2 |              0.1206  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2561 | >20%                    |                 2 |              0.12805 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2571 | >20%                    |                 2 |              0.12855 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2638 | >20%                    |                 2 |              0.1319  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2663 | 10-15%                  |                 2 |              0.13315 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.269  | 15-20%                  |                 2 |              0.1345  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2721 | >20%                    |                 2 |              0.13605 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2785 | 15-20%                  |                 2 |              0.13925 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2939 | 15-20%                  |                 5 |              0.05878 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3005 | 10-15%                  |                 2 |              0.15025 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3012 | >20%                    |                 5 |              0.06024 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3032 | 15-20%                  |                 5 |              0.06064 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3071 | >20%                    |                 2 |              0.15355 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3188 | >20%                    |                 5 |              0.06376 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3453 | 5-10%                   |                10 |              0.03453 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3464 | >20%                    |                 2 |              0.1732  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3498 | >20%                    |                10 |              0.03498 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.351  | <5%                     |                 2 |              0.1755  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3559 | >20%                    |                 5 |              0.07118 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3622 | >20%                    |                 5 |              0.07244 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3654 | >20%                    |                 2 |              0.1827  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.374  | 5-10%                   |                10 |              0.0374  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3761 | 10-15%                  |                 2 |              0.18805 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3764 | >20%                    |                 5 |              0.07528 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3801 | >20%                    |                 2 |              0.19005 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3854 | 5-10%                   |                10 |              0.03854 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3917 | >20%                    |                10 |              0.03917 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3937 | >20%                    |                 2 |              0.19685 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.397  | >20%                    |                 2 |              0.1985  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.408  | >20%                    |                 5 |              0.0816  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4082 | >20%                    |                10 |              0.04082 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4093 | >20%                    |                 5 |              0.08186 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4128 | >20%                    |                10 |              0.04128 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4173 | >20%                    |                 5 |              0.08346 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4191 | >20%                    |                 5 |              0.08382 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4274 | >20%                    |                 5 |              0.08548 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4296 | >20%                    |                 5 |              0.08592 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4338 | <5%                     |                 2 |              0.2169  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4376 | >20%                    |                 2 |              0.2188  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4381 | <5%                     |                 2 |              0.21905 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4526 | >20%                    |                 5 |              0.09052 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4529 | >20%                    |                 2 |              0.22645 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4557 | >20%                    |                 5 |              0.09114 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4582 | >20%                    |                10 |              0.04582 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4626 | 10-15%                  |                 2 |              0.2313  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4698 | 15-20%                  |                 5 |              0.09396 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4759 | >20%                    |                 5 |              0.09518 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4783 | 15-20%                  |                 2 |              0.23915 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4895 | >20%                    |                 2 |              0.24475 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5115 | 10-15%                  |                10 |              0.05115 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5116 | 15-20%                  |                 2 |              0.2558  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5244 | 5-10%                   |                 5 |              0.10488 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5295 | 5-10%                   |                 2 |              0.26475 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5318 | >20%                    |                 2 |              0.2659  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5328 | 15-20%                  |                 2 |              0.2664  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5374 | >20%                    |                 5 |              0.10748 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5388 | 5-10%                   |                 2 |              0.2694  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5496 | >20%                    |                 5 |              0.10992 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5532 | >20%                    |                 5 |              0.11064 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5582 | >20%                    |                 2 |              0.2791  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5594 | >20%                    |                 5 |              0.11188 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5626 | 10-15%                  |                 5 |              0.11252 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5641 | >20%                    |                 5 |              0.11282 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.565  | 10-15%                  |                 2 |              0.2825  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.5732 | >20%                    |                 5 |              0.11464 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5739 | >20%                    |                 2 |              0.28695 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5749 |                         |                 2 |              0.28745 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5753 | <5%                     |                 5 |              0.11506 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5762 | >20%                    |                 5 |              0.11524 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5873 | >20%                    |                 2 |              0.29365 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5874 | >20%                    |                 2 |              0.2937  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5916 | >20%                    |                 2 |              0.2958  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5957 | >20%                    |                10 |              0.05957 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6003 | >20%                    |                10 |              0.06003 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6005 | >20%                    |                10 |              0.06005 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6051 | >20%                    |                 5 |              0.12102 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6144 | >20%                    |                 5 |              0.12288 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6153 | >20%                    |                 5 |              0.12306 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6342 | >20%                    |                10 |              0.06342 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6392 | >20%                    |                10 |              0.06392 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6696 | <5%                     |                10 |              0.06696 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6859 | 15-20%                  |                10 |              0.06859 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6899 | >20%                    |                 5 |              0.13798 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6944 | >20%                    |                 5 |              0.13888 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7039 | 5-10%                   |                10 |              0.07039 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7075 | >20%                    |                 2 |              0.35375 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7112 | 15-20%                  |                10 |              0.07112 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7186 | >20%                    |                 2 |              0.3593  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7189 | >20%                    |                 5 |              0.14378 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7213 | 5-10%                   |                10 |              0.07213 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.729  | >20%                    |                10 |              0.0729  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7294 | >20%                    |                 5 |              0.14588 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7342 |                         |                 5 |              0.14684 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7359 | >20%                    |                10 |              0.07359 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7398 | >20%                    |                10 |              0.07398 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7437 | >20%                    |                 2 |              0.37185 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7443 | 5-10%                   |                 5 |              0.14886 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7576 | >20%                    |                 5 |              0.15152 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7635 | >20%                    |                 5 |              0.1527  |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.7801 |                         |                 2 |              0.39005 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7808 | >20%                    |                10 |              0.07808 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.819  | >20%                    |                 5 |              0.1638  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8279 | >20%                    |                10 |              0.08279 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.83   | >20%                    |                 5 |              0.166   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8406 | 15-20%                  |                10 |              0.08406 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8727 | 15-20%                  |                10 |              0.08727 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8751 | 15-20%                  |                10 |              0.08751 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9062 | >20%                    |                10 |              0.09062 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.909  | >20%                    |                10 |              0.0909  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9277 | >20%                    |                 5 |              0.18554 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9288 | 5-10%                   |                 2 |              0.4644  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9417 | >20%                    |                10 |              0.09417 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9434 | >20%                    |                10 |              0.09434 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9445 | >20%                    |                10 |              0.09445 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.9511 |                         |                10 |              0.09511 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9539 | >20%                    |                10 |              0.09539 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9652 | >20%                    |                 5 |              0.19304 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.968  | >20%                    |                 5 |              0.1936  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9777 | >20%                    |                10 |              0.09777 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9901 | 10-15%                  |                 2 |              0.49505 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9942 | >20%                    |                10 |              0.09942 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9962 | >20%                    |                 2 |              0.4981  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0075 | 5-10%                   |                10 |              0.10075 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.0308 | >20%                    |                 5 |              0.20616 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0375 | >20%                    |                10 |              0.10375 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0463 | >20%                    |                 5 |              0.20926 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0618 | 15-20%                  |                10 |              0.10618 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0956 |                         |                 5 |              0.21912 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0974 | >20%                    |                 5 |              0.21948 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1047 | >20%                    |                10 |              0.11047 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      1.1434 | 10-15%                  |                 2 |              0.5717  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1669 | >20%                    |                10 |              0.11669 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1707 | >20%                    |                10 |              0.11707 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.2029 | >20%                    |                10 |              0.12029 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2633 | >20%                    |                10 |              0.12633 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4036 | 15-20%                  |                 5 |              0.28072 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.4081 | 5-10%                   |                 2 |              0.70405 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4318 | >20%                    |                 5 |              0.28636 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4333 | >20%                    |                 5 |              0.28666 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4364 | 10-15%                  |                10 |              0.14364 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4584 | 15-20%                  |                10 |              0.14584 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.613  |                         |                10 |              0.1613  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6331 | >20%                    |                10 |              0.16331 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6982 | 15-20%                  |                10 |              0.16982 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9002 | >20%                    |                10 |              0.19002 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4902 | >20%                    |                10 |              0.24902 |