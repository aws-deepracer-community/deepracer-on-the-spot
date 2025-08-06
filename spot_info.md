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

Data correct as of 2025-08-06 02:08:04.837767, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.105  | >20%                    |                 2 |              0.0525  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | 5-10%                   |                 2 |              0.0639  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1453 | <5%                     |                 5 |              0.02906 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1925 | >20%                    |                 2 |              0.09625 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.206  | >20%                    |                 2 |              0.103   |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 15-20%                  |                 5 |              0.04498 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2374 | 15-20%                  |                 2 |              0.1187  |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2394 | 15-20%                  |                 2 |              0.1197  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2577 | >20%                    |                 2 |              0.12885 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2579 | >20%                    |                 2 |              0.12895 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2714 | 5-10%                   |                 2 |              0.1357  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2718 | >20%                    |                 2 |              0.1359  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2884 | >20%                    |                 2 |              0.1442  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2957 | >20%                    |                 2 |              0.14785 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.312  | 15-20%                  |                 2 |              0.156   |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3182 | <5%                     |                 2 |              0.1591  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3233 | 5-10%                   |                 2 |              0.16165 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3255 | >20%                    |                 2 |              0.16275 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3382 | 5-10%                   |                 2 |              0.1691  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3423 | 15-20%                  |                 2 |              0.17115 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 15-20%                  |                10 |              0.03424 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3432 | 5-10%                   |                 5 |              0.06864 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3543 | >20%                    |                 2 |              0.17715 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3555 | <5%                     |                 2 |              0.17775 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.356  | >20%                    |                 5 |              0.0712  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3686 | >20%                    |                 5 |              0.07372 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3748 | 15-20%                  |                 2 |              0.1874  |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3805 | >20%                    |                 2 |              0.19025 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3845 | >20%                    |                 2 |              0.19225 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.3899 | >20%                    |                 5 |              0.07798 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3924 | <5%                     |                 2 |              0.1962  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3929 | >20%                    |                 2 |              0.19645 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3943 | >20%                    |                 5 |              0.07886 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3995 | 10-15%                  |                 2 |              0.19975 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4112 | >20%                    |                 5 |              0.08224 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4404 | >20%                    |                 5 |              0.08808 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4446 | <5%                     |                 2 |              0.2223  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.447  | <5%                     |                10 |              0.0447  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.449  | >20%                    |                 5 |              0.0898  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4505 | >20%                    |                 2 |              0.22525 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4528 | >20%                    |                 5 |              0.09056 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4569 | 5-10%                   |                 2 |              0.22845 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4592 | 15-20%                  |                 5 |              0.09184 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4665 | >20%                    |                 2 |              0.23325 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4667 | >20%                    |                 5 |              0.09334 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4685 | >20%                    |                 5 |              0.0937  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4723 | 5-10%                   |                 2 |              0.23615 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.4791 | 15-20%                  |                10 |              0.04791 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4829 | >20%                    |                 2 |              0.24145 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4856 | 10-15%                  |                 2 |              0.2428  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4859 | >20%                    |                 2 |              0.24295 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4929 | >20%                    |                 2 |              0.24645 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4945 | >20%                    |                 2 |              0.24725 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4958 | >20%                    |                 2 |              0.2479  |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5006 | >20%                    |                 5 |              0.10012 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5045 | 10-15%                  |                 5 |              0.1009  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5063 | >20%                    |                 2 |              0.25315 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5097 | >20%                    |                 2 |              0.25485 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5139 | 5-10%                   |                 5 |              0.10278 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5185 | >20%                    |                 2 |              0.25925 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.519  | >20%                    |                 2 |              0.2595  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.527  | >20%                    |                 5 |              0.1054  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5392 | >20%                    |                 5 |              0.10784 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5423 | >20%                    |                 5 |              0.10846 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5445 | >20%                    |                 5 |              0.1089  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5492 | 10-15%                  |                 5 |              0.10984 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5505 | 15-20%                  |                 2 |              0.27525 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5579 | <5%                     |                 2 |              0.27895 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5668 | 15-20%                  |                10 |              0.05668 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5706 | >20%                    |                 2 |              0.2853  |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.5725 | <5%                     |                10 |              0.05725 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5742 | >20%                    |                 5 |              0.11484 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5754 | >20%                    |                 2 |              0.2877  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5812 | >20%                    |                 5 |              0.11624 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5889 | >20%                    |                 2 |              0.29445 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5925 | 10-15%                  |                 5 |              0.1185  |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.5933 | >20%                    |                10 |              0.05933 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5972 | 5-10%                   |                 2 |              0.2986  |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6139 | 5-10%                   |                 5 |              0.12278 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6145 | >20%                    |                 5 |              0.1229  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6191 | >20%                    |                 5 |              0.12382 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6356 | 10-15%                  |                 5 |              0.12712 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.636  | >20%                    |                 2 |              0.318   |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6372 | 5-10%                   |                 5 |              0.12744 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6383 | <5%                     |                 5 |              0.12766 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6404 | <5%                     |                 5 |              0.12808 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6425 | >20%                    |                 5 |              0.1285  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.644  | >20%                    |                 5 |              0.1288  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6467 | >20%                    |                 2 |              0.32335 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6708 | >20%                    |                10 |              0.06708 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6837 | >20%                    |                 2 |              0.34185 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6849 | 10-15%                  |                 2 |              0.34245 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6934 | 15-20%                  |                 2 |              0.3467  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6978 | >20%                    |                 5 |              0.13956 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7064 | >20%                    |                 5 |              0.14128 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7081 | >20%                    |                 5 |              0.14162 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7141 | 15-20%                  |                10 |              0.07141 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7146 | >20%                    |                 5 |              0.14292 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7182 | >20%                    |                10 |              0.07182 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7278 | >20%                    |                10 |              0.07278 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7309 | 5-10%                   |                 5 |              0.14618 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7338 | 15-20%                  |                 2 |              0.3669  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7532 | 15-20%                  |                10 |              0.07532 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7532 | >20%                    |                 5 |              0.15064 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7533 | 15-20%                  |                10 |              0.07533 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7543 | 15-20%                  |                 5 |              0.15086 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7579 | <5%                     |                10 |              0.07579 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7676 | >20%                    |                10 |              0.07676 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.776  | >20%                    |                 5 |              0.1552  |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7922 | 15-20%                  |                10 |              0.07922 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7923 | >20%                    |                 5 |              0.15846 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7953 | >20%                    |                 2 |              0.39765 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8095 | >20%                    |                 5 |              0.1619  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8322 | >20%                    |                10 |              0.08322 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8413 | >20%                    |                10 |              0.08413 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.844  | >20%                    |                 5 |              0.1688  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8441 | >20%                    |                10 |              0.08441 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8455 | 5-10%                   |                10 |              0.08455 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8542 | <5%                     |                 5 |              0.17084 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8784 | >20%                    |                 5 |              0.17568 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8839 | >20%                    |                10 |              0.08839 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9011 | 5-10%                   |                 5 |              0.18022 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9016 | 15-20%                  |                10 |              0.09016 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9143 | <5%                     |                10 |              0.09143 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9172 | 5-10%                   |                10 |              0.09172 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9187 | 5-10%                   |                10 |              0.09187 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9238 | 5-10%                   |                10 |              0.09238 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9299 | 5-10%                   |                10 |              0.09299 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9388 | 15-20%                  |                10 |              0.09388 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9389 | 5-10%                   |                10 |              0.09389 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9661 | <5%                     |                10 |              0.09661 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9758 | >20%                    |                 2 |              0.4879  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9772 | <5%                     |                10 |              0.09772 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9885 | 15-20%                  |                 5 |              0.1977  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9914 | >20%                    |                10 |              0.09914 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9929 | 15-20%                  |                10 |              0.09929 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0074 | 15-20%                  |                10 |              0.10074 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.02   | >20%                    |                10 |              0.102   |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      1.0272 | >20%                    |                 5 |              0.20544 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0279 | 15-20%                  |                10 |              0.10279 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0327 | 5-10%                   |                10 |              0.10327 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0712 | >20%                    |                10 |              0.10712 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0715 | 15-20%                  |                10 |              0.10715 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0735 | <5%                     |                10 |              0.10735 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0883 | 5-10%                   |                10 |              0.10883 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1137 | >20%                    |                10 |              0.11137 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1313 | >20%                    |                10 |              0.11313 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1498 | >20%                    |                10 |              0.11498 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1513 | >20%                    |                 2 |              0.57565 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1629 | >20%                    |                10 |              0.11629 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.1653 | >20%                    |                10 |              0.11653 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1767 | >20%                    |                 5 |              0.23534 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2077 | >20%                    |                 5 |              0.24154 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2304 | <5%                     |                 2 |              0.6152  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2392 | >20%                    |                10 |              0.12392 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2429 | >20%                    |                10 |              0.12429 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2485 | >20%                    |                 5 |              0.2497  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3473 | >20%                    |                 2 |              0.67365 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3506 | 5-10%                   |                10 |              0.13506 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3841 | 15-20%                  |                 5 |              0.27682 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3886 | >20%                    |                 5 |              0.27772 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.4669 | >20%                    |                10 |              0.14669 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.4731 | >20%                    |                10 |              0.14731 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.4829 | 5-10%                   |                 2 |              0.74145 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.514  | <5%                     |                10 |              0.1514  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5567 | <5%                     |                 5 |              0.31134 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.605  | >20%                    |                10 |              0.1605  |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.8844 | 10-15%                  |                10 |              0.18844 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1088 | <5%                     |                10 |              0.21088 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2281 | 5-10%                   |                10 |              0.22281 |