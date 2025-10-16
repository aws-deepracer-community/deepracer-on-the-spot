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

Data correct as of 2025-10-16 01:46:50.174435, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | 5-10%                   |                 2 |              0.044   |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1302 | >20%                    |                 2 |              0.0651  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1646 | >20%                    |                 5 |              0.03292 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1696 | >20%                    |                 2 |              0.0848  |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2242 | 10-15%                  |                 2 |              0.1121  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2259 | >20%                    |                 2 |              0.11295 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2273 | >20%                    |                 5 |              0.04546 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2328 | >20%                    |                 2 |              0.1164  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2351 | >20%                    |                 2 |              0.11755 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2356 | >20%                    |                 5 |              0.04712 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2478 | >20%                    |                 2 |              0.1239  |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2556 | 5-10%                   |                 2 |              0.1278  |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2624 | 5-10%                   |                 2 |              0.1312  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2631 | >20%                    |                 2 |              0.13155 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2653 | >20%                    |                 2 |              0.13265 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2723 | 10-15%                  |                 2 |              0.13615 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2907 | >20%                    |                 2 |              0.14535 |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3011 | >20%                    |                 2 |              0.15055 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.3151 | >20%                    |                 5 |              0.06302 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3197 | 15-20%                  |                 2 |              0.15985 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3307 | >20%                    |                 2 |              0.16535 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3319 | 10-15%                  |                 2 |              0.16595 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3336 | 15-20%                  |                 2 |              0.1668  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3367 | >20%                    |                 5 |              0.06734 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3426 | >20%                    |                10 |              0.03426 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3441 | >20%                    |                 2 |              0.17205 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3552 | >20%                    |                 2 |              0.1776  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.36   | 5-10%                   |                10 |              0.036   |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3641 | >20%                    |                 2 |              0.18205 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3649 | 15-20%                  |                 2 |              0.18245 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.3749 | >20%                    |                 2 |              0.18745 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3778 | 10-15%                  |                10 |              0.03778 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3833 | >20%                    |                 5 |              0.07666 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3842 | >20%                    |                 2 |              0.1921  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3846 | >20%                    |                10 |              0.03846 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3885 | >20%                    |                 5 |              0.0777  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.39   | >20%                    |                 2 |              0.195   |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.392  | >20%                    |                 5 |              0.0784  |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.399  | >20%                    |                 2 |              0.1995  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4027 | 15-20%                  |                 2 |              0.20135 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4041 | >20%                    |                 2 |              0.20205 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4055 | >20%                    |                 5 |              0.0811  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4092 | 5-10%                   |                 5 |              0.08184 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4167 | 5-10%                   |                 2 |              0.20835 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4168 | >20%                    |                 2 |              0.2084  |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4213 | >20%                    |                 2 |              0.21065 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4275 | >20%                    |                10 |              0.04275 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.428  | >20%                    |                 5 |              0.0856  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4295 | >20%                    |                 2 |              0.21475 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4336 | 5-10%                   |                 2 |              0.2168  |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4392 | >20%                    |                 2 |              0.2196  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4392 | >20%                    |                 5 |              0.08784 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4485 | <5%                     |                 2 |              0.22425 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4555 | >20%                    |                 2 |              0.22775 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4601 | >20%                    |                 2 |              0.23005 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4632 | >20%                    |                 5 |              0.09264 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4681 | >20%                    |                 5 |              0.09362 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4683 | >20%                    |                 5 |              0.09366 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4686 | >20%                    |                 5 |              0.09372 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4718 | 10-15%                  |                 2 |              0.2359  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.472  | 15-20%                  |                 5 |              0.0944  |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4795 | >20%                    |                 2 |              0.23975 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4811 | 10-15%                  |                 2 |              0.24055 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4883 | >20%                    |                 2 |              0.24415 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.4896 | 10-15%                  |                 5 |              0.09792 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5035 | >20%                    |                 5 |              0.1007  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.5045 | >20%                    |                 2 |              0.25225 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5158 | >20%                    |                 5 |              0.10316 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5268 | >20%                    |                 2 |              0.2634  |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5352 | >20%                    |                 5 |              0.10704 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5418 | >20%                    |                 5 |              0.10836 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5443 | >20%                    |                 5 |              0.10886 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5537 | >20%                    |                 5 |              0.11074 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5587 | 5-10%                   |                 2 |              0.27935 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5618 | >20%                    |                 5 |              0.11236 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5732 | >20%                    |                 2 |              0.2866  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5776 | >20%                    |                 5 |              0.11552 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5838 | >20%                    |                 5 |              0.11676 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5889 | 10-15%                  |                 2 |              0.29445 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5957 | >20%                    |                 5 |              0.11914 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6009 | >20%                    |                 5 |              0.12018 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6113 | 15-20%                  |                 2 |              0.30565 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6141 | >20%                    |                 5 |              0.12282 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6188 | >20%                    |                 5 |              0.12376 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.6234 | <5%                     |                10 |              0.06234 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6238 | >20%                    |                 5 |              0.12476 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6318 | 10-15%                  |                 5 |              0.12636 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6348 | >20%                    |                 5 |              0.12696 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6374 | >20%                    |                 5 |              0.12748 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6382 | >20%                    |                10 |              0.06382 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6395 | >20%                    |                 2 |              0.31975 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6416 | 10-15%                  |                 5 |              0.12832 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6448 | 15-20%                  |                 5 |              0.12896 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.648  | >20%                    |                 5 |              0.1296  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6483 | 15-20%                  |                10 |              0.06483 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6531 | 15-20%                  |                 5 |              0.13062 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6551 | 15-20%                  |                 2 |              0.32755 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6619 | >20%                    |                 2 |              0.33095 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6656 | >20%                    |                 5 |              0.13312 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6691 | >20%                    |                 5 |              0.13382 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6727 | >20%                    |                 5 |              0.13454 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6741 | >20%                    |                10 |              0.06741 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6835 | 15-20%                  |                10 |              0.06835 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.6978 | 15-20%                  |                10 |              0.06978 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6987 | >20%                    |                 2 |              0.34935 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7004 | <5%                     |                10 |              0.07004 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7007 | >20%                    |                10 |              0.07007 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7146 | 15-20%                  |                 5 |              0.14292 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7184 | >20%                    |                10 |              0.07184 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7194 | >20%                    |                 5 |              0.14388 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7258 | 15-20%                  |                10 |              0.07258 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.7272 | 15-20%                  |                10 |              0.07272 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7306 | >20%                    |                 5 |              0.14612 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7373 | >20%                    |                10 |              0.07373 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7411 | >20%                    |                 5 |              0.14822 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.748  | >20%                    |                 5 |              0.1496  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7707 | >20%                    |                10 |              0.07707 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.7862 | >20%                    |                 5 |              0.15724 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7922 | >20%                    |                10 |              0.07922 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.795  | >20%                    |                 2 |              0.3975  |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8019 | 15-20%                  |                10 |              0.08019 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8048 | >20%                    |                 5 |              0.16096 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8051 | 5-10%                   |                10 |              0.08051 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8098 | 15-20%                  |                10 |              0.08098 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8169 | 10-15%                  |                 2 |              0.40845 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8175 | >20%                    |                10 |              0.08175 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8212 | 10-15%                  |                 2 |              0.4106  |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.8222 | >20%                    |                10 |              0.08222 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.829  | >20%                    |                 5 |              0.1658  |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.835  | 15-20%                  |                 5 |              0.167   |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8533 | >20%                    |                10 |              0.08533 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8645 | 10-15%                  |                 5 |              0.1729  |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8704 | 15-20%                  |                10 |              0.08704 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8726 | >20%                    |                 5 |              0.17452 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8744 | >20%                    |                10 |              0.08744 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8949 | >20%                    |                 5 |              0.17898 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9019 | <5%                     |                10 |              0.09019 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.908  | >20%                    |                10 |              0.0908  |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9087 | <5%                     |                10 |              0.09087 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9209 | >20%                    |                 2 |              0.46045 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.9284 | 15-20%                  |                10 |              0.09284 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9339 | 10-15%                  |                10 |              0.09339 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9412 | 10-15%                  |                10 |              0.09412 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9489 | >20%                    |                10 |              0.09489 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9684 | 15-20%                  |                10 |              0.09684 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.975  | 5-10%                   |                10 |              0.0975  |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9798 | >20%                    |                 2 |              0.4899  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0003 | 15-20%                  |                10 |              0.10003 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.0065 | >20%                    |                 2 |              0.50325 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      1.01   | 5-10%                   |                10 |              0.101   |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0312 | 10-15%                  |                10 |              0.10312 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0466 | >20%                    |                 5 |              0.20932 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.0763 | >20%                    |                10 |              0.10763 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0884 | 10-15%                  |                 2 |              0.5442  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0908 | 15-20%                  |                10 |              0.10908 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.0964 | >20%                    |                10 |              0.10964 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1022 | >20%                    |                10 |              0.11022 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1237 | >20%                    |                 5 |              0.22474 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1256 | >20%                    |                 5 |              0.22512 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.1305 | >20%                    |                10 |              0.11305 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.131  | <5%                     |                10 |              0.1131  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1319 | 10-15%                  |                10 |              0.11319 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1594 | >20%                    |                10 |              0.11594 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.1684 | >20%                    |                 5 |              0.23368 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1724 | 5-10%                   |                10 |              0.11724 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.1733 | >20%                    |                10 |              0.11733 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.195  | >20%                    |                10 |              0.1195  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.2067 | 5-10%                   |                10 |              0.12067 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2652 | 5-10%                   |                 2 |              0.6326  |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2681 | 10-15%                  |                10 |              0.12681 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2965 | >20%                    |                10 |              0.12965 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.389  | 10-15%                  |                 5 |              0.2778  |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.5843 | >20%                    |                10 |              0.15843 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.6725 | 10-15%                  |                 5 |              0.3345  |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.677  | >20%                    |                10 |              0.1677  |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7016 | >20%                    |                10 |              0.17016 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1423 | 10-15%                  |                10 |              0.21423 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      2.1478 | >20%                    |                10 |              0.21478 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.3613 | 15-20%                  |                10 |              0.23613 |