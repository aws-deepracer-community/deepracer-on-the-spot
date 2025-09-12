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

Data correct as of 2025-09-12 01:41:19.545540, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1044 | 5-10%                   |                 2 |              0.0522  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1587 | >20%                    |                 2 |              0.07935 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1643 | >20%                    |                 5 |              0.03286 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1727 | >20%                    |                 2 |              0.08635 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.173  | >20%                    |                 2 |              0.0865  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2065 | 10-15%                  |                 2 |              0.10325 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2227 | >20%                    |                 2 |              0.11135 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2297 | >20%                    |                 2 |              0.11485 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2473 | 10-15%                  |                 5 |              0.04946 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2516 | >20%                    |                 2 |              0.1258  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2632 | >20%                    |                 2 |              0.1316  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2737 | >20%                    |                 2 |              0.13685 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2978 | <5%                     |                10 |              0.02978 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2981 | >20%                    |                 2 |              0.14905 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | 15-20%                  |                 2 |              0.15025 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3113 | >20%                    |                 5 |              0.06226 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.315  | 10-15%                  |                 2 |              0.1575  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3171 | >20%                    |                 2 |              0.15855 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3203 | >20%                    |                 2 |              0.16015 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3204 | 5-10%                   |                 2 |              0.1602  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3228 | 5-10%                   |                 2 |              0.1614  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3366 | 15-20%                  |                 5 |              0.06732 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3475 | >20%                    |                 2 |              0.17375 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3609 | >20%                    |                 2 |              0.18045 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.363  | >20%                    |                 2 |              0.1815  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3652 | >20%                    |                 5 |              0.07304 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.368  | 10-15%                  |                 2 |              0.184   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3726 | 10-15%                  |                 5 |              0.07452 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3798 | >20%                    |                 5 |              0.07596 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3804 | 15-20%                  |                 2 |              0.1902  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3858 | >20%                    |                 2 |              0.1929  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3915 | >20%                    |                 2 |              0.19575 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4016 | 15-20%                  |                10 |              0.04016 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4026 | >20%                    |                 2 |              0.2013  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4055 | >20%                    |                 5 |              0.0811  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4083 | >20%                    |                10 |              0.04083 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4181 | >20%                    |                 5 |              0.08362 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4203 | >20%                    |                 5 |              0.08406 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4221 | >20%                    |                 2 |              0.21105 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4231 | >20%                    |                10 |              0.04231 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4235 | 15-20%                  |                 2 |              0.21175 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4285 | >20%                    |                 5 |              0.0857  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4375 | >20%                    |                 2 |              0.21875 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4378 | >20%                    |                 5 |              0.08756 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.451  | >20%                    |                 5 |              0.0902  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4517 | 10-15%                  |                 2 |              0.22585 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4525 | >20%                    |                 2 |              0.22625 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4528 | >20%                    |                 5 |              0.09056 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.453  | >20%                    |                 5 |              0.0906  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4602 | 10-15%                  |                 2 |              0.2301  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4607 | 15-20%                  |                 2 |              0.23035 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4634 | >20%                    |                10 |              0.04634 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.466  | >20%                    |                 2 |              0.233   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4694 | 5-10%                   |                 2 |              0.2347  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4728 | >20%                    |                 5 |              0.09456 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4802 | <5%                     |                 2 |              0.2401  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4857 | >20%                    |                 2 |              0.24285 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4889 | >20%                    |                 5 |              0.09778 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4959 | >20%                    |                 5 |              0.09918 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5056 | >20%                    |                 2 |              0.2528  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5058 | 15-20%                  |                 2 |              0.2529  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5074 | >20%                    |                 2 |              0.2537  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5101 | 5-10%                   |                 5 |              0.10202 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5115 | 10-15%                  |                 2 |              0.25575 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5119 | >20%                    |                 5 |              0.10238 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.512  | >20%                    |                 5 |              0.1024  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.522  | >20%                    |                 2 |              0.261   |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5239 | >20%                    |                 2 |              0.26195 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5253 | >20%                    |                 2 |              0.26265 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5331 | 5-10%                   |                 2 |              0.26655 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5435 | >20%                    |                 5 |              0.1087  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5546 | >20%                    |                 2 |              0.2773  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5577 | >20%                    |                 5 |              0.11154 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5651 | 15-20%                  |                10 |              0.05651 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5776 | >20%                    |                 5 |              0.11552 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5844 | 10-15%                  |                 5 |              0.11688 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5846 | >20%                    |                 5 |              0.11692 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5849 | >20%                    |                 2 |              0.29245 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5868 | >20%                    |                 2 |              0.2934  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5952 | 15-20%                  |                 5 |              0.11904 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5996 | >20%                    |                 5 |              0.11992 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6004 | >20%                    |                 5 |              0.12008 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6021 | >20%                    |                 5 |              0.12042 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6125 | 10-15%                  |                 5 |              0.1225  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6314 | 5-10%                   |                10 |              0.06314 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.641  | 15-20%                  |                 2 |              0.3205  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6433 | <5%                     |                 2 |              0.32165 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6441 | >20%                    |                 5 |              0.12882 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6445 | >20%                    |                 5 |              0.1289  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6533 | >20%                    |                 5 |              0.13066 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6557 | 10-15%                  |                 2 |              0.32785 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6575 | 15-20%                  |                 5 |              0.1315  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6592 | 15-20%                  |                 5 |              0.13184 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6629 | 15-20%                  |                 5 |              0.13258 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6709 | >20%                    |                 2 |              0.33545 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6717 | >20%                    |                 5 |              0.13434 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6764 | >20%                    |                 2 |              0.3382  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6814 | 15-20%                  |                10 |              0.06814 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6853 | >20%                    |                 5 |              0.13706 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.692  | >20%                    |                 5 |              0.1384  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7042 | >20%                    |                 5 |              0.14084 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7047 | >20%                    |                 5 |              0.14094 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7083 | >20%                    |                 5 |              0.14166 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.714  | >20%                    |                 5 |              0.1428  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7285 | >20%                    |                 5 |              0.1457  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7354 | >20%                    |                10 |              0.07354 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.736  | >20%                    |                10 |              0.0736  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7533 | >20%                    |                10 |              0.07533 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7595 | >20%                    |                 5 |              0.1519  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7619 | >20%                    |                10 |              0.07619 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7743 | >20%                    |                10 |              0.07743 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7881 | >20%                    |                 5 |              0.15762 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7912 | >20%                    |                10 |              0.07912 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8074 | 15-20%                  |                10 |              0.08074 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8087 | >20%                    |                 5 |              0.16174 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8345 | 10-15%                  |                 2 |              0.41725 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8374 | 10-15%                  |                10 |              0.08374 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8421 | 15-20%                  |                10 |              0.08421 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8592 | 10-15%                  |                10 |              0.08592 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.861  | <5%                     |                10 |              0.0861  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8671 | >20%                    |                10 |              0.08671 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8957 | 15-20%                  |                10 |              0.08957 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9035 | >20%                    |                 5 |              0.1807  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9058 | >20%                    |                 5 |              0.18116 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9099 | <5%                     |                10 |              0.09099 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9195 | >20%                    |                10 |              0.09195 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9302 | 15-20%                  |                10 |              0.09302 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9362 | 5-10%                   |                10 |              0.09362 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9454 | <5%                     |                10 |              0.09454 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9481 | 10-15%                  |                10 |              0.09481 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9501 | 10-15%                  |                10 |              0.09501 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9726 | >20%                    |                10 |              0.09726 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9776 | >20%                    |                 2 |              0.4888  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9862 | >20%                    |                 5 |              0.19724 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9869 | 15-20%                  |                10 |              0.09869 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9891 | 15-20%                  |                10 |              0.09891 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.997  | >20%                    |                10 |              0.0997  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0052 | >20%                    |                10 |              0.10052 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0445 | >20%                    |                10 |              0.10445 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0466 | 15-20%                  |                10 |              0.10466 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0517 | 5-10%                   |                10 |              0.10517 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0581 | >20%                    |                 2 |              0.52905 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0615 | 5-10%                   |                10 |              0.10615 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0651 | >20%                    |                10 |              0.10651 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0705 | 10-15%                  |                 5 |              0.2141  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1019 | 5-10%                   |                10 |              0.11019 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1173 | <5%                     |                10 |              0.11173 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1195 | >20%                    |                 2 |              0.55975 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1256 | 15-20%                  |                10 |              0.11256 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1312 | 10-15%                  |                 2 |              0.5656  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1412 | >20%                    |                10 |              0.11412 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.146  | >20%                    |                 5 |              0.2292  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1524 | >20%                    |                10 |              0.11524 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1551 | >20%                    |                 5 |              0.23102 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.163  | 15-20%                  |                10 |              0.1163  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1829 | >20%                    |                10 |              0.11829 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.259  | 5-10%                   |                 2 |              0.6295  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2667 | >20%                    |                10 |              0.12667 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2864 | >20%                    |                 5 |              0.25728 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3053 | >20%                    |                10 |              0.13053 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3301 | 10-15%                  |                10 |              0.13301 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3946 | 10-15%                  |                 5 |              0.27892 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.418  | 10-15%                  |                 5 |              0.2836  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4937 | >20%                    |                10 |              0.14937 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5555 | >20%                    |                10 |              0.15555 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.566  | >20%                    |                10 |              0.1566  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7048 | >20%                    |                10 |              0.17048 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8058 | >20%                    |                10 |              0.18058 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8362 | 15-20%                  |                10 |              0.18362 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2207 | 10-15%                  |                10 |              0.22207 |