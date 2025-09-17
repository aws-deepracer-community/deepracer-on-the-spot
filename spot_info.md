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

Data correct as of 2025-09-17 01:42:18.785361, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1335 | 5-10%                   |                 2 |              0.06675 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1367 | >20%                    |                 2 |              0.06835 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1948 | 10-15%                  |                 2 |              0.0974  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2256 | 10-15%                  |                 5 |              0.04512 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2331 | >20%                    |                 2 |              0.11655 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.248  | >20%                    |                 2 |              0.124   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.259  | >20%                    |                 2 |              0.1295  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2984 | >20%                    |                 2 |              0.1492  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3    | >20%                    |                 2 |              0.15    |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3055 | >20%                    |                 2 |              0.15275 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3063 | >20%                    |                 2 |              0.15315 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3063 | 5-10%                   |                 2 |              0.15315 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3158 | 10-15%                  |                 2 |              0.1579  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3165 | 15-20%                  |                 2 |              0.15825 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3278 | 5-10%                   |                 2 |              0.1639  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3334 | >20%                    |                 2 |              0.1667  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3405 | >20%                    |                 2 |              0.17025 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.343  | 15-20%                  |                 2 |              0.1715  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3534 | 10-15%                  |                 2 |              0.1767  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3548 | >20%                    |                10 |              0.03548 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.355  | 10-15%                  |                 5 |              0.071   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3574 | >20%                    |                 5 |              0.07148 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3606 | >20%                    |                 5 |              0.07212 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3658 | >20%                    |                 2 |              0.1829  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3707 | >20%                    |                 5 |              0.07414 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3804 | >20%                    |                 2 |              0.1902  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3837 | >20%                    |                 2 |              0.19185 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3845 | >20%                    |                 2 |              0.19225 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3878 | 15-20%                  |                 5 |              0.07756 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3921 | 15-20%                  |                10 |              0.03921 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.395  | >20%                    |                 2 |              0.1975  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3952 | >20%                    |                 2 |              0.1976  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3959 | >20%                    |                 5 |              0.07918 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3984 | >20%                    |                10 |              0.03984 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4044 | >20%                    |                 5 |              0.08088 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4115 | >20%                    |                 5 |              0.0823  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4121 | >20%                    |                 5 |              0.08242 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4202 | >20%                    |                 5 |              0.08404 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.421  | >20%                    |                 5 |              0.0842  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4276 | 15-20%                  |                 2 |              0.2138  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4285 | >20%                    |                 2 |              0.21425 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.445  | 15-20%                  |                 2 |              0.2225  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4476 | >20%                    |                 2 |              0.2238  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4552 | 5-10%                   |                 2 |              0.2276  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4579 | 10-15%                  |                 2 |              0.22895 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4645 | >20%                    |                 2 |              0.23225 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4667 | >20%                    |                 2 |              0.23335 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | >20%                    |                 5 |              0.09452 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4729 | <5%                     |                 2 |              0.23645 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4742 | 10-15%                  |                 2 |              0.2371  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4745 | >20%                    |                 5 |              0.0949  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.479  | >20%                    |                 5 |              0.0958  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4928 | >20%                    |                 2 |              0.2464  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5025 | >20%                    |                 5 |              0.1005  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5063 | >20%                    |                 5 |              0.10126 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5088 | 5-10%                   |                 5 |              0.10176 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5105 | >20%                    |                 2 |              0.25525 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.514  | >20%                    |                 2 |              0.257   |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5183 | >20%                    |                 2 |              0.25915 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5187 | 10-15%                  |                 2 |              0.25935 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5202 | >20%                    |                 5 |              0.10404 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5205 | >20%                    |                 5 |              0.1041  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5284 | 5-10%                   |                 2 |              0.2642  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5358 | >20%                    |                 5 |              0.10716 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5414 | 15-20%                  |                 2 |              0.2707  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5429 | >20%                    |                 2 |              0.27145 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5595 | >20%                    |                 5 |              0.1119  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5688 | >20%                    |                 2 |              0.2844  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5749 | >20%                    |                 5 |              0.11498 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5753 | >20%                    |                10 |              0.05753 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5785 | >20%                    |                 2 |              0.28925 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5865 | >20%                    |                 5 |              0.1173  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5893 | 5-10%                   |                10 |              0.05893 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5902 | >20%                    |                 5 |              0.11804 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5938 | >20%                    |                 5 |              0.11876 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6024 | >20%                    |                 5 |              0.12048 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6064 | 10-15%                  |                 5 |              0.12128 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6124 | 15-20%                  |                 5 |              0.12248 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6159 | >20%                    |                 2 |              0.30795 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6241 | 10-15%                  |                 5 |              0.12482 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6382 | >20%                    |                 5 |              0.12764 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.641  | 15-20%                  |                10 |              0.0641  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6423 | >20%                    |                 2 |              0.32115 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.644  | 15-20%                  |                 2 |              0.322   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6508 | 15-20%                  |                 5 |              0.13016 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6559 | >20%                    |                 5 |              0.13118 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6574 | >20%                    |                10 |              0.06574 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6589 | >20%                    |                 5 |              0.13178 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.665  | >20%                    |                 5 |              0.133   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6688 | 15-20%                  |                10 |              0.06688 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6692 | >20%                    |                 5 |              0.13384 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6706 | 15-20%                  |                 5 |              0.13412 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.672  | >20%                    |                 2 |              0.336   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6948 | >20%                    |                 5 |              0.13896 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6971 | >20%                    |                 5 |              0.13942 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6989 | >20%                    |                 5 |              0.13978 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7024 | 15-20%                  |                 5 |              0.14048 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7036 | >20%                    |                10 |              0.07036 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.706  | >20%                    |                 5 |              0.1412  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7111 | 10-15%                  |                 2 |              0.35555 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7222 | >20%                    |                 5 |              0.14444 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7305 | >20%                    |                10 |              0.07305 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7374 | >20%                    |                 5 |              0.14748 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7415 | >20%                    |                10 |              0.07415 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7464 | >20%                    |                10 |              0.07464 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7615 | 15-20%                  |                10 |              0.07615 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7668 | >20%                    |                10 |              0.07668 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7927 | >20%                    |                 5 |              0.15854 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7947 | >20%                    |                 5 |              0.15894 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7993 | <5%                     |                 2 |              0.39965 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8148 | >20%                    |                 5 |              0.16296 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8301 | >20%                    |                 5 |              0.16602 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8315 | 10-15%                  |                 2 |              0.41575 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8461 | 15-20%                  |                10 |              0.08461 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8569 | 10-15%                  |                10 |              0.08569 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.861  | <5%                     |                10 |              0.0861  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8772 | 15-20%                  |                10 |              0.08772 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8945 | >20%                    |                10 |              0.08945 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8955 | >20%                    |                 5 |              0.1791  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9065 | 5-10%                   |                10 |              0.09065 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9113 | <5%                     |                10 |              0.09113 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9122 | 10-15%                  |                10 |              0.09122 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.941  | >20%                    |                10 |              0.0941  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9423 | >20%                    |                10 |              0.09423 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9452 | 15-20%                  |                10 |              0.09452 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.946  | 15-20%                  |                10 |              0.0946  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9463 | 10-15%                  |                10 |              0.09463 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9475 | <5%                     |                10 |              0.09475 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9643 | >20%                    |                10 |              0.09643 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9646 | 15-20%                  |                10 |              0.09646 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9812 | >20%                    |                 5 |              0.19624 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9891 | >20%                    |                10 |              0.09891 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9957 | 15-20%                  |                10 |              0.09957 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.996  | 10-15%                  |                10 |              0.0996  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0331 | >20%                    |                 2 |              0.51655 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0399 | 10-15%                  |                 5 |              0.20798 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0403 | >20%                    |                10 |              0.10403 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0786 | 5-10%                   |                10 |              0.10786 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0808 | 5-10%                   |                10 |              0.10808 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0833 | 5-10%                   |                10 |              0.10833 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0849 | >20%                    |                10 |              0.10849 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0963 | >20%                    |                 2 |              0.54815 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0968 | <5%                     |                10 |              0.10968 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1008 | 15-20%                  |                10 |              0.11008 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1145 | >20%                    |                 2 |              0.55725 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.12   | >20%                    |                 5 |              0.224   |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1316 | 10-15%                  |                 2 |              0.5658  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1555 | >20%                    |                10 |              0.11555 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1865 | >20%                    |                 5 |              0.2373  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1946 | 15-20%                  |                10 |              0.11946 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2063 | 5-10%                   |                 2 |              0.60315 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.2139 | >20%                    |                10 |              0.12139 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2247 | >20%                    |                10 |              0.12247 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.246  | >20%                    |                 5 |              0.2492  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2707 | >20%                    |                10 |              0.12707 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3167 | 10-15%                  |                 5 |              0.26334 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3357 | 10-15%                  |                10 |              0.13357 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4115 | >20%                    |                10 |              0.14115 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4576 | >20%                    |                10 |              0.14576 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5003 | 10-15%                  |                 5 |              0.30006 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.577  | >20%                    |                10 |              0.1577  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.5835 | >20%                    |                10 |              0.15835 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7101 | >20%                    |                10 |              0.17101 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8805 | >20%                    |                10 |              0.18805 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9684 | 15-20%                  |                10 |              0.19684 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1587 | 10-15%                  |                10 |              0.21587 |