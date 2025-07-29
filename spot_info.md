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

Data correct as of 2025-07-29 02:22:18.347896, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.125  | 5-10%                   |                 2 |              0.0625  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1345 | >20%                    |                 2 |              0.06725 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1482 | 5-10%                   |                 2 |              0.0741  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1878 | <5%                     |                 5 |              0.03756 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1943 | >20%                    |                 2 |              0.09715 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2324 | <5%                     |                 5 |              0.04648 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2367 | >20%                    |                 2 |              0.11835 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2369 | 15-20%                  |                 2 |              0.11845 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2456 | >20%                    |                 2 |              0.1228  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2458 | 15-20%                  |                 2 |              0.1229  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2506 | >20%                    |                 2 |              0.1253  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2593 | >20%                    |                 2 |              0.12965 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2667 | >20%                    |                 2 |              0.13335 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2669 | >20%                    |                 2 |              0.13345 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2685 | 5-10%                   |                 2 |              0.13425 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2808 | 15-20%                  |                 5 |              0.05616 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.294  | >20%                    |                 5 |              0.0588  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2945 | 5-10%                   |                 5 |              0.0589  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3029 | <5%                     |                 2 |              0.15145 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3094 | >20%                    |                 5 |              0.06188 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.312  | <5%                     |                10 |              0.0312  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3207 | 15-20%                  |                 2 |              0.16035 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.322  | 5-10%                   |                 2 |              0.161   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3344 | >20%                    |                 5 |              0.06688 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3394 | >20%                    |                 2 |              0.1697  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3407 | <5%                     |                 2 |              0.17035 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3435 | 15-20%                  |                 2 |              0.17175 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3497 | 5-10%                   |                 2 |              0.17485 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3507 | >20%                    |                 5 |              0.07014 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.351  | 15-20%                  |                 2 |              0.1755  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3615 | >20%                    |                 5 |              0.0723  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3753 | >20%                    |                 5 |              0.07506 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3786 | >20%                    |                 2 |              0.1893  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.383  | >20%                    |                 2 |              0.1915  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3856 | >20%                    |                 5 |              0.07712 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3897 | >20%                    |                 2 |              0.19485 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.409  | <5%                     |                 2 |              0.2045  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4101 | >20%                    |                 2 |              0.20505 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4119 | >20%                    |                 5 |              0.08238 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4152 | 15-20%                  |                10 |              0.04152 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4153 | 15-20%                  |                10 |              0.04153 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4157 | 10-15%                  |                 2 |              0.20785 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4167 | >20%                    |                 2 |              0.20835 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4283 | >20%                    |                10 |              0.04283 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4401 | >20%                    |                 5 |              0.08802 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.445  | <5%                     |                 2 |              0.2225  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.447  | 15-20%                  |                 5 |              0.0894  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4484 | >20%                    |                 2 |              0.2242  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4499 | >20%                    |                 2 |              0.22495 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4509 | >20%                    |                 2 |              0.22545 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4522 | 5-10%                   |                 2 |              0.2261  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4573 | 15-20%                  |                10 |              0.04573 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4623 | >20%                    |                 5 |              0.09246 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.463  | <5%                     |                10 |              0.0463  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4638 | >20%                    |                 2 |              0.2319  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4682 | >20%                    |                 5 |              0.09364 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4853 | >20%                    |                 2 |              0.24265 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4874 | 5-10%                   |                 2 |              0.2437  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4905 | 10-15%                  |                 2 |              0.24525 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4906 | 10-15%                  |                 5 |              0.09812 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4945 | >20%                    |                 2 |              0.24725 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4969 | >20%                    |                 2 |              0.24845 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4972 | >20%                    |                 5 |              0.09944 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5008 | >20%                    |                 2 |              0.2504  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5043 | >20%                    |                 2 |              0.25215 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5052 | 5-10%                   |                 5 |              0.10104 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.509  | >20%                    |                 5 |              0.1018  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5203 | >20%                    |                 5 |              0.10406 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5372 | 15-20%                  |                 2 |              0.2686  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5375 | <5%                     |                 2 |              0.26875 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5411 | >20%                    |                 5 |              0.10822 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5456 | >20%                    |                 5 |              0.10912 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5561 | 10-15%                  |                 5 |              0.11122 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5564 | >20%                    |                 2 |              0.2782  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5628 | 10-15%                  |                 2 |              0.2814  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5675 | 10-15%                  |                 5 |              0.1135  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5682 | >20%                    |                 2 |              0.2841  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.5696 | 15-20%                  |                10 |              0.05696 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5707 | >20%                    |                 5 |              0.11414 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5751 | >20%                    |                 5 |              0.11502 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5787 | >20%                    |                 2 |              0.28935 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5841 | >20%                    |                 5 |              0.11682 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5912 | >20%                    |                 2 |              0.2956  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5931 | 5-10%                   |                 2 |              0.29655 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5992 | >20%                    |                 5 |              0.11984 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6005 | 5-10%                   |                 5 |              0.1201  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6047 | <5%                     |                 5 |              0.12094 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6079 | >20%                    |                 5 |              0.12158 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6143 | >20%                    |                 2 |              0.30715 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6162 | <5%                     |                10 |              0.06162 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6224 | 5-10%                   |                 5 |              0.12448 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6262 | >20%                    |                 2 |              0.3131  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6317 | >20%                    |                 5 |              0.12634 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6426 | >20%                    |                10 |              0.06426 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.649  | >20%                    |                10 |              0.0649  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6493 | >20%                    |                 5 |              0.12986 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6595 | >20%                    |                 5 |              0.1319  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6595 | 10-15%                  |                 5 |              0.1319  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6787 | >20%                    |                 5 |              0.13574 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6897 | 15-20%                  |                 2 |              0.34485 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6939 | >20%                    |                 2 |              0.34695 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6993 | >20%                    |                10 |              0.06993 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7078 | <5%                     |                 5 |              0.14156 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7079 | 15-20%                  |                 2 |              0.35395 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7232 | 5-10%                   |                 5 |              0.14464 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7259 | <5%                     |                 5 |              0.14518 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7335 | 15-20%                  |                10 |              0.07335 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7387 | >20%                    |                10 |              0.07387 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7428 | 15-20%                  |                10 |              0.07428 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7446 | >20%                    |                 5 |              0.14892 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7599 | >20%                    |                 5 |              0.15198 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7624 | >20%                    |                 5 |              0.15248 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7687 | <5%                     |                10 |              0.07687 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7773 | >20%                    |                 5 |              0.15546 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7954 | >20%                    |                 5 |              0.15908 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7993 | >20%                    |                 2 |              0.39965 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7994 | >20%                    |                10 |              0.07994 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.8059 | 15-20%                  |                 5 |              0.16118 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8241 | 5-10%                   |                10 |              0.08241 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8259 | >20%                    |                 5 |              0.16518 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8563 | >20%                    |                10 |              0.08563 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8733 | >20%                    |                10 |              0.08733 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8751 | 15-20%                  |                10 |              0.08751 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8851 | 15-20%                  |                10 |              0.08851 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8902 | >20%                    |                10 |              0.08902 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8903 | 5-10%                   |                10 |              0.08903 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8932 | 5-10%                   |                 5 |              0.17864 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8977 | 5-10%                   |                10 |              0.08977 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.899  | <5%                     |                10 |              0.0899  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9057 | >20%                    |                 5 |              0.18114 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9111 | <5%                     |                10 |              0.09111 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9366 | >20%                    |                10 |              0.09366 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9412 | 5-10%                   |                10 |              0.09412 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9535 | 15-20%                  |                 5 |              0.1907  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9632 | 5-10%                   |                10 |              0.09632 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9637 | 15-20%                  |                10 |              0.09637 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9721 | 5-10%                   |                10 |              0.09721 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9742 | 15-20%                  |                10 |              0.09742 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9867 | >20%                    |                10 |              0.09867 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9896 | <5%                     |                10 |              0.09896 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9963 | 5-10%                   |                10 |              0.09963 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9973 | 15-20%                  |                10 |              0.09973 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9991 | >20%                    |                 2 |              0.49955 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0049 | 15-20%                  |                10 |              0.10049 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0112 | >20%                    |                10 |              0.10112 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0444 | <5%                     |                10 |              0.10444 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0647 | >20%                    |                10 |              0.10647 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0711 | >20%                    |                 5 |              0.21422 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0851 | 5-10%                   |                10 |              0.10851 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1011 | >20%                    |                10 |              0.11011 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1038 | 15-20%                  |                10 |              0.11038 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1206 | >20%                    |                10 |              0.11206 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1339 | >20%                    |                10 |              0.11339 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.146  | >20%                    |                10 |              0.1146  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1548 | >20%                    |                 2 |              0.5774  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1659 | >20%                    |                10 |              0.11659 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1687 | >20%                    |                 5 |              0.23374 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.171  | >20%                    |                 5 |              0.2342  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1808 | >20%                    |                10 |              0.11808 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2347 | <5%                     |                 2 |              0.61735 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3155 | >20%                    |                 5 |              0.2631  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3211 | <5%                     |                10 |              0.13211 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3301 | >20%                    |                10 |              0.13301 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3451 | 15-20%                  |                 5 |              0.26902 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.383  | >20%                    |                 2 |              0.6915  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4126 | >20%                    |                10 |              0.14126 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4295 | 5-10%                   |                10 |              0.14295 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.5375 | >20%                    |                 5 |              0.3075  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5493 | >20%                    |                10 |              0.15493 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5797 | <5%                     |                 5 |              0.31594 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.6355 | 5-10%                   |                 2 |              0.81775 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.9384 | 10-15%                  |                10 |              0.19384 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0453 | 5-10%                   |                10 |              0.20453 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0994 | <5%                     |                10 |              0.20994 |