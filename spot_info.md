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

Data correct as of 2025-03-20 01:42:54.713240, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1206 | 10-15%                  |                 2 |              0.0603  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1418 | 5-10%                   |                 5 |              0.02836 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1821 | >20%                    |                 5 |              0.03642 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1958 | >20%                    |                 2 |              0.0979  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1967 | 10-15%                  |                 2 |              0.09835 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2106 | 5-10%                   |                 2 |              0.1053  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2128 | 15-20%                  |                 2 |              0.1064  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2203 | 5-10%                   |                 5 |              0.04406 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.227  | >20%                    |                 2 |              0.1135  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2379 | 15-20%                  |                 2 |              0.11895 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2418 | 5-10%                   |                 2 |              0.1209  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.247  | 5-10%                   |                 2 |              0.1235  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2488 | >20%                    |                 2 |              0.1244  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2512 | >20%                    |                 2 |              0.1256  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2682 | 5-10%                   |                 2 |              0.1341  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2714 | 5-10%                   |                10 |              0.02714 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2735 | <5%                     |                 2 |              0.13675 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2855 | <5%                     |                 2 |              0.14275 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2883 | 15-20%                  |                 5 |              0.05766 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2898 | <5%                     |                 2 |              0.1449  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2953 | 10-15%                  |                 2 |              0.14765 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2973 | >20%                    |                 2 |              0.14865 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2976 | >20%                    |                 5 |              0.05952 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3007 | 5-10%                   |                 2 |              0.15035 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.307  | 5-10%                   |                 2 |              0.1535  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3125 | >20%                    |                 2 |              0.15625 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3222 | 10-15%                  |                 2 |              0.1611  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3245 | >20%                    |                 2 |              0.16225 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3271 | >20%                    |                 5 |              0.06542 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3278 | 10-15%                  |                10 |              0.03278 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.33   | >20%                    |                 2 |              0.165   |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3415 | 10-15%                  |                 5 |              0.0683  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3447 | >20%                    |                 2 |              0.17235 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.3496 |                         |                 2 |              0.1748  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3498 | >20%                    |                 2 |              0.1749  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3604 | >20%                    |                 2 |              0.1802  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3615 | 10-15%                  |                 5 |              0.0723  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3632 | >20%                    |                 2 |              0.1816  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3655 | 10-15%                  |                 5 |              0.0731  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3656 | >20%                    |                 5 |              0.07312 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3665 | 5-10%                   |                10 |              0.03665 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3694 |                         |                 5 |              0.07388 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3708 | >20%                    |                 5 |              0.07416 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3753 | 15-20%                  |                10 |              0.03753 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3763 | >20%                    |                 2 |              0.18815 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.378  | >20%                    |                 2 |              0.189   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3885 | 5-10%                   |                 2 |              0.19425 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.391  | <5%                     |                 2 |              0.1955  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3927 | >20%                    |                 5 |              0.07854 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3939 | >20%                    |                 5 |              0.07878 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3982 | 10-15%                  |                10 |              0.03982 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4033 | >20%                    |                 2 |              0.20165 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4038 | <5%                     |                 2 |              0.2019  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4078 | 15-20%                  |                 2 |              0.2039  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4091 | >20%                    |                 2 |              0.20455 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4096 | 5-10%                   |                 2 |              0.2048  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.412  | 5-10%                   |                 2 |              0.206   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4136 | 5-10%                   |                 2 |              0.2068  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4157 | 5-10%                   |                 5 |              0.08314 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4176 | 5-10%                   |                10 |              0.04176 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4229 | 5-10%                   |                 5 |              0.08458 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4234 | <5%                     |                 2 |              0.2117  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4236 | >20%                    |                10 |              0.04236 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4249 | >20%                    |                 5 |              0.08498 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4296 | >20%                    |                10 |              0.04296 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.431  | >20%                    |                10 |              0.0431  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4317 | <5%                     |                 5 |              0.08634 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.434  | >20%                    |                 2 |              0.217   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4346 | <5%                     |                 5 |              0.08692 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4349 | 5-10%                   |                 5 |              0.08698 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4454 | 5-10%                   |                 5 |              0.08908 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4533 | <5%                     |                 5 |              0.09066 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4541 | 5-10%                   |                 2 |              0.22705 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4668 | >20%                    |                 2 |              0.2334  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4677 | 10-15%                  |                 2 |              0.23385 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4683 | >20%                    |                 5 |              0.09366 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4732 | <5%                     |                 5 |              0.09464 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4738 | 5-10%                   |                 5 |              0.09476 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4789 | 10-15%                  |                 5 |              0.09578 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4809 | >20%                    |                 5 |              0.09618 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4819 | >20%                    |                 5 |              0.09638 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4889 | >20%                    |                 5 |              0.09778 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4957 | >20%                    |                 2 |              0.24785 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4969 | 10-15%                  |                10 |              0.04969 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4982 | >20%                    |                 2 |              0.2491  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5039 | <5%                     |                10 |              0.05039 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5137 | 5-10%                   |                 5 |              0.10274 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5219 | 5-10%                   |                 5 |              0.10438 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.526  | <5%                     |                 5 |              0.1052  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.532  | >20%                    |                 2 |              0.266   |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.534  | >20%                    |                 2 |              0.267   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5346 | 15-20%                  |                 2 |              0.2673  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5372 | 15-20%                  |                 2 |              0.2686  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5398 | >20%                    |                 5 |              0.10796 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5399 | >20%                    |                 5 |              0.10798 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5409 | >20%                    |                 5 |              0.10818 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5441 | 10-15%                  |                 5 |              0.10882 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5456 | 5-10%                   |                 5 |              0.10912 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.551  | 15-20%                  |                 5 |              0.1102  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5529 | >20%                    |                 5 |              0.11058 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5561 | <5%                     |                10 |              0.05561 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5568 | >20%                    |                 2 |              0.2784  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.563  | 15-20%                  |                 5 |              0.1126  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5715 | 5-10%                   |                 5 |              0.1143  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5804 | 10-15%                  |                 5 |              0.11608 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5884 | >20%                    |                 2 |              0.2942  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5887 | >20%                    |                 2 |              0.29435 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5932 | <5%                     |                 5 |              0.11864 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.596  | <5%                     |                 2 |              0.298   |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6107 | >20%                    |                 5 |              0.12214 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6201 | >20%                    |                 5 |              0.12402 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6311 | >20%                    |                 5 |              0.12622 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6328 | >20%                    |                10 |              0.06328 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6371 | >20%                    |                10 |              0.06371 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6623 | 10-15%                  |                 5 |              0.13246 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6888 | >20%                    |                 5 |              0.13776 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6902 | >20%                    |                 2 |              0.3451  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6951 |                         |                10 |              0.06951 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6953 | >20%                    |                 5 |              0.13906 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7028 | 5-10%                   |                 2 |              0.3514  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7063 | >20%                    |                10 |              0.07063 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7163 | >20%                    |                10 |              0.07163 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7204 | >20%                    |                10 |              0.07204 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7269 | >20%                    |                10 |              0.07269 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7292 | <5%                     |                 5 |              0.14584 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.734  | 5-10%                   |                10 |              0.0734  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7356 | 5-10%                   |                 5 |              0.14712 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7384 | >20%                    |                10 |              0.07384 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7386 | <5%                     |                10 |              0.07386 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7418 | 5-10%                   |                10 |              0.07418 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7522 | 15-20%                  |                 5 |              0.15044 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7568 | <5%                     |                10 |              0.07568 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7683 | <5%                     |                10 |              0.07683 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7705 | >20%                    |                 5 |              0.1541  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7705 | >20%                    |                10 |              0.07705 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7741 | >20%                    |                 5 |              0.15482 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7838 | >20%                    |                 2 |              0.3919  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7862 | 5-10%                   |                10 |              0.07862 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8155 | <5%                     |                10 |              0.08155 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8156 | >20%                    |                10 |              0.08156 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8385 | >20%                    |                 5 |              0.1677  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8513 | >20%                    |                10 |              0.08513 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8542 | 5-10%                   |                10 |              0.08542 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8558 | >20%                    |                10 |              0.08558 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8611 | >20%                    |                10 |              0.08611 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8614 | >20%                    |                 2 |              0.4307  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8627 | >20%                    |                10 |              0.08627 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8628 | 15-20%                  |                 5 |              0.17256 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8635 | <5%                     |                10 |              0.08635 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8682 | <5%                     |                10 |              0.08682 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8698 | 15-20%                  |                10 |              0.08698 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.87   | 15-20%                  |                10 |              0.087   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8864 | 5-10%                   |                10 |              0.08864 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8991 | >20%                    |                10 |              0.08991 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9245 | >20%                    |                 2 |              0.46225 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9361 | >20%                    |                10 |              0.09361 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9803 | 10-15%                  |                10 |              0.09803 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.002  | 5-10%                   |                10 |              0.1002  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0474 | >20%                    |                10 |              0.10474 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0487 | >20%                    |                 5 |              0.20974 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0665 | 5-10%                   |                10 |              0.10665 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0701 | 5-10%                   |                10 |              0.10701 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.095  | >20%                    |                10 |              0.1095  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1238 | <5%                     |                10 |              0.11238 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1453 | 15-20%                  |                10 |              0.11453 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1713 | 15-20%                  |                10 |              0.11713 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1728 | >20%                    |                10 |              0.11728 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2243 | >20%                    |                10 |              0.12243 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2655 | >20%                    |                10 |              0.12655 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2656 | >20%                    |                 5 |              0.25312 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2943 | 5-10%                   |                 5 |              0.25886 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3248 | 5-10%                   |                 2 |              0.6624  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3435 | >20%                    |                 5 |              0.2687  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3962 | >20%                    |                 2 |              0.6981  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4768 | >20%                    |                10 |              0.14768 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.5057 | 10-15%                  |                 5 |              0.30114 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5089 | >20%                    |                10 |              0.15089 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7229 | >20%                    |                10 |              0.17229 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1262 | 5-10%                   |                10 |              0.21262 |