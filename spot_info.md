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

Data correct as of 2025-09-26 01:44:27.756973, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1851 | 10-15%                  |                 2 |              0.09255 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1888 | >20%                    |                 2 |              0.0944  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1972 | >20%                    |                 2 |              0.0986  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2084 | 5-10%                   |                 2 |              0.1042  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2136 | >20%                    |                 5 |              0.04272 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2157 | >20%                    |                 2 |              0.10785 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2349 | >20%                    |                 2 |              0.11745 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2469 | >20%                    |                 2 |              0.12345 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2533 | 10-15%                  |                 5 |              0.05066 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2598 | >20%                    |                 2 |              0.1299  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2624 | >20%                    |                 5 |              0.05248 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2973 | 10-15%                  |                 2 |              0.14865 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3007 | >20%                    |                 2 |              0.15035 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3066 | >20%                    |                 2 |              0.1533  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3089 | 5-10%                   |                 2 |              0.15445 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3113 | >20%                    |                10 |              0.03113 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3184 | 15-20%                  |                 2 |              0.1592  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3241 | >20%                    |                 2 |              0.16205 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3316 | >20%                    |                 2 |              0.1658  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3354 | <5%                     |                10 |              0.03354 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3385 | 5-10%                   |                 2 |              0.16925 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3435 | 10-15%                  |                 2 |              0.17175 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3494 | 15-20%                  |                 2 |              0.1747  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3571 | >20%                    |                 2 |              0.17855 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3657 | >20%                    |                 2 |              0.18285 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3698 | >20%                    |                 2 |              0.1849  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3705 | >20%                    |                 2 |              0.18525 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3772 | >20%                    |                 5 |              0.07544 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.385  | >20%                    |                 5 |              0.077   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3871 | >20%                    |                 5 |              0.07742 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3949 | >20%                    |                 2 |              0.19745 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3978 | <5%                     |                10 |              0.03978 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4024 | >20%                    |                 2 |              0.2012  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.4084 | >20%                    |                10 |              0.04084 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4098 | 15-20%                  |                 2 |              0.2049  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4104 | >20%                    |                 5 |              0.08208 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4151 | >20%                    |                 5 |              0.08302 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4192 | >20%                    |                 5 |              0.08384 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.421  | >20%                    |                 2 |              0.2105  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4235 | >20%                    |                 2 |              0.21175 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4246 | >20%                    |                 2 |              0.2123  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4253 | >20%                    |                 5 |              0.08506 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4309 | >20%                    |                 2 |              0.21545 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4313 | >20%                    |                 5 |              0.08626 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4335 | 5-10%                   |                 2 |              0.21675 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4368 | 15-20%                  |                 2 |              0.2184  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4374 | 10-15%                  |                 5 |              0.08748 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4384 | >20%                    |                 2 |              0.2192  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4422 | 15-20%                  |                 5 |              0.08844 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4614 | 10-15%                  |                 2 |              0.2307  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.465  | >20%                    |                 2 |              0.2325  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4668 | >20%                    |                10 |              0.04668 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4684 | >20%                    |                 5 |              0.09368 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.473  | >20%                    |                 5 |              0.0946  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4743 | 10-15%                  |                 2 |              0.23715 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4758 | <5%                     |                 2 |              0.2379  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4799 | >20%                    |                 5 |              0.09598 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4876 | >20%                    |                10 |              0.04876 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4955 | >20%                    |                 2 |              0.24775 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4993 | >20%                    |                 5 |              0.09986 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5061 | 5-10%                   |                 5 |              0.10122 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5095 | >20%                    |                 2 |              0.25475 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5119 | >20%                    |                 2 |              0.25595 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5122 | >20%                    |                 5 |              0.10244 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.5212 | 15-20%                  |                10 |              0.05212 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5212 | >20%                    |                 5 |              0.10424 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5362 | 5-10%                   |                 2 |              0.2681  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5372 | 10-15%                  |                 2 |              0.2686  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5477 | >20%                    |                 5 |              0.10954 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5513 | >20%                    |                 2 |              0.27565 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5547 | >20%                    |                 5 |              0.11094 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5563 | >20%                    |                 2 |              0.27815 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5606 | >20%                    |                 5 |              0.11212 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5729 | >20%                    |                 5 |              0.11458 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5735 | >20%                    |                 2 |              0.28675 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5771 | >20%                    |                 5 |              0.11542 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5841 | >20%                    |                 5 |              0.11682 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.586  | >20%                    |                 5 |              0.1172  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5927 | 15-20%                  |                 2 |              0.29635 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.598  | >20%                    |                 2 |              0.299   |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6027 | >20%                    |                 2 |              0.30135 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6059 | >20%                    |                 5 |              0.12118 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6194 | >20%                    |                 5 |              0.12388 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6218 | 10-15%                  |                 5 |              0.12436 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6263 | 10-15%                  |                 5 |              0.12526 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6266 | 5-10%                   |                10 |              0.06266 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6399 | >20%                    |                 5 |              0.12798 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.641  | 15-20%                  |                 5 |              0.1282  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6488 | 15-20%                  |                 2 |              0.3244  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6628 | >20%                    |                 5 |              0.13256 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6678 | >20%                    |                 5 |              0.13356 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6678 | >20%                    |                 5 |              0.13356 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6749 | >20%                    |                 5 |              0.13498 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6807 | >20%                    |                 5 |              0.13614 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6863 | >20%                    |                 5 |              0.13726 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6904 | >20%                    |                 2 |              0.3452  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6931 | >20%                    |                 5 |              0.13862 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6972 | >20%                    |                10 |              0.06972 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6993 | 15-20%                  |                 5 |              0.13986 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6999 | 15-20%                  |                10 |              0.06999 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7008 | >20%                    |                 5 |              0.14016 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7052 | >20%                    |                 5 |              0.14104 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7068 | >20%                    |                 5 |              0.14136 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7098 | 15-20%                  |                10 |              0.07098 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7224 | >20%                    |                10 |              0.07224 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7329 | >20%                    |                 2 |              0.36645 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7449 | 15-20%                  |                 5 |              0.14898 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7529 | >20%                    |                10 |              0.07529 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7622 | >20%                    |                10 |              0.07622 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7654 | 10-15%                  |                 2 |              0.3827  |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7717 | >20%                    |                10 |              0.07717 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7829 | 15-20%                  |                10 |              0.07829 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7886 | >20%                    |                 5 |              0.15772 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8002 | >20%                    |                10 |              0.08002 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8019 | 10-15%                  |                 2 |              0.40095 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8025 | >20%                    |                 5 |              0.1605  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.822  | >20%                    |                10 |              0.0822  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8267 | 15-20%                  |                 5 |              0.16534 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8272 | >20%                    |                 5 |              0.16544 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8421 | >20%                    |                 5 |              0.16842 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8439 | 15-20%                  |                10 |              0.08439 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8498 | <5%                     |                10 |              0.08498 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8585 | 10-15%                  |                10 |              0.08585 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8612 | >20%                    |                10 |              0.08612 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8727 | 15-20%                  |                10 |              0.08727 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8745 | 15-20%                  |                10 |              0.08745 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8933 | 15-20%                  |                10 |              0.08933 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9053 | >20%                    |                10 |              0.09053 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9117 | <5%                     |                10 |              0.09117 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9149 | 10-15%                  |                10 |              0.09149 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.9171 | >20%                    |                10 |              0.09171 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9313 | >20%                    |                 5 |              0.18626 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9378 | 5-10%                   |                10 |              0.09378 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9522 | <5%                     |                10 |              0.09522 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9856 | 10-15%                  |                10 |              0.09856 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9874 | 15-20%                  |                10 |              0.09874 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9975 | 10-15%                  |                 5 |              0.1995  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0004 | 15-20%                  |                10 |              0.10004 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0247 | >20%                    |                10 |              0.10247 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0308 | >20%                    |                10 |              0.10308 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.0405 | >20%                    |                10 |              0.10405 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.0453 | 5-10%                   |                10 |              0.10453 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.046  | >20%                    |                 2 |              0.523   |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0676 | >20%                    |                 2 |              0.5338  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0698 | >20%                    |                 2 |              0.5349  |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.0724 | >20%                    |                 5 |              0.21448 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0968 | 10-15%                  |                 2 |              0.5484  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1044 | 5-10%                   |                10 |              0.11044 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1059 | >20%                    |                10 |              0.11059 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.106  | 15-20%                  |                10 |              0.1106  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1188 | >20%                    |                10 |              0.11188 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1197 | >20%                    |                 5 |              0.22394 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.1209 | <5%                     |                10 |              0.11209 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.135  | 5-10%                   |                10 |              0.1135  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1655 | 10-15%                  |                10 |              0.11655 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1686 | >20%                    |                 5 |              0.23372 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1767 | >20%                    |                 5 |              0.23534 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2157 | 15-20%                  |                10 |              0.12157 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2204 | 5-10%                   |                 2 |              0.6102  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.2587 | >20%                    |                10 |              0.12587 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2906 | >20%                    |                10 |              0.12906 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3236 | 10-15%                  |                10 |              0.13236 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3394 | 10-15%                  |                 5 |              0.26788 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3425 | <5%                     |                 2 |              0.67125 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4298 | >20%                    |                10 |              0.14298 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5987 | >20%                    |                10 |              0.15987 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6117 | >20%                    |                10 |              0.16117 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6497 | 10-15%                  |                 5 |              0.32994 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.7041 | >20%                    |                10 |              0.17041 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7576 | >20%                    |                10 |              0.17576 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.0506 | 10-15%                  |                10 |              0.20506 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1532 | 15-20%                  |                10 |              0.21532 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.65   | >20%                    |                10 |              0.265   |