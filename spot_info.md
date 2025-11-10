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

Data correct as of 2025-11-10 01:56:52.839225, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1292 | 5-10%                   |                 2 |              0.0646  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1801 | >20%                    |                 5 |              0.03602 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1909 | >20%                    |                 5 |              0.03818 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2049 | >20%                    |                 2 |              0.10245 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2146 | 5-10%                   |                 2 |              0.1073  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2265 | >20%                    |                 2 |              0.11325 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2449 | 10-15%                  |                 2 |              0.12245 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2453 | >20%                    |                 2 |              0.12265 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2469 | >20%                    |                 2 |              0.12345 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.25   | >20%                    |                 2 |              0.125   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2646 | 5-10%                   |                 2 |              0.1323  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2662 | 10-15%                  |                 2 |              0.1331  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2677 | >20%                    |                 2 |              0.13385 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2717 | >20%                    |                 2 |              0.13585 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2761 | >20%                    |                 2 |              0.13805 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2824 | >20%                    |                 2 |              0.1412  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2831 | >20%                    |                 2 |              0.14155 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2892 | >20%                    |                 2 |              0.1446  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3123 | >20%                    |                 2 |              0.15615 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.321  | 15-20%                  |                 2 |              0.1605  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3279 | >20%                    |                 5 |              0.06558 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3335 | >20%                    |                 5 |              0.0667  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3402 | >20%                    |                 2 |              0.1701  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.343  | >20%                    |                 5 |              0.0686  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3474 | 5-10%                   |                 2 |              0.1737  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3484 | >20%                    |                 2 |              0.1742  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.35   | >20%                    |                 2 |              0.175   |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3503 | <5%                     |                 2 |              0.17515 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3533 | 10-15%                  |                 2 |              0.17665 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3543 | >20%                    |                 5 |              0.07086 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3585 | 15-20%                  |                 5 |              0.0717  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3589 | >20%                    |                 2 |              0.17945 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3632 | 15-20%                  |                 2 |              0.1816  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3689 | 10-15%                  |                 2 |              0.18445 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3735 | <5%                     |                10 |              0.03735 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3736 | >20%                    |                 5 |              0.07472 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3757 | >20%                    |                 5 |              0.07514 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3759 | 5-10%                   |                 2 |              0.18795 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3761 | >20%                    |                 5 |              0.07522 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3852 | >20%                    |                 2 |              0.1926  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3908 | 10-15%                  |                 2 |              0.1954  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3959 | 15-20%                  |                 2 |              0.19795 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3981 | >20%                    |                 2 |              0.19905 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4075 | >20%                    |                 5 |              0.0815  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4093 | >20%                    |                 5 |              0.08186 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4152 | 5-10%                   |                 5 |              0.08304 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4172 | >20%                    |                 2 |              0.2086  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4203 | 15-20%                  |                 2 |              0.21015 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4212 | >20%                    |                 2 |              0.2106  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4248 | >20%                    |                 2 |              0.2124  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4258 | >20%                    |                 2 |              0.2129  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4307 | >20%                    |                 5 |              0.08614 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4315 | >20%                    |                 5 |              0.0863  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4387 | >20%                    |                 5 |              0.08774 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4391 | >20%                    |                 2 |              0.21955 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4401 | >20%                    |                10 |              0.04401 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4443 | >20%                    |                 5 |              0.08886 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4443 | >20%                    |                 5 |              0.08886 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4522 | >20%                    |                 5 |              0.09044 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4525 | >20%                    |                 2 |              0.22625 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4528 | >20%                    |                 2 |              0.2264  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4539 | >20%                    |                 5 |              0.09078 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4591 | >20%                    |                 5 |              0.09182 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4594 | >20%                    |                 2 |              0.2297  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.463  | >20%                    |                 5 |              0.0926  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4656 | >20%                    |                 2 |              0.2328  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4701 | 10-15%                  |                 2 |              0.23505 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4747 | >20%                    |                 5 |              0.09494 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4844 | >20%                    |                 5 |              0.09688 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4893 | 5-10%                   |                 2 |              0.24465 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4924 | >20%                    |                 5 |              0.09848 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4946 | >20%                    |                10 |              0.04946 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4957 | >20%                    |                 5 |              0.09914 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5004 | >20%                    |                 2 |              0.2502  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5052 | >20%                    |                 2 |              0.2526  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5076 | >20%                    |                 5 |              0.10152 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5142 | >20%                    |                 2 |              0.2571  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5165 | 15-20%                  |                10 |              0.05165 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5196 | >20%                    |                10 |              0.05196 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.523  | 10-15%                  |                 5 |              0.1046  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5255 | >20%                    |                 5 |              0.1051  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5325 | >20%                    |                 5 |              0.1065  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5339 | >20%                    |                 5 |              0.10678 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5369 | >20%                    |                10 |              0.05369 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5426 | <5%                     |                10 |              0.05426 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5453 | >20%                    |                 5 |              0.10906 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5505 | >20%                    |                 5 |              0.1101  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5509 | 15-20%                  |                10 |              0.05509 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5593 | 10-15%                  |                 5 |              0.11186 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.563  | 15-20%                  |                10 |              0.0563  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5634 | 10-15%                  |                 5 |              0.11268 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5658 | >20%                    |                 5 |              0.11316 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.57   | 10-15%                  |                10 |              0.057   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5731 | 15-20%                  |                 5 |              0.11462 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5977 | 15-20%                  |                 2 |              0.29885 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6022 | >20%                    |                 5 |              0.12044 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6055 | 15-20%                  |                10 |              0.06055 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.609  | >20%                    |                 2 |              0.3045  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6112 | 10-15%                  |                 2 |              0.3056  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6149 | >20%                    |                 5 |              0.12298 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6308 | >20%                    |                10 |              0.06308 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6341 | >20%                    |                 5 |              0.12682 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6371 | 15-20%                  |                 5 |              0.12742 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6391 | <5%                     |                10 |              0.06391 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6396 | >20%                    |                 5 |              0.12792 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6407 | >20%                    |                 5 |              0.12814 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.644  | >20%                    |                 2 |              0.322   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6541 | >20%                    |                 2 |              0.32705 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6645 | 10-15%                  |                 2 |              0.33225 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6681 | >20%                    |                10 |              0.06681 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6694 | >20%                    |                10 |              0.06694 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6721 | 15-20%                  |                 2 |              0.33605 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6774 | 15-20%                  |                 5 |              0.13548 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6808 | >20%                    |                 5 |              0.13616 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6819 | >20%                    |                10 |              0.06819 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6884 | 15-20%                  |                10 |              0.06884 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6958 | >20%                    |                10 |              0.06958 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7004 | 5-10%                   |                10 |              0.07004 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7006 | >20%                    |                10 |              0.07006 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.705  | >20%                    |                 5 |              0.141   |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7162 | >20%                    |                10 |              0.07162 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7188 | 15-20%                  |                 5 |              0.14376 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.725  | <5%                     |                10 |              0.0725  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7333 | >20%                    |                 5 |              0.14666 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7335 | >20%                    |                 5 |              0.1467  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7355 | >20%                    |                10 |              0.07355 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7359 | >20%                    |                 5 |              0.14718 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7445 | >20%                    |                 5 |              0.1489  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7516 | >20%                    |                10 |              0.07516 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7617 | >20%                    |                 5 |              0.15234 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7631 | 10-15%                  |                 2 |              0.38155 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7641 | >20%                    |                 2 |              0.38205 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7716 | 10-15%                  |                10 |              0.07716 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7761 | 15-20%                  |                10 |              0.07761 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7778 | 10-15%                  |                 5 |              0.15556 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7794 | 10-15%                  |                10 |              0.07794 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7865 | 15-20%                  |                10 |              0.07865 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7883 | >20%                    |                10 |              0.07883 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7909 | >20%                    |                10 |              0.07909 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7955 | 15-20%                  |                10 |              0.07955 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8098 | 15-20%                  |                10 |              0.08098 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8219 | 5-10%                   |                10 |              0.08219 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.826  | >20%                    |                10 |              0.0826  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8277 | 5-10%                   |                10 |              0.08277 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8339 | 5-10%                   |                10 |              0.08339 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8438 | 10-15%                  |                 5 |              0.16876 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8628 | <5%                     |                10 |              0.08628 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8755 | >20%                    |                 5 |              0.1751  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8764 | 10-15%                  |                10 |              0.08764 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8834 | >20%                    |                 2 |              0.4417  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8991 | >20%                    |                 2 |              0.44955 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9227 | >20%                    |                10 |              0.09227 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9305 | >20%                    |                10 |              0.09305 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.937  | >20%                    |                10 |              0.0937  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.944  | >20%                    |                 5 |              0.1888  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9839 | >20%                    |                 5 |              0.19678 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9964 | 5-10%                   |                10 |              0.09964 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0356 | >20%                    |                10 |              0.10356 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0421 | 15-20%                  |                10 |              0.10421 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0459 | >20%                    |                10 |              0.10459 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0496 | >20%                    |                10 |              0.10496 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0683 | >20%                    |                 5 |              0.21366 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0886 | 15-20%                  |                10 |              0.10886 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1167 | >20%                    |                10 |              0.11167 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1327 | >20%                    |                 5 |              0.22654 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1466 | 15-20%                  |                10 |              0.11466 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1495 | >20%                    |                 5 |              0.2299  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1683 | >20%                    |                 2 |              0.58415 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.182  | 10-15%                  |                10 |              0.1182  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2337 | 10-15%                  |                10 |              0.12337 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2486 | >20%                    |                10 |              0.12486 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2573 | >20%                    |                10 |              0.12573 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3037 | >20%                    |                10 |              0.13037 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3969 | >20%                    |                10 |              0.13969 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4346 | 5-10%                   |                 2 |              0.7173  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5015 | 10-15%                  |                 5 |              0.3003  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.529  | >20%                    |                10 |              0.1529  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2844 | 15-20%                  |                10 |              0.22844 |