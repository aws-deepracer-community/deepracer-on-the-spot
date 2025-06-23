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

Data correct as of 2025-06-23 02:03:49.367022, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1547 | >20%                    |                 2 |              0.07735 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1739 | >20%                    |                 5 |              0.03478 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1832 | 15-20%                  |                 2 |              0.0916  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2002 | 15-20%                  |                 5 |              0.04004 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.207  | >20%                    |                 2 |              0.1035  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.21   | >20%                    |                 5 |              0.042   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2119 | <5%                     |                 2 |              0.10595 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2189 | >20%                    |                 2 |              0.10945 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2268 | 15-20%                  |                 2 |              0.1134  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.2383 | >20%                    |                 5 |              0.04766 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.2434 | 10-15%                  |                10 |              0.02434 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2447 | >20%                    |                10 |              0.02447 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.247  | 5-10%                   |                 2 |              0.1235  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2496 | >20%                    |                 2 |              0.1248  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2592 | 15-20%                  |                 2 |              0.1296  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.262  | >20%                    |                 2 |              0.131   |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2628 | 15-20%                  |                 5 |              0.05256 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.271  | >20%                    |                 2 |              0.1355  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2737 | >20%                    |                 2 |              0.13685 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2806 | 5-10%                   |                10 |              0.02806 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2906 | 15-20%                  |                 2 |              0.1453  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2935 | >20%                    |                 2 |              0.14675 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2992 | <5%                     |                 2 |              0.1496  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3022 | 15-20%                  |                 5 |              0.06044 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3023 | >20%                    |                 2 |              0.15115 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3115 | >20%                    |                 2 |              0.15575 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3126 | >20%                    |                 2 |              0.1563  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3163 | >20%                    |                 5 |              0.06326 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3167 | >20%                    |                 2 |              0.15835 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.318  | >20%                    |                 5 |              0.0636  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3183 | >20%                    |                 2 |              0.15915 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3227 | <5%                     |                 5 |              0.06454 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.326  | >20%                    |                 2 |              0.163   |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3275 | >20%                    |                10 |              0.03275 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.336  | 10-15%                  |                 2 |              0.168   |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3379 | <5%                     |                 2 |              0.16895 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3512 | 5-10%                   |                 2 |              0.1756  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3513 | 10-15%                  |                 2 |              0.17565 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3544 | 10-15%                  |                 2 |              0.1772  |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3695 | 15-20%                  |                10 |              0.03695 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3817 | >20%                    |                 2 |              0.19085 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.382  | >20%                    |                 5 |              0.0764  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3883 | 10-15%                  |                 5 |              0.07766 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3929 | >20%                    |                 2 |              0.19645 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3962 | 10-15%                  |                 2 |              0.1981  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4093 | >20%                    |                 5 |              0.08186 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4118 | >20%                    |                 5 |              0.08236 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4125 | >20%                    |                 5 |              0.0825  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4152 | >20%                    |                 2 |              0.2076  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.419  | >20%                    |                 2 |              0.2095  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4212 | >20%                    |                 5 |              0.08424 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4237 | >20%                    |                 5 |              0.08474 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.426  | >20%                    |                 2 |              0.213   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4284 | 10-15%                  |                 5 |              0.08568 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4292 | 5-10%                   |                 2 |              0.2146  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4306 | <5%                     |                 2 |              0.2153  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4345 | 15-20%                  |                 5 |              0.0869  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4443 | >20%                    |                 2 |              0.22215 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4445 | >20%                    |                10 |              0.04445 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4568 | >20%                    |                 2 |              0.2284  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4572 | >20%                    |                 2 |              0.2286  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4587 | 15-20%                  |                 2 |              0.22935 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.46   | >20%                    |                 5 |              0.092   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4681 | >20%                    |                 2 |              0.23405 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4688 | >20%                    |                 2 |              0.2344  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4726 | >20%                    |                 5 |              0.09452 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4748 | >20%                    |                 5 |              0.09496 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4771 | <5%                     |                 5 |              0.09542 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4831 | >20%                    |                 5 |              0.09662 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.485  | <5%                     |                 5 |              0.097   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4876 | >20%                    |                 2 |              0.2438  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4894 | 10-15%                  |                 5 |              0.09788 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4924 | 5-10%                   |                 2 |              0.2462  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4975 | 15-20%                  |                 5 |              0.0995  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5016 | >20%                    |                 2 |              0.2508  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5057 | 15-20%                  |                 2 |              0.25285 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5079 | 10-15%                  |                 2 |              0.25395 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5116 | >20%                    |                 5 |              0.10232 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5249 | 5-10%                   |                 5 |              0.10498 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5278 | >20%                    |                10 |              0.05278 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5295 | >20%                    |                 2 |              0.26475 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5315 | >20%                    |                 2 |              0.26575 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5457 | <5%                     |                 5 |              0.10914 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5492 | 10-15%                  |                 5 |              0.10984 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.556  | 15-20%                  |                 2 |              0.278   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5574 | >20%                    |                 5 |              0.11148 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5577 | 10-15%                  |                10 |              0.05577 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5589 | 10-15%                  |                 5 |              0.11178 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5688 | <5%                     |                 5 |              0.11376 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.57   | >20%                    |                 5 |              0.114   |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5811 | <5%                     |                10 |              0.05811 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5834 | <5%                     |                 5 |              0.11668 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5867 | >20%                    |                 5 |              0.11734 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5931 | >20%                    |                 5 |              0.11862 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5931 | >20%                    |                10 |              0.05931 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5976 | >20%                    |                 2 |              0.2988  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5998 | >20%                    |                 5 |              0.11996 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6001 | <5%                     |                 2 |              0.30005 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6071 | <5%                     |                 5 |              0.12142 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6077 | >20%                    |                 5 |              0.12154 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6082 | >20%                    |                 5 |              0.12164 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6152 | >20%                    |                10 |              0.06152 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6157 | >20%                    |                 5 |              0.12314 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6264 | >20%                    |                10 |              0.06264 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6306 | >20%                    |                 5 |              0.12612 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6311 | >20%                    |                 2 |              0.31555 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6363 | 5-10%                   |                 2 |              0.31815 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6436 | >20%                    |                 5 |              0.12872 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.649  | >20%                    |                 5 |              0.1298  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6555 | >20%                    |                 2 |              0.32775 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6567 | >20%                    |                 5 |              0.13134 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6614 | >20%                    |                 5 |              0.13228 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6632 | 15-20%                  |                10 |              0.06632 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6707 | <5%                     |                 5 |              0.13414 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6719 | >20%                    |                10 |              0.06719 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6878 | >20%                    |                10 |              0.06878 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6998 | <5%                     |                10 |              0.06998 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.703  | >20%                    |                 2 |              0.3515  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7031 | >20%                    |                10 |              0.07031 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.704  | 10-15%                  |                 5 |              0.1408  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7067 | 10-15%                  |                 2 |              0.35335 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7105 | 10-15%                  |                 5 |              0.1421  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7134 | >20%                    |                10 |              0.07134 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7163 | 15-20%                  |                10 |              0.07163 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7231 | >20%                    |                 5 |              0.14462 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7252 | <5%                     |                 5 |              0.14504 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7265 | >20%                    |                10 |              0.07265 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7276 | >20%                    |                10 |              0.07276 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7294 | 15-20%                  |                10 |              0.07294 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7344 | 10-15%                  |                10 |              0.07344 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7678 | >20%                    |                10 |              0.07678 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7729 | >20%                    |                 5 |              0.15458 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7761 | 15-20%                  |                10 |              0.07761 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7852 | <5%                     |                10 |              0.07852 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7935 | >20%                    |                 5 |              0.1587  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7945 | >20%                    |                10 |              0.07945 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8058 | >20%                    |                10 |              0.08058 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8179 | 5-10%                   |                 5 |              0.16358 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8195 | >20%                    |                10 |              0.08195 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8218 | >20%                    |                10 |              0.08218 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8284 | <5%                     |                10 |              0.08284 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8361 | >20%                    |                10 |              0.08361 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.8602 | >20%                    |                10 |              0.08602 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8634 | 15-20%                  |                10 |              0.08634 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8755 | >20%                    |                10 |              0.08755 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8779 | <5%                     |                10 |              0.08779 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8885 | 15-20%                  |                10 |              0.08885 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8936 | >20%                    |                10 |              0.08936 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9038 | >20%                    |                10 |              0.09038 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9106 | >20%                    |                10 |              0.09106 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9554 | >20%                    |                10 |              0.09554 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9649 | >20%                    |                10 |              0.09649 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9759 | >20%                    |                 2 |              0.48795 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9763 | <5%                     |                10 |              0.09763 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9789 | >20%                    |                 5 |              0.19578 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9964 | >20%                    |                 2 |              0.4982  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.004  | >20%                    |                10 |              0.1004  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0075 | >20%                    |                10 |              0.10075 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0101 | >20%                    |                10 |              0.10101 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.021  | 15-20%                  |                10 |              0.1021  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0251 | >20%                    |                10 |              0.10251 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0367 | 10-15%                  |                10 |              0.10367 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.0823 | <5%                     |                 2 |              0.54115 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0836 | 15-20%                  |                10 |              0.10836 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0988 | >20%                    |                 2 |              0.5494  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.12   | >20%                    |                10 |              0.112   |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1211 | 15-20%                  |                10 |              0.11211 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2145 | 10-15%                  |                10 |              0.12145 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2165 | <5%                     |                 5 |              0.2433  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2566 | >20%                    |                10 |              0.12566 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2884 | >20%                    |                10 |              0.12884 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3143 | >20%                    |                 5 |              0.26286 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3849 | >20%                    |                 5 |              0.27698 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4475 | >20%                    |                 5 |              0.2895  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4511 | <5%                     |                 5 |              0.29022 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.5843 | <5%                     |                 2 |              0.79215 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5937 | 10-15%                  |                10 |              0.15937 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5945 | >20%                    |                 2 |              0.79725 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6444 | >20%                    |                10 |              0.16444 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.8178 | <5%                     |                10 |              0.18178 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0653 | <5%                     |                10 |              0.20653 |