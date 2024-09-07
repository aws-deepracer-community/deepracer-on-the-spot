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

Data correct as of 2024-09-07 01:23:40.014097, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | <5%                     |                 2 |              0.044   |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1889 | 15-20%                  |                 5 |              0.03778 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2109 | 10-15%                  |                 2 |              0.10545 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2298 | 15-20%                  |                 2 |              0.1149  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2387 | <5%                     |                 2 |              0.11935 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2516 | 10-15%                  |                 2 |              0.1258  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2567 | 5-10%                   |                 2 |              0.12835 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.263  | <5%                     |                 2 |              0.1315  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2778 | <5%                     |                 2 |              0.1389  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2804 | <5%                     |                 2 |              0.1402  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.2869 | <5%                     |                 5 |              0.05738 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2984 | 10-15%                  |                 2 |              0.1492  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.2987 | <5%                     |                 2 |              0.14935 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3155 | <5%                     |                 2 |              0.15775 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3187 | <5%                     |                 2 |              0.15935 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3212 | <5%                     |                 2 |              0.1606  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.343  | 15-20%                  |                 5 |              0.0686  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3511 | <5%                     |                 2 |              0.17555 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.353  | >20%                    |                10 |              0.0353  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3538 | <5%                     |                 2 |              0.1769  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3628 | <5%                     |                 2 |              0.1814  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3641 | <5%                     |                 2 |              0.18205 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | <5%                     |                10 |              0.03698 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3728 | <5%                     |                 5 |              0.07456 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3826 | <5%                     |                 5 |              0.07652 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3916 | 10-15%                  |                 2 |              0.1958  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3962 | >20%                    |                 5 |              0.07924 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4158 | >20%                    |                 2 |              0.2079  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | 10-15%                  |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4277 | 15-20%                  |                 5 |              0.08554 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4321 | >20%                    |                 2 |              0.21605 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4346 | 10-15%                  |                 2 |              0.2173  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4426 | 5-10%                   |                 2 |              0.2213  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4469 | >20%                    |                 5 |              0.08938 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4477 | 10-15%                  |                 5 |              0.08954 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4532 | 15-20%                  |                 5 |              0.09064 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4628 | <5%                     |                 2 |              0.2314  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4681 | <5%                     |                 5 |              0.09362 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4682 | >20%                    |                 2 |              0.2341  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.478  | 10-15%                  |                 5 |              0.0956  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4802 | 5-10%                   |                 5 |              0.09604 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4819 | >20%                    |                 5 |              0.09638 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4834 | <5%                     |                 5 |              0.09668 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4836 | <5%                     |                 5 |              0.09672 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4845 | >20%                    |                 2 |              0.24225 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4913 | <5%                     |                 5 |              0.09826 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4936 | <5%                     |                10 |              0.04936 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.5018 | <5%                     |                 2 |              0.2509  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5033 | >20%                    |                 2 |              0.25165 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5041 | <5%                     |                 5 |              0.10082 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5096 | 10-15%                  |                 2 |              0.2548  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5108 | 5-10%                   |                 5 |              0.10216 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5116 | 5-10%                   |                 5 |              0.10232 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5133 | >20%                    |                 5 |              0.10266 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.5499 | <5%                     |                 2 |              0.27495 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5635 | >20%                    |                 2 |              0.28175 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5671 | >20%                    |                 5 |              0.11342 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5749 | >20%                    |                 2 |              0.28745 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5801 | <5%                     |                 5 |              0.11602 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5962 | >20%                    |                 2 |              0.2981  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5986 | <5%                     |                 5 |              0.11972 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.5989 | <5%                     |                10 |              0.05989 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6001 | 15-20%                  |                 5 |              0.12002 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6027 | >20%                    |                 5 |              0.12054 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.603  | <5%                     |                 2 |              0.3015  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6116 | <5%                     |                10 |              0.06116 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6143 | >20%                    |                 5 |              0.12286 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6174 | 10-15%                  |                 5 |              0.12348 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6179 | 10-15%                  |                 2 |              0.30895 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.6264 | 5-10%                   |                 2 |              0.3132  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6278 | >20%                    |                 5 |              0.12556 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.6519 | <5%                     |                 5 |              0.13038 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6923 | <5%                     |                10 |              0.06923 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7044 | 10-15%                  |                10 |              0.07044 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7052 | >20%                    |                10 |              0.07052 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7194 | >20%                    |                 2 |              0.3597  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.733  | 15-20%                  |                10 |              0.0733  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.741  | <5%                     |                10 |              0.0741  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7438 | <5%                     |                 5 |              0.14876 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7572 | <5%                     |                 5 |              0.15144 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7682 | >20%                    |                10 |              0.07682 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7689 | >20%                    |                 5 |              0.15378 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7728 | 10-15%                  |                10 |              0.07728 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7892 | >20%                    |                 5 |              0.15784 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.804  | 5-10%                   |                10 |              0.0804  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.806  | 10-15%                  |                10 |              0.0806  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8061 | <5%                     |                10 |              0.08061 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8153 | >20%                    |                10 |              0.08153 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8173 | >20%                    |                10 |              0.08173 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.8373 | <5%                     |                10 |              0.08373 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.842  | 5-10%                   |                10 |              0.0842  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8475 | <5%                     |                 5 |              0.1695  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8559 | <5%                     |                10 |              0.08559 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9009 | >20%                    |                10 |              0.09009 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9085 | 15-20%                  |                 5 |              0.1817  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9185 | <5%                     |                10 |              0.09185 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9394 | >20%                    |                10 |              0.09394 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9414 | >20%                    |                10 |              0.09414 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9637 | <5%                     |                10 |              0.09637 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9659 | 10-15%                  |                10 |              0.09659 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9987 | >20%                    |                10 |              0.09987 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      1.0018 | >20%                    |                 5 |              0.20036 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0027 | 10-15%                  |                10 |              0.10027 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0281 | >20%                    |                10 |              0.10281 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0436 | 10-15%                  |                10 |              0.10436 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.0949 | 5-10%                   |                10 |              0.10949 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1568 | >20%                    |                10 |              0.11568 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1877 | <5%                     |                10 |              0.11877 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1986 | >20%                    |                10 |              0.11986 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.2191 | >20%                    |                10 |              0.12191 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4175 | >20%                    |                10 |              0.14175 |