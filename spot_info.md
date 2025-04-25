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

Data correct as of 2025-04-25 01:49:46.219934, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.1189 | >20%                    |                 2 |              0.05945 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1243 | >20%                    |                 2 |              0.06215 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1404 | 15-20%                  |                 5 |              0.02808 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.18   | <5%                     |                 2 |              0.09    |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1916 | 15-20%                  |                 2 |              0.0958  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2025 | <5%                     |                 2 |              0.10125 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.211  | >20%                    |                 5 |              0.0422  |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2278 | 15-20%                  |                 2 |              0.1139  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2331 | 15-20%                  |                10 |              0.02331 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.2367 | 5-10%                   |                 5 |              0.04734 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.243  | 5-10%                   |                 2 |              0.1215  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2544 | >20%                    |                 2 |              0.1272  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2667 | 5-10%                   |                 2 |              0.13335 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.2772 | >20%                    |                 5 |              0.05544 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2792 | >20%                    |                 2 |              0.1396  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2885 | 5-10%                   |                 2 |              0.14425 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | 10-15%                  |                10 |              0.02887 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2899 | >20%                    |                 2 |              0.14495 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2904 | 10-15%                  |                 2 |              0.1452  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2906 | <5%                     |                 2 |              0.1453  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2965 | 10-15%                  |                10 |              0.02965 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2973 | <5%                     |                 2 |              0.14865 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3015 | 15-20%                  |                10 |              0.03015 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3059 | 5-10%                   |                 2 |              0.15295 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3076 | >20%                    |                 2 |              0.1538  |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3094 | >20%                    |                 2 |              0.1547  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3113 | <5%                     |                 2 |              0.15565 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3264 | >20%                    |                10 |              0.03264 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3276 | >20%                    |                 2 |              0.1638  |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.3341 | >20%                    |                10 |              0.03341 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.337  | >20%                    |                 2 |              0.1685  |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3417 | 10-15%                  |                10 |              0.03417 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.342  | >20%                    |                 2 |              0.171   |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3494 | >20%                    |                 5 |              0.06988 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3497 | <5%                     |                 5 |              0.06994 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3497 | <5%                     |                 5 |              0.06994 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3515 | >20%                    |                10 |              0.03515 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3521 | 5-10%                   |                 2 |              0.17605 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3548 | >20%                    |                 2 |              0.1774  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3571 | >20%                    |                 2 |              0.17855 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.359  | >20%                    |                 2 |              0.1795  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3607 | >20%                    |                10 |              0.03607 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.364  | >20%                    |                 2 |              0.182   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3657 | >20%                    |                 5 |              0.07314 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3674 | >20%                    |                 5 |              0.07348 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.3695 | 15-20%                  |                10 |              0.03695 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3753 | 10-15%                  |                 2 |              0.18765 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3888 | <5%                     |                 2 |              0.1944  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3926 | 5-10%                   |                 2 |              0.1963  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4114 | 10-15%                  |                 2 |              0.2057  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4129 | >20%                    |                 2 |              0.20645 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4144 | 15-20%                  |                 5 |              0.08288 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4156 | 5-10%                   |                 5 |              0.08312 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4172 | >20%                    |                 2 |              0.2086  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4189 | 10-15%                  |                 2 |              0.20945 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.421  | 5-10%                   |                 5 |              0.0842  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4307 | 5-10%                   |                 5 |              0.08614 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4361 | 15-20%                  |                 5 |              0.08722 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4364 | >20%                    |                 5 |              0.08728 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4395 | >20%                    |                 5 |              0.0879  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4417 | 15-20%                  |                 2 |              0.22085 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4428 | >20%                    |                 2 |              0.2214  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4435 | <5%                     |                 5 |              0.0887  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4448 | >20%                    |                 2 |              0.2224  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4478 | >20%                    |                 5 |              0.08956 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4509 | 10-15%                  |                 5 |              0.09018 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4608 | >20%                    |                 2 |              0.2304  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4688 | >20%                    |                 5 |              0.09376 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4708 | 5-10%                   |                 5 |              0.09416 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4761 | <5%                     |                 5 |              0.09522 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4764 | >20%                    |                 5 |              0.09528 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4797 | 5-10%                   |                 5 |              0.09594 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4869 | >20%                    |                 5 |              0.09738 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4926 | >20%                    |                 2 |              0.2463  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.4928 | 10-15%                  |                10 |              0.04928 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4968 | >20%                    |                 2 |              0.2484  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5032 | >20%                    |                 5 |              0.10064 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5079 | >20%                    |                 5 |              0.10158 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5105 | <5%                     |                 2 |              0.25525 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.5106 | 10-15%                  |                 5 |              0.10212 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5206 | 10-15%                  |                 2 |              0.2603  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5339 | >20%                    |                 2 |              0.26695 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5403 | >20%                    |                 2 |              0.27015 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5492 | 15-20%                  |                 5 |              0.10984 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5528 | >20%                    |                 5 |              0.11056 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5557 | >20%                    |                10 |              0.05557 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.559  | >20%                    |                 5 |              0.1118  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5622 | >20%                    |                 5 |              0.11244 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5632 | >20%                    |                 5 |              0.11264 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5636 | 10-15%                  |                 2 |              0.2818  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.564  | 5-10%                   |                 5 |              0.1128  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.5643 | >20%                    |                10 |              0.05643 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5651 | 15-20%                  |                10 |              0.05651 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5659 | 10-15%                  |                 5 |              0.11318 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.568  | >20%                    |                 5 |              0.1136  |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5691 | >20%                    |                 2 |              0.28455 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5819 | >20%                    |                 2 |              0.29095 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5858 | >20%                    |                 2 |              0.2929  |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5924 | 10-15%                  |                 5 |              0.11848 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5998 | <5%                     |                 5 |              0.11996 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6184 | 15-20%                  |                10 |              0.06184 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6207 | >20%                    |                 2 |              0.31035 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6387 | 10-15%                  |                10 |              0.06387 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6501 | >20%                    |                 5 |              0.13002 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.6554 | 10-15%                  |                10 |              0.06554 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.6603 | >20%                    |                 2 |              0.33015 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6619 | >20%                    |                 5 |              0.13238 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6636 | >20%                    |                 2 |              0.3318  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6638 | >20%                    |                 2 |              0.3319  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6679 | >20%                    |                 5 |              0.13358 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6802 | <5%                     |                10 |              0.06802 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6854 | <5%                     |                 5 |              0.13708 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6979 | 15-20%                  |                 5 |              0.13958 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.7047 | >20%                    |                 2 |              0.35235 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7096 | >20%                    |                10 |              0.07096 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7103 | 5-10%                   |                10 |              0.07103 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7121 | >20%                    |                10 |              0.07121 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7146 | <5%                     |                 5 |              0.14292 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.7152 | >20%                    |                 2 |              0.3576  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.718  | >20%                    |                 5 |              0.1436  |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7269 | 5-10%                   |                10 |              0.07269 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7303 | >20%                    |                 5 |              0.14606 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.7345 | >20%                    |                 5 |              0.1469  |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7473 | <5%                     |                 5 |              0.14946 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7483 | >20%                    |                10 |              0.07483 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7577 | 15-20%                  |                10 |              0.07577 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.7618 | 10-15%                  |                 5 |              0.15236 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7648 | >20%                    |                 5 |              0.15296 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7655 | 15-20%                  |                10 |              0.07655 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7738 | >20%                    |                10 |              0.07738 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7769 | >20%                    |                 5 |              0.15538 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7933 | <5%                     |                10 |              0.07933 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7936 | >20%                    |                10 |              0.07936 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7938 | 10-15%                  |                10 |              0.07938 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8253 | 15-20%                  |                10 |              0.08253 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.8326 | >20%                    |                 2 |              0.4163  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8386 | 10-15%                  |                10 |              0.08386 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8427 | 10-15%                  |                10 |              0.08427 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8441 | >20%                    |                10 |              0.08441 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8472 | 5-10%                   |                10 |              0.08472 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.8496 | 10-15%                  |                10 |              0.08496 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8501 | 10-15%                  |                10 |              0.08501 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8516 | >20%                    |                 2 |              0.4258  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8527 | >20%                    |                10 |              0.08527 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8624 | >20%                    |                10 |              0.08624 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8858 | <5%                     |                10 |              0.08858 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.8915 | <5%                     |                10 |              0.08915 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.8963 | >20%                    |                 5 |              0.17926 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.9124 | 15-20%                  |                10 |              0.09124 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9272 | 15-20%                  |                10 |              0.09272 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.9443 | 10-15%                  |                 5 |              0.18886 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.964  | >20%                    |                10 |              0.0964  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.9885 | >20%                    |                 2 |              0.49425 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.0074 | <5%                     |                10 |              0.10074 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0082 | >20%                    |                10 |              0.10082 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0199 | >20%                    |                10 |              0.10199 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0206 | <5%                     |                 5 |              0.20412 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      1.0349 | >20%                    |                 5 |              0.20698 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0365 | >20%                    |                10 |              0.10365 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0725 | <5%                     |                10 |              0.10725 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0751 | 5-10%                   |                10 |              0.10751 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0855 | >20%                    |                10 |              0.10855 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.0989 | >20%                    |                 2 |              0.54945 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.1024 | <5%                     |                10 |              0.11024 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1435 | >20%                    |                10 |              0.11435 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1667 | >20%                    |                 5 |              0.23334 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.203  | >20%                    |                10 |              0.1203  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.2425 | >20%                    |                 5 |              0.2485  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.2502 | 15-20%                  |                 2 |              0.6251  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.26   | <5%                     |                 5 |              0.252   |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2831 | >20%                    |                10 |              0.12831 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2896 | 10-15%                  |                 2 |              0.6448  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2935 | >20%                    |                 5 |              0.2587  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2959 | >20%                    |                 5 |              0.25918 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3736 | 15-20%                  |                10 |              0.13736 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.3979 | 15-20%                  |                10 |              0.13979 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.4081 | >20%                    |                 2 |              0.70405 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.6127 | >20%                    |                10 |              0.16127 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7828 | >20%                    |                10 |              0.17828 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8004 | 15-20%                  |                10 |              0.18004 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.9505 | <5%                     |                10 |              0.19505 |