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

Data correct as of 2025-09-13 01:36:49.892991, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1124 | 5-10%                   |                 2 |              0.0562  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1587 | >20%                    |                 2 |              0.07935 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.173  | >20%                    |                 2 |              0.0865  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2049 | 10-15%                  |                 2 |              0.10245 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2297 | >20%                    |                 2 |              0.11485 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2368 | >20%                    |                 2 |              0.1184  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2422 | 10-15%                  |                 5 |              0.04844 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2518 | >20%                    |                 2 |              0.1259  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.266  | >20%                    |                 2 |              0.133   |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2802 | >20%                    |                 2 |              0.1401  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2981 | >20%                    |                 2 |              0.14905 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2999 | 15-20%                  |                 2 |              0.14995 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3052 | <5%                     |                10 |              0.03052 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3137 | 10-15%                  |                 2 |              0.15685 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3173 | >20%                    |                 2 |              0.15865 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3203 | >20%                    |                 2 |              0.16015 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3203 | 5-10%                   |                 2 |              0.16015 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3212 | 5-10%                   |                 2 |              0.1606  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3291 | >20%                    |                 5 |              0.06582 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3443 | 15-20%                  |                 5 |              0.06886 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3475 | >20%                    |                 2 |              0.17375 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3628 | >20%                    |                 2 |              0.1814  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3666 | >20%                    |                 2 |              0.1833  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3691 | 10-15%                  |                 2 |              0.18455 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3717 | >20%                    |                 5 |              0.07434 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3726 | 15-20%                  |                 2 |              0.1863  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3726 | 10-15%                  |                 5 |              0.07452 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3798 | >20%                    |                 5 |              0.07596 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3847 | >20%                    |                 2 |              0.19235 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3938 | >20%                    |                 2 |              0.1969  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3981 | >20%                    |                 2 |              0.19905 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4021 | >20%                    |                10 |              0.04021 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4054 | >20%                    |                 5 |              0.08108 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4065 | 15-20%                  |                10 |              0.04065 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4096 | >20%                    |                 2 |              0.2048  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4182 | >20%                    |                 5 |              0.08364 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4196 | >20%                    |                 5 |              0.08392 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4203 | >20%                    |                10 |              0.04203 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4224 | >20%                    |                 5 |              0.08448 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4231 | >20%                    |                 5 |              0.08462 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.428  | 15-20%                  |                 2 |              0.214   |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4344 | >20%                    |                 5 |              0.08688 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4375 | >20%                    |                 2 |              0.21875 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4516 | >20%                    |                 2 |              0.2258  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4557 | 10-15%                  |                 2 |              0.22785 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4564 | >20%                    |                 5 |              0.09128 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4577 | >20%                    |                 5 |              0.09154 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4587 | 10-15%                  |                 2 |              0.22935 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4613 | 15-20%                  |                 2 |              0.23065 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4621 | >20%                    |                 2 |              0.23105 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4674 | >20%                    |                 5 |              0.09348 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4686 | 5-10%                   |                 2 |              0.2343  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4798 | <5%                     |                 2 |              0.2399  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4859 | >20%                    |                 2 |              0.24295 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4865 | >20%                    |                 2 |              0.24325 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.498  | >20%                    |                 5 |              0.0996  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4983 | >20%                    |                10 |              0.04983 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.501  | >20%                    |                 5 |              0.1002  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5024 | >20%                    |                 2 |              0.2512  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5073 | 10-15%                  |                 2 |              0.25365 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5084 | >20%                    |                 5 |              0.10168 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5105 | 5-10%                   |                 5 |              0.1021  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5124 | 15-20%                  |                 2 |              0.2562  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5146 | >20%                    |                 2 |              0.2573  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5159 | >20%                    |                 5 |              0.10318 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5204 | >20%                    |                 2 |              0.2602  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5257 | >20%                    |                 2 |              0.26285 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5304 | 5-10%                   |                 2 |              0.2652  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.544  | >20%                    |                 5 |              0.1088  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5573 | >20%                    |                 5 |              0.11146 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5631 | >20%                    |                 2 |              0.28155 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5735 | >20%                    |                 5 |              0.1147  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5793 | >20%                    |                 5 |              0.11586 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5862 | 10-15%                  |                 5 |              0.11724 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5867 | 15-20%                  |                10 |              0.05867 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5867 | >20%                    |                 2 |              0.29335 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5908 | >20%                    |                 2 |              0.2954  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5952 | 15-20%                  |                 5 |              0.11904 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5981 | >20%                    |                 5 |              0.11962 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5989 | >20%                    |                 5 |              0.11978 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6025 | >20%                    |                 5 |              0.1205  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6126 | 10-15%                  |                 5 |              0.12252 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6202 | 5-10%                   |                10 |              0.06202 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6387 | >20%                    |                 5 |              0.12774 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6421 | 15-20%                  |                 2 |              0.32105 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6476 | >20%                    |                 5 |              0.12952 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6533 | >20%                    |                 5 |              0.13066 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6585 | 15-20%                  |                 5 |              0.1317  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6629 | <5%                     |                 2 |              0.33145 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6631 | 15-20%                  |                10 |              0.06631 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6679 | >20%                    |                 2 |              0.33395 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6689 | 15-20%                  |                 5 |              0.13378 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.669  | 15-20%                  |                 5 |              0.1338  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6717 | >20%                    |                 5 |              0.13434 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6744 | 10-15%                  |                 2 |              0.3372  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6764 | >20%                    |                 2 |              0.3382  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6865 | >20%                    |                 5 |              0.1373  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6901 | >20%                    |                 5 |              0.13802 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.706  | >20%                    |                 5 |              0.1412  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7069 | >20%                    |                 5 |              0.14138 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7094 | >20%                    |                 5 |              0.14188 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.714  | >20%                    |                 5 |              0.1428  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7277 | >20%                    |                10 |              0.07277 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7353 | >20%                    |                 5 |              0.14706 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7429 | >20%                    |                10 |              0.07429 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7512 | >20%                    |                10 |              0.07512 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7595 | >20%                    |                 5 |              0.1519  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7608 | >20%                    |                10 |              0.07608 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7665 | >20%                    |                10 |              0.07665 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7893 | >20%                    |                 5 |              0.15786 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7909 | >20%                    |                10 |              0.07909 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8075 | >20%                    |                 5 |              0.1615  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8092 | 15-20%                  |                10 |              0.08092 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.835  | 10-15%                  |                 2 |              0.4175  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8402 | 15-20%                  |                10 |              0.08402 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8509 | 10-15%                  |                10 |              0.08509 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8545 | 10-15%                  |                10 |              0.08545 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.862  | <5%                     |                10 |              0.0862  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8797 | >20%                    |                10 |              0.08797 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8956 | >20%                    |                 5 |              0.17912 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8979 | 15-20%                  |                10 |              0.08979 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9095 | >20%                    |                 5 |              0.1819  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9168 | >20%                    |                10 |              0.09168 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9168 | 15-20%                  |                10 |              0.09168 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9217 | <5%                     |                10 |              0.09217 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9399 | >20%                    |                 5 |              0.18798 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.94   | 5-10%                   |                10 |              0.094   |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9501 | 10-15%                  |                10 |              0.09501 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9506 | <5%                     |                10 |              0.09506 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.953  | 10-15%                  |                10 |              0.0953  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9734 | >20%                    |                 2 |              0.4867  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9755 | 15-20%                  |                10 |              0.09755 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9818 | >20%                    |                10 |              0.09818 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9856 | 15-20%                  |                10 |              0.09856 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9967 | >20%                    |                10 |              0.09967 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.997  | >20%                    |                10 |              0.0997  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0393 | >20%                    |                10 |              0.10393 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0466 | 15-20%                  |                10 |              0.10466 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0538 | >20%                    |                 2 |              0.5269  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0615 | 5-10%                   |                10 |              0.10615 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0628 | 10-15%                  |                 5 |              0.21256 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0668 | >20%                    |                10 |              0.10668 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0698 | 5-10%                   |                10 |              0.10698 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.095  | 5-10%                   |                10 |              0.1095  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0959 | <5%                     |                10 |              0.10959 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1093 | 15-20%                  |                10 |              0.11093 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.1237 | 10-15%                  |                 2 |              0.56185 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1302 | >20%                    |                 2 |              0.5651  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1401 | >20%                    |                10 |              0.11401 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.146  | >20%                    |                 5 |              0.2292  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1524 | >20%                    |                10 |              0.11524 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1532 | >20%                    |                 5 |              0.23064 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1714 | 15-20%                  |                10 |              0.11714 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1874 | >20%                    |                10 |              0.11874 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2485 | 5-10%                   |                 2 |              0.62425 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2762 | >20%                    |                 5 |              0.25524 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.283  | >20%                    |                10 |              0.1283  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.291  | >20%                    |                10 |              0.1291  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.34   | 10-15%                  |                10 |              0.134   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3865 | 10-15%                  |                 5 |              0.2773  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.418  | 10-15%                  |                 5 |              0.2836  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4937 | >20%                    |                10 |              0.14937 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5697 | >20%                    |                10 |              0.15697 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.5975 | >20%                    |                10 |              0.15975 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7295 | >20%                    |                10 |              0.17295 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8146 | >20%                    |                10 |              0.18146 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8669 | 15-20%                  |                10 |              0.18669 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1916 | 10-15%                  |                10 |              0.21916 |