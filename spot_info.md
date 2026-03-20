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

Data correct as of 2026-03-20 02:31:58.594884, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1062 | >20%                    |                 2 |              0.0531  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1084 | >20%                    |                 2 |              0.0542  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1365 | 10-15%                  |                 2 |              0.06825 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.166  | 15-20%                  |                 5 |              0.0332  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1815 | >20%                    |                 2 |              0.09075 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | >20%                    |                 5 |              0.03708 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1866 | <5%                     |                 2 |              0.0933  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2079 | 10-15%                  |                 2 |              0.10395 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.224  | 10-15%                  |                 2 |              0.112   |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2279 | >20%                    |                 2 |              0.11395 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2345 | >20%                    |                 2 |              0.11725 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2514 | >20%                    |                 2 |              0.1257  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2532 | 15-20%                  |                10 |              0.02532 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2555 | >20%                    |                 2 |              0.12775 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2578 | >20%                    |                 2 |              0.1289  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2681 | 5-10%                   |                10 |              0.02681 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2752 | >20%                    |                 5 |              0.05504 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2771 | >20%                    |                 2 |              0.13855 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2828 | >20%                    |                 2 |              0.1414  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2889 | >20%                    |                 5 |              0.05778 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2889 | >20%                    |                 5 |              0.05778 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.289  | 15-20%                  |                 2 |              0.1445  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2907 | >20%                    |                 5 |              0.05814 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2923 | 5-10%                   |                 2 |              0.14615 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.2946 | >20%                    |                 2 |              0.1473  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2948 | >20%                    |                 2 |              0.1474  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3063 | <5%                     |                 2 |              0.15315 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3117 | >20%                    |                 2 |              0.15585 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3204 | 5-10%                   |                 5 |              0.06408 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3349 | <5%                     |                 2 |              0.16745 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3388 | >20%                    |                10 |              0.03388 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3407 | 5-10%                   |                10 |              0.03407 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3461 | <5%                     |                 5 |              0.06922 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3475 | 15-20%                  |                 2 |              0.17375 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3487 | <5%                     |                 5 |              0.06974 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3515 | >20%                    |                10 |              0.03515 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3528 | 10-15%                  |                 2 |              0.1764  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3546 | 5-10%                   |                 5 |              0.07092 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3567 | >20%                    |                 2 |              0.17835 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3583 | 15-20%                  |                 5 |              0.07166 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3626 | <5%                     |                 5 |              0.07252 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3646 | >20%                    |                 5 |              0.07292 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3661 | 5-10%                   |                 2 |              0.18305 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3685 |                         |                 5 |              0.0737  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3731 | >20%                    |                 2 |              0.18655 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3733 | 15-20%                  |                10 |              0.03733 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3762 | >20%                    |                10 |              0.03762 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3762 | 15-20%                  |                 2 |              0.1881  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3839 | >20%                    |                 5 |              0.07678 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.385  | >20%                    |                 2 |              0.1925  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3861 | <5%                     |                 5 |              0.07722 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3879 | >20%                    |                 5 |              0.07758 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.391  | 15-20%                  |                 2 |              0.1955  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3967 | 5-10%                   |                 5 |              0.07934 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3969 | 5-10%                   |                 2 |              0.19845 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3993 | 5-10%                   |                 2 |              0.19965 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4001 | >20%                    |                 5 |              0.08002 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.4016 | >20%                    |                10 |              0.04016 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.403  | >20%                    |                 5 |              0.0806  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4231 | <5%                     |                10 |              0.04231 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4242 | 15-20%                  |                 2 |              0.2121  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4247 | 5-10%                   |                 2 |              0.21235 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4255 | >20%                    |                 2 |              0.21275 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4279 | >20%                    |                 2 |              0.21395 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4396 | <5%                     |                 2 |              0.2198  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4435 | 15-20%                  |                 5 |              0.0887  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4444 | >20%                    |                10 |              0.04444 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4461 | >20%                    |                 2 |              0.22305 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4465 | >20%                    |                 5 |              0.0893  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4699 | 5-10%                   |                 5 |              0.09398 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4713 | >20%                    |                 2 |              0.23565 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.476  | >20%                    |                 2 |              0.238   |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4795 | 15-20%                  |                 5 |              0.0959  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4832 | >20%                    |                 5 |              0.09664 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4855 | >20%                    |                 5 |              0.0971  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4917 | >20%                    |                 5 |              0.09834 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4929 | 5-10%                   |                 2 |              0.24645 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4941 | >20%                    |                 5 |              0.09882 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4964 | >20%                    |                 2 |              0.2482  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5016 | 15-20%                  |                10 |              0.05016 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5027 | >20%                    |                 5 |              0.10054 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5032 | >20%                    |                 5 |              0.10064 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5044 | <5%                     |                10 |              0.05044 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5101 | >20%                    |                 2 |              0.25505 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5116 | >20%                    |                 5 |              0.10232 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5122 | >20%                    |                10 |              0.05122 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5124 | 10-15%                  |                 5 |              0.10248 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5152 | 15-20%                  |                 5 |              0.10304 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5192 | >20%                    |                 5 |              0.10384 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5265 | <5%                     |                 5 |              0.1053  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5361 | 15-20%                  |                 2 |              0.26805 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5434 | >20%                    |                 2 |              0.2717  |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5555 |                         |                10 |              0.05555 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5597 | 5-10%                   |                 2 |              0.27985 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5641 | >20%                    |                 5 |              0.11282 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5698 | 15-20%                  |                10 |              0.05698 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5707 | >20%                    |                 5 |              0.11414 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5722 | <5%                     |                10 |              0.05722 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5744 | 15-20%                  |                10 |              0.05744 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5746 | >20%                    |                10 |              0.05746 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5762 | >20%                    |                 2 |              0.2881  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5805 | >20%                    |                10 |              0.05805 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5943 | 15-20%                  |                10 |              0.05943 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6    | >20%                    |                 5 |              0.12    |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6025 | >20%                    |                10 |              0.06025 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6029 | >20%                    |                 2 |              0.30145 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6047 | <5%                     |                10 |              0.06047 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6105 | 5-10%                   |                 5 |              0.1221  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6162 | >20%                    |                10 |              0.06162 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6187 | >20%                    |                 2 |              0.30935 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6229 | >20%                    |                 2 |              0.31145 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.633  | >20%                    |                 5 |              0.1266  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6342 | 5-10%                   |                 2 |              0.3171  |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.6409 |                         |                 2 |              0.32045 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6412 | >20%                    |                10 |              0.06412 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6455 | >20%                    |                 5 |              0.1291  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6529 | >20%                    |                10 |              0.06529 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6534 | 5-10%                   |                 2 |              0.3267  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6568 | <5%                     |                10 |              0.06568 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6661 | 10-15%                  |                 5 |              0.13322 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.668  | >20%                    |                 5 |              0.1336  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6716 | <5%                     |                 5 |              0.13432 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6736 | 5-10%                   |                 5 |              0.13472 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6991 | >20%                    |                10 |              0.06991 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7094 | 15-20%                  |                 2 |              0.3547  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7137 | >20%                    |                10 |              0.07137 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7277 | 10-15%                  |                10 |              0.07277 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7443 | >20%                    |                 5 |              0.14886 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7486 | <5%                     |                 5 |              0.14972 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7557 | >20%                    |                10 |              0.07557 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7648 | >20%                    |                 5 |              0.15296 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7688 | >20%                    |                 5 |              0.15376 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7718 | 10-15%                  |                10 |              0.07718 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7854 | >20%                    |                 5 |              0.15708 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8061 | <5%                     |                10 |              0.08061 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8066 | >20%                    |                10 |              0.08066 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8097 | 10-15%                  |                 2 |              0.40485 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8122 | <5%                     |                 5 |              0.16244 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8152 | >20%                    |                 5 |              0.16304 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8228 | >20%                    |                10 |              0.08228 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8381 | >20%                    |                10 |              0.08381 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8409 | >20%                    |                 2 |              0.42045 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8485 | 5-10%                   |                10 |              0.08485 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8524 | <5%                     |                10 |              0.08524 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8604 | >20%                    |                 5 |              0.17208 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8759 | >20%                    |                10 |              0.08759 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8837 | >20%                    |                10 |              0.08837 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8969 | 5-10%                   |                10 |              0.08969 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.898  | <5%                     |                10 |              0.0898  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8981 | >20%                    |                10 |              0.08981 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9111 | >20%                    |                10 |              0.09111 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9265 | >20%                    |                 5 |              0.1853  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9268 | >20%                    |                 2 |              0.4634  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9445 | >20%                    |                10 |              0.09445 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9461 | >20%                    |                10 |              0.09461 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9468 | 5-10%                   |                 5 |              0.18936 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9544 | 15-20%                  |                10 |              0.09544 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9546 | >20%                    |                10 |              0.09546 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9614 | >20%                    |                 2 |              0.4807  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9637 | >20%                    |                 2 |              0.48185 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9746 | >20%                    |                10 |              0.09746 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9863 | >20%                    |                 5 |              0.19726 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9894 | 15-20%                  |                10 |              0.09894 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0054 | >20%                    |                10 |              0.10054 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0353 | 5-10%                   |                10 |              0.10353 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.0703 | >20%                    |                 5 |              0.21406 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1391 | <5%                     |                 5 |              0.22782 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1582 | 10-15%                  |                 5 |              0.23164 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1684 | <5%                     |                10 |              0.11684 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2205 | >20%                    |                 2 |              0.61025 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2662 | >20%                    |                10 |              0.12662 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3478 | >20%                    |                 2 |              0.6739  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.355  | >20%                    |                 5 |              0.271   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3647 | >20%                    |                10 |              0.13647 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3653 | 10-15%                  |                10 |              0.13653 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3853 | >20%                    |                 2 |              0.69265 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4219 | >20%                    |                 2 |              0.71095 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4729 | >20%                    |                 5 |              0.29458 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5051 | 10-15%                  |                 5 |              0.30102 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5065 | >20%                    |                10 |              0.15065 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7713 | 15-20%                  |                10 |              0.17713 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3199 | 10-15%                  |                10 |              0.23199 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.7221 | <5%                     |                10 |              0.27221 |