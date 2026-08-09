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

Data correct as of 2026-08-09 02:01:00.975647, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1872 | >20%                    |                 2 |              0.0936  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.193  | >20%                    |                 2 |              0.0965  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1967 | >20%                    |                 2 |              0.09835 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2183 | >20%                    |                 2 |              0.10915 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2305 | 15-20%                  |                 2 |              0.11525 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2403 | >20%                    |                 2 |              0.12015 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2659 | >20%                    |                 5 |              0.05318 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2711 | >20%                    |                 2 |              0.13555 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2723 | >20%                    |                 2 |              0.13615 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2744 | 15-20%                  |                 2 |              0.1372  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2773 | 5-10%                   |                10 |              0.02773 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2846 | >20%                    |                 2 |              0.1423  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2891 | 10-15%                  |                 2 |              0.14455 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3021 | >20%                    |                 2 |              0.15105 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3082 | 15-20%                  |                 2 |              0.1541  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3086 | >20%                    |                 2 |              0.1543  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.318  | >20%                    |                 5 |              0.0636  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3345 | 10-15%                  |                 2 |              0.16725 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.338  | >20%                    |                 5 |              0.0676  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3411 | 15-20%                  |                 2 |              0.17055 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3426 | 15-20%                  |                 5 |              0.06852 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3546 | >20%                    |                 5 |              0.07092 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.36   | 5-10%                   |                10 |              0.036   |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.361  | >20%                    |                10 |              0.0361  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3637 | >20%                    |                 2 |              0.18185 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3741 | <5%                     |                 2 |              0.18705 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3773 | >20%                    |                10 |              0.03773 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3785 | >20%                    |                10 |              0.03785 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3847 | >20%                    |                 5 |              0.07694 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4093 | >20%                    |                 2 |              0.20465 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4103 | 15-20%                  |                 2 |              0.20515 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4128 | >20%                    |                10 |              0.04128 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.4244 | >20%                    |                 2 |              0.2122  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4282 | <5%                     |                 2 |              0.2141  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4283 | >20%                    |                 2 |              0.21415 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4287 | 5-10%                   |                10 |              0.04287 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4331 | 10-15%                  |                 2 |              0.21655 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4339 | >20%                    |                 2 |              0.21695 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4434 | >20%                    |                 5 |              0.08868 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4452 | 10-15%                  |                 2 |              0.2226  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4457 | >20%                    |                10 |              0.04457 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4516 | >20%                    |                 5 |              0.09032 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4581 | >20%                    |                 5 |              0.09162 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4585 | >20%                    |                 2 |              0.22925 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4663 | >20%                    |                 5 |              0.09326 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4696 | >20%                    |                 2 |              0.2348  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4719 | >20%                    |                 2 |              0.23595 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4723 | >20%                    |                 2 |              0.23615 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4766 | 10-15%                  |                10 |              0.04766 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4776 | >20%                    |                 5 |              0.09552 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4917 | >20%                    |                 5 |              0.09834 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4995 | 15-20%                  |                 5 |              0.0999  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5067 | >20%                    |                 5 |              0.10134 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5116 | >20%                    |                 5 |              0.10232 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5153 | >20%                    |                 2 |              0.25765 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5281 | >20%                    |                 2 |              0.26405 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5313 | >20%                    |                 5 |              0.10626 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5394 | >20%                    |                 5 |              0.10788 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5428 | 5-10%                   |                 2 |              0.2714  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5596 | >20%                    |                10 |              0.05596 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5659 | >20%                    |                 5 |              0.11318 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5682 | <5%                     |                 2 |              0.2841  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5706 | >20%                    |                10 |              0.05706 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5788 | >20%                    |                 2 |              0.2894  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5792 | 10-15%                  |                 5 |              0.11584 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5896 | >20%                    |                 5 |              0.11792 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.591  | 15-20%                  |                10 |              0.0591  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5988 | >20%                    |                 5 |              0.11976 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6156 | >20%                    |                10 |              0.06156 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6168 | >20%                    |                 5 |              0.12336 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6189 | >20%                    |                 2 |              0.30945 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6219 | >20%                    |                 5 |              0.12438 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6229 | >20%                    |                 2 |              0.31145 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.632  | >20%                    |                 5 |              0.1264  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6377 | >20%                    |                 5 |              0.12754 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6389 | >20%                    |                 5 |              0.12778 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6396 | <5%                     |                 5 |              0.12792 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6447 | >20%                    |                 5 |              0.12894 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6597 | 5-10%                   |                 5 |              0.13194 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6608 | >20%                    |                 5 |              0.13216 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6635 | >20%                    |                 5 |              0.1327  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.6692 | >20%                    |                 5 |              0.13384 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6781 | >20%                    |                10 |              0.06781 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.684  | 15-20%                  |                 5 |              0.1368  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6883 | >20%                    |                10 |              0.06883 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6951 | >20%                    |                 2 |              0.34755 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7019 | >20%                    |                 2 |              0.35095 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7342 | >20%                    |                10 |              0.07342 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7358 |                         |                 2 |              0.3679  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7507 | >20%                    |                10 |              0.07507 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7652 | >20%                    |                 5 |              0.15304 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7735 | >20%                    |                10 |              0.07735 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7759 | >20%                    |                 5 |              0.15518 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7989 | 10-15%                  |                 2 |              0.39945 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8036 | <5%                     |                10 |              0.08036 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8061 |                         |                 5 |              0.16122 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8263 | >20%                    |                 2 |              0.41315 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8324 | >20%                    |                10 |              0.08324 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8331 | >20%                    |                10 |              0.08331 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8429 | >20%                    |                 2 |              0.42145 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8554 | >20%                    |                10 |              0.08554 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8717 | 15-20%                  |                10 |              0.08717 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8872 | 10-15%                  |                 2 |              0.4436  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8905 | 5-10%                   |                10 |              0.08905 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8961 | 15-20%                  |                10 |              0.08961 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8962 | 15-20%                  |                10 |              0.08962 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8999 | >20%                    |                10 |              0.08999 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9167 | >20%                    |                10 |              0.09167 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9188 | >20%                    |                10 |              0.09188 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9202 | >20%                    |                 5 |              0.18404 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9209 | >20%                    |                 5 |              0.18418 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9211 |                         |                 2 |              0.46055 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.924  | 5-10%                   |                10 |              0.0924  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9241 | >20%                    |                 5 |              0.18482 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9367 | >20%                    |                 5 |              0.18734 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9414 | >20%                    |                10 |              0.09414 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9585 | >20%                    |                 5 |              0.1917  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9707 | >20%                    |                10 |              0.09707 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9986 | >20%                    |                 5 |              0.19972 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0062 | 15-20%                  |                10 |              0.10062 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0142 | >20%                    |                10 |              0.10142 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0168 | 15-20%                  |                10 |              0.10168 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      1.0276 | 15-20%                  |                 2 |              0.5138  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0306 | >20%                    |                10 |              0.10306 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0326 | >20%                    |                10 |              0.10326 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0388 | >20%                    |                 2 |              0.5194  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0921 | >20%                    |                 5 |              0.21842 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0957 | >20%                    |                 2 |              0.54785 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.127  |                         |                10 |              0.1127  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1339 | >20%                    |                10 |              0.11339 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.151  | 5-10%                   |                 2 |              0.5755  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1798 | 15-20%                  |                10 |              0.11798 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2511 | >20%                    |                 5 |              0.25022 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2548 | >20%                    |                10 |              0.12548 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.2904 |                         |                 5 |              0.25808 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.31   | >20%                    |                 5 |              0.262   |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3129 | >20%                    |                10 |              0.13129 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.3263 | >20%                    |                10 |              0.13263 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3811 | >20%                    |                 5 |              0.27622 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4115 | 10-15%                  |                 2 |              0.70575 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.4493 | >20%                    |                10 |              0.14493 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.452  | >20%                    |                10 |              0.1452  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4663 | >20%                    |                10 |              0.14663 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5339 | 15-20%                  |                 5 |              0.30678 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.5368 | 10-15%                  |                10 |              0.15368 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.6632 | 5-10%                   |                 5 |              0.33264 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6758 | >20%                    |                10 |              0.16758 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.6948 | >20%                    |                 5 |              0.33896 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7148 | 5-10%                   |                10 |              0.17148 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.7202 | 5-10%                   |                 2 |              0.8601  |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.799  |                         |                10 |              0.1799  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8239 | >20%                    |                10 |              0.18239 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.881  | 15-20%                  |                10 |              0.1881  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.1457 | 5-10%                   |                 2 |              1.07285 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.7946 | >20%                    |                 5 |              0.55892 |