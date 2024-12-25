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

Data correct as of 2024-12-25 01:36:30.845743, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1383 |                         |                 2 |              0.06915 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1484 |                         |                 2 |              0.0742  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1937 |                         |                 5 |              0.03874 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2082 |                         |                 5 |              0.04164 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2095 | <5%                     |                 5 |              0.0419  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2114 | >20%                    |                 2 |              0.1057  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2115 | 15-20%                  |                 2 |              0.10575 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2249 | 15-20%                  |                 2 |              0.11245 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2284 | 15-20%                  |                 2 |              0.1142  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2313 | 5-10%                   |                 2 |              0.11565 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2346 | 15-20%                  |                 2 |              0.1173  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2359 | >20%                    |                 2 |              0.11795 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2455 | 5-10%                   |                 2 |              0.12275 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2617 | <5%                     |                 2 |              0.13085 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2676 | <5%                     |                 2 |              0.1338  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2784 | 15-20%                  |                 5 |              0.05568 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2821 | <5%                     |                 2 |              0.14105 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.29   | 5-10%                   |                 2 |              0.145   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2935 | 5-10%                   |                 2 |              0.14675 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2973 |                         |                10 |              0.02973 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3036 | 5-10%                   |                 2 |              0.1518  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3094 | >20%                    |                 2 |              0.1547  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3206 | >20%                    |                 2 |              0.1603  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3243 | <5%                     |                 2 |              0.16215 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.329  |                         |                10 |              0.0329  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3337 | <5%                     |                 5 |              0.06674 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3403 | <5%                     |                 2 |              0.17015 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3457 | 5-10%                   |                10 |              0.03457 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3459 | 10-15%                  |                 2 |              0.17295 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3488 | 10-15%                  |                 2 |              0.1744  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3499 | >20%                    |                 5 |              0.06998 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3527 | 15-20%                  |                10 |              0.03527 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3556 | 10-15%                  |                 2 |              0.1778  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3564 | >20%                    |                 2 |              0.1782  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3574 | 5-10%                   |                 5 |              0.07148 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3637 | <5%                     |                 5 |              0.07274 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3678 | >20%                    |                 5 |              0.07356 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3693 | >20%                    |                 2 |              0.18465 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3732 | <5%                     |                 5 |              0.07464 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3732 | <5%                     |                 2 |              0.1866  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3811 | >20%                    |                10 |              0.03811 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3861 | >20%                    |                 2 |              0.19305 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3864 | <5%                     |                 5 |              0.07728 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3883 | 5-10%                   |                 2 |              0.19415 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.391  | >20%                    |                 2 |              0.1955  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4037 | 10-15%                  |                 2 |              0.20185 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4062 | 5-10%                   |                 5 |              0.08124 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4115 | 5-10%                   |                 2 |              0.20575 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4225 | 5-10%                   |                 2 |              0.21125 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.427  | 5-10%                   |                 5 |              0.0854  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4274 | 10-15%                  |                 2 |              0.2137  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4346 | 10-15%                  |                10 |              0.04346 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4371 | 10-15%                  |                 5 |              0.08742 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4383 | >20%                    |                 5 |              0.08766 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4407 | 5-10%                   |                 5 |              0.08814 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4409 | >20%                    |                 5 |              0.08818 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4438 | >20%                    |                 5 |              0.08876 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4453 | >20%                    |                 5 |              0.08906 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4464 | <5%                     |                 5 |              0.08928 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4466 | 15-20%                  |                 2 |              0.2233  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4488 | 5-10%                   |                10 |              0.04488 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4489 | 10-15%                  |                10 |              0.04489 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4511 | 5-10%                   |                 5 |              0.09022 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4586 | 5-10%                   |                 2 |              0.2293  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4591 | >20%                    |                 5 |              0.09182 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4669 | 5-10%                   |                 2 |              0.23345 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.4732 | <5%                     |                 2 |              0.2366  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4769 | 10-15%                  |                 5 |              0.09538 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4786 | 15-20%                  |                 2 |              0.2393  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4842 | <5%                     |                 5 |              0.09684 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4858 | <5%                     |                 5 |              0.09716 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4892 | 10-15%                  |                 2 |              0.2446  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.49   | 15-20%                  |                 5 |              0.098   |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4965 | <5%                     |                 5 |              0.0993  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5094 | <5%                     |                 2 |              0.2547  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5115 | 10-15%                  |                 2 |              0.25575 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5127 | >20%                    |                10 |              0.05127 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5211 | >20%                    |                 2 |              0.26055 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5257 | >20%                    |                 5 |              0.10514 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5271 | <5%                     |                 5 |              0.10542 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5313 | >20%                    |                 5 |              0.10626 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5315 | >20%                    |                 5 |              0.1063  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5501 | 5-10%                   |                 5 |              0.11002 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5597 | 15-20%                  |                 5 |              0.11194 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5609 | <5%                     |                 5 |              0.11218 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5664 | >20%                    |                 5 |              0.11328 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5667 | 10-15%                  |                 5 |              0.11334 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5784 | >20%                    |                 2 |              0.2892  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.593  | >20%                    |                10 |              0.0593  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6086 | <5%                     |                 5 |              0.12172 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6436 | 15-20%                  |                 2 |              0.3218  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6537 | >20%                    |                10 |              0.06537 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6579 | >20%                    |                10 |              0.06579 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6658 | 5-10%                   |                10 |              0.06658 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6665 | 5-10%                   |                10 |              0.06665 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6698 | 15-20%                  |                 5 |              0.13396 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6728 | <5%                     |                 5 |              0.13456 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6851 | >20%                    |                10 |              0.06851 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6971 | 15-20%                  |                 5 |              0.13942 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7    | 5-10%                   |                 5 |              0.14    |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7027 | <5%                     |                10 |              0.07027 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7055 | 10-15%                  |                10 |              0.07055 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7092 | <5%                     |                 2 |              0.3546  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.713  | >20%                    |                 2 |              0.3565  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7165 | 10-15%                  |                10 |              0.07165 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.742  | 5-10%                   |                10 |              0.0742  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7522 | >20%                    |                 5 |              0.15044 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7531 | >20%                    |                 5 |              0.15062 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7669 | 15-20%                  |                10 |              0.07669 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7755 | >20%                    |                 5 |              0.1551  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7874 | 15-20%                  |                10 |              0.07874 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.7951 | <5%                     |                 2 |              0.39755 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.7971 | >20%                    |                10 |              0.07971 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8022 | <5%                     |                10 |              0.08022 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8027 | 5-10%                   |                10 |              0.08027 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8085 | 5-10%                   |                10 |              0.08085 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8247 | >20%                    |                10 |              0.08247 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8352 | 10-15%                  |                10 |              0.08352 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8433 | 10-15%                  |                10 |              0.08433 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8451 | 5-10%                   |                10 |              0.08451 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8453 | 10-15%                  |                10 |              0.08453 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8604 | 5-10%                   |                 5 |              0.17208 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8762 | <5%                     |                10 |              0.08762 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8843 | 5-10%                   |                10 |              0.08843 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8885 | <5%                     |                10 |              0.08885 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.9076 | <5%                     |                10 |              0.09076 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9336 | 5-10%                   |                 5 |              0.18672 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9383 | 10-15%                  |                 2 |              0.46915 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9432 | >20%                    |                10 |              0.09432 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9528 | <5%                     |                 5 |              0.19056 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9541 | 15-20%                  |                10 |              0.09541 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9833 | 15-20%                  |                10 |              0.09833 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9971 | 5-10%                   |                10 |              0.09971 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0443 | <5%                     |                10 |              0.10443 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0611 | <5%                     |                10 |              0.10611 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0958 | >20%                    |                10 |              0.10958 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1093 | >20%                    |                10 |              0.11093 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1637 | 5-10%                   |                10 |              0.11637 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2636 | >20%                    |                10 |              0.12636 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2696 | <5%                     |                10 |              0.12696 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3725 | 5-10%                   |                10 |              0.13725 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5615 | 5-10%                   |                 5 |              0.3123  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0082 | 10-15%                  |                10 |              0.20082 |