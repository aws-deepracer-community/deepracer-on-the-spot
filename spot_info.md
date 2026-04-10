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

Data correct as of 2026-04-10 02:56:01.216203, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1756 | >20%                    |                 2 |              0.0878  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1963 | 15-20%                  |                 2 |              0.09815 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2112 | >20%                    |                 2 |              0.1056  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2218 | >20%                    |                 2 |              0.1109  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2443 | >20%                    |                 2 |              0.12215 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2452 | >20%                    |                 2 |              0.1226  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2615 | >20%                    |                 2 |              0.13075 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.268  | 15-20%                  |                 5 |              0.0536  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2798 | 5-10%                   |                10 |              0.02798 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2801 | 15-20%                  |                 2 |              0.14005 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2846 | >20%                    |                10 |              0.02846 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2883 | 15-20%                  |                 5 |              0.05766 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3045 | 15-20%                  |                 5 |              0.0609  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3086 | >20%                    |                 2 |              0.1543  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3108 | >20%                    |                 5 |              0.06216 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3143 | >20%                    |                 5 |              0.06286 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3218 | 10-15%                  |                 2 |              0.1609  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3228 | >20%                    |                 5 |              0.06456 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3249 | 10-15%                  |                 2 |              0.16245 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3274 | >20%                    |                 2 |              0.1637  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3283 | <5%                     |                 2 |              0.16415 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3363 | <5%                     |                 2 |              0.16815 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3373 | 5-10%                   |                10 |              0.03373 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3373 | 10-15%                  |                 2 |              0.16865 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3411 | 15-20%                  |                 2 |              0.17055 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3468 | 5-10%                   |                10 |              0.03468 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3553 | >20%                    |                 5 |              0.07106 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3576 | >20%                    |                 2 |              0.1788  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.358  | >20%                    |                 2 |              0.179   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.361  | >20%                    |                10 |              0.0361  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3825 | >20%                    |                 2 |              0.19125 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3848 | 10-15%                  |                 2 |              0.1924  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3993 | >20%                    |                 5 |              0.07986 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4042 | >20%                    |                 5 |              0.08084 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4052 | >20%                    |                 5 |              0.08104 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.413  | >20%                    |                 2 |              0.2065  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.417  | <5%                     |                 2 |              0.2085  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4187 | >20%                    |                 5 |              0.08374 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.421  | 15-20%                  |                 2 |              0.2105  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4211 | >20%                    |                 2 |              0.21055 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4217 | 10-15%                  |                 2 |              0.21085 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4218 | >20%                    |                 5 |              0.08436 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4301 | >20%                    |                 5 |              0.08602 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4323 | >20%                    |                 2 |              0.21615 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4387 | >20%                    |                 2 |              0.21935 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4426 | >20%                    |                 2 |              0.2213  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4437 | >20%                    |                 5 |              0.08874 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4459 | 15-20%                  |                 2 |              0.22295 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4506 | >20%                    |                 5 |              0.09012 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4594 | 15-20%                  |                 2 |              0.2297  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4611 | >20%                    |                 5 |              0.09222 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4682 | >20%                    |                 5 |              0.09364 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4689 | >20%                    |                 2 |              0.23445 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.469  | >20%                    |                 5 |              0.0938  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.469  | >20%                    |                 5 |              0.0938  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4805 | >20%                    |                 2 |              0.24025 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4844 | >20%                    |                 5 |              0.09688 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.491  | >20%                    |                 5 |              0.0982  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4974 | >20%                    |                 5 |              0.09948 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5023 | >20%                    |                 2 |              0.25115 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5074 | >20%                    |                 2 |              0.2537  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5121 | >20%                    |                10 |              0.05121 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5198 | <5%                     |                10 |              0.05198 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5354 | 5-10%                   |                 5 |              0.10708 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5431 | 5-10%                   |                 2 |              0.27155 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5484 | >20%                    |                10 |              0.05484 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5487 | >20%                    |                 2 |              0.27435 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5586 | <5%                     |                 5 |              0.11172 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5605 | >20%                    |                 2 |              0.28025 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5742 | 15-20%                  |                 5 |              0.11484 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5749 | >20%                    |                 5 |              0.11498 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5756 | >20%                    |                10 |              0.05756 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5863 | 10-15%                  |                 5 |              0.11726 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5928 | >20%                    |                 5 |              0.11856 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5943 | >20%                    |                10 |              0.05943 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6009 | 5-10%                   |                 5 |              0.12018 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6018 | >20%                    |                10 |              0.06018 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.611  | 5-10%                   |                10 |              0.0611  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6135 | >20%                    |                 2 |              0.30675 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6222 | >20%                    |                10 |              0.06222 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6286 | 10-15%                  |                 2 |              0.3143  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6296 | >20%                    |                 5 |              0.12592 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6365 | 5-10%                   |                 2 |              0.31825 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6455 | >20%                    |                10 |              0.06455 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6466 | >20%                    |                 5 |              0.12932 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6493 | >20%                    |                 5 |              0.12986 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6534 | 15-20%                  |                10 |              0.06534 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.658  | >20%                    |                 2 |              0.329   |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6721 | >20%                    |                10 |              0.06721 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.678  | >20%                    |                 5 |              0.1356  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6799 | >20%                    |                 5 |              0.13598 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.683  | >20%                    |                10 |              0.0683  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7129 | >20%                    |                 5 |              0.14258 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7302 | >20%                    |                 5 |              0.14604 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7309 | >20%                    |                10 |              0.07309 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7339 | >20%                    |                 5 |              0.14678 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7357 | 15-20%                  |                10 |              0.07357 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7373 | >20%                    |                10 |              0.07373 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.745  | >20%                    |                 5 |              0.149   |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7527 | >20%                    |                10 |              0.07527 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7568 | >20%                    |                 5 |              0.15136 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7611 | >20%                    |                 2 |              0.38055 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7619 | >20%                    |                 2 |              0.38095 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7685 | >20%                    |                10 |              0.07685 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7983 | 5-10%                   |                10 |              0.07983 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8031 | >20%                    |                 5 |              0.16062 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8101 | >20%                    |                 5 |              0.16202 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8116 | >20%                    |                10 |              0.08116 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.8165 | >20%                    |                 5 |              0.1633  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8176 | >20%                    |                 5 |              0.16352 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.824  | >20%                    |                10 |              0.0824  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8261 | >20%                    |                10 |              0.08261 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8409 | 5-10%                   |                 2 |              0.42045 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8435 | >20%                    |                 2 |              0.42175 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8607 | >20%                    |                10 |              0.08607 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8812 | >20%                    |                 5 |              0.17624 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8817 | 15-20%                  |                10 |              0.08817 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8834 | >20%                    |                 5 |              0.17668 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8839 | 15-20%                  |                10 |              0.08839 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8935 | >20%                    |                10 |              0.08935 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8947 | >20%                    |                10 |              0.08947 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8993 | >20%                    |                10 |              0.08993 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9085 | >20%                    |                 2 |              0.45425 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9157 | >20%                    |                10 |              0.09157 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9381 | 10-15%                  |                10 |              0.09381 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9395 | 15-20%                  |                10 |              0.09395 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9708 | >20%                    |                 5 |              0.19416 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9773 | >20%                    |                10 |              0.09773 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9818 | >20%                    |                10 |              0.09818 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9876 | >20%                    |                10 |              0.09876 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0001 | 10-15%                  |                 2 |              0.50005 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0092 | >20%                    |                10 |              0.10092 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0266 | 5-10%                   |                10 |              0.10266 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.051  | 15-20%                  |                10 |              0.1051  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0837 | >20%                    |                10 |              0.10837 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1147 | >20%                    |                10 |              0.11147 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1263 | >20%                    |                 5 |              0.22526 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1329 | >20%                    |                10 |              0.11329 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.199  | >20%                    |                 5 |              0.2398  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2398 | 10-15%                  |                10 |              0.12398 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2514 | 15-20%                  |                10 |              0.12514 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3096 | 15-20%                  |                10 |              0.13096 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4423 | >20%                    |                 2 |              0.72115 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4804 | >20%                    |                 5 |              0.29608 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4819 | >20%                    |                10 |              0.14819 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5127 | 15-20%                  |                 5 |              0.30254 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.5174 | 5-10%                   |                 2 |              0.7587  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.5511 |                         |                 5 |              0.31022 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.8539 |                         |                 2 |              0.92695 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9874 | >20%                    |                10 |              0.19874 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      2.1771 |                         |                10 |              0.21771 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.118  | >20%                    |                10 |              0.3118  |