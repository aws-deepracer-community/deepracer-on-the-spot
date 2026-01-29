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

Data correct as of 2026-01-29 02:29:03.424342, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1404 | >20%                    |                 2 |              0.0702  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1808 | 5-10%                   |                 2 |              0.0904  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1892 | >20%                    |                 2 |              0.0946  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2091 | >20%                    |                 2 |              0.10455 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2211 | >20%                    |                 2 |              0.11055 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2271 | <5%                     |                 5 |              0.04542 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2308 | >20%                    |                 5 |              0.04616 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2323 | 10-15%                  |                 2 |              0.11615 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2373 | >20%                    |                 2 |              0.11865 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2523 | >20%                    |                 2 |              0.12615 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2542 | >20%                    |                 2 |              0.1271  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2644 | 10-15%                  |                 2 |              0.1322  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2751 | >20%                    |                 2 |              0.13755 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2774 | 15-20%                  |                 2 |              0.1387  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2895 | 10-15%                  |                 2 |              0.14475 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2896 | 5-10%                   |                10 |              0.02896 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.29   | >20%                    |                 2 |              0.145   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2962 | >20%                    |                 2 |              0.1481  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2994 | >20%                    |                 5 |              0.05988 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2997 | >20%                    |                 5 |              0.05994 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3011 | >20%                    |                 2 |              0.15055 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3115 | <5%                     |                10 |              0.03115 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3123 | >20%                    |                 2 |              0.15615 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.341  | <5%                     |                 2 |              0.1705  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3461 | >20%                    |                 2 |              0.17305 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3475 | 15-20%                  |                 2 |              0.17375 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3479 | >20%                    |                 5 |              0.06958 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3508 | 15-20%                  |                 2 |              0.1754  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3619 | 5-10%                   |                10 |              0.03619 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3625 | >20%                    |                10 |              0.03625 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.37   | >20%                    |                 5 |              0.074   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3705 | >20%                    |                 5 |              0.0741  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3741 | 15-20%                  |                 2 |              0.18705 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3746 | >20%                    |                 5 |              0.07492 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3779 | >20%                    |                 2 |              0.18895 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3807 | 5-10%                   |                 2 |              0.19035 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.383  | 15-20%                  |                 2 |              0.1915  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3876 | <5%                     |                 5 |              0.07752 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3878 | >20%                    |                 2 |              0.1939  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3933 | 5-10%                   |                 2 |              0.19665 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3983 | >20%                    |                 5 |              0.07966 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4014 | >20%                    |                 2 |              0.2007  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4024 | 5-10%                   |                 2 |              0.2012  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4057 | >20%                    |                 2 |              0.20285 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4058 | >20%                    |                10 |              0.04058 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4081 | >20%                    |                 5 |              0.08162 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4096 | 5-10%                   |                 5 |              0.08192 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4145 | >20%                    |                 5 |              0.0829  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4177 | 10-15%                  |                 5 |              0.08354 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4201 | >20%                    |                 5 |              0.08402 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4242 | >20%                    |                 5 |              0.08484 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4244 | <5%                     |                 2 |              0.2122  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.427  | 5-10%                   |                 2 |              0.2135  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4296 | 15-20%                  |                 2 |              0.2148  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4343 | 15-20%                  |                 5 |              0.08686 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4395 | >20%                    |                10 |              0.04395 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4418 | >20%                    |                 2 |              0.2209  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4422 | >20%                    |                 2 |              0.2211  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4437 | <5%                     |                 2 |              0.22185 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4439 | >20%                    |                 2 |              0.22195 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4455 | 5-10%                   |                 5 |              0.0891  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4503 | >20%                    |                 5 |              0.09006 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4507 | 5-10%                   |                 2 |              0.22535 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4515 | 5-10%                   |                 5 |              0.0903  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4572 | >20%                    |                 5 |              0.09144 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4603 | >20%                    |                10 |              0.04603 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4609 | 5-10%                   |                 2 |              0.23045 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4611 | 15-20%                  |                10 |              0.04611 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.469  | >20%                    |                 2 |              0.2345  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4737 | 15-20%                  |                 5 |              0.09474 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4803 | >20%                    |                 2 |              0.24015 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4877 | >20%                    |                 2 |              0.24385 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4902 | <5%                     |                10 |              0.04902 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4963 | 15-20%                  |                 5 |              0.09926 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4965 | >20%                    |                 2 |              0.24825 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5028 | >20%                    |                 2 |              0.2514  |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5061 | <5%                     |                 2 |              0.25305 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5107 | >20%                    |                 5 |              0.10214 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5164 | 15-20%                  |                10 |              0.05164 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5165 | <5%                     |                 5 |              0.1033  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5165 | >20%                    |                10 |              0.05165 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5232 | >20%                    |                 5 |              0.10464 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5244 | >20%                    |                 5 |              0.10488 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5305 | >20%                    |                 5 |              0.1061  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5398 | <5%                     |                 5 |              0.10796 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5403 | <5%                     |                10 |              0.05403 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5433 | >20%                    |                 5 |              0.10866 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5471 | <5%                     |                 5 |              0.10942 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5485 | >20%                    |                 2 |              0.27425 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5512 | >20%                    |                 2 |              0.2756  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5671 | >20%                    |                 5 |              0.11342 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5698 | >20%                    |                 2 |              0.2849  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5701 | >20%                    |                10 |              0.05701 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5708 | 10-15%                  |                10 |              0.05708 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5721 | <5%                     |                10 |              0.05721 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5734 | 5-10%                   |                 5 |              0.11468 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5745 | >20%                    |                 5 |              0.1149  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.577  | >20%                    |                 5 |              0.1154  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5926 | <5%                     |                 2 |              0.2963  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6032 | 5-10%                   |                 5 |              0.12064 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6084 | 5-10%                   |                 2 |              0.3042  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6125 | 15-20%                  |                 5 |              0.1225  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6134 | 15-20%                  |                10 |              0.06134 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6261 | 10-15%                  |                 5 |              0.12522 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6404 | >20%                    |                 5 |              0.12808 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6409 | >20%                    |                10 |              0.06409 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6436 | >20%                    |                 5 |              0.12872 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6492 | <5%                     |                 5 |              0.12984 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6521 | >20%                    |                 5 |              0.13042 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6542 | <5%                     |                 5 |              0.13084 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6746 | >20%                    |                10 |              0.06746 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6779 | 5-10%                   |                 5 |              0.13558 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6839 | >20%                    |                10 |              0.06839 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.696  | >20%                    |                10 |              0.0696  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6967 | 15-20%                  |                10 |              0.06967 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6976 | >20%                    |                10 |              0.06976 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7047 | >20%                    |                10 |              0.07047 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7076 | <5%                     |                 5 |              0.14152 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.708  | >20%                    |                 5 |              0.1416  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7097 | >20%                    |                 5 |              0.14194 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7308 | 5-10%                   |                 2 |              0.3654  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7354 | >20%                    |                10 |              0.07354 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.737  | >20%                    |                 2 |              0.3685  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7397 | 15-20%                  |                 2 |              0.36985 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7426 | >20%                    |                10 |              0.07426 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7602 | <5%                     |                10 |              0.07602 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7658 | <5%                     |                10 |              0.07658 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7718 | 10-15%                  |                10 |              0.07718 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7929 | >20%                    |                 5 |              0.15858 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7961 | >20%                    |                 5 |              0.15922 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7977 | >20%                    |                 5 |              0.15954 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7978 | 10-15%                  |                 2 |              0.3989  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8079 | >20%                    |                 2 |              0.40395 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8083 | <5%                     |                10 |              0.08083 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.809  | 5-10%                   |                10 |              0.0809  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8166 | >20%                    |                 5 |              0.16332 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.829  | 5-10%                   |                10 |              0.0829  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.843  | >20%                    |                 2 |              0.4215  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8493 | 15-20%                  |                10 |              0.08493 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8507 | >20%                    |                 2 |              0.42535 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8591 | >20%                    |                10 |              0.08591 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8614 | >20%                    |                 5 |              0.17228 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8696 | >20%                    |                 2 |              0.4348  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8727 | <5%                     |                10 |              0.08727 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.904  | >20%                    |                 5 |              0.1808  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9145 | 5-10%                   |                 5 |              0.1829  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9193 | >20%                    |                10 |              0.09193 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9218 | >20%                    |                10 |              0.09218 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.924  | >20%                    |                 2 |              0.462   |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9271 | <5%                     |                10 |              0.09271 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.936  | >20%                    |                10 |              0.0936  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9368 | >20%                    |                10 |              0.09368 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9381 | >20%                    |                 5 |              0.18762 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9529 | >20%                    |                10 |              0.09529 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9621 | >20%                    |                10 |              0.09621 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9759 | >20%                    |                10 |              0.09759 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9928 | <5%                     |                10 |              0.09928 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9965 | >20%                    |                10 |              0.09965 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0379 | >20%                    |                 5 |              0.20758 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.06   | 5-10%                   |                10 |              0.106   |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0723 | 15-20%                  |                10 |              0.10723 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1147 | >20%                    |                10 |              0.11147 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.119  | >20%                    |                10 |              0.1119  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.167  | >20%                    |                10 |              0.1167  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1761 | >20%                    |                10 |              0.11761 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2174 | >20%                    |                 5 |              0.24348 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.238  | 15-20%                  |                10 |              0.1238  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2777 | >20%                    |                10 |              0.12777 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2894 | <5%                     |                10 |              0.12894 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3398 | 10-15%                  |                10 |              0.13398 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3431 | 10-15%                  |                 5 |              0.26862 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3826 | >20%                    |                 2 |              0.6913  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4345 | 10-15%                  |                 5 |              0.2869  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4482 | >20%                    |                10 |              0.14482 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4572 | >20%                    |                 2 |              0.7286  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5208 | 15-20%                  |                10 |              0.15208 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0416 | 10-15%                  |                10 |              0.20416 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4541 | <5%                     |                 5 |              0.49082 |