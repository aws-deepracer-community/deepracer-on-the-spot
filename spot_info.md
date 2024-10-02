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

Data correct as of 2024-10-02 01:36:58.934985, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1161 | <5%                     |                 2 |              0.05805 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1207 | <5%                     |                 2 |              0.06035 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.141  | 5-10%                   |                 2 |              0.0705  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1528 | 10-15%                  |                 2 |              0.0764  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1561 | 10-15%                  |                 2 |              0.07805 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.1787 | >20%                    |                 2 |              0.08935 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1894 | 5-10%                   |                 5 |              0.03788 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1987 | 10-15%                  |                 2 |              0.09935 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2099 | 15-20%                  |                 5 |              0.04198 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2142 | 10-15%                  |                 5 |              0.04284 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2171 | >20%                    |                 2 |              0.10855 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.2337 | >20%                    |                 5 |              0.04674 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2338 | >20%                    |                 2 |              0.1169  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.236  | <5%                     |                 2 |              0.118   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2362 | 15-20%                  |                 5 |              0.04724 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2408 | <5%                     |                 2 |              0.1204  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2704 | 5-10%                   |                 2 |              0.1352  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2732 | <5%                     |                 2 |              0.1366  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | >20%                    |                 5 |              0.0552  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2778 | <5%                     |                 2 |              0.1389  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2838 | <5%                     |                 2 |              0.1419  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2853 | <5%                     |                10 |              0.02853 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2887 | <5%                     |                 2 |              0.14435 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2901 | <5%                     |                 2 |              0.14505 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3014 | 15-20%                  |                 5 |              0.06028 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3022 | <5%                     |                 2 |              0.1511  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3053 | <5%                     |                10 |              0.03053 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3061 | 15-20%                  |                10 |              0.03061 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3087 | 10-15%                  |                 2 |              0.15435 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.312  | <5%                     |                 5 |              0.0624  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3196 | >20%                    |                 5 |              0.06392 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3209 | 10-15%                  |                 2 |              0.16045 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3218 | <5%                     |                 2 |              0.1609  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3325 | >20%                    |                10 |              0.03325 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3341 | 5-10%                   |                10 |              0.03341 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3402 | >20%                    |                10 |              0.03402 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3494 | >20%                    |                 5 |              0.06988 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3503 | <5%                     |                 2 |              0.17515 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.3657 | <5%                     |                10 |              0.03657 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3679 | 5-10%                   |                 2 |              0.18395 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.37   | <5%                     |                 2 |              0.185   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3716 | <5%                     |                 5 |              0.07432 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3781 | <5%                     |                 5 |              0.07562 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3804 | 5-10%                   |                 5 |              0.07608 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3815 | >20%                    |                 5 |              0.0763  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3874 | 15-20%                  |                 2 |              0.1937  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4068 | >20%                    |                 2 |              0.2034  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4162 | >20%                    |                 2 |              0.2081  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4167 | 5-10%                   |                 2 |              0.20835 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4216 | 5-10%                   |                10 |              0.04216 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4258 | 5-10%                   |                 2 |              0.2129  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4335 | 15-20%                  |                 5 |              0.0867  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4426 | 5-10%                   |                10 |              0.04426 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4447 | <5%                     |                 2 |              0.22235 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4462 | >20%                    |                 2 |              0.2231  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4557 | <5%                     |                 5 |              0.09114 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4605 | <5%                     |                 5 |              0.0921  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4619 | 10-15%                  |                 2 |              0.23095 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4643 | 10-15%                  |                 5 |              0.09286 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4706 | 15-20%                  |                 5 |              0.09412 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4815 | <5%                     |                 5 |              0.0963  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.4817 | 5-10%                   |                 5 |              0.09634 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4848 | 10-15%                  |                 2 |              0.2424  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4897 | 10-15%                  |                 5 |              0.09794 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4927 | <5%                     |                 5 |              0.09854 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4959 | <5%                     |                 5 |              0.09918 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4974 | >20%                    |                 2 |              0.2487  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5146 | 15-20%                  |                 5 |              0.10292 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5151 | <5%                     |                 5 |              0.10302 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5167 | >20%                    |                10 |              0.05167 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5173 | >20%                    |                 2 |              0.25865 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5186 | >20%                    |                 5 |              0.10372 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5268 | <5%                     |                 5 |              0.10536 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5317 | >20%                    |                 2 |              0.26585 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5338 | <5%                     |                 5 |              0.10676 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5675 | >20%                    |                 5 |              0.1135  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6087 | 15-20%                  |                 5 |              0.12174 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6165 | >20%                    |                 5 |              0.1233  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6171 | 5-10%                   |                 5 |              0.12342 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6185 | >20%                    |                 2 |              0.30925 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6239 | >20%                    |                 5 |              0.12478 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6377 | >20%                    |                10 |              0.06377 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6621 | 5-10%                   |                10 |              0.06621 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6818 | 10-15%                  |                 5 |              0.13636 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6955 | >20%                    |                 5 |              0.1391  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7096 | <5%                     |                10 |              0.07096 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7136 | >20%                    |                 2 |              0.3568  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7215 | >20%                    |                10 |              0.07215 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7284 | <5%                     |                10 |              0.07284 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7543 | >20%                    |                 5 |              0.15086 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7547 | <5%                     |                10 |              0.07547 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7555 | 15-20%                  |                10 |              0.07555 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7691 | 15-20%                  |                10 |              0.07691 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7746 | 15-20%                  |                10 |              0.07746 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7818 | >20%                    |                10 |              0.07818 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7828 | 10-15%                  |                10 |              0.07828 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.823  | 5-10%                   |                10 |              0.0823  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8265 | 10-15%                  |                10 |              0.08265 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8526 | <5%                     |                10 |              0.08526 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8537 | >20%                    |                10 |              0.08537 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.8556 | 15-20%                  |                 5 |              0.17112 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8745 | >20%                    |                 2 |              0.43725 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8821 | <5%                     |                10 |              0.08821 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8854 | >20%                    |                10 |              0.08854 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8906 | >20%                    |                10 |              0.08906 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8972 | >20%                    |                 5 |              0.17944 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9238 | 5-10%                   |                10 |              0.09238 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9266 | <5%                     |                10 |              0.09266 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9421 | 10-15%                  |                 2 |              0.47105 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9749 | 10-15%                  |                 5 |              0.19498 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0004 | 10-15%                  |                10 |              0.10004 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0291 | <5%                     |                10 |              0.10291 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0325 | 15-20%                  |                10 |              0.10325 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0491 | >20%                    |                10 |              0.10491 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.095  | <5%                     |                 2 |              0.5475  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0983 | >20%                    |                10 |              0.10983 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1609 | >20%                    |                10 |              0.11609 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1736 | >20%                    |                10 |              0.11736 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.189  | >20%                    |                 5 |              0.2378  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3936 | 10-15%                  |                10 |              0.13936 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4718 | >20%                    |                10 |              0.14718 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.686  | 5-10%                   |                10 |              0.1686  |