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

Data correct as of 2025-10-26 01:54:03.962682, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1142 | 5-10%                   |                 2 |              0.0571  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1295 | >20%                    |                 2 |              0.06475 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1698 | >20%                    |                 5 |              0.03396 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.185  | 10-15%                  |                 2 |              0.0925  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1914 | >20%                    |                 2 |              0.0957  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2077 | >20%                    |                 2 |              0.10385 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2339 | >20%                    |                 5 |              0.04678 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2399 | >20%                    |                 5 |              0.04798 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2471 | >20%                    |                 2 |              0.12355 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2473 | >20%                    |                 2 |              0.12365 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2488 | 10-15%                  |                 2 |              0.1244  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2599 | >20%                    |                 5 |              0.05198 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2613 | 10-15%                  |                 2 |              0.13065 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2617 | >20%                    |                 2 |              0.13085 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2626 | 5-10%                   |                 2 |              0.1313  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2645 | >20%                    |                 2 |              0.13225 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2669 | >20%                    |                 2 |              0.13345 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2751 | >20%                    |                 2 |              0.13755 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | 5-10%                   |                 2 |              0.14135 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2833 | >20%                    |                 2 |              0.14165 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.2858 | >20%                    |                 5 |              0.05716 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3035 | 15-20%                  |                 2 |              0.15175 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3328 | >20%                    |                 2 |              0.1664  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3392 | >20%                    |                 2 |              0.1696  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3439 | >20%                    |                 2 |              0.17195 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3467 | >20%                    |                 2 |              0.17335 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3479 | 15-20%                  |                 2 |              0.17395 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3576 | >20%                    |                 5 |              0.07152 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3679 | 10-15%                  |                 2 |              0.18395 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3689 | <5%                     |                10 |              0.03689 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3698 | >20%                    |                 5 |              0.07396 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3819 | 15-20%                  |                 2 |              0.19095 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3835 | >20%                    |                 2 |              0.19175 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3887 | >20%                    |                10 |              0.03887 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3926 | >20%                    |                 2 |              0.1963  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3926 | >20%                    |                 2 |              0.1963  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4021 | >20%                    |                 2 |              0.20105 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4041 | 5-10%                   |                10 |              0.04041 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4074 | 15-20%                  |                 2 |              0.2037  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4101 | >20%                    |                 2 |              0.20505 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4139 | >20%                    |                 2 |              0.20695 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4176 | >20%                    |                 2 |              0.2088  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4231 | >20%                    |                 5 |              0.08462 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4269 | >20%                    |                 5 |              0.08538 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4294 | 5-10%                   |                 5 |              0.08588 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4317 | 5-10%                   |                 2 |              0.21585 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4332 | >20%                    |                 5 |              0.08664 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4357 | <5%                     |                 2 |              0.21785 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4409 | >20%                    |                 5 |              0.08818 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4419 | >20%                    |                 2 |              0.22095 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4439 | >20%                    |                 2 |              0.22195 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4447 | 5-10%                   |                 2 |              0.22235 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.457  | >20%                    |                 5 |              0.0914  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4603 | >20%                    |                 5 |              0.09206 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4669 | >20%                    |                 5 |              0.09338 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4698 | >20%                    |                 2 |              0.2349  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4722 | >20%                    |                 5 |              0.09444 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4728 | 10-15%                  |                 2 |              0.2364  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4739 | >20%                    |                 2 |              0.23695 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4751 | >20%                    |                 5 |              0.09502 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4752 | >20%                    |                 2 |              0.2376  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4926 | >20%                    |                 5 |              0.09852 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4997 | >20%                    |                 2 |              0.24985 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.501  | >20%                    |                 2 |              0.2505  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5034 | >20%                    |                 2 |              0.2517  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.5053 | 15-20%                  |                 5 |              0.10106 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5111 | >20%                    |                 5 |              0.10222 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5155 | 10-15%                  |                 2 |              0.25775 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5174 | 15-20%                  |                10 |              0.05174 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5178 | >20%                    |                 5 |              0.10356 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.52   | >20%                    |                10 |              0.052   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.534  | >20%                    |                 5 |              0.1068  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5432 | 15-20%                  |                 5 |              0.10864 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5454 | >20%                    |                 2 |              0.2727  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5471 | >20%                    |                 5 |              0.10942 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5531 | 5-10%                   |                 2 |              0.27655 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5596 | >20%                    |                 5 |              0.11192 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5613 | >20%                    |                 5 |              0.11226 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5645 | 10-15%                  |                 5 |              0.1129  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5724 | >20%                    |                 5 |              0.11448 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5766 | >20%                    |                 5 |              0.11532 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5769 | >20%                    |                 5 |              0.11538 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.58   | 15-20%                  |                 2 |              0.29    |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5848 | >20%                    |                 5 |              0.11696 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5939 | >20%                    |                 2 |              0.29695 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5969 | >20%                    |                 5 |              0.11938 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6039 | >20%                    |                 5 |              0.12078 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6139 | >20%                    |                 5 |              0.12278 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.622  | 10-15%                  |                 5 |              0.1244  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6363 | >20%                    |                 2 |              0.31815 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6385 | 10-15%                  |                 5 |              0.1277  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6416 | 15-20%                  |                 2 |              0.3208  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.642  | >20%                    |                 5 |              0.1284  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6484 | >20%                    |                 5 |              0.12968 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6515 | >20%                    |                 5 |              0.1303  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6562 | 15-20%                  |                 5 |              0.13124 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6571 | >20%                    |                 5 |              0.13142 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6589 | >20%                    |                 5 |              0.13178 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6681 | >20%                    |                10 |              0.06681 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6694 | >20%                    |                 2 |              0.3347  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6826 | >20%                    |                 5 |              0.13652 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6877 | <5%                     |                10 |              0.06877 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6982 | >20%                    |                10 |              0.06982 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.699  | >20%                    |                 5 |              0.1398  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7054 | 15-20%                  |                10 |              0.07054 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7059 | >20%                    |                 5 |              0.14118 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7085 | >20%                    |                10 |              0.07085 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7121 | 15-20%                  |                10 |              0.07121 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7188 | 15-20%                  |                 5 |              0.14376 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7229 | >20%                    |                 5 |              0.14458 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7234 | >20%                    |                 2 |              0.3617  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7248 | 10-15%                  |                 2 |              0.3624  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.726  | >20%                    |                10 |              0.0726  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7338 | 15-20%                  |                10 |              0.07338 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7486 | 15-20%                  |                10 |              0.07486 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7551 | >20%                    |                 5 |              0.15102 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7633 | >20%                    |                10 |              0.07633 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7684 | >20%                    |                10 |              0.07684 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7771 | >20%                    |                10 |              0.07771 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7774 | 15-20%                  |                10 |              0.07774 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7874 | >20%                    |                 5 |              0.15748 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.797  | >20%                    |                10 |              0.0797  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8091 | 15-20%                  |                 5 |              0.16182 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8154 | >20%                    |                10 |              0.08154 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8302 | <5%                     |                10 |              0.08302 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8339 | >20%                    |                10 |              0.08339 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8377 | >20%                    |                 5 |              0.16754 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8386 | >20%                    |                10 |              0.08386 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8521 | 15-20%                  |                10 |              0.08521 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8528 | 5-10%                   |                10 |              0.08528 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8555 | 10-15%                  |                 5 |              0.1711  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8567 | <5%                     |                10 |              0.08567 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.866  | 15-20%                  |                10 |              0.0866  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8717 | 10-15%                  |                 2 |              0.43585 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8724 | >20%                    |                 5 |              0.17448 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.886  | >20%                    |                 2 |              0.443   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8874 | >20%                    |                10 |              0.08874 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.894  | >20%                    |                 5 |              0.1788  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.895  | 15-20%                  |                10 |              0.0895  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9057 | >20%                    |                10 |              0.09057 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.939  | >20%                    |                 2 |              0.4695  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9414 | 10-15%                  |                10 |              0.09414 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.953  | 10-15%                  |                10 |              0.0953  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9595 | 15-20%                  |                10 |              0.09595 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9915 | 10-15%                  |                10 |              0.09915 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9981 | >20%                    |                10 |              0.09981 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0062 | >20%                    |                 2 |              0.5031  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.013  | >20%                    |                 5 |              0.2026  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0158 | 5-10%                   |                10 |              0.10158 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.0303 | >20%                    |                10 |              0.10303 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0753 | >20%                    |                10 |              0.10753 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0781 | 10-15%                  |                 2 |              0.53905 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0801 | 15-20%                  |                10 |              0.10801 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.088  | >20%                    |                10 |              0.1088  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0979 | 15-20%                  |                10 |              0.10979 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1015 | >20%                    |                10 |              0.11015 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1121 | >20%                    |                 5 |              0.22242 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1163 | >20%                    |                10 |              0.11163 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1238 | 5-10%                   |                10 |              0.11238 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1417 | 10-15%                  |                10 |              0.11417 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1499 | >20%                    |                 5 |              0.22998 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1626 | 5-10%                   |                10 |              0.11626 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1977 | <5%                     |                10 |              0.11977 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.212  | >20%                    |                 5 |              0.2424  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2509 | >20%                    |                10 |              0.12509 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2627 | 10-15%                  |                10 |              0.12627 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2991 | 5-10%                   |                 2 |              0.64955 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3383 | >20%                    |                10 |              0.13383 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3698 | 10-15%                  |                 5 |              0.27396 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6027 | >20%                    |                10 |              0.16027 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.6366 | >20%                    |                10 |              0.16366 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6407 | >20%                    |                10 |              0.16407 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6408 | 10-15%                  |                 5 |              0.32816 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7617 | >20%                    |                10 |              0.17617 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1169 | 10-15%                  |                10 |              0.21169 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3739 | 15-20%                  |                10 |              0.23739 |