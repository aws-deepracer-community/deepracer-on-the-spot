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

Data correct as of 2025-10-23 01:47:40.566398, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.118  | 5-10%                   |                 2 |              0.059   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.159  | 10-15%                  |                 2 |              0.0795  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1678 | >20%                    |                 5 |              0.03356 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.192  | 10-15%                  |                 5 |              0.0384  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1956 | >20%                    |                 2 |              0.0978  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.216  | >20%                    |                 2 |              0.108   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2242 | >20%                    |                 5 |              0.04484 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2438 | 10-15%                  |                 2 |              0.1219  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2463 | >20%                    |                 2 |              0.12315 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2526 | >20%                    |                 2 |              0.1263  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2555 | >20%                    |                 5 |              0.0511  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2592 | 5-10%                   |                 2 |              0.1296  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2609 | >20%                    |                 2 |              0.13045 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2619 | 10-15%                  |                 2 |              0.13095 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | >20%                    |                 2 |              0.13265 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2662 | >20%                    |                 2 |              0.1331  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2767 | 5-10%                   |                 2 |              0.13835 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.2776 | >20%                    |                 5 |              0.05552 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2855 | >20%                    |                 2 |              0.14275 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2932 | >20%                    |                 2 |              0.1466  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2941 | 15-20%                  |                 2 |              0.14705 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3307 | 5-10%                   |                10 |              0.03307 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3343 | >20%                    |                 2 |              0.16715 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3366 | >20%                    |                 2 |              0.1683  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3396 | >20%                    |                 2 |              0.1698  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.354  | >20%                    |                 2 |              0.177   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3597 | 10-15%                  |                 2 |              0.17985 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3611 | 15-20%                  |                 2 |              0.18055 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3636 | >20%                    |                 5 |              0.07272 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3729 | 15-20%                  |                 2 |              0.18645 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3748 | >20%                    |                 5 |              0.07496 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3815 | >20%                    |                10 |              0.03815 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3866 | >20%                    |                 2 |              0.1933  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3867 | >20%                    |                 2 |              0.19335 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3943 | >20%                    |                 2 |              0.19715 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4016 | >20%                    |                 2 |              0.2008  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4055 | >20%                    |                 2 |              0.20275 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4115 | >20%                    |                 2 |              0.20575 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4136 | 15-20%                  |                 2 |              0.2068  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4144 | >20%                    |                 5 |              0.08288 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.423  | >20%                    |                 5 |              0.0846  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4259 | 5-10%                   |                 2 |              0.21295 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4296 | 5-10%                   |                 5 |              0.08592 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4299 | >20%                    |                 2 |              0.21495 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4316 | <5%                     |                 2 |              0.2158  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4332 | >20%                    |                 5 |              0.08664 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4387 | >20%                    |                 5 |              0.08774 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4389 | <5%                     |                10 |              0.04389 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.441  | 5-10%                   |                 2 |              0.2205  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4422 | >20%                    |                 2 |              0.2211  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4471 | >20%                    |                 5 |              0.08942 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4527 | >20%                    |                 5 |              0.09054 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4566 | >20%                    |                 2 |              0.2283  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4582 | >20%                    |                 5 |              0.09164 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4604 | >20%                    |                10 |              0.04604 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4636 | >20%                    |                 5 |              0.09272 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4672 | >20%                    |                 2 |              0.2336  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4725 | >20%                    |                 5 |              0.0945  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.474  | 10-15%                  |                 2 |              0.237   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4768 | >20%                    |                 2 |              0.2384  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4805 | >20%                    |                 2 |              0.24025 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.483  | >20%                    |                 2 |              0.2415  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4884 | >20%                    |                 2 |              0.2442  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4906 | 15-20%                  |                 5 |              0.09812 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.493  | >20%                    |                 5 |              0.0986  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.495  | >20%                    |                 2 |              0.2475  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5159 | 15-20%                  |                10 |              0.05159 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5272 | >20%                    |                 5 |              0.10544 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5315 | >20%                    |                 5 |              0.1063  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5353 | 10-15%                  |                 5 |              0.10706 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5436 | >20%                    |                 5 |              0.10872 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5469 | >20%                    |                 5 |              0.10938 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5483 | >20%                    |                 2 |              0.27415 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5493 | 10-15%                  |                 2 |              0.27465 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5591 | 5-10%                   |                 2 |              0.27955 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5635 | 15-20%                  |                 5 |              0.1127  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5747 | >20%                    |                 5 |              0.11494 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5775 | >20%                    |                 5 |              0.1155  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5782 | >20%                    |                 5 |              0.11564 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5797 | >20%                    |                 5 |              0.11594 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5815 | >20%                    |                 5 |              0.1163  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5835 | >20%                    |                 5 |              0.1167  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5911 | >20%                    |                 5 |              0.11822 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5948 | 15-20%                  |                 2 |              0.2974  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.602  | >20%                    |                 5 |              0.1204  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6115 | >20%                    |                 2 |              0.30575 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6136 | 10-15%                  |                 5 |              0.12272 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.617  | >20%                    |                 5 |              0.1234  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.618  | >20%                    |                 5 |              0.1236  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6224 | >20%                    |                 5 |              0.12448 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6276 | >20%                    |                 2 |              0.3138  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6304 | 10-15%                  |                 5 |              0.12608 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6427 | >20%                    |                 5 |              0.12854 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6463 | 15-20%                  |                 2 |              0.32315 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6534 | 15-20%                  |                 5 |              0.13068 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6551 | 15-20%                  |                10 |              0.06551 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6558 | >20%                    |                 5 |              0.13116 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6638 | >20%                    |                 5 |              0.13276 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6676 | >20%                    |                10 |              0.06676 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6703 | >20%                    |                10 |              0.06703 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6739 | 15-20%                  |                10 |              0.06739 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6752 | >20%                    |                 5 |              0.13504 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6779 | >20%                    |                 2 |              0.33895 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6857 | >20%                    |                 5 |              0.13714 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7041 | >20%                    |                 5 |              0.14082 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7062 | 15-20%                  |                10 |              0.07062 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7065 | <5%                     |                10 |              0.07065 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7142 | >20%                    |                 5 |              0.14284 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.726  | 10-15%                  |                 2 |              0.363   |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7266 | 15-20%                  |                10 |              0.07266 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7289 | 15-20%                  |                 5 |              0.14578 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7393 | >20%                    |                10 |              0.07393 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.742  | >20%                    |                 2 |              0.371   |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7425 | >20%                    |                10 |              0.07425 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7756 | >20%                    |                10 |              0.07756 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7773 | >20%                    |                 5 |              0.15546 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7776 | >20%                    |                10 |              0.07776 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7809 | >20%                    |                10 |              0.07809 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.788  | >20%                    |                10 |              0.0788  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7921 | >20%                    |                 5 |              0.15842 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7981 | 15-20%                  |                10 |              0.07981 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8113 | >20%                    |                10 |              0.08113 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8194 | >20%                    |                10 |              0.08194 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8198 | 15-20%                  |                 5 |              0.16396 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8368 | >20%                    |                 5 |              0.16736 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8369 | <5%                     |                10 |              0.08369 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8391 | 5-10%                   |                10 |              0.08391 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8417 | >20%                    |                10 |              0.08417 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8444 | 15-20%                  |                10 |              0.08444 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8495 | 10-15%                  |                 2 |              0.42475 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.853  | 15-20%                  |                10 |              0.0853  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8654 | >20%                    |                10 |              0.08654 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8724 | 15-20%                  |                10 |              0.08724 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8765 | 10-15%                  |                 5 |              0.1753  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8838 | >20%                    |                 5 |              0.17676 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8897 | <5%                     |                10 |              0.08897 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8958 | >20%                    |                 5 |              0.17916 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9069 | >20%                    |                 2 |              0.45345 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9228 | >20%                    |                10 |              0.09228 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9517 | >20%                    |                 2 |              0.47585 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9528 | 10-15%                  |                10 |              0.09528 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9624 | 10-15%                  |                10 |              0.09624 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.9864 | >20%                    |                10 |              0.09864 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9909 | 10-15%                  |                10 |              0.09909 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9969 | 5-10%                   |                10 |              0.09969 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.999  | 15-20%                  |                10 |              0.0999  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0052 | >20%                    |                 2 |              0.5026  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0188 | >20%                    |                10 |              0.10188 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0421 | >20%                    |                 5 |              0.20842 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0674 | >20%                    |                10 |              0.10674 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0716 | 15-20%                  |                10 |              0.10716 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0858 | >20%                    |                10 |              0.10858 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0975 | >20%                    |                 5 |              0.2195  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0984 | 10-15%                  |                 2 |              0.5492  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0994 | 15-20%                  |                10 |              0.10994 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1    | >20%                    |                10 |              0.11    |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1187 | >20%                    |                10 |              0.11187 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1213 | >20%                    |                 5 |              0.22426 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.122  | >20%                    |                10 |              0.1122  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1453 | 10-15%                  |                10 |              0.11453 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1501 | 5-10%                   |                10 |              0.11501 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1516 | 5-10%                   |                10 |              0.11516 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1956 | >20%                    |                 5 |              0.23912 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1966 | <5%                     |                10 |              0.11966 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2831 | 5-10%                   |                 2 |              0.64155 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2867 | 10-15%                  |                10 |              0.12867 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2925 | >20%                    |                10 |              0.12925 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3751 | 10-15%                  |                 5 |              0.27502 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5922 | >20%                    |                10 |              0.15922 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6084 | 10-15%                  |                 5 |              0.32168 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6573 | >20%                    |                10 |              0.16573 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.7492 | >20%                    |                10 |              0.17492 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7703 | >20%                    |                10 |              0.17703 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2046 | 10-15%                  |                10 |              0.22046 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3507 | 15-20%                  |                10 |              0.23507 |