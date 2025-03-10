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

Data correct as of 2025-03-10 01:19:41.979041, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1242 | 10-15%                  |                 2 |              0.0621  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1417 | 5-10%                   |                 5 |              0.02834 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1431 | >20%                    |                 2 |              0.07155 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1701 | >20%                    |                 5 |              0.03402 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1903 | 5-10%                   |                 2 |              0.09515 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1954 | 15-20%                  |                 5 |              0.03908 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2151 | >20%                    |                 5 |              0.04302 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2166 | 5-10%                   |                 2 |              0.1083  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2224 | 5-10%                   |                 5 |              0.04448 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2311 | 15-20%                  |                 2 |              0.11555 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.232  | >20%                    |                 2 |              0.116   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2334 | >20%                    |                 5 |              0.04668 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2352 | >20%                    |                 2 |              0.1176  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2385 | >20%                    |                 2 |              0.11925 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.242  | 5-10%                   |                10 |              0.0242  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.242  | 10-15%                  |                 2 |              0.121   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2442 | 5-10%                   |                 2 |              0.1221  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2471 | 10-15%                  |                 5 |              0.04942 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2504 | <5%                     |                 2 |              0.1252  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | 15-20%                  |                 2 |              0.1255  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2552 | >20%                    |                 2 |              0.1276  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2692 | 5-10%                   |                10 |              0.02692 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2733 | 5-10%                   |                 2 |              0.13665 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2911 | 10-15%                  |                 2 |              0.14555 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2971 | 5-10%                   |                 5 |              0.05942 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2981 | 10-15%                  |                10 |              0.02981 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2993 | 5-10%                   |                 2 |              0.14965 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3042 | >20%                    |                 2 |              0.1521  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3098 | <5%                     |                 2 |              0.1549  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3113 | <5%                     |                 2 |              0.15565 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3125 | 5-10%                   |                 2 |              0.15625 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.327  | 10-15%                  |                 2 |              0.1635  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3331 | >20%                    |                 2 |              0.16655 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | 5-10%                   |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3478 | >20%                    |                 2 |              0.1739  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3545 | 10-15%                  |                 5 |              0.0709  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3564 | >20%                    |                 5 |              0.07128 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3564 | 10-15%                  |                10 |              0.03564 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3596 | >20%                    |                 2 |              0.1798  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3596 | 5-10%                   |                 5 |              0.07192 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3614 | >20%                    |                 2 |              0.1807  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3664 | 5-10%                   |                 5 |              0.07328 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3664 | >20%                    |                 2 |              0.1832  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3667 | >20%                    |                 2 |              0.18335 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3717 | <5%                     |                 2 |              0.18585 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3724 | >20%                    |                10 |              0.03724 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3734 | 15-20%                  |                10 |              0.03734 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.376  | >20%                    |                 2 |              0.188   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.38   | >20%                    |                 2 |              0.19    |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3803 | 5-10%                   |                 2 |              0.19015 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3826 | >20%                    |                 5 |              0.07652 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3839 | 10-15%                  |                10 |              0.03839 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3882 | <5%                     |                10 |              0.03882 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.3892 | <5%                     |                 2 |              0.1946  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3925 | <5%                     |                 5 |              0.0785  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3971 | 5-10%                   |                10 |              0.03971 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4017 | >20%                    |                10 |              0.04017 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4019 | 10-15%                  |                 5 |              0.08038 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4036 | >20%                    |                 5 |              0.08072 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4049 | <5%                     |                 2 |              0.20245 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.406  | 5-10%                   |                 2 |              0.203   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4163 | 5-10%                   |                 2 |              0.20815 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.4185 | >20%                    |                 5 |              0.0837  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4208 | <5%                     |                 5 |              0.08416 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4225 | 5-10%                   |                 2 |              0.21125 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4254 | >20%                    |                 5 |              0.08508 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4355 | 10-15%                  |                10 |              0.04355 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.437  | 5-10%                   |                 2 |              0.2185  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4381 | <5%                     |                 2 |              0.21905 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4399 | 15-20%                  |                 2 |              0.21995 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4442 | >20%                    |                 2 |              0.2221  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4489 | >20%                    |                 2 |              0.22445 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.459  | 5-10%                   |                 5 |              0.0918  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4605 | >20%                    |                 5 |              0.0921  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4657 | >20%                    |                 2 |              0.23285 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4708 | >20%                    |                 2 |              0.2354  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4818 | 5-10%                   |                 5 |              0.09636 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4838 | <5%                     |                 5 |              0.09676 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4873 | >20%                    |                 5 |              0.09746 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4921 | 5-10%                   |                 5 |              0.09842 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4939 | <5%                     |                 5 |              0.09878 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5031 | 10-15%                  |                 5 |              0.10062 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5059 | >20%                    |                 2 |              0.25295 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5122 | >20%                    |                 5 |              0.10244 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5132 | >20%                    |                 2 |              0.2566  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5142 | >20%                    |                 5 |              0.10284 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5184 | 10-15%                  |                 2 |              0.2592  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5227 | >20%                    |                 5 |              0.10454 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5322 | >20%                    |                 2 |              0.2661  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5501 | 5-10%                   |                 5 |              0.11002 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5506 | 15-20%                  |                 2 |              0.2753  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5507 | >20%                    |                 5 |              0.11014 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5513 | 5-10%                   |                10 |              0.05513 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.5546 | 5-10%                   |                10 |              0.05546 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5566 | >20%                    |                 2 |              0.2783  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5623 | 15-20%                  |                 2 |              0.28115 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5628 | 5-10%                   |                 5 |              0.11256 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5649 | >20%                    |                 5 |              0.11298 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5672 | <5%                     |                 5 |              0.11344 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5736 | 10-15%                  |                 5 |              0.11472 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5761 | 5-10%                   |                 5 |              0.11522 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5793 | >20%                    |                 2 |              0.28965 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5821 | 15-20%                  |                 5 |              0.11642 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5877 | 10-15%                  |                 5 |              0.11754 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5928 | >20%                    |                 2 |              0.2964  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5945 | <5%                     |                 5 |              0.1189  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5974 | >20%                    |                 5 |              0.11948 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6049 | 15-20%                  |                 5 |              0.12098 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.617  | >20%                    |                 5 |              0.1234  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6358 | >20%                    |                 2 |              0.3179  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6389 | >20%                    |                10 |              0.06389 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6715 | >20%                    |                 5 |              0.1343  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6765 | 10-15%                  |                 5 |              0.1353  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6907 | >20%                    |                 5 |              0.13814 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6965 | >20%                    |                10 |              0.06965 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7044 | <5%                     |                10 |              0.07044 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7071 | <5%                     |                10 |              0.07071 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7087 | >20%                    |                10 |              0.07087 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7201 | >20%                    |                 5 |              0.14402 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7251 | >20%                    |                 2 |              0.36255 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7282 | >20%                    |                 5 |              0.14564 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7295 | >20%                    |                10 |              0.07295 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.734  | >20%                    |                 5 |              0.1468  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7363 | >20%                    |                10 |              0.07363 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7384 | >20%                    |                10 |              0.07384 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7451 | 5-10%                   |                 2 |              0.37255 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.749  | >20%                    |                10 |              0.0749  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.758  | 5-10%                   |                 5 |              0.1516  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7588 | <5%                     |                 5 |              0.15176 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7647 | >20%                    |                 2 |              0.38235 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7745 | 5-10%                   |                10 |              0.07745 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7754 | 5-10%                   |                10 |              0.07754 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7808 | >20%                    |                 5 |              0.15616 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.785  | >20%                    |                10 |              0.0785  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8027 | >20%                    |                10 |              0.08027 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8043 | 15-20%                  |                 5 |              0.16086 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8397 | <5%                     |                10 |              0.08397 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8459 | >20%                    |                10 |              0.08459 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8475 | <5%                     |                10 |              0.08475 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.8523 | >20%                    |                 5 |              0.17046 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8552 | <5%                     |                10 |              0.08552 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8621 | 15-20%                  |                10 |              0.08621 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8729 | 5-10%                   |                10 |              0.08729 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8786 | 15-20%                  |                 5 |              0.17572 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8812 | 5-10%                   |                10 |              0.08812 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8853 | <5%                     |                10 |              0.08853 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8882 | >20%                    |                10 |              0.08882 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9085 | >20%                    |                10 |              0.09085 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.935  | >20%                    |                10 |              0.0935  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9678 | 5-10%                   |                10 |              0.09678 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9701 | >20%                    |                10 |              0.09701 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9791 | 15-20%                  |                10 |              0.09791 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0178 | <5%                     |                10 |              0.10178 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0273 | >20%                    |                10 |              0.10273 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0495 | >20%                    |                10 |              0.10495 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0497 | 10-15%                  |                10 |              0.10497 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0567 | 5-10%                   |                10 |              0.10567 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0696 | >20%                    |                 2 |              0.5348  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0888 | 5-10%                   |                10 |              0.10888 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0985 | <5%                     |                10 |              0.10985 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1192 | >20%                    |                10 |              0.11192 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1262 | >20%                    |                10 |              0.11262 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1517 | 5-10%                   |                 2 |              0.57585 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.1818 | 15-20%                  |                10 |              0.11818 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.19   | 15-20%                  |                10 |              0.119   |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1903 | >20%                    |                 5 |              0.23806 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.3169 | >20%                    |                 2 |              0.65845 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3355 | 5-10%                   |                 5 |              0.2671  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3586 | >20%                    |                10 |              0.13586 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3928 | >20%                    |                10 |              0.13928 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4559 | 10-15%                  |                 5 |              0.29118 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5937 | >20%                    |                10 |              0.15937 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.6625 | >20%                    |                 2 |              0.83125 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.6664 | >20%                    |                 5 |              0.33328 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6682 | >20%                    |                10 |              0.16682 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.7177 | >20%                    |                 5 |              0.34354 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7897 | >20%                    |                10 |              0.17897 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1779 | 5-10%                   |                10 |              0.21779 |