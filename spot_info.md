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

Data correct as of 2026-03-22 02:41:27.394854, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1104 | >20%                    |                 2 |              0.0552  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1191 | >20%                    |                 2 |              0.05955 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1368 | <5%                     |                 2 |              0.0684  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1638 | 10-15%                  |                 5 |              0.03276 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1962 | >20%                    |                 2 |              0.0981  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2037 | >20%                    |                 2 |              0.10185 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2041 | 15-20%                  |                 2 |              0.10205 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2047 | 15-20%                  |                 2 |              0.10235 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2094 | <5%                     |                 2 |              0.1047  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2337 | >20%                    |                 2 |              0.11685 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2488 | >20%                    |                 2 |              0.1244  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2495 | 10-15%                  |                10 |              0.02495 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2526 | >20%                    |                 2 |              0.1263  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2564 | 10-15%                  |                 2 |              0.1282  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2627 | 15-20%                  |                 5 |              0.05254 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2657 | 5-10%                   |                10 |              0.02657 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.27   | >20%                    |                 2 |              0.135   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2776 | >20%                    |                 2 |              0.1388  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2806 | >20%                    |                10 |              0.02806 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2828 | 15-20%                  |                 2 |              0.1414  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | >20%                    |                10 |              0.02887 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2891 | >20%                    |                 5 |              0.05782 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2913 | >20%                    |                 5 |              0.05826 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2942 | 5-10%                   |                 2 |              0.1471  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.2959 | 10-15%                  |                 2 |              0.14795 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3007 | >20%                    |                 2 |              0.15035 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3014 | 10-15%                  |                 2 |              0.1507  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3025 | >20%                    |                 5 |              0.0605  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3128 | >20%                    |                 2 |              0.1564  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.326  | >20%                    |                10 |              0.0326  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3333 | 5-10%                   |                10 |              0.03333 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3421 | >20%                    |                10 |              0.03421 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3477 | <5%                     |                 2 |              0.17385 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3505 | <5%                     |                 5 |              0.0701  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3512 | 15-20%                  |                 5 |              0.07024 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3519 | 10-15%                  |                 2 |              0.17595 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.353  | 15-20%                  |                 5 |              0.0706  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3542 | >20%                    |                 2 |              0.1771  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3548 | >20%                    |                 5 |              0.07096 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3555 | >20%                    |                 5 |              0.0711  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3557 | >20%                    |                 5 |              0.07114 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3571 | 15-20%                  |                10 |              0.03571 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3634 | <5%                     |                 2 |              0.1817  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3641 | 10-15%                  |                 5 |              0.07282 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3676 | >20%                    |                10 |              0.03676 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3685 | >20%                    |                 5 |              0.0737  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3699 | >20%                    |                 2 |              0.18495 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3723 | 15-20%                  |                 2 |              0.18615 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3783 | >20%                    |                 5 |              0.07566 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3796 | >20%                    |                 2 |              0.1898  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3855 | <5%                     |                10 |              0.03855 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.386  | <5%                     |                10 |              0.0386  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3897 | >20%                    |                 2 |              0.19485 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3948 | <5%                     |                 5 |              0.07896 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.397  | 10-15%                  |                 2 |              0.1985  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3973 | >20%                    |                 5 |              0.07946 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4048 | 15-20%                  |                 2 |              0.2024  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4066 | <5%                     |                 5 |              0.08132 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4074 | >20%                    |                 2 |              0.2037  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4077 | >20%                    |                 5 |              0.08154 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4157 | 10-15%                  |                 2 |              0.20785 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4207 | <5%                     |                10 |              0.04207 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4241 | >20%                    |                 2 |              0.21205 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4267 | 15-20%                  |                 2 |              0.21335 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4305 | >20%                    |                 2 |              0.21525 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4323 | >20%                    |                 5 |              0.08646 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4354 | >20%                    |                10 |              0.04354 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4369 | <5%                     |                 2 |              0.21845 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4421 | >20%                    |                 2 |              0.22105 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4427 | >20%                    |                 5 |              0.08854 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4636 | >20%                    |                 2 |              0.2318  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4703 | >20%                    |                 2 |              0.23515 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4718 | >20%                    |                 5 |              0.09436 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4734 | >20%                    |                 2 |              0.2367  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4739 | >20%                    |                 5 |              0.09478 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4745 | 15-20%                  |                10 |              0.04745 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4854 | >20%                    |                 5 |              0.09708 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.487  | >20%                    |                 5 |              0.0974  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4875 | >20%                    |                 5 |              0.0975  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4892 | 15-20%                  |                 5 |              0.09784 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4894 | >20%                    |                 2 |              0.2447  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4918 | >20%                    |                 5 |              0.09836 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4986 | >20%                    |                 5 |              0.09972 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5002 | >20%                    |                 2 |              0.2501  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.504  | >20%                    |                 5 |              0.1008  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.505  | <5%                     |                10 |              0.0505  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5066 | >20%                    |                 5 |              0.10132 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5076 | >20%                    |                 5 |              0.10152 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5129 | 15-20%                  |                 2 |              0.25645 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5319 | >20%                    |                 5 |              0.10638 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5325 | 5-10%                   |                 5 |              0.1065  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5349 | 5-10%                   |                10 |              0.05349 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5388 | >20%                    |                 5 |              0.10776 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5479 | >20%                    |                 5 |              0.10958 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5529 | >20%                    |                10 |              0.05529 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5542 | >20%                    |                 2 |              0.2771  |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5555 | >20%                    |                10 |              0.05555 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5605 | >20%                    |                 5 |              0.1121  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5729 | >20%                    |                 2 |              0.28645 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5778 | >20%                    |                10 |              0.05778 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5848 | 10-15%                  |                10 |              0.05848 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5858 | >20%                    |                 5 |              0.11716 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.586  | >20%                    |                10 |              0.0586  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5946 | 5-10%                   |                 2 |              0.2973  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5989 | 10-15%                  |                 5 |              0.11978 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6003 | >20%                    |                10 |              0.06003 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6015 | >20%                    |                 2 |              0.30075 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6037 | <5%                     |                10 |              0.06037 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6092 | >20%                    |                10 |              0.06092 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6105 | <5%                     |                 2 |              0.30525 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6122 | >20%                    |                 5 |              0.12244 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6178 | >20%                    |                 2 |              0.3089  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6275 | 15-20%                  |                10 |              0.06275 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6347 | >20%                    |                 5 |              0.12694 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6348 | 10-15%                  |                 2 |              0.3174  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6352 | >20%                    |                 2 |              0.3176  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6425 | >20%                    |                10 |              0.06425 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6461 | >20%                    |                10 |              0.06461 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6492 | >20%                    |                 5 |              0.12984 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6548 | >20%                    |                 5 |              0.13096 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6562 | >20%                    |                10 |              0.06562 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6633 | 5-10%                   |                10 |              0.06633 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6651 | 5-10%                   |                 5 |              0.13302 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6667 | >20%                    |                 5 |              0.13334 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6715 | >20%                    |                 5 |              0.1343  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7043 | 5-10%                   |                 2 |              0.35215 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7069 | >20%                    |                 2 |              0.35345 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7348 | >20%                    |                10 |              0.07348 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.747  | >20%                    |                 5 |              0.1494  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7545 | >20%                    |                10 |              0.07545 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.757  | >20%                    |                10 |              0.0757  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7593 | >20%                    |                 5 |              0.15186 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7596 | >20%                    |                 5 |              0.15192 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7602 | >20%                    |                10 |              0.07602 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7613 | >20%                    |                10 |              0.07613 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.768  | >20%                    |                 5 |              0.1536  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7691 | >20%                    |                10 |              0.07691 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7807 | >20%                    |                10 |              0.07807 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8205 | >20%                    |                 5 |              0.1641  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8215 | >20%                    |                 5 |              0.1643  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8227 | 5-10%                   |                 2 |              0.41135 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.832  | >20%                    |                10 |              0.0832  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8387 | >20%                    |                 5 |              0.16774 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8408 | >20%                    |                 2 |              0.4204  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8468 | 5-10%                   |                10 |              0.08468 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8651 | 15-20%                  |                10 |              0.08651 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8688 | >20%                    |                10 |              0.08688 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.888  | >20%                    |                10 |              0.0888  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8916 | >20%                    |                 5 |              0.17832 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9037 | 10-15%                  |                10 |              0.09037 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9039 | >20%                    |                10 |              0.09039 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9053 | 15-20%                  |                10 |              0.09053 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9066 | >20%                    |                10 |              0.09066 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9167 | >20%                    |                10 |              0.09167 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9238 | >20%                    |                10 |              0.09238 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9258 | >20%                    |                 2 |              0.4629  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9323 | >20%                    |                10 |              0.09323 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9444 | >20%                    |                 2 |              0.4722  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9523 | >20%                    |                 2 |              0.47615 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9683 | 5-10%                   |                10 |              0.09683 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.985  | >20%                    |                10 |              0.0985  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.993  | >20%                    |                10 |              0.0993  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9952 | >20%                    |                 5 |              0.19904 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9979 | >20%                    |                10 |              0.09979 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0125 | 15-20%                  |                10 |              0.10125 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0158 | >20%                    |                10 |              0.10158 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.028  | <5%                     |                 5 |              0.2056  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.0518 | >20%                    |                 5 |              0.21036 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0787 | >20%                    |                 5 |              0.21574 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1644 | >20%                    |                 5 |              0.23288 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1769 | 10-15%                  |                10 |              0.11769 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.224  | 5-10%                   |                 2 |              0.612   |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2414 | 10-15%                  |                 2 |              0.6207  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.2868 | <5%                     |                 2 |              0.6434  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3098 | >20%                    |                 5 |              0.26196 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3109 | 15-20%                  |                10 |              0.13109 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3652 | >20%                    |                 2 |              0.6826  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3663 | >20%                    |                10 |              0.13663 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3664 | >20%                    |                10 |              0.13664 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4049 | <5%                     |                 5 |              0.28098 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4905 | 15-20%                  |                 5 |              0.2981  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5194 | 15-20%                  |                10 |              0.15194 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8368 | >20%                    |                10 |              0.18368 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4065 | >20%                    |                10 |              0.24065 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.5816 | <5%                     |                10 |              0.25816 |