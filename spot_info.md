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

Data correct as of 2025-09-22 01:52:26.323491, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1627 | >20%                    |                 2 |              0.08135 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1679 | >20%                    |                 2 |              0.08395 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1713 | 5-10%                   |                 2 |              0.08565 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1732 | >20%                    |                 2 |              0.0866  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1806 | >20%                    |                 5 |              0.03612 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1872 | 10-15%                  |                 2 |              0.0936  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2224 | 10-15%                  |                 5 |              0.04448 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2366 | >20%                    |                 2 |              0.1183  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2501 | >20%                    |                 2 |              0.12505 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2516 | >20%                    |                 5 |              0.05032 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2626 | >20%                    |                 2 |              0.1313  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2929 | >20%                    |                 2 |              0.14645 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3035 | 10-15%                  |                 2 |              0.15175 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3042 | >20%                    |                 2 |              0.1521  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3071 | 5-10%                   |                 2 |              0.15355 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.317  | >20%                    |                10 |              0.0317  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3173 | 15-20%                  |                 2 |              0.15865 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3198 | <5%                     |                10 |              0.03198 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3253 | >20%                    |                 2 |              0.16265 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3269 | 15-20%                  |                 2 |              0.16345 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3319 | 5-10%                   |                 2 |              0.16595 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3326 | >20%                    |                 2 |              0.1663  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3354 | <5%                     |                10 |              0.03354 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.338  | 10-15%                  |                 2 |              0.169   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.35   | >20%                    |                 2 |              0.175   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3614 | >20%                    |                 2 |              0.1807  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3627 | >20%                    |                 5 |              0.07254 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3666 | >20%                    |                 2 |              0.1833  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3697 | >20%                    |                 2 |              0.18485 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3801 | >20%                    |                 5 |              0.07602 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3806 | >20%                    |                 5 |              0.07612 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3814 | >20%                    |                 5 |              0.07628 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3824 | >20%                    |                 2 |              0.1912  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3855 | >20%                    |                10 |              0.03855 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3889 | >20%                    |                 2 |              0.19445 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3922 | 10-15%                  |                 5 |              0.07844 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4015 | >20%                    |                 2 |              0.20075 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4155 | >20%                    |                 2 |              0.20775 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4163 | >20%                    |                 5 |              0.08326 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4247 | 15-20%                  |                 5 |              0.08494 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4249 | >20%                    |                 5 |              0.08498 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4252 | >20%                    |                 5 |              0.08504 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4263 | >20%                    |                 5 |              0.08526 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4309 | 15-20%                  |                 2 |              0.21545 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4337 | >20%                    |                10 |              0.04337 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4357 | 15-20%                  |                10 |              0.04357 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.439  | 15-20%                  |                 2 |              0.2195  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.442  | >20%                    |                 2 |              0.221   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4429 | >20%                    |                 2 |              0.22145 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4445 | 5-10%                   |                 2 |              0.22225 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4583 | >20%                    |                 2 |              0.22915 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.464  | >20%                    |                 5 |              0.0928  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4684 | >20%                    |                 2 |              0.2342  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4698 | 10-15%                  |                 2 |              0.2349  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4737 | <5%                     |                 2 |              0.23685 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4787 | 10-15%                  |                 2 |              0.23935 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4836 | >20%                    |                 5 |              0.09672 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4867 | >20%                    |                 5 |              0.09734 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5091 | >20%                    |                 5 |              0.10182 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5108 | >20%                    |                 5 |              0.10216 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5126 | 5-10%                   |                 5 |              0.10252 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5132 | >20%                    |                 2 |              0.2566  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5143 | >20%                    |                 5 |              0.10286 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5166 | >20%                    |                 5 |              0.10332 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5175 | >20%                    |                 2 |              0.25875 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5234 | >20%                    |                 2 |              0.2617  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5294 | 10-15%                  |                 2 |              0.2647  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5298 | >20%                    |                 5 |              0.10596 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5345 | 5-10%                   |                 2 |              0.26725 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5347 | >20%                    |                 2 |              0.26735 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5449 | >20%                    |                 5 |              0.10898 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5493 | >20%                    |                 2 |              0.27465 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5528 | >20%                    |                 2 |              0.2764  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5537 | >20%                    |                 5 |              0.11074 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5663 | >20%                    |                 5 |              0.11326 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5697 | >20%                    |                 5 |              0.11394 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5752 | 15-20%                  |                 2 |              0.2876  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5867 | 5-10%                   |                10 |              0.05867 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5892 | >20%                    |                 2 |              0.2946  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5903 | >20%                    |                 5 |              0.11806 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5947 | >20%                    |                 2 |              0.29735 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6033 | >20%                    |                10 |              0.06033 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.607  | >20%                    |                 5 |              0.1214  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6125 | 10-15%                  |                 5 |              0.1225  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6222 | >20%                    |                 5 |              0.12444 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6233 | 10-15%                  |                 5 |              0.12466 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.635  | 15-20%                  |                 5 |              0.127   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6416 | >20%                    |                 5 |              0.12832 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6532 | 15-20%                  |                10 |              0.06532 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6585 | 15-20%                  |                 2 |              0.32925 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6592 | >20%                    |                 5 |              0.13184 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6631 | >20%                    |                 5 |              0.13262 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6692 | 15-20%                  |                 5 |              0.13384 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6755 | >20%                    |                 5 |              0.1351  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6818 | >20%                    |                 5 |              0.13636 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6866 | >20%                    |                 5 |              0.13732 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6887 | >20%                    |                 2 |              0.34435 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6923 | >20%                    |                 5 |              0.13846 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6927 | 15-20%                  |                10 |              0.06927 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6979 | >20%                    |                 5 |              0.13958 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7007 | >20%                    |                 5 |              0.14014 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7015 | >20%                    |                 2 |              0.35075 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7051 | >20%                    |                 5 |              0.14102 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7051 | >20%                    |                10 |              0.07051 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7211 | >20%                    |                 5 |              0.14422 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.724  | 15-20%                  |                10 |              0.0724  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.729  | >20%                    |                10 |              0.0729  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7328 | >20%                    |                10 |              0.07328 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7385 | >20%                    |                10 |              0.07385 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7554 | 10-15%                  |                 2 |              0.3777  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7599 | >20%                    |                10 |              0.07599 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7741 | 15-20%                  |                 5 |              0.15482 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.776  | >20%                    |                10 |              0.0776  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.803  | 15-20%                  |                 5 |              0.1606  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8052 | >20%                    |                 5 |              0.16104 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8089 | 10-15%                  |                 2 |              0.40445 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8139 | >20%                    |                 5 |              0.16278 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8425 | >20%                    |                 5 |              0.1685  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8458 | <5%                     |                10 |              0.08458 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8546 | 15-20%                  |                10 |              0.08546 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8693 | 10-15%                  |                10 |              0.08693 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8729 | >20%                    |                10 |              0.08729 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8749 | >20%                    |                 5 |              0.17498 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8863 | >20%                    |                 5 |              0.17726 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8907 | 15-20%                  |                10 |              0.08907 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9007 | 15-20%                  |                10 |              0.09007 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9022 | >20%                    |                10 |              0.09022 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9079 | 10-15%                  |                10 |              0.09079 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9105 | <5%                     |                10 |              0.09105 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.912  | 5-10%                   |                10 |              0.0912  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9275 | >20%                    |                10 |              0.09275 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9381 | >20%                    |                10 |              0.09381 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9465 | 15-20%                  |                10 |              0.09465 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9657 | 10-15%                  |                10 |              0.09657 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9681 | 15-20%                  |                10 |              0.09681 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9751 | <5%                     |                10 |              0.09751 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9976 | >20%                    |                10 |              0.09976 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.001  | 10-15%                  |                 5 |              0.2002  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0031 | >20%                    |                 2 |              0.50155 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0045 | 15-20%                  |                10 |              0.10045 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0055 | >20%                    |                10 |              0.10055 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0542 | >20%                    |                 5 |              0.21084 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0614 | 5-10%                   |                10 |              0.10614 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.0636 | <5%                     |                 2 |              0.5318  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0809 | >20%                    |                 2 |              0.54045 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0831 | >20%                    |                 2 |              0.54155 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0854 | 5-10%                   |                10 |              0.10854 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1052 | >20%                    |                 5 |              0.22104 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1056 | <5%                     |                10 |              0.11056 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1093 | 15-20%                  |                10 |              0.11093 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1124 | 10-15%                  |                10 |              0.11124 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1168 | 5-10%                   |                10 |              0.11168 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1183 | >20%                    |                10 |              0.11183 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1326 | 10-15%                  |                 2 |              0.5663  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1407 | >20%                    |                10 |              0.11407 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1663 | >20%                    |                10 |              0.11663 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1718 | >20%                    |                10 |              0.11718 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1796 | >20%                    |                 5 |              0.23592 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.225  | >20%                    |                 5 |              0.245   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2376 | 15-20%                  |                10 |              0.12376 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2598 | 5-10%                   |                 2 |              0.6299  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2946 | >20%                    |                10 |              0.12946 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3238 | 10-15%                  |                 5 |              0.26476 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.341  | 10-15%                  |                10 |              0.1341  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4245 | >20%                    |                10 |              0.14245 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5318 | >20%                    |                10 |              0.15318 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6052 | >20%                    |                10 |              0.16052 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6095 | 10-15%                  |                 5 |              0.3219  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7486 | >20%                    |                10 |              0.17486 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8208 | >20%                    |                10 |              0.18208 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.043  | >20%                    |                10 |              0.2043  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0935 | 15-20%                  |                10 |              0.20935 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1428 | 10-15%                  |                10 |              0.21428 |