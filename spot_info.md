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

Data correct as of 2025-02-14 01:37:35.017678, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1214 | >20%                    |                 2 |              0.0607  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1594 | <5%                     |                 5 |              0.03188 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 15-20%                  |                 5 |              0.039   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.1975 | 10-15%                  |                 2 |              0.09875 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2162 | 5-10%                   |                 2 |              0.1081  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2176 | <5%                     |                 5 |              0.04352 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2241 | <5%                     |                 2 |              0.11205 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2271 | >20%                    |                 2 |              0.11355 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2333 | >20%                    |                 2 |              0.11665 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2344 | 15-20%                  |                 2 |              0.1172  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2362 | 15-20%                  |                 2 |              0.1181  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2466 | 5-10%                   |                 2 |              0.1233  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2622 | 10-15%                  |                 2 |              0.1311  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2704 | >20%                    |                 2 |              0.1352  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2771 | <5%                     |                 2 |              0.13855 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2879 | 5-10%                   |                 2 |              0.14395 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2879 | 15-20%                  |                 2 |              0.14395 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.29   | <5%                     |                 2 |              0.145   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2917 | 15-20%                  |                 5 |              0.05834 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2986 | <5%                     |                 2 |              0.1493  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2987 | 5-10%                   |                 2 |              0.14935 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2994 | <5%                     |                 2 |              0.1497  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3102 | <5%                     |                10 |              0.03102 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3135 | 10-15%                  |                 2 |              0.15675 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3155 | 10-15%                  |                 2 |              0.15775 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3287 | 5-10%                   |                10 |              0.03287 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3334 | <5%                     |                 2 |              0.1667  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3383 | >20%                    |                 2 |              0.16915 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3395 | >20%                    |                 2 |              0.16975 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3432 | <5%                     |                10 |              0.03432 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3451 | 15-20%                  |                 5 |              0.06902 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3464 | >20%                    |                 5 |              0.06928 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3642 | 10-15%                  |                 2 |              0.1821  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3693 | 10-15%                  |                 5 |              0.07386 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3694 | <5%                     |                 2 |              0.1847  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3712 | 5-10%                   |                 2 |              0.1856  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3744 | 15-20%                  |                 2 |              0.1872  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3749 | 5-10%                   |                 2 |              0.18745 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3821 | <5%                     |                 5 |              0.07642 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3878 | 5-10%                   |                 5 |              0.07756 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3984 | >20%                    |                 5 |              0.07968 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.399  | 5-10%                   |                 2 |              0.1995  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4029 | <5%                     |                 2 |              0.20145 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4037 | 10-15%                  |                 2 |              0.20185 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4091 | >20%                    |                 2 |              0.20455 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4121 | 5-10%                   |                 2 |              0.20605 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.413  | 5-10%                   |                 5 |              0.0826  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4227 | 15-20%                  |                10 |              0.04227 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4259 | <5%                     |                 5 |              0.08518 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4302 | <5%                     |                 2 |              0.2151  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4306 | >20%                    |                10 |              0.04306 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4314 | >20%                    |                 5 |              0.08628 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.436  | >20%                    |                 5 |              0.0872  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4474 | <5%                     |                 2 |              0.2237  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4478 | >20%                    |                 5 |              0.08956 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4541 | 5-10%                   |                10 |              0.04541 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4579 | >20%                    |                 5 |              0.09158 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4757 | 15-20%                  |                 5 |              0.09514 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4773 | 5-10%                   |                 5 |              0.09546 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4881 | 5-10%                   |                 5 |              0.09762 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4888 | 10-15%                  |                 5 |              0.09776 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4942 | >20%                    |                 2 |              0.2471  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4951 | >20%                    |                 2 |              0.24755 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4969 | >20%                    |                 2 |              0.24845 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4979 | <5%                     |                 5 |              0.09958 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4985 | >20%                    |                 5 |              0.0997  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4994 | 5-10%                   |                 2 |              0.2497  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5014 | >20%                    |                 5 |              0.10028 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5053 | >20%                    |                10 |              0.05053 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5079 | <5%                     |                 5 |              0.10158 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5128 | 10-15%                  |                 5 |              0.10256 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5192 | <5%                     |                 2 |              0.2596  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.526  | >20%                    |                 2 |              0.263   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5275 | >20%                    |                 2 |              0.26375 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5282 | 15-20%                  |                 2 |              0.2641  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5302 | 10-15%                  |                 5 |              0.10604 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5365 | >20%                    |                 2 |              0.26825 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5451 | >20%                    |                 5 |              0.10902 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5462 | 10-15%                  |                 5 |              0.10924 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5529 | <5%                     |                 5 |              0.11058 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5556 | >20%                    |                 5 |              0.11112 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5577 | 5-10%                   |                 5 |              0.11154 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5588 | >20%                    |                 2 |              0.2794  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5617 | <5%                     |                 5 |              0.11234 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.564  | >20%                    |                 2 |              0.282   |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5704 | 10-15%                  |                 2 |              0.2852  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5714 | >20%                    |                 2 |              0.2857  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5733 | 10-15%                  |                 5 |              0.11466 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5779 | 5-10%                   |                10 |              0.05779 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5837 | 10-15%                  |                 5 |              0.11674 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6045 | 5-10%                   |                 5 |              0.1209  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6114 | 5-10%                   |                10 |              0.06114 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6204 | >20%                    |                 5 |              0.12408 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6232 | 5-10%                   |                 5 |              0.12464 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.641  | >20%                    |                 2 |              0.3205  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6438 | >20%                    |                10 |              0.06438 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6462 | <5%                     |                10 |              0.06462 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6571 | >20%                    |                10 |              0.06571 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6599 | <5%                     |                10 |              0.06599 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6639 | 10-15%                  |                 5 |              0.13278 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6663 | >20%                    |                 5 |              0.13326 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6705 | 10-15%                  |                 5 |              0.1341  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6788 | >20%                    |                 5 |              0.13576 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6826 | >20%                    |                 2 |              0.3413  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6963 | 15-20%                  |                 5 |              0.13926 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6974 | >20%                    |                10 |              0.06974 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6994 | >20%                    |                10 |              0.06994 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6995 | 5-10%                   |                 5 |              0.1399  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7141 | >20%                    |                 5 |              0.14282 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7288 | 5-10%                   |                10 |              0.07288 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7455 | >20%                    |                 5 |              0.1491  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7464 | <5%                     |                 5 |              0.14928 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7596 | >20%                    |                 5 |              0.15192 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7634 | >20%                    |                10 |              0.07634 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7634 | >20%                    |                 5 |              0.15268 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7686 | <5%                     |                10 |              0.07686 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7709 | >20%                    |                10 |              0.07709 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7883 | >20%                    |                10 |              0.07883 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.792  | >20%                    |                 5 |              0.1584  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8043 | 5-10%                   |                 2 |              0.40215 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8061 | 10-15%                  |                10 |              0.08061 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8078 | 15-20%                  |                10 |              0.08078 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.8099 | <5%                     |                 5 |              0.16198 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8172 | <5%                     |                10 |              0.08172 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8179 | >20%                    |                10 |              0.08179 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8216 | 15-20%                  |                10 |              0.08216 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.826  | 5-10%                   |                10 |              0.0826  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8456 | 15-20%                  |                 2 |              0.4228  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8466 | >20%                    |                10 |              0.08466 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8516 | <5%                     |                10 |              0.08516 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8549 | <5%                     |                10 |              0.08549 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8563 | 15-20%                  |                10 |              0.08563 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8632 | 10-15%                  |                10 |              0.08632 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8664 | 10-15%                  |                10 |              0.08664 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8757 | >20%                    |                10 |              0.08757 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8759 | 15-20%                  |                10 |              0.08759 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8808 | <5%                     |                10 |              0.08808 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8937 | >20%                    |                 2 |              0.44685 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8989 | 15-20%                  |                 5 |              0.17978 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8996 | 15-20%                  |                 5 |              0.17992 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9122 | <5%                     |                10 |              0.09122 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9156 | <5%                     |                10 |              0.09156 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9186 | <5%                     |                10 |              0.09186 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9615 | 10-15%                  |                10 |              0.09615 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9713 | 10-15%                  |                10 |              0.09713 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9811 | >20%                    |                10 |              0.09811 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0049 | >20%                    |                10 |              0.10049 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0576 | <5%                     |                10 |              0.10576 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0879 | >20%                    |                 2 |              0.54395 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1003 | 15-20%                  |                10 |              0.11003 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1305 | 15-20%                  |                10 |              0.11305 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1318 | >20%                    |                 2 |              0.5659  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1351 | 5-10%                   |                10 |              0.11351 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1741 | >20%                    |                 5 |              0.23482 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1747 | >20%                    |                10 |              0.11747 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2011 | 10-15%                  |                 2 |              0.60055 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.207  | >20%                    |                 5 |              0.2414  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2459 | 10-15%                  |                 5 |              0.24918 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2816 | >20%                    |                10 |              0.12816 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3247 | >20%                    |                10 |              0.13247 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3568 | <5%                     |                10 |              0.13568 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3726 | >20%                    |                10 |              0.13726 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5009 | >20%                    |                10 |              0.15009 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7904 | >20%                    |                10 |              0.17904 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0664 | 5-10%                   |                10 |              0.20664 |