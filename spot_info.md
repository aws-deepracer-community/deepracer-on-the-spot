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

Data correct as of 2025-12-15 02:03:41.501274, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.117  | >20%                    |                 2 |              0.0585  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1566 | 15-20%                  |                 2 |              0.0783  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1581 | >20%                    |                 2 |              0.07905 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1583 | <5%                     |                 2 |              0.07915 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1787 | >20%                    |                 2 |              0.08935 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1891 | >20%                    |                 2 |              0.09455 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1974 | >20%                    |                 5 |              0.03948 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2037 | >20%                    |                 2 |              0.10185 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2054 | 5-10%                   |                 5 |              0.04108 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2183 | >20%                    |                 5 |              0.04366 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2445 | >20%                    |                 2 |              0.12225 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2465 | >20%                    |                 2 |              0.12325 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2471 | >20%                    |                 2 |              0.12355 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2485 | 10-15%                  |                 2 |              0.12425 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | >20%                    |                10 |              0.02669 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2743 | 10-15%                  |                 5 |              0.05486 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2795 | >20%                    |                 2 |              0.13975 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2818 | <5%                     |                 5 |              0.05636 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2819 | 15-20%                  |                 2 |              0.14095 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2827 | 5-10%                   |                 2 |              0.14135 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2867 | 5-10%                   |                10 |              0.02867 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2937 | 10-15%                  |                 2 |              0.14685 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2951 | >20%                    |                 2 |              0.14755 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3004 | >20%                    |                 2 |              0.1502  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.304  | >20%                    |                 2 |              0.152   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3094 | 10-15%                  |                 2 |              0.1547  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3183 | >20%                    |                 5 |              0.06366 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3214 | >20%                    |                 2 |              0.1607  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3228 | >20%                    |                 2 |              0.1614  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3336 | 10-15%                  |                10 |              0.03336 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3415 | 15-20%                  |                 2 |              0.17075 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3502 | >20%                    |                 5 |              0.07004 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3557 | >20%                    |                 2 |              0.17785 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3566 | >20%                    |                10 |              0.03566 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3568 | 5-10%                   |                10 |              0.03568 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3588 | >20%                    |                 2 |              0.1794  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.363  | <5%                     |                 5 |              0.0726  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3632 | >20%                    |                 5 |              0.07264 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3637 | >20%                    |                 5 |              0.07274 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3698 | >20%                    |                 2 |              0.1849  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3744 | 5-10%                   |                 2 |              0.1872  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.383  | >20%                    |                10 |              0.0383  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3906 | >20%                    |                 5 |              0.07812 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3913 | <5%                     |                10 |              0.03913 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.393  | >20%                    |                 5 |              0.0786  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3936 | >20%                    |                 5 |              0.07872 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3965 | 15-20%                  |                 5 |              0.0793  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3987 | >20%                    |                 2 |              0.19935 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3988 | >20%                    |                 5 |              0.07976 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3988 | <5%                     |                 2 |              0.1994  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4005 | >20%                    |                 2 |              0.20025 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4009 | >20%                    |                10 |              0.04009 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.403  | 10-15%                  |                10 |              0.0403  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4095 | >20%                    |                10 |              0.04095 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4113 | 10-15%                  |                 2 |              0.20565 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4116 | 15-20%                  |                 5 |              0.08232 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4126 | >20%                    |                 5 |              0.08252 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4215 | <5%                     |                 2 |              0.21075 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4228 | >20%                    |                 2 |              0.2114  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4234 | >20%                    |                 2 |              0.2117  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4266 | 10-15%                  |                 2 |              0.2133  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4266 | 15-20%                  |                10 |              0.04266 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4341 | <5%                     |                 2 |              0.21705 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4553 | >20%                    |                 2 |              0.22765 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4562 | 15-20%                  |                 5 |              0.09124 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4574 | 15-20%                  |                 2 |              0.2287  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4636 | 15-20%                  |                 5 |              0.09272 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4651 | >20%                    |                 2 |              0.23255 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4671 | >20%                    |                 5 |              0.09342 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4679 | >20%                    |                 5 |              0.09358 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4704 | >20%                    |                 2 |              0.2352  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4712 | 15-20%                  |                 2 |              0.2356  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.472  | 15-20%                  |                 5 |              0.0944  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4761 | >20%                    |                 5 |              0.09522 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4836 | >20%                    |                 2 |              0.2418  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4927 | >20%                    |                 2 |              0.24635 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4929 | >20%                    |                 5 |              0.09858 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4951 | <5%                     |                10 |              0.04951 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4978 | <5%                     |                 5 |              0.09956 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4994 | 5-10%                   |                 5 |              0.09988 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5084 | 15-20%                  |                 2 |              0.2542  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5151 | <5%                     |                10 |              0.05151 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5231 | >20%                    |                 5 |              0.10462 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5247 | >20%                    |                 2 |              0.26235 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5269 | 15-20%                  |                 5 |              0.10538 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5285 | >20%                    |                 5 |              0.1057  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5319 | >20%                    |                 5 |              0.10638 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5342 | >20%                    |                 5 |              0.10684 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5365 | >20%                    |                 5 |              0.1073  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5414 | >20%                    |                 2 |              0.2707  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5499 | <5%                     |                 5 |              0.10998 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.56   | >20%                    |                 2 |              0.28    |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.566  | >20%                    |                 2 |              0.283   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.567  | >20%                    |                 5 |              0.1134  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5678 | >20%                    |                 5 |              0.11356 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5689 | 10-15%                  |                 5 |              0.11378 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5732 | >20%                    |                 5 |              0.11464 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5784 | >20%                    |                 2 |              0.2892  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5914 | >20%                    |                10 |              0.05914 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5935 | >20%                    |                 5 |              0.1187  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5965 | 5-10%                   |                 5 |              0.1193  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6046 | >20%                    |                 5 |              0.12092 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6129 | >20%                    |                10 |              0.06129 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6204 | 5-10%                   |                 5 |              0.12408 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6316 | >20%                    |                 2 |              0.3158  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6386 | <5%                     |                 5 |              0.12772 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6397 | >20%                    |                 2 |              0.31985 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6409 | 15-20%                  |                 5 |              0.12818 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6477 | 5-10%                   |                 5 |              0.12954 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6672 | >20%                    |                10 |              0.06672 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6693 | 10-15%                  |                 5 |              0.13386 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6745 | >20%                    |                10 |              0.06745 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.6773 | >20%                    |                10 |              0.06773 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6798 | 10-15%                  |                 5 |              0.13596 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6853 | 15-20%                  |                10 |              0.06853 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6855 | >20%                    |                 5 |              0.1371  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6868 | >20%                    |                 5 |              0.13736 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6885 | >20%                    |                10 |              0.06885 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6947 | 5-10%                   |                10 |              0.06947 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6988 | 15-20%                  |                10 |              0.06988 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6995 | 10-15%                  |                10 |              0.06995 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7083 | >20%                    |                10 |              0.07083 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7136 | >20%                    |                10 |              0.07136 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7163 | >20%                    |                10 |              0.07163 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7194 | >20%                    |                 2 |              0.3597  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7206 | >20%                    |                 2 |              0.3603  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7222 | >20%                    |                 5 |              0.14444 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7433 | >20%                    |                10 |              0.07433 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7471 | >20%                    |                10 |              0.07471 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7626 | >20%                    |                 2 |              0.3813  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7677 | >20%                    |                 5 |              0.15354 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.77   | >20%                    |                 5 |              0.154   |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7728 | >20%                    |                10 |              0.07728 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.774  | >20%                    |                10 |              0.0774  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7796 | 10-15%                  |                10 |              0.07796 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.781  | >20%                    |                 5 |              0.1562  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7834 | >20%                    |                 2 |              0.3917  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7888 | 10-15%                  |                10 |              0.07888 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8089 | >20%                    |                10 |              0.08089 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8117 | 15-20%                  |                10 |              0.08117 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8372 | <5%                     |                10 |              0.08372 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8435 | 10-15%                  |                 5 |              0.1687  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8444 | >20%                    |                 5 |              0.16888 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8513 | >20%                    |                 2 |              0.42565 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8524 | >20%                    |                 2 |              0.4262  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8665 | 5-10%                   |                10 |              0.08665 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8744 | >20%                    |                10 |              0.08744 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8848 | >20%                    |                 5 |              0.17696 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8926 | 10-15%                  |                10 |              0.08926 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8933 | >20%                    |                 5 |              0.17866 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.896  | >20%                    |                10 |              0.0896  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9052 | >20%                    |                10 |              0.09052 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9124 | >20%                    |                10 |              0.09124 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9227 | >20%                    |                10 |              0.09227 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.9271 | 15-20%                  |                 2 |              0.46355 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9409 | >20%                    |                 5 |              0.18818 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9435 | >20%                    |                 5 |              0.1887  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9704 | 10-15%                  |                10 |              0.09704 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0246 | >20%                    |                10 |              0.10246 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0253 | 15-20%                  |                10 |              0.10253 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0385 | >20%                    |                10 |              0.10385 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0401 | >20%                    |                 2 |              0.52005 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0414 | 10-15%                  |                10 |              0.10414 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.043  | >20%                    |                 2 |              0.5215  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0463 | 10-15%                  |                10 |              0.10463 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      1.079  | >20%                    |                 2 |              0.5395  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0958 | 5-10%                   |                 5 |              0.21916 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.098  | >20%                    |                10 |              0.1098  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2103 | >20%                    |                10 |              0.12103 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2162 | >20%                    |                10 |              0.12162 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.2681 | 5-10%                   |                10 |              0.12681 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3254 | >20%                    |                 5 |              0.26508 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3676 | >20%                    |                 2 |              0.6838  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4161 | >20%                    |                10 |              0.14161 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4218 | >20%                    |                 5 |              0.28436 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4327 | >20%                    |                10 |              0.14327 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4439 | >20%                    |                 2 |              0.72195 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4556 | 15-20%                  |                10 |              0.14556 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5369 | 10-15%                  |                 5 |              0.30738 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.57   | 15-20%                  |                10 |              0.157   |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0904 | 10-15%                  |                10 |              0.20904 |