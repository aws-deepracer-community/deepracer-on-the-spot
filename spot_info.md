# Spot Prices and Interruption Frequency

## This page provides: -

Region - the region of the instance (note - some regions would require you to bake your own AMI using the image builder script)

InstanceType - instance family and size

SpotPrice - hourly price of the spot instance

InterruptionFrequency - the likelihood of your instance experiencing interruption based on the [last month of data](https://aws.amazon.com/ec2/spot/instance-advisor/)

NumberOfWorkers - the number of robomaker workers the instance can support

PricePerWorkerHour - SpotPrice divided by the number of workers the InstanceType can support

Data correct as of 2024-08-28 17:54:02.138254, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      0.1355 | 5-10%                   |                 2 |              0.06775 |
| eu-south-1     | g4dn.4xlarge   |      0.1446 | >20%                    |                 5 |              0.02892 |
| ap-southeast-1 | g4dn.2xlarge   |      0.2113 | 10-15%                  |                 2 |              0.10565 |
| sa-east-1      | g4dn.4xlarge   |      0.2163 | >20%                    |                 5 |              0.04326 |
| ap-northeast-2 | g4dn.2xlarge   |      0.2175 | <5%                     |                 2 |              0.10875 |
| ap-northeast-2 | g5.2xlarge     |      0.23   | <5%                     |                 2 |              0.115   |
| us-west-2      | g4dn.2xlarge   |      0.2334 | 15-20%                  |                 2 |              0.1167  |
| ap-northeast-2 | g5.4xlarge     |      0.2363 | <5%                     |                 5 |              0.04726 |
| eu-north-1     | g4dn.2xlarge   |      0.2453 | 10-15%                  |                 2 |              0.12265 |
| us-east-1      | g4dn.2xlarge   |      0.2459 | 10-15%                  |                 2 |              0.12295 |
| eu-south-1     | g4dn.8xlarge   |      0.2583 | >20%                    |                10 |              0.02583 |
| us-east-2      | g4dn.2xlarge   |      0.2715 | <5%                     |                 2 |              0.13575 |
| ap-south-1     | g4dn.2xlarge   |      0.2731 | <5%                     |                 2 |              0.13655 |
| eu-central-1   | g4dn.2xlarge   |      0.2954 | <5%                     |                 2 |              0.1477  |
| us-west-1      | g4dn.2xlarge   |      0.3063 | <5%                     |                 2 |              0.15315 |
| eu-west-3      | g4dn.2xlarge   |      0.3081 | 10-15%                  |                 2 |              0.15405 |
| ca-central-1   | g4dn.2xlarge   |      0.3174 | <5%                     |                 2 |              0.1587  |
| us-west-2      | g4dn.4xlarge   |      0.3194 | >20%                    |                 5 |              0.06388 |
| eu-west-2      | g4dn.2xlarge   |      0.3228 | <5%                     |                 2 |              0.1614  |
| ap-northeast-3 | g4dn.2xlarge   |      0.3356 | <5%                     |                 2 |              0.1678  |
| ap-southeast-2 | g4dn.2xlarge   |      0.3393 | <5%                     |                 2 |              0.16965 |
| us-west-2      | g6e.2xlarge    |      0.3509 | <5%                     |                 2 |              0.17545 |
| eu-west-1      | g4dn.2xlarge   |      0.3528 | <5%                     |                 2 |              0.1764  |
| sa-east-1      | g4dn.8xlarge   |      0.3698 | <5%                     |                10 |              0.03698 |
| us-east-1      | g6e.2xlarge    |      0.3724 | <5%                     |                 2 |              0.1862  |
| eu-north-1     | g4dn.4xlarge   |      0.3742 | <5%                     |                 5 |              0.07484 |
| us-east-1      | g6.2xlarge     |      0.3771 | 10-15%                  |                 2 |              0.18855 |
| sa-east-1      | g5.2xlarge     |      0.3797 | <5%                     |                 2 |              0.18985 |
| us-east-2      | g6.2xlarge     |      0.3803 | <5%                     |                 2 |              0.19015 |
| ap-south-1     | g4dn.4xlarge   |      0.3829 | <5%                     |                 5 |              0.07658 |
| eu-north-1     | g5.2xlarge     |      0.3872 | <5%                     |                 2 |              0.1936  |
| us-east-2      | g6e.2xlarge    |      0.3929 | >20%                    |                 2 |              0.19645 |
| ap-northeast-1 | g4dn.2xlarge   |      0.413  | >20%                    |                 2 |              0.2065  |
| us-east-1      | g4dn.4xlarge   |      0.423  | 15-20%                  |                 5 |              0.0846  |
| us-east-1      | g5.2xlarge     |      0.4363 | >20%                    |                 2 |              0.21815 |
| us-west-2      | g5.2xlarge     |      0.4399 | >20%                    |                 2 |              0.21995 |
| ap-northeast-3 | g4dn.4xlarge   |      0.4428 | <5%                     |                 5 |              0.08856 |
| ap-northeast-2 | g4dn.8xlarge   |      0.4519 | >20%                    |                10 |              0.04519 |
| us-east-1      | g6.4xlarge     |      0.4534 | 5-10%                   |                 5 |              0.09068 |
| us-west-2      | g6.2xlarge     |      0.4585 | 10-15%                  |                 2 |              0.22925 |
| sa-east-1      | g5.8xlarge     |      0.4596 | 5-10%                   |                10 |              0.04596 |
| ap-south-1     | g5.2xlarge     |      0.463  | 10-15%                  |                 2 |              0.2315  |
| us-east-2      | g5.2xlarge     |      0.466  | >20%                    |                 2 |              0.233   |
| us-west-2      | g5.4xlarge     |      0.469  | >20%                    |                 5 |              0.0938  |
| us-east-2      | g6e.4xlarge    |      0.4714 | 5-10%                   |                 5 |              0.09428 |
| ap-northeast-2 | g4dn.4xlarge   |      0.48   | >20%                    |                 5 |              0.096   |
| us-east-2      | g6.4xlarge     |      0.4813 | <5%                     |                 5 |              0.09626 |
| us-east-2      | g4dn.4xlarge   |      0.4839 | 10-15%                  |                 5 |              0.09678 |
| us-west-1      | g4dn.4xlarge   |      0.4911 | 5-10%                   |                 5 |              0.09822 |
| ap-southeast-1 | g4dn.4xlarge   |      0.4921 | <5%                     |                 5 |              0.09842 |
| eu-central-1   | g4dn.4xlarge   |      0.4923 | 5-10%                   |                 5 |              0.09846 |
| eu-west-3      | g4dn.4xlarge   |      0.4932 | 15-20%                  |                 5 |              0.09864 |
| ca-central-1   | g4dn.4xlarge   |      0.4939 | 5-10%                   |                 5 |              0.09878 |
| us-east-1      | g6e.4xlarge    |      0.4959 | <5%                     |                 5 |              0.09918 |
| ap-south-1     | g5.4xlarge     |      0.5059 | >20%                    |                 5 |              0.10118 |
| eu-central-1   | g5.2xlarge     |      0.5127 | >20%                    |                 2 |              0.25635 |
| eu-north-1     | g5.4xlarge     |      0.5168 | 10-15%                  |                 5 |              0.10336 |
| eu-west-2      | g4dn.4xlarge   |      0.5171 | <5%                     |                 5 |              0.10342 |
| us-west-2      | g6e.4xlarge    |      0.5178 | <5%                     |                 5 |              0.10356 |
| eu-west-2      | g5.2xlarge     |      0.5578 | >20%                    |                 2 |              0.2789  |
| ap-southeast-3 | g5.2xlarge     |      0.5616 | <5%                     |                 2 |              0.2808  |
| eu-west-1      | g5.2xlarge     |      0.5748 | >20%                    |                 2 |              0.2874  |
| us-west-2      | g6.4xlarge     |      0.5796 | <5%                     |                 5 |              0.11592 |
| ap-southeast-2 | g4dn.4xlarge   |      0.5816 | 5-10%                   |                 5 |              0.11632 |
| ca-central-1   | g5.2xlarge     |      0.588  | >20%                    |                 2 |              0.294   |
| eu-west-1      | g4dn.4xlarge   |      0.5893 | <5%                     |                 5 |              0.11786 |
| eu-north-1     | g4dn.8xlarge   |      0.5966 | <5%                     |                10 |              0.05966 |
| sa-east-1      | g5.4xlarge     |      0.5985 | >20%                    |                 5 |              0.1197  |
| ap-southeast-2 | g5.2xlarge     |      0.6018 | 10-15%                  |                 2 |              0.3009  |
| us-east-1      | g5.4xlarge     |      0.6079 | >20%                    |                 5 |              0.12158 |
| ap-northeast-1 | g4dn.4xlarge   |      0.6157 | >20%                    |                 5 |              0.12314 |
| ap-south-1     | g4dn.8xlarge   |      0.6279 | <5%                     |                10 |              0.06279 |
| ca-central-1   | g5.4xlarge     |      0.6493 | 10-15%                  |                 5 |              0.12986 |
| eu-central-1   | g5.4xlarge     |      0.6651 | >20%                    |                 5 |              0.13302 |
| us-east-1      | g6e.8xlarge    |      0.6751 | 5-10%                   |                10 |              0.06751 |
| us-east-2      | g5.4xlarge     |      0.687  | >20%                    |                 5 |              0.1374  |
| us-east-2      | g6.8xlarge     |      0.6886 | <5%                     |                10 |              0.06886 |
| us-west-2      | g4dn.8xlarge   |      0.7072 | >20%                    |                10 |              0.07072 |
| ap-southeast-3 | g5.4xlarge     |      0.7194 | <5%                     |                 5 |              0.14388 |
| us-east-1      | g6.8xlarge     |      0.7281 | <5%                     |                10 |              0.07281 |
| us-east-2      | g6e.8xlarge    |      0.7386 | 10-15%                  |                10 |              0.07386 |
| ap-northeast-1 | g5.2xlarge     |      0.7523 | >20%                    |                 2 |              0.37615 |
| us-west-2      | g5.8xlarge     |      0.7623 | >20%                    |                10 |              0.07623 |
| us-west-2      | g6e.8xlarge    |      0.7641 | <5%                     |                10 |              0.07641 |
| ap-southeast-1 | g4dn.8xlarge   |      0.7716 | 10-15%                  |                10 |              0.07716 |
| us-east-1      | g4dn.8xlarge   |      0.7729 | 10-15%                  |                10 |              0.07729 |
| eu-north-1     | g5.8xlarge     |      0.7791 | 5-10%                   |                10 |              0.07791 |
| eu-west-2      | g5.4xlarge     |      0.7817 | >20%                    |                 5 |              0.15634 |
| eu-west-1      | g5.4xlarge     |      0.7942 | >20%                    |                 5 |              0.15884 |
| ap-northeast-2 | g5.8xlarge     |      0.7988 | <5%                     |                10 |              0.07988 |
| us-east-2      | g4dn.8xlarge   |      0.7994 | >20%                    |                10 |              0.07994 |
| eu-west-3      | g4dn.8xlarge   |      0.8058 | 15-20%                  |                10 |              0.08058 |
| eu-central-1   | g4dn.8xlarge   |      0.8208 | 10-15%                  |                10 |              0.08208 |
| ca-central-1   | g4dn.8xlarge   |      0.8215 | <5%                     |                10 |              0.08215 |
| ap-southeast-3 | g5.8xlarge     |      0.8237 | <5%                     |                10 |              0.08237 |
| us-west-2      | g6.8xlarge     |      0.8263 | <5%                     |                10 |              0.08263 |
| ap-south-1     | g5.8xlarge     |      0.8749 | >20%                    |                10 |              0.08749 |
| ap-northeast-1 | g5.4xlarge     |      0.8909 | >20%                    |                 5 |              0.17818 |
| us-west-1      | g4dn.8xlarge   |      0.8976 | <5%                     |                10 |              0.08976 |
| ap-northeast-3 | g4dn.8xlarge   |      0.901  | <5%                     |                10 |              0.0901  |
| us-east-1      | g5.8xlarge     |      0.9319 | >20%                    |                10 |              0.09319 |
| us-east-2      | g5.8xlarge     |      0.9424 | >20%                    |                10 |              0.09424 |
| eu-west-2      | g4dn.8xlarge   |      0.9611 | <5%                     |                10 |              0.09611 |
| eu-central-1   | g5.8xlarge     |      0.983  | >20%                    |                10 |              0.0983  |
| ap-southeast-2 | g4dn.8xlarge   |      1.0033 | 5-10%                   |                10 |              0.10033 |
| ca-central-1   | g5.8xlarge     |      1.0212 | >20%                    |                10 |              0.10212 |
| eu-west-1      | g4dn.8xlarge   |      1.028  | 5-10%                   |                10 |              0.1028  |
| ap-southeast-2 | g5.4xlarge     |      1.0441 | >20%                    |                 5 |              0.20882 |
| ap-northeast-1 | g4dn.8xlarge   |      1.0952 | >20%                    |                10 |              0.10952 |
| ap-southeast-2 | g5.8xlarge     |      1.17   | >20%                    |                10 |              0.117   |
| eu-west-1      | g5.8xlarge     |      1.1791 | >20%                    |                10 |              0.11791 |
| eu-west-2      | g5.8xlarge     |      1.1936 | >20%                    |                10 |              0.11936 |
| ap-northeast-1 | g5.8xlarge     |      1.4751 | >20%                    |                10 |              0.14751 |