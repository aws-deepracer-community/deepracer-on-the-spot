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

Data correct as of 2025-04-24 01:49:12.420403, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1162 | >20%                    |                 2 |              0.0581  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.122  | >20%                    |                 2 |              0.061   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1374 | 15-20%                  |                 5 |              0.02748 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1809 | >20%                    |                 2 |              0.09045 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1897 | <5%                     |                 2 |              0.09485 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2025 | <5%                     |                 2 |              0.10125 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2078 | >20%                    |                 5 |              0.04156 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2278 | 15-20%                  |                 2 |              0.1139  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | >20%                    |                10 |              0.02308 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2319 | 5-10%                   |                 5 |              0.04638 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2432 | 5-10%                   |                 2 |              0.1216  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2544 | >20%                    |                 2 |              0.1272  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2692 | 5-10%                   |                 2 |              0.1346  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.28   | >20%                    |                 2 |              0.14    |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2802 | >20%                    |                 5 |              0.05604 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2868 | 5-10%                   |                 2 |              0.1434  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2876 | >20%                    |                 2 |              0.1438  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | 10-15%                  |                10 |              0.02887 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2898 | <5%                     |                 2 |              0.1449  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2904 | 10-15%                  |                 2 |              0.1452  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2949 | <5%                     |                 2 |              0.14745 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.295  | 15-20%                  |                10 |              0.0295  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2953 | 15-20%                  |                10 |              0.02953 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3048 | 5-10%                   |                 2 |              0.1524  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3061 | >20%                    |                 2 |              0.15305 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3087 | <5%                     |                 2 |              0.15435 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3101 | >20%                    |                 2 |              0.15505 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3293 | >20%                    |                10 |              0.03293 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.334  | >20%                    |                 2 |              0.167   |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3347 | <5%                     |                 5 |              0.06694 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3356 | >20%                    |                 2 |              0.1678  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.337  | >20%                    |                 2 |              0.1685  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3429 | >20%                    |                 5 |              0.06858 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3505 | >20%                    |                10 |              0.03505 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.351  | >20%                    |                10 |              0.0351  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3514 | 5-10%                   |                 2 |              0.1757  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3523 | >20%                    |                 2 |              0.17615 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3528 | 10-15%                  |                10 |              0.03528 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3567 | >20%                    |                 2 |              0.17835 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3595 | >20%                    |                 2 |              0.17975 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3619 | >20%                    |                10 |              0.03619 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3648 | 15-20%                  |                10 |              0.03648 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3662 | >20%                    |                 5 |              0.07324 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3664 | <5%                     |                 5 |              0.07328 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3671 | >20%                    |                 2 |              0.18355 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3712 | >20%                    |                 5 |              0.07424 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3737 | 10-15%                  |                 2 |              0.18685 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3893 | 5-10%                   |                 2 |              0.19465 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3905 | 5-10%                   |                 5 |              0.0781  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3941 | <5%                     |                 2 |              0.19705 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4136 | >20%                    |                 2 |              0.2068  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.416  | 15-20%                  |                 5 |              0.0832  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4177 | >20%                    |                 2 |              0.20885 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4205 | 10-15%                  |                 2 |              0.21025 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.421  | 5-10%                   |                 5 |              0.0842  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.422  | 15-20%                  |                 2 |              0.211   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4315 | >20%                    |                 5 |              0.0863  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4364 | >20%                    |                 5 |              0.08728 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4396 | 15-20%                  |                 5 |              0.08792 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4409 | 15-20%                  |                 2 |              0.22045 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4448 | >20%                    |                 2 |              0.2224  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4455 | 5-10%                   |                 5 |              0.0891  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.446  | >20%                    |                 2 |              0.223   |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4495 | <5%                     |                 5 |              0.0899  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4504 | >20%                    |                 5 |              0.09008 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4521 | 10-15%                  |                 5 |              0.09042 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4617 | >20%                    |                 2 |              0.23085 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4689 | >20%                    |                 5 |              0.09378 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4697 | 10-15%                  |                 5 |              0.09394 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4735 | >20%                    |                 5 |              0.0947  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4748 | 10-15%                  |                10 |              0.04748 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4779 | <5%                     |                 5 |              0.09558 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4789 | <5%                     |                 5 |              0.09578 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4824 | >20%                    |                 5 |              0.09648 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4898 | >20%                    |                 2 |              0.2449  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4934 | >20%                    |                 2 |              0.2467  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5096 | <5%                     |                 2 |              0.2548  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5101 | >20%                    |                 5 |              0.10202 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5146 | >20%                    |                 5 |              0.10292 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5158 | 10-15%                  |                 2 |              0.2579  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5174 | >20%                    |                10 |              0.05174 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5195 | 15-20%                  |                 5 |              0.1039  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.537  | >20%                    |                 2 |              0.2685  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5403 | >20%                    |                 2 |              0.27015 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5476 | 15-20%                  |                 5 |              0.10952 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5517 | >20%                    |                 5 |              0.11034 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5525 | >20%                    |                 5 |              0.1105  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5608 | >20%                    |                10 |              0.05608 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.562  | >20%                    |                 5 |              0.1124  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5628 | 5-10%                   |                 5 |              0.11256 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5653 | >20%                    |                 5 |              0.11306 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5658 | 10-15%                  |                 2 |              0.2829  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5692 | 15-20%                  |                10 |              0.05692 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5698 | 10-15%                  |                 5 |              0.11396 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5715 | >20%                    |                 2 |              0.28575 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5729 | >20%                    |                 5 |              0.11458 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5754 | >20%                    |                 2 |              0.2877  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.584  | >20%                    |                 2 |              0.292   |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6012 | <5%                     |                 5 |              0.12024 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6088 | 10-15%                  |                 5 |              0.12176 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6184 | 15-20%                  |                10 |              0.06184 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6186 | >20%                    |                 2 |              0.3093  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6365 | >20%                    |                 2 |              0.31825 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6533 | >20%                    |                 2 |              0.32665 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6636 | >20%                    |                 5 |              0.13272 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6646 | >20%                    |                 5 |              0.13292 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6648 | >20%                    |                 2 |              0.3324  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6703 | >20%                    |                 5 |              0.13406 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6742 | 10-15%                  |                10 |              0.06742 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.675  | 10-15%                  |                10 |              0.0675  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6808 | <5%                     |                 5 |              0.13616 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6836 | 15-20%                  |                 5 |              0.13672 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.685  | <5%                     |                10 |              0.0685  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.702  | >20%                    |                10 |              0.0702  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7031 | >20%                    |                 2 |              0.35155 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7097 | 5-10%                   |                10 |              0.07097 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.71   | >20%                    |                 5 |              0.142   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7107 | >20%                    |                10 |              0.07107 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7187 | >20%                    |                 5 |              0.14374 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7206 | <5%                     |                 5 |              0.14412 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7263 | 5-10%                   |                10 |              0.07263 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7301 | 15-20%                  |                10 |              0.07301 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7303 | >20%                    |                 5 |              0.14606 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7319 | >20%                    |                 2 |              0.36595 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7472 | 10-15%                  |                 5 |              0.14944 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7526 | <5%                     |                 5 |              0.15052 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7576 | >20%                    |                 5 |              0.15152 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7598 | 15-20%                  |                10 |              0.07598 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7694 | >20%                    |                 5 |              0.15388 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7696 | >20%                    |                10 |              0.07696 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7738 | >20%                    |                10 |              0.07738 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7826 | >20%                    |                 2 |              0.3913  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7835 | 10-15%                  |                10 |              0.07835 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7934 | <5%                     |                10 |              0.07934 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7959 | >20%                    |                10 |              0.07959 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7978 | >20%                    |                10 |              0.07978 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8209 | 5-10%                   |                10 |              0.08209 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8292 | 10-15%                  |                10 |              0.08292 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8333 | 5-10%                   |                10 |              0.08333 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8461 | >20%                    |                10 |              0.08461 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8465 | >20%                    |                10 |              0.08465 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8481 | 10-15%                  |                10 |              0.08481 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8523 | 10-15%                  |                10 |              0.08523 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8577 | >20%                    |                10 |              0.08577 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8641 | >20%                    |                 2 |              0.43205 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8768 | <5%                     |                10 |              0.08768 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8799 | <5%                     |                10 |              0.08799 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.914  | 15-20%                  |                10 |              0.0914  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.922  | 15-20%                  |                10 |              0.0922  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9273 | >20%                    |                 5 |              0.18546 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9421 | 15-20%                  |                 5 |              0.18842 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9461 | >20%                    |                 2 |              0.47305 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.971  | <5%                     |                 5 |              0.1942  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9767 | >20%                    |                10 |              0.09767 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.9983 | >20%                    |                 5 |              0.19966 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.002  | >20%                    |                10 |              0.1002  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.0051 | <5%                     |                10 |              0.10051 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0164 | >20%                    |                10 |              0.10164 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0185 | >20%                    |                10 |              0.10185 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0514 | 5-10%                   |                10 |              0.10514 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0714 | <5%                     |                10 |              0.10714 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0726 | >20%                    |                10 |              0.10726 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1022 | <5%                     |                10 |              0.11022 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1293 | >20%                    |                 2 |              0.56465 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1476 | >20%                    |                10 |              0.11476 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1948 | >20%                    |                 5 |              0.23896 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.208  | >20%                    |                10 |              0.1208  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2216 | >20%                    |                 5 |              0.24432 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2543 | 15-20%                  |                 2 |              0.62715 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2547 | <5%                     |                 5 |              0.25094 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2722 | >20%                    |                10 |              0.12722 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2725 | >20%                    |                 5 |              0.2545  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.289  | 10-15%                  |                 2 |              0.6445  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2953 | >20%                    |                 5 |              0.25906 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3699 | 15-20%                  |                10 |              0.13699 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3979 | 15-20%                  |                10 |              0.13979 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4228 | >20%                    |                 2 |              0.7114  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6169 | >20%                    |                10 |              0.16169 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.744  | >20%                    |                10 |              0.1744  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8236 | 15-20%                  |                10 |              0.18236 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.935  | <5%                     |                10 |              0.1935  |