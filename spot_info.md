# Spot Prices and Interruption Frequency

## This page provides: -

Region - the region of the instance (note - some regions would require you to bake your own AMI using the image builder script)

vCPU - number of vCPUs

RAM (GB) - amount of memory 

GPU RAM (GB) - amount of GPU memory

SpotPrice - hourly price of the spot instance

InterruptionFrequency - the likelihood of your instance experiencing interruption based on the [last month of data](https://aws.amazon.com/ec2/spot/instance-advisor/)

NumberOfWorkers - the number of robomaker workers the instance can support

PricePerWorkerHour - SpotPrice divided by the number of workers the InstanceType can support

Data correct as of 2024-08-31 01:24:29.761865, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1419 | >20%                    |                 5 |              0.02838 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1861 | 15-20%                  |                 2 |              0.09305 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2054 | >20%                    |                 5 |              0.04108 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2335 | >20%                    |                 2 |              0.11675 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2375 | <5%                     |                 2 |              0.11875 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.251  | <5%                     |                 2 |              0.1255  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2512 | 10-15%                  |                 2 |              0.1256  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2518 | 10-15%                  |                 2 |              0.1259  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2548 | <5%                     |                 5 |              0.05096 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2577 | >20%                    |                10 |              0.02577 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2707 | <5%                     |                 2 |              0.13535 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2707 | <5%                     |                 2 |              0.13535 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2962 | <5%                     |                 2 |              0.1481  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | <5%                     |                 2 |              0.1542  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3149 | 10-15%                  |                 2 |              0.15745 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3174 | <5%                     |                 2 |              0.1587  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3236 | >20%                    |                 5 |              0.06472 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3263 | <5%                     |                 2 |              0.16315 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3397 | <5%                     |                 2 |              0.16985 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3424 | <5%                     |                 2 |              0.1712  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3556 | <5%                     |                 2 |              0.1778  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3749 | <5%                     |                 2 |              0.18745 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3766 | <5%                     |                 5 |              0.07532 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3866 | <5%                     |                 5 |              0.07732 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3906 | 10-15%                  |                 2 |              0.1953  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3931 | <5%                     |                 2 |              0.19655 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.3938 | <5%                     |                 2 |              0.1969  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4008 | 5-10%                   |                 2 |              0.2004  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.4046 | <5%                     |                 2 |              0.2023  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | 5-10%                   |                10 |              0.04161 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4163 | >20%                    |                 2 |              0.20815 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4272 | 15-20%                  |                 5 |              0.08544 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4355 | >20%                    |                 2 |              0.21775 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.438  | >20%                    |                 2 |              0.219   |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.445  | 10-15%                  |                 2 |              0.2225  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4507 | >20%                    |                 2 |              0.22535 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4517 | >20%                    |                10 |              0.04517 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4518 | 5-10%                   |                 5 |              0.09036 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4542 | <5%                     |                 5 |              0.09084 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4664 | >20%                    |                 5 |              0.09328 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4667 | >20%                    |                 2 |              0.23335 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4672 | <5%                     |                 5 |              0.09344 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4689 | 10-15%                  |                 2 |              0.23445 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4761 | >20%                    |                 5 |              0.09522 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4798 | 15-20%                  |                 5 |              0.09596 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4813 | 10-15%                  |                 5 |              0.09626 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4832 | 5-10%                   |                 5 |              0.09664 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4932 | 5-10%                   |                 5 |              0.09864 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4944 | <5%                     |                 5 |              0.09888 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4969 | <5%                     |                 5 |              0.09938 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4999 | >20%                    |                 2 |              0.24995 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5039 | >20%                    |                 5 |              0.10078 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.5225 | <5%                     |                 5 |              0.1045  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.523  | <5%                     |                 5 |              0.1046  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5237 | 10-15%                  |                 5 |              0.10474 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5572 | <5%                     |                 2 |              0.2786  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.5574 | <5%                     |                 5 |              0.11148 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5679 | >20%                    |                 2 |              0.28395 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.581  | <5%                     |                 5 |              0.1162  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5888 | <5%                     |                 5 |              0.11776 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5895 | >20%                    |                 2 |              0.29475 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5918 | 10-15%                  |                 5 |              0.11836 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5921 | 10-15%                  |                 2 |              0.29605 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5939 | >20%                    |                 2 |              0.29695 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6065 | >20%                    |                 5 |              0.1213  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6158 | >20%                    |                 5 |              0.12316 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6159 | >20%                    |                 5 |              0.12318 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6163 | <5%                     |                10 |              0.06163 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6166 | <5%                     |                10 |              0.06166 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6261 | <5%                     |                 5 |              0.12522 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6587 | 10-15%                  |                 5 |              0.13174 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6682 | >20%                    |                 5 |              0.13364 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6738 | >20%                    |                 5 |              0.13476 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6739 | <5%                     |                10 |              0.06739 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.7001 | <5%                     |                 5 |              0.14002 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.7079 | <5%                     |                10 |              0.07079 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7106 | >20%                    |                10 |              0.07106 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7341 | >20%                    |                 2 |              0.36705 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7394 | <5%                     |                10 |              0.07394 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.7615 | 5-10%                   |                10 |              0.07615 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7621 | >20%                    |                10 |              0.07621 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.765  | 10-15%                  |                10 |              0.0765  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7699 | 10-15%                  |                10 |              0.07699 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7707 | >20%                    |                 5 |              0.15414 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7886 | 5-10%                   |                10 |              0.07886 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7918 | >20%                    |                 5 |              0.15836 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7948 | 15-20%                  |                10 |              0.07948 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.814  | 10-15%                  |                10 |              0.0814  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8159 | <5%                     |                10 |              0.08159 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8179 | 10-15%                  |                10 |              0.08179 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8207 | >20%                    |                10 |              0.08207 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8305 | <5%                     |                10 |              0.08305 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8395 | <5%                     |                10 |              0.08395 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8429 | <5%                     |                10 |              0.08429 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8542 | >20%                    |                10 |              0.08542 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8935 | >20%                    |                 5 |              0.1787  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8947 | <5%                     |                10 |              0.08947 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.92   | >20%                    |                10 |              0.092   |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9266 | <5%                     |                10 |              0.09266 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9419 | >20%                    |                10 |              0.09419 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9625 | <5%                     |                10 |              0.09625 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9848 | >20%                    |                10 |              0.09848 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9936 | 5-10%                   |                10 |              0.09936 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0115 | >20%                    |                10 |              0.10115 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0273 | 5-10%                   |                10 |              0.10273 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      1.0326 | >20%                    |                 5 |              0.20652 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0589 | >20%                    |                10 |              0.10589 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1738 | >20%                    |                10 |              0.11738 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1838 | >20%                    |                10 |              0.11838 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2006 | >20%                    |                10 |              0.12006 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4596 | >20%                    |                10 |              0.14596 |