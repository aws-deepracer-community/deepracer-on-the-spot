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

Data correct as of 2025-02-04 01:36:03.768737, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1748 | >20%                    |                 2 |              0.0874  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.1931 | >20%                    |                 2 |              0.09655 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | >20%                    |                 5 |              0.039   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2151 | <5%                     |                 2 |              0.10755 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2166 | 10-15%                  |                 5 |              0.04332 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2243 | 10-15%                  |                 2 |              0.11215 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.225  | 5-10%                   |                 2 |              0.1125  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2359 | 5-10%                   |                 2 |              0.11795 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | 10-15%                  |                 2 |              0.11935 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2416 | 10-15%                  |                 2 |              0.1208  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2512 | 5-10%                   |                 2 |              0.1256  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2526 | <5%                     |                 2 |              0.1263  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2554 | <5%                     |                 2 |              0.1277  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2655 | <5%                     |                 5 |              0.0531  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | >20%                    |                 2 |              0.1397  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.284  | 15-20%                  |                10 |              0.0284  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2923 | <5%                     |                 2 |              0.14615 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2938 | <5%                     |                 2 |              0.1469  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2981 | 5-10%                   |                 2 |              0.14905 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3022 | <5%                     |                 2 |              0.1511  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3061 | 5-10%                   |                 2 |              0.15305 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3081 | 15-20%                  |                 2 |              0.15405 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.309  | 10-15%                  |                 2 |              0.1545  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3231 | <5%                     |                 2 |              0.16155 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3282 | >20%                    |                 2 |              0.1641  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3335 | 5-10%                   |                 5 |              0.0667  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.338  | >20%                    |                 2 |              0.169   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.343  | 5-10%                   |                 2 |              0.1715  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3549 | 10-15%                  |                 5 |              0.07098 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3576 | <5%                     |                 2 |              0.1788  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3581 | 5-10%                   |                 2 |              0.17905 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3585 | >20%                    |                 2 |              0.17925 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3653 | 5-10%                   |                 2 |              0.18265 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3667 | <5%                     |                 5 |              0.07334 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3722 | 5-10%                   |                 2 |              0.1861  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3754 | 5-10%                   |                 5 |              0.07508 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3827 | <5%                     |                 5 |              0.07654 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3914 | <5%                     |                 5 |              0.07828 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3945 | >20%                    |                 2 |              0.19725 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3976 | 5-10%                   |                 5 |              0.07952 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3986 | 10-15%                  |                 2 |              0.1993  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3999 | 10-15%                  |                 5 |              0.07998 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4032 | <5%                     |                 2 |              0.2016  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4032 | 5-10%                   |                 2 |              0.2016  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4053 | 10-15%                  |                 2 |              0.20265 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.422  | 15-20%                  |                 5 |              0.0844  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.44   | <5%                     |                 2 |              0.22    |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4459 | 5-10%                   |                 2 |              0.22295 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4605 | 10-15%                  |                 5 |              0.0921  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4631 | >20%                    |                 5 |              0.09262 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4673 | <5%                     |                 5 |              0.09346 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4704 | >20%                    |                 5 |              0.09408 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4806 | <5%                     |                 2 |              0.2403  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4809 | >20%                    |                 2 |              0.24045 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4843 | 15-20%                  |                 5 |              0.09686 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4845 | 10-15%                  |                 5 |              0.0969  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4846 | >20%                    |                10 |              0.04846 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4861 | 5-10%                   |                 2 |              0.24305 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4869 | 15-20%                  |                 5 |              0.09738 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4878 | >20%                    |                 5 |              0.09756 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.4903 | 5-10%                   |                 5 |              0.09806 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4939 | <5%                     |                 5 |              0.09878 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4959 | <5%                     |                 5 |              0.09918 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4964 | >20%                    |                 2 |              0.2482  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4967 | 15-20%                  |                 5 |              0.09934 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4977 | 10-15%                  |                 2 |              0.24885 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4998 | 5-10%                   |                 5 |              0.09996 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5036 | <5%                     |                 5 |              0.10072 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5061 | <5%                     |                 5 |              0.10122 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5086 | >20%                    |                 5 |              0.10172 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5151 | 5-10%                   |                 5 |              0.10302 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5156 | <5%                     |                 2 |              0.2578  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5174 | <5%                     |                10 |              0.05174 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5244 | 5-10%                   |                 2 |              0.2622  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5252 | 10-15%                  |                 2 |              0.2626  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5301 | 10-15%                  |                 5 |              0.10602 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5348 | <5%                     |                 5 |              0.10696 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5411 | 10-15%                  |                 5 |              0.10822 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5539 | <5%                     |                 5 |              0.11078 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.555  | >20%                    |                 5 |              0.111   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5568 | 5-10%                   |                 5 |              0.11136 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5657 | 15-20%                  |                 5 |              0.11314 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5664 | 15-20%                  |                 2 |              0.2832  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.575  | 15-20%                  |                 2 |              0.2875  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5774 | 5-10%                   |                 5 |              0.11548 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5843 | 5-10%                   |                 5 |              0.11686 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.585  | 5-10%                   |                10 |              0.0585  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5933 | 5-10%                   |                 5 |              0.11866 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5941 | 10-15%                  |                10 |              0.05941 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5997 | >20%                    |                 2 |              0.29985 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6117 | 5-10%                   |                10 |              0.06117 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.6156 | 15-20%                  |                 2 |              0.3078  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6237 | 5-10%                   |                 5 |              0.12474 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6239 | >20%                    |                 2 |              0.31195 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6323 | 5-10%                   |                 5 |              0.12646 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6336 | <5%                     |                10 |              0.06336 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6336 | >20%                    |                 2 |              0.3168  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6433 | <5%                     |                10 |              0.06433 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6437 | >20%                    |                 2 |              0.32185 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6454 | >20%                    |                10 |              0.06454 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6555 | >20%                    |                 5 |              0.1311  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6573 | 5-10%                   |                10 |              0.06573 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6671 | 10-15%                  |                10 |              0.06671 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6688 | 5-10%                   |                 5 |              0.13376 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6736 | 5-10%                   |                10 |              0.06736 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6802 | 15-20%                  |                10 |              0.06802 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6865 | <5%                     |                10 |              0.06865 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6973 | 5-10%                   |                 5 |              0.13946 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6994 | 5-10%                   |                10 |              0.06994 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6998 | <5%                     |                 5 |              0.13996 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7021 | >20%                    |                 5 |              0.14042 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7134 | 10-15%                  |                10 |              0.07134 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7172 | 10-15%                  |                10 |              0.07172 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7312 | >20%                    |                 5 |              0.14624 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7345 | >20%                    |                10 |              0.07345 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7388 | 5-10%                   |                10 |              0.07388 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7469 | <5%                     |                 2 |              0.37345 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7504 | >20%                    |                 5 |              0.15008 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7509 | 15-20%                  |                10 |              0.07509 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7593 | 10-15%                  |                10 |              0.07593 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7647 | 5-10%                   |                10 |              0.07647 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7938 | >20%                    |                10 |              0.07938 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7965 | 15-20%                  |                10 |              0.07965 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7974 | <5%                     |                10 |              0.07974 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7989 | 15-20%                  |                 2 |              0.39945 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8038 | 10-15%                  |                 5 |              0.16076 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8158 | 5-10%                   |                10 |              0.08158 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8279 | 5-10%                   |                10 |              0.08279 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8454 | <5%                     |                10 |              0.08454 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8616 | >20%                    |                10 |              0.08616 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.8654 | >20%                    |                 5 |              0.17308 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8668 | 5-10%                   |                10 |              0.08668 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8669 | <5%                     |                10 |              0.08669 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8703 | <5%                     |                10 |              0.08703 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8816 | 10-15%                  |                 2 |              0.4408  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8841 | 5-10%                   |                 5 |              0.17682 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8853 | <5%                     |                10 |              0.08853 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.8896 | <5%                     |                 5 |              0.17792 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8972 | <5%                     |                10 |              0.08972 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8973 | 5-10%                   |                10 |              0.08973 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9116 | <5%                     |                10 |              0.09116 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9157 | 5-10%                   |                10 |              0.09157 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9332 | >20%                    |                10 |              0.09332 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9384 | 15-20%                  |                 2 |              0.4692  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9388 | 5-10%                   |                10 |              0.09388 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9485 | 15-20%                  |                10 |              0.09485 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.958  | 15-20%                  |                10 |              0.0958  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.963  | 5-10%                   |                 5 |              0.1926  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9754 | 5-10%                   |                 5 |              0.19508 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0066 | >20%                    |                10 |              0.10066 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0204 | <5%                     |                10 |              0.10204 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0828 | 15-20%                  |                 5 |              0.21656 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0938 | 5-10%                   |                10 |              0.10938 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0977 | 10-15%                  |                 2 |              0.54885 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1247 | 10-15%                  |                10 |              0.11247 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1786 | 10-15%                  |                10 |              0.11786 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.208  | 10-15%                  |                 2 |              0.604   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2143 | >20%                    |                10 |              0.12143 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2303 | >20%                    |                10 |              0.12303 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.237  | 5-10%                   |                10 |              0.1237  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.2524 | 10-15%                  |                10 |              0.12524 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.254  | 15-20%                  |                 5 |              0.2508  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3528 | 15-20%                  |                10 |              0.13528 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3558 | 5-10%                   |                10 |              0.13558 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4224 | 5-10%                   |                10 |              0.14224 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9866 | 5-10%                   |                10 |              0.19866 |