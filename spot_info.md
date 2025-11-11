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

Data correct as of 2025-11-11 01:53:32.660661, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1343 | 5-10%                   |                 2 |              0.06715 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1902 | >20%                    |                 5 |              0.03804 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2045 | >20%                    |                 5 |              0.0409  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2072 | 5-10%                   |                 2 |              0.1036  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2134 | >20%                    |                 2 |              0.1067  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2265 | >20%                    |                 2 |              0.11325 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2432 | >20%                    |                 2 |              0.1216  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.246  | 10-15%                  |                 2 |              0.123   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2469 | >20%                    |                 2 |              0.12345 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.249  | >20%                    |                 2 |              0.1245  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2616 | >20%                    |                 2 |              0.1308  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2658 | 5-10%                   |                 2 |              0.1329  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2669 | >20%                    |                 2 |              0.13345 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2706 | 10-15%                  |                 2 |              0.1353  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.277  | >20%                    |                 2 |              0.1385  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2801 | >20%                    |                 2 |              0.14005 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | >20%                    |                 2 |              0.1437  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2888 | >20%                    |                 2 |              0.1444  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3153 | >20%                    |                 5 |              0.06306 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3155 | >20%                    |                 2 |              0.15775 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3272 | 15-20%                  |                 2 |              0.1636  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3325 | >20%                    |                 5 |              0.0665  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3354 | <5%                     |                 2 |              0.1677  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3394 | >20%                    |                 2 |              0.1697  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3423 | 15-20%                  |                 5 |              0.06846 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3438 | >20%                    |                 5 |              0.06876 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3474 | 5-10%                   |                 2 |              0.1737  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3528 | >20%                    |                 2 |              0.1764  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3567 | 10-15%                  |                 2 |              0.17835 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3571 | >20%                    |                 2 |              0.17855 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3592 | >20%                    |                 5 |              0.07184 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3627 | 15-20%                  |                 2 |              0.18135 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.363  | 5-10%                   |                10 |              0.0363  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3672 | >20%                    |                 5 |              0.07344 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3689 | 10-15%                  |                 2 |              0.18445 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3716 | >20%                    |                 5 |              0.07432 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3726 | 5-10%                   |                 2 |              0.1863  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3741 | >20%                    |                 5 |              0.07482 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3743 | >20%                    |                 2 |              0.18715 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3743 | <5%                     |                10 |              0.03743 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3847 | 10-15%                  |                 2 |              0.19235 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3852 | >20%                    |                 2 |              0.1926  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3891 | >20%                    |                 5 |              0.07782 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.392  | >20%                    |                 5 |              0.0784  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3928 | 15-20%                  |                 2 |              0.1964  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3963 | >20%                    |                 2 |              0.19815 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4157 | >20%                    |                 2 |              0.20785 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4171 | 5-10%                   |                 5 |              0.08342 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.418  | >20%                    |                 2 |              0.209   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4216 | >20%                    |                 5 |              0.08432 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4223 | >20%                    |                10 |              0.04223 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4299 | >20%                    |                 5 |              0.08598 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4342 | >20%                    |                 2 |              0.2171  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4343 | >20%                    |                 2 |              0.21715 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4361 | 15-20%                  |                 2 |              0.21805 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4399 | >20%                    |                 2 |              0.21995 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4435 | >20%                    |                 5 |              0.0887  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4514 | >20%                    |                 2 |              0.2257  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4518 | >20%                    |                 2 |              0.2259  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4539 | >20%                    |                 5 |              0.09078 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.454  | >20%                    |                 5 |              0.0908  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4552 | >20%                    |                 5 |              0.09104 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4581 | >20%                    |                 5 |              0.09162 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4617 | >20%                    |                 2 |              0.23085 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4646 | >20%                    |                10 |              0.04646 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.465  | >20%                    |                 2 |              0.2325  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.467  | >20%                    |                 5 |              0.0934  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.467  | 10-15%                  |                 2 |              0.2335  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4679 | >20%                    |                 5 |              0.09358 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4741 | >20%                    |                 5 |              0.09482 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4743 | >20%                    |                 5 |              0.09486 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4785 | >20%                    |                 5 |              0.0957  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4869 | >20%                    |                10 |              0.04869 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4906 | >20%                    |                 5 |              0.09812 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4929 | 5-10%                   |                 2 |              0.24645 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5001 | >20%                    |                 2 |              0.25005 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5112 | >20%                    |                 5 |              0.10224 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5136 | <5%                     |                10 |              0.05136 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5142 | 10-15%                  |                 5 |              0.10284 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5202 | >20%                    |                 2 |              0.2601  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5225 | >20%                    |                 2 |              0.26125 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5259 | 15-20%                  |                10 |              0.05259 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.528  | 10-15%                  |                10 |              0.0528  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5319 | >20%                    |                 5 |              0.10638 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5333 | 10-15%                  |                 5 |              0.10666 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5347 | >20%                    |                 5 |              0.10694 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5398 | >20%                    |                 5 |              0.10796 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5447 | 15-20%                  |                10 |              0.05447 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5516 | >20%                    |                 5 |              0.11032 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5551 | >20%                    |                 5 |              0.11102 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5561 | 15-20%                  |                10 |              0.05561 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5646 | >20%                    |                10 |              0.05646 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5653 | >20%                    |                 5 |              0.11306 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5718 | 10-15%                  |                 5 |              0.11436 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.572  | 15-20%                  |                 5 |              0.1144  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5726 | 15-20%                  |                10 |              0.05726 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.581  | 10-15%                  |                 2 |              0.2905  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6004 | 15-20%                  |                 2 |              0.3002  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6069 | >20%                    |                 2 |              0.30345 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.608  | 15-20%                  |                 5 |              0.1216  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6142 | <5%                     |                10 |              0.06142 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.615  | >20%                    |                 5 |              0.123   |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6158 | >20%                    |                 5 |              0.12316 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6266 | >20%                    |                10 |              0.06266 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.629  | >20%                    |                 5 |              0.1258  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6369 | >20%                    |                 5 |              0.12738 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6472 | >20%                    |                 2 |              0.3236  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6475 | >20%                    |                 2 |              0.32375 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6506 | >20%                    |                 5 |              0.13012 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6569 | >20%                    |                10 |              0.06569 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6612 | >20%                    |                 5 |              0.13224 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6625 | >20%                    |                10 |              0.06625 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6657 | 10-15%                  |                 2 |              0.33285 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6713 | 5-10%                   |                10 |              0.06713 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6774 | 15-20%                  |                 5 |              0.13548 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6819 | >20%                    |                10 |              0.06819 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6822 | 15-20%                  |                 2 |              0.3411  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6937 | >20%                    |                10 |              0.06937 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6957 | 15-20%                  |                10 |              0.06957 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6969 | >20%                    |                10 |              0.06969 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7002 | >20%                    |                 5 |              0.14004 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7141 | 15-20%                  |                 5 |              0.14282 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7156 | 10-15%                  |                 2 |              0.3578  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7187 | <5%                     |                10 |              0.07187 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7316 | >20%                    |                10 |              0.07316 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7355 | >20%                    |                10 |              0.07355 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7372 | >20%                    |                 5 |              0.14744 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7411 | >20%                    |                 5 |              0.14822 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7575 | >20%                    |                10 |              0.07575 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7575 | >20%                    |                 5 |              0.1515  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.76   | >20%                    |                 5 |              0.152   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7702 | >20%                    |                 2 |              0.3851  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7764 | 10-15%                  |                 5 |              0.15528 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7796 | 15-20%                  |                10 |              0.07796 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7808 | 10-15%                  |                10 |              0.07808 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7808 | >20%                    |                10 |              0.07808 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7836 | >20%                    |                 5 |              0.15672 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7847 | 10-15%                  |                10 |              0.07847 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7854 | 15-20%                  |                10 |              0.07854 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7879 | >20%                    |                10 |              0.07879 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7953 | 5-10%                   |                10 |              0.07953 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7994 | 15-20%                  |                10 |              0.07994 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8054 | 10-15%                  |                 5 |              0.16108 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8206 | >20%                    |                10 |              0.08206 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8277 | 5-10%                   |                10 |              0.08277 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8341 | <5%                     |                10 |              0.08341 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8405 | >20%                    |                 5 |              0.1681  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.843  | 15-20%                  |                10 |              0.0843  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8478 | 5-10%                   |                10 |              0.08478 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8762 | 10-15%                  |                10 |              0.08762 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8796 | >20%                    |                 2 |              0.4398  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9067 | >20%                    |                 2 |              0.45335 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9282 | >20%                    |                10 |              0.09282 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9431 | >20%                    |                10 |              0.09431 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9678 | >20%                    |                 5 |              0.19356 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9679 | >20%                    |                10 |              0.09679 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9721 | >20%                    |                 5 |              0.19442 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9898 | 5-10%                   |                10 |              0.09898 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0161 | >20%                    |                10 |              0.10161 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0303 | >20%                    |                10 |              0.10303 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0399 | >20%                    |                10 |              0.10399 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0509 | 15-20%                  |                10 |              0.10509 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0662 | >20%                    |                 5 |              0.21324 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.073  | 15-20%                  |                10 |              0.1073  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1058 | >20%                    |                10 |              0.11058 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1099 | >20%                    |                 5 |              0.22198 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1344 | >20%                    |                 5 |              0.22688 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1466 | 15-20%                  |                10 |              0.11466 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1899 | >20%                    |                 2 |              0.59495 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1937 | 10-15%                  |                10 |              0.11937 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2159 | 10-15%                  |                10 |              0.12159 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2371 | >20%                    |                10 |              0.12371 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2693 | >20%                    |                10 |              0.12693 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.307  | >20%                    |                10 |              0.1307  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3593 | >20%                    |                10 |              0.13593 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4543 | 5-10%                   |                 2 |              0.72715 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5249 | 10-15%                  |                 5 |              0.30498 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5423 | >20%                    |                10 |              0.15423 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2428 | 15-20%                  |                10 |              0.22428 |