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

Data correct as of 2026-10-19 03:58:17.323950, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0878 | >20%                    |                 2 |              0.0439  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.1378 | 15-20%                  |                 2 |              0.0689  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1421 | >20%                    |                 2 |              0.07105 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1474 | 15-20%                  |                 5 |              0.02948 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.1777 | >20%                    |                 5 |              0.03554 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.1998 | 10-15%                  |                 2 |              0.0999  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | 15-20%                  |                 5 |              0.04092 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2126 | >20%                    |                 2 |              0.1063  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2478 | >20%                    |                 2 |              0.1239  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.2557 | >20%                    |                 2 |              0.12785 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2663 | >20%                    |                 2 |              0.13315 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2841 | >20%                    |                 2 |              0.14205 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2884 | >20%                    |                 5 |              0.05768 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2886 | >20%                    |                 5 |              0.05772 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3004 | >20%                    |                 2 |              0.1502  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3099 | >20%                    |                 2 |              0.15495 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.311  | >20%                    |                 2 |              0.1555  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3188 | 15-20%                  |                 2 |              0.1594  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3307 | >20%                    |                10 |              0.03307 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.3385 | >20%                    |                 2 |              0.16925 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3536 | >20%                    |                 5 |              0.07072 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.361  | >20%                    |                 2 |              0.1805  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3652 | 10-15%                  |                 2 |              0.1826  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3679 | 15-20%                  |                 2 |              0.18395 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3695 | >20%                    |                10 |              0.03695 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3725 | 15-20%                  |                 2 |              0.18625 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3867 | >20%                    |                 5 |              0.07734 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3867 | >20%                    |                 5 |              0.07734 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.394  | <5%                     |                 2 |              0.197   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3955 | >20%                    |                 5 |              0.0791  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4079 | >20%                    |                10 |              0.04079 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4196 | >20%                    |                 5 |              0.08392 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4218 | >20%                    |                 5 |              0.08436 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4263 | >20%                    |                 2 |              0.21315 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4345 | >20%                    |                 2 |              0.21725 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4358 | >20%                    |                 5 |              0.08716 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4484 | >20%                    |                 2 |              0.2242  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4505 | >20%                    |                 2 |              0.22525 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4588 | >20%                    |                 5 |              0.09176 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.4628 | 5-10%                   |                10 |              0.04628 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4652 | 5-10%                   |                10 |              0.04652 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4698 | >20%                    |                 5 |              0.09396 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4763 | 10-15%                  |                 2 |              0.23815 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4796 | >20%                    |                 5 |              0.09592 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4885 | >20%                    |                 5 |              0.0977  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4911 | >20%                    |                 2 |              0.24555 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.492  | <5%                     |                10 |              0.0492  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.502  | >20%                    |                 5 |              0.1004  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5036 | >20%                    |                 2 |              0.2518  |
| eu-west-3      | g5.2xlarge     |      8 |         32 |             22 |      0.5095 |                         |                 2 |              0.25475 |
| eu-west-3      | g5.8xlarge     |     32 |        128 |             22 |      0.5184 |                         |                10 |              0.05184 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5189 | >20%                    |                 2 |              0.25945 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5224 | 15-20%                  |                 2 |              0.2612  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.5478 | >20%                    |                 2 |              0.2739  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5715 | >20%                    |                 2 |              0.28575 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.579  | >20%                    |                 5 |              0.1158  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5804 | >20%                    |                 5 |              0.11608 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5864 | >20%                    |                 2 |              0.2932  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5907 | 10-15%                  |                 5 |              0.11814 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6008 | >20%                    |                 5 |              0.12016 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6186 | >20%                    |                 5 |              0.12372 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6202 | >20%                    |                10 |              0.06202 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6206 | >20%                    |                10 |              0.06206 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6213 | 10-15%                  |                 2 |              0.31065 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6222 | >20%                    |                 2 |              0.3111  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6423 | >20%                    |                 5 |              0.12846 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.6544 | <5%                     |                 2 |              0.3272  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6594 | >20%                    |                10 |              0.06594 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6658 | 5-10%                   |                 2 |              0.3329  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6799 | <5%                     |                 2 |              0.33995 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6836 | >20%                    |                 5 |              0.13672 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6856 | >20%                    |                 5 |              0.13712 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7    | >20%                    |                 5 |              0.14    |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.7109 | >20%                    |                 2 |              0.35545 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.7178 | 15-20%                  |                 2 |              0.3589  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.7264 | >20%                    |                 5 |              0.14528 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7342 | 15-20%                  |                 5 |              0.14684 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.7449 | >20%                    |                 5 |              0.14898 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.7553 | >20%                    |                 5 |              0.15106 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.756  | >20%                    |                10 |              0.0756  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7574 | >20%                    |                 5 |              0.15148 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7654 | 15-20%                  |                10 |              0.07654 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.781  | >20%                    |                 5 |              0.1562  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7885 | >20%                    |                10 |              0.07885 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7901 | 15-20%                  |                10 |              0.07901 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7909 | >20%                    |                 5 |              0.15818 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.791  | >20%                    |                 5 |              0.1582  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7968 | 15-20%                  |                10 |              0.07968 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.803  | >20%                    |                10 |              0.0803  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8049 | 10-15%                  |                10 |              0.08049 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8297 | 5-10%                   |                10 |              0.08297 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8496 | >20%                    |                 2 |              0.4248  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.8506 | 10-15%                  |                 2 |              0.4253  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8529 | 15-20%                  |                 5 |              0.17058 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8582 | 10-15%                  |                 2 |              0.4291  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.8592 | >20%                    |                 5 |              0.17184 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.875  | >20%                    |                10 |              0.0875  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.8981 | >20%                    |                 5 |              0.17962 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8993 | >20%                    |                10 |              0.08993 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.9    | >20%                    |                 5 |              0.18    |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.9069 | 5-10%                   |                 5 |              0.18138 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.9088 | <5%                     |                 5 |              0.18176 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9173 | >20%                    |                10 |              0.09173 |
| eu-west-3      | g5.4xlarge     |     16 |         64 |             22 |      0.9263 |                         |                 5 |              0.18526 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9291 | >20%                    |                10 |              0.09291 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9535 | >20%                    |                 2 |              0.47675 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9597 | >20%                    |                10 |              0.09597 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9624 | >20%                    |                10 |              0.09624 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9624 | >20%                    |                10 |              0.09624 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.987  | 15-20%                  |                10 |              0.0987  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9874 | >20%                    |                10 |              0.09874 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9995 | 15-20%                  |                10 |              0.09995 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0079 | >20%                    |                 5 |              0.20158 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0214 | >20%                    |                10 |              0.10214 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0293 | >20%                    |                10 |              0.10293 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0408 | >20%                    |                10 |              0.10408 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      1.0537 | >20%                    |                10 |              0.10537 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.057  | 15-20%                  |                10 |              0.1057  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      1.1074 | >20%                    |                 5 |              0.22148 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.1179 | 5-10%                   |                10 |              0.11179 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.1409 | >20%                    |                 5 |              0.22818 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1861 | >20%                    |                10 |              0.11861 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2057 | >20%                    |                10 |              0.12057 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.336  | 10-15%                  |                10 |              0.1336  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.3457 | >20%                    |                 2 |              0.67285 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.3603 | 15-20%                  |                10 |              0.13603 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.3691 | >20%                    |                10 |              0.13691 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.3843 | >20%                    |                 2 |              0.69215 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      1.3915 | >20%                    |                 5 |              0.2783  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.3933 | 10-15%                  |                 2 |              0.69665 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      1.431  | >20%                    |                 2 |              0.7155  |
| ap-northeast-3 | g6e.4xlarge    |     16 |        128 |             45 |      1.4398 |                         |                 5 |              0.28796 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.4455 | >20%                    |                10 |              0.14455 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      1.4863 | >20%                    |                10 |              0.14863 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4941 | 5-10%                   |                 2 |              0.74705 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4972 | 5-10%                   |                 5 |              0.29944 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.513  | >20%                    |                 5 |              0.3026  |
| ap-south-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.5279 |                         |                 2 |              0.76395 |
| ap-northeast-3 | g6e.2xlarge    |      8 |         64 |             45 |      1.558  |                         |                 2 |              0.779   |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5585 | >20%                    |                10 |              0.15585 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5599 | >20%                    |                10 |              0.15599 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.571  | 5-10%                   |                 2 |              0.7855  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.5883 | >20%                    |                 2 |              0.79415 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.6082 | >20%                    |                10 |              0.16082 |
| ap-northeast-3 | g6e.8xlarge    |     32 |        256 |             45 |      1.6734 |                         |                10 |              0.16734 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.6754 | >20%                    |                10 |              0.16754 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.7052 | 15-20%                  |                10 |              0.17052 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.733  | >20%                    |                 5 |              0.3466  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      1.8032 | >20%                    |                 5 |              0.36064 |
| ap-south-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.9714 |                         |                 5 |              0.39428 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      2.0892 | 15-20%                  |                 5 |              0.41784 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      2.2114 | 5-10%                   |                 2 |              1.1057  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      2.2722 | 5-10%                   |                10 |              0.22722 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      2.2764 | >20%                    |                 5 |              0.45528 |
| ap-south-1     | g6e.8xlarge    |     32 |        256 |             45 |      2.2773 |                         |                10 |              0.22773 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.5748 | >20%                    |                10 |              0.25748 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      3.0714 | >20%                    |                10 |              0.30714 |