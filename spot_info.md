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

Data correct as of 2025-06-06 01:53:57.992759, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1369 | 5-10%                   |                 2 |              0.06845 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1791 | >20%                    |                 2 |              0.08955 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1803 | >20%                    |                 2 |              0.09015 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1904 | <5%                     |                 5 |              0.03808 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | >20%                    |                 5 |              0.039   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2101 | >20%                    |                 2 |              0.10505 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2301 | >20%                    |                 2 |              0.11505 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2321 | >20%                    |                 5 |              0.04642 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2323 | >20%                    |                 2 |              0.11615 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2326 | 15-20%                  |                 2 |              0.1163  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | >20%                    |                10 |              0.02395 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 5-10%                   |                10 |              0.02419 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2449 | <5%                     |                 2 |              0.12245 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2459 | 10-15%                  |                 2 |              0.12295 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2472 | >20%                    |                 5 |              0.04944 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.262  | 10-15%                  |                 2 |              0.131   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2634 | >20%                    |                 2 |              0.1317  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2645 | >20%                    |                10 |              0.02645 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2776 | <5%                     |                 2 |              0.1388  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2809 | 10-15%                  |                 2 |              0.14045 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2813 | 15-20%                  |                 2 |              0.14065 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2851 | >20%                    |                 2 |              0.14255 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2853 | >20%                    |                 2 |              0.14265 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | 15-20%                  |                10 |              0.0294  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3001 | >20%                    |                 2 |              0.15005 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | >20%                    |                 2 |              0.1537  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3081 | >20%                    |                 2 |              0.15405 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3094 | >20%                    |                 5 |              0.06188 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3104 | >20%                    |                 2 |              0.1552  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3191 | >20%                    |                 2 |              0.15955 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3278 | 15-20%                  |                 5 |              0.06556 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3338 | >20%                    |                 5 |              0.06676 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3395 | 5-10%                   |                 2 |              0.16975 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3498 | 15-20%                  |                 5 |              0.06996 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3535 | >20%                    |                 2 |              0.17675 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3546 | >20%                    |                10 |              0.03546 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3552 | 5-10%                   |                 2 |              0.1776  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3554 | <5%                     |                10 |              0.03554 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3576 | >20%                    |                 2 |              0.1788  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3682 | >20%                    |                 5 |              0.07364 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3719 | >20%                    |                10 |              0.03719 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.372  | 15-20%                  |                 2 |              0.186   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3723 | 15-20%                  |                 2 |              0.18615 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.381  | >20%                    |                 5 |              0.0762  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3819 | >20%                    |                 2 |              0.19095 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3868 | 15-20%                  |                 2 |              0.1934  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3894 | 5-10%                   |                 5 |              0.07788 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3938 | >20%                    |                 5 |              0.07876 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3971 | 5-10%                   |                 2 |              0.19855 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3977 | >20%                    |                 2 |              0.19885 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3994 | >20%                    |                10 |              0.03994 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3997 | 15-20%                  |                 2 |              0.19985 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4038 | <5%                     |                 5 |              0.08076 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4088 | >20%                    |                 2 |              0.2044  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4108 | >20%                    |                 5 |              0.08216 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4153 | <5%                     |                 2 |              0.20765 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4343 | >20%                    |                 5 |              0.08686 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4354 | >20%                    |                 5 |              0.08708 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4355 | 5-10%                   |                 2 |              0.21775 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4386 | >20%                    |                 2 |              0.2193  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4387 | 15-20%                  |                 2 |              0.21935 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4408 | >20%                    |                10 |              0.04408 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4424 | 15-20%                  |                 5 |              0.08848 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4432 | 15-20%                  |                 5 |              0.08864 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4455 | 5-10%                   |                 5 |              0.0891  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4511 | >20%                    |                 5 |              0.09022 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4515 | >20%                    |                 2 |              0.22575 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.453  | <5%                     |                 5 |              0.0906  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4553 | >20%                    |                 2 |              0.22765 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.467  | >20%                    |                 5 |              0.0934  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4681 | >20%                    |                 2 |              0.23405 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4756 | 15-20%                  |                 5 |              0.09512 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4859 | 5-10%                   |                 5 |              0.09718 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4864 | 15-20%                  |                 5 |              0.09728 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4899 | >20%                    |                 2 |              0.24495 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4904 | >20%                    |                 5 |              0.09808 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4908 | 10-15%                  |                 5 |              0.09816 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4927 | <5%                     |                 5 |              0.09854 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4932 | 5-10%                   |                 5 |              0.09864 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4933 | >20%                    |                 2 |              0.24665 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4956 | 15-20%                  |                 5 |              0.09912 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4976 | 10-15%                  |                 2 |              0.2488  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5085 | 15-20%                  |                10 |              0.05085 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5123 | <5%                     |                 5 |              0.10246 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5153 | >20%                    |                 5 |              0.10306 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5197 | 15-20%                  |                 2 |              0.25985 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5261 | >20%                    |                 2 |              0.26305 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5278 | >20%                    |                 5 |              0.10556 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5288 | >20%                    |                 5 |              0.10576 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5361 | >20%                    |                10 |              0.05361 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5449 | >20%                    |                10 |              0.05449 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5484 | >20%                    |                 2 |              0.2742  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5486 | >20%                    |                10 |              0.05486 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5563 | 10-15%                  |                 5 |              0.11126 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5569 | >20%                    |                 2 |              0.27845 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.568  | 10-15%                  |                10 |              0.0568  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5834 | >20%                    |                 5 |              0.11668 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5896 | >20%                    |                 5 |              0.11792 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5972 | <5%                     |                 2 |              0.2986  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6006 | >20%                    |                 2 |              0.3003  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.606  | >20%                    |                 5 |              0.1212  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6089 | 5-10%                   |                 2 |              0.30445 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6174 | >20%                    |                 2 |              0.3087  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6202 | <5%                     |                10 |              0.06202 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6222 | >20%                    |                 5 |              0.12444 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6277 | >20%                    |                 5 |              0.12554 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6294 | 10-15%                  |                10 |              0.06294 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6309 | 10-15%                  |                 5 |              0.12618 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6352 | 10-15%                  |                10 |              0.06352 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6366 | >20%                    |                 5 |              0.12732 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6494 | >20%                    |                 2 |              0.3247  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6515 | <5%                     |                 5 |              0.1303  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.652  | >20%                    |                 5 |              0.1304  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6572 | 15-20%                  |                 5 |              0.13144 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6672 | >20%                    |                 2 |              0.3336  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6689 | 10-15%                  |                 2 |              0.33445 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6765 | >20%                    |                10 |              0.06765 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6792 | >20%                    |                 2 |              0.3396  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6807 | 15-20%                  |                10 |              0.06807 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6884 | 15-20%                  |                10 |              0.06884 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7018 | 15-20%                  |                10 |              0.07018 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.703  | >20%                    |                 5 |              0.1406  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7035 | 10-15%                  |                 5 |              0.1407  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7037 | 15-20%                  |                 5 |              0.14074 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7047 | >20%                    |                10 |              0.07047 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7117 | <5%                     |                 5 |              0.14234 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.715  | <5%                     |                10 |              0.0715  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7158 | >20%                    |                10 |              0.07158 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7233 | >20%                    |                10 |              0.07233 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7373 | <5%                     |                10 |              0.07373 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7375 | <5%                     |                 5 |              0.1475  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7399 | >20%                    |                10 |              0.07399 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7648 | >20%                    |                10 |              0.07648 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7766 | >20%                    |                10 |              0.07766 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7794 | >20%                    |                10 |              0.07794 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7855 | >20%                    |                 5 |              0.1571  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7864 | 10-15%                  |                10 |              0.07864 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7912 | >20%                    |                 5 |              0.15824 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7969 | >20%                    |                10 |              0.07969 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8178 | 5-10%                   |                 5 |              0.16356 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8295 | >20%                    |                10 |              0.08295 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.839  | 15-20%                  |                10 |              0.0839  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8538 | >20%                    |                10 |              0.08538 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8829 | >20%                    |                10 |              0.08829 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8871 | 5-10%                   |                10 |              0.08871 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8965 | <5%                     |                10 |              0.08965 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9036 | >20%                    |                10 |              0.09036 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.921  | >20%                    |                10 |              0.0921  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9296 | >20%                    |                 5 |              0.18592 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.934  | >20%                    |                 2 |              0.467   |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9375 | >20%                    |                10 |              0.09375 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9395 | >20%                    |                10 |              0.09395 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9416 | >20%                    |                10 |              0.09416 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9895 | >20%                    |                10 |              0.09895 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9915 | >20%                    |                 2 |              0.49575 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9945 | >20%                    |                 5 |              0.1989  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9986 | >20%                    |                10 |              0.09986 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0351 | >20%                    |                 2 |              0.51755 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0375 | >20%                    |                10 |              0.10375 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0381 | >20%                    |                 5 |              0.20762 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0502 | >20%                    |                 2 |              0.5251  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0532 | <5%                     |                 5 |              0.21064 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0646 | 10-15%                  |                10 |              0.10646 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0728 | <5%                     |                 2 |              0.5364  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0941 | 15-20%                  |                10 |              0.10941 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1145 | >20%                    |                10 |              0.11145 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1204 | 15-20%                  |                 5 |              0.22408 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1347 | >20%                    |                10 |              0.11347 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1637 | 15-20%                  |                10 |              0.11637 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2171 | 15-20%                  |                10 |              0.12171 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2443 | 10-15%                  |                10 |              0.12443 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3057 | >20%                    |                 2 |              0.65285 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3107 | >20%                    |                10 |              0.13107 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3228 | >20%                    |                10 |              0.13228 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4056 | <5%                     |                 5 |              0.28112 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4375 | <5%                     |                10 |              0.14375 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4442 | >20%                    |                10 |              0.14442 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4725 | >20%                    |                 5 |              0.2945  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5423 | 10-15%                  |                10 |              0.15423 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.5824 | >20%                    |                10 |              0.15824 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0842 | <5%                     |                10 |              0.20842 |