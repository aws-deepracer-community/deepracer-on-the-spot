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

Data correct as of 2025-03-28 01:44:45.417711, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1208 | 15-20%                  |                 2 |              0.0604  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1341 | 5-10%                   |                 5 |              0.02682 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1534 | 10-15%                  |                 2 |              0.0767  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | 10-15%                  |                 5 |              0.03178 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 5-10%                   |                 5 |              0.039   |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2026 | <5%                     |                 2 |              0.1013  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2218 | >20%                    |                 2 |              0.1109  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.229  | 15-20%                  |                 2 |              0.1145  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2316 | 15-20%                  |                10 |              0.02316 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 10-15%                  |                10 |              0.02395 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2404 | 15-20%                  |                 2 |              0.1202  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 15-20%                  |                10 |              0.02419 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.242  | >20%                    |                 2 |              0.121   |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2425 | 15-20%                  |                 2 |              0.12125 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.252  | >20%                    |                 2 |              0.126   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.254  | 10-15%                  |                 2 |              0.127   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.278  | <5%                     |                 2 |              0.139   |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2827 | 5-10%                   |                 2 |              0.14135 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2886 | <5%                     |                 2 |              0.1443  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2917 | 10-15%                  |                 2 |              0.14585 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2944 | 5-10%                   |                 2 |              0.1472  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | <5%                     |                 2 |              0.1477  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2982 | >20%                    |                 2 |              0.1491  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2991 | 10-15%                  |                10 |              0.02991 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2995 | >20%                    |                 2 |              0.14975 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | 15-20%                  |                10 |              0.0301  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3018 | 15-20%                  |                 2 |              0.1509  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3047 | >20%                    |                 2 |              0.15235 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3108 | <5%                     |                10 |              0.03108 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3169 | 10-15%                  |                 2 |              0.15845 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3202 | 10-15%                  |                 5 |              0.06404 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3338 | >20%                    |                 2 |              0.1669  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3521 | >20%                    |                 2 |              0.17605 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3522 | 10-15%                  |                 5 |              0.07044 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3539 | >20%                    |                10 |              0.03539 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3553 | >20%                    |                 2 |              0.17765 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3562 | >20%                    |                 2 |              0.1781  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3571 | 15-20%                  |                 5 |              0.07142 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3625 | 10-15%                  |                 5 |              0.0725  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3663 | >20%                    |                 5 |              0.07326 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3806 | <5%                     |                 2 |              0.1903  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3812 | >20%                    |                 2 |              0.1906  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3814 | 5-10%                   |                 5 |              0.07628 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.384  | >20%                    |                 2 |              0.192   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3899 | 10-15%                  |                10 |              0.03899 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.397  | <5%                     |                 2 |              0.1985  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.3978 | >20%                    |                 5 |              0.07956 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3986 | >20%                    |                 5 |              0.07972 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4004 | <5%                     |                 2 |              0.2002  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4011 | >20%                    |                10 |              0.04011 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4029 | 15-20%                  |                 2 |              0.20145 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4032 | 15-20%                  |                 2 |              0.2016  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4117 | >20%                    |                 2 |              0.20585 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4145 | 10-15%                  |                 2 |              0.20725 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4159 | <5%                     |                 2 |              0.20795 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4165 | >20%                    |                 5 |              0.0833  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4225 | <5%                     |                 2 |              0.21125 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4287 | 10-15%                  |                 2 |              0.21435 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4325 | >20%                    |                 2 |              0.21625 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4362 | 5-10%                   |                 5 |              0.08724 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4383 | >20%                    |                 2 |              0.21915 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4421 | >20%                    |                 5 |              0.08842 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4434 | >20%                    |                 2 |              0.2217  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4525 | >20%                    |                 2 |              0.22625 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4556 | >20%                    |                 5 |              0.09112 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4557 | >20%                    |                 5 |              0.09114 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4579 | <5%                     |                 5 |              0.09158 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4625 | 10-15%                  |                 5 |              0.0925  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4625 | 5-10%                   |                 5 |              0.0925  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.466  | 5-10%                   |                 2 |              0.233   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4667 | >20%                    |                 5 |              0.09334 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4671 | >20%                    |                 5 |              0.09342 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4673 | 10-15%                  |                 5 |              0.09346 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4714 | >20%                    |                 5 |              0.09428 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4726 | >20%                    |                 5 |              0.09452 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4748 | 5-10%                   |                 5 |              0.09496 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4838 | 5-10%                   |                 5 |              0.09676 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4838 | >20%                    |                 5 |              0.09676 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4892 | >20%                    |                 5 |              0.09784 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4929 | 5-10%                   |                 5 |              0.09858 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4945 | >20%                    |                10 |              0.04945 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4952 | 5-10%                   |                 2 |              0.2476  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4996 | >20%                    |                 2 |              0.2498  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5005 | >20%                    |                 5 |              0.1001  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5022 | >20%                    |                 5 |              0.10044 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5029 | >20%                    |                 5 |              0.10058 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5041 | >20%                    |                 2 |              0.25205 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5049 | >20%                    |                 2 |              0.25245 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5089 | >20%                    |                 2 |              0.25445 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.514  | >20%                    |                 5 |              0.1028  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5163 | 15-20%                  |                 5 |              0.10326 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5449 | >20%                    |                 2 |              0.27245 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5505 | 15-20%                  |                 2 |              0.27525 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.5509 | >20%                    |                 2 |              0.27545 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5519 | 15-20%                  |                 5 |              0.11038 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.5526 | <5%                     |                10 |              0.05526 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5547 | 15-20%                  |                 5 |              0.11094 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.561  | 15-20%                  |                 2 |              0.2805  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5615 | 10-15%                  |                 5 |              0.1123  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5641 | 10-15%                  |                 5 |              0.11282 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5644 | >20%                    |                 2 |              0.2822  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5647 | 5-10%                   |                 5 |              0.11294 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5694 | 10-15%                  |                10 |              0.05694 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5741 | <5%                     |                10 |              0.05741 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5837 | >20%                    |                 5 |              0.11674 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5849 | <5%                     |                 5 |              0.11698 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5851 | <5%                     |                 5 |              0.11702 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.5853 | <5%                     |                 5 |              0.11706 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5879 | >20%                    |                 2 |              0.29395 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6006 | >20%                    |                 5 |              0.12012 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6026 | <5%                     |                10 |              0.06026 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6116 | >20%                    |                 5 |              0.12232 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.6131 | 10-15%                  |                10 |              0.06131 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6211 | 10-15%                  |                 5 |              0.12422 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6399 | >20%                    |                10 |              0.06399 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6415 | >20%                    |                10 |              0.06415 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6666 | >20%                    |                 5 |              0.13332 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6669 | 10-15%                  |                 2 |              0.33345 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6675 | <5%                     |                 5 |              0.1335  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6788 | >20%                    |                10 |              0.06788 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6866 | 10-15%                  |                 5 |              0.13732 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6917 | >20%                    |                 5 |              0.13834 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6938 | >20%                    |                10 |              0.06938 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6942 | 5-10%                   |                10 |              0.06942 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.695  | >20%                    |                10 |              0.0695  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.698  | 15-20%                  |                 5 |              0.1396  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7014 | >20%                    |                10 |              0.07014 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7031 | <5%                     |                 2 |              0.35155 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7121 | >20%                    |                10 |              0.07121 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7127 | 5-10%                   |                10 |              0.07127 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7165 | <5%                     |                10 |              0.07165 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7222 | >20%                    |                 5 |              0.14444 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7324 | 5-10%                   |                10 |              0.07324 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7416 | 15-20%                  |                 5 |              0.14832 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7461 | <5%                     |                 5 |              0.14922 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7481 | >20%                    |                10 |              0.07481 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7575 | <5%                     |                10 |              0.07575 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.777  | >20%                    |                 5 |              0.1554  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7866 | >20%                    |                10 |              0.07866 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7898 | >20%                    |                 2 |              0.3949  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7906 | <5%                     |                10 |              0.07906 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7939 | >20%                    |                 2 |              0.39695 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7961 | >20%                    |                10 |              0.07961 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8051 | 10-15%                  |                10 |              0.08051 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.8056 | >20%                    |                10 |              0.08056 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8083 | <5%                     |                10 |              0.08083 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8162 | <5%                     |                10 |              0.08162 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8197 | 10-15%                  |                 2 |              0.40985 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.8357 | >20%                    |                10 |              0.08357 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.844  | 15-20%                  |                10 |              0.0844  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8493 | 15-20%                  |                10 |              0.08493 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8624 | 10-15%                  |                10 |              0.08624 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8637 | >20%                    |                 2 |              0.43185 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8637 | <5%                     |                10 |              0.08637 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8663 | 15-20%                  |                 5 |              0.17326 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8831 | <5%                     |                10 |              0.08831 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8997 | >20%                    |                10 |              0.08997 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9109 | >20%                    |                10 |              0.09109 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9276 | 10-15%                  |                10 |              0.09276 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9716 | 5-10%                   |                10 |              0.09716 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.003  | 10-15%                  |                10 |              0.1003  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0245 | >20%                    |                 5 |              0.2049  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0344 | >20%                    |                10 |              0.10344 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0362 | 15-20%                  |                10 |              0.10362 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0821 | <5%                     |                10 |              0.10821 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1211 | 15-20%                  |                10 |              0.11211 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1611 | >20%                    |                 5 |              0.23222 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1836 | 15-20%                  |                10 |              0.11836 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1873 | <5%                     |                10 |              0.11873 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.1919 | >20%                    |                10 |              0.11919 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2295 | >20%                    |                 2 |              0.61475 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2321 | 15-20%                  |                10 |              0.12321 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2352 | 5-10%                   |                 2 |              0.6176  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2639 | 15-20%                  |                10 |              0.12639 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2686 | <5%                     |                 5 |              0.25372 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2967 | >20%                    |                 5 |              0.25934 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4399 | >20%                    |                10 |              0.14399 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4891 | >20%                    |                 5 |              0.29782 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5319 | >20%                    |                10 |              0.15319 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5942 | >20%                    |                10 |              0.15942 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8571 | <5%                     |                10 |              0.18571 |