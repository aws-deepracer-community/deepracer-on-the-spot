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

Data correct as of 2025-05-11 01:57:35.675074, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1452 | >20%                    |                 2 |              0.0726  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1768 | >20%                    |                 5 |              0.03536 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 5-10%                   |                 5 |              0.039   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2067 | >20%                    |                 5 |              0.04134 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2238 | <5%                     |                 2 |              0.1119  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2269 | >20%                    |                 2 |              0.11345 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2293 | 15-20%                  |                 2 |              0.11465 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2387 | <5%                     |                 2 |              0.11935 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2419 | <5%                     |                 5 |              0.04838 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.255  | <5%                     |                 2 |              0.1275  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.259  | >20%                    |                 2 |              0.1295  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2692 | 15-20%                  |                 2 |              0.1346  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2723 | 5-10%                   |                 5 |              0.05446 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2725 | 5-10%                   |                 2 |              0.13625 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.275  | >20%                    |                 2 |              0.1375  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2801 | >20%                    |                 2 |              0.14005 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2842 | 15-20%                  |                 5 |              0.05684 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2885 | 5-10%                   |                 2 |              0.14425 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2892 | 15-20%                  |                10 |              0.02892 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | 15-20%                  |                10 |              0.0294  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2988 | 10-15%                  |                 2 |              0.1494  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3005 | 5-10%                   |                 2 |              0.15025 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3028 | >20%                    |                 2 |              0.1514  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3029 | <5%                     |                 2 |              0.15145 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3067 | 5-10%                   |                 2 |              0.15335 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3165 | 5-10%                   |                 2 |              0.15825 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3172 | >20%                    |                 2 |              0.1586  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3228 | >20%                    |                 2 |              0.1614  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3339 | 15-20%                  |                 5 |              0.06678 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3339 | >20%                    |                 2 |              0.16695 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3379 | >20%                    |                 2 |              0.16895 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3431 | >20%                    |                 5 |              0.06862 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3448 | >20%                    |                 2 |              0.1724  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3491 | >20%                    |                 5 |              0.06982 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3496 | >20%                    |                 2 |              0.1748  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3496 | >20%                    |                10 |              0.03496 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3506 | 10-15%                  |                10 |              0.03506 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3646 | 5-10%                   |                 5 |              0.07292 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3686 | >20%                    |                 5 |              0.07372 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3689 | <5%                     |                 2 |              0.18445 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3746 | 15-20%                  |                10 |              0.03746 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3747 | >20%                    |                 2 |              0.18735 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3762 | >20%                    |                 2 |              0.1881  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3774 | >20%                    |                 2 |              0.1887  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3795 | >20%                    |                10 |              0.03795 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3842 | 10-15%                  |                 2 |              0.1921  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3855 | 10-15%                  |                10 |              0.03855 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3901 | >20%                    |                 5 |              0.07802 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3942 | 5-10%                   |                 5 |              0.07884 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3992 | >20%                    |                 2 |              0.1996  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4    | <5%                     |                 5 |              0.08    |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4079 | >20%                    |                 2 |              0.20395 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4098 | 5-10%                   |                 2 |              0.2049  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4151 | 10-15%                  |                 2 |              0.20755 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4205 | >20%                    |                 5 |              0.0841  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4292 | 10-15%                  |                 2 |              0.2146  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4392 | <5%                     |                 5 |              0.08784 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4395 | 15-20%                  |                 2 |              0.21975 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4399 | >20%                    |                 2 |              0.21995 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4419 | 15-20%                  |                 5 |              0.08838 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4442 | >20%                    |                 5 |              0.08884 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4463 | <5%                     |                 5 |              0.08926 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4508 | 10-15%                  |                10 |              0.04508 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4511 | 10-15%                  |                 5 |              0.09022 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.456  | >20%                    |                 5 |              0.0912  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.462  | >20%                    |                10 |              0.0462  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4692 | <5%                     |                 2 |              0.2346  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4696 | >20%                    |                 5 |              0.09392 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4749 | >20%                    |                 2 |              0.23745 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4753 | >20%                    |                 2 |              0.23765 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4776 | >20%                    |                 2 |              0.2388  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4776 | >20%                    |                 5 |              0.09552 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4796 | 5-10%                   |                 5 |              0.09592 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4801 | >20%                    |                 5 |              0.09602 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4824 | >20%                    |                 5 |              0.09648 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4849 | <5%                     |                10 |              0.04849 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4868 | 5-10%                   |                 5 |              0.09736 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4978 | <5%                     |                 5 |              0.09956 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4998 | >20%                    |                 5 |              0.09996 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5003 | 15-20%                  |                 5 |              0.10006 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5046 | >20%                    |                 5 |              0.10092 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5115 | >20%                    |                 2 |              0.25575 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5196 | >20%                    |                 2 |              0.2598  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5213 | 10-15%                  |                 5 |              0.10426 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5248 | >20%                    |                 2 |              0.2624  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5271 | <5%                     |                10 |              0.05271 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5308 | >20%                    |                 2 |              0.2654  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5334 | 10-15%                  |                 2 |              0.2667  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.535  | >20%                    |                 2 |              0.2675  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5609 | 5-10%                   |                 5 |              0.11218 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5654 | 10-15%                  |                 5 |              0.11308 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5716 | 10-15%                  |                10 |              0.05716 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.574  | >20%                    |                 5 |              0.1148  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5781 | >20%                    |                 5 |              0.11562 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5797 | >20%                    |                 5 |              0.11594 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5881 | >20%                    |                 2 |              0.29405 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5985 | >20%                    |                 5 |              0.1197  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6002 | >20%                    |                 5 |              0.12004 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6008 | 10-15%                  |                 2 |              0.3004  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6053 | <5%                     |                 5 |              0.12106 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6055 | >20%                    |                 2 |              0.30275 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6258 | 10-15%                  |                 5 |              0.12516 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6278 | >20%                    |                 2 |              0.3139  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6315 | 5-10%                   |                10 |              0.06315 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6384 | >20%                    |                 5 |              0.12768 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6429 | >20%                    |                 5 |              0.12858 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.648  | >20%                    |                10 |              0.0648  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6553 | 15-20%                  |                10 |              0.06553 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6728 | 15-20%                  |                 5 |              0.13456 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.678  | >20%                    |                 2 |              0.339   |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6854 | >20%                    |                 5 |              0.13708 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6995 | 10-15%                  |                 5 |              0.1399  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7058 | <5%                     |                 5 |              0.14116 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.708  | >20%                    |                 5 |              0.1416  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7165 | >20%                    |                10 |              0.07165 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7215 | >20%                    |                 5 |              0.1443  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7249 | >20%                    |                 2 |              0.36245 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7263 | 5-10%                   |                10 |              0.07263 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7332 | <5%                     |                 5 |              0.14664 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.748  | >20%                    |                10 |              0.0748  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7482 | >20%                    |                 2 |              0.3741  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7489 | >20%                    |                10 |              0.07489 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7514 | 15-20%                  |                10 |              0.07514 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7635 | 10-15%                  |                10 |              0.07635 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.771  | >20%                    |                10 |              0.0771  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7768 | >20%                    |                 2 |              0.3884  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7808 | >20%                    |                 5 |              0.15616 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7895 | <5%                     |                10 |              0.07895 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8075 | <5%                     |                 5 |              0.1615  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8169 | >20%                    |                 5 |              0.16338 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.825  | 10-15%                  |                10 |              0.0825  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8255 | >20%                    |                10 |              0.08255 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8259 | 5-10%                   |                10 |              0.08259 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8267 | 10-15%                  |                10 |              0.08267 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8289 | 15-20%                  |                10 |              0.08289 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8426 | >20%                    |                10 |              0.08426 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8517 | >20%                    |                 2 |              0.42585 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8637 | 15-20%                  |                10 |              0.08637 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8696 | 10-15%                  |                10 |              0.08696 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8738 | <5%                     |                10 |              0.08738 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8749 | >20%                    |                 2 |              0.43745 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8764 | 15-20%                  |                10 |              0.08764 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8859 | 15-20%                  |                10 |              0.08859 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.901  | >20%                    |                10 |              0.0901  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9149 | 10-15%                  |                10 |              0.09149 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9205 | >20%                    |                10 |              0.09205 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9207 | <5%                     |                 5 |              0.18414 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9209 | <5%                     |                10 |              0.09209 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9258 | >20%                    |                 5 |              0.18516 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9287 | 15-20%                  |                10 |              0.09287 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9641 | >20%                    |                 2 |              0.48205 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9682 | >20%                    |                10 |              0.09682 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9824 | 10-15%                  |                10 |              0.09824 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0159 | <5%                     |                10 |              0.10159 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0191 | >20%                    |                10 |              0.10191 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0303 | >20%                    |                 5 |              0.20606 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0335 | 15-20%                  |                 2 |              0.51675 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0378 | >20%                    |                10 |              0.10378 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0437 | >20%                    |                10 |              0.10437 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0785 | 10-15%                  |                 5 |              0.2157  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1026 | >20%                    |                 5 |              0.22052 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.147  | <5%                     |                10 |              0.1147  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1627 | >20%                    |                10 |              0.11627 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1723 | 10-15%                  |                 2 |              0.58615 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2231 | >20%                    |                10 |              0.12231 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2373 | >20%                    |                 5 |              0.24746 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2909 | <5%                     |                 5 |              0.25818 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.31   | >20%                    |                 2 |              0.655   |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3196 | >20%                    |                 5 |              0.26392 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3309 | >20%                    |                10 |              0.13309 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3409 | 15-20%                  |                10 |              0.13409 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3416 | >20%                    |                10 |              0.13416 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4675 | 15-20%                  |                10 |              0.14675 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5143 | 15-20%                  |                10 |              0.15143 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.582  | 5-10%                   |                10 |              0.1582  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8048 | >20%                    |                10 |              0.18048 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0151 | <5%                     |                10 |              0.20151 |