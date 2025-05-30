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

Data correct as of 2025-05-30 01:51:26.961324, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1975 | >20%                    |                 2 |              0.09875 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2177 | >20%                    |                 2 |              0.10885 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.229  | >20%                    |                 2 |              0.1145  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2318 | 5-10%                   |                 5 |              0.04636 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2325 | >20%                    |                 2 |              0.11625 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2362 | 5-10%                   |                 2 |              0.1181  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2437 | <5%                     |                 2 |              0.12185 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2556 | >20%                    |                10 |              0.02556 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2565 | 15-20%                  |                 2 |              0.12825 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2581 | >20%                    |                 2 |              0.12905 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2596 | 10-15%                  |                 2 |              0.1298  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2651 | >20%                    |                 2 |              0.13255 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2651 | 10-15%                  |                 2 |              0.13255 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2697 | >20%                    |                10 |              0.02697 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2759 | >20%                    |                 2 |              0.13795 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2759 | 15-20%                  |                 5 |              0.05518 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2771 | 15-20%                  |                 2 |              0.13855 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2821 | <5%                     |                 2 |              0.14105 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2908 | >20%                    |                 2 |              0.1454  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | 15-20%                  |                 2 |              0.15025 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.312  | 15-20%                  |                 2 |              0.156   |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3126 | 15-20%                  |                 2 |              0.1563  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3237 | >20%                    |                 2 |              0.16185 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3275 | >20%                    |                 5 |              0.0655  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3371 | >20%                    |                 5 |              0.06742 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3371 | 15-20%                  |                 2 |              0.16855 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3465 | >20%                    |                 5 |              0.0693  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3468 | >20%                    |                 2 |              0.1734  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.347  | >20%                    |                10 |              0.0347  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3483 | >20%                    |                 2 |              0.17415 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3509 | >20%                    |                 5 |              0.07018 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3651 | 15-20%                  |                 2 |              0.18255 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3693 | 15-20%                  |                 2 |              0.18465 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3695 | >20%                    |                 5 |              0.0739  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3705 | >20%                    |                 5 |              0.0741  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3707 | 5-10%                   |                 2 |              0.18535 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3717 | 5-10%                   |                 2 |              0.18585 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3756 | <5%                     |                 2 |              0.1878  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3773 | 10-15%                  |                 5 |              0.07546 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3783 | >20%                    |                 2 |              0.18915 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3784 | >20%                    |                10 |              0.03784 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.379  | >20%                    |                 2 |              0.1895  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4006 | 15-20%                  |                 2 |              0.2003  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4012 | >20%                    |                 2 |              0.2006  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4051 | 10-15%                  |                 5 |              0.08102 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4056 | >20%                    |                 2 |              0.2028  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4124 | <5%                     |                 5 |              0.08248 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4136 | 10-15%                  |                 2 |              0.2068  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.422  | >20%                    |                 2 |              0.211   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.424  | <5%                     |                 2 |              0.212   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4262 | >20%                    |                 5 |              0.08524 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4339 | 15-20%                  |                 5 |              0.08678 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4351 | >20%                    |                10 |              0.04351 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4373 | 15-20%                  |                 5 |              0.08746 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4378 | >20%                    |                 5 |              0.08756 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4483 | 5-10%                   |                 5 |              0.08966 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4534 | >20%                    |                 2 |              0.2267  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4538 | >20%                    |                 2 |              0.2269  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4553 | 15-20%                  |                 5 |              0.09106 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4588 | 10-15%                  |                 5 |              0.09176 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.464  | >20%                    |                 2 |              0.232   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.465  | >20%                    |                 2 |              0.2325  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4656 | >20%                    |                 2 |              0.2328  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4675 | 15-20%                  |                 5 |              0.0935  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4769 | >20%                    |                 5 |              0.09538 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4807 | >20%                    |                 5 |              0.09614 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.482  | >20%                    |                 2 |              0.241   |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4846 | 10-15%                  |                 5 |              0.09692 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4884 | 15-20%                  |                10 |              0.04884 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4901 | <5%                     |                 5 |              0.09802 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4901 | >20%                    |                 5 |              0.09802 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4936 | <5%                     |                 5 |              0.09872 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4945 | 15-20%                  |                 2 |              0.24725 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4953 | <5%                     |                 5 |              0.09906 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4982 | 15-20%                  |                10 |              0.04982 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5    | 15-20%                  |                 5 |              0.1     |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5036 | 5-10%                   |                 5 |              0.10072 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.506  | >20%                    |                 5 |              0.1012  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5173 | >20%                    |                 5 |              0.10346 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5199 | >20%                    |                 2 |              0.25995 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.525  | >20%                    |                 2 |              0.2625  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5383 | >20%                    |                 5 |              0.10766 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.55   | 5-10%                   |                 5 |              0.11    |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5521 | 15-20%                  |                10 |              0.05521 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5528 | >20%                    |                 5 |              0.11056 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5549 | 10-15%                  |                10 |              0.05549 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5711 | 10-15%                  |                 2 |              0.28555 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5772 | >20%                    |                 5 |              0.11544 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5835 | >20%                    |                10 |              0.05835 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5916 | >20%                    |                 2 |              0.2958  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5934 | >20%                    |                10 |              0.05934 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5941 | >20%                    |                 5 |              0.11882 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6017 | >20%                    |                 2 |              0.30085 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6043 | >20%                    |                 5 |              0.12086 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6091 | 5-10%                   |                 2 |              0.30455 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6094 | 10-15%                  |                 5 |              0.12188 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6119 | >20%                    |                 5 |              0.12238 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6191 | >20%                    |                 5 |              0.12382 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6215 | 5-10%                   |                 2 |              0.31075 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6283 | <5%                     |                10 |              0.06283 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6309 | >20%                    |                10 |              0.06309 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6423 | 5-10%                   |                10 |              0.06423 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6469 | <5%                     |                 5 |              0.12938 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6563 | >20%                    |                 2 |              0.32815 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.661  | >20%                    |                 5 |              0.1322  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6638 | >20%                    |                 5 |              0.13276 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6683 | <5%                     |                10 |              0.06683 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6689 | 10-15%                  |                10 |              0.06689 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6701 | 15-20%                  |                 5 |              0.13402 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6743 | >20%                    |                 2 |              0.33715 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.678  | 10-15%                  |                 2 |              0.339   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6837 | >20%                    |                 2 |              0.34185 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7014 | 10-15%                  |                 5 |              0.14028 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7146 | 10-15%                  |                10 |              0.07146 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7149 | >20%                    |                10 |              0.07149 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7214 | <5%                     |                10 |              0.07214 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7251 | >20%                    |                10 |              0.07251 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7252 | <5%                     |                 5 |              0.14504 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7302 | >20%                    |                10 |              0.07302 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7432 | 10-15%                  |                 5 |              0.14864 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7539 | >20%                    |                 5 |              0.15078 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7564 | >20%                    |                10 |              0.07564 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7673 | >20%                    |                10 |              0.07673 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.78   | >20%                    |                10 |              0.078   |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7832 | 15-20%                  |                10 |              0.07832 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.79   | >20%                    |                 5 |              0.158   |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7911 | >20%                    |                10 |              0.07911 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7967 | 10-15%                  |                10 |              0.07967 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7997 | >20%                    |                 5 |              0.15994 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.809  | >20%                    |                10 |              0.0809  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8152 | 10-15%                  |                 5 |              0.16304 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8306 | 15-20%                  |                10 |              0.08306 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8384 | >20%                    |                10 |              0.08384 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.844  | >20%                    |                10 |              0.0844  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8603 | <5%                     |                10 |              0.08603 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8655 | 5-10%                   |                10 |              0.08655 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8813 | >20%                    |                10 |              0.08813 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9042 | >20%                    |                10 |              0.09042 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9148 | >20%                    |                 2 |              0.4574  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9183 | 5-10%                   |                 2 |              0.45915 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9194 | >20%                    |                10 |              0.09194 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9222 | >20%                    |                10 |              0.09222 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9296 | 10-15%                  |                 5 |              0.18592 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9369 | >20%                    |                10 |              0.09369 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.956  | >20%                    |                10 |              0.0956  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9635 | >20%                    |                 5 |              0.1927  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9764 | >20%                    |                 5 |              0.19528 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9778 | >20%                    |                 2 |              0.4889  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9951 | <5%                     |                10 |              0.09951 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0015 | >20%                    |                10 |              0.10015 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.004  | >20%                    |                 2 |              0.502   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0077 | 10-15%                  |                 5 |              0.20154 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0599 | 15-20%                  |                10 |              0.10599 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0617 | <5%                     |                10 |              0.10617 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0702 | >20%                    |                 5 |              0.21404 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0706 | 15-20%                  |                10 |              0.10706 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0906 | <5%                     |                 2 |              0.5453  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1057 | 5-10%                   |                10 |              0.11057 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1826 | 15-20%                  |                10 |              0.11826 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2399 | 10-15%                  |                10 |              0.12399 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2893 | >20%                    |                10 |              0.12893 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2953 | 5-10%                   |                10 |              0.12953 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2988 | >20%                    |                10 |              0.12988 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3212 | 10-15%                  |                10 |              0.13212 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3244 | 15-20%                  |                10 |              0.13244 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3539 | >20%                    |                10 |              0.13539 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3554 | >20%                    |                 5 |              0.27108 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3978 | >20%                    |                 2 |              0.6989  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4273 | <5%                     |                 5 |              0.28546 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4977 | >20%                    |                10 |              0.14977 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0881 | <5%                     |                10 |              0.20881 |