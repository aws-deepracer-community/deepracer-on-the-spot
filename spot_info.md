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

Data correct as of 2025-05-01 01:58:37.268066, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1101 | >20%                    |                 2 |              0.05505 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1301 | <5%                     |                 2 |              0.06505 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1697 | >20%                    |                 2 |              0.08485 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1759 | 15-20%                  |                 5 |              0.03518 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1995 | >20%                    |                 5 |              0.0399  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2038 | 15-20%                  |                 2 |              0.1019  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2065 | <5%                     |                 5 |              0.0413  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2219 | <5%                     |                 2 |              0.11095 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2263 | 15-20%                  |                 2 |              0.11315 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2323 | 5-10%                   |                 5 |              0.04646 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2396 | >20%                    |                 5 |              0.04792 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2485 | 5-10%                   |                 2 |              0.12425 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2595 | 5-10%                   |                 2 |              0.12975 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2595 | >20%                    |                 2 |              0.12975 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2698 | 15-20%                  |                10 |              0.02698 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2758 | <5%                     |                 2 |              0.1379  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2815 | >20%                    |                 2 |              0.14075 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.283  | 10-15%                  |                10 |              0.0283  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | 10-15%                  |                10 |              0.02887 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2945 | <5%                     |                 2 |              0.14725 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2974 | >20%                    |                 2 |              0.1487  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3015 | >20%                    |                 2 |              0.15075 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.302  | 10-15%                  |                 2 |              0.151   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3035 | <5%                     |                 2 |              0.15175 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.304  | 5-10%                   |                 2 |              0.152   |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.313  | 5-10%                   |                 2 |              0.1565  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.315  | <5%                     |                 5 |              0.063   |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3153 | >20%                    |                 2 |              0.15765 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3184 | 5-10%                   |                 2 |              0.1592  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.323  | 15-20%                  |                10 |              0.0323  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3245 | >20%                    |                10 |              0.03245 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3251 | >20%                    |                 2 |              0.16255 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3267 | >20%                    |                 2 |              0.16335 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3346 | 5-10%                   |                 5 |              0.06692 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3458 | >20%                    |                 2 |              0.1729  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3464 | 10-15%                  |                10 |              0.03464 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3542 | >20%                    |                 5 |              0.07084 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3566 | 15-20%                  |                10 |              0.03566 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3569 | >20%                    |                 2 |              0.17845 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3591 | 5-10%                   |                 5 |              0.07182 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3596 | >20%                    |                 2 |              0.1798  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.363  | >20%                    |                 2 |              0.1815  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3633 | >20%                    |                 2 |              0.18165 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3639 | >20%                    |                 5 |              0.07278 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.365  | >20%                    |                10 |              0.0365  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3679 | >20%                    |                10 |              0.03679 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3687 | <5%                     |                 5 |              0.07374 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3714 | <5%                     |                 2 |              0.1857  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3819 | >20%                    |                 5 |              0.07638 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3884 | 10-15%                  |                 2 |              0.1942  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3978 | >20%                    |                10 |              0.03978 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4012 | 5-10%                   |                 2 |              0.2006  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.406  | 15-20%                  |                 5 |              0.0812  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4123 | 10-15%                  |                 2 |              0.20615 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4135 | 5-10%                   |                 5 |              0.0827  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4167 | >20%                    |                 2 |              0.20835 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4183 | >20%                    |                 2 |              0.20915 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4215 | 10-15%                  |                 2 |              0.21075 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4231 | >20%                    |                 5 |              0.08462 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4233 | 15-20%                  |                 5 |              0.08466 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4263 | >20%                    |                 2 |              0.21315 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.439  | <5%                     |                 5 |              0.0878  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4456 | >20%                    |                 5 |              0.08912 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4463 | 15-20%                  |                 2 |              0.22315 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4507 | >20%                    |                 5 |              0.09014 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4524 | >20%                    |                10 |              0.04524 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4525 | >20%                    |                 5 |              0.0905  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.464  | >20%                    |                 2 |              0.232   |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4701 | 10-15%                  |                 5 |              0.09402 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4729 | >20%                    |                 2 |              0.23645 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4761 | >20%                    |                 5 |              0.09522 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4769 | >20%                    |                 5 |              0.09538 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4773 | 5-10%                   |                 5 |              0.09546 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4786 | <5%                     |                 5 |              0.09572 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4901 | >20%                    |                 5 |              0.09802 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4938 | 5-10%                   |                 5 |              0.09876 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4944 | >20%                    |                 2 |              0.2472  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4964 | 10-15%                  |                 5 |              0.09928 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.497  | >20%                    |                 5 |              0.0994  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4985 | 10-15%                  |                10 |              0.04985 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5007 | <5%                     |                 2 |              0.25035 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5116 | >20%                    |                 2 |              0.2558  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5117 | 15-20%                  |                 5 |              0.10234 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5157 | >20%                    |                 2 |              0.25785 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5226 | >20%                    |                 5 |              0.10452 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5375 | 10-15%                  |                 2 |              0.26875 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5376 | >20%                    |                 2 |              0.2688  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5407 | >20%                    |                 2 |              0.27035 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5416 | >20%                    |                 5 |              0.10832 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5442 | 10-15%                  |                10 |              0.05442 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.555  | >20%                    |                 5 |              0.111   |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5552 | 10-15%                  |                 2 |              0.2776  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5653 | >20%                    |                 2 |              0.28265 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5688 | 5-10%                   |                 5 |              0.11376 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5793 | >20%                    |                 5 |              0.11586 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5802 | >20%                    |                 5 |              0.11604 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5807 | 10-15%                  |                 5 |              0.11614 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5825 | >20%                    |                 2 |              0.29125 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5825 | >20%                    |                 5 |              0.1165  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5866 | <5%                     |                 5 |              0.11732 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5923 | >20%                    |                 2 |              0.29615 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5989 | >20%                    |                 5 |              0.11978 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6043 | <5%                     |                10 |              0.06043 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6376 | 10-15%                  |                 5 |              0.12752 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6422 | >20%                    |                 2 |              0.3211  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6518 | >20%                    |                 5 |              0.13036 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6539 | 15-20%                  |                 5 |              0.13078 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6554 | 15-20%                  |                10 |              0.06554 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6732 | >20%                    |                 2 |              0.3366  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6834 | >20%                    |                 2 |              0.3417  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6871 | 15-20%                  |                10 |              0.06871 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6915 | 5-10%                   |                10 |              0.06915 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7003 | >20%                    |                10 |              0.07003 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.706  | <5%                     |                 5 |              0.1412  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7081 | >20%                    |                 2 |              0.35405 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7238 | 10-15%                  |                10 |              0.07238 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7241 | >20%                    |                10 |              0.07241 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.726  | >20%                    |                 5 |              0.1452  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7265 | 5-10%                   |                10 |              0.07265 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7314 | <5%                     |                 5 |              0.14628 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7363 | >20%                    |                 2 |              0.36815 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7402 | >20%                    |                 5 |              0.14804 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7428 | >20%                    |                10 |              0.07428 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7477 | >20%                    |                 5 |              0.14954 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7598 | <5%                     |                 5 |              0.15196 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7641 | >20%                    |                 5 |              0.15282 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.77   | >20%                    |                 5 |              0.154   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7764 | 15-20%                  |                10 |              0.07764 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7832 | >20%                    |                10 |              0.07832 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7887 | >20%                    |                10 |              0.07887 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8101 | <5%                     |                10 |              0.08101 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8103 | 10-15%                  |                10 |              0.08103 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8195 | 15-20%                  |                10 |              0.08195 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.825  | <5%                     |                10 |              0.0825  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8289 | 10-15%                  |                10 |              0.08289 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8302 | >20%                    |                 5 |              0.16604 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8388 | >20%                    |                10 |              0.08388 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8426 | 15-20%                  |                10 |              0.08426 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8476 | 10-15%                  |                10 |              0.08476 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8507 | >20%                    |                 5 |              0.17014 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8661 | 5-10%                   |                10 |              0.08661 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8717 | 10-15%                  |                 5 |              0.17434 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8751 | 10-15%                  |                10 |              0.08751 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.881  | >20%                    |                10 |              0.0881  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8843 | <5%                     |                10 |              0.08843 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8865 | >20%                    |                10 |              0.08865 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.901  | 10-15%                  |                10 |              0.0901  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9117 | 15-20%                  |                10 |              0.09117 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9122 | <5%                     |                10 |              0.09122 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9198 | >20%                    |                 2 |              0.4599  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9216 | 15-20%                  |                10 |              0.09216 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.949  | >20%                    |                 2 |              0.4745  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.954  | >20%                    |                10 |              0.0954  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9735 | >20%                    |                 2 |              0.48675 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9902 | >20%                    |                10 |              0.09902 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9977 | 10-15%                  |                 5 |              0.19954 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0276 | >20%                    |                10 |              0.10276 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0393 | >20%                    |                10 |              0.10393 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0423 | <5%                     |                10 |              0.10423 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.053  | >20%                    |                 5 |              0.2106  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0804 | >20%                    |                 2 |              0.5402  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0934 | <5%                     |                 5 |              0.21868 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0964 | >20%                    |                10 |              0.10964 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1155 | <5%                     |                10 |              0.11155 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1298 | 15-20%                  |                 2 |              0.5649  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1764 | >20%                    |                10 |              0.11764 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1884 | >20%                    |                10 |              0.11884 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2094 | 10-15%                  |                 2 |              0.6047  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2257 | >20%                    |                10 |              0.12257 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.27   | <5%                     |                 5 |              0.254   |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.334  | 15-20%                  |                10 |              0.1334  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.3692 | >20%                    |                 5 |              0.27384 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3915 | 15-20%                  |                10 |              0.13915 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3919 | >20%                    |                 2 |              0.69595 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4658 | >20%                    |                 5 |              0.29316 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4669 | 5-10%                   |                10 |              0.14669 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4732 | >20%                    |                 5 |              0.29464 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6354 | 15-20%                  |                10 |              0.16354 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7925 | >20%                    |                10 |              0.17925 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7952 | >20%                    |                10 |              0.17952 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9483 | <5%                     |                10 |              0.19483 |