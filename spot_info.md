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

Data correct as of 2026-03-18 02:39:12.386755, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0976 | >20%                    |                 2 |              0.0488  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1016 | >20%                    |                 2 |              0.0508  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1377 | 10-15%                  |                 2 |              0.06885 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.17   | 15-20%                  |                 5 |              0.034   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1764 | >20%                    |                 2 |              0.0882  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | >20%                    |                 5 |              0.03708 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.1866 | <5%                     |                 2 |              0.0933  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2091 | 10-15%                  |                 2 |              0.10455 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.234  | >20%                    |                 2 |              0.117   |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2468 | >20%                    |                 2 |              0.1234  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2473 | >20%                    |                 2 |              0.12365 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2527 | 10-15%                  |                 2 |              0.12635 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2564 | >20%                    |                 2 |              0.1282  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2568 | >20%                    |                 2 |              0.1284  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2585 | 5-10%                   |                10 |              0.02585 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2596 | 15-20%                  |                10 |              0.02596 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2727 | >20%                    |                 2 |              0.13635 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2735 | >20%                    |                 5 |              0.0547  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2842 | >20%                    |                 5 |              0.05684 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2845 | 15-20%                  |                 2 |              0.14225 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.285  | >20%                    |                 2 |              0.1425  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2935 | 5-10%                   |                 5 |              0.0587  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2941 | >20%                    |                 2 |              0.14705 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.2943 | >20%                    |                 2 |              0.14715 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2969 | 5-10%                   |                 2 |              0.14845 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3043 | <5%                     |                 2 |              0.15215 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3085 | >20%                    |                 5 |              0.0617  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3109 | <5%                     |                 2 |              0.15545 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3132 | >20%                    |                 2 |              0.1566  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3139 | 15-20%                  |                 2 |              0.15695 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3203 | >20%                    |                 5 |              0.06406 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.3238 | >20%                    |                10 |              0.03238 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.3311 | >20%                    |                 2 |              0.16555 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3362 | <5%                     |                 5 |              0.06724 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.3392 | >20%                    |                10 |              0.03392 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3418 | 5-10%                   |                10 |              0.03418 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3455 | <5%                     |                 5 |              0.0691  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.3525 | 5-10%                   |                 5 |              0.0705  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3552 | <5%                     |                 5 |              0.07104 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3562 | 10-15%                  |                 2 |              0.1781  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3608 | >20%                    |                 5 |              0.07216 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3639 | >20%                    |                10 |              0.03639 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.364  | 5-10%                   |                 5 |              0.0728  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3662 | 5-10%                   |                 2 |              0.1831  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3677 | 15-20%                  |                 5 |              0.07354 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3685 |                         |                 5 |              0.0737  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3761 | >20%                    |                10 |              0.03761 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3774 | >20%                    |                 5 |              0.07548 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3775 | 15-20%                  |                 2 |              0.18875 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3781 | >20%                    |                 2 |              0.18905 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3833 | >20%                    |                 5 |              0.07666 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3839 | >20%                    |                 5 |              0.07678 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.387  | 15-20%                  |                 2 |              0.1935  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3877 | 5-10%                   |                 2 |              0.19385 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3898 | <5%                     |                 5 |              0.07796 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3916 | >20%                    |                10 |              0.03916 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3916 | >20%                    |                 2 |              0.1958  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3974 | >20%                    |                 5 |              0.07948 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4079 | 5-10%                   |                 2 |              0.20395 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4148 | 15-20%                  |                10 |              0.04148 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.424  | 5-10%                   |                 2 |              0.212   |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4248 | >20%                    |                 2 |              0.2124  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4318 | <5%                     |                10 |              0.04318 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.433  | 15-20%                  |                 2 |              0.2165  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4361 | >20%                    |                 2 |              0.21805 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4372 | 15-20%                  |                 5 |              0.08744 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4394 | >20%                    |                 5 |              0.08788 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.444  | 15-20%                  |                 5 |              0.0888  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4458 | <5%                     |                 2 |              0.2229  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.446  | >20%                    |                 2 |              0.223   |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4512 | <5%                     |                 5 |              0.09024 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4535 | 5-10%                   |                 5 |              0.0907  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4665 | >20%                    |                 5 |              0.0933  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.471  | >20%                    |                 2 |              0.2355  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4806 | >20%                    |                 2 |              0.2403  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4845 | >20%                    |                 5 |              0.0969  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4898 | >20%                    |                 5 |              0.09796 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4925 | 15-20%                  |                 2 |              0.24625 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4947 | 5-10%                   |                 2 |              0.24735 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4981 | >20%                    |                 2 |              0.24905 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4981 | 10-15%                  |                 5 |              0.09962 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5067 | >20%                    |                 5 |              0.10134 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.5091 | <5%                     |                10 |              0.05091 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5107 | >20%                    |                 2 |              0.25535 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5154 | >20%                    |                10 |              0.05154 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.519  | >20%                    |                 5 |              0.1038  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5205 | 15-20%                  |                 5 |              0.1041  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5232 | >20%                    |                 5 |              0.10464 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5238 | >20%                    |                 5 |              0.10476 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5251 | >20%                    |                 5 |              0.10502 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5268 | 15-20%                  |                10 |              0.05268 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.531  | <5%                     |                10 |              0.0531  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5418 | >20%                    |                 2 |              0.2709  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.5462 | >20%                    |                10 |              0.05462 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5511 | 5-10%                   |                 2 |              0.27555 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5524 | 15-20%                  |                10 |              0.05524 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5555 |                         |                10 |              0.05555 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5601 | >20%                    |                 2 |              0.28005 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5645 | >20%                    |                 5 |              0.1129  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5706 | >20%                    |                10 |              0.05706 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5882 | 15-20%                  |                10 |              0.05882 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5939 | <5%                     |                10 |              0.05939 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5971 | >20%                    |                 5 |              0.11942 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6008 | <5%                     |                10 |              0.06008 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6048 | >20%                    |                 2 |              0.3024  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.6086 | 15-20%                  |                10 |              0.06086 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.609  | 5-10%                   |                 2 |              0.3045  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6117 | >20%                    |                 2 |              0.30585 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6122 | 5-10%                   |                 5 |              0.12244 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6155 | >20%                    |                10 |              0.06155 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6183 | >20%                    |                 2 |              0.30915 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6226 | >20%                    |                10 |              0.06226 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6258 | 5-10%                   |                 2 |              0.3129  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6266 | >20%                    |                 5 |              0.12532 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6341 | >20%                    |                 5 |              0.12682 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6377 | >20%                    |                10 |              0.06377 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.642  | >20%                    |                10 |              0.0642  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6427 | >20%                    |                10 |              0.06427 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.65   | >20%                    |                 5 |              0.13    |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.6772 | >20%                    |                 5 |              0.13544 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6811 | 5-10%                   |                 5 |              0.13622 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6902 | 10-15%                  |                 5 |              0.13804 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.696  | 15-20%                  |                 2 |              0.348   |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.6967 |                         |                 2 |              0.34835 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7021 | >20%                    |                10 |              0.07021 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7163 | >20%                    |                 5 |              0.14326 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7241 | 10-15%                  |                10 |              0.07241 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7358 | <5%                     |                 5 |              0.14716 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7604 | >20%                    |                 5 |              0.15208 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7605 | >20%                    |                10 |              0.07605 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7622 | <5%                     |                 5 |              0.15244 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7664 | >20%                    |                 5 |              0.15328 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7677 | >20%                    |                 5 |              0.15354 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7938 | 10-15%                  |                10 |              0.07938 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8022 | <5%                     |                10 |              0.08022 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8055 | <5%                     |                 5 |              0.1611  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8195 | >20%                    |                 5 |              0.1639  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8274 | <5%                     |                10 |              0.08274 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8364 | >20%                    |                 2 |              0.4182  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8416 | 10-15%                  |                 2 |              0.4208  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8424 | >20%                    |                10 |              0.08424 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8436 | 5-10%                   |                10 |              0.08436 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8497 | >20%                    |                10 |              0.08497 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8574 | >20%                    |                10 |              0.08574 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8653 | >20%                    |                10 |              0.08653 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8792 | >20%                    |                 5 |              0.17584 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8864 | >20%                    |                10 |              0.08864 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8891 | >20%                    |                10 |              0.08891 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.896  | 5-10%                   |                10 |              0.0896  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9051 | <5%                     |                10 |              0.09051 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9153 | >20%                    |                10 |              0.09153 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9171 | >20%                    |                 2 |              0.45855 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9199 | >20%                    |                 5 |              0.18398 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9387 | >20%                    |                 5 |              0.18774 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9412 | >20%                    |                10 |              0.09412 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9423 | >20%                    |                10 |              0.09423 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9492 | 5-10%                   |                 5 |              0.18984 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9692 | >20%                    |                 2 |              0.4846  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9807 | >20%                    |                 2 |              0.49035 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9815 | >20%                    |                10 |              0.09815 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9857 | 15-20%                  |                10 |              0.09857 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9871 | >20%                    |                10 |              0.09871 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9898 | >20%                    |                10 |              0.09898 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0301 | 5-10%                   |                10 |              0.10301 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.0592 | 15-20%                  |                10 |              0.10592 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      1.0931 | >20%                    |                 5 |              0.21862 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1495 | 10-15%                  |                 5 |              0.2299  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.155  | <5%                     |                10 |              0.1155  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2011 | >20%                    |                10 |              0.12011 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.205  | >20%                    |                 2 |              0.6025  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.253  | <5%                     |                 5 |              0.2506  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3338 | >20%                    |                 2 |              0.6669  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3491 | 10-15%                  |                10 |              0.13491 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3784 | >20%                    |                10 |              0.13784 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4104 | >20%                    |                 2 |              0.7052  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4517 | >20%                    |                 5 |              0.29034 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.459  | >20%                    |                 5 |              0.2918  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4893 | >20%                    |                 2 |              0.74465 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5033 | 10-15%                  |                 5 |              0.30066 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.527  | >20%                    |                10 |              0.1527  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6162 | 15-20%                  |                10 |              0.16162 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3011 | 10-15%                  |                10 |              0.23011 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.6964 | <5%                     |                10 |              0.26964 |