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

Data correct as of 2025-02-24 01:41:14.176498, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1228 | >20%                    |                 2 |              0.0614  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1286 | 10-15%                  |                 2 |              0.0643  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1415 | 5-10%                   |                 5 |              0.0283  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1737 | <5%                     |                 2 |              0.08685 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1908 | <5%                     |                 5 |              0.03816 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.1958 | 10-15%                  |                 5 |              0.03916 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2132 | 5-10%                   |                 2 |              0.1066  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2155 | >20%                    |                 2 |              0.10775 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2173 | >20%                    |                 5 |              0.04346 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2192 | >20%                    |                 2 |              0.1096  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2227 | <5%                     |                 2 |              0.11135 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2262 | <5%                     |                 5 |              0.04524 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2366 | >20%                    |                 2 |              0.1183  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.241  | >20%                    |                 2 |              0.1205  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2412 | 5-10%                   |                10 |              0.02412 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2423 | >20%                    |                 2 |              0.12115 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2431 | <5%                     |                 5 |              0.04862 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2433 | >20%                    |                 2 |              0.12165 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.2438 |                         |                 2 |              0.1219  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2502 | 15-20%                  |                10 |              0.02502 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.269  | >20%                    |                 5 |              0.0538  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2708 | 5-10%                   |                 2 |              0.1354  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2786 | 5-10%                   |                 2 |              0.1393  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2818 | 15-20%                  |                 2 |              0.1409  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2819 | <5%                     |                 2 |              0.14095 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2821 | 10-15%                  |                10 |              0.02821 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2868 | >20%                    |                 2 |              0.1434  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.29   | 5-10%                   |                 5 |              0.058   |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2942 | 5-10%                   |                 2 |              0.1471  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3005 | 10-15%                  |                 2 |              0.15025 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | >20%                    |                10 |              0.0301  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.309  | 15-20%                  |                 2 |              0.1545  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3119 | <5%                     |                 2 |              0.15595 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3127 | <5%                     |                 2 |              0.15635 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3161 | <5%                     |                 2 |              0.15805 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3218 | 15-20%                  |                 5 |              0.06436 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3243 | >20%                    |                 2 |              0.16215 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3296 | 15-20%                  |                 2 |              0.1648  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3311 | 10-15%                  |                 2 |              0.16555 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.3332 |                         |                 5 |              0.06664 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3332 | <5%                     |                10 |              0.03332 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3363 | >20%                    |                 2 |              0.16815 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3381 | 5-10%                   |                10 |              0.03381 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3466 | >20%                    |                10 |              0.03466 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3582 | 15-20%                  |                 2 |              0.1791  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3589 | 15-20%                  |                10 |              0.03589 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3619 | 10-15%                  |                 5 |              0.07238 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3632 | <5%                     |                 5 |              0.07264 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3715 | <5%                     |                 2 |              0.18575 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3832 | 5-10%                   |                 5 |              0.07664 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.384  | 10-15%                  |                10 |              0.0384  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3943 | 5-10%                   |                 2 |              0.19715 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3968 | <5%                     |                 2 |              0.1984  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4003 | >20%                    |                 5 |              0.08006 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4007 | <5%                     |                 5 |              0.08014 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4013 | 5-10%                   |                 2 |              0.20065 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4059 | >20%                    |                 5 |              0.08118 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4076 | 5-10%                   |                 2 |              0.2038  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | 5-10%                   |                 2 |              0.2083  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4175 | 15-20%                  |                 2 |              0.20875 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4178 | 10-15%                  |                 2 |              0.2089  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4225 | >20%                    |                 5 |              0.0845  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4333 | >20%                    |                 2 |              0.21665 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4379 | <5%                     |                 2 |              0.21895 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4517 | >20%                    |                 2 |              0.22585 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4536 | <5%                     |                 5 |              0.09072 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4543 | >20%                    |                 5 |              0.09086 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.4703 | <5%                     |                10 |              0.04703 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4709 | 5-10%                   |                 5 |              0.09418 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | 10-15%                  |                 5 |              0.09452 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4791 | 15-20%                  |                 5 |              0.09582 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.481  | >20%                    |                 2 |              0.2405  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4878 | 5-10%                   |                 5 |              0.09756 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.493  | >20%                    |                 2 |              0.2465  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4933 | >20%                    |                 2 |              0.24665 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4995 | <5%                     |                 5 |              0.0999  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5018 | >20%                    |                 5 |              0.10036 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5034 | >20%                    |                 5 |              0.10068 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.5068 |                         |                10 |              0.05068 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5114 | >20%                    |                 2 |              0.2557  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5132 | >20%                    |                 2 |              0.2566  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5139 | >20%                    |                 2 |              0.25695 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5178 | 10-15%                  |                 5 |              0.10356 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5211 | >20%                    |                 5 |              0.10422 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5299 | <5%                     |                 2 |              0.26495 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5313 | 10-15%                  |                 5 |              0.10626 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5333 | >20%                    |                 2 |              0.26665 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5336 | <5%                     |                 5 |              0.10672 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5365 | >20%                    |                 5 |              0.1073  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5428 | 5-10%                   |                 5 |              0.10856 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5473 | >20%                    |                 2 |              0.27365 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5491 | >20%                    |                 5 |              0.10982 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5561 | 5-10%                   |                 5 |              0.11122 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5585 | 15-20%                  |                 2 |              0.27925 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5607 | >20%                    |                 2 |              0.28035 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.563  | >20%                    |                 5 |              0.1126  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5722 | 5-10%                   |                 5 |              0.11444 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.574  | >20%                    |                 2 |              0.287   |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.575  | 5-10%                   |                 2 |              0.2875  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5847 | 5-10%                   |                10 |              0.05847 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5953 | <5%                     |                 5 |              0.11906 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5968 | 15-20%                  |                10 |              0.05968 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6041 | 15-20%                  |                 5 |              0.12082 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6058 | 10-15%                  |                 5 |              0.12116 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6061 | 5-10%                   |                 5 |              0.12122 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6115 | 10-15%                  |                 5 |              0.1223  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.628  | 10-15%                  |                10 |              0.0628  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6327 | >20%                    |                 5 |              0.12654 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6457 | >20%                    |                10 |              0.06457 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6472 | >20%                    |                 5 |              0.12944 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6497 | >20%                    |                10 |              0.06497 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6593 | <5%                     |                10 |              0.06593 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6629 | 5-10%                   |                 5 |              0.13258 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6688 | >20%                    |                 2 |              0.3344  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6809 | 10-15%                  |                 5 |              0.13618 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7004 | 5-10%                   |                 5 |              0.14008 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.7052 | >20%                    |                 2 |              0.3526  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7103 | >20%                    |                 5 |              0.14206 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7254 | 5-10%                   |                10 |              0.07254 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7288 | >20%                    |                10 |              0.07288 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7372 | 5-10%                   |                 5 |              0.14744 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7378 | >20%                    |                 5 |              0.14756 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7606 | >20%                    |                10 |              0.07606 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7606 | <5%                     |                10 |              0.07606 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7651 | >20%                    |                 5 |              0.15302 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.7705 | <5%                     |                 5 |              0.1541  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.777  | >20%                    |                10 |              0.0777  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.783  | 15-20%                  |                10 |              0.0783  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7835 | >20%                    |                 5 |              0.1567  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7881 | >20%                    |                 5 |              0.15762 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7974 | 15-20%                  |                 2 |              0.3987  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7994 | 10-15%                  |                10 |              0.07994 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8005 | 5-10%                   |                10 |              0.08005 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8052 | >20%                    |                10 |              0.08052 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8095 | 5-10%                   |                 2 |              0.40475 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.819  | 15-20%                  |                10 |              0.0819  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8212 | <5%                     |                10 |              0.08212 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8424 | >20%                    |                10 |              0.08424 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.848  | >20%                    |                10 |              0.0848  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8558 | <5%                     |                10 |              0.08558 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8691 | <5%                     |                10 |              0.08691 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.876  | 10-15%                  |                10 |              0.0876  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8806 | <5%                     |                10 |              0.08806 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8884 | 5-10%                   |                10 |              0.08884 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8951 | >20%                    |                10 |              0.08951 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9179 | >20%                    |                10 |              0.09179 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.918  | 5-10%                   |                10 |              0.0918  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9358 | 10-15%                  |                10 |              0.09358 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.938  | >20%                    |                 5 |              0.1876  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9388 | >20%                    |                10 |              0.09388 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9468 | >20%                    |                 2 |              0.4734  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9556 | 5-10%                   |                10 |              0.09556 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9806 | 10-15%                  |                10 |              0.09806 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9854 | >20%                    |                10 |              0.09854 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0147 | >20%                    |                10 |              0.10147 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.0173 | 15-20%                  |                10 |              0.10173 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0328 | 15-20%                  |                10 |              0.10328 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.073  | <5%                     |                10 |              0.1073  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1012 | >20%                    |                10 |              0.11012 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.124  | 15-20%                  |                 5 |              0.2248  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1306 | 5-10%                   |                 5 |              0.22612 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1368 | 10-15%                  |                10 |              0.11368 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1424 | 10-15%                  |                 2 |              0.5712  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1661 | >20%                    |                10 |              0.11661 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1828 | 15-20%                  |                10 |              0.11828 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2317 | >20%                    |                 2 |              0.61585 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2355 | >20%                    |                 5 |              0.2471  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2595 | >20%                    |                 2 |              0.62975 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2846 | 10-15%                  |                 5 |              0.25692 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3762 | >20%                    |                10 |              0.13762 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3793 | >20%                    |                 5 |              0.27586 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4297 | >20%                    |                10 |              0.14297 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5596 | >20%                    |                10 |              0.15596 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7047 | >20%                    |                10 |              0.17047 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7941 | >20%                    |                10 |              0.17941 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0795 | 5-10%                   |                10 |              0.20795 |