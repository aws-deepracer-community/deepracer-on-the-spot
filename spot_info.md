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

Data correct as of 2025-07-09 01:59:26.735548, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1635 | 5-10%                   |                 2 |              0.08175 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1654 | <5%                     |                 2 |              0.0827  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1667 | >20%                    |                 5 |              0.03334 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1675 | >20%                    |                 2 |              0.08375 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1694 | >20%                    |                 5 |              0.03388 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1745 | 10-15%                  |                 5 |              0.0349  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.184  | >20%                    |                 2 |              0.092   |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2014 | >20%                    |                10 |              0.02014 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2034 | >20%                    |                 5 |              0.04068 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2208 | 10-15%                  |                 5 |              0.04416 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2263 | >20%                    |                 2 |              0.11315 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2274 | 15-20%                  |                 2 |              0.1137  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2307 | >20%                    |                 2 |              0.11535 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | >20%                    |                10 |              0.02395 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2421 | >20%                    |                 5 |              0.04842 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2449 | >20%                    |                 2 |              0.12245 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2492 | 5-10%                   |                 2 |              0.1246  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2523 | >20%                    |                 2 |              0.12615 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2535 | 15-20%                  |                 2 |              0.12675 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2554 | >20%                    |                 2 |              0.1277  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2753 | 5-10%                   |                10 |              0.02753 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2837 | >20%                    |                 2 |              0.14185 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | >20%                    |                10 |              0.0294  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.294  | >20%                    |                 2 |              0.147   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2997 | <5%                     |                 2 |              0.14985 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3058 | >20%                    |                 5 |              0.06116 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3128 | <5%                     |                10 |              0.03128 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3142 | 5-10%                   |                 2 |              0.1571  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3194 | 10-15%                  |                 2 |              0.1597  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3195 | 15-20%                  |                 2 |              0.15975 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3198 | >20%                    |                 2 |              0.1599  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3318 | <5%                     |                 2 |              0.1659  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3478 | >20%                    |                10 |              0.03478 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3488 | >20%                    |                 2 |              0.1744  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3519 | 15-20%                  |                 5 |              0.07038 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3525 | >20%                    |                 2 |              0.17625 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3584 | >20%                    |                 5 |              0.07168 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.37   | >20%                    |                 5 |              0.074   |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.37   | >20%                    |                 2 |              0.185   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3746 | >20%                    |                 2 |              0.1873  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3749 | >20%                    |                 2 |              0.18745 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.381  | 5-10%                   |                 2 |              0.1905  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3947 | >20%                    |                 2 |              0.19735 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3991 | >20%                    |                 2 |              0.19955 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3999 | >20%                    |                 5 |              0.07998 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4021 | 10-15%                  |                 5 |              0.08042 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.422  | >20%                    |                 2 |              0.211   |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4229 | 5-10%                   |                 2 |              0.21145 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4285 | >20%                    |                 2 |              0.21425 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4354 | >20%                    |                 5 |              0.08708 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4356 | <5%                     |                 2 |              0.2178  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4366 | <5%                     |                 5 |              0.08732 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4385 | >20%                    |                 2 |              0.21925 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4402 | >20%                    |                 2 |              0.2201  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4485 | >20%                    |                 5 |              0.0897  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.449  | 15-20%                  |                 5 |              0.0898  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4494 | >20%                    |                 5 |              0.08988 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4502 | 10-15%                  |                 2 |              0.2251  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.452  | >20%                    |                10 |              0.0452  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4558 | >20%                    |                 2 |              0.2279  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4558 | >20%                    |                 2 |              0.2279  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4568 | >20%                    |                 5 |              0.09136 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4647 | >20%                    |                 2 |              0.23235 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4691 | <5%                     |                 2 |              0.23455 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.471  | >20%                    |                 5 |              0.0942  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4882 | 5-10%                   |                 2 |              0.2441  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4904 | >20%                    |                 2 |              0.2452  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4983 | <5%                     |                 5 |              0.09966 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4992 | >20%                    |                10 |              0.04992 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4992 | >20%                    |                 2 |              0.2496  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4995 | 10-15%                  |                 5 |              0.0999  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.504  | >20%                    |                 5 |              0.1008  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5077 | 15-20%                  |                 5 |              0.10154 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5092 | 15-20%                  |                 2 |              0.2546  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5101 | 15-20%                  |                 5 |              0.10202 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5141 | >20%                    |                 2 |              0.25705 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5142 | >20%                    |                 2 |              0.2571  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5151 | <5%                     |                 5 |              0.10302 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.528  | >20%                    |                 5 |              0.1056  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.528  | >20%                    |                 2 |              0.264   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5317 | >20%                    |                 5 |              0.10634 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5325 | >20%                    |                 5 |              0.1065  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5377 | >20%                    |                 5 |              0.10754 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5495 | >20%                    |                10 |              0.05495 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5517 | 15-20%                  |                10 |              0.05517 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5523 | >20%                    |                 5 |              0.11046 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5574 | >20%                    |                 5 |              0.11148 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.5623 | >20%                    |                10 |              0.05623 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5723 | <5%                     |                 5 |              0.11446 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5763 | >20%                    |                 2 |              0.28815 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5814 | >20%                    |                 5 |              0.11628 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5818 | >20%                    |                 2 |              0.2909  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5849 | >20%                    |                 2 |              0.29245 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.59   | >20%                    |                 2 |              0.295   |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5915 | >20%                    |                 2 |              0.29575 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5937 | >20%                    |                 5 |              0.11874 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6025 | 10-15%                  |                 5 |              0.1205  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.606  | 10-15%                  |                 5 |              0.1212  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6099 | >20%                    |                 5 |              0.12198 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6124 | >20%                    |                10 |              0.06124 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6159 | 15-20%                  |                10 |              0.06159 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6271 | >20%                    |                10 |              0.06271 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6312 | 5-10%                   |                 2 |              0.3156  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6376 | 10-15%                  |                 2 |              0.3188  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6423 | >20%                    |                 5 |              0.12846 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6426 | >20%                    |                 5 |              0.12852 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6445 | >20%                    |                 2 |              0.32225 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6601 | 15-20%                  |                 5 |              0.13202 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6611 | >20%                    |                 5 |              0.13222 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6628 | >20%                    |                 5 |              0.13256 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6639 | 5-10%                   |                 5 |              0.13278 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6661 | >20%                    |                 5 |              0.13322 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6674 | 10-15%                  |                10 |              0.06674 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6782 | 5-10%                   |                 5 |              0.13564 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6855 | >20%                    |                10 |              0.06855 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.687  | >20%                    |                10 |              0.0687  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.695  | >20%                    |                 5 |              0.139   |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6958 | <5%                     |                 5 |              0.13916 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.717  | >20%                    |                 5 |              0.1434  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7335 | >20%                    |                 5 |              0.1467  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7437 | <5%                     |                 5 |              0.14874 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7532 | >20%                    |                 5 |              0.15064 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7551 | >20%                    |                10 |              0.07551 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7575 | >20%                    |                 5 |              0.1515  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.765  | <5%                     |                10 |              0.0765  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7664 | >20%                    |                 2 |              0.3832  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.77   | 10-15%                  |                10 |              0.077   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7718 | 10-15%                  |                10 |              0.07718 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.773  | 15-20%                  |                10 |              0.0773  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7826 | 5-10%                   |                10 |              0.07826 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7852 | >20%                    |                 5 |              0.15704 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8028 | 5-10%                   |                10 |              0.08028 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8102 | 10-15%                  |                 5 |              0.16204 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8308 | 10-15%                  |                10 |              0.08308 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8391 | 5-10%                   |                10 |              0.08391 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8416 | <5%                     |                10 |              0.08416 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8577 | 5-10%                   |                10 |              0.08577 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8611 | >20%                    |                10 |              0.08611 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8617 | <5%                     |                10 |              0.08617 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8681 | >20%                    |                10 |              0.08681 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8721 | >20%                    |                10 |              0.08721 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.876  | >20%                    |                 5 |              0.1752  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8793 | >20%                    |                10 |              0.08793 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8893 | 15-20%                  |                10 |              0.08893 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9086 | >20%                    |                 5 |              0.18172 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9125 | >20%                    |                10 |              0.09125 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9167 | >20%                    |                10 |              0.09167 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9316 | 15-20%                  |                10 |              0.09316 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9321 | >20%                    |                10 |              0.09321 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9332 | >20%                    |                10 |              0.09332 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9434 | 5-10%                   |                10 |              0.09434 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9509 | 15-20%                  |                10 |              0.09509 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9553 | >20%                    |                10 |              0.09553 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9578 | >20%                    |                10 |              0.09578 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0215 | >20%                    |                10 |              0.10215 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0469 | <5%                     |                10 |              0.10469 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0518 | <5%                     |                10 |              0.10518 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0565 | >20%                    |                 2 |              0.52825 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0611 | <5%                     |                10 |              0.10611 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0688 | >20%                    |                10 |              0.10688 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0823 | >20%                    |                 2 |              0.54115 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0858 | <5%                     |                 2 |              0.5429  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1151 | >20%                    |                10 |              0.11151 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1232 | 15-20%                  |                10 |              0.11232 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1355 | >20%                    |                10 |              0.11355 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1775 | >20%                    |                 2 |              0.58875 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.204  | <5%                     |                10 |              0.1204  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.222  | >20%                    |                 2 |              0.611   |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2357 | >20%                    |                10 |              0.12357 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2396 | >20%                    |                 5 |              0.24792 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2416 | <5%                     |                 5 |              0.24832 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2824 | 15-20%                  |                10 |              0.12824 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2881 | >20%                    |                 5 |              0.25762 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3268 | 10-15%                  |                10 |              0.13268 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4421 | >20%                    |                10 |              0.14421 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4741 | <5%                     |                 5 |              0.29482 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4999 | >20%                    |                 5 |              0.29998 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6272 | 15-20%                  |                10 |              0.16272 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8231 | >20%                    |                10 |              0.18231 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8624 | <5%                     |                10 |              0.18624 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.036  | 5-10%                   |                10 |              0.2036  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      2.0412 | <5%                     |                 2 |              1.0206  |