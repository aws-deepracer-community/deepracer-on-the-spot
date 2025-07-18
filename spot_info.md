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

Data correct as of 2025-07-18 02:05:21.385930, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1258 | >20%                    |                 2 |              0.0629  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1423 | 5-10%                   |                 2 |              0.07115 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1739 | 5-10%                   |                 2 |              0.08695 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1804 | >20%                    |                 2 |              0.0902  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1828 | 5-10%                   |                 5 |              0.03656 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1901 | 15-20%                  |                 5 |              0.03802 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2076 | >20%                    |                 5 |              0.04152 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2189 | >20%                    |                 5 |              0.04378 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2246 | >20%                    |                 2 |              0.1123  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2282 | >20%                    |                 2 |              0.1141  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.231  | <5%                     |                 5 |              0.0462  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2375 | 5-10%                   |                 2 |              0.11875 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2395 | 15-20%                  |                 2 |              0.11975 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2416 | 15-20%                  |                 2 |              0.1208  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2434 | >20%                    |                10 |              0.02434 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.25   | >20%                    |                 2 |              0.125   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2507 | >20%                    |                 2 |              0.12535 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2583 | >20%                    |                 2 |              0.12915 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.272  | 15-20%                  |                10 |              0.0272  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2932 | >20%                    |                 2 |              0.1466  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2949 | <5%                     |                10 |              0.02949 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3001 | >20%                    |                 2 |              0.15005 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3017 | <5%                     |                 2 |              0.15085 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3056 | >20%                    |                 5 |              0.06112 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3128 | 5-10%                   |                 2 |              0.1564  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3151 | 15-20%                  |                 2 |              0.15755 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3168 | >20%                    |                 2 |              0.1584  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3183 | 15-20%                  |                 2 |              0.15915 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3188 | >20%                    |                 2 |              0.1594  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3196 | 5-10%                   |                 2 |              0.1598  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3205 | 15-20%                  |                10 |              0.03205 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3247 | <5%                     |                 5 |              0.06494 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3297 | <5%                     |                 2 |              0.16485 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3476 | >20%                    |                 2 |              0.1738  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3523 | 15-20%                  |                 5 |              0.07046 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3538 | 15-20%                  |                 2 |              0.1769  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3572 | >20%                    |                 2 |              0.1786  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.368  | >20%                    |                 5 |              0.0736  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3702 | >20%                    |                 5 |              0.07404 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3767 | >20%                    |                 5 |              0.07534 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3846 | >20%                    |                 5 |              0.07692 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.388  | >20%                    |                 2 |              0.194   |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3913 | <5%                     |                 2 |              0.19565 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3936 | >20%                    |                 2 |              0.1968  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3936 | >20%                    |                 2 |              0.1968  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3996 | >20%                    |                 2 |              0.1998  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4031 | >20%                    |                 2 |              0.20155 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4056 | >20%                    |                 5 |              0.08112 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4285 | 15-20%                  |                 5 |              0.0857  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4313 | 5-10%                   |                 2 |              0.21565 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4425 | 10-15%                  |                 2 |              0.22125 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4439 | <5%                     |                 2 |              0.22195 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4462 | >20%                    |                 5 |              0.08924 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4552 | 5-10%                   |                 2 |              0.2276  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4567 | >20%                    |                 5 |              0.09134 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4602 | 10-15%                  |                 2 |              0.2301  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.462  | >20%                    |                 5 |              0.0924  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4625 | >20%                    |                10 |              0.04625 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4641 | >20%                    |                 5 |              0.09282 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4687 | >20%                    |                 2 |              0.23435 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4728 | >20%                    |                 5 |              0.09456 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4775 | >20%                    |                 2 |              0.23875 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4807 | >20%                    |                 5 |              0.09614 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4808 | >20%                    |                 2 |              0.2404  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4822 | >20%                    |                 2 |              0.2411  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.4896 | >20%                    |                10 |              0.04896 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4925 | >20%                    |                 5 |              0.0985  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4938 | >20%                    |                 2 |              0.2469  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4962 | 15-20%                  |                 2 |              0.2481  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5003 | 10-15%                  |                 5 |              0.10006 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5014 | >20%                    |                 2 |              0.2507  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5052 | 10-15%                  |                 5 |              0.10104 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5168 | 10-15%                  |                 5 |              0.10336 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5173 | >20%                    |                 5 |              0.10346 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5207 | 5-10%                   |                 5 |              0.10414 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.527  | >20%                    |                 2 |              0.2635  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5275 | 5-10%                   |                 2 |              0.26375 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5278 | >20%                    |                 5 |              0.10556 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5418 | >20%                    |                 2 |              0.2709  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5423 | >20%                    |                 2 |              0.27115 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5426 | <5%                     |                10 |              0.05426 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.543  | >20%                    |                 5 |              0.1086  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.552  | >20%                    |                 2 |              0.276   |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5651 | 5-10%                   |                 5 |              0.11302 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5664 | >20%                    |                 5 |              0.11328 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5671 | >20%                    |                10 |              0.05671 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5716 | >20%                    |                 5 |              0.11432 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5776 | 15-20%                  |                10 |              0.05776 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5784 | >20%                    |                 2 |              0.2892  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5797 | >20%                    |                10 |              0.05797 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5874 | >20%                    |                 2 |              0.2937  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5956 | <5%                     |                 5 |              0.11912 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5984 | >20%                    |                 5 |              0.11968 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5985 | 10-15%                  |                 5 |              0.1197  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5996 | >20%                    |                10 |              0.05996 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6022 | 15-20%                  |                10 |              0.06022 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6038 | 5-10%                   |                 5 |              0.12076 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6043 | >20%                    |                10 |              0.06043 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6099 | >20%                    |                10 |              0.06099 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6245 | >20%                    |                 5 |              0.1249  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6281 | >20%                    |                 2 |              0.31405 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6301 | >20%                    |                 5 |              0.12602 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6348 | <5%                     |                 2 |              0.3174  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6493 | >20%                    |                 5 |              0.12986 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6506 | >20%                    |                 5 |              0.13012 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6693 | 15-20%                  |                 2 |              0.33465 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6761 | 10-15%                  |                 2 |              0.33805 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6871 | >20%                    |                 5 |              0.13742 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6893 | >20%                    |                 5 |              0.13786 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6935 | 15-20%                  |                 5 |              0.1387  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.698  | >20%                    |                 5 |              0.1396  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6994 | >20%                    |                 5 |              0.13988 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7017 | <5%                     |                10 |              0.07017 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7075 | >20%                    |                 5 |              0.1415  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7132 | >20%                    |                10 |              0.07132 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7164 | 15-20%                  |                10 |              0.07164 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7179 | 15-20%                  |                 2 |              0.35895 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.722  | <5%                     |                 5 |              0.1444  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.744  | 15-20%                  |                 5 |              0.1488  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7742 | <5%                     |                10 |              0.07742 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7766 | 15-20%                  |                10 |              0.07766 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7861 | >20%                    |                 5 |              0.15722 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7905 | <5%                     |                10 |              0.07905 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7955 | 15-20%                  |                10 |              0.07955 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7977 | >20%                    |                10 |              0.07977 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8006 | 5-10%                   |                 5 |              0.16012 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.812  | >20%                    |                10 |              0.0812  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8207 | >20%                    |                 5 |              0.16414 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8257 | 15-20%                  |                10 |              0.08257 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8281 | 5-10%                   |                10 |              0.08281 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8324 | 5-10%                   |                10 |              0.08324 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8364 | 5-10%                   |                10 |              0.08364 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8568 | 15-20%                  |                10 |              0.08568 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8663 | >20%                    |                 5 |              0.17326 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8675 | <5%                     |                 5 |              0.1735  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8837 | >20%                    |                10 |              0.08837 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8851 | 5-10%                   |                 5 |              0.17702 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8899 | <5%                     |                10 |              0.08899 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8899 | 5-10%                   |                10 |              0.08899 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8981 | 5-10%                   |                10 |              0.08981 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9071 | 15-20%                  |                10 |              0.09071 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9282 | >20%                    |                10 |              0.09282 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9335 | 15-20%                  |                10 |              0.09335 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9398 | >20%                    |                10 |              0.09398 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9624 | 5-10%                   |                10 |              0.09624 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9779 | 15-20%                  |                10 |              0.09779 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9804 | >20%                    |                 2 |              0.4902  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9942 | 5-10%                   |                10 |              0.09942 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0016 | >20%                    |                10 |              0.10016 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0183 | >20%                    |                10 |              0.10183 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.03   | >20%                    |                 2 |              0.515   |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0399 | >20%                    |                10 |              0.10399 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0405 | <5%                     |                10 |              0.10405 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0438 | <5%                     |                10 |              0.10438 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0465 | >20%                    |                 5 |              0.2093  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0567 | >20%                    |                 5 |              0.21134 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.081  | >20%                    |                10 |              0.1081  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0931 | 5-10%                   |                10 |              0.10931 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0986 | 15-20%                  |                10 |              0.10986 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1307 | >20%                    |                10 |              0.11307 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1315 | <5%                     |                 2 |              0.56575 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1477 | >20%                    |                10 |              0.11477 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2225 | >20%                    |                 5 |              0.2445  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2474 | >20%                    |                10 |              0.12474 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2502 | 15-20%                  |                 5 |              0.25004 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2829 | >20%                    |                10 |              0.12829 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2873 | >20%                    |                10 |              0.12873 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2939 | >20%                    |                 5 |              0.25878 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3458 | >20%                    |                 2 |              0.6729  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3636 | >20%                    |                 2 |              0.6818  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3874 | >20%                    |                 5 |              0.27748 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4033 | 5-10%                   |                10 |              0.14033 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5428 | <5%                     |                 5 |              0.30856 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5548 | <5%                     |                10 |              0.15548 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5898 | 10-15%                  |                10 |              0.15898 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.7531 | 5-10%                   |                 2 |              0.87655 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7691 | >20%                    |                10 |              0.17691 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.814  | <5%                     |                10 |              0.1814  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9668 | 5-10%                   |                10 |              0.19668 |