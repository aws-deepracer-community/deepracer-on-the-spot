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

Data correct as of 2024-11-18 01:44:40.296693, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1382 | >20%                    |                 5 |              0.02764 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | 5-10%                   |                 2 |              0.0831  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1763 | 10-15%                  |                 2 |              0.08815 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2194 | 15-20%                  |                 2 |              0.1097  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2222 | 5-10%                   |                 2 |              0.1111  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 10-15%                  |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.2324 | >20%                    |                 5 |              0.04648 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2391 | 5-10%                   |                 2 |              0.11955 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2422 | <5%                     |                 2 |              0.1211  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2605 | 5-10%                   |                 2 |              0.13025 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.27   | 5-10%                   |                 2 |              0.135   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2788 | <5%                     |                 2 |              0.1394  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2885 | 5-10%                   |                 2 |              0.14425 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.29   | <5%                     |                 2 |              0.145   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3168 | <5%                     |                 2 |              0.1584  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.3331 | 5-10%                   |                 2 |              0.16655 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3362 | 15-20%                  |                 2 |              0.1681  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3373 | <5%                     |                 5 |              0.06746 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3439 | <5%                     |                10 |              0.03439 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3448 | 5-10%                   |                 2 |              0.1724  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3472 | 15-20%                  |                 2 |              0.1736  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3522 | 10-15%                  |                 5 |              0.07044 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3526 | <5%                     |                 2 |              0.1763  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3575 | >20%                    |                 2 |              0.17875 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3689 | <5%                     |                 5 |              0.07378 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3696 | <5%                     |                 2 |              0.1848  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.379  | >20%                    |                 2 |              0.1895  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3794 | >20%                    |                 5 |              0.07588 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3823 | >20%                    |                 2 |              0.19115 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3867 | 15-20%                  |                 5 |              0.07734 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3905 | 5-10%                   |                 2 |              0.19525 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3977 | >20%                    |                 2 |              0.19885 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4133 | 5-10%                   |                 2 |              0.20665 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4138 | 5-10%                   |                 2 |              0.2069  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4159 | 5-10%                   |                 2 |              0.20795 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4231 | 15-20%                  |                 5 |              0.08462 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4268 | 10-15%                  |                 2 |              0.2134  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4276 | >20%                    |                 2 |              0.2138  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4343 | >20%                    |                 5 |              0.08686 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4418 | >20%                    |                 2 |              0.2209  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4448 | 10-15%                  |                 5 |              0.08896 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4455 | 5-10%                   |                 5 |              0.0891  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.4499 | <5%                     |                 2 |              0.22495 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4503 | <5%                     |                 5 |              0.09006 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4512 | 5-10%                   |                 5 |              0.09024 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4529 | 5-10%                   |                10 |              0.04529 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4533 | 10-15%                  |                 5 |              0.09066 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4544 | 10-15%                  |                 5 |              0.09088 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4574 | >20%                    |                 2 |              0.2287  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4579 | <5%                     |                 2 |              0.22895 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.4645 | 5-10%                   |                 5 |              0.0929  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.472  | 15-20%                  |                 5 |              0.0944  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4733 | 15-20%                  |                 5 |              0.09466 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4857 | 15-20%                  |                 5 |              0.09714 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4878 | <5%                     |                10 |              0.04878 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.488  | <5%                     |                 2 |              0.244   |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.493  | >20%                    |                10 |              0.0493  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.5022 | 5-10%                   |                 2 |              0.2511  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5024 | 5-10%                   |                 2 |              0.2512  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5105 | 5-10%                   |                 5 |              0.1021  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.5129 | 10-15%                  |                 2 |              0.25645 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5191 | <5%                     |                 5 |              0.10382 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5407 | <5%                     |                 5 |              0.10814 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5432 | 15-20%                  |                 5 |              0.10864 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.544  | 5-10%                   |                 5 |              0.1088  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.545  | <5%                     |                 2 |              0.2725  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5473 | >20%                    |                 5 |              0.10946 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5499 | 5-10%                   |                 5 |              0.10998 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5532 | >20%                    |                 5 |              0.11064 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5613 | 15-20%                  |                10 |              0.05613 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5671 | >20%                    |                10 |              0.05671 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5673 | 10-15%                  |                 5 |              0.11346 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5686 | 10-15%                  |                10 |              0.05686 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5724 | >20%                    |                 5 |              0.11448 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5733 | >20%                    |                 2 |              0.28665 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5886 | 15-20%                  |                 2 |              0.2943  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6199 | 5-10%                   |                10 |              0.06199 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.6213 | >20%                    |                10 |              0.06213 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6217 | 5-10%                   |                 5 |              0.12434 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6698 | <5%                     |                 5 |              0.13396 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6737 | 5-10%                   |                10 |              0.06737 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6744 | >20%                    |                 5 |              0.13488 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6759 | >20%                    |                 2 |              0.33795 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6909 | >20%                    |                10 |              0.06909 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6923 | >20%                    |                 5 |              0.13846 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6929 | <5%                     |                 5 |              0.13858 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6945 | 15-20%                  |                 5 |              0.1389  |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.7006 | >20%                    |                10 |              0.07006 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7086 | 5-10%                   |                 5 |              0.14172 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7089 | <5%                     |                 5 |              0.14178 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.7206 | 15-20%                  |                10 |              0.07206 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7219 | >20%                    |                10 |              0.07219 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7381 | 5-10%                   |                10 |              0.07381 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7417 | <5%                     |                10 |              0.07417 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7462 | 15-20%                  |                 5 |              0.14924 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7599 | 10-15%                  |                10 |              0.07599 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.765  | <5%                     |                 5 |              0.153   |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7868 | 15-20%                  |                10 |              0.07868 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7873 | 5-10%                   |                10 |              0.07873 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7889 | <5%                     |                 2 |              0.39445 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7959 | <5%                     |                10 |              0.07959 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7985 | 5-10%                   |                 5 |              0.1597  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8026 | 5-10%                   |                10 |              0.08026 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.803  | >20%                    |                10 |              0.0803  |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8439 | 10-15%                  |                10 |              0.08439 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8504 | 10-15%                  |                10 |              0.08504 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8587 | >20%                    |                 5 |              0.17174 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8623 | >20%                    |                10 |              0.08623 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8633 | 5-10%                   |                10 |              0.08633 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8686 | <5%                     |                10 |              0.08686 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9191 | 5-10%                   |                10 |              0.09191 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9773 | 15-20%                  |                10 |              0.09773 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9817 | <5%                     |                10 |              0.09817 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9886 | <5%                     |                10 |              0.09886 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9911 | 5-10%                   |                10 |              0.09911 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0125 | <5%                     |                10 |              0.10125 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0128 | <5%                     |                10 |              0.10128 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0241 | 15-20%                  |                10 |              0.10241 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0422 | >20%                    |                10 |              0.10422 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0519 | <5%                     |                10 |              0.10519 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0588 | >20%                    |                10 |              0.10588 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1397 | 10-15%                  |                10 |              0.11397 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1647 | 15-20%                  |                10 |              0.11647 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3558 | >20%                    |                10 |              0.13558 |