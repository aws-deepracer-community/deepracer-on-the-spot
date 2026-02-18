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

Data correct as of 2026-02-18 02:37:40.542099, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1464 | >20%                    |                 2 |              0.0732  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1588 | >20%                    |                 2 |              0.0794  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1992 | >20%                    |                 2 |              0.0996  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2135 | >20%                    |                 5 |              0.0427  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2157 | >20%                    |                 5 |              0.04314 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2258 | >20%                    |                 2 |              0.1129  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2514 | 15-20%                  |                 2 |              0.1257  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2522 | >20%                    |                 2 |              0.1261  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2599 | 5-10%                   |                10 |              0.02599 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2629 | 10-15%                  |                 2 |              0.13145 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2647 | 5-10%                   |                 2 |              0.13235 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2689 | >20%                    |                 2 |              0.13445 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2708 | >20%                    |                 2 |              0.1354  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2845 | 10-15%                  |                 2 |              0.14225 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | >20%                    |                 2 |              0.1477  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3065 | >20%                    |                 2 |              0.15325 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3075 | >20%                    |                 2 |              0.15375 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3109 | >20%                    |                 2 |              0.15545 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.32   | 5-10%                   |                 2 |              0.16    |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3208 | >20%                    |                 5 |              0.06416 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3306 | <5%                     |                 2 |              0.1653  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3315 | >20%                    |                 2 |              0.16575 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3341 | <5%                     |                 5 |              0.06682 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.348  | >20%                    |                10 |              0.0348  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3532 | >20%                    |                 5 |              0.07064 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3614 | >20%                    |                 5 |              0.07228 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3617 | >20%                    |                 5 |              0.07234 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3624 | <5%                     |                 5 |              0.07248 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3671 | >20%                    |                 2 |              0.18355 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3711 | 5-10%                   |                10 |              0.03711 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3713 | 15-20%                  |                 2 |              0.18565 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3722 | >20%                    |                 2 |              0.1861  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3768 | 5-10%                   |                 5 |              0.07536 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.377  | >20%                    |                 2 |              0.1885  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3804 | 5-10%                   |                 2 |              0.1902  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3823 | >20%                    |                 5 |              0.07646 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3853 | >20%                    |                 5 |              0.07706 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3899 | 15-20%                  |                 2 |              0.19495 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3926 | >20%                    |                 5 |              0.07852 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3934 | >20%                    |                10 |              0.03934 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3982 | 10-15%                  |                 2 |              0.1991  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3991 | >20%                    |                 2 |              0.19955 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4017 | >20%                    |                 5 |              0.08034 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4027 | >20%                    |                 2 |              0.20135 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.405  | <5%                     |                 5 |              0.081   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4059 | >20%                    |                 5 |              0.08118 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4069 | 10-15%                  |                 5 |              0.08138 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4133 | >20%                    |                10 |              0.04133 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4156 | <5%                     |                 2 |              0.2078  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4207 | 5-10%                   |                 2 |              0.21035 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4215 | >20%                    |                 2 |              0.21075 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4222 | 15-20%                  |                 5 |              0.08444 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4224 | >20%                    |                 2 |              0.2112  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4248 | >20%                    |                 2 |              0.2124  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4249 | <5%                     |                 5 |              0.08498 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4258 | >20%                    |                 5 |              0.08516 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4363 | <5%                     |                 2 |              0.21815 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4397 | <5%                     |                 2 |              0.21985 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4436 | 5-10%                   |                 2 |              0.2218  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4474 | 5-10%                   |                 2 |              0.2237  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4493 | >20%                    |                 2 |              0.22465 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4497 | 15-20%                  |                 2 |              0.22485 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4498 | >20%                    |                10 |              0.04498 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4549 | <5%                     |                10 |              0.04549 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4557 | >20%                    |                10 |              0.04557 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4584 | >20%                    |                 5 |              0.09168 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4587 | 15-20%                  |                 2 |              0.22935 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4594 | >20%                    |                 2 |              0.2297  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4607 | 5-10%                   |                 5 |              0.09214 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4648 | >20%                    |                 2 |              0.2324  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4659 | 5-10%                   |                 2 |              0.23295 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | >20%                    |                 5 |              0.0946  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4762 | >20%                    |                10 |              0.04762 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4787 | 15-20%                  |                 2 |              0.23935 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4864 | >20%                    |                 2 |              0.2432  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4881 | >20%                    |                 5 |              0.09762 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5028 | 15-20%                  |                 5 |              0.10056 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5093 | >20%                    |                 2 |              0.25465 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5105 | >20%                    |                 5 |              0.1021  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5128 | >20%                    |                 2 |              0.2564  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5285 | >20%                    |                 2 |              0.26425 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.53   | >20%                    |                 5 |              0.106   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5325 | 15-20%                  |                 5 |              0.1065  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5355 | >20%                    |                 5 |              0.1071  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5378 | <5%                     |                10 |              0.05378 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5403 | <5%                     |                 5 |              0.10806 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5421 | >20%                    |                 5 |              0.10842 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5479 | >20%                    |                 5 |              0.10958 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5573 | >20%                    |                10 |              0.05573 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5678 | 15-20%                  |                10 |              0.05678 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5684 | 15-20%                  |                10 |              0.05684 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5821 | <5%                     |                 5 |              0.11642 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5917 | >20%                    |                10 |              0.05917 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5987 | 5-10%                   |                 2 |              0.29935 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6007 | >20%                    |                10 |              0.06007 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6052 | 15-20%                  |                 2 |              0.3026  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6066 | >20%                    |                 5 |              0.12132 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.612  | >20%                    |                 5 |              0.1224  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6161 | 5-10%                   |                 5 |              0.12322 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6182 | >20%                    |                 5 |              0.12364 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6184 | 5-10%                   |                 5 |              0.12368 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6224 | <5%                     |                10 |              0.06224 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6235 | <5%                     |                10 |              0.06235 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.63   | >20%                    |                 5 |              0.126   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6366 | >20%                    |                 2 |              0.3183  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6375 | 10-15%                  |                 5 |              0.1275  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6423 | <5%                     |                 2 |              0.32115 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6474 | >20%                    |                 5 |              0.12948 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6498 | >20%                    |                10 |              0.06498 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6558 | >20%                    |                 5 |              0.13116 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6575 | 5-10%                   |                 2 |              0.32875 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6784 | 15-20%                  |                10 |              0.06784 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6788 | 5-10%                   |                 5 |              0.13576 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6911 | 15-20%                  |                10 |              0.06911 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.6939 | >20%                    |                10 |              0.06939 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6988 | <5%                     |                10 |              0.06988 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7097 | 10-15%                  |                10 |              0.07097 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7113 | >20%                    |                 5 |              0.14226 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7122 | >20%                    |                 5 |              0.14244 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7159 | >20%                    |                10 |              0.07159 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7347 | >20%                    |                10 |              0.07347 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.735  | >20%                    |                10 |              0.0735  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7371 | 5-10%                   |                 5 |              0.14742 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7436 | >20%                    |                 5 |              0.14872 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7566 | >20%                    |                 5 |              0.15132 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.757  | 5-10%                   |                10 |              0.0757  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7688 | >20%                    |                 2 |              0.3844  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7739 | <5%                     |                 5 |              0.15478 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7764 | 10-15%                  |                10 |              0.07764 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7777 | >20%                    |                10 |              0.07777 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7873 | <5%                     |                10 |              0.07873 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8006 | >20%                    |                 2 |              0.4003  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8104 | >20%                    |                10 |              0.08104 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8139 | >20%                    |                 5 |              0.16278 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8184 | >20%                    |                 2 |              0.4092  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8314 | 10-15%                  |                 2 |              0.4157  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8315 | >20%                    |                10 |              0.08315 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.834  | 15-20%                  |                 5 |              0.1668  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8366 | <5%                     |                10 |              0.08366 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8376 | 15-20%                  |                10 |              0.08376 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8383 |                         |                 2 |              0.41915 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8408 | <5%                     |                 5 |              0.16816 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8461 | >20%                    |                 5 |              0.16922 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8532 | <5%                     |                10 |              0.08532 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8543 | >20%                    |                 2 |              0.42715 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8628 | >20%                    |                 5 |              0.17256 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.866  | >20%                    |                 2 |              0.433   |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8804 | 15-20%                  |                10 |              0.08804 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8823 | >20%                    |                10 |              0.08823 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8981 | >20%                    |                10 |              0.08981 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9005 | >20%                    |                 5 |              0.1801  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.906  | 5-10%                   |                10 |              0.0906  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9135 | <5%                     |                10 |              0.09135 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9456 | <5%                     |                10 |              0.09456 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9866 | >20%                    |                10 |              0.09866 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9912 | 10-15%                  |                10 |              0.09912 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9916 | >20%                    |                10 |              0.09916 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0026 | >20%                    |                 5 |              0.20052 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0169 | >20%                    |                10 |              0.10169 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0176 | >20%                    |                 2 |              0.5088  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0244 | >20%                    |                10 |              0.10244 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0306 | 5-10%                   |                 5 |              0.20612 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0529 | >20%                    |                 5 |              0.21058 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0747 | >20%                    |                10 |              0.10747 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0784 | 5-10%                   |                10 |              0.10784 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0848 | 10-15%                  |                 5 |              0.21696 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0971 | 15-20%                  |                10 |              0.10971 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0983 |                         |                 5 |              0.21966 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1245 | >20%                    |                10 |              0.11245 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1261 | >20%                    |                 5 |              0.22522 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1836 | >20%                    |                 2 |              0.5918  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.2131 | >20%                    |                10 |              0.12131 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2195 | <5%                     |                10 |              0.12195 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2207 | >20%                    |                10 |              0.12207 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2956 | >20%                    |                10 |              0.12956 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4058 | 10-15%                  |                 5 |              0.28116 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4099 | >20%                    |                10 |              0.14099 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4423 | >20%                    |                 2 |              0.72115 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4695 | >20%                    |                10 |              0.14695 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6256 | 15-20%                  |                10 |              0.16256 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6872 |                         |                10 |              0.16872 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0954 | 10-15%                  |                10 |              0.20954 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4806 | <5%                     |                 5 |              0.49612 |