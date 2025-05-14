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

Data correct as of 2025-05-14 01:52:01.257775, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1627 | >20%                    |                 2 |              0.08135 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1628 | >20%                    |                 5 |              0.03256 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.1966 | 5-10%                   |                 5 |              0.03932 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2128 | <5%                     |                 2 |              0.1064  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2162 | >20%                    |                 5 |              0.04324 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2164 | >20%                    |                 2 |              0.1082  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2194 | <5%                     |                 5 |              0.04388 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2249 | <5%                     |                 2 |              0.11245 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2284 | 15-20%                  |                 2 |              0.1142  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2453 | 5-10%                   |                 5 |              0.04906 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2581 | <5%                     |                 2 |              0.12905 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2608 | >20%                    |                 2 |              0.1304  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.266  | 15-20%                  |                 2 |              0.133   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2722 | >20%                    |                 2 |              0.1361  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2738 | 5-10%                   |                 2 |              0.1369  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2756 | >20%                    |                 2 |              0.1378  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2792 | 15-20%                  |                10 |              0.02792 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2834 | 15-20%                  |                 5 |              0.05668 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2871 | >20%                    |                 2 |              0.14355 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | 10-15%                  |                 2 |              0.1437  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2946 | 5-10%                   |                 2 |              0.1473  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2955 | 5-10%                   |                 2 |              0.14775 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.2967 | 15-20%                  |                10 |              0.02967 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2992 | <5%                     |                 2 |              0.1496  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3011 | >20%                    |                 5 |              0.06022 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3022 | >20%                    |                 2 |              0.1511  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.308  | >20%                    |                 2 |              0.154   |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3189 | 5-10%                   |                 2 |              0.15945 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3202 | >20%                    |                 2 |              0.1601  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3212 | >20%                    |                10 |              0.03212 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3237 | 15-20%                  |                 5 |              0.06474 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3244 | 5-10%                   |                 2 |              0.1622  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3278 | >20%                    |                 2 |              0.1639  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3418 | >20%                    |                 2 |              0.1709  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3434 | <5%                     |                 5 |              0.06868 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3468 | 10-15%                  |                10 |              0.03468 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3468 | >20%                    |                 5 |              0.06936 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3579 | 10-15%                  |                 2 |              0.17895 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3624 | >20%                    |                 2 |              0.1812  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3655 | >20%                    |                 2 |              0.18275 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3664 | <5%                     |                 2 |              0.1832  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3687 | 5-10%                   |                 5 |              0.07374 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.37   | >20%                    |                 2 |              0.185   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3712 | >20%                    |                 5 |              0.07424 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3746 | >20%                    |                10 |              0.03746 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.375  | >20%                    |                10 |              0.0375  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3784 | >20%                    |                 2 |              0.1892  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3793 | >20%                    |                 5 |              0.07586 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3834 | 10-15%                  |                10 |              0.03834 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3941 | >20%                    |                 2 |              0.19705 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3947 | 5-10%                   |                 5 |              0.07894 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3967 | >20%                    |                 5 |              0.07934 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.397  | 15-20%                  |                10 |              0.0397  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4004 | 5-10%                   |                 2 |              0.2002  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4014 | <5%                     |                10 |              0.04014 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4102 | >20%                    |                 2 |              0.2051  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4109 | 10-15%                  |                 2 |              0.20545 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4128 | 15-20%                  |                 5 |              0.08256 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4276 | 15-20%                  |                 2 |              0.2138  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4289 | <5%                     |                 5 |              0.08578 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4306 | >20%                    |                 5 |              0.08612 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4349 | 10-15%                  |                 2 |              0.21745 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4513 | >20%                    |                 2 |              0.22565 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4513 | <5%                     |                10 |              0.04513 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.455  | 10-15%                  |                 5 |              0.091   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4565 | >20%                    |                 5 |              0.0913  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4595 | <5%                     |                 2 |              0.22975 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.461  | >20%                    |                 2 |              0.2305  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4628 | 10-15%                  |                10 |              0.04628 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4634 | 5-10%                   |                 5 |              0.09268 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4647 | >20%                    |                 5 |              0.09294 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4664 | >20%                    |                 2 |              0.2332  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.47   | >20%                    |                 2 |              0.235   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4741 | >20%                    |                 5 |              0.09482 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4799 | >20%                    |                10 |              0.04799 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.483  | >20%                    |                 5 |              0.0966  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4907 | >20%                    |                 5 |              0.09814 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4945 | >20%                    |                 5 |              0.0989  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4955 | >20%                    |                 5 |              0.0991  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4963 | 5-10%                   |                 5 |              0.09926 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5016 | >20%                    |                 2 |              0.2508  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5041 | <5%                     |                 5 |              0.10082 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5077 | <5%                     |                 5 |              0.10154 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5114 | >20%                    |                 2 |              0.2557  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5142 | 15-20%                  |                 5 |              0.10284 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5159 | >20%                    |                 2 |              0.25795 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5186 | 10-15%                  |                 2 |              0.2593  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5192 | >20%                    |                 2 |              0.2596  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5211 | >20%                    |                 2 |              0.26055 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5284 | 10-15%                  |                 5 |              0.10568 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5407 | >20%                    |                 5 |              0.10814 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5469 | >20%                    |                 5 |              0.10938 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5576 | 10-15%                  |                 5 |              0.11152 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5618 | 5-10%                   |                 5 |              0.11236 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5785 | >20%                    |                 5 |              0.1157  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5833 | >20%                    |                10 |              0.05833 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5859 | >20%                    |                 5 |              0.11718 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5889 | >20%                    |                 2 |              0.29445 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5939 | >20%                    |                 2 |              0.29695 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6005 | <5%                     |                 5 |              0.1201  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6017 | 10-15%                  |                 2 |              0.30085 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6027 | >20%                    |                 2 |              0.30135 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6037 | >20%                    |                 5 |              0.12074 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.606  | 10-15%                  |                10 |              0.0606  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.609  | 10-15%                  |                 5 |              0.1218  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.625  | 10-15%                  |                 5 |              0.125   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6376 | >20%                    |                 5 |              0.12752 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6478 | 15-20%                  |                10 |              0.06478 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6588 | 5-10%                   |                10 |              0.06588 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6673 | 15-20%                  |                 5 |              0.13346 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6678 | >20%                    |                 5 |              0.13356 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6709 | <5%                     |                 5 |              0.13418 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6884 | >20%                    |                10 |              0.06884 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6911 | >20%                    |                 5 |              0.13822 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6979 | >20%                    |                 2 |              0.34895 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6989 | >20%                    |                 5 |              0.13978 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.703  | >20%                    |                 2 |              0.3515  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7067 | >20%                    |                 2 |              0.35335 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7071 | >20%                    |                10 |              0.07071 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7214 | <5%                     |                 5 |              0.14428 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7237 | >20%                    |                10 |              0.07237 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7294 | 5-10%                   |                10 |              0.07294 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7297 | >20%                    |                 2 |              0.36485 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7405 | >20%                    |                 5 |              0.1481  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7494 | <5%                     |                10 |              0.07494 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7672 | >20%                    |                10 |              0.07672 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7685 | 10-15%                  |                10 |              0.07685 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7868 | >20%                    |                10 |              0.07868 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.793  | >20%                    |                 5 |              0.1586  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7935 | <5%                     |                 5 |              0.1587  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8022 | 15-20%                  |                10 |              0.08022 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8031 | >20%                    |                 5 |              0.16062 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8081 | 10-15%                  |                10 |              0.08081 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8129 | 10-15%                  |                10 |              0.08129 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8168 | 5-10%                   |                10 |              0.08168 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8226 | <5%                     |                 5 |              0.16452 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8231 | 15-20%                  |                10 |              0.08231 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8252 | 15-20%                  |                10 |              0.08252 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8291 | 15-20%                  |                10 |              0.08291 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8362 | >20%                    |                10 |              0.08362 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8377 | 10-15%                  |                10 |              0.08377 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8494 | <5%                     |                10 |              0.08494 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8622 | >20%                    |                 2 |              0.4311  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8781 | >20%                    |                 2 |              0.43905 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9045 | 10-15%                  |                10 |              0.09045 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9111 | >20%                    |                 5 |              0.18222 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9145 | 15-20%                  |                10 |              0.09145 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9285 | 15-20%                  |                 2 |              0.46425 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.934  | 15-20%                  |                10 |              0.0934  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9347 | <5%                     |                10 |              0.09347 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.938  | >20%                    |                10 |              0.0938  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9615 | >20%                    |                10 |              0.09615 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9742 | >20%                    |                 2 |              0.4871  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9744 | >20%                    |                10 |              0.09744 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0013 | 10-15%                  |                10 |              0.10013 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0061 | >20%                    |                10 |              0.10061 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0199 | 10-15%                  |                 5 |              0.20398 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0233 | <5%                     |                10 |              0.10233 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0278 | >20%                    |                10 |              0.10278 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0411 | >20%                    |                10 |              0.10411 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0418 | >20%                    |                 5 |              0.20836 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0706 | >20%                    |                 5 |              0.21412 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1235 | >20%                    |                 5 |              0.2247  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1444 | <5%                     |                10 |              0.11444 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.179  | 10-15%                  |                 2 |              0.5895  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1902 | >20%                    |                10 |              0.11902 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2252 | >20%                    |                 5 |              0.24504 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2443 | >20%                    |                10 |              0.12443 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2522 | >20%                    |                 2 |              0.6261  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2732 | >20%                    |                10 |              0.12732 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3169 | <5%                     |                 5 |              0.26338 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3324 | 15-20%                  |                10 |              0.13324 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3932 | 15-20%                  |                10 |              0.13932 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4179 | >20%                    |                10 |              0.14179 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4292 | 5-10%                   |                10 |              0.14292 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4743 | 15-20%                  |                10 |              0.14743 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7467 | >20%                    |                10 |              0.17467 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0588 | <5%                     |                10 |              0.20588 |