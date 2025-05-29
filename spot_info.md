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

Data correct as of 2025-05-29 01:53:57.972689, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1947 | >20%                    |                 2 |              0.09735 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2165 | >20%                    |                 2 |              0.10825 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2206 | >20%                    |                 2 |              0.1103  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.233  | >20%                    |                 2 |              0.1165  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2371 | 5-10%                   |                 2 |              0.11855 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2375 | 5-10%                   |                 5 |              0.0475  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.246  | <5%                     |                 2 |              0.123   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2556 | >20%                    |                10 |              0.02556 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2568 | 15-20%                  |                 2 |              0.1284  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2574 | >20%                    |                 2 |              0.1287  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2597 | 10-15%                  |                 2 |              0.12985 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2646 | 10-15%                  |                 2 |              0.1323  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2659 | >20%                    |                 2 |              0.13295 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2722 | 15-20%                  |                 2 |              0.1361  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.275  | >20%                    |                 2 |              0.1375  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2812 | 15-20%                  |                 5 |              0.05624 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2821 | <5%                     |                 2 |              0.14105 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2822 | >20%                    |                10 |              0.02822 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2932 | >20%                    |                 2 |              0.1466  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | 15-20%                  |                 2 |              0.1477  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3001 | >20%                    |                 5 |              0.06002 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3114 | 15-20%                  |                 2 |              0.1557  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.315  | 15-20%                  |                 2 |              0.1575  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3307 | >20%                    |                 2 |              0.16535 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3367 | 15-20%                  |                 2 |              0.16835 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3377 | >20%                    |                 5 |              0.06754 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3439 | >20%                    |                 2 |              0.17195 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3474 | >20%                    |                 2 |              0.1737  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3482 | >20%                    |                10 |              0.03482 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.351  | >20%                    |                 5 |              0.0702  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3553 | >20%                    |                 5 |              0.07106 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.362  | >20%                    |                10 |              0.0362  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3651 | 15-20%                  |                 2 |              0.18255 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3663 | 10-15%                  |                 5 |              0.07326 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3677 | 15-20%                  |                 2 |              0.18385 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3684 | >20%                    |                 2 |              0.1842  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3691 | >20%                    |                 5 |              0.07382 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3712 | >20%                    |                 5 |              0.07424 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3717 | 5-10%                   |                 2 |              0.18585 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3725 | 5-10%                   |                 2 |              0.18625 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3801 | <5%                     |                 2 |              0.19005 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3802 | >20%                    |                 2 |              0.1901  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4012 | >20%                    |                 2 |              0.2006  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4013 | >20%                    |                 2 |              0.20065 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4077 | 10-15%                  |                 5 |              0.08154 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4081 | 15-20%                  |                 2 |              0.20405 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4117 | <5%                     |                 5 |              0.08234 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4131 | 10-15%                  |                 2 |              0.20655 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4229 | <5%                     |                 2 |              0.21145 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.424  | >20%                    |                10 |              0.0424  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4265 | >20%                    |                 2 |              0.21325 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4287 | >20%                    |                 5 |              0.08574 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4297 | >20%                    |                 5 |              0.08594 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4339 | 15-20%                  |                 5 |              0.08678 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4399 | 15-20%                  |                 5 |              0.08798 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4411 | 5-10%                   |                 5 |              0.08822 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4552 | 15-20%                  |                 5 |              0.09104 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4563 | >20%                    |                 2 |              0.22815 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4592 | >20%                    |                 2 |              0.2296  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4615 | >20%                    |                 2 |              0.23075 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4651 | 15-20%                  |                 5 |              0.09302 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4653 | 10-15%                  |                 5 |              0.09306 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4669 | >20%                    |                 2 |              0.23345 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4709 | 15-20%                  |                10 |              0.04709 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4731 | >20%                    |                 2 |              0.23655 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4756 | >20%                    |                 5 |              0.09512 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4837 | 10-15%                  |                 5 |              0.09674 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.484  | >20%                    |                 2 |              0.242   |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4901 | <5%                     |                 5 |              0.09802 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4914 | 15-20%                  |                 2 |              0.2457  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4921 | >20%                    |                 5 |              0.09842 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4924 | >20%                    |                 5 |              0.09848 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4925 | >20%                    |                 5 |              0.0985  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4938 | <5%                     |                 5 |              0.09876 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4974 | 15-20%                  |                10 |              0.04974 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.504  | <5%                     |                 5 |              0.1008  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5106 | 15-20%                  |                 5 |              0.10212 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5107 | 5-10%                   |                 5 |              0.10214 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5153 | >20%                    |                 5 |              0.10306 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5223 | >20%                    |                 2 |              0.26115 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5231 | >20%                    |                 2 |              0.26155 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5364 | >20%                    |                 5 |              0.10728 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5409 | 15-20%                  |                10 |              0.05409 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5514 | 5-10%                   |                 5 |              0.11028 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5563 | >20%                    |                 5 |              0.11126 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5607 | 10-15%                  |                10 |              0.05607 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5695 | 10-15%                  |                 2 |              0.28475 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5762 | >20%                    |                 5 |              0.11524 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5892 | >20%                    |                10 |              0.05892 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5916 | >20%                    |                 2 |              0.2958  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5944 | >20%                    |                10 |              0.05944 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5948 | >20%                    |                 2 |              0.2974  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5998 | >20%                    |                 5 |              0.11996 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6033 | >20%                    |                 5 |              0.12066 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.604  | >20%                    |                 5 |              0.1208  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6075 | 5-10%                   |                 2 |              0.30375 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6094 | 10-15%                  |                 5 |              0.12188 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6101 | >20%                    |                10 |              0.06101 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6103 | >20%                    |                 5 |              0.12206 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6286 | 5-10%                   |                 2 |              0.3143  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.633  | 5-10%                   |                10 |              0.0633  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6382 | <5%                     |                10 |              0.06382 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6505 | >20%                    |                 5 |              0.1301  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6529 | <5%                     |                 5 |              0.13058 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6551 | >20%                    |                 2 |              0.32755 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6588 | >20%                    |                 5 |              0.13176 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6619 | 10-15%                  |                10 |              0.06619 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6666 | >20%                    |                 2 |              0.3333  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6698 | 15-20%                  |                 5 |              0.13396 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6735 | 10-15%                  |                 2 |              0.33675 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6769 | <5%                     |                10 |              0.06769 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6837 | >20%                    |                 2 |              0.34185 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6984 | 10-15%                  |                 5 |              0.13968 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7041 | >20%                    |                10 |              0.07041 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7146 | 10-15%                  |                10 |              0.07146 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7151 | <5%                     |                10 |              0.07151 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7216 | >20%                    |                10 |              0.07216 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7309 | <5%                     |                 5 |              0.14618 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7416 | >20%                    |                10 |              0.07416 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7447 | >20%                    |                 5 |              0.14894 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7461 | 10-15%                  |                 5 |              0.14922 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7574 | >20%                    |                10 |              0.07574 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7594 | >20%                    |                10 |              0.07594 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7601 | >20%                    |                10 |              0.07601 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7732 | >20%                    |                10 |              0.07732 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7829 | >20%                    |                 5 |              0.15658 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7846 | 15-20%                  |                10 |              0.07846 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7863 | 10-15%                  |                10 |              0.07863 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7913 | >20%                    |                 5 |              0.15826 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8155 | 10-15%                  |                 5 |              0.1631  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8257 | >20%                    |                10 |              0.08257 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8318 | >20%                    |                10 |              0.08318 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8348 | >20%                    |                10 |              0.08348 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8454 | 15-20%                  |                10 |              0.08454 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8564 | <5%                     |                10 |              0.08564 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8574 | 5-10%                   |                10 |              0.08574 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8851 | >20%                    |                10 |              0.08851 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8908 | >20%                    |                10 |              0.08908 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9127 | 5-10%                   |                 2 |              0.45635 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9194 | >20%                    |                10 |              0.09194 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9222 | >20%                    |                10 |              0.09222 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9243 | 10-15%                  |                 5 |              0.18486 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9323 | >20%                    |                10 |              0.09323 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9376 | >20%                    |                 2 |              0.4688  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9636 | >20%                    |                10 |              0.09636 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9692 | >20%                    |                 5 |              0.19384 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9777 | >20%                    |                 2 |              0.48885 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9781 | >20%                    |                 5 |              0.19562 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9834 | <5%                     |                10 |              0.09834 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.004  | >20%                    |                 2 |              0.502   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0079 | 10-15%                  |                 5 |              0.20158 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0174 | >20%                    |                10 |              0.10174 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0628 | >20%                    |                 5 |              0.21256 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0665 | <5%                     |                10 |              0.10665 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0721 | 15-20%                  |                10 |              0.10721 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0814 | 5-10%                   |                10 |              0.10814 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0842 | 15-20%                  |                10 |              0.10842 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1001 | <5%                     |                 2 |              0.55005 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1814 | 15-20%                  |                10 |              0.11814 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2399 | 10-15%                  |                10 |              0.12399 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.269  | 5-10%                   |                10 |              0.1269  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2888 | >20%                    |                10 |              0.12888 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2974 | 15-20%                  |                10 |              0.12974 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2983 | >20%                    |                10 |              0.12983 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3405 | >20%                    |                10 |              0.13405 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3598 | 10-15%                  |                10 |              0.13598 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3942 | >20%                    |                 5 |              0.27884 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4209 | >20%                    |                 2 |              0.71045 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.429  | <5%                     |                 5 |              0.2858  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5366 | >20%                    |                10 |              0.15366 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0405 | <5%                     |                10 |              0.20405 |