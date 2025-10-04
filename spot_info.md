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

Data correct as of 2025-10-04 01:39:01.690891, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1914 | >20%                    |                 2 |              0.0957  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1999 | >20%                    |                 2 |              0.09995 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2105 | 10-15%                  |                 2 |              0.10525 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2113 | 10-15%                  |                 5 |              0.04226 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2358 | >20%                    |                 2 |              0.1179  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2439 | 5-10%                   |                 2 |              0.12195 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2444 | >20%                    |                 2 |              0.1222  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2643 | >20%                    |                 5 |              0.05286 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2669 | >20%                    |                 2 |              0.13345 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2684 | >20%                    |                 2 |              0.1342  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2873 | >20%                    |                 5 |              0.05746 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2905 | >20%                    |                 2 |              0.14525 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2919 | 10-15%                  |                 2 |              0.14595 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2921 | >20%                    |                 2 |              0.14605 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3027 | 5-10%                   |                 2 |              0.15135 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3228 | 10-15%                  |                 2 |              0.1614  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3268 | 15-20%                  |                 2 |              0.1634  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3338 | >20%                    |                 2 |              0.1669  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3339 | >20%                    |                 2 |              0.16695 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3469 | 15-20%                  |                 2 |              0.17345 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3472 | >20%                    |                10 |              0.03472 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3522 | >20%                    |                 2 |              0.1761  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3598 | 15-20%                  |                 2 |              0.1799  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.36   | >20%                    |                 5 |              0.072   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3631 | >20%                    |                 2 |              0.18155 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3645 | >20%                    |                 2 |              0.18225 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3656 | >20%                    |                 2 |              0.1828  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.373  | >20%                    |                 5 |              0.0746  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3854 | >20%                    |                 2 |              0.1927  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3895 | >20%                    |                 2 |              0.19475 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.396  | >20%                    |                 5 |              0.0792  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3966 | >20%                    |                10 |              0.03966 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3985 | 5-10%                   |                 2 |              0.19925 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4006 | >20%                    |                 2 |              0.2003  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4033 | >20%                    |                 5 |              0.08066 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.405  | >20%                    |                 2 |              0.2025  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4064 | >20%                    |                 5 |              0.08128 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4182 | >20%                    |                 5 |              0.08364 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4205 | 5-10%                   |                 2 |              0.21025 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4299 | 10-15%                  |                 5 |              0.08598 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4312 | <5%                     |                 2 |              0.2156  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4312 | >20%                    |                 2 |              0.2156  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4325 | 15-20%                  |                 2 |              0.21625 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.433  | >20%                    |                 2 |              0.2165  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4369 | >20%                    |                 5 |              0.08738 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4455 | >20%                    |                 2 |              0.22275 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4488 | >20%                    |                 5 |              0.08976 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4544 | 15-20%                  |                 5 |              0.09088 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4549 | 10-15%                  |                 2 |              0.22745 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4692 | >20%                    |                 5 |              0.09384 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4842 | 10-15%                  |                 2 |              0.2421  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4891 | >20%                    |                10 |              0.04891 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4922 | >20%                    |                 5 |              0.09844 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4945 | >20%                    |                 2 |              0.24725 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5025 | >20%                    |                 5 |              0.1005  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5031 | >20%                    |                 2 |              0.25155 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5087 | >20%                    |                 2 |              0.25435 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5136 | 5-10%                   |                 5 |              0.10272 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5168 | >20%                    |                 5 |              0.10336 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5209 | >20%                    |                 2 |              0.26045 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5282 | >20%                    |                 2 |              0.2641  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5296 | >20%                    |                 5 |              0.10592 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5297 | <5%                     |                10 |              0.05297 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.531  | >20%                    |                 5 |              0.1062  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5336 | 5-10%                   |                 2 |              0.2668  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5348 | >20%                    |                 5 |              0.10696 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5426 | 10-15%                  |                 2 |              0.2713  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5494 | >20%                    |                 5 |              0.10988 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.556  | >20%                    |                 2 |              0.278   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5625 | >20%                    |                10 |              0.05625 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5733 | >20%                    |                 5 |              0.11466 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5758 | 15-20%                  |                 2 |              0.2879  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5787 | 15-20%                  |                10 |              0.05787 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5836 | >20%                    |                 5 |              0.11672 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5898 | >20%                    |                 5 |              0.11796 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5905 | >20%                    |                 2 |              0.29525 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6097 | >20%                    |                 2 |              0.30485 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6179 | >20%                    |                 5 |              0.12358 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6194 | >20%                    |                 5 |              0.12388 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6197 | >20%                    |                 5 |              0.12394 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6205 | 10-15%                  |                 5 |              0.1241  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.625  | 10-15%                  |                 5 |              0.125   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.627  | >20%                    |                 2 |              0.3135  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6284 | 15-20%                  |                 5 |              0.12568 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6372 | >20%                    |                 5 |              0.12744 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6463 | >20%                    |                 5 |              0.12926 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6513 | 15-20%                  |                 2 |              0.32565 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6611 | >20%                    |                 5 |              0.13222 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6666 | >20%                    |                 5 |              0.13332 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6678 | >20%                    |                10 |              0.06678 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6695 | >20%                    |                 5 |              0.1339  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6722 | >20%                    |                 5 |              0.13444 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6733 | >20%                    |                 5 |              0.13466 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6785 | >20%                    |                 5 |              0.1357  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6802 | 15-20%                  |                10 |              0.06802 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6897 | >20%                    |                10 |              0.06897 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6903 | >20%                    |                 5 |              0.13806 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6918 | >20%                    |                 5 |              0.13836 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6944 | 5-10%                   |                10 |              0.06944 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6968 | >20%                    |                 5 |              0.13936 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7051 | >20%                    |                 2 |              0.35255 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7068 | 15-20%                  |                 5 |              0.14136 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7085 | 15-20%                  |                10 |              0.07085 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7101 | 15-20%                  |                10 |              0.07101 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7177 | 15-20%                  |                 5 |              0.14354 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7299 | >20%                    |                 2 |              0.36495 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7387 | 10-15%                  |                 2 |              0.36935 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7432 | 15-20%                  |                10 |              0.07432 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7518 | >20%                    |                10 |              0.07518 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7604 | >20%                    |                10 |              0.07604 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7688 | >20%                    |                 5 |              0.15376 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7737 | >20%                    |                 5 |              0.15474 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7906 | >20%                    |                10 |              0.07906 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8099 | >20%                    |                 5 |              0.16198 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8236 | >20%                    |                10 |              0.08236 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8265 | 15-20%                  |                 5 |              0.1653  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8272 | >20%                    |                 5 |              0.16544 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8289 | >20%                    |                10 |              0.08289 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8311 | >20%                    |                10 |              0.08311 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8343 | <5%                     |                10 |              0.08343 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8421 | 15-20%                  |                10 |              0.08421 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8625 | >20%                    |                 5 |              0.1725  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8686 | 10-15%                  |                 2 |              0.4343  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8695 | 10-15%                  |                 5 |              0.1739  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8703 | >20%                    |                10 |              0.08703 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8848 | >20%                    |                10 |              0.08848 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8884 | 15-20%                  |                10 |              0.08884 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8941 | <5%                     |                10 |              0.08941 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.897  | 15-20%                  |                10 |              0.0897  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8999 | 10-15%                  |                10 |              0.08999 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9077 | 10-15%                  |                10 |              0.09077 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.909  | <5%                     |                10 |              0.0909  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.929  | 5-10%                   |                10 |              0.0929  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9384 | >20%                    |                10 |              0.09384 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9756 | 15-20%                  |                10 |              0.09756 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9877 | >20%                    |                10 |              0.09877 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9892 | 15-20%                  |                10 |              0.09892 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9922 | 10-15%                  |                10 |              0.09922 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0042 | >20%                    |                 2 |              0.5021  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0098 | >20%                    |                 5 |              0.20196 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0108 | >20%                    |                 2 |              0.5054  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0127 | 5-10%                   |                10 |              0.10127 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0355 | >20%                    |                 2 |              0.51775 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0593 | >20%                    |                 5 |              0.21186 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0699 | 10-15%                  |                 2 |              0.53495 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0769 | >20%                    |                10 |              0.10769 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0817 | >20%                    |                10 |              0.10817 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0868 | >20%                    |                 5 |              0.21736 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0891 | >20%                    |                10 |              0.10891 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0915 | 15-20%                  |                10 |              0.10915 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1128 | >20%                    |                 5 |              0.22256 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1224 | 5-10%                   |                10 |              0.11224 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1311 | <5%                     |                10 |              0.11311 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1328 | 5-10%                   |                10 |              0.11328 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1354 | >20%                    |                10 |              0.11354 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1546 | >20%                    |                 5 |              0.23092 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1755 | 10-15%                  |                10 |              0.11755 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2262 | 15-20%                  |                10 |              0.12262 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2734 | 5-10%                   |                 2 |              0.6367  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2739 | >20%                    |                10 |              0.12739 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2905 | 10-15%                  |                10 |              0.12905 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2922 | >20%                    |                10 |              0.12922 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3606 | 10-15%                  |                 5 |              0.27212 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.514  | >20%                    |                10 |              0.1514  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5878 | >20%                    |                10 |              0.15878 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.628  | 10-15%                  |                 5 |              0.3256  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6481 | >20%                    |                10 |              0.16481 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7174 | >20%                    |                10 |              0.17174 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0427 | 10-15%                  |                10 |              0.20427 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2453 | 15-20%                  |                10 |              0.22453 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      3.0028 | >20%                    |                10 |              0.30028 |