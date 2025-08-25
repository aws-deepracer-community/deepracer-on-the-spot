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

Data correct as of 2025-08-25 01:55:03.874205, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0974 | 5-10%                   |                 2 |              0.0487  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1025 | >20%                    |                 2 |              0.05125 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1421 | >20%                    |                 5 |              0.02842 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1663 | >20%                    |                 5 |              0.03326 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1912 | >20%                    |                 2 |              0.0956  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2023 | 10-15%                  |                 5 |              0.04046 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2049 | >20%                    |                 2 |              0.10245 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2105 | 10-15%                  |                 2 |              0.10525 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2148 | >20%                    |                 2 |              0.1074  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.246  | >20%                    |                 2 |              0.123   |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2487 | >20%                    |                 5 |              0.04974 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2554 | >20%                    |                 5 |              0.05108 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2665 | >20%                    |                 2 |              0.13325 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2708 | >20%                    |                 2 |              0.1354  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2879 | 10-15%                  |                 2 |              0.14395 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2911 | >20%                    |                 2 |              0.14555 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3138 | 10-15%                  |                 2 |              0.1569  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3138 | 10-15%                  |                 2 |              0.1569  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | >20%                    |                 2 |              0.15735 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3249 | 5-10%                   |                 2 |              0.16245 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3327 | >20%                    |                 2 |              0.16635 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3346 | >20%                    |                 2 |              0.1673  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3409 | >20%                    |                 2 |              0.17045 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.3584 | >20%                    |                 2 |              0.1792  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3606 | >20%                    |                 2 |              0.1803  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.361  | >20%                    |                10 |              0.0361  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3627 | >20%                    |                 5 |              0.07254 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3647 | >20%                    |                 2 |              0.18235 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3688 | >20%                    |                 2 |              0.1844  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3777 | >20%                    |                 5 |              0.07554 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3798 | >20%                    |                 2 |              0.1899  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.385  | >20%                    |                 5 |              0.077   |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3924 | 10-15%                  |                10 |              0.03924 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3955 | >20%                    |                 5 |              0.0791  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3978 | >20%                    |                 2 |              0.1989  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3994 | 10-15%                  |                 2 |              0.1997  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4029 | >20%                    |                 2 |              0.20145 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4093 | >20%                    |                 5 |              0.08186 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4165 | 10-15%                  |                 2 |              0.20825 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4189 | >20%                    |                 2 |              0.20945 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4202 | >20%                    |                 5 |              0.08404 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4219 | >20%                    |                 5 |              0.08438 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4307 | >20%                    |                 5 |              0.08614 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.442  | 10-15%                  |                 2 |              0.221   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4537 | 5-10%                   |                 2 |              0.22685 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4553 | >20%                    |                 5 |              0.09106 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4638 | >20%                    |                10 |              0.04638 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4668 | 15-20%                  |                 2 |              0.2334  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4712 | 15-20%                  |                 5 |              0.09424 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4727 | <5%                     |                 2 |              0.23635 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4748 | >20%                    |                 2 |              0.2374  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4755 | >20%                    |                 2 |              0.23775 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4786 | >20%                    |                 5 |              0.09572 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4854 | 15-20%                  |                 5 |              0.09708 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4895 | 15-20%                  |                 2 |              0.24475 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4912 | >20%                    |                 2 |              0.2456  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4927 | >20%                    |                 2 |              0.24635 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.499  | 5-10%                   |                 5 |              0.0998  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5002 | >20%                    |                 2 |              0.2501  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5019 | 15-20%                  |                 5 |              0.10038 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5064 | >20%                    |                 5 |              0.10128 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.507  | >20%                    |                 2 |              0.2535  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5071 | >20%                    |                 5 |              0.10142 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5079 | 15-20%                  |                 2 |              0.25395 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5146 | 15-20%                  |                 5 |              0.10292 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5166 | >20%                    |                 2 |              0.2583  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5314 | >20%                    |                 2 |              0.2657  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5335 | >20%                    |                 5 |              0.1067  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5359 | >20%                    |                 2 |              0.26795 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5406 | >20%                    |                 2 |              0.2703  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5524 | 10-15%                  |                 2 |              0.2762  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5538 | 15-20%                  |                 5 |              0.11076 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5688 | >20%                    |                 2 |              0.2844  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5693 | 10-15%                  |                10 |              0.05693 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5745 | 10-15%                  |                10 |              0.05745 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5753 | >20%                    |                 5 |              0.11506 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5824 | >20%                    |                 5 |              0.11648 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5825 | >20%                    |                 2 |              0.29125 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5877 | >20%                    |                 5 |              0.11754 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5912 | >20%                    |                 5 |              0.11824 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5926 | >20%                    |                 5 |              0.11852 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5931 | >20%                    |                 5 |              0.11862 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5954 | >20%                    |                 5 |              0.11908 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5989 | 10-15%                  |                 2 |              0.29945 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6108 | 10-15%                  |                 5 |              0.12216 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6127 | >20%                    |                 5 |              0.12254 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6174 | 10-15%                  |                 5 |              0.12348 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.62   | 15-20%                  |                 5 |              0.124   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6312 | 15-20%                  |                 5 |              0.12624 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6345 | 15-20%                  |                 5 |              0.1269  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6398 | >20%                    |                 2 |              0.3199  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.651  | >20%                    |                 5 |              0.1302  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6566 | 5-10%                   |                10 |              0.06566 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6641 | <5%                     |                 2 |              0.33205 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6675 | >20%                    |                 5 |              0.1335  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6736 | 15-20%                  |                 5 |              0.13472 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.6809 | 15-20%                  |                10 |              0.06809 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.6851 | 15-20%                  |                 5 |              0.13702 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6888 | 15-20%                  |                 2 |              0.3444  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6915 | 15-20%                  |                 5 |              0.1383  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6985 | >20%                    |                10 |              0.06985 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6987 | 15-20%                  |                10 |              0.06987 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7059 | >20%                    |                 5 |              0.14118 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7167 | >20%                    |                 5 |              0.14334 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7348 | >20%                    |                10 |              0.07348 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7415 | >20%                    |                 5 |              0.1483  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7423 | >20%                    |                10 |              0.07423 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7428 | >20%                    |                10 |              0.07428 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7502 | >20%                    |                10 |              0.07502 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7598 | >20%                    |                10 |              0.07598 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7606 | >20%                    |                 5 |              0.15212 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7751 | >20%                    |                10 |              0.07751 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.777  | >20%                    |                 5 |              0.1554  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7839 | 5-10%                   |                 5 |              0.15678 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7842 | >20%                    |                10 |              0.07842 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7854 | 5-10%                   |                10 |              0.07854 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8126 | >20%                    |                 5 |              0.16252 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8176 | >20%                    |                 5 |              0.16352 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8239 | >20%                    |                10 |              0.08239 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8494 | 5-10%                   |                10 |              0.08494 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8567 | >20%                    |                 5 |              0.17134 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8619 | >20%                    |                10 |              0.08619 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8689 | 5-10%                   |                 2 |              0.43445 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8725 | 5-10%                   |                10 |              0.08725 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8726 | >20%                    |                10 |              0.08726 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.8901 | >20%                    |                10 |              0.08901 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8956 | 5-10%                   |                10 |              0.08956 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9034 | <5%                     |                10 |              0.09034 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.906  | >20%                    |                 2 |              0.453   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.907  | 5-10%                   |                10 |              0.0907  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9107 | 10-15%                  |                10 |              0.09107 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.918  | >20%                    |                 2 |              0.459   |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.918  | <5%                     |                10 |              0.0918  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9356 | 10-15%                  |                10 |              0.09356 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9439 | <5%                     |                10 |              0.09439 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9549 | >20%                    |                10 |              0.09549 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9694 | 15-20%                  |                10 |              0.09694 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9822 | 10-15%                  |                10 |              0.09822 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9856 | 10-15%                  |                10 |              0.09856 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9928 | 15-20%                  |                10 |              0.09928 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0082 | >20%                    |                 2 |              0.5041  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0139 | >20%                    |                10 |              0.10139 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0406 | >20%                    |                10 |              0.10406 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0545 | <5%                     |                10 |              0.10545 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0587 | >20%                    |                10 |              0.10587 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0661 | >20%                    |                10 |              0.10661 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0816 | >20%                    |                10 |              0.10816 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.107  | >20%                    |                10 |              0.1107  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1104 | <5%                     |                 2 |              0.5552  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1255 | >20%                    |                10 |              0.11255 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1356 | >20%                    |                 5 |              0.22712 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1491 | >20%                    |                 2 |              0.57455 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1579 | >20%                    |                10 |              0.11579 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.1669 | 5-10%                   |                 5 |              0.23338 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1769 | 5-10%                   |                 5 |              0.23538 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.186  | >20%                    |                 5 |              0.2372  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2186 | 15-20%                  |                10 |              0.12186 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2272 | >20%                    |                 5 |              0.24544 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3221 | 15-20%                  |                 2 |              0.66105 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3452 | >20%                    |                10 |              0.13452 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4284 | >20%                    |                 5 |              0.28568 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4784 | 15-20%                  |                 5 |              0.29568 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4855 | >20%                    |                10 |              0.14855 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4971 | 10-15%                  |                10 |              0.14971 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5066 | >20%                    |                10 |              0.15066 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5176 | >20%                    |                10 |              0.15176 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5793 | >20%                    |                10 |              0.15793 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.604  | 10-15%                  |                10 |              0.1604  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6655 | >20%                    |                10 |              0.16655 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2856 | 10-15%                  |                10 |              0.22856 |