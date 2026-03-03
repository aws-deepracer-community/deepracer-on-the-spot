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

Data correct as of 2026-03-03 02:35:32.572020, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1602 | >20%                    |                 2 |              0.0801  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1779 | >20%                    |                 2 |              0.08895 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.1961 | >20%                    |                 2 |              0.09805 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1988 | >20%                    |                 5 |              0.03976 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2214 | <5%                     |                 2 |              0.1107  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2349 | >20%                    |                 2 |              0.11745 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2393 | 5-10%                   |                10 |              0.02393 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2468 | >20%                    |                 2 |              0.1234  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.248  | 10-15%                  |                 2 |              0.124   |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2563 | >20%                    |                 2 |              0.12815 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2577 | 15-20%                  |                 2 |              0.12885 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.258  | >20%                    |                 2 |              0.129   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2643 | >20%                    |                 2 |              0.13215 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.283  | 10-15%                  |                 2 |              0.1415  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2833 | >20%                    |                 5 |              0.05666 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2839 | >20%                    |                 5 |              0.05678 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2952 | >20%                    |                 5 |              0.05904 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3051 | >20%                    |                 2 |              0.15255 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3071 | <5%                     |                 5 |              0.06142 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3081 | 5-10%                   |                 2 |              0.15405 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3086 | >20%                    |                 2 |              0.1543  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3137 | >20%                    |                 2 |              0.15685 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.323  | >20%                    |                 2 |              0.1615  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3283 | >20%                    |                 5 |              0.06566 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3385 | >20%                    |                 2 |              0.16925 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3386 | 5-10%                   |                10 |              0.03386 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3448 | >20%                    |                 5 |              0.06896 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.346  | >20%                    |                 5 |              0.0692  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3525 | 15-20%                  |                 2 |              0.17625 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3568 | >20%                    |                10 |              0.03568 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3597 | 10-15%                  |                 2 |              0.17985 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3603 | <5%                     |                 5 |              0.07206 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3649 | 5-10%                   |                 2 |              0.18245 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3659 | 5-10%                   |                 2 |              0.18295 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.373  | >20%                    |                 5 |              0.0746  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3737 | >20%                    |                 5 |              0.07474 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3741 | >20%                    |                 5 |              0.07482 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.378  | 5-10%                   |                 5 |              0.0756  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3826 | 15-20%                  |                 2 |              0.1913  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3894 | <5%                     |                 2 |              0.1947  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3901 | >20%                    |                 2 |              0.19505 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3908 | >20%                    |                10 |              0.03908 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3933 | 5-10%                   |                 2 |              0.19665 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3943 | <5%                     |                 5 |              0.07886 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4131 | 10-15%                  |                 5 |              0.08262 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4147 | >20%                    |                 5 |              0.08294 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4171 | <5%                     |                10 |              0.04171 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4206 | 5-10%                   |                 2 |              0.2103  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4211 | 15-20%                  |                 5 |              0.08422 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4217 | >20%                    |                 2 |              0.21085 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.423  | >20%                    |                 2 |              0.2115  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4238 | >20%                    |                 2 |              0.2119  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4287 | >20%                    |                 2 |              0.21435 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4294 | 15-20%                  |                 2 |              0.2147  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4296 | >20%                    |                 2 |              0.2148  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4317 | <5%                     |                 2 |              0.21585 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4328 | >20%                    |                 5 |              0.08656 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4373 | >20%                    |                 2 |              0.21865 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4385 | >20%                    |                10 |              0.04385 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4422 | <5%                     |                 2 |              0.2211  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4433 | 5-10%                   |                 5 |              0.08866 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4437 | 15-20%                  |                 2 |              0.22185 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4467 | >20%                    |                 2 |              0.22335 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4503 | 15-20%                  |                 5 |              0.09006 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4518 | 15-20%                  |                 2 |              0.2259  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4525 | 5-10%                   |                 5 |              0.0905  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4552 | 5-10%                   |                 2 |              0.2276  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4599 | 15-20%                  |                10 |              0.04599 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4603 | <5%                     |                 5 |              0.09206 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4642 | 5-10%                   |                 2 |              0.2321  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.471  | >20%                    |                 5 |              0.0942  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4743 | 15-20%                  |                 5 |              0.09486 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4754 | >20%                    |                10 |              0.04754 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.4979 | <5%                     |                 5 |              0.09958 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5053 | >20%                    |                 5 |              0.10106 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5069 | >20%                    |                 2 |              0.25345 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5098 | >20%                    |                 5 |              0.10196 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5139 | >20%                    |                 5 |              0.10278 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5152 | >20%                    |                 5 |              0.10304 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5152 | >20%                    |                 2 |              0.2576  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.52   | >20%                    |                 5 |              0.104   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5237 | >20%                    |                10 |              0.05237 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5261 | >20%                    |                 5 |              0.10522 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5275 | 15-20%                  |                 5 |              0.1055  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5325 | >20%                    |                 2 |              0.26625 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.533  | >20%                    |                 5 |              0.1066  |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5486 |                         |                 2 |              0.2743  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5559 | >20%                    |                10 |              0.05559 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5578 | <5%                     |                 5 |              0.11156 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5579 | >20%                    |                 2 |              0.27895 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5705 | 15-20%                  |                10 |              0.05705 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5791 | 15-20%                  |                10 |              0.05791 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5839 | 5-10%                   |                 2 |              0.29195 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.5916 | >20%                    |                10 |              0.05916 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5986 | >20%                    |                 5 |              0.11972 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6007 | >20%                    |                10 |              0.06007 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6057 | 15-20%                  |                 2 |              0.30285 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6088 | >20%                    |                 5 |              0.12176 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6098 | >20%                    |                10 |              0.06098 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6153 | 5-10%                   |                 2 |              0.30765 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6181 | >20%                    |                 5 |              0.12362 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6208 | 15-20%                  |                10 |              0.06208 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6215 | >20%                    |                 5 |              0.1243  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6221 | >20%                    |                 2 |              0.31105 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6228 | >20%                    |                10 |              0.06228 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.628  | >20%                    |                 5 |              0.1256  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.643  | 5-10%                   |                 5 |              0.1286  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6443 | 10-15%                  |                 5 |              0.12886 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6452 | 5-10%                   |                 5 |              0.12904 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6454 | <5%                     |                10 |              0.06454 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6473 | >20%                    |                 2 |              0.32365 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6526 | <5%                     |                10 |              0.06526 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6544 | >20%                    |                10 |              0.06544 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6581 | >20%                    |                 2 |              0.32905 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6586 | 5-10%                   |                 5 |              0.13172 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6718 | <5%                     |                10 |              0.06718 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6765 | >20%                    |                 5 |              0.1353  |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6946 |                         |                 5 |              0.13892 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6995 | <5%                     |                10 |              0.06995 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7038 | >20%                    |                 5 |              0.14076 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7115 | >20%                    |                10 |              0.07115 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7266 | >20%                    |                10 |              0.07266 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7299 | >20%                    |                 5 |              0.14598 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.754  | >20%                    |                 5 |              0.1508  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7555 | >20%                    |                10 |              0.07555 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7596 | 10-15%                  |                10 |              0.07596 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7598 | >20%                    |                10 |              0.07598 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7644 | >20%                    |                 5 |              0.15288 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7682 | >20%                    |                10 |              0.07682 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7693 | 10-15%                  |                10 |              0.07693 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7829 | <5%                     |                10 |              0.07829 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7877 | >20%                    |                 2 |              0.39385 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.812  | <5%                     |                10 |              0.0812  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.816  | <5%                     |                 5 |              0.1632  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8183 | 15-20%                  |                10 |              0.08183 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8281 | >20%                    |                10 |              0.08281 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8302 | >20%                    |                 2 |              0.4151  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.846  | <5%                     |                 5 |              0.1692  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8511 | >20%                    |                 5 |              0.17022 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8557 | 10-15%                  |                 2 |              0.42785 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8653 | >20%                    |                 5 |              0.17306 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8762 | >20%                    |                 5 |              0.17524 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8785 | >20%                    |                10 |              0.08785 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8827 | >20%                    |                 5 |              0.17654 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8918 | 15-20%                  |                10 |              0.08918 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9122 | >20%                    |                 5 |              0.18244 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9123 | >20%                    |                10 |              0.09123 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9237 | 10-15%                  |                10 |              0.09237 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9259 | <5%                     |                10 |              0.09259 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9548 | >20%                    |                10 |              0.09548 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9567 | <5%                     |                10 |              0.09567 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9583 | 5-10%                   |                10 |              0.09583 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9684 | >20%                    |                 2 |              0.4842  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9691 | >20%                    |                10 |              0.09691 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9696 | >20%                    |                10 |              0.09696 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9705 | >20%                    |                 2 |              0.48525 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9822 | 5-10%                   |                 5 |              0.19644 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9851 | 5-10%                   |                10 |              0.09851 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0091 | >20%                    |                10 |              0.10091 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0161 | >20%                    |                10 |              0.10161 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.04   | >20%                    |                10 |              0.104   |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0419 | 5-10%                   |                10 |              0.10419 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.057  |                         |                10 |              0.1057  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0613 | >20%                    |                10 |              0.10613 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.0676 | >20%                    |                 5 |              0.21352 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1379 | 15-20%                  |                10 |              0.11379 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1962 | >20%                    |                10 |              0.11962 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2363 | 10-15%                  |                 5 |              0.24726 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.242  | >20%                    |                 2 |              0.621   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2896 | >20%                    |                10 |              0.12896 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2967 | <5%                     |                10 |              0.12967 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3607 | >20%                    |                 2 |              0.68035 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4132 | >20%                    |                 5 |              0.28264 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4382 | 10-15%                  |                 5 |              0.28764 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4447 | >20%                    |                 2 |              0.72235 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5729 | 15-20%                  |                10 |              0.15729 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5887 | >20%                    |                10 |              0.15887 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6591 | >20%                    |                10 |              0.16591 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3051 | 10-15%                  |                10 |              0.23051 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4284 | <5%                     |                 5 |              0.48568 |