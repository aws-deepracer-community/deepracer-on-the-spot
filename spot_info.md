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

Data correct as of 2025-08-14 01:58:26.301143, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0924 | 5-10%                   |                 2 |              0.0462  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1017 | >20%                    |                 2 |              0.05085 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1653 | <5%                     |                 5 |              0.03306 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2043 | >20%                    |                 2 |              0.10215 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2077 | 15-20%                  |                 2 |              0.10385 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 15-20%                  |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2364 | 5-10%                   |                 2 |              0.1182  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2414 | >20%                    |                 2 |              0.1207  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2477 | 15-20%                  |                 2 |              0.12385 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2552 | >20%                    |                 2 |              0.1276  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2584 | >20%                    |                 2 |              0.1292  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3031 | >20%                    |                 2 |              0.15155 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3058 | >20%                    |                 2 |              0.1529  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | <5%                     |                 2 |              0.1542  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3171 | 5-10%                   |                 2 |              0.15855 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3177 | 15-20%                  |                 2 |              0.15885 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3258 | 5-10%                   |                 2 |              0.1629  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.339  | >20%                    |                 2 |              0.1695  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3402 | 10-15%                  |                 2 |              0.1701  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3512 | >20%                    |                 5 |              0.07024 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3565 | >20%                    |                 2 |              0.17825 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3609 | 15-20%                  |                 2 |              0.18045 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.363  | >20%                    |                 2 |              0.1815  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3654 | <5%                     |                 2 |              0.1827  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3656 | >20%                    |                 2 |              0.1828  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3659 | 15-20%                  |                 2 |              0.18295 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3769 | <5%                     |                10 |              0.03769 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3855 | >20%                    |                 2 |              0.19275 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3886 | >20%                    |                 5 |              0.07772 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4118 | >20%                    |                 5 |              0.08236 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4142 | >20%                    |                 5 |              0.08284 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4189 | 15-20%                  |                 5 |              0.08378 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4214 | <5%                     |                 2 |              0.2107  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4236 | >20%                    |                 5 |              0.08472 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4247 | >20%                    |                 5 |              0.08494 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4313 | >20%                    |                 5 |              0.08626 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4347 | >20%                    |                 5 |              0.08694 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4358 | 5-10%                   |                 5 |              0.08716 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4457 | >20%                    |                 2 |              0.22285 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4551 | >20%                    |                 2 |              0.22755 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4558 | <5%                     |                 2 |              0.2279  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4625 | 5-10%                   |                 2 |              0.23125 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4634 | >20%                    |                 2 |              0.2317  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4673 | >20%                    |                 2 |              0.23365 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4678 | >20%                    |                 5 |              0.09356 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4689 | >20%                    |                 2 |              0.23445 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.471  | 5-10%                   |                 2 |              0.2355  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4729 | >20%                    |                 2 |              0.23645 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4731 | >20%                    |                 5 |              0.09462 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4919 | >20%                    |                 2 |              0.24595 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4944 | 10-15%                  |                 2 |              0.2472  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4963 | >20%                    |                 5 |              0.09926 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4976 | 5-10%                   |                 5 |              0.09952 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5064 | >20%                    |                 2 |              0.2532  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5098 | 10-15%                  |                 5 |              0.10196 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5137 | >20%                    |                 2 |              0.25685 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5257 | <5%                     |                 2 |              0.26285 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5364 | >20%                    |                 5 |              0.10728 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5379 | >20%                    |                 5 |              0.10758 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5399 | >20%                    |                 2 |              0.26995 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5475 | 10-15%                  |                 5 |              0.1095  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5506 | >20%                    |                 2 |              0.2753  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5556 | >20%                    |                 5 |              0.11112 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5649 | >20%                    |                 2 |              0.28245 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5682 | >20%                    |                 2 |              0.2841  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5739 | 15-20%                  |                10 |              0.05739 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5744 | >20%                    |                 2 |              0.2872  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5761 | >20%                    |                 5 |              0.11522 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5784 | 15-20%                  |                 2 |              0.2892  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5795 | >20%                    |                 5 |              0.1159  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5872 | 5-10%                   |                 2 |              0.2936  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5917 | 5-10%                   |                 5 |              0.11834 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6021 | >20%                    |                 2 |              0.30105 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6027 | >20%                    |                 5 |              0.12054 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6075 | >20%                    |                 5 |              0.1215  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.608  | >20%                    |                 5 |              0.1216  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6171 | 10-15%                  |                 5 |              0.12342 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6189 | 15-20%                  |                10 |              0.06189 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6269 | >20%                    |                 5 |              0.12538 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.636  | >20%                    |                 2 |              0.318   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6391 | 5-10%                   |                 5 |              0.12782 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6424 | 10-15%                  |                 5 |              0.12848 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6487 | >20%                    |                 5 |              0.12974 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6488 | <5%                     |                 5 |              0.12976 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6513 | >20%                    |                 5 |              0.13026 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6648 | <5%                     |                10 |              0.06648 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6655 | <5%                     |                 5 |              0.1331  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6756 | >20%                    |                 5 |              0.13512 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6816 | 15-20%                  |                 2 |              0.3408  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6889 | >20%                    |                 5 |              0.13778 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6945 | >20%                    |                 2 |              0.34725 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7022 | 15-20%                  |                10 |              0.07022 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7031 | 15-20%                  |                 5 |              0.14062 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7081 | >20%                    |                10 |              0.07081 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7083 | 5-10%                   |                 5 |              0.14166 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7136 | >20%                    |                10 |              0.07136 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7175 | >20%                    |                10 |              0.07175 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7193 | 10-15%                  |                 2 |              0.35965 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7302 | 15-20%                  |                 2 |              0.3651  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7522 | 15-20%                  |                10 |              0.07522 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7576 | <5%                     |                10 |              0.07576 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7595 | >20%                    |                 5 |              0.1519  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7596 | >20%                    |                 5 |              0.15192 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7611 | 15-20%                  |                10 |              0.07611 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7764 | >20%                    |                 5 |              0.15528 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7825 | >20%                    |                10 |              0.07825 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7826 | >20%                    |                 5 |              0.15652 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7938 | >20%                    |                 5 |              0.15876 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7984 | 15-20%                  |                10 |              0.07984 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.803  | >20%                    |                10 |              0.0803  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8306 | >20%                    |                10 |              0.08306 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8327 | >20%                    |                10 |              0.08327 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8349 | >20%                    |                 5 |              0.16698 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8359 | >20%                    |                10 |              0.08359 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8464 | >20%                    |                 5 |              0.16928 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.86   | >20%                    |                10 |              0.086   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8619 | >20%                    |                 2 |              0.43095 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8728 | 5-10%                   |                10 |              0.08728 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8765 | <5%                     |                10 |              0.08765 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8841 | 5-10%                   |                10 |              0.08841 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9016 | 5-10%                   |                10 |              0.09016 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9083 | 5-10%                   |                10 |              0.09083 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9118 | <5%                     |                 5 |              0.18236 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9138 | 15-20%                  |                10 |              0.09138 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9214 | 5-10%                   |                 5 |              0.18428 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9237 | 5-10%                   |                10 |              0.09237 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9295 | >20%                    |                 5 |              0.1859  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9398 | 15-20%                  |                10 |              0.09398 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9399 | 15-20%                  |                10 |              0.09399 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9554 | >20%                    |                 2 |              0.4777  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9565 | 5-10%                   |                10 |              0.09565 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9735 | >20%                    |                10 |              0.09735 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.995  | >20%                    |                10 |              0.0995  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0003 | <5%                     |                10 |              0.10003 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0295 | 5-10%                   |                10 |              0.10295 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0308 | 15-20%                  |                10 |              0.10308 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0338 | <5%                     |                10 |              0.10338 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0378 | 15-20%                  |                10 |              0.10378 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0527 | 5-10%                   |                10 |              0.10527 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0873 | <5%                     |                10 |              0.10873 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0903 | >20%                    |                10 |              0.10903 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1017 | 15-20%                  |                10 |              0.11017 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.111  | >20%                    |                10 |              0.1111  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1178 | >20%                    |                10 |              0.11178 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1209 | >20%                    |                10 |              0.11209 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1302 | >20%                    |                 5 |              0.22604 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1633 | <5%                     |                 2 |              0.58165 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1662 | >20%                    |                10 |              0.11662 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1825 | >20%                    |                10 |              0.11825 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.2086 | >20%                    |                 2 |              0.6043  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2132 | >20%                    |                 2 |              0.6066  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2411 | >20%                    |                10 |              0.12411 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2464 | 15-20%                  |                 5 |              0.24928 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.251  | >20%                    |                 5 |              0.2502  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2724 | >20%                    |                 5 |              0.25448 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3183 | >20%                    |                 5 |              0.26366 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3325 | 5-10%                   |                10 |              0.13325 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3904 | 5-10%                   |                 2 |              0.6952  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.45   | 15-20%                  |                 5 |              0.29    |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4668 | >20%                    |                10 |              0.14668 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5126 | >20%                    |                10 |              0.15126 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5169 | >20%                    |                10 |              0.15169 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5474 | <5%                     |                10 |              0.15474 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5492 | <5%                     |                 5 |              0.30984 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5892 | >20%                    |                10 |              0.15892 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6242 | 10-15%                  |                10 |              0.16242 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.207  | <5%                     |                10 |              0.2207  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2691 | 5-10%                   |                10 |              0.22691 |