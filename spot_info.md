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

Data correct as of 2026-02-08 02:54:53.167985, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1444 | >20%                    |                 2 |              0.0722  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1679 | >20%                    |                 5 |              0.03358 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1765 | 5-10%                   |                 2 |              0.08825 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.177  | >20%                    |                 2 |              0.0885  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1771 | >20%                    |                 2 |              0.08855 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1954 | >20%                    |                 5 |              0.03908 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2026 | >20%                    |                 2 |              0.1013  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2401 | >20%                    |                 5 |              0.04802 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2489 | 10-15%                  |                 2 |              0.12445 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | >20%                    |                 2 |              0.1255  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2585 | 15-20%                  |                 2 |              0.12925 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2696 | >20%                    |                 2 |              0.1348  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2704 | 10-15%                  |                 2 |              0.1352  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2788 | >20%                    |                 2 |              0.1394  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2798 | >20%                    |                 5 |              0.05596 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2807 | >20%                    |                 2 |              0.14035 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2929 | 5-10%                   |                10 |              0.02929 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2953 | >20%                    |                 2 |              0.14765 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3001 | >20%                    |                 2 |              0.15005 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3006 | <5%                     |                 5 |              0.06012 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3127 | >20%                    |                 2 |              0.15635 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3142 | >20%                    |                 2 |              0.1571  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3287 | 5-10%                   |                 5 |              0.06574 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3398 | >20%                    |                 5 |              0.06796 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3448 | >20%                    |                 2 |              0.1724  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3494 | 15-20%                  |                 2 |              0.1747  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3495 | >20%                    |                 2 |              0.17475 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3571 | 15-20%                  |                 2 |              0.17855 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3625 | <5%                     |                 2 |              0.18125 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3685 | 10-15%                  |                 2 |              0.18425 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3706 | >20%                    |                 2 |              0.1853  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.3727 | <5%                     |                 5 |              0.07454 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3746 | 5-10%                   |                 2 |              0.1873  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3748 | >20%                    |                 5 |              0.07496 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3758 | >20%                    |                 5 |              0.07516 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3783 | 5-10%                   |                 2 |              0.18915 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3805 | >20%                    |                 5 |              0.0761  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3821 | >20%                    |                 5 |              0.07642 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3834 | >20%                    |                 2 |              0.1917  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3846 | 15-20%                  |                 2 |              0.1923  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.39   | <5%                     |                 5 |              0.078   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3912 | >20%                    |                 2 |              0.1956  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3912 | 5-10%                   |                10 |              0.03912 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3917 | >20%                    |                 5 |              0.07834 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3965 | >20%                    |                10 |              0.03965 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3998 | 10-15%                  |                 5 |              0.07996 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4075 | >20%                    |                 5 |              0.0815  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4105 | <5%                     |                 5 |              0.0821  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4119 | >20%                    |                 2 |              0.20595 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4126 | <5%                     |                 2 |              0.2063  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4181 | >20%                    |                 5 |              0.08362 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4186 | >20%                    |                 5 |              0.08372 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4232 | >20%                    |                 5 |              0.08464 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4248 | 5-10%                   |                 2 |              0.2124  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4257 | 5-10%                   |                 2 |              0.21285 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4278 | >20%                    |                10 |              0.04278 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4284 | 5-10%                   |                 2 |              0.2142  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4293 | >20%                    |                 2 |              0.21465 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4307 | <5%                     |                 5 |              0.08614 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4308 | 15-20%                  |                 2 |              0.2154  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4368 | <5%                     |                 2 |              0.2184  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4393 | >20%                    |                10 |              0.04393 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4404 | >20%                    |                 2 |              0.2202  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.443  | <5%                     |                 2 |              0.2215  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4494 | >20%                    |                 2 |              0.2247  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4503 | >20%                    |                10 |              0.04503 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4508 | 15-20%                  |                 5 |              0.09016 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4543 | 5-10%                   |                 5 |              0.09086 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4548 | 15-20%                  |                 2 |              0.2274  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4604 | 5-10%                   |                 2 |              0.2302  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4752 | >20%                    |                 2 |              0.2376  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.4754 | >20%                    |                 2 |              0.2377  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4769 | 5-10%                   |                 5 |              0.09538 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4829 | >20%                    |                 2 |              0.24145 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4877 | 15-20%                  |                 5 |              0.09754 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4929 | <5%                     |                10 |              0.04929 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4949 | >20%                    |                 2 |              0.24745 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.497  | >20%                    |                 5 |              0.0994  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5057 | >20%                    |                 2 |              0.25285 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5139 | >20%                    |                 2 |              0.25695 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5184 | 15-20%                  |                10 |              0.05184 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5199 | >20%                    |                 5 |              0.10398 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.52   | 15-20%                  |                10 |              0.052   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5257 | >20%                    |                 5 |              0.10514 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5291 | <5%                     |                10 |              0.05291 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5311 | <5%                     |                 2 |              0.26555 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5333 | <5%                     |                 5 |              0.10666 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5374 | >20%                    |                 5 |              0.10748 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5376 | >20%                    |                 5 |              0.10752 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5438 | >20%                    |                10 |              0.05438 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5453 | 15-20%                  |                 5 |              0.10906 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.546  | <5%                     |                 5 |              0.1092  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.546  | 15-20%                  |                 5 |              0.1092  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5535 | >20%                    |                 5 |              0.1107  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5558 | >20%                    |                 5 |              0.11116 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.559  | >20%                    |                10 |              0.0559  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5691 | >20%                    |                10 |              0.05691 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5708 | 15-20%                  |                10 |              0.05708 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5747 | >20%                    |                 5 |              0.11494 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5772 | >20%                    |                 2 |              0.2886  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5855 | 5-10%                   |                 5 |              0.1171  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.597  | >20%                    |                 5 |              0.1194  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5989 | 5-10%                   |                 2 |              0.29945 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6033 | 10-15%                  |                10 |              0.06033 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6041 | >20%                    |                10 |              0.06041 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6075 | >20%                    |                 5 |              0.1215  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6082 | 10-15%                  |                 5 |              0.12164 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6284 | 15-20%                  |                 2 |              0.3142  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6355 | 15-20%                  |                10 |              0.06355 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6477 | >20%                    |                 5 |              0.12954 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6575 | >20%                    |                10 |              0.06575 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6614 | >20%                    |                 5 |              0.13228 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6673 | 5-10%                   |                 5 |              0.13346 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.669  | >20%                    |                 5 |              0.1338  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6769 | 5-10%                   |                 5 |              0.13538 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7062 | <5%                     |                10 |              0.07062 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7156 | >20%                    |                 5 |              0.14312 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7173 | >20%                    |                10 |              0.07173 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7286 | 5-10%                   |                 2 |              0.3643  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7292 | >20%                    |                10 |              0.07292 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7369 | >20%                    |                10 |              0.07369 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7448 | 10-15%                  |                10 |              0.07448 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7618 | >20%                    |                 2 |              0.3809  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7651 | >20%                    |                 2 |              0.38255 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7714 | <5%                     |                10 |              0.07714 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7751 | >20%                    |                 5 |              0.15502 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7777 | >20%                    |                10 |              0.07777 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7787 | <5%                     |                10 |              0.07787 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7802 | >20%                    |                 5 |              0.15604 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7806 | <5%                     |                 5 |              0.15612 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7909 | 15-20%                  |                10 |              0.07909 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7931 | >20%                    |                10 |              0.07931 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7945 | >20%                    |                 5 |              0.1589  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8008 | >20%                    |                 5 |              0.16016 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8078 | <5%                     |                10 |              0.08078 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8082 | <5%                     |                10 |              0.08082 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8178 | >20%                    |                 5 |              0.16356 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.82   | >20%                    |                10 |              0.082   |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8204 | 5-10%                   |                10 |              0.08204 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8236 | >20%                    |                 5 |              0.16472 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.83   | 5-10%                   |                10 |              0.083   |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8311 | <5%                     |                10 |              0.08311 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8385 | >20%                    |                10 |              0.08385 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8566 | >20%                    |                10 |              0.08566 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8571 | >20%                    |                10 |              0.08571 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8603 | >20%                    |                 2 |              0.43015 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8632 | 10-15%                  |                 2 |              0.4316  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8649 | >20%                    |                 2 |              0.43245 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8773 | >20%                    |                10 |              0.08773 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8792 | <5%                     |                10 |              0.08792 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8856 | >20%                    |                 2 |              0.4428  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9185 | <5%                     |                10 |              0.09185 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9283 | >20%                    |                 2 |              0.46415 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9396 | >20%                    |                 5 |              0.18792 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9458 | >20%                    |                10 |              0.09458 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9638 | 5-10%                   |                 5 |              0.19276 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9772 | >20%                    |                10 |              0.09772 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9772 | 15-20%                  |                10 |              0.09772 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0037 | >20%                    |                10 |              0.10037 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0306 | >20%                    |                 5 |              0.20612 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0419 | >20%                    |                10 |              0.10419 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0436 | >20%                    |                10 |              0.10436 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0466 |                         |                 2 |              0.5233  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0542 | 15-20%                  |                10 |              0.10542 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0603 | 10-15%                  |                 5 |              0.21206 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0614 | >20%                    |                 2 |              0.5307  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0691 | 5-10%                   |                10 |              0.10691 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0891 | >20%                    |                10 |              0.10891 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0996 | 10-15%                  |                10 |              0.10996 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1111 | >20%                    |                10 |              0.11111 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1256 | >20%                    |                10 |              0.11256 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1356 | >20%                    |                10 |              0.11356 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2117 | <5%                     |                10 |              0.12117 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3065 | >20%                    |                 5 |              0.2613  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3096 | >20%                    |                10 |              0.13096 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3757 | 10-15%                  |                 5 |              0.27514 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4004 | >20%                    |                10 |              0.14004 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4007 |                         |                 5 |              0.28014 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.463  | >20%                    |                 2 |              0.7315  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7125 | 15-20%                  |                10 |              0.17125 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0498 | 10-15%                  |                10 |              0.20498 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.145  |                         |                10 |              0.2145  |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4327 | <5%                     |                 5 |              0.48654 |