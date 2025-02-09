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

Data correct as of 2025-02-09 01:40:58.783234, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1367 | >20%                    |                 2 |              0.06835 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.1901 | 10-15%                  |                 2 |              0.09505 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.209  | <5%                     |                 5 |              0.0418  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2179 | 5-10%                   |                 2 |              0.10895 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2212 | >20%                    |                 2 |              0.1106  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2266 | 15-20%                  |                 2 |              0.1133  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2312 | 15-20%                  |                 2 |              0.1156  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2371 | 15-20%                  |                 2 |              0.11855 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.242  | 5-10%                   |                 2 |              0.121   |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2468 | <5%                     |                 2 |              0.1234  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | 10-15%                  |                 2 |              0.1255  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2586 | >20%                    |                 2 |              0.1293  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2723 | <5%                     |                 2 |              0.13615 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2866 | <5%                     |                 2 |              0.1433  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2917 | <5%                     |                 5 |              0.05834 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2958 | 10-15%                  |                 2 |              0.1479  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2963 | 5-10%                   |                 2 |              0.14815 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.298  | <5%                     |                 2 |              0.149   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2996 | 5-10%                   |                 2 |              0.1498  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2999 | 10-15%                  |                 2 |              0.14995 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3027 | 10-15%                  |                 2 |              0.15135 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3136 | <5%                     |                 2 |              0.1568  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3286 | <5%                     |                 2 |              0.1643  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3286 | 15-20%                  |                 2 |              0.1643  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3363 | >20%                    |                 5 |              0.06726 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3371 | >20%                    |                 2 |              0.16855 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.338  | 10-15%                  |                 2 |              0.169   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3437 | <5%                     |                10 |              0.03437 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3478 | 15-20%                  |                 5 |              0.06956 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3516 | 10-15%                  |                 2 |              0.1758  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3523 | 10-15%                  |                 5 |              0.07046 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3635 | 10-15%                  |                 2 |              0.18175 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3641 | <5%                     |                 2 |              0.18205 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3719 | 10-15%                  |                 2 |              0.18595 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3742 | <5%                     |                 2 |              0.1871  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3751 | <5%                     |                 5 |              0.07502 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3842 | 15-20%                  |                 5 |              0.07684 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3899 | >20%                    |                 2 |              0.19495 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3922 | <5%                     |                 5 |              0.07844 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3927 | <5%                     |                10 |              0.03927 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3942 | 5-10%                   |                 2 |              0.1971  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3953 | 5-10%                   |                 5 |              0.07906 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3965 | 10-15%                  |                10 |              0.03965 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4    | 10-15%                  |                 5 |              0.08    |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4034 | 10-15%                  |                 2 |              0.2017  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4089 | 5-10%                   |                 2 |              0.20445 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4304 | >20%                    |                 5 |              0.08608 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4332 | >20%                    |                 5 |              0.08664 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4359 | <5%                     |                 2 |              0.21795 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4522 | >20%                    |                 5 |              0.09044 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4584 | <5%                     |                 2 |              0.2292  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4682 | >20%                    |                 5 |              0.09364 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4747 | <5%                     |                 5 |              0.09494 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4749 | <5%                     |                 2 |              0.23745 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4768 | >20%                    |                 2 |              0.2384  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4784 | >20%                    |                 5 |              0.09568 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.483  | <5%                     |                 5 |              0.0966  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4845 | >20%                    |                 5 |              0.0969  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4888 | >20%                    |                 5 |              0.09776 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4904 | 5-10%                   |                 5 |              0.09808 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4978 | >20%                    |                 2 |              0.2489  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5005 | 10-15%                  |                 5 |              0.1001  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5015 | 10-15%                  |                 5 |              0.1003  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5041 | >20%                    |                 2 |              0.25205 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5069 | <5%                     |                 5 |              0.10138 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5088 | <5%                     |                 5 |              0.10176 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5134 | <5%                     |                 2 |              0.2567  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5141 | 15-20%                  |                 5 |              0.10282 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5193 | >20%                    |                 2 |              0.25965 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5203 | 15-20%                  |                 2 |              0.26015 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5219 | >20%                    |                 2 |              0.26095 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5287 | >20%                    |                 5 |              0.10574 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5395 | >20%                    |                 2 |              0.26975 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5418 | <5%                     |                 5 |              0.10836 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5447 | 15-20%                  |                10 |              0.05447 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5465 | 15-20%                  |                 5 |              0.1093  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5493 | >20%                    |                10 |              0.05493 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.552  | 10-15%                  |                 5 |              0.1104  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5593 | <5%                     |                 5 |              0.11186 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5613 | 15-20%                  |                 2 |              0.28065 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5726 | >20%                    |                10 |              0.05726 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5727 | >20%                    |                 2 |              0.28635 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.573  | >20%                    |                 2 |              0.2865  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5752 | 5-10%                   |                 5 |              0.11504 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5752 | >20%                    |                 5 |              0.11504 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5782 | >20%                    |                 5 |              0.11564 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5813 | 5-10%                   |                10 |              0.05813 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5837 | 5-10%                   |                 5 |              0.11674 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5882 | 5-10%                   |                 5 |              0.11764 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5899 | 5-10%                   |                10 |              0.05899 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6076 | >20%                    |                 2 |              0.3038  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6114 | 5-10%                   |                10 |              0.06114 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6249 | 5-10%                   |                 5 |              0.12498 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.627  | <5%                     |                10 |              0.0627  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6304 | <5%                     |                 5 |              0.12608 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.6335 | >20%                    |                 2 |              0.31675 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6359 | 10-15%                  |                 5 |              0.12718 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6397 | >20%                    |                 5 |              0.12794 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6517 | 15-20%                  |                 5 |              0.13034 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6624 | >20%                    |                10 |              0.06624 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6678 | 10-15%                  |                 5 |              0.13356 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6757 | <5%                     |                10 |              0.06757 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6793 | >20%                    |                10 |              0.06793 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6794 | >20%                    |                 5 |              0.13588 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6856 | >20%                    |                 2 |              0.3428  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6947 | <5%                     |                10 |              0.06947 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7041 | >20%                    |                10 |              0.07041 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.713  | >20%                    |                10 |              0.0713  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7188 | 5-10%                   |                10 |              0.07188 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7297 | >20%                    |                 5 |              0.14594 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7336 | >20%                    |                 5 |              0.14672 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7413 | 15-20%                  |                10 |              0.07413 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7495 | <5%                     |                 5 |              0.1499  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7549 | >20%                    |                 5 |              0.15098 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7629 | >20%                    |                10 |              0.07629 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7653 | >20%                    |                 5 |              0.15306 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7672 | 5-10%                   |                 2 |              0.3836  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7719 | 15-20%                  |                10 |              0.07719 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.777  | >20%                    |                 5 |              0.1554  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7942 | 15-20%                  |                10 |              0.07942 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8027 | 10-15%                  |                10 |              0.08027 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8144 | <5%                     |                10 |              0.08144 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.8167 | <5%                     |                 5 |              0.16334 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8193 | >20%                    |                10 |              0.08193 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.83   | 15-20%                  |                10 |              0.083   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8325 | 15-20%                  |                10 |              0.08325 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8466 | >20%                    |                10 |              0.08466 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8487 | <5%                     |                10 |              0.08487 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8496 | 5-10%                   |                 2 |              0.4248  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8591 | >20%                    |                 2 |              0.42955 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8689 | >20%                    |                10 |              0.08689 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8706 | <5%                     |                10 |              0.08706 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8739 | 5-10%                   |                10 |              0.08739 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8812 | 10-15%                  |                10 |              0.08812 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8827 | 15-20%                  |                 5 |              0.17654 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8831 | 10-15%                  |                10 |              0.08831 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8842 | <5%                     |                10 |              0.08842 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8854 | <5%                     |                10 |              0.08854 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9007 | 10-15%                  |                10 |              0.09007 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9121 | <5%                     |                10 |              0.09121 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9163 | 10-15%                  |                10 |              0.09163 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9204 | <5%                     |                10 |              0.09204 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9263 | 15-20%                  |                 5 |              0.18526 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9416 | >20%                    |                10 |              0.09416 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.998  | >20%                    |                10 |              0.0998  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0211 | >20%                    |                 2 |              0.51055 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0234 | <5%                     |                10 |              0.10234 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0262 | >20%                    |                10 |              0.10262 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0459 | 15-20%                  |                 5 |              0.20918 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0505 | >20%                    |                 5 |              0.2101  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0768 | 15-20%                  |                10 |              0.10768 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1007 | >20%                    |                 2 |              0.55035 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1264 | >20%                    |                10 |              0.11264 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1394 | 5-10%                   |                10 |              0.11394 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1993 | 15-20%                  |                10 |              0.11993 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2108 | 15-20%                  |                 2 |              0.6054  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.212  | 10-15%                  |                10 |              0.1212  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2613 | 5-10%                   |                10 |              0.12613 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.275  | 15-20%                  |                 5 |              0.255   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.294  | >20%                    |                10 |              0.1294  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3203 | 15-20%                  |                10 |              0.13203 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3735 | 15-20%                  |                10 |              0.13735 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4004 | >20%                    |                10 |              0.14004 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0746 | 5-10%                   |                10 |              0.20746 |