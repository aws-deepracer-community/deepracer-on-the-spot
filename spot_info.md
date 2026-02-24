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

Data correct as of 2026-02-24 02:34:47.748490, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1368 | >20%                    |                 2 |              0.0684  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.157  | >20%                    |                 2 |              0.0785  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1735 | >20%                    |                 5 |              0.0347  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2057 | >20%                    |                 2 |              0.10285 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2223 | >20%                    |                 2 |              0.11115 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2276 | >20%                    |                 2 |              0.1138  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2497 | 15-20%                  |                 2 |              0.12485 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2513 | >20%                    |                 2 |              0.12565 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2548 | 10-15%                  |                 2 |              0.1274  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2645 | >20%                    |                 2 |              0.13225 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2749 | 5-10%                   |                10 |              0.02749 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2812 | <5%                     |                 2 |              0.1406  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2825 | 5-10%                   |                 2 |              0.14125 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2825 | >20%                    |                 5 |              0.0565  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2908 | 10-15%                  |                 2 |              0.1454  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2929 | <5%                     |                10 |              0.02929 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3025 | >20%                    |                 2 |              0.15125 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.303  | 5-10%                   |                 2 |              0.1515  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.306  | >20%                    |                 2 |              0.153   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3061 | >20%                    |                 2 |              0.15305 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3124 | >20%                    |                 2 |              0.1562  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3124 | <5%                     |                 5 |              0.06248 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3204 | >20%                    |                 5 |              0.06408 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3253 | >20%                    |                 2 |              0.16265 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.333  | >20%                    |                 5 |              0.0666  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3341 | >20%                    |                 2 |              0.16705 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.338  | >20%                    |                 2 |              0.169   |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3382 | <5%                     |                10 |              0.03382 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3488 | 5-10%                   |                 5 |              0.06976 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3501 | <5%                     |                 5 |              0.07002 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3516 | >20%                    |                 5 |              0.07032 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3581 | >20%                    |                 5 |              0.07162 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3666 | >20%                    |                10 |              0.03666 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3711 | >20%                    |                 5 |              0.07422 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3745 | 10-15%                  |                 2 |              0.18725 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.375  | 5-10%                   |                 2 |              0.1875  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.381  | >20%                    |                 5 |              0.0762  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3815 | 5-10%                   |                10 |              0.03815 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3829 | 15-20%                  |                 2 |              0.19145 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3856 | 15-20%                  |                 2 |              0.1928  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3907 | >20%                    |                 2 |              0.19535 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3948 | >20%                    |                 2 |              0.1974  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3993 | >20%                    |                 2 |              0.19965 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4001 | 10-15%                  |                 5 |              0.08002 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4041 | >20%                    |                10 |              0.04041 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4044 | >20%                    |                 5 |              0.08088 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4056 | >20%                    |                 5 |              0.08112 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4143 | >20%                    |                 5 |              0.08286 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.421  | 5-10%                   |                 2 |              0.2105  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4212 | >20%                    |                10 |              0.04212 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.427  | >20%                    |                 2 |              0.2135  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4295 | >20%                    |                 2 |              0.21475 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4299 | 15-20%                  |                 2 |              0.21495 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4323 | 5-10%                   |                 2 |              0.21615 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4325 | >20%                    |                 2 |              0.21625 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4348 | <5%                     |                 2 |              0.2174  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4375 | <5%                     |                 2 |              0.21875 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4421 | 15-20%                  |                 5 |              0.08842 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4447 | <5%                     |                 2 |              0.22235 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4473 | 5-10%                   |                 2 |              0.22365 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4503 | >20%                    |                 5 |              0.09006 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4521 | >20%                    |                 2 |              0.22605 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4521 | >20%                    |                 5 |              0.09042 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.456  | <5%                     |                 5 |              0.0912  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4579 | 15-20%                  |                 2 |              0.22895 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4592 | >20%                    |                 5 |              0.09184 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4624 | >20%                    |                 2 |              0.2312  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4635 | 5-10%                   |                 2 |              0.23175 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4652 | 5-10%                   |                 5 |              0.09304 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4702 | <5%                     |                 5 |              0.09404 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4712 | >20%                    |                 2 |              0.2356  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4933 | >20%                    |                 5 |              0.09866 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4962 | >20%                    |                 2 |              0.2481  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4975 | >20%                    |                10 |              0.04975 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5035 | >20%                    |                10 |              0.05035 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5127 | <5%                     |                10 |              0.05127 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5176 | 15-20%                  |                 5 |              0.10352 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5211 | 15-20%                  |                10 |              0.05211 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5231 | 15-20%                  |                 2 |              0.26155 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5236 | >20%                    |                 2 |              0.2618  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5237 | >20%                    |                 5 |              0.10474 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5248 | >20%                    |                 2 |              0.2624  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5253 | >20%                    |                10 |              0.05253 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5258 | >20%                    |                 5 |              0.10516 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5259 | <5%                     |                10 |              0.05259 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5277 | <5%                     |                10 |              0.05277 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5279 | >20%                    |                10 |              0.05279 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5356 | >20%                    |                 5 |              0.10712 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5367 | >20%                    |                 5 |              0.10734 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5411 | <5%                     |                 5 |              0.10822 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5476 | >20%                    |                 5 |              0.10952 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5497 | 5-10%                   |                 5 |              0.10994 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5535 | 15-20%                  |                 5 |              0.1107  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5745 | >20%                    |                10 |              0.05745 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5777 | 15-20%                  |                10 |              0.05777 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5898 | 5-10%                   |                 2 |              0.2949  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5979 | >20%                    |                10 |              0.05979 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.602  | 15-20%                  |                10 |              0.0602  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6041 | 15-20%                  |                 2 |              0.30205 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6222 | >20%                    |                 5 |              0.12444 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6242 | >20%                    |                 2 |              0.3121  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6274 | >20%                    |                 5 |              0.12548 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6285 | 15-20%                  |                 5 |              0.1257  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6311 | >20%                    |                 5 |              0.12622 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6311 | >20%                    |                 5 |              0.12622 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6409 | 15-20%                  |                10 |              0.06409 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6432 | >20%                    |                10 |              0.06432 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6448 | >20%                    |                 2 |              0.3224  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6469 | >20%                    |                 5 |              0.12938 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6492 | <5%                     |                 5 |              0.12984 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6505 | 5-10%                   |                 5 |              0.1301  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6529 | 10-15%                  |                 5 |              0.13058 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.6631 | >20%                    |                10 |              0.06631 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6661 | >20%                    |                 5 |              0.13322 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6758 | 5-10%                   |                 5 |              0.13516 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6847 | >20%                    |                 5 |              0.13694 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6879 | 5-10%                   |                 5 |              0.13758 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.689  | >20%                    |                 5 |              0.1378  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6892 | 10-15%                  |                10 |              0.06892 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6957 | 10-15%                  |                10 |              0.06957 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6971 | <5%                     |                10 |              0.06971 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7046 | >20%                    |                 2 |              0.3523  |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.7225 |                         |                 2 |              0.36125 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7264 | >20%                    |                 5 |              0.14528 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7368 | >20%                    |                10 |              0.07368 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7405 | 5-10%                   |                 2 |              0.37025 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7584 | >20%                    |                10 |              0.07584 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7687 | <5%                     |                10 |              0.07687 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7775 | >20%                    |                 5 |              0.1555  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7784 | >20%                    |                10 |              0.07784 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7844 | >20%                    |                 5 |              0.15688 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.81   | >20%                    |                10 |              0.081   |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8159 | >20%                    |                 2 |              0.40795 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8224 | 15-20%                  |                10 |              0.08224 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8249 | >20%                    |                 2 |              0.41245 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8256 | 5-10%                   |                10 |              0.08256 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8268 | <5%                     |                10 |              0.08268 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8357 | <5%                     |                 5 |              0.16714 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8405 | <5%                     |                 5 |              0.1681  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8492 | >20%                    |                 5 |              0.16984 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.852  | >20%                    |                 5 |              0.1704  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8535 | >20%                    |                10 |              0.08535 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8572 | >20%                    |                10 |              0.08572 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8582 | >20%                    |                 2 |              0.4291  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8647 | >20%                    |                 2 |              0.43235 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8725 | >20%                    |                 5 |              0.1745  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.882  | <5%                     |                 2 |              0.441   |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8844 | <5%                     |                10 |              0.08844 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8846 | <5%                     |                10 |              0.08846 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8856 | 10-15%                  |                 2 |              0.4428  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8865 | >20%                    |                10 |              0.08865 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8931 | 5-10%                   |                10 |              0.08931 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9334 | <5%                     |                10 |              0.09334 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9664 | >20%                    |                10 |              0.09664 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.974  | >20%                    |                10 |              0.0974  |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9804 |                         |                 5 |              0.19608 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9913 | >20%                    |                 5 |              0.19826 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0014 | >20%                    |                 2 |              0.5007  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0165 | >20%                    |                10 |              0.10165 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0314 | 10-15%                  |                 5 |              0.20628 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0329 | 5-10%                   |                 5 |              0.20658 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0343 | >20%                    |                10 |              0.10343 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0373 | >20%                    |                10 |              0.10373 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0501 | >20%                    |                10 |              0.10501 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0728 | 5-10%                   |                10 |              0.10728 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0908 | 10-15%                  |                10 |              0.10908 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0949 | 15-20%                  |                10 |              0.10949 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1086 | >20%                    |                10 |              0.11086 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.1121 | >20%                    |                 5 |              0.22242 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.114  | 15-20%                  |                10 |              0.1114  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1647 | <5%                     |                10 |              0.11647 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      1.1884 | >20%                    |                10 |              0.11884 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1937 | >20%                    |                10 |              0.11937 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2012 | >20%                    |                 5 |              0.24024 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2379 | >20%                    |                 2 |              0.61895 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3908 | >20%                    |                10 |              0.13908 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4015 | 10-15%                  |                 5 |              0.2803  |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4436 |                         |                10 |              0.14436 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.449  | >20%                    |                 2 |              0.7245  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6314 | >20%                    |                10 |              0.16314 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6391 | 15-20%                  |                10 |              0.16391 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6875 | >20%                    |                10 |              0.16875 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.262  | 10-15%                  |                10 |              0.2262  |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.5003 | <5%                     |                 5 |              0.50006 |