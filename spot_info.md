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

Data correct as of 2026-01-28 02:07:04.570584, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1406 | >20%                    |                 2 |              0.0703  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1877 | 5-10%                   |                 2 |              0.09385 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1881 | >20%                    |                 2 |              0.09405 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2107 | >20%                    |                 2 |              0.10535 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2181 | >20%                    |                 2 |              0.10905 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2187 | <5%                     |                 5 |              0.04374 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2259 | >20%                    |                 2 |              0.11295 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2318 | 10-15%                  |                 2 |              0.1159  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2385 | >20%                    |                 5 |              0.0477  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2514 | >20%                    |                 2 |              0.1257  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2545 | >20%                    |                 2 |              0.12725 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.263  | 10-15%                  |                 2 |              0.1315  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.278  | >20%                    |                 2 |              0.139   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2795 | 15-20%                  |                 2 |              0.13975 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2876 | 10-15%                  |                 2 |              0.1438  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2908 | >20%                    |                 2 |              0.1454  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2946 | <5%                     |                10 |              0.02946 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3002 | >20%                    |                 2 |              0.1501  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3008 | 5-10%                   |                10 |              0.03008 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3011 | >20%                    |                 2 |              0.15055 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.303  | >20%                    |                 5 |              0.0606  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3099 | >20%                    |                 5 |              0.06198 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3139 | >20%                    |                 2 |              0.15695 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3408 | <5%                     |                 2 |              0.1704  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3461 | >20%                    |                 2 |              0.17305 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3484 | 5-10%                   |                10 |              0.03484 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3517 | >20%                    |                10 |              0.03517 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3527 | 15-20%                  |                 2 |              0.17635 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3545 | >20%                    |                 5 |              0.0709  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3621 | 15-20%                  |                 2 |              0.18105 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3754 | 15-20%                  |                 2 |              0.1877  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.377  | >20%                    |                 5 |              0.0754  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.377  | >20%                    |                 5 |              0.0754  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3771 | >20%                    |                 5 |              0.07542 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3779 | >20%                    |                 2 |              0.18895 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3807 | 5-10%                   |                 2 |              0.19035 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3836 | 15-20%                  |                 2 |              0.1918  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3891 | 5-10%                   |                 2 |              0.19455 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.39   | >20%                    |                 2 |              0.195   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3905 | <5%                     |                 5 |              0.0781  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3988 | 5-10%                   |                 2 |              0.1994  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3999 | >20%                    |                 5 |              0.07998 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4016 | 5-10%                   |                 5 |              0.08032 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4022 | >20%                    |                 2 |              0.2011  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4034 | >20%                    |                 2 |              0.2017  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4066 | >20%                    |                 5 |              0.08132 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4085 | >20%                    |                 5 |              0.0817  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4126 | >20%                    |                10 |              0.04126 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.42   | 10-15%                  |                 5 |              0.084   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4242 | >20%                    |                 5 |              0.08484 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4259 | 5-10%                   |                 2 |              0.21295 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4307 | 15-20%                  |                 2 |              0.21535 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4317 | >20%                    |                 5 |              0.08634 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.432  | <5%                     |                 2 |              0.216   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4355 | 15-20%                  |                 5 |              0.0871  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4403 | >20%                    |                10 |              0.04403 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4423 | >20%                    |                 2 |              0.22115 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4444 | <5%                     |                 2 |              0.2222  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4455 | 5-10%                   |                 5 |              0.0891  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4482 | >20%                    |                 5 |              0.08964 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4494 | >20%                    |                 2 |              0.2247  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4515 | 5-10%                   |                 5 |              0.0903  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4519 | 5-10%                   |                 2 |              0.22595 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4552 | >20%                    |                 2 |              0.2276  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4626 | 5-10%                   |                 2 |              0.2313  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4645 | >20%                    |                10 |              0.04645 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4656 | 15-20%                  |                10 |              0.04656 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4676 | >20%                    |                 2 |              0.2338  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.47   | >20%                    |                 5 |              0.094   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4706 | 15-20%                  |                 5 |              0.09412 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4769 | >20%                    |                 2 |              0.23845 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4807 | >20%                    |                 2 |              0.24035 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4975 | >20%                    |                10 |              0.04975 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5007 | >20%                    |                 2 |              0.25035 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5028 | >20%                    |                 2 |              0.2514  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5051 | 15-20%                  |                 5 |              0.10102 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5123 | <5%                     |                10 |              0.05123 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5128 | >20%                    |                 5 |              0.10256 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5139 | <5%                     |                10 |              0.05139 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5226 | <5%                     |                 5 |              0.10452 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5241 | <5%                     |                 5 |              0.10482 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5249 | >20%                    |                 5 |              0.10498 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5251 | <5%                     |                 2 |              0.26255 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.534  | >20%                    |                 5 |              0.1068  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5352 | >20%                    |                 5 |              0.10704 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5376 | 15-20%                  |                10 |              0.05376 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5412 | >20%                    |                 5 |              0.10824 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5452 | <5%                     |                 5 |              0.10904 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5567 | >20%                    |                 2 |              0.27835 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.558  | 5-10%                   |                 5 |              0.1116  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5604 | >20%                    |                 2 |              0.2802  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.567  | >20%                    |                 2 |              0.2835  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5745 | >20%                    |                 5 |              0.1149  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5758 | >20%                    |                 5 |              0.11516 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5784 | >20%                    |                10 |              0.05784 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5797 | <5%                     |                10 |              0.05797 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5904 | >20%                    |                 5 |              0.11808 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5917 | 10-15%                  |                10 |              0.05917 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5936 | <5%                     |                 2 |              0.2968  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6023 | 5-10%                   |                 5 |              0.12046 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6127 | 5-10%                   |                 2 |              0.30635 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6156 | 15-20%                  |                 5 |              0.12312 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6178 | 15-20%                  |                10 |              0.06178 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6256 | 10-15%                  |                 5 |              0.12512 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6404 | >20%                    |                 5 |              0.12808 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6451 | >20%                    |                10 |              0.06451 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6463 | >20%                    |                 5 |              0.12926 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6484 | <5%                     |                 5 |              0.12968 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6487 | >20%                    |                10 |              0.06487 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6487 | >20%                    |                10 |              0.06487 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6522 | >20%                    |                 5 |              0.13044 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.676  | <5%                     |                 5 |              0.1352  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6811 | 5-10%                   |                 5 |              0.13622 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6867 | >20%                    |                10 |              0.06867 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6955 | >20%                    |                10 |              0.06955 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6976 | >20%                    |                10 |              0.06976 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7015 | <5%                     |                 5 |              0.1403  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7053 | >20%                    |                 5 |              0.14106 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7054 | 15-20%                  |                10 |              0.07054 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7157 | >20%                    |                 5 |              0.14314 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7374 | >20%                    |                10 |              0.07374 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7381 | 15-20%                  |                 2 |              0.36905 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7386 | 5-10%                   |                 2 |              0.3693  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7426 | >20%                    |                10 |              0.07426 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7456 | >20%                    |                 2 |              0.3728  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7541 | 10-15%                  |                10 |              0.07541 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7562 | <5%                     |                10 |              0.07562 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7706 | <5%                     |                10 |              0.07706 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7728 | >20%                    |                 5 |              0.15456 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7858 | >20%                    |                 5 |              0.15716 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7944 | 10-15%                  |                 2 |              0.3972  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7958 | >20%                    |                 5 |              0.15916 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8052 | 5-10%                   |                10 |              0.08052 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8062 | 5-10%                   |                10 |              0.08062 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8092 | <5%                     |                10 |              0.08092 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8154 | >20%                    |                 2 |              0.4077  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8242 | >20%                    |                 5 |              0.16484 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8493 | 15-20%                  |                10 |              0.08493 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8518 | >20%                    |                 2 |              0.4259  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8568 | >20%                    |                10 |              0.08568 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8743 | >20%                    |                 2 |              0.43715 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8781 | >20%                    |                10 |              0.08781 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8798 | >20%                    |                 2 |              0.4399  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.895  | >20%                    |                 5 |              0.179   |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.897  | <5%                     |                10 |              0.0897  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9075 | >20%                    |                 5 |              0.1815  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9218 | >20%                    |                10 |              0.09218 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9286 | <5%                     |                10 |              0.09286 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9296 | 5-10%                   |                 5 |              0.18592 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9327 | >20%                    |                10 |              0.09327 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9406 | >20%                    |                 5 |              0.18812 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9495 | >20%                    |                10 |              0.09495 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9587 | >20%                    |                10 |              0.09587 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9599 | >20%                    |                10 |              0.09599 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9614 | >20%                    |                 2 |              0.4807  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9704 | >20%                    |                10 |              0.09704 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.99   | >20%                    |                10 |              0.099   |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0302 | <5%                     |                10 |              0.10302 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0503 | >20%                    |                 5 |              0.21006 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0547 | 5-10%                   |                10 |              0.10547 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0918 | 15-20%                  |                10 |              0.10918 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1236 | >20%                    |                10 |              0.11236 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1329 | >20%                    |                10 |              0.11329 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1737 | >20%                    |                10 |              0.11737 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1761 | >20%                    |                10 |              0.11761 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.21   | >20%                    |                 5 |              0.242   |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2582 | 15-20%                  |                10 |              0.12582 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2753 | >20%                    |                10 |              0.12753 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2772 | <5%                     |                10 |              0.12772 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3431 | 10-15%                  |                 5 |              0.26862 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3517 | 10-15%                  |                10 |              0.13517 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3596 | >20%                    |                 2 |              0.6798  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4479 | 10-15%                  |                 5 |              0.28958 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4602 | >20%                    |                 2 |              0.7301  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4602 | >20%                    |                10 |              0.14602 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4791 | 15-20%                  |                10 |              0.14791 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0119 | 10-15%                  |                10 |              0.20119 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4556 | <5%                     |                 5 |              0.49112 |