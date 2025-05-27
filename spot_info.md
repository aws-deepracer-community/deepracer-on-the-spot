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

Data correct as of 2025-05-27 01:52:10.539805, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | <5%                     |                 2 |              0.0639  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1589 | >20%                    |                 5 |              0.03178 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1883 | >20%                    |                 2 |              0.09415 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.189  | >20%                    |                 2 |              0.0945  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.195  | 15-20%                  |                 5 |              0.039   |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1959 | >20%                    |                 2 |              0.09795 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2204 | 5-10%                   |                 5 |              0.04408 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2222 | >20%                    |                 2 |              0.1111  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2341 | >20%                    |                 2 |              0.11705 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2395 | 5-10%                   |                 2 |              0.11975 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2419 | 10-15%                  |                10 |              0.02419 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | <5%                     |                 2 |              0.12625 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2552 | >20%                    |                 2 |              0.1276  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2595 | >20%                    |                10 |              0.02595 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2595 | 10-15%                  |                 2 |              0.12975 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2619 | 15-20%                  |                 2 |              0.13095 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2645 | >20%                    |                 2 |              0.13225 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2655 | 15-20%                  |                 2 |              0.13275 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2703 | 10-15%                  |                 2 |              0.13515 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2763 | >20%                    |                 2 |              0.13815 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2771 | >20%                    |                 5 |              0.05542 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2805 | 15-20%                  |                 5 |              0.0561  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2897 | <5%                     |                 2 |              0.14485 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.294  | <5%                     |                10 |              0.0294  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.295  | 15-20%                  |                 2 |              0.1475  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2993 | >20%                    |                 2 |              0.14965 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3057 | 15-20%                  |                 2 |              0.15285 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3062 | >20%                    |                10 |              0.03062 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3193 | 15-20%                  |                 2 |              0.15965 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3263 | 15-20%                  |                 2 |              0.16315 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3288 | >20%                    |                10 |              0.03288 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3307 | >20%                    |                 5 |              0.06614 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3313 | >20%                    |                 2 |              0.16565 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | >20%                    |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3434 | >20%                    |                 2 |              0.1717  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3442 | >20%                    |                 5 |              0.06884 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3495 | >20%                    |                 5 |              0.0699  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.353  | >20%                    |                10 |              0.0353  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3585 | >20%                    |                 2 |              0.17925 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3589 | 10-15%                  |                 5 |              0.07178 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3603 | 15-20%                  |                 2 |              0.18015 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.369  | 15-20%                  |                 2 |              0.1845  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3719 | >20%                    |                 5 |              0.07438 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.373  | 5-10%                   |                 2 |              0.1865  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3737 | 5-10%                   |                 2 |              0.18685 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3741 | >20%                    |                 2 |              0.18705 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3753 | >20%                    |                 5 |              0.07506 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3813 | >20%                    |                 2 |              0.19065 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3867 | <5%                     |                 2 |              0.19335 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3956 | >20%                    |                 2 |              0.1978  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4056 | 15-20%                  |                 2 |              0.2028  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4083 | <5%                     |                 5 |              0.08166 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4109 | 10-15%                  |                 5 |              0.08218 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4153 | >20%                    |                 2 |              0.20765 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4184 | 10-15%                  |                 2 |              0.2092  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4221 | >20%                    |                 5 |              0.08442 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.425  | >20%                    |                 2 |              0.2125  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4275 | <5%                     |                 2 |              0.21375 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4279 | 15-20%                  |                10 |              0.04279 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4303 | 15-20%                  |                 5 |              0.08606 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4314 | >20%                    |                10 |              0.04314 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4404 | 5-10%                   |                 5 |              0.08808 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.444  | 15-20%                  |                 5 |              0.0888  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4532 | >20%                    |                 5 |              0.09064 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4533 | >20%                    |                 2 |              0.22665 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4537 | >20%                    |                 2 |              0.22685 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4563 | 15-20%                  |                 5 |              0.09126 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4605 | 15-20%                  |                 5 |              0.0921  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4614 | 10-15%                  |                 5 |              0.09228 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4622 | >20%                    |                 2 |              0.2311  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4687 | >20%                    |                 2 |              0.23435 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4695 | >20%                    |                 5 |              0.0939  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4783 | >20%                    |                 2 |              0.23915 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.48   | >20%                    |                 5 |              0.096   |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4909 | >20%                    |                 5 |              0.09818 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4933 | >20%                    |                 5 |              0.09866 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4944 | <5%                     |                 5 |              0.09888 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4951 | >20%                    |                 2 |              0.24755 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4971 | <5%                     |                 5 |              0.09942 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4974 | >20%                    |                 5 |              0.09948 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4981 | 15-20%                  |                10 |              0.04981 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4984 | 15-20%                  |                 2 |              0.2492  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5015 | 10-15%                  |                 5 |              0.1003  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5025 | >20%                    |                 5 |              0.1005  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5087 | 5-10%                   |                 5 |              0.10174 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5093 | <5%                     |                 5 |              0.10186 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5106 | 15-20%                  |                 5 |              0.10212 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5159 | >20%                    |                 2 |              0.25795 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.5165 | 15-20%                  |                10 |              0.05165 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5289 | >20%                    |                10 |              0.05289 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5291 | >20%                    |                 2 |              0.26455 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5357 | >20%                    |                10 |              0.05357 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5569 | 10-15%                  |                10 |              0.05569 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5707 | 10-15%                  |                 2 |              0.28535 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5719 | >20%                    |                 5 |              0.11438 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5722 | >20%                    |                 5 |              0.11444 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5736 | >20%                    |                 5 |              0.11472 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5742 | 5-10%                   |                 5 |              0.11484 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5758 | >20%                    |                 2 |              0.2879  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5948 | >20%                    |                 2 |              0.2974  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5961 | >20%                    |                10 |              0.05961 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5967 | 5-10%                   |                 2 |              0.29835 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6    | >20%                    |                 5 |              0.12    |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6053 | 10-15%                  |                 5 |              0.12106 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6068 | >20%                    |                 5 |              0.12136 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6092 | >20%                    |                 5 |              0.12184 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.614  | 5-10%                   |                10 |              0.0614  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6283 | 5-10%                   |                 2 |              0.31415 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.632  | >20%                    |                 2 |              0.316   |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6351 | 10-15%                  |                 2 |              0.31755 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6471 | >20%                    |                 5 |              0.12942 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6503 | 10-15%                  |                10 |              0.06503 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6522 | <5%                     |                10 |              0.06522 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6615 | >20%                    |                 2 |              0.33075 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6636 | >20%                    |                 5 |              0.13272 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6704 | <5%                     |                 5 |              0.13408 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.6773 | 15-20%                  |                 5 |              0.13546 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6844 | <5%                     |                10 |              0.06844 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6923 | >20%                    |                 2 |              0.34615 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6943 | 10-15%                  |                 5 |              0.13886 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7013 | >20%                    |                10 |              0.07013 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7137 | 10-15%                  |                10 |              0.07137 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7175 | <5%                     |                10 |              0.07175 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7405 | >20%                    |                10 |              0.07405 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7492 | >20%                    |                10 |              0.07492 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7508 | >20%                    |                10 |              0.07508 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.754  | >20%                    |                 5 |              0.1508  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7543 | >20%                    |                10 |              0.07543 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.756  | <5%                     |                 5 |              0.1512  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7571 | >20%                    |                10 |              0.07571 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7603 | 10-15%                  |                 5 |              0.15206 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7734 | >20%                    |                10 |              0.07734 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7761 | 10-15%                  |                10 |              0.07761 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7767 | >20%                    |                 5 |              0.15534 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.783  | >20%                    |                 5 |              0.1566  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8069 | 15-20%                  |                10 |              0.08069 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8094 | 10-15%                  |                 5 |              0.16188 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8272 | >20%                    |                10 |              0.08272 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8381 | 5-10%                   |                10 |              0.08381 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8393 | >20%                    |                10 |              0.08393 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8414 | 15-20%                  |                10 |              0.08414 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8577 | <5%                     |                10 |              0.08577 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8645 | >20%                    |                10 |              0.08645 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.901  | >20%                    |                10 |              0.0901  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9108 | 10-15%                  |                 5 |              0.18216 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9215 | >20%                    |                10 |              0.09215 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9216 | >20%                    |                 2 |              0.4608  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9238 | 5-10%                   |                 2 |              0.4619  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9265 | >20%                    |                10 |              0.09265 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9389 | >20%                    |                10 |              0.09389 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.946  | >20%                    |                 5 |              0.1892  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9478 | >20%                    |                10 |              0.09478 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9791 | >20%                    |                 2 |              0.48955 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9797 | >20%                    |                10 |              0.09797 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9937 | <5%                     |                10 |              0.09937 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9979 | >20%                    |                 2 |              0.49895 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0071 | >20%                    |                 5 |              0.20142 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0164 | 10-15%                  |                 5 |              0.20328 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0431 | >20%                    |                10 |              0.10431 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.05   | 15-20%                  |                10 |              0.105   |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.0655 | 5-10%                   |                10 |              0.10655 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0658 | 15-20%                  |                10 |              0.10658 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0733 | >20%                    |                 5 |              0.21466 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0773 | <5%                     |                10 |              0.10773 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1178 | <5%                     |                 2 |              0.5589  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1728 | 15-20%                  |                10 |              0.11728 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.2261 | 10-15%                  |                10 |              0.12261 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.2345 | 5-10%                   |                10 |              0.12345 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2585 | 15-20%                  |                10 |              0.12585 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2677 | >20%                    |                10 |              0.12677 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2949 | >20%                    |                10 |              0.12949 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3168 | >20%                    |                10 |              0.13168 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3898 | 10-15%                  |                10 |              0.13898 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.3952 | <5%                     |                 5 |              0.27904 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4161 | >20%                    |                 5 |              0.28322 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4858 | >20%                    |                 2 |              0.7429  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5567 | >20%                    |                10 |              0.15567 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.0262 | <5%                     |                10 |              0.20262 |