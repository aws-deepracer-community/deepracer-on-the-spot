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

Data correct as of 2025-01-10 01:40:11.314482, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 10-15%                  |                 2 |              0.0639  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.206  | >20%                    |                 2 |              0.103   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2297 | 5-10%                   |                 2 |              0.11485 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2321 | 10-15%                  |                 2 |              0.11605 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2356 | 15-20%                  |                 2 |              0.1178  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2405 | 15-20%                  |                 2 |              0.12025 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.2428 | <5%                     |                 2 |              0.1214  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.243  | <5%                     |                 2 |              0.1215  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.2445 | 5-10%                   |                 2 |              0.12225 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2523 | 10-15%                  |                 2 |              0.12615 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.259  | 5-10%                   |                 2 |              0.1295  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2848 | <5%                     |                 2 |              0.1424  |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             24 |      0.29   | >20%                    |                 5 |              0.058   |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.2915 | <5%                     |                 5 |              0.0583  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2919 | <5%                     |                 2 |              0.14595 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2985 | >20%                    |                 2 |              0.14925 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2989 | 5-10%                   |                 2 |              0.14945 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3003 | 10-15%                  |                 2 |              0.15015 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3174 | 10-15%                  |                 2 |              0.1587  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3183 | 5-10%                   |                 2 |              0.15915 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.3282 | <5%                     |                 5 |              0.06564 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3331 | <5%                     |                 2 |              0.16655 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.336  | 5-10%                   |                 5 |              0.0672  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 10-15%                  |                10 |              0.03424 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3515 | 5-10%                   |                 5 |              0.0703  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3631 | <5%                     |                 5 |              0.07262 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3648 | <5%                     |                 2 |              0.1824  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.3657 | <5%                     |                 2 |              0.18285 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.366  | >20%                    |                 2 |              0.183   |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3683 | 5-10%                   |                 2 |              0.18415 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3688 | 5-10%                   |                 5 |              0.07376 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.376  | >20%                    |                10 |              0.0376  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3764 | <5%                     |                 5 |              0.07528 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3799 | >20%                    |                10 |              0.03799 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3822 | >20%                    |                 2 |              0.1911  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3939 | 10-15%                  |                 5 |              0.07878 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3991 | 5-10%                   |                 2 |              0.19955 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             24 |      0.4    | 5-10%                   |                 2 |              0.2     |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4042 | >20%                    |                 2 |              0.2021  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4046 | 15-20%                  |                 5 |              0.08092 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4049 | <5%                     |                 2 |              0.20245 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4127 | <5%                     |                 2 |              0.20635 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4185 | 10-15%                  |                 2 |              0.20925 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4226 | 5-10%                   |                 5 |              0.08452 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4228 | 5-10%                   |                 2 |              0.2114  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.4241 | >20%                    |                 2 |              0.21205 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             24 |      0.4254 | 5-10%                   |                 2 |              0.2127  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4256 | 5-10%                   |                10 |              0.04256 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.4459 | 15-20%                  |                10 |              0.04459 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.457  | >20%                    |                 5 |              0.0914  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4617 | <5%                     |                 5 |              0.09234 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4623 | <5%                     |                 2 |              0.23115 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4637 | <5%                     |                 2 |              0.23185 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4657 | 5-10%                   |                 2 |              0.23285 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4692 | 5-10%                   |                 5 |              0.09384 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4739 | >20%                    |                 5 |              0.09478 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4748 | 10-15%                  |                 5 |              0.09496 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4748 | 10-15%                  |                 5 |              0.09496 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4788 | <5%                     |                 5 |              0.09576 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             24 |      0.4829 | 15-20%                  |                 2 |              0.24145 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4909 | <5%                     |                 2 |              0.24545 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4984 | 15-20%                  |                 5 |              0.09968 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4985 | >20%                    |                 5 |              0.0997  |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5018 | <5%                     |                 5 |              0.10036 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5079 | <5%                     |                 5 |              0.10158 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5103 | <5%                     |                 5 |              0.10206 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             24 |      0.5138 | <5%                     |                 2 |              0.2569  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             24 |      0.5216 | <5%                     |                 5 |              0.10432 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.523  | 10-15%                  |                10 |              0.0523  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5293 | 15-20%                  |                 2 |              0.26465 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.5352 | >20%                    |                 5 |              0.10704 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             24 |      0.5361 | 5-10%                   |                 5 |              0.10722 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5413 | >20%                    |                 5 |              0.10826 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5429 | >20%                    |                 5 |              0.10858 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.557  | 5-10%                   |                 5 |              0.1114  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5604 | 10-15%                  |                 5 |              0.11208 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             24 |      0.5667 | 15-20%                  |                 2 |              0.28335 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5668 | 5-10%                   |                 5 |              0.11336 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.572  | 5-10%                   |                 5 |              0.1144  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.578  | 10-15%                  |                 5 |              0.1156  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5854 | 5-10%                   |                 5 |              0.11708 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             24 |      0.5861 | 15-20%                  |                 2 |              0.29305 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5869 | <5%                     |                 5 |              0.11738 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5979 | 10-15%                  |                10 |              0.05979 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6258 | 5-10%                   |                10 |              0.06258 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6492 | 5-10%                   |                10 |              0.06492 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             24 |      0.6704 | <5%                     |                 5 |              0.13408 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             24 |      0.6721 | >20%                    |                 5 |              0.13442 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6732 | 15-20%                  |                10 |              0.06732 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6761 | >20%                    |                10 |              0.06761 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             24 |      0.6781 | >20%                    |                 2 |              0.33905 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7104 | 15-20%                  |                 2 |              0.3552  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7127 | 15-20%                  |                 5 |              0.14254 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7174 | >20%                    |                10 |              0.07174 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7187 | 15-20%                  |                 5 |              0.14374 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             24 |      0.7269 | <5%                     |                 5 |              0.14538 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7273 | <5%                     |                10 |              0.07273 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             24 |      0.7384 | >20%                    |                 5 |              0.14768 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7394 | <5%                     |                10 |              0.07394 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7395 | 10-15%                  |                10 |              0.07395 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7441 | 5-10%                   |                 2 |              0.37205 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             24 |      0.7567 | >20%                    |                10 |              0.07567 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             24 |      0.7673 | >20%                    |                10 |              0.07673 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             24 |      0.7992 | >20%                    |                 5 |              0.15984 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8165 | <5%                     |                10 |              0.08165 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.8221 | <5%                     |                 2 |              0.41105 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8295 | 15-20%                  |                10 |              0.08295 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8301 | 5-10%                   |                10 |              0.08301 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             24 |      0.8313 | >20%                    |                 5 |              0.16626 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8344 | 10-15%                  |                10 |              0.08344 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8401 | >20%                    |                10 |              0.08401 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             24 |      0.8551 | >20%                    |                10 |              0.08551 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8601 | 15-20%                  |                10 |              0.08601 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8655 | 10-15%                  |                10 |              0.08655 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8697 | <5%                     |                10 |              0.08697 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8834 | 5-10%                   |                10 |              0.08834 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8838 | <5%                     |                10 |              0.08838 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8881 | <5%                     |                10 |              0.08881 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8918 | <5%                     |                10 |              0.08918 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             24 |      0.898  | 5-10%                   |                10 |              0.0898  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             24 |      0.9056 | 15-20%                  |                10 |              0.09056 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9391 | <5%                     |                10 |              0.09391 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.9596 | 5-10%                   |                 5 |              0.19192 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      0.9608 | <5%                     |                 2 |              0.4804  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             24 |      0.9708 | 5-10%                   |                10 |              0.09708 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.9776 | 10-15%                  |                 5 |              0.19552 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9946 | 10-15%                  |                 5 |              0.19892 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9949 | >20%                    |                10 |              0.09949 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0026 | 5-10%                   |                10 |              0.10026 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             24 |      1.0062 | <5%                     |                10 |              0.10062 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0333 | <5%                     |                10 |              0.10333 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.0428 | 5-10%                   |                 5 |              0.20856 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0545 | 15-20%                  |                 2 |              0.52725 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             24 |      1.0574 | <5%                     |                10 |              0.10574 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0994 | >20%                    |                10 |              0.10994 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             24 |      1.1776 | 10-15%                  |                10 |              0.11776 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             24 |      1.3237 | >20%                    |                10 |              0.13237 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4197 | 5-10%                   |                10 |              0.14197 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.4721 | 10-15%                  |                10 |              0.14721 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5002 | <5%                     |                10 |              0.15002 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5154 | 15-20%                  |                 5 |              0.30308 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5762 | 5-10%                   |                10 |              0.15762 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.1152 | 10-15%                  |                10 |              0.21152 |