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

Data correct as of 2025-06-02 01:59:06.836898, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1312 | <5%                     |                 2 |              0.0656  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1974 | >20%                    |                 2 |              0.0987  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.213  | >20%                    |                 2 |              0.1065  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2152 | >20%                    |                 5 |              0.04304 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2159 | 5-10%                   |                 5 |              0.04318 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.231  | >20%                    |                 2 |              0.1155  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2329 | 5-10%                   |                 2 |              0.11645 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | >20%                    |                10 |              0.02395 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2406 | >20%                    |                10 |              0.02406 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2424 | <5%                     |                 2 |              0.1212  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2502 | >20%                    |                 2 |              0.1251  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2534 | 10-15%                  |                 2 |              0.1267  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2594 | 10-15%                  |                 2 |              0.1297  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2622 | 15-20%                  |                 2 |              0.1311  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2661 | >20%                    |                 2 |              0.13305 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.273  | <5%                     |                 2 |              0.1365  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2764 | >20%                    |                 2 |              0.1382  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2803 | 15-20%                  |                 2 |              0.14015 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2811 | >20%                    |                 2 |              0.14055 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2818 | 15-20%                  |                 5 |              0.05636 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2971 | >20%                    |                 2 |              0.14855 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2992 | 15-20%                  |                 2 |              0.1496  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3039 | 15-20%                  |                 2 |              0.15195 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3166 | 15-20%                  |                 2 |              0.1583  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3239 | >20%                    |                 2 |              0.16195 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3388 | >20%                    |                 5 |              0.06776 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3409 | 15-20%                  |                 2 |              0.17045 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3473 | >20%                    |                 2 |              0.17365 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3492 | >20%                    |                 5 |              0.06984 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.351  | >20%                    |                 5 |              0.0702  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3571 | >20%                    |                 2 |              0.17855 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3595 | >20%                    |                10 |              0.03595 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3642 | >20%                    |                10 |              0.03642 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3672 | 10-15%                  |                 5 |              0.07344 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3705 | 15-20%                  |                 2 |              0.18525 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3713 | >20%                    |                 5 |              0.07426 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3722 | >20%                    |                 5 |              0.07444 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3723 | 5-10%                   |                 2 |              0.18615 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3737 | >20%                    |                 5 |              0.07474 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.379  | >20%                    |                 2 |              0.1895  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3791 | 15-20%                  |                 2 |              0.18955 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3794 | 15-20%                  |                 2 |              0.1897  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3886 | 5-10%                   |                 2 |              0.1943  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3962 | >20%                    |                 2 |              0.1981  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3969 | 10-15%                  |                 5 |              0.07938 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4051 | <5%                     |                 2 |              0.20255 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4081 | <5%                     |                 5 |              0.08162 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.416  | >20%                    |                 5 |              0.0832  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4167 | >20%                    |                 2 |              0.20835 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.42   | >20%                    |                 2 |              0.21    |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4251 | 10-15%                  |                 2 |              0.21255 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4297 | 15-20%                  |                 5 |              0.08594 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4308 | <5%                     |                 2 |              0.2154  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4326 | 15-20%                  |                 5 |              0.08652 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4395 | >20%                    |                 2 |              0.21975 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.442  | >20%                    |                10 |              0.0442  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4495 | >20%                    |                 5 |              0.0899  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4504 | >20%                    |                 2 |              0.2252  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4543 | 10-15%                  |                 5 |              0.09086 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4583 | <5%                     |                 5 |              0.09166 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4599 | >20%                    |                 5 |              0.09198 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4668 | >20%                    |                 2 |              0.2334  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4671 | 15-20%                  |                10 |              0.04671 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.469  | 15-20%                  |                 5 |              0.0938  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.47   | 5-10%                   |                 5 |              0.094   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.47   | >20%                    |                 2 |              0.235   |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.473  | >20%                    |                 2 |              0.2365  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4746 | 15-20%                  |                 5 |              0.09492 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4752 | >20%                    |                10 |              0.04752 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.483  | >20%                    |                 5 |              0.0966  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4834 | >20%                    |                 2 |              0.2417  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4859 | >20%                    |                 5 |              0.09718 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.486  | 5-10%                   |                 5 |              0.0972  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4928 | 15-20%                  |                 5 |              0.09856 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4934 | >20%                    |                 2 |              0.2467  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4945 | >20%                    |                 5 |              0.0989  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4955 | <5%                     |                 5 |              0.0991  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4998 | 10-15%                  |                 5 |              0.09996 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4998 | 15-20%                  |                 2 |              0.2499  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.506  | >20%                    |                 2 |              0.253   |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5065 | 15-20%                  |                10 |              0.05065 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.508  | <5%                     |                 5 |              0.1016  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5248 | >20%                    |                 2 |              0.2624  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5296 | >20%                    |                 5 |              0.10592 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.533  | >20%                    |                10 |              0.0533  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5406 | 10-15%                  |                10 |              0.05406 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5408 | >20%                    |                 5 |              0.10816 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.542  | >20%                    |                 5 |              0.1084  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5636 | 5-10%                   |                 5 |              0.11272 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5716 | 10-15%                  |                 2 |              0.2858  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5844 | >20%                    |                 5 |              0.11688 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5925 | >20%                    |                 5 |              0.1185  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5939 | 15-20%                  |                10 |              0.05939 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5981 | 5-10%                   |                 2 |              0.29905 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6105 | >20%                    |                 5 |              0.1221  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6173 | >20%                    |                 2 |              0.30865 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6173 | 5-10%                   |                 2 |              0.30865 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6182 | 10-15%                  |                 5 |              0.12364 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6197 | <5%                     |                10 |              0.06197 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6221 | >20%                    |                 2 |              0.31105 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6278 | >20%                    |                 5 |              0.12556 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6391 | <5%                     |                 5 |              0.12782 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6407 | >20%                    |                 2 |              0.32035 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6414 | >20%                    |                10 |              0.06414 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6443 | 5-10%                   |                10 |              0.06443 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6503 | >20%                    |                 5 |              0.13006 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6671 | >20%                    |                 5 |              0.13342 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.669  | >20%                    |                10 |              0.0669  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6696 | >20%                    |                 2 |              0.3348  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6726 | 10-15%                  |                10 |              0.06726 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6728 | >20%                    |                 5 |              0.13456 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.674  | >20%                    |                 2 |              0.337   |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6778 | <5%                     |                10 |              0.06778 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6803 | 15-20%                  |                 5 |              0.13606 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6822 | 10-15%                  |                 2 |              0.3411  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6852 | >20%                    |                10 |              0.06852 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6935 | 10-15%                  |                10 |              0.06935 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7092 | >20%                    |                10 |              0.07092 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.71   | 10-15%                  |                 5 |              0.142   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7135 | >20%                    |                10 |              0.07135 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7219 | <5%                     |                 5 |              0.14438 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7385 | <5%                     |                10 |              0.07385 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7445 | >20%                    |                10 |              0.07445 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7485 | 10-15%                  |                 5 |              0.1497  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7513 | >20%                    |                10 |              0.07513 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7632 | >20%                    |                 5 |              0.15264 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7651 | >20%                    |                10 |              0.07651 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7758 | >20%                    |                10 |              0.07758 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7808 | 15-20%                  |                10 |              0.07808 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7904 | >20%                    |                 5 |              0.15808 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8002 | >20%                    |                 5 |              0.16004 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8078 | 10-15%                  |                 5 |              0.16156 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8152 | >20%                    |                10 |              0.08152 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.822  | 10-15%                  |                10 |              0.0822  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.83   | >20%                    |                10 |              0.083   |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8367 | >20%                    |                10 |              0.08367 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8375 | 15-20%                  |                10 |              0.08375 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8745 | >20%                    |                10 |              0.08745 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8837 | <5%                     |                10 |              0.08837 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8851 | 5-10%                   |                10 |              0.08851 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8953 | >20%                    |                10 |              0.08953 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9082 | >20%                    |                10 |              0.09082 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9131 | 5-10%                   |                 2 |              0.45655 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9285 | >20%                    |                10 |              0.09285 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9296 | 10-15%                  |                 5 |              0.18592 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9471 | >20%                    |                10 |              0.09471 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9478 | >20%                    |                 5 |              0.18956 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9627 | >20%                    |                 2 |              0.48135 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9706 | >20%                    |                10 |              0.09706 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9749 | >20%                    |                10 |              0.09749 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9977 | <5%                     |                10 |              0.09977 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0162 | >20%                    |                 2 |              0.5081  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0163 | >20%                    |                 5 |              0.20326 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0329 | >20%                    |                 2 |              0.51645 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0355 | 10-15%                  |                 5 |              0.2071  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0453 | 15-20%                  |                10 |              0.10453 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0589 | 15-20%                  |                10 |              0.10589 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0665 | <5%                     |                10 |              0.10665 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.088  | >20%                    |                 5 |              0.2176  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0881 | <5%                     |                 2 |              0.54405 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1767 | 15-20%                  |                10 |              0.11767 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2066 | 10-15%                  |                10 |              0.12066 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2631 | 10-15%                  |                10 |              0.12631 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2756 | >20%                    |                10 |              0.12756 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2874 | 5-10%                   |                10 |              0.12874 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3027 | >20%                    |                10 |              0.13027 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3031 | >20%                    |                 2 |              0.65155 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3248 | >20%                    |                 5 |              0.26496 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3533 | 15-20%                  |                10 |              0.13533 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3588 | 5-10%                   |                10 |              0.13588 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4479 | <5%                     |                 5 |              0.28958 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4788 | >20%                    |                10 |              0.14788 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4816 | >20%                    |                10 |              0.14816 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1161 | <5%                     |                10 |              0.21161 |