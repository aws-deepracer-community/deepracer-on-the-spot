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

Data correct as of 2024-10-19 01:36:14.966597, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1112 | 5-10%                   |                 2 |              0.0556  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.125  | <5%                     |                 2 |              0.0625  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1304 | <5%                     |                 2 |              0.0652  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1321 | <5%                     |                 2 |              0.06605 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.152  | 10-15%                  |                 5 |              0.0304  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1531 | 10-15%                  |                 2 |              0.07655 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1776 | 5-10%                   |                 5 |              0.03552 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1793 | <5%                     |                 2 |              0.08965 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1808 | <5%                     |                 5 |              0.03616 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1911 | 15-20%                  |                 2 |              0.09555 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2072 | >20%                    |                 2 |              0.1036  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2214 | >20%                    |                 2 |              0.1107  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.231  | <5%                     |                10 |              0.0231  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2329 | <5%                     |                 2 |              0.11645 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2357 | <5%                     |                 5 |              0.04714 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2406 | 5-10%                   |                 2 |              0.1203  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2469 | >20%                    |                 5 |              0.04938 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2487 | 15-20%                  |                 2 |              0.12435 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2592 | 15-20%                  |                 5 |              0.05184 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2604 | <5%                     |                 2 |              0.1302  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2618 | 15-20%                  |                 5 |              0.05236 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2652 | <5%                     |                10 |              0.02652 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2662 | <5%                     |                 2 |              0.1331  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2706 | <5%                     |                 2 |              0.1353  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2795 | <5%                     |                10 |              0.02795 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2836 | 10-15%                  |                 2 |              0.1418  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2837 | >20%                    |                 2 |              0.14185 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2863 | 15-20%                  |                 2 |              0.14315 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2873 | <5%                     |                 2 |              0.14365 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3098 | 10-15%                  |                 2 |              0.1549  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3117 | 15-20%                  |                 2 |              0.15585 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3169 | >20%                    |                 5 |              0.06338 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3181 | 10-15%                  |                 2 |              0.15905 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3251 | 10-15%                  |                 5 |              0.06502 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3316 | 15-20%                  |                 2 |              0.1658  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.333  | <5%                     |                 5 |              0.0666  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3348 | <5%                     |                 2 |              0.1674  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3376 | >20%                    |                 5 |              0.06752 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.341  | <5%                     |                 2 |              0.1705  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3481 | >20%                    |                 2 |              0.17405 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3555 | <5%                     |                 5 |              0.0711  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3674 | 15-20%                  |                10 |              0.03674 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3693 | 5-10%                   |                 5 |              0.07386 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3817 | <5%                     |                 5 |              0.07634 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3868 | >20%                    |                10 |              0.03868 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3948 | >20%                    |                 2 |              0.1974  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3976 | <5%                     |                10 |              0.03976 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4016 | <5%                     |                 5 |              0.08032 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4031 | 5-10%                   |                 2 |              0.20155 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.404  | <5%                     |                 5 |              0.0808  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4089 | <5%                     |                 2 |              0.20445 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4107 | >20%                    |                 2 |              0.20535 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4254 | 5-10%                   |                 2 |              0.2127  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4263 | 5-10%                   |                10 |              0.04263 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.427  | 15-20%                  |                 2 |              0.2135  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4343 | <5%                     |                 2 |              0.21715 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4353 | 15-20%                  |                 5 |              0.08706 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.445  | >20%                    |                 2 |              0.2225  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4484 | >20%                    |                 5 |              0.08968 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4488 | 15-20%                  |                 5 |              0.08976 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4489 | >20%                    |                 2 |              0.22445 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.449  | 5-10%                   |                 5 |              0.0898  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4503 | <5%                     |                 5 |              0.09006 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4526 | <5%                     |                 5 |              0.09052 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4575 | <5%                     |                10 |              0.04575 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4617 | >20%                    |                 5 |              0.09234 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4622 | 5-10%                   |                10 |              0.04622 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.47   | 5-10%                   |                 2 |              0.235   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4743 | 15-20%                  |                 5 |              0.09486 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4791 | 10-15%                  |                 5 |              0.09582 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4798 | 5-10%                   |                 5 |              0.09596 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4804 | >20%                    |                 2 |              0.2402  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.492  | >20%                    |                 2 |              0.246   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4945 | <5%                     |                 2 |              0.24725 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4954 | <5%                     |                10 |              0.04954 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.4967 | <5%                     |                 5 |              0.09934 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4995 | >20%                    |                 5 |              0.0999  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5067 | 15-20%                  |                 2 |              0.25335 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5068 | 10-15%                  |                10 |              0.05068 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5185 | >20%                    |                 5 |              0.1037  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5233 | <5%                     |                 5 |              0.10466 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.524  | <5%                     |                 5 |              0.1048  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5244 | 5-10%                   |                 5 |              0.10488 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5247 | 5-10%                   |                 5 |              0.10494 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.551  | <5%                     |                10 |              0.0551  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5529 | 15-20%                  |                 2 |              0.27645 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5604 | 5-10%                   |                10 |              0.05604 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5808 | >20%                    |                 5 |              0.11616 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5817 | >20%                    |                 5 |              0.11634 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5819 | 5-10%                   |                 5 |              0.11638 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5848 | 15-20%                  |                 5 |              0.11696 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5851 | >20%                    |                 5 |              0.11702 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5926 | 15-20%                  |                10 |              0.05926 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5994 | >20%                    |                 2 |              0.2997  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6388 | >20%                    |                 5 |              0.12776 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6489 | <5%                     |                10 |              0.06489 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6521 | >20%                    |                10 |              0.06521 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6546 | 10-15%                  |                 5 |              0.13092 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6568 | 10-15%                  |                10 |              0.06568 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6617 | >20%                    |                10 |              0.06617 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6738 | <5%                     |                10 |              0.06738 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6811 | 5-10%                   |                10 |              0.06811 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6942 | 5-10%                   |                10 |              0.06942 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.695  | >20%                    |                 2 |              0.3475  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.697  | <5%                     |                10 |              0.0697  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.7051 | 5-10%                   |                10 |              0.07051 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7097 | <5%                     |                 5 |              0.14194 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7269 | >20%                    |                10 |              0.07269 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7345 | >20%                    |                10 |              0.07345 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7355 | >20%                    |                 5 |              0.1471  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7432 | 5-10%                   |                10 |              0.07432 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7519 | 5-10%                   |                10 |              0.07519 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7577 | <5%                     |                10 |              0.07577 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7786 | 15-20%                  |                10 |              0.07786 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.783  | 10-15%                  |                 5 |              0.1566  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7989 | <5%                     |                10 |              0.07989 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8423 | >20%                    |                10 |              0.08423 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8584 | >20%                    |                10 |              0.08584 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8802 | 5-10%                   |                10 |              0.08802 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8824 | <5%                     |                10 |              0.08824 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8926 | >20%                    |                 5 |              0.17852 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8937 | >20%                    |                10 |              0.08937 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9099 | >20%                    |                 2 |              0.45495 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9239 | >20%                    |                10 |              0.09239 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9337 | >20%                    |                10 |              0.09337 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9403 | <5%                     |                 2 |              0.47015 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9563 | 10-15%                  |                10 |              0.09563 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9739 | >20%                    |                 5 |              0.19478 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.974  | 10-15%                  |                10 |              0.0974  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0088 | 5-10%                   |                10 |              0.10088 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0201 | 10-15%                  |                 5 |              0.20402 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0295 | >20%                    |                10 |              0.10295 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1471 | >20%                    |                10 |              0.11471 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1713 | >20%                    |                10 |              0.11713 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4647 | >20%                    |                10 |              0.14647 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4743 | <5%                     |                10 |              0.14743 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5396 | 5-10%                   |                10 |              0.15396 |