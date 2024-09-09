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

Data correct as of 2024-09-09 01:27:26.993832, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0893 | <5%                     |                 2 |              0.04465 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2038 | 15-20%                  |                 5 |              0.04076 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2185 | 10-15%                  |                 2 |              0.10925 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2307 | 15-20%                  |                 2 |              0.11535 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2443 | <5%                     |                 2 |              0.12215 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.25   | 10-15%                  |                 2 |              0.125   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2537 | 5-10%                   |                 2 |              0.12685 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2614 | <5%                     |                 2 |              0.1307  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2756 | <5%                     |                 5 |              0.05512 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2793 | <5%                     |                 2 |              0.13965 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2835 | <5%                     |                 2 |              0.14175 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2993 | 10-15%                  |                 2 |              0.14965 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3101 | <5%                     |                 2 |              0.15505 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3173 | <5%                     |                 2 |              0.15865 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3181 | <5%                     |                 2 |              0.15905 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3208 | <5%                     |                 2 |              0.1604  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3511 | 15-20%                  |                 5 |              0.07022 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3574 | <5%                     |                 2 |              0.1787  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.361  | <5%                     |                 2 |              0.1805  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.361  | >20%                    |                10 |              0.0361  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.362  | <5%                     |                 2 |              0.181   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3633 | <5%                     |                 2 |              0.18165 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3681 | 5-10%                   |                 5 |              0.07362 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3769 | >20%                    |                 5 |              0.07538 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3858 | <5%                     |                 5 |              0.07716 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3937 | 10-15%                  |                 2 |              0.19685 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4106 | 15-20%                  |                 5 |              0.08212 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | 15-20%                  |                10 |              0.04161 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4196 | >20%                    |                 2 |              0.2098  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4248 | >20%                    |                 2 |              0.2124  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4277 | 15-20%                  |                 5 |              0.08554 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4285 | 5-10%                   |                 2 |              0.21425 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4338 | 5-10%                   |                 2 |              0.2169  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4405 | 15-20%                  |                 5 |              0.0881  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4532 | 5-10%                   |                 5 |              0.09064 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4624 | <5%                     |                 2 |              0.2312  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4687 | <5%                     |                 5 |              0.09374 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4708 | >20%                    |                 2 |              0.2354  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4774 | 10-15%                  |                 5 |              0.09548 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4776 | <5%                     |                 5 |              0.09552 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.481  | 5-10%                   |                 5 |              0.0962  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4829 | <5%                     |                 5 |              0.09658 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4858 | >20%                    |                 2 |              0.2429  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4858 | <5%                     |                10 |              0.04858 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4887 | >20%                    |                 2 |              0.24435 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4921 | 10-15%                  |                 2 |              0.24605 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4992 | 5-10%                   |                 5 |              0.09984 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5009 | <5%                     |                 5 |              0.10018 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5105 | <5%                     |                 2 |              0.25525 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5107 | <5%                     |                 5 |              0.10214 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.511  | >20%                    |                 5 |              0.1022  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5157 | >20%                    |                 5 |              0.10314 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5196 | 5-10%                   |                 5 |              0.10392 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5459 | >20%                    |                 2 |              0.27295 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5658 | >20%                    |                 5 |              0.11316 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5742 | >20%                    |                 2 |              0.2871  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.587  | <5%                     |                 5 |              0.1174  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5911 | <5%                     |                 5 |              0.11822 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5998 | >20%                    |                 2 |              0.2999  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6038 | 15-20%                  |                 5 |              0.12076 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6044 | >20%                    |                 5 |              0.12088 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.6069 | <5%                     |                10 |              0.06069 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6097 | <5%                     |                10 |              0.06097 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6109 | >20%                    |                 5 |              0.12218 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6117 | 5-10%                   |                 5 |              0.12234 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6158 | <5%                     |                 2 |              0.3079  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6185 | 10-15%                  |                 2 |              0.30925 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6222 | >20%                    |                 5 |              0.12444 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.6235 | <5%                     |                 5 |              0.1247  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6406 | 5-10%                   |                 2 |              0.3203  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6649 | <5%                     |                 2 |              0.33245 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6664 | 5-10%                   |                10 |              0.06664 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6972 | <5%                     |                10 |              0.06972 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6996 | 15-20%                  |                10 |              0.06996 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7109 | >20%                    |                 2 |              0.35545 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7227 | >20%                    |                10 |              0.07227 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7373 | <5%                     |                10 |              0.07373 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7654 | >20%                    |                 5 |              0.15308 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7753 | <5%                     |                 5 |              0.15506 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7815 | 10-15%                  |                10 |              0.07815 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7825 | >20%                    |                10 |              0.07825 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8009 | >20%                    |                 5 |              0.16018 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8022 | 5-10%                   |                10 |              0.08022 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8064 | <5%                     |                10 |              0.08064 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8092 | <5%                     |                10 |              0.08092 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8094 | >20%                    |                10 |              0.08094 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8112 | <5%                     |                 5 |              0.16224 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8206 | 10-15%                  |                10 |              0.08206 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8227 | >20%                    |                10 |              0.08227 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.828  | 10-15%                  |                10 |              0.0828  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8544 | <5%                     |                10 |              0.08544 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8792 | >20%                    |                10 |              0.08792 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8954 | <5%                     |                 5 |              0.17908 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9123 | 15-20%                  |                 5 |              0.18246 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9299 | <5%                     |                10 |              0.09299 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9326 | >20%                    |                10 |              0.09326 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9446 | >20%                    |                10 |              0.09446 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9732 | <5%                     |                10 |              0.09732 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9745 | >20%                    |                 5 |              0.1949  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9972 | >20%                    |                10 |              0.09972 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0173 | 10-15%                  |                10 |              0.10173 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0251 | 10-15%                  |                10 |              0.10251 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0268 | >20%                    |                10 |              0.10268 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0663 | 10-15%                  |                10 |              0.10663 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1434 | >20%                    |                10 |              0.11434 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1605 | >20%                    |                10 |              0.11605 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2267 | >20%                    |                10 |              0.12267 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2307 | 5-10%                   |                10 |              0.12307 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2552 | <5%                     |                10 |              0.12552 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4351 | >20%                    |                10 |              0.14351 |