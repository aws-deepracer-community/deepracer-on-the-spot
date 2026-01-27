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

Data correct as of 2026-01-27 02:11:40.560364, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1053 | 10-15%                  |                 2 |              0.05265 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1447 | >20%                    |                 2 |              0.07235 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1778 | >20%                    |                 2 |              0.0889  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1958 | 5-10%                   |                 2 |              0.0979  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.2084 | <5%                     |                 5 |              0.04168 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2114 | >20%                    |                 2 |              0.1057  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2119 | >20%                    |                 2 |              0.10595 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2181 | >20%                    |                 2 |              0.10905 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2309 | 10-15%                  |                 2 |              0.11545 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2463 | >20%                    |                 5 |              0.04926 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2548 | >20%                    |                 2 |              0.1274  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.2649 | >20%                    |                 2 |              0.13245 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2664 | 10-15%                  |                 2 |              0.1332  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2786 | >20%                    |                 2 |              0.1393  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2804 | 15-20%                  |                 2 |              0.1402  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.287  | 10-15%                  |                 2 |              0.1435  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2909 | >20%                    |                 2 |              0.14545 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2981 | >20%                    |                 2 |              0.14905 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3081 | >20%                    |                 5 |              0.06162 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | >20%                    |                 2 |              0.1542  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3124 | >20%                    |                 2 |              0.1562  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3197 | >20%                    |                 5 |              0.06394 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3233 | 5-10%                   |                10 |              0.03233 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3342 | >20%                    |                10 |              0.03342 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3386 | 5-10%                   |                10 |              0.03386 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3419 | <5%                     |                 2 |              0.17095 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3506 | >20%                    |                 2 |              0.1753  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3579 | 15-20%                  |                 2 |              0.17895 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3701 | >20%                    |                 5 |              0.07402 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3773 | >20%                    |                 2 |              0.18865 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.38   | 15-20%                  |                 2 |              0.19    |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3804 | >20%                    |                 5 |              0.07608 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3815 | 15-20%                  |                 2 |              0.19075 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.382  | >20%                    |                 5 |              0.0764  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3841 | >20%                    |                 5 |              0.07682 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3881 | 5-10%                   |                 2 |              0.19405 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3885 | 5-10%                   |                 2 |              0.19425 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3891 | 15-20%                  |                 2 |              0.19455 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3891 | >20%                    |                 2 |              0.19455 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.39   | >20%                    |                 2 |              0.195   |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3915 | 5-10%                   |                 5 |              0.0783  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3943 | <5%                     |                 5 |              0.07886 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3994 | 5-10%                   |                 2 |              0.1997  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4025 | >20%                    |                 2 |              0.20125 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4048 | >20%                    |                 5 |              0.08096 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4066 | >20%                    |                 5 |              0.08132 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4085 | >20%                    |                 5 |              0.0817  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4218 | 10-15%                  |                 5 |              0.08436 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4255 | 5-10%                   |                 2 |              0.21275 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4264 | >20%                    |                 5 |              0.08528 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4268 | >20%                    |                10 |              0.04268 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4313 | 15-20%                  |                 2 |              0.21565 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4316 | 15-20%                  |                 5 |              0.08632 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4356 | <5%                     |                 2 |              0.2178  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4408 | >20%                    |                 5 |              0.08816 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4418 | >20%                    |                 2 |              0.2209  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4443 | >20%                    |                10 |              0.04443 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4453 | <5%                     |                 2 |              0.22265 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4482 | >20%                    |                 5 |              0.08964 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4492 | 5-10%                   |                 5 |              0.08984 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4535 | 5-10%                   |                 2 |              0.22675 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4542 | 5-10%                   |                 5 |              0.09084 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4583 | >20%                    |                 2 |              0.22915 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4614 | >20%                    |                 2 |              0.2307  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4663 | >20%                    |                 2 |              0.23315 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4685 | 5-10%                   |                 2 |              0.23425 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4706 | 15-20%                  |                 5 |              0.09412 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4735 | 15-20%                  |                10 |              0.04735 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4745 | >20%                    |                 2 |              0.23725 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4807 | >20%                    |                 2 |              0.24035 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.481  | >20%                    |                 5 |              0.0962  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4857 | >20%                    |                10 |              0.04857 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4917 | >20%                    |                10 |              0.04917 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5005 | <5%                     |                10 |              0.05005 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.5068 | >20%                    |                 2 |              0.2534  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.508  | <5%                     |                 5 |              0.1016  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5111 | 15-20%                  |                 5 |              0.10222 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5111 | >20%                    |                 2 |              0.25555 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5135 | >20%                    |                 5 |              0.1027  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.522  | >20%                    |                 5 |              0.1044  |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5243 | <5%                     |                10 |              0.05243 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5273 | <5%                     |                 5 |              0.10546 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5319 | 5-10%                   |                 5 |              0.10638 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5358 | <5%                     |                 2 |              0.2679  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5369 | >20%                    |                 5 |              0.10738 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.5407 | >20%                    |                 5 |              0.10814 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5419 | >20%                    |                 5 |              0.10838 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.552  | <5%                     |                 5 |              0.1104  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.5529 | 15-20%                  |                10 |              0.05529 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5602 | >20%                    |                 2 |              0.2801  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5604 | >20%                    |                 2 |              0.2802  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5709 | >20%                    |                 5 |              0.11418 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.578  | >20%                    |                 2 |              0.289   |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5798 | >20%                    |                 5 |              0.11596 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.5905 | >20%                    |                10 |              0.05905 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.594  | <5%                     |                10 |              0.0594  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5946 | 10-15%                  |                10 |              0.05946 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6056 | 5-10%                   |                 5 |              0.12112 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6089 | >20%                    |                 5 |              0.12178 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6115 | <5%                     |                 2 |              0.30575 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6138 | 5-10%                   |                 2 |              0.3069  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.6156 | 15-20%                  |                 5 |              0.12312 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.619  | >20%                    |                10 |              0.0619  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6276 | 10-15%                  |                 5 |              0.12552 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6276 | >20%                    |                10 |              0.06276 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6309 | 15-20%                  |                10 |              0.06309 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6351 | <5%                     |                 5 |              0.12702 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6441 | >20%                    |                 5 |              0.12882 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6478 | >20%                    |                 5 |              0.12956 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6542 | >20%                    |                10 |              0.06542 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6663 | >20%                    |                 5 |              0.13326 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6846 | >20%                    |                10 |              0.06846 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6858 | 5-10%                   |                 5 |              0.13716 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.6955 | >20%                    |                10 |              0.06955 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.702  | <5%                     |                 5 |              0.1404  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7025 | >20%                    |                 5 |              0.1405  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.707  | >20%                    |                10 |              0.0707  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7125 | 15-20%                  |                10 |              0.07125 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.7162 | 15-20%                  |                 2 |              0.3581  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.7215 | <5%                     |                 5 |              0.1443  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.722  | >20%                    |                 5 |              0.1444  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7241 | >20%                    |                10 |              0.07241 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7435 | >20%                    |                 5 |              0.1487  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7444 | >20%                    |                10 |              0.07444 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7457 | >20%                    |                 2 |              0.37285 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.746  | 5-10%                   |                 2 |              0.373   |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7506 | 10-15%                  |                10 |              0.07506 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7562 | <5%                     |                10 |              0.07562 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.759  | 5-10%                   |                10 |              0.0759  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.777  | >20%                    |                 5 |              0.1554  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7855 | >20%                    |                 5 |              0.1571  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7875 | <5%                     |                10 |              0.07875 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8013 | 10-15%                  |                 2 |              0.40065 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8046 | <5%                     |                10 |              0.08046 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8047 | 5-10%                   |                10 |              0.08047 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8164 | >20%                    |                 2 |              0.4082  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8362 | >20%                    |                10 |              0.08362 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8436 | >20%                    |                 5 |              0.16872 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.8484 | >20%                    |                 2 |              0.4242  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.8575 | >20%                    |                10 |              0.08575 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8653 | 15-20%                  |                10 |              0.08653 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.8747 | >20%                    |                 2 |              0.43735 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8893 | >20%                    |                 2 |              0.44465 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9107 | >20%                    |                 5 |              0.18214 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9206 | >20%                    |                 5 |              0.18412 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.9239 | <5%                     |                10 |              0.09239 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9251 | >20%                    |                10 |              0.09251 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9265 | <5%                     |                10 |              0.09265 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.932  | >20%                    |                10 |              0.0932  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9379 | >20%                    |                10 |              0.09379 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9409 | >20%                    |                10 |              0.09409 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.9587 | >20%                    |                10 |              0.09587 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9591 | >20%                    |                10 |              0.09591 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9597 | >20%                    |                 2 |              0.47985 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.962  | >20%                    |                 5 |              0.1924  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9621 | 5-10%                   |                 5 |              0.19242 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9879 | >20%                    |                10 |              0.09879 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0469 | 5-10%                   |                10 |              0.10469 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0647 | <5%                     |                10 |              0.10647 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0813 | >20%                    |                 5 |              0.21626 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0895 | 15-20%                  |                10 |              0.10895 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1177 | >20%                    |                10 |              0.11177 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1329 | >20%                    |                10 |              0.11329 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.1791 | >20%                    |                10 |              0.11791 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.1943 | >20%                    |                10 |              0.11943 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.2035 | >20%                    |                 5 |              0.2407  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.257  | <5%                     |                10 |              0.1257  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2753 | >20%                    |                10 |              0.12753 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.3301 | 15-20%                  |                10 |              0.13301 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3425 | >20%                    |                 2 |              0.67125 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3429 | 10-15%                  |                10 |              0.13429 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.379  | 10-15%                  |                 5 |              0.2758  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4507 | >20%                    |                10 |              0.14507 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.455  | 10-15%                  |                 5 |              0.291   |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4749 | >20%                    |                 2 |              0.73745 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5022 | 15-20%                  |                10 |              0.15022 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9085 | 10-15%                  |                10 |              0.19085 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.4557 | <5%                     |                 5 |              0.49114 |