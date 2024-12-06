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

Data correct as of 2024-12-06 01:45:20.384167, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1365 | 10-15%                  |                 2 |              0.06825 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1814 | >20%                    |                 5 |              0.03628 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1824 | <5%                     |                 2 |              0.0912  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.205  | 10-15%                  |                 2 |              0.1025  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2112 | 5-10%                   |                 2 |              0.1056  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2228 | >20%                    |                 5 |              0.04456 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2306 | 15-20%                  |                 2 |              0.1153  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2311 | 5-10%                   |                 2 |              0.11555 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.232  | 15-20%                  |                 5 |              0.0464  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2322 | >20%                    |                 5 |              0.04644 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2336 | <5%                     |                 2 |              0.1168  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2423 | <5%                     |                 2 |              0.12115 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2502 | <5%                     |                 5 |              0.05004 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2581 | <5%                     |                10 |              0.02581 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2629 | >20%                    |                 5 |              0.05258 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2639 | 10-15%                  |                 2 |              0.13195 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2791 | 5-10%                   |                 2 |              0.13955 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2792 | <5%                     |                 2 |              0.1396  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2969 | 10-15%                  |                 2 |              0.14845 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2994 | 5-10%                   |                 2 |              0.1497  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3058 | >20%                    |                 5 |              0.06116 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3086 | <5%                     |                 2 |              0.1543  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3182 | 5-10%                   |                 2 |              0.1591  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3379 | 5-10%                   |                 2 |              0.16895 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3396 | >20%                    |                 2 |              0.1698  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3399 | >20%                    |                10 |              0.03399 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3409 | >20%                    |                 2 |              0.17045 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3454 | >20%                    |                 5 |              0.06908 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3471 | <5%                     |                 2 |              0.17355 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3482 | <5%                     |                 2 |              0.1741  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3485 | <5%                     |                 5 |              0.0697  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.349  | <5%                     |                 5 |              0.0698  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3558 | 15-20%                  |                 2 |              0.1779  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3624 | >20%                    |                 2 |              0.1812  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3657 | <5%                     |                10 |              0.03657 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3718 | >20%                    |                 2 |              0.1859  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3718 | 10-15%                  |                10 |              0.03718 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3737 | >20%                    |                 2 |              0.18685 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3767 | <5%                     |                 2 |              0.18835 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3799 | 15-20%                  |                 2 |              0.18995 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3873 | <5%                     |                 5 |              0.07746 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4031 | 15-20%                  |                 5 |              0.08062 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4042 | 10-15%                  |                10 |              0.04042 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4056 | 5-10%                   |                 2 |              0.2028  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4101 | <5%                     |                 2 |              0.20505 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4182 | 5-10%                   |                 2 |              0.2091  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4191 | 5-10%                   |                 5 |              0.08382 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4231 | 5-10%                   |                 2 |              0.21155 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4421 | 15-20%                  |                 5 |              0.08842 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4442 | >20%                    |                 2 |              0.2221  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4468 | <5%                     |                 2 |              0.2234  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4475 | 10-15%                  |                 2 |              0.22375 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.462  | 10-15%                  |                 5 |              0.0924  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4662 | >20%                    |                 2 |              0.2331  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | 15-20%                  |                 5 |              0.09396 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4713 | <5%                     |                 2 |              0.23565 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4762 | <5%                     |                 5 |              0.09524 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4861 | 5-10%                   |                 5 |              0.09722 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4895 | 5-10%                   |                 2 |              0.24475 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5002 | 10-15%                  |                 2 |              0.2501  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.503  | >20%                    |                 5 |              0.1006  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5053 | 5-10%                   |                 2 |              0.25265 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.506  | <5%                     |                 5 |              0.1012  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5062 | 10-15%                  |                 2 |              0.2531  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5136 | <5%                     |                 5 |              0.10272 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5143 | 10-15%                  |                10 |              0.05143 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5189 | 15-20%                  |                 5 |              0.10378 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5194 | >20%                    |                 5 |              0.10388 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.52   | 5-10%                   |                 5 |              0.104   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.527  | <5%                     |                 5 |              0.1054  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5307 | <5%                     |                 5 |              0.10614 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5403 | >20%                    |                 5 |              0.10806 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5416 | >20%                    |                 5 |              0.10832 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5438 | 10-15%                  |                 5 |              0.10876 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.548  | >20%                    |                 2 |              0.274   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.5532 |                         |                 2 |              0.2766  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5563 | 10-15%                  |                 5 |              0.11126 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5589 | <5%                     |                 5 |              0.11178 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5597 | 5-10%                   |                 5 |              0.11194 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5718 | 15-20%                  |                 2 |              0.2859  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5739 | 10-15%                  |                 5 |              0.11478 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5837 | >20%                    |                 5 |              0.11674 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5959 | >20%                    |                10 |              0.05959 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6147 | 10-15%                  |                10 |              0.06147 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6276 | 15-20%                  |                10 |              0.06276 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6314 | 5-10%                   |                10 |              0.06314 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6391 | 5-10%                   |                10 |              0.06391 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.6472 | 5-10%                   |                10 |              0.06472 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6477 | >20%                    |                10 |              0.06477 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6511 | >20%                    |                10 |              0.06511 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6571 | >20%                    |                10 |              0.06571 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6636 | >20%                    |                 2 |              0.3318  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6666 | 5-10%                   |                 5 |              0.13332 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6671 | <5%                     |                 5 |              0.13342 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6765 | >20%                    |                10 |              0.06765 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6819 | 10-15%                  |                10 |              0.06819 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6856 | 5-10%                   |                 5 |              0.13712 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6978 | <5%                     |                 5 |              0.13956 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7258 | 15-20%                  |                 5 |              0.14516 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.728  | 15-20%                  |                 5 |              0.1456  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7351 | 5-10%                   |                 2 |              0.36755 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7437 | 5-10%                   |                10 |              0.07437 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7548 | <5%                     |                 2 |              0.3774  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.7641 |                         |                 5 |              0.15282 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7666 | >20%                    |                10 |              0.07666 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7876 | <5%                     |                 5 |              0.15752 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7917 | <5%                     |                10 |              0.07917 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8096 | 5-10%                   |                10 |              0.08096 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8185 | >20%                    |                 5 |              0.1637  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8279 | 10-15%                  |                10 |              0.08279 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8295 | 5-10%                   |                 5 |              0.1659  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8366 | 5-10%                   |                10 |              0.08366 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8443 | 10-15%                  |                10 |              0.08443 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8539 | 5-10%                   |                10 |              0.08539 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9002 | >20%                    |                10 |              0.09002 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9436 | <5%                     |                 5 |              0.18872 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9436 | <5%                     |                10 |              0.09436 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9442 | 15-20%                  |                10 |              0.09442 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.946  | 5-10%                   |                10 |              0.0946  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9461 | 5-10%                   |                10 |              0.09461 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9508 | 5-10%                   |                10 |              0.09508 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9898 | >20%                    |                10 |              0.09898 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9903 | <5%                     |                10 |              0.09903 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9939 | 5-10%                   |                10 |              0.09939 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0151 | 15-20%                  |                10 |              0.10151 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0294 | >20%                    |                10 |              0.10294 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0585 | 5-10%                   |                10 |              0.10585 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1019 | <5%                     |                10 |              0.11019 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1378 | <5%                     |                10 |              0.11378 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1756 | 10-15%                  |                10 |              0.11756 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1792 | 15-20%                  |                10 |              0.11792 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.197  |                         |                10 |              0.1197  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.336  | >20%                    |                10 |              0.1336  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4633 | >20%                    |                10 |              0.14633 |