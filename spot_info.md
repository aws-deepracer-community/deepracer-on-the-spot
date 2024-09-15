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

Data correct as of 2024-09-15 01:41:31.861487, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0898 | <5%                     |                 2 |              0.0449  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2056 | >20%                    |                 5 |              0.04112 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2108 | 5-10%                   |                 2 |              0.1054  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2292 | 15-20%                  |                 5 |              0.04584 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2327 | 15-20%                  |                 2 |              0.11635 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2334 | <5%                     |                 2 |              0.1167  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.241  | 10-15%                  |                 2 |              0.1205  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2519 | 5-10%                   |                 2 |              0.12595 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2623 | <5%                     |                 2 |              0.13115 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2727 | >20%                    |                10 |              0.02727 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2734 | <5%                     |                 2 |              0.1367  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2744 | <5%                     |                 2 |              0.1372  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.29   | 10-15%                  |                 2 |              0.145   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.302  | <5%                     |                 5 |              0.0604  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3023 | <5%                     |                10 |              0.03023 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.306  | <5%                     |                 2 |              0.153   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3083 | <5%                     |                 2 |              0.15415 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3209 | <5%                     |                 5 |              0.06418 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3234 | <5%                     |                 2 |              0.1617  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3619 | <5%                     |                 2 |              0.18095 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3621 | 15-20%                  |                 5 |              0.07242 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3623 | <5%                     |                 2 |              0.18115 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3648 | <5%                     |                 2 |              0.1824  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3681 | >20%                    |                 5 |              0.07362 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3686 | 5-10%                   |                 5 |              0.07372 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3697 | 15-20%                  |                10 |              0.03697 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3786 | <5%                     |                 2 |              0.1893  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3827 | <5%                     |                 5 |              0.07654 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3868 | <5%                     |                 2 |              0.1934  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3876 | 10-15%                  |                 2 |              0.1938  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4073 | <5%                     |                 2 |              0.20365 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4098 | >20%                    |                 2 |              0.2049  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4132 | >20%                    |                 2 |              0.2066  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4151 | 15-20%                  |                 5 |              0.08302 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4209 | 5-10%                   |                 2 |              0.21045 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4234 | 5-10%                   |                 2 |              0.2117  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4284 | <5%                     |                 2 |              0.2142  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4564 | 10-15%                  |                 5 |              0.09128 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4567 | >20%                    |                 2 |              0.22835 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4583 | <5%                     |                 5 |              0.09166 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4596 | 15-20%                  |                 5 |              0.09192 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4689 | <5%                     |                 5 |              0.09378 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | 5-10%                   |                 5 |              0.09396 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.472  | <5%                     |                 5 |              0.0944  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4757 | 10-15%                  |                 2 |              0.23785 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4772 | >20%                    |                 2 |              0.2386  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4782 | <5%                     |                10 |              0.04782 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4829 | <5%                     |                 5 |              0.09658 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4871 | <5%                     |                 5 |              0.09742 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4914 | >20%                    |                 2 |              0.2457  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4916 | 10-15%                  |                 5 |              0.09832 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4961 | 5-10%                   |                 5 |              0.09922 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5107 | <5%                     |                 5 |              0.10214 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5179 | >20%                    |                 5 |              0.10358 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5192 | >20%                    |                 5 |              0.10384 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5215 | >20%                    |                 2 |              0.26075 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5316 | >20%                    |                 5 |              0.10632 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5388 | <5%                     |                 5 |              0.10776 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.5644 | <5%                     |                10 |              0.05644 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.57   | <5%                     |                 5 |              0.114   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5893 | <5%                     |                 5 |              0.11786 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5895 | >20%                    |                 5 |              0.1179  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5941 | 15-20%                  |                 2 |              0.29705 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5972 | >20%                    |                 2 |              0.2986  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5986 | >20%                    |                 5 |              0.11972 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6058 | 5-10%                   |                 5 |              0.12116 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6078 | >20%                    |                 5 |              0.12156 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6084 | >20%                    |                 5 |              0.12168 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6222 | 15-20%                  |                 2 |              0.3111  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6351 | 5-10%                   |                10 |              0.06351 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6462 | 10-15%                  |                10 |              0.06462 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6735 | <5%                     |                 2 |              0.33675 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6968 | <5%                     |                10 |              0.06968 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7034 | >20%                    |                 2 |              0.3517  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7077 | >20%                    |                10 |              0.07077 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7097 | <5%                     |                10 |              0.07097 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7545 | 15-20%                  |                10 |              0.07545 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7696 | >20%                    |                 5 |              0.15392 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7758 | 10-15%                  |                10 |              0.07758 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7794 | 15-20%                  |                10 |              0.07794 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7829 | >20%                    |                10 |              0.07829 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7934 | >20%                    |                 5 |              0.15868 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7987 | >20%                    |                10 |              0.07987 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8148 | 5-10%                   |                 2 |              0.4074  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8263 | <5%                     |                 5 |              0.16526 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8271 | 10-15%                  |                10 |              0.08271 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8341 | >20%                    |                10 |              0.08341 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8469 | <5%                     |                10 |              0.08469 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8657 | <5%                     |                 2 |              0.43285 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8704 | 5-10%                   |                 5 |              0.17408 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8735 | >20%                    |                10 |              0.08735 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.883  | >20%                    |                10 |              0.0883  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8863 | <5%                     |                10 |              0.08863 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8906 | >20%                    |                10 |              0.08906 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9256 | >20%                    |                 5 |              0.18512 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9263 | >20%                    |                 5 |              0.18526 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9368 | <5%                     |                10 |              0.09368 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9451 | >20%                    |                10 |              0.09451 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9588 | >20%                    |                10 |              0.09588 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9861 | <5%                     |                10 |              0.09861 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0188 | 5-10%                   |                10 |              0.10188 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0359 | >20%                    |                10 |              0.10359 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0373 | 10-15%                  |                10 |              0.10373 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1246 | 5-10%                   |                 5 |              0.22492 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1423 | >20%                    |                10 |              0.11423 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.143  | 15-20%                  |                10 |              0.1143  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1508 | >20%                    |                10 |              0.11508 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2192 | >20%                    |                10 |              0.12192 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2981 | <5%                     |                10 |              0.12981 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4403 | >20%                    |                10 |              0.14403 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6383 | 5-10%                   |                10 |              0.16383 |