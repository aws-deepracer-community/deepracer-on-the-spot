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

Data correct as of 2024-11-12 08:03:30.547672, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1558 | >20%                    |                 5 |              0.03116 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1697 | 5-10%                   |                 2 |              0.08485 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1766 | 10-15%                  |                 2 |              0.0883  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2109 | 10-15%                  |                 2 |              0.10545 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2125 | >20%                    |                 2 |              0.10625 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2211 | 5-10%                   |                 2 |              0.11055 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 10-15%                  |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 5-10%                   |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2423 | 5-10%                   |                 2 |              0.12115 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2467 | <5%                     |                 2 |              0.12335 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.2596 | 5-10%                   |                 2 |              0.1298  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.265  | 5-10%                   |                 2 |              0.1325  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2715 | 5-10%                   |                 2 |              0.13575 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2772 | >20%                    |                 5 |              0.05544 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2782 | <5%                     |                 2 |              0.1391  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2807 | 5-10%                   |                 2 |              0.14035 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.282  | <5%                     |                 2 |              0.141   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | 5-10%                   |                 5 |              0.06008 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3071 | >20%                    |                 2 |              0.15355 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.318  | <5%                     |                 5 |              0.0636  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3182 | <5%                     |                 2 |              0.1591  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3304 | 10-15%                  |                 2 |              0.1652  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3382 | 5-10%                   |                 2 |              0.1691  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.3451 | 10-15%                  |                 5 |              0.06902 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3475 | 15-20%                  |                 2 |              0.17375 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3568 | <5%                     |                 2 |              0.1784  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3595 | >20%                    |                 2 |              0.17975 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3617 | <5%                     |                 2 |              0.18085 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3737 | 5-10%                   |                 5 |              0.07474 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.379  | 5-10%                   |                 2 |              0.1895  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3829 | >20%                    |                 5 |              0.07658 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3833 | <5%                     |                 2 |              0.19165 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3844 | 5-10%                   |                 5 |              0.07688 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3857 | >20%                    |                 2 |              0.19285 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4054 | >20%                    |                 2 |              0.2027  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4096 | >20%                    |                 2 |              0.2048  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4119 | <5%                     |                 2 |              0.20595 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4271 | 5-10%                   |                 2 |              0.21355 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4277 | 10-15%                  |                 2 |              0.21385 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4326 | <5%                     |                 5 |              0.08652 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4373 | 5-10%                   |                 2 |              0.21865 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4375 | 10-15%                  |                 5 |              0.0875  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4393 | <5%                     |                 5 |              0.08786 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4408 | 10-15%                  |                 5 |              0.08816 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.441  | 10-15%                  |                 2 |              0.2205  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4511 | 5-10%                   |                 5 |              0.09022 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4599 | 15-20%                  |                 2 |              0.22995 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4634 | 15-20%                  |                 5 |              0.09268 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4636 | >20%                    |                 2 |              0.2318  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4661 | 5-10%                   |                 5 |              0.09322 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4669 | 5-10%                   |                 5 |              0.09338 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.469  | >20%                    |                 5 |              0.0938  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4696 | >20%                    |                 5 |              0.09392 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4804 | <5%                     |                 2 |              0.2402  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4846 | 5-10%                   |                 5 |              0.09692 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4859 | <5%                     |                 2 |              0.24295 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4864 | 15-20%                  |                 5 |              0.09728 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4898 | 10-15%                  |                 5 |              0.09796 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5203 | 5-10%                   |                 2 |              0.26015 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5215 | <5%                     |                 5 |              0.1043  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5216 | >20%                    |                10 |              0.05216 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5248 | >20%                    |                 5 |              0.10496 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5271 | <5%                     |                 5 |              0.10542 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.53   | 10-15%                  |                 2 |              0.265   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5355 | <5%                     |                 5 |              0.1071  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5373 | 15-20%                  |                10 |              0.05373 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.544  | >20%                    |                 5 |              0.1088  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5464 | 5-10%                   |                 5 |              0.10928 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5465 | 5-10%                   |                 5 |              0.1093  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5486 | 15-20%                  |                 2 |              0.2743  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5685 | 10-15%                  |                10 |              0.05685 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5701 | >20%                    |                 5 |              0.11402 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5708 | >20%                    |                 5 |              0.11416 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5712 | >20%                    |                 5 |              0.11424 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5726 | 15-20%                  |                 5 |              0.11452 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5731 | 15-20%                  |                 2 |              0.28655 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5758 | 10-15%                  |                 5 |              0.11516 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.58   | 10-15%                  |                10 |              0.058   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5876 | <5%                     |                 2 |              0.2938  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5959 | <5%                     |                 5 |              0.11918 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5975 | >20%                    |                10 |              0.05975 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.605  | 5-10%                   |                10 |              0.0605  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6054 | <5%                     |                10 |              0.06054 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6469 | 5-10%                   |                10 |              0.06469 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6668 | 15-20%                  |                 5 |              0.13336 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6767 | >20%                    |                 5 |              0.13534 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6794 | >20%                    |                 2 |              0.3397  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6851 | >20%                    |                10 |              0.06851 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6927 | 5-10%                   |                 5 |              0.13854 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7121 | 5-10%                   |                 5 |              0.14242 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7179 | >20%                    |                10 |              0.07179 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7208 | 5-10%                   |                10 |              0.07208 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7236 | 5-10%                   |                10 |              0.07236 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7362 | >20%                    |                10 |              0.07362 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7446 | 15-20%                  |                 5 |              0.14892 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7456 | <5%                     |                10 |              0.07456 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7476 | 15-20%                  |                10 |              0.07476 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7884 | 10-15%                  |                10 |              0.07884 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7903 | 5-10%                   |                 5 |              0.15806 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8008 | 10-15%                  |                10 |              0.08008 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8012 | >20%                    |                10 |              0.08012 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8037 | <5%                     |                10 |              0.08037 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.818  | 10-15%                  |                10 |              0.0818  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8275 | >20%                    |                10 |              0.08275 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8282 | 15-20%                  |                10 |              0.08282 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8361 | <5%                     |                 5 |              0.16722 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8378 | 15-20%                  |                10 |              0.08378 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8426 | 5-10%                   |                10 |              0.08426 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8444 | <5%                     |                 2 |              0.4222  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8503 | 5-10%                   |                10 |              0.08503 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8717 | 5-10%                   |                10 |              0.08717 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8717 | >20%                    |                 5 |              0.17434 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8929 | >20%                    |                10 |              0.08929 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.959  | <5%                     |                10 |              0.0959  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9621 | <5%                     |                10 |              0.09621 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9918 | 10-15%                  |                10 |              0.09918 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.005  | <5%                     |                10 |              0.1005  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0098 | 10-15%                  |                10 |              0.10098 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0453 | >20%                    |                10 |              0.10453 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0656 | <5%                     |                10 |              0.10656 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0713 | <5%                     |                10 |              0.10713 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0754 | >20%                    |                10 |              0.10754 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.13   | 15-20%                  |                10 |              0.113   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1362 | 15-20%                  |                10 |              0.11362 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3925 | >20%                    |                10 |              0.13925 |