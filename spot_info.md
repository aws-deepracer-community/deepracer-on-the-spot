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

Data correct as of 2025-04-12 01:43:54.327662, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1196 | 10-15%                  |                 2 |              0.0598  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1225 | 15-20%                  |                 2 |              0.06125 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1277 | 5-10%                   |                 5 |              0.02554 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1681 | >20%                    |                 2 |              0.08405 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1749 | 10-15%                  |                 5 |              0.03498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1999 | <5%                     |                 2 |              0.09995 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.203  | >20%                    |                 2 |              0.1015  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2034 | 15-20%                  |                 5 |              0.04068 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2154 | 5-10%                   |                 5 |              0.04308 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2264 | 15-20%                  |                 2 |              0.1132  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 15-20%                  |                10 |              0.02308 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2437 | >20%                    |                 2 |              0.12185 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2481 | 15-20%                  |                 2 |              0.12405 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2597 | 15-20%                  |                10 |              0.02597 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2693 | 15-20%                  |                 2 |              0.13465 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2711 | 10-15%                  |                10 |              0.02711 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2735 | <5%                     |                 2 |              0.13675 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2746 | 10-15%                  |                 2 |              0.1373  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2768 | 5-10%                   |                 2 |              0.1384  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2814 | >20%                    |                 2 |              0.1407  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2815 | 5-10%                   |                 2 |              0.14075 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2849 | <5%                     |                 2 |              0.14245 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2897 | >20%                    |                 2 |              0.14485 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2987 | 10-15%                  |                 2 |              0.14935 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2999 | <5%                     |                 2 |              0.14995 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3009 | 10-15%                  |                 5 |              0.06018 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3044 | 10-15%                  |                 5 |              0.06088 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3045 | 10-15%                  |                10 |              0.03045 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3086 | 10-15%                  |                 2 |              0.1543  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.312  | 5-10%                   |                 5 |              0.0624  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3196 | 15-20%                  |                 2 |              0.1598  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3254 | <5%                     |                10 |              0.03254 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3273 | 10-15%                  |                10 |              0.03273 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3346 | 15-20%                  |                10 |              0.03346 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3378 | >20%                    |                 2 |              0.1689  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3417 | 10-15%                  |                 2 |              0.17085 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3451 | >20%                    |                 5 |              0.06902 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3521 | >20%                    |                 5 |              0.07042 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.353  | >20%                    |                 2 |              0.1765  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3533 | >20%                    |                 2 |              0.17665 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3609 | >20%                    |                10 |              0.03609 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3767 | >20%                    |                10 |              0.03767 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.379  | >20%                    |                 2 |              0.1895  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3802 | 10-15%                  |                 5 |              0.07604 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3816 | >20%                    |                 2 |              0.1908  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3839 | <5%                     |                 2 |              0.19195 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3865 | >20%                    |                 5 |              0.0773  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3871 | <5%                     |                 2 |              0.19355 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3956 | >20%                    |                 2 |              0.1978  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4035 | 15-20%                  |                 2 |              0.20175 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4039 | >20%                    |                10 |              0.04039 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4056 | >20%                    |                 2 |              0.2028  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4072 | <5%                     |                 2 |              0.2036  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4154 | >20%                    |                 5 |              0.08308 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4173 | 15-20%                  |                 2 |              0.20865 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4175 | 10-15%                  |                10 |              0.04175 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4193 | <5%                     |                 2 |              0.20965 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4277 | 10-15%                  |                 5 |              0.08554 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4339 | 10-15%                  |                 5 |              0.08678 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4402 | >20%                    |                 5 |              0.08804 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4404 | <5%                     |                 2 |              0.2202  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4406 | >20%                    |                 2 |              0.2203  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4407 | >20%                    |                 5 |              0.08814 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4449 | 5-10%                   |                 5 |              0.08898 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4457 | >20%                    |                 2 |              0.22285 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4527 | >20%                    |                 5 |              0.09054 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4533 | >20%                    |                 2 |              0.22665 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4592 | 10-15%                  |                 2 |              0.2296  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4621 | 5-10%                   |                 2 |              0.23105 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4646 | >20%                    |                 5 |              0.09292 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4651 | >20%                    |                 2 |              0.23255 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.4679 | >20%                    |                 5 |              0.09358 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.468  | >20%                    |                 5 |              0.0936  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4724 | <5%                     |                 5 |              0.09448 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4769 | 5-10%                   |                10 |              0.04769 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4812 | >20%                    |                 5 |              0.09624 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4825 | 5-10%                   |                 5 |              0.0965  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4901 | >20%                    |                 5 |              0.09802 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.494  | >20%                    |                 2 |              0.247   |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5009 | <5%                     |                 5 |              0.10018 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5053 | <5%                     |                10 |              0.05053 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5076 | 5-10%                   |                 5 |              0.10152 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5089 | 10-15%                  |                 5 |              0.10178 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5099 | >20%                    |                 5 |              0.10198 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5172 | 15-20%                  |                 5 |              0.10344 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5189 | >20%                    |                10 |              0.05189 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.524  | >20%                    |                 2 |              0.262   |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5275 | >20%                    |                 2 |              0.26375 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.532  | 15-20%                  |                 2 |              0.266   |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5451 | >20%                    |                 5 |              0.10902 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5463 | 5-10%                   |                 5 |              0.10926 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5474 | >20%                    |                 2 |              0.2737  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5498 | 15-20%                  |                 2 |              0.2749  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.572  | 15-20%                  |                 5 |              0.1144  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.575  | >20%                    |                 5 |              0.115   |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5774 | >20%                    |                 2 |              0.2887  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5819 | 5-10%                   |                 2 |              0.29095 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.5967 | >20%                    |                 2 |              0.29835 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5981 | 5-10%                   |                 5 |              0.11962 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5989 | >20%                    |                10 |              0.05989 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6029 | <5%                     |                 5 |              0.12058 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6037 | >20%                    |                 2 |              0.30185 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6045 | >20%                    |                 5 |              0.1209  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6131 | 10-15%                  |                 5 |              0.12262 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6134 | >20%                    |                 5 |              0.12268 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6143 | 15-20%                  |                 5 |              0.12286 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6242 | >20%                    |                 5 |              0.12484 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.6263 | <5%                     |                 5 |              0.12526 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6345 | 10-15%                  |                 5 |              0.1269  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.6395 | 10-15%                  |                10 |              0.06395 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6455 | >20%                    |                10 |              0.06455 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6638 | >20%                    |                 5 |              0.13276 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6647 | >20%                    |                10 |              0.06647 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6651 | <5%                     |                 5 |              0.13302 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6663 | >20%                    |                 5 |              0.13326 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6751 | >20%                    |                 5 |              0.13502 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6752 | 10-15%                  |                 2 |              0.3376  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6801 | >20%                    |                 2 |              0.34005 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6821 | 5-10%                   |                 5 |              0.13642 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6831 | >20%                    |                10 |              0.06831 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.6922 | <5%                     |                10 |              0.06922 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6943 | 10-15%                  |                 5 |              0.13886 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6948 | >20%                    |                 2 |              0.3474  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6996 | >20%                    |                10 |              0.06996 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7059 | >20%                    |                10 |              0.07059 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7124 | >20%                    |                 5 |              0.14248 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7289 | 10-15%                  |                10 |              0.07289 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7453 | <5%                     |                10 |              0.07453 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7506 | >20%                    |                 2 |              0.3753  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7551 | <5%                     |                10 |              0.07551 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.758  | 15-20%                  |                 5 |              0.1516  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7609 | >20%                    |                10 |              0.07609 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7623 | <5%                     |                 5 |              0.15246 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7688 | <5%                     |                10 |              0.07688 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7731 | >20%                    |                 5 |              0.15462 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7743 | 10-15%                  |                10 |              0.07743 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.782  | 5-10%                   |                10 |              0.0782  |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7908 | >20%                    |                10 |              0.07908 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.7918 | >20%                    |                 5 |              0.15836 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7927 | <5%                     |                10 |              0.07927 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8023 | <5%                     |                10 |              0.08023 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8074 | 5-10%                   |                10 |              0.08074 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8147 | >20%                    |                 2 |              0.40735 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8172 | >20%                    |                 2 |              0.4086  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8226 | 10-15%                  |                10 |              0.08226 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8274 | 15-20%                  |                10 |              0.08274 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8344 | 15-20%                  |                 5 |              0.16688 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.836  | 10-15%                  |                10 |              0.0836  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.857  | >20%                    |                10 |              0.0857  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8599 | 15-20%                  |                10 |              0.08599 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8655 | <5%                     |                10 |              0.08655 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8704 | >20%                    |                10 |              0.08704 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8766 | <5%                     |                10 |              0.08766 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.878  | >20%                    |                10 |              0.0878  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8797 | >20%                    |                10 |              0.08797 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      0.8868 | <5%                     |                10 |              0.08868 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9019 | 15-20%                  |                 5 |              0.18038 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9039 | >20%                    |                10 |              0.09039 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.911  | <5%                     |                 2 |              0.4555  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9223 | 15-20%                  |                10 |              0.09223 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9512 | 10-15%                  |                10 |              0.09512 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9816 | >20%                    |                 5 |              0.19632 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9966 | 5-10%                   |                10 |              0.09966 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0258 | >20%                    |                 5 |              0.20516 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0312 | >20%                    |                10 |              0.10312 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1008 | <5%                     |                10 |              0.11008 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1117 | 10-15%                  |                 2 |              0.55585 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.121  | <5%                     |                10 |              0.1121  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.169  | 15-20%                  |                10 |              0.1169  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1698 | 15-20%                  |                10 |              0.11698 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1925 | >20%                    |                10 |              0.11925 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2407 | <5%                     |                 5 |              0.24814 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2418 | >20%                    |                 5 |              0.24836 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2573 | >20%                    |                 5 |              0.25146 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3066 | >20%                    |                10 |              0.13066 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3121 | 15-20%                  |                10 |              0.13121 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.3336 | 5-10%                   |                 2 |              0.6668  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4521 | >20%                    |                 2 |              0.72605 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6162 | >20%                    |                10 |              0.16162 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6696 | >20%                    |                10 |              0.16696 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8474 | <5%                     |                10 |              0.18474 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8828 | 15-20%                  |                10 |              0.18828 |