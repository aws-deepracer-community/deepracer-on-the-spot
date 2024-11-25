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

Data correct as of 2024-11-25 01:44:28.206620, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1204 | >20%                    |                 5 |              0.02408 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.161  | 10-15%                  |                 2 |              0.0805  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.1662 | <5%                     |                 2 |              0.0831  |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.1782 | >20%                    |                 5 |              0.03564 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2046 | >20%                    |                 5 |              0.04092 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.2142 | >20%                    |                 2 |              0.1071  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.2242 | 5-10%                   |                 2 |              0.1121  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | <5%                     |                 5 |              0.04498 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2259 | 5-10%                   |                 2 |              0.11295 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2289 | 15-20%                  |                 2 |              0.11445 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2313 | 5-10%                   |                 2 |              0.11565 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2377 | <5%                     |                 2 |              0.11885 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.247  | <5%                     |                 2 |              0.1235  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2638 | 10-15%                  |                 2 |              0.1319  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.2764 | 15-20%                  |                 5 |              0.05528 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2781 | 5-10%                   |                 2 |              0.13905 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2784 | <5%                     |                 2 |              0.1392  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.2804 |                         |                 2 |              0.1402  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.298  | 10-15%                  |                 2 |              0.149   |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.3004 | <5%                     |                 5 |              0.06008 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3031 | 5-10%                   |                 2 |              0.15155 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3232 | <5%                     |                 2 |              0.1616  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3314 | 5-10%                   |                 2 |              0.1657  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.3364 | >20%                    |                 5 |              0.06728 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3386 | 15-20%                  |                 2 |              0.1693  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3391 | <5%                     |                 2 |              0.16955 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3397 | <5%                     |                 5 |              0.06794 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.3443 | 15-20%                  |                 2 |              0.17215 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3455 | >20%                    |                 2 |              0.17275 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.3503 |                         |                 2 |              0.17515 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3508 | <5%                     |                10 |              0.03508 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3573 | <5%                     |                 5 |              0.07146 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3622 | >20%                    |                 5 |              0.07244 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.3638 | <5%                     |                10 |              0.03638 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3657 | >20%                    |                 2 |              0.18285 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.3705 | >20%                    |                 5 |              0.0741  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3754 | <5%                     |                 2 |              0.1877  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.3757 |                         |                 5 |              0.07514 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.3838 | >20%                    |                 2 |              0.1919  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3858 | >20%                    |                 2 |              0.1929  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3867 | <5%                     |                 2 |              0.19335 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.3959 | 5-10%                   |                 2 |              0.19795 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4018 | 5-10%                   |                 2 |              0.2009  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4033 | 15-20%                  |                 5 |              0.08066 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4095 | <5%                     |                 2 |              0.20475 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.4153 | >20%                    |                10 |              0.04153 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | <5%                     |                10 |              0.04161 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4214 | 5-10%                   |                 2 |              0.2107  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4413 | >20%                    |                 2 |              0.22065 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4421 | 5-10%                   |                 5 |              0.08842 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.4423 | 5-10%                   |                 2 |              0.22115 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.443  | >20%                    |                10 |              0.0443  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4446 | 10-15%                  |                 2 |              0.2223  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4455 | <5%                     |                 2 |              0.22275 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4468 | >20%                    |                 2 |              0.2234  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4539 | 10-15%                  |                 5 |              0.09078 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4553 | 5-10%                   |                 5 |              0.09106 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      0.4559 | 5-10%                   |                10 |              0.04559 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4565 | 15-20%                  |                 5 |              0.0913  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4595 | <5%                     |                 5 |              0.0919  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      0.4608 |                         |                 5 |              0.09216 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.4699 | <5%                     |                 5 |              0.09398 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.4702 | 15-20%                  |                 5 |              0.09404 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4751 | 15-20%                  |                 5 |              0.09502 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4867 | <5%                     |                 2 |              0.24335 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4873 | 5-10%                   |                 5 |              0.09746 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4878 | 5-10%                   |                 2 |              0.2439  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5137 | 5-10%                   |                 2 |              0.25685 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.516  | 10-15%                  |                 2 |              0.258   |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5208 | 10-15%                  |                 2 |              0.2604  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5225 | <5%                     |                 5 |              0.1045  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.5289 | >20%                    |                 5 |              0.10578 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5313 | >20%                    |                10 |              0.05313 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5338 | <5%                     |                 5 |              0.10676 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5352 | <5%                     |                 5 |              0.10704 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5412 | >20%                    |                 5 |              0.10824 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5412 | >20%                    |                 2 |              0.2706  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5494 | 10-15%                  |                 5 |              0.10988 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5553 | 10-15%                  |                 5 |              0.11106 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5553 | >20%                    |                 5 |              0.11106 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5556 | 10-15%                  |                 5 |              0.11112 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5594 | 5-10%                   |                 5 |              0.11188 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      0.5663 |                         |                10 |              0.05663 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5732 | >20%                    |                 5 |              0.11464 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5733 | >20%                    |                10 |              0.05733 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.5812 | 10-15%                  |                10 |              0.05812 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5847 | 15-20%                  |                 2 |              0.29235 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5941 | >20%                    |                 5 |              0.11882 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.606  | 10-15%                  |                10 |              0.0606  |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.623  | 5-10%                   |                 5 |              0.1246  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6245 | 5-10%                   |                10 |              0.06245 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6751 | 5-10%                   |                10 |              0.06751 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6831 | >20%                    |                10 |              0.06831 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6855 | >20%                    |                10 |              0.06855 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6859 | >20%                    |                 2 |              0.34295 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.6873 | 15-20%                  |                 5 |              0.13746 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6877 | <5%                     |                 5 |              0.13754 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      0.6963 |                         |                10 |              0.06963 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6987 | 5-10%                   |                 5 |              0.13974 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7038 | <5%                     |                 5 |              0.14076 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7043 | <5%                     |                 5 |              0.14086 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.7258 | 10-15%                  |                10 |              0.07258 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7296 | <5%                     |                 5 |              0.14592 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7397 | <5%                     |                 2 |              0.36985 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7429 | 5-10%                   |                10 |              0.07429 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.754  | 15-20%                  |                 5 |              0.1508  |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7634 | >20%                    |                10 |              0.07634 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7812 | <5%                     |                 5 |              0.15624 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7815 | <5%                     |                10 |              0.07815 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.7909 | 5-10%                   |                 5 |              0.15818 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8007 | 5-10%                   |                10 |              0.08007 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8031 | 5-10%                   |                10 |              0.08031 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8206 | 10-15%                  |                10 |              0.08206 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8269 | 5-10%                   |                10 |              0.08269 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8392 | 15-20%                  |                10 |              0.08392 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8413 | 5-10%                   |                10 |              0.08413 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8464 | 15-20%                  |                10 |              0.08464 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8469 | 10-15%                  |                10 |              0.08469 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.8664 | >20%                    |                 5 |              0.17328 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.8745 | >20%                    |                10 |              0.08745 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.9007 | <5%                     |                10 |              0.09007 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.9222 | 5-10%                   |                10 |              0.09222 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9236 | 5-10%                   |                10 |              0.09236 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9699 | <5%                     |                10 |              0.09699 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      0.98   | >20%                    |                10 |              0.098   |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9917 | 5-10%                   |                10 |              0.09917 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0005 | >20%                    |                10 |              0.10005 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0303 | 15-20%                  |                10 |              0.10303 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0368 | >20%                    |                10 |              0.10368 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.039  | <5%                     |                10 |              0.1039  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0402 | 5-10%                   |                10 |              0.10402 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0525 | <5%                     |                10 |              0.10525 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1542 | 15-20%                  |                10 |              0.11542 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      1.1755 | 10-15%                  |                10 |              0.11755 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3555 | >20%                    |                10 |              0.13555 |