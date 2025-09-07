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

Data correct as of 2025-09-07 01:49:45.745030, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1113 | >20%                    |                 2 |              0.05565 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1557 | >20%                    |                 2 |              0.07785 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1798 | >20%                    |                 2 |              0.0899  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1912 | >20%                    |                 5 |              0.03824 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.211  | 10-15%                  |                 2 |              0.1055  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2118 | >20%                    |                 2 |              0.1059  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2143 | >20%                    |                 2 |              0.10715 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2315 | >20%                    |                 2 |              0.11575 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2377 | 10-15%                  |                 5 |              0.04754 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.239  | >20%                    |                 2 |              0.1195  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.2526 | >20%                    |                 5 |              0.05052 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2635 | >20%                    |                 2 |              0.13175 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2755 | >20%                    |                 2 |              0.13775 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2907 | 15-20%                  |                 5 |              0.05814 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2944 | 15-20%                  |                 2 |              0.1472  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3111 | >20%                    |                 2 |              0.15555 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3142 | 5-10%                   |                 2 |              0.1571  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3148 | >20%                    |                 2 |              0.1574  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3183 | 10-15%                  |                 2 |              0.15915 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3203 | 5-10%                   |                 2 |              0.16015 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3356 | >20%                    |                 2 |              0.1678  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.338  | >20%                    |                 5 |              0.0676  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3523 | >20%                    |                 2 |              0.17615 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3584 | >20%                    |                 2 |              0.1792  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.362  | >20%                    |                 2 |              0.181   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3638 | >20%                    |                10 |              0.03638 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.366  | >20%                    |                 2 |              0.183   |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3664 | >20%                    |                10 |              0.03664 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.3677 | 15-20%                  |                10 |              0.03677 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3731 | 10-15%                  |                10 |              0.03731 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3736 | >20%                    |                 5 |              0.07472 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3778 | 15-20%                  |                 2 |              0.1889  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3792 | >20%                    |                 2 |              0.1896  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3808 | 10-15%                  |                 2 |              0.1904  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3808 | 10-15%                  |                 5 |              0.07616 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3857 | >20%                    |                 2 |              0.19285 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3863 | >20%                    |                 5 |              0.07726 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4158 | 15-20%                  |                 2 |              0.2079  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4166 | >20%                    |                 5 |              0.08332 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4194 | >20%                    |                10 |              0.04194 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4205 | >20%                    |                 5 |              0.0841  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4222 | >20%                    |                 5 |              0.08444 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4225 | >20%                    |                 5 |              0.0845  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.423  | >20%                    |                 5 |              0.0846  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4363 | >20%                    |                 2 |              0.21815 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4428 | >20%                    |                 5 |              0.08856 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4454 | >20%                    |                 2 |              0.2227  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4542 | 10-15%                  |                 2 |              0.2271  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4555 | 10-15%                  |                 2 |              0.22775 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.456  | 5-10%                   |                 2 |              0.228   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4599 | 15-20%                  |                 2 |              0.22995 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4659 | >20%                    |                 2 |              0.23295 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4689 | <5%                     |                 2 |              0.23445 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4766 | 15-20%                  |                10 |              0.04766 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4776 | 15-20%                  |                 2 |              0.2388  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4801 | >20%                    |                 5 |              0.09602 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4815 | >20%                    |                 2 |              0.24075 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4895 | >20%                    |                 5 |              0.0979  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.496  | >20%                    |                 5 |              0.0992  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4983 | >20%                    |                 5 |              0.09966 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4999 | 5-10%                   |                 5 |              0.09998 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5002 | >20%                    |                 2 |              0.2501  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5059 | >20%                    |                10 |              0.05059 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5133 | >20%                    |                 5 |              0.10266 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5133 | >20%                    |                 2 |              0.25665 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5183 | >20%                    |                 5 |              0.10366 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.519  | >20%                    |                 2 |              0.2595  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5194 | 10-15%                  |                 2 |              0.2597  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.524  | >20%                    |                 2 |              0.262   |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5359 | <5%                     |                 2 |              0.26795 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5457 | >20%                    |                 2 |              0.27285 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5474 | >20%                    |                 2 |              0.2737  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5489 | 5-10%                   |                 2 |              0.27445 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5551 | >20%                    |                 5 |              0.11102 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5597 | >20%                    |                 5 |              0.11194 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5678 | >20%                    |                 2 |              0.2839  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.57   | >20%                    |                 2 |              0.285   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5774 | >20%                    |                 2 |              0.2887  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.579  | >20%                    |                 5 |              0.1158  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.583  | 10-15%                  |                 2 |              0.2915  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5844 | 10-15%                  |                 5 |              0.11688 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5864 | >20%                    |                 5 |              0.11728 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5955 | >20%                    |                 5 |              0.1191  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5981 | >20%                    |                 5 |              0.11962 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6048 | 15-20%                  |                 5 |              0.12096 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6074 | >20%                    |                 5 |              0.12148 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6117 | 15-20%                  |                 5 |              0.12234 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.623  | 10-15%                  |                 5 |              0.1246  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6243 | >20%                    |                 5 |              0.12486 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6339 | >20%                    |                 5 |              0.12678 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6434 | 15-20%                  |                 5 |              0.12868 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6443 | 15-20%                  |                 2 |              0.32215 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6549 | >20%                    |                 2 |              0.32745 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6602 | >20%                    |                 5 |              0.13204 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6667 | >20%                    |                 2 |              0.33335 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6674 | 15-20%                  |                 5 |              0.13348 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6679 | >20%                    |                 5 |              0.13358 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6733 | 5-10%                   |                10 |              0.06733 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.676  | 15-20%                  |                10 |              0.0676  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6908 | >20%                    |                 5 |              0.13816 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7039 | >20%                    |                 5 |              0.14078 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7111 | >20%                    |                 5 |              0.14222 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7241 | >20%                    |                 5 |              0.14482 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7272 | >20%                    |                 5 |              0.14544 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7391 | >20%                    |                 5 |              0.14782 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7395 | >20%                    |                 5 |              0.1479  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7395 | >20%                    |                10 |              0.07395 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7411 | >20%                    |                 5 |              0.14822 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7441 | >20%                    |                 5 |              0.14882 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7495 | >20%                    |                10 |              0.07495 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7501 | >20%                    |                10 |              0.07501 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7564 | >20%                    |                 5 |              0.15128 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7579 | >20%                    |                10 |              0.07579 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7587 | >20%                    |                10 |              0.07587 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7747 | >20%                    |                10 |              0.07747 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.794  | 15-20%                  |                10 |              0.0794  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.813  | 15-20%                  |                10 |              0.0813  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8134 | >20%                    |                10 |              0.08134 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.814  | >20%                    |                 5 |              0.1628  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8243 | 10-15%                  |                10 |              0.08243 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8518 | 10-15%                  |                10 |              0.08518 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8527 | 10-15%                  |                 2 |              0.42635 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8625 | 10-15%                  |                10 |              0.08625 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8644 | <5%                     |                10 |              0.08644 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8792 | >20%                    |                10 |              0.08792 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9043 | <5%                     |                10 |              0.09043 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9194 | 5-10%                   |                10 |              0.09194 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9316 | 15-20%                  |                10 |              0.09316 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9396 | 5-10%                   |                10 |              0.09396 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9477 | 15-20%                  |                10 |              0.09477 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9487 | <5%                     |                10 |              0.09487 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9593 | >20%                    |                 2 |              0.47965 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9623 | 10-15%                  |                10 |              0.09623 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9731 | >20%                    |                10 |              0.09731 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9737 | >20%                    |                10 |              0.09737 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1      | >20%                    |                 5 |              0.2     |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0137 | 15-20%                  |                10 |              0.10137 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0141 | 15-20%                  |                10 |              0.10141 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0158 | 5-10%                   |                10 |              0.10158 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0245 | 15-20%                  |                10 |              0.10245 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0292 | >20%                    |                 5 |              0.20584 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0328 | >20%                    |                10 |              0.10328 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0377 | >20%                    |                10 |              0.10377 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0698 | <5%                     |                10 |              0.10698 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0728 | >20%                    |                10 |              0.10728 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0855 | >20%                    |                10 |              0.10855 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0901 | >20%                    |                 2 |              0.54505 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1096 | 15-20%                  |                10 |              0.11096 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1111 | >20%                    |                 5 |              0.22222 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.113  | >20%                    |                10 |              0.1113  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1205 | 10-15%                  |                 5 |              0.2241  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.135  | 10-15%                  |                 2 |              0.5675  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1377 | >20%                    |                10 |              0.11377 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.151  | 15-20%                  |                10 |              0.1151  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1529 | 5-10%                   |                10 |              0.11529 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1737 | >20%                    |                 2 |              0.58685 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1778 | >20%                    |                10 |              0.11778 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1781 | >20%                    |                 5 |              0.23562 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3129 | 5-10%                   |                 2 |              0.65645 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3275 | >20%                    |                 5 |              0.2655  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.35   | 10-15%                  |                 5 |              0.27    |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3518 | 10-15%                  |                10 |              0.13518 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4326 | 10-15%                  |                 5 |              0.28652 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4431 | >20%                    |                10 |              0.14431 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.4442 | >20%                    |                10 |              0.14442 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5596 | >20%                    |                10 |              0.15596 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.57   | >20%                    |                10 |              0.157   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5813 | >20%                    |                10 |              0.15813 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6106 | >20%                    |                10 |              0.16106 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.6777 | 15-20%                  |                10 |              0.16777 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2636 | 10-15%                  |                10 |              0.22636 |