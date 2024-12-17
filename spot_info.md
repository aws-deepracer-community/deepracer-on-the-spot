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

Data correct as of 2024-12-17 01:45:48.978737, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1927 | 15-20%                  |                 2 |              0.09635 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2008 | >20%                    |                 2 |              0.1004  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2147 | 15-20%                  |                 2 |              0.10735 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2157 | 15-20%                  |                 2 |              0.10785 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2354 | 15-20%                  |                 2 |              0.1177  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2369 | 5-10%                   |                 2 |              0.11845 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2416 | >20%                    |                 5 |              0.04832 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2417 | >20%                    |                 2 |              0.12085 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2525 | <5%                     |                 2 |              0.12625 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2535 | 5-10%                   |                 5 |              0.0507  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2611 | 15-20%                  |                 5 |              0.05222 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2615 | 15-20%                  |                10 |              0.02615 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2693 | <5%                     |                 2 |              0.13465 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2772 | <5%                     |                 2 |              0.1386  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2822 | 5-10%                   |                 2 |              0.1411  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2874 | 5-10%                   |                 2 |              0.1437  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.2999 | 5-10%                   |                 2 |              0.14995 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3052 | <5%                     |                 2 |              0.1526  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3077 | >20%                    |                 2 |              0.15385 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3098 | <5%                     |                 2 |              0.1549  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3118 | 10-15%                  |                 2 |              0.1559  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.3198 | <5%                     |                 2 |              0.1599  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3264 | <5%                     |                 5 |              0.06528 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3373 | <5%                     |                 5 |              0.06746 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3389 | <5%                     |                 2 |              0.16945 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3413 | >20%                    |                 2 |              0.17065 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3515 | 10-15%                  |                 2 |              0.17575 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3521 | >20%                    |                 5 |              0.07042 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3538 | >20%                    |                 2 |              0.1769  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.354  | 10-15%                  |                 2 |              0.177   |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3565 | 10-15%                  |                 5 |              0.0713  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3565 | 10-15%                  |                10 |              0.03565 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3622 | <5%                     |                 5 |              0.07244 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3651 | 5-10%                   |                 2 |              0.18255 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3729 | >20%                    |                 5 |              0.07458 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.376  | <5%                     |                 5 |              0.0752  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3768 | 10-15%                  |                10 |              0.03768 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.3769 | >20%                    |                10 |              0.03769 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3796 | >20%                    |                 2 |              0.1898  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3799 | 15-20%                  |                 2 |              0.18995 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3877 | >20%                    |                 5 |              0.07754 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3892 | <5%                     |                 5 |              0.07784 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3973 | 5-10%                   |                 2 |              0.19865 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4059 | >20%                    |                 2 |              0.20295 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4114 | 5-10%                   |                 2 |              0.2057  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4155 | 5-10%                   |                 5 |              0.0831  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4211 | 5-10%                   |                 2 |              0.21055 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4254 | 15-20%                  |                 2 |              0.2127  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4314 | 5-10%                   |                 5 |              0.08628 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4419 | 5-10%                   |                 5 |              0.08838 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4432 | 5-10%                   |                 2 |              0.2216  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4443 | >20%                    |                 5 |              0.08886 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4459 | 15-20%                  |                10 |              0.04459 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4459 | 5-10%                   |                 5 |              0.08918 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4479 | <5%                     |                 2 |              0.22395 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4574 | <5%                     |                 5 |              0.09148 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4597 | >20%                    |                 5 |              0.09194 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4619 | 10-15%                  |                 2 |              0.23095 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4626 | 5-10%                   |                 2 |              0.2313  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4639 | <5%                     |                 2 |              0.23195 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4656 | 5-10%                   |                 5 |              0.09312 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4681 | >20%                    |                 2 |              0.23405 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4705 | <5%                     |                 5 |              0.0941  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4754 | 10-15%                  |                 2 |              0.2377  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4756 | 15-20%                  |                 2 |              0.2378  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4807 | 10-15%                  |                 2 |              0.24035 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4809 | 10-15%                  |                 5 |              0.09618 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.4833 | 10-15%                  |                 2 |              0.24165 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4835 | >20%                    |                 5 |              0.0967  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4887 | >20%                    |                 5 |              0.09774 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.492  | >20%                    |                10 |              0.0492  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4964 | <5%                     |                 5 |              0.09928 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5016 | >20%                    |                 5 |              0.10032 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5025 | <5%                     |                 5 |              0.1005  |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.5089 | >20%                    |                 5 |              0.10178 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5124 | >20%                    |                 5 |              0.10248 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5156 | <5%                     |                 5 |              0.10312 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5167 | >20%                    |                10 |              0.05167 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5343 | 5-10%                   |                 5 |              0.10686 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5392 | 5-10%                   |                10 |              0.05392 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.543  | 10-15%                  |                 5 |              0.1086  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5445 | >20%                    |                 5 |              0.1089  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5596 | 15-20%                  |                 5 |              0.11192 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5669 | >20%                    |                 2 |              0.28345 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5728 | >20%                    |                10 |              0.05728 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5805 | <5%                     |                 5 |              0.1161  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.5983 | 5-10%                   |                 5 |              0.11966 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.6051 | <5%                     |                10 |              0.06051 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.6079 | 10-15%                  |                10 |              0.06079 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6184 | >20%                    |                10 |              0.06184 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6491 | 5-10%                   |                10 |              0.06491 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6559 | 5-10%                   |                10 |              0.06559 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6575 | 5-10%                   |                10 |              0.06575 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.6577 | 5-10%                   |                 2 |              0.32885 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6577 | 15-20%                  |                 5 |              0.13154 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6621 | <5%                     |                 5 |              0.13242 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6665 | <5%                     |                10 |              0.06665 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6821 | <5%                     |                 5 |              0.13642 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6862 | 15-20%                  |                 5 |              0.13724 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6894 | >20%                    |                 2 |              0.3447  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6936 | >20%                    |                10 |              0.06936 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6965 | 10-15%                  |                10 |              0.06965 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7234 | >20%                    |                 5 |              0.14468 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7281 | <5%                     |                 2 |              0.36405 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7398 | >20%                    |                 5 |              0.14796 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7614 | >20%                    |                 5 |              0.15228 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7782 | 15-20%                  |                10 |              0.07782 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7789 | >20%                    |                10 |              0.07789 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.7997 | >20%                    |                10 |              0.07997 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.803  | 15-20%                  |                10 |              0.0803  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8074 | 5-10%                   |                10 |              0.08074 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8108 | <5%                     |                10 |              0.08108 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8164 | 5-10%                   |                10 |              0.08164 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8276 | 5-10%                   |                10 |              0.08276 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8277 | <5%                     |                 5 |              0.16554 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8277 | 10-15%                  |                10 |              0.08277 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8371 | 10-15%                  |                10 |              0.08371 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8394 | 10-15%                  |                10 |              0.08394 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8457 | 5-10%                   |                 2 |              0.42285 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8513 | <5%                     |                10 |              0.08513 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8662 | <5%                     |                10 |              0.08662 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9295 | 5-10%                   |                10 |              0.09295 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9303 | >20%                    |                10 |              0.09303 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9353 | 5-10%                   |                 5 |              0.18706 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9482 | 15-20%                  |                10 |              0.09482 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.9489 | <5%                     |                10 |              0.09489 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9584 | >20%                    |                10 |              0.09584 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9759 | <5%                     |                10 |              0.09759 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9851 | 5-10%                   |                10 |              0.09851 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9977 | 5-10%                   |                10 |              0.09977 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.071  | >20%                    |                10 |              0.1071  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1028 | <5%                     |                10 |              0.11028 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1615 | >20%                    |                10 |              0.11615 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.2303 | >20%                    |                10 |              0.12303 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.318  | 5-10%                   |                 5 |              0.2636  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3861 | 5-10%                   |                10 |              0.13861 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8756 | 10-15%                  |                10 |              0.18756 |