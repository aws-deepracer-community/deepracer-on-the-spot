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

Data correct as of 2025-08-01 02:23:47.703784, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1121 | 5-10%                   |                 2 |              0.05605 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1169 | >20%                    |                 2 |              0.05845 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1335 | 5-10%                   |                 2 |              0.06675 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1618 | <5%                     |                 5 |              0.03236 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.172  | >20%                    |                 2 |              0.086   |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2048 | <5%                     |                 5 |              0.04096 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2231 | >20%                    |                 2 |              0.11155 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2444 | 15-20%                  |                 2 |              0.1222  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2445 | 15-20%                  |                 2 |              0.12225 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2524 | 15-20%                  |                 5 |              0.05048 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.259  | >20%                    |                 2 |              0.1295  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2592 | >20%                    |                 5 |              0.05184 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2604 | <5%                     |                10 |              0.02604 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2629 | >20%                    |                 2 |              0.13145 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2631 | >20%                    |                 2 |              0.13155 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2704 | >20%                    |                 2 |              0.1352  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2716 | >20%                    |                 2 |              0.1358  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2723 | 5-10%                   |                 2 |              0.13615 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3129 | <5%                     |                 2 |              0.15645 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3214 | 15-20%                  |                 2 |              0.1607  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3234 | 5-10%                   |                 2 |              0.1617  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3239 | 5-10%                   |                 5 |              0.06478 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3375 | >20%                    |                 2 |              0.16875 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3438 | 15-20%                  |                 2 |              0.1719  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3444 | >20%                    |                 5 |              0.06888 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3455 | <5%                     |                 2 |              0.17275 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3491 | >20%                    |                 2 |              0.17455 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3494 | 5-10%                   |                 2 |              0.1747  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.354  | >20%                    |                 5 |              0.0708  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.357  | 15-20%                  |                 2 |              0.1785  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.362  | >20%                    |                 5 |              0.0724  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3708 | >20%                    |                 2 |              0.1854  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3738 | >20%                    |                 5 |              0.07476 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.386  | >20%                    |                 2 |              0.193   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3893 | 15-20%                  |                10 |              0.03893 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3967 | >20%                    |                 5 |              0.07934 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3996 | >20%                    |                 2 |              0.1998  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4089 | 10-15%                  |                 2 |              0.20445 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4112 | <5%                     |                 2 |              0.2056  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4274 | >20%                    |                 5 |              0.08548 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4346 | >20%                    |                 5 |              0.08692 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4442 | <5%                     |                 2 |              0.2221  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4474 | >20%                    |                 2 |              0.2237  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.448  | 15-20%                  |                10 |              0.0448  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4491 | 5-10%                   |                 2 |              0.22455 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4495 | >20%                    |                 2 |              0.22475 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4599 | >20%                    |                 5 |              0.09198 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4638 | 15-20%                  |                 5 |              0.09276 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4653 | >20%                    |                 5 |              0.09306 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4699 | 5-10%                   |                 2 |              0.23495 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4703 | >20%                    |                 2 |              0.23515 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4827 | >20%                    |                 2 |              0.24135 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4836 | >20%                    |                10 |              0.04836 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4848 | >20%                    |                 2 |              0.2424  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4871 | >20%                    |                 5 |              0.09742 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4874 | >20%                    |                 5 |              0.09748 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4895 | 10-15%                  |                 5 |              0.0979  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.493  | 10-15%                  |                 2 |              0.2465  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4972 | >20%                    |                 2 |              0.2486  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4982 | >20%                    |                 5 |              0.09964 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4989 | >20%                    |                 2 |              0.24945 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4991 | >20%                    |                 2 |              0.24955 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5022 | 15-20%                  |                10 |              0.05022 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5037 | >20%                    |                 2 |              0.25185 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5081 | >20%                    |                 2 |              0.25405 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5164 | 5-10%                   |                 5 |              0.10328 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5201 | >20%                    |                 5 |              0.10402 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5207 | <5%                     |                10 |              0.05207 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5345 | >20%                    |                 5 |              0.1069  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5418 | 15-20%                  |                 2 |              0.2709  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5434 | <5%                     |                 2 |              0.2717  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5444 | <5%                     |                10 |              0.05444 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5514 | >20%                    |                 2 |              0.2757  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5549 | >20%                    |                 5 |              0.11098 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5552 | >20%                    |                 5 |              0.11104 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5581 | 10-15%                  |                 5 |              0.11162 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5667 | >20%                    |                 5 |              0.11334 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5696 | >20%                    |                 2 |              0.2848  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5745 | 10-15%                  |                 5 |              0.1149  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5788 | >20%                    |                 2 |              0.2894  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5864 | >20%                    |                 5 |              0.11728 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5938 | >20%                    |                 2 |              0.2969  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6012 | 5-10%                   |                 5 |              0.12024 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6016 | 5-10%                   |                 2 |              0.3008  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6118 | >20%                    |                 5 |              0.12236 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6146 | <5%                     |                 5 |              0.12292 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6159 | >20%                    |                 2 |              0.30795 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6164 | 10-15%                  |                 2 |              0.3082  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6216 | >20%                    |                 5 |              0.12432 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.63   | 5-10%                   |                 5 |              0.126   |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6372 | >20%                    |                 2 |              0.3186  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6447 | 10-15%                  |                 5 |              0.12894 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6483 | >20%                    |                 5 |              0.12966 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.651  | >20%                    |                 5 |              0.1302  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6607 | 15-20%                  |                10 |              0.06607 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6632 | >20%                    |                10 |              0.06632 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6679 | >20%                    |                 5 |              0.13358 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6745 | >20%                    |                 5 |              0.1349  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6778 | >20%                    |                10 |              0.06778 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.689  | <5%                     |                 5 |              0.1378  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6942 | 15-20%                  |                 2 |              0.3471  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.713  | >20%                    |                 2 |              0.3565  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7183 | 15-20%                  |                 2 |              0.35915 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7228 | >20%                    |                10 |              0.07228 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7307 | 5-10%                   |                 5 |              0.14614 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7315 | 15-20%                  |                10 |              0.07315 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7417 | 15-20%                  |                10 |              0.07417 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7486 | >20%                    |                 5 |              0.14972 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7573 | >20%                    |                10 |              0.07573 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7584 | >20%                    |                 5 |              0.15168 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7589 | >20%                    |                 5 |              0.15178 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7617 | >20%                    |                 5 |              0.15234 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7734 | <5%                     |                10 |              0.07734 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7967 | <5%                     |                 5 |              0.15934 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7978 | 15-20%                  |                 5 |              0.15956 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8041 | >20%                    |                10 |              0.08041 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8056 | >20%                    |                 2 |              0.4028  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8059 | >20%                    |                 5 |              0.16118 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.827  | >20%                    |                 5 |              0.1654  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8479 | 5-10%                   |                10 |              0.08479 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8643 | >20%                    |                10 |              0.08643 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8664 | 15-20%                  |                10 |              0.08664 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8754 | >20%                    |                10 |              0.08754 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8829 | 5-10%                   |                10 |              0.08829 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8873 | 15-20%                  |                10 |              0.08873 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9027 | 5-10%                   |                 5 |              0.18054 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9162 | <5%                     |                10 |              0.09162 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.933  | >20%                    |                 5 |              0.1866  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9355 | 5-10%                   |                10 |              0.09355 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9358 | >20%                    |                10 |              0.09358 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9428 | 5-10%                   |                10 |              0.09428 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9497 | 5-10%                   |                10 |              0.09497 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.961  | 15-20%                  |                 5 |              0.1922  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.961  | 5-10%                   |                10 |              0.0961  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.962  | 15-20%                  |                10 |              0.0962  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9621 | >20%                    |                 2 |              0.48105 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9799 | 15-20%                  |                10 |              0.09799 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9819 | <5%                     |                10 |              0.09819 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9945 | 15-20%                  |                10 |              0.09945 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9951 | <5%                     |                10 |              0.09951 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9994 | 5-10%                   |                10 |              0.09994 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.008  | >20%                    |                10 |              0.1008  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.01   | >20%                    |                10 |              0.101   |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.02   | >20%                    |                10 |              0.102   |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0301 | >20%                    |                10 |              0.10301 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0416 | 15-20%                  |                10 |              0.10416 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0513 | <5%                     |                10 |              0.10513 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0849 | 5-10%                   |                10 |              0.10849 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0932 | >20%                    |                 5 |              0.21864 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1051 | >20%                    |                 2 |              0.55255 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1147 | >20%                    |                10 |              0.11147 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1188 | 15-20%                  |                10 |              0.11188 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1236 | >20%                    |                10 |              0.11236 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1294 | >20%                    |                10 |              0.11294 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1448 | >20%                    |                10 |              0.11448 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1592 | >20%                    |                10 |              0.11592 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1852 | >20%                    |                 5 |              0.23704 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1868 | >20%                    |                10 |              0.11868 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.2165 | >20%                    |                 5 |              0.2433  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2554 | <5%                     |                 2 |              0.6277  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3216 | >20%                    |                 5 |              0.26432 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3234 | 15-20%                  |                 5 |              0.26468 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3587 | >20%                    |                 2 |              0.67935 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3905 | >20%                    |                10 |              0.13905 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.395  | <5%                     |                10 |              0.1395  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4024 | 5-10%                   |                10 |              0.14024 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.425  | >20%                    |                10 |              0.1425  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4795 | >20%                    |                 5 |              0.2959  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.516  | 5-10%                   |                 2 |              0.758   |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.577  | <5%                     |                 5 |              0.3154  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6429 | >20%                    |                10 |              0.16429 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.904  | 10-15%                  |                10 |              0.1904  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0645 | <5%                     |                10 |              0.20645 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1152 | 5-10%                   |                10 |              0.21152 |