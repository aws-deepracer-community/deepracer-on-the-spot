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

Data correct as of 2026-01-31 02:24:24.745627, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1419 | >20%                    |                 2 |              0.07095 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1657 | >20%                    |                 5 |              0.03314 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1743 | 5-10%                   |                 2 |              0.08715 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1808 | >20%                    |                 2 |              0.0904  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2028 | >20%                    |                 2 |              0.1014  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2126 | >20%                    |                 2 |              0.1063  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2221 | >20%                    |                 5 |              0.04442 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2344 | 10-15%                  |                 2 |              0.1172  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2363 | >20%                    |                 2 |              0.11815 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2394 | >20%                    |                 2 |              0.1197  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | >20%                    |                 2 |              0.12625 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2529 | <5%                     |                 5 |              0.05058 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2623 | 10-15%                  |                 2 |              0.13115 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2664 | 5-10%                   |                10 |              0.02664 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2735 | >20%                    |                 2 |              0.13675 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.275  | 15-20%                  |                 2 |              0.1375  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.284  | >20%                    |                 2 |              0.142   |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2845 | >20%                    |                 5 |              0.0569  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2894 | 10-15%                  |                 2 |              0.1447  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2945 | >20%                    |                 5 |              0.0589  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2965 | >20%                    |                 2 |              0.14825 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2994 | >20%                    |                 2 |              0.1497  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3111 | >20%                    |                 2 |              0.15555 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3311 | 15-20%                  |                 2 |              0.16555 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3468 | >20%                    |                 2 |              0.1734  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3472 | <5%                     |                 2 |              0.1736  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3473 | <5%                     |                10 |              0.03473 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3512 | 15-20%                  |                 2 |              0.1756  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3535 | >20%                    |                 5 |              0.0707  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3545 | 5-10%                   |                10 |              0.03545 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3604 | >20%                    |                 5 |              0.07208 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3713 | >20%                    |                 5 |              0.07426 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3771 | 15-20%                  |                 2 |              0.18855 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3774 | >20%                    |                 2 |              0.1887  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3781 | <5%                     |                 5 |              0.07562 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3788 | 15-20%                  |                 2 |              0.1894  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3802 | 5-10%                   |                 5 |              0.07604 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3803 | 5-10%                   |                 2 |              0.19015 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3809 | >20%                    |                 2 |              0.19045 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3877 | >20%                    |                10 |              0.03877 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3948 | >20%                    |                 5 |              0.07896 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3948 | >20%                    |                 5 |              0.07896 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3965 | 5-10%                   |                 2 |              0.19825 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3975 | >20%                    |                 2 |              0.19875 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4019 | >20%                    |                 5 |              0.08038 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.408  | 5-10%                   |                 2 |              0.204   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4086 | 10-15%                  |                 5 |              0.08172 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4105 | >20%                    |                10 |              0.04105 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4107 | >20%                    |                 2 |              0.20535 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4113 | >20%                    |                 5 |              0.08226 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4152 | <5%                     |                 2 |              0.2076  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4175 | >20%                    |                 2 |              0.20875 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4179 | >20%                    |                 2 |              0.20895 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4208 | 15-20%                  |                 2 |              0.2104  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4222 | >20%                    |                 5 |              0.08444 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4251 | 5-10%                   |                 2 |              0.21255 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4272 | >20%                    |                 5 |              0.08544 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4309 | >20%                    |                10 |              0.04309 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.431  | >20%                    |                10 |              0.0431  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4349 | >20%                    |                 5 |              0.08698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4359 | 15-20%                  |                 5 |              0.08718 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4365 | >20%                    |                 2 |              0.21825 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4369 | >20%                    |                 5 |              0.08738 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4426 | 5-10%                   |                 5 |              0.08852 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4468 | 15-20%                  |                10 |              0.04468 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4478 | <5%                     |                 2 |              0.2239  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4501 | 5-10%                   |                 2 |              0.22505 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4596 | 5-10%                   |                 5 |              0.09192 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.465  | >20%                    |                 2 |              0.2325  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4676 | <5%                     |                10 |              0.04676 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4749 | 15-20%                  |                 5 |              0.09498 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4755 | 5-10%                   |                 2 |              0.23775 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4768 | 15-20%                  |                 5 |              0.09536 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4772 | 15-20%                  |                10 |              0.04772 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4774 | >20%                    |                 2 |              0.2387  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4776 | >20%                    |                 2 |              0.2388  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4884 | >20%                    |                 2 |              0.2442  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4898 | <5%                     |                 2 |              0.2449  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4979 | >20%                    |                 5 |              0.09958 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.498  | >20%                    |                10 |              0.0498  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.499  | >20%                    |                10 |              0.0499  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5047 | <5%                     |                 5 |              0.10094 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5059 | >20%                    |                 2 |              0.25295 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5178 | >20%                    |                 5 |              0.10356 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5245 | >20%                    |                 5 |              0.1049  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5299 | >20%                    |                 5 |              0.10598 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.53   | <5%                     |                 5 |              0.106   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5353 | >20%                    |                 5 |              0.10706 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5364 | >20%                    |                 2 |              0.2682  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5384 | >20%                    |                 2 |              0.2692  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.541  | >20%                    |                10 |              0.0541  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5416 | >20%                    |                 5 |              0.10832 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5654 | <5%                     |                 5 |              0.11308 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.568  | 5-10%                   |                 5 |              0.1136  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5771 | >20%                    |                 5 |              0.11542 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5772 | >20%                    |                 5 |              0.11544 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5808 | 10-15%                  |                10 |              0.05808 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5822 | >20%                    |                 2 |              0.2911  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5841 | <5%                     |                 2 |              0.29205 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5998 | <5%                     |                10 |              0.05998 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6013 | <5%                     |                 5 |              0.12026 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.603  | 5-10%                   |                 2 |              0.3015  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6031 | 15-20%                  |                 5 |              0.12062 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6115 | <5%                     |                10 |              0.06115 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6131 | 15-20%                  |                10 |              0.06131 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6234 | >20%                    |                10 |              0.06234 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6236 | >20%                    |                 5 |              0.12472 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6254 | 10-15%                  |                 5 |              0.12508 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6355 | >20%                    |                 5 |              0.1271  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6382 | 5-10%                   |                 5 |              0.12764 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6636 | <5%                     |                 5 |              0.13272 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6667 | >20%                    |                 5 |              0.13334 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6761 | <5%                     |                 5 |              0.13522 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6795 | 5-10%                   |                 5 |              0.1359  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6861 | 15-20%                  |                10 |              0.06861 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6969 | >20%                    |                 5 |              0.13938 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.702  | >20%                    |                10 |              0.0702  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7095 | >20%                    |                 5 |              0.1419  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7146 | >20%                    |                10 |              0.07146 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7186 | >20%                    |                10 |              0.07186 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7188 | 5-10%                   |                 2 |              0.3594  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7205 | >20%                    |                 2 |              0.36025 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7214 | 15-20%                  |                 2 |              0.3607  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7309 | >20%                    |                10 |              0.07309 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7313 | >20%                    |                10 |              0.07313 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7466 | 10-15%                  |                10 |              0.07466 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7516 | <5%                     |                10 |              0.07516 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7565 | >20%                    |                10 |              0.07565 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7644 | <5%                     |                10 |              0.07644 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7786 | 5-10%                   |                10 |              0.07786 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7862 | >20%                    |                10 |              0.07862 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7989 | >20%                    |                 2 |              0.39945 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8009 | 10-15%                  |                 2 |              0.40045 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8031 | >20%                    |                 5 |              0.16062 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8036 | >20%                    |                 5 |              0.16072 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8082 | <5%                     |                10 |              0.08082 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8122 | >20%                    |                 5 |              0.16244 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8134 | >20%                    |                 5 |              0.16268 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8142 | 5-10%                   |                10 |              0.08142 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8247 | >20%                    |                 5 |              0.16494 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8352 | <5%                     |                10 |              0.08352 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8463 | >20%                    |                 2 |              0.42315 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8517 | >20%                    |                 2 |              0.42585 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8587 | >20%                    |                10 |              0.08587 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.861  | 15-20%                  |                10 |              0.0861  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8711 | >20%                    |                 2 |              0.43555 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.89   | >20%                    |                 5 |              0.178   |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8917 | >20%                    |                 2 |              0.44585 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9049 | >20%                    |                10 |              0.09049 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9187 | >20%                    |                10 |              0.09187 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9192 | 5-10%                   |                 5 |              0.18384 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9232 | <5%                     |                10 |              0.09232 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9307 | >20%                    |                10 |              0.09307 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9423 | >20%                    |                10 |              0.09423 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9423 | >20%                    |                 5 |              0.18846 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9467 | >20%                    |                10 |              0.09467 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9474 | >20%                    |                10 |              0.09474 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.953  | <5%                     |                10 |              0.0953  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9837 | >20%                    |                10 |              0.09837 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0039 | >20%                    |                10 |              0.10039 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0236 | >20%                    |                 5 |              0.20472 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0523 | 15-20%                  |                10 |              0.10523 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0679 | 5-10%                   |                10 |              0.10679 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1056 | >20%                    |                10 |              0.11056 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1085 | >20%                    |                10 |              0.11085 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1526 | >20%                    |                10 |              0.11526 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.16   | 15-20%                  |                10 |              0.116   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1735 | >20%                    |                10 |              0.11735 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2075 | >20%                    |                 5 |              0.2415  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2279 | >20%                    |                10 |              0.12279 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2853 | 10-15%                  |                10 |              0.12853 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3031 | <5%                     |                10 |              0.13031 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3334 | >20%                    |                 2 |              0.6667  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3354 | 10-15%                  |                 5 |              0.26708 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4131 | 10-15%                  |                 5 |              0.28262 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4397 | >20%                    |                10 |              0.14397 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4619 | >20%                    |                 2 |              0.73095 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6828 | 15-20%                  |                10 |              0.16828 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9505 | 10-15%                  |                10 |              0.19505 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4488 | <5%                     |                 5 |              0.48976 |