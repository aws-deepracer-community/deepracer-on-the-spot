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

Data correct as of 2025-06-15 02:06:16.237314, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1039 | >20%                    |                 2 |              0.05195 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1582 | >20%                    |                 5 |              0.03164 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1716 | 5-10%                   |                 2 |              0.0858  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1735 | >20%                    |                 5 |              0.0347  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 15-20%                  |                 5 |              0.03708 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.207  | >20%                    |                 5 |              0.0414  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2131 | >20%                    |                 2 |              0.10655 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2177 | >20%                    |                 2 |              0.10885 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2189 | 15-20%                  |                 2 |              0.10945 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2216 | >20%                    |                 2 |              0.1108  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2348 | 15-20%                  |                 2 |              0.1174  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2361 | 15-20%                  |                 2 |              0.11805 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2438 | >20%                    |                10 |              0.02438 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.246  | <5%                     |                 2 |              0.123   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2524 | 15-20%                  |                10 |              0.02524 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2564 | >20%                    |                 2 |              0.1282  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2654 | 5-10%                   |                10 |              0.02654 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2706 | >20%                    |                 2 |              0.1353  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2751 | 15-20%                  |                 2 |              0.13755 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2783 | >20%                    |                 5 |              0.05566 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | <5%                     |                 2 |              0.1397  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2799 | >20%                    |                 2 |              0.13995 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2912 | >20%                    |                 5 |              0.05824 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2924 | >20%                    |                 2 |              0.1462  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2973 | >20%                    |                 2 |              0.14865 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3018 | 15-20%                  |                 5 |              0.06036 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3081 | >20%                    |                 2 |              0.15405 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3122 | >20%                    |                 2 |              0.1561  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.313  | >20%                    |                 2 |              0.1565  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3134 | 10-15%                  |                 2 |              0.1567  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3165 | >20%                    |                 2 |              0.15825 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3184 | 15-20%                  |                 5 |              0.06368 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3199 | >20%                    |                 2 |              0.15995 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.321  | >20%                    |                 5 |              0.0642  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3337 | 5-10%                   |                 2 |              0.16685 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3373 | <5%                     |                 2 |              0.16865 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.348  | 10-15%                  |                 2 |              0.174   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3523 | >20%                    |                10 |              0.03523 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3671 | 10-15%                  |                 2 |              0.18355 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3786 | 10-15%                  |                 2 |              0.1893  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3789 | >20%                    |                 2 |              0.18945 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3793 | >20%                    |                 5 |              0.07586 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3839 | >20%                    |                 2 |              0.19195 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3939 | 10-15%                  |                 5 |              0.07878 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3958 | <5%                     |                 5 |              0.07916 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3967 | >20%                    |                 5 |              0.07934 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3984 | >20%                    |                 2 |              0.1992  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4014 | >20%                    |                 5 |              0.08028 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4028 | >20%                    |                 2 |              0.2014  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.411  | >20%                    |                10 |              0.0411  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.412  | >20%                    |                 5 |              0.0824  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4125 | >20%                    |                 5 |              0.0825  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4182 | 15-20%                  |                 2 |              0.2091  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.42   | <5%                     |                 2 |              0.21    |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4215 | >20%                    |                10 |              0.04215 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.422  | 10-15%                  |                 5 |              0.0844  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4236 | >20%                    |                10 |              0.04236 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4282 | 5-10%                   |                 2 |              0.2141  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4388 | 15-20%                  |                10 |              0.04388 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.44   | 15-20%                  |                 5 |              0.088   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4407 | <5%                     |                 5 |              0.08814 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4432 | >20%                    |                 2 |              0.2216  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4488 | >20%                    |                 5 |              0.08976 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4513 | >20%                    |                 5 |              0.09026 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4517 | >20%                    |                 2 |              0.22585 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4517 | >20%                    |                 2 |              0.22585 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4527 | >20%                    |                 5 |              0.09054 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4536 | >20%                    |                10 |              0.04536 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4575 | >20%                    |                 5 |              0.0915  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4648 | <5%                     |                 5 |              0.09296 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4783 | >20%                    |                 5 |              0.09566 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4814 | >20%                    |                 2 |              0.2407  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4847 | <5%                     |                 5 |              0.09694 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4898 | >20%                    |                 5 |              0.09796 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.49   | >20%                    |                 2 |              0.245   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4907 | >20%                    |                 2 |              0.24535 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5009 | 10-15%                  |                 5 |              0.10018 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5028 | 10-15%                  |                 5 |              0.10056 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.504  | 15-20%                  |                 2 |              0.252   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5045 | 5-10%                   |                 5 |              0.1009  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5059 | 15-20%                  |                 5 |              0.10118 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5066 | 10-15%                  |                 2 |              0.2533  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5183 | >20%                    |                10 |              0.05183 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5201 | <5%                     |                 5 |              0.10402 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5226 | <5%                     |                 5 |              0.10452 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5337 | >20%                    |                 2 |              0.26685 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5372 | >20%                    |                 2 |              0.2686  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5383 | >20%                    |                 2 |              0.26915 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5383 | 5-10%                   |                 2 |              0.26915 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5441 | 15-20%                  |                 2 |              0.27205 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5476 | >20%                    |                 2 |              0.2738  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5523 | >20%                    |                 5 |              0.11046 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5543 | >20%                    |                 5 |              0.11086 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5634 | 10-15%                  |                10 |              0.05634 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5707 | 10-15%                  |                 5 |              0.11414 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5775 | >20%                    |                 5 |              0.1155  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5929 | 5-10%                   |                 2 |              0.29645 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5965 | >20%                    |                 5 |              0.1193  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5998 | <5%                     |                 2 |              0.2999  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6074 | >20%                    |                 2 |              0.3037  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6086 | >20%                    |                 5 |              0.12172 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6182 | >20%                    |                 2 |              0.3091  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6226 | >20%                    |                 5 |              0.12452 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6345 | >20%                    |                 2 |              0.31725 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6365 | >20%                    |                 5 |              0.1273  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6379 | >20%                    |                 5 |              0.12758 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6398 | >20%                    |                10 |              0.06398 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6403 | >20%                    |                 5 |              0.12806 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6507 | <5%                     |                 5 |              0.13014 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6529 | <5%                     |                 5 |              0.13058 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6685 | >20%                    |                 5 |              0.1337  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6743 | >20%                    |                 2 |              0.33715 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6744 | 10-15%                  |                 5 |              0.13488 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6766 | >20%                    |                 5 |              0.13532 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6825 | >20%                    |                 5 |              0.1365  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6842 | 15-20%                  |                10 |              0.06842 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6881 | >20%                    |                10 |              0.06881 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6896 | <5%                     |                10 |              0.06896 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6897 | 10-15%                  |                 2 |              0.34485 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7004 | 15-20%                  |                10 |              0.07004 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7035 | 10-15%                  |                 5 |              0.1407  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7059 | >20%                    |                10 |              0.07059 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7127 | >20%                    |                10 |              0.07127 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7147 | 15-20%                  |                10 |              0.07147 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7167 | <5%                     |                10 |              0.07167 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7184 | <5%                     |                 5 |              0.14368 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7246 | >20%                    |                10 |              0.07246 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7273 | >20%                    |                10 |              0.07273 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7314 | 15-20%                  |                10 |              0.07314 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7557 | <5%                     |                10 |              0.07557 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7655 | >20%                    |                 2 |              0.38275 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7655 | >20%                    |                10 |              0.07655 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7695 | >20%                    |                 5 |              0.1539  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.775  | >20%                    |                10 |              0.0775  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7809 | >20%                    |                10 |              0.07809 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7836 | 10-15%                  |                10 |              0.07836 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7847 | >20%                    |                 5 |              0.15694 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7939 | >20%                    |                10 |              0.07939 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7951 | >20%                    |                10 |              0.07951 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7972 | <5%                     |                10 |              0.07972 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8074 | 15-20%                  |                10 |              0.08074 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8112 | 5-10%                   |                 5 |              0.16224 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8231 | >20%                    |                 5 |              0.16462 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8272 | >20%                    |                10 |              0.08272 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8702 | >20%                    |                10 |              0.08702 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8835 | 15-20%                  |                10 |              0.08835 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9034 | <5%                     |                10 |              0.09034 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9116 | >20%                    |                10 |              0.09116 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9195 | >20%                    |                10 |              0.09195 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9262 | >20%                    |                10 |              0.09262 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9358 | >20%                    |                10 |              0.09358 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9689 | >20%                    |                 5 |              0.19378 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9718 | >20%                    |                10 |              0.09718 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9741 | >20%                    |                10 |              0.09741 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9819 | >20%                    |                10 |              0.09819 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9933 | >20%                    |                10 |              0.09933 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9942 | >20%                    |                10 |              0.09942 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0012 | >20%                    |                10 |              0.10012 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0269 | >20%                    |                 2 |              0.51345 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.039  | 10-15%                  |                10 |              0.1039  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0544 | <5%                     |                 2 |              0.5272  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.074  | >20%                    |                 2 |              0.537   |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0883 | 15-20%                  |                10 |              0.10883 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0986 | >20%                    |                 5 |              0.21972 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1012 | <5%                     |                 2 |              0.5506  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1076 | >20%                    |                10 |              0.11076 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1289 | 15-20%                  |                10 |              0.11289 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1402 | <5%                     |                 5 |              0.22804 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1475 | 15-20%                  |                10 |              0.11475 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1759 | <5%                     |                10 |              0.11759 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1851 | >20%                    |                10 |              0.11851 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.214  | 10-15%                  |                10 |              0.1214  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2629 | >20%                    |                 5 |              0.25258 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2798 | >20%                    |                10 |              0.12798 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3885 | >20%                    |                10 |              0.13885 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4103 | <5%                     |                 5 |              0.28206 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4581 | >20%                    |                 5 |              0.29162 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5265 | >20%                    |                 2 |              0.76325 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5981 | 10-15%                  |                10 |              0.15981 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.6814 | <5%                     |                10 |              0.16814 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0218 | <5%                     |                10 |              0.20218 |