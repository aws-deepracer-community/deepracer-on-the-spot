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

Data correct as of 2025-08-16 01:53:35.740293, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1002 | 5-10%                   |                 2 |              0.0501  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1672 | >20%                    |                 5 |              0.03344 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1924 | >20%                    |                 2 |              0.0962  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1987 | 10-15%                  |                 5 |              0.03974 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2073 | 10-15%                  |                 2 |              0.10365 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2225 | >20%                    |                 2 |              0.11125 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2258 | >20%                    |                 5 |              0.04516 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2462 | >20%                    |                 2 |              0.1231  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2474 | >20%                    |                 2 |              0.1237  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2579 | >20%                    |                 2 |              0.12895 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2787 | >20%                    |                 2 |              0.13935 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.298  | >20%                    |                 2 |              0.149   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3051 | >20%                    |                 2 |              0.15255 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3109 | 5-10%                   |                 2 |              0.15545 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3138 | 10-15%                  |                 2 |              0.1569  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.316  | 10-15%                  |                 2 |              0.158   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.325  | 10-15%                  |                 2 |              0.1625  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3334 | >20%                    |                 2 |              0.1667  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3337 | >20%                    |                 2 |              0.16685 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.348  | 5-10%                   |                10 |              0.0348  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3487 | >20%                    |                 2 |              0.17435 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.357  | >20%                    |                 2 |              0.1785  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3583 | >20%                    |                 2 |              0.17915 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3592 | >20%                    |                 2 |              0.1796  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3646 | >20%                    |                 2 |              0.1823  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3654 | >20%                    |                 5 |              0.07308 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3766 | >20%                    |                 2 |              0.1883  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3834 | >20%                    |                 2 |              0.1917  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3836 | >20%                    |                 5 |              0.07672 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3995 | >20%                    |                 5 |              0.0799  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4049 | >20%                    |                 5 |              0.08098 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.419  | >20%                    |                 5 |              0.0838  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4222 | >20%                    |                 5 |              0.08444 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4277 | 10-15%                  |                 2 |              0.21385 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4287 | >20%                    |                 5 |              0.08574 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4307 | >20%                    |                 5 |              0.08614 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4331 | >20%                    |                 5 |              0.08662 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.445  | >20%                    |                 5 |              0.089   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4463 | >20%                    |                 2 |              0.22315 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4583 | 10-15%                  |                 2 |              0.22915 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4607 | 10-15%                  |                 2 |              0.23035 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.465  | >20%                    |                 2 |              0.2325  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4664 | >20%                    |                 2 |              0.2332  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.467  | 15-20%                  |                 2 |              0.2335  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4691 | 15-20%                  |                 2 |              0.23455 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4703 | >20%                    |                 2 |              0.23515 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4709 | >20%                    |                 2 |              0.23545 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4739 | >20%                    |                 5 |              0.09478 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4762 | 5-10%                   |                 2 |              0.2381  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4792 | >20%                    |                 5 |              0.09584 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4824 | <5%                     |                 2 |              0.2412  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4941 | 5-10%                   |                 5 |              0.09882 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4942 | >20%                    |                 2 |              0.2471  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5008 | >20%                    |                 2 |              0.2504  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5033 | >20%                    |                 5 |              0.10066 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5054 | 15-20%                  |                 5 |              0.10108 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5077 | >20%                    |                 2 |              0.25385 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5307 | 15-20%                  |                 5 |              0.10614 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5319 | >20%                    |                 2 |              0.26595 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.538  | >20%                    |                 5 |              0.1076  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5421 | >20%                    |                 5 |              0.10842 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.544  | >20%                    |                 2 |              0.272   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5444 | 15-20%                  |                 5 |              0.10888 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5489 | >20%                    |                 2 |              0.27445 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5633 | >20%                    |                 2 |              0.28165 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.565  | >20%                    |                 2 |              0.2825  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5692 | >20%                    |                 5 |              0.11384 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5769 | >20%                    |                 5 |              0.11538 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.577  | >20%                    |                10 |              0.0577  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5847 | 10-15%                  |                10 |              0.05847 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5918 | >20%                    |                 5 |              0.11836 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.594  | 10-15%                  |                 2 |              0.297   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5965 | >20%                    |                 5 |              0.1193  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5967 | 10-15%                  |                 2 |              0.29835 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6006 | >20%                    |                 5 |              0.12012 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6197 | >20%                    |                 2 |              0.30985 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6237 | >20%                    |                 5 |              0.12474 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6273 | 15-20%                  |                 5 |              0.12546 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6302 | 15-20%                  |                 5 |              0.12604 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6319 | 10-15%                  |                 5 |              0.12638 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6362 | >20%                    |                 2 |              0.3181  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6423 | 10-15%                  |                 5 |              0.12846 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6435 | 15-20%                  |                 5 |              0.1287  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6499 | >20%                    |                 5 |              0.12998 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.653  | 15-20%                  |                 5 |              0.1306  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6631 | 15-20%                  |                 5 |              0.13262 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6646 | 15-20%                  |                 2 |              0.3323  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6655 | 15-20%                  |                 5 |              0.1331  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6664 | >20%                    |                 5 |              0.13328 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6739 | 5-10%                   |                10 |              0.06739 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.679  | 15-20%                  |                 2 |              0.3395  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6912 | >20%                    |                 5 |              0.13824 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6928 | 15-20%                  |                10 |              0.06928 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6971 | 10-15%                  |                10 |              0.06971 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6987 | >20%                    |                 5 |              0.13974 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7097 | >20%                    |                10 |              0.07097 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7158 | <5%                     |                 2 |              0.3579  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7195 | >20%                    |                10 |              0.07195 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7236 | >20%                    |                10 |              0.07236 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7274 | >20%                    |                 5 |              0.14548 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7288 | >20%                    |                10 |              0.07288 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7293 | 15-20%                  |                 5 |              0.14586 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7397 | 10-15%                  |                10 |              0.07397 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.751  | 5-10%                   |                 2 |              0.3755  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7672 | >20%                    |                10 |              0.07672 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7774 | >20%                    |                10 |              0.07774 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7804 | >20%                    |                 5 |              0.15608 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.784  | 5-10%                   |                 5 |              0.1568  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7864 | >20%                    |                10 |              0.07864 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8117 | >20%                    |                 5 |              0.16234 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8265 | 15-20%                  |                 5 |              0.1653  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8281 | >20%                    |                 5 |              0.16562 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8335 | >20%                    |                10 |              0.08335 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8338 | >20%                    |                10 |              0.08338 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8557 | >20%                    |                10 |              0.08557 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8743 | >20%                    |                 2 |              0.43715 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8794 | <5%                     |                10 |              0.08794 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8832 | <5%                     |                10 |              0.08832 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8864 | >20%                    |                 5 |              0.17728 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8918 | 5-10%                   |                10 |              0.08918 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8923 | >20%                    |                10 |              0.08923 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8961 | >20%                    |                 5 |              0.17922 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9056 | 5-10%                   |                10 |              0.09056 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9163 | 10-15%                  |                10 |              0.09163 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9336 | 5-10%                   |                10 |              0.09336 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9387 | 10-15%                  |                10 |              0.09387 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9449 | 10-15%                  |                10 |              0.09449 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.948  | >20%                    |                 5 |              0.1896  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9492 | >20%                    |                 2 |              0.4746  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9508 | 5-10%                   |                10 |              0.09508 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9508 | >20%                    |                10 |              0.09508 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9532 | 15-20%                  |                10 |              0.09532 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9935 | <5%                     |                10 |              0.09935 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0037 | >20%                    |                10 |              0.10037 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.006  | 5-10%                   |                10 |              0.1006  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0151 | 10-15%                  |                10 |              0.10151 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0157 | 15-20%                  |                10 |              0.10157 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0313 | 15-20%                  |                10 |              0.10313 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0418 | >20%                    |                10 |              0.10418 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0984 | >20%                    |                10 |              0.10984 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0999 | <5%                     |                10 |              0.10999 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1052 | >20%                    |                10 |              0.11052 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1125 | >20%                    |                10 |              0.11125 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1244 | 10-15%                  |                10 |              0.11244 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1267 | >20%                    |                 5 |              0.22534 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1429 | >20%                    |                10 |              0.11429 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1685 | >20%                    |                10 |              0.11685 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1753 | <5%                     |                 2 |              0.58765 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1882 | >20%                    |                 2 |              0.5941  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1931 | >20%                    |                10 |              0.11931 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1976 | 15-20%                  |                10 |              0.11976 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2035 | >20%                    |                 5 |              0.2407  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.204  | >20%                    |                 2 |              0.602   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2571 | >20%                    |                 5 |              0.25142 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2579 | 5-10%                   |                 5 |              0.25158 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3412 | >20%                    |                10 |              0.13412 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3764 | >20%                    |                 5 |              0.27528 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.4014 | 15-20%                  |                 2 |              0.7007  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4577 | >20%                    |                10 |              0.14577 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4636 | >20%                    |                10 |              0.14636 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4834 | 15-20%                  |                 5 |              0.29668 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5058 | >20%                    |                10 |              0.15058 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5171 | 5-10%                   |                 5 |              0.30342 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5369 | >20%                    |                10 |              0.15369 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5778 | >20%                    |                10 |              0.15778 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6313 | >20%                    |                10 |              0.16313 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1765 | 10-15%                  |                10 |              0.21765 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2049 | 10-15%                  |                10 |              0.22049 |