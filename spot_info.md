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

Data correct as of 2025-11-05 01:52:48.490909, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1009 | 5-10%                   |                 2 |              0.05045 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1547 | >20%                    |                 5 |              0.03094 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1631 | >20%                    |                 2 |              0.08155 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.207  | >20%                    |                 2 |              0.1035  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2445 | 10-15%                  |                 2 |              0.12225 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2479 | >20%                    |                 2 |              0.12395 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2513 | >20%                    |                 2 |              0.12565 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2566 | >20%                    |                 2 |              0.1283  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2568 | >20%                    |                 2 |              0.1284  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2627 | >20%                    |                 2 |              0.13135 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2681 | 5-10%                   |                 2 |              0.13405 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2703 | >20%                    |                 5 |              0.05406 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2712 | 10-15%                  |                 2 |              0.1356  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2722 | >20%                    |                 5 |              0.05444 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2746 | 5-10%                   |                 2 |              0.1373  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2751 | >20%                    |                 2 |              0.13755 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2909 | >20%                    |                 2 |              0.14545 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2932 | 10-15%                  |                 2 |              0.1466  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3063 | 15-20%                  |                 2 |              0.15315 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3074 | >20%                    |                 2 |              0.1537  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3143 | >20%                    |                 2 |              0.15715 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3177 | >20%                    |                 2 |              0.15885 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3331 | >20%                    |                 2 |              0.16655 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3449 | >20%                    |                 5 |              0.06898 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3473 | 15-20%                  |                 2 |              0.17365 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3481 | >20%                    |                 2 |              0.17405 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3512 | >20%                    |                 2 |              0.1756  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3529 | >20%                    |                 5 |              0.07058 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3679 | >20%                    |                 2 |              0.18395 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3696 | <5%                     |                10 |              0.03696 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3706 | >20%                    |                 2 |              0.1853  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3756 | 15-20%                  |                 2 |              0.1878  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3894 | 10-15%                  |                 2 |              0.1947  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3933 | 5-10%                   |                 2 |              0.19665 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3975 | >20%                    |                 2 |              0.19875 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4124 | >20%                    |                 5 |              0.08248 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.413  | >20%                    |                 5 |              0.0826  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4145 | 5-10%                   |                 5 |              0.0829  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4146 | 15-20%                  |                 2 |              0.2073  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4161 | <5%                     |                 2 |              0.20805 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4213 | >20%                    |                 5 |              0.08426 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4231 | 5-10%                   |                 2 |              0.21155 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4239 | >20%                    |                 2 |              0.21195 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4243 | >20%                    |                 5 |              0.08486 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4246 | >20%                    |                 2 |              0.2123  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4257 | >20%                    |                 5 |              0.08514 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4302 | >20%                    |                 2 |              0.2151  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4319 | >20%                    |                 2 |              0.21595 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4354 | >20%                    |                 5 |              0.08708 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4354 | >20%                    |                10 |              0.04354 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4403 | >20%                    |                 5 |              0.08806 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4404 | >20%                    |                 2 |              0.2202  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4435 | 5-10%                   |                 2 |              0.22175 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4438 | >20%                    |                 5 |              0.08876 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4441 | >20%                    |                 5 |              0.08882 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4511 | >20%                    |                 5 |              0.09022 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4511 | >20%                    |                 5 |              0.09022 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4534 | >20%                    |                 2 |              0.2267  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4552 | >20%                    |                 2 |              0.2276  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4561 | >20%                    |                 2 |              0.22805 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4583 | 15-20%                  |                 5 |              0.09166 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4591 | >20%                    |                 2 |              0.22955 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4601 | >20%                    |                 5 |              0.09202 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4734 | >20%                    |                 2 |              0.2367  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4745 | >20%                    |                 5 |              0.0949  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4762 | 10-15%                  |                 2 |              0.2381  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.48   | 15-20%                  |                10 |              0.048   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4811 | >20%                    |                 5 |              0.09622 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4837 | >20%                    |                 5 |              0.09674 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4885 | >20%                    |                 2 |              0.24425 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4891 | 10-15%                  |                 2 |              0.24455 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4905 | >20%                    |                 5 |              0.0981  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5029 | 15-20%                  |                 5 |              0.10058 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5044 | >20%                    |                 2 |              0.2522  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5262 | >20%                    |                 5 |              0.10524 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5338 | >20%                    |                10 |              0.05338 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.538  | >20%                    |                 5 |              0.1076  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5464 | >20%                    |                 5 |              0.10928 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5531 | >20%                    |                 5 |              0.11062 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5608 | >20%                    |                10 |              0.05608 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5621 | 10-15%                  |                 5 |              0.11242 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5633 | >20%                    |                 5 |              0.11266 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.572  | >20%                    |                 5 |              0.1144  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5732 | 15-20%                  |                 2 |              0.2866  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5735 | >20%                    |                 5 |              0.1147  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5755 | >20%                    |                 5 |              0.1151  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5791 | >20%                    |                 5 |              0.11582 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5987 | >20%                    |                 2 |              0.29935 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.617  | >20%                    |                 5 |              0.1234  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6193 | 10-15%                  |                 5 |              0.12386 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6293 | >20%                    |                 5 |              0.12586 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6294 | >20%                    |                 2 |              0.3147  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6306 | >20%                    |                 5 |              0.12612 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6507 | 15-20%                  |                 2 |              0.32535 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6526 | >20%                    |                 2 |              0.3263  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6575 | 15-20%                  |                10 |              0.06575 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6576 | 5-10%                   |                10 |              0.06576 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6591 | >20%                    |                 5 |              0.13182 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6614 | 15-20%                  |                 5 |              0.13228 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6627 | >20%                    |                 5 |              0.13254 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6685 | >20%                    |                10 |              0.06685 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6723 | >20%                    |                10 |              0.06723 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6725 | 10-15%                  |                 5 |              0.1345  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6734 | 15-20%                  |                10 |              0.06734 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6747 | 10-15%                  |                 2 |              0.33735 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6755 | >20%                    |                 5 |              0.1351  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6775 | >20%                    |                10 |              0.06775 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6807 | 15-20%                  |                10 |              0.06807 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6837 | >20%                    |                 5 |              0.13674 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6854 | >20%                    |                 5 |              0.13708 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6883 | <5%                     |                10 |              0.06883 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6998 | >20%                    |                10 |              0.06998 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7049 | 15-20%                  |                 5 |              0.14098 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7116 | >20%                    |                 5 |              0.14232 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7178 | >20%                    |                10 |              0.07178 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7252 | >20%                    |                10 |              0.07252 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7266 | >20%                    |                10 |              0.07266 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7317 | 10-15%                  |                10 |              0.07317 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7329 | >20%                    |                10 |              0.07329 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7384 | >20%                    |                10 |              0.07384 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.745  | 10-15%                  |                 5 |              0.149   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.746  | 15-20%                  |                10 |              0.0746  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7514 | 15-20%                  |                10 |              0.07514 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7543 | >20%                    |                10 |              0.07543 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.756  | >20%                    |                 5 |              0.1512  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7634 | 15-20%                  |                10 |              0.07634 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7651 | >20%                    |                 5 |              0.15302 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7738 | <5%                     |                10 |              0.07738 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.785  | 10-15%                  |                 2 |              0.3925  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7859 | >20%                    |                 2 |              0.39295 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7883 | 15-20%                  |                10 |              0.07883 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8003 | >20%                    |                 5 |              0.16006 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8049 | <5%                     |                10 |              0.08049 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8068 | 15-20%                  |                10 |              0.08068 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8126 | 15-20%                  |                 5 |              0.16252 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8303 | 10-15%                  |                10 |              0.08303 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8467 | >20%                    |                10 |              0.08467 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8474 | >20%                    |                10 |              0.08474 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8476 | 10-15%                  |                10 |              0.08476 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8533 | >20%                    |                 5 |              0.17066 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8647 | >20%                    |                10 |              0.08647 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8808 | 5-10%                   |                10 |              0.08808 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8882 | 5-10%                   |                10 |              0.08882 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.892  | >20%                    |                10 |              0.0892  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9004 | >20%                    |                 2 |              0.4502  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9309 | 10-15%                  |                 2 |              0.46545 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9532 | >20%                    |                 2 |              0.4766  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9672 | >20%                    |                 5 |              0.19344 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9675 | 15-20%                  |                10 |              0.09675 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9792 | <5%                     |                10 |              0.09792 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9834 | >20%                    |                10 |              0.09834 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0077 | 5-10%                   |                10 |              0.10077 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0082 | >20%                    |                10 |              0.10082 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0171 | 5-10%                   |                10 |              0.10171 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0434 | >20%                    |                10 |              0.10434 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0499 | >20%                    |                 5 |              0.20998 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0722 | >20%                    |                10 |              0.10722 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.073  | 10-15%                  |                 5 |              0.2146  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0819 | 15-20%                  |                10 |              0.10819 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.091  | >20%                    |                 5 |              0.2182  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0973 | >20%                    |                 2 |              0.54865 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1077 | >20%                    |                 5 |              0.22154 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.124  | 15-20%                  |                10 |              0.1124  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.139  | 10-15%                  |                10 |              0.1139  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1587 | >20%                    |                 5 |              0.23174 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.196  | >20%                    |                10 |              0.1196  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2065 | >20%                    |                10 |              0.12065 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2802 | 10-15%                  |                10 |              0.12802 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3389 | >20%                    |                10 |              0.13389 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4494 | 5-10%                   |                 2 |              0.7247  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5547 | >20%                    |                10 |              0.15547 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5738 | >20%                    |                10 |              0.15738 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5741 | 10-15%                  |                 5 |              0.31482 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.5768 | 10-15%                  |                10 |              0.15768 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5833 | >20%                    |                10 |              0.15833 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5921 | >20%                    |                10 |              0.15921 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3111 | 15-20%                  |                10 |              0.23111 |