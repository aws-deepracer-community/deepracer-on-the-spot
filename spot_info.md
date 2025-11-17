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

Data correct as of 2025-11-17 01:54:16.421148, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1441 | 15-20%                  |                 2 |              0.07205 |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1582 | >20%                    |                 2 |              0.0791  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1831 | <5%                     |                 2 |              0.09155 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.1973 | 5-10%                   |                 5 |              0.03946 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2051 | >20%                    |                 2 |              0.10255 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2111 | 10-15%                  |                 2 |              0.10555 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2181 | <5%                     |                 2 |              0.10905 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2393 | >20%                    |                 2 |              0.11965 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2418 | >20%                    |                 2 |              0.1209  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.2443 | >20%                    |                 5 |              0.04886 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2451 | >20%                    |                 2 |              0.12255 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2493 | >20%                    |                 2 |              0.12465 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2507 | 15-20%                  |                 2 |              0.12535 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2651 | <5%                     |                 2 |              0.13255 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2693 | >20%                    |                 2 |              0.13465 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.274  | >20%                    |                 5 |              0.0548  |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2754 | >20%                    |                 2 |              0.1377  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.2761 | 10-15%                  |                 5 |              0.05522 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2834 | 10-15%                  |                 2 |              0.1417  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2835 | >20%                    |                 2 |              0.14175 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2839 | >20%                    |                 5 |              0.05678 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.2843 | 10-15%                  |                10 |              0.02843 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2871 | 5-10%                   |                 2 |              0.14355 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3219 | >20%                    |                 5 |              0.06438 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3251 | <5%                     |                 5 |              0.06502 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3257 | >20%                    |                 2 |              0.16285 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3438 | >20%                    |                 2 |              0.1719  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3454 | >20%                    |                 5 |              0.06908 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3518 | 5-10%                   |                 2 |              0.1759  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3526 | 10-15%                  |                 2 |              0.1763  |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3526 | <5%                     |                 2 |              0.1763  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3531 | 10-15%                  |                 2 |              0.17655 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3562 | >20%                    |                 2 |              0.1781  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3632 | <5%                     |                10 |              0.03632 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3633 | >20%                    |                 2 |              0.18165 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3646 | >20%                    |                10 |              0.03646 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3655 | >20%                    |                10 |              0.03655 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3681 | <5%                     |                 2 |              0.18405 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3786 | 15-20%                  |                 2 |              0.1893  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3786 | >20%                    |                 2 |              0.1893  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3816 | 15-20%                  |                 5 |              0.07632 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3822 | >20%                    |                10 |              0.03822 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3908 | 15-20%                  |                 2 |              0.1954  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3955 | 15-20%                  |                10 |              0.03955 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3956 | >20%                    |                 2 |              0.1978  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3966 | >20%                    |                10 |              0.03966 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.399  | >20%                    |                 2 |              0.1995  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4024 | >20%                    |                 2 |              0.2012  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4026 | >20%                    |                 2 |              0.2013  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4044 | 10-15%                  |                 5 |              0.08088 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4065 | >20%                    |                 5 |              0.0813  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4155 | >20%                    |                 5 |              0.0831  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4178 | 5-10%                   |                10 |              0.04178 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4233 | >20%                    |                 5 |              0.08466 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.426  | 15-20%                  |                 2 |              0.213   |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4264 | <5%                     |                 2 |              0.2132  |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4273 | >20%                    |                 5 |              0.08546 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.429  | >20%                    |                 5 |              0.0858  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4307 | >20%                    |                 2 |              0.21535 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4315 | 15-20%                  |                 5 |              0.0863  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4329 | 5-10%                   |                 2 |              0.21645 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4334 | 10-15%                  |                 5 |              0.08668 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.4337 | 10-15%                  |                10 |              0.04337 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4342 | 15-20%                  |                 5 |              0.08684 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4372 | 15-20%                  |                 5 |              0.08744 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4397 | >20%                    |                 5 |              0.08794 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4413 | >20%                    |                 2 |              0.22065 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.4422 | <5%                     |                10 |              0.04422 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4459 | >20%                    |                 5 |              0.08918 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4482 | >20%                    |                 2 |              0.2241  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4526 | 15-20%                  |                 5 |              0.09052 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4562 | >20%                    |                 5 |              0.09124 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4569 | >20%                    |                 2 |              0.22845 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.4581 | >20%                    |                 5 |              0.09162 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4654 | >20%                    |                 5 |              0.09308 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4666 | >20%                    |                 2 |              0.2333  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4696 | >20%                    |                 2 |              0.2348  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.473  | 10-15%                  |                 2 |              0.2365  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4731 | >20%                    |                 5 |              0.09462 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4736 | >20%                    |                 2 |              0.2368  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4768 | >20%                    |                 5 |              0.09536 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.4812 | 10-15%                  |                 2 |              0.2406  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4834 | 10-15%                  |                10 |              0.04834 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.4878 | 5-10%                   |                10 |              0.04878 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4945 | >20%                    |                 5 |              0.0989  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5024 | >20%                    |                 2 |              0.2512  |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5047 | 15-20%                  |                 5 |              0.10094 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.521  | 10-15%                  |                 2 |              0.2605  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5216 | >20%                    |                10 |              0.05216 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5274 | >20%                    |                10 |              0.05274 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.5284 | >20%                    |                 5 |              0.10568 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5301 | 10-15%                  |                 5 |              0.10602 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5335 | 15-20%                  |                 5 |              0.1067  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.5391 | >20%                    |                 2 |              0.26955 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5507 | >20%                    |                 5 |              0.11014 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5534 | >20%                    |                 5 |              0.11068 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5665 | 10-15%                  |                 5 |              0.1133  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.5744 | 15-20%                  |                 5 |              0.11488 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.5767 | >20%                    |                 5 |              0.11534 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.5866 | 10-15%                  |                 5 |              0.11732 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5905 | >20%                    |                 2 |              0.29525 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6032 | 10-15%                  |                 5 |              0.12064 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.605  | >20%                    |                 5 |              0.121   |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6103 | 10-15%                  |                10 |              0.06103 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6103 | 10-15%                  |                 5 |              0.12206 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6148 | >20%                    |                 2 |              0.3074  |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6151 | 5-10%                   |                 5 |              0.12302 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6173 | >20%                    |                 2 |              0.30865 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6266 | 15-20%                  |                10 |              0.06266 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6283 | >20%                    |                 5 |              0.12566 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6297 | >20%                    |                 5 |              0.12594 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.6403 | 10-15%                  |                 5 |              0.12806 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.6505 | 10-15%                  |                 2 |              0.32525 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6513 | >20%                    |                 2 |              0.32565 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6538 | >20%                    |                10 |              0.06538 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6578 | 15-20%                  |                 5 |              0.13156 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6601 | >20%                    |                 2 |              0.33005 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6752 | 15-20%                  |                10 |              0.06752 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.677  | >20%                    |                 5 |              0.1354  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.6819 | >20%                    |                10 |              0.06819 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6897 | 5-10%                   |                 2 |              0.34485 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7025 | >20%                    |                10 |              0.07025 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7052 | 5-10%                   |                10 |              0.07052 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7058 | >20%                    |                10 |              0.07058 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7129 | >20%                    |                10 |              0.07129 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.7214 | >20%                    |                10 |              0.07214 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7326 | >20%                    |                10 |              0.07326 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.733  | 15-20%                  |                10 |              0.0733  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7331 | >20%                    |                 5 |              0.14662 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7374 | >20%                    |                 5 |              0.14748 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7396 | <5%                     |                10 |              0.07396 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.7479 | >20%                    |                 5 |              0.14958 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7498 | >20%                    |                 5 |              0.14996 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.7621 | >20%                    |                 5 |              0.15242 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7643 | >20%                    |                10 |              0.07643 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7667 | >20%                    |                10 |              0.07667 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7689 | 15-20%                  |                 5 |              0.15378 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.7701 | <5%                     |                10 |              0.07701 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7749 | >20%                    |                10 |              0.07749 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7904 | <5%                     |                10 |              0.07904 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7945 | 5-10%                   |                10 |              0.07945 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.796  | >20%                    |                10 |              0.0796  |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8112 | >20%                    |                 2 |              0.4056  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8474 | 10-15%                  |                10 |              0.08474 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8491 | >20%                    |                10 |              0.08491 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8536 | >20%                    |                 5 |              0.17072 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.859  | 15-20%                  |                10 |              0.0859  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8676 | >20%                    |                10 |              0.08676 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.8721 | >20%                    |                10 |              0.08721 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.889  | 10-15%                  |                10 |              0.0889  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9097 | >20%                    |                 5 |              0.18194 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.9219 | >20%                    |                10 |              0.09219 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.9228 | 10-15%                  |                10 |              0.09228 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9231 | <5%                     |                 5 |              0.18462 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9314 | >20%                    |                 2 |              0.4657  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9382 | 10-15%                  |                10 |              0.09382 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.9548 | 15-20%                  |                10 |              0.09548 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.961  | >20%                    |                 2 |              0.4805  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9632 | >20%                    |                10 |              0.09632 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      0.968  | <5%                     |                10 |              0.0968  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      1.007  | >20%                    |                10 |              0.1007  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      1.0092 | >20%                    |                10 |              0.10092 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0171 | >20%                    |                10 |              0.10171 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      1.0187 | <5%                     |                 5 |              0.20374 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.055  | >20%                    |                10 |              0.1055  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.0774 | >20%                    |                 5 |              0.21548 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0804 | >20%                    |                 5 |              0.21608 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.1235 | >20%                    |                10 |              0.11235 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.141  | 15-20%                  |                10 |              0.1141  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.1455 | >20%                    |                10 |              0.11455 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.2602 | >20%                    |                 2 |              0.6301  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2952 | >20%                    |                 5 |              0.25904 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.3312 | >20%                    |                10 |              0.13312 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3448 | 15-20%                  |                10 |              0.13448 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3488 | 10-15%                  |                10 |              0.13488 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4249 | >20%                    |                 2 |              0.71245 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.438  | 5-10%                   |                 5 |              0.2876  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4428 | >20%                    |                10 |              0.14428 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.5651 | >20%                    |                10 |              0.15651 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.056  | 15-20%                  |                10 |              0.2056  |