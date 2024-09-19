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

Data correct as of 2024-09-19 01:27:29.371886, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0927 | <5%                     |                 2 |              0.04635 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1864 | 5-10%                   |                 2 |              0.0932  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2074 | 15-20%                  |                 2 |              0.1037  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2375 | 15-20%                  |                 2 |              0.11875 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2388 | <5%                     |                 2 |              0.1194  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2421 | <5%                     |                 2 |              0.12105 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2501 | 5-10%                   |                 2 |              0.12505 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2535 | 15-20%                  |                 5 |              0.0507  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2602 | <5%                     |                 2 |              0.1301  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2692 | >20%                    |                10 |              0.02692 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2746 | <5%                     |                 2 |              0.1373  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2865 | 10-15%                  |                 2 |              0.14325 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2954 | <5%                     |                 2 |              0.1477  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3062 | <5%                     |                 2 |              0.1531  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3078 | <5%                     |                 5 |              0.06156 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3197 | 15-20%                  |                 5 |              0.06394 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3217 | 5-10%                   |                 2 |              0.16085 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3231 | <5%                     |                 2 |              0.16155 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3242 | <5%                     |                 2 |              0.1621  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3266 | <5%                     |                 5 |              0.06532 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.328  | <5%                     |                10 |              0.0328  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3551 | 15-20%                  |                10 |              0.03551 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3591 | >20%                    |                 5 |              0.07182 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3609 | <5%                     |                 2 |              0.18045 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3619 | 5-10%                   |                 5 |              0.07238 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3636 | <5%                     |                 2 |              0.1818  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3652 | <5%                     |                 2 |              0.1826  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3691 | 10-15%                  |                 2 |              0.18455 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3751 | <5%                     |                 5 |              0.07502 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3759 | <5%                     |                 2 |              0.18795 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.3894 | <5%                     |                 5 |              0.07788 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3963 | >20%                    |                 2 |              0.19815 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4019 | >20%                    |                 2 |              0.20095 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4083 | 5-10%                   |                 2 |              0.20415 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4143 | 15-20%                  |                 5 |              0.08286 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4202 | 5-10%                   |                 2 |              0.2101  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4333 | >20%                    |                 2 |              0.21665 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4351 | <5%                     |                 2 |              0.21755 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4384 | 10-15%                  |                 5 |              0.08768 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4448 | <5%                     |                 5 |              0.08896 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4538 | 5-10%                   |                 5 |              0.09076 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.454  | >20%                    |                 2 |              0.227   |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4575 | 10-15%                  |                 2 |              0.22875 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4625 | <5%                     |                10 |              0.04625 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4661 | <5%                     |                 5 |              0.09322 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4689 | 5-10%                   |                 5 |              0.09378 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.4779 | >20%                    |                 5 |              0.09558 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4781 | 5-10%                   |                 5 |              0.09562 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4804 | 15-20%                  |                 5 |              0.09608 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4857 | <5%                     |                 5 |              0.09714 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.4889 | <5%                     |                10 |              0.04889 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5023 | >20%                    |                 2 |              0.25115 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5035 | >20%                    |                 5 |              0.1007  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5053 | 10-15%                  |                 5 |              0.10106 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.514  | 15-20%                  |                 2 |              0.257   |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.522  | >20%                    |                 5 |              0.1044  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5264 | <5%                     |                 5 |              0.10528 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5278 | <5%                     |                 5 |              0.10556 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5488 | <5%                     |                 5 |              0.10976 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5695 | >20%                    |                 5 |              0.1139  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5707 | 15-20%                  |                 2 |              0.28535 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5718 | 10-15%                  |                10 |              0.05718 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5725 | <5%                     |                 5 |              0.1145  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5818 | >20%                    |                 2 |              0.2909  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5965 | >20%                    |                 5 |              0.1193  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5978 | 5-10%                   |                10 |              0.05978 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6059 | >20%                    |                 5 |              0.12118 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6136 | 5-10%                   |                 5 |              0.12272 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6299 | 15-20%                  |                 2 |              0.31495 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.636  | >20%                    |                 5 |              0.1272  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.669  | >20%                    |                10 |              0.0669  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6798 | <5%                     |                10 |              0.06798 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6864 | <5%                     |                10 |              0.06864 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.7059 | >20%                    |                 2 |              0.35295 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7087 | >20%                    |                10 |              0.07087 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7254 | >20%                    |                10 |              0.07254 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7291 | <5%                     |                 5 |              0.14582 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7448 | 15-20%                  |                10 |              0.07448 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7732 | 10-15%                  |                10 |              0.07732 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7766 | >20%                    |                 5 |              0.15532 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7818 | >20%                    |                 5 |              0.15636 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7894 | <5%                     |                 2 |              0.3947  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7913 | 15-20%                  |                10 |              0.07913 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7968 | >20%                    |                10 |              0.07968 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8143 | <5%                     |                10 |              0.08143 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8228 | >20%                    |                10 |              0.08228 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8264 | >20%                    |                10 |              0.08264 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8272 | 10-15%                  |                10 |              0.08272 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8604 | 5-10%                   |                 5 |              0.17208 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8761 | <5%                     |                10 |              0.08761 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.892  | >20%                    |                10 |              0.0892  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.9246 | >20%                    |                 5 |              0.18492 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9331 | <5%                     |                10 |              0.09331 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9421 | >20%                    |                 5 |              0.18842 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9429 | 5-10%                   |                10 |              0.09429 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.9475 | 5-10%                   |                 2 |              0.47375 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9493 | >20%                    |                10 |              0.09493 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.958  | >20%                    |                10 |              0.0958  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9922 | 5-10%                   |                10 |              0.09922 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0223 | <5%                     |                 2 |              0.51115 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.035  | >20%                    |                10 |              0.1035  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0507 | 10-15%                  |                10 |              0.10507 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.096  | 5-10%                   |                 5 |              0.2192  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1221 | >20%                    |                10 |              0.11221 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.1348 | >20%                    |                10 |              0.11348 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1843 | >20%                    |                10 |              0.11843 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2153 | 5-10%                   |                10 |              0.12153 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.228  | >20%                    |                10 |              0.1228  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4415 | >20%                    |                10 |              0.14415 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7494 | <5%                     |                10 |              0.17494 |