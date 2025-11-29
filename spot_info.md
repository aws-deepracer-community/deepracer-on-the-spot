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

Data correct as of 2025-11-29 01:50:46.003767, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1408 | >20%                    |                 2 |              0.0704  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1421 | 15-20%                  |                 2 |              0.07105 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1444 | >20%                    |                 2 |              0.0722  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1768 | <5%                     |                 2 |              0.0884  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2003 | <5%                     |                 2 |              0.10015 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2092 | >20%                    |                 2 |              0.1046  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2152 | 10-15%                  |                 2 |              0.1076  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2216 | >20%                    |                 2 |              0.1108  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2264 | >20%                    |                 2 |              0.1132  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2375 | >20%                    |                 2 |              0.11875 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2514 | >20%                    |                 2 |              0.1257  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2607 | >20%                    |                 2 |              0.13035 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.265  | >20%                    |                 5 |              0.053   |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2698 | 10-15%                  |                 5 |              0.05396 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2698 | 15-20%                  |                 2 |              0.1349  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2698 | 5-10%                   |                 5 |              0.05396 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2728 | >20%                    |                 2 |              0.1364  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2749 | <5%                     |                 2 |              0.13745 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2795 | >20%                    |                 5 |              0.0559  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2807 | 5-10%                   |                 2 |              0.14035 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2865 | 10-15%                  |                 2 |              0.14325 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2883 | >20%                    |                 2 |              0.14415 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2908 | >20%                    |                 5 |              0.05816 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.301  | 10-15%                  |                10 |              0.0301  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.326  | 10-15%                  |                10 |              0.0326  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3265 | >20%                    |                 5 |              0.0653  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3291 | <5%                     |                 5 |              0.06582 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3376 | >20%                    |                 2 |              0.1688  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3438 | 5-10%                   |                10 |              0.03438 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3447 | 5-10%                   |                 2 |              0.17235 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3496 | <5%                     |                 2 |              0.1748  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3498 | 10-15%                  |                 2 |              0.1749  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3517 | >20%                    |                 2 |              0.17585 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3559 | >20%                    |                 5 |              0.07118 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3624 | >20%                    |                 5 |              0.07248 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3661 | >20%                    |                 2 |              0.18305 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3695 | >20%                    |                10 |              0.03695 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3705 | >20%                    |                 2 |              0.18525 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3802 | 10-15%                  |                 2 |              0.1901  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3807 | 15-20%                  |                 2 |              0.19035 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3832 | >20%                    |                 5 |              0.07664 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3845 | >20%                    |                 2 |              0.19225 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3874 | 15-20%                  |                 5 |              0.07748 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3891 | >20%                    |                 2 |              0.19455 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.3897 | >20%                    |                 2 |              0.19485 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.39   | 15-20%                  |                 2 |              0.195   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3924 | 15-20%                  |                 5 |              0.07848 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3934 | >20%                    |                10 |              0.03934 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3979 | >20%                    |                 5 |              0.07958 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3984 | <5%                     |                 2 |              0.1992  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4014 | >20%                    |                 2 |              0.2007  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4018 | >20%                    |                 2 |              0.2009  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4085 | 10-15%                  |                 5 |              0.0817  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4099 | >20%                    |                 2 |              0.20495 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4173 | >20%                    |                 5 |              0.08346 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4202 | 10-15%                  |                10 |              0.04202 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4233 | 15-20%                  |                 2 |              0.21165 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4249 | >20%                    |                 5 |              0.08498 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4346 | >20%                    |                 2 |              0.2173  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4366 | 5-10%                   |                 2 |              0.2183  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4424 | >20%                    |                 2 |              0.2212  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4471 | >20%                    |                 2 |              0.22355 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4481 | 15-20%                  |                 5 |              0.08962 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4551 | 10-15%                  |                 5 |              0.09102 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4581 | >20%                    |                 5 |              0.09162 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4588 | >20%                    |                10 |              0.04588 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4606 | <5%                     |                 2 |              0.2303  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4639 | >20%                    |                 2 |              0.23195 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4652 | >20%                    |                10 |              0.04652 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4752 | >20%                    |                 5 |              0.09504 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4765 | 15-20%                  |                10 |              0.04765 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.479  | >20%                    |                 5 |              0.0958  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4835 | 10-15%                  |                 2 |              0.24175 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4856 | 10-15%                  |                 5 |              0.09712 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4877 | >20%                    |                 5 |              0.09754 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4891 | >20%                    |                 2 |              0.24455 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4906 | 15-20%                  |                 5 |              0.09812 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4906 | >20%                    |                 2 |              0.2453  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4919 | 10-15%                  |                 2 |              0.24595 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4998 | >20%                    |                 5 |              0.09996 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5025 | 15-20%                  |                 5 |              0.1005  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5041 | >20%                    |                 5 |              0.10082 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5158 | 10-15%                  |                 2 |              0.2579  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5167 | >20%                    |                 5 |              0.10334 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5234 | 10-15%                  |                 5 |              0.10468 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5364 | >20%                    |                 5 |              0.10728 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5503 | 15-20%                  |                 5 |              0.11006 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5529 | >20%                    |                 5 |              0.11058 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5602 | <5%                     |                10 |              0.05602 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5616 | >20%                    |                 5 |              0.11232 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5642 | 5-10%                   |                10 |              0.05642 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5658 | >20%                    |                 5 |              0.11316 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5767 | 10-15%                  |                 5 |              0.11534 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5828 | 15-20%                  |                 5 |              0.11656 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5843 | >20%                    |                 2 |              0.29215 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5844 | 15-20%                  |                10 |              0.05844 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5851 | >20%                    |                 2 |              0.29255 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5907 | 15-20%                  |                 5 |              0.11814 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6032 | <5%                     |                10 |              0.06032 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.607  | >20%                    |                 2 |              0.3035  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6079 | 15-20%                  |                 5 |              0.12158 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6086 | 10-15%                  |                 5 |              0.12172 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6093 | >20%                    |                 5 |              0.12186 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6104 | >20%                    |                10 |              0.06104 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6119 | >20%                    |                 2 |              0.30595 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.622  | >20%                    |                 5 |              0.1244  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6237 | 10-15%                  |                 5 |              0.12474 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6342 | >20%                    |                 5 |              0.12684 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6376 | >20%                    |                 5 |              0.12752 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6383 | 5-10%                   |                 5 |              0.12766 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6452 | 10-15%                  |                 5 |              0.12904 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6477 | >20%                    |                10 |              0.06477 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6578 | >20%                    |                 2 |              0.3289  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6578 | >20%                    |                 5 |              0.13156 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.67   | >20%                    |                10 |              0.067   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6717 | 5-10%                   |                 2 |              0.33585 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6872 | 15-20%                  |                10 |              0.06872 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6888 | 5-10%                   |                10 |              0.06888 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6994 | >20%                    |                 2 |              0.3497  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7066 | >20%                    |                10 |              0.07066 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7187 | >20%                    |                10 |              0.07187 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.722  | >20%                    |                10 |              0.0722  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7245 | >20%                    |                 5 |              0.1449  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7277 | >20%                    |                10 |              0.07277 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7374 | <5%                     |                10 |              0.07374 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7388 | 10-15%                  |                10 |              0.07388 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7514 | >20%                    |                10 |              0.07514 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7516 | 15-20%                  |                10 |              0.07516 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.752  | <5%                     |                 5 |              0.1504  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7521 | >20%                    |                10 |              0.07521 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7592 | >20%                    |                 2 |              0.3796  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7751 | >20%                    |                10 |              0.07751 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7769 | 10-15%                  |                10 |              0.07769 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7813 | >20%                    |                10 |              0.07813 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7847 | >20%                    |                 5 |              0.15694 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7942 | >20%                    |                10 |              0.07942 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8191 | >20%                    |                10 |              0.08191 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8259 | 15-20%                  |                 5 |              0.16518 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8298 | >20%                    |                 5 |              0.16596 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8433 | >20%                    |                10 |              0.08433 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8529 | >20%                    |                 5 |              0.17058 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8585 | >20%                    |                 5 |              0.1717  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8621 | 10-15%                  |                 2 |              0.43105 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8622 | 10-15%                  |                10 |              0.08622 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.866  | >20%                    |                 5 |              0.1732  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8703 | >20%                    |                10 |              0.08703 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8748 | >20%                    |                 2 |              0.4374  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9007 | 10-15%                  |                10 |              0.09007 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9081 | >20%                    |                10 |              0.09081 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9117 | 15-20%                  |                10 |              0.09117 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9155 | 5-10%                   |                10 |              0.09155 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9238 | >20%                    |                 5 |              0.18476 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9287 | >20%                    |                10 |              0.09287 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9411 | 15-20%                  |                10 |              0.09411 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9726 | <5%                     |                10 |              0.09726 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9756 | >20%                    |                 2 |              0.4878  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9824 | >20%                    |                 5 |              0.19648 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9919 | 10-15%                  |                10 |              0.09919 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.013  | >20%                    |                10 |              0.1013  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0227 | >20%                    |                10 |              0.10227 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0355 | >20%                    |                10 |              0.10355 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0412 | >20%                    |                 2 |              0.5206  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.051  | 15-20%                  |                10 |              0.1051  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.09   | <5%                     |                 5 |              0.218   |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0939 | >20%                    |                10 |              0.10939 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.116  | <5%                     |                 2 |              0.558   |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1251 | 15-20%                  |                10 |              0.11251 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1301 | >20%                    |                10 |              0.11301 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1721 | >20%                    |                10 |              0.11721 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2404 | >20%                    |                 5 |              0.24808 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3072 | >20%                    |                 2 |              0.6536  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.325  | >20%                    |                 2 |              0.6625  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3464 | 10-15%                  |                10 |              0.13464 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3559 | >20%                    |                10 |              0.13559 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3752 | >20%                    |                 5 |              0.27504 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5106 | >20%                    |                10 |              0.15106 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5545 | 5-10%                   |                 5 |              0.3109  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.5985 | >20%                    |                10 |              0.15985 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8999 | 15-20%                  |                10 |              0.18999 |