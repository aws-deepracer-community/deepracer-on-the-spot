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

Data correct as of 2025-09-09 01:46:00.766054, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.101  | >20%                    |                 2 |              0.0505  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1557 | >20%                    |                 2 |              0.07785 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1851 | >20%                    |                 5 |              0.03702 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1894 | >20%                    |                 2 |              0.0947  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1979 | >20%                    |                 2 |              0.09895 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2    | >20%                    |                 2 |              0.1     |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2129 | 10-15%                  |                 2 |              0.10645 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2299 | >20%                    |                 2 |              0.11495 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2342 | 10-15%                  |                 5 |              0.04684 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2536 | >20%                    |                 2 |              0.1268  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2554 | >20%                    |                 2 |              0.1277  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2657 | >20%                    |                 2 |              0.13285 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2726 | >20%                    |                 5 |              0.05452 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2959 | 15-20%                  |                 2 |              0.14795 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3098 | >20%                    |                 2 |              0.1549  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3113 | >20%                    |                 2 |              0.15565 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3142 | 15-20%                  |                 5 |              0.06284 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | 5-10%                   |                 2 |              0.15735 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3159 | 10-15%                  |                 2 |              0.15795 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3229 | 5-10%                   |                 2 |              0.16145 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3365 | >20%                    |                 2 |              0.16825 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3545 | >20%                    |                 2 |              0.17725 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3564 | >20%                    |                 5 |              0.07128 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3567 | 5-10%                   |                10 |              0.03567 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3604 | >20%                    |                 2 |              0.1802  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3614 | 10-15%                  |                 5 |              0.07228 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.363  | >20%                    |                 2 |              0.1815  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3712 | >20%                    |                 5 |              0.07424 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.373  | >20%                    |                 2 |              0.1865  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3797 | 10-15%                  |                 2 |              0.18985 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3804 | 15-20%                  |                10 |              0.03804 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3808 | 15-20%                  |                 2 |              0.1904  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.381  | >20%                    |                 2 |              0.1905  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3823 | 10-15%                  |                10 |              0.03823 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3866 | >20%                    |                10 |              0.03866 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3935 | >20%                    |                10 |              0.03935 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3937 | >20%                    |                 2 |              0.19685 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4017 | >20%                    |                 5 |              0.08034 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.417  | >20%                    |                10 |              0.0417  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4179 | >20%                    |                 5 |              0.08358 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4187 | >20%                    |                 5 |              0.08374 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4196 | 15-20%                  |                 2 |              0.2098  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4221 | >20%                    |                 5 |              0.08442 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4287 | >20%                    |                 5 |              0.08574 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4299 | >20%                    |                 5 |              0.08598 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4334 | >20%                    |                 2 |              0.2167  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4339 | >20%                    |                 2 |              0.21695 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4445 | >20%                    |                 5 |              0.0889  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4502 | 10-15%                  |                 2 |              0.2251  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4537 | 10-15%                  |                 2 |              0.22685 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4641 | >20%                    |                 2 |              0.23205 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4666 | 5-10%                   |                 2 |              0.2333  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4701 | <5%                     |                 2 |              0.23505 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4715 | 15-20%                  |                 2 |              0.23575 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4763 | >20%                    |                 2 |              0.23815 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4766 | >20%                    |                10 |              0.04766 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.487  | >20%                    |                 5 |              0.0974  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.488  | >20%                    |                 5 |              0.0976  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4906 | 15-20%                  |                 2 |              0.2453  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4908 | >20%                    |                 5 |              0.09816 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4973 | >20%                    |                 5 |              0.09946 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5009 | >20%                    |                 2 |              0.25045 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5098 | 5-10%                   |                 5 |              0.10196 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5125 | 15-20%                  |                10 |              0.05125 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5127 | >20%                    |                 5 |              0.10254 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5135 | >20%                    |                 2 |              0.25675 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5166 | 10-15%                  |                 2 |              0.2583  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.518  | >20%                    |                 2 |              0.259   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5184 | >20%                    |                 5 |              0.10368 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.524  | >20%                    |                 2 |              0.262   |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5352 | >20%                    |                 2 |              0.2676  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5356 | >20%                    |                 2 |              0.2678  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5369 | 5-10%                   |                 2 |              0.26845 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5515 | >20%                    |                 5 |              0.1103  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5544 | <5%                     |                 2 |              0.2772  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5604 | >20%                    |                 5 |              0.11208 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5688 | >20%                    |                 2 |              0.2844  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5782 | >20%                    |                 2 |              0.2891  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5818 | >20%                    |                 5 |              0.11636 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5872 | >20%                    |                 5 |              0.11744 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5947 | 10-15%                  |                 5 |              0.11894 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5962 | >20%                    |                 5 |              0.11924 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5975 | >20%                    |                 5 |              0.1195  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5977 | >20%                    |                 2 |              0.29885 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6014 | >20%                    |                 5 |              0.12028 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6086 | 15-20%                  |                 5 |              0.12172 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6133 | 10-15%                  |                 2 |              0.30665 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6249 | 10-15%                  |                 5 |              0.12498 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6254 | 15-20%                  |                 5 |              0.12508 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6361 | >20%                    |                 5 |              0.12722 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6434 | >20%                    |                 5 |              0.12868 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6453 | 15-20%                  |                 2 |              0.32265 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6505 | 15-20%                  |                 5 |              0.1301  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.657  | 5-10%                   |                10 |              0.0657  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.658  | >20%                    |                 5 |              0.1316  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6611 | 15-20%                  |                 5 |              0.13222 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6644 | >20%                    |                 2 |              0.3322  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6734 | >20%                    |                 5 |              0.13468 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6742 | 15-20%                  |                10 |              0.06742 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6859 | >20%                    |                 5 |              0.13718 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.688  | >20%                    |                 2 |              0.344   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6901 | >20%                    |                 5 |              0.13802 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7033 | >20%                    |                 5 |              0.14066 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7161 | >20%                    |                 5 |              0.14322 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7212 | >20%                    |                 5 |              0.14424 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7252 | >20%                    |                10 |              0.07252 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7342 | >20%                    |                10 |              0.07342 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7365 | >20%                    |                 5 |              0.1473  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.745  | >20%                    |                 5 |              0.149   |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7479 | >20%                    |                 5 |              0.14958 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7509 | >20%                    |                10 |              0.07509 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7519 | >20%                    |                10 |              0.07519 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7693 | >20%                    |                10 |              0.07693 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7711 | >20%                    |                10 |              0.07711 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7828 | >20%                    |                 5 |              0.15656 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8    | 15-20%                  |                10 |              0.08    |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8116 | 15-20%                  |                10 |              0.08116 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.822  | >20%                    |                 5 |              0.1644  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8341 | 10-15%                  |                 2 |              0.41705 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8383 | >20%                    |                 5 |              0.16766 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8425 | >20%                    |                10 |              0.08425 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.846  | 10-15%                  |                10 |              0.0846  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8503 | <5%                     |                10 |              0.08503 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8543 | 10-15%                  |                10 |              0.08543 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8857 | 10-15%                  |                10 |              0.08857 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8969 | <5%                     |                10 |              0.08969 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.934  | >20%                    |                 5 |              0.1868  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9361 | 5-10%                   |                10 |              0.09361 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9365 | 15-20%                  |                10 |              0.09365 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9449 | <5%                     |                10 |              0.09449 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9474 | 15-20%                  |                10 |              0.09474 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9566 | >20%                    |                10 |              0.09566 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9582 | 10-15%                  |                10 |              0.09582 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9637 | >20%                    |                10 |              0.09637 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9917 | 15-20%                  |                10 |              0.09917 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9922 | 5-10%                   |                10 |              0.09922 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0094 | >20%                    |                10 |              0.10094 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0112 | 15-20%                  |                10 |              0.10112 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.017  | >20%                    |                 2 |              0.5085  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0248 | 5-10%                   |                10 |              0.10248 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0271 | >20%                    |                10 |              0.10271 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0351 | >20%                    |                10 |              0.10351 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0413 | 15-20%                  |                10 |              0.10413 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0478 | >20%                    |                 2 |              0.5239  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0617 | >20%                    |                 5 |              0.21234 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0858 | <5%                     |                10 |              0.10858 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0881 | 10-15%                  |                 5 |              0.21762 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0984 | >20%                    |                10 |              0.10984 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1187 | 15-20%                  |                10 |              0.11187 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1199 | >20%                    |                10 |              0.11199 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1218 | >20%                    |                 2 |              0.5609  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1262 | 5-10%                   |                10 |              0.11262 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1383 | 10-15%                  |                 2 |              0.56915 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1385 | >20%                    |                 5 |              0.2277  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1615 | >20%                    |                10 |              0.11615 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1755 | 15-20%                  |                10 |              0.11755 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1757 | >20%                    |                10 |              0.11757 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1936 | >20%                    |                10 |              0.11936 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2057 | >20%                    |                 5 |              0.24114 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2987 | 5-10%                   |                 2 |              0.64935 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2989 | >20%                    |                 5 |              0.25978 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3447 | 10-15%                  |                10 |              0.13447 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3791 | 10-15%                  |                 5 |              0.27582 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.385  | >20%                    |                10 |              0.1385  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4335 | 10-15%                  |                 5 |              0.2867  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4566 | >20%                    |                10 |              0.14566 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.547  | >20%                    |                10 |              0.1547  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5691 | >20%                    |                10 |              0.15691 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6334 | >20%                    |                10 |              0.16334 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6456 | >20%                    |                10 |              0.16456 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7461 | 15-20%                  |                10 |              0.17461 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.267  | 10-15%                  |                10 |              0.2267  |