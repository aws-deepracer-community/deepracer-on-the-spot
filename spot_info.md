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

Data correct as of 2025-01-08 01:38:16.717147, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1341 | 10-15%                  |                 2 |              0.06705 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2176 | 10-15%                  |                 2 |              0.1088  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.231  | 5-10%                   |                 2 |              0.1155  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2312 | 5-10%                   |                 2 |              0.1156  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2354 | 15-20%                  |                 2 |              0.1177  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2403 | <5%                     |                 2 |              0.12015 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2483 | 15-20%                  |                 2 |              0.12415 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2515 | 10-15%                  |                 2 |              0.12575 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2553 | <5%                     |                 2 |              0.12765 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2581 | 5-10%                   |                 2 |              0.12905 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2839 | 10-15%                  |                 2 |              0.14195 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2873 | >20%                    |                 2 |              0.14365 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2879 | <5%                     |                 2 |              0.14395 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2922 | <5%                     |                 2 |              0.1461  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2946 | <5%                     |                 5 |              0.05892 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3    | >20%                    |                 5 |              0.06    |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3045 | 5-10%                   |                 2 |              0.15225 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3058 | 10-15%                  |                 2 |              0.1529  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3105 | 5-10%                   |                 5 |              0.0621  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.32   | <5%                     |                 5 |              0.064   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3263 | 5-10%                   |                 2 |              0.16315 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3349 | >20%                    |                10 |              0.03349 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3363 | 5-10%                   |                 5 |              0.06726 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3383 | <5%                     |                 2 |              0.16915 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3384 | >20%                    |                10 |              0.03384 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3589 | <5%                     |                 2 |              0.17945 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3615 | 5-10%                   |                 5 |              0.0723  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3628 | 5-10%                   |                 2 |              0.1814  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3697 | <5%                     |                 2 |              0.18485 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3709 | 15-20%                  |                 5 |              0.07418 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3756 | >20%                    |                 2 |              0.1878  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.376  | <5%                     |                 5 |              0.0752  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3767 | >20%                    |                 2 |              0.18835 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.391  | <5%                     |                 5 |              0.0782  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3948 | 5-10%                   |                 2 |              0.1974  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3966 | >20%                    |                 2 |              0.1983  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.399  | 5-10%                   |                 2 |              0.1995  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3995 | 10-15%                  |                 5 |              0.0799  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.403  | <5%                     |                 2 |              0.2015  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4046 | <5%                     |                 2 |              0.2023  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4148 | >20%                    |                 2 |              0.2074  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4203 | 5-10%                   |                 5 |              0.08406 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4232 | 10-15%                  |                 2 |              0.2116  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4282 | 5-10%                   |                 2 |              0.2141  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4289 | 5-10%                   |                 2 |              0.21445 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4409 | <5%                     |                 2 |              0.22045 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4521 | 15-20%                  |                10 |              0.04521 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4654 | <5%                     |                 5 |              0.09308 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.469  | <5%                     |                 2 |              0.2345  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4723 | >20%                    |                 5 |              0.09446 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | 10-15%                  |                 5 |              0.09452 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4731 | 10-15%                  |                 5 |              0.09462 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.474  | 5-10%                   |                10 |              0.0474  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4762 | <5%                     |                 5 |              0.09524 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4773 | 5-10%                   |                 5 |              0.09546 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4777 | 5-10%                   |                 2 |              0.23885 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4802 | 10-15%                  |                10 |              0.04802 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4893 | 15-20%                  |                 2 |              0.24465 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4905 | >20%                    |                 5 |              0.0981  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4922 | <5%                     |                 5 |              0.09844 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4945 | <5%                     |                 2 |              0.24725 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4963 | 15-20%                  |                 5 |              0.09926 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5104 | <5%                     |                 5 |              0.10208 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5109 | <5%                     |                 2 |              0.25545 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5114 | >20%                    |                 5 |              0.10228 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5129 | <5%                     |                 5 |              0.10258 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5178 | 15-20%                  |                 2 |              0.2589  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5189 | <5%                     |                 5 |              0.10378 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5337 | >20%                    |                 5 |              0.10674 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5422 | 5-10%                   |                 5 |              0.10844 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5439 | >20%                    |                 5 |              0.10878 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5483 | 10-15%                  |                 5 |              0.10966 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5513 | 5-10%                   |                 5 |              0.11026 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.561  | 5-10%                   |                 5 |              0.1122  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.563  | 5-10%                   |                 5 |              0.1126  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5681 | >20%                    |                 5 |              0.11362 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5718 | 15-20%                  |                 2 |              0.2859  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5767 | 10-15%                  |                 5 |              0.11534 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5798 | 5-10%                   |                 5 |              0.11596 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5859 | <5%                     |                 5 |              0.11718 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5912 | 15-20%                  |                 2 |              0.2956  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5969 | 10-15%                  |                10 |              0.05969 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6264 | 5-10%                   |                10 |              0.06264 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6694 | <5%                     |                 5 |              0.13388 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6698 | 5-10%                   |                10 |              0.06698 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6715 | >20%                    |                10 |              0.06715 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6762 | >20%                    |                 5 |              0.13524 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6782 | 15-20%                  |                10 |              0.06782 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6793 | >20%                    |                 2 |              0.33965 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7023 | 15-20%                  |                 2 |              0.35115 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7121 | 15-20%                  |                 5 |              0.14242 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7191 | 15-20%                  |                 5 |              0.14382 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7267 | >20%                    |                10 |              0.07267 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7288 | <5%                     |                 5 |              0.14576 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.737  | 5-10%                   |                 2 |              0.3685  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7388 | 10-15%                  |                10 |              0.07388 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7423 | >20%                    |                 5 |              0.14846 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7466 | <5%                     |                10 |              0.07466 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7534 | <5%                     |                10 |              0.07534 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7634 | >20%                    |                10 |              0.07634 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7914 | >20%                    |                10 |              0.07914 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8111 | >20%                    |                 5 |              0.16222 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.815  | 5-10%                   |                10 |              0.0815  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8237 | <5%                     |                10 |              0.08237 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8263 | 15-20%                  |                10 |              0.08263 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8266 | >20%                    |                 5 |              0.16532 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8311 | 10-15%                  |                10 |              0.08311 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8423 | <5%                     |                 2 |              0.42115 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8545 | >20%                    |                10 |              0.08545 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8557 | <5%                     |                10 |              0.08557 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.856  | >20%                    |                10 |              0.0856  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8637 | 15-20%                  |                10 |              0.08637 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8639 | 10-15%                  |                10 |              0.08639 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8707 | <5%                     |                10 |              0.08707 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.878  | 5-10%                   |                10 |              0.0878  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.881  | <5%                     |                10 |              0.0881  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.896  | <5%                     |                10 |              0.0896  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9188 | 5-10%                   |                10 |              0.09188 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9193 | 15-20%                  |                10 |              0.09193 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9312 | <5%                     |                10 |              0.09312 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9457 | <5%                     |                 2 |              0.47285 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9667 | 5-10%                   |                10 |              0.09667 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9817 | 10-15%                  |                 5 |              0.19634 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.985  | 10-15%                  |                 5 |              0.197   |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9998 | 5-10%                   |                 5 |              0.19996 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0096 | >20%                    |                10 |              0.10096 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0117 | <5%                     |                10 |              0.10117 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0127 | <5%                     |                10 |              0.10127 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0273 | 5-10%                   |                 5 |              0.20546 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0302 | 15-20%                  |                 2 |              0.5151  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0354 | 5-10%                   |                10 |              0.10354 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0515 | <5%                     |                10 |              0.10515 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1022 | >20%                    |                10 |              0.11022 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1542 | 10-15%                  |                10 |              0.11542 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3712 | >20%                    |                10 |              0.13712 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.405  | 5-10%                   |                10 |              0.1405  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.488  | <5%                     |                10 |              0.1488  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5091 | 10-15%                  |                10 |              0.15091 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5158 | 15-20%                  |                 5 |              0.30316 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5898 | 5-10%                   |                10 |              0.15898 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1768 | 10-15%                  |                10 |              0.21768 |