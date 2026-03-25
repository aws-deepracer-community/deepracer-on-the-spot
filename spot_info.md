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

Data correct as of 2026-03-25 02:38:11.076752, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1115 | >20%                    |                 2 |              0.05575 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1292 | >20%                    |                 2 |              0.0646  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1354 | <5%                     |                 2 |              0.0677  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1586 | 10-15%                  |                 5 |              0.03172 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1925 | >20%                    |                 2 |              0.09625 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1994 | 15-20%                  |                 2 |              0.0997  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2105 | 15-20%                  |                 2 |              0.10525 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2117 | 10-15%                  |                 5 |              0.04234 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2291 | >20%                    |                 2 |              0.11455 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2411 | 10-15%                  |                10 |              0.02411 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2413 | >20%                    |                 2 |              0.12065 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2427 | >20%                    |                 2 |              0.12135 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2436 | >20%                    |                 2 |              0.1218  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2578 | 5-10%                   |                10 |              0.02578 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2588 | 10-15%                  |                 2 |              0.1294  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2603 | >20%                    |                 2 |              0.13015 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2638 | 15-20%                  |                 5 |              0.05276 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2698 | >20%                    |                 2 |              0.1349  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2808 | 15-20%                  |                 2 |              0.1404  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | >20%                    |                10 |              0.02887 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.294  | 5-10%                   |                 2 |              0.147   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2962 | >20%                    |                10 |              0.02962 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.2983 | 10-15%                  |                 2 |              0.14915 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2993 | >20%                    |                 5 |              0.05986 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2998 | >20%                    |                 5 |              0.05996 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3008 | 10-15%                  |                 2 |              0.1504  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3062 | >20%                    |                 2 |              0.1531  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3126 | >20%                    |                 2 |              0.1563  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3133 | >20%                    |                 5 |              0.06266 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3146 | >20%                    |                10 |              0.03146 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3186 | >20%                    |                10 |              0.03186 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.324  | 5-10%                   |                10 |              0.0324  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3249 | <5%                     |                 2 |              0.16245 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3253 | <5%                     |                 5 |              0.06506 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3375 | <5%                     |                 2 |              0.16875 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3452 | 15-20%                  |                 5 |              0.06904 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3466 | >20%                    |                 5 |              0.06932 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3471 | >20%                    |                 5 |              0.06942 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3475 | >20%                    |                 2 |              0.17375 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3527 | 10-15%                  |                 2 |              0.17635 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3553 | <5%                     |                 2 |              0.17765 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3568 | 15-20%                  |                 5 |              0.07136 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3569 | >20%                    |                10 |              0.03569 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3673 | 15-20%                  |                 2 |              0.18365 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3692 | >20%                    |                 2 |              0.1846  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3719 | 10-15%                  |                 5 |              0.07438 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3721 | >20%                    |                 5 |              0.07442 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3743 | >20%                    |                 5 |              0.07486 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3752 | >20%                    |                 2 |              0.1876  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3799 | <5%                     |                 5 |              0.07598 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3831 | 15-20%                  |                10 |              0.03831 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3955 | <5%                     |                10 |              0.03955 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4037 | >20%                    |                 5 |              0.08074 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4039 | 10-15%                  |                 2 |              0.20195 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4123 | 15-20%                  |                 2 |              0.20615 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4131 | 10-15%                  |                 2 |              0.20655 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.415  | >20%                    |                 2 |              0.2075  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4222 | <5%                     |                 5 |              0.08444 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4233 | <5%                     |                10 |              0.04233 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4235 | >20%                    |                 2 |              0.21175 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4255 | >20%                    |                 5 |              0.0851  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4267 | <5%                     |                 2 |              0.21335 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4303 | >20%                    |                 5 |              0.08606 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4309 | >20%                    |                 5 |              0.08618 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.431  | >20%                    |                 2 |              0.2155  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4384 | 15-20%                  |                 2 |              0.2192  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4416 | >20%                    |                 2 |              0.2208  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4429 | >20%                    |                 2 |              0.22145 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.4441 | <5%                     |                10 |              0.04441 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4472 | 15-20%                  |                10 |              0.04472 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.4483 | >20%                    |                 2 |              0.22415 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4484 | >20%                    |                 5 |              0.08968 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4536 | >20%                    |                 5 |              0.09072 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.455  | >20%                    |                 5 |              0.091   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4564 | >20%                    |                 2 |              0.2282  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4621 | >20%                    |                 5 |              0.09242 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4633 | >20%                    |                10 |              0.04633 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4635 | 5-10%                   |                10 |              0.04635 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4663 | >20%                    |                 2 |              0.23315 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4821 | >20%                    |                 5 |              0.09642 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4834 | >20%                    |                 5 |              0.09668 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4851 | >20%                    |                 2 |              0.24255 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.4851 | >20%                    |                 5 |              0.09702 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4887 | <5%                     |                10 |              0.04887 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4933 | >20%                    |                 5 |              0.09866 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4954 | >20%                    |                 5 |              0.09908 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4998 | >20%                    |                 5 |              0.09996 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5015 | >20%                    |                 2 |              0.25075 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5124 | >20%                    |                 5 |              0.10248 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5129 | 15-20%                  |                 5 |              0.10258 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5188 | >20%                    |                 2 |              0.2594  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5215 | 15-20%                  |                 2 |              0.26075 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5228 | >20%                    |                 5 |              0.10456 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5274 | >20%                    |                 5 |              0.10548 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5409 | >20%                    |                10 |              0.05409 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5469 | >20%                    |                10 |              0.05469 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5517 | 5-10%                   |                 5 |              0.11034 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5555 | >20%                    |                10 |              0.05555 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5583 | >20%                    |                 5 |              0.11166 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5654 | >20%                    |                 2 |              0.2827  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5667 | >20%                    |                10 |              0.05667 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5733 | >20%                    |                 2 |              0.28665 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5803 | 15-20%                  |                10 |              0.05803 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5832 | >20%                    |                 5 |              0.11664 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5887 | 10-15%                  |                10 |              0.05887 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5896 | 5-10%                   |                 2 |              0.2948  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5905 | 10-15%                  |                 5 |              0.1181  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5915 | >20%                    |                 5 |              0.1183  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.592  | >20%                    |                10 |              0.0592  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.593  | <5%                     |                10 |              0.0593  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5953 | >20%                    |                 5 |              0.11906 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5984 | >20%                    |                10 |              0.05984 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6121 | >20%                    |                 5 |              0.12242 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.614  | >20%                    |                 2 |              0.307   |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6191 | >20%                    |                 5 |              0.12382 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6324 | 10-15%                  |                 2 |              0.3162  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6379 | >20%                    |                 5 |              0.12758 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6477 | >20%                    |                 2 |              0.32385 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6513 | >20%                    |                 5 |              0.13026 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6583 | >20%                    |                10 |              0.06583 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6705 | >20%                    |                10 |              0.06705 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6738 | 5-10%                   |                 5 |              0.13476 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6832 | >20%                    |                 5 |              0.13664 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6899 | 5-10%                   |                10 |              0.06899 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6986 | >20%                    |                10 |              0.06986 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6986 | >20%                    |                10 |              0.06986 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.7027 | <5%                     |                 2 |              0.35135 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7027 | >20%                    |                 2 |              0.35135 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7102 | 5-10%                   |                 2 |              0.3551  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7111 | >20%                    |                10 |              0.07111 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7252 | >20%                    |                 5 |              0.14504 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7333 | >20%                    |                 5 |              0.14666 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7363 | >20%                    |                10 |              0.07363 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7396 | >20%                    |                 5 |              0.14792 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7559 | >20%                    |                10 |              0.07559 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7679 | >20%                    |                10 |              0.07679 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7728 | >20%                    |                 5 |              0.15456 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7842 | >20%                    |                 5 |              0.15684 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8002 | >20%                    |                10 |              0.08002 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8102 | >20%                    |                 5 |              0.16204 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8125 | 5-10%                   |                 2 |              0.40625 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8207 | >20%                    |                10 |              0.08207 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8264 | >20%                    |                 2 |              0.4132  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8292 | >20%                    |                10 |              0.08292 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.832  | >20%                    |                 5 |              0.1664  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8357 | >20%                    |                10 |              0.08357 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8383 | 5-10%                   |                10 |              0.08383 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8502 | >20%                    |                 5 |              0.17004 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8893 | >20%                    |                 2 |              0.44465 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8918 | >20%                    |                10 |              0.08918 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8967 | >20%                    |                10 |              0.08967 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9047 | >20%                    |                10 |              0.09047 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9078 | 15-20%                  |                10 |              0.09078 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9291 | <5%                     |                 5 |              0.18582 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9417 | >20%                    |                 2 |              0.47085 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9468 | >20%                    |                10 |              0.09468 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9561 | >20%                    |                10 |              0.09561 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9574 | 15-20%                  |                10 |              0.09574 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.959  | 10-15%                  |                10 |              0.0959  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9635 | >20%                    |                 2 |              0.48175 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9681 | >20%                    |                10 |              0.09681 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9904 | >20%                    |                10 |              0.09904 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9905 | 5-10%                   |                10 |              0.09905 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0143 | 15-20%                  |                10 |              0.10143 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0301 | >20%                    |                10 |              0.10301 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0305 | >20%                    |                 5 |              0.2061  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.0576 | >20%                    |                 5 |              0.21152 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0649 | >20%                    |                10 |              0.10649 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0814 | >20%                    |                10 |              0.10814 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1113 | 10-15%                  |                 2 |              0.55565 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1858 | >20%                    |                 5 |              0.23716 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1934 | 10-15%                  |                10 |              0.11934 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.2017 | <5%                     |                 2 |              0.60085 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2302 | >20%                    |                10 |              0.12302 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2365 | >20%                    |                 5 |              0.2473  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2448 | >20%                    |                 5 |              0.24896 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.3133 | <5%                     |                 5 |              0.26266 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3139 | 5-10%                   |                 2 |              0.65695 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3161 | 15-20%                  |                10 |              0.13161 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3261 | >20%                    |                 2 |              0.66305 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3878 | >20%                    |                10 |              0.13878 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4548 | 15-20%                  |                10 |              0.14548 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4633 | 15-20%                  |                 5 |              0.29266 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.916  | >20%                    |                10 |              0.1916  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.4272 | <5%                     |                10 |              0.24272 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.5665 | >20%                    |                10 |              0.25665 |