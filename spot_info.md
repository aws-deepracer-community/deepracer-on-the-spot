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

Data correct as of 2024-09-12 01:25:40.694495, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2131 | 15-20%                  |                 5 |              0.04262 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2144 | >20%                    |                 5 |              0.04288 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2263 | 10-15%                  |                 2 |              0.11315 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2263 | 15-20%                  |                 2 |              0.11315 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2422 | <5%                     |                 2 |              0.1211  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2494 | 10-15%                  |                 2 |              0.1247  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2534 | 5-10%                   |                 2 |              0.1267  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | >20%                    |                10 |              0.02547 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2611 | <5%                     |                 2 |              0.13055 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | <5%                     |                 2 |              0.1397  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2825 | <5%                     |                 2 |              0.14125 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3002 | 10-15%                  |                 2 |              0.1501  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.301  | <5%                     |                10 |              0.0301  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3024 | <5%                     |                 5 |              0.06048 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3143 | <5%                     |                 2 |              0.15715 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3144 | <5%                     |                 2 |              0.1572  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3274 | <5%                     |                 2 |              0.1637  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3547 | <5%                     |                 2 |              0.17735 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3559 | 15-20%                  |                 5 |              0.07118 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3575 | <5%                     |                 2 |              0.17875 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.366  | <5%                     |                 2 |              0.183   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3664 | <5%                     |                 2 |              0.1832  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3685 | 5-10%                   |                 5 |              0.0737  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3691 | <5%                     |                 5 |              0.07382 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3695 | <5%                     |                 2 |              0.18475 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.375  | >20%                    |                 5 |              0.075   |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3769 | <5%                     |                10 |              0.03769 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3895 | 10-15%                  |                 2 |              0.19475 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3902 | <5%                     |                 5 |              0.07804 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4035 | >20%                    |                10 |              0.04035 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4077 | >20%                    |                 2 |              0.20385 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4177 | >20%                    |                 2 |              0.20885 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4212 | 15-20%                  |                 5 |              0.08424 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.424  | 5-10%                   |                 2 |              0.212   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4316 | 5-10%                   |                 2 |              0.2158  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.446  | 15-20%                  |                 5 |              0.0892  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4546 | 10-15%                  |                 5 |              0.09092 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4548 | <5%                     |                 2 |              0.2274  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4662 | <5%                     |                 5 |              0.09324 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.472  | <5%                     |                 5 |              0.0944  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4723 | 10-15%                  |                 2 |              0.23615 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4724 | <5%                     |                 5 |              0.09448 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4731 | 5-10%                   |                 5 |              0.09462 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4735 | <5%                     |                 2 |              0.23675 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4747 | >20%                    |                 2 |              0.23735 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.481  | 10-15%                  |                 5 |              0.0962  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4817 | >20%                    |                 2 |              0.24085 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4856 | <5%                     |                10 |              0.04856 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4933 | 5-10%                   |                 5 |              0.09866 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4952 | >20%                    |                 2 |              0.2476  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5108 | <5%                     |                 5 |              0.10216 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5166 | <5%                     |                 5 |              0.10332 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5231 | >20%                    |                 2 |              0.26155 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5264 | >20%                    |                 5 |              0.10528 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5326 | 5-10%                   |                 5 |              0.10652 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5625 | >20%                    |                 5 |              0.1125  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.5627 | <5%                     |                 5 |              0.11254 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.572  | >20%                    |                 5 |              0.1144  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5837 | <5%                     |                 5 |              0.11674 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5847 | 15-20%                  |                 2 |              0.29235 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5906 | >20%                    |                 5 |              0.11812 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5928 | <5%                     |                 5 |              0.11856 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5946 | 5-10%                   |                 5 |              0.11892 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6008 | >20%                    |                 5 |              0.12016 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6012 | >20%                    |                 5 |              0.12024 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.6023 | >20%                    |                 2 |              0.30115 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6115 | 5-10%                   |                10 |              0.06115 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6159 | >20%                    |                 5 |              0.12318 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.626  | 10-15%                  |                 2 |              0.313   |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6589 | 5-10%                   |                 2 |              0.32945 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.6695 | <5%                     |                10 |              0.06695 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.678  | 5-10%                   |                10 |              0.0678  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6953 | <5%                     |                 2 |              0.34765 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7026 | <5%                     |                10 |              0.07026 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7059 | >20%                    |                 2 |              0.35295 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.713  | >20%                    |                10 |              0.0713  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7137 | <5%                     |                10 |              0.07137 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7147 | 15-20%                  |                10 |              0.07147 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7555 | >20%                    |                 5 |              0.1511  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7565 | <5%                     |                 2 |              0.37825 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.784  | 15-20%                  |                10 |              0.0784  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7846 | 5-10%                   |                10 |              0.07846 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7957 | >20%                    |                 5 |              0.15914 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7964 | <5%                     |                10 |              0.07964 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8046 | <5%                     |                 5 |              0.16092 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8073 | >20%                    |                10 |              0.08073 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8103 | >20%                    |                10 |              0.08103 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8185 | 10-15%                  |                10 |              0.08185 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8285 | <5%                     |                 5 |              0.1657  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.835  | 10-15%                  |                10 |              0.0835  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8625 | >20%                    |                10 |              0.08625 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8707 | >20%                    |                10 |              0.08707 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8903 | <5%                     |                10 |              0.08903 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9092 | >20%                    |                 5 |              0.18184 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9339 | >20%                    |                10 |              0.09339 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.937  | >20%                    |                10 |              0.0937  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9371 | <5%                     |                10 |              0.09371 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9494 | >20%                    |                10 |              0.09494 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9502 | >20%                    |                 5 |              0.19004 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.993  | <5%                     |                10 |              0.0993  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0201 | >20%                    |                10 |              0.10201 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.038  | 5-10%                   |                10 |              0.1038  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0411 | 5-10%                   |                 5 |              0.20822 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0709 | 10-15%                  |                10 |              0.10709 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.088  | 10-15%                  |                10 |              0.1088  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1467 | >20%                    |                10 |              0.11467 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1595 | >20%                    |                10 |              0.11595 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2146 | >20%                    |                10 |              0.12146 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3001 | <5%                     |                10 |              0.13001 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3954 | 5-10%                   |                10 |              0.13954 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4363 | >20%                    |                10 |              0.14363 |