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

Data correct as of 2024-10-12 01:27:21.644403, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1052 | <5%                     |                 2 |              0.0526  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.147  | <5%                     |                 2 |              0.0735  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1787 | 15-20%                  |                 2 |              0.08935 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2092 | >20%                    |                 2 |              0.1046  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2241 | <5%                     |                 2 |              0.11205 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2242 | <5%                     |                 2 |              0.1121  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2292 | >20%                    |                 2 |              0.1146  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2389 | >20%                    |                 5 |              0.04778 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.24   | 10-15%                  |                 2 |              0.12    |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2401 | 10-15%                  |                 2 |              0.12005 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2422 | 15-20%                  |                 2 |              0.1211  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2448 | <5%                     |                 2 |              0.1224  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.2559 | >20%                    |                 5 |              0.05118 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2576 | <5%                     |                 2 |              0.1288  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2763 | <5%                     |                 2 |              0.13815 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2794 | <5%                     |                 2 |              0.1397  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2796 | 15-20%                  |                 2 |              0.1398  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2806 | 5-10%                   |                 2 |              0.1403  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2823 | >20%                    |                 5 |              0.05646 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2853 | <5%                     |                 2 |              0.14265 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.2921 | <5%                     |                 2 |              0.14605 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.2927 | 15-20%                  |                10 |              0.02927 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             24 |      0.2982 | >20%                    |                 5 |              0.05964 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3044 | <5%                     |                10 |              0.03044 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             24 |      0.3113 | 15-20%                  |                 2 |              0.15565 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3117 | 15-20%                  |                 2 |              0.15585 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3155 | 5-10%                   |                 5 |              0.0631  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.3193 | 5-10%                   |                 5 |              0.06386 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.3297 | 15-20%                  |                 5 |              0.06594 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3316 | <5%                     |                 2 |              0.1658  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3397 | >20%                    |                 5 |              0.06794 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3412 | >20%                    |                 2 |              0.1706  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.35   | 5-10%                   |                 5 |              0.07    |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3534 | <5%                     |                 2 |              0.1767  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3603 | <5%                     |                 5 |              0.07206 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.3659 | 5-10%                   |                 5 |              0.07318 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.3671 | >20%                    |                 5 |              0.07342 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 5-10%                   |                10 |              0.03698 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3776 | >20%                    |                 5 |              0.07552 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.382  | >20%                    |                 2 |              0.191   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3917 | <5%                     |                 5 |              0.07834 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4116 | <5%                     |                 5 |              0.08232 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4139 | 5-10%                   |                 2 |              0.20695 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4166 | 5-10%                   |                 2 |              0.2083  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4207 | >20%                    |                 2 |              0.21035 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4207 | >20%                    |                10 |              0.04207 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4231 | >20%                    |                10 |              0.04231 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4255 | 5-10%                   |                10 |              0.04255 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4302 | <5%                     |                 2 |              0.2151  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4323 | 5-10%                   |                 2 |              0.21615 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4352 | 15-20%                  |                 5 |              0.08704 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4407 | >20%                    |                 2 |              0.22035 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4448 | <5%                     |                 5 |              0.08896 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.447  | 5-10%                   |                 5 |              0.0894  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4489 | 10-15%                  |                 5 |              0.08978 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4489 | 10-15%                  |                 5 |              0.08978 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4531 | >20%                    |                 2 |              0.22655 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4555 | 15-20%                  |                 2 |              0.22775 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4564 | 5-10%                   |                10 |              0.04564 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4584 | <5%                     |                 2 |              0.2292  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4677 | <5%                     |                 5 |              0.09354 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4781 | 5-10%                   |                10 |              0.04781 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4808 | 15-20%                  |                 5 |              0.09616 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4834 | <5%                     |                 5 |              0.09668 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4875 | >20%                    |                 2 |              0.24375 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.494  | 10-15%                  |                 5 |              0.0988  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4951 | >20%                    |                 2 |              0.24755 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.4985 | 15-20%                  |                10 |              0.04985 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4996 | 5-10%                   |                10 |              0.04996 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5018 | <5%                     |                 5 |              0.10036 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5035 | >20%                    |                 2 |              0.25175 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.5098 | >20%                    |                10 |              0.05098 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5155 | <5%                     |                 5 |              0.1031  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5168 | <5%                     |                 5 |              0.10336 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5294 | <5%                     |                 5 |              0.10588 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.552  | >20%                    |                 5 |              0.1104  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.584  | >20%                    |                 5 |              0.1168  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5904 | 15-20%                  |                 5 |              0.11808 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.591  | <5%                     |                10 |              0.0591  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.6041 | >20%                    |                 2 |              0.30205 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.606  | >20%                    |                 5 |              0.1212  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.6119 | >20%                    |                 5 |              0.12238 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.6237 | 15-20%                  |                10 |              0.06237 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6255 | 5-10%                   |                 5 |              0.1251  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6258 | 15-20%                  |                 5 |              0.12516 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6526 | 15-20%                  |                10 |              0.06526 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.659  | <5%                     |                10 |              0.0659  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6611 | <5%                     |                10 |              0.06611 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6624 | >20%                    |                 5 |              0.13248 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6675 | >20%                    |                10 |              0.06675 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6827 | >20%                    |                 2 |              0.34135 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6844 | <5%                     |                10 |              0.06844 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6852 | 5-10%                   |                10 |              0.06852 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7018 | >20%                    |                10 |              0.07018 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             24 |      0.7049 | <5%                     |                10 |              0.07049 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7053 | >20%                    |                 2 |              0.35265 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7292 | >20%                    |                 5 |              0.14584 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7476 | >20%                    |                10 |              0.07476 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7713 | 15-20%                  |                10 |              0.07713 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7803 | 10-15%                  |                 5 |              0.15606 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7818 | 5-10%                   |                10 |              0.07818 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8    | 5-10%                   |                10 |              0.08    |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.8    | 10-15%                  |                10 |              0.08    |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8099 | 15-20%                  |                10 |              0.08099 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8343 | >20%                    |                10 |              0.08343 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8629 | <5%                     |                10 |              0.08629 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8761 | <5%                     |                 2 |              0.43805 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9028 | >20%                    |                10 |              0.09028 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.9031 | >20%                    |                 5 |              0.18062 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9048 | >20%                    |                10 |              0.09048 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9115 | <5%                     |                10 |              0.09115 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9287 | 10-15%                  |                10 |              0.09287 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.965  | 10-15%                  |                 2 |              0.4825  |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.9857 | >20%                    |                10 |              0.09857 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9915 | 5-10%                   |                10 |              0.09915 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0094 | <5%                     |                10 |              0.10094 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0188 | 10-15%                  |                 5 |              0.20376 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0407 | >20%                    |                10 |              0.10407 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.107  | >20%                    |                10 |              0.1107  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.1279 | >20%                    |                 5 |              0.22558 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1483 | >20%                    |                10 |              0.11483 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.5016 | >20%                    |                10 |              0.15016 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5207 | 5-10%                   |                10 |              0.15207 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5766 | 5-10%                   |                10 |              0.15766 |