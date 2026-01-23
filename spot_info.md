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

Data correct as of 2026-01-23 02:04:36.065086, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.127  | 10-15%                  |                 2 |              0.0635  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1569 | >20%                    |                 2 |              0.07845 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.159  | >20%                    |                 2 |              0.0795  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1619 | 15-20%                  |                 5 |              0.03238 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1891 | >20%                    |                 2 |              0.09455 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1891 | >20%                    |                 2 |              0.09455 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1904 | <5%                     |                 5 |              0.03808 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.211  | 5-10%                   |                 2 |              0.1055  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.212  | >20%                    |                 5 |              0.0424  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2368 | 10-15%                  |                 2 |              0.1184  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2543 | >20%                    |                 2 |              0.12715 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2595 | 15-20%                  |                10 |              0.02595 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2703 | 10-15%                  |                 2 |              0.13515 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2738 | >20%                    |                 2 |              0.1369  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2774 | 10-15%                  |                 2 |              0.1387  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2883 | >20%                    |                 2 |              0.14415 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2895 | >20%                    |                 2 |              0.14475 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2916 | >20%                    |                 5 |              0.05832 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2928 | 15-20%                  |                 2 |              0.1464  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2972 | >20%                    |                 2 |              0.1486  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.308  | >20%                    |                 2 |              0.154   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3102 | >20%                    |                10 |              0.03102 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3138 | >20%                    |                 2 |              0.1569  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3191 | >20%                    |                 2 |              0.15955 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3205 | <5%                     |                10 |              0.03205 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3313 | 5-10%                   |                 5 |              0.06626 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3391 | 5-10%                   |                10 |              0.03391 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3433 | >20%                    |                 2 |              0.17165 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3456 | >20%                    |                 5 |              0.06912 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3513 | >20%                    |                 5 |              0.07026 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3517 | 15-20%                  |                 2 |              0.17585 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3575 | <5%                     |                 2 |              0.17875 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.358  | >20%                    |                 2 |              0.179   |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3743 | <5%                     |                10 |              0.03743 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3775 | >20%                    |                 2 |              0.18875 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3824 | >20%                    |                 5 |              0.07648 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3847 | 5-10%                   |                10 |              0.03847 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.386  | 15-20%                  |                 2 |              0.193   |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3876 | 15-20%                  |                 2 |              0.1938  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3877 | 15-20%                  |                 2 |              0.19385 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3917 | 5-10%                   |                 2 |              0.19585 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3955 | >20%                    |                 5 |              0.0791  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4013 | 5-10%                   |                 2 |              0.20065 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4015 | >20%                    |                 2 |              0.20075 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4021 | <5%                     |                 5 |              0.08042 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4034 | >20%                    |                 5 |              0.08068 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4063 | >20%                    |                 5 |              0.08126 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4067 | 5-10%                   |                 2 |              0.20335 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4083 | >20%                    |                 2 |              0.20415 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4092 | >20%                    |                 5 |              0.08184 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.414  | 5-10%                   |                 5 |              0.0828  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4153 | >20%                    |                10 |              0.04153 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4171 | >20%                    |                 5 |              0.08342 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4194 | 10-15%                  |                 5 |              0.08388 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4199 | >20%                    |                 5 |              0.08398 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4238 | 15-20%                  |                 5 |              0.08476 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4264 | 15-20%                  |                 2 |              0.2132  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4288 | 5-10%                   |                 2 |              0.2144  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.434  | >20%                    |                 5 |              0.0868  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4375 | >20%                    |                 2 |              0.21875 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4398 | 5-10%                   |                 2 |              0.2199  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4442 | <5%                     |                 2 |              0.2221  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.447  | <5%                     |                 5 |              0.0894  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4509 | >20%                    |                10 |              0.04509 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4522 | <5%                     |                 2 |              0.2261  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4533 | >20%                    |                 2 |              0.22665 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4583 | >20%                    |                 2 |              0.22915 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4682 | 10-15%                  |                10 |              0.04682 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4698 | >20%                    |                 2 |              0.2349  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4715 | <5%                     |                10 |              0.04715 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.472  | >20%                    |                 2 |              0.236   |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4728 | 5-10%                   |                 5 |              0.09456 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4756 | 5-10%                   |                 2 |              0.2378  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4769 | >20%                    |                10 |              0.04769 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4771 | >20%                    |                10 |              0.04771 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.482  | 15-20%                  |                 5 |              0.0964  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4831 | 15-20%                  |                 5 |              0.09662 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4865 | >20%                    |                 5 |              0.0973  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4869 | 5-10%                   |                 5 |              0.09738 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4952 | >20%                    |                 5 |              0.09904 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5117 | 15-20%                  |                10 |              0.05117 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5136 | >20%                    |                 2 |              0.2568  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.514  | >20%                    |                 5 |              0.1028  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.516  | >20%                    |                 2 |              0.258   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.529  | >20%                    |                 5 |              0.1058  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.536  | >20%                    |                 5 |              0.1072  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.537  | >20%                    |                 5 |              0.1074  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5415 | >20%                    |                 2 |              0.27075 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5428 | >20%                    |                 2 |              0.2714  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.549  | <5%                     |                 5 |              0.1098  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5525 | >20%                    |                 5 |              0.1105  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5557 | <5%                     |                 5 |              0.11114 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5588 | >20%                    |                 2 |              0.2794  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5653 | >20%                    |                 5 |              0.11306 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5668 | >20%                    |                 5 |              0.11336 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5706 | >20%                    |                10 |              0.05706 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5751 | 15-20%                  |                10 |              0.05751 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5897 | >20%                    |                10 |              0.05897 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.596  | >20%                    |                10 |              0.0596  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5987 | >20%                    |                 5 |              0.11974 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.601  | <5%                     |                 2 |              0.3005  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6045 | >20%                    |                 5 |              0.1209  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6054 | >20%                    |                 5 |              0.12108 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6127 | <5%                     |                 5 |              0.12254 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6171 | 5-10%                   |                 2 |              0.30855 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6267 | 15-20%                  |                 5 |              0.12534 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6329 | 5-10%                   |                 5 |              0.12658 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6359 | >20%                    |                 2 |              0.31795 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6431 | >20%                    |                 5 |              0.12862 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6431 | >20%                    |                10 |              0.06431 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.645  | 15-20%                  |                10 |              0.0645  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.648  | >20%                    |                10 |              0.0648  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6529 | 10-15%                  |                 5 |              0.13058 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6551 | <5%                     |                10 |              0.06551 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.662  | >20%                    |                 2 |              0.331   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6666 | 15-20%                  |                 2 |              0.3333  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6781 | 5-10%                   |                 5 |              0.13562 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6825 | >20%                    |                 5 |              0.1365  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6872 | >20%                    |                10 |              0.06872 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7096 | 10-15%                  |                 2 |              0.3548  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7129 | 10-15%                  |                10 |              0.07129 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.7134 | <5%                     |                 2 |              0.3567  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7143 | <5%                     |                 5 |              0.14286 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7181 | >20%                    |                10 |              0.07181 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7225 | >20%                    |                10 |              0.07225 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7364 | >20%                    |                 5 |              0.14728 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7371 | 15-20%                  |                10 |              0.07371 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7386 | >20%                    |                 5 |              0.14772 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7509 | >20%                    |                10 |              0.07509 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7527 | >20%                    |                 5 |              0.15054 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7543 | 5-10%                   |                10 |              0.07543 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7555 | 5-10%                   |                 2 |              0.37775 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7816 | <5%                     |                10 |              0.07816 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7954 | <5%                     |                10 |              0.07954 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7955 | >20%                    |                 5 |              0.1591  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8073 | 5-10%                   |                10 |              0.08073 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.811  | <5%                     |                10 |              0.0811  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8188 | >20%                    |                10 |              0.08188 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8216 | >20%                    |                 2 |              0.4108  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8266 | >20%                    |                10 |              0.08266 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8343 | >20%                    |                 2 |              0.41715 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8491 | >20%                    |                 5 |              0.16982 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.85   | <5%                     |                 5 |              0.17    |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8827 | 15-20%                  |                10 |              0.08827 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8842 | >20%                    |                 2 |              0.4421  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8893 | >20%                    |                10 |              0.08893 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8928 | <5%                     |                10 |              0.08928 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9089 | >20%                    |                 5 |              0.18178 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9169 | >20%                    |                10 |              0.09169 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.921  | >20%                    |                10 |              0.0921  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9297 | >20%                    |                10 |              0.09297 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9307 | >20%                    |                 5 |              0.18614 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9311 | >20%                    |                10 |              0.09311 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9466 | >20%                    |                 2 |              0.4733  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9629 | >20%                    |                10 |              0.09629 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9788 | <5%                     |                10 |              0.09788 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0219 | >20%                    |                 5 |              0.20438 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0233 | 5-10%                   |                 5 |              0.20466 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0347 | >20%                    |                 2 |              0.51735 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0478 | 5-10%                   |                10 |              0.10478 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0602 | >20%                    |                10 |              0.10602 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1031 | >20%                    |                10 |              0.11031 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1137 | 15-20%                  |                10 |              0.11137 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1285 | >20%                    |                 5 |              0.2257  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1427 | >20%                    |                10 |              0.11427 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1452 | >20%                    |                 2 |              0.5726  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1494 | >20%                    |                 5 |              0.22988 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1948 | <5%                     |                10 |              0.11948 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2259 | <5%                     |                10 |              0.12259 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2393 | >20%                    |                10 |              0.12393 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2427 | >20%                    |                10 |              0.12427 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3135 | >20%                    |                10 |              0.13135 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3581 | 10-15%                  |                10 |              0.13581 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3606 | 10-15%                  |                 5 |              0.27212 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4082 | 15-20%                  |                10 |              0.14082 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4191 | >20%                    |                 2 |              0.70955 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4845 | 10-15%                  |                 5 |              0.2969  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4948 | 15-20%                  |                10 |              0.14948 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5437 | >20%                    |                10 |              0.15437 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6636 | 10-15%                  |                10 |              0.16636 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.1793 | <5%                     |                 5 |              0.43586 |