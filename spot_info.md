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

Data correct as of 2025-11-21 01:51:39.556771, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1081 | >20%                    |                 2 |              0.05405 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1548 | >20%                    |                 2 |              0.0774  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1758 | 15-20%                  |                 2 |              0.0879  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1803 | <5%                     |                 2 |              0.09015 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1973 | 15-20%                  |                 2 |              0.09865 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2065 | 10-15%                  |                 2 |              0.10325 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2086 | <5%                     |                 2 |              0.1043  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2271 | >20%                    |                 2 |              0.11355 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2272 | >20%                    |                 2 |              0.1136  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2344 | >20%                    |                 5 |              0.04688 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2387 | 5-10%                   |                 5 |              0.04774 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2392 | >20%                    |                 2 |              0.1196  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.244  | >20%                    |                 2 |              0.122   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2457 | >20%                    |                 2 |              0.12285 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2603 | 10-15%                  |                 5 |              0.05206 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2667 | >20%                    |                 2 |              0.13335 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2685 | <5%                     |                 2 |              0.13425 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2689 | <5%                     |                10 |              0.02689 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.27   | >20%                    |                 5 |              0.054   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2711 | >20%                    |                 2 |              0.13555 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2781 | >20%                    |                 2 |              0.13905 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2819 | 10-15%                  |                 2 |              0.14095 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2867 | 5-10%                   |                 2 |              0.14335 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2893 | >20%                    |                 5 |              0.05786 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.296  | <5%                     |                 5 |              0.0592  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3089 | <5%                     |                 2 |              0.15445 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3147 | >20%                    |                 5 |              0.06294 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3222 | >20%                    |                10 |              0.03222 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3392 | 10-15%                  |                10 |              0.03392 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3463 | 5-10%                   |                 2 |              0.17315 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3494 | 10-15%                  |                 2 |              0.1747  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3495 | >20%                    |                 2 |              0.17475 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3516 | >20%                    |                 5 |              0.07032 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3529 | >20%                    |                 2 |              0.17645 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.356  | >20%                    |                10 |              0.0356  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3571 | <5%                     |                10 |              0.03571 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3573 | >20%                    |                 2 |              0.17865 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3578 | 10-15%                  |                 2 |              0.1789  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3588 | >20%                    |                 5 |              0.07176 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3598 | >20%                    |                10 |              0.03598 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.364  | 5-10%                   |                10 |              0.0364  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3641 | >20%                    |                 2 |              0.18205 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3664 | <5%                     |                 2 |              0.1832  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3724 | 15-20%                  |                 5 |              0.07448 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3759 | 15-20%                  |                 2 |              0.18795 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3882 | 15-20%                  |                 2 |              0.1941  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3895 | >20%                    |                 2 |              0.19475 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3937 | >20%                    |                 2 |              0.19685 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3966 | >20%                    |                 5 |              0.07932 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3991 | 10-15%                  |                10 |              0.03991 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4009 | 10-15%                  |                 5 |              0.08018 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.403  | >20%                    |                 2 |              0.2015  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4096 | >20%                    |                 2 |              0.2048  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4108 | >20%                    |                 5 |              0.08216 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4157 | 15-20%                  |                 2 |              0.20785 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4175 | 10-15%                  |                10 |              0.04175 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4181 | >20%                    |                 5 |              0.08362 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4196 | >20%                    |                 2 |              0.2098  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4206 | 15-20%                  |                 5 |              0.08412 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4223 | 5-10%                   |                 2 |              0.21115 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4256 | >20%                    |                 5 |              0.08512 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4266 | 15-20%                  |                 5 |              0.08532 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4298 | 15-20%                  |                 5 |              0.08596 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4316 | >20%                    |                 2 |              0.2158  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4331 | >20%                    |                 2 |              0.21655 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4373 | >20%                    |                 2 |              0.21865 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4445 | 10-15%                  |                 5 |              0.0889  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4513 | <5%                     |                 2 |              0.22565 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4551 | >20%                    |                 2 |              0.22755 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4595 | 15-20%                  |                 5 |              0.0919  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4645 | >20%                    |                 5 |              0.0929  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4673 | >20%                    |                 2 |              0.23365 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4717 | >20%                    |                 2 |              0.23585 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | >20%                    |                 5 |              0.09452 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4727 | >20%                    |                 5 |              0.09454 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4728 | >20%                    |                 2 |              0.2364  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4773 | 10-15%                  |                 2 |              0.23865 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4779 | >20%                    |                10 |              0.04779 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.478  | >20%                    |                 2 |              0.239   |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4793 | 10-15%                  |                 2 |              0.23965 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4804 | 15-20%                  |                10 |              0.04804 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4825 | >20%                    |                 5 |              0.0965  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4927 | >20%                    |                 5 |              0.09854 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4963 | >20%                    |                 5 |              0.09926 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4985 | >20%                    |                10 |              0.04985 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.503  | >20%                    |                10 |              0.0503  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5066 | >20%                    |                 5 |              0.10132 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.514  | 10-15%                  |                 2 |              0.257   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5151 | 10-15%                  |                 5 |              0.10302 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5166 | 10-15%                  |                 5 |              0.10332 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5188 | >20%                    |                 5 |              0.10376 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5374 | 15-20%                  |                 5 |              0.10748 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.549  | >20%                    |                 5 |              0.1098  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.55   | 15-20%                  |                 5 |              0.11    |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5554 | >20%                    |                 5 |              0.11108 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5565 | >20%                    |                 5 |              0.1113  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5714 | >20%                    |                 5 |              0.11428 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5761 | 15-20%                  |                 5 |              0.11522 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5789 | >20%                    |                 2 |              0.28945 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5808 | >20%                    |                 5 |              0.11616 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5879 | 10-15%                  |                 5 |              0.11758 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5892 | >20%                    |                 2 |              0.2946  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5893 | 5-10%                   |                10 |              0.05893 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.593  | 5-10%                   |                 5 |              0.1186  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5957 | 10-15%                  |                 5 |              0.11914 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6014 | >20%                    |                 2 |              0.3007  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6105 | 10-15%                  |                 5 |              0.1221  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6143 | >20%                    |                 2 |              0.30715 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6192 | >20%                    |                 2 |              0.3096  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6221 | 10-15%                  |                 5 |              0.12442 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6269 | >20%                    |                 2 |              0.31345 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6271 | 15-20%                  |                10 |              0.06271 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6291 | >20%                    |                 5 |              0.12582 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6459 | 15-20%                  |                 5 |              0.12918 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6527 | >20%                    |                 5 |              0.13054 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6589 | 15-20%                  |                10 |              0.06589 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6599 | <5%                     |                10 |              0.06599 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6645 | >20%                    |                 5 |              0.1329  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6692 | 10-15%                  |                10 |              0.06692 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6706 | >20%                    |                10 |              0.06706 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6723 | 10-15%                  |                 2 |              0.33615 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6737 | >20%                    |                 5 |              0.13474 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6773 | 5-10%                   |                 2 |              0.33865 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6816 | <5%                     |                10 |              0.06816 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6966 | 5-10%                   |                10 |              0.06966 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.707  | >20%                    |                10 |              0.0707  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7108 | >20%                    |                10 |              0.07108 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7232 | >20%                    |                10 |              0.07232 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7385 | >20%                    |                10 |              0.07385 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7407 | 5-10%                   |                10 |              0.07407 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7427 | >20%                    |                 5 |              0.14854 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7616 | >20%                    |                 5 |              0.15232 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7623 | >20%                    |                10 |              0.07623 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7631 | 15-20%                  |                10 |              0.07631 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.769  | >20%                    |                10 |              0.0769  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7704 | >20%                    |                10 |              0.07704 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7721 | >20%                    |                 5 |              0.15442 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7735 | >20%                    |                10 |              0.07735 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7787 | <5%                     |                10 |              0.07787 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7789 | >20%                    |                 5 |              0.15578 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7859 | 10-15%                  |                10 |              0.07859 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8004 | >20%                    |                 2 |              0.4002  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8216 | >20%                    |                10 |              0.08216 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8313 | >20%                    |                10 |              0.08313 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8314 | >20%                    |                10 |              0.08314 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8333 | 15-20%                  |                 5 |              0.16666 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8347 | >20%                    |                10 |              0.08347 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8458 | >20%                    |                10 |              0.08458 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8803 | 10-15%                  |                10 |              0.08803 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8814 | >20%                    |                 5 |              0.17628 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8899 | 10-15%                  |                10 |              0.08899 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.894  | >20%                    |                 5 |              0.1788  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8947 | >20%                    |                10 |              0.08947 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.8977 | 15-20%                  |                10 |              0.08977 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.91   | 15-20%                  |                10 |              0.091   |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9246 | >20%                    |                 2 |              0.4623  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9627 | >20%                    |                 2 |              0.48135 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9704 | >20%                    |                10 |              0.09704 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9807 | <5%                     |                10 |              0.09807 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9812 | >20%                    |                10 |              0.09812 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9856 | >20%                    |                10 |              0.09856 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9877 | 10-15%                  |                10 |              0.09877 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0071 | >20%                    |                10 |              0.10071 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0333 | <5%                     |                 5 |              0.20666 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0364 | >20%                    |                 5 |              0.20728 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0512 | >20%                    |                10 |              0.10512 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.0885 | <5%                     |                 5 |              0.2177  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1043 | >20%                    |                 5 |              0.22086 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1267 | >20%                    |                10 |              0.11267 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1555 | >20%                    |                10 |              0.11555 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1765 | 15-20%                  |                10 |              0.11765 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.225  | <5%                     |                 2 |              0.6125  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3018 | >20%                    |                 2 |              0.6509  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3477 | >20%                    |                10 |              0.13477 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3511 | 15-20%                  |                10 |              0.13511 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3624 | >20%                    |                 5 |              0.27248 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.378  | 10-15%                  |                10 |              0.1378  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.383  | 5-10%                   |                 5 |              0.2766  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.388  | >20%                    |                10 |              0.1388  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.429  | >20%                    |                 2 |              0.7145  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.5395 | >20%                    |                10 |              0.15395 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0425 | 15-20%                  |                10 |              0.20425 |