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

Data correct as of 2026-10-13 06:11:14.411071, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1117 | >20%                    |                 2 |              0.05585 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1462 | >20%                    |                 2 |              0.0731  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1682 | 15-20%                  |                 2 |              0.0841  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1876 | 15-20%                  |                 5 |              0.03752 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1992 | >20%                    |                 2 |              0.0996  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2325 | >20%                    |                 5 |              0.0465  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2386 | 10-15%                  |                 2 |              0.1193  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2456 | >20%                    |                 2 |              0.1228  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2671 | 5-10%                   |                10 |              0.02671 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2712 | >20%                    |                 2 |              0.1356  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2716 | >20%                    |                 2 |              0.1358  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2764 | >20%                    |                 2 |              0.1382  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2853 | >20%                    |                 2 |              0.14265 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2971 | 15-20%                  |                 2 |              0.14855 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.305  | >20%                    |                 2 |              0.1525  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3146 | >20%                    |                 5 |              0.06292 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3185 | >20%                    |                 2 |              0.15925 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3444 | <5%                     |                10 |              0.03444 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3563 | 10-15%                  |                 2 |              0.17815 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3652 | 15-20%                  |                 2 |              0.1826  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3674 | >20%                    |                 5 |              0.07348 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3719 | >20%                    |                 5 |              0.07438 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3748 | 15-20%                  |                 2 |              0.1874  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3862 | >20%                    |                 5 |              0.07724 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3872 | >20%                    |                 5 |              0.07744 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3876 | >20%                    |                 2 |              0.1938  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3903 | >20%                    |                 2 |              0.19515 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3963 | <5%                     |                 2 |              0.19815 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3995 | 5-10%                   |                10 |              0.03995 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4013 | >20%                    |                10 |              0.04013 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4016 | >20%                    |                 5 |              0.08032 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4028 | >20%                    |                10 |              0.04028 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4044 | >20%                    |                 5 |              0.08088 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4107 | >20%                    |                 5 |              0.08214 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4157 | >20%                    |                 2 |              0.20785 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4286 | >20%                    |                10 |              0.04286 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4394 | >20%                    |                 2 |              0.2197  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4462 | >20%                    |                 2 |              0.2231  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4468 | >20%                    |                 5 |              0.08936 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4515 | >20%                    |                 2 |              0.22575 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4542 | >20%                    |                 2 |              0.2271  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4684 | >20%                    |                 5 |              0.09368 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4727 | 10-15%                  |                 2 |              0.23635 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.479  | >20%                    |                 5 |              0.0958  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4868 |                         |                 2 |              0.2434  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4896 | >20%                    |                 2 |              0.2448  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4936 | >20%                    |                 2 |              0.2468  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5148 | >20%                    |                 5 |              0.10296 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5209 | >20%                    |                 5 |              0.10418 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5251 | >20%                    |                 2 |              0.26255 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5272 |                         |                10 |              0.05272 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5346 | 5-10%                   |                10 |              0.05346 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5353 | >20%                    |                 5 |              0.10706 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5489 | >20%                    |                 2 |              0.27445 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5518 | <5%                     |                 2 |              0.2759  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5592 | 15-20%                  |                 2 |              0.2796  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5694 | >20%                    |                 5 |              0.11388 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5742 | 10-15%                  |                 5 |              0.11484 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5765 | >20%                    |                 5 |              0.1153  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5806 | >20%                    |                 5 |              0.11612 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.592  | >20%                    |                 2 |              0.296   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6017 | >20%                    |                 5 |              0.12034 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6022 | >20%                    |                 5 |              0.12044 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6136 | 10-15%                  |                 2 |              0.3068  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6177 | >20%                    |                10 |              0.06177 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6206 | >20%                    |                 5 |              0.12412 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6212 | >20%                    |                 2 |              0.3106  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6509 | >20%                    |                 5 |              0.13018 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6624 | >20%                    |                10 |              0.06624 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6678 | >20%                    |                 5 |              0.13356 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.668  | >20%                    |                 5 |              0.1336  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6732 | 5-10%                   |                 2 |              0.3366  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6782 | 15-20%                  |                 2 |              0.3391  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.681  | <5%                     |                 2 |              0.3405  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6904 | >20%                    |                 5 |              0.13808 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6935 | >20%                    |                10 |              0.06935 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.695  | >20%                    |                 5 |              0.139   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7005 | >20%                    |                10 |              0.07005 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7034 | >20%                    |                 2 |              0.3517  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7285 | >20%                    |                 5 |              0.1457  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.73   | 15-20%                  |                10 |              0.073   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7301 | >20%                    |                10 |              0.07301 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7347 | 15-20%                  |                 5 |              0.14694 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7475 | >20%                    |                 5 |              0.1495  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7633 | >20%                    |                 5 |              0.15266 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7761 | >20%                    |                 5 |              0.15522 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.78   | >20%                    |                 5 |              0.156   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7961 | 5-10%                   |                 5 |              0.15922 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7985 | 15-20%                  |                10 |              0.07985 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.8088 |                         |                 5 |              0.16176 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8141 | >20%                    |                10 |              0.08141 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8152 | >20%                    |                10 |              0.08152 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8162 | >20%                    |                10 |              0.08162 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8164 | 15-20%                  |                10 |              0.08164 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.82   | >20%                    |                 5 |              0.164   |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8217 | >20%                    |                10 |              0.08217 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8247 | 15-20%                  |                10 |              0.08247 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8295 | 5-10%                   |                10 |              0.08295 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8337 | 15-20%                  |                 5 |              0.16674 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8345 | 10-15%                  |                10 |              0.08345 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8441 | >20%                    |                 5 |              0.16882 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8482 | >20%                    |                 2 |              0.4241  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8592 | 10-15%                  |                 2 |              0.4296  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8633 | >20%                    |                10 |              0.08633 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8789 | >20%                    |                10 |              0.08789 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8794 | >20%                    |                10 |              0.08794 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8929 | 10-15%                  |                 2 |              0.44645 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.899  | >20%                    |                10 |              0.0899  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9101 | <5%                     |                 5 |              0.18202 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9132 | >20%                    |                 5 |              0.18264 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9201 | >20%                    |                 5 |              0.18402 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9245 | >20%                    |                 2 |              0.46225 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9693 | >20%                    |                10 |              0.09693 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9799 | >20%                    |                10 |              0.09799 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9949 | 15-20%                  |                10 |              0.09949 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.0058 | >20%                    |                 2 |              0.5029  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0151 | >20%                    |                10 |              0.10151 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0235 | >20%                    |                10 |              0.10235 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0339 | >20%                    |                10 |              0.10339 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0379 | 15-20%                  |                10 |              0.10379 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1179 | 5-10%                   |                10 |              0.11179 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1281 | >20%                    |                 5 |              0.22562 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1334 | 10-15%                  |                 2 |              0.5667  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1366 | >20%                    |                10 |              0.11366 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1905 | >20%                    |                10 |              0.11905 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2064 | >20%                    |                10 |              0.12064 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.2108 |                         |                 2 |              0.6054  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2595 | >20%                    |                10 |              0.12595 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2832 | 10-15%                  |                10 |              0.12832 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.294  | 15-20%                  |                10 |              0.1294  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3015 | 5-10%                   |                 2 |              0.65075 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3596 | 15-20%                  |                10 |              0.13596 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3704 | >20%                    |                10 |              0.13704 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3816 | >20%                    |                 2 |              0.6908  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4441 | >20%                    |                10 |              0.14441 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5319 | 5-10%                   |                 5 |              0.30638 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5596 | >20%                    |                 5 |              0.31192 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.567  |                         |                 2 |              0.7835  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5747 | >20%                    |                 2 |              0.78735 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.5774 |                         |                10 |              0.15774 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6157 | >20%                    |                10 |              0.16157 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.7008 |                         |                 5 |              0.34016 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7128 | >20%                    |                10 |              0.17128 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.7415 | >20%                    |                 5 |              0.3483  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.8245 | >20%                    |                 5 |              0.3649  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.851  | >20%                    |                10 |              0.1851  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.8585 | 5-10%                   |                 2 |              0.92925 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9533 |                         |                 5 |              0.39066 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.081  | 15-20%                  |                 5 |              0.4162  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2089 | 5-10%                   |                 2 |              1.10445 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2249 | 5-10%                   |                10 |              0.22249 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5789 | >20%                    |                10 |              0.25789 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.5867 |                         |                10 |              0.25867 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.1078 | >20%                    |                10 |              0.31078 |