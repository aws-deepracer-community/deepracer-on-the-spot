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

Data correct as of 2026-01-16 02:04:58.161119, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1317 | >20%                    |                 2 |              0.06585 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1529 | >20%                    |                 2 |              0.07645 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1562 | >20%                    |                 2 |              0.0781  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1766 | <5%                     |                 2 |              0.0883  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1884 | >20%                    |                 2 |              0.0942  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1904 | <5%                     |                 5 |              0.03808 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2001 | >20%                    |                 2 |              0.10005 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2239 | >20%                    |                 5 |              0.04478 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2277 | 15-20%                  |                 5 |              0.04554 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2389 | >20%                    |                 2 |              0.11945 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2543 | >20%                    |                 2 |              0.12715 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2698 | >20%                    |                 5 |              0.05396 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2766 | >20%                    |                 2 |              0.1383  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2819 | >20%                    |                 2 |              0.14095 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2828 | >20%                    |                 2 |              0.1414  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | >20%                    |                 2 |              0.14245 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | 15-20%                  |                 2 |              0.14245 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2869 | >20%                    |                 2 |              0.14345 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2878 | 5-10%                   |                10 |              0.02878 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2921 | >20%                    |                 5 |              0.05842 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2999 | >20%                    |                10 |              0.02999 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3064 | >20%                    |                 5 |              0.06128 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3089 | >20%                    |                 2 |              0.15445 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3113 | >20%                    |                 2 |              0.15565 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3178 | >20%                    |                 5 |              0.06356 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3195 | >20%                    |                 2 |              0.15975 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3375 | 5-10%                   |                10 |              0.03375 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3479 | 5-10%                   |                 2 |              0.17395 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3542 | 5-10%                   |                 5 |              0.07084 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3561 | 10-15%                  |                 2 |              0.17805 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3585 | 15-20%                  |                10 |              0.03585 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3593 | <5%                     |                 5 |              0.07186 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.363  | >20%                    |                 2 |              0.1815  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3786 | >20%                    |                 5 |              0.07572 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3791 | >20%                    |                 2 |              0.18955 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3799 | >20%                    |                 5 |              0.07598 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3868 | <5%                     |                 2 |              0.1934  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3886 | >20%                    |                 5 |              0.07772 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3909 | <5%                     |                 2 |              0.19545 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3912 | 5-10%                   |                 2 |              0.1956  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3977 | >20%                    |                 2 |              0.19885 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3981 | >20%                    |                10 |              0.03981 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3988 | >20%                    |                 2 |              0.1994  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4023 | 10-15%                  |                 2 |              0.20115 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4028 | >20%                    |                 5 |              0.08056 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4034 | >20%                    |                 2 |              0.2017  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.406  | >20%                    |                 5 |              0.0812  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4063 | >20%                    |                 2 |              0.20315 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4068 | >20%                    |                 5 |              0.08136 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4097 | >20%                    |                 5 |              0.08194 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4132 | >20%                    |                 2 |              0.2066  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4146 | >20%                    |                10 |              0.04146 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.415  | 15-20%                  |                10 |              0.0415  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4159 | >20%                    |                 5 |              0.08318 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4163 | >20%                    |                 2 |              0.20815 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4164 | >20%                    |                 5 |              0.08328 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4176 | >20%                    |                10 |              0.04176 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4206 | >20%                    |                 5 |              0.08412 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.425  | <5%                     |                10 |              0.0425  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4261 | >20%                    |                10 |              0.04261 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4295 | >20%                    |                 2 |              0.21475 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4318 | 15-20%                  |                 5 |              0.08636 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4336 | 10-15%                  |                 2 |              0.2168  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4386 | >20%                    |                10 |              0.04386 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4405 | >20%                    |                 5 |              0.0881  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4407 | >20%                    |                 2 |              0.22035 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4501 | >20%                    |                 2 |              0.22505 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4512 | >20%                    |                 5 |              0.09024 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4519 | >20%                    |                 2 |              0.22595 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4573 | >20%                    |                 2 |              0.22865 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.458  | <5%                     |                 2 |              0.229   |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4596 | <5%                     |                10 |              0.04596 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4648 | >20%                    |                10 |              0.04648 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4743 | >20%                    |                 5 |              0.09486 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4772 | >20%                    |                 5 |              0.09544 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4772 | >20%                    |                 2 |              0.2386  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4817 | >20%                    |                 2 |              0.24085 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4821 | 15-20%                  |                 2 |              0.24105 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4894 | >20%                    |                 2 |              0.2447  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4952 | <5%                     |                 5 |              0.09904 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4962 | >20%                    |                 5 |              0.09924 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5012 | >20%                    |                 5 |              0.10024 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5084 | 15-20%                  |                 2 |              0.2542  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5087 | >20%                    |                 5 |              0.10174 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.532  | >20%                    |                 2 |              0.266   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5344 | 15-20%                  |                 5 |              0.10688 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5346 | >20%                    |                 5 |              0.10692 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5358 | >20%                    |                 5 |              0.10716 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5447 | >20%                    |                 2 |              0.27235 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5566 | >20%                    |                 2 |              0.2783  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5571 | 5-10%                   |                 5 |              0.11142 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5648 | >20%                    |                 2 |              0.2824  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5667 | 10-15%                  |                 5 |              0.11334 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.567  | >20%                    |                 5 |              0.1134  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5697 | 15-20%                  |                 5 |              0.11394 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5817 | >20%                    |                 5 |              0.11634 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5873 | 15-20%                  |                 5 |              0.11746 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5895 | 15-20%                  |                10 |              0.05895 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5911 | >20%                    |                 2 |              0.29555 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5978 | 5-10%                   |                 5 |              0.11956 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.605  | >20%                    |                 5 |              0.121   |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6053 | <5%                     |                 2 |              0.30265 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6055 | >20%                    |                10 |              0.06055 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6274 | 10-15%                  |                 2 |              0.3137  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6337 | 5-10%                   |                 5 |              0.12674 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6407 | >20%                    |                10 |              0.06407 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6468 | >20%                    |                 5 |              0.12936 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6475 | 15-20%                  |                 5 |              0.1295  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6549 | 10-15%                  |                 5 |              0.13098 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6572 | 15-20%                  |                10 |              0.06572 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6677 | >20%                    |                 2 |              0.33385 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6853 | >20%                    |                 5 |              0.13706 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6891 | >20%                    |                10 |              0.06891 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6928 | >20%                    |                 2 |              0.3464  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6947 | >20%                    |                10 |              0.06947 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6985 | >20%                    |                 2 |              0.34925 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7078 |                         |                 2 |              0.3539  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7091 | >20%                    |                10 |              0.07091 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7193 | <5%                     |                 5 |              0.14386 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.724  | <5%                     |                10 |              0.0724  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7253 | >20%                    |                10 |              0.07253 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7326 | >20%                    |                 5 |              0.14652 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.736  | 15-20%                  |                 2 |              0.368   |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7507 | 5-10%                   |                10 |              0.07507 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7523 | 15-20%                  |                10 |              0.07523 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7578 | >20%                    |                10 |              0.07578 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.758  | 10-15%                  |                 5 |              0.1516  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7607 | >20%                    |                 5 |              0.15214 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7645 | 15-20%                  |                10 |              0.07645 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7696 | >20%                    |                10 |              0.07696 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7762 | >20%                    |                 5 |              0.15524 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7764 | >20%                    |                 2 |              0.3882  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7776 | >20%                    |                 2 |              0.3888  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7784 | >20%                    |                10 |              0.07784 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.7835 | 10-15%                  |                 5 |              0.1567  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7898 | 15-20%                  |                10 |              0.07898 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7906 | <5%                     |                10 |              0.07906 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7935 | <5%                     |                10 |              0.07935 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8016 | >20%                    |                10 |              0.08016 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8137 | 15-20%                  |                 5 |              0.16274 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.8212 | 10-15%                  |                10 |              0.08212 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.822  | >20%                    |                10 |              0.0822  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8537 | 10-15%                  |                 5 |              0.17074 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.864  | 15-20%                  |                10 |              0.0864  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8853 | >20%                    |                10 |              0.08853 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8871 | >20%                    |                10 |              0.08871 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9077 | >20%                    |                10 |              0.09077 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9281 | >20%                    |                10 |              0.09281 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.945  | >20%                    |                 5 |              0.189   |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9503 | >20%                    |                10 |              0.09503 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9577 | >20%                    |                10 |              0.09577 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9813 | >20%                    |                10 |              0.09813 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9938 | 15-20%                  |                10 |              0.09938 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0046 | 15-20%                  |                10 |              0.10046 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0046 | >20%                    |                 2 |              0.5023  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0142 | >20%                    |                 2 |              0.5071  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.024  | >20%                    |                 5 |              0.2048  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0409 | 15-20%                  |                10 |              0.10409 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0452 | >20%                    |                 5 |              0.20904 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0572 | >20%                    |                 2 |              0.5286  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.0845 | <5%                     |                10 |              0.10845 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0938 | >20%                    |                10 |              0.10938 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1035 | >20%                    |                 2 |              0.55175 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1044 | 10-15%                  |                10 |              0.11044 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1135 | >20%                    |                10 |              0.11135 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1414 | >20%                    |                 5 |              0.22828 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1498 | >20%                    |                 5 |              0.22996 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1743 | >20%                    |                10 |              0.11743 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2171 | >20%                    |                10 |              0.12171 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2269 | 15-20%                  |                10 |              0.12269 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2433 | >20%                    |                10 |              0.12433 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2536 | >20%                    |                 5 |              0.25072 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.26   | >20%                    |                 5 |              0.252   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3034 | >20%                    |                10 |              0.13034 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.3692 | 10-15%                  |                10 |              0.13692 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4314 |                         |                10 |              0.14314 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4413 | >20%                    |                 2 |              0.72065 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4486 | 10-15%                  |                 5 |              0.28972 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5127 | >20%                    |                10 |              0.15127 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5242 | >20%                    |                10 |              0.15242 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.5666 |                         |                 5 |              0.31332 |