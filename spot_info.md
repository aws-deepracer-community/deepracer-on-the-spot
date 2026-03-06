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

Data correct as of 2026-03-06 02:29:38.502288, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.088  | >20%                    |                 2 |              0.044   |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.103  | 10-15%                  |                 2 |              0.0515  |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1278 | >20%                    |                 2 |              0.0639  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.1394 | 15-20%                  |                 5 |              0.02788 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.141  | >20%                    |                 5 |              0.0282  |
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1511 | >20%                    |                 2 |              0.07555 |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1739 | >20%                    |                 5 |              0.03478 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1765 | >20%                    |                 2 |              0.08825 |
| ap-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.2087 | <5%                     |                 2 |              0.10435 |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.2123 | 15-20%                  |                10 |              0.02123 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.2221 | >20%                    |                 2 |              0.11105 |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2308 | 5-10%                   |                10 |              0.02308 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2314 | 10-15%                  |                 2 |              0.1157  |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2367 | >20%                    |                 2 |              0.11835 |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.245  | >20%                    |                 2 |              0.1225  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.249  | >20%                    |                 2 |              0.1245  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2545 | >20%                    |                 2 |              0.12725 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2592 | 15-20%                  |                 2 |              0.1296  |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2709 | >20%                    |                 5 |              0.05418 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.2869 | <5%                     |                10 |              0.02869 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2892 | >20%                    |                 5 |              0.05784 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.2909 | >20%                    |                 5 |              0.05818 |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.304  | 10-15%                  |                 2 |              0.152   |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3075 | >20%                    |                 2 |              0.15375 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.3078 | 5-10%                   |                 2 |              0.1539  |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.3083 | >20%                    |                 2 |              0.15415 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3084 | >20%                    |                 2 |              0.1542  |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.3097 | >20%                    |                 2 |              0.15485 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3115 | <5%                     |                 5 |              0.0623  |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.3145 | >20%                    |                 2 |              0.15725 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3159 | >20%                    |                 2 |              0.15795 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.3224 | >20%                    |                 5 |              0.06448 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.3254 | 15-20%                  |                 2 |              0.1627  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.3364 | 5-10%                   |                10 |              0.03364 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.3455 | >20%                    |                 5 |              0.0691  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3476 | >20%                    |                 5 |              0.06952 |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.348  | >20%                    |                 5 |              0.0696  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.3517 | 10-15%                  |                 2 |              0.17585 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3546 | 5-10%                   |                 2 |              0.1773  |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3548 | 15-20%                  |                 2 |              0.1774  |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.3598 | >20%                    |                 5 |              0.07196 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.3604 | >20%                    |                10 |              0.03604 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.3639 | <5%                     |                 5 |              0.07278 |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.3727 | <5%                     |                 2 |              0.18635 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3727 | <5%                     |                 5 |              0.07454 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3731 | >20%                    |                 5 |              0.07462 |
| ap-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.3769 | <5%                     |                10 |              0.03769 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.3781 | <5%                     |                 2 |              0.18905 |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.3811 | >20%                    |                10 |              0.03811 |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3814 | 5-10%                   |                 2 |              0.1907  |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3835 | 5-10%                   |                 2 |              0.19175 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.39   | >20%                    |                 2 |              0.195   |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.3987 | <5%                     |                 5 |              0.07974 |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4004 | >20%                    |                 2 |              0.2002  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4036 | 15-20%                  |                 5 |              0.08072 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.4068 | 5-10%                   |                 2 |              0.2034  |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.407  | >20%                    |                 2 |              0.2035  |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4138 | 10-15%                  |                 5 |              0.08276 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4144 | 15-20%                  |                 2 |              0.2072  |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4154 | 5-10%                   |                 5 |              0.08308 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.4165 | 15-20%                  |                 5 |              0.0833  |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4168 | >20%                    |                 2 |              0.2084  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4182 | >20%                    |                 2 |              0.2091  |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.4187 | 5-10%                   |                 5 |              0.08374 |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4262 | >20%                    |                 2 |              0.2131  |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.4285 | >20%                    |                 5 |              0.0857  |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.4299 | >20%                    |                10 |              0.04299 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.4338 | 5-10%                   |                 5 |              0.08676 |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.4345 | >20%                    |                 5 |              0.0869  |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4384 | 5-10%                   |                 2 |              0.2192  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4386 | >20%                    |                 2 |              0.2193  |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.4402 | 15-20%                  |                10 |              0.04402 |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.4409 | 15-20%                  |                 5 |              0.08818 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4448 | 15-20%                  |                 2 |              0.2224  |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.445  | <5%                     |                10 |              0.0445  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4453 | <5%                     |                 2 |              0.22265 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.45   | 15-20%                  |                 2 |              0.225   |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4647 | >20%                    |                 5 |              0.09294 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4688 | 5-10%                   |                 2 |              0.2344  |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      0.4783 | 15-20%                  |                10 |              0.04783 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      0.4797 | <5%                     |                 5 |              0.09594 |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4836 | >20%                    |                 5 |              0.09672 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.4855 | >20%                    |                10 |              0.04855 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.4947 | >20%                    |                 5 |              0.09894 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5004 | >20%                    |                 5 |              0.10008 |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.5089 | >20%                    |                 2 |              0.25445 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.5125 | >20%                    |                 2 |              0.25625 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      0.5136 | >20%                    |                10 |              0.05136 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5186 | >20%                    |                 5 |              0.10372 |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.5198 | >20%                    |                 2 |              0.2599  |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5209 | 15-20%                  |                 5 |              0.10418 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5261 | >20%                    |                 5 |              0.10522 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5371 | >20%                    |                 5 |              0.10742 |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.5373 | >20%                    |                10 |              0.05373 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5375 | >20%                    |                 2 |              0.26875 |
| me-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.5486 |                         |                 2 |              0.2743  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5518 | <5%                     |                 5 |              0.11036 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5543 | >20%                    |                10 |              0.05543 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.5579 | >20%                    |                 2 |              0.27895 |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5674 | >20%                    |                 5 |              0.11348 |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      0.5695 | 15-20%                  |                10 |              0.05695 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.577  | 15-20%                  |                10 |              0.0577  |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.5785 | 5-10%                   |                 2 |              0.28925 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.5853 | >20%                    |                 2 |              0.29265 |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5902 | >20%                    |                 5 |              0.11804 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5939 | 5-10%                   |                 5 |              0.11878 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      0.5952 | <5%                     |                10 |              0.05952 |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6017 | >20%                    |                10 |              0.06017 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6091 | >20%                    |                10 |              0.06091 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.6103 | >20%                    |                 5 |              0.12206 |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.6103 | >20%                    |                10 |              0.06103 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6121 | 5-10%                   |                 5 |              0.12242 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.6184 | 5-10%                   |                 2 |              0.3092  |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      0.6215 | <5%                     |                10 |              0.06215 |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6229 | 5-10%                   |                 5 |              0.12458 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6242 | >20%                    |                 2 |              0.3121  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.628  | 15-20%                  |                 2 |              0.314   |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.6324 | >20%                    |                 5 |              0.12648 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6326 | >20%                    |                 5 |              0.12652 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6387 | >20%                    |                 5 |              0.12774 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.6481 | 10-15%                  |                 5 |              0.12962 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.6533 | >20%                    |                10 |              0.06533 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.6691 | >20%                    |                 2 |              0.33455 |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.6723 | <5%                     |                10 |              0.06723 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6769 | >20%                    |                 5 |              0.13538 |
| me-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      0.6946 |                         |                 5 |              0.13892 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.6995 | <5%                     |                10 |              0.06995 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7021 | >20%                    |                 5 |              0.14042 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7051 | >20%                    |                10 |              0.07051 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.7166 | >20%                    |                10 |              0.07166 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.7299 | >20%                    |                 5 |              0.14598 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.7429 | >20%                    |                10 |              0.07429 |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.7454 | >20%                    |                 5 |              0.14908 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.747  | >20%                    |                10 |              0.0747  |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.747  | 10-15%                  |                10 |              0.0747  |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.7612 | <5%                     |                10 |              0.07612 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7724 | >20%                    |                10 |              0.07724 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.7797 | >20%                    |                 2 |              0.38985 |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7946 | <5%                     |                10 |              0.07946 |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8027 | >20%                    |                 5 |              0.16054 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.8065 | <5%                     |                 5 |              0.1613  |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.8065 | >20%                    |                 5 |              0.1613  |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8083 | >20%                    |                 5 |              0.16166 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.8172 | <5%                     |                10 |              0.08172 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8183 | >20%                    |                10 |              0.08183 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8303 | >20%                    |                10 |              0.08303 |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.8442 | 15-20%                  |                10 |              0.08442 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.846  | <5%                     |                 5 |              0.1692  |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.8491 | >20%                    |                 5 |              0.16982 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      0.8615 | 15-20%                  |                10 |              0.08615 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.8629 | 10-15%                  |                 2 |              0.43145 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8635 | >20%                    |                10 |              0.08635 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.8677 | >20%                    |                10 |              0.08677 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8817 | >20%                    |                10 |              0.08817 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.8901 | 10-15%                  |                10 |              0.08901 |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.8989 | >20%                    |                 5 |              0.17978 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.9034 | 5-10%                   |                10 |              0.09034 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      0.9168 | >20%                    |                 5 |              0.18336 |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.9321 | >20%                    |                 2 |              0.46605 |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      0.9359 | >20%                    |                 5 |              0.18718 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.9478 | <5%                     |                10 |              0.09478 |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.9559 | >20%                    |                 2 |              0.47795 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.9581 | >20%                    |                10 |              0.09581 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9642 | 5-10%                   |                10 |              0.09642 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.972  | >20%                    |                10 |              0.0972  |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      0.9753 | >20%                    |                 2 |              0.48765 |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.9766 | >20%                    |                10 |              0.09766 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.9842 | 5-10%                   |                 5 |              0.19684 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.0143 | 10-15%                  |                10 |              0.10143 |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.0154 | 5-10%                   |                10 |              0.10154 |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      1.0302 | >20%                    |                10 |              0.10302 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0462 | >20%                    |                10 |              0.10462 |
| me-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.057  |                         |                10 |              0.1057  |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1158 | 15-20%                  |                10 |              0.11158 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.1408 | >20%                    |                10 |              0.11408 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1914 | 10-15%                  |                 5 |              0.23828 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      1.2315 | <5%                     |                 2 |              0.61575 |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.2601 | >20%                    |                10 |              0.12601 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2816 | <5%                     |                10 |              0.12816 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.3691 | 15-20%                  |                10 |              0.13691 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      1.3794 | >20%                    |                 2 |              0.6897  |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.4055 | 10-15%                  |                 5 |              0.2811  |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.4192 | >20%                    |                 2 |              0.7096  |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.4405 | >20%                    |                 5 |              0.2881  |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.5013 | >20%                    |                 2 |              0.75065 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.5923 | >20%                    |                10 |              0.15923 |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7925 | >20%                    |                10 |              0.17925 |
| ap-east-1      | g5.4xlarge     |     16 |         64 |             22 |      2.1066 | <5%                     |                 5 |              0.42132 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.2553 | 10-15%                  |                10 |              0.22553 |