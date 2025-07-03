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

Data correct as of 2025-07-03 01:57:37.447424, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1549 | <5%                     |                 2 |              0.07745 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1699 | >20%                    |                 5 |              0.03398 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.1701 | >20%                    |                 5 |              0.03402 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1868 | 15-20%                  |                 2 |              0.0934  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1957 | 15-20%                  |                 5 |              0.03914 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.1958 | >20%                    |                 5 |              0.03916 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2014 | 10-15%                  |                10 |              0.02014 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2093 | >20%                    |                 2 |              0.10465 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2094 | >20%                    |                 2 |              0.1047  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2163 | >20%                    |                 2 |              0.10815 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2182 | 15-20%                  |                 2 |              0.1091  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.219  | 5-10%                   |                 2 |              0.1095  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2211 | <5%                     |                 5 |              0.04422 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.23   | 15-20%                  |                 2 |              0.115   |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2305 | >20%                    |                 2 |              0.11525 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2405 | >20%                    |                10 |              0.02405 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2411 | 15-20%                  |                 2 |              0.12055 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2611 | >20%                    |                 2 |              0.13055 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2681 | >20%                    |                 2 |              0.13405 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2767 | 5-10%                   |                10 |              0.02767 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2806 | >20%                    |                 5 |              0.05612 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.294  | <5%                     |                 2 |              0.147   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3026 | >20%                    |                 2 |              0.1513  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3032 | >20%                    |                 2 |              0.1516  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3045 | >20%                    |                 2 |              0.15225 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3102 | >20%                    |                 2 |              0.1551  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.316  | 15-20%                  |                 5 |              0.0632  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3167 | >20%                    |                 5 |              0.06334 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3172 | >20%                    |                 2 |              0.1586  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3234 | >20%                    |                 2 |              0.1617  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3332 | 10-15%                  |                 2 |              0.1666  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3411 | <5%                     |                 2 |              0.17055 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3436 | 15-20%                  |                10 |              0.03436 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.355  | 10-15%                  |                 2 |              0.1775  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3564 | 15-20%                  |                 5 |              0.07128 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3668 | >20%                    |                 2 |              0.1834  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3719 | >20%                    |                 2 |              0.18595 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3762 | >20%                    |                 5 |              0.07524 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3796 | >20%                    |                 2 |              0.1898  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3831 | 5-10%                   |                 2 |              0.19155 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3931 | >20%                    |                 2 |              0.19655 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3978 | 10-15%                  |                 2 |              0.1989  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4004 | >20%                    |                 5 |              0.08008 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.404  | >20%                    |                 2 |              0.202   |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4145 | <5%                     |                10 |              0.04145 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4224 | <5%                     |                 2 |              0.2112  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4249 | 10-15%                  |                 5 |              0.08498 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.427  | >20%                    |                 2 |              0.2135  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4287 | >20%                    |                 2 |              0.21435 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4336 | 10-15%                  |                 2 |              0.2168  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4349 | 15-20%                  |                10 |              0.04349 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4382 | >20%                    |                 5 |              0.08764 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4554 | >20%                    |                 5 |              0.09108 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4571 | <5%                     |                 5 |              0.09142 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4652 | >20%                    |                 2 |              0.2326  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4654 | 15-20%                  |                 5 |              0.09308 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4669 | >20%                    |                 5 |              0.09338 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4675 | >20%                    |                 2 |              0.23375 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4683 | >20%                    |                 2 |              0.23415 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4721 | >20%                    |                 5 |              0.09442 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4723 | >20%                    |                 5 |              0.09446 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4741 | >20%                    |                 2 |              0.23705 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.477  | 5-10%                   |                 2 |              0.2385  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.477  | 5-10%                   |                 2 |              0.2385  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4772 | 10-15%                  |                 5 |              0.09544 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4793 | >20%                    |                 5 |              0.09586 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4811 | >20%                    |                 2 |              0.24055 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4817 | 10-15%                  |                 5 |              0.09634 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4821 | >20%                    |                10 |              0.04821 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4863 | <5%                     |                 5 |              0.09726 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.494  | >20%                    |                 2 |              0.247   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4944 | >20%                    |                 2 |              0.2472  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4976 | 15-20%                  |                 2 |              0.2488  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5173 | >20%                    |                 5 |              0.10346 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5189 | 5-10%                   |                 5 |              0.10378 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5196 | >20%                    |                 2 |              0.2598  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5222 | >20%                    |                 5 |              0.10444 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5225 | >20%                    |                 2 |              0.26125 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5258 | >20%                    |                 2 |              0.2629  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.526  | 10-15%                  |                 2 |              0.263   |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5275 | 10-15%                  |                 5 |              0.1055  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5285 | >20%                    |                 5 |              0.1057  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5366 | >20%                    |                 5 |              0.10732 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5367 | >20%                    |                10 |              0.05367 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5367 | <5%                     |                 5 |              0.10734 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5383 | >20%                    |                10 |              0.05383 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5417 | >20%                    |                 2 |              0.27085 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5549 | >20%                    |                 5 |              0.11098 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5688 | 15-20%                  |                 2 |              0.2844  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5718 | 15-20%                  |                 2 |              0.2859  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5772 | >20%                    |                 5 |              0.11544 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5786 | 15-20%                  |                 5 |              0.11572 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5843 | >20%                    |                 5 |              0.11686 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5851 | >20%                    |                 2 |              0.29255 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5946 | <5%                     |                 2 |              0.2973  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6023 | >20%                    |                 5 |              0.12046 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6077 | >20%                    |                 5 |              0.12154 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6131 | <5%                     |                 5 |              0.12262 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6232 | 10-15%                  |                10 |              0.06232 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6238 | >20%                    |                 5 |              0.12476 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.625  | 10-15%                  |                 5 |              0.125   |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6304 | 5-10%                   |                 2 |              0.3152  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6326 | >20%                    |                 5 |              0.12652 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6333 | >20%                    |                 5 |              0.12666 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6335 | >20%                    |                 5 |              0.1267  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6432 | >20%                    |                10 |              0.06432 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.65   | >20%                    |                10 |              0.065   |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.655  | >20%                    |                10 |              0.0655  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6583 | >20%                    |                 5 |              0.13166 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6584 | >20%                    |                 5 |              0.13168 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6635 | >20%                    |                 2 |              0.33175 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6745 | <5%                     |                 5 |              0.1349  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6791 | <5%                     |                 5 |              0.13582 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6889 | >20%                    |                 5 |              0.13778 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6971 | 10-15%                  |                 2 |              0.34855 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7002 | 15-20%                  |                10 |              0.07002 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7041 | >20%                    |                 5 |              0.14082 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7094 | >20%                    |                10 |              0.07094 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7116 | <5%                     |                 5 |              0.14232 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7138 | >20%                    |                10 |              0.07138 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7204 | <5%                     |                 5 |              0.14408 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7211 | >20%                    |                10 |              0.07211 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7279 | 10-15%                  |                 5 |              0.14558 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7301 | >20%                    |                 5 |              0.14602 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7318 | 15-20%                  |                10 |              0.07318 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7374 | 10-15%                  |                 5 |              0.14748 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7617 | >20%                    |                10 |              0.07617 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.779  | >20%                    |                10 |              0.0779  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7828 | >20%                    |                 5 |              0.15656 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7834 | >20%                    |                10 |              0.07834 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7887 | 5-10%                   |                 5 |              0.15774 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8005 | 15-20%                  |                10 |              0.08005 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8025 | <5%                     |                10 |              0.08025 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8091 | <5%                     |                10 |              0.08091 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8159 | 15-20%                  |                10 |              0.08159 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8223 | 10-15%                  |                10 |              0.08223 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8235 | >20%                    |                10 |              0.08235 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.833  | <5%                     |                10 |              0.0833  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8368 | >20%                    |                10 |              0.08368 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8435 | >20%                    |                10 |              0.08435 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8498 | <5%                     |                10 |              0.08498 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8696 | >20%                    |                10 |              0.08696 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.872  | 15-20%                  |                10 |              0.0872  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9002 | >20%                    |                10 |              0.09002 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9107 | >20%                    |                10 |              0.09107 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9233 | >20%                    |                10 |              0.09233 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9266 | >20%                    |                10 |              0.09266 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9276 | >20%                    |                10 |              0.09276 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9285 | >20%                    |                10 |              0.09285 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9478 | >20%                    |                10 |              0.09478 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9491 | 15-20%                  |                10 |              0.09491 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9587 | >20%                    |                10 |              0.09587 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9637 | >20%                    |                10 |              0.09637 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9704 | >20%                    |                 5 |              0.19408 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.98   | >20%                    |                 2 |              0.49    |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0183 | >20%                    |                10 |              0.10183 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0295 | >20%                    |                10 |              0.10295 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0433 | >20%                    |                10 |              0.10433 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0498 | 10-15%                  |                10 |              0.10498 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0713 | 15-20%                  |                10 |              0.10713 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.0732 | <5%                     |                10 |              0.10732 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0768 | <5%                     |                 2 |              0.5384  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0842 | >20%                    |                 2 |              0.5421  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0916 | >20%                    |                 2 |              0.5458  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1028 | >20%                    |                10 |              0.11028 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1033 | 15-20%                  |                10 |              0.11033 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1697 | >20%                    |                10 |              0.11697 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1914 | 10-15%                  |                10 |              0.11914 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1944 | >20%                    |                 2 |              0.5972  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.2416 | 15-20%                  |                10 |              0.12416 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2569 | <5%                     |                 5 |              0.25138 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.29   | >20%                    |                 5 |              0.258   |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3311 | >20%                    |                10 |              0.13311 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3487 | >20%                    |                 5 |              0.26974 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4398 | <5%                     |                 5 |              0.28796 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4825 | >20%                    |                 5 |              0.2965  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6192 | 10-15%                  |                10 |              0.16192 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8368 | >20%                    |                10 |              0.18368 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8395 | <5%                     |                10 |              0.18395 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1361 | <5%                     |                10 |              0.21361 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      2.3008 | <5%                     |                 2 |              1.1504  |