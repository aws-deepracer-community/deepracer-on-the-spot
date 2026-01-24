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

Data correct as of 2026-01-24 02:00:35.963584, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1209 | 10-15%                  |                 2 |              0.06045 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1543 | >20%                    |                 2 |              0.07715 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1567 | >20%                    |                 2 |              0.07835 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1573 | 15-20%                  |                 5 |              0.03146 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.1904 | <5%                     |                 5 |              0.03808 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1929 | >20%                    |                 2 |              0.09645 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1946 | >20%                    |                 2 |              0.0973  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2071 | 5-10%                   |                 2 |              0.10355 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2178 | >20%                    |                 5 |              0.04356 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2368 | 10-15%                  |                 2 |              0.1184  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2404 | 15-20%                  |                10 |              0.02404 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2546 | >20%                    |                 2 |              0.1273  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2686 | >20%                    |                 2 |              0.1343  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2699 | 10-15%                  |                 2 |              0.13495 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2872 | >20%                    |                 2 |              0.1436  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.288  | >20%                    |                 2 |              0.144   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2886 | 10-15%                  |                 2 |              0.1443  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2891 | 15-20%                  |                 2 |              0.14455 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2951 | >20%                    |                 5 |              0.05902 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3    | >20%                    |                 2 |              0.15    |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3025 | >20%                    |                 2 |              0.15125 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.3027 | >20%                    |                 2 |              0.15135 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3057 | <5%                     |                10 |              0.03057 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3077 | >20%                    |                10 |              0.03077 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3123 | >20%                    |                 2 |              0.15615 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3415 | >20%                    |                 5 |              0.0683  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3417 | 5-10%                   |                10 |              0.03417 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3425 | 5-10%                   |                 5 |              0.0685  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3489 | >20%                    |                 2 |              0.17445 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3536 | 15-20%                  |                 2 |              0.1768  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.354  | >20%                    |                 5 |              0.0708  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3563 | >20%                    |                 2 |              0.17815 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3598 | <5%                     |                 2 |              0.1799  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.362  | <5%                     |                10 |              0.0362  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3684 | 5-10%                   |                10 |              0.03684 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3789 | >20%                    |                 2 |              0.18945 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3812 | >20%                    |                 5 |              0.07624 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3825 | 15-20%                  |                 2 |              0.19125 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3838 | 15-20%                  |                 2 |              0.1919  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3859 | 15-20%                  |                 2 |              0.19295 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3859 | >20%                    |                 2 |              0.19295 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3892 | 5-10%                   |                 2 |              0.1946  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4013 | <5%                     |                 5 |              0.08026 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4029 | >20%                    |                 2 |              0.20145 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4035 | 5-10%                   |                 2 |              0.20175 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4038 | >20%                    |                 5 |              0.08076 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4088 | 5-10%                   |                 2 |              0.2044  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.409  | >20%                    |                 5 |              0.0818  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4127 | >20%                    |                 5 |              0.08254 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4141 | >20%                    |                 5 |              0.08282 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4171 | >20%                    |                 5 |              0.08342 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4179 | 10-15%                  |                 5 |              0.08358 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4225 | >20%                    |                10 |              0.04225 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4254 | 5-10%                   |                 2 |              0.2127  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4261 | >20%                    |                 5 |              0.08522 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4269 | 15-20%                  |                 5 |              0.08538 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.432  | 15-20%                  |                 2 |              0.216   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.434  | >20%                    |                 5 |              0.0868  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4363 | >20%                    |                 2 |              0.21815 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4392 | 5-10%                   |                 5 |              0.08784 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4397 | 5-10%                   |                 2 |              0.21985 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4443 | <5%                     |                 2 |              0.22215 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4526 | <5%                     |                 2 |              0.2263  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4526 | >20%                    |                 2 |              0.2263  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4546 | >20%                    |                10 |              0.04546 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.463  | <5%                     |                 5 |              0.0926  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4633 | >20%                    |                10 |              0.04633 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4638 | >20%                    |                 2 |              0.2319  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4667 | 5-10%                   |                 5 |              0.09334 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4682 | >20%                    |                 2 |              0.2341  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | >20%                    |                 5 |              0.09396 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4707 | 5-10%                   |                 2 |              0.23535 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4736 | >20%                    |                 2 |              0.2368  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4792 | <5%                     |                10 |              0.04792 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4824 | 15-20%                  |                 5 |              0.09648 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4901 | 5-10%                   |                 5 |              0.09802 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4904 | 15-20%                  |                 5 |              0.09808 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4943 | 10-15%                  |                10 |              0.04943 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4986 | >20%                    |                10 |              0.04986 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5014 | 15-20%                  |                10 |              0.05014 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.508  | >20%                    |                 2 |              0.254   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5117 | >20%                    |                 2 |              0.25585 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5135 | >20%                    |                 5 |              0.1027  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5157 | >20%                    |                 5 |              0.10314 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.53   | >20%                    |                 2 |              0.265   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5321 | >20%                    |                 5 |              0.10642 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5341 | >20%                    |                 5 |              0.10682 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5352 | >20%                    |                 5 |              0.10704 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5435 | >20%                    |                 2 |              0.27175 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5436 | <5%                     |                 5 |              0.10872 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5494 | <5%                     |                 5 |              0.10988 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5538 | >20%                    |                 2 |              0.2769  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5561 | >20%                    |                 5 |              0.11122 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.563  | 15-20%                  |                10 |              0.0563  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5692 | >20%                    |                 5 |              0.11384 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5777 | >20%                    |                 5 |              0.11554 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5835 | >20%                    |                10 |              0.05835 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5888 | <5%                     |                 2 |              0.2944  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5988 | >20%                    |                 5 |              0.11976 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5989 | >20%                    |                10 |              0.05989 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6136 | 5-10%                   |                 2 |              0.3068  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6142 | 15-20%                  |                 5 |              0.12284 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6169 | <5%                     |                 5 |              0.12338 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6179 | >20%                    |                 5 |              0.12358 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6204 | >20%                    |                 2 |              0.3102  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6242 | >20%                    |                 5 |              0.12484 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6253 | >20%                    |                10 |              0.06253 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6255 | >20%                    |                10 |              0.06255 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6292 | 5-10%                   |                 5 |              0.12584 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6414 | 15-20%                  |                10 |              0.06414 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6418 | >20%                    |                 5 |              0.12836 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6454 | <5%                     |                10 |              0.06454 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.648  | >20%                    |                10 |              0.0648  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6487 | 10-15%                  |                 5 |              0.12974 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.673  | 15-20%                  |                 2 |              0.3365  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6789 | 5-10%                   |                 5 |              0.13578 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6828 | >20%                    |                 5 |              0.13656 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6832 | >20%                    |                 2 |              0.3416  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6912 | <5%                     |                 2 |              0.3456  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6939 | >20%                    |                10 |              0.06939 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.706  | <5%                     |                 5 |              0.1412  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7193 | 10-15%                  |                 2 |              0.35965 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7193 | >20%                    |                10 |              0.07193 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7225 | >20%                    |                10 |              0.07225 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7262 | >20%                    |                 5 |              0.14524 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7272 | 10-15%                  |                10 |              0.07272 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.733  | 15-20%                  |                10 |              0.0733  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.734  | >20%                    |                 5 |              0.1468  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7424 | >20%                    |                 5 |              0.14848 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7497 | >20%                    |                10 |              0.07497 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7576 | 5-10%                   |                 2 |              0.3788  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7667 | 5-10%                   |                10 |              0.07667 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7699 | <5%                     |                10 |              0.07699 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7827 | 5-10%                   |                10 |              0.07827 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7955 | >20%                    |                 5 |              0.1591  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7959 | <5%                     |                10 |              0.07959 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8042 | <5%                     |                10 |              0.08042 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8159 | <5%                     |                 5 |              0.16318 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8204 | >20%                    |                 2 |              0.4102  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8236 | >20%                    |                10 |              0.08236 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8256 | >20%                    |                 2 |              0.4128  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8291 | >20%                    |                10 |              0.08291 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8491 | >20%                    |                 5 |              0.16982 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8647 | >20%                    |                 2 |              0.43235 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8835 | >20%                    |                 5 |              0.1767  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8839 | 15-20%                  |                10 |              0.08839 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8968 | >20%                    |                10 |              0.08968 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9038 | <5%                     |                10 |              0.09038 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9161 | >20%                    |                10 |              0.09161 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9166 | >20%                    |                10 |              0.09166 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.919  | >20%                    |                10 |              0.0919  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9304 | >20%                    |                10 |              0.09304 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9325 | >20%                    |                 5 |              0.1865  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9461 | >20%                    |                 2 |              0.47305 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9618 | >20%                    |                10 |              0.09618 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9713 | <5%                     |                10 |              0.09713 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9996 | >20%                    |                 5 |              0.19992 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0064 | >20%                    |                 2 |              0.5032  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0264 | 5-10%                   |                 5 |              0.20528 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0417 | 5-10%                   |                10 |              0.10417 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0644 | >20%                    |                10 |              0.10644 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0995 | >20%                    |                10 |              0.10995 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1143 | 15-20%                  |                10 |              0.11143 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1261 | >20%                    |                 5 |              0.22522 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1427 | >20%                    |                10 |              0.11427 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.16   | <5%                     |                10 |              0.116   |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1601 | >20%                    |                 2 |              0.58005 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1674 | >20%                    |                 5 |              0.23348 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2162 | >20%                    |                10 |              0.12162 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2338 | <5%                     |                10 |              0.12338 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2385 | >20%                    |                10 |              0.12385 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3297 | >20%                    |                10 |              0.13297 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3566 | 10-15%                  |                10 |              0.13566 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3677 | 10-15%                  |                 5 |              0.27354 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4005 | >20%                    |                 2 |              0.70025 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4767 | 10-15%                  |                 5 |              0.29534 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.5237 | 15-20%                  |                10 |              0.15237 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.524  | >20%                    |                10 |              0.1524  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5357 | 15-20%                  |                10 |              0.15357 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.7283 | 10-15%                  |                10 |              0.17283 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.3052 | <5%                     |                 5 |              0.46104 |