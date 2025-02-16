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

Data correct as of 2025-02-16 01:44:01.478521, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1145 | >20%                    |                 2 |              0.05725 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 15-20%                  |                 2 |              0.0639  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1459 | <5%                     |                 5 |              0.02918 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1865 | <5%                     |                 5 |              0.0373  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.195  | 15-20%                  |                 5 |              0.039   |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.1999 | <5%                     |                 5 |              0.03998 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.2113 | 10-15%                  |                 2 |              0.10565 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2158 | 5-10%                   |                 2 |              0.1079  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2229 | <5%                     |                 2 |              0.11145 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2265 | >20%                    |                 2 |              0.11325 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2358 | 15-20%                  |                 2 |              0.1179  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2375 | 15-20%                  |                 2 |              0.11875 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2395 | 15-20%                  |                10 |              0.02395 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2421 | >20%                    |                 2 |              0.12105 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2543 | 5-10%                   |                 2 |              0.12715 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2683 | 15-20%                  |                 5 |              0.05366 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2727 | 10-15%                  |                 2 |              0.13635 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2742 | >20%                    |                 2 |              0.1371  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.276  | 10-15%                  |                 5 |              0.0552  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2803 | <5%                     |                 2 |              0.14015 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2859 | <5%                     |                 2 |              0.14295 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2873 | 15-20%                  |                 2 |              0.14365 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2877 | 5-10%                   |                 2 |              0.14385 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.2892 | <5%                     |                10 |              0.02892 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2966 | <5%                     |                 2 |              0.1483  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3015 | 5-10%                   |                10 |              0.03015 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3029 | <5%                     |                 2 |              0.15145 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3039 | 5-10%                   |                 2 |              0.15195 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3132 | 10-15%                  |                 2 |              0.1566  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3224 | 10-15%                  |                 2 |              0.1612  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3273 | <5%                     |                 2 |              0.16365 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3327 | >20%                    |                 2 |              0.16635 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3333 | >20%                    |                 2 |              0.16665 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3387 | 15-20%                  |                 5 |              0.06774 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3543 | >20%                    |                 5 |              0.07086 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3547 | <5%                     |                10 |              0.03547 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3608 | 10-15%                  |                 2 |              0.1804  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3628 | <5%                     |                 2 |              0.1814  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.367  | 10-15%                  |                 5 |              0.0734  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3671 | 5-10%                   |                 2 |              0.18355 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3781 | 15-20%                  |                 2 |              0.18905 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3788 | 5-10%                   |                 2 |              0.1894  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.379  | <5%                     |                 5 |              0.0758  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3849 | >20%                    |                 5 |              0.07698 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.385  | 5-10%                   |                 5 |              0.077   |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3931 | >20%                    |                10 |              0.03931 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3956 | 15-20%                  |                10 |              0.03956 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3958 | 5-10%                   |                10 |              0.03958 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3978 | >20%                    |                 2 |              0.1989  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3995 | 5-10%                   |                 2 |              0.19975 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4072 | 10-15%                  |                 2 |              0.2036  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4078 | <5%                     |                 2 |              0.2039  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4159 | 5-10%                   |                 5 |              0.08318 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4181 | 5-10%                   |                 2 |              0.20905 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4263 | >20%                    |                 5 |              0.08526 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4302 | <5%                     |                 2 |              0.2151  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4346 | <5%                     |                 5 |              0.08692 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4413 | >20%                    |                 5 |              0.08826 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4441 | >20%                    |                10 |              0.04441 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4494 | <5%                     |                 2 |              0.2247  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4527 | >20%                    |                 5 |              0.09054 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.479  | 15-20%                  |                 5 |              0.0958  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4815 | >20%                    |                 5 |              0.0963  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4822 | 5-10%                   |                 5 |              0.09644 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.485  | >20%                    |                 2 |              0.2425  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4863 | 10-15%                  |                 5 |              0.09726 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4871 | >20%                    |                 2 |              0.24355 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4921 | 5-10%                   |                 5 |              0.09842 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.493  | <5%                     |                 5 |              0.0986  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5007 | >20%                    |                 5 |              0.10014 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5012 | >20%                    |                 2 |              0.2506  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5015 | >20%                    |                 5 |              0.1003  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5027 | 5-10%                   |                 2 |              0.25135 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5038 | 10-15%                  |                 5 |              0.10076 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5056 | <5%                     |                 5 |              0.10112 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5307 | >20%                    |                 2 |              0.26535 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5317 | 10-15%                  |                 5 |              0.10634 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5357 | <5%                     |                 2 |              0.26785 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5357 | >20%                    |                 2 |              0.26785 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5394 | 15-20%                  |                 2 |              0.2697  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.541  | >20%                    |                 2 |              0.2705  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5472 | >20%                    |                 5 |              0.10944 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5488 | 5-10%                   |                 5 |              0.10976 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5532 | >20%                    |                 2 |              0.2766  |
| il-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.562  | >20%                    |                 2 |              0.281   |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.562  | >20%                    |                 5 |              0.1124  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5624 | >20%                    |                 2 |              0.2812  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.563  | 10-15%                  |                 5 |              0.1126  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5652 | <5%                     |                 5 |              0.11304 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5735 | 10-15%                  |                 2 |              0.28675 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5756 | <5%                     |                 5 |              0.11512 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5857 | 5-10%                   |                10 |              0.05857 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5868 | 10-15%                  |                 5 |              0.11736 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5909 | 5-10%                   |                10 |              0.05909 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5935 | >20%                    |                 5 |              0.1187  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5966 | 10-15%                  |                 5 |              0.11932 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6095 | 5-10%                   |                 5 |              0.1219  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6202 | 5-10%                   |                 5 |              0.12404 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6346 | <5%                     |                10 |              0.06346 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.6356 | >20%                    |                 2 |              0.3178  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6358 | >20%                    |                10 |              0.06358 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6559 | 10-15%                  |                 5 |              0.13118 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6609 | <5%                     |                10 |              0.06609 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6615 | >20%                    |                10 |              0.06615 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6684 | >20%                    |                 5 |              0.13368 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6685 | >20%                    |                 2 |              0.33425 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.6743 | >20%                    |                10 |              0.06743 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6937 | 10-15%                  |                 5 |              0.13874 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7067 | >20%                    |                10 |              0.07067 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7081 | >20%                    |                 5 |              0.14162 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7087 | >20%                    |                 5 |              0.14174 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7119 | 15-20%                  |                 5 |              0.14238 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7331 | 5-10%                   |                10 |              0.07331 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7365 | >20%                    |                 5 |              0.1473  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7485 | >20%                    |                10 |              0.07485 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7512 | <5%                     |                 5 |              0.15024 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7529 | >20%                    |                 5 |              0.15058 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7767 | >20%                    |                 5 |              0.15534 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.7787 | 5-10%                   |                 5 |              0.15574 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7816 | <5%                     |                10 |              0.07816 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7837 | >20%                    |                 5 |              0.15674 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7932 | 15-20%                  |                10 |              0.07932 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7959 | >20%                    |                10 |              0.07959 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8079 | 5-10%                   |                10 |              0.08079 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8082 | 10-15%                  |                10 |              0.08082 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.8127 | <5%                     |                 5 |              0.16254 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8141 | >20%                    |                10 |              0.08141 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.816  | 5-10%                   |                 2 |              0.408   |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8208 | >20%                    |                10 |              0.08208 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8238 | <5%                     |                10 |              0.08238 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8249 | 15-20%                  |                10 |              0.08249 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8366 | 15-20%                  |                 2 |              0.4183  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8418 | <5%                     |                10 |              0.08418 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.843  | 15-20%                  |                10 |              0.0843  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.845  | <5%                     |                10 |              0.0845  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8533 | >20%                    |                10 |              0.08533 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8633 | 10-15%                  |                10 |              0.08633 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8677 | 10-15%                  |                10 |              0.08677 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8696 | 15-20%                  |                 5 |              0.17392 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8903 | >20%                    |                 2 |              0.44515 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8978 | <5%                     |                10 |              0.08978 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9017 | 15-20%                  |                10 |              0.09017 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9075 | >20%                    |                10 |              0.09075 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9165 | <5%                     |                10 |              0.09165 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9302 | <5%                     |                10 |              0.09302 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9318 | 15-20%                  |                 5 |              0.18636 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9492 | <5%                     |                10 |              0.09492 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9647 | 10-15%                  |                10 |              0.09647 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9811 | 10-15%                  |                10 |              0.09811 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9892 | >20%                    |                10 |              0.09892 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0119 | >20%                    |                10 |              0.10119 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.072  | <5%                     |                10 |              0.1072  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1026 | 15-20%                  |                10 |              0.11026 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1171 | >20%                    |                 2 |              0.55855 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1395 | 15-20%                  |                10 |              0.11395 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1515 | >20%                    |                 2 |              0.57575 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.1536 | 5-10%                   |                10 |              0.11536 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1548 | >20%                    |                10 |              0.11548 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1635 | >20%                    |                 5 |              0.2327  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2067 | 10-15%                  |                 2 |              0.60335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2183 | <5%                     |                10 |              0.12183 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2381 | 10-15%                  |                 5 |              0.24762 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2488 | >20%                    |                 5 |              0.24976 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3256 | >20%                    |                10 |              0.13256 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3402 | >20%                    |                10 |              0.13402 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3836 | >20%                    |                10 |              0.13836 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6557 | >20%                    |                10 |              0.16557 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.807  | >20%                    |                10 |              0.1807  |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0283 | 5-10%                   |                10 |              0.20283 |