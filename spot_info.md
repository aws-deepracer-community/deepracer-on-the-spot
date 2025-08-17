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

Data correct as of 2025-08-17 02:04:52.424122, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1002 | 5-10%                   |                 2 |              0.0501  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.164  | >20%                    |                 5 |              0.0328  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1883 | >20%                    |                 2 |              0.09415 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1986 | 10-15%                  |                 5 |              0.03972 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2034 | 10-15%                  |                 2 |              0.1017  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2139 | >20%                    |                 2 |              0.10695 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2469 | >20%                    |                 2 |              0.12345 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2532 | >20%                    |                 2 |              0.1266  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.258  | >20%                    |                 2 |              0.129   |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2879 | >20%                    |                 2 |              0.14395 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2981 | >20%                    |                 2 |              0.14905 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3087 | >20%                    |                 2 |              0.15435 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3108 | 10-15%                  |                 2 |              0.1554  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3147 | 10-15%                  |                 2 |              0.15735 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.315  | 5-10%                   |                 2 |              0.1575  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.32   | 10-15%                  |                 2 |              0.16    |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3373 | >20%                    |                 2 |              0.16865 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3399 | >20%                    |                 2 |              0.16995 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3464 | >20%                    |                 2 |              0.1732  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.356  | >20%                    |                 2 |              0.178   |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.357  | >20%                    |                 2 |              0.1785  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3581 | >20%                    |                 2 |              0.17905 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.366  | >20%                    |                 2 |              0.183   |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3664 | >20%                    |                 5 |              0.07328 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3673 | >20%                    |                 5 |              0.07346 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3795 | >20%                    |                 2 |              0.18975 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3826 | >20%                    |                 2 |              0.1913  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3923 | >20%                    |                 5 |              0.07846 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4062 | >20%                    |                 5 |              0.08124 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4198 | >20%                    |                 5 |              0.08396 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4201 | >20%                    |                 5 |              0.08402 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4206 | >20%                    |                 5 |              0.08412 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4273 | 10-15%                  |                 2 |              0.21365 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4282 | >20%                    |                 5 |              0.08564 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4344 | >20%                    |                 2 |              0.2172  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4403 | >20%                    |                 5 |              0.08806 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4521 | >20%                    |                 5 |              0.09042 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4567 | 10-15%                  |                 2 |              0.22835 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.464  | 10-15%                  |                 2 |              0.232   |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4667 | 15-20%                  |                 2 |              0.23335 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4727 | 5-10%                   |                 2 |              0.23635 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4728 | >20%                    |                 2 |              0.2364  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.473  | >20%                    |                 2 |              0.2365  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4737 | >20%                    |                 2 |              0.23685 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4805 | >20%                    |                 5 |              0.0961  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4811 | >20%                    |                 2 |              0.24055 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4846 | 15-20%                  |                 2 |              0.2423  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4849 | <5%                     |                 2 |              0.24245 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4897 | >20%                    |                 2 |              0.24485 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4955 | 5-10%                   |                 5 |              0.0991  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4958 | >20%                    |                 5 |              0.09916 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5013 | >20%                    |                 2 |              0.25065 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5031 | 15-20%                  |                 5 |              0.10062 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5053 | >20%                    |                 5 |              0.10106 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5084 | >20%                    |                 2 |              0.2542  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5258 | >20%                    |                 2 |              0.2629  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5336 | >20%                    |                 5 |              0.10672 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5347 | >20%                    |                 5 |              0.10694 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5388 | 15-20%                  |                 5 |              0.10776 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5426 | >20%                    |                 2 |              0.2713  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5444 | >20%                    |                 2 |              0.2722  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5461 | 15-20%                  |                 5 |              0.10922 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.562  | >20%                    |                 2 |              0.281   |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5654 | >20%                    |                 2 |              0.2827  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5675 | 10-15%                  |                10 |              0.05675 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5692 | >20%                    |                 5 |              0.11384 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5769 | >20%                    |                 5 |              0.11538 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5909 | >20%                    |                 5 |              0.11818 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5917 | >20%                    |                 5 |              0.11834 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5941 | 10-15%                  |                 2 |              0.29705 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5979 | 10-15%                  |                 2 |              0.29895 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6116 | >20%                    |                 5 |              0.12232 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6149 | 15-20%                  |                 5 |              0.12298 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.616  | >20%                    |                10 |              0.0616  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6204 | >20%                    |                 2 |              0.3102  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6231 | >20%                    |                 5 |              0.12462 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.625  | 15-20%                  |                 5 |              0.125   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6271 | 10-15%                  |                 5 |              0.12542 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6321 | 10-15%                  |                 5 |              0.12642 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6403 | 15-20%                  |                 5 |              0.12806 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6406 | >20%                    |                 2 |              0.3203  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6432 | 15-20%                  |                 5 |              0.12864 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6538 | >20%                    |                 5 |              0.13076 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.656  | 15-20%                  |                 2 |              0.328   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6647 | 15-20%                  |                 5 |              0.13294 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6673 | >20%                    |                 5 |              0.13346 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6745 | 15-20%                  |                 5 |              0.1349  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6781 | 10-15%                  |                10 |              0.06781 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6812 | 15-20%                  |                 2 |              0.3406  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6875 | >20%                    |                 5 |              0.1375  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6939 | 5-10%                   |                10 |              0.06939 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7025 | <5%                     |                 2 |              0.35125 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7034 | >20%                    |                 5 |              0.14068 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7057 | 10-15%                  |                10 |              0.07057 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.708  | 15-20%                  |                10 |              0.0708  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7097 | >20%                    |                10 |              0.07097 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7213 | 15-20%                  |                 5 |              0.14426 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7221 | >20%                    |                10 |              0.07221 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7236 | >20%                    |                 5 |              0.14472 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.728  | >20%                    |                10 |              0.0728  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7289 | >20%                    |                10 |              0.07289 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7443 | 5-10%                   |                 2 |              0.37215 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7686 | >20%                    |                10 |              0.07686 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7697 | >20%                    |                10 |              0.07697 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7705 | >20%                    |                10 |              0.07705 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.782  | >20%                    |                 5 |              0.1564  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7894 | 5-10%                   |                 5 |              0.15788 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8197 | >20%                    |                 5 |              0.16394 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8235 | >20%                    |                 5 |              0.1647  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.826  | 15-20%                  |                 5 |              0.1652  |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8425 | >20%                    |                10 |              0.08425 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8435 | >20%                    |                10 |              0.08435 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8561 | >20%                    |                10 |              0.08561 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8568 | >20%                    |                 5 |              0.17136 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8763 | <5%                     |                10 |              0.08763 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8765 | <5%                     |                10 |              0.08765 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8927 | >20%                    |                 2 |              0.44635 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8961 | >20%                    |                 5 |              0.17922 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8963 | 5-10%                   |                10 |              0.08963 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9083 | 5-10%                   |                10 |              0.09083 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9217 | 5-10%                   |                10 |              0.09217 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9324 | 10-15%                  |                10 |              0.09324 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.934  | 10-15%                  |                10 |              0.0934  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9378 | >20%                    |                10 |              0.09378 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9425 | >20%                    |                10 |              0.09425 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.947  | 10-15%                  |                10 |              0.0947  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9533 | 5-10%                   |                10 |              0.09533 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9543 | >20%                    |                 2 |              0.47715 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9729 | >20%                    |                 5 |              0.19458 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9758 | 5-10%                   |                10 |              0.09758 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9806 | 15-20%                  |                10 |              0.09806 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9914 | <5%                     |                10 |              0.09914 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9998 | 10-15%                  |                10 |              0.09998 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0016 | >20%                    |                10 |              0.10016 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.0126 | 15-20%                  |                10 |              0.10126 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0225 | 15-20%                  |                10 |              0.10225 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0538 | >20%                    |                10 |              0.10538 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1077 | <5%                     |                10 |              0.11077 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1077 | >20%                    |                10 |              0.11077 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1097 | >20%                    |                10 |              0.11097 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1126 | >20%                    |                10 |              0.11126 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1287 | >20%                    |                 5 |              0.22574 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1549 | <5%                     |                 2 |              0.57745 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.156  | >20%                    |                10 |              0.1156  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1567 | >20%                    |                 2 |              0.57835 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1612 | >20%                    |                10 |              0.11612 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1816 | >20%                    |                10 |              0.11816 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1937 | >20%                    |                 5 |              0.23874 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2003 | 15-20%                  |                10 |              0.12003 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2015 | >20%                    |                 2 |              0.60075 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.2058 | 10-15%                  |                10 |              0.12058 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2471 | 5-10%                   |                 5 |              0.24942 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2589 | >20%                    |                 5 |              0.25178 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3497 | >20%                    |                10 |              0.13497 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3755 | >20%                    |                 5 |              0.2751  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.4053 | 15-20%                  |                 2 |              0.70265 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.4221 | >20%                    |                10 |              0.14221 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.47   | >20%                    |                10 |              0.147   |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.4751 | 15-20%                  |                 5 |              0.29502 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4891 | 5-10%                   |                 5 |              0.29782 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5126 | >20%                    |                10 |              0.15126 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5416 | >20%                    |                10 |              0.15416 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5988 | >20%                    |                10 |              0.15988 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6644 | >20%                    |                10 |              0.16644 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1155 | 10-15%                  |                10 |              0.21155 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.2086 | 10-15%                  |                10 |              0.22086 |