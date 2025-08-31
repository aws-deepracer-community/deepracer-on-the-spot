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

Data correct as of 2025-08-31 01:52:05.603969, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0985 | 5-10%                   |                 2 |              0.04925 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1119 | >20%                    |                 2 |              0.05595 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.1281 | >20%                    |                 2 |              0.06405 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | >20%                    |                 5 |              0.02954 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.1724 | >20%                    |                 2 |              0.0862  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1794 | >20%                    |                 2 |              0.0897  |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.1917 | >20%                    |                 5 |              0.03834 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1924 | 10-15%                  |                 5 |              0.03848 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1957 | >20%                    |                 5 |              0.03914 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2062 | 10-15%                  |                 2 |              0.1031  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2108 | >20%                    |                 2 |              0.1054  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2118 | 15-20%                  |                 5 |              0.04236 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | >20%                    |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2346 | >20%                    |                 2 |              0.1173  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2702 | >20%                    |                 2 |              0.1351  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.2771 | >20%                    |                10 |              0.02771 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2781 | >20%                    |                 2 |              0.13905 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2783 | >20%                    |                 2 |              0.13915 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2907 | 15-20%                  |                 2 |              0.14535 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.316  | 5-10%                   |                 2 |              0.158   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3193 | >20%                    |                 2 |              0.15965 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3217 | 10-15%                  |                 2 |              0.16085 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3257 | 10-15%                  |                 5 |              0.06514 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3281 | 5-10%                   |                 2 |              0.16405 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3327 | >20%                    |                 5 |              0.06654 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3434 | >20%                    |                 2 |              0.1717  |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3453 | >20%                    |                10 |              0.03453 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.3453 | 15-20%                  |                10 |              0.03453 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3465 | >20%                    |                 2 |              0.17325 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3466 | >20%                    |                 2 |              0.1733  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3492 | >20%                    |                 2 |              0.1746  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3604 | >20%                    |                 5 |              0.07208 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3649 | >20%                    |                 2 |              0.18245 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3669 | >20%                    |                 5 |              0.07338 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3706 | >20%                    |                 2 |              0.1853  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3708 | >20%                    |                 2 |              0.1854  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3807 | >20%                    |                 2 |              0.19035 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3831 | 15-20%                  |                 2 |              0.19155 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3833 | 10-15%                  |                 2 |              0.19165 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3865 | >20%                    |                 5 |              0.0773  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4046 | 15-20%                  |                 2 |              0.2023  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4056 | 10-15%                  |                 2 |              0.2028  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.4087 | 15-20%                  |                 2 |              0.20435 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4152 | >20%                    |                 5 |              0.08304 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4187 | >20%                    |                 5 |              0.08374 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4201 | >20%                    |                 5 |              0.08402 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4208 | 15-20%                  |                10 |              0.04208 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4223 | >20%                    |                 5 |              0.08446 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.425  | >20%                    |                10 |              0.0425  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4288 | 10-15%                  |                 2 |              0.2144  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4445 | 10-15%                  |                 2 |              0.22225 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4587 | 5-10%                   |                 2 |              0.22935 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4596 | 15-20%                  |                 2 |              0.2298  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.464  | >20%                    |                 2 |              0.232   |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4648 | >20%                    |                 5 |              0.09296 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4682 | <5%                     |                 2 |              0.2341  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4719 | >20%                    |                 5 |              0.09438 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4791 | >20%                    |                 2 |              0.23955 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4806 | >20%                    |                 2 |              0.2403  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.481  | >20%                    |                 2 |              0.2405  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4914 | >20%                    |                 5 |              0.09828 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4984 | >20%                    |                 5 |              0.09968 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4992 | >20%                    |                 2 |              0.2496  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5011 | 15-20%                  |                 5 |              0.10022 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5045 | >20%                    |                10 |              0.05045 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5048 | 5-10%                   |                 5 |              0.10096 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5082 | >20%                    |                 2 |              0.2541  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5089 | >20%                    |                 5 |              0.10178 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5126 | >20%                    |                 2 |              0.2563  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5219 | >20%                    |                 5 |              0.10438 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5336 | >20%                    |                 5 |              0.10672 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.5397 | >20%                    |                 5 |              0.10794 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5435 | >20%                    |                 2 |              0.27175 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5473 | 10-15%                  |                 2 |              0.27365 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5495 | >20%                    |                 2 |              0.27475 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5511 | >20%                    |                 5 |              0.11022 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5564 | >20%                    |                 2 |              0.2782  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5566 | >20%                    |                 2 |              0.2783  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5677 | >20%                    |                 2 |              0.28385 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5744 | >20%                    |                 5 |              0.11488 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.575  | >20%                    |                 5 |              0.115   |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5786 | 5-10%                   |                 2 |              0.2893  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5805 | >20%                    |                 5 |              0.1161  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5891 | >20%                    |                 5 |              0.11782 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5912 | <5%                     |                 2 |              0.2956  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.5946 | 15-20%                  |                 5 |              0.11892 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6043 | >20%                    |                 5 |              0.12086 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6096 | >20%                    |                 5 |              0.12192 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6098 | 10-15%                  |                 5 |              0.12196 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6142 | >20%                    |                 5 |              0.12284 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.623  | >20%                    |                 2 |              0.3115  |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6232 | 10-15%                  |                 5 |              0.12464 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6312 | >20%                    |                 2 |              0.3156  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6408 | 15-20%                  |                 5 |              0.12816 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6408 | >20%                    |                 5 |              0.12816 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6554 | 15-20%                  |                 5 |              0.13108 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6623 | >20%                    |                 5 |              0.13246 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6653 | 5-10%                   |                10 |              0.06653 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.669  | >20%                    |                 5 |              0.1338  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6903 | 15-20%                  |                 2 |              0.34515 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6924 | >20%                    |                 5 |              0.13848 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6969 | 15-20%                  |                10 |              0.06969 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.6989 | 10-15%                  |                10 |              0.06989 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7068 | >20%                    |                10 |              0.07068 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7074 | >20%                    |                10 |              0.07074 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7121 | >20%                    |                 5 |              0.14242 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7157 | >20%                    |                 5 |              0.14314 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7434 | >20%                    |                 5 |              0.14868 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7474 | >20%                    |                10 |              0.07474 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7523 | >20%                    |                 5 |              0.15046 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7595 | >20%                    |                 5 |              0.1519  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7624 | >20%                    |                 5 |              0.15248 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7749 | >20%                    |                10 |              0.07749 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7752 | >20%                    |                10 |              0.07752 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7816 | >20%                    |                10 |              0.07816 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7835 | >20%                    |                 5 |              0.1567  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.7843 | >20%                    |                10 |              0.07843 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8036 | >20%                    |                10 |              0.08036 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8084 | 10-15%                  |                10 |              0.08084 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.824  | >20%                    |                 5 |              0.1648  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8252 | 15-20%                  |                10 |              0.08252 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8291 | 15-20%                  |                10 |              0.08291 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8428 | >20%                    |                 2 |              0.4214  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8455 | >20%                    |                 5 |              0.1691  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8695 | 10-15%                  |                 2 |              0.43475 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8744 | 10-15%                  |                10 |              0.08744 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8949 | <5%                     |                10 |              0.08949 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.899  | <5%                     |                10 |              0.0899  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8997 | >20%                    |                10 |              0.08997 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9186 | >20%                    |                 5 |              0.18372 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9255 | 5-10%                   |                10 |              0.09255 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9284 | 15-20%                  |                10 |              0.09284 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9445 | 5-10%                   |                10 |              0.09445 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9552 | >20%                    |                10 |              0.09552 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9603 | 15-20%                  |                10 |              0.09603 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9635 | <5%                     |                10 |              0.09635 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9648 | 5-10%                   |                10 |              0.09648 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9861 | 10-15%                  |                10 |              0.09861 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9963 | >20%                    |                 2 |              0.49815 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0139 | 15-20%                  |                10 |              0.10139 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0225 | >20%                    |                10 |              0.10225 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0276 | 15-20%                  |                10 |              0.10276 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0316 | >20%                    |                10 |              0.10316 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.0341 | >20%                    |                10 |              0.10341 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0404 | 15-20%                  |                10 |              0.10404 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0409 | <5%                     |                10 |              0.10409 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0428 | >20%                    |                10 |              0.10428 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0497 | >20%                    |                 2 |              0.52485 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0818 | >20%                    |                10 |              0.10818 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1056 | 15-20%                  |                10 |              0.11056 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1128 | >20%                    |                 5 |              0.22256 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      1.1275 | >20%                    |                10 |              0.11275 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1314 | >20%                    |                 5 |              0.22628 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.132  | 10-15%                  |                 5 |              0.2264  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1442 | >20%                    |                10 |              0.11442 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.1479 | 5-10%                   |                 2 |              0.57395 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1498 | >20%                    |                 2 |              0.5749  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.162  | 15-20%                  |                10 |              0.1162  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.2163 | 10-15%                  |                 2 |              0.60815 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2248 | >20%                    |                 5 |              0.24496 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2346 | 5-10%                   |                10 |              0.12346 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.2642 | 10-15%                  |                 5 |              0.25284 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3233 | 10-15%                  |                10 |              0.13233 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4046 | >20%                    |                 5 |              0.28092 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.4436 | 15-20%                  |                10 |              0.14436 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.5018 | >20%                    |                10 |              0.15018 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.5029 | 10-15%                  |                 5 |              0.30058 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5211 | >20%                    |                10 |              0.15211 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5659 | >20%                    |                10 |              0.15659 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5935 | >20%                    |                10 |              0.15935 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.6136 | >20%                    |                10 |              0.16136 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.6458 | >20%                    |                10 |              0.16458 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.3164 | 10-15%                  |                10 |              0.23164 |