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

Data correct as of 2026-01-22 02:08:30.432406, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1306 | 10-15%                  |                 2 |              0.0653  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1556 | >20%                    |                 2 |              0.0778  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1613 | >20%                    |                 2 |              0.08065 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1708 | 10-15%                  |                 5 |              0.03416 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1791 | >20%                    |                 2 |              0.08955 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1817 | >20%                    |                 2 |              0.09085 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1904 | <5%                     |                 5 |              0.03808 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2005 | >20%                    |                 5 |              0.0401  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2152 | 5-10%                   |                 2 |              0.1076  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2379 | 10-15%                  |                 2 |              0.11895 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2543 | >20%                    |                 2 |              0.12715 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2709 | 10-15%                  |                 2 |              0.13545 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2756 | 15-20%                  |                10 |              0.02756 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2775 | 10-15%                  |                 2 |              0.13875 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2875 | >20%                    |                 2 |              0.14375 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2889 | >20%                    |                 5 |              0.05778 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2895 | >20%                    |                 2 |              0.14475 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2897 | >20%                    |                 2 |              0.14485 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2953 | 15-20%                  |                 2 |              0.14765 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2972 | >20%                    |                 2 |              0.1486  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3107 | >20%                    |                10 |              0.03107 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3129 | >20%                    |                 2 |              0.15645 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3153 | >20%                    |                 2 |              0.15765 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3183 | 5-10%                   |                 5 |              0.06366 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3385 | 5-10%                   |                10 |              0.03385 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3405 | >20%                    |                 5 |              0.0681  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3414 | <5%                     |                10 |              0.03414 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3472 | >20%                    |                 2 |              0.1736  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3474 | >20%                    |                 2 |              0.1737  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.35   | 15-20%                  |                 2 |              0.175   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3575 | <5%                     |                 2 |              0.17875 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3636 | >20%                    |                 5 |              0.07272 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3715 | >20%                    |                 2 |              0.18575 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3775 | >20%                    |                 2 |              0.18875 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3796 | >20%                    |                 5 |              0.07592 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3828 | <5%                     |                10 |              0.03828 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3863 | 10-15%                  |                 2 |              0.19315 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3868 | >20%                    |                 5 |              0.07736 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3874 | 15-20%                  |                 2 |              0.1937  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3893 | >20%                    |                 5 |              0.07786 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3921 | 15-20%                  |                 2 |              0.19605 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3934 | 5-10%                   |                 2 |              0.1967  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3945 | 10-15%                  |                 5 |              0.0789  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3977 | <5%                     |                10 |              0.03977 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4004 | 5-10%                   |                 2 |              0.2002  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4004 | <5%                     |                 5 |              0.08008 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4013 | 5-10%                   |                 2 |              0.20065 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.402  | >20%                    |                 2 |              0.201   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4034 | >20%                    |                 5 |              0.08068 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4053 | >20%                    |                 5 |              0.08106 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4069 | >20%                    |                 5 |              0.08138 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4081 | >20%                    |                10 |              0.04081 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.412  | >20%                    |                 5 |              0.0824  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4168 | 10-15%                  |                 5 |              0.08336 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4224 | 15-20%                  |                 5 |              0.08448 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4233 | <5%                     |                 5 |              0.08466 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4264 | 15-20%                  |                 2 |              0.2132  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4302 | 5-10%                   |                 2 |              0.2151  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4308 | >20%                    |                 2 |              0.2154  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4373 | >20%                    |                 2 |              0.21865 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.439  | >20%                    |                 5 |              0.0878  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4398 | 5-10%                   |                 2 |              0.2199  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4442 | <5%                     |                 2 |              0.2221  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4458 | 10-15%                  |                10 |              0.04458 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4492 | >20%                    |                10 |              0.04492 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4502 | <5%                     |                 2 |              0.2251  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4509 | >20%                    |                10 |              0.04509 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4556 | >20%                    |                 2 |              0.2278  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4578 | >20%                    |                 2 |              0.2289  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4688 | >20%                    |                 2 |              0.2344  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4715 | <5%                     |                10 |              0.04715 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.474  | 5-10%                   |                 5 |              0.0948  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4767 | 15-20%                  |                 5 |              0.09534 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4788 | 5-10%                   |                 2 |              0.2394  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4797 | >20%                    |                 2 |              0.23985 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.48   | 5-10%                   |                 5 |              0.096   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4821 | >20%                    |                10 |              0.04821 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4827 | 15-20%                  |                 5 |              0.09654 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4867 | >20%                    |                 5 |              0.09734 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4952 | >20%                    |                 5 |              0.09904 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5038 | >20%                    |                 5 |              0.10076 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5125 | >20%                    |                 2 |              0.25625 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5188 | 15-20%                  |                10 |              0.05188 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5234 | >20%                    |                 5 |              0.10468 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5248 | >20%                    |                 2 |              0.2624  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5359 | >20%                    |                 5 |              0.10718 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.536  | >20%                    |                 5 |              0.1072  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5394 | >20%                    |                 2 |              0.2697  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5428 | >20%                    |                 2 |              0.2714  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.547  | <5%                     |                 5 |              0.1094  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5481 | >20%                    |                 5 |              0.10962 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5574 | >20%                    |                 2 |              0.2787  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5592 | >20%                    |                10 |              0.05592 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5613 | <5%                     |                 5 |              0.11226 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5647 | >20%                    |                 5 |              0.11294 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5694 | >20%                    |                 5 |              0.11388 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5722 | >20%                    |                 5 |              0.11444 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5943 | >20%                    |                10 |              0.05943 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5997 | >20%                    |                 5 |              0.11994 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6002 | >20%                    |                 5 |              0.12004 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6013 | >20%                    |                10 |              0.06013 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6046 | 15-20%                  |                10 |              0.06046 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6064 | <5%                     |                 2 |              0.3032  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6127 | <5%                     |                 5 |              0.12254 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6144 | 5-10%                   |                 2 |              0.3072  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6288 | >20%                    |                 5 |              0.12576 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6359 | >20%                    |                 2 |              0.31795 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6389 | 5-10%                   |                 5 |              0.12778 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6423 | >20%                    |                10 |              0.06423 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6433 | >20%                    |                 5 |              0.12866 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6473 | 15-20%                  |                10 |              0.06473 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6514 | >20%                    |                 2 |              0.3257  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6536 | 10-15%                  |                 5 |              0.13072 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6593 | 15-20%                  |                 2 |              0.32965 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6665 | >20%                    |                10 |              0.06665 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6708 | 5-10%                   |                 5 |              0.13416 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.671  | <5%                     |                10 |              0.0671  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6817 | >20%                    |                 5 |              0.13634 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6868 | >20%                    |                10 |              0.06868 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.71   | 10-15%                  |                 2 |              0.355   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7143 | 10-15%                  |                10 |              0.07143 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7212 | >20%                    |                10 |              0.07212 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.7232 | <5%                     |                 2 |              0.3616  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7257 | <5%                     |                 5 |              0.14514 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7277 | 5-10%                   |                10 |              0.07277 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7301 | 15-20%                  |                10 |              0.07301 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7368 | 15-20%                  |                10 |              0.07368 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7371 | >20%                    |                 5 |              0.14742 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7439 | >20%                    |                10 |              0.07439 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7487 | >20%                    |                 5 |              0.14974 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7556 | >20%                    |                 5 |              0.15112 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7614 | 5-10%                   |                 2 |              0.3807  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7703 | >20%                    |                 2 |              0.38515 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7812 | <5%                     |                10 |              0.07812 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7942 | <5%                     |                10 |              0.07942 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7968 | <5%                     |                10 |              0.07968 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7976 | >20%                    |                 5 |              0.15952 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8091 | <5%                     |                10 |              0.08091 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8115 | >20%                    |                10 |              0.08115 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8134 | >20%                    |                10 |              0.08134 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8296 | >20%                    |                 2 |              0.4148  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8579 | >20%                    |                 5 |              0.17158 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8865 | <5%                     |                10 |              0.08865 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8871 | >20%                    |                10 |              0.08871 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8889 | 15-20%                  |                10 |              0.08889 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.897  | >20%                    |                 2 |              0.4485  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9123 | <5%                     |                 5 |              0.18246 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9194 | >20%                    |                10 |              0.09194 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9241 | >20%                    |                 5 |              0.18482 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9267 | >20%                    |                10 |              0.09267 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9295 | >20%                    |                10 |              0.09295 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9307 | >20%                    |                 5 |              0.18614 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9454 | >20%                    |                 2 |              0.4727  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9495 | >20%                    |                10 |              0.09495 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9629 | 15-20%                  |                10 |              0.09629 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.993  | <5%                     |                10 |              0.0993  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0278 | 5-10%                   |                 5 |              0.20556 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0333 | 15-20%                  |                 5 |              0.20666 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0439 | 5-10%                   |                10 |              0.10439 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0567 | >20%                    |                 2 |              0.52835 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0636 | 15-20%                  |                10 |              0.10636 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1018 | >20%                    |                 5 |              0.22036 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1023 | >20%                    |                10 |              0.11023 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1125 | 15-20%                  |                10 |              0.11125 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1294 | >20%                    |                10 |              0.11294 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1551 | >20%                    |                 2 |              0.57755 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1759 | >20%                    |                 5 |              0.23518 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2259 | <5%                     |                10 |              0.12259 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2368 | <5%                     |                10 |              0.12368 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2489 | >20%                    |                10 |              0.12489 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2648 | >20%                    |                10 |              0.12648 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3057 | >20%                    |                10 |              0.13057 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.332  | 15-20%                  |                10 |              0.1332  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3463 | 10-15%                  |                 5 |              0.26926 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3735 | 10-15%                  |                10 |              0.13735 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4275 | >20%                    |                 2 |              0.71375 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4553 | 15-20%                  |                10 |              0.14553 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4857 | 5-10%                   |                 5 |              0.29714 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5624 | >20%                    |                10 |              0.15624 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.626  | 10-15%                  |                10 |              0.1626  |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.1084 | <5%                     |                 5 |              0.42168 |