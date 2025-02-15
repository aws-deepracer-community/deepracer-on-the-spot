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

Data correct as of 2025-02-15 01:36:28.159003, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1171 | >20%                    |                 2 |              0.05855 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1535 | <5%                     |                 5 |              0.0307  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 15-20%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2051 | 10-15%                  |                 2 |              0.10255 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2114 | <5%                     |                 5 |              0.04228 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2158 | 5-10%                   |                 2 |              0.1079  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2231 | <5%                     |                 2 |              0.11155 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2316 | >20%                    |                 2 |              0.1158  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2347 | 15-20%                  |                 2 |              0.11735 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2347 | 15-20%                  |                 2 |              0.11735 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2367 | >20%                    |                 2 |              0.11835 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2524 | 5-10%                   |                 2 |              0.1262  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2682 | 10-15%                  |                 2 |              0.1341  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2737 | >20%                    |                 2 |              0.13685 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2761 | <5%                     |                 2 |              0.13805 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2777 | 15-20%                  |                 5 |              0.05554 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2846 | 5-10%                   |                 2 |              0.1423  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2865 | <5%                     |                 2 |              0.14325 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.289  | 15-20%                  |                 2 |              0.1445  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2982 | <5%                     |                 2 |              0.1491  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2986 | <5%                     |                 2 |              0.1493  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3022 | 5-10%                   |                 2 |              0.1511  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3029 | <5%                     |                10 |              0.03029 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3132 | 10-15%                  |                 2 |              0.1566  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3137 | 5-10%                   |                10 |              0.03137 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3157 | 10-15%                  |                 2 |              0.15785 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3323 | <5%                     |                 2 |              0.16615 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3333 | >20%                    |                 2 |              0.16665 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3372 | >20%                    |                 2 |              0.1686  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3432 | <5%                     |                10 |              0.03432 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3461 | 15-20%                  |                 5 |              0.06922 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3527 | >20%                    |                 5 |              0.07054 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3651 | 10-15%                  |                 2 |              0.18255 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3671 | 5-10%                   |                 2 |              0.18355 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3672 | <5%                     |                 2 |              0.1836  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3698 | 10-15%                  |                 5 |              0.07396 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3763 | 15-20%                  |                 2 |              0.18815 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3774 | 5-10%                   |                 2 |              0.1887  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3826 | <5%                     |                 5 |              0.07652 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3865 | 5-10%                   |                 5 |              0.0773  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3937 | >20%                    |                 5 |              0.07874 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.399  | 5-10%                   |                 2 |              0.1995  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4046 | 10-15%                  |                 2 |              0.2023  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4047 | >20%                    |                 2 |              0.20235 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.405  | <5%                     |                 2 |              0.2025  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4051 | >20%                    |                10 |              0.04051 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4085 | 15-20%                  |                10 |              0.04085 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4116 | 5-10%                   |                 5 |              0.08232 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4125 | 5-10%                   |                 2 |              0.20625 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.418  | 5-10%                   |                10 |              0.0418  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4267 | >20%                    |                 5 |              0.08534 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4281 | <5%                     |                 5 |              0.08562 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4302 | <5%                     |                 2 |              0.2151  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4359 | >20%                    |                 5 |              0.08718 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.448  | <5%                     |                 2 |              0.224   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4509 | >20%                    |                 5 |              0.09018 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4683 | >20%                    |                 5 |              0.09366 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4747 | 15-20%                  |                 5 |              0.09494 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4805 | >20%                    |                10 |              0.04805 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4805 | 5-10%                   |                 5 |              0.0961  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4856 | 10-15%                  |                 5 |              0.09712 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4887 | >20%                    |                 2 |              0.24435 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4921 | 5-10%                   |                 5 |              0.09842 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4929 | <5%                     |                 5 |              0.09858 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4929 | >20%                    |                 2 |              0.24645 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.498  | >20%                    |                 5 |              0.0996  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4987 | >20%                    |                 5 |              0.09974 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5015 | >20%                    |                 2 |              0.25075 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.502  | 5-10%                   |                 2 |              0.251   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5074 | 10-15%                  |                 5 |              0.10148 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5079 | <5%                     |                 5 |              0.10158 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.524  | <5%                     |                 2 |              0.262   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5286 | 15-20%                  |                 2 |              0.2643  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5294 | 10-15%                  |                 5 |              0.10588 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5305 | >20%                    |                 2 |              0.26525 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5333 | >20%                    |                 2 |              0.26665 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5365 | >20%                    |                 2 |              0.26825 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5451 | >20%                    |                 5 |              0.10902 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5487 | 10-15%                  |                 5 |              0.10974 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5488 | 5-10%                   |                 5 |              0.10976 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5562 | >20%                    |                 2 |              0.2781  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5606 | <5%                     |                 5 |              0.11212 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5618 | >20%                    |                 5 |              0.11236 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5639 | <5%                     |                 5 |              0.11278 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.564  | >20%                    |                 2 |              0.282   |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5682 | >20%                    |                 2 |              0.2841  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5726 | 10-15%                  |                 2 |              0.2863  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5733 | 10-15%                  |                 5 |              0.11466 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5823 | 5-10%                   |                10 |              0.05823 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5837 | 10-15%                  |                 5 |              0.11674 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5971 | 5-10%                   |                10 |              0.05971 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5998 | >20%                    |                 5 |              0.11996 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6045 | 5-10%                   |                 5 |              0.1209  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6216 | 5-10%                   |                 5 |              0.12432 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6356 | >20%                    |                 2 |              0.3178  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6423 | <5%                     |                10 |              0.06423 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6483 | >20%                    |                10 |              0.06483 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6523 | >20%                    |                10 |              0.06523 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6659 | 10-15%                  |                 5 |              0.13318 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6678 | >20%                    |                 5 |              0.13356 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6724 | <5%                     |                10 |              0.06724 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6733 | >20%                    |                 2 |              0.33665 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6772 | 10-15%                  |                 5 |              0.13544 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6812 | >20%                    |                 5 |              0.13624 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6931 | >20%                    |                10 |              0.06931 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7008 | 15-20%                  |                 5 |              0.14016 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7034 | >20%                    |                10 |              0.07034 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7331 | 5-10%                   |                10 |              0.07331 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7405 | >20%                    |                 5 |              0.1481  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7406 | >20%                    |                 5 |              0.14812 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7461 | <5%                     |                 5 |              0.14922 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7468 | 5-10%                   |                 5 |              0.14936 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7574 | >20%                    |                10 |              0.07574 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7626 | >20%                    |                 5 |              0.15252 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7651 | >20%                    |                 5 |              0.15302 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7709 | >20%                    |                10 |              0.07709 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7734 | <5%                     |                10 |              0.07734 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7867 | >20%                    |                10 |              0.07867 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7909 | >20%                    |                 5 |              0.15818 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8033 | 10-15%                  |                10 |              0.08033 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8053 | 15-20%                  |                10 |              0.08053 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8079 | 5-10%                   |                10 |              0.08079 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.8099 | <5%                     |                 5 |              0.16198 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8122 | 5-10%                   |                 2 |              0.4061  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8159 | <5%                     |                10 |              0.08159 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8172 | >20%                    |                10 |              0.08172 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.834  | 15-20%                  |                10 |              0.0834  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8436 | 15-20%                  |                10 |              0.08436 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8466 | >20%                    |                10 |              0.08466 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8467 | <5%                     |                10 |              0.08467 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8489 | <5%                     |                10 |              0.08489 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8545 | 15-20%                  |                 2 |              0.42725 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8665 | 10-15%                  |                10 |              0.08665 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8696 | 15-20%                  |                 5 |              0.17392 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8705 | 10-15%                  |                10 |              0.08705 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8758 | >20%                    |                10 |              0.08758 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8864 | 15-20%                  |                10 |              0.08864 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.889  | <5%                     |                10 |              0.0889  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8892 | >20%                    |                 2 |              0.4446  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.909  | <5%                     |                10 |              0.0909  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9129 | 15-20%                  |                 5 |              0.18258 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.928  | <5%                     |                10 |              0.0928  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9371 | <5%                     |                10 |              0.09371 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9697 | 10-15%                  |                10 |              0.09697 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9707 | 10-15%                  |                10 |              0.09707 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.984  | >20%                    |                10 |              0.0984  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0049 | >20%                    |                10 |              0.10049 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0639 | <5%                     |                10 |              0.10639 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0985 | >20%                    |                 2 |              0.54925 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1042 | 15-20%                  |                10 |              0.11042 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.132  | >20%                    |                 2 |              0.566   |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1351 | 5-10%                   |                10 |              0.11351 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1399 | 15-20%                  |                10 |              0.11399 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1721 | >20%                    |                10 |              0.11721 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1761 | >20%                    |                 5 |              0.23522 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1966 | 10-15%                  |                 2 |              0.5983  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2229 | >20%                    |                 5 |              0.24458 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2449 | 10-15%                  |                 5 |              0.24898 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2923 | <5%                     |                10 |              0.12923 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2926 | >20%                    |                10 |              0.12926 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3473 | >20%                    |                10 |              0.13473 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3878 | >20%                    |                10 |              0.13878 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.569  | >20%                    |                10 |              0.1569  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.835  | >20%                    |                10 |              0.1835  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0535 | 5-10%                   |                10 |              0.20535 |