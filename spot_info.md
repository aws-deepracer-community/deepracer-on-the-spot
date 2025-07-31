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

Data correct as of 2025-07-31 02:06:48.638515, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1154 | 5-10%                   |                 2 |              0.0577  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1214 | >20%                    |                 2 |              0.0607  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1399 | 5-10%                   |                 2 |              0.06995 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1704 | <5%                     |                 5 |              0.03408 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1761 | >20%                    |                 2 |              0.08805 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2165 | <5%                     |                 5 |              0.0433  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2314 | >20%                    |                 2 |              0.1157  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.243  | 15-20%                  |                 2 |              0.1215  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2438 | 15-20%                  |                 2 |              0.1219  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2559 | >20%                    |                 2 |              0.12795 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2576 | >20%                    |                 2 |              0.1288  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2677 | >20%                    |                 5 |              0.05354 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.268  | >20%                    |                 2 |              0.134   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.268  | >20%                    |                 2 |              0.134   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2703 | 15-20%                  |                 5 |              0.05406 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2715 | 5-10%                   |                 2 |              0.13575 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2715 | >20%                    |                 2 |              0.13575 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2731 | <5%                     |                10 |              0.02731 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3096 | <5%                     |                 2 |              0.1548  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3112 | 5-10%                   |                 5 |              0.06224 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3201 | 15-20%                  |                 2 |              0.16005 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3216 | 5-10%                   |                 2 |              0.1608  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3371 | >20%                    |                 5 |              0.06742 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3375 | >20%                    |                 2 |              0.16875 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3432 | <5%                     |                 2 |              0.1716  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3441 | 15-20%                  |                 2 |              0.17205 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3454 | >20%                    |                 5 |              0.06908 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3508 | 5-10%                   |                 2 |              0.1754  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3525 | 15-20%                  |                 2 |              0.17625 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3617 | >20%                    |                 2 |              0.18085 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3651 | >20%                    |                 5 |              0.07302 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3708 | >20%                    |                 2 |              0.1854  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3714 | >20%                    |                 5 |              0.07428 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.386  | >20%                    |                 2 |              0.193   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3937 | >20%                    |                 5 |              0.07874 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3954 | 15-20%                  |                10 |              0.03954 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4051 | >20%                    |                 2 |              0.20255 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4112 | <5%                     |                 2 |              0.2056  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4134 | 10-15%                  |                 2 |              0.2067  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4212 | >20%                    |                 5 |              0.08424 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4216 | >20%                    |                 5 |              0.08432 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4315 | 15-20%                  |                10 |              0.04315 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4338 | >20%                    |                 5 |              0.08676 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4437 | >20%                    |                 2 |              0.22185 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4469 | <5%                     |                 2 |              0.22345 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4473 | >20%                    |                 2 |              0.22365 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4517 | >20%                    |                 2 |              0.22585 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4543 | 5-10%                   |                 2 |              0.22715 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4581 | 15-20%                  |                 5 |              0.09162 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4645 | >20%                    |                10 |              0.04645 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4673 | >20%                    |                 2 |              0.23365 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4724 | >20%                    |                 5 |              0.09448 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4763 | >20%                    |                 2 |              0.23815 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4774 | >20%                    |                 5 |              0.09548 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4803 | 5-10%                   |                 2 |              0.24015 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4825 | >20%                    |                 5 |              0.0965  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4856 | >20%                    |                 2 |              0.2428  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4895 | 10-15%                  |                 5 |              0.0979  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4924 | 15-20%                  |                10 |              0.04924 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4939 | >20%                    |                 5 |              0.09878 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4939 | 10-15%                  |                 2 |              0.24695 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4946 | >20%                    |                 2 |              0.2473  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.499  | >20%                    |                 2 |              0.2495  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.5039 | >20%                    |                 2 |              0.25195 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5045 | <5%                     |                10 |              0.05045 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5072 | 5-10%                   |                 5 |              0.10144 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5102 | >20%                    |                 2 |              0.2551  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5192 | >20%                    |                 5 |              0.10384 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5403 | 15-20%                  |                 2 |              0.27015 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5413 | <5%                     |                 2 |              0.27065 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5415 | >20%                    |                 5 |              0.1083  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5535 | >20%                    |                 2 |              0.27675 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5564 | >20%                    |                 5 |              0.11128 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5581 | 10-15%                  |                 5 |              0.11162 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5663 | <5%                     |                10 |              0.05663 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5667 | >20%                    |                 5 |              0.11334 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5708 | >20%                    |                 5 |              0.11416 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5712 | >20%                    |                 2 |              0.2856  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5725 | 10-15%                  |                 5 |              0.1145  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5788 | >20%                    |                 2 |              0.2894  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5827 | >20%                    |                 5 |              0.11654 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5928 | >20%                    |                 2 |              0.2964  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5945 | 5-10%                   |                 5 |              0.1189  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5975 | 5-10%                   |                 2 |              0.29875 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6044 | 10-15%                  |                 2 |              0.3022  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6083 | >20%                    |                 5 |              0.12166 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6101 | <5%                     |                 5 |              0.12202 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.617  | >20%                    |                 2 |              0.3085  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6174 | >20%                    |                 5 |              0.12348 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6295 | 5-10%                   |                 5 |              0.1259  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6326 | >20%                    |                 2 |              0.3163  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6356 | >20%                    |                 5 |              0.12712 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6373 | 15-20%                  |                10 |              0.06373 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6455 | >20%                    |                 5 |              0.1291  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6486 | 10-15%                  |                 5 |              0.12972 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6549 | >20%                    |                10 |              0.06549 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6598 | >20%                    |                10 |              0.06598 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6651 | >20%                    |                 5 |              0.13302 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6745 | >20%                    |                 5 |              0.1349  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6952 | <5%                     |                 5 |              0.13904 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6973 | 15-20%                  |                 2 |              0.34865 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7066 | >20%                    |                 2 |              0.3533  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7082 | >20%                    |                10 |              0.07082 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7085 | 15-20%                  |                 2 |              0.35425 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7238 | 5-10%                   |                 5 |              0.14476 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7323 | 15-20%                  |                10 |              0.07323 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7383 | 15-20%                  |                10 |              0.07383 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7512 | >20%                    |                10 |              0.07512 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.757  | >20%                    |                 5 |              0.1514  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7577 | >20%                    |                 5 |              0.15154 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7578 | >20%                    |                 5 |              0.15156 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7604 | >20%                    |                 5 |              0.15208 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7722 | <5%                     |                10 |              0.07722 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7785 | <5%                     |                 5 |              0.1557  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8036 | >20%                    |                 5 |              0.16072 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8041 | >20%                    |                 2 |              0.40205 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.8065 | 15-20%                  |                 5 |              0.1613  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8074 | >20%                    |                10 |              0.08074 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.827  | >20%                    |                 5 |              0.1654  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8338 | 5-10%                   |                10 |              0.08338 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8657 | >20%                    |                10 |              0.08657 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8747 | 15-20%                  |                10 |              0.08747 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8766 | >20%                    |                10 |              0.08766 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8829 | 5-10%                   |                10 |              0.08829 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8877 | 15-20%                  |                10 |              0.08877 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9076 | 5-10%                   |                 5 |              0.18152 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9122 | <5%                     |                10 |              0.09122 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9194 | 5-10%                   |                10 |              0.09194 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9314 | >20%                    |                 5 |              0.18628 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9352 | 5-10%                   |                10 |              0.09352 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9411 | >20%                    |                10 |              0.09411 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9512 | 5-10%                   |                10 |              0.09512 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9551 | 15-20%                  |                10 |              0.09551 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9564 | 5-10%                   |                10 |              0.09564 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9584 | >20%                    |                10 |              0.09584 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9613 | >20%                    |                 2 |              0.48065 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9678 | 15-20%                  |                 5 |              0.19356 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9817 | 15-20%                  |                10 |              0.09817 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.983  | <5%                     |                10 |              0.0983  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9842 | 15-20%                  |                10 |              0.09842 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9854 | <5%                     |                10 |              0.09854 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9934 | 5-10%                   |                10 |              0.09934 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0097 | >20%                    |                10 |              0.10097 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0106 | >20%                    |                10 |              0.10106 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0367 | 15-20%                  |                10 |              0.10367 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0544 | <5%                     |                10 |              0.10544 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0613 | >20%                    |                10 |              0.10613 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.077  | 5-10%                   |                10 |              0.1077  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0932 | >20%                    |                 5 |              0.21864 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.099  | >20%                    |                10 |              0.1099  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1158 | 15-20%                  |                10 |              0.11158 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1246 | >20%                    |                10 |              0.11246 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.129  | >20%                    |                10 |              0.1129  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1311 | >20%                    |                 2 |              0.56555 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.141  | >20%                    |                10 |              0.1141  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1663 | >20%                    |                10 |              0.11663 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1687 | >20%                    |                 5 |              0.23374 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.179  | >20%                    |                10 |              0.1179  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.1911 | >20%                    |                 5 |              0.23822 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2637 | <5%                     |                 2 |              0.63185 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3171 | 15-20%                  |                 5 |              0.26342 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3308 | >20%                    |                 5 |              0.26616 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.354  | >20%                    |                10 |              0.1354  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.366  | >20%                    |                 2 |              0.683   |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3758 | <5%                     |                10 |              0.13758 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4092 | 5-10%                   |                10 |              0.14092 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4297 | >20%                    |                10 |              0.14297 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.5024 | >20%                    |                 5 |              0.30048 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.5366 | 5-10%                   |                 2 |              0.7683  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5567 | <5%                     |                 5 |              0.31134 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5983 | >20%                    |                10 |              0.15983 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.904  | 10-15%                  |                10 |              0.1904  |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0684 | <5%                     |                10 |              0.20684 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0953 | 5-10%                   |                10 |              0.20953 |