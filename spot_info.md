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

Data correct as of 2025-10-03 01:42:24.990455, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1916 | >20%                    |                 2 |              0.0958  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1969 | >20%                    |                 2 |              0.09845 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2115 | 10-15%                  |                 2 |              0.10575 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2235 | 10-15%                  |                 5 |              0.0447  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2348 | >20%                    |                 2 |              0.1174  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2413 | 5-10%                   |                 2 |              0.12065 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2418 | >20%                    |                 2 |              0.1209  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2538 | >20%                    |                 5 |              0.05076 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2669 | >20%                    |                 2 |              0.13345 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2703 | >20%                    |                 2 |              0.13515 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.281  | >20%                    |                 5 |              0.0562  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2917 | >20%                    |                 2 |              0.14585 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2938 | >20%                    |                 2 |              0.1469  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2942 | 10-15%                  |                 2 |              0.1471  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3002 | 5-10%                   |                 2 |              0.1501  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3245 | 15-20%                  |                 2 |              0.16225 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3246 | 10-15%                  |                 2 |              0.1623  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3339 | >20%                    |                 2 |              0.16695 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3346 | >20%                    |                 2 |              0.1673  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3538 | 15-20%                  |                 2 |              0.1769  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3539 | >20%                    |                 2 |              0.17695 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3574 | 15-20%                  |                 2 |              0.1787  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.36   | >20%                    |                 5 |              0.072   |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3639 | >20%                    |                10 |              0.03639 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3665 | >20%                    |                 2 |              0.18325 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3692 | >20%                    |                 2 |              0.1846  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3706 | >20%                    |                 2 |              0.1853  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.373  | >20%                    |                 5 |              0.0746  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3872 | >20%                    |                 2 |              0.1936  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3908 | 5-10%                   |                 2 |              0.1954  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3947 | >20%                    |                 2 |              0.19735 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.396  | >20%                    |                 5 |              0.0792  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3981 | >20%                    |                 2 |              0.19905 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4013 | >20%                    |                10 |              0.04013 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4045 | >20%                    |                 5 |              0.0809  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.405  | >20%                    |                 2 |              0.2025  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4105 | >20%                    |                 5 |              0.0821  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4204 | >20%                    |                 5 |              0.08408 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4223 | 5-10%                   |                 2 |              0.21115 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4295 | <5%                     |                 2 |              0.21475 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4297 | >20%                    |                 2 |              0.21485 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4299 | 10-15%                  |                 5 |              0.08598 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4349 | >20%                    |                 2 |              0.21745 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4353 | 15-20%                  |                 2 |              0.21765 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4368 | >20%                    |                 5 |              0.08736 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4442 | >20%                    |                 5 |              0.08884 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4468 | >20%                    |                 2 |              0.2234  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4486 | 15-20%                  |                 5 |              0.08972 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4581 | 10-15%                  |                 2 |              0.22905 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4682 | >20%                    |                10 |              0.04682 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4723 | >20%                    |                 5 |              0.09446 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4902 | 10-15%                  |                 2 |              0.2451  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4955 | >20%                    |                 5 |              0.0991  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5019 | >20%                    |                 2 |              0.25095 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5023 | >20%                    |                 5 |              0.10046 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5047 | >20%                    |                 2 |              0.25235 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5079 | >20%                    |                 5 |              0.10158 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5084 | >20%                    |                 2 |              0.2542  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5107 | 5-10%                   |                 5 |              0.10214 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5168 | <5%                     |                10 |              0.05168 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5173 | >20%                    |                 5 |              0.10346 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5221 | >20%                    |                 2 |              0.26105 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5279 | >20%                    |                 2 |              0.26395 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5325 | >20%                    |                 5 |              0.1065  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5381 | >20%                    |                 5 |              0.10762 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5399 | 5-10%                   |                 2 |              0.26995 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5488 | 10-15%                  |                 2 |              0.2744  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5522 | >20%                    |                 5 |              0.11044 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5539 | >20%                    |                 2 |              0.27695 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5699 | >20%                    |                 5 |              0.11398 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5858 | >20%                    |                 2 |              0.2929  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5862 | 15-20%                  |                 2 |              0.2931  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5873 | >20%                    |                 5 |              0.11746 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5915 | 15-20%                  |                10 |              0.05915 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5936 | >20%                    |                 5 |              0.11872 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.597  | >20%                    |                10 |              0.0597  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.6006 | >20%                    |                 2 |              0.3003  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6111 | >20%                    |                 2 |              0.30555 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6125 | >20%                    |                 5 |              0.1225  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.614  | >20%                    |                 5 |              0.1228  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6175 | 10-15%                  |                 5 |              0.1235  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6216 | 10-15%                  |                 5 |              0.12432 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6255 | >20%                    |                 5 |              0.1251  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6305 | >20%                    |                 5 |              0.1261  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6332 | 15-20%                  |                 5 |              0.12664 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6517 | 15-20%                  |                 2 |              0.32585 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6558 | >20%                    |                 5 |              0.13116 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6568 | >20%                    |                 5 |              0.13136 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6594 | >20%                    |                 5 |              0.13188 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6634 | 15-20%                  |                10 |              0.06634 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6681 | >20%                    |                10 |              0.06681 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6753 | >20%                    |                 5 |              0.13506 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6767 | >20%                    |                 5 |              0.13534 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6813 | >20%                    |                 5 |              0.13626 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6815 | >20%                    |                 5 |              0.1363  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6822 | >20%                    |                 5 |              0.13644 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6833 | >20%                    |                 5 |              0.13666 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6932 | 5-10%                   |                10 |              0.06932 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6959 | >20%                    |                10 |              0.06959 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7028 | >20%                    |                 5 |              0.14056 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7051 | >20%                    |                 2 |              0.35255 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7082 | 15-20%                  |                10 |              0.07082 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7138 | 15-20%                  |                 5 |              0.14276 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7175 | 15-20%                  |                 5 |              0.1435  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7184 | >20%                    |                 2 |              0.3592  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7205 | 15-20%                  |                10 |              0.07205 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7405 | 10-15%                  |                 2 |              0.37025 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7478 | 15-20%                  |                10 |              0.07478 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.748  | >20%                    |                10 |              0.0748  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7486 | >20%                    |                 5 |              0.14972 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7534 | >20%                    |                 5 |              0.15068 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7681 | >20%                    |                10 |              0.07681 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7885 | >20%                    |                10 |              0.07885 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8098 | >20%                    |                10 |              0.08098 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8099 | >20%                    |                 5 |              0.16198 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8204 | >20%                    |                10 |              0.08204 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.823  | 15-20%                  |                 5 |              0.1646  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8323 | >20%                    |                10 |              0.08323 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8344 | >20%                    |                 5 |              0.16688 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8402 | 15-20%                  |                10 |              0.08402 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8476 | <5%                     |                10 |              0.08476 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8647 | 10-15%                  |                 2 |              0.43235 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8699 | >20%                    |                 5 |              0.17398 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8762 | 10-15%                  |                 5 |              0.17524 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8778 | >20%                    |                10 |              0.08778 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8822 | >20%                    |                10 |              0.08822 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8874 | <5%                     |                10 |              0.08874 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8884 | 15-20%                  |                10 |              0.08884 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8945 | 15-20%                  |                10 |              0.08945 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.905  | 10-15%                  |                10 |              0.0905  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.909  | <5%                     |                10 |              0.0909  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9121 | 10-15%                  |                10 |              0.09121 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9315 | 5-10%                   |                10 |              0.09315 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9343 | >20%                    |                10 |              0.09343 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9719 | 15-20%                  |                10 |              0.09719 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9804 | >20%                    |                 5 |              0.19608 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9867 | 10-15%                  |                10 |              0.09867 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9914 | >20%                    |                10 |              0.09914 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.992  | 15-20%                  |                10 |              0.0992  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0121 | >20%                    |                 2 |              0.50605 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0158 | 5-10%                   |                10 |              0.10158 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.028  | >20%                    |                 2 |              0.514   |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0402 | >20%                    |                 2 |              0.5201  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0578 | >20%                    |                 5 |              0.21156 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.068  | >20%                    |                10 |              0.1068  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0817 | 10-15%                  |                 2 |              0.54085 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0829 | >20%                    |                10 |              0.10829 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0862 | 15-20%                  |                10 |              0.10862 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0868 | >20%                    |                 5 |              0.21736 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1018 | >20%                    |                 5 |              0.22036 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.104  | >20%                    |                10 |              0.1104  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1078 | 5-10%                   |                10 |              0.11078 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.13   | >20%                    |                10 |              0.113   |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1304 | <5%                     |                10 |              0.11304 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1337 | 5-10%                   |                10 |              0.11337 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1581 | >20%                    |                 5 |              0.23162 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1795 | 10-15%                  |                10 |              0.11795 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2195 | 15-20%                  |                10 |              0.12195 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2621 | 5-10%                   |                 2 |              0.63105 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2739 | >20%                    |                10 |              0.12739 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2929 | 10-15%                  |                10 |              0.12929 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2993 | >20%                    |                10 |              0.12993 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3527 | 10-15%                  |                 5 |              0.27054 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5291 | >20%                    |                10 |              0.15291 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5761 | >20%                    |                10 |              0.15761 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6257 | >20%                    |                10 |              0.16257 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6349 | 10-15%                  |                 5 |              0.32698 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7228 | >20%                    |                10 |              0.17228 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0326 | 10-15%                  |                10 |              0.20326 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2131 | 15-20%                  |                10 |              0.22131 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      3.0028 | >20%                    |                10 |              0.30028 |