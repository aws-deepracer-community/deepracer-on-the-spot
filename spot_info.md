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

Data correct as of 2026-03-04 02:28:43.284055, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1582 | >20%                    |                 2 |              0.0791  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1755 | >20%                    |                 2 |              0.08775 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1892 | >20%                    |                 5 |              0.03784 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2039 | >20%                    |                 2 |              0.10195 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2218 | <5%                     |                 2 |              0.1109  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2339 | >20%                    |                 2 |              0.11695 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2431 | 10-15%                  |                 2 |              0.12155 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2467 | >20%                    |                 2 |              0.12335 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2575 | >20%                    |                 2 |              0.12875 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2596 | 15-20%                  |                 2 |              0.1298  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2639 | >20%                    |                 2 |              0.13195 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.273  | >20%                    |                 2 |              0.1365  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2838 | >20%                    |                 5 |              0.05676 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2885 | >20%                    |                 5 |              0.0577  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2922 | 10-15%                  |                 2 |              0.1461  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2928 | >20%                    |                 5 |              0.05856 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3049 | >20%                    |                 2 |              0.15245 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.306  | 5-10%                   |                 2 |              0.153   |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3075 | <5%                     |                 5 |              0.0615  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.309  | >20%                    |                 2 |              0.1545  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3114 | >20%                    |                 2 |              0.1557  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3189 | >20%                    |                 5 |              0.06378 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3191 | >20%                    |                 2 |              0.15955 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3257 | >20%                    |                 2 |              0.16285 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3415 | 5-10%                   |                10 |              0.03415 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3448 | >20%                    |                 5 |              0.06896 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3451 | >20%                    |                10 |              0.03451 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3458 | >20%                    |                 5 |              0.06916 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3495 | 15-20%                  |                 2 |              0.17475 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3585 | 5-10%                   |                 2 |              0.17925 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3619 | 10-15%                  |                 2 |              0.18095 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3644 | 15-20%                  |                 2 |              0.1822  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3657 | <5%                     |                 5 |              0.07314 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3663 | >20%                    |                 5 |              0.07326 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3725 | 5-10%                   |                 2 |              0.18625 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3728 | >20%                    |                 5 |              0.07456 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3731 | >20%                    |                 5 |              0.07462 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3773 | <5%                     |                 5 |              0.07546 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3846 | <5%                     |                 2 |              0.1923  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3885 | 5-10%                   |                 2 |              0.19425 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.389  | >20%                    |                 2 |              0.1945  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3912 | >20%                    |                10 |              0.03912 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3956 | 5-10%                   |                 5 |              0.07912 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4048 | >20%                    |                 2 |              0.2024  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4157 | 15-20%                  |                 5 |              0.08314 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4168 | 5-10%                   |                 2 |              0.2084  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.417  | >20%                    |                 2 |              0.2085  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4178 | 15-20%                  |                 2 |              0.2089  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4191 | 10-15%                  |                 5 |              0.08382 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4209 | >20%                    |                 2 |              0.21045 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4211 | >20%                    |                 2 |              0.21055 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4257 | <5%                     |                 2 |              0.21285 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4268 | >20%                    |                 2 |              0.2134  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4268 | 5-10%                   |                 5 |              0.08536 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4316 | >20%                    |                 5 |              0.08632 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4328 | >20%                    |                 5 |              0.08656 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4338 | >20%                    |                 2 |              0.2169  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4384 | <5%                     |                10 |              0.04384 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4418 | >20%                    |                10 |              0.04418 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4422 | <5%                     |                 2 |              0.2211  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.443  | 15-20%                  |                 5 |              0.0886  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.443  | 15-20%                  |                10 |              0.0443  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4436 | <5%                     |                 5 |              0.08872 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4448 | 15-20%                  |                 2 |              0.2224  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4465 | 5-10%                   |                 5 |              0.0893  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4474 | 15-20%                  |                 5 |              0.08948 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4528 | 15-20%                  |                 2 |              0.2264  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4563 | 5-10%                   |                 2 |              0.22815 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4658 | 5-10%                   |                 2 |              0.2329  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4687 | >20%                    |                 5 |              0.09374 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4735 | >20%                    |                 2 |              0.23675 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4855 | >20%                    |                10 |              0.04855 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5023 | >20%                    |                 5 |              0.10046 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5061 | >20%                    |                 5 |              0.10122 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5069 | >20%                    |                 2 |              0.25345 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5114 | >20%                    |                 5 |              0.10228 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5144 | >20%                    |                 2 |              0.2572  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.52   | >20%                    |                 5 |              0.104   |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5223 | <5%                     |                 5 |              0.10446 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5238 | 15-20%                  |                 5 |              0.10476 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5261 | >20%                    |                 5 |              0.10522 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5294 | >20%                    |                 2 |              0.2647  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5326 | >20%                    |                 5 |              0.10652 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5379 | >20%                    |                10 |              0.05379 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5406 | >20%                    |                 5 |              0.10812 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5486 |                         |                 2 |              0.2743  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5531 | 15-20%                  |                10 |              0.05531 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5541 | <5%                     |                 5 |              0.11082 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.5576 | >20%                    |                10 |              0.05576 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5579 | >20%                    |                 2 |              0.27895 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5617 | >20%                    |                10 |              0.05617 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5705 | 15-20%                  |                10 |              0.05705 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5808 | 5-10%                   |                 2 |              0.2904  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5999 | 15-20%                  |                10 |              0.05999 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6002 | >20%                    |                 5 |              0.12004 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6003 | >20%                    |                 5 |              0.12006 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6007 | >20%                    |                10 |              0.06007 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6011 | >20%                    |                 5 |              0.12022 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6078 | >20%                    |                10 |              0.06078 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6088 | >20%                    |                10 |              0.06088 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6172 | 15-20%                  |                 2 |              0.3086  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6221 | 5-10%                   |                 2 |              0.31105 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.623  | >20%                    |                 2 |              0.3115  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.627  | >20%                    |                 5 |              0.1254  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6331 | >20%                    |                 2 |              0.31655 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6389 | 5-10%                   |                 5 |              0.12778 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6391 | 5-10%                   |                 5 |              0.12782 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6408 | <5%                     |                10 |              0.06408 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6437 | 10-15%                  |                 5 |              0.12874 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6446 | >20%                    |                 5 |              0.12892 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6497 | <5%                     |                10 |              0.06497 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6569 | 5-10%                   |                 5 |              0.13138 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6607 | >20%                    |                10 |              0.06607 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.663  | <5%                     |                10 |              0.0663  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6671 | >20%                    |                 2 |              0.33355 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6739 | >20%                    |                 5 |              0.13478 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6946 |                         |                 5 |              0.13892 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6975 | >20%                    |                 5 |              0.1395  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6995 | <5%                     |                10 |              0.06995 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7086 | >20%                    |                10 |              0.07086 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7277 | >20%                    |                10 |              0.07277 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7329 | >20%                    |                 5 |              0.14658 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.753  | >20%                    |                10 |              0.0753  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7547 | >20%                    |                10 |              0.07547 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7626 | 10-15%                  |                10 |              0.07626 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7657 | >20%                    |                10 |              0.07657 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7671 | <5%                     |                10 |              0.07671 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7688 | >20%                    |                 5 |              0.15376 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7725 | >20%                    |                 2 |              0.38625 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7779 | >20%                    |                 5 |              0.15558 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8006 | 10-15%                  |                10 |              0.08006 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8041 | <5%                     |                10 |              0.08041 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8129 | <5%                     |                 5 |              0.16258 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8164 | >20%                    |                 5 |              0.16328 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8243 | >20%                    |                10 |              0.08243 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8268 | 15-20%                  |                10 |              0.08268 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.832  | 15-20%                  |                10 |              0.0832  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8451 | >20%                    |                 5 |              0.16902 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.846  | <5%                     |                 5 |              0.1692  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8557 | 10-15%                  |                 2 |              0.42785 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8564 | >20%                    |                 5 |              0.17128 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8564 | >20%                    |                 2 |              0.4282  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8726 | >20%                    |                10 |              0.08726 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8896 | >20%                    |                10 |              0.08896 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9034 | <5%                     |                10 |              0.09034 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9086 | >20%                    |                 5 |              0.18172 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9114 | >20%                    |                 5 |              0.18228 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9375 | 10-15%                  |                10 |              0.09375 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9419 | >20%                    |                10 |              0.09419 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9452 | 5-10%                   |                10 |              0.09452 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9582 | <5%                     |                10 |              0.09582 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9659 | >20%                    |                10 |              0.09659 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9684 | >20%                    |                 2 |              0.4842  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9705 | >20%                    |                 2 |              0.48525 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9709 | >20%                    |                10 |              0.09709 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9822 | 5-10%                   |                 5 |              0.19644 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9835 | 5-10%                   |                10 |              0.09835 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9972 | >20%                    |                10 |              0.09972 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9977 | >20%                    |                10 |              0.09977 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0249 | 5-10%                   |                10 |              0.10249 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0317 | >20%                    |                 5 |              0.20634 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0388 | >20%                    |                10 |              0.10388 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.057  |                         |                10 |              0.1057  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0579 | >20%                    |                10 |              0.10579 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1226 | 15-20%                  |                10 |              0.11226 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.165  | >20%                    |                10 |              0.1165  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2416 | 10-15%                  |                 5 |              0.24832 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2538 | >20%                    |                10 |              0.12538 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2963 | <5%                     |                10 |              0.12963 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3349 | >20%                    |                 2 |              0.66745 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4194 | 10-15%                  |                 5 |              0.28388 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4447 | >20%                    |                 2 |              0.72235 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4611 | >20%                    |                 5 |              0.29222 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4664 | 15-20%                  |                10 |              0.14664 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4667 | >20%                    |                 2 |              0.73335 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5753 | >20%                    |                10 |              0.15753 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6733 | >20%                    |                10 |              0.16733 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2805 | 10-15%                  |                10 |              0.22805 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.3153 | <5%                     |                 5 |              0.46306 |