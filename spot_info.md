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

Data correct as of 2026-02-20 02:32:00.955524, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1479 | >20%                    |                 2 |              0.07395 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1616 | >20%                    |                 2 |              0.0808  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2024 | >20%                    |                 5 |              0.04048 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2073 | >20%                    |                 2 |              0.10365 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2194 | >20%                    |                 2 |              0.1097  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2295 | >20%                    |                 5 |              0.0459  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2492 | 15-20%                  |                 2 |              0.1246  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2522 | >20%                    |                 2 |              0.1261  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2589 | 10-15%                  |                 2 |              0.12945 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2648 | 5-10%                   |                10 |              0.02648 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.271  | >20%                    |                 2 |              0.1355  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2774 | >20%                    |                 2 |              0.1387  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2908 | 10-15%                  |                 2 |              0.1454  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2934 | 5-10%                   |                 2 |              0.1467  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3    | >20%                    |                 2 |              0.15    |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3041 | >20%                    |                 2 |              0.15205 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3071 | >20%                    |                 2 |              0.15355 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3071 | 5-10%                   |                 2 |              0.15355 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3123 | >20%                    |                 2 |              0.15615 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3205 | <5%                     |                 5 |              0.0641  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3209 | <5%                     |                 2 |              0.16045 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3393 | >20%                    |                 5 |              0.06786 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3431 | >20%                    |                 5 |              0.06862 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3433 | >20%                    |                 5 |              0.06866 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3486 | >20%                    |                 2 |              0.1743  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3522 | >20%                    |                 2 |              0.1761  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3524 | <5%                     |                 5 |              0.07048 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3528 | >20%                    |                10 |              0.03528 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.36   | >20%                    |                 2 |              0.18    |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3601 | 5-10%                   |                 5 |              0.07202 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3632 | >20%                    |                 5 |              0.07264 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3774 | 5-10%                   |                10 |              0.03774 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3775 | >20%                    |                 5 |              0.0755  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3775 | >20%                    |                 2 |              0.18875 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3788 | >20%                    |                 2 |              0.1894  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3792 | 5-10%                   |                 2 |              0.1896  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3822 | >20%                    |                 5 |              0.07644 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3841 | >20%                    |                10 |              0.03841 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3868 | >20%                    |                 5 |              0.07736 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.388  | 15-20%                  |                 2 |              0.194   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3889 | 15-20%                  |                 2 |              0.19445 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3922 | 10-15%                  |                 2 |              0.1961  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3978 | 10-15%                  |                 5 |              0.07956 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4018 | <5%                     |                 5 |              0.08036 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.408  | <5%                     |                10 |              0.0408  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4115 | >20%                    |                 2 |              0.20575 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4145 | >20%                    |                10 |              0.04145 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4179 | >20%                    |                 2 |              0.20895 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4226 | 5-10%                   |                 2 |              0.2113  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4239 | >20%                    |                 5 |              0.08478 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4266 | >20%                    |                 2 |              0.2133  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4289 | >20%                    |                 2 |              0.21445 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4303 | >20%                    |                 5 |              0.08606 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4318 | <5%                     |                 2 |              0.2159  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4319 | <5%                     |                 2 |              0.21595 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4371 | 15-20%                  |                 5 |              0.08742 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4373 | 5-10%                   |                 2 |              0.21865 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4421 | 15-20%                  |                 2 |              0.22105 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4425 | <5%                     |                 2 |              0.22125 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4462 | >20%                    |                10 |              0.04462 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.451  | >20%                    |                 5 |              0.0902  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.454  | 5-10%                   |                 2 |              0.227   |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4544 | >20%                    |                 2 |              0.2272  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4553 | >20%                    |                 5 |              0.09106 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4577 | 15-20%                  |                 2 |              0.22885 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4586 | >20%                    |                 2 |              0.2293  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4599 | 5-10%                   |                 5 |              0.09198 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4611 | >20%                    |                 2 |              0.23055 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4649 | 5-10%                   |                 2 |              0.23245 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4682 | >20%                    |                 5 |              0.09364 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4809 | <5%                     |                10 |              0.04809 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4816 | <5%                     |                 5 |              0.09632 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4852 | >20%                    |                10 |              0.04852 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4881 | >20%                    |                10 |              0.04881 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4904 | 15-20%                  |                 2 |              0.2452  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5031 | 15-20%                  |                 5 |              0.10062 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5047 | >20%                    |                 2 |              0.25235 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5051 | >20%                    |                 5 |              0.10102 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5151 | >20%                    |                 5 |              0.10302 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5188 | >20%                    |                 2 |              0.2594  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5254 | >20%                    |                 5 |              0.10508 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5316 | >20%                    |                 2 |              0.2658  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5323 | >20%                    |                 2 |              0.26615 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5351 | >20%                    |                 5 |              0.10702 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.538  | 15-20%                  |                 5 |              0.1076  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5405 | >20%                    |                 5 |              0.1081  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5412 | <5%                     |                 5 |              0.10824 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5482 | >20%                    |                 5 |              0.10964 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5586 | >20%                    |                10 |              0.05586 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5705 | 15-20%                  |                10 |              0.05705 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5705 | >20%                    |                 5 |              0.1141  |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5818 | <5%                     |                10 |              0.05818 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5919 | <5%                     |                10 |              0.05919 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5965 | >20%                    |                10 |              0.05965 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5983 | >20%                    |                10 |              0.05983 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5992 | 5-10%                   |                 2 |              0.2996  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6009 | 15-20%                  |                 2 |              0.30045 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6143 | >20%                    |                 5 |              0.12286 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6161 | 5-10%                   |                 5 |              0.12322 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6214 | >20%                    |                 5 |              0.12428 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6251 | >20%                    |                 5 |              0.12502 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6273 | <5%                     |                 5 |              0.12546 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6348 | 15-20%                  |                10 |              0.06348 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6353 | >20%                    |                10 |              0.06353 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6408 | 10-15%                  |                 5 |              0.12816 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.641  | >20%                    |                10 |              0.0641  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6424 | 5-10%                   |                 5 |              0.12848 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6456 | >20%                    |                 2 |              0.3228  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6485 | >20%                    |                 5 |              0.1297  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6492 | >20%                    |                 5 |              0.12984 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.656  | 15-20%                  |                10 |              0.0656  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6603 | 15-20%                  |                10 |              0.06603 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6733 | 5-10%                   |                 5 |              0.13466 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6779 | 5-10%                   |                 2 |              0.33895 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6884 | <5%                     |                10 |              0.06884 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7003 | 10-15%                  |                10 |              0.07003 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7104 | >20%                    |                 5 |              0.14208 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7215 | >20%                    |                 5 |              0.1443  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.722  | <5%                     |                 2 |              0.361   |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7284 | 5-10%                   |                 5 |              0.14568 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7297 | >20%                    |                10 |              0.07297 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7348 | >20%                    |                10 |              0.07348 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7491 | >20%                    |                 5 |              0.14982 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7498 | >20%                    |                 5 |              0.14996 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7577 | >20%                    |                10 |              0.07577 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7585 | 5-10%                   |                10 |              0.07585 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7716 | 15-20%                  |                 5 |              0.15432 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7722 | >20%                    |                 2 |              0.3861  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7736 | >20%                    |                 2 |              0.3868  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7745 | <5%                     |                10 |              0.07745 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7945 |                         |                 2 |              0.39725 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8022 | >20%                    |                 2 |              0.4011  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8038 | >20%                    |                10 |              0.08038 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8098 | >20%                    |                 5 |              0.16196 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8232 | 10-15%                  |                10 |              0.08232 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8325 | >20%                    |                10 |              0.08325 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8331 | 15-20%                  |                10 |              0.08331 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8372 | >20%                    |                 2 |              0.4186  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8386 | <5%                     |                10 |              0.08386 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8391 | >20%                    |                10 |              0.08391 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.842  | <5%                     |                 5 |              0.1684  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8464 | >20%                    |                 5 |              0.16928 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8485 | >20%                    |                10 |              0.08485 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8494 | 10-15%                  |                 2 |              0.4247  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8502 | >20%                    |                 2 |              0.4251  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8517 | <5%                     |                 5 |              0.17034 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8519 | <5%                     |                10 |              0.08519 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8734 | >20%                    |                 5 |              0.17468 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8869 | <5%                     |                10 |              0.08869 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8966 | >20%                    |                 5 |              0.17932 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9051 | >20%                    |                10 |              0.09051 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9104 | 5-10%                   |                10 |              0.09104 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9274 | 15-20%                  |                10 |              0.09274 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9449 | >20%                    |                10 |              0.09449 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9454 | <5%                     |                10 |              0.09454 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9688 | >20%                    |                10 |              0.09688 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9883 | >20%                    |                10 |              0.09883 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9894 | >20%                    |                 5 |              0.19788 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0113 | >20%                    |                10 |              0.10113 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0168 | >20%                    |                 2 |              0.5084  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.028  | 5-10%                   |                 5 |              0.2056  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.047  | >20%                    |                 5 |              0.2094  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0568 | 10-15%                  |                10 |              0.10568 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.059  |                         |                 5 |              0.2118  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0689 | 5-10%                   |                10 |              0.10689 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0795 | 10-15%                  |                 5 |              0.2159  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0854 | >20%                    |                10 |              0.10854 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0979 | >20%                    |                10 |              0.10979 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1087 | >20%                    |                 5 |              0.22174 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1099 | 15-20%                  |                10 |              0.11099 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1775 | >20%                    |                 2 |              0.58875 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1878 | >20%                    |                10 |              0.11878 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2198 | >20%                    |                10 |              0.12198 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2217 | <5%                     |                10 |              0.12217 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.408  | 10-15%                  |                 5 |              0.2816  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4134 | >20%                    |                10 |              0.14134 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4488 | >20%                    |                 2 |              0.7244  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4765 | >20%                    |                10 |              0.14765 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5941 | >20%                    |                10 |              0.15941 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5951 |                         |                10 |              0.15951 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6855 | 15-20%                  |                10 |              0.16855 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1766 | 10-15%                  |                10 |              0.21766 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.5003 | <5%                     |                 5 |              0.50006 |