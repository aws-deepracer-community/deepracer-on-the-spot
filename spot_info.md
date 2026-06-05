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

Data correct as of 2026-06-05 04:10:28.426386, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1329 | >20%                    |                 2 |              0.06645 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1561 | 15-20%                  |                 2 |              0.07805 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1677 | >20%                    |                 2 |              0.08385 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.1991 | 10-15%                  |                 2 |              0.09955 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.203  | >20%                    |                 2 |              0.1015  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2103 | >20%                    |                 2 |              0.10515 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2108 | 15-20%                  |                 2 |              0.1054  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2178 | >20%                    |                 2 |              0.1089  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2258 | 15-20%                  |                 5 |              0.04516 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2296 | 15-20%                  |                 5 |              0.04592 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2338 | >20%                    |                 2 |              0.1169  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2403 | >20%                    |                 2 |              0.12015 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2493 | >20%                    |                 2 |              0.12465 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2546 | >20%                    |                10 |              0.02546 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2552 | >20%                    |                 2 |              0.1276  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2573 | >20%                    |                 5 |              0.05146 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2746 | >20%                    |                 5 |              0.05492 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2797 | >20%                    |                 5 |              0.05594 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2847 | >20%                    |                 2 |              0.14235 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2897 | 5-10%                   |                10 |              0.02897 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.292  | 15-20%                  |                 2 |              0.146   |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3046 | >20%                    |                 2 |              0.1523  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3081 | >20%                    |                 5 |              0.06162 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.31   | >20%                    |                 5 |              0.062   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3131 | >20%                    |                10 |              0.03131 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3172 | 10-15%                  |                 2 |              0.1586  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3198 | 15-20%                  |                 5 |              0.06396 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3307 | >20%                    |                 2 |              0.16535 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3335 | <5%                     |                 2 |              0.16675 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3422 | 10-15%                  |                 2 |              0.1711  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3439 | >20%                    |                 2 |              0.17195 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3456 | >20%                    |                 2 |              0.1728  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3471 | >20%                    |                 5 |              0.06942 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3537 | >20%                    |                 5 |              0.07074 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3745 | >20%                    |                 5 |              0.0749  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3804 | >20%                    |                 2 |              0.1902  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3809 | 5-10%                   |                10 |              0.03809 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3832 | >20%                    |                 5 |              0.07664 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3909 | >20%                    |                 5 |              0.07818 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.395  | >20%                    |                 5 |              0.079   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3955 | >20%                    |                 5 |              0.0791  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3975 | >20%                    |                 5 |              0.0795  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3995 | >20%                    |                 5 |              0.0799  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4023 | >20%                    |                10 |              0.04023 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4062 | >20%                    |                 5 |              0.08124 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4121 | 10-15%                  |                 2 |              0.20605 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4198 | >20%                    |                 2 |              0.2099  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4213 | <5%                     |                 2 |              0.21065 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4245 | >20%                    |                 2 |              0.21225 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4313 | 15-20%                  |                 2 |              0.21565 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4366 | >20%                    |                10 |              0.04366 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4426 | >20%                    |                 2 |              0.2213  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4543 | 15-20%                  |                 5 |              0.09086 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4576 | >20%                    |                 5 |              0.09152 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.4636 |                         |                 2 |              0.2318  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4644 | >20%                    |                 2 |              0.2322  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4692 | <5%                     |                 2 |              0.2346  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4757 | >20%                    |                 5 |              0.09514 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4759 | 5-10%                   |                 2 |              0.23795 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.4841 | >20%                    |                10 |              0.04841 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4927 | >20%                    |                 5 |              0.09854 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4944 | >20%                    |                 5 |              0.09888 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4978 | >20%                    |                 5 |              0.09956 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5003 | 15-20%                  |                 2 |              0.25015 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5021 | 5-10%                   |                 5 |              0.10042 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5023 | >20%                    |                 2 |              0.25115 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5242 | >20%                    |                 5 |              0.10484 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5295 | 10-15%                  |                 2 |              0.26475 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5331 | 5-10%                   |                 2 |              0.26655 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5428 | 10-15%                  |                 5 |              0.10856 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5456 | >20%                    |                 2 |              0.2728  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5509 | 15-20%                  |                 2 |              0.27545 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5524 | >20%                    |                 2 |              0.2762  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.558  | >20%                    |                 2 |              0.279   |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5607 | <5%                     |                 5 |              0.11214 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5737 | >20%                    |                 2 |              0.28685 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5786 | 10-15%                  |                10 |              0.05786 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5984 | >20%                    |                10 |              0.05984 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6085 | >20%                    |                10 |              0.06085 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6192 | 15-20%                  |                10 |              0.06192 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6222 | >20%                    |                 5 |              0.12444 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.629  | >20%                    |                 5 |              0.1258  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.634  | >20%                    |                 5 |              0.1268  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6377 | 15-20%                  |                10 |              0.06377 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6389 | 5-10%                   |                10 |              0.06389 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.645  | >20%                    |                 2 |              0.3225  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6452 | 15-20%                  |                10 |              0.06452 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.653  | >20%                    |                10 |              0.0653  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.653  | >20%                    |                 5 |              0.1306  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6555 | >20%                    |                 5 |              0.1311  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6573 | >20%                    |                 5 |              0.13146 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6575 | >20%                    |                10 |              0.06575 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6717 | >20%                    |                 5 |              0.13434 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6922 | >20%                    |                 5 |              0.13844 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6937 | 5-10%                   |                10 |              0.06937 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7002 | >20%                    |                10 |              0.07002 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7006 | >20%                    |                 5 |              0.14012 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7079 | 15-20%                  |                10 |              0.07079 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7137 | >20%                    |                 2 |              0.35685 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7176 | >20%                    |                10 |              0.07176 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7335 | >20%                    |                 2 |              0.36675 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7386 | >20%                    |                 2 |              0.3693  |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7433 |                         |                 5 |              0.14866 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7678 | >20%                    |                10 |              0.07678 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.7678 |                         |                10 |              0.07678 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7957 | >20%                    |                 5 |              0.15914 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7958 | >20%                    |                10 |              0.07958 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8028 | >20%                    |                10 |              0.08028 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8196 | >20%                    |                 5 |              0.16392 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8311 | >20%                    |                10 |              0.08311 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8323 | >20%                    |                 5 |              0.16646 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8327 | >20%                    |                10 |              0.08327 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8457 | >20%                    |                10 |              0.08457 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8459 |                         |                 2 |              0.42295 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8495 | 10-15%                  |                 2 |              0.42475 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8496 | >20%                    |                 5 |              0.16992 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8512 | >20%                    |                10 |              0.08512 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8586 | 15-20%                  |                10 |              0.08586 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8607 | >20%                    |                10 |              0.08607 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8757 | >20%                    |                10 |              0.08757 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9113 | 5-10%                   |                 2 |              0.45565 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9168 | >20%                    |                 5 |              0.18336 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9382 | >20%                    |                10 |              0.09382 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9433 | 5-10%                   |                10 |              0.09433 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.949  | >20%                    |                10 |              0.0949  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.9497 | >20%                    |                10 |              0.09497 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9596 | 5-10%                   |                 5 |              0.19192 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9607 | >20%                    |                 5 |              0.19214 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9737 | >20%                    |                 5 |              0.19474 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9956 | >20%                    |                10 |              0.09956 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9963 | >20%                    |                10 |              0.09963 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9983 | >20%                    |                 5 |              0.19966 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9991 | >20%                    |                 2 |              0.49955 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0222 | >20%                    |                10 |              0.10222 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0313 |                         |                 5 |              0.20626 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0332 | >20%                    |                10 |              0.10332 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0608 | >20%                    |                10 |              0.10608 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0804 | >20%                    |                 5 |              0.21608 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.13   | >20%                    |                10 |              0.113   |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1475 | 15-20%                  |                10 |              0.11475 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1545 | 15-20%                  |                10 |              0.11545 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.2026 | 5-10%                   |                 2 |              0.6013  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.238  | 10-15%                  |                 2 |              0.619   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3074 | >20%                    |                10 |              0.13074 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3077 | 15-20%                  |                 5 |              0.26154 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3539 | >20%                    |                10 |              0.13539 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4092 |                         |                10 |              0.14092 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4276 | 10-15%                  |                10 |              0.14276 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4396 | >20%                    |                 5 |              0.28792 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.528  | 15-20%                  |                10 |              0.1528  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.6141 | >20%                    |                 5 |              0.32282 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0301 | >20%                    |                10 |              0.20301 |