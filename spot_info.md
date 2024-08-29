# Spot Prices and Interruption Frequency

## This page provides: -

Region - the region of the instance (note - some regions would require you to bake your own AMI using the image builder script)

InstanceType - instance family and size

SpotPrice - hourly price of the spot instance

InterruptionFrequency - the likelihood of your instance experiencing interruption based on the [last month of data](https://aws.amazon.com/ec2/spot/instance-advisor/)

NumberOfWorkers - the number of robomaker workers the instance can support

PricePerWorkerHour - SpotPrice divided by the number of workers the InstanceType can support

Data correct as of 2024-08-29 01:24:22.904652, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      0.1348 | 5-10%                   |                 2 |              0.0674  |
| eu-south-1     | g4dn.4xlarge   |      0.1446 | >20%                    |                 5 |              0.02892 |
| ap-southeast-1 | g4dn.2xlarge   |      0.2083 | 10-15%                  |                 2 |              0.10415 |
| sa-east-1      | g4dn.4xlarge   |      0.2159 | >20%                    |                 5 |              0.04318 |
| ap-northeast-2 | g4dn.2xlarge   |      0.2191 | <5%                     |                 2 |              0.10955 |
| ap-northeast-2 | g5.2xlarge     |      0.2312 | <5%                     |                 2 |              0.1156  |
| us-west-2      | g4dn.2xlarge   |      0.2334 | 15-20%                  |                 2 |              0.1167  |
| ap-northeast-2 | g5.4xlarge     |      0.238  | <5%                     |                 5 |              0.0476  |
| us-east-1      | g4dn.2xlarge   |      0.2459 | 10-15%                  |                 2 |              0.12295 |
| eu-north-1     | g4dn.2xlarge   |      0.2464 | 10-15%                  |                 2 |              0.1232  |
| eu-south-1     | g4dn.8xlarge   |      0.2559 | >20%                    |                10 |              0.02559 |
| us-east-2      | g4dn.2xlarge   |      0.2715 | <5%                     |                 2 |              0.13575 |
| ap-south-1     | g4dn.2xlarge   |      0.2731 | <5%                     |                 2 |              0.13655 |
| eu-central-1   | g4dn.2xlarge   |      0.2952 | <5%                     |                 2 |              0.1476  |
| us-west-1      | g4dn.2xlarge   |      0.3063 | <5%                     |                 2 |              0.15315 |
| eu-west-3      | g4dn.2xlarge   |      0.3084 | 10-15%                  |                 2 |              0.1542  |
| ca-central-1   | g4dn.2xlarge   |      0.3175 | <5%                     |                 2 |              0.15875 |
| us-west-2      | g4dn.4xlarge   |      0.3194 | >20%                    |                 5 |              0.06388 |
| eu-west-2      | g4dn.2xlarge   |      0.3228 | <5%                     |                 2 |              0.1614  |
| ap-northeast-3 | g4dn.2xlarge   |      0.339  | <5%                     |                 2 |              0.1695  |
| ap-southeast-2 | g4dn.2xlarge   |      0.3393 | <5%                     |                 2 |              0.16965 |
| eu-west-1      | g4dn.2xlarge   |      0.3528 | <5%                     |                 2 |              0.1764  |
| us-west-2      | g6e.2xlarge    |      0.3549 | <5%                     |                 2 |              0.17745 |
| sa-east-1      | g4dn.8xlarge   |      0.3698 | <5%                     |                10 |              0.03698 |
| us-east-1      | g6e.2xlarge    |      0.374  | <5%                     |                 2 |              0.187   |
| eu-north-1     | g4dn.4xlarge   |      0.3742 | <5%                     |                 5 |              0.07484 |
| us-east-2      | g6.2xlarge     |      0.379  | <5%                     |                 2 |              0.1895  |
| sa-east-1      | g5.2xlarge     |      0.3797 | <5%                     |                 2 |              0.18985 |
| us-east-1      | g6.2xlarge     |      0.3805 | 10-15%                  |                 2 |              0.19025 |
| ap-south-1     | g4dn.4xlarge   |      0.3843 | <5%                     |                 5 |              0.07686 |
| eu-north-1     | g5.2xlarge     |      0.3885 | <5%                     |                 2 |              0.19425 |
| us-east-2      | g6e.2xlarge    |      0.4008 | >20%                    |                 2 |              0.2004  |
| ap-northeast-1 | g4dn.2xlarge   |      0.4098 | >20%                    |                 2 |              0.2049  |
| us-east-1      | g4dn.4xlarge   |      0.424  | 15-20%                  |                 5 |              0.0848  |
| us-east-1      | g5.2xlarge     |      0.4369 | >20%                    |                 2 |              0.21845 |
| us-west-2      | g5.2xlarge     |      0.4399 | >20%                    |                 2 |              0.21995 |
| ap-northeast-3 | g4dn.4xlarge   |      0.4454 | <5%                     |                 5 |              0.08908 |
| ap-northeast-2 | g4dn.8xlarge   |      0.4462 | >20%                    |                10 |              0.04462 |
| us-east-1      | g6.4xlarge     |      0.4506 | 5-10%                   |                 5 |              0.09012 |
| sa-east-1      | g5.8xlarge     |      0.4559 | 5-10%                   |                10 |              0.04559 |
| us-west-2      | g6.2xlarge     |      0.4598 | 10-15%                  |                 2 |              0.2299  |
| us-east-2      | g5.2xlarge     |      0.4623 | >20%                    |                 2 |              0.23115 |
| ap-south-1     | g5.2xlarge     |      0.4633 | 10-15%                  |                 2 |              0.23165 |
| us-west-2      | g5.4xlarge     |      0.47   | >20%                    |                 5 |              0.094   |
| us-east-2      | g6.4xlarge     |      0.4755 | <5%                     |                 5 |              0.0951  |
| ap-northeast-2 | g4dn.4xlarge   |      0.4809 | >20%                    |                 5 |              0.09618 |
| us-east-2      | g6e.4xlarge    |      0.4814 | 5-10%                   |                 5 |              0.09628 |
| us-east-2      | g4dn.4xlarge   |      0.4838 | 10-15%                  |                 5 |              0.09676 |
| us-west-1      | g4dn.4xlarge   |      0.4911 | 5-10%                   |                 5 |              0.09822 |
| ap-southeast-1 | g4dn.4xlarge   |      0.4921 | <5%                     |                 5 |              0.09842 |
| eu-central-1   | g4dn.4xlarge   |      0.4931 | 5-10%                   |                 5 |              0.09862 |
| eu-west-3      | g4dn.4xlarge   |      0.4932 | 15-20%                  |                 5 |              0.09864 |
| ca-central-1   | g4dn.4xlarge   |      0.4939 | 5-10%                   |                 5 |              0.09878 |
| us-east-1      | g6e.4xlarge    |      0.5033 | <5%                     |                 5 |              0.10066 |
| ap-south-1     | g5.4xlarge     |      0.5043 | >20%                    |                 5 |              0.10086 |
| eu-central-1   | g5.2xlarge     |      0.5115 | >20%                    |                 2 |              0.25575 |
| eu-west-2      | g4dn.4xlarge   |      0.5171 | <5%                     |                 5 |              0.10342 |
| eu-north-1     | g5.4xlarge     |      0.5184 | 10-15%                  |                 5 |              0.10368 |
| us-west-2      | g6e.4xlarge    |      0.5187 | <5%                     |                 5 |              0.10374 |
| eu-west-2      | g5.2xlarge     |      0.5578 | >20%                    |                 2 |              0.2789  |
| ap-southeast-3 | g5.2xlarge     |      0.5616 | <5%                     |                 2 |              0.2808  |
| eu-west-1      | g5.2xlarge     |      0.5808 | >20%                    |                 2 |              0.2904  |
| ap-southeast-2 | g4dn.4xlarge   |      0.5842 | 5-10%                   |                 5 |              0.11684 |
| us-west-2      | g6.4xlarge     |      0.5867 | <5%                     |                 5 |              0.11734 |
| ca-central-1   | g5.2xlarge     |      0.588  | >20%                    |                 2 |              0.294   |
| eu-west-1      | g4dn.4xlarge   |      0.5893 | <5%                     |                 5 |              0.11786 |
| eu-north-1     | g4dn.8xlarge   |      0.6005 | <5%                     |                10 |              0.06005 |
| ap-southeast-2 | g5.2xlarge     |      0.6011 | 10-15%                  |                 2 |              0.30055 |
| sa-east-1      | g5.4xlarge     |      0.6069 | >20%                    |                 5 |              0.12138 |
| us-east-1      | g5.4xlarge     |      0.6079 | >20%                    |                 5 |              0.12158 |
| ap-northeast-1 | g4dn.4xlarge   |      0.6157 | >20%                    |                 5 |              0.12314 |
| ap-south-1     | g4dn.8xlarge   |      0.6279 | <5%                     |                10 |              0.06279 |
| ca-central-1   | g5.4xlarge     |      0.6493 | 10-15%                  |                 5 |              0.12986 |
| eu-central-1   | g5.4xlarge     |      0.6651 | >20%                    |                 5 |              0.13302 |
| us-east-1      | g6e.8xlarge    |      0.6833 | 5-10%                   |                10 |              0.06833 |
| us-east-2      | g6.8xlarge     |      0.6862 | <5%                     |                10 |              0.06862 |
| us-east-2      | g5.4xlarge     |      0.6872 | >20%                    |                 5 |              0.13744 |
| us-west-2      | g4dn.8xlarge   |      0.7072 | >20%                    |                10 |              0.07072 |
| ap-southeast-3 | g5.4xlarge     |      0.713  | <5%                     |                 5 |              0.1426  |
| us-east-1      | g6.8xlarge     |      0.7281 | <5%                     |                10 |              0.07281 |
| us-east-2      | g6e.8xlarge    |      0.7394 | 10-15%                  |                10 |              0.07394 |
| ap-northeast-1 | g5.2xlarge     |      0.7488 | >20%                    |                 2 |              0.3744  |
| us-west-2      | g5.8xlarge     |      0.7647 | >20%                    |                10 |              0.07647 |
| us-east-1      | g4dn.8xlarge   |      0.7729 | 10-15%                  |                10 |              0.07729 |
| eu-west-2      | g5.4xlarge     |      0.7755 | >20%                    |                 5 |              0.1551  |
| ap-southeast-1 | g4dn.8xlarge   |      0.7769 | 10-15%                  |                10 |              0.07769 |
| eu-north-1     | g5.8xlarge     |      0.7791 | 5-10%                   |                10 |              0.07791 |
| us-west-2      | g6e.8xlarge    |      0.7827 | <5%                     |                10 |              0.07827 |
| ap-northeast-2 | g5.8xlarge     |      0.7875 | <5%                     |                10 |              0.07875 |
| eu-west-1      | g5.4xlarge     |      0.7942 | >20%                    |                 5 |              0.15884 |
| eu-west-3      | g4dn.8xlarge   |      0.7981 | 15-20%                  |                10 |              0.07981 |
| us-east-2      | g4dn.8xlarge   |      0.8025 | >20%                    |                10 |              0.08025 |
| eu-central-1   | g4dn.8xlarge   |      0.8208 | 10-15%                  |                10 |              0.08208 |
| ap-southeast-3 | g5.8xlarge     |      0.8237 | <5%                     |                10 |              0.08237 |
| us-west-2      | g6.8xlarge     |      0.8237 | <5%                     |                10 |              0.08237 |
| ca-central-1   | g4dn.8xlarge   |      0.8243 | <5%                     |                10 |              0.08243 |
| ap-south-1     | g5.8xlarge     |      0.8778 | >20%                    |                10 |              0.08778 |
| ap-northeast-1 | g5.4xlarge     |      0.8909 | >20%                    |                 5 |              0.17818 |
| us-west-1      | g4dn.8xlarge   |      0.8976 | <5%                     |                10 |              0.08976 |
| ap-northeast-3 | g4dn.8xlarge   |      0.9074 | <5%                     |                10 |              0.09074 |
| us-east-1      | g5.8xlarge     |      0.9319 | >20%                    |                10 |              0.09319 |
| us-east-2      | g5.8xlarge     |      0.9384 | >20%                    |                10 |              0.09384 |
| eu-west-2      | g4dn.8xlarge   |      0.9561 | <5%                     |                10 |              0.09561 |
| eu-central-1   | g5.8xlarge     |      0.9817 | >20%                    |                10 |              0.09817 |
| ap-southeast-2 | g4dn.8xlarge   |      1.0033 | 5-10%                   |                10 |              0.10033 |
| ca-central-1   | g5.8xlarge     |      1.0212 | >20%                    |                10 |              0.10212 |
| eu-west-1      | g4dn.8xlarge   |      1.0301 | 5-10%                   |                10 |              0.10301 |
| ap-southeast-2 | g5.4xlarge     |      1.0441 | >20%                    |                 5 |              0.20882 |
| ap-northeast-1 | g4dn.8xlarge   |      1.0912 | >20%                    |                10 |              0.10912 |
| ap-southeast-2 | g5.8xlarge     |      1.17   | >20%                    |                10 |              0.117   |
| eu-west-1      | g5.8xlarge     |      1.1791 | >20%                    |                10 |              0.11791 |
| eu-west-2      | g5.8xlarge     |      1.1936 | >20%                    |                10 |              0.11936 |
| ap-northeast-1 | g5.8xlarge     |      1.4759 | >20%                    |                10 |              0.14759 |