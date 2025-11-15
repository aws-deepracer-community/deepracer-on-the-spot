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

Data correct as of 2025-11-15 01:48:54.078762, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1324 | 15-20%                  |                 2 |              0.0662  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1555 | >20%                    |                 2 |              0.07775 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1756 | 5-10%                   |                 5 |              0.03512 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.183  | <5%                     |                 2 |              0.0915  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1955 | >20%                    |                 2 |              0.09775 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.213  | 10-15%                  |                 2 |              0.1065  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2239 | <5%                     |                 2 |              0.11195 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2275 | >20%                    |                 5 |              0.0455  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2383 | >20%                    |                 2 |              0.11915 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.243  | >20%                    |                 2 |              0.1215  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2436 | >20%                    |                 2 |              0.1218  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2492 | >20%                    |                 2 |              0.1246  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2558 | >20%                    |                 5 |              0.05116 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2582 | 10-15%                  |                10 |              0.02582 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.265  | <5%                     |                 2 |              0.1325  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2717 | 15-20%                  |                 2 |              0.13585 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2734 | 10-15%                  |                 2 |              0.1367  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2769 | >20%                    |                 2 |              0.13845 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2785 | >20%                    |                 2 |              0.13925 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2789 | 5-10%                   |                 2 |              0.13945 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2847 | 10-15%                  |                 5 |              0.05694 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2915 | >20%                    |                 5 |              0.0583  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3082 | >20%                    |                 2 |              0.1541  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3253 | >20%                    |                 5 |              0.06506 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3307 | >20%                    |                 2 |              0.16535 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3396 | >20%                    |                 2 |              0.1698  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.343  | >20%                    |                 2 |              0.1715  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3471 | >20%                    |                 5 |              0.06942 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.349  | 10-15%                  |                 2 |              0.1745  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3514 | 10-15%                  |                 2 |              0.1757  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3532 | <5%                     |                 5 |              0.07064 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.355  | 5-10%                   |                 2 |              0.1775  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3574 | 15-20%                  |                 5 |              0.07148 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3602 | >20%                    |                 2 |              0.1801  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3603 | >20%                    |                10 |              0.03603 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3632 | <5%                     |                 2 |              0.1816  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3638 | >20%                    |                 2 |              0.1819  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3701 | 15-20%                  |                 2 |              0.18505 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3702 | <5%                     |                 2 |              0.1851  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3758 | >20%                    |                10 |              0.03758 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3788 | 15-20%                  |                10 |              0.03788 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3888 | 15-20%                  |                 2 |              0.1944  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.393  | >20%                    |                 5 |              0.0786  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3942 | >20%                    |                 2 |              0.1971  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3968 | >20%                    |                 2 |              0.1984  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4042 | >20%                    |                10 |              0.04042 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4061 | >20%                    |                 2 |              0.20305 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4103 | >20%                    |                10 |              0.04103 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4106 | 10-15%                  |                 5 |              0.08212 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4126 | >20%                    |                 2 |              0.2063  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4129 | >20%                    |                 5 |              0.08258 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4161 | <5%                     |                10 |              0.04161 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4199 | >20%                    |                 5 |              0.08398 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.42   | >20%                    |                 2 |              0.21    |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4247 | 15-20%                  |                 5 |              0.08494 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4288 | >20%                    |                 5 |              0.08576 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4309 | <5%                     |                 2 |              0.21545 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4311 | 15-20%                  |                 2 |              0.21555 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4346 | 15-20%                  |                 5 |              0.08692 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4349 | 10-15%                  |                 5 |              0.08698 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4389 | >20%                    |                 5 |              0.08778 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4396 | >20%                    |                 5 |              0.08792 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4413 | 15-20%                  |                 5 |              0.08826 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.442  | 5-10%                   |                 2 |              0.221   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4425 | 5-10%                   |                10 |              0.04425 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4428 | 10-15%                  |                10 |              0.04428 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4433 | >20%                    |                 5 |              0.08866 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4468 | >20%                    |                 2 |              0.2234  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4472 | 15-20%                  |                 5 |              0.08944 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4535 | 5-10%                   |                10 |              0.04535 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4538 | >20%                    |                 2 |              0.2269  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4563 | >20%                    |                 5 |              0.09126 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4587 | >20%                    |                 2 |              0.22935 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4591 | 10-15%                  |                 2 |              0.22955 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4604 | >20%                    |                 2 |              0.2302  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4621 | >20%                    |                 2 |              0.23105 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4681 | >20%                    |                 5 |              0.09362 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4684 | >20%                    |                 5 |              0.09368 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4726 | >20%                    |                 2 |              0.2363  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4759 | >20%                    |                 5 |              0.09518 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4762 | >20%                    |                 2 |              0.2381  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4837 | 10-15%                  |                 2 |              0.24185 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4881 | >20%                    |                 5 |              0.09762 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4914 | 15-20%                  |                 5 |              0.09828 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.498  | >20%                    |                 5 |              0.0996  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4987 | <5%                     |                10 |              0.04987 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5209 | 10-15%                  |                 2 |              0.26045 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5271 | >20%                    |                 5 |              0.10542 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5294 | 10-15%                  |                10 |              0.05294 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5336 | >20%                    |                10 |              0.05336 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5387 | >20%                    |                10 |              0.05387 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5394 | >20%                    |                 5 |              0.10788 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.547  | 10-15%                  |                 5 |              0.1094  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5553 | >20%                    |                 5 |              0.11106 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5607 | 15-20%                  |                 5 |              0.11214 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5612 | 10-15%                  |                 5 |              0.11224 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5741 | 15-20%                  |                 5 |              0.11482 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5947 | >20%                    |                 5 |              0.11894 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5951 | >20%                    |                 2 |              0.29755 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.601  | 10-15%                  |                 5 |              0.1202  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6013 | >20%                    |                 2 |              0.30065 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6051 | 5-10%                   |                 5 |              0.12102 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.607  | 10-15%                  |                 5 |              0.1214  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6146 | 10-15%                  |                10 |              0.06146 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6146 | >20%                    |                 2 |              0.3073  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6233 | >20%                    |                 2 |              0.31165 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6277 | 10-15%                  |                 5 |              0.12554 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6306 | >20%                    |                 5 |              0.12612 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6338 | >20%                    |                 2 |              0.3169  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6356 | >20%                    |                 5 |              0.12712 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6376 | 15-20%                  |                10 |              0.06376 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6528 | >20%                    |                10 |              0.06528 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6564 | 10-15%                  |                 2 |              0.3282  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6589 | 10-15%                  |                 5 |              0.13178 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6659 | >20%                    |                 5 |              0.13318 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6703 | >20%                    |                10 |              0.06703 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6739 | 15-20%                  |                 5 |              0.13478 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6778 | >20%                    |                 2 |              0.3389  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6788 | 5-10%                   |                 2 |              0.3394  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6801 | 15-20%                  |                10 |              0.06801 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6814 | >20%                    |                10 |              0.06814 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6839 | >20%                    |                 5 |              0.13678 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6948 | >20%                    |                 5 |              0.13896 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6952 | >20%                    |                10 |              0.06952 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6955 | >20%                    |                10 |              0.06955 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6955 | 5-10%                   |                10 |              0.06955 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7045 | >20%                    |                10 |              0.07045 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7246 | >20%                    |                 5 |              0.14492 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7257 | >20%                    |                 5 |              0.14514 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7382 | 15-20%                  |                10 |              0.07382 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.741  | >20%                    |                10 |              0.0741  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7472 | >20%                    |                 5 |              0.14944 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7537 | 15-20%                  |                 5 |              0.15074 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7618 | >20%                    |                 5 |              0.15236 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7774 | <5%                     |                10 |              0.07774 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7781 | >20%                    |                10 |              0.07781 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7789 | >20%                    |                10 |              0.07789 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7801 | >20%                    |                10 |              0.07801 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.801  | >20%                    |                10 |              0.0801  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8091 | <5%                     |                10 |              0.08091 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8096 | 5-10%                   |                10 |              0.08096 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8196 | >20%                    |                 2 |              0.4098  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8203 | <5%                     |                10 |              0.08203 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8296 | >20%                    |                 5 |              0.16592 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8448 | 15-20%                  |                10 |              0.08448 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8462 | <5%                     |                 5 |              0.16924 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8555 | 10-15%                  |                10 |              0.08555 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8601 | >20%                    |                10 |              0.08601 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8672 | >20%                    |                10 |              0.08672 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8831 | 10-15%                  |                10 |              0.08831 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8861 | >20%                    |                10 |              0.08861 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8885 | 10-15%                  |                10 |              0.08885 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8919 | >20%                    |                10 |              0.08919 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9038 | >20%                    |                 5 |              0.18076 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9218 | >20%                    |                 2 |              0.4609  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9341 | >20%                    |                 2 |              0.46705 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9618 | <5%                     |                10 |              0.09618 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9913 | <5%                     |                 5 |              0.19826 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9934 | >20%                    |                10 |              0.09934 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0085 | >20%                    |                10 |              0.10085 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0168 | >20%                    |                10 |              0.10168 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.033  | 10-15%                  |                10 |              0.1033  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0349 | >20%                    |                10 |              0.10349 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0369 | 15-20%                  |                10 |              0.10369 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0567 | >20%                    |                10 |              0.10567 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.074  | >20%                    |                 5 |              0.2148  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0876 | >20%                    |                 5 |              0.21752 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1011 | 15-20%                  |                10 |              0.11011 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1108 | >20%                    |                10 |              0.11108 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1564 | >20%                    |                10 |              0.11564 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.188  | 15-20%                  |                10 |              0.1188  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1884 | >20%                    |                 2 |              0.5942  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2661 | >20%                    |                 5 |              0.25322 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.312  | >20%                    |                10 |              0.1312  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.338  | >20%                    |                10 |              0.1338  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3556 | 10-15%                  |                10 |              0.13556 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4336 | >20%                    |                 2 |              0.7168  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4634 | 5-10%                   |                 5 |              0.29268 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5617 | >20%                    |                10 |              0.15617 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1057 | 15-20%                  |                10 |              0.21057 |