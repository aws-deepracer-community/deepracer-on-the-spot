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

Data correct as of 2026-03-02 02:33:30.693880, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1589 | >20%                    |                 2 |              0.07945 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1779 | >20%                    |                 2 |              0.08895 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1801 | >20%                    |                 5 |              0.03602 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1825 | >20%                    |                 2 |              0.09125 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2237 | <5%                     |                 2 |              0.11185 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2359 | >20%                    |                 2 |              0.11795 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2441 | >20%                    |                 2 |              0.12205 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2475 | >20%                    |                 2 |              0.12375 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2504 | 5-10%                   |                10 |              0.02504 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2524 | 10-15%                  |                 2 |              0.1262  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2573 | 15-20%                  |                 2 |              0.12865 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2606 | >20%                    |                 2 |              0.1303  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.265  | >20%                    |                 2 |              0.1325  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2729 | 10-15%                  |                 2 |              0.13645 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.279  | >20%                    |                 5 |              0.0558  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2833 | >20%                    |                 5 |              0.05666 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3018 | >20%                    |                 5 |              0.06036 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3058 | <5%                     |                 5 |              0.06116 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.306  | >20%                    |                 2 |              0.153   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | >20%                    |                 2 |              0.1537  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3099 | 5-10%                   |                 2 |              0.15495 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3126 | >20%                    |                 2 |              0.1563  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3281 | >20%                    |                 2 |              0.16405 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3379 | >20%                    |                 5 |              0.06758 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3386 | 5-10%                   |                10 |              0.03386 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3445 | >20%                    |                 5 |              0.0689  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3454 | >20%                    |                 5 |              0.06908 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3487 | 5-10%                   |                 2 |              0.17435 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3518 | <5%                     |                 5 |              0.07036 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3552 | 10-15%                  |                 2 |              0.1776  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3572 | >20%                    |                 2 |              0.1786  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3572 | 15-20%                  |                 2 |              0.1786  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3689 | 5-10%                   |                 2 |              0.18445 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3691 | >20%                    |                10 |              0.03691 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3728 | 5-10%                   |                 5 |              0.07456 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3743 | >20%                    |                 5 |              0.07486 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3788 | >20%                    |                 5 |              0.07576 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3844 | >20%                    |                 5 |              0.07688 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3856 | 15-20%                  |                 2 |              0.1928  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3894 | >20%                    |                 2 |              0.1947  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3895 | <5%                     |                10 |              0.03895 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3908 | >20%                    |                10 |              0.03908 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.396  | <5%                     |                 2 |              0.198   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3975 | 5-10%                   |                 2 |              0.19875 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4006 | >20%                    |                 5 |              0.08012 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4009 | <5%                     |                 5 |              0.08018 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4019 | <5%                     |                10 |              0.04019 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4104 | 10-15%                  |                 5 |              0.08208 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4139 | >20%                    |                 2 |              0.20695 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4253 | >20%                    |                 2 |              0.21265 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4255 | >20%                    |                 2 |              0.21275 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4268 | 15-20%                  |                 5 |              0.08536 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4274 | 5-10%                   |                 2 |              0.2137  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4277 | >20%                    |                 2 |              0.21385 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.429  | 5-10%                   |                 5 |              0.0858  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4301 | 15-20%                  |                 2 |              0.21505 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4336 | >20%                    |                 2 |              0.2168  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.435  | >20%                    |                 2 |              0.2175  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4371 | <5%                     |                 2 |              0.21855 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.438  | 15-20%                  |                 2 |              0.219   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4396 | >20%                    |                 5 |              0.08792 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4409 | <5%                     |                 2 |              0.22045 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4447 | >20%                    |                10 |              0.04447 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4456 | >20%                    |                 2 |              0.2228  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4476 | >20%                    |                10 |              0.04476 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4496 | 5-10%                   |                 2 |              0.2248  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4508 | 5-10%                   |                 2 |              0.2254  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4539 | 15-20%                  |                 2 |              0.22695 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4543 | 5-10%                   |                 5 |              0.09086 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4575 | 15-20%                  |                 5 |              0.0915  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4713 | 15-20%                  |                10 |              0.04713 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4759 | >20%                    |                 5 |              0.09518 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.4811 | <5%                     |                 5 |              0.09622 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4963 | <5%                     |                 5 |              0.09926 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4972 | 15-20%                  |                 5 |              0.09944 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.498  | >20%                    |                10 |              0.0498  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4998 | >20%                    |                 5 |              0.09996 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5004 | >20%                    |                 5 |              0.10008 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5143 | >20%                    |                 5 |              0.10286 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5158 | >20%                    |                 2 |              0.2579  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5179 | >20%                    |                 5 |              0.10358 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5202 | >20%                    |                 2 |              0.2601  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5213 | >20%                    |                 5 |              0.10426 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5263 | >20%                    |                 2 |              0.26315 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.527  | >20%                    |                 5 |              0.1054  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5314 | 15-20%                  |                 5 |              0.10628 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5318 | >20%                    |                 5 |              0.10636 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5339 | >20%                    |                 2 |              0.26695 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5391 |                         |                 2 |              0.26955 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5543 | 15-20%                  |                10 |              0.05543 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.558  | <5%                     |                 5 |              0.1116  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5647 | 15-20%                  |                10 |              0.05647 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5667 | >20%                    |                10 |              0.05667 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5899 | 5-10%                   |                 2 |              0.29495 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6023 | >20%                    |                 5 |              0.12046 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6029 | >20%                    |                10 |              0.06029 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6057 | 15-20%                  |                 2 |              0.30285 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6093 | >20%                    |                10 |              0.06093 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6124 | >20%                    |                 5 |              0.12248 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6134 | >20%                    |                 5 |              0.12268 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.6159 | >20%                    |                10 |              0.06159 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6163 | >20%                    |                 5 |              0.12326 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6182 | 5-10%                   |                 2 |              0.3091  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6226 | >20%                    |                 2 |              0.3113  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6354 | >20%                    |                 5 |              0.12708 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6392 | 15-20%                  |                10 |              0.06392 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6408 | <5%                     |                10 |              0.06408 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6455 | 10-15%                  |                 5 |              0.1291  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6473 | >20%                    |                10 |              0.06473 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6494 | <5%                     |                10 |              0.06494 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6508 | >20%                    |                10 |              0.06508 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.651  | 5-10%                   |                 5 |              0.1302  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6529 | 5-10%                   |                 5 |              0.13058 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6537 | 5-10%                   |                 5 |              0.13074 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6593 | >20%                    |                 2 |              0.32965 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6594 | >20%                    |                 2 |              0.3297  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6644 | <5%                     |                10 |              0.06644 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6772 | >20%                    |                 5 |              0.13544 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6902 | >20%                    |                10 |              0.06902 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6946 |                         |                 5 |              0.13892 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6952 | <5%                     |                10 |              0.06952 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6997 | >20%                    |                 5 |              0.13994 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7207 | >20%                    |                10 |              0.07207 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7214 | >20%                    |                 5 |              0.14428 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7257 | >20%                    |                 5 |              0.14514 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7268 | 10-15%                  |                10 |              0.07268 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7421 | 10-15%                  |                10 |              0.07421 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7505 | >20%                    |                10 |              0.07505 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7663 | >20%                    |                 5 |              0.15326 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7706 | >20%                    |                10 |              0.07706 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7805 | >20%                    |                10 |              0.07805 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7893 | >20%                    |                 2 |              0.39465 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8011 | >20%                    |                 2 |              0.40055 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8038 | 15-20%                  |                10 |              0.08038 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8041 | <5%                     |                10 |              0.08041 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8191 | <5%                     |                10 |              0.08191 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8259 | <5%                     |                 5 |              0.16518 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8277 | >20%                    |                 5 |              0.16554 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8344 | >20%                    |                10 |              0.08344 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.84   | <5%                     |                 5 |              0.168   |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8526 | >20%                    |                 5 |              0.17052 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.857  | >20%                    |                10 |              0.0857  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8589 | >20%                    |                 5 |              0.17178 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8756 | 10-15%                  |                 2 |              0.4378  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.891  | >20%                    |                 5 |              0.1782  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9095 | 10-15%                  |                10 |              0.09095 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9135 | >20%                    |                 5 |              0.1827  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9336 | >20%                    |                 2 |              0.4668  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9336 | <5%                     |                10 |              0.09336 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9416 | <5%                     |                10 |              0.09416 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9442 | >20%                    |                10 |              0.09442 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9475 | >20%                    |                10 |              0.09475 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9617 | 15-20%                  |                10 |              0.09617 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9621 | 5-10%                   |                10 |              0.09621 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9658 | >20%                    |                10 |              0.09658 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9757 | >20%                    |                 2 |              0.48785 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.976  | 5-10%                   |                10 |              0.0976  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9811 | >20%                    |                10 |              0.09811 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0094 | 5-10%                   |                 5 |              0.20188 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0386 | >20%                    |                10 |              0.10386 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0501 | >20%                    |                10 |              0.10501 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0513 | 5-10%                   |                10 |              0.10513 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.057  |                         |                10 |              0.1057  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0617 | >20%                    |                10 |              0.10617 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0685 | >20%                    |                 5 |              0.2137  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0833 | >20%                    |                10 |              0.10833 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1389 | 15-20%                  |                10 |              0.11389 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1996 | 10-15%                  |                 5 |              0.23992 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2045 | <5%                     |                 2 |              0.60225 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2121 | >20%                    |                 2 |              0.60605 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2382 | >20%                    |                10 |              0.12382 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2721 | >20%                    |                10 |              0.12721 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.276  | <5%                     |                10 |              0.1276  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3385 | >20%                    |                 2 |              0.66925 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3674 | >20%                    |                 5 |              0.27348 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.435  | >20%                    |                 2 |              0.7175  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4457 | 10-15%                  |                 5 |              0.28914 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5052 | 15-20%                  |                10 |              0.15052 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.656  | >20%                    |                10 |              0.1656  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6588 | >20%                    |                10 |              0.16588 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3429 | 10-15%                  |                10 |              0.23429 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.5003 | <5%                     |                 5 |              0.50006 |