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

Data correct as of 2025-12-26 01:59:57.128908, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0992 | >20%                    |                 2 |              0.0496  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1349 | >20%                    |                 2 |              0.06745 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1518 | >20%                    |                 2 |              0.0759  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1663 | >20%                    |                 2 |              0.08315 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1893 | <5%                     |                 2 |              0.09465 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1901 | >20%                    |                 5 |              0.03802 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2095 | 5-10%                   |                 2 |              0.10475 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2346 | >20%                    |                 2 |              0.1173  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2354 | >20%                    |                 2 |              0.1177  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2551 | >20%                    |                 2 |              0.12755 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2624 | >20%                    |                 2 |              0.1312  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.266  | >20%                    |                 2 |              0.133   |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2687 | 5-10%                   |                10 |              0.02687 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2711 | >20%                    |                 2 |              0.13555 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2727 | >20%                    |                 5 |              0.05454 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2778 | >20%                    |                 2 |              0.1389  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2808 | <5%                     |                 2 |              0.1404  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2823 | >20%                    |                 2 |              0.14115 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2893 | 5-10%                   |                 5 |              0.05786 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.29   | 15-20%                  |                 2 |              0.145   |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2995 | >20%                    |                10 |              0.02995 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3052 | >20%                    |                 2 |              0.1526  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3054 | >20%                    |                 2 |              0.1527  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3152 | >20%                    |                 2 |              0.1576  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.328  | 15-20%                  |                 5 |              0.0656  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3324 | 5-10%                   |                10 |              0.03324 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3372 | >20%                    |                 5 |              0.06744 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3377 | >20%                    |                 2 |              0.16885 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3378 | >20%                    |                 5 |              0.06756 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.346  | <5%                     |                 5 |              0.0692  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3525 | <5%                     |                 5 |              0.0705  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3555 | >20%                    |                 2 |              0.17775 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3586 | >20%                    |                 5 |              0.07172 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3609 | >20%                    |                 2 |              0.18045 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3631 | >20%                    |                 5 |              0.07262 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3639 | >20%                    |                 5 |              0.07278 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3645 | 5-10%                   |                 2 |              0.18225 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3657 | >20%                    |                 5 |              0.07314 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3671 | 10-15%                  |                 2 |              0.18355 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3737 | >20%                    |                 5 |              0.07474 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.374  | >20%                    |                 2 |              0.187   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3771 | 10-15%                  |                 2 |              0.18855 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3828 | >20%                    |                 5 |              0.07656 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3848 | >20%                    |                 2 |              0.1924  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3849 | >20%                    |                10 |              0.03849 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3863 | >20%                    |                 2 |              0.19315 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3902 | >20%                    |                 2 |              0.1951  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3913 | >20%                    |                 5 |              0.07826 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3926 | 15-20%                  |                10 |              0.03926 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3946 | >20%                    |                 2 |              0.1973  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3962 | >20%                    |                10 |              0.03962 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3963 | >20%                    |                 5 |              0.07926 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3968 | <5%                     |                10 |              0.03968 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4181 | 10-15%                  |                 2 |              0.20905 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4195 | >20%                    |                 5 |              0.0839  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4197 | <5%                     |                 2 |              0.20985 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4211 | >20%                    |                 5 |              0.08422 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4284 | >20%                    |                 2 |              0.2142  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4297 | >20%                    |                 2 |              0.21485 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4297 | <5%                     |                10 |              0.04297 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4341 | >20%                    |                10 |              0.04341 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4341 | >20%                    |                 5 |              0.08682 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4411 | <5%                     |                 2 |              0.22055 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.443  | >20%                    |                 2 |              0.2215  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4454 | >20%                    |                 5 |              0.08908 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.455  | >20%                    |                10 |              0.0455  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4578 | >20%                    |                 5 |              0.09156 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4669 | >20%                    |                 2 |              0.23345 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4671 | >20%                    |                10 |              0.04671 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4682 | >20%                    |                 5 |              0.09364 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4761 | >20%                    |                 2 |              0.23805 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4909 | >20%                    |                 5 |              0.09818 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4936 | 15-20%                  |                 5 |              0.09872 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4966 | >20%                    |                 2 |              0.2483  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5007 | 15-20%                  |                 5 |              0.10014 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5037 | >20%                    |                 5 |              0.10074 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5046 | 15-20%                  |                 2 |              0.2523  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.5112 | >20%                    |                 2 |              0.2556  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5153 | >20%                    |                 2 |              0.25765 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5156 | >20%                    |                 2 |              0.2578  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5176 | 10-15%                  |                 5 |              0.10352 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.5187 | 15-20%                  |                 2 |              0.25935 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5199 | 10-15%                  |                 5 |              0.10398 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5295 | <5%                     |                 5 |              0.1059  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5355 | 15-20%                  |                10 |              0.05355 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5371 | >20%                    |                 2 |              0.26855 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5406 | 5-10%                   |                 5 |              0.10812 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5412 | >20%                    |                 5 |              0.10824 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5542 | 15-20%                  |                 5 |              0.11084 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5543 | >20%                    |                 5 |              0.11086 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5614 | >20%                    |                 5 |              0.11228 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5628 | >20%                    |                 5 |              0.11256 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5709 | >20%                    |                10 |              0.05709 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5726 | >20%                    |                 2 |              0.2863  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5764 | >20%                    |                 5 |              0.11528 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.584  | >20%                    |                 5 |              0.1168  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.591  | 15-20%                  |                 5 |              0.1182  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5927 | <5%                     |                 5 |              0.11854 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5945 | 5-10%                   |                 5 |              0.1189  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6061 | >20%                    |                 2 |              0.30305 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6082 | >20%                    |                10 |              0.06082 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6135 | 10-15%                  |                 2 |              0.30675 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6228 | 15-20%                  |                 5 |              0.12456 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.632  | 15-20%                  |                10 |              0.0632  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6324 | >20%                    |                 2 |              0.3162  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6362 | 10-15%                  |                 5 |              0.12724 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6428 | 10-15%                  |                 5 |              0.12856 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6452 | 5-10%                   |                 5 |              0.12904 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6495 | >20%                    |                 5 |              0.1299  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6624 | >20%                    |                 2 |              0.3312  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.663  | >20%                    |                 2 |              0.3315  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.675  | >20%                    |                 5 |              0.135   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6786 | >20%                    |                10 |              0.06786 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.7122 | >20%                    |                 2 |              0.3561  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7226 | >20%                    |                10 |              0.07226 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.7232 | 15-20%                  |                10 |              0.07232 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7243 | >20%                    |                10 |              0.07243 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.734  | >20%                    |                 5 |              0.1468  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7478 | 15-20%                  |                 2 |              0.3739  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7482 | 15-20%                  |                10 |              0.07482 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7518 | 5-10%                   |                10 |              0.07518 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.756  | >20%                    |                10 |              0.0756  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.7582 | >20%                    |                 5 |              0.15164 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7609 | >20%                    |                10 |              0.07609 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7645 | >20%                    |                10 |              0.07645 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7739 | 15-20%                  |                10 |              0.07739 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7776 | >20%                    |                10 |              0.07776 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7821 | 15-20%                  |                 5 |              0.15642 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7833 | <5%                     |                10 |              0.07833 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7874 | >20%                    |                10 |              0.07874 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7957 | >20%                    |                 5 |              0.15914 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7971 | >20%                    |                 2 |              0.39855 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8011 | 15-20%                  |                10 |              0.08011 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8018 | >20%                    |                10 |              0.08018 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8064 | <5%                     |                10 |              0.08064 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8232 | 15-20%                  |                10 |              0.08232 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8257 | >20%                    |                 5 |              0.16514 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8295 | 15-20%                  |                10 |              0.08295 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8376 | >20%                    |                 5 |              0.16752 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.8395 | <5%                     |                 2 |              0.41975 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8402 | <5%                     |                10 |              0.08402 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8535 | >20%                    |                 2 |              0.42675 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8624 | 15-20%                  |                10 |              0.08624 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8646 | >20%                    |                10 |              0.08646 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8721 | >20%                    |                10 |              0.08721 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8786 | >20%                    |                10 |              0.08786 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9462 | >20%                    |                10 |              0.09462 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9506 | >20%                    |                 5 |              0.19012 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9514 | >20%                    |                10 |              0.09514 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9563 | >20%                    |                 2 |              0.47815 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9649 | >20%                    |                 2 |              0.48245 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9659 | 15-20%                  |                10 |              0.09659 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9842 | >20%                    |                 5 |              0.19684 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9875 | >20%                    |                10 |              0.09875 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9905 | >20%                    |                 5 |              0.1981  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0019 | 10-15%                  |                 5 |              0.20038 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0022 | >20%                    |                10 |              0.10022 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0028 | 10-15%                  |                10 |              0.10028 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0045 | >20%                    |                 2 |              0.50225 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0101 | >20%                    |                10 |              0.10101 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0778 | >20%                    |                 2 |              0.5389  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0819 | >20%                    |                 5 |              0.21638 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0911 | >20%                    |                10 |              0.10911 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1276 | >20%                    |                10 |              0.11276 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1307 | >20%                    |                 5 |              0.22614 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1603 | <5%                     |                10 |              0.11603 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.1745 | 10-15%                  |                10 |              0.11745 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1914 | >20%                    |                10 |              0.11914 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2326 | >20%                    |                10 |              0.12326 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2465 | >20%                    |                10 |              0.12465 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2675 | >20%                    |                 5 |              0.2535  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3142 | >20%                    |                10 |              0.13142 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3845 | >20%                    |                 2 |              0.69225 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4137 | 10-15%                  |                 5 |              0.28274 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4552 | >20%                    |                 2 |              0.7276  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4612 | >20%                    |                10 |              0.14612 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5072 | >20%                    |                 5 |              0.30144 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5815 | >20%                    |                10 |              0.15815 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6756 | 15-20%                  |                10 |              0.16756 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9948 | 10-15%                  |                10 |              0.19948 |