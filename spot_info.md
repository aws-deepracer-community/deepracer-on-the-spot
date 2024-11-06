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

Data correct as of 2024-11-06 01:35:41.945197, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 10-15%                  |                 2 |              0.0831  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1888 | 15-20%                  |                 5 |              0.03776 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1937 | 10-15%                  |                 2 |              0.09685 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2101 | >20%                    |                 5 |              0.04202 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2157 | 10-15%                  |                 2 |              0.10785 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2169 | 10-15%                  |                 2 |              0.10845 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.218  | >20%                    |                 2 |              0.109   |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 10-15%                  |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 5-10%                   |                 5 |              0.04498 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2276 | >20%                    |                 2 |              0.1138  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2331 | <5%                     |                 2 |              0.11655 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.238  | >20%                    |                 2 |              0.119   |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2483 | 5-10%                   |                 2 |              0.12415 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2484 | <5%                     |                 2 |              0.1242  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2721 | <5%                     |                 2 |              0.13605 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2723 | <5%                     |                 5 |              0.05446 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2764 | 5-10%                   |                 2 |              0.1382  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2816 | 10-15%                  |                 2 |              0.1408  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2863 | <5%                     |                 2 |              0.14315 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2888 | >20%                    |                 2 |              0.1444  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.2942 | <5%                     |                 2 |              0.1471  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3052 | <5%                     |                 2 |              0.1526  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3081 | 15-20%                  |                 5 |              0.06162 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3081 | <5%                     |                 5 |              0.06162 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3096 | 10-15%                  |                 2 |              0.1548  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3123 | <5%                     |                 2 |              0.15615 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3342 | 5-10%                   |                 2 |              0.1671  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3394 | 10-15%                  |                 2 |              0.1697  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.3426 | <5%                     |                10 |              0.03426 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3428 | 5-10%                   |                 2 |              0.1714  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3442 | 5-10%                   |                 5 |              0.06884 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3555 | 15-20%                  |                 2 |              0.17775 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3585 | <5%                     |                 2 |              0.17925 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3611 | 5-10%                   |                 5 |              0.07222 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3729 | 5-10%                   |                 2 |              0.18645 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3838 | <5%                     |                 5 |              0.07676 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3841 | >20%                    |                 2 |              0.19205 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3851 | 5-10%                   |                 5 |              0.07702 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3861 | >20%                    |                 2 |              0.19305 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3868 | 5-10%                   |                 5 |              0.07736 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3924 | >20%                    |                 5 |              0.07848 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3943 | >20%                    |                 5 |              0.07886 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3984 | >20%                    |                 5 |              0.07968 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4003 | <5%                     |                10 |              0.04003 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4031 | 10-15%                  |                 5 |              0.08062 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4062 | 15-20%                  |                 5 |              0.08124 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4102 | <5%                     |                 5 |              0.08204 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4172 | <5%                     |                 5 |              0.08344 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4286 | 10-15%                  |                 2 |              0.2143  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.433  | 5-10%                   |                 2 |              0.2165  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.443  | 10-15%                  |                 2 |              0.2215  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4444 | >20%                    |                 2 |              0.2222  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4445 | 15-20%                  |                 5 |              0.0889  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.4472 | <5%                     |                 2 |              0.2236  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4511 | 5-10%                   |                 5 |              0.09022 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4534 | 5-10%                   |                 5 |              0.09068 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4589 | 15-20%                  |                 2 |              0.22945 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4597 | <5%                     |                10 |              0.04597 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4627 | 5-10%                   |                 5 |              0.09254 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4685 | <5%                     |                10 |              0.04685 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4732 | 5-10%                   |                 5 |              0.09464 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4781 | 15-20%                  |                 2 |              0.23905 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4812 | >20%                    |                 5 |              0.09624 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4812 | 15-20%                  |                 5 |              0.09624 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4826 | <5%                     |                 2 |              0.2413  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.4994 | >20%                    |                 5 |              0.09988 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5055 | <5%                     |                 5 |              0.1011  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5119 | <5%                     |                 2 |              0.25595 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.514  | 10-15%                  |                10 |              0.0514  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5211 | 5-10%                   |                 2 |              0.26055 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5272 | <5%                     |                 5 |              0.10544 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5314 | 5-10%                   |                 5 |              0.10628 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5316 | 5-10%                   |                 5 |              0.10632 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.538  | 10-15%                  |                 5 |              0.1076  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5559 | >20%                    |                 5 |              0.11118 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.562  | 5-10%                   |                 5 |              0.1124  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5631 | 10-15%                  |                 2 |              0.28155 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5638 | 15-20%                  |                 2 |              0.2819  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5644 | >20%                    |                 5 |              0.11288 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.569  | 15-20%                  |                 5 |              0.1138  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.572  | 10-15%                  |                10 |              0.0572  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.58   | 15-20%                  |                 5 |              0.116   |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5837 | 10-15%                  |                 2 |              0.29185 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5838 | <5%                     |                10 |              0.05838 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5843 | 10-15%                  |                 5 |              0.11686 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5848 | 10-15%                  |                10 |              0.05848 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5916 | >20%                    |                10 |              0.05916 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5969 | 5-10%                   |                10 |              0.05969 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6181 | >20%                    |                 5 |              0.12362 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6258 | >20%                    |                10 |              0.06258 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6335 | 10-15%                  |                10 |              0.06335 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.643  | <5%                     |                10 |              0.0643  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6497 | 5-10%                   |                 5 |              0.12994 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6652 | 10-15%                  |                 5 |              0.13304 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6669 | >20%                    |                 2 |              0.33345 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.672  | 5-10%                   |                10 |              0.0672  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6753 | <5%                     |                10 |              0.06753 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6868 | >20%                    |                10 |              0.06868 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7017 | 5-10%                   |                 5 |              0.14034 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7021 | 5-10%                   |                10 |              0.07021 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.7093 | <5%                     |                 2 |              0.35465 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7165 | >20%                    |                10 |              0.07165 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7193 | 10-15%                  |                10 |              0.07193 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7321 | <5%                     |                10 |              0.07321 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.749  | 15-20%                  |                 5 |              0.1498  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7655 | >20%                    |                10 |              0.07655 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7723 | <5%                     |                10 |              0.07723 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7778 | >20%                    |                10 |              0.07778 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7812 | 15-20%                  |                10 |              0.07812 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.795  | 5-10%                   |                 5 |              0.159   |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8093 | >20%                    |                10 |              0.08093 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.834  | 10-15%                  |                 2 |              0.417   |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8421 | 5-10%                   |                10 |              0.08421 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8458 | >20%                    |                10 |              0.08458 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8476 | 5-10%                   |                10 |              0.08476 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8599 | <5%                     |                 2 |              0.42995 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.865  | >20%                    |                10 |              0.0865  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8716 | 15-20%                  |                10 |              0.08716 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8725 | >20%                    |                 5 |              0.1745  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8965 | 5-10%                   |                 5 |              0.1793  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9036 | 5-10%                   |                10 |              0.09036 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9263 | <5%                     |                10 |              0.09263 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.975  | 10-15%                  |                 5 |              0.195   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9982 | 10-15%                  |                10 |              0.09982 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0052 | <5%                     |                10 |              0.10052 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0153 | 10-15%                  |                10 |              0.10153 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0575 | >20%                    |                10 |              0.10575 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0692 | <5%                     |                10 |              0.10692 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0761 | >20%                    |                10 |              0.10761 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.107  | >20%                    |                10 |              0.1107  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1252 | <5%                     |                10 |              0.11252 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1623 | 15-20%                  |                10 |              0.11623 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.4183 | >20%                    |                10 |              0.14183 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4612 | >20%                    |                10 |              0.14612 |