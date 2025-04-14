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

Data correct as of 2025-04-14 01:50:39.634735, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1118 | 10-15%                  |                 2 |              0.0559  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1242 | 15-20%                  |                 2 |              0.0621  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.159  | >20%                    |                 2 |              0.0795  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1697 | 10-15%                  |                 5 |              0.03394 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1889 | >20%                    |                 2 |              0.09445 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1912 | 15-20%                  |                 5 |              0.03824 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1996 | <5%                     |                 2 |              0.0998  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2147 | 5-10%                   |                 5 |              0.04294 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2287 | 15-20%                  |                 2 |              0.11435 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2424 | >20%                    |                 2 |              0.1212  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2449 | 15-20%                  |                10 |              0.02449 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2569 | 15-20%                  |                 2 |              0.12845 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2735 | 15-20%                  |                 2 |              0.13675 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2752 | 10-15%                  |                 5 |              0.05504 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2763 | 5-10%                   |                 5 |              0.05526 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2768 | 10-15%                  |                 2 |              0.1384  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2787 | <5%                     |                 2 |              0.13935 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2792 | 10-15%                  |                10 |              0.02792 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2804 | 5-10%                   |                 2 |              0.1402  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2846 | 5-10%                   |                 2 |              0.1423  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.286  | <5%                     |                 2 |              0.143   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2864 | >20%                    |                 2 |              0.1432  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2919 | >20%                    |                 2 |              0.14595 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2983 | 10-15%                  |                 2 |              0.14915 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2988 | <5%                     |                 2 |              0.1494  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2995 | 10-15%                  |                 2 |              0.14975 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3093 | 10-15%                  |                 5 |              0.06186 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.321  | <5%                     |                10 |              0.0321  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3248 | 10-15%                  |                10 |              0.03248 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3345 | 10-15%                  |                 2 |              0.16725 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.341  | >20%                    |                 2 |              0.1705  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.345  | >20%                    |                 5 |              0.069   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3462 | >20%                    |                 5 |              0.06924 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3483 | 15-20%                  |                 2 |              0.17415 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3526 | >20%                    |                 2 |              0.1763  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3563 | >20%                    |                 2 |              0.17815 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3666 | >20%                    |                10 |              0.03666 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3705 | >20%                    |                 2 |              0.18525 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3722 | 15-20%                  |                10 |              0.03722 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3794 | 10-15%                  |                 5 |              0.07588 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.38   | >20%                    |                 2 |              0.19    |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3813 | >20%                    |                 5 |              0.07626 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3833 | <5%                     |                 2 |              0.19165 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3887 | <5%                     |                 2 |              0.19435 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3906 | >20%                    |                 2 |              0.1953  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3926 | <5%                     |                 2 |              0.1963  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3993 | >20%                    |                 2 |              0.19965 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4009 | >20%                    |                10 |              0.04009 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4038 | 15-20%                  |                 2 |              0.2019  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4178 | 10-15%                  |                 5 |              0.08356 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4186 | >20%                    |                 5 |              0.08372 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4188 | 10-15%                  |                10 |              0.04188 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4287 | 15-20%                  |                 2 |              0.21435 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4315 | 10-15%                  |                 5 |              0.0863  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4334 | >20%                    |                 2 |              0.2167  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4338 | >20%                    |                 5 |              0.08676 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4353 | <5%                     |                 2 |              0.21765 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4383 | 10-15%                  |                 2 |              0.21915 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4393 | >20%                    |                 5 |              0.08786 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4402 | >20%                    |                 2 |              0.2201  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4404 | <5%                     |                 2 |              0.2202  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4435 | 5-10%                   |                 5 |              0.0887  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4469 | >20%                    |                 5 |              0.08938 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.451  | <5%                     |                10 |              0.0451  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4555 | >20%                    |                 2 |              0.22775 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.457  | >20%                    |                 2 |              0.2285  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4624 | >20%                    |                 5 |              0.09248 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4667 | <5%                     |                 5 |              0.09334 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4683 | >20%                    |                 5 |              0.09366 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4686 | >20%                    |                 5 |              0.09372 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4692 | >20%                    |                 5 |              0.09384 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4746 | 5-10%                   |                 2 |              0.2373  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4821 | >20%                    |                10 |              0.04821 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.485  | 5-10%                   |                 5 |              0.097   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4912 | >20%                    |                 5 |              0.09824 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4957 | >20%                    |                 5 |              0.09914 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5005 | <5%                     |                 5 |              0.1001  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5032 | >20%                    |                 2 |              0.2516  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.508  | 15-20%                  |                 5 |              0.1016  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5109 | 10-15%                  |                 5 |              0.10218 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5198 | 15-20%                  |                 2 |              0.2599  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5212 | >20%                    |                 2 |              0.2606  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5238 | 5-10%                   |                 5 |              0.10476 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5292 | 15-20%                  |                 2 |              0.2646  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5296 | 5-10%                   |                10 |              0.05296 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5349 | >20%                    |                 2 |              0.26745 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5352 | 5-10%                   |                 5 |              0.10704 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5568 | >20%                    |                 5 |              0.11136 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5697 | 5-10%                   |                 5 |              0.11394 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5779 | >20%                    |                 5 |              0.11558 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5793 | 5-10%                   |                 2 |              0.28965 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5794 | 15-20%                  |                 5 |              0.11588 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.581  | >20%                    |                 2 |              0.2905  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5846 | >20%                    |                 2 |              0.2923  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5885 | >20%                    |                 5 |              0.1177  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5928 | >20%                    |                10 |              0.05928 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5969 | >20%                    |                 2 |              0.29845 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5988 | >20%                    |                 2 |              0.2994  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5998 | <5%                     |                 5 |              0.11996 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6027 | 15-20%                  |                 5 |              0.12054 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6247 | 10-15%                  |                 5 |              0.12494 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6262 | 10-15%                  |                 5 |              0.12524 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6318 | >20%                    |                 5 |              0.12636 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6475 | 10-15%                  |                10 |              0.06475 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6491 | >20%                    |                 5 |              0.12982 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6524 | <5%                     |                 5 |              0.13048 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.655  | >20%                    |                10 |              0.0655  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6625 | 10-15%                  |                10 |              0.06625 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6644 | <5%                     |                 5 |              0.13288 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6681 | >20%                    |                 5 |              0.13362 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6774 | >20%                    |                10 |              0.06774 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.678  | >20%                    |                10 |              0.0678  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6819 | 10-15%                  |                 2 |              0.34095 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6822 | >20%                    |                 2 |              0.3411  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6827 | >20%                    |                 5 |              0.13654 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.688  | >20%                    |                 5 |              0.1376  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6968 | 5-10%                   |                 5 |              0.13936 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7062 | >20%                    |                 5 |              0.14124 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7106 | >20%                    |                10 |              0.07106 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7109 | <5%                     |                10 |              0.07109 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7119 | >20%                    |                10 |              0.07119 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7159 | >20%                    |                 2 |              0.35795 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.7254 | 10-15%                  |                 5 |              0.14508 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7402 | 5-10%                   |                10 |              0.07402 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7497 | >20%                    |                 2 |              0.37485 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7544 | <5%                     |                10 |              0.07544 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7549 | 15-20%                  |                 5 |              0.15098 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7656 | >20%                    |                 5 |              0.15312 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.766  | <5%                     |                10 |              0.0766  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7667 | <5%                     |                 5 |              0.15334 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7675 | <5%                     |                10 |              0.07675 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7803 | >20%                    |                10 |              0.07803 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7847 | >20%                    |                10 |              0.07847 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7849 | 10-15%                  |                10 |              0.07849 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7881 | 5-10%                   |                10 |              0.07881 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7911 | <5%                     |                10 |              0.07911 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8021 | <5%                     |                10 |              0.08021 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8181 | >20%                    |                 2 |              0.40905 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8188 | 10-15%                  |                10 |              0.08188 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8217 | >20%                    |                 2 |              0.41085 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.836  | 15-20%                  |                 5 |              0.1672  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8386 | 10-15%                  |                10 |              0.08386 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8398 | 15-20%                  |                10 |              0.08398 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8493 | <5%                     |                10 |              0.08493 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.852  | >20%                    |                 5 |              0.1704  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.865  | 15-20%                  |                10 |              0.0865  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8691 | >20%                    |                10 |              0.08691 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8732 | 15-20%                  |                10 |              0.08732 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8749 | >20%                    |                10 |              0.08749 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8805 | >20%                    |                10 |              0.08805 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8838 | >20%                    |                10 |              0.08838 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8919 | <5%                     |                10 |              0.08919 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8936 | >20%                    |                10 |              0.08936 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8951 | 15-20%                  |                 5 |              0.17902 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8978 | <5%                     |                10 |              0.08978 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9443 | 10-15%                  |                10 |              0.09443 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.948  | <5%                     |                 2 |              0.474   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9761 | 5-10%                   |                10 |              0.09761 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9981 | >20%                    |                 5 |              0.19962 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0256 | >20%                    |                10 |              0.10256 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.044  | >20%                    |                 5 |              0.2088  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0965 | <5%                     |                10 |              0.10965 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1011 | <5%                     |                10 |              0.11011 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1212 | 10-15%                  |                 2 |              0.5606  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1718 | 15-20%                  |                10 |              0.11718 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1875 | 15-20%                  |                10 |              0.11875 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2322 | >20%                    |                10 |              0.12322 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2373 | <5%                     |                 5 |              0.24746 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2597 | >20%                    |                 5 |              0.25194 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2718 | >20%                    |                 5 |              0.25436 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2955 | >20%                    |                10 |              0.12955 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3152 | 5-10%                   |                 2 |              0.6576  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3334 | 15-20%                  |                10 |              0.13334 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.48   | >20%                    |                 2 |              0.74    |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6236 | >20%                    |                10 |              0.16236 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.662  | >20%                    |                10 |              0.1662  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8359 | <5%                     |                10 |              0.18359 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9318 | 15-20%                  |                10 |              0.19318 |