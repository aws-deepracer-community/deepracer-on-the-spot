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

Data correct as of 2025-07-23 02:05:27.288368, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1003 | >20%                    |                 2 |              0.05015 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1654 | 5-10%                   |                 2 |              0.0827  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1724 | >20%                    |                 2 |              0.0862  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1863 | 5-10%                   |                 2 |              0.09315 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1885 | >20%                    |                 2 |              0.09425 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2216 | 5-10%                   |                 5 |              0.04432 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2325 | <5%                     |                 5 |              0.0465  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2349 | 15-20%                  |                 2 |              0.11745 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.237  | >20%                    |                 2 |              0.1185  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2384 | >20%                    |                 2 |              0.1192  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2452 | <5%                     |                 5 |              0.04904 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2502 | 15-20%                  |                 2 |              0.1251  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | 5-10%                   |                 2 |              0.1255  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2518 | >20%                    |                 2 |              0.1259  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2521 | >20%                    |                 2 |              0.12605 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2617 | >20%                    |                 2 |              0.13085 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2647 | >20%                    |                 5 |              0.05294 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2664 | >20%                    |                 5 |              0.05328 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.297  | >20%                    |                 5 |              0.0594  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3025 | >20%                    |                10 |              0.03025 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.303  | <5%                     |                 2 |              0.1515  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3046 | >20%                    |                 2 |              0.1523  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3154 | 5-10%                   |                 2 |              0.1577  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3179 | >20%                    |                 5 |              0.06358 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3187 | >20%                    |                 2 |              0.15935 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.325  | >20%                    |                 5 |              0.065   |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3263 | 15-20%                  |                 2 |              0.16315 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3263 | 15-20%                  |                10 |              0.03263 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3286 | 5-10%                   |                 2 |              0.1643  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3302 | >20%                    |                 2 |              0.1651  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3356 | <5%                     |                 2 |              0.1678  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3372 | 15-20%                  |                 2 |              0.1686  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3378 | 15-20%                  |                 2 |              0.1689  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3432 | 15-20%                  |                 5 |              0.06864 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3471 | >20%                    |                 2 |              0.17355 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3659 | >20%                    |                 2 |              0.18295 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3694 | <5%                     |                10 |              0.03694 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3699 | >20%                    |                 5 |              0.07398 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3752 | >20%                    |                10 |              0.03752 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3781 | >20%                    |                 5 |              0.07562 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3806 | >20%                    |                 2 |              0.1903  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3981 | 15-20%                  |                10 |              0.03981 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4036 | >20%                    |                 5 |              0.08072 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4067 | >20%                    |                 5 |              0.08134 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4178 | <5%                     |                 2 |              0.2089  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4182 | >20%                    |                 2 |              0.2091  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4221 | 10-15%                  |                 2 |              0.21105 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.428  | <5%                     |                10 |              0.0428  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4306 | >20%                    |                 2 |              0.2153  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.433  | >20%                    |                 2 |              0.2165  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.437  | >20%                    |                 2 |              0.2185  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4469 | <5%                     |                 2 |              0.22345 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4506 | 15-20%                  |                 5 |              0.09012 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4546 | >20%                    |                 2 |              0.2273  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4556 | 5-10%                   |                 2 |              0.2278  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4577 | >20%                    |                 5 |              0.09154 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4616 | >20%                    |                 5 |              0.09232 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4639 | >20%                    |                 5 |              0.09278 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4687 | >20%                    |                 5 |              0.09374 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4689 | >20%                    |                 2 |              0.23445 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4727 | 5-10%                   |                 2 |              0.23635 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4728 | 10-15%                  |                 2 |              0.2364  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4734 | 15-20%                  |                10 |              0.04734 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4778 | >20%                    |                 2 |              0.2389  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4968 | >20%                    |                10 |              0.04968 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4968 | >20%                    |                 2 |              0.2484  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5022 | >20%                    |                 5 |              0.10044 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5051 | >20%                    |                 2 |              0.25255 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5053 | >20%                    |                 2 |              0.25265 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5056 | 5-10%                   |                 5 |              0.10112 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5156 | 10-15%                  |                 5 |              0.10312 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5269 | <5%                     |                 2 |              0.26345 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5288 | 10-15%                  |                 5 |              0.10576 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5317 | 15-20%                  |                 2 |              0.26585 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5411 | >20%                    |                 5 |              0.10822 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.544  | >20%                    |                 5 |              0.1088  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5445 | 10-15%                  |                 5 |              0.1089  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5535 | >20%                    |                 5 |              0.1107  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5564 | 15-20%                  |                10 |              0.05564 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5594 | >20%                    |                 5 |              0.11188 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.561  | >20%                    |                 5 |              0.1122  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5636 | >20%                    |                 2 |              0.2818  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5652 | >20%                    |                 2 |              0.2826  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5699 | 5-10%                   |                 5 |              0.11398 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5727 | 5-10%                   |                 2 |              0.28635 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5782 | 10-15%                  |                 2 |              0.2891  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5785 | >20%                    |                 5 |              0.1157  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5833 | >20%                    |                 2 |              0.29165 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5866 | >20%                    |                 5 |              0.11732 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6003 | >20%                    |                 2 |              0.30015 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6021 | <5%                     |                 5 |              0.12042 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6065 | >20%                    |                10 |              0.06065 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6125 | 5-10%                   |                 5 |              0.1225  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6139 | >20%                    |                 2 |              0.30695 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6163 | >20%                    |                 2 |              0.30815 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6215 | >20%                    |                10 |              0.06215 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6247 | 10-15%                  |                 5 |              0.12494 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6257 | >20%                    |                10 |              0.06257 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.628  | >20%                    |                 5 |              0.1256  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6282 | >20%                    |                 5 |              0.12564 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6352 | >20%                    |                10 |              0.06352 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6365 | >20%                    |                 5 |              0.1273  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6455 | >20%                    |                 5 |              0.1291  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6625 | >20%                    |                 2 |              0.33125 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6732 | 15-20%                  |                 2 |              0.3366  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6885 | 5-10%                   |                 5 |              0.1377  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6961 | 15-20%                  |                 2 |              0.34805 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6962 | <5%                     |                10 |              0.06962 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7106 | >20%                    |                 5 |              0.14212 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7127 | 15-20%                  |                 5 |              0.14254 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7149 | >20%                    |                 5 |              0.14298 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7154 | >20%                    |                 5 |              0.14308 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7217 | <5%                     |                 5 |              0.14434 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7261 | >20%                    |                10 |              0.07261 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7268 | <5%                     |                 5 |              0.14536 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7319 | >20%                    |                 5 |              0.14638 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7352 | 15-20%                  |                10 |              0.07352 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7554 | 15-20%                  |                10 |              0.07554 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.771  | <5%                     |                10 |              0.0771  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7855 | >20%                    |                10 |              0.07855 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7957 | >20%                    |                 5 |              0.15914 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8046 | <5%                     |                10 |              0.08046 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8137 | >20%                    |                 5 |              0.16274 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8165 | 5-10%                   |                10 |              0.08165 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8326 | >20%                    |                10 |              0.08326 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8365 | 15-20%                  |                10 |              0.08365 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8417 | >20%                    |                10 |              0.08417 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8429 | >20%                    |                 2 |              0.42145 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8442 | >20%                    |                 5 |              0.16884 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8574 | 5-10%                   |                10 |              0.08574 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8725 | 5-10%                   |                10 |              0.08725 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8902 | 5-10%                   |                 5 |              0.17804 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8937 | >20%                    |                 5 |              0.17874 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9    | <5%                     |                10 |              0.09    |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9144 | >20%                    |                10 |              0.09144 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9163 | 5-10%                   |                10 |              0.09163 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9225 | 5-10%                   |                10 |              0.09225 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9251 | 15-20%                  |                10 |              0.09251 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.926  | 15-20%                  |                10 |              0.0926  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9288 | >20%                    |                10 |              0.09288 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.946  | 15-20%                  |                 5 |              0.1892  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.948  | 5-10%                   |                10 |              0.0948  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9509 | >20%                    |                10 |              0.09509 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9511 | 15-20%                  |                10 |              0.09511 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9653 | 15-20%                  |                10 |              0.09653 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9964 | 5-10%                   |                10 |              0.09964 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9999 | 15-20%                  |                10 |              0.09999 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0257 | <5%                     |                10 |              0.10257 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0286 | <5%                     |                10 |              0.10286 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0337 | >20%                    |                 2 |              0.51685 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0586 | >20%                    |                 5 |              0.21172 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0658 | 5-10%                   |                10 |              0.10658 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0699 | >20%                    |                10 |              0.10699 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0802 | >20%                    |                10 |              0.10802 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.09   | >20%                    |                10 |              0.109   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1107 | >20%                    |                10 |              0.11107 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1166 | >20%                    |                10 |              0.11166 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1207 | >20%                    |                 5 |              0.22414 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1287 | 15-20%                  |                10 |              0.11287 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1413 | >20%                    |                10 |              0.11413 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1565 | <5%                     |                 2 |              0.57825 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1634 | >20%                    |                10 |              0.11634 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.256  | >20%                    |                 5 |              0.2512  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2644 | >20%                    |                 2 |              0.6322  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2876 | >20%                    |                10 |              0.12876 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3152 | 15-20%                  |                 5 |              0.26304 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3341 | >20%                    |                 5 |              0.26682 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3664 | >20%                    |                10 |              0.13664 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4082 | <5%                     |                10 |              0.14082 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4228 | 5-10%                   |                10 |              0.14228 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.4333 | >20%                    |                 2 |              0.71665 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.4629 | >20%                    |                 5 |              0.29258 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5942 | <5%                     |                 5 |              0.31884 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.6644 | 5-10%                   |                 2 |              0.8322  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6817 | >20%                    |                10 |              0.16817 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.872  | 10-15%                  |                10 |              0.1872  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9435 | 5-10%                   |                10 |              0.19435 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.9585 | <5%                     |                10 |              0.19585 |