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

Data correct as of 2025-02-27 01:40:47.856355, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1115 | >20%                    |                 2 |              0.05575 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1382 | 5-10%                   |                 5 |              0.02764 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1382 | 10-15%                  |                 2 |              0.0691  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1732 | <5%                     |                 2 |              0.0866  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1908 | <5%                     |                 5 |              0.03816 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 10-15%                  |                 5 |              0.039   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2113 | 5-10%                   |                 2 |              0.10565 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2178 | >20%                    |                 5 |              0.04356 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.229  | >20%                    |                 2 |              0.1145  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2303 | >20%                    |                 2 |              0.11515 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2305 | <5%                     |                 2 |              0.11525 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2342 | >20%                    |                 2 |              0.1171  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2383 | >20%                    |                 2 |              0.11915 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.24   | <5%                     |                 5 |              0.048   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2415 | 5-10%                   |                10 |              0.02415 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2439 | >20%                    |                 2 |              0.12195 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2452 | >20%                    |                 5 |              0.04904 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2453 | 15-20%                  |                10 |              0.02453 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.249  |                         |                 2 |              0.1245  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2659 | >20%                    |                 2 |              0.13295 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.268  | 5-10%                   |                 2 |              0.134   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2707 | 15-20%                  |                 2 |              0.13535 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2722 | <5%                     |                 5 |              0.05444 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.273  | 10-15%                  |                10 |              0.0273  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2802 | 5-10%                   |                 2 |              0.1401  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.281  | 5-10%                   |                 2 |              0.1405  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2831 | <5%                     |                 2 |              0.14155 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2834 | 5-10%                   |                 5 |              0.05668 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2938 | >20%                    |                 2 |              0.1469  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3005 | 10-15%                  |                 2 |              0.15025 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3087 | 15-20%                  |                 2 |              0.15435 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3089 | <5%                     |                 2 |              0.15445 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3129 | <5%                     |                 2 |              0.15645 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3209 | 15-20%                  |                 2 |              0.16045 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3273 | 10-15%                  |                 2 |              0.16365 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3282 | 15-20%                  |                 5 |              0.06564 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3346 | <5%                     |                 2 |              0.1673  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3355 | >20%                    |                 2 |              0.16775 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3367 | >20%                    |                10 |              0.03367 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3423 | >20%                    |                 2 |              0.17115 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3486 |                         |                 5 |              0.06972 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3512 | 5-10%                   |                10 |              0.03512 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3539 | <5%                     |                 5 |              0.07078 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3594 | 10-15%                  |                 5 |              0.07188 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3604 | 15-20%                  |                 2 |              0.1802  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3759 | 5-10%                   |                 5 |              0.07518 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3793 | <5%                     |                 2 |              0.18965 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3796 | <5%                     |                10 |              0.03796 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3871 | 10-15%                  |                10 |              0.03871 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3892 | >20%                    |                 5 |              0.07784 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3945 | <5%                     |                 5 |              0.0789  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3955 | <5%                     |                 2 |              0.19775 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.401  | 15-20%                  |                10 |              0.0401  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4047 | 5-10%                   |                 2 |              0.20235 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4074 | >20%                    |                 5 |              0.08148 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4092 | 15-20%                  |                 2 |              0.2046  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4103 | 10-15%                  |                 2 |              0.20515 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4112 | 5-10%                   |                 2 |              0.2056  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4136 | >20%                    |                 2 |              0.2068  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4207 | >20%                    |                 5 |              0.08414 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4242 | 5-10%                   |                 2 |              0.2121  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4271 | <5%                     |                 2 |              0.21355 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4272 | 5-10%                   |                 2 |              0.2136  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4373 | >20%                    |                 2 |              0.21865 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4595 | <5%                     |                 5 |              0.0919  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4601 | >20%                    |                 5 |              0.09202 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4635 | 10-15%                  |                 5 |              0.0927  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4635 | >20%                    |                 2 |              0.23175 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4669 | <5%                     |                10 |              0.04669 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4684 | >20%                    |                 2 |              0.2342  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4751 | 5-10%                   |                 5 |              0.09502 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.479  | 5-10%                   |                 5 |              0.0958  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4794 | >20%                    |                 2 |              0.2397  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4864 | 15-20%                  |                 5 |              0.09728 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4941 | >20%                    |                 2 |              0.24705 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5    | <5%                     |                 5 |              0.1     |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5044 | >20%                    |                 5 |              0.10088 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.505  |                         |                10 |              0.0505  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5058 | >20%                    |                 5 |              0.10116 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5067 | >20%                    |                 5 |              0.10134 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5069 | >20%                    |                 2 |              0.25345 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5086 | >20%                    |                 2 |              0.2543  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5115 | >20%                    |                 2 |              0.25575 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5254 | 5-10%                   |                 5 |              0.10508 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5255 | <5%                     |                 2 |              0.26275 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5288 | >20%                    |                 5 |              0.10576 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5308 | 10-15%                  |                 5 |              0.10616 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5331 | <5%                     |                 5 |              0.10662 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5436 | 10-15%                  |                 5 |              0.10872 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5449 | >20%                    |                 2 |              0.27245 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5518 | 15-20%                  |                 2 |              0.2759  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5561 | 15-20%                  |                10 |              0.05561 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5597 | >20%                    |                 2 |              0.27985 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5645 | 5-10%                   |                 5 |              0.1129  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.565  | >20%                    |                 5 |              0.113   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5664 | 5-10%                   |                 5 |              0.11328 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5693 | >20%                    |                 2 |              0.28465 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5697 | 5-10%                   |                10 |              0.05697 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5698 | 10-15%                  |                 5 |              0.11396 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5869 | 10-15%                  |                 5 |              0.11738 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5888 | >20%                    |                 5 |              0.11776 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5919 | 5-10%                   |                 2 |              0.29595 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6029 | 5-10%                   |                 5 |              0.12058 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6072 | <5%                     |                 5 |              0.12144 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6218 | 10-15%                  |                10 |              0.06218 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6282 | 15-20%                  |                 5 |              0.12564 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6473 | >20%                    |                 5 |              0.12946 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6491 | >20%                    |                10 |              0.06491 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6625 | <5%                     |                10 |              0.06625 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6671 | 10-15%                  |                 5 |              0.13342 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6771 | 5-10%                   |                 5 |              0.13542 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6857 | >20%                    |                 5 |              0.13714 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6871 | >20%                    |                 2 |              0.34355 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6882 | >20%                    |                10 |              0.06882 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6961 | >20%                    |                 2 |              0.34805 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7154 | >20%                    |                 5 |              0.14308 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7161 | >20%                    |                10 |              0.07161 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7212 | 5-10%                   |                 5 |              0.14424 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7249 | 5-10%                   |                 5 |              0.14498 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7263 | >20%                    |                 5 |              0.14526 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7479 | <5%                     |                 5 |              0.14958 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7485 | 5-10%                   |                10 |              0.07485 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7671 | 15-20%                  |                10 |              0.07671 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7678 | <5%                     |                10 |              0.07678 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7717 | >20%                    |                10 |              0.07717 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.774  | >20%                    |                10 |              0.0774  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7842 | 5-10%                   |                 2 |              0.3921  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7849 | >20%                    |                 5 |              0.15698 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.7854 | >20%                    |                10 |              0.07854 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7923 | 15-20%                  |                 2 |              0.39615 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7934 | >20%                    |                 5 |              0.15868 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7968 | 10-15%                  |                10 |              0.07968 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7985 | >20%                    |                 5 |              0.1597  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8055 | >20%                    |                10 |              0.08055 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.818  | <5%                     |                10 |              0.0818  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8198 | >20%                    |                10 |              0.08198 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8242 | 5-10%                   |                10 |              0.08242 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8253 | 15-20%                  |                10 |              0.08253 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8514 | >20%                    |                10 |              0.08514 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8674 | <5%                     |                10 |              0.08674 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8707 | <5%                     |                10 |              0.08707 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8745 | <5%                     |                10 |              0.08745 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.881  | 5-10%                   |                10 |              0.0881  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8817 | 10-15%                  |                10 |              0.08817 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.899  | >20%                    |                 5 |              0.1798  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9396 | >20%                    |                10 |              0.09396 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9457 | >20%                    |                10 |              0.09457 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9504 | 10-15%                  |                10 |              0.09504 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9665 | 5-10%                   |                10 |              0.09665 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9724 | >20%                    |                10 |              0.09724 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9967 | 10-15%                  |                10 |              0.09967 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0126 | 15-20%                  |                10 |              0.10126 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0222 | >20%                    |                10 |              0.10222 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0224 | 5-10%                   |                10 |              0.10224 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0311 | 15-20%                  |                10 |              0.10311 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.0585 | >20%                    |                 2 |              0.52925 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0754 | >20%                    |                10 |              0.10754 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0808 | <5%                     |                10 |              0.10808 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1087 | 10-15%                  |                 2 |              0.55435 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1362 | 10-15%                  |                10 |              0.11362 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1783 | >20%                    |                10 |              0.11783 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2054 | 15-20%                  |                10 |              0.12054 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2095 | >20%                    |                 5 |              0.2419  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2231 | 5-10%                   |                 5 |              0.24462 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2666 | 15-20%                  |                 5 |              0.25332 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2758 | >20%                    |                 2 |              0.6379  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2954 | 10-15%                  |                 5 |              0.25908 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3251 | >20%                    |                10 |              0.13251 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3537 | >20%                    |                 5 |              0.27074 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3988 | >20%                    |                 2 |              0.6994  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4628 | >20%                    |                10 |              0.14628 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5109 | >20%                    |                10 |              0.15109 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7456 | >20%                    |                10 |              0.17456 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7684 | >20%                    |                10 |              0.17684 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.085  | 5-10%                   |                10 |              0.2085  |