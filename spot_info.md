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

Data correct as of 2026-01-21 02:07:25.627033, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.139  | >20%                    |                 2 |              0.0695  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1521 | >20%                    |                 2 |              0.07605 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1661 | >20%                    |                 2 |              0.08305 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1748 | >20%                    |                 2 |              0.0874  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1785 | 15-20%                  |                 5 |              0.0357  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1786 | >20%                    |                 2 |              0.0893  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1904 | <5%                     |                 5 |              0.03808 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2005 | >20%                    |                 5 |              0.0401  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2079 | <5%                     |                 2 |              0.10395 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2421 | >20%                    |                 2 |              0.12105 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2553 | >20%                    |                 2 |              0.12765 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2746 | 15-20%                  |                 2 |              0.1373  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2768 | >20%                    |                 2 |              0.1384  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | >20%                    |                 2 |              0.14135 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2862 | >20%                    |                 2 |              0.1431  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2878 | >20%                    |                 5 |              0.05756 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2895 | 15-20%                  |                10 |              0.02895 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2912 | >20%                    |                 2 |              0.1456  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2953 | >20%                    |                 2 |              0.14765 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2955 | <5%                     |                 2 |              0.14775 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3055 | 5-10%                   |                 5 |              0.0611  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3131 | >20%                    |                10 |              0.03131 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3149 | >20%                    |                 2 |              0.15745 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3154 | >20%                    |                 2 |              0.1577  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3332 | >20%                    |                 5 |              0.06664 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3376 | 5-10%                   |                10 |              0.03376 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.349  | >20%                    |                10 |              0.0349  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3512 | >20%                    |                 2 |              0.1756  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3515 | 5-10%                   |                 2 |              0.17575 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3618 | 10-15%                  |                 2 |              0.1809  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.362  | 5-10%                   |                10 |              0.0362  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3648 | >20%                    |                 2 |              0.1824  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3716 | 15-20%                  |                 5 |              0.07432 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3719 | >20%                    |                 5 |              0.07438 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3773 | >20%                    |                 5 |              0.07546 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3791 | >20%                    |                 2 |              0.18955 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.382  | >20%                    |                 5 |              0.0764  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3827 | >20%                    |                 2 |              0.19135 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3854 | >20%                    |                 2 |              0.1927  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3907 | <5%                     |                10 |              0.03907 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3922 | 5-10%                   |                 2 |              0.1961  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3926 | >20%                    |                 2 |              0.1963  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3951 | >20%                    |                 5 |              0.07902 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3954 | 10-15%                  |                 2 |              0.1977  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3969 | >20%                    |                 2 |              0.19845 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3996 | >20%                    |                 5 |              0.07992 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4033 | >20%                    |                 5 |              0.08066 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.404  | >20%                    |                 2 |              0.202   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4042 | >20%                    |                 5 |              0.08084 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4052 | >20%                    |                 5 |              0.08104 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4064 | <5%                     |                 5 |              0.08128 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4074 | >20%                    |                 2 |              0.2037  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4117 | >20%                    |                10 |              0.04117 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4157 | >20%                    |                 5 |              0.08314 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4179 | >20%                    |                 5 |              0.08358 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4191 | >20%                    |                 5 |              0.08382 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4261 | >20%                    |                10 |              0.04261 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4294 | >20%                    |                 2 |              0.2147  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4327 | >20%                    |                 2 |              0.21635 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4343 | <5%                     |                 2 |              0.21715 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4364 | 10-15%                  |                 2 |              0.2182  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4442 | <5%                     |                 2 |              0.2221  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4444 | >20%                    |                 5 |              0.08888 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.447  | 15-20%                  |                 2 |              0.2235  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4492 | 15-20%                  |                10 |              0.04492 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4502 | >20%                    |                 2 |              0.2251  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4522 | >20%                    |                10 |              0.04522 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4568 | >20%                    |                 2 |              0.2284  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4628 | >20%                    |                 2 |              0.2314  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4696 | >20%                    |                 2 |              0.2348  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4703 | >20%                    |                 5 |              0.09406 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.474  | <5%                     |                 5 |              0.0948  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.476  | <5%                     |                10 |              0.0476  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.48   | 15-20%                  |                 2 |              0.24    |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4836 | >20%                    |                 2 |              0.2418  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4852 | >20%                    |                 5 |              0.09704 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4869 | >20%                    |                 5 |              0.09738 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4885 | >20%                    |                 5 |              0.0977  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4927 | >20%                    |                10 |              0.04927 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5038 | >20%                    |                 5 |              0.10076 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5038 | >20%                    |                 5 |              0.10076 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5058 | >20%                    |                 5 |              0.10116 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5068 | >20%                    |                 2 |              0.2534  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5223 | >20%                    |                 5 |              0.10446 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5343 | >20%                    |                10 |              0.05343 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5393 | >20%                    |                 2 |              0.26965 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5406 | <5%                     |                 2 |              0.2703  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5422 | 15-20%                  |                 5 |              0.10844 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.546  | 5-10%                   |                 5 |              0.1092  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5466 | >20%                    |                 2 |              0.2733  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5489 | >20%                    |                 5 |              0.10978 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5571 | >20%                    |                 2 |              0.27855 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5592 | >20%                    |                10 |              0.05592 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5647 | >20%                    |                 5 |              0.11294 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5656 | 5-10%                   |                 5 |              0.11312 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5692 | 15-20%                  |                 5 |              0.11384 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5704 | 10-15%                  |                 5 |              0.11408 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5824 | 15-20%                  |                10 |              0.05824 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.592  | >20%                    |                 5 |              0.1184  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5945 | >20%                    |                 5 |              0.1189  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6099 | 15-20%                  |                 5 |              0.12198 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6144 | 10-15%                  |                 2 |              0.3072  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.618  | >20%                    |                10 |              0.0618  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6247 |                         |                 2 |              0.31235 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6312 | 10-15%                  |                10 |              0.06312 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6315 | 10-15%                  |                 5 |              0.1263  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6391 | >20%                    |                10 |              0.06391 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6433 | >20%                    |                 5 |              0.12866 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6442 | >20%                    |                 2 |              0.3221  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6502 | 5-10%                   |                 5 |              0.13004 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6508 | 15-20%                  |                10 |              0.06508 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.651  | 15-20%                  |                 5 |              0.1302  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6544 | >20%                    |                 2 |              0.3272  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6545 | >20%                    |                 2 |              0.32725 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6658 | 10-15%                  |                 5 |              0.13316 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6828 | >20%                    |                 5 |              0.13656 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6848 | 15-20%                  |                10 |              0.06848 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6863 | <5%                     |                10 |              0.06863 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6965 | >20%                    |                10 |              0.06965 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.711  | >20%                    |                 2 |              0.3555  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7209 | >20%                    |                10 |              0.07209 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.726  | >20%                    |                 2 |              0.363   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7267 | >20%                    |                10 |              0.07267 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7277 | 5-10%                   |                10 |              0.07277 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7289 | >20%                    |                 2 |              0.36445 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7329 | >20%                    |                10 |              0.07329 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7341 | <5%                     |                 5 |              0.14682 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7359 | >20%                    |                10 |              0.07359 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7387 | 15-20%                  |                10 |              0.07387 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7389 | >20%                    |                 5 |              0.14778 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7488 | >20%                    |                 5 |              0.14976 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7545 | 15-20%                  |                 2 |              0.37725 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7599 | >20%                    |                 5 |              0.15198 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7887 | <5%                     |                10 |              0.07887 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.793  | >20%                    |                10 |              0.0793  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7987 | 15-20%                  |                10 |              0.07987 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8021 | <5%                     |                10 |              0.08021 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8047 | >20%                    |                10 |              0.08047 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8051 | 15-20%                  |                 5 |              0.16102 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8134 | >20%                    |                10 |              0.08134 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8216 | >20%                    |                 2 |              0.4108  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8631 | 10-15%                  |                 5 |              0.17262 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8804 | >20%                    |                10 |              0.08804 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8827 | 15-20%                  |                10 |              0.08827 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8871 | >20%                    |                10 |              0.08871 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9188 | >20%                    |                 2 |              0.4594  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9235 | >20%                    |                10 |              0.09235 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9243 | >20%                    |                10 |              0.09243 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9303 | >20%                    |                10 |              0.09303 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9324 | >20%                    |                 5 |              0.18648 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9337 | >20%                    |                 5 |              0.18674 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9337 | >20%                    |                 2 |              0.46685 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9401 | >20%                    |                 5 |              0.18802 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.959  | >20%                    |                10 |              0.0959  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9741 | >20%                    |                10 |              0.09741 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.024  | <5%                     |                10 |              0.1024  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0326 | >20%                    |                 5 |              0.20652 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0354 | >20%                    |                 5 |              0.20708 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0411 | 15-20%                  |                10 |              0.10411 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0485 | 10-15%                  |                 5 |              0.2097  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0706 | 15-20%                  |                10 |              0.10706 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0724 | >20%                    |                 2 |              0.5362  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0967 | 10-15%                  |                10 |              0.10967 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1076 | >20%                    |                10 |              0.11076 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1139 | >20%                    |                10 |              0.11139 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1457 | >20%                    |                 2 |              0.57285 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.166  | >20%                    |                 5 |              0.2332  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.234  | >20%                    |                10 |              0.1234  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2583 |                         |                10 |              0.12583 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2609 | >20%                    |                10 |              0.12609 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2756 | 15-20%                  |                10 |              0.12756 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2776 | >20%                    |                10 |              0.12776 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3015 | >20%                    |                10 |              0.13015 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3119 | >20%                    |                 5 |              0.26238 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3844 | 15-20%                  |                10 |              0.13844 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3854 | >20%                    |                10 |              0.13854 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4515 | >20%                    |                 2 |              0.72575 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4836 | 10-15%                  |                 5 |              0.29672 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5422 | >20%                    |                10 |              0.15422 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.5801 | 10-15%                  |                10 |              0.15801 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.0341 |                         |                 5 |              0.40682 |