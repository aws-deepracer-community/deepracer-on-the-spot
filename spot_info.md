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

Data correct as of 2025-09-01 02:02:03.258951, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0989 | 5-10%                   |                 2 |              0.04945 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1122 | >20%                    |                 2 |              0.0561  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1331 | >20%                    |                 2 |              0.06655 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1411 | >20%                    |                 5 |              0.02822 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1757 | >20%                    |                 2 |              0.08785 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1787 | >20%                    |                 2 |              0.08935 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1957 | >20%                    |                 5 |              0.03914 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1996 | 10-15%                  |                 5 |              0.03992 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2032 | >20%                    |                 5 |              0.04064 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2057 | 10-15%                  |                 2 |              0.10285 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.215  | >20%                    |                 2 |              0.1075  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.22   | 15-20%                  |                 5 |              0.044   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2305 | >20%                    |                 5 |              0.0461  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | >20%                    |                 2 |              0.11705 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2684 | >20%                    |                 2 |              0.1342  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2702 | >20%                    |                 2 |              0.1351  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2783 | >20%                    |                 2 |              0.13915 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2918 | >20%                    |                10 |              0.02918 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2918 | 15-20%                  |                 2 |              0.1459  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3106 | 10-15%                  |                 5 |              0.06212 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3127 | >20%                    |                 2 |              0.15635 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | 5-10%                   |                 2 |              0.15735 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.323  | 10-15%                  |                 2 |              0.1615  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3283 | 5-10%                   |                 2 |              0.16415 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3377 | >20%                    |                 2 |              0.16885 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3381 | >20%                    |                 5 |              0.06762 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3432 | >20%                    |                 2 |              0.1716  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3441 | >20%                    |                 2 |              0.17205 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3487 | >20%                    |                 2 |              0.17435 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.355  | 15-20%                  |                10 |              0.0355  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3585 | >20%                    |                 2 |              0.17925 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3646 | >20%                    |                 5 |              0.07292 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3648 | >20%                    |                 5 |              0.07296 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.369  | >20%                    |                 2 |              0.1845  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3748 | >20%                    |                 2 |              0.1874  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3771 | >20%                    |                 2 |              0.18855 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3791 | 15-20%                  |                 2 |              0.18955 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3833 | 10-15%                  |                 2 |              0.19165 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3861 | >20%                    |                 5 |              0.07722 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3963 | >20%                    |                10 |              0.03963 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3971 | 15-20%                  |                10 |              0.03971 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4066 | 15-20%                  |                 2 |              0.2033  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4173 | >20%                    |                 5 |              0.08346 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4192 | >20%                    |                 5 |              0.08384 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4201 | >20%                    |                 5 |              0.08402 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4223 | >20%                    |                 5 |              0.08446 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4231 | 10-15%                  |                 2 |              0.21155 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4289 | 15-20%                  |                 2 |              0.21445 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4406 | 10-15%                  |                 2 |              0.2203  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4487 | 10-15%                  |                 2 |              0.22435 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.453  | 15-20%                  |                 2 |              0.2265  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4557 | 5-10%                   |                 2 |              0.22785 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4608 | >20%                    |                 2 |              0.2304  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4653 | >20%                    |                 5 |              0.09306 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4727 | <5%                     |                 2 |              0.23635 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4772 | >20%                    |                 2 |              0.2386  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4793 | >20%                    |                 5 |              0.09586 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4801 | >20%                    |                 2 |              0.24005 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4804 | >20%                    |                 5 |              0.09608 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4829 | >20%                    |                 2 |              0.24145 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4975 | >20%                    |                 5 |              0.0995  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4991 | >20%                    |                 5 |              0.09982 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4998 | >20%                    |                10 |              0.04998 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5045 | >20%                    |                 2 |              0.25225 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5076 | 5-10%                   |                 5 |              0.10152 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5078 | >20%                    |                 5 |              0.10156 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5113 | >20%                    |                 2 |              0.25565 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5195 | 15-20%                  |                 5 |              0.1039  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5196 | >20%                    |                 2 |              0.2598  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5342 | >20%                    |                 5 |              0.10684 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5391 | 10-15%                  |                 2 |              0.26955 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5452 | >20%                    |                 2 |              0.2726  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5525 | >20%                    |                 2 |              0.27625 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5549 | >20%                    |                 5 |              0.11098 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5561 | >20%                    |                 5 |              0.11122 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5566 | >20%                    |                 2 |              0.2783  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5642 | >20%                    |                 2 |              0.2821  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.571  | >20%                    |                 2 |              0.2855  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5752 | >20%                    |                 5 |              0.11504 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5774 | >20%                    |                 5 |              0.11548 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5786 | 5-10%                   |                 2 |              0.2893  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5825 | >20%                    |                 5 |              0.1165  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5832 | <5%                     |                 2 |              0.2916  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5846 | >20%                    |                 5 |              0.11692 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5989 | 15-20%                  |                 5 |              0.11978 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6067 | >20%                    |                 5 |              0.12134 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6073 | 10-15%                  |                 5 |              0.12146 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6095 | >20%                    |                 2 |              0.30475 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6156 | >20%                    |                 5 |              0.12312 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6202 | >20%                    |                 5 |              0.12404 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6286 | 10-15%                  |                 5 |              0.12572 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6343 | >20%                    |                 5 |              0.12686 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6358 | 15-20%                  |                 5 |              0.12716 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6572 | >20%                    |                 5 |              0.13144 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6579 | >20%                    |                 2 |              0.32895 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6582 | 15-20%                  |                 5 |              0.13164 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6718 | >20%                    |                 5 |              0.13436 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6755 | 15-20%                  |                 2 |              0.33775 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6857 | 5-10%                   |                10 |              0.06857 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6924 | >20%                    |                 5 |              0.13848 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6956 | 15-20%                  |                10 |              0.06956 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7112 | >20%                    |                 5 |              0.14224 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7113 | >20%                    |                10 |              0.07113 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7194 | >20%                    |                10 |              0.07194 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.722  | >20%                    |                 5 |              0.1444  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.7259 | 10-15%                  |                10 |              0.07259 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7362 | >20%                    |                 5 |              0.14724 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7397 | >20%                    |                 5 |              0.14794 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7531 | >20%                    |                10 |              0.07531 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7595 | >20%                    |                 5 |              0.1519  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7624 | >20%                    |                 5 |              0.15248 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.768  | >20%                    |                10 |              0.0768  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7749 | >20%                    |                10 |              0.07749 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7758 | >20%                    |                10 |              0.07758 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7767 | >20%                    |                 5 |              0.15534 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.789  | >20%                    |                10 |              0.0789  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.8082 | >20%                    |                10 |              0.08082 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8096 | 15-20%                  |                10 |              0.08096 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8173 | >20%                    |                 2 |              0.40865 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8186 | >20%                    |                 5 |              0.16372 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8236 | >20%                    |                 5 |              0.16472 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8287 | 10-15%                  |                10 |              0.08287 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.833  | 15-20%                  |                10 |              0.0833  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8627 | 10-15%                  |                 2 |              0.43135 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8717 | 10-15%                  |                10 |              0.08717 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8925 | <5%                     |                10 |              0.08925 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8925 | <5%                     |                10 |              0.08925 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9119 | >20%                    |                10 |              0.09119 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9156 | >20%                    |                 5 |              0.18312 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9265 | 15-20%                  |                10 |              0.09265 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9394 | 5-10%                   |                10 |              0.09394 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9468 | 5-10%                   |                10 |              0.09468 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9573 | >20%                    |                10 |              0.09573 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9608 | 15-20%                  |                10 |              0.09608 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9635 | <5%                     |                10 |              0.09635 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9803 | 10-15%                  |                10 |              0.09803 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9803 | 5-10%                   |                10 |              0.09803 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0085 | >20%                    |                 2 |              0.50425 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0107 | >20%                    |                10 |              0.10107 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0139 | 15-20%                  |                10 |              0.10139 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.021  | >20%                    |                10 |              0.1021  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0276 | 15-20%                  |                10 |              0.10276 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0339 | 15-20%                  |                10 |              0.10339 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.036  | >20%                    |                10 |              0.1036  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0373 | <5%                     |                10 |              0.10373 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0486 | >20%                    |                 2 |              0.5243  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0533 | >20%                    |                10 |              0.10533 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0594 | >20%                    |                 5 |              0.21188 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0819 | >20%                    |                10 |              0.10819 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0971 | 15-20%                  |                10 |              0.10971 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1128 | >20%                    |                 5 |              0.22256 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1268 | 10-15%                  |                 5 |              0.22536 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.1477 | >20%                    |                10 |              0.11477 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1512 | 15-20%                  |                10 |              0.11512 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1514 | >20%                    |                10 |              0.11514 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1529 | >20%                    |                 2 |              0.57645 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1605 | 5-10%                   |                 2 |              0.58025 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2061 | 5-10%                   |                10 |              0.12061 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2141 | >20%                    |                 5 |              0.24282 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.2141 | 10-15%                  |                 2 |              0.60705 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2775 | 10-15%                  |                 5 |              0.2555  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3115 | 10-15%                  |                10 |              0.13115 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3989 | >20%                    |                 5 |              0.27978 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.47   | 15-20%                  |                10 |              0.147   |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4773 | >20%                    |                10 |              0.14773 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.5168 | 10-15%                  |                 5 |              0.30336 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5372 | >20%                    |                10 |              0.15372 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5608 | >20%                    |                10 |              0.15608 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5819 | >20%                    |                10 |              0.15819 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.598  | >20%                    |                10 |              0.1598  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6241 | >20%                    |                10 |              0.16241 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.3053 | 10-15%                  |                10 |              0.23053 |