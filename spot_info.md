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

Data correct as of 2025-10-27 01:58:01.192606, the DeepRacer community provides no guarantee of accuracy and you should monitor your own spend

| Region         | InstanceType   |   vCPU |   RAM (GB) |   GPU RAM (GB) |   SpotPrice | InterruptionFrequency   |   NumberOfWorkers |   PricePerWorkerHour |
|:---------------|:---------------|-------:|-----------:|---------------:|------------:|:------------------------|------------------:|---------------------:|
| af-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.0998 | >20%                    |                 2 |              0.0499  |
| eu-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.1099 | 5-10%                   |                 2 |              0.05495 |
| sa-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.1304 | >20%                    |                 2 |              0.0652  |
| af-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1597 | >20%                    |                 5 |              0.03194 |
| eu-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.1608 | >20%                    |                 5 |              0.03216 |
| ap-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.1854 | 10-15%                  |                 5 |              0.03708 |
| ap-southeast-3 | g5.2xlarge     |      8 |         32 |             22 |      0.1888 | >20%                    |                 2 |              0.0944  |
| ap-southeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.1918 | 10-15%                  |                 2 |              0.0959  |
| sa-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.207  | >20%                    |                 2 |              0.1035  |
| sa-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.2342 | >20%                    |                 5 |              0.04684 |
| ap-southeast-3 | g5.4xlarge     |     16 |         64 |             22 |      0.2367 | >20%                    |                 5 |              0.04734 |
| eu-north-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2477 | >20%                    |                 2 |              0.12385 |
| ap-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.251  | 10-15%                  |                 2 |              0.1255  |
| ap-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2537 | >20%                    |                 2 |              0.12685 |
| eu-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2547 | <5%                     |                10 |              0.02547 |
| eu-west-3      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2614 | >20%                    |                 2 |              0.1307  |
| eu-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2625 | 10-15%                  |                 2 |              0.13125 |
| ca-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2625 | 5-10%                   |                 2 |              0.13125 |
| us-east-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2655 | >20%                    |                 2 |              0.13275 |
| eu-central-1   | g4dn.2xlarge   |      8 |         32 |             16 |      0.2702 | >20%                    |                 2 |              0.1351  |
| us-east-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.2722 | >20%                    |                 2 |              0.1361  |
| sa-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.276  | >20%                    |                 5 |              0.0552  |
| us-east-2      | g6.2xlarge     |      8 |         32 |             22 |      0.2823 | >20%                    |                 2 |              0.14115 |
| me-south-1     | g4dn.2xlarge   |      8 |         32 |             16 |      0.2824 | 5-10%                   |                 2 |              0.1412  |
| ap-southeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.2858 | >20%                    |                 5 |              0.05716 |
| af-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.2887 | <5%                     |                10 |              0.02887 |
| sa-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.3011 | 15-20%                  |                 2 |              0.15055 |
| ap-southeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3317 | 15-20%                  |                 2 |              0.16585 |
| us-west-2      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3328 | >20%                    |                 2 |              0.1664  |
| ap-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3351 | <5%                     |                10 |              0.03351 |
| eu-south-2     | g6.2xlarge     |      8 |         32 |             22 |      0.3395 | >20%                    |                 2 |              0.16975 |
| sa-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.3424 | 5-10%                   |                10 |              0.03424 |
| ap-northeast-2 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3461 | >20%                    |                 2 |              0.17305 |
| eu-north-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3468 | >20%                    |                 2 |              0.1734  |
| us-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.3554 | >20%                    |                 5 |              0.07108 |
| ca-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.3678 | <5%                     |                10 |              0.03678 |
| ap-south-1     | g6.2xlarge     |      8 |         32 |             22 |      0.3693 | 10-15%                  |                 2 |              0.18465 |
| sa-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.3698 | 10-15%                  |                10 |              0.03698 |
| me-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.3741 | >20%                    |                 5 |              0.07482 |
| ap-southeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3836 | 15-20%                  |                 2 |              0.1918  |
| ap-northeast-1 | g4dn.2xlarge   |      8 |         32 |             16 |      0.3845 | >20%                    |                 2 |              0.19225 |
| ap-southeast-3 | g5.8xlarge     |     32 |        128 |             22 |      0.3883 | >20%                    |                10 |              0.03883 |
| eu-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.3919 | >20%                    |                 2 |              0.19595 |
| me-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.393  | >20%                    |                 2 |              0.1965  |
| eu-west-3      | g6.2xlarge     |      8 |         32 |             22 |      0.4058 | 15-20%                  |                 2 |              0.2029  |
| eu-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.4102 | >20%                    |                 2 |              0.2051  |
| ap-northeast-3 | g4dn.2xlarge   |      8 |         32 |             16 |      0.4108 | >20%                    |                 2 |              0.2054  |
| us-east-1      | g5.2xlarge     |      8 |         32 |             22 |      0.4122 | >20%                    |                 2 |              0.2061  |
| us-east-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4154 | >20%                    |                 2 |              0.2077  |
| sa-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.4161 | >20%                    |                10 |              0.04161 |
| eu-north-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4218 | >20%                    |                 5 |              0.08436 |
| ap-south-1     | g4dn.4xlarge   |     16 |         64 |             16 |      0.4269 | >20%                    |                 5 |              0.08538 |
| ca-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.4284 | 5-10%                   |                 5 |              0.08568 |
| eu-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4297 | 5-10%                   |                 2 |              0.21485 |
| il-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4349 | <5%                     |                 2 |              0.21745 |
| eu-north-1     | g6.4xlarge     |     16 |         64 |             22 |      0.4363 | >20%                    |                 5 |              0.08726 |
| ap-southeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.4373 | 5-10%                   |                10 |              0.04373 |
| eu-north-1     | g5.2xlarge     |      8 |         32 |             22 |      0.4417 | >20%                    |                 2 |              0.22085 |
| us-east-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4423 | >20%                    |                 5 |              0.08846 |
| ap-northeast-2 | g6.2xlarge     |      8 |         32 |             22 |      0.4436 | >20%                    |                 2 |              0.2218  |
| us-west-1      | g4dn.2xlarge   |      8 |         32 |             16 |      0.4447 | 5-10%                   |                 2 |              0.22235 |
| ap-south-1     | g6.4xlarge     |     16 |         64 |             22 |      0.46   | >20%                    |                 5 |              0.092   |
| eu-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4618 | >20%                    |                 5 |              0.09236 |
| us-east-1      | g6.2xlarge     |      8 |         32 |             22 |      0.4668 | >20%                    |                 2 |              0.2334  |
| us-east-2      | g6.4xlarge     |     16 |         64 |             22 |      0.4683 | >20%                    |                 5 |              0.09366 |
| ca-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.4692 | >20%                    |                 2 |              0.2346  |
| us-west-2      | g4dn.4xlarge   |     16 |         64 |             16 |      0.4745 | >20%                    |                 5 |              0.0949  |
| eu-west-3      | g4dn.4xlarge   |     16 |         64 |             16 |      0.477  | >20%                    |                 5 |              0.0954  |
| us-west-2      | g6.2xlarge     |      8 |         32 |             22 |      0.4775 | >20%                    |                 2 |              0.23875 |
| eu-central-2   | g6.2xlarge     |      8 |         32 |             22 |      0.4843 | 10-15%                  |                 2 |              0.24215 |
| me-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.487  | >20%                    |                 5 |              0.0974  |
| us-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4962 | >20%                    |                 2 |              0.2481  |
| eu-south-2     | g6.4xlarge     |     16 |         64 |             22 |      0.4967 | 15-20%                  |                 5 |              0.09934 |
| eu-west-2      | g5.2xlarge     |      8 |         32 |             22 |      0.4977 | >20%                    |                 2 |              0.24885 |
| us-east-1      | g6.4xlarge     |     16 |         64 |             22 |      0.5022 | >20%                    |                 5 |              0.10044 |
| ap-south-1     | g5.2xlarge     |      8 |         32 |             22 |      0.5055 | >20%                    |                 2 |              0.25275 |
| ca-central-1   | g6.2xlarge     |      8 |         32 |             22 |      0.5074 | 10-15%                  |                 2 |              0.2537  |
| us-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.5131 | >20%                    |                10 |              0.05131 |
| ca-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.5174 | 15-20%                  |                10 |              0.05174 |
| ap-southeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5308 | >20%                    |                 5 |              0.10616 |
| eu-central-1   | g4dn.4xlarge   |     16 |         64 |             16 |      0.5351 | >20%                    |                 5 |              0.10702 |
| us-east-1      | g5.4xlarge     |     16 |         64 |             22 |      0.5388 | 15-20%                  |                 5 |              0.10776 |
| ap-northeast-2 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5429 | >20%                    |                 5 |              0.10858 |
| ap-northeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5439 | 5-10%                   |                 2 |              0.27195 |
| ap-northeast-1 | g6.2xlarge     |      8 |         32 |             22 |      0.5474 | >20%                    |                 2 |              0.2737  |
| eu-north-1     | g5.4xlarge     |     16 |         64 |             22 |      0.5612 | >20%                    |                 5 |              0.11224 |
| eu-west-3      | g6.4xlarge     |     16 |         64 |             22 |      0.573  | 10-15%                  |                 5 |              0.1146  |
| ap-southeast-2 | g5.2xlarge     |      8 |         32 |             22 |      0.5757 | >20%                    |                 2 |              0.28785 |
| us-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.5757 | >20%                    |                 5 |              0.11514 |
| ca-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.5773 | >20%                    |                 5 |              0.11546 |
| ap-northeast-2 | g6.4xlarge     |     16 |         64 |             22 |      0.5781 | >20%                    |                 5 |              0.11562 |
| ap-southeast-5 | g6.2xlarge     |      8 |         32 |             22 |      0.5791 | 15-20%                  |                 2 |              0.28955 |
| ca-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.5847 | >20%                    |                 5 |              0.11694 |
| ap-northeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.5869 | >20%                    |                 5 |              0.11738 |
| ap-south-1     | g5.4xlarge     |     16 |         64 |             22 |      0.6075 | >20%                    |                 5 |              0.1215  |
| eu-central-1   | g6.4xlarge     |     16 |         64 |             22 |      0.6142 | >20%                    |                 5 |              0.12284 |
| ap-southeast-1 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6265 | >20%                    |                 5 |              0.1253  |
| eu-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6266 | 10-15%                  |                 5 |              0.12532 |
| eu-central-2   | g6.4xlarge     |     16 |         64 |             22 |      0.6348 | 10-15%                  |                 5 |              0.12696 |
| eu-west-1      | g5.2xlarge     |      8 |         32 |             22 |      0.6368 | 15-20%                  |                 2 |              0.3184  |
| ap-northeast-3 | g4dn.4xlarge   |     16 |         64 |             16 |      0.6406 | >20%                    |                 5 |              0.12812 |
| eu-central-1   | g5.2xlarge     |      8 |         32 |             22 |      0.6435 | >20%                    |                 2 |              0.32175 |
| us-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6515 | >20%                    |                 5 |              0.1303  |
| eu-west-2      | g5.4xlarge     |     16 |         64 |             22 |      0.6568 | >20%                    |                 5 |              0.13136 |
| eu-west-2      | g6.4xlarge     |     16 |         64 |             22 |      0.6573 | 15-20%                  |                 5 |              0.13146 |
| eu-north-1     | g6.8xlarge     |     32 |        128 |             22 |      0.663  | >20%                    |                10 |              0.0663  |
| ap-northeast-1 | g5.2xlarge     |      8 |         32 |             22 |      0.6701 | >20%                    |                 2 |              0.33505 |
| us-west-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6721 | >20%                    |                 5 |              0.13442 |
| eu-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.6843 | >20%                    |                 5 |              0.13686 |
| me-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.6877 | <5%                     |                10 |              0.06877 |
| sa-east-1      | g4dn.4xlarge   |     16 |         64 |             16 |      0.6923 | >20%                    |                 5 |              0.13846 |
| ap-northeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.6985 | >20%                    |                 5 |              0.1397  |
| us-east-1      | g4dn.8xlarge   |     32 |        128 |             16 |      0.6995 | >20%                    |                10 |              0.06995 |
| us-east-2      | g5.4xlarge     |     16 |         64 |             22 |      0.7    | >20%                    |                 5 |              0.14    |
| eu-south-2     | g6.8xlarge     |     32 |        128 |             22 |      0.7068 | 15-20%                  |                10 |              0.07068 |
| us-east-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7093 | 15-20%                  |                10 |              0.07093 |
| ap-south-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7121 | >20%                    |                10 |              0.07121 |
| us-east-1      | g6e.2xlarge    |      8 |         64 |             45 |      0.7126 | 10-15%                  |                 2 |              0.3563  |
| eu-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7135 | 15-20%                  |                10 |              0.07135 |
| me-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.7229 | >20%                    |                 5 |              0.14458 |
| us-east-2      | g6e.2xlarge    |      8 |         64 |             45 |      0.7234 | >20%                    |                 2 |              0.3617  |
| eu-north-1     | g4dn.8xlarge   |     32 |        128 |             16 |      0.7235 | >20%                    |                10 |              0.07235 |
| ap-northeast-1 | g6.4xlarge     |     16 |         64 |             22 |      0.7243 | 15-20%                  |                 5 |              0.14486 |
| il-central-1   | g5.4xlarge     |     16 |         64 |             22 |      0.755  | >20%                    |                 5 |              0.151   |
| eu-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.7567 | >20%                    |                10 |              0.07567 |
| us-east-1      | g6.8xlarge     |     32 |        128 |             22 |      0.7609 | >20%                    |                10 |              0.07609 |
| me-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.7619 | >20%                    |                10 |              0.07619 |
| ap-southeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      0.7653 | 15-20%                  |                10 |              0.07653 |
| eu-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.7687 | 15-20%                  |                10 |              0.07687 |
| us-east-2      | g6e.4xlarge    |     16 |        128 |             45 |      0.7825 | >20%                    |                 5 |              0.1565  |
| us-east-1      | g5.8xlarge     |     32 |        128 |             22 |      0.7867 | >20%                    |                10 |              0.07867 |
| ap-southeast-5 | g6.4xlarge     |     16 |         64 |             22 |      0.8103 | 15-20%                  |                 5 |              0.16206 |
| us-east-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8154 | >20%                    |                10 |              0.08154 |
| us-west-2      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8378 | >20%                    |                10 |              0.08378 |
| il-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.8381 | <5%                     |                10 |              0.08381 |
| eu-west-1      | g5.4xlarge     |     16 |         64 |             22 |      0.8394 | >20%                    |                 5 |              0.16788 |
| us-east-1      | g6e.4xlarge    |     16 |        128 |             45 |      0.8426 | 10-15%                  |                 5 |              0.16852 |
| eu-north-1     | g5.8xlarge     |     32 |        128 |             22 |      0.8456 | 15-20%                  |                10 |              0.08456 |
| eu-west-3      | g4dn.8xlarge   |     32 |        128 |             16 |      0.8466 | >20%                    |                10 |              0.08466 |
| ca-central-1   | g6.8xlarge     |     32 |        128 |             22 |      0.8474 | <5%                     |                10 |              0.08474 |
| ap-south-1     | g6.8xlarge     |     32 |        128 |             22 |      0.8561 | 5-10%                   |                10 |              0.08561 |
| us-east-2      | g5.8xlarge     |     32 |        128 |             22 |      0.8607 | 15-20%                  |                10 |              0.08607 |
| eu-south-2     | g6e.2xlarge    |      8 |         64 |             45 |      0.8768 | 10-15%                  |                 2 |              0.4384  |
| ap-northeast-1 | g5.4xlarge     |     16 |         64 |             22 |      0.8833 | >20%                    |                 5 |              0.17666 |
| ap-southeast-2 | g5.4xlarge     |     16 |         64 |             22 |      0.8862 | >20%                    |                 5 |              0.17724 |
| us-west-2      | g6.8xlarge     |     32 |        128 |             22 |      0.9023 | >20%                    |                10 |              0.09023 |
| eu-central-1   | g5.8xlarge     |     32 |        128 |             22 |      0.9071 | >20%                    |                10 |              0.09071 |
| eu-west-3      | g6.8xlarge     |     32 |        128 |             22 |      0.9148 | 15-20%                  |                10 |              0.09148 |
| eu-north-1     | g6e.2xlarge    |      8 |         64 |             45 |      0.9194 | >20%                    |                 2 |              0.4597  |
| ap-northeast-2 | g6.8xlarge     |     32 |        128 |             22 |      0.9356 | 10-15%                  |                10 |              0.09356 |
| us-west-2      | g5.8xlarge     |     32 |        128 |             22 |      0.956  | 10-15%                  |                10 |              0.0956  |
| ap-northeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9595 | 15-20%                  |                10 |              0.09595 |
| ap-southeast-2 | g4dn.8xlarge   |     32 |        128 |             16 |      0.9624 | 10-15%                  |                10 |              0.09624 |
| eu-central-1   | g6e.2xlarge    |      8 |         64 |             45 |      0.9648 | >20%                    |                 2 |              0.4824  |
| eu-central-1   | g4dn.8xlarge   |     32 |        128 |             16 |      0.9981 | >20%                    |                10 |              0.09981 |
| us-west-2      | g6e.2xlarge    |      8 |         64 |             45 |      1.008  | >20%                    |                 2 |              0.504   |
| eu-north-1     | g6e.4xlarge    |     16 |        128 |             45 |      1.013  | >20%                    |                 5 |              0.2026  |
| eu-central-2   | g6.8xlarge     |     32 |        128 |             22 |      1.0149 | 5-10%                   |                10 |              0.10149 |
| us-east-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.0189 | >20%                    |                10 |              0.10189 |
| us-east-1      | g6e.8xlarge    |     32 |        256 |             45 |      1.0211 | >20%                    |                10 |              0.10211 |
| ap-northeast-2 | g6e.2xlarge    |      8 |         64 |             45 |      1.0781 | 10-15%                  |                 2 |              0.53905 |
| ap-south-1     | g5.8xlarge     |     32 |        128 |             22 |      1.0848 | 15-20%                  |                10 |              0.10848 |
| ap-southeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.0876 | >20%                    |                10 |              0.10876 |
| eu-west-2      | g5.8xlarge     |     32 |        128 |             22 |      1.088  | >20%                    |                10 |              0.1088  |
| ap-northeast-1 | g4dn.8xlarge   |     32 |        128 |             16 |      1.115  | >20%                    |                10 |              0.1115  |
| eu-west-1      | g4dn.8xlarge   |     32 |        128 |             16 |      1.1155 | 15-20%                  |                10 |              0.11155 |
| ap-northeast-1 | g6.8xlarge     |     32 |        128 |             22 |      1.1238 | 5-10%                   |                10 |              0.11238 |
| eu-central-1   | g6e.4xlarge    |     16 |        128 |             45 |      1.1293 | >20%                    |                 5 |              0.22586 |
| ap-southeast-5 | g6.8xlarge     |     32 |        128 |             22 |      1.1419 | 10-15%                  |                10 |              0.11419 |
| eu-south-2     | g6e.4xlarge    |     16 |        128 |             45 |      1.1529 | >20%                    |                 5 |              0.23058 |
| ap-northeast-2 | g5.8xlarge     |     32 |        128 |             22 |      1.1575 | 5-10%                   |                10 |              0.11575 |
| ap-northeast-3 | g4dn.8xlarge   |     32 |        128 |             16 |      1.2002 | <5%                     |                10 |              0.12002 |
| us-west-2      | g6e.4xlarge    |     16 |        128 |             45 |      1.2252 | >20%                    |                 5 |              0.24504 |
| eu-west-1      | g5.8xlarge     |     32 |        128 |             22 |      1.2689 | 10-15%                  |                10 |              0.12689 |
| eu-central-1   | g6e.8xlarge    |     32 |        256 |             45 |      1.2893 | >20%                    |                10 |              0.12893 |
| ap-northeast-1 | g6e.2xlarge    |      8 |         64 |             45 |      1.2944 | 5-10%                   |                 2 |              0.6472  |
| ap-northeast-1 | g5.8xlarge     |     32 |        128 |             22 |      1.3543 | >20%                    |                10 |              0.13543 |
| ap-northeast-2 | g6e.4xlarge    |     16 |        128 |             45 |      1.3826 | 10-15%                  |                 5 |              0.27652 |
| me-central-1   | g5.2xlarge     |      8 |         32 |             22 |      1.4867 | <5%                     |                 2 |              0.74335 |
| eu-north-1     | g6e.8xlarge    |     32 |        256 |             45 |      1.6086 | >20%                    |                10 |              0.16086 |
| me-central-1   | g5.8xlarge     |     32 |        128 |             22 |      1.6196 | >20%                    |                10 |              0.16196 |
| eu-south-2     | g6e.8xlarge    |     32 |        256 |             45 |      1.6583 | >20%                    |                10 |              0.16583 |
| ap-northeast-1 | g6e.4xlarge    |     16 |        128 |             45 |      1.66   | 10-15%                  |                 5 |              0.332   |
| us-west-2      | g6e.8xlarge    |     32 |        256 |             45 |      1.7616 | >20%                    |                10 |              0.17616 |
| ap-northeast-2 | g6e.8xlarge    |     32 |        256 |             45 |      2.1019 | 10-15%                  |                10 |              0.21019 |
| ap-northeast-1 | g6e.8xlarge    |     32 |        256 |             45 |      2.4068 | 15-20%                  |                10 |              0.24068 |