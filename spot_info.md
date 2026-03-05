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

Data correct as of 2026-03-05 02:31:41.442586, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1546 | >20%                    |                 2 |              0.0773  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1748 | >20%                    |                 2 |              0.0874  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1802 | >20%                    |                 5 |              0.03604 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2185 | >20%                    |                 2 |              0.10925 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2195 | <5%                     |                 2 |              0.10975 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2349 | >20%                    |                 2 |              0.11745 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2364 | 10-15%                  |                 2 |              0.1182  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2464 | >20%                    |                 2 |              0.1232  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2551 | >20%                    |                 2 |              0.12755 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2557 | >20%                    |                 2 |              0.12785 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2595 | 15-20%                  |                 2 |              0.12975 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2813 | >20%                    |                 5 |              0.05626 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2848 | >20%                    |                 5 |              0.05696 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2966 | >20%                    |                 2 |              0.1483  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3009 | >20%                    |                 5 |              0.06018 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3041 | 10-15%                  |                 2 |              0.15205 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3049 | >20%                    |                 2 |              0.15245 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3065 | 5-10%                   |                 2 |              0.15325 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3087 | >20%                    |                 2 |              0.15435 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3093 | <5%                     |                 5 |              0.06186 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3099 | >20%                    |                 2 |              0.15495 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3154 | >20%                    |                 2 |              0.1577  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3172 | >20%                    |                 2 |              0.1586  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3184 | >20%                    |                 5 |              0.06368 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3389 | 15-20%                  |                 2 |              0.16945 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.34   | 5-10%                   |                10 |              0.034   |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3451 | >20%                    |                 5 |              0.06902 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3451 | >20%                    |                10 |              0.03451 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3471 | >20%                    |                 5 |              0.06942 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3503 | 15-20%                  |                 2 |              0.17515 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3549 | 5-10%                   |                 2 |              0.17745 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3553 | >20%                    |                 5 |              0.07106 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3604 | 10-15%                  |                 2 |              0.1802  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3626 | >20%                    |                 5 |              0.07252 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3641 | <5%                     |                 5 |              0.07282 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.367  | <5%                     |                 5 |              0.0734  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3734 | >20%                    |                 5 |              0.07468 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3753 | 5-10%                   |                 2 |              0.18765 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3773 | <5%                     |                 2 |              0.18865 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.384  | >20%                    |                10 |              0.0384  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3848 | 5-10%                   |                 2 |              0.1924  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3891 | >20%                    |                 2 |              0.19455 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3985 | >20%                    |                 2 |              0.19925 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4036 | 5-10%                   |                 5 |              0.08072 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4045 | <5%                     |                 2 |              0.20225 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4098 | 15-20%                  |                 5 |              0.08196 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4136 | >20%                    |                 2 |              0.2068  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4137 | 5-10%                   |                 2 |              0.20685 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4146 | >20%                    |                 2 |              0.2073  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4154 | 5-10%                   |                 5 |              0.08308 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4165 | 15-20%                  |                 2 |              0.20825 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4198 | >20%                    |                 2 |              0.2099  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4207 | 10-15%                  |                 5 |              0.08414 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.4225 | <5%                     |                 5 |              0.0845  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4274 | >20%                    |                 2 |              0.2137  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4317 | >20%                    |                 5 |              0.08634 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.432  | 15-20%                  |                 5 |              0.0864  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4321 | >20%                    |                 2 |              0.21605 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4344 | >20%                    |                 5 |              0.08688 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4351 | >20%                    |                10 |              0.04351 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.44   | <5%                     |                10 |              0.044   |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4405 | 15-20%                  |                10 |              0.04405 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4424 | 15-20%                  |                 5 |              0.08848 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4424 | 5-10%                   |                 5 |              0.08848 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4442 | <5%                     |                 2 |              0.2221  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4448 | 15-20%                  |                 2 |              0.2224  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.454  | 15-20%                  |                 2 |              0.227   |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4575 | 5-10%                   |                 2 |              0.22875 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4665 | 5-10%                   |                 2 |              0.23325 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4673 | >20%                    |                 5 |              0.09346 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4855 | >20%                    |                10 |              0.04855 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4918 | >20%                    |                 5 |              0.09836 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4942 | >20%                    |                 2 |              0.2471  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.4969 | <5%                     |                 5 |              0.09938 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4972 | >20%                    |                 5 |              0.09944 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4978 | 15-20%                  |                10 |              0.04978 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5087 | >20%                    |                 5 |              0.10174 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5126 | >20%                    |                 2 |              0.2563  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.52   | >20%                    |                 5 |              0.104   |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5207 | >20%                    |                 2 |              0.26035 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5209 | 15-20%                  |                 5 |              0.10418 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5261 | >20%                    |                 5 |              0.10522 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5346 | >20%                    |                 2 |              0.2673  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5366 | >20%                    |                10 |              0.05366 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5376 | >20%                    |                 5 |              0.10752 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.5377 | >20%                    |                10 |              0.05377 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5486 |                         |                 2 |              0.2743  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5516 | >20%                    |                 5 |              0.11032 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5521 | <5%                     |                 5 |              0.11042 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5579 | >20%                    |                 2 |              0.27895 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.567  | 15-20%                  |                10 |              0.0567  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5773 | >20%                    |                10 |              0.05773 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5799 | 5-10%                   |                 2 |              0.28995 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.589  | 15-20%                  |                10 |              0.0589  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5933 | >20%                    |                 5 |              0.11866 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5969 | >20%                    |                10 |              0.05969 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6011 | >20%                    |                 5 |              0.12022 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6017 | >20%                    |                10 |              0.06017 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6047 | >20%                    |                 2 |              0.30235 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6068 | >20%                    |                10 |              0.06068 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6086 | >20%                    |                 5 |              0.12172 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6213 | 5-10%                   |                 2 |              0.31065 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6215 | 15-20%                  |                 2 |              0.31075 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6256 | <5%                     |                10 |              0.06256 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6257 | >20%                    |                 2 |              0.31285 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6278 | <5%                     |                10 |              0.06278 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6289 | 5-10%                   |                 5 |              0.12578 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6302 | 5-10%                   |                 5 |              0.12604 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6306 | >20%                    |                 5 |              0.12612 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6396 | >20%                    |                 5 |              0.12792 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6446 | 10-15%                  |                 5 |              0.12892 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6478 | 5-10%                   |                 5 |              0.12956 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6583 | >20%                    |                10 |              0.06583 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6683 | >20%                    |                 2 |              0.33415 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6739 | >20%                    |                 5 |              0.13478 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6791 | <5%                     |                10 |              0.06791 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6946 |                         |                 5 |              0.13892 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6959 | >20%                    |                 5 |              0.13918 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6995 | <5%                     |                10 |              0.06995 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7076 | >20%                    |                10 |              0.07076 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.729  | >20%                    |                10 |              0.0729  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7329 | >20%                    |                 5 |              0.14658 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7402 | >20%                    |                10 |              0.07402 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7492 | 10-15%                  |                10 |              0.07492 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7505 | >20%                    |                10 |              0.07505 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.763  | <5%                     |                10 |              0.0763  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7667 | >20%                    |                10 |              0.07667 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7725 | >20%                    |                 2 |              0.38625 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.773  | >20%                    |                 5 |              0.1546  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7961 | <5%                     |                10 |              0.07961 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8113 | >20%                    |                 5 |              0.16226 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8125 | >20%                    |                 5 |              0.1625  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8129 | <5%                     |                 5 |              0.16258 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8176 | >20%                    |                10 |              0.08176 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8292 | >20%                    |                 5 |              0.16584 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.831  | 15-20%                  |                10 |              0.0831  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8359 | 10-15%                  |                10 |              0.08359 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8397 | 15-20%                  |                10 |              0.08397 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.846  | <5%                     |                 5 |              0.1692  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8504 | >20%                    |                 5 |              0.17008 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8579 | 10-15%                  |                 2 |              0.42895 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8625 | <5%                     |                10 |              0.08625 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8705 | >20%                    |                10 |              0.08705 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8811 | >20%                    |                10 |              0.08811 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8816 | >20%                    |                10 |              0.08816 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8917 | >20%                    |                 2 |              0.44585 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.9012 | >20%                    |                 5 |              0.18024 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9062 | >20%                    |                10 |              0.09062 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9342 | >20%                    |                 5 |              0.18684 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9382 | 5-10%                   |                10 |              0.09382 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.957  | <5%                     |                10 |              0.0957  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9571 | >20%                    |                 2 |              0.47855 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9685 | >20%                    |                10 |              0.09685 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9722 | >20%                    |                 2 |              0.4861  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.9794 | 10-15%                  |                10 |              0.09794 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.982  | >20%                    |                10 |              0.0982  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9823 | 5-10%                   |                 5 |              0.19646 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9832 | 5-10%                   |                10 |              0.09832 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9879 | >20%                    |                 5 |              0.19758 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9908 | >20%                    |                10 |              0.09908 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0154 | 5-10%                   |                10 |              0.10154 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.042  | >20%                    |                10 |              0.1042  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.054  | >20%                    |                10 |              0.1054  |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.057  |                         |                10 |              0.1057  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1199 | 15-20%                  |                10 |              0.11199 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1547 | >20%                    |                10 |              0.11547 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2404 | 10-15%                  |                 5 |              0.24808 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.255  | >20%                    |                10 |              0.1255  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2908 | <5%                     |                10 |              0.12908 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3722 | >20%                    |                 2 |              0.6861  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4135 | 10-15%                  |                 5 |              0.2827  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.4186 | 15-20%                  |                10 |              0.14186 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4314 | >20%                    |                 2 |              0.7157  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4415 | >20%                    |                 5 |              0.2883  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5232 | >20%                    |                 2 |              0.7616  |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5732 | >20%                    |                10 |              0.15732 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7395 | >20%                    |                10 |              0.17395 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.1984 | <5%                     |                 5 |              0.43968 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2683 | 10-15%                  |                10 |              0.22683 |