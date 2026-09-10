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

Data correct as of 2026-09-10 03:55:20.289931, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1261 | >20%                    |                 2 |              0.06305 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1715 | 15-20%                  |                 2 |              0.08575 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.205  | 15-20%                  |                 5 |              0.041   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2116 | >20%                    |                 2 |              0.1058  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2129 | >20%                    |                 5 |              0.04258 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2284 | >20%                    |                 2 |              0.1142  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2503 | >20%                    |                 2 |              0.12515 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2564 | 15-20%                  |                 5 |              0.05128 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2611 | >20%                    |                 2 |              0.13055 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2762 | 15-20%                  |                 2 |              0.1381  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2824 | >20%                    |                 2 |              0.1412  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2837 | >20%                    |                 2 |              0.14185 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2952 | >20%                    |                 2 |              0.1476  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3026 | >20%                    |                 2 |              0.1513  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.305  | 10-15%                  |                 2 |              0.1525  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3453 | >20%                    |                 5 |              0.06906 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3685 | 10-15%                  |                10 |              0.03685 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3689 | >20%                    |                 2 |              0.18445 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3695 | 15-20%                  |                 2 |              0.18475 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3713 | >20%                    |                10 |              0.03713 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3724 | >20%                    |                 5 |              0.07448 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.3779 |                         |                 5 |              0.07558 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3817 | <5%                     |                 2 |              0.19085 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3837 | 10-15%                  |                 2 |              0.19185 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.391  | >20%                    |                 5 |              0.0782  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3961 | >20%                    |                 2 |              0.19805 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3963 | >20%                    |                 5 |              0.07926 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3972 | >20%                    |                 2 |              0.1986  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4157 | 15-20%                  |                 2 |              0.20785 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4178 | >20%                    |                 5 |              0.08356 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4186 | >20%                    |                 5 |              0.08372 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.423  | >20%                    |                 2 |              0.2115  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4247 | >20%                    |                 2 |              0.21235 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4341 | >20%                    |                 2 |              0.21705 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4675 | >20%                    |                10 |              0.04675 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4684 | >20%                    |                 5 |              0.09368 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4701 | 10-15%                  |                 2 |              0.23505 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4846 | >20%                    |                 5 |              0.09692 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4902 | >20%                    |                10 |              0.04902 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4904 | >20%                    |                 5 |              0.09808 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.492  | >20%                    |                 5 |              0.0984  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4961 | >20%                    |                 5 |              0.09922 |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.4963 |                         |                 2 |              0.24815 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5072 | 15-20%                  |                 2 |              0.2536  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5086 | <5%                     |                 2 |              0.2543  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5093 | >20%                    |                 2 |              0.25465 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5107 | >20%                    |                 2 |              0.25535 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5112 | >20%                    |                10 |              0.05112 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5151 | >20%                    |                 5 |              0.10302 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5181 | >20%                    |                 5 |              0.10362 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5202 | >20%                    |                 5 |              0.10404 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5378 | >20%                    |                 2 |              0.2689  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.5407 | >20%                    |                 5 |              0.10814 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5463 | >20%                    |                 2 |              0.27315 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5653 | 5-10%                   |                10 |              0.05653 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5672 | >20%                    |                 2 |              0.2836  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5811 | >20%                    |                 5 |              0.11622 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5881 | >20%                    |                 2 |              0.29405 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6042 | 5-10%                   |                10 |              0.06042 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6051 | 10-15%                  |                 5 |              0.12102 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6127 | >20%                    |                 5 |              0.12254 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6172 | >20%                    |                10 |              0.06172 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6239 | >20%                    |                 2 |              0.31195 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6274 | >20%                    |                 5 |              0.12548 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6336 | >20%                    |                 2 |              0.3168  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.636  | 10-15%                  |                 2 |              0.318   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6456 | >20%                    |                 5 |              0.12912 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6458 | 5-10%                   |                 5 |              0.12916 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6654 | >20%                    |                10 |              0.06654 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.666  | >20%                    |                 5 |              0.1332  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6732 | 15-20%                  |                10 |              0.06732 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6755 | 15-20%                  |                10 |              0.06755 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6792 | >20%                    |                 5 |              0.13584 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6804 | <5%                     |                 2 |              0.3402  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6839 | 5-10%                   |                 2 |              0.34195 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6917 | >20%                    |                 5 |              0.13834 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7035 | >20%                    |                10 |              0.07035 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.72   | >20%                    |                 5 |              0.144   |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7293 | >20%                    |                 5 |              0.14586 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7361 | 15-20%                  |                 5 |              0.14722 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7442 | >20%                    |                 5 |              0.14884 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7473 | >20%                    |                10 |              0.07473 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7923 | >20%                    |                 2 |              0.39615 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8028 | >20%                    |                 5 |              0.16056 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8104 | 15-20%                  |                10 |              0.08104 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8245 | <5%                     |                10 |              0.08245 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8295 | 15-20%                  |                 2 |              0.41475 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8387 | >20%                    |                 5 |              0.16774 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8429 | >20%                    |                10 |              0.08429 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8586 | 15-20%                  |                 5 |              0.17172 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8671 | 10-15%                  |                 2 |              0.43355 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8678 | >20%                    |                 2 |              0.4339  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8686 | >20%                    |                10 |              0.08686 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8906 | 5-10%                   |                10 |              0.08906 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.8973 | >20%                    |                 5 |              0.17946 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.9073 | >20%                    |                 2 |              0.45365 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9202 | <5%                     |                 5 |              0.18404 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.9378 |                         |                 2 |              0.4689  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9403 | >20%                    |                10 |              0.09403 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.9588 | 10-15%                  |                 2 |              0.4794  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9716 | >20%                    |                10 |              0.09716 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9967 | >20%                    |                10 |              0.09967 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9972 | >20%                    |                10 |              0.09972 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.0045 | >20%                    |                10 |              0.10045 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0092 | 10-15%                  |                 2 |              0.5046  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.016  | >20%                    |                10 |              0.1016  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0189 | >20%                    |                 5 |              0.20378 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0282 | >20%                    |                10 |              0.10282 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0301 | >20%                    |                10 |              0.10301 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0313 | 15-20%                  |                10 |              0.10313 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0727 | 15-20%                  |                10 |              0.10727 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1096 | >20%                    |                10 |              0.11096 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1163 | 5-10%                   |                10 |              0.11163 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.117  | >20%                    |                10 |              0.1117  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.1355 | >20%                    |                 5 |              0.2271  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1497 | 5-10%                   |                 2 |              0.57485 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.167  |                         |                 2 |              0.5835  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.1789 | >20%                    |                 5 |              0.23578 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1829 | >20%                    |                 5 |              0.23658 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2099 | >20%                    |                10 |              0.12099 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.2205 | >20%                    |                10 |              0.12205 |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.222  |                         |                 5 |              0.2444  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2282 | >20%                    |                 2 |              0.6141  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.2299 | >20%                    |                10 |              0.12299 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.2306 | >20%                    |                 5 |              0.24612 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2398 | >20%                    |                 5 |              0.24796 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      1.2521 |                         |                10 |              0.12521 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.3231 |                         |                 5 |              0.26462 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3299 | >20%                    |                10 |              0.13299 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3492 | 10-15%                  |                10 |              0.13492 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3618 | >20%                    |                10 |              0.13618 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.3666 | >20%                    |                10 |              0.13666 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3876 | 15-20%                  |                10 |              0.13876 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3886 | >20%                    |                 2 |              0.6943  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4286 | >20%                    |                10 |              0.14286 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.4692 | >20%                    |                 5 |              0.29384 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.499  | 15-20%                  |                10 |              0.1499  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.5123 | 5-10%                   |                 5 |              0.30246 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5631 | >20%                    |                 2 |              0.78155 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6296 | >20%                    |                10 |              0.16296 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.6418 | >20%                    |                 5 |              0.32836 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6418 | >20%                    |                10 |              0.16418 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7326 |                         |                10 |              0.17326 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.8056 | >20%                    |                 5 |              0.36112 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.8693 | >20%                    |                 5 |              0.37386 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.9406 | 15-20%                  |                10 |              0.19406 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.9606 |                         |                10 |              0.19606 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      2.0178 | 5-10%                   |                 2 |              1.0089  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.0407 | 5-10%                   |                 2 |              1.02035 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.1165 | 15-20%                  |                 5 |              0.4233  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.1838 | 5-10%                   |                10 |              0.21838 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      2.6538 | >20%                    |                10 |              0.26538 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.7125 | >20%                    |                10 |              0.27125 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0123 | >20%                    |                10 |              0.30123 |