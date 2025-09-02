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

Data correct as of 2025-09-02 01:48:51.458182, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1025 | 5-10%                   |                 2 |              0.05125 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1096 | >20%                    |                 2 |              0.0548  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1387 | >20%                    |                 2 |              0.06935 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1419 | >20%                    |                 5 |              0.02838 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1739 | >20%                    |                 2 |              0.08695 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1841 | >20%                    |                 2 |              0.09205 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1923 | >20%                    |                 5 |              0.03846 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2055 | >20%                    |                 5 |              0.0411  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2074 | 10-15%                  |                 2 |              0.1037  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2117 | 10-15%                  |                 5 |              0.04234 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.215  | >20%                    |                 2 |              0.1075  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2323 | >20%                    |                 5 |              0.04646 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2352 | >20%                    |                 2 |              0.1176  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2368 | 15-20%                  |                 5 |              0.04736 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2568 | >20%                    |                 2 |              0.1284  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2719 | >20%                    |                 2 |              0.13595 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2805 | >20%                    |                 2 |              0.14025 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2822 | 15-20%                  |                 2 |              0.1411  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3087 | >20%                    |                10 |              0.03087 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3127 | 10-15%                  |                 5 |              0.06254 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3127 | >20%                    |                 2 |              0.15635 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3137 | 5-10%                   |                 2 |              0.15685 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.324  | 10-15%                  |                 2 |              0.162   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3246 | 5-10%                   |                 2 |              0.1623  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3327 | >20%                    |                 2 |              0.16635 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3362 | >20%                    |                 2 |              0.1681  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.346  | >20%                    |                 2 |              0.173   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.349  | >20%                    |                 2 |              0.1745  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3548 | >20%                    |                 5 |              0.07096 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3597 | >20%                    |                 2 |              0.17985 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3627 | >20%                    |                 5 |              0.07254 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3707 | >20%                    |                 2 |              0.18535 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3711 | >20%                    |                 2 |              0.18555 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3725 | 15-20%                  |                10 |              0.03725 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3749 | 10-15%                  |                10 |              0.03749 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3755 | >20%                    |                 2 |              0.18775 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3764 | >20%                    |                 5 |              0.07528 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3785 | 15-20%                  |                 2 |              0.18925 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3829 | >20%                    |                 5 |              0.07658 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3859 | 15-20%                  |                10 |              0.03859 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3896 | 10-15%                  |                 2 |              0.1948  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.391  | >20%                    |                10 |              0.0391  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4096 | 15-20%                  |                 2 |              0.2048  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4187 | 10-15%                  |                 2 |              0.20935 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4188 | >20%                    |                 5 |              0.08376 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4204 | >20%                    |                 5 |              0.08408 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4222 | >20%                    |                 5 |              0.08444 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4236 | >20%                    |                 5 |              0.08472 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4425 | 15-20%                  |                 2 |              0.22125 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4528 | >20%                    |                 2 |              0.2264  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4542 | 15-20%                  |                 2 |              0.2271  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4542 | 10-15%                  |                 2 |              0.2271  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4549 | 5-10%                   |                 2 |              0.22745 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4596 | >20%                    |                 5 |              0.09192 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4651 | >20%                    |                 2 |              0.23255 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4658 | 10-15%                  |                 2 |              0.2329  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4689 | <5%                     |                 2 |              0.23445 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4696 | >20%                    |                 5 |              0.09392 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4722 | >20%                    |                 2 |              0.2361  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4779 | >20%                    |                 2 |              0.23895 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4799 | >20%                    |                 5 |              0.09598 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4971 | >20%                    |                 5 |              0.09942 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4974 | >20%                    |                 5 |              0.09948 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4998 | >20%                    |                10 |              0.04998 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5045 | >20%                    |                 2 |              0.25225 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5056 | 5-10%                   |                 5 |              0.10112 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5101 | >20%                    |                 5 |              0.10202 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5202 | >20%                    |                 2 |              0.2601  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5266 | >20%                    |                 2 |              0.2633  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5317 | 10-15%                  |                 2 |              0.26585 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5334 | >20%                    |                 5 |              0.10668 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5369 | >20%                    |                 2 |              0.26845 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5415 | 15-20%                  |                 5 |              0.1083  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5493 | >20%                    |                 2 |              0.27465 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5552 | >20%                    |                 2 |              0.2776  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5552 | >20%                    |                 2 |              0.2776  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5669 | >20%                    |                 5 |              0.11338 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5673 | <5%                     |                 2 |              0.28365 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5698 | >20%                    |                 5 |              0.11396 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5752 | >20%                    |                 5 |              0.11504 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5819 | >20%                    |                 5 |              0.11638 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5835 | 5-10%                   |                 2 |              0.29175 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5845 | >20%                    |                 5 |              0.1169  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5858 | >20%                    |                 5 |              0.11716 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5878 | >20%                    |                 2 |              0.2939  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5953 | >20%                    |                 2 |              0.29765 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6052 | 10-15%                  |                 5 |              0.12104 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6102 | >20%                    |                 5 |              0.12204 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6118 | 15-20%                  |                 5 |              0.12236 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.62   | >20%                    |                 5 |              0.124   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6215 | >20%                    |                 5 |              0.1243  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6281 | >20%                    |                 5 |              0.12562 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6319 | 10-15%                  |                 5 |              0.12638 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6354 | 15-20%                  |                 5 |              0.12708 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6466 | >20%                    |                 2 |              0.3233  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6498 | >20%                    |                 5 |              0.12996 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6605 | >20%                    |                 5 |              0.1321  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6625 | 15-20%                  |                 2 |              0.33125 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6669 | 15-20%                  |                 5 |              0.13338 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6788 | 5-10%                   |                10 |              0.06788 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6946 | >20%                    |                 5 |              0.13892 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6954 | 15-20%                  |                10 |              0.06954 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7016 | >20%                    |                 5 |              0.14032 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.724  | >20%                    |                10 |              0.0724  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7268 | >20%                    |                 5 |              0.14536 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7269 | >20%                    |                 5 |              0.14538 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7328 | >20%                    |                 5 |              0.14656 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7348 | >20%                    |                10 |              0.07348 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7517 | >20%                    |                10 |              0.07517 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.7587 | 10-15%                  |                10 |              0.07587 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7642 | >20%                    |                 5 |              0.15284 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7649 | >20%                    |                 5 |              0.15298 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7651 | >20%                    |                 5 |              0.15302 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7671 | >20%                    |                10 |              0.07671 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7678 | >20%                    |                 2 |              0.3839  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7685 | >20%                    |                10 |              0.07685 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7738 | >20%                    |                10 |              0.07738 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7808 | >20%                    |                10 |              0.07808 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7964 | >20%                    |                 5 |              0.15928 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8009 | 10-15%                  |                10 |              0.08009 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8096 | 15-20%                  |                10 |              0.08096 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8219 | >20%                    |                 5 |              0.16438 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8473 | 15-20%                  |                10 |              0.08473 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8599 | 10-15%                  |                 2 |              0.42995 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8717 | 10-15%                  |                10 |              0.08717 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.8734 | >20%                    |                10 |              0.08734 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8756 | <5%                     |                10 |              0.08756 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8925 | <5%                     |                10 |              0.08925 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9024 | >20%                    |                10 |              0.09024 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9211 | 15-20%                  |                10 |              0.09211 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9319 | 5-10%                   |                10 |              0.09319 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.935  | >20%                    |                 5 |              0.187   |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9375 | 15-20%                  |                10 |              0.09375 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.945  | 5-10%                   |                10 |              0.0945  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9599 | <5%                     |                10 |              0.09599 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9637 | >20%                    |                10 |              0.09637 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9762 | 10-15%                  |                10 |              0.09762 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9883 | >20%                    |                 2 |              0.49415 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9902 | 5-10%                   |                10 |              0.09902 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9963 | >20%                    |                10 |              0.09963 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.015  | >20%                    |                10 |              0.1015  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0158 | 15-20%                  |                10 |              0.10158 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0171 | >20%                    |                10 |              0.10171 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0256 | >20%                    |                 5 |              0.20512 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0302 | 15-20%                  |                10 |              0.10302 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0363 | <5%                     |                10 |              0.10363 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0389 | 15-20%                  |                10 |              0.10389 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0596 | >20%                    |                 2 |              0.5298  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0683 | >20%                    |                10 |              0.10683 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0742 | >20%                    |                10 |              0.10742 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0971 | 15-20%                  |                10 |              0.10971 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1221 | 10-15%                  |                 5 |              0.22442 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.123  | >20%                    |                 5 |              0.2246  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.1505 | >20%                    |                10 |              0.11505 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1555 | 15-20%                  |                10 |              0.11555 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1697 | >20%                    |                 2 |              0.58485 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.172  | >20%                    |                10 |              0.1172  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1804 | >20%                    |                 5 |              0.23608 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1898 | 5-10%                   |                 2 |              0.5949  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1917 | 10-15%                  |                 2 |              0.59585 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2062 | 5-10%                   |                10 |              0.12062 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2824 | 10-15%                  |                 5 |              0.25648 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3115 | 10-15%                  |                10 |              0.13115 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3941 | >20%                    |                 5 |              0.27882 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4778 | >20%                    |                10 |              0.14778 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4834 | 10-15%                  |                 5 |              0.29668 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5077 | 15-20%                  |                10 |              0.15077 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5646 | >20%                    |                10 |              0.15646 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5661 | >20%                    |                10 |              0.15661 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5675 | >20%                    |                10 |              0.15675 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5906 | >20%                    |                10 |              0.15906 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5917 | >20%                    |                10 |              0.15917 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.334  | 10-15%                  |                10 |              0.2334  |