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

Data correct as of 2025-12-21 02:06:00.178490, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1063 | >20%                    |                 2 |              0.05315 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1319 | >20%                    |                 2 |              0.06595 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1638 | 15-20%                  |                 2 |              0.0819  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1709 | >20%                    |                 2 |              0.08545 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1838 | <5%                     |                 2 |              0.0919  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1941 | 10-15%                  |                 2 |              0.09705 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2012 | >20%                    |                 5 |              0.04024 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2257 | >20%                    |                 2 |              0.11285 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2368 | >20%                    |                 2 |              0.1184  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2407 | >20%                    |                 2 |              0.12035 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2415 | >20%                    |                 2 |              0.12075 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2532 | <5%                     |                 5 |              0.05064 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2532 | >20%                    |                 2 |              0.1266  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.256  | 5-10%                   |                 5 |              0.0512  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2657 | 5-10%                   |                10 |              0.02657 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2757 | >20%                    |                 2 |              0.13785 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2808 | >20%                    |                 2 |              0.1404  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2818 | 5-10%                   |                 2 |              0.1409  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2822 | 10-15%                  |                 2 |              0.1411  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2828 | 15-20%                  |                 2 |              0.1414  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2932 | >20%                    |                 2 |              0.1466  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3043 | >20%                    |                 2 |              0.15215 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3056 | 10-15%                  |                 5 |              0.06112 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3059 | >20%                    |                 2 |              0.15295 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3139 | 10-15%                  |                 2 |              0.15695 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3178 | >20%                    |                10 |              0.03178 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3191 | >20%                    |                 5 |              0.06382 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3264 | 10-15%                  |                10 |              0.03264 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3416 | >20%                    |                 5 |              0.06832 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.342  | >20%                    |                10 |              0.0342  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.344  | >20%                    |                 5 |              0.0688  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3532 | >20%                    |                 2 |              0.1766  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3546 | >20%                    |                10 |              0.03546 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3577 | >20%                    |                 2 |              0.17885 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3599 | 5-10%                   |                10 |              0.03599 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3632 | <5%                     |                 5 |              0.07264 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3643 | >20%                    |                 5 |              0.07286 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3646 | 15-20%                  |                 2 |              0.1823  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3647 | >20%                    |                 2 |              0.18235 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.372  | >20%                    |                 5 |              0.0744  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3754 | <5%                     |                 2 |              0.1877  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3779 | 5-10%                   |                 2 |              0.18895 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3789 | >20%                    |                10 |              0.03789 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3805 | >20%                    |                 5 |              0.0761  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3807 | >20%                    |                 2 |              0.19035 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3846 | 15-20%                  |                 5 |              0.07692 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3851 | <5%                     |                10 |              0.03851 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3873 | >20%                    |                 5 |              0.07746 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3909 | 10-15%                  |                 2 |              0.19545 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.393  | >20%                    |                 5 |              0.0786  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3964 | >20%                    |                 2 |              0.1982  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4002 | >20%                    |                 2 |              0.2001  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4018 | 15-20%                  |                 5 |              0.08036 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4022 | <5%                     |                 5 |              0.08044 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4061 | >20%                    |                 5 |              0.08122 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4062 | >20%                    |                 5 |              0.08124 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4189 | 10-15%                  |                 2 |              0.20945 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4203 | >20%                    |                 2 |              0.21015 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4334 | >20%                    |                 2 |              0.2167  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4355 | <5%                     |                 2 |              0.21775 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4373 | <5%                     |                 2 |              0.21865 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4389 | >20%                    |                 5 |              0.08778 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4402 | >20%                    |                 5 |              0.08804 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4443 | 10-15%                  |                10 |              0.04443 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.456  | >20%                    |                 2 |              0.228   |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4588 | <5%                     |                10 |              0.04588 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4634 | 15-20%                  |                 2 |              0.2317  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4659 | >20%                    |                10 |              0.04659 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4687 | 15-20%                  |                 5 |              0.09374 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4705 | >20%                    |                 2 |              0.23525 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.471  | 15-20%                  |                 5 |              0.0942  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4721 | >20%                    |                 2 |              0.23605 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4884 | 15-20%                  |                 5 |              0.09768 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4907 | 15-20%                  |                 2 |              0.24535 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4921 | >20%                    |                 5 |              0.09842 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.4957 | 5-10%                   |                 5 |              0.09914 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4979 | >20%                    |                 5 |              0.09958 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5022 | >20%                    |                 2 |              0.2511  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5035 | >20%                    |                 2 |              0.25175 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5045 | >20%                    |                 5 |              0.1009  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5109 | >20%                    |                 2 |              0.25545 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5139 | >20%                    |                 5 |              0.10278 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5163 | 15-20%                  |                 5 |              0.10326 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5221 | 15-20%                  |                 2 |              0.26105 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5244 | <5%                     |                 5 |              0.10488 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5253 | 15-20%                  |                10 |              0.05253 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5254 | >20%                    |                10 |              0.05254 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5351 | >20%                    |                 2 |              0.26755 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5449 | >20%                    |                 5 |              0.10898 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5534 | >20%                    |                 5 |              0.11068 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5553 | >20%                    |                 5 |              0.11106 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5557 | >20%                    |                 5 |              0.11114 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5623 | >20%                    |                 5 |              0.11246 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5682 | >20%                    |                 2 |              0.2841  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5722 | >20%                    |                 5 |              0.11444 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5738 | 10-15%                  |                 5 |              0.11476 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5809 | >20%                    |                 2 |              0.29045 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.604  | >20%                    |                10 |              0.0604  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6056 | 5-10%                   |                 5 |              0.12112 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6062 | 5-10%                   |                 5 |              0.12124 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6138 | >20%                    |                 5 |              0.12276 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6156 | >20%                    |                 2 |              0.3078  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6288 | 5-10%                   |                 5 |              0.12576 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6316 | >20%                    |                 5 |              0.12632 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6319 | >20%                    |                 2 |              0.31595 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6349 | 15-20%                  |                 5 |              0.12698 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6384 | >20%                    |                 2 |              0.3192  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6421 | >20%                    |                 2 |              0.32105 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6524 | 10-15%                  |                 5 |              0.13048 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6565 | >20%                    |                 5 |              0.1313  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6603 | <5%                     |                10 |              0.06603 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6727 | >20%                    |                 5 |              0.13454 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6825 | >20%                    |                10 |              0.06825 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6828 | >20%                    |                10 |              0.06828 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.7107 | 10-15%                  |                 5 |              0.14214 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7112 | >20%                    |                10 |              0.07112 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7116 | >20%                    |                10 |              0.07116 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7135 | >20%                    |                10 |              0.07135 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7162 | >20%                    |                10 |              0.07162 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7186 | >20%                    |                10 |              0.07186 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.722  | >20%                    |                10 |              0.0722  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7432 | >20%                    |                 2 |              0.3716  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7487 | 5-10%                   |                10 |              0.07487 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7495 | >20%                    |                10 |              0.07495 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7605 | >20%                    |                 2 |              0.38025 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7759 | <5%                     |                 5 |              0.15518 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7765 | >20%                    |                 2 |              0.38825 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7767 | >20%                    |                 5 |              0.15534 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7835 | 10-15%                  |                10 |              0.07835 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7853 | 10-15%                  |                10 |              0.07853 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7901 | 10-15%                  |                10 |              0.07901 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7942 | >20%                    |                 5 |              0.15884 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7992 | >20%                    |                 5 |              0.15984 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8039 | >20%                    |                10 |              0.08039 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8052 | 15-20%                  |                10 |              0.08052 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8155 | 10-15%                  |                 5 |              0.1631  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8161 | <5%                     |                10 |              0.08161 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.826  | >20%                    |                10 |              0.0826  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8277 | 15-20%                  |                10 |              0.08277 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8333 | >20%                    |                10 |              0.08333 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8412 | >20%                    |                 2 |              0.4206  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.856  | 5-10%                   |                10 |              0.0856  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.863  | >20%                    |                10 |              0.0863  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8775 | >20%                    |                 2 |              0.43875 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8831 | 15-20%                  |                 2 |              0.44155 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9039 | >20%                    |                 5 |              0.18078 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9078 | 10-15%                  |                10 |              0.09078 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9087 | >20%                    |                10 |              0.09087 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9088 | 15-20%                  |                10 |              0.09088 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9227 | >20%                    |                 5 |              0.18454 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9326 | >20%                    |                 5 |              0.18652 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9393 | >20%                    |                10 |              0.09393 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9422 | >20%                    |                 5 |              0.18844 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9539 | >20%                    |                10 |              0.09539 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9644 | >20%                    |                10 |              0.09644 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9786 | 15-20%                  |                10 |              0.09786 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9803 | >20%                    |                 5 |              0.19606 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0096 | >20%                    |                10 |              0.10096 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0124 | 5-10%                   |                 5 |              0.20248 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0143 | 10-15%                  |                10 |              0.10143 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      1.0206 | >20%                    |                 2 |              0.5103  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0443 | >20%                    |                 2 |              0.52215 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0494 | 10-15%                  |                10 |              0.10494 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0513 | >20%                    |                10 |              0.10513 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0822 | 10-15%                  |                10 |              0.10822 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1407 | >20%                    |                 2 |              0.57035 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1882 | >20%                    |                10 |              0.11882 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1967 | 5-10%                   |                10 |              0.11967 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2495 | >20%                    |                10 |              0.12495 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2568 | >20%                    |                10 |              0.12568 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3034 | >20%                    |                10 |              0.13034 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3335 | >20%                    |                 2 |              0.66675 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4094 | >20%                    |                 2 |              0.7047  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4116 | >20%                    |                10 |              0.14116 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4545 | 10-15%                  |                 5 |              0.2909  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4626 | >20%                    |                 5 |              0.29252 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.5564 | >20%                    |                 5 |              0.31128 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5778 | 15-20%                  |                10 |              0.15778 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6661 | 15-20%                  |                10 |              0.16661 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0677 | 10-15%                  |                10 |              0.20677 |