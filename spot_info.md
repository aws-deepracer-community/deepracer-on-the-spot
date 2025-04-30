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

Data correct as of 2025-04-30 01:49:59.117792, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1114 | >20%                    |                 2 |              0.0557  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1333 | <5%                     |                 2 |              0.06665 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.158  | >20%                    |                 2 |              0.079   |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1676 | 15-20%                  |                 5 |              0.03352 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1965 | <5%                     |                 5 |              0.0393  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1981 | >20%                    |                 5 |              0.03962 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2029 | 15-20%                  |                 2 |              0.10145 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2216 | <5%                     |                 2 |              0.1108  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2253 | 15-20%                  |                 2 |              0.11265 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2355 | 5-10%                   |                 5 |              0.0471  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2422 | >20%                    |                 5 |              0.04844 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.243  | 5-10%                   |                 2 |              0.1215  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2586 | >20%                    |                 2 |              0.1293  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2626 | 5-10%                   |                 2 |              0.1313  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2698 | 15-20%                  |                10 |              0.02698 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2783 | >20%                    |                 2 |              0.13915 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | <5%                     |                 2 |              0.1392  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | 10-15%                  |                10 |              0.02887 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2888 | 10-15%                  |                10 |              0.02888 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2945 | <5%                     |                 2 |              0.14725 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2959 | >20%                    |                 2 |              0.14795 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2988 | 5-10%                   |                 2 |              0.1494  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3015 | >20%                    |                 2 |              0.15075 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3021 | <5%                     |                 2 |              0.15105 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3043 | 10-15%                  |                 2 |              0.15215 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3107 | <5%                     |                 5 |              0.06214 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3113 | 5-10%                   |                 2 |              0.15565 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3119 | >20%                    |                 2 |              0.15595 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3178 | >20%                    |                10 |              0.03178 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3183 | >20%                    |                10 |              0.03183 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3261 | 5-10%                   |                 2 |              0.16305 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3268 | >20%                    |                 2 |              0.1634  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3289 | 15-20%                  |                10 |              0.03289 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.329  | >20%                    |                 2 |              0.1645  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3374 | 10-15%                  |                10 |              0.03374 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3455 | >20%                    |                 2 |              0.17275 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3469 | >20%                    |                10 |              0.03469 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3512 | 5-10%                   |                 5 |              0.07024 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3542 | >20%                    |                 5 |              0.07084 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3558 | >20%                    |                 2 |              0.1779  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3587 | >20%                    |                 2 |              0.17935 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3588 | >20%                    |                 2 |              0.1794  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3603 | >20%                    |                 5 |              0.07206 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3625 | 15-20%                  |                10 |              0.03625 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3626 | >20%                    |                 2 |              0.1813  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3649 | 5-10%                   |                 5 |              0.07298 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3687 | <5%                     |                 5 |              0.07374 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3693 | >20%                    |                10 |              0.03693 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3736 | <5%                     |                 2 |              0.1868  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3846 | >20%                    |                 5 |              0.07692 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3851 | 10-15%                  |                 2 |              0.19255 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4006 | 5-10%                   |                 2 |              0.2003  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.406  | 15-20%                  |                 5 |              0.0812  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4138 | 5-10%                   |                 5 |              0.08276 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.415  | 10-15%                  |                 2 |              0.2075  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4181 | 15-20%                  |                 5 |              0.08362 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4181 | >20%                    |                 2 |              0.20905 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4183 | >20%                    |                 2 |              0.20915 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4209 | 10-15%                  |                 2 |              0.21045 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4224 | >20%                    |                10 |              0.04224 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4238 | >20%                    |                 5 |              0.08476 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4319 | >20%                    |                 2 |              0.21595 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4376 | <5%                     |                 5 |              0.08752 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4415 | 15-20%                  |                 2 |              0.22075 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4486 | >20%                    |                 5 |              0.08972 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4532 | >20%                    |                 5 |              0.09064 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4579 | >20%                    |                 5 |              0.09158 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4638 | >20%                    |                 2 |              0.2319  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4639 | >20%                    |                 2 |              0.23195 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4673 | 10-15%                  |                 5 |              0.09346 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4721 | <5%                     |                 5 |              0.09442 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | 5-10%                   |                 5 |              0.0946  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4776 | >20%                    |                 5 |              0.09552 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.478  | >20%                    |                 5 |              0.0956  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4831 | >20%                    |                10 |              0.04831 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4923 | >20%                    |                 5 |              0.09846 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4926 | 5-10%                   |                 5 |              0.09852 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4932 | 10-15%                  |                 5 |              0.09864 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4953 | >20%                    |                 5 |              0.09906 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4984 | >20%                    |                 2 |              0.2492  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.5072 | >20%                    |                 2 |              0.2536  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.508  | <5%                     |                 2 |              0.254   |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5167 | >20%                    |                 2 |              0.25835 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5183 | 15-20%                  |                 5 |              0.10366 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5242 | 10-15%                  |                10 |              0.05242 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5334 | >20%                    |                 5 |              0.10668 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5381 | 10-15%                  |                 2 |              0.26905 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5395 | >20%                    |                 2 |              0.26975 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5442 | 10-15%                  |                10 |              0.05442 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5449 | >20%                    |                 5 |              0.10898 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5558 | 10-15%                  |                 2 |              0.2779  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5588 | >20%                    |                 2 |              0.2794  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5633 | 5-10%                   |                 5 |              0.11266 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5713 | >20%                    |                 5 |              0.11426 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.5753 | >20%                    |                 5 |              0.11506 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.577  | >20%                    |                 2 |              0.2885  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5793 | 10-15%                  |                 5 |              0.11586 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5809 | >20%                    |                 5 |              0.11618 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5813 | >20%                    |                 5 |              0.11626 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.584  | >20%                    |                 2 |              0.292   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5848 | >20%                    |                 5 |              0.11696 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5896 | <5%                     |                 5 |              0.11792 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5899 | >20%                    |                 2 |              0.29495 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6262 | <5%                     |                10 |              0.06262 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6311 | 10-15%                  |                 5 |              0.12622 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6479 | 15-20%                  |                10 |              0.06479 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6494 | >20%                    |                 2 |              0.3247  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.659  | 15-20%                  |                 5 |              0.1318  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.6592 | 15-20%                  |                10 |              0.06592 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.662  | >20%                    |                 5 |              0.1324  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6732 | >20%                    |                 2 |              0.3366  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6805 | >20%                    |                 2 |              0.34025 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.696  | 5-10%                   |                10 |              0.0696  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.7047 | >20%                    |                 2 |              0.35235 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7092 | <5%                     |                 5 |              0.14184 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.7099 | 10-15%                  |                10 |              0.07099 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7104 | >20%                    |                10 |              0.07104 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7186 | >20%                    |                10 |              0.07186 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7225 | >20%                    |                 5 |              0.1445  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7297 | <5%                     |                 5 |              0.14594 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7302 | >20%                    |                 2 |              0.3651  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7318 | 5-10%                   |                10 |              0.07318 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7326 | >20%                    |                10 |              0.07326 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7385 | >20%                    |                 5 |              0.1477  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7405 | >20%                    |                 5 |              0.1481  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7524 | <5%                     |                 5 |              0.15048 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7641 | >20%                    |                 5 |              0.15282 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.77   | >20%                    |                 5 |              0.154   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7768 | 15-20%                  |                10 |              0.07768 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7781 | >20%                    |                10 |              0.07781 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7936 | 10-15%                  |                10 |              0.07936 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8027 | >20%                    |                10 |              0.08027 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8175 | 10-15%                  |                10 |              0.08175 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8208 | 15-20%                  |                10 |              0.08208 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8219 | <5%                     |                10 |              0.08219 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8372 | >20%                    |                 5 |              0.16744 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8425 | 10-15%                  |                10 |              0.08425 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8474 | >20%                    |                10 |              0.08474 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8569 | 15-20%                  |                10 |              0.08569 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8668 | 5-10%                   |                10 |              0.08668 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.881  | 10-15%                  |                10 |              0.0881  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.881  | >20%                    |                10 |              0.0881  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8839 | <5%                     |                10 |              0.08839 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8847 | <5%                     |                10 |              0.08847 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8884 | >20%                    |                10 |              0.08884 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8907 | 10-15%                  |                10 |              0.08907 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.8927 | >20%                    |                 5 |              0.17854 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9022 | 10-15%                  |                 5 |              0.18044 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.9096 | <5%                     |                10 |              0.09096 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9106 | 15-20%                  |                10 |              0.09106 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.919  | 15-20%                  |                10 |              0.0919  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9293 | >20%                    |                 2 |              0.46465 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9418 | >20%                    |                 2 |              0.4709  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9538 | 10-15%                  |                 5 |              0.19076 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9584 | >20%                    |                10 |              0.09584 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9681 | >20%                    |                 2 |              0.48405 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0044 | >20%                    |                10 |              0.10044 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0126 | >20%                    |                10 |              0.10126 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0316 | >20%                    |                10 |              0.10316 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0423 | <5%                     |                10 |              0.10423 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0632 | >20%                    |                 5 |              0.21264 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0853 | >20%                    |                10 |              0.10853 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0953 | <5%                     |                10 |              0.10953 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1024 | >20%                    |                 2 |              0.5512  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.1027 | <5%                     |                 5 |              0.22054 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.1309 | 15-20%                  |                 2 |              0.56545 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1585 | >20%                    |                10 |              0.11585 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1842 | >20%                    |                10 |              0.11842 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.228  | >20%                    |                10 |              0.1228  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2283 | 10-15%                  |                 2 |              0.61415 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2714 | <5%                     |                 5 |              0.25428 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3329 | 15-20%                  |                10 |              0.13329 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.333  | >20%                    |                 5 |              0.2666  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3818 | 15-20%                  |                10 |              0.13818 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3866 | >20%                    |                 2 |              0.6933  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3882 | 5-10%                   |                10 |              0.13882 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4258 | >20%                    |                 5 |              0.28516 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4604 | >20%                    |                 5 |              0.29208 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6617 | 15-20%                  |                10 |              0.16617 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.8114 | >20%                    |                10 |              0.18114 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.8132 | >20%                    |                10 |              0.18132 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9483 | <5%                     |                10 |              0.19483 |