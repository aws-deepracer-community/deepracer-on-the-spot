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

Data correct as of 2025-05-10 01:47:21.977494, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1395 | >20%                    |                 2 |              0.06975 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1801 | >20%                    |                 5 |              0.03602 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.1978 | 5-10%                   |                 5 |              0.03956 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2098 | >20%                    |                 5 |              0.04196 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.223  | >20%                    |                 2 |              0.1115  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2232 | <5%                     |                 2 |              0.1116  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2315 | 15-20%                  |                 2 |              0.11575 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2446 | <5%                     |                 5 |              0.04892 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2452 | <5%                     |                 2 |              0.1226  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2576 | >20%                    |                 2 |              0.1288  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2603 | <5%                     |                 2 |              0.13015 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.266  | 15-20%                  |                 5 |              0.0532  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2693 | 15-20%                  |                 2 |              0.13465 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2705 | 5-10%                   |                 2 |              0.13525 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2745 | 5-10%                   |                 5 |              0.0549  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2765 | >20%                    |                 2 |              0.13825 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | 5-10%                   |                 2 |              0.14245 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2876 | >20%                    |                 2 |              0.1438  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2913 | 15-20%                  |                10 |              0.02913 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | 15-20%                  |                10 |              0.0294  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2981 | 10-15%                  |                 2 |              0.14905 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3013 | 5-10%                   |                 2 |              0.15065 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3028 | >20%                    |                 2 |              0.1514  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3043 | <5%                     |                 2 |              0.15215 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3095 | 5-10%                   |                 2 |              0.15475 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | 5-10%                   |                 2 |              0.15735 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3193 | >20%                    |                 2 |              0.15965 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3222 | >20%                    |                 2 |              0.1611  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3371 | >20%                    |                 2 |              0.16855 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3397 | >20%                    |                10 |              0.03397 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3441 | >20%                    |                 2 |              0.17205 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3486 | >20%                    |                 2 |              0.1743  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3502 | >20%                    |                 5 |              0.07004 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3538 | 15-20%                  |                 5 |              0.07076 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3567 | 15-20%                  |                10 |              0.03567 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3606 | >20%                    |                 5 |              0.07212 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3619 | >20%                    |                 2 |              0.18095 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3653 | 10-15%                  |                10 |              0.03653 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3682 | >20%                    |                 5 |              0.07364 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3687 | <5%                     |                 2 |              0.18435 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3713 | 5-10%                   |                 5 |              0.07426 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.375  | 10-15%                  |                10 |              0.0375  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.376  | >20%                    |                 2 |              0.188   |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3772 | >20%                    |                10 |              0.03772 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3784 | >20%                    |                 2 |              0.1892  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3873 | >20%                    |                 2 |              0.19365 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3907 | <5%                     |                 5 |              0.07814 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3916 | 10-15%                  |                 2 |              0.1958  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3928 | >20%                    |                 5 |              0.07856 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3973 | 5-10%                   |                 5 |              0.07946 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4058 | >20%                    |                 2 |              0.2029  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.408  | 5-10%                   |                 2 |              0.204   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.411  | >20%                    |                 2 |              0.2055  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4128 | 10-15%                  |                 2 |              0.2064  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4189 | >20%                    |                 5 |              0.08378 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4292 | 10-15%                  |                10 |              0.04292 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4317 | 10-15%                  |                 2 |              0.21585 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4353 | <5%                     |                 5 |              0.08706 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4399 | >20%                    |                 2 |              0.21995 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.44   | <5%                     |                 5 |              0.088   |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4439 | 15-20%                  |                 2 |              0.22195 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4443 | >20%                    |                 5 |              0.08886 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4508 | >20%                    |                10 |              0.04508 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4524 | 15-20%                  |                 5 |              0.09048 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4529 | 10-15%                  |                 5 |              0.09058 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4547 | >20%                    |                 5 |              0.09094 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.457  | <5%                     |                 2 |              0.2285  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4682 | >20%                    |                 5 |              0.09364 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4721 | >20%                    |                 2 |              0.23605 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.474  | 5-10%                   |                 5 |              0.0948  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4756 | >20%                    |                 5 |              0.09512 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4778 | >20%                    |                 5 |              0.09556 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4783 | >20%                    |                 2 |              0.23915 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4803 | >20%                    |                 2 |              0.24015 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | >20%                    |                 5 |              0.09672 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4849 | 5-10%                   |                 5 |              0.09698 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4926 | <5%                     |                 5 |              0.09852 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4977 | >20%                    |                 5 |              0.09954 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.502  | 15-20%                  |                 5 |              0.1004  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5039 | >20%                    |                 5 |              0.10078 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5091 | <5%                     |                10 |              0.05091 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5213 | >20%                    |                 2 |              0.26065 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5215 | 10-15%                  |                 5 |              0.1043  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5221 | >20%                    |                 2 |              0.26105 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.531  | >20%                    |                 2 |              0.2655  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5334 | 10-15%                  |                 2 |              0.2667  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5357 | <5%                     |                10 |              0.05357 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5426 | >20%                    |                 2 |              0.2713  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5562 | >20%                    |                 2 |              0.2781  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5624 | 5-10%                   |                 5 |              0.11248 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5637 | 10-15%                  |                10 |              0.05637 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5677 | >20%                    |                 5 |              0.11354 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5692 | 10-15%                  |                 5 |              0.11384 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5781 | >20%                    |                 5 |              0.11562 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5883 | >20%                    |                 2 |              0.29415 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5955 | >20%                    |                 5 |              0.1191  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5962 | >20%                    |                 5 |              0.11924 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5969 | 10-15%                  |                 2 |              0.29845 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5975 | >20%                    |                 5 |              0.1195  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6014 | >20%                    |                 2 |              0.3007  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.61   | <5%                     |                 5 |              0.122   |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6258 | 10-15%                  |                 5 |              0.12516 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6315 | 5-10%                   |                10 |              0.06315 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6401 | >20%                    |                 2 |              0.32005 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6404 | >20%                    |                 5 |              0.12808 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6465 | >20%                    |                 5 |              0.1293  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6477 | 15-20%                  |                10 |              0.06477 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6492 | >20%                    |                10 |              0.06492 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6748 | >20%                    |                 2 |              0.3374  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6755 | 15-20%                  |                 5 |              0.1351  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6939 | >20%                    |                 5 |              0.13878 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7138 | >20%                    |                 5 |              0.14276 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7152 | <5%                     |                 5 |              0.14304 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7203 | >20%                    |                 5 |              0.14406 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.724  | >20%                    |                10 |              0.0724  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7295 | <5%                     |                 5 |              0.1459  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7315 | >20%                    |                 2 |              0.36575 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7328 | 5-10%                   |                10 |              0.07328 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7376 | >20%                    |                10 |              0.07376 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7427 | >20%                    |                 2 |              0.37135 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7433 | >20%                    |                10 |              0.07433 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7472 | 15-20%                  |                10 |              0.07472 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7478 | 10-15%                  |                 5 |              0.14956 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7481 | >20%                    |                10 |              0.07481 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7595 | 10-15%                  |                10 |              0.07595 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7765 | >20%                    |                 5 |              0.1553  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7775 | >20%                    |                 2 |              0.38875 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7982 | <5%                     |                10 |              0.07982 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8027 | <5%                     |                 5 |              0.16054 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8157 | >20%                    |                 5 |              0.16314 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8205 | 10-15%                  |                10 |              0.08205 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.825  | 10-15%                  |                10 |              0.0825  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8259 | 5-10%                   |                10 |              0.08259 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8352 | 15-20%                  |                10 |              0.08352 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8386 | >20%                    |                10 |              0.08386 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8419 | >20%                    |                10 |              0.08419 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8517 | >20%                    |                 2 |              0.42585 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8521 | 15-20%                  |                10 |              0.08521 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8611 | >20%                    |                 2 |              0.43055 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8639 | 15-20%                  |                10 |              0.08639 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8758 | 15-20%                  |                10 |              0.08758 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.878  | 10-15%                  |                10 |              0.0878  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8881 | <5%                     |                10 |              0.08881 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8921 | 10-15%                  |                10 |              0.08921 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8972 | >20%                    |                10 |              0.08972 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9192 | <5%                     |                10 |              0.09192 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9234 | >20%                    |                10 |              0.09234 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9287 | >20%                    |                 5 |              0.18574 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9287 | 15-20%                  |                10 |              0.09287 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9527 | >20%                    |                10 |              0.09527 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.96   | 10-15%                  |                10 |              0.096   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9823 | <5%                     |                 5 |              0.19646 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9912 | >20%                    |                 2 |              0.4956  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0185 | <5%                     |                10 |              0.10185 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0188 | >20%                    |                 5 |              0.20376 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0288 | >20%                    |                10 |              0.10288 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.035  | >20%                    |                10 |              0.1035  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0438 | >20%                    |                10 |              0.10438 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0571 | 15-20%                  |                 2 |              0.52855 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0794 | >20%                    |                 5 |              0.21588 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0805 | 10-15%                  |                 5 |              0.2161  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1314 | <5%                     |                10 |              0.11314 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1598 | >20%                    |                10 |              0.11598 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1723 | 10-15%                  |                 2 |              0.58615 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2271 | >20%                    |                10 |              0.12271 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2541 | >20%                    |                 5 |              0.25082 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2859 | >20%                    |                 2 |              0.64295 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2905 | <5%                     |                 5 |              0.2581  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.319  | >20%                    |                 5 |              0.2638  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3224 | >20%                    |                10 |              0.13224 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.34   | >20%                    |                10 |              0.134   |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3557 | 15-20%                  |                10 |              0.13557 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4666 | 15-20%                  |                10 |              0.14666 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5149 | 15-20%                  |                10 |              0.15149 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.642  | 5-10%                   |                10 |              0.1642  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8048 | >20%                    |                10 |              0.18048 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0183 | <5%                     |                10 |              0.20183 |