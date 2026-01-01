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

Data correct as of 2026-01-01 02:11:57.998796, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0908 | >20%                    |                 2 |              0.0454  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.139  | >20%                    |                 2 |              0.0695  |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1577 | >20%                    |                 2 |              0.07885 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.161  | <5%                     |                 2 |              0.0805  |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1773 | >20%                    |                 5 |              0.03546 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1863 | >20%                    |                 2 |              0.09315 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2241 | >20%                    |                 2 |              0.11205 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2415 | >20%                    |                 2 |              0.12075 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.2521 | >20%                    |                 2 |              0.12605 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2608 | >20%                    |                 2 |              0.1304  |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2692 | >20%                    |                 2 |              0.1346  |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.2697 | >20%                    |                 2 |              0.13485 |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2752 | >20%                    |                 2 |              0.1376  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2758 | 5-10%                   |                10 |              0.02758 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2776 | >20%                    |                 5 |              0.05552 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2804 | 15-20%                  |                 2 |              0.1402  |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.2853 | >20%                    |                10 |              0.02853 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.2929 | >20%                    |                 2 |              0.14645 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2936 | <5%                     |                 2 |              0.1468  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.3007 | 5-10%                   |                 5 |              0.06014 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3046 | >20%                    |                 2 |              0.1523  |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3096 | 5-10%                   |                 2 |              0.1548  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3196 | >20%                    |                 2 |              0.1598  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3196 | >20%                    |                 2 |              0.1598  |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3196 | >20%                    |                 5 |              0.06392 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3313 | >20%                    |                 2 |              0.16565 |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.3399 | >20%                    |                10 |              0.03399 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3408 | <5%                     |                 5 |              0.06816 |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.3483 | 15-20%                  |                 5 |              0.06966 |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3484 | >20%                    |                 5 |              0.06968 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3506 | >20%                    |                 2 |              0.1753  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3534 | 5-10%                   |                10 |              0.03534 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3552 | <5%                     |                 5 |              0.07104 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.359  | >20%                    |                 5 |              0.0718  |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3594 | >20%                    |                 2 |              0.1797  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3617 | >20%                    |                 5 |              0.07234 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3641 | >20%                    |                 2 |              0.18205 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | >20%                    |                10 |              0.03698 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3725 | >20%                    |                 2 |              0.18625 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.373  | >20%                    |                 5 |              0.0746  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3733 | 5-10%                   |                 2 |              0.18665 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.3806 | >20%                    |                 5 |              0.07612 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3808 | 10-15%                  |                 2 |              0.1904  |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.381  | >20%                    |                 5 |              0.0762  |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.3818 | >20%                    |                 2 |              0.1909  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.3821 | >20%                    |                 5 |              0.07642 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.386  | 10-15%                  |                 2 |              0.193   |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.3875 | >20%                    |                 5 |              0.0775  |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3897 | >20%                    |                10 |              0.03897 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3903 | >20%                    |                 2 |              0.19515 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.3913 | <5%                     |                10 |              0.03913 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3963 | >20%                    |                 2 |              0.19815 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4062 | 10-15%                  |                 2 |              0.2031  |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4077 | >20%                    |                 5 |              0.08154 |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4083 | >20%                    |                 2 |              0.20415 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4095 | >20%                    |                10 |              0.04095 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.4124 | >20%                    |                10 |              0.04124 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4143 | >20%                    |                 5 |              0.08286 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.4161 | >20%                    |                 5 |              0.08322 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.4164 | 15-20%                  |                10 |              0.04164 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4166 | >20%                    |                 2 |              0.2083  |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.4166 | <5%                     |                10 |              0.04166 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4173 | <5%                     |                 2 |              0.20865 |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4195 | >20%                    |                 5 |              0.0839  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4202 | >20%                    |                 2 |              0.2101  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4408 | >20%                    |                 5 |              0.08816 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4477 | >20%                    |                 5 |              0.08954 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.4544 | <5%                     |                 2 |              0.2272  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4665 | >20%                    |                 2 |              0.23325 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4737 | >20%                    |                 2 |              0.23685 |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4738 | >20%                    |                 2 |              0.2369  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4761 | >20%                    |                 2 |              0.23805 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4786 | >20%                    |                 2 |              0.2393  |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4805 | >20%                    |                 5 |              0.0961  |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4811 | >20%                    |                 5 |              0.09622 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.487  | 15-20%                  |                 2 |              0.2435  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4929 | >20%                    |                 2 |              0.24645 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4939 | <5%                     |                 5 |              0.09878 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.4983 | 15-20%                  |                 5 |              0.09966 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5043 | >20%                    |                 5 |              0.10086 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.508  | >20%                    |                 5 |              0.1016  |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5123 | >20%                    |                 5 |              0.10246 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5156 | 10-15%                  |                 5 |              0.10312 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.5168 | 15-20%                  |                 2 |              0.2584  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.5175 | >20%                    |                10 |              0.05175 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5298 | >20%                    |                 2 |              0.2649  |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5407 | >20%                    |                 5 |              0.10814 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.5441 | 15-20%                  |                 5 |              0.10882 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.5447 | 15-20%                  |                10 |              0.05447 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5536 | >20%                    |                 5 |              0.11072 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5561 | 15-20%                  |                 5 |              0.11122 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5606 | >20%                    |                 5 |              0.11212 |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5641 | 5-10%                   |                 5 |              0.11282 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5815 | >20%                    |                 2 |              0.29075 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5936 | >20%                    |                10 |              0.05936 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5949 | >20%                    |                 5 |              0.11898 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6037 | 15-20%                  |                 5 |              0.12074 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6105 | 10-15%                  |                 2 |              0.30525 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.6272 | 5-10%                   |                 5 |              0.12544 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6322 | 10-15%                  |                 5 |              0.12644 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.64   | <5%                     |                 5 |              0.128   |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6401 | >20%                    |                10 |              0.06401 |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.6408 | >20%                    |                 2 |              0.3204  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.6425 | >20%                    |                 5 |              0.1285  |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6508 | 15-20%                  |                 5 |              0.13016 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.6601 | 10-15%                  |                 5 |              0.13202 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6641 | >20%                    |                 5 |              0.13282 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.6653 | 15-20%                  |                10 |              0.06653 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6691 | 15-20%                  |                10 |              0.06691 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.6714 | >20%                    |                 2 |              0.3357  |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.6833 | >20%                    |                 2 |              0.34165 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.6885 | >20%                    |                 2 |              0.34425 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.6906 | >20%                    |                 5 |              0.13812 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.6957 | >20%                    |                10 |              0.06957 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6971 | >20%                    |                 5 |              0.13942 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7087 | 5-10%                   |                10 |              0.07087 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.7116 | 15-20%                  |                10 |              0.07116 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.7206 | 15-20%                  |                 2 |              0.3603  |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7253 | 5-10%                   |                 5 |              0.14506 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7278 | >20%                    |                10 |              0.07278 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.7366 | >20%                    |                 2 |              0.3683  |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7371 | >20%                    |                10 |              0.07371 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7434 | >20%                    |                10 |              0.07434 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.746  | <5%                     |                10 |              0.0746  |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7523 | >20%                    |                 2 |              0.37615 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7523 | >20%                    |                10 |              0.07523 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7553 | >20%                    |                10 |              0.07553 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.762  | >20%                    |                 2 |              0.381   |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.7737 | <5%                     |                 2 |              0.38685 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7748 | >20%                    |                10 |              0.07748 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.775  | >20%                    |                 5 |              0.155   |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7896 | >20%                    |                 5 |              0.15792 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7962 | 15-20%                  |                10 |              0.07962 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8071 | >20%                    |                10 |              0.08071 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.809  | 15-20%                  |                10 |              0.0809  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8171 | <5%                     |                10 |              0.08171 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8296 | 15-20%                  |                 5 |              0.16592 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.8335 | 15-20%                  |                10 |              0.08335 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.8421 | 15-20%                  |                10 |              0.08421 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8434 | <5%                     |                10 |              0.08434 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8457 | 10-15%                  |                 5 |              0.16914 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.8507 | >20%                    |                 2 |              0.42535 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.8686 | >20%                    |                 5 |              0.17372 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8852 | >20%                    |                10 |              0.08852 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.8852 | >20%                    |                 2 |              0.4426  |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.8857 | >20%                    |                10 |              0.08857 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9086 | >20%                    |                10 |              0.09086 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9145 | >20%                    |                10 |              0.09145 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9274 | >20%                    |                10 |              0.09274 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.9297 | >20%                    |                 5 |              0.18594 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.9375 | 10-15%                  |                 5 |              0.1875  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.9474 | 15-20%                  |                10 |              0.09474 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.962  | >20%                    |                10 |              0.0962  |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9861 | >20%                    |                10 |              0.09861 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      1.0088 | >20%                    |                 2 |              0.5044  |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      1.0123 | >20%                    |                 5 |              0.20246 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.0128 | 10-15%                  |                10 |              0.10128 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0136 | >20%                    |                10 |              0.10136 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.0208 | >20%                    |                 5 |              0.20416 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.0978 | >20%                    |                10 |              0.10978 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      1.1012 | >20%                    |                 5 |              0.22024 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      1.1037 | <5%                     |                10 |              0.11037 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      1.1398 | 15-20%                  |                10 |              0.11398 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.155  | >20%                    |                10 |              0.1155  |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.1604 | >20%                    |                 2 |              0.5802  |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.2097 | >20%                    |                 5 |              0.24194 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.222  | >20%                    |                 2 |              0.611   |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.2344 | 10-15%                  |                10 |              0.12344 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.2424 | >20%                    |                10 |              0.12424 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2593 | 15-20%                  |                10 |              0.12593 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.2922 | >20%                    |                10 |              0.12922 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.2981 | >20%                    |                 5 |              0.25962 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.3748 | >20%                    |                10 |              0.13748 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.3766 | >20%                    |                 5 |              0.27532 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.3952 | >20%                    |                10 |              0.13952 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.4227 | >20%                    |                10 |              0.14227 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4617 | 10-15%                  |                 5 |              0.29234 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4645 | >20%                    |                 2 |              0.73225 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7204 | >20%                    |                10 |              0.17204 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      1.8263 | 10-15%                  |                10 |              0.18263 |