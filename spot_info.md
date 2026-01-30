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

Data correct as of 2026-01-30 02:29:08.123551, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1415 | >20%                    |                 2 |              0.07075 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1755 | 5-10%                   |                 2 |              0.08775 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1838 | >20%                    |                 2 |              0.0919  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2028 | >20%                    |                 2 |              0.1014  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2169 | >20%                    |                 2 |              0.10845 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2248 | >20%                    |                 5 |              0.04496 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2331 | 10-15%                  |                 2 |              0.11655 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2363 | >20%                    |                 2 |              0.11815 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2405 | <5%                     |                 5 |              0.0481  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2479 | >20%                    |                 2 |              0.12395 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2537 | >20%                    |                 2 |              0.12685 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2623 | 10-15%                  |                 2 |              0.13115 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2736 | >20%                    |                 2 |              0.1368  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2755 | 15-20%                  |                 2 |              0.13775 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.276  | 5-10%                   |                10 |              0.0276  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2895 | 10-15%                  |                 2 |              0.14475 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2907 | >20%                    |                 2 |              0.14535 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2908 | >20%                    |                 5 |              0.05816 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2929 | >20%                    |                 2 |              0.14645 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2957 | >20%                    |                 5 |              0.05914 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2994 | >20%                    |                 2 |              0.1497  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3111 | >20%                    |                 2 |              0.15555 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3361 | <5%                     |                10 |              0.03361 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3372 | 15-20%                  |                 2 |              0.1686  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3451 | <5%                     |                 2 |              0.17255 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3457 | >20%                    |                 2 |              0.17285 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3511 | 15-20%                  |                 2 |              0.17555 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3575 | 5-10%                   |                10 |              0.03575 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3586 | >20%                    |                 5 |              0.07172 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3647 | >20%                    |                 5 |              0.07294 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3713 | >20%                    |                 5 |              0.07426 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3741 | 15-20%                  |                 2 |              0.18705 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3799 | 5-10%                   |                 2 |              0.18995 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3806 | 15-20%                  |                 2 |              0.1903  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3813 | >20%                    |                 2 |              0.19065 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3815 | >20%                    |                 5 |              0.0763  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3817 | >20%                    |                 2 |              0.19085 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3825 | <5%                     |                 5 |              0.0765  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3887 | >20%                    |                10 |              0.03887 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3935 | >20%                    |                10 |              0.03935 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.396  | 5-10%                   |                 2 |              0.198   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3974 | >20%                    |                 5 |              0.07948 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4011 | >20%                    |                 2 |              0.20055 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4036 | 5-10%                   |                 2 |              0.2018  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4066 | 5-10%                   |                 5 |              0.08132 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4083 | >20%                    |                 2 |              0.20415 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4085 | >20%                    |                 5 |              0.0817  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.41   | >20%                    |                 5 |              0.082   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4129 | 10-15%                  |                 5 |              0.08258 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4158 | >20%                    |                 5 |              0.08316 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4197 | <5%                     |                 2 |              0.20985 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4249 | >20%                    |                 2 |              0.21245 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4253 | 5-10%                   |                 2 |              0.21265 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4282 | >20%                    |                 5 |              0.08564 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4282 | 15-20%                  |                 2 |              0.2141  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4303 | >20%                    |                 2 |              0.21515 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4332 | 15-20%                  |                 5 |              0.08664 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4394 | >20%                    |                 2 |              0.2197  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4395 | >20%                    |                10 |              0.04395 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4438 | >20%                    |                 5 |              0.08876 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4442 | <5%                     |                 2 |              0.2221  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.445  | 5-10%                   |                 5 |              0.089   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4486 | >20%                    |                 5 |              0.08972 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4503 | 5-10%                   |                 2 |              0.22515 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4523 | 15-20%                  |                10 |              0.04523 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4595 | 5-10%                   |                 5 |              0.0919  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4639 | 5-10%                   |                 2 |              0.23195 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4659 | >20%                    |                 2 |              0.23295 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4673 | 15-20%                  |                 5 |              0.09346 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4728 | >20%                    |                10 |              0.04728 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4804 | 15-20%                  |                 5 |              0.09608 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4805 | <5%                     |                10 |              0.04805 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4808 | >20%                    |                 2 |              0.2404  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4838 | 15-20%                  |                10 |              0.04838 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4873 | >20%                    |                 2 |              0.24365 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4911 | >20%                    |                 2 |              0.24555 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4945 | <5%                     |                 2 |              0.24725 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5015 | >20%                    |                 5 |              0.1003  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5049 | >20%                    |                 2 |              0.25245 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5143 | >20%                    |                10 |              0.05143 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5147 | <5%                     |                 5 |              0.10294 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5177 | >20%                    |                 5 |              0.10354 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5235 | >20%                    |                 5 |              0.1047  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5305 | >20%                    |                 5 |              0.1061  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5346 | <5%                     |                 5 |              0.10692 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5392 | >20%                    |                 2 |              0.2696  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.54   | >20%                    |                 5 |              0.108   |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5469 | >20%                    |                 2 |              0.27345 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5518 | >20%                    |                 5 |              0.11036 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5524 | >20%                    |                10 |              0.05524 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5608 | <5%                     |                 5 |              0.11216 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5661 | 5-10%                   |                 5 |              0.11322 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5684 | 10-15%                  |                10 |              0.05684 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5697 | <5%                     |                10 |              0.05697 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5758 | >20%                    |                 5 |              0.11516 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.577  | >20%                    |                 5 |              0.1154  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5779 | <5%                     |                10 |              0.05779 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5782 | >20%                    |                 2 |              0.2891  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5884 | <5%                     |                 2 |              0.2942  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6063 | 15-20%                  |                 5 |              0.12126 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6066 | 5-10%                   |                 2 |              0.3033  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6084 | 15-20%                  |                10 |              0.06084 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.612  | <5%                     |                 5 |              0.1224  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6163 | 5-10%                   |                 5 |              0.12326 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.627  | 10-15%                  |                 5 |              0.1254  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6296 | >20%                    |                 5 |              0.12592 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6355 | >20%                    |                 5 |              0.1271  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6368 | >20%                    |                10 |              0.06368 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6614 | >20%                    |                 5 |              0.13228 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.663  | <5%                     |                 5 |              0.1326  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6788 | 5-10%                   |                 5 |              0.13576 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6907 | 15-20%                  |                10 |              0.06907 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6994 | <5%                     |                 5 |              0.13988 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.701  | >20%                    |                10 |              0.0701  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7025 | >20%                    |                 5 |              0.1405  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7051 | >20%                    |                10 |              0.07051 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7063 | >20%                    |                10 |              0.07063 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7098 | >20%                    |                 5 |              0.14196 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.713  | >20%                    |                10 |              0.0713  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7192 | >20%                    |                10 |              0.07192 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7236 | >20%                    |                 2 |              0.3618  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7257 | 5-10%                   |                 2 |              0.36285 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7313 | >20%                    |                10 |              0.07313 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7338 | 15-20%                  |                 2 |              0.3669  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7541 | <5%                     |                10 |              0.07541 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7596 | <5%                     |                10 |              0.07596 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7644 | >20%                    |                10 |              0.07644 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7729 | 10-15%                  |                10 |              0.07729 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7953 | >20%                    |                 5 |              0.15906 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7953 | 10-15%                  |                 2 |              0.39765 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.798  | >20%                    |                 5 |              0.1596  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7988 | 5-10%                   |                10 |              0.07988 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8038 | >20%                    |                 5 |              0.16076 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8066 | >20%                    |                 2 |              0.4033  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8082 | <5%                     |                10 |              0.08082 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8094 | 5-10%                   |                10 |              0.08094 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8143 | >20%                    |                 5 |              0.16286 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.842  | >20%                    |                 5 |              0.1684  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8428 | >20%                    |                 2 |              0.4214  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8491 | >20%                    |                 2 |              0.42455 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8558 | <5%                     |                10 |              0.08558 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8635 | >20%                    |                10 |              0.08635 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8641 | >20%                    |                 2 |              0.43205 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8716 | 15-20%                  |                10 |              0.08716 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8948 | >20%                    |                 2 |              0.4474  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.895  | >20%                    |                 5 |              0.179   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9114 | 5-10%                   |                 5 |              0.18228 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.927  | >20%                    |                10 |              0.0927  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9329 | <5%                     |                10 |              0.09329 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9335 | >20%                    |                10 |              0.09335 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9376 | >20%                    |                10 |              0.09376 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9381 | >20%                    |                10 |              0.09381 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9397 | >20%                    |                10 |              0.09397 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9479 | >20%                    |                 5 |              0.18958 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9565 | >20%                    |                10 |              0.09565 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9797 | <5%                     |                10 |              0.09797 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9892 | >20%                    |                10 |              0.09892 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9906 | >20%                    |                10 |              0.09906 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0353 | >20%                    |                 5 |              0.20706 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0605 | 5-10%                   |                10 |              0.10605 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0641 | 15-20%                  |                10 |              0.10641 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1056 | >20%                    |                10 |              0.11056 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1129 | >20%                    |                10 |              0.11129 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1592 | >20%                    |                10 |              0.11592 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1874 | >20%                    |                10 |              0.11874 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2007 | 15-20%                  |                10 |              0.12007 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2075 | >20%                    |                 5 |              0.2415  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2592 | >20%                    |                10 |              0.12592 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2897 | 10-15%                  |                10 |              0.12897 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2979 | <5%                     |                10 |              0.12979 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.372  | 10-15%                  |                 5 |              0.2744  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3834 | >20%                    |                 2 |              0.6917  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4246 | 10-15%                  |                 5 |              0.28492 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4464 | >20%                    |                10 |              0.14464 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4587 | >20%                    |                 2 |              0.72935 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6069 | 15-20%                  |                10 |              0.16069 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0077 | 10-15%                  |                10 |              0.20077 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4506 | <5%                     |                 5 |              0.49012 |