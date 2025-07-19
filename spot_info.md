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

Data correct as of 2025-07-19 01:59:29.067741, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1257 | >20%                    |                 2 |              0.06285 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1423 | 5-10%                   |                 2 |              0.07115 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1478 | <5%                     |                 5 |              0.02956 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1762 | 5-10%                   |                 2 |              0.0881  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1824 | 15-20%                  |                 5 |              0.03648 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1838 | >20%                    |                 2 |              0.0919  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1869 | 5-10%                   |                 5 |              0.03738 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2172 | >20%                    |                 2 |              0.1086  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2175 | >20%                    |                 5 |              0.0435  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.224  | >20%                    |                 5 |              0.0448  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | >20%                    |                 2 |              0.1164  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2331 | <5%                     |                 5 |              0.04662 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2379 | 5-10%                   |                 2 |              0.11895 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2402 | 15-20%                  |                 2 |              0.1201  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2482 | 15-20%                  |                 2 |              0.1241  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2526 | >20%                    |                 2 |              0.1263  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2526 | >20%                    |                10 |              0.02526 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2583 | >20%                    |                 2 |              0.12915 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.261  | >20%                    |                 2 |              0.1305  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2778 | 15-20%                  |                10 |              0.02778 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2923 | >20%                    |                 2 |              0.14615 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2998 | <5%                     |                 5 |              0.05996 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3017 | <5%                     |                 2 |              0.15085 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3065 | <5%                     |                10 |              0.03065 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3073 | >20%                    |                 2 |              0.15365 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.313  | >20%                    |                 5 |              0.0626  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3137 | >20%                    |                 2 |              0.15685 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3163 | 5-10%                   |                 2 |              0.15815 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3183 | 15-20%                  |                 2 |              0.15915 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3207 | 15-20%                  |                 2 |              0.16035 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3209 | >20%                    |                 2 |              0.16045 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3223 | 5-10%                   |                 2 |              0.16115 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3247 | 15-20%                  |                10 |              0.03247 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3276 | <5%                     |                 2 |              0.1638  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3478 | >20%                    |                 5 |              0.06956 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3492 | >20%                    |                 2 |              0.1746  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3554 | 15-20%                  |                 2 |              0.1777  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3565 | 15-20%                  |                 5 |              0.0713  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3572 | >20%                    |                 2 |              0.1786  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3774 | >20%                    |                 5 |              0.07548 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3802 | >20%                    |                 5 |              0.07604 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3907 | >20%                    |                 5 |              0.07814 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3962 | <5%                     |                 2 |              0.1981  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3975 | >20%                    |                 2 |              0.19875 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3978 | >20%                    |                 2 |              0.1989  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3996 | >20%                    |                 2 |              0.1998  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4018 | >20%                    |                 5 |              0.08036 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.404  | >20%                    |                 2 |              0.202   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.414  | >20%                    |                 2 |              0.207   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4295 | 15-20%                  |                 5 |              0.0859  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4336 | 5-10%                   |                 2 |              0.2168  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4385 | 10-15%                  |                 2 |              0.21925 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4485 | >20%                    |                 5 |              0.0897  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.454  | <5%                     |                 2 |              0.227   |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4555 | >20%                    |                 5 |              0.0911  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4649 | >20%                    |                10 |              0.04649 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4652 | 10-15%                  |                 2 |              0.2326  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4664 | >20%                    |                 5 |              0.09328 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4707 | >20%                    |                 2 |              0.23535 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4715 | 5-10%                   |                 2 |              0.23575 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4717 | >20%                    |                 5 |              0.09434 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4718 | >20%                    |                 5 |              0.09436 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4734 | >20%                    |                 2 |              0.2367  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4809 | >20%                    |                 2 |              0.24045 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4915 | >20%                    |                 2 |              0.24575 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4938 | >20%                    |                 2 |              0.2469  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4954 | >20%                    |                 5 |              0.09908 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.4963 | >20%                    |                10 |              0.04963 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.497  | >20%                    |                 5 |              0.0994  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5088 | 10-15%                  |                 5 |              0.10176 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5095 | >20%                    |                 2 |              0.25475 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5102 | <5%                     |                10 |              0.05102 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5115 | 15-20%                  |                 2 |              0.25575 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5118 | 10-15%                  |                 5 |              0.10236 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5173 | >20%                    |                 5 |              0.10346 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5197 | 5-10%                   |                 5 |              0.10394 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5221 | >20%                    |                 2 |              0.26105 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5237 | 10-15%                  |                 5 |              0.10474 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5305 | >20%                    |                 5 |              0.1061  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5311 | 5-10%                   |                 2 |              0.26555 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.549  | >20%                    |                 2 |              0.2745  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5492 | >20%                    |                 2 |              0.2746  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.55   | >20%                    |                 5 |              0.11    |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5602 | >20%                    |                 2 |              0.2801  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5686 | 5-10%                   |                 5 |              0.11372 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.571  | >20%                    |                 5 |              0.1142  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5728 | >20%                    |                10 |              0.05728 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.573  | >20%                    |                 5 |              0.1146  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5757 | 15-20%                  |                10 |              0.05757 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5828 | >20%                    |                 2 |              0.2914  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5954 | >20%                    |                 5 |              0.11908 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5996 | <5%                     |                 5 |              0.11992 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6025 | >20%                    |                 2 |              0.30125 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6055 | >20%                    |                10 |              0.06055 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.608  | 5-10%                   |                 5 |              0.1216  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6097 | >20%                    |                10 |              0.06097 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6112 | 10-15%                  |                 5 |              0.12224 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6129 | <5%                     |                 2 |              0.30645 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6171 | 15-20%                  |                10 |              0.06171 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6276 | >20%                    |                10 |              0.06276 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6341 | >20%                    |                10 |              0.06341 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6355 | >20%                    |                 2 |              0.31775 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6367 | >20%                    |                 5 |              0.12734 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6461 | >20%                    |                 5 |              0.12922 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6537 | >20%                    |                 5 |              0.13074 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6542 | >20%                    |                 5 |              0.13084 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6793 | 10-15%                  |                 2 |              0.33965 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6813 | 15-20%                  |                 5 |              0.13626 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.682  | >20%                    |                 5 |              0.1364  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6935 | >20%                    |                 5 |              0.1387  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6938 | 15-20%                  |                 2 |              0.3469  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7065 | >20%                    |                 5 |              0.1413  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7124 | >20%                    |                10 |              0.07124 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7124 | 15-20%                  |                 2 |              0.3562  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7133 | >20%                    |                 5 |              0.14266 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7145 | >20%                    |                 5 |              0.1429  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7186 | <5%                     |                10 |              0.07186 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7238 | <5%                     |                 5 |              0.14476 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7339 | 15-20%                  |                10 |              0.07339 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7724 | 15-20%                  |                10 |              0.07724 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7756 | 15-20%                  |                 5 |              0.15512 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7758 | 5-10%                   |                 5 |              0.15516 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7858 | <5%                     |                10 |              0.07858 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7895 | >20%                    |                 5 |              0.1579  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.791  | <5%                     |                10 |              0.0791  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8108 | >20%                    |                10 |              0.08108 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.812  | >20%                    |                10 |              0.0812  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8185 | 15-20%                  |                10 |              0.08185 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8261 | 15-20%                  |                10 |              0.08261 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8308 | 5-10%                   |                10 |              0.08308 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8327 | 5-10%                   |                10 |              0.08327 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8359 | >20%                    |                 5 |              0.16718 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8596 | 5-10%                   |                10 |              0.08596 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8684 | >20%                    |                 5 |              0.17368 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8782 | 5-10%                   |                 5 |              0.17564 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8783 | 15-20%                  |                10 |              0.08783 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8825 | <5%                     |                 5 |              0.1765  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9012 | <5%                     |                10 |              0.09012 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9058 | 5-10%                   |                10 |              0.09058 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9073 | >20%                    |                10 |              0.09073 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9112 | 15-20%                  |                10 |              0.09112 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9116 | 5-10%                   |                10 |              0.09116 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.942  | 15-20%                  |                10 |              0.0942  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9429 | >20%                    |                10 |              0.09429 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9431 | >20%                    |                10 |              0.09431 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9666 | >20%                    |                 2 |              0.4833  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9772 | 5-10%                   |                10 |              0.09772 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9974 | 5-10%                   |                10 |              0.09974 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0085 | >20%                    |                10 |              0.10085 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0109 | 15-20%                  |                10 |              0.10109 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0243 | >20%                    |                 5 |              0.20486 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0395 | >20%                    |                10 |              0.10395 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0467 | <5%                     |                10 |              0.10467 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0509 | <5%                     |                10 |              0.10509 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0512 | >20%                    |                 2 |              0.5256  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0561 | >20%                    |                10 |              0.10561 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0844 | >20%                    |                 5 |              0.21688 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0863 | 15-20%                  |                10 |              0.10863 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0886 | >20%                    |                10 |              0.10886 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1107 | 5-10%                   |                10 |              0.11107 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1398 | <5%                     |                 2 |              0.5699  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1501 | >20%                    |                10 |              0.11501 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1552 | >20%                    |                10 |              0.11552 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2193 | >20%                    |                10 |              0.12193 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2205 | >20%                    |                 5 |              0.2441  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2295 | >20%                    |                10 |              0.12295 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2651 | 15-20%                  |                 5 |              0.25302 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2901 | >20%                    |                10 |              0.12901 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3566 | >20%                    |                 5 |              0.27132 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3914 | >20%                    |                 2 |              0.6957  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3947 | >20%                    |                 2 |              0.69735 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.397  | >20%                    |                 5 |              0.2794  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.423  | 5-10%                   |                10 |              0.1423  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5973 | <5%                     |                 5 |              0.31946 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6182 | <5%                     |                10 |              0.16182 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6289 | 10-15%                  |                10 |              0.16289 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.7611 | 5-10%                   |                 2 |              0.88055 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7849 | >20%                    |                10 |              0.17849 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8375 | <5%                     |                10 |              0.18375 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9851 | 5-10%                   |                10 |              0.19851 |