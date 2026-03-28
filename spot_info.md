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

Data correct as of 2026-03-28 02:37:10.373197, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1087 | >20%                    |                 2 |              0.05435 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1135 | >20%                    |                 2 |              0.05675 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1321 | <5%                     |                 2 |              0.06605 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1494 | 10-15%                  |                 5 |              0.02988 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2004 | 15-20%                  |                 2 |              0.1002  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2113 | >20%                    |                 2 |              0.10565 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2236 | >20%                    |                 2 |              0.1118  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2255 | 10-15%                  |                10 |              0.02255 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | >20%                    |                 2 |              0.11935 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2419 | 10-15%                  |                 5 |              0.04838 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2419 | 15-20%                  |                 2 |              0.12095 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2446 | >20%                    |                 2 |              0.1223  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | >20%                    |                 2 |              0.1255  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2558 | 10-15%                  |                 2 |              0.1279  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2572 | 5-10%                   |                10 |              0.02572 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.266  | >20%                    |                 2 |              0.133   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2692 | 15-20%                  |                 5 |              0.05384 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2737 | 15-20%                  |                 2 |              0.13685 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2759 | >20%                    |                 2 |              0.13795 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2886 | >20%                    |                10 |              0.02886 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2916 | >20%                    |                10 |              0.02916 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.294  | 5-10%                   |                 2 |              0.147   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.2942 | 10-15%                  |                 2 |              0.1471  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3004 | >20%                    |                10 |              0.03004 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3055 | >20%                    |                 5 |              0.0611  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.307  | >20%                    |                 2 |              0.1535  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3098 | >20%                    |                 2 |              0.1549  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3138 | 5-10%                   |                10 |              0.03138 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3149 | 10-15%                  |                 2 |              0.15745 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3191 | <5%                     |                 5 |              0.06382 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3213 | 15-20%                  |                 5 |              0.06426 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.333  | <5%                     |                 2 |              0.1665  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3381 | >20%                    |                 5 |              0.06762 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3408 | >20%                    |                 2 |              0.1704  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3421 | >20%                    |                 5 |              0.06842 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.344  | 15-20%                  |                 5 |              0.0688  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3444 | >20%                    |                10 |              0.03444 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3459 | >20%                    |                 5 |              0.06918 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3475 | 10-15%                  |                 2 |              0.17375 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3507 | <5%                     |                 2 |              0.17535 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3513 | <5%                     |                 2 |              0.17565 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3538 | >20%                    |                 5 |              0.07076 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3676 | >20%                    |                 2 |              0.1838  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3687 | 15-20%                  |                 2 |              0.18435 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.369  | >20%                    |                10 |              0.0369  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3729 | >20%                    |                 2 |              0.18645 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3733 | 10-15%                  |                 5 |              0.07466 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3737 | >20%                    |                 5 |              0.07474 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3799 | <5%                     |                 5 |              0.07598 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3835 | >20%                    |                 5 |              0.0767  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.3841 | <5%                     |                10 |              0.03841 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3917 | >20%                    |                 5 |              0.07834 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3955 | <5%                     |                10 |              0.03955 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3982 | 10-15%                  |                 2 |              0.1991  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3984 | >20%                    |                 5 |              0.07968 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4004 | 5-10%                   |                10 |              0.04004 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.4031 | >20%                    |                 2 |              0.20155 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4046 | >20%                    |                 2 |              0.2023  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4053 | >20%                    |                10 |              0.04053 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4067 | 15-20%                  |                10 |              0.04067 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4078 | 10-15%                  |                 2 |              0.2039  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4157 | 15-20%                  |                 2 |              0.20785 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4176 | >20%                    |                 5 |              0.08352 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4181 | >20%                    |                 2 |              0.20905 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4214 | <5%                     |                 2 |              0.2107  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4215 | >20%                    |                 2 |              0.21075 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4255 | >20%                    |                 5 |              0.0851  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4283 | >20%                    |                 5 |              0.08566 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4313 | <5%                     |                 5 |              0.08626 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4315 | >20%                    |                 2 |              0.21575 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4436 | >20%                    |                 5 |              0.08872 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4437 | >20%                    |                 2 |              0.22185 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4541 | >20%                    |                 5 |              0.09082 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4564 | <5%                     |                10 |              0.04564 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4564 | >20%                    |                 2 |              0.2282  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4593 | >20%                    |                 2 |              0.22965 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4695 | 15-20%                  |                10 |              0.04695 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.47   | 15-20%                  |                 2 |              0.235   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.476  | >20%                    |                 5 |              0.0952  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.477  | >20%                    |                 5 |              0.0954  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4799 | >20%                    |                 5 |              0.09598 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4816 | >20%                    |                 5 |              0.09632 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4829 | >20%                    |                 2 |              0.24145 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4842 | >20%                    |                 5 |              0.09684 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4862 | <5%                     |                10 |              0.04862 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4905 | >20%                    |                 5 |              0.0981  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.499  | >20%                    |                 5 |              0.0998  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5033 | >20%                    |                 2 |              0.25165 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5043 | 15-20%                  |                10 |              0.05043 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5098 | >20%                    |                 5 |              0.10196 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.512  | >20%                    |                 5 |              0.1024  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5124 | >20%                    |                 5 |              0.10248 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5165 | >20%                    |                10 |              0.05165 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5178 | 15-20%                  |                 2 |              0.2589  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5225 | >20%                    |                 5 |              0.1045  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.523  | 15-20%                  |                 5 |              0.1046  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5406 | >20%                    |                 5 |              0.10812 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5464 | 5-10%                   |                 5 |              0.10928 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5542 | >20%                    |                 2 |              0.2771  |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5555 | >20%                    |                10 |              0.05555 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5623 | 5-10%                   |                 2 |              0.28115 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5696 | >20%                    |                 2 |              0.2848  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5715 | >20%                    |                10 |              0.05715 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5755 | >20%                    |                10 |              0.05755 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5801 | 10-15%                  |                 5 |              0.11602 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5806 | <5%                     |                10 |              0.05806 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5838 | 10-15%                  |                10 |              0.05838 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5997 | >20%                    |                10 |              0.05997 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6051 | >20%                    |                 2 |              0.30255 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6083 | >20%                    |                 2 |              0.30415 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6286 | 10-15%                  |                 2 |              0.3143  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6291 | >20%                    |                10 |              0.06291 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6348 | >20%                    |                 5 |              0.12696 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6363 | >20%                    |                 5 |              0.12726 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6384 | >20%                    |                 5 |              0.12768 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6444 | >20%                    |                 5 |              0.12888 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6493 | >20%                    |                 5 |              0.12986 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6531 | 5-10%                   |                10 |              0.06531 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6531 | >20%                    |                10 |              0.06531 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.659  | >20%                    |                10 |              0.0659  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6647 | >20%                    |                10 |              0.06647 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6649 | 5-10%                   |                 5 |              0.13298 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6806 | >20%                    |                 5 |              0.13612 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6828 | >20%                    |                 2 |              0.3414  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.685  | >20%                    |                10 |              0.0685  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6957 | >20%                    |                 2 |              0.34785 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6998 | >20%                    |                10 |              0.06998 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7162 | >20%                    |                 5 |              0.14324 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7196 | >20%                    |                 5 |              0.14392 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7215 | >20%                    |                 5 |              0.1443  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7301 | >20%                    |                 5 |              0.14602 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7316 | >20%                    |                10 |              0.07316 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7317 | >20%                    |                 5 |              0.14634 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.735  | >20%                    |                10 |              0.0735  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.765  | >20%                    |                10 |              0.0765  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7656 | >20%                    |                10 |              0.07656 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7666 | 5-10%                   |                 2 |              0.3833  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7695 | >20%                    |                 5 |              0.1539  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.7697 | <5%                     |                 2 |              0.38485 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7718 | >20%                    |                10 |              0.07718 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7759 | >20%                    |                10 |              0.07759 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7838 | >20%                    |                10 |              0.07838 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7967 | >20%                    |                 5 |              0.15934 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8078 | 5-10%                   |                 2 |              0.4039  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.825  | >20%                    |                 2 |              0.4125  |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8301 | <5%                     |                 5 |              0.16602 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8313 | >20%                    |                10 |              0.08313 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8476 | >20%                    |                 2 |              0.4238  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.848  | >20%                    |                 5 |              0.1696  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8648 | >20%                    |                 5 |              0.17296 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8664 | >20%                    |                10 |              0.08664 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8766 | 5-10%                   |                10 |              0.08766 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8783 | >20%                    |                 2 |              0.43915 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8802 | >20%                    |                10 |              0.08802 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8814 | >20%                    |                10 |              0.08814 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8991 | >20%                    |                 2 |              0.44955 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9189 | 15-20%                  |                10 |              0.09189 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9299 | >20%                    |                10 |              0.09299 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9324 | >20%                    |                10 |              0.09324 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9456 | 10-15%                  |                10 |              0.09456 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9573 | 15-20%                  |                10 |              0.09573 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9708 | >20%                    |                10 |              0.09708 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9908 | 15-20%                  |                10 |              0.09908 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0088 | 5-10%                   |                10 |              0.10088 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0408 | >20%                    |                10 |              0.10408 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0478 | >20%                    |                10 |              0.10478 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0638 | >20%                    |                10 |              0.10638 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.0644 | >20%                    |                 5 |              0.21288 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0746 | 10-15%                  |                 2 |              0.5373  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1091 | >20%                    |                 5 |              0.22182 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.11   | >20%                    |                10 |              0.111   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1216 | >20%                    |                 5 |              0.22432 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1263 | >20%                    |                 5 |              0.22526 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.1519 | <5%                     |                 2 |              0.57595 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1556 | 10-15%                  |                10 |              0.11556 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.2594 | <5%                     |                 5 |              0.25188 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3036 | 5-10%                   |                 2 |              0.6518  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3064 | 15-20%                  |                10 |              0.13064 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3209 | >20%                    |                 5 |              0.26418 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3997 | 15-20%                  |                 5 |              0.27994 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.404  | >20%                    |                 2 |              0.702   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4112 | 15-20%                  |                10 |              0.14112 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.414  | >20%                    |                10 |              0.1414  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9072 | >20%                    |                10 |              0.19072 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.3326 | <5%                     |                10 |              0.23326 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.667  | >20%                    |                10 |              0.2667  |