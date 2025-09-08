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

Data correct as of 2025-09-08 01:49:42.696646, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1051 | >20%                    |                 2 |              0.05255 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1557 | >20%                    |                 2 |              0.07785 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1842 | >20%                    |                 2 |              0.0921  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1904 | >20%                    |                 5 |              0.03808 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2051 | >20%                    |                 2 |              0.10255 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.207  | >20%                    |                 2 |              0.1035  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2093 | >20%                    |                 2 |              0.10465 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2149 | 10-15%                  |                 2 |              0.10745 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2303 | >20%                    |                 2 |              0.11515 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2316 | >20%                    |                 5 |              0.04632 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2405 | 10-15%                  |                 5 |              0.0481  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2462 | >20%                    |                 2 |              0.1231  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2591 | >20%                    |                 2 |              0.12955 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.267  | >20%                    |                 2 |              0.1335  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2673 | >20%                    |                 5 |              0.05346 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2955 | 15-20%                  |                 2 |              0.14775 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3004 | 15-20%                  |                 5 |              0.06008 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3098 | >20%                    |                 2 |              0.1549  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3113 | >20%                    |                 2 |              0.15565 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | 5-10%                   |                 2 |              0.15735 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3195 | 10-15%                  |                 2 |              0.15975 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3226 | 5-10%                   |                 2 |              0.1613  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3344 | >20%                    |                 2 |              0.1672  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3477 | >20%                    |                 5 |              0.06954 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3527 | >20%                    |                 2 |              0.17635 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3539 | 5-10%                   |                10 |              0.03539 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.359  | >20%                    |                 2 |              0.1795  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3635 | >20%                    |                 2 |              0.18175 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3654 | 10-15%                  |                 5 |              0.07308 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3671 | >20%                    |                 2 |              0.18355 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3716 | >20%                    |                 5 |              0.07432 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.375  | 15-20%                  |                10 |              0.0375  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.378  | >20%                    |                10 |              0.0378  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3789 | >20%                    |                10 |              0.03789 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3793 | 15-20%                  |                 2 |              0.18965 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.38   | >20%                    |                 2 |              0.19    |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.382  | 10-15%                  |                 2 |              0.191   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3862 | >20%                    |                 2 |              0.1931  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3917 | 10-15%                  |                10 |              0.03917 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3951 | >20%                    |                 5 |              0.07902 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4184 | 15-20%                  |                 2 |              0.2092  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4211 | >20%                    |                 5 |              0.08422 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4212 | >20%                    |                 5 |              0.08424 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4215 | >20%                    |                 5 |              0.0843  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4221 | >20%                    |                 5 |              0.08442 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4222 | >20%                    |                 5 |              0.08444 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4281 | >20%                    |                10 |              0.04281 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4353 | >20%                    |                 2 |              0.21765 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4379 | >20%                    |                 2 |              0.21895 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4414 | >20%                    |                 5 |              0.08828 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4502 | 10-15%                  |                 2 |              0.2251  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4546 | 10-15%                  |                 2 |              0.2273  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4588 | 5-10%                   |                 2 |              0.2294  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4663 | >20%                    |                 2 |              0.23315 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4689 | <5%                     |                 2 |              0.23445 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4755 | 15-20%                  |                 2 |              0.23775 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4819 | >20%                    |                 2 |              0.24095 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4837 | 15-20%                  |                 2 |              0.24185 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4898 | 15-20%                  |                10 |              0.04898 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4912 | >20%                    |                 5 |              0.09824 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.492  | >20%                    |                 5 |              0.0984  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4939 | >20%                    |                 5 |              0.09878 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4961 | >20%                    |                10 |              0.04961 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.498  | >20%                    |                 5 |              0.0996  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5009 | >20%                    |                 2 |              0.25045 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5064 | 5-10%                   |                 5 |              0.10128 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5131 | >20%                    |                 5 |              0.10262 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5156 | >20%                    |                 5 |              0.10312 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5175 | >20%                    |                 2 |              0.25875 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5192 | 10-15%                  |                 2 |              0.2596  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5202 | >20%                    |                 2 |              0.2601  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5246 | >20%                    |                 2 |              0.2623  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5391 | <5%                     |                 2 |              0.26955 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.543  | >20%                    |                 2 |              0.2715  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5444 | 5-10%                   |                 2 |              0.2722  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5479 | >20%                    |                 2 |              0.27395 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5539 | >20%                    |                 5 |              0.11078 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5611 | >20%                    |                 5 |              0.11222 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5669 | >20%                    |                 2 |              0.28345 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5813 | >20%                    |                 2 |              0.29065 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5846 | 10-15%                  |                 5 |              0.11692 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.585  | >20%                    |                 5 |              0.117   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5869 | >20%                    |                 2 |              0.29345 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5923 | >20%                    |                 5 |              0.11846 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5964 | 10-15%                  |                 2 |              0.2982  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5972 | >20%                    |                 5 |              0.11944 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6001 | >20%                    |                 5 |              0.12002 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6023 | >20%                    |                 5 |              0.12046 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6048 | 15-20%                  |                 5 |              0.12096 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6167 | 15-20%                  |                 5 |              0.12334 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.623  | 10-15%                  |                 5 |              0.1246  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6306 | >20%                    |                 5 |              0.12612 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6453 | 15-20%                  |                 2 |              0.32265 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6457 | >20%                    |                 5 |              0.12914 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6497 | 15-20%                  |                 5 |              0.12994 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6588 | 5-10%                   |                10 |              0.06588 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6602 | >20%                    |                 5 |              0.13204 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6614 | >20%                    |                 2 |              0.3307  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6738 | 15-20%                  |                 5 |              0.13476 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.676  | 15-20%                  |                10 |              0.0676  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6765 | >20%                    |                 5 |              0.1353  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6838 | >20%                    |                 5 |              0.13676 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6856 | >20%                    |                 2 |              0.3428  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6977 | >20%                    |                 5 |              0.13954 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7156 | >20%                    |                 5 |              0.14312 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7248 | >20%                    |                 5 |              0.14496 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7252 | >20%                    |                10 |              0.07252 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7317 | >20%                    |                 5 |              0.14634 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7342 | >20%                    |                10 |              0.07342 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.736  | >20%                    |                 5 |              0.1472  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7469 | >20%                    |                 5 |              0.14938 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7501 | >20%                    |                10 |              0.07501 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7533 | >20%                    |                10 |              0.07533 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7592 | >20%                    |                 5 |              0.15184 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7613 | >20%                    |                10 |              0.07613 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7679 | >20%                    |                 5 |              0.15358 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7735 | >20%                    |                10 |              0.07735 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7899 | >20%                    |                 5 |              0.15798 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8041 | 15-20%                  |                10 |              0.08041 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8044 | 15-20%                  |                10 |              0.08044 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.814  | >20%                    |                 5 |              0.1628  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8307 | 10-15%                  |                10 |              0.08307 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8349 | >20%                    |                10 |              0.08349 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8373 | 10-15%                  |                 2 |              0.41865 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8487 | <5%                     |                10 |              0.08487 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8543 | 10-15%                  |                10 |              0.08543 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8663 | 10-15%                  |                10 |              0.08663 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8969 | <5%                     |                10 |              0.08969 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9076 | >20%                    |                10 |              0.09076 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.929  | 5-10%                   |                10 |              0.0929  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9316 | 15-20%                  |                10 |              0.09316 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9417 | <5%                     |                10 |              0.09417 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9488 | 15-20%                  |                10 |              0.09488 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9538 | 5-10%                   |                10 |              0.09538 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9617 | 10-15%                  |                10 |              0.09617 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9623 | >20%                    |                10 |              0.09623 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9859 | >20%                    |                 2 |              0.49295 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9902 | >20%                    |                 5 |              0.19804 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.994  | >20%                    |                10 |              0.0994  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0036 | 15-20%                  |                10 |              0.10036 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0166 | 15-20%                  |                10 |              0.10166 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0245 | >20%                    |                 5 |              0.2049  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0251 | 5-10%                   |                10 |              0.10251 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.027  | >20%                    |                10 |              0.1027  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0287 | 15-20%                  |                10 |              0.10287 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.033  | >20%                    |                10 |              0.1033  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0659 | >20%                    |                 2 |              0.53295 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0849 | <5%                     |                10 |              0.10849 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.1078 | >20%                    |                10 |              0.11078 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1099 | >20%                    |                10 |              0.11099 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1135 | 10-15%                  |                 5 |              0.2227  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1158 | >20%                    |                10 |              0.11158 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1215 | 15-20%                  |                10 |              0.11215 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1268 | >20%                    |                 5 |              0.22536 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1429 | 10-15%                  |                 2 |              0.57145 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1461 | 5-10%                   |                10 |              0.11461 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1586 | >20%                    |                10 |              0.11586 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1591 | >20%                    |                 2 |              0.57955 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1633 | 15-20%                  |                10 |              0.11633 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1741 | >20%                    |                10 |              0.11741 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2086 | >20%                    |                 5 |              0.24172 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3005 | 5-10%                   |                 2 |              0.65025 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3218 | >20%                    |                 5 |              0.26436 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3503 | 10-15%                  |                10 |              0.13503 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3757 | 10-15%                  |                 5 |              0.27514 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4183 | >20%                    |                10 |              0.14183 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.436  | 10-15%                  |                 5 |              0.2872  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4457 | >20%                    |                10 |              0.14457 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5629 | >20%                    |                10 |              0.15629 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5771 | >20%                    |                10 |              0.15771 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5814 | >20%                    |                10 |              0.15814 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6214 | >20%                    |                10 |              0.16214 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7102 | 15-20%                  |                10 |              0.17102 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2636 | 10-15%                  |                10 |              0.22636 |