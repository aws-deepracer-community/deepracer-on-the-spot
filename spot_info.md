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

Data correct as of 2026-05-28 04:00:53.469430, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1338 | >20%                    |                 2 |              0.0669  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1364 | 15-20%                  |                 2 |              0.0682  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | >20%                    |                 2 |              0.0831  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.196  | 15-20%                  |                 2 |              0.098   |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2044 | >20%                    |                 2 |              0.1022  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2164 | 15-20%                  |                 5 |              0.04328 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2184 | 15-20%                  |                 5 |              0.04368 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2192 | >20%                    |                 2 |              0.1096  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2389 | >20%                    |                 2 |              0.11945 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2463 | 10-15%                  |                 2 |              0.12315 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2479 | >20%                    |                 2 |              0.12395 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2543 | >20%                    |                 2 |              0.12715 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2546 | >20%                    |                 2 |              0.1273  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2678 | >20%                    |                 2 |              0.1339  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2742 | >20%                    |                 2 |              0.1371  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2803 | >20%                    |                 5 |              0.05606 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2844 | >20%                    |                 5 |              0.05688 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.2901 | >20%                    |                 5 |              0.05802 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2933 | >20%                    |                 5 |              0.05866 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2938 | <5%                     |                10 |              0.02938 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2958 | 15-20%                  |                 5 |              0.05916 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.2966 | 5-10%                   |                10 |              0.02966 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2983 | >20%                    |                 5 |              0.05966 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2994 | >20%                    |                 2 |              0.1497  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3002 | >20%                    |                 2 |              0.1501  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3017 | 5-10%                   |                10 |              0.03017 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.3088 | >20%                    |                 2 |              0.1544  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3127 | 15-20%                  |                 2 |              0.15635 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.321  | >20%                    |                 5 |              0.0642  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3214 | >20%                    |                10 |              0.03214 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3269 | >20%                    |                 5 |              0.06538 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3336 | <5%                     |                 2 |              0.1668  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3435 | >20%                    |                10 |              0.03435 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3539 | 10-15%                  |                 2 |              0.17695 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3569 | >20%                    |                 5 |              0.07138 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3615 | >20%                    |                 5 |              0.0723  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.362  | >20%                    |                 2 |              0.181   |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3638 | 10-15%                  |                 2 |              0.1819  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3672 | 10-15%                  |                 2 |              0.1836  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3766 | >20%                    |                10 |              0.03766 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3775 | >20%                    |                 5 |              0.0755  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.3863 | >20%                    |                10 |              0.03863 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3958 | >20%                    |                 5 |              0.07916 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4059 | >20%                    |                 5 |              0.08118 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4088 | >20%                    |                 5 |              0.08176 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4115 | >20%                    |                 5 |              0.0823  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4116 | >20%                    |                 2 |              0.2058  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4175 | <5%                     |                 2 |              0.20875 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4256 | >20%                    |                 5 |              0.08512 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.4272 | >20%                    |                 2 |              0.2136  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4373 | >20%                    |                 5 |              0.08746 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4406 | 5-10%                   |                 2 |              0.2203  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4433 | >20%                    |                 2 |              0.22165 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4485 | >20%                    |                 2 |              0.22425 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4485 | >20%                    |                 2 |              0.22425 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4574 | 15-20%                  |                 2 |              0.2287  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4633 | <5%                     |                 2 |              0.23165 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4677 | 10-15%                  |                 2 |              0.23385 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4823 | >20%                    |                 2 |              0.24115 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4827 | >20%                    |                 5 |              0.09654 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.488  | >20%                    |                 5 |              0.0976  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4898 | 15-20%                  |                 2 |              0.2449  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5019 | 15-20%                  |                 2 |              0.25095 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.504  | 5-10%                   |                 5 |              0.1008  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5133 | 15-20%                  |                 5 |              0.10266 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.5164 | >20%                    |                10 |              0.05164 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5215 | >20%                    |                 5 |              0.1043  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5354 | >20%                    |                 2 |              0.2677  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.536  | >20%                    |                 5 |              0.1072  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5413 | <5%                     |                 5 |              0.10826 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5455 | 10-15%                  |                 5 |              0.1091  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5533 | >20%                    |                 2 |              0.27665 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5544 | >20%                    |                10 |              0.05544 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5582 | >20%                    |                 5 |              0.11164 |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5585 |                         |                 2 |              0.27925 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5596 | 5-10%                   |                10 |              0.05596 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5607 | >20%                    |                 2 |              0.28035 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5644 | >20%                    |                10 |              0.05644 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5765 | >20%                    |                 5 |              0.1153  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5832 | >20%                    |                 5 |              0.11664 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.5893 | >20%                    |                 2 |              0.29465 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5932 | >20%                    |                 2 |              0.2966  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6067 | >20%                    |                 5 |              0.12134 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6142 | >20%                    |                10 |              0.06142 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6268 | 5-10%                   |                10 |              0.06268 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.6375 | >20%                    |                 2 |              0.31875 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.6417 | 15-20%                  |                10 |              0.06417 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6442 | >20%                    |                 5 |              0.12884 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6492 | >20%                    |                 5 |              0.12984 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6496 | 5-10%                   |                 2 |              0.3248  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6729 | >20%                    |                 5 |              0.13458 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.687  | >20%                    |                 5 |              0.1374  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6974 | >20%                    |                10 |              0.06974 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7083 | >20%                    |                 5 |              0.14166 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.73   | >20%                    |                 2 |              0.365   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7389 | >20%                    |                 5 |              0.14778 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7416 | >20%                    |                 5 |              0.14832 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.7434 | 15-20%                  |                10 |              0.07434 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.7494 | >20%                    |                 2 |              0.3747  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7509 | >20%                    |                 5 |              0.15018 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7901 | >20%                    |                 5 |              0.15802 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7914 | 15-20%                  |                10 |              0.07914 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8015 | >20%                    |                10 |              0.08015 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8018 | 10-15%                  |                10 |              0.08018 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8142 | >20%                    |                 5 |              0.16284 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8236 | >20%                    |                10 |              0.08236 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8237 | >20%                    |                10 |              0.08237 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8275 | 10-15%                  |                 2 |              0.41375 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8332 | >20%                    |                 5 |              0.16664 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8339 | 15-20%                  |                10 |              0.08339 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8378 | >20%                    |                10 |              0.08378 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      0.8405 | >20%                    |                10 |              0.08405 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8475 | >20%                    |                10 |              0.08475 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8624 |                         |                 5 |              0.17248 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      0.8684 |                         |                 2 |              0.4342  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8806 | 15-20%                  |                10 |              0.08806 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9121 | >20%                    |                10 |              0.09121 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9126 | >20%                    |                10 |              0.09126 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.927  | >20%                    |                10 |              0.0927  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9301 | >20%                    |                10 |              0.09301 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9315 | >20%                    |                10 |              0.09315 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      0.9333 |                         |                10 |              0.09333 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9438 | >20%                    |                10 |              0.09438 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9514 |                         |                10 |              0.09514 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.9569 | >20%                    |                 5 |              0.19138 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9602 | >20%                    |                 5 |              0.19204 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9785 | >20%                    |                 5 |              0.1957  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9808 | >20%                    |                10 |              0.09808 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9821 | >20%                    |                 2 |              0.49105 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.988  | >20%                    |                 5 |              0.1976  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0015 | >20%                    |                10 |              0.10015 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0207 | >20%                    |                10 |              0.10207 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0415 | 5-10%                   |                 2 |              0.52075 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.046  | >20%                    |                10 |              0.1046  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.0611 |                         |                 5 |              0.21222 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0795 | >20%                    |                10 |              0.10795 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0822 | >20%                    |                10 |              0.10822 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0894 | >20%                    |                10 |              0.10894 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      1.1027 | 5-10%                   |                 2 |              0.55135 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1205 | 5-10%                   |                 5 |              0.2241  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1376 | 5-10%                   |                10 |              0.11376 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.1937 | 15-20%                  |                10 |              0.11937 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.2135 | 15-20%                  |                10 |              0.12135 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2497 | >20%                    |                10 |              0.12497 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2712 | 10-15%                  |                10 |              0.12712 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.282  | 15-20%                  |                 5 |              0.2564  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2844 | >20%                    |                10 |              0.12844 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3959 | >20%                    |                 5 |              0.27918 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.4164 | >20%                    |                 5 |              0.28328 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4199 | >20%                    |                10 |              0.14199 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5925 | 10-15%                  |                 2 |              0.79625 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6775 | 15-20%                  |                10 |              0.16775 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1359 | >20%                    |                10 |              0.21359 |