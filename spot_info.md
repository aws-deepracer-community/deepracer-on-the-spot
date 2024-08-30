# Spot Prices and Interruption Frequency

## This page provides: -

Region - the region of the instance (note - some regions would require you to bake your own AMI using the image builder script)

InstanceType - instance family and size

SpotPrice - hourly price of the spot instance

InterruptionFrequency - the likelihood of your instance experiencing interruption based on the [last month of data](https://aws.amazon.com/ec2/spot/instance-advisor/)

NumberOfWorkers - the number of robomaker workers the instance can support

PricePerWorkerHour - SpotPrice divided by the number of workers the InstanceType can support

Data correct as of 2024-08-30 01:24:45.058837, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      0.1294 | 5-10%                   |                 2 |              0.0647  |
| eu-south-1     | g4dn.4xlarge   |      0.141  | >20%                    |                 5 |              0.0282  |
| ap-southeast-1 | g4dn.2xlarge   |      0.2012 | 15-20%                  |                 2 |              0.1006  |
| sa-east-1      | g4dn.4xlarge   |      0.211  | >20%                    |                 5 |              0.0422  |
| ap-northeast-2 | g4dn.2xlarge   |      0.2234 | <5%                     |                 2 |              0.1117  |
| us-west-2      | g4dn.2xlarge   |      0.2349 | 15-20%                  |                 2 |              0.11745 |
| ap-northeast-2 | g5.2xlarge     |      0.24   | <5%                     |                 2 |              0.12    |
| ap-northeast-2 | g5.4xlarge     |      0.2456 | <5%                     |                 5 |              0.04912 |
| eu-north-1     | g4dn.2xlarge   |      0.2495 | 10-15%                  |                 2 |              0.12475 |
| us-east-1      | g4dn.2xlarge   |      0.2508 | 10-15%                  |                 2 |              0.1254  |
| eu-south-1     | g4dn.8xlarge   |      0.2547 | >20%                    |                10 |              0.02547 |
| us-east-2      | g4dn.2xlarge   |      0.2699 | <5%                     |                 2 |              0.13495 |
| ap-south-1     | g4dn.2xlarge   |      0.2706 | <5%                     |                 2 |              0.1353  |
| eu-central-1   | g4dn.2xlarge   |      0.2952 | <5%                     |                 2 |              0.1476  |
| us-west-1      | g4dn.2xlarge   |      0.3064 | <5%                     |                 2 |              0.1532  |
| eu-west-3      | g4dn.2xlarge   |      0.3139 | 10-15%                  |                 2 |              0.15695 |
| ca-central-1   | g4dn.2xlarge   |      0.3175 | <5%                     |                 2 |              0.15875 |
| us-west-2      | g4dn.4xlarge   |      0.3223 | >20%                    |                 5 |              0.06446 |
| eu-west-2      | g4dn.2xlarge   |      0.3246 | <5%                     |                 2 |              0.1623  |
| ap-southeast-2 | g4dn.2xlarge   |      0.3397 | <5%                     |                 2 |              0.16985 |
| ap-northeast-3 | g4dn.2xlarge   |      0.3437 | <5%                     |                 2 |              0.17185 |
| eu-west-1      | g4dn.2xlarge   |      0.3542 | <5%                     |                 2 |              0.1771  |
| sa-east-1      | g4dn.8xlarge   |      0.3698 | <5%                     |                10 |              0.03698 |
| eu-north-1     | g4dn.4xlarge   |      0.375  | <5%                     |                 5 |              0.075   |
| us-west-2      | g6e.2xlarge    |      0.3751 | <5%                     |                 2 |              0.18755 |
| us-east-2      | g6.2xlarge     |      0.3771 | <5%                     |                 2 |              0.18855 |
| sa-east-1      | g5.2xlarge     |      0.3837 | <5%                     |                 2 |              0.19185 |
| ap-south-1     | g4dn.4xlarge   |      0.3853 | <5%                     |                 5 |              0.07706 |
| us-east-1      | g6e.2xlarge    |      0.3868 | <5%                     |                 2 |              0.1934  |
| eu-north-1     | g5.2xlarge     |      0.3885 | <5%                     |                 2 |              0.19425 |
| us-east-1      | g6.2xlarge     |      0.3913 | 10-15%                  |                 2 |              0.19565 |
| ap-northeast-1 | g4dn.2xlarge   |      0.4098 | >20%                    |                 2 |              0.2049  |
| us-east-1      | g4dn.4xlarge   |      0.4254 | 15-20%                  |                 5 |              0.08508 |
| us-east-2      | g6e.2xlarge    |      0.4291 | >20%                    |                 2 |              0.21455 |
| sa-east-1      | g5.8xlarge     |      0.4314 | 5-10%                   |                10 |              0.04314 |
| us-west-2      | g5.2xlarge     |      0.4355 | >20%                    |                 2 |              0.21775 |
| us-east-1      | g5.2xlarge     |      0.4384 | >20%                    |                 2 |              0.2192  |
| ap-northeast-2 | g4dn.8xlarge   |      0.4389 | >20%                    |                10 |              0.04389 |
| us-east-1      | g6.4xlarge     |      0.4506 | 5-10%                   |                 5 |              0.09012 |
| ap-northeast-3 | g4dn.4xlarge   |      0.4551 | <5%                     |                 5 |              0.09102 |
| ap-south-1     | g5.2xlarge     |      0.4594 | 10-15%                  |                 2 |              0.2297  |
| us-east-2      | g5.2xlarge     |      0.4623 | >20%                    |                 2 |              0.23115 |
| us-west-2      | g6.2xlarge     |      0.469  | 10-15%                  |                 2 |              0.2345  |
| us-east-2      | g6.4xlarge     |      0.4709 | <5%                     |                 5 |              0.09418 |
| ap-northeast-2 | g4dn.4xlarge   |      0.4726 | >20%                    |                 5 |              0.09452 |
| us-west-2      | g5.4xlarge     |      0.4732 | >20%                    |                 5 |              0.09464 |
| us-east-2      | g4dn.4xlarge   |      0.4787 | 10-15%                  |                 5 |              0.09574 |
| eu-west-3      | g4dn.4xlarge   |      0.4851 | 15-20%                  |                 5 |              0.09702 |
| us-west-1      | g4dn.4xlarge   |      0.4898 | 5-10%                   |                 5 |              0.09796 |
| ca-central-1   | g4dn.4xlarge   |      0.496  | 5-10%                   |                 5 |              0.0992  |
| eu-central-1   | g4dn.4xlarge   |      0.4962 | 5-10%                   |                 5 |              0.09924 |
| ap-southeast-1 | g4dn.4xlarge   |      0.4981 | <5%                     |                 5 |              0.09962 |
| us-east-2      | g6e.4xlarge    |      0.4988 | <5%                     |                 5 |              0.09976 |
| ap-south-1     | g5.4xlarge     |      0.5039 | >20%                    |                 5 |              0.10078 |
| eu-central-1   | g5.2xlarge     |      0.5042 | >20%                    |                 2 |              0.2521  |
| eu-west-2      | g4dn.4xlarge   |      0.5182 | <5%                     |                 5 |              0.10364 |
| eu-north-1     | g5.4xlarge     |      0.5184 | 10-15%                  |                 5 |              0.10368 |
| us-east-1      | g6e.4xlarge    |      0.5331 | <5%                     |                 5 |              0.10662 |
| us-west-2      | g6e.4xlarge    |      0.5396 | <5%                     |                 5 |              0.10792 |
| ap-southeast-3 | g5.2xlarge     |      0.5616 | <5%                     |                 2 |              0.2808  |
| eu-west-2      | g5.2xlarge     |      0.5632 | >20%                    |                 2 |              0.2816  |
| eu-west-1      | g5.2xlarge     |      0.5812 | >20%                    |                 2 |              0.2906  |
| eu-west-1      | g4dn.4xlarge   |      0.5846 | <5%                     |                 5 |              0.11692 |
| ca-central-1   | g5.2xlarge     |      0.5855 | >20%                    |                 2 |              0.29275 |
| ap-southeast-2 | g4dn.4xlarge   |      0.5875 | 10-15%                  |                 5 |              0.1175  |
| ap-southeast-2 | g5.2xlarge     |      0.5977 | 10-15%                  |                 2 |              0.29885 |
| us-west-2      | g6.4xlarge     |      0.601  | <5%                     |                 5 |              0.1202  |
| us-east-1      | g5.4xlarge     |      0.6085 | >20%                    |                 5 |              0.1217  |
| eu-north-1     | g4dn.8xlarge   |      0.6088 | <5%                     |                10 |              0.06088 |
| ap-northeast-1 | g4dn.4xlarge   |      0.622  | >20%                    |                 5 |              0.1244  |
| ap-south-1     | g4dn.8xlarge   |      0.6247 | <5%                     |                10 |              0.06247 |
| sa-east-1      | g5.4xlarge     |      0.6349 | >20%                    |                 5 |              0.12698 |
| ca-central-1   | g5.4xlarge     |      0.6521 | 10-15%                  |                 5 |              0.13042 |
| eu-central-1   | g5.4xlarge     |      0.6701 | >20%                    |                 5 |              0.13402 |
| us-east-2      | g6.8xlarge     |      0.6828 | <5%                     |                10 |              0.06828 |
| us-east-2      | g5.4xlarge     |      0.6836 | >20%                    |                 5 |              0.13672 |
| ap-southeast-3 | g5.4xlarge     |      0.703  | <5%                     |                 5 |              0.1406  |
| us-west-2      | g4dn.8xlarge   |      0.7106 | >20%                    |                10 |              0.07106 |
| us-east-1      | g6e.8xlarge    |      0.7168 | 5-10%                   |                10 |              0.07168 |
| us-east-1      | g6.8xlarge     |      0.7358 | <5%                     |                10 |              0.07358 |
| ap-northeast-2 | g5.8xlarge     |      0.7379 | <5%                     |                10 |              0.07379 |
| ap-northeast-1 | g5.2xlarge     |      0.7478 | >20%                    |                 2 |              0.3739  |
| us-west-2      | g5.8xlarge     |      0.7637 | >20%                    |                10 |              0.07637 |
| us-east-1      | g4dn.8xlarge   |      0.7712 | 10-15%                  |                10 |              0.07712 |
| eu-west-2      | g5.4xlarge     |      0.7722 | >20%                    |                 5 |              0.15444 |
| ap-southeast-1 | g4dn.8xlarge   |      0.7841 | 10-15%                  |                10 |              0.07841 |
| eu-north-1     | g5.8xlarge     |      0.7886 | 5-10%                   |                10 |              0.07886 |
| us-east-2      | g6e.8xlarge    |      0.7955 | 10-15%                  |                10 |              0.07955 |
| eu-west-3      | g4dn.8xlarge   |      0.7959 | 15-20%                  |                10 |              0.07959 |
| eu-west-1      | g5.4xlarge     |      0.7993 | >20%                    |                 5 |              0.15986 |
| us-west-2      | g6.8xlarge     |      0.8152 | <5%                     |                10 |              0.08152 |
| us-west-2      | g6e.8xlarge    |      0.8162 | <5%                     |                10 |              0.08162 |
| us-east-2      | g4dn.8xlarge   |      0.817  | >20%                    |                10 |              0.0817  |
| eu-central-1   | g4dn.8xlarge   |      0.8198 | 10-15%                  |                10 |              0.08198 |
| ap-southeast-3 | g5.8xlarge     |      0.8245 | <5%                     |                10 |              0.08245 |
| ca-central-1   | g4dn.8xlarge   |      0.8289 | <5%                     |                10 |              0.08289 |
| ap-south-1     | g5.8xlarge     |      0.8765 | >20%                    |                10 |              0.08765 |
| ap-northeast-1 | g5.4xlarge     |      0.8869 | >20%                    |                 5 |              0.17738 |
| us-west-1      | g4dn.8xlarge   |      0.8985 | <5%                     |                10 |              0.08985 |
| ap-northeast-3 | g4dn.8xlarge   |      0.9174 | <5%                     |                10 |              0.09174 |
| us-east-1      | g5.8xlarge     |      0.9239 | >20%                    |                10 |              0.09239 |
| us-east-2      | g5.8xlarge     |      0.9384 | >20%                    |                10 |              0.09384 |
| eu-west-2      | g4dn.8xlarge   |      0.9511 | <5%                     |                10 |              0.09511 |
| eu-central-1   | g5.8xlarge     |      0.9785 | >20%                    |                10 |              0.09785 |
| ap-southeast-2 | g4dn.8xlarge   |      0.9966 | 5-10%                   |                10 |              0.09966 |
| ca-central-1   | g5.8xlarge     |      1.0186 | >20%                    |                10 |              0.10186 |
| eu-west-1      | g4dn.8xlarge   |      1.0278 | 5-10%                   |                10 |              0.10278 |
| ap-southeast-2 | g5.4xlarge     |      1.0425 | >20%                    |                 5 |              0.2085  |
| ap-northeast-1 | g4dn.8xlarge   |      1.0638 | >20%                    |                10 |              0.10638 |
| ap-southeast-2 | g5.8xlarge     |      1.1667 | >20%                    |                10 |              0.11667 |
| eu-west-2      | g5.8xlarge     |      1.1966 | >20%                    |                10 |              0.11966 |
| eu-west-1      | g5.8xlarge     |      1.2011 | >20%                    |                10 |              0.12011 |
| ap-northeast-1 | g5.8xlarge     |      1.4785 | >20%                    |                10 |              0.14785 |