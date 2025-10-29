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

Data correct as of 2025-10-29 01:54:43.354659, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1008 | 5-10%                   |                 2 |              0.0504  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1478 | >20%                    |                 5 |              0.02956 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1913 | >20%                    |                 2 |              0.09565 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2073 | 10-15%                  |                 2 |              0.10365 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2329 | >20%                    |                 5 |              0.04658 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2451 | >20%                    |                 2 |              0.12255 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2521 | 10-15%                  |                 2 |              0.12605 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2551 | >20%                    |                 2 |              0.12755 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2627 | >20%                    |                 2 |              0.13135 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2631 | 5-10%                   |                 2 |              0.13155 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2654 | >20%                    |                 2 |              0.1327  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2659 | >20%                    |                 2 |              0.13295 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2693 | 10-15%                  |                 2 |              0.13465 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2817 | 5-10%                   |                 2 |              0.14085 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2822 | >20%                    |                 2 |              0.1411  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2891 | 15-20%                  |                 2 |              0.14455 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2944 | >20%                    |                 2 |              0.1472  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3086 | >20%                    |                 5 |              0.06172 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3272 | >20%                    |                 2 |              0.1636  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3276 | 15-20%                  |                 2 |              0.1638  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3404 | >20%                    |                 2 |              0.1702  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3413 | >20%                    |                 2 |              0.17065 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3451 | >20%                    |                 2 |              0.17255 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3576 | >20%                    |                 5 |              0.07152 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3704 | <5%                     |                10 |              0.03704 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3738 | 10-15%                  |                 2 |              0.1869  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3747 | >20%                    |                 5 |              0.07494 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.378  | >20%                    |                10 |              0.0378  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3806 | 15-20%                  |                 2 |              0.1903  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3836 | >20%                    |                 2 |              0.1918  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3893 | >20%                    |                 2 |              0.19465 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3967 | >20%                    |                 2 |              0.19835 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.397  | >20%                    |                 2 |              0.1985  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4021 | >20%                    |                 2 |              0.20105 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4147 | 15-20%                  |                 2 |              0.20735 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4183 | >20%                    |                 2 |              0.20915 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4268 | 5-10%                   |                 5 |              0.08536 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4285 | >20%                    |                 2 |              0.21425 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.429  | <5%                     |                 2 |              0.2145  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4295 | 5-10%                   |                 2 |              0.21475 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4336 | >20%                    |                 5 |              0.08672 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4362 | >20%                    |                 5 |              0.08724 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4383 | >20%                    |                 5 |              0.08766 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4431 | >20%                    |                 2 |              0.22155 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4438 | 5-10%                   |                 2 |              0.2219  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4438 | >20%                    |                 2 |              0.2219  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4492 | >20%                    |                 5 |              0.08984 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.456  | >20%                    |                 2 |              0.228   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4584 | >20%                    |                 5 |              0.09168 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4622 | >20%                    |                 5 |              0.09244 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4634 | 5-10%                   |                10 |              0.04634 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4664 | >20%                    |                 5 |              0.09328 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.467  | >20%                    |                 5 |              0.0934  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4714 | >20%                    |                 2 |              0.2357  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4803 | 10-15%                  |                 2 |              0.24015 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4813 | >20%                    |                10 |              0.04813 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4858 | >20%                    |                 2 |              0.2429  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4862 | >20%                    |                 5 |              0.09724 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4862 | >20%                    |                 5 |              0.09724 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4878 | >20%                    |                 2 |              0.2439  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4885 | 10-15%                  |                 2 |              0.24425 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4891 | >20%                    |                 2 |              0.24455 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4912 | >20%                    |                 5 |              0.09824 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.494  | 15-20%                  |                 5 |              0.0988  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5123 | >20%                    |                 2 |              0.25615 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5163 | >20%                    |                 5 |              0.10326 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5237 | 15-20%                  |                10 |              0.05237 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5349 | >20%                    |                 5 |              0.10698 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5441 | 5-10%                   |                 2 |              0.27205 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5446 | 15-20%                  |                 5 |              0.10892 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5463 | >20%                    |                 5 |              0.10926 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5468 | >20%                    |                 2 |              0.2734  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5497 | >20%                    |                 2 |              0.27485 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5734 | 15-20%                  |                 2 |              0.2867  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5763 | >20%                    |                 5 |              0.11526 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5783 | >20%                    |                 5 |              0.11566 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5785 | >20%                    |                 5 |              0.1157  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5891 | >20%                    |                 5 |              0.11782 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5948 | >20%                    |                 5 |              0.11896 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5957 | 10-15%                  |                 5 |              0.11914 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5966 | >20%                    |                 5 |              0.11932 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6061 | >20%                    |                 5 |              0.12122 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6231 | >20%                    |                 5 |              0.12462 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6325 | 10-15%                  |                 5 |              0.1265  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6395 | >20%                    |                 5 |              0.1279  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6418 | >20%                    |                 5 |              0.12836 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6435 | 15-20%                  |                 2 |              0.32175 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6515 | 10-15%                  |                 5 |              0.1303  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.653  | >20%                    |                 5 |              0.1306  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6548 | 15-20%                  |                 5 |              0.13096 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6556 | >20%                    |                 5 |              0.13112 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6601 | >20%                    |                10 |              0.06601 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6698 | >20%                    |                 2 |              0.3349  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6759 | >20%                    |                 2 |              0.33795 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6803 | >20%                    |                 5 |              0.13606 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6872 | >20%                    |                 5 |              0.13744 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6968 | 10-15%                  |                 2 |              0.3484  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6969 | 15-20%                  |                10 |              0.06969 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6975 | >20%                    |                10 |              0.06975 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7031 | 15-20%                  |                10 |              0.07031 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7033 | >20%                    |                 5 |              0.14066 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7088 | >20%                    |                 5 |              0.14176 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7128 | >20%                    |                10 |              0.07128 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7132 | >20%                    |                 5 |              0.14264 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7139 | <5%                     |                10 |              0.07139 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7188 | 15-20%                  |                10 |              0.07188 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7265 | >20%                    |                 5 |              0.1453  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7318 | 15-20%                  |                 5 |              0.14636 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7354 | >20%                    |                10 |              0.07354 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7359 | >20%                    |                 2 |              0.36795 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.741  | 15-20%                  |                10 |              0.0741  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7501 | >20%                    |                10 |              0.07501 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7529 | >20%                    |                10 |              0.07529 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7551 | >20%                    |                 5 |              0.15102 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7603 | >20%                    |                10 |              0.07603 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7717 | >20%                    |                10 |              0.07717 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7738 | 15-20%                  |                10 |              0.07738 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7829 | >20%                    |                 5 |              0.15658 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8136 | 15-20%                  |                 5 |              0.16272 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8232 | 10-15%                  |                 5 |              0.16464 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.828  | 15-20%                  |                10 |              0.0828  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8285 | >20%                    |                10 |              0.08285 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8287 | <5%                     |                10 |              0.08287 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8364 | >20%                    |                 5 |              0.16728 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8412 | 15-20%                  |                10 |              0.08412 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8418 | <5%                     |                10 |              0.08418 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8468 | 10-15%                  |                 2 |              0.4234  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8562 | >20%                    |                10 |              0.08562 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8697 | 5-10%                   |                10 |              0.08697 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8742 | >20%                    |                10 |              0.08742 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8774 | >20%                    |                 5 |              0.17548 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8783 | >20%                    |                10 |              0.08783 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9071 | >20%                    |                 5 |              0.18142 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9146 | >20%                    |                 2 |              0.4573  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9193 | 15-20%                  |                10 |              0.09193 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9261 | >20%                    |                10 |              0.09261 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9299 | >20%                    |                10 |              0.09299 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9469 | 10-15%                  |                10 |              0.09469 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9531 | >20%                    |                 2 |              0.47655 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.954  | 10-15%                  |                10 |              0.0954  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9554 | 15-20%                  |                10 |              0.09554 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9573 | 10-15%                  |                10 |              0.09573 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9882 | >20%                    |                 2 |              0.4941  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0277 | 5-10%                   |                10 |              0.10277 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0389 | >20%                    |                10 |              0.10389 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.043  | >20%                    |                10 |              0.1043  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0533 | >20%                    |                10 |              0.10533 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0669 | >20%                    |                10 |              0.10669 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0675 | 10-15%                  |                 2 |              0.53375 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0928 | >20%                    |                 5 |              0.21856 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0972 | >20%                    |                 5 |              0.21944 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1019 | 15-20%                  |                10 |              0.11019 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1143 | 15-20%                  |                10 |              0.11143 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1219 | >20%                    |                10 |              0.11219 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1223 | 5-10%                   |                10 |              0.11223 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1592 | 5-10%                   |                10 |              0.11592 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1688 | 10-15%                  |                10 |              0.11688 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1714 | <5%                     |                10 |              0.11714 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1738 | >20%                    |                 5 |              0.23476 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.221  | >20%                    |                 5 |              0.2442  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2361 | 10-15%                  |                10 |              0.12361 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3169 | 5-10%                   |                 2 |              0.65845 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3656 | >20%                    |                10 |              0.13656 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3707 | 10-15%                  |                 5 |              0.27414 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4526 | >20%                    |                10 |              0.14526 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.5438 | >20%                    |                10 |              0.15438 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5916 | >20%                    |                10 |              0.15916 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6572 | 10-15%                  |                 5 |              0.33144 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6692 | >20%                    |                10 |              0.16692 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7405 | >20%                    |                10 |              0.17405 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0873 | 10-15%                  |                10 |              0.20873 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4212 | 15-20%                  |                10 |              0.24212 |