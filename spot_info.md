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

Data correct as of 2025-08-08 02:07:57.634796, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0922 | 5-10%                   |                 2 |              0.0461  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1042 | >20%                    |                 2 |              0.0521  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1299 | 5-10%                   |                 2 |              0.06495 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1454 | <5%                     |                 5 |              0.02908 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1477 | <5%                     |                 5 |              0.02954 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | 15-20%                  |                 5 |              0.03194 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | <5%                     |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.2097 | >20%                    |                 2 |              0.10485 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2176 | >20%                    |                 2 |              0.1088  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2249 | 15-20%                  |                 5 |              0.04498 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2273 | 15-20%                  |                 2 |              0.11365 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2418 | 15-20%                  |                 2 |              0.1209  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2528 | >20%                    |                 2 |              0.1264  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2565 | >20%                    |                 2 |              0.12825 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | >20%                    |                 2 |              0.13265 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2669 | <5%                     |                10 |              0.02669 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2707 | 5-10%                   |                 2 |              0.13535 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2923 | >20%                    |                 2 |              0.14615 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3029 | >20%                    |                 2 |              0.15145 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3034 | 15-20%                  |                 2 |              0.1517  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3231 | <5%                     |                 2 |              0.16155 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3256 | 5-10%                   |                 2 |              0.1628  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3341 | 5-10%                   |                 2 |              0.16705 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.345  | 15-20%                  |                10 |              0.0345  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3501 | >20%                    |                 2 |              0.17505 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3508 | 15-20%                  |                 2 |              0.1754  |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3553 | >20%                    |                 5 |              0.07106 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3586 | <5%                     |                 2 |              0.1793  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3588 | >20%                    |                 2 |              0.1794  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3722 | >20%                    |                 5 |              0.07444 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3745 | 15-20%                  |                 2 |              0.18725 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3766 | 5-10%                   |                 5 |              0.07532 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3813 | >20%                    |                 2 |              0.19065 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3814 | 10-15%                  |                 2 |              0.1907  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3823 | >20%                    |                 2 |              0.19115 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3969 | <5%                     |                 2 |              0.19845 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4065 | >20%                    |                 5 |              0.0813  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4074 | >20%                    |                 2 |              0.2037  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4078 | >20%                    |                 5 |              0.08156 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.412  | >20%                    |                 5 |              0.0824  |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4313 | <5%                     |                10 |              0.04313 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4389 | >20%                    |                 5 |              0.08778 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4398 | >20%                    |                 5 |              0.08796 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.442  | >20%                    |                10 |              0.0442  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4457 | <5%                     |                 2 |              0.22285 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4462 | >20%                    |                 5 |              0.08924 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4552 | >20%                    |                 2 |              0.2276  |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4573 | >20%                    |                 5 |              0.09146 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4605 | 5-10%                   |                 2 |              0.23025 |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4617 | >20%                    |                 2 |              0.23085 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4653 | 15-20%                  |                 5 |              0.09306 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4678 | >20%                    |                 5 |              0.09356 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.4714 | >20%                    |                 2 |              0.2357  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4719 | 5-10%                   |                 2 |              0.23595 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4732 | >20%                    |                 2 |              0.2366  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.482  | >20%                    |                 2 |              0.241   |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.492  | >20%                    |                 2 |              0.246   |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4939 | 10-15%                  |                 2 |              0.24695 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4967 | >20%                    |                 2 |              0.24835 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4996 | >20%                    |                 5 |              0.09992 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5058 | >20%                    |                 2 |              0.2529  |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.5061 | 15-20%                  |                10 |              0.05061 |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.51   | 10-15%                  |                 5 |              0.102   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5179 | 5-10%                   |                 5 |              0.10358 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5181 | >20%                    |                 2 |              0.25905 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5191 | >20%                    |                 2 |              0.25955 |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5301 | >20%                    |                 2 |              0.26505 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.5354 | >20%                    |                 5 |              0.10708 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5424 | 10-15%                  |                 5 |              0.10848 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5498 | >20%                    |                 5 |              0.10996 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5498 | >20%                    |                 5 |              0.10996 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.5512 | >20%                    |                 5 |              0.11024 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5571 | 15-20%                  |                 2 |              0.27855 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.565  | >20%                    |                 2 |              0.2825  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5695 | <5%                     |                 2 |              0.28475 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5721 | >20%                    |                 2 |              0.28605 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.574  | 15-20%                  |                10 |              0.0574  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5835 | >20%                    |                 2 |              0.29175 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5877 | >20%                    |                 5 |              0.11754 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5916 | >20%                    |                 5 |              0.11832 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5994 | 5-10%                   |                 2 |              0.2997  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5997 | 10-15%                  |                 5 |              0.11994 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.6034 | <5%                     |                10 |              0.06034 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6117 | >20%                    |                 5 |              0.12234 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6142 | 5-10%                   |                 5 |              0.12284 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6149 | >20%                    |                 5 |              0.12298 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6274 | >20%                    |                 5 |              0.12548 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6286 | 10-15%                  |                 5 |              0.12572 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6368 | >20%                    |                10 |              0.06368 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6373 | >20%                    |                 5 |              0.12746 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6407 | <5%                     |                 5 |              0.12814 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6423 | >20%                    |                 2 |              0.32115 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6475 | 5-10%                   |                 5 |              0.1295  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.651  | <5%                     |                 5 |              0.1302  |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6521 | >20%                    |                 2 |              0.32605 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6815 | 15-20%                  |                 2 |              0.34075 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6835 | >20%                    |                10 |              0.06835 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.684  | >20%                    |                 5 |              0.1368  |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6939 | 10-15%                  |                 2 |              0.34695 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6988 | >20%                    |                 5 |              0.13976 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7051 | >20%                    |                 5 |              0.14102 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7061 | >20%                    |                 2 |              0.35305 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7105 | >20%                    |                 5 |              0.1421  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7218 | >20%                    |                10 |              0.07218 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7235 | >20%                    |                10 |              0.07235 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.7315 | 5-10%                   |                 5 |              0.1463  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7354 | 15-20%                  |                 2 |              0.3677  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.7361 | 15-20%                  |                 5 |              0.14722 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7457 | 15-20%                  |                10 |              0.07457 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7528 | 15-20%                  |                10 |              0.07528 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.757  | <5%                     |                10 |              0.0757  |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7621 | >20%                    |                 5 |              0.15242 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7658 | 15-20%                  |                10 |              0.07658 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7762 | >20%                    |                 5 |              0.15524 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.7776 | >20%                    |                 5 |              0.15552 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7783 | 15-20%                  |                10 |              0.07783 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7792 | >20%                    |                10 |              0.07792 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7945 | >20%                    |                 2 |              0.39725 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8186 | >20%                    |                 5 |              0.16372 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8402 | >20%                    |                10 |              0.08402 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8403 | >20%                    |                 5 |              0.16806 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.851  | >20%                    |                10 |              0.0851  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8525 | >20%                    |                 5 |              0.1705  |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8531 | 5-10%                   |                10 |              0.08531 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8546 | >20%                    |                10 |              0.08546 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8634 | >20%                    |                10 |              0.08634 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.8723 | <5%                     |                 5 |              0.17446 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9056 | 15-20%                  |                10 |              0.09056 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9069 | <5%                     |                10 |              0.09069 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9099 | 5-10%                   |                10 |              0.09099 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.9111 | 5-10%                   |                 5 |              0.18222 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9152 | 5-10%                   |                10 |              0.09152 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.922  | 5-10%                   |                10 |              0.0922  |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9241 | 5-10%                   |                10 |              0.09241 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.9409 | 15-20%                  |                10 |              0.09409 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.9542 | >20%                    |                 5 |              0.19084 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9551 | 5-10%                   |                10 |              0.09551 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9763 | <5%                     |                10 |              0.09763 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9791 | >20%                    |                10 |              0.09791 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9806 | >20%                    |                 2 |              0.4903  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9918 | 15-20%                  |                10 |              0.09918 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9935 | <5%                     |                10 |              0.09935 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0126 | 15-20%                  |                 5 |              0.20252 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0231 | 15-20%                  |                10 |              0.10231 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0256 | 15-20%                  |                10 |              0.10256 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0271 | >20%                    |                10 |              0.10271 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.0296 | 5-10%                   |                10 |              0.10296 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0592 | <5%                     |                10 |              0.10592 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0702 | 15-20%                  |                10 |              0.10702 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0848 | >20%                    |                10 |              0.10848 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0974 | 5-10%                   |                10 |              0.10974 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1216 | >20%                    |                10 |              0.11216 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.136  | >20%                    |                10 |              0.1136  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1535 | >20%                    |                10 |              0.11535 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1607 | >20%                    |                10 |              0.11607 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.162  | >20%                    |                10 |              0.1162  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.1764 | >20%                    |                 2 |              0.5882  |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.1805 | >20%                    |                 5 |              0.2361  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2217 | >20%                    |                 5 |              0.24434 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.222  | <5%                     |                 2 |              0.611   |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2323 | >20%                    |                 5 |              0.24646 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2608 | >20%                    |                10 |              0.12608 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.312  | >20%                    |                 2 |              0.656   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.3378 | >20%                    |                10 |              0.13378 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.3418 | 5-10%                   |                10 |              0.13418 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.3575 | >20%                    |                 5 |              0.2715  |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3984 | 15-20%                  |                 5 |              0.27968 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.4692 | 5-10%                   |                 2 |              0.7346  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.5064 | >20%                    |                10 |              0.15064 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5155 | >20%                    |                10 |              0.15155 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5434 | <5%                     |                10 |              0.15434 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.5548 | <5%                     |                 5 |              0.31096 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.5824 | >20%                    |                10 |              0.15824 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.7945 | 10-15%                  |                10 |              0.17945 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1505 | <5%                     |                10 |              0.21505 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2045 | 5-10%                   |                10 |              0.22045 |