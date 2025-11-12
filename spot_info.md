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

Data correct as of 2025-11-12 01:52:39.169281, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1202 | >20%                    |                 2 |              0.0601  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1414 | 5-10%                   |                 2 |              0.0707  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1627 | >20%                    |                 5 |              0.03254 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1956 | 5-10%                   |                 2 |              0.0978  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2139 | >20%                    |                 5 |              0.04278 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2148 | >20%                    |                 2 |              0.1074  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2158 | >20%                    |                 5 |              0.04316 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2225 | >20%                    |                 2 |              0.11125 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2397 | >20%                    |                 2 |              0.11985 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2416 | >20%                    |                 2 |              0.1208  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2449 | 10-15%                  |                 2 |              0.12245 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2477 | 10-15%                  |                10 |              0.02477 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2479 | >20%                    |                 2 |              0.12395 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2487 | >20%                    |                 2 |              0.12435 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2664 | 5-10%                   |                 2 |              0.1332  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2665 | >20%                    |                 2 |              0.13325 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2731 | 10-15%                  |                 2 |              0.13655 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | >20%                    |                 2 |              0.1397  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2855 | >20%                    |                 2 |              0.14275 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2942 | >20%                    |                 2 |              0.1471  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3035 | >20%                    |                 5 |              0.0607  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3159 | >20%                    |                 2 |              0.15795 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3173 | <5%                     |                 2 |              0.15865 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3252 | 15-20%                  |                 5 |              0.06504 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3291 | 15-20%                  |                 2 |              0.16455 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3301 | >20%                    |                 5 |              0.06602 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3373 | >20%                    |                 2 |              0.16865 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.352  | >20%                    |                 5 |              0.0704  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3547 | >20%                    |                 2 |              0.17735 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3556 | >20%                    |                 2 |              0.1778  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3565 | >20%                    |                 5 |              0.0713  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.359  | 5-10%                   |                 2 |              0.1795  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3604 | 15-20%                  |                 2 |              0.1802  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3618 | 10-15%                  |                 2 |              0.1809  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3664 | 5-10%                   |                 2 |              0.1832  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3689 | 10-15%                  |                 2 |              0.18445 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.369  | >20%                    |                 5 |              0.0738  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3713 | >20%                    |                 5 |              0.07426 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3743 | 5-10%                   |                10 |              0.03743 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3783 | <5%                     |                10 |              0.03783 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3863 | 10-15%                  |                 2 |              0.19315 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3908 | >20%                    |                 5 |              0.07816 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3919 | 15-20%                  |                 2 |              0.19595 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3945 | >20%                    |                 5 |              0.0789  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3951 | >20%                    |                 2 |              0.19755 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3961 | >20%                    |                 2 |              0.19805 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3963 | >20%                    |                 2 |              0.19815 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4002 | >20%                    |                 5 |              0.08004 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4011 | >20%                    |                10 |              0.04011 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4109 | >20%                    |                 2 |              0.20545 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4132 | >20%                    |                 2 |              0.2066  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4179 | 5-10%                   |                 5 |              0.08358 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.427  | >20%                    |                 5 |              0.0854  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4302 | >20%                    |                 2 |              0.2151  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4358 | 15-20%                  |                 2 |              0.2179  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4382 | >20%                    |                 2 |              0.2191  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4389 | >20%                    |                 2 |              0.21945 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4418 | >20%                    |                 5 |              0.08836 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4435 | >20%                    |                 2 |              0.22175 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.445  | >20%                    |                10 |              0.0445  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4472 | >20%                    |                 5 |              0.08944 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4492 | >20%                    |                 5 |              0.08984 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4566 | >20%                    |                 5 |              0.09132 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4581 | >20%                    |                 2 |              0.22905 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4601 | 10-15%                  |                 2 |              0.23005 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4617 | >20%                    |                 5 |              0.09234 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4624 | >20%                    |                 5 |              0.09248 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4635 | >20%                    |                 2 |              0.23175 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4649 | >20%                    |                 2 |              0.23245 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4653 | >20%                    |                 5 |              0.09306 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4667 | >20%                    |                 5 |              0.09334 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4757 | >20%                    |                 5 |              0.09514 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4763 | >20%                    |                10 |              0.04763 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4779 | >20%                    |                 5 |              0.09558 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4824 | >20%                    |                 5 |              0.09648 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4887 | <5%                     |                10 |              0.04887 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4897 | 5-10%                   |                 2 |              0.24485 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4981 | 10-15%                  |                 5 |              0.09962 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.501  | >20%                    |                 2 |              0.2505  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5043 | >20%                    |                 5 |              0.10086 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5069 | 10-15%                  |                 5 |              0.10138 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5175 | 15-20%                  |                10 |              0.05175 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5223 | 15-20%                  |                10 |              0.05223 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.524  | >20%                    |                 2 |              0.262   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5271 | >20%                    |                 5 |              0.10542 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5349 | >20%                    |                 5 |              0.10698 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5408 | >20%                    |                 5 |              0.10816 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5412 | 10-15%                  |                 2 |              0.2706  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5432 | 15-20%                  |                10 |              0.05432 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5567 | >20%                    |                 2 |              0.27835 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5573 | 15-20%                  |                10 |              0.05573 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5631 | >20%                    |                 5 |              0.11262 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5642 | >20%                    |                 5 |              0.11284 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5688 | 15-20%                  |                 5 |              0.11376 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5735 | <5%                     |                10 |              0.05735 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5742 | >20%                    |                10 |              0.05742 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5772 | 15-20%                  |                 5 |              0.11544 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5814 | 10-15%                  |                 5 |              0.11628 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5869 | >20%                    |                 5 |              0.11738 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5909 | >20%                    |                 5 |              0.11818 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6028 | >20%                    |                 2 |              0.3014  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6038 | 15-20%                  |                 2 |              0.3019  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6131 | >20%                    |                 5 |              0.12262 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6236 | >20%                    |                10 |              0.06236 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6281 | 5-10%                   |                10 |              0.06281 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6323 | >20%                    |                 2 |              0.31615 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6356 | >20%                    |                 5 |              0.12712 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6417 | >20%                    |                 5 |              0.12834 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6461 | >20%                    |                 5 |              0.12922 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6498 | >20%                    |                10 |              0.06498 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6523 | >20%                    |                10 |              0.06523 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6572 | >20%                    |                 2 |              0.3286  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6638 | 10-15%                  |                 2 |              0.3319  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6728 | >20%                    |                 5 |              0.13456 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.6748 | 10-15%                  |                 2 |              0.3374  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.677  | 15-20%                  |                 2 |              0.3385  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6845 | >20%                    |                10 |              0.06845 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6881 | 15-20%                  |                 5 |              0.13762 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6921 | >20%                    |                10 |              0.06921 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6922 | >20%                    |                10 |              0.06922 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7002 | 15-20%                  |                10 |              0.07002 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7003 | 15-20%                  |                 5 |              0.14006 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7024 | >20%                    |                 5 |              0.14048 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7107 | <5%                     |                10 |              0.07107 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7354 | >20%                    |                10 |              0.07354 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7418 | >20%                    |                 5 |              0.14836 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7453 | >20%                    |                 5 |              0.14906 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7496 | >20%                    |                 5 |              0.14992 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7531 | 5-10%                   |                10 |              0.07531 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7531 | >20%                    |                10 |              0.07531 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.7588 | 10-15%                  |                 5 |              0.15176 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7659 | >20%                    |                10 |              0.07659 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7717 | 10-15%                  |                 5 |              0.15434 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7767 | >20%                    |                 5 |              0.15534 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.78   | >20%                    |                10 |              0.078   |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7823 | 15-20%                  |                10 |              0.07823 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7844 | 10-15%                  |                10 |              0.07844 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7855 | 15-20%                  |                10 |              0.07855 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7857 | >20%                    |                 5 |              0.15714 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7893 | >20%                    |                 2 |              0.39465 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7898 | 10-15%                  |                10 |              0.07898 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8034 | >20%                    |                 5 |              0.16068 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8079 | 15-20%                  |                10 |              0.08079 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8099 | >20%                    |                10 |              0.08099 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8158 | >20%                    |                10 |              0.08158 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8181 | <5%                     |                10 |              0.08181 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8269 | 5-10%                   |                10 |              0.08269 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8664 | 5-10%                   |                10 |              0.08664 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8813 | 10-15%                  |                10 |              0.08813 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8907 | >20%                    |                 2 |              0.44535 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9022 | 15-20%                  |                10 |              0.09022 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.918  | >20%                    |                10 |              0.0918  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9233 | >20%                    |                 5 |              0.18466 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9328 | >20%                    |                10 |              0.09328 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9391 | >20%                    |                 2 |              0.46955 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9584 | >20%                    |                10 |              0.09584 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9748 | >20%                    |                 5 |              0.19496 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9754 | 5-10%                   |                10 |              0.09754 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9912 | >20%                    |                10 |              0.09912 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0272 | >20%                    |                10 |              0.10272 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0349 | >20%                    |                10 |              0.10349 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.055  | 15-20%                  |                10 |              0.1055  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0622 | 15-20%                  |                10 |              0.10622 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0669 | >20%                    |                 5 |              0.21338 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0986 | >20%                    |                 5 |              0.21972 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1468 | >20%                    |                10 |              0.11468 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1515 | 15-20%                  |                10 |              0.11515 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1576 | >20%                    |                10 |              0.11576 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1618 | >20%                    |                 5 |              0.23236 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.173  | 10-15%                  |                10 |              0.1173  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.179  | >20%                    |                10 |              0.1179  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1873 | 10-15%                  |                10 |              0.11873 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1884 | >20%                    |                 2 |              0.5942  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3515 | >20%                    |                10 |              0.13515 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3549 | >20%                    |                10 |              0.13549 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4875 | 5-10%                   |                 2 |              0.74375 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4993 | 10-15%                  |                 5 |              0.29986 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5437 | >20%                    |                10 |              0.15437 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1982 | 15-20%                  |                10 |              0.21982 |