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

Data correct as of 2025-10-14 01:44:42.995281, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1851 | >20%                    |                 5 |              0.03702 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.221  | >20%                    |                 2 |              0.1105  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2215 | 10-15%                  |                 2 |              0.11075 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2283 | >20%                    |                 2 |              0.11415 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2375 | >20%                    |                 2 |              0.11875 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2502 | >20%                    |                 2 |              0.1251  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.254  | 5-10%                   |                 2 |              0.127   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2554 | >20%                    |                 2 |              0.1277  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2578 | 5-10%                   |                 2 |              0.1289  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2598 | >20%                    |                 2 |              0.1299  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2662 | 10-15%                  |                 2 |              0.1331  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.2818 | >20%                    |                 5 |              0.05636 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2921 | >20%                    |                 2 |              0.14605 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3002 | >20%                    |                 2 |              0.1501  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3105 | 15-20%                  |                 2 |              0.15525 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3279 | >20%                    |                 5 |              0.06558 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3288 | 10-15%                  |                 2 |              0.1644  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3306 | >20%                    |                 2 |              0.1653  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.335  | 15-20%                  |                 2 |              0.1675  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3436 | >20%                    |                 2 |              0.1718  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3527 | >20%                    |                10 |              0.03527 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3527 | 5-10%                   |                10 |              0.03527 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3544 | >20%                    |                 2 |              0.1772  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3564 | >20%                    |                 2 |              0.1782  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3628 | 15-20%                  |                 2 |              0.1814  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3651 | >20%                    |                 2 |              0.18255 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.378  | >20%                    |                 5 |              0.0756  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3785 | 15-20%                  |                 2 |              0.18925 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3799 | >20%                    |                 5 |              0.07598 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3829 | >20%                    |                 2 |              0.19145 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3872 | >20%                    |                 2 |              0.1936  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3912 | >20%                    |                 5 |              0.07824 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3955 | >20%                    |                 2 |              0.19775 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3963 | >20%                    |                 2 |              0.19815 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4069 | >20%                    |                 5 |              0.08138 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4071 | 5-10%                   |                 5 |              0.08142 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4149 | 5-10%                   |                 2 |              0.20745 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4166 | >20%                    |                10 |              0.04166 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4178 | >20%                    |                 2 |              0.2089  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4282 | >20%                    |                 2 |              0.2141  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4288 | 5-10%                   |                 2 |              0.2144  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4335 | >20%                    |                 5 |              0.0867  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4348 | >20%                    |                 2 |              0.2174  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4411 | >20%                    |                 5 |              0.08822 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4448 | >20%                    |                 2 |              0.2224  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4451 | >20%                    |                 2 |              0.22255 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4519 | >20%                    |                 5 |              0.09038 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.455  | >20%                    |                 5 |              0.091   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4555 | >20%                    |                 5 |              0.0911  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4566 | >20%                    |                 2 |              0.2283  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4602 | 15-20%                  |                 5 |              0.09204 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4616 | <5%                     |                 2 |              0.2308  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4672 | 10-15%                  |                 5 |              0.09344 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4689 | 10-15%                  |                 2 |              0.23445 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4768 | >20%                    |                 5 |              0.09536 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4809 | >20%                    |                 2 |              0.24045 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4877 | 10-15%                  |                 2 |              0.24385 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4911 | >20%                    |                 2 |              0.24555 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.506  | >20%                    |                 5 |              0.1012  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5124 | >20%                    |                 5 |              0.10248 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5147 | >20%                    |                 2 |              0.25735 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5388 | >20%                    |                 5 |              0.10776 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5406 | >20%                    |                 5 |              0.10812 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5537 | >20%                    |                 5 |              0.11074 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5563 | 5-10%                   |                 2 |              0.27815 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5564 | >20%                    |                 5 |              0.11128 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5647 | >20%                    |                 5 |              0.11294 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5706 | >20%                    |                 2 |              0.2853  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5712 | >20%                    |                 2 |              0.2856  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5869 | >20%                    |                 5 |              0.11738 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5869 | >20%                    |                 5 |              0.11738 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5886 | 10-15%                  |                 2 |              0.2943  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5891 | >20%                    |                 5 |              0.11782 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6105 | >20%                    |                 5 |              0.1221  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6132 | 15-20%                  |                 2 |              0.3066  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6149 | >20%                    |                 5 |              0.12298 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6156 | >20%                    |                 5 |              0.12312 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6238 | 10-15%                  |                 5 |              0.12476 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6282 | >20%                    |                 5 |              0.12564 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6342 | >20%                    |                 5 |              0.12684 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.638  | >20%                    |                 2 |              0.319   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6382 | 15-20%                  |                 5 |              0.12764 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6383 | >20%                    |                 5 |              0.12766 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6426 | 10-15%                  |                 5 |              0.12852 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6429 | >20%                    |                10 |              0.06429 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6465 | >20%                    |                10 |              0.06465 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6507 | 15-20%                  |                 2 |              0.32535 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6512 | >20%                    |                 2 |              0.3256  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6552 | 15-20%                  |                 5 |              0.13104 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6574 | 15-20%                  |                10 |              0.06574 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6643 | >20%                    |                 5 |              0.13286 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6686 | >20%                    |                 5 |              0.13372 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6723 | >20%                    |                 5 |              0.13446 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6763 | 15-20%                  |                10 |              0.06763 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6847 | <5%                     |                10 |              0.06847 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6901 | <5%                     |                10 |              0.06901 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6939 | >20%                    |                 2 |              0.34695 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7001 | >20%                    |                10 |              0.07001 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7014 | 15-20%                  |                 5 |              0.14028 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.703  | 15-20%                  |                10 |              0.0703  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7137 | >20%                    |                 5 |              0.14274 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7264 | >20%                    |                10 |              0.07264 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7273 | >20%                    |                 5 |              0.14546 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7287 | 15-20%                  |                10 |              0.07287 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7298 | 15-20%                  |                10 |              0.07298 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7302 | >20%                    |                 5 |              0.14604 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7374 | >20%                    |                10 |              0.07374 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7428 | >20%                    |                 5 |              0.14856 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.749  | >20%                    |                 5 |              0.1498  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7625 | >20%                    |                10 |              0.07625 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.791  | 15-20%                  |                10 |              0.0791  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7968 | >20%                    |                 5 |              0.15936 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8003 | >20%                    |                10 |              0.08003 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8049 | 10-15%                  |                 2 |              0.40245 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8077 | >20%                    |                 2 |              0.40385 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8083 | >20%                    |                10 |              0.08083 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8123 | 5-10%                   |                10 |              0.08123 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8136 | 15-20%                  |                10 |              0.08136 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8138 | >20%                    |                 5 |              0.16276 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8192 | 10-15%                  |                 2 |              0.4096  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8196 | >20%                    |                10 |              0.08196 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8298 | >20%                    |                 5 |              0.16596 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8363 | 15-20%                  |                 5 |              0.16726 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8438 | >20%                    |                10 |              0.08438 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8492 | >20%                    |                10 |              0.08492 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8546 | 10-15%                  |                 5 |              0.17092 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8553 | >20%                    |                 5 |              0.17106 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8689 | 15-20%                  |                10 |              0.08689 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8876 | >20%                    |                 5 |              0.17752 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9147 | 10-15%                  |                10 |              0.09147 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.915  | <5%                     |                10 |              0.0915  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.92   | <5%                     |                10 |              0.092   |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9322 | >20%                    |                10 |              0.09322 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9334 | 15-20%                  |                10 |              0.09334 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9342 | >20%                    |                 2 |              0.4671  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9533 | 10-15%                  |                10 |              0.09533 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9779 | 5-10%                   |                10 |              0.09779 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9789 | >20%                    |                10 |              0.09789 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9813 | >20%                    |                 2 |              0.49065 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9944 | 15-20%                  |                10 |              0.09944 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9962 | 5-10%                   |                10 |              0.09962 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.011  | >20%                    |                 2 |              0.5055  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0221 | 15-20%                  |                10 |              0.10221 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0229 | 10-15%                  |                10 |              0.10229 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0558 | >20%                    |                 5 |              0.21116 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0749 | >20%                    |                10 |              0.10749 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0874 | >20%                    |                 5 |              0.21748 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0944 | >20%                    |                10 |              0.10944 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0984 | 15-20%                  |                10 |              0.10984 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0992 | >20%                    |                10 |              0.10992 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1059 | >20%                    |                10 |              0.11059 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1064 | 10-15%                  |                 2 |              0.5532  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.108  | <5%                     |                10 |              0.1108  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1155 | >20%                    |                 5 |              0.2231  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1284 | 10-15%                  |                10 |              0.11284 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.135  | >20%                    |                10 |              0.1135  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1555 | >20%                    |                 5 |              0.2311  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.19   | 5-10%                   |                10 |              0.119   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1988 | 5-10%                   |                10 |              0.11988 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2312 | >20%                    |                10 |              0.12312 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.253  | 5-10%                   |                 2 |              0.6265  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2604 | 10-15%                  |                10 |              0.12604 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2716 | >20%                    |                10 |              0.12716 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2736 | >20%                    |                10 |              0.12736 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3934 | 10-15%                  |                 5 |              0.27868 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5303 | >20%                    |                10 |              0.15303 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6484 | 10-15%                  |                 5 |              0.32968 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6869 | >20%                    |                10 |              0.16869 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6896 | >20%                    |                10 |              0.16896 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1117 | 10-15%                  |                10 |              0.21117 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.2735 | >20%                    |                10 |              0.22735 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3266 | 15-20%                  |                10 |              0.23266 |